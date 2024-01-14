import jwt from "jsonwebtoken";
import { compare } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

import { Credentials } from "@/lib/services/models";
import prisma from "@/lib/config/prisma";

const secretKey = process.env.NEXTAUTH_SECRET as string;

export const POST = async (request: NextRequest) => {
  const credentials: Credentials = await request.json();

  const user = await prisma.user.findUnique({
    where: {
      email: credentials.email,
    },
  });

  if (user) {
    const isPasswordValid = await compare(credentials.password, user.password);
    const token = jwt.sign({ id: user.id, email: user.email }, secretKey, {
      expiresIn: "2h",
    });
    // @ts-ignore
    delete user.password;

    if (isPasswordValid) return NextResponse.json({ user, token });
  }

  return NextResponse.json(null);
};

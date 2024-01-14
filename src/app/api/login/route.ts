import { compare } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/config/prisma";
import { Credentials } from "@/lib/services/models";

export const POST = async (request: NextRequest) => {
  const credentials: Credentials = await request.json();

  const user = await prisma.user.findUnique({
    where: {
      email: credentials.email,
    },
  });

  if (user) {
    const isPasswordValid = await compare(credentials.password, user.password);
    // @ts-ignore
    delete user.password;

    if (isPasswordValid) return NextResponse.json(user);
  }

  return NextResponse.json(null);
};

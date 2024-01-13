import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/config/prisma";
import { authOptions } from "@/lib/config/auth";

type RouteParams = {
  params: { id: string };
};

export const GET = async (_: NextRequest, { params }: RouteParams) => {
  if (!params.id) NextResponse.json("UserId is required.", { status: 400 });

  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(
      JSON.stringify({ status: "fail", message: "You are not logged in" }),
      {
        status: 401,
      }
    );
  }

  const mobilePlansByUser = await prisma.userPlan.findMany({
    where: { userId: Number(params.id) },
    include: { plan: true, country: true, consumption: true },
  });

  return NextResponse.json(mobilePlansByUser);
};

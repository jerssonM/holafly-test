import { PrismaClient } from "@prisma/client";
import { countries, plans, users, usersPlans } from "./data";

const prisma = new PrismaClient();

async function main() {
  const countriesCreation = countries.map((country) =>
    prisma.country.create({ data: country })
  );
  const plansCreation = plans.map((plan) => prisma.plan.create({ data: plan }));
  const usersCreation = users.map((user) => prisma.user.create({ data: user }));
  const userPlansCreation = usersPlans.map(({ consumption, ...userPlan }) =>
    prisma.userPlan.create({
      data: { ...userPlan, consumption: { create: consumption } },
    })
  );

  await Promise.all(countriesCreation);
  await Promise.all(plansCreation);
  await Promise.all(usersCreation);
  await Promise.all(userPlansCreation);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

-- CreateTable
CREATE TABLE "Country" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "flagUrl" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Plan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Consumption" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "totalConsumption" INTEGER NOT NULL,
    "UserPlanId" INTEGER
);

-- CreateTable
CREATE TABLE "UserPlan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status" TEXT NOT NULL,
    "dateStart" DATETIME NOT NULL,
    "dateEnd" DATETIME NOT NULL,
    "consumptionId" INTEGER,
    "userId" INTEGER NOT NULL,
    "countryId" INTEGER NOT NULL,
    "planId" INTEGER NOT NULL,
    CONSTRAINT "UserPlan_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserPlan_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserPlan_consumptionId_fkey" FOREIGN KEY ("consumptionId") REFERENCES "Consumption" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "UserPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Consumption_UserPlanId_key" ON "Consumption"("UserPlanId");

-- CreateIndex
CREATE UNIQUE INDEX "UserPlan_consumptionId_key" ON "UserPlan"("consumptionId");

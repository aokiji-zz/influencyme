/*
  Warnings:

  - You are about to drop the `Activitie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `File` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TelegramBot` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TelegramChat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsrAddress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsrDocument` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsrEmployee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsrMainAddress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsrMainDocument` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsrMainOrganizationAddress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsrMainOrganizationDocument` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsrMainOrganizationPhone` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsrMainPhone` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsrOrganization` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsrPhone` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsrUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "CampaignType" AS ENUM ('TRADITIONAL', 'INFLUENCE');

-- DropForeignKey
ALTER TABLE "TelegramChat" DROP CONSTRAINT "TelegramChat_telegramBotId_fkey";

-- DropForeignKey
ALTER TABLE "UsrEmployee" DROP CONSTRAINT "UsrEmployee_usrOrganizationId_fkey";

-- DropForeignKey
ALTER TABLE "UsrOrganization" DROP CONSTRAINT "UsrOrganization_activitieId_fkey";

-- DropForeignKey
ALTER TABLE "UsrOrganization" DROP CONSTRAINT "UsrOrganization_usrMainOrganizationAddressId_fkey";

-- DropForeignKey
ALTER TABLE "UsrOrganization" DROP CONSTRAINT "UsrOrganization_usrMainOrganizationDocumentId_fkey";

-- DropForeignKey
ALTER TABLE "UsrOrganization" DROP CONSTRAINT "UsrOrganization_usrMainOrganizationPhoneId_fkey";

-- DropTable
DROP TABLE "Activitie";

-- DropTable
DROP TABLE "File";

-- DropTable
DROP TABLE "TelegramBot";

-- DropTable
DROP TABLE "TelegramChat";

-- DropTable
DROP TABLE "UsrAddress";

-- DropTable
DROP TABLE "UsrDocument";

-- DropTable
DROP TABLE "UsrEmployee";

-- DropTable
DROP TABLE "UsrMainAddress";

-- DropTable
DROP TABLE "UsrMainDocument";

-- DropTable
DROP TABLE "UsrMainOrganizationAddress";

-- DropTable
DROP TABLE "UsrMainOrganizationDocument";

-- DropTable
DROP TABLE "UsrMainOrganizationPhone";

-- DropTable
DROP TABLE "UsrMainPhone";

-- DropTable
DROP TABLE "UsrOrganization";

-- DropTable
DROP TABLE "UsrPhone";

-- DropTable
DROP TABLE "UsrUser";

-- DropEnum
DROP TYPE "UserMode";

-- CreateTable
CREATE TABLE "Campaign" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "cost" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "workedHours" INTEGER NOT NULL,
    "type" "CampaignType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

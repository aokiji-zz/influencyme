/*
  Warnings:

  - You are about to drop the column `mainDocumentId` on the `UsrUser` table. All the data in the column will be lost.
  - You are about to drop the column `usrMainAddressId` on the `UsrUser` table. All the data in the column will be lost.
  - You are about to drop the column `usrMainPhoneId` on the `UsrUser` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "UsrAddress" DROP CONSTRAINT "UsrAddress_usrUserId_fkey";

-- DropForeignKey
ALTER TABLE "UsrDocument" DROP CONSTRAINT "UsrDocument_usrUserId_fkey";

-- DropForeignKey
ALTER TABLE "UsrEmployee" DROP CONSTRAINT "UsrEmployee_usrUserId_fkey";

-- DropForeignKey
ALTER TABLE "UsrPhone" DROP CONSTRAINT "UsrPhone_usrUserId_fkey";

-- DropForeignKey
ALTER TABLE "UsrUser" DROP CONSTRAINT "UsrUser_mainDocumentId_fkey";

-- DropForeignKey
ALTER TABLE "UsrUser" DROP CONSTRAINT "UsrUser_usrMainAddressId_fkey";

-- DropForeignKey
ALTER TABLE "UsrUser" DROP CONSTRAINT "UsrUser_usrMainPhoneId_fkey";

-- DropIndex
DROP INDEX "UsrUser_email_key";

-- DropIndex
DROP INDEX "UsrUser_mainDocumentId_key";

-- DropIndex
DROP INDEX "UsrUser_usrMainAddressId_key";

-- DropIndex
DROP INDEX "UsrUser_usrMainPhoneId_key";

-- AlterTable
ALTER TABLE "UsrUser" DROP COLUMN "mainDocumentId",
DROP COLUMN "usrMainAddressId",
DROP COLUMN "usrMainPhoneId";

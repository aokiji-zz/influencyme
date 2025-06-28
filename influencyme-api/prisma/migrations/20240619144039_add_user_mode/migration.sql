-- CreateEnum
CREATE TYPE "UserMode" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "UsrUser" ADD COLUMN     "mode" "UserMode" NOT NULL DEFAULT 'USER';

/*
  Warnings:

  - Made the column `paymentday` on table `Members` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Members" ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "paymentday" SET NOT NULL;

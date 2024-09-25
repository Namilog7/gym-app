/*
  Warnings:

  - The `payment` column on the `Members` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Payment" AS ENUM ('ABONADO', 'VENCIDO');

-- AlterTable
ALTER TABLE "Members" DROP COLUMN "payment",
ADD COLUMN     "payment" "Payment" NOT NULL DEFAULT 'ABONADO';

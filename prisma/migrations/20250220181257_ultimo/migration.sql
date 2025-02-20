/*
  Warnings:

  - Added the required column `telefono` to the `Members` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Members" ADD COLUMN     "telefono" INTEGER NOT NULL;

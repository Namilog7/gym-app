/*
  Warnings:

  - Added the required column `price` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Members" ADD COLUMN     "problems" VARCHAR(250);

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "price" INTEGER NOT NULL;

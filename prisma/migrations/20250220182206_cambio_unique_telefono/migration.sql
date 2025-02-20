/*
  Warnings:

  - A unique constraint covering the columns `[telefono]` on the table `Members` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Members_telefono_key" ON "Members"("telefono");

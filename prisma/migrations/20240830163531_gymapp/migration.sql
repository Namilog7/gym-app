-- CreateTable
CREATE TABLE "Members" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "lastname" VARCHAR(20) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "paymentday" TIMESTAMP(3),
    "payment" BOOLEAN,

    CONSTRAINT "Members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "data" VARCHAR(250) NOT NULL,
    "image" VARCHAR(250) NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Members_email_key" ON "Members"("email");

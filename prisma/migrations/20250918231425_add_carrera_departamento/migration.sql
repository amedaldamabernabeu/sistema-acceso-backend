/*
  Warnings:

  - You are about to drop the `Division` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Division";

-- CreateTable
CREATE TABLE "public"."CarreraDepartamento" (
    "id" SERIAL NOT NULL,
    "carreraId" BIGINT NOT NULL,
    "departamentoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CarreraDepartamento_pkey" PRIMARY KEY ("id")
);

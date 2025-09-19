-- CreateTable
CREATE TABLE "public"."Division" (
    "id" SERIAL NOT NULL,
    "clave_div" INTEGER NOT NULL,
    "nombre_div" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Division_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Division_clave_div_key" ON "public"."Division"("clave_div");

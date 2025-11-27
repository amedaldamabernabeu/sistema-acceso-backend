-- CreateTable
CREATE TABLE "public"."TipoIngresoDispositivo" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TipoIngresoDispositivo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DispositivoAcceso" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "tipoIngresoId" INTEGER NOT NULL,
    "tokenAcceso" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DispositivoAcceso_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DispositivoAcceso_tokenAcceso_key" ON "public"."DispositivoAcceso"("tokenAcceso");

-- AddForeignKey
ALTER TABLE "public"."DispositivoAcceso" ADD CONSTRAINT "DispositivoAcceso_tipoIngresoId_fkey" FOREIGN KEY ("tipoIngresoId") REFERENCES "public"."TipoIngresoDispositivo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

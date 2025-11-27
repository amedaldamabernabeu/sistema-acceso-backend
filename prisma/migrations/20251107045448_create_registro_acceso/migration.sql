-- CreateTable
CREATE TABLE "public"."RegistroAcceso" (
    "id" SERIAL NOT NULL,
    "codigoUsuario" TEXT NOT NULL,
    "modoAccesoId" INTEGER NOT NULL,
    "entrada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "salida" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RegistroAcceso_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."RegistroAcceso" ADD CONSTRAINT "RegistroAcceso_modoAccesoId_fkey" FOREIGN KEY ("modoAccesoId") REFERENCES "public"."AccessMode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

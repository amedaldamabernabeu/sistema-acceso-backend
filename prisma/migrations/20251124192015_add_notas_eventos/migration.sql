-- CreateTable
CREATE TABLE "public"."Evento" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fechaHora" TIMESTAMP(3),
    "ubicacion" TEXT,

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Nota" (
    "id" SERIAL NOT NULL,
    "asunto" TEXT,
    "registroAccesoId" INTEGER NOT NULL,
    "eventoId" INTEGER,

    CONSTRAINT "Nota_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Nota" ADD CONSTRAINT "Nota_registroAccesoId_fkey" FOREIGN KEY ("registroAccesoId") REFERENCES "public"."RegistroAcceso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Nota" ADD CONSTRAINT "Nota_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "public"."Evento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

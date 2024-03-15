-- CreateTable
CREATE TABLE "Frases" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "frase" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "urlImage" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Frases_frase_key" ON "Frases"("frase");

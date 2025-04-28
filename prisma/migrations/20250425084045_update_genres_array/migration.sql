/*
  Warnings:

  - The `genres` column on the `Musician` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Musician" DROP COLUMN "genres",
ADD COLUMN     "genres" TEXT[];

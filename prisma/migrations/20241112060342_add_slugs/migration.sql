/*
  Warnings:

  - Added the required column `slug` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `courses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `index` to the `lessons` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Language" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "lessons" ADD COLUMN     "index" INTEGER NOT NULL;

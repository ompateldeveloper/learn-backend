/*
  Warnings:

  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `fName` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lName` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fName" TEXT NOT NULL,
    "lName" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_User" ("fName", "id", "lName") SELECT "fName", "id", "lName" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

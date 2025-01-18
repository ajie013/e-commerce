/*
  Warnings:

  - You are about to drop the column `name` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `product` table. All the data in the column will be lost.
  - Added the required column `imageData` to the `userdetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `category` DROP COLUMN `name`,
    ADD COLUMN `categoryName` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `name`,
    ADD COLUMN `productName` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `userdetails` ADD COLUMN `imageData` VARCHAR(191) NOT NULL;

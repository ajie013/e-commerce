/*
  Warnings:

  - Added the required column `imageData` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `imageData` VARCHAR(191) NOT NULL;

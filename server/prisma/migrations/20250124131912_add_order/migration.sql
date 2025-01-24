-- CreateTable
CREATE TABLE `order` (
    `orderId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `orderDate` DATETIME(3) NOT NULL,
    `totalAmount` DECIMAL(14, 2) NOT NULL,
    `shippingCost` DECIMAL(14, 2) NOT NULL,
    `discount` DECIMAL(14, 2) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `paymentMethod` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`orderId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orderItems` (
    `orderItemId` VARCHAR(191) NOT NULL,
    `orderId` VARCHAR(191) NOT NULL,
    `producId` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `price` DECIMAL(14, 2) NOT NULL,

    PRIMARY KEY (`orderItemId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orderItems` ADD CONSTRAINT `orderItems_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `order`(`orderId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orderItems` ADD CONSTRAINT `orderItems_producId_fkey` FOREIGN KEY (`producId`) REFERENCES `product`(`productId`) ON DELETE RESTRICT ON UPDATE CASCADE;

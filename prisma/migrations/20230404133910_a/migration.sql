-- CreateTable
CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL,
    "orderName" TEXT NOT NULL,
    "filesFolderUrl" TEXT NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

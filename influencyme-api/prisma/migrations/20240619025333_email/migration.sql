-- CreateTable
CREATE TABLE "UsrUser" (
    "id" SERIAL NOT NULL,
    "from" TEXT,
    "name" TEXT,
    "socialName" TEXT,
    "isActive" BOOLEAN,
    "birthDate" TIMESTAMP(3),
    "gender" TEXT,
    "filiation1" TEXT,
    "filiation2" TEXT,
    "mailAddress" TEXT,
    "email" TEXT,
    "age" INTEGER,
    "mainDocumentId" INTEGER,
    "usrMainPhoneId" INTEGER,
    "usrMainAddressId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastLogin" TIMESTAMP(3),
    "password" TEXT,
    "step" TEXT,

    CONSTRAINT "UsrUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsrMainDocument" (
    "id" SERIAL NOT NULL,
    "complement" TEXT,
    "value" TEXT,

    CONSTRAINT "UsrMainDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsrMainPhone" (
    "id" SERIAL NOT NULL,
    "from" TEXT,
    "countryCode" INTEGER,
    "number" TEXT,

    CONSTRAINT "UsrMainPhone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsrMainAddress" (
    "id" SERIAL NOT NULL,
    "street" TEXT,
    "number" TEXT,
    "zipCode" TEXT,
    "complement" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "district" TEXT,

    CONSTRAINT "UsrMainAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsrAddress" (
    "id" SERIAL NOT NULL,
    "street" TEXT,
    "number" TEXT,
    "zipCode" TEXT,
    "complement" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "district" TEXT,
    "usrUserId" INTEGER,

    CONSTRAINT "UsrAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsrPhone" (
    "id" SERIAL NOT NULL,
    "countryCode" INTEGER,
    "number" TEXT,
    "usrUserId" INTEGER,

    CONSTRAINT "UsrPhone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsrDocument" (
    "id" SERIAL NOT NULL,
    "complement" TEXT,
    "value" TEXT,
    "usrUserId" INTEGER,

    CONSTRAINT "UsrDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsrEmployee" (
    "id" SERIAL NOT NULL,
    "position" TEXT,
    "usrUserId" INTEGER,
    "usrOrganizationId" INTEGER,

    CONSTRAINT "UsrEmployee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsrOrganization" (
    "id" SERIAL NOT NULL,
    "mailAddress" TEXT,
    "name" TEXT,
    "shortName" TEXT,
    "usrMainOrganizationAddressId" INTEGER,
    "usrMainOrganizationDocumentId" INTEGER,
    "usrMainOrganizationPhoneId" INTEGER,
    "activitieId" INTEGER,

    CONSTRAINT "UsrOrganization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsrMainOrganizationDocument" (
    "id" SERIAL NOT NULL,
    "complement" TEXT,
    "value" TEXT,

    CONSTRAINT "UsrMainOrganizationDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsrMainOrganizationAddress" (
    "id" SERIAL NOT NULL,
    "city" TEXT,
    "complement" TEXT,
    "district" TEXT,
    "country" TEXT,
    "number" TEXT,
    "state" TEXT,
    "street" TEXT,
    "type" TEXT,
    "zipCode" TEXT,

    CONSTRAINT "UsrMainOrganizationAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsrMainOrganizationPhone" (
    "id" SERIAL NOT NULL,
    "countryCode" INTEGER,
    "number" TEXT,
    "contactInfo" TEXT,
    "type" TEXT,

    CONSTRAINT "UsrMainOrganizationPhone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activitie" (
    "id" SERIAL NOT NULL,
    "code" TEXT,
    "description" TEXT,

    CONSTRAINT "Activitie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TelegramBot" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "name" TEXT,
    "isEnable" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "TelegramBot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TelegramChat" (
    "id" SERIAL NOT NULL,
    "chatId" TEXT NOT NULL,
    "name" TEXT,
    "telegramBotId" INTEGER NOT NULL,
    "isEnable" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "TelegramChat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UsrUser_email_key" ON "UsrUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UsrUser_mainDocumentId_key" ON "UsrUser"("mainDocumentId");

-- CreateIndex
CREATE UNIQUE INDEX "UsrUser_usrMainPhoneId_key" ON "UsrUser"("usrMainPhoneId");

-- CreateIndex
CREATE UNIQUE INDEX "UsrUser_usrMainAddressId_key" ON "UsrUser"("usrMainAddressId");

-- CreateIndex
CREATE UNIQUE INDEX "UsrOrganization_usrMainOrganizationAddressId_key" ON "UsrOrganization"("usrMainOrganizationAddressId");

-- CreateIndex
CREATE UNIQUE INDEX "UsrOrganization_usrMainOrganizationDocumentId_key" ON "UsrOrganization"("usrMainOrganizationDocumentId");

-- CreateIndex
CREATE UNIQUE INDEX "UsrOrganization_usrMainOrganizationPhoneId_key" ON "UsrOrganization"("usrMainOrganizationPhoneId");

-- AddForeignKey
ALTER TABLE "UsrUser" ADD CONSTRAINT "UsrUser_mainDocumentId_fkey" FOREIGN KEY ("mainDocumentId") REFERENCES "UsrMainDocument"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsrUser" ADD CONSTRAINT "UsrUser_usrMainPhoneId_fkey" FOREIGN KEY ("usrMainPhoneId") REFERENCES "UsrMainPhone"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsrUser" ADD CONSTRAINT "UsrUser_usrMainAddressId_fkey" FOREIGN KEY ("usrMainAddressId") REFERENCES "UsrMainAddress"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsrAddress" ADD CONSTRAINT "UsrAddress_usrUserId_fkey" FOREIGN KEY ("usrUserId") REFERENCES "UsrUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsrPhone" ADD CONSTRAINT "UsrPhone_usrUserId_fkey" FOREIGN KEY ("usrUserId") REFERENCES "UsrUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsrDocument" ADD CONSTRAINT "UsrDocument_usrUserId_fkey" FOREIGN KEY ("usrUserId") REFERENCES "UsrUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsrEmployee" ADD CONSTRAINT "UsrEmployee_usrOrganizationId_fkey" FOREIGN KEY ("usrOrganizationId") REFERENCES "UsrOrganization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsrEmployee" ADD CONSTRAINT "UsrEmployee_usrUserId_fkey" FOREIGN KEY ("usrUserId") REFERENCES "UsrUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsrOrganization" ADD CONSTRAINT "UsrOrganization_usrMainOrganizationAddressId_fkey" FOREIGN KEY ("usrMainOrganizationAddressId") REFERENCES "UsrMainOrganizationAddress"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsrOrganization" ADD CONSTRAINT "UsrOrganization_usrMainOrganizationDocumentId_fkey" FOREIGN KEY ("usrMainOrganizationDocumentId") REFERENCES "UsrMainOrganizationDocument"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsrOrganization" ADD CONSTRAINT "UsrOrganization_usrMainOrganizationPhoneId_fkey" FOREIGN KEY ("usrMainOrganizationPhoneId") REFERENCES "UsrMainOrganizationPhone"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsrOrganization" ADD CONSTRAINT "UsrOrganization_activitieId_fkey" FOREIGN KEY ("activitieId") REFERENCES "Activitie"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TelegramChat" ADD CONSTRAINT "TelegramChat_telegramBotId_fkey" FOREIGN KEY ("telegramBotId") REFERENCES "TelegramBot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

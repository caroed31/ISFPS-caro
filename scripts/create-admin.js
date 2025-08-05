const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@isfps.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'AdminPassword123!';

  // Check if admin already exists
  const existingAdmin = await prisma.user.findUnique({
    where: {
      email: adminEmail,
    },
  });

  if (existingAdmin) {
    console.log(`Admin account with email ${adminEmail} already exists.`);
    return;
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  // Create admin user
  const admin = await prisma.user.create({
    data: {
      name: 'Admin',
      firstname: 'FlirtyAI',
      email: adminEmail,
      password: hashedPassword,
      role: 'admin',
      plan: 'enterprise',
    },
  });

  console.log(`Admin account created with email: ${admin.email}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
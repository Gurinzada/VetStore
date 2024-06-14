import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ADD CATEGORIES AS SEED DATA
const seed = async () => {
  try {
    console.log("Checking for existing categories...");
    let ctgs = await prisma.category.findMany();
    if (!ctgs.length) {
      console.log("No categories found. Seeding initial categories...");
      // CREATE THE FOUR CATEGORIES
      await prisma.category.createMany({
        data: [
          { name: "Todos os serviços", price: 800.0 },
          { name: "Banho e Tosa", price: 150.0 },
          { name: "Passear", price: 50.0 },
          { name: "Diária", price: 350.0 },
          { name: "Adestramento", price: 120.0 },
          {name: "Vacinação", price: 70.0},
        ]
      });
      console.log("Categories seeded successfully.");
    } else {
      console.log("Categories already exist. Skipping seeding.");
    }
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
};

seed();

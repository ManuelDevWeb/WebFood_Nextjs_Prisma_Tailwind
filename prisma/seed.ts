import { PrismaClient } from "@prisma/client";

// Import data
import { categories } from "./data/categories";
import { products } from "./data/products";

const prisma = new PrismaClient();

const main=async():Promise<void>=>{
    try {
        // Add categories in category table
        await prisma.category.createMany({
            data: categories
        })
        // Add products in product table
        await prisma.product.createMany({
            data: products
        })
    } catch (error) {
        console.log(error)
    }
}

main();
import express from "express";
const router = express.Router();
import categoryModel from "../models/categoryModel.js";
import productModel from "../models/productModel.js";

router.get('', async (req, res) => {
    try {
     
      const categories = [
        { name: "Category 1", slug: "category-1" },
        { name: "Category 2", slug: "category-2" },
        
      ];
  
     
      const products = [
        {
          name: "Product 1",
          slug: "product-1",
          description: "Description for Product 1",
          price: 10.99,
          category: null, // Insert the correct category ObjectId here
          quantity: 100,
          shipping: true,
        },
        {
          name: "Product 2",
          slug: "product-2",
          description: "Description for Product 2",
          price: 19.99,
          category: null, 
          quantity: 50,
          shipping: false,
        },
       
      ];
  
   
      await categoryModel.deleteMany({});
      await productModel.deleteMany({});
  
     
      const insertedCategories = await categoryModel.insertMany(categories);
  
   
      products.forEach((product, index) => {
        product.category = insertedCategories[index]._id;
      });
  
   
      await productModel.insertMany(products);
  
      res.status(200).json({ message: "Database seeded successfully." });
    } catch (error) {
        console.log(error);
      res.status(500).json({ error: "Error seeding the database" });
    }
  });

  export default router;
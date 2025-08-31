import mongoose from "mongoose";
import Product from "./models/Product.js"; // Adjust path based on your project

mongoose.connect("mongodb://localhost:27017/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const products = [
  {
    name: "Apple iPhone 13",
    price: 999.99,
    category: "Smartphones",
    stock: 30,
    description: "Latest iPhone 13 with A15 Bionic chip.",
    image: "https://images.unsplash.com/photo-1604324131204-bf6608a79a91"  // Actual iPhone image
  },
  {
    name: "Samsung Galaxy S21",
    price: 799.99,
    category: "Smartphones",
    stock: 25,
    description: "Samsung flagship with high refresh rate display.",
    image: "https://images.unsplash.com/photo-1614140461119-76db8b8b3d34"  // Actual Galaxy image
  },
  {
    name: "Sony WH-1000XM4",
    price: 350.00,
    category: "Headphones",
    stock: 50,
    description: "Industry-leading noise-cancelling headphones.",
    image: "https://images.unsplash.com/photo-1614257787328-9390e83500f1"  // Sony headphones
  },
  {
    name: "Dell XPS 13",
    price: 1299.99,
    category: "Laptops",
    stock: 10,
    description: "Premium ultrabook with Intel i7 processor.",
    image: "https://images.unsplash.com/photo-1598324732274-d7b0222a05d3"  // Dell XPS laptop
  },
  {
    name: "JBL Flip 5",
    price: 89.99,
    category: "Speakers",
    stock: 40,
    description: "Portable Bluetooth speaker with bass boost.",
    image: "https://images.unsplash.com/photo-1577414881469-110b9335cdb6"  // JBL speaker
  },
  {
    name: "Canon EOS 90D",
    price: 1199.99,
    category: "Cameras",
    stock: 20,
    description: "Advanced DSLR camera with 32.5 MP sensor.",
    image: "https://images.unsplash.com/photo-1573187194204-5be38d27cae5"  // Canon EOS camera
  }
];

const seedDatabase = async () => {
  try {
    await Product.deleteMany({});
    console.log("Existing products cleared.");

    await Product.insertMany(products);
    console.log("Products added successfully!");

    mongoose.connection.close();
  } catch (error) {
    console.log("Error adding products:", error);
    mongoose.connection.close();
  }
};

seedDatabase();

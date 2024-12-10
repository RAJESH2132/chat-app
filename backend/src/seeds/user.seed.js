import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "isha.sharma@example.com",
    fullName: "Isha Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    email: "ananya.rai@example.com",
    fullName: "Ananya Rai",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    email: "priya.mehta@example.com",
    fullName: "Priya Mehta",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    email: "kavya.verma@example.com",
    fullName: "Kavya Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/91.jpg",
  },
  {
    email: "simran.kaur@example.com",
    fullName: "Simran Kaur",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    email: "neha.patel@example.com",
    fullName: "Neha Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/76.jpg",
  },
  {
    email: "tanvi.jain@example.com",
    fullName: "Tanvi Jain",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    email: "rhea.bhatt@example.com",
    fullName: "Rhea Bhatt",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/43.jpg",
  },

  // Male Users
  {
    email: "arjun.singh@example.com",
    fullName: "Arjun Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    email: "ravi.kumar@example.com",
    fullName: "Ravi Kumar",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    email: "amit.shah@example.com",
    fullName: "Amit Shah",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    email: "raj.malhotra@example.com",
    fullName: "Raj Malhotra",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    email: "veer.deshmukh@example.com",
    fullName: "Veer Deshmukh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/39.jpg",
  },
  {
    email: "akash.nair@example.com",
    fullName: "Akash Nair",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/69.jpg",
  },
  {
    email: "vikram.reddy@example.com",
    fullName: "Vikram Reddy",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/77.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();

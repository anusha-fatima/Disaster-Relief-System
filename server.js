import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";
import { createClient } from "@supabase/supabase-js";

dotenv.config(); // Load environment variables from .env

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;



const supabase = createClient(supabaseUrl, supabaseKey);

// Use memory storage for multer
const upload = multer({ storage: multer.memoryStorage() });

// Fetch all supplies
app.get("/api/supplies", async (req, res) => {
  try {
    const { data, error } = await supabase.from("supplies").select("*");
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new supply
app.post("/api/supplies", async (req, res) => {
  const { item, description } = req.body;
  try {
    const { data, error } = await supabase
      .from("supplies")
      .insert([{ item, description }]);
    if (error) throw error;
    res.json({ message: "Item added successfully", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Place an order with image upload to Supabase Storage
app.post("/api/order", upload.single("image"), async (req, res) => {
  const { name, email, city, address, emergency_type, item_name } = req.body;
  const imageFile = req.file;

  console.log("Received Order Data:", {
    name,
    email,
    city,
    address,
    emergency_type,
    item_name,
    image: imageFile ? imageFile.originalname : null
  });

  // Required fields validation
  if (!name || !email || !city || !address || !emergency_type || !item_name) {
    console.error("Missing required fields");
    return res.status(400).send("Missing required fields");
  }

  try {
    let imageUrl = null;

    // Upload image to Supabase Storage if provided
    if (imageFile) {
      const { data: fileData, error: fileError } = await supabase.storage
        .from("order-images") // Replace with your bucket name
        .upload(`orders/${Date.now()}-${imageFile.originalname}`, imageFile.buffer, {
          contentType: imageFile.mimetype,
        });
      if (fileError) throw fileError;

      // Get the public URL of the uploaded image
      const { data: urlData } = supabase.storage
        .from("order-images")
        .getPublicUrl(fileData.path);
      imageUrl = urlData.publicUrl;
    }

    // Insert the order into the database
    const { data, error } = await supabase.from("orders").insert([
      {
        name,
        email,
        city,
        address,
        emergency_type,
        item_name,
        image: imageUrl, // Store the image URL
      },
    ]);
    if (error) throw error;

    res.send("Order placed successfully");
  } catch (err) {
    console.error("Database Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Fetch all medical kits
app.get("/api/medical-kits", async (req, res) => {
  try {
    const { data, error } = await supabase.from("medical_kits").select("*");
    if (error) throw error;
    res.json(data);
  } catch (err) {
    console.error("Error fetching medical kits:", err);
    res.status(500).json({ error: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
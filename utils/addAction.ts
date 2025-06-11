"use server";

import { connectDB } from "@/app/api/db/connectDB";
import { error } from "console";
import cloudinary from "@/utils/cloudinary";
// Update the import path below if your Product model is located elsewhere
import Product from "@/app/api/models/product.model";

export async function addAction(formdata: FormData) {
  try {
    const image = formdata.get("image") as File;
    const name = formdata.get("name") as string;
    const price = formdata.get("price") as string;
    const link = formdata.get("link") as string;
    const description = formdata.get("description") as string;

    if (!image || !name || !price || !link || !description) {
      throw new Error("All fields are required");
      return {
        error: "All fields are required",
      };
    }

    await connectDB();

    // image storage
    const arrayBuffer = await image.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const imageResponse: any = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: "image",
            folder: "miniml",
          },
          async (error, result) => {
            if (error) {
              return reject(error.message);
            }
            return resolve(result);
          }
        )
        .end(buffer);
    });

    console.log("Image response:", imageResponse);

    // store in database
    await Product.create({
      image: imageResponse.secure_url,
      name,
      price,
      link,
      description,
    });

    return {
      success: "Product addeed successfully",
    };
  } catch (error) {
    return {
      error: "something went wrong, please try again" + error,
    };
  }
}

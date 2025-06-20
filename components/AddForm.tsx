"use client";

import { addAction } from "@/utils/addAction";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import { useState } from "react";
import Image from "next/image";

const AddForm = () => {
  const router = useRouter();
  const [imageURL, setImageURL] = useState("");

  async function clientAddAction(FormData: FormData) {
    const { error, success } = await addAction(FormData);

    if (error) {
      toast.error(error);
    }

    if (success) {
      toast.success(success);
      router.push("/");
      setImageURL("");
      // Reset the form fields
    }
  }
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileSize = file.size;
      if (Math.round(fileSize / 1024) > 1024) {
        toast.error("Image size should be less than 1mb");
      } else {
        setImageURL(URL.createObjectURL(file));
      }
    }
  };
  return (
    <form
      action={clientAddAction}
      className="w-full max-w-xl mx-auto flex flex-col justify-center items-center space-y-4 mt-3 md:mt-5"
    >
      {imageURL && (
        <Image
          src={imageURL}
          alt="product image"
          width={1000}
          height={1000}
          className="max-w-full max-h-72 object-cover object-center rounded-lg"
        />
      )}
      <div className="w-full flex flex-col">
        <label className="text-black">Product image :</label>
        <input
          type="file"
          accept="image/*"
          name="image"
          onChange={handleImageChange}
          className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
        />
      </div>

      <div className="flex flex-col w-full">
        <label className="text-black">Name :</label>
        <input
          type="text"
          name="name"
          placeholder="enter the product name"
          className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
        />
      </div>

      <div className="flex flex-col w-full">
        <label className="text-black">Price :</label>
        <input
          type="number"
          name="price"
          placeholder="enter the product price"
          className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
        />
      </div>

      <div className="flex flex-col w-full">
        <label className="text-black">Sellers name :</label>
        <input
          type="text"
          name="link"
          placeholder="Link to where buyers can find u"
          className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
        />
      </div>

      <div className="flex flex-col w-full">
        <label className="text-black">Description: </label>
        <textarea
          className="text-black w-full px-3 py-1.5 md:py-2 rounded-lg bg-white border border-gray-500"
          name="description"
          placeholder="Enter the product description"
          rows={4}
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-[#212529] text-white px-3 py-2 rounded-md cursor-pointer "
        >
          Add product
        </button>
      </div>
    </form>
  );
};

export default AddForm;

import AddForm from "@/components/AddForm";
import React from "react";

const AddProductPage = () => {
  return (
    <div className="px-4 md:px-12 bg-[#f8f9fa] pb-8">
      <h2 className="text-center font-semibold pt-8 text-xl md:text-2xl w-full mx-auto text-black  ">
        Add new product
      </h2>
      <AddForm />
    </div>
  );
};

export default AddProductPage;

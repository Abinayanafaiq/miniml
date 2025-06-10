import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-[70vh] md:min-h[60vh] lg:min-h-[90vh] flex flex-col md:flex-row justify-center items-center bg-white px-4 md:px-12 text-black">
      <div className="max-w-2xl">
        <h1 className="text-5xl pt-6 md:pt-0 md:text-7xl leading-tight font-semibold">
          Jual Akun ML Anti HB Garansi Selamanya
        </h1>
        <p className="text-[#495057] mt-4">
          Temukan akun favorit kamu, Mulai dari 200rb
        </p>
        <Link href="#product">
          <button className="mt-8 text-white px-3 py-2 rounded-md bg-[#212529] cursor-pointer">
            shop the collection
          </button>
        </Link>
      </div>
      <div>
        <Image src="/nasa.jpg" alt="img" width={900} height={500} />
      </div>
    </div>
  );
};

export default Hero;

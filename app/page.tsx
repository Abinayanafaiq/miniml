import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#f2ecec] text-black">
      <Hero />

      <h2 className="w-full text-center text-2xl md:text-4xl font-semibold py-6 text-black">
        All product
      </h2>
      <ProductList />
    </div>
  );
}

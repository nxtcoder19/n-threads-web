import Image from "next/image";
import { Header } from "./orgs/header";
import { ProductsCategory } from "./orgs/products-category";
import { BestDealDetails } from "./orgs/best-deal-details";
import { Footer } from "./orgs/footter";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="bg-blue-100">
        <div className="container mx-auto ">
          <BestDealDetails/>
          <ProductsCategory></ProductsCategory>
        </div>
      </div>
      <Footer/>
    </main>
  );
}

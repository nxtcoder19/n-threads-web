"use client"
import { Header } from "./orgs/header";
import { ProductsCategory } from "./orgs/products-category";
import { BestDealDetails } from "./orgs/best-deal-details";
import { Footer } from "./orgs/footter";
import {ProductProvider} from "@/app/providers/product-provider";


export default function Home() {
  return (
    <main>
      <Header />
      <div className="py-6">
        <div className="container mx-auto ">
          <BestDealDetails/>
            <ProductProvider>
                <ProductsCategory></ProductsCategory>
            </ProductProvider>
        </div>
      </div>
      <Footer/>
    </main>
  );
}

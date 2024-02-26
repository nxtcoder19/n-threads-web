"use client"
import { Header } from "./orgs/header";
import { ProductsCategory } from "./orgs/products-category";
import { BestDealDetails } from "./orgs/best-deal-details";
import { Footer } from "./orgs/footter";
import {ProductCategoryProvider} from "@/app/providers/product-provider";


export default function Home() {
  return (
    <main>
      <Header />
      <div className="bg-blue-100">
        <div className="container mx-auto ">
          <BestDealDetails/>
            <ProductCategoryProvider>
                <ProductsCategory></ProductsCategory>
            </ProductCategoryProvider>
        </div>
      </div>
      <Footer/>
    </main>
  );
}

"use client"
// import { Header } from "./orgs/header";
import { BestDealDetails } from "./orgs/best-deal-details";
import { Footer } from "./orgs/footter";
import {ProductCategoryProvider} from "@/app/providers/product-provider";
import {NavbarWithMegaMenu} from "@/app/orgs/navbar";
import {ProductCategory} from "@/app/molecule/product-category";
import {ProductApiProvider} from "@/app/api/product-api-provider";
import {ApiProvider} from "@/app/api/api-provider";
import {AuthProvider} from "@/app/providers/auth-provider";


export default function Home() {
  return (
    <main>
      <ApiProvider>
          <AuthProvider>
              <NavbarWithMegaMenu/>
              <div className="py-6">
                  <div className="container mx-auto ">
                      <BestDealDetails/>
                      <ProductCategoryProvider>
                          <ProductCategory/>
                      </ProductCategoryProvider>
                  </div>
              </div>
              <Footer/>
          </AuthProvider>
      </ApiProvider>
    </main>
  );
}


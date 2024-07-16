"use client";
import {MyAccountResource} from "@/app/route/my-account/component/my-account-resource";
import {NavbarWithMegaMenu} from "@/app/orgs/navbar";
import {ApiProvider} from "@/app/api/api-provider";
import {AuthProvider} from "@/app/providers/auth-provider";
import {AddressItemProvider} from "@/app/providers/address-item-provider";

const MyAccountPage = () => {
  return (
       <ApiProvider>
           <AuthProvider>
               <NavbarWithMegaMenu/>
               <div className="container mx-auto">
                   <AddressItemProvider>
                       <MyAccountResource/>
                   </AddressItemProvider>
               </div>
           </AuthProvider>
       </ApiProvider>
  );
};

export default MyAccountPage;
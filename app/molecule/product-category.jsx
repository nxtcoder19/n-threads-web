import React, {useEffect} from "react";
import {RoutePath} from "@/app/common/common";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";
import {useProductCategory} from "@/app/providers/product-provider";

export const ProductCategory = ({ categoryDetails }) => {
  // const { categoryDetails } = props;

    const {productCategoriesId, productCategoriesData, selectedProductCategoryId, setSelectedProductCategoryId} = useProductCategory();


  return (
    <div className="lg:pt-12">
      <div className="text-xl mb-5 font-semibold hover:text-blue-500">
        Top Deals :{" "}
      </div>
      <div className="-m-1 flex flex-wrap gap-8 md:-m-2">
        {productCategoriesId?.map((productCategoryId) => (
            <Card
                onClick={() => {
                    // setSelectedProductCategoryId(productCategoryId);
                    // window.location.href = RoutePath.productList
                    window.location.href = `/route/product-category/${productCategoryId}`
                }}
                key={productCategoryId}
                className="w-72">
                <CardHeader floated={false} >
                    <img src={productCategoriesData[productCategoryId].imageUrl} alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography color="gray" className="mt-1 font-normal">
                        {productCategoriesData[productCategoryId].title}
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal font-bold">
                        under Rs 899
                    </Typography>
                </CardBody>

            </Card>
          // <div
          //   onClick={() => {
          //       window.location.href = RoutePath.productList
          //   }}
          //   key={index}
          //   className="sm:w-1/2 md:w-1/3 lg:w-1/4 md:p-2"
          // >
          //   <div>
          //     <img
          //       className="h-full rounded-lg shadow-md"
          //       src={productCategoriesData[pro].img}
          //       alt={`Image ${index}`}
          //     />
          //
          //   </div>
          //   <div className="flex justify-between">
          //       <div>{category.title}</div>
          //       <div className="text-bold">From Rs 499</div>
          //     </div>
          // </div>
        ))}
      </div>
    </div>
  );
};

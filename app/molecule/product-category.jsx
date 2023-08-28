import React from "react";

export const ProductCategory = ({ categoryDetails }) => {
  // const { categoryDetails } = props;

  return (
    <div className="lg:pt-12">
      <div className="text-xl mb-5 font-semibold hover:text-blue-500">
        Product Category :{" "}
        {/* <a
          href="https://www.cluemediator.com"
          target="_blank"
          className="text-blue-500 hover:underline"
          rel="noopener noreferrer"
        >
          Clue Mediator
        </a> */}
      </div>
      <div className="-m-1 flex flex-wrap md:-m-2">
        {categoryDetails.map((category, index) => (
          <div
            key={index}
            className="sm:w-1/2 md:w-1/3 lg:w-1/4 md:p-2"
          >
            <div>
              <img
                className="h-full rounded-lg shadow-md"
                src={category.img}
                alt={`Image ${index}`}
              />
              
            </div>
            <div className="flex justify-between">
                <div>{category.title}</div>
                <div className="text-bold">From Rs 499</div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

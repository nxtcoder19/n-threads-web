import React from 'react';

export const ProductCategory = (props) => {
    const { images } = props;

    return (
        <div className="px-5 py-2 lg:px-32 lg:pt-24">
            <div className="text-xl mb-5 font-semibold">
                Product Category -{' '}
                <a
                    href="https://www.cluemediator.com"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                    rel="noopener noreferrer"
                >
                    Clue Mediator
                </a>
            </div>
            <div className="-m-1 flex flex-wrap md:-m-2">
                {images.map((image, index) => (
                    <div key={index} className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2">
                        <img
                            className="block h-full object-cover object-center rounded-lg shadow-md"
                            src={image}
                            alt={`Image ${index}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

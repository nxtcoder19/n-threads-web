import { ImageCarouselDetails } from "../molecule/image-carousel";


export const BestDealDetails = () => {
  const carouselImages = [
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(1).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(2).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(3).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(4).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(5).webp",
  ];

  return (
    <div>
      <ImageCarouselDetails
        carouselImages={carouselImages}
      ></ImageCarouselDetails>
    </div>
  );
};

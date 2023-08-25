import second, { ProductCategory } from '../molecule/product-category'

export const ProductsCategory = () => {
    const images = [
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(1).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(2).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(3).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(4).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(5).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(6).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(7).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(8).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(9).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(10).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(11).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(12).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(13).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(14).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(15).webp",
      ]
    return (
        <div>
            <ProductCategory images = {images}></ProductCategory>
        </div>
    )
}
import product_01_image_01 from '../images/products/product-01 (1).jpg';
import product_01_image_02 from '../images/products/product-01 (2).jpg';
// import product_01_image_03 from '../images/products/product-01 (3).jpg';

import product_02_image_01 from '../images/products/product-02 (1).jpg';
import product_02_image_02 from '../images/products/product-02 (2).jpg';

import product_03_image_01 from '../images/products/product-03 (1).jpg';
import product_03_image_02 from '../images/products/product-03 (2).jpg';

import product_04_image_01 from '../images/products/product-04 (1).jpg';
import product_04_image_02 from '../images/products/product-04 (2).jpg';

import product_05_image_01 from '../images/products/product-05 (1).jpg';
import product_05_image_02 from '../images/products/product-05 (2).jpg';

import product_06_image_01 from '../images/products/product-06 (1).jpg';
import product_06_image_02 from '../images/products/product-06 (2).jpg';

import product_07_image_01 from '../images/products/product-07 (1).jpg';
import product_07_image_02 from '../images/products/product-07 (2).jpg';

import product_08_image_01 from '../images/products/product-08 (1).jpg';
import product_08_image_02 from '../images/products/product-08 (2).jpg';

import product_09_image_01 from '../images/products/product-09 (1).jpg';
import product_09_image_02 from '../images/products/product-09 (2).jpg';

import product_10_image_01 from '../images/products/product-10 (1).jpg';
import product_10_image_02 from '../images/products/product-10 (2).jpg';

import product_11_image_01 from '../images/products/product-11 (1).jpg';
import product_11_image_02 from '../images/products/product-11 (2).jpg';

import product_12_image_01 from '../images/products/product-12 (1).jpg';
import product_12_image_02 from '../images/products/product-12 (2).jpg';

const products = [
   {
    title: "Dinosaur T-shirt 01",
    price: 18900,
    image01: product_01_image_01,
    image02: product_01_image_02,
    categorySlug: "t-shirts", 
    colors: ["white", "red", "orange"],
    slug: "dinosaur-tshirt-01",
    size: ["s", "m", "l", "xl"], 
    description: "A classic crew neck t-shirt featuring a fun dinosaur design. Made from soft, breathable cotton for all-day comfort. Perfect for casual wear."
  },
  {
    title: "Dinosaur T-shirt 02",
    price: 15900,
    image01: product_02_image_01,
    image02: product_02_image_02,
    categorySlug: "t-shirts",
    colors: ["white", "red", "blue"],
    slug: "dinosaur-tshirt-02",
    size: ["s", "m"],
    description: "A stylish and comfortable t-shirt with a unique dinosaur graphic. Made from high-quality cotton."
  },
  {
    title: "Dinosaur T-shirt 03",
    price: 19000,
    image01: product_03_image_01,
    image02: product_03_image_02,
    categorySlug: "t-shirts",
    colors: ["white", "orange", "yellow"],
    slug: "dinosaur-tshirt-03",
    size: ["m"],
    description: "A bold and eye-catching dinosaur t-shirt. Perfect for expressing your unique style."
  },
  {
    title: "Polo Shirt 04",
    price: 19400,
    image01: product_04_image_01,
    image02: product_04_image_02,
    categorySlug: "t-shirts",
    colors: ["white","red", "orange", "blue"],
    slug: "polo-shirt-04",
    size: ["xl"],
    description: "Classic polo shirt featuring a comfortable fit and stylish design. Crafted from premium cotton for breathability and durability."
  },
  {
    title: "Polo Shirt 05",
    price: 18300,
    image01: product_05_image_01,
    image02: product_05_image_02,
    categorySlug: "t-shirts",
    colors: ["white", "pink"],
    slug: "polo-shirt-05",
    size: ["xxl"],
    description: "Elevate your wardrobe with this versatile polo shirt. Featuring a soft collar and a relaxed fit."
  },
  {
    title: "Polo Shirt 06",
    price: 16200,
    image01: product_06_image_01,
    image02: product_06_image_02,
    categorySlug: "t-shirts",
    colors: ["black"],
    slug: "polo-shirt-06",
    size: ["s", "m", "xl"],
    description: "A timeless black polo shirt for any occasion. Crafted from high-quality cotton for a luxurious feel."
  },
  {
    title: "Checkered Shirt 07",
    price: 17600,
    image01: product_07_image_01,
    image02: product_07_image_02,
    categorySlug: "shirts",
    colors: ["white", "red", "orange", "blue"],
    slug: "checked-shirt-07",
    size: ["l", "xl"],
    description: "Classic checkered shirt with a comfortable fit and stylish design. Perfect for both casual and formal occasions."
  },
  {
    title: "Long-Sleeve Shirt 08",
    price: 15500,
    image01: product_08_image_01,
    image02: product_08_image_02,
    categorySlug: "shirts",
    colors: ["white", "red", "black"],
    slug: "long-sleeve-shirt-08",
    size: ["s", "m", "xl"],
    description: "Versatile long-sleeve shirt in a variety of colors. Made from soft, breathable fabric for all-day comfort."
  },
  {
    title: "Long-Sleeve Shirt 09",
    price: 14500,
    image01: product_09_image_01,
    image02: product_09_image_02,
    categorySlug: "shirts",
    colors: ["white", "blue"],
    slug: "long-sleeve-shirt-09",
    size: ["m"],
    description: "A timeless long-sleeve shirt that pairs well with jeans or chinos. Crafted from high-quality cotton for a luxurious feel."
  },
  {
    title: "Stylish Jeans 10",
    price: 19900,
    image01: product_10_image_01,
    image02: product_10_image_02,
    categorySlug: "jeans",
    colors: ["blue", "black"],
    slug: "stylish-jeans-10",
    size: ["l"],
    description: "A basic crew-neck t-shirt is a wardrobe staple that can be styled in countless ways. Our women's cotton crew-neck tees are versatile and comfortable, perfect for everyday wear. With their simple design and soft fabric, they pair effortlessly with any outfit. The neutral colors and relaxed fit make them a must-have for any closet."
  },
  {
    title: "Classic Jeans 11",
    price: 21200,
    image01: product_11_image_01,
    image02: product_11_image_02,
    categorySlug: "jeans",
    colors: ["blue", "black"],
    slug: "classic-jeans-11",
    size: ["s", "m", "xl"],
    description: "A timeless pair of jeans that will never go out of style. Crafted from premium denim with a comfortable fit and classic details."
  },
  {
    title: "Distressed Jeans 12",
    price: 19200,
    image01: product_12_image_01,
    image02: product_12_image_02,
    categorySlug: "jeans",
    colors: ["blue"],
    slug: "distressed-jeans-12",
    size: ["s", "m", "xl"],
    description: "Elevate your everyday style with our classic crew-neck t-shirt. Crafted from soft, breathable cotton, this versatile piece is a wardrobe essential. Its simple yet stylish design makes it easy to pair with jeans, skirts, or shorts for a casual, effortless look. The neutral color palette ensures it complements any outfit."
  },
  {
    title: "Dinosaur Graphic Tee 13",
    price: 18900,
    image01: product_01_image_01,
    image02: product_01_image_02,
    categorySlug: "t-shirts",
    colors: ["white", "red"],
    slug: "dinosaur-graphic-tee-13",
    size: ["s", "m", "xl"],
    description: "Roar into style with our Dinosaur Graphic Tee. Featuring a bold dinosaur design, this soft cotton tee is perfect for dino lovers of all ages."
  },
  {
    title: "Retro Dino Tee 14",
    price: 15600,
    image01: product_02_image_01,
    image02: product_02_image_02,
    categorySlug: "t-shirts",
    colors: ["white", "blue"],
    slug: "retro-dino-tee-14",
    size: ["s", "m"],
    description: "Channel your inner paleontologist with our retro dinosaur tee. The vintage-inspired graphic and comfortable fit make it a must-have."
  },
  {
    title: "T-Rex Power Tee 15",
    price: 17000,
    image01: product_03_image_01,
    image02: product_03_image_02,
    categorySlug: "t-shirts",
    colors: ["red", "blue"],
    slug: "t-rex-power-tee-15",
    size: ["xl"],
    description: "Unleash your inner dinosaur with our T-Rex Power Tee. The fierce graphic and comfortable fit make it perfect for everyday wear."
  },
  {
    title: "Long-Sleeve Dress Shirt 16",
    price: 19700,
    image01: product_08_image_01,
    image02: product_08_image_02,
    categorySlug: "shirts",
    colors: ["blue", "black"],
    slug: "long-sleeve-dress-shirt-16",
    size: ["m", "xl"],
    description: "Elevate your wardrobe with this classic long-sleeve dress shirt. Crafted from premium cotton, it features a tailored fit and a timeless design."
  },
  {
    title: "Casual Long-Sleeve Shirt 17",
    price: 18100,
    image01: product_09_image_01,
    image02: product_09_image_02,
    categorySlug: "shirts",
    colors: ["white", "blue"],
    slug: "casual-long-sleeve-shirt-17",
    size: ["s", "l", "xl"],
    description: "Relaxed and stylish, this long-sleeve shirt is perfect for everyday wear. Made from soft, breathable fabric for all-day comfort."
  },
  {
    title: "Distressed Denim Jeans 18",
    price: 22300,
    image01: product_10_image_01,
    image02: product_10_image_02,
    categorySlug: "jeans",
    colors: ["blue", "black"],
    slug: "distressed-denim-jeans-18",
    size: ["s", "m", "l", "xl"],
    description: "Add a touch of edge to your outfit with these distressed denim jeans. Featuring a slim fit and distressed these jeans are perfect for a casual look."
  },
    // 18 products
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    // console.log(res)
    // console.log('sorted')
    // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo
}

export default productData
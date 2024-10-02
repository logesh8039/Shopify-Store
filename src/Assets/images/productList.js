import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';
import image5 from './5.jpg';
import image6 from './6.jpg';
import image7 from './7.jpg';
import image8 from './8.jpg';
import image9 from './9.jpg';
import image10 from './10.jpg';
import image11 from './11.jpg';
import image12 from './12.jpg';
import image13 from './13.jpg';
import image14 from './14.jpg';
import image15 from './15.jpg';
import image16 from './16.jpg';
import image17 from './17.jpg';
import image18 from './18.jpg';
import image19 from './19.jpg';
import image20 from './20.jpg';

const products = [
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "discount": 15,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": image1,
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts",
    "price": 22.3,
    "discount": 25,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, lightweight & soft fabric for breathable and comfortable wearing.",
    "category": "men's clothing",
    "image": image2,
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "discount": 50,
    "description": "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.",
    "category": "men's clothing",
    "image": image3,
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "discount": 35,
    "description": "The color could be slightly different between on the screen and in practice.",
    "category": "men's clothing",
    "image": image4,
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  },
  {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "discount": 45,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl.",
    "category": "jewelery",
    "image": image5,
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  },
  {
    "id": 6,
    "title": "Solid Gold Petite Micropave",
    "price": 168,
    "discount": 30,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": image6,
    "rating": {
      "rate": 3.9,
      "count": 70
    }
  },
  {
    "id": 7,
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "discount": 20,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.",
    "category": "jewelery",
    "image": image7,
    "rating": {
      "rate": 3,
      "count": 400
    }
  },
  {
    "id": 8,
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
    "discount": 25,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings.",
    "category": "jewelery",
    "image": image8,
    "rating": {
      "rate": 1.9,
      "count": 100
    }
  },
  {
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    "price": 64,
    "discount": 35,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance.",
    "category": "electronics",
    "image": image9,
    "rating": {
      "rate": 3.3,
      "count": 203
    }
  },
  {
    "id": 10,
    "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price": 109,
    "discount": 65,
    "description": "Easy upgrade for faster boot up, shutdown, application load and response.",
    "category": "electronics",
    "image": image10,
    "rating": {
      "rate": 2.9,
      "count": 470
    }
  },
  {
    "id": 11,
    "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    "price": 109,
    "discount": 45,
    "description": "3D NAND flash are applied to deliver high transfer speeds.",
    "category": "electronics",
    "image": image11,
    "rating": {
      "rate": 4.8,
      "count": 319
    }
  },
  {
    "id": 12,
    "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    "price": 114,
    "discount": 55,
    "description": "Expand your PS4 gaming experience, Play anywhere.",
    "category": "electronics",
    "image": image12,
    "rating": {
      "rate": 4.8,
      "count": 400
    }
  },
  {
    "id": 13,
    "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    "price": 599,
    "discount": 35,
    "description": "21.5 inches Full HD (1920 x 1080) widescreen IPS display.",
    "category": "electronics",
    "image": image13,
    "rating": {
      "rate": 2.9,
      "count": 250
    }
  },
  {
    "id": 14,
    "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
    "price": 999.99,
    "discount": 25,
    "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR.",
    "category": "electronics",
    "image": image14,
    "rating": {
      "rate": 2.2,
      "count": 140
    }
  },
  {
    "id": 15,
    "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "price": 56.99,
    "discount": 40,
    "description": "Note: The Jackets is US standard size, Please choose size as your usual wear.",
    "category": "women's clothing",
    "image": image15,
    "rating": {
      "rate": 2.6,
      "count": 235
    }
  },
  {
    "id": 16,
    "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    "price": 29.95,
    "discount": 60,
    "description": "Faux leather material for style and comfort.",
    "category": "women's clothing",
    "image": image16,
    "rating": {
      "rate": 2.9,
      "count": 340
    }
  },
  {
    "id": 17,
    "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "price": 39.99,
    "discount": 20,
    "description": "Lightweight perfect for trip or casual wear.",
    "category": "women's clothing",
    "image": image17,
    "rating": {
      "rate": 3.8,
      "count": 679
    }
  },
  {
    "id": 18,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V",
    "price": 9.85,
    "discount": 45,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported.",
    "category": "women's clothing",
    "image": image18,
    "rating": {
      "rate": 4.2,
      "count": 900
    }
  },
  {
    "id": 19,
    "title": "Opna Women's Short Sleeve Moisture",
    "price": 13.99,
    "discount": 15,
    "description": "100% Polyester, lightweight fabric for comfortable wearing.",
    "category": "women's clothing",
    "image": image19,
    "rating": {
      "rate": 4.6,
      "count": 120
    }
  },
  {
    "id": 20,
    "title": "DANVOUY Women’s Baby Doll",
    "price": 25.99,
    "discount": 35,
    "description": "Comfortable and stylish baby doll nightwear.",
    "category": "women's clothing",
    "image": image20,
    "rating": {
      "rate": 4.1,
      "count": 150
    }
  },
];

export default products;

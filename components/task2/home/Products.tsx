import ProductCard from '../ProductCard';

const products = [
  {
    id: 1,
    name: 'Basic Cotton T-Shirt',
    price: 25.0,
    currency: 'EGP',
    image:
      'https://knowledgecottonapparel.com/cdn/shop/products/Regular_fit_Basic_tee-T-shirts-1010113-1010_Bright_White-1_800x.jpg?v=1701694975',
    category: {
      title: 'Live Auction',
      color: '#D20653'
    },
    favorite: false,
    lotDays: 0,
    lotHours: 3,
    lotMinutes: 10
  },
  {
    id: 2,
    name: 'High-Performance Laptop',
    price: 800.0,
    currency: 'EGP',
    image: 'https://cdn.trendhunterstatic.com/thumbs/highperformance-gaming-laptop.jpeg?auto=webp',
    category: {
      title: 'Hot Sale',
      color: '#FF951D'
    },
    favorite: true,
    lotDays: 1,
    lotHours: 12,
    lotMinutes: 30
  },
  {
    id: 3,
    name: 'Ceramic Coffee Mug with Inspirational Quote',
    price: 10.0,
    currency: 'EGP',
    image: 'https://m.media-amazon.com/images/I/61GYs3j0peL._AC_UF894,1000_QL80_.jpg',
    category: {
      title: 'Live Auction',
      color: '#D20653'
    },
    favorite: false,
    lotDays: 3,
    lotHours: 0,
    lotMinutes: 0
  },
  {
    id: 4,
    name: 'Hardcover Fantasy Adventure Novel',
    price: 15.0,
    currency: 'EGP',
    image: 'https://i.ebayimg.com/images/g/VCQAAOSwaWpjNZeW/s-l1200.jpg',
    category: {
      title: 'Live Auction',
      color: '#D20653'
    },
    favorite: true,
    lotDays: 0,
    lotHours: 20,
    lotMinutes: 0
  },
  {
    id: 5,
    name: 'Wireless Noise-Cancelling Headphones',
    price: 50.0,
    currency: 'EGP',
    image:
      'https://cdn.thewirecutter.com/wp-content/media/2023/09/noise-cancelling-headphone-2048px-0853-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024',
    category: {
      title: 'Hot Sale',
      color: '#FF951D'
    },
    favorite: false,
    lotDays: 2,
    lotHours: 10,
    lotMinutes: 15
  },
  {
    id: 6,
    name: 'Classic Wristwatch with Leather Strap',
    price: 200.0,
    currency: 'EGP',
    image: 'https://i.pinimg.com/736x/20/96/36/209636194afd194d9b93fff12dea3e22.jpg',
    category: {
      title: 'Live Auction',
      color: '#D20653'
    },
    favorite: true,
    lotDays: 0,
    lotHours: 5,
    lotMinutes: 0
  },
  {
    id: 7,
    name: 'Limited Edition Running Sneakers',
    price: 75.0,
    currency: 'EGP',
    image:
      'https://s3.amazonaws.com/images.gearjunkie.com/uploads/2019/10/NB_NYCM_1080-side.edit_.jpg',
    category: {
      title: 'Hot Sale',
      color: '#FF951D'
    },
    favorite: false,
    lotDays: 0,
    lotHours: 18,
    lotMinutes: 45
  }
];

export default function Products() {
  return (
    <div>
      <h1 className="pt-3 text-xl font-bold md:text-2xl">
        Products <span className="text-sm font-light text-gray-500">( {products.length} )</span>
      </h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

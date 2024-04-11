import { Product } from '@/@types/database';
import Image from 'next/image';

// Icons
import heartOutlineIcon from '@/public/icons/heart-outline.svg';
import heartFilledIcon from '@/public/icons/heart-filled.svg';

const LotBadge = ({ title, value }: { title: string; value: number }) => (
  <span className="mr-1 rounded-full bg-secondary-50 px-2 py-1 text-xs font-bold text-secondary-400 md:mr-2 md:px-4 md:py-1.5 md:text-base">
    {value} <span className="text-[10px] font-normal md:text-xs">{title}</span>
  </span>
);

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex space-x-3 py-3 md:space-x-4 md:p-3">
      <div
        className="relative h-[4rem] w-[6rem] flex-shrink-0 overflow-hidden rounded-xl bg-gray-400 bg-cover md:h-[7rem] md:w-[9rem] md:rounded-3xl"
        style={{
          backgroundImage: `url(${product.image})`
        }}
      >
        <div
          className="absolute bottom-0 right-0 rounded-tl-full py-1 pl-3 pr-2 text-[10px] text-white md:py-3 md:pl-6 md:pr-4 md:text-xs"
          style={{ backgroundColor: product.category.color }}
        >
          <span>{product.category.title}</span>
        </div>
      </div>
      <div className="flex grow flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-sm text-black md:text-base">{product.name}</h3>
          <Image
            src={product.favorite ? heartFilledIcon : heartOutlineIcon}
            alt="Favorite icon"
            className="hidden md:block"
          />
        </div>
        <p className="mt-1 text-sm text-gray-500 md:mt-1.5">
          Starting Price{' '}
          <span className="text-base font-bold text-black md:text-xl">
            {product.price} {product.currency}
          </span>
        </p>
        <p className="mt-1 text-sm text-gray-500 md:mt-3">
          <span className="mb-2 block md:mb-0 md:inline">Lot Starts In</span>{' '}
          <LotBadge title="Days" value={product.lotDays} />
          <LotBadge title="Hours" value={product.lotHours} />
          <LotBadge title="Minutes" value={product.lotMinutes} />
        </p>
      </div>
    </div>
  );
}

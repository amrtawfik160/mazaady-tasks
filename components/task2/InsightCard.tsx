import Image from 'next/image';

export default function InsightCard({
  image,
  name,
  value,
  count
}: {
  image: any;
  name: string;
  value: number;
  count?: number;
}) {
  return (
    <div className="flex items-center space-x-1.5 rounded-2xl bg-secondary-50 px-3 py-2.5">
      <Image src={image} alt={name} className="md:h-5.5 md:w-5.5 h-4 w-4" />
      <div>
        <span className="block  text-sm font-bold text-black">
          {value} {count && <span className="text-xs font-light text-gray-400">( {count} )</span>}
        </span>
        <span className="block text-xs text-secondary-400">{name}</span>
      </div>
    </div>
  );
}

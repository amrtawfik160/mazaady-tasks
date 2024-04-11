import { cn } from '@/lib/utils';

export default function SectionContainer({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn('w-full rounded-2xl bg-white p-3.5 md:p-5', className)}>
      {children}
    </section>
  );
}

'use client';

import { cn } from '@/lib/utils';
import logo from '@/public/icons/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import avatar from '@/public/img/avatar.png';

// Icons
import searchIcon from '@/public/icons/search.svg';
import notificationIcon from '@/public/icons/notification.svg';
import globalIcon from '@/public/icons/global.svg';
import addCircleIcon from '@/public/icons/add-circle.svg';
import MobileMenu from './MobileMenu';

const navLinks = [
  { href: '/task2', label: 'Home' },
  { href: '#', label: 'Blog' },
  { href: '#', label: 'Gifts' }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-center bg-white">
      <nav className="flex w-full max-w-7xl items-center justify-between px-5" aria-label="Navbar">
        <div className="flex space-x-8">
          <div className="flex items-center">
            <div className="block flex-none md:hidden">
              <MobileMenu menu={navLinks} />
            </div>
            <Link href={'/'}>
              <Image
                src={logo}
                className="h-[3.7rem] object-contain py-3 md:h-auto"
                alt="Mazaady logo"
                unoptimized
              />
            </Link>
          </div>
          <ul className="hidden space-x-8 lg:flex">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={label} className="group flex flex-col items-center justify-end">
                  <Link
                    href={href}
                    className={cn(
                      'mb-[15px]',
                      isActive ? 'font-bold text-primary-700' : 'text-gray-400'
                    )}
                  >
                    {label}
                  </Link>
                  <div
                    className={cn(
                      'h-[6px] w-[37px] rounded-t-full bg-primary-700 transition-all duration-300 ease-in-out group-hover:scale-100',
                      isActive ? 'scale-100' : 'scale-0'
                    )}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center space-x-5">
          <button className="hover:opacity-70">
            <Image src={searchIcon} alt="Search icon" className="h-6 w-6 cursor-pointer" />
          </button>
          <div className="hidden h-[35px] w-[1px] bg-secondary-100 md:block" />
          <button className="hover:opacity-70">
            <Image
              src={notificationIcon}
              alt="Notification icon"
              className="h-6 w-6 cursor-pointer"
            />
          </button>
          <div className="hidden h-[35px] w-[1px] bg-secondary-100 md:block" />
          <button className="hover:opacity-70">
            <Image
              className="inline-block h-8 w-8 cursor-pointer rounded-full md:h-9 md:w-9"
              src={avatar}
              alt="Avatar"
              unoptimized
            />
          </button>
          <Button variant={'primary'} className="hidden md:flex">
            <Image src={addCircleIcon} alt="Add circle icon" className="mr-1.5 h-5 w-5" />
            Add New Product
          </Button>
          <button className="hidden cursor-pointer items-center space-x-2 hover:opacity-70 md:flex">
            <Image src={globalIcon} alt="Global icon" className="h-6 w-6" />
            <div className="h-[25px] w-[1px] bg-gray-200" />
            <p className="font-bold">EN</p>
          </button>
        </div>
      </nav>
    </header>
  );
}

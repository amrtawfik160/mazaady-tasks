'use client';

import Image from 'next/image';
import SectionContainer from '@/components/task2/SectionContainer';
import { useEffect, useState } from 'react';

import qrCode from '@/public/img/qr-code.png';

// Icons
import eye from '@/public/icons/eye.svg';
import sendSquare from '@/public/icons/send-square.svg';
import documentDownload from '@/public/icons/document-download.svg';
import documentDownloadOrange from '@/public/icons/document-download-orange.svg';
import logo from '@/public/icons/logo.svg';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export default function QrCodeSection({ userName }: { userName: string }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsOpen(true);
    }
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <SectionContainer>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold md:text-xl">QR Code</h2>
        <div className="flex space-x-6">
          <button className="hover:opacity-70">
            <Image src={eye} alt="eye" />
          </button>
          <button className="hover:opacity-70">
            <Image src={sendSquare} alt="send" />
          </button>
          <button className="hover:opacity-70">
            <Image src={documentDownload} alt="download" />
          </button>
          <button
            className="rounded-full bg-primary-50 p-1 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <ChevronUpIcon className="h-5" /> : <ChevronDownIcon className="h-5" />}
          </button>
        </div>
      </div>
      {isOpen ? (
        <>
          <div className="mt-3 flex items-center space-x-2 rounded-2xl bg-secondary-50 p-4">
            <Image src={documentDownloadOrange} alt="download" />
            <p className="text-xs font-light text-gray-600">
              Download the QR code or share it with your friends.
            </p>
          </div>
          <div className="mt-3.5 rounded-2xl bg-gradient-to-r from-primary-700 to-secondary-400 p-3.5">
            <div className="flex flex-col items-center rounded-2xl bg-white p-5">
              <Image src={logo} alt="Mazaady logo" className="w-28 md:w-32" unoptimized />
              <h2 className="mt-2 text-xl font-semibold md:text-2xl">{userName}</h2>
              <Image src={qrCode} alt={'Qr Code'} unoptimized />
              <p className="mt-2 text-sm text-gray-600">Follow Us on Mazaady</p>
            </div>
          </div>
        </>
      ) : null}
    </SectionContainer>
  );
}

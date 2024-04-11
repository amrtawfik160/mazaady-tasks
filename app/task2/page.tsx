import Navbar from '@/components/layout/Navbar';

// Sections
import MainSection from '@/components/task2/home/MainSection';
import QrCodeSection from '@/components/task2/home/QrCodeSection';
import UserSection from '@/components/task2/home/UserSection';
import { cn } from '@/lib/utils';

import avatar from '@/public/img/avatar.png';

const user = {
  name: 'Hala Ahmed',
  bio: 'I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Mackeup and Skin Care.',
  following: 5,
  followers: 20,
  rating: 4.2,
  ratingCount: 15,
  avatar: avatar.src
};

export default function Task2() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F6F4F5] pb-14">
        <div className="mx-auto grid h-full min-h-screen max-w-7xl grid-cols-1 gap-y-4 px-5 pt-[5rem] md:grid-cols-3 md:gap-4 lg:gap-6 lg:pt-[6.5rem] 2xl:grid-cols-4">
          <div
            className={cn(
              'flex flex-col gap-4',
              'md:col-span-3 md:grid md:grid-cols-2',
              'lg:col-span-1 lg:flex lg:flex-col lg:gap-6'
            )}
          >
            <UserSection user={user} />
            <QrCodeSection userName={user.name} />
          </div>
          <MainSection />
        </div>
      </main>
    </>
  );
}

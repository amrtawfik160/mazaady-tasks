import Image from 'next/image';
import { Button } from '@/components/ui/button';
import UserInsights from '@/components/task2/home/UserInsights';
import SectionContainer from '@/components/task2/SectionContainer';

import { User } from '@/@types/database';

export default function UserSection({ user }: { user: User }) {
  return (
    <SectionContainer>
      <Image src={user.avatar} alt="avatar" width={80} height={80} className="rounded-2xl" />
      <h2 className="mt-2 text-lg font-bold md:text-xl">{user.name}</h2>
      <p className="mt-1 text-sm text-gray-500">{user.bio}</p>
      <UserInsights user={user} />
      <Button variant="primary" size="lg" className="mt-4 w-full md:mt-6">
        Follow
      </Button>
    </SectionContainer>
  );
}

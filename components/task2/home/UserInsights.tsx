import InsightCard from '../InsightCard';

// Icons
import followingIcon from '@/public/icons/user-tick.svg';
import followersIcon from '@/public/icons/profile-2user.svg';
import rateIcon from '@/public/icons/magic-star.svg';

import { User } from '@/@types/database';

export default function UserInsights({ user }: { user: User }) {
  return (
    <div className="mt-3 grid grid-cols-3 gap-2 md:mt-5 md:gap-x-3.5">
      <InsightCard image={followingIcon} name="Following" value={user.following} />
      <InsightCard image={followersIcon} name="Followers" value={user.followers} />
      <InsightCard image={rateIcon} name="Rate" value={user.rating} count={user.ratingCount} />
    </div>
  );
}

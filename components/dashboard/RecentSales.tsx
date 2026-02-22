'use client';

import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';

const influencers = [
  {
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    amount: '+$1,999.00',
    engagement: 'High',
    status: 'Active',
    avatar: 'https://ui.shadcn.com/avatars/01.png',
  },
  {
    name: 'Jackson Lee',
    email: 'jackson.lee@email.com',
    amount: '+$39.00',
    engagement: 'Medium',
    status: 'Pending',
    avatar: 'https://ui.shadcn.com/avatars/02.png',
  },
  {
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    amount: '+$299.00',
    engagement: 'Low',
    status: 'Inactive',
    avatar: 'https://ui.shadcn.com/avatars/03.png',
  },
  {
    name: 'William Kim',
    email: 'will@email.com',
    amount: '+$99.00',
    engagement: 'High',
    status: 'Active',
    avatar: 'https://ui.shadcn.com/avatars/04.png',
  },
  {
    name: 'Sofia Davis',
    email: 'sofia.davis@email.com',
    amount: '+$39.00',
    engagement: 'Medium',
    status: 'Active',
    avatar: 'https://ui.shadcn.com/avatars/05.png',
  },
];

export default function RecentSales() {
  return (
    <div className="space-y-8">
      {influencers.map((influencer) => (
        <div key={influencer.email} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={influencer.avatar} alt="Avatar" />
            <AvatarFallback>
              {influencer.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {influencer.name}
            </p>
            <p className="text-sm text-muted-foreground">
              {influencer.email}
            </p>
          </div>
          <div className="ml-auto font-medium">{influencer.amount}</div>
        </div>
      ))}
    </div>
  );
}

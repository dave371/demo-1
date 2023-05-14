'use client';

import Button from '@/components/ui/Button';
import { roboto } from '../fonts';

export default function Plans() {
  const data = [
    {
      planName: 'Basic Training Plan',
      cta: false,
      planPrice: '$100',
      planPerks: [
        'Personalized workouts and nutritional guidance',
        'Monthly progress tracking',
        'Access to a library of pre-recorded workout videos',
        'Monthly live virtual training sessions',
      ],
    },
    {
      planName: 'Standard Training Plan',
      cta: true,
      planPrice: '$175',
      planPerks: [
        'Personalized workouts and nutritional guidance',
        'Bi-weekly progress tracking',
        'Access to a library of pre-recorded workout videos',
        'Weekly live virtual training sessions',
        'Additional resource materials and tools for fitness education',
      ],
    },
    {
      planName: 'Premium Training Plan',
      cta: false,
      planPrice: '$250',
      planPerks: [
        'Personalized workouts and nutritional guidance',
        'Weekly progress tracking',
        'Access to a library of pre-recorded workout videos',
        'Bi-weekly live virtual training sessions',
        'Personalized supplement plan',
        'Additional resource materials and tools for fitness education',
      ],
    },
  ];

  return (
    <section>
      <h1 className={`mb-8 font-semibold text-2xl ${roboto.className}`}>
        Plans
      </h1>

      <div className="flex flex-col gap-10 md:w-fit md:mx-auto lg:flex-row">
        {data.map((plan) => (
          <PlanCard
            key={plan.planName}
            name={plan.planName}
            price={plan.planPrice}
            perks={plan.planPerks}
          />
        ))}
      </div>
    </section>
  );
}

function PlanCard({ name, price, perks }) {
  return (
    <div className="w-full bg-secondary p-5 rounded-md flex flex-col justify-between">
      <div>
        <div className={`${roboto.className} flex flex-col gap-3`}>
          <h2 className="text-2xl">{name}</h2>
          <p className="text-xl font-medium">{price}/month</p>
        </div>
        <div className="w-full h-[1px] bg-main-text-color my-3" />
        <h3 className={`text-lg font-semibold ${roboto.className} mb-5`}>
          This plan includes:
        </h3>
        <ul className="flex flex-col gap-5">
          {perks.map((perk) => (
            <PerkItem key={perk} perk={perk} />
          ))}
        </ul>
      </div>

      <Button
        type="button"
        className={`${roboto.className} font-semibold text-lg rounded-md mt-20 py-3 w-full bg-primary`}
      >
        Get Started
      </Button>
    </div>
  );
}

function PerkItem({ perk }) {
  return <li className="text-lg">{perk}</li>;
}

'use client';

import { roboto } from '@/app/fonts';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Button from '../ui/Button';

export default function Pricing() {
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
    <section className="mt-12">
      <h2 className={`mb-8 font-semibold text-2xl ${roboto.className}`}>
        Pricing
      </h2>

      <div className="flex flex-col items-center justify-center gap-5 lg:flex-row">
        {data.map((plan) => (
          <PriceCard
            key={plan.planName}
            name={plan.planName}
            price={plan.planPrice}
            perks={plan.planPerks}
            cta={plan.cta}
          />
        ))}
      </div>
    </section>
  );
}

function PriceCard({ name, price, perks, cta }) {
  return (
    <div
      className={`p-5 ${
        cta ? 'h-[800px] bg-secondary' : 'h-[700px] border-4 border-secondary'
      } rounded-md  flex flex-col justify-between md:w-[60%] lg:w-[30%]`}
    >
      <div>
        <h3 className={`${roboto.className} font-medium text-2xl text-center`}>
          {name}
        </h3>
        <div className="flex flex-col gap-2 my-5 text-center">
          <h4 className={`${roboto.className} font-black text-3xl`}>{price}</h4>
          <p className={`${roboto.className} text-lg`}>/per month</p>
        </div>
        <div className="w-full h-[2px] bg-main-text-color" />
        <ul className="flex flex-col gap-5 mt-5">
          {perks.map((perk) => (
            <PerkItem key={perk} perk={perk} />
          ))}
        </ul>
      </div>

      <Button
        className={`${
          roboto.className
        } font-medium text-lg rounded-md w-full py-3 hover:bg-accent-color  ${
          cta ? 'border-primary border-2 ' : 'bg-secondary '
        }`}
      >
        Begin Your Fitness Journey
      </Button>
    </div>
  );
}

function PerkItem({ perk }) {
  return (
    <li className="flex items-center gap-2">
      <CheckCircleIcon className="flex-shrink-0 w-8 h-8 text-main-text-color" />
      <p className="text-md">{perk}</p>
    </li>
  );
}

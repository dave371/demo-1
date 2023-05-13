'use client';

import { roboto } from '@/app/fonts';
import { raleway } from '@/app/fonts';
import Button from './ui/Button';
import { useRouter } from 'next/navigation';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import heroImage from '../../public/hero.png';

export default function HeroSection() {
  return (
    <div
      className={`${roboto.className} flex flex-col gap-5 md:gap-0 md:flex-row md:items-center md:justify-between`}
    >
      <HeroText />
      <HeroImage />
    </div>
  );
}

function HeroText() {
  const router = useRouter();

  return (
    <div>
      <h1 className="text-4xl font-black">Achieve Your Fitness Goals</h1>

      <p className={`mt-8 text-2xl lg:w-[70%] ${raleway.className}`}>
        Experience The Benefits of One-On-One Coaching From Your Home.
      </p>

      <Button
        className="flex items-center justify-center w-full gap-2 p-3 text-lg font-medium rounded-md mt-9 bg-secondary md:w-fit"
        onClick={() => router.push('/pricing')}
      >
        Start Your Fitness Journey Now
        <ArrowLongRightIcon className="w-8 h-8 text-main-text-color" />
      </Button>
    </div>
  );
}

function HeroImage() {
  return (
    <Image
      src={heroImage}
      alt="picture of the personal trainer robert"
      className="mx-auto md:mx-0"
      priority
    />
  );
}

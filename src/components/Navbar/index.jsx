import Link from 'next/link';
import { roboto } from '@/app/fonts';
import DesktopViewLinks from './DesktopViewLinks';
import MobileViewLinks from './MobileViewLinks';

export default function Navbar() {
  return (
    <header
      className={`flex items-center justify-between p-5 xl:w-[90%] 2xl:w-[75%] xl:mx-auto ${roboto.className}`}
    >
      <h1 className="text-3xl font-semibold font">
        <Link href={'/'}>VirtualFit</Link>
      </h1>

      <DesktopViewLinks />
      <MobileViewLinks />
    </header>
  );
}

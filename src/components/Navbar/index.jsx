import Link from 'next/link';
import { roboto } from '@/app/fonts';
import DesktopViewLinks from './DesktopViewLinks';
import MobileViewLinks from './MobileViewLinks';

export default function Navbar() {
  return (
    <header
      className={`flex items-center justify-between py-5 ${roboto.className}`}
    >
      <h1 className="text-3xl font-black font">
        <Link href={'/'}>VirtualFit</Link>
      </h1>

      <DesktopViewLinks />
      <MobileViewLinks />
    </header>
  );
}

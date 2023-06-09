import { roboto } from '@/app/fonts';
import { routes } from '@/app/variables/routes';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className={`p-5 mt-12 min-h-[150px] flex flex-col gap-5 items-center justify-center w-full bg-secondary ${roboto.className}`}
    >
      <ul className="grid grid-cols-2 gap-10 md:flex md:justify-center md:items-center md:gap-5">
        {routes.map((route) => (
          <FooterLink key={route.name} name={route.name} path={route.path} />
        ))}

        <FooterLink name="Terms of Service" path="/terms" />
        <FooterLink name="Privacy" path="/privacy" />
      </ul>

      <div className="w-full h-[1px] bg-white rounded" />

      <p>2020 VirtualFit, Inc. All rights reserved.</p>
    </footer>
  );
}

function FooterLink({ name, path }) {
  return (
    <li className="flex items-center justify-center">
      <Link className="px-3 text-lg text-center" href={path}>
        {name}
      </Link>
    </li>
  );
}

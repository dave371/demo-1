'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Button from '../ui/Button';
import { routes } from '@/app/variables/routes';

export default function DesktopViewLinks() {
  const router = useRouter();

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-5">
        {routes.map((route) => (
          <NavLink key={route.name} name={route.name} route={route.path} />
        ))}
        <li>
          <Button
            onClick={() => {
              router.push('/pricing');
            }}
            className={`px-3 py-1 rounded-md bg-secondary hover:bg-opacity-80 hover:bg-accent-color font-medium text-lg`}
          >
            Get Active Now!
          </Button>
        </li>
      </ul>
    </nav>
  );
}

function NavLink({ name, route }) {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={route}
        className={`p-2 text-lg font-medium hover:text-accent-color ${
          pathname === route ? 'text-accent-color' : ''
        }`}
      >
        {name}
      </Link>
    </li>
  );
}

'use client';

import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import { routes } from '@/app/variables/routes';
import { roboto } from '@/app/fonts';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function MobileViewLinks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Button
        className={`p-2 bg-transparent rounded`}
        onClick={() => setIsOpen(true)}
      >
        <Bars3BottomRightIcon className="w-8 h-8 text-main-text-color" />
      </Button>

      <AnimatePresence>
        {isOpen ? <MenuModal isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
      </AnimatePresence>
    </div>
  );
}

function MenuModal({ isOpen, setIsOpen }) {
  const router = useRouter();

  return (
    <>
      <Dialog
        static
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className={`relative z-20 ${roboto.className}`}
      >
        <Dialog.Overlay
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black bg-opacity-40"
        />
        <Dialog.Panel
          as={motion.div}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut', type: 'tween' }}
          className="fixed inset-y-0 right-0 w-[85%] bg-primary text-white"
        >
          <div className="flex items-center justify-between p-5">
            <Dialog.Title className="text-2xl font-bold">Menu</Dialog.Title>
            <Button
              className={`p-2 bg-transparent rounded`}
              onClick={() => setIsOpen(false)}
            >
              <XMarkIcon className="w-8 h-8 text-main-text-color" />
            </Button>
          </div>
          <nav>
            <ul>
              {routes.map((route) => (
                <NavLink
                  key={route.name}
                  name={route.name}
                  route={route.path}
                  setIsOpen={setIsOpen}
                />
              ))}
              <li className="p-5">
                <Button
                  onClick={() => {
                    router.push('/plans');
                    setIsOpen(false);
                  }}
                  className={`px-3 py-1 w-full rounded-md bg-secondary hover:bg-opacity-80 hover:bg-accent-color font-medium text-lg`}
                >
                  Get Active Now!
                </Button>
              </li>
            </ul>
          </nav>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}

function NavLink({ name, route, setIsOpen }) {
  const path = usePathname();

  return (
    <li className="">
      <Link
        href={route}
        className={`block w-full p-5 text-lg font-medium  hover:bg-secondary hover:text-main-text-color ${
          route === path ? 'text-accent-color' : ''
        }`}
        onClick={() => setIsOpen(false)}
      >
        {name}
      </Link>
    </li>
  );
}

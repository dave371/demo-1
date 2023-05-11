import { Raleway, Roboto } from 'next/font/google';

export const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
});

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
});

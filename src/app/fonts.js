import { Raleway, Roboto, Catamaran } from 'next/font/google';

export const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
});

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
});

export const robotoItalic = Roboto({
  subsets: ['latin'],
  style: 'italic',
  weight: ['400'],
  display: 'swap',
});

export const catamaran = Catamaran({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

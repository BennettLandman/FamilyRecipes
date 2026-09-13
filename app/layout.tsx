import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://bennettlandman.github.io/FamilyRecipes/'),
  title: { default: 'Brentwood Bunch Recipes', template: '%s · Brentwood Bunch Recipes' },
  description: 'A growing family cookbook of the things the Brentwood Bunch actually cooks.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Brentwood Bunch Recipes',
    description: 'A warm, well-used family cookbook—now living on the web.',
    type: 'website',
    images: [{
      url: 'https://bennettlandman.github.io/FamilyRecipes/og.png',
      width: 1536,
      height: 1024,
      alt: 'Brentwood Bunch Recipes with four illustrated kitchen cats',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brentwood Bunch Recipes',
    description: 'The things we actually cook.',
    images: ['https://bennettlandman.github.io/FamilyRecipes/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

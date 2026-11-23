export const editions = {
  manga: {
    name: 'Manga title spread',
    description: 'Oversized blackletter, stark ink, and a crimson margin.',
    fonts: 'UnifrakturMaguntia&family=Inter:wght@400;500;700',
  },
  manuscript: {
    name: 'Gothic manuscript',
    description: 'An engraved plate, warm parchment, and gilded initials.',
    fonts: 'Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Cinzel:wght@500;600',
  },
  monochrome: {
    name: 'Monochrome',
    description: 'A compact profile and grayscale engravings, in light and dark.',
    fonts: 'IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600;700',
  },
  landscape: {
    name: 'Bleak landscape',
    description: 'A wide eclipse panorama above a narrow column of type.',
    fonts: 'Instrument+Serif:ital@0;1&family=Inter:wght@400;500',
  },
} as const;

export type Edition = keyof typeof editions;

export const editionEntries = Object.entries(editions) as [Edition, (typeof editions)[Edition]][];

export const sitePath = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path}`;

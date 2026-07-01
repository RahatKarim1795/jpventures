import { Clock, Globe, MapPin, Phone } from 'lucide-react';

const BRAND_NAME = 'JP Ventures';
const ADDRESS = 'Block I-Ext, Bashundhara R/A, Dhaka';

const CONTACT_ITEMS = [
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+88014 0007 0007', '+88014 0008 0008'],
    href: undefined,
  },
  {
    icon: Clock,
    title: 'Opening Hours',
    details: ['Sat to Thu, 09:00 – 18:00'],
    href: undefined,
  },
  {
    icon: Globe,
    title: 'Website',
    details: ['www.jpventures.business'],
    href: 'https://www.jpventures.business',
  },
] as const;

export default function Footer() {
  const getDetailHref = (title: string, detail: string): string | null => {
    if (title === 'Call Us') {
      // Strip spaces and separators so dial links work reliably across devices.
      const phone = detail.replace(/[^\d+]/g, '');
      return phone ? `tel:${phone}` : null;
    }

    if (detail.includes('@')) {
      return `mailto:${detail}`;
    }

    return null;
  };

  return (
    <footer className="w-full font-serif text-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center text-[#d1a893]">
            <MapPin size={40} strokeWidth={1.5} />
          </div>
          <h2 className="font-brand-garamond mt-4 text-3xl font-semibold tracking-wide md:text-4xl">
            JP Business Center
          </h2>
          <p className="mt-2 text-sm text-white/70 md:text-base">{ADDRESS}</p>
          <p className="mt-1 text-sm text-white/70 md:text-base">A creation of Jams & Patron.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
          {CONTACT_ITEMS.map((item) => {
            const Icon = item.icon;
            const content = (
              <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:gap-5 md:text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center text-[#d1a893]">
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-lg font-medium text-white">{item.title}</p>
                  <div className="mt-1 space-y-1 text-sm text-white/75 md:text-base">
                    {item.details.map((detail) => (
                      (() => {
                        const detailHref = getDetailHref(item.title, detail);

                        if (!detailHref) {
                          return <p key={detail}>{detail}</p>;
                        }

                        return (
                          <a
                            key={detail}
                            href={detailHref}
                            className="block underline decoration-white/35 underline-offset-4 transition-opacity hover:opacity-80"
                          >
                            {detail}
                          </a>
                        );
                      })()
                    ))}
                  </div>
                </div>
              </div>
            );

            if (item.href) {
              return (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-opacity hover:opacity-80"
                >
                  {content}
                </a>
              );
            }

            return <div key={item.title}>{content}</div>;
          })}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-6">
          <p className="text-center text-sm text-white/60">
            Copyright 2026 — {BRAND_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

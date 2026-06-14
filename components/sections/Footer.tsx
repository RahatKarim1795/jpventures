import Image from 'next/image';
import Link from 'next/link';
import { Clock, Mail, Phone } from 'lucide-react';

type SocialIconProps = {
  className?: string;
};

function FacebookIcon({ className }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function YoutubeIcon({ className }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedinIcon({ className }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.062 2.062 0 114.126 0 2.062 2.062 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const BRAND_NAME = 'JP Ventures';
const ADDRESS = 'Dhaka, Bangladesh';

const CONTACT_ITEMS = [
  {
    icon: Phone,
    title: 'Call Us',
    detail: '+880 1XXX XXXXXX',
    href: 'tel:+8801000000000',
  },
  {
    icon: Clock,
    title: 'Opening Hours',
    detail: 'Sat to Thu 09:00 – 18:00',
    href: undefined,
  },
  {
    icon: Mail,
    title: 'Email Us',
    detail: 'contact@jpventures.com',
    href: 'mailto:contact@jpventures.com',
  },
] as const;

const SOCIAL_LINKS: {
  icon: (props: SocialIconProps) => React.JSX.Element;
  label: string;
  href: string;
}[] = [
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: YoutubeIcon, label: 'YouTube', href: '#' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full text-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        {/* <div className="flex flex-col items-center text-center">
          <div className="relative h-14 w-14 md:h-16 md:w-16">
            <Image
              src="/images/JP-Venture-Line-Art.svg"
              alt=""
              fill
              className="object-contain opacity-90"
              style={{ filter: 'brightness(0) saturate(100%) invert(78%) sepia(18%) saturate(800%) hue-rotate(330deg) brightness(95%) contrast(88%)' }}
            />
          </div>
          <h2 className="font-brand-garamond mt-4 text-3xl font-semibold tracking-wide md:text-4xl">
            {BRAND_NAME}
          </h2>
          <p className="mt-2 text-sm text-white/70 md:text-base">{ADDRESS}</p>
        </div> */}

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
                  <p className="mt-1 text-sm text-white/75 md:text-base">{item.detail}</p>
                </div>
              </div>
            );

            if (item.href) {
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="transition-opacity hover:opacity-80"
                >
                  {content}
                </Link>
              );
            }

            return <div key={item.title}>{content}</div>;
          })}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-6 md:flex-row">
          <p className="text-center text-sm text-white/60 md:text-left">
            Copyright {year} – {BRAND_NAME}
          </p>
          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#d1a893] hover:opacity-100"
              >
                <Icon className="h-[18px] w-[18px]" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

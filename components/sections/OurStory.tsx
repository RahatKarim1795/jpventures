import Image from 'next/image';
import { EB_Garamond, Mrs_Saint_Delafield } from 'next/font/google';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const mrsSaintDelafield = Mrs_Saint_Delafield({
  subsets: ['latin'],
  weight: '400',
});

export default function OurStory() {
  return (
    <section className="w-full bg-brand-brown-600 py-20 md:min-h-[120vh] md:py-28">
      <div className="mx-auto flex w-full max-w-[1680px] flex-col gap-16 px-4 md:flex-row md:items-stretch md:gap-6 md:px-8 lg:px-10">
        <div className="md:w-[58%]">
          <div className="relative h-full min-h-[420px] overflow-hidden md:min-h-[760px]">
            <Image
              src="/images/Line art-01a.svg"
              alt="JP-ventures-Jams-Patron-Group-sketch"
              fill
              priority={false}
              className="object-contain object-left p-0 md:p-2"
              sizes="(min-width: 768px) 58vw, 100vw"
            />
          </div>
        </div>

        <div className="flex md:w-[42%] md:justify-end">
          <div
            className={`relative flex w-full flex-col gap-12 md:grid md:min-h-[760px] md:max-w-[660px] md:grid-cols-2 md:grid-rows-2 md:gap-y-0 ${ebGaramond.className}`}
          >
            <article className="p-2 md:col-start-1 md:row-start-1 md:pr-4 md:pt-4">
              <p className="mb-6 text-xl tracking-[0.18em] text-[#d1a893] uppercase md:text-5xl">Patron Group</p>
              <p className="max-w-[34ch] text-base leading-relaxed text-white md:text-lg">
              With over two decades of real estate experience, Patron Group has shaped premium residential and commercial developments across Dhaka. Its approach brings together prime locations, lifestyle value and long-term urban growth.
              </p>
            </article>

            <span
              aria-hidden="true"
              className={`pointer-events-none px-2 text-7xl leading-none text-white md:hidden ${mrsSaintDelafield.className}`}
            >
              &
            </span>

            <article className="p-2 md:col-start-2 md:row-start-2 md:justify-self-end md:self-end md:pl-8 md:pt-10">
              <p className="mb-6 text-lg tracking-[0.18em] text-[#d1a893] uppercase md:text-5xl">Jams Group</p>
              <p className="max-w-[34ch] text-base leading-relaxed text-white md:text-lg">
              Founded in 2008, Jams Group has grown from real estate development into a diversified business group with strengths in construction, property services, design, trading and power solutions.
              </p>
            </article>

            <span
              aria-hidden="true"
              className={`pointer-events-none hidden text-7xl leading-none text-white md:absolute md:top-1/2 md:left-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2 md:px-6 md:py-4 ${mrsSaintDelafield.className}`}
            >
              &
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

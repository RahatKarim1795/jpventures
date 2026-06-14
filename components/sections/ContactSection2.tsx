'use client';

import Image from 'next/image';
import { useState, type FormEvent } from 'react';

const LOGO_GOLD_FILTER =
  'brightness(0) saturate(100%) invert(78%) sepia(18%) saturate(800%) hue-rotate(330deg) brightness(95%) contrast(88%)';

const INPUT_CLASS =
  'w-full rounded border border-white/20 bg-brand-brown px-4 py-3 text-white placeholder:text-white/50 outline-none transition-colors focus:border-[#d1a893]/60 focus:ring-1 focus:ring-[#d1a893]/40';

const TIME_SLOTS = (() => {
  const slots: string[] = [];
  for (let hour = 9; hour <= 18; hour++) {
    for (const minute of ['00', '30']) {
      if (hour === 18 && minute === '30') break;
      slots.push(`${String(hour).padStart(2, '0')}:${minute}`);
    }
  }
  return slots;
})();

function getTodayDateString(): string {
  const today = new Date();
  const y = today.getFullYear();
  const m = String(today.getMonth() + 1).padStart(2, '0');
  const d = String(today.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export default function ContactSection2() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(getTodayDateString);
  const [time, setTime] = useState('10:00');
  const [message, setMessage] = useState('');

  // Form submission and loading states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Retrieve the URL from env variables or fallback to manual string for testing
    const googleScriptUrl = 
      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || 'PASTE_YOUR_WEB_APP_URL_HERE';

    // Package the form data using standard URL search parameters to align with Apps Script structure
    const formData = new URLSearchParams();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('date', date);
    formData.append('time', time);
    formData.append('message', message);

    try {
      const response = await fetch(googleScriptUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const data = await response.json();

      if (data.result === 'success') {
        setSubmitStatus('success');
        // Clear inputs upon success
        setName('');
        setEmail('');
        setMessage('');
        setDate(getTodayDateString());
        setTime('10:00');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full px-6 py-16 text-white md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full border border-white/25 px-4 py-1.5 text-sm tracking-wide text-white/90">
          Contact Us
        </span>
        <div className="relative mx-auto mt-8 h-16 w-full max-w-md sm:h-20 md:mt-10 md:h-24 md:max-w-xl lg:h-28 lg:max-w-2xl">
          <Image
            src="/images/logo_jp.png"
            alt="Schedule a Visit"
            fill
            className="object-contain object-center opacity-90"
            style={{ filter: LOGO_GOLD_FILTER }}
            sizes="(min-width: 1024px) 42rem, (min-width: 768px) 36rem, 28rem"
            priority={false}
          />
        </div>

        <form onSubmit={handleSubmit} className="mt-12 text-left">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className={INPUT_CLASS}
              autoComplete="name"
            />
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className={INPUT_CLASS}
              autoComplete="email"
            />
            <input
              type="date"
              name="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={`${INPUT_CLASS} [color-scheme:dark]`}
            />
            <select
              name="time"
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className={`${INPUT_CLASS} cursor-pointer appearance-none`}
              aria-label="Preferred time"
            >
              {TIME_SLOTS.map((slot) => (
                <option key={slot} value={slot} className="bg-brand-brown-600 text-white">
                  {slot}
                </option>
              ))}
            </select>
          </div>

          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Notes (optional)"
            rows={4}
            className={`${INPUT_CLASS} mt-4 resize-y`}
          />

          <div className="mt-8 flex flex-col items-center justify-center gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded bg-[#d1a893] px-10 py-3.5 text-sm font-semibold uppercase tracking-widest text-brand-brown transition-opacity hover:opacity-90 disabled:opacity-50 md:w-auto"
            >
              {isSubmitting ? 'Scheduling...' : 'Schedule a visit'}
            </button>

            {/* Submission feedback status */}
            {submitStatus === 'success' && (
              <p className="text-center text-sm text-green-400">
                Your visit has been scheduled successfully!
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-center text-sm text-red-400">
                Failed to schedule appointment. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
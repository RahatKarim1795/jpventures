'use client';

import Antigravity from '@/components/effects/Antigravity';
import type { ReactNode } from 'react';

type ContactFooterShellProps = {
  children: ReactNode;
};

export default function ContactFooterShell({ children }: ContactFooterShellProps) {
  return (
    <div className="relative overflow-hidden bg-brand-brown-600 text-white">
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Antigravity
          count={140}
          magnetRadius={6}
          ringRadius={6}
          waveSpeed={0.4}
          waveAmplitude={0.8}
          particleSize={0.9}
          lerpSpeed={0.05}
          color="#d1a893"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={2.6}
          particleShape="capsule"
          fieldStrength={12}
        />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none bg-brand-brown-600/70" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}

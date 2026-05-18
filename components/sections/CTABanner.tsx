import Container from '@/components/ui/Container';
import { CTA_BANNER } from '@/lib/utils/constants';

export default function CTABanner() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-brand-dutch-blue via-brand-noir-blue to-brand-dutch-blue relative overflow-hidden">
      {/* Decorative Background Elements */}
      {/* <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-teal-sky/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-pastel-blue/20 rounded-full blur-3xl"></div>
      </div> */}

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <Container>
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center transform rotate-12 transition-transform duration-500 hover:rotate-0 hover:scale-110">
                  <svg className="w-10 h-10 text-white transform -rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 w-20 h-20 bg-white/30 rounded-2xl blur-xl opacity-50"></div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {CTA_BANNER.title}
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-brand-ceramic mb-10 max-w-2xl mx-auto leading-relaxed">
              {CTA_BANNER.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary CTA */}
              <a
                href={CTA_BANNER.primaryCTA.href}
                className="group relative inline-flex items-center px-8 py-4 bg-white text-brand-dutch-blue font-bold rounded-lg shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                {/* Button Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <svg className="w-5 h-5 mr-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="relative z-10">{CTA_BANNER.primaryCTA.text}</span>
                <svg className="w-5 h-5 ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Secondary CTA */}
              <a
                href={CTA_BANNER.secondaryCTA.href}
                className="group inline-flex items-center px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>{CTA_BANNER.secondaryCTA.text}</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center space-x-2 text-white/80">
                <svg className="w-5 h-5 text-brand-teal-sky" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">No Obligation</span>
              </div>
              
              <div className="flex items-center space-x-2 text-white/80">
                <svg className="w-5 h-5 text-brand-teal-sky" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Free Consultation</span>
              </div>
              
              <div className="flex items-center space-x-2 text-white/80">
                <svg className="w-5 h-5 text-brand-teal-sky" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


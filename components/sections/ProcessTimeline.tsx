import Container from '@/components/ui/Container';
import { DEVELOPMENT_PROCESS } from '@/lib/utils/constants';

function TimelineStep({ step, title, description, icon, isLast }: { 
  step: string; 
  title: string; 
  description: string; 
  icon: string;
  isLast: boolean;
}) {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'search':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        );
      case 'design':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        );
      case 'construction':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'handover':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative group">
      {/* Connector Line (hidden on mobile, shown on desktop) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-24 left-1/2 w-full h-1 bg-gradient-to-r from-brand-teal-sky to-brand-pastel-blue opacity-30 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-0 z-0"></div>
      )}

      <div className="relative z-10">
        {/* Step Number Badge */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-dutch-blue to-brand-teal-sky rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
              {step}
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 w-20 h-20 bg-brand-teal-sky/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Icon Card */}
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-ceramic/20 hover:border-brand-teal-sky/50">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-teal-sky/10 to-brand-pastel-blue/10 rounded-xl flex items-center justify-center text-brand-teal-sky transform transition-transform duration-500 group-hover:scale-110">
              {getIcon(icon)}
            </div>
          </div>

          {/* Content */}
          <h3 className="text-2xl font-bold text-brand-dutch-blue mb-4 text-center group-hover:text-brand-teal-sky transition-colors duration-300">
            {title}
          </h3>
          <p className="text-brand-concrete leading-relaxed text-center">
            {description}
          </p>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-dutch-blue via-brand-teal-sky to-brand-pastel-blue rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  );
}

export default function ProcessTimeline() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-teal-sky/10 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-brand-teal-sky rounded-full animate-pulse"></div>
            <span className="text-brand-teal-sky font-semibold text-sm uppercase tracking-wider">
              Our Process
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dutch-blue mb-4">
            From Vision to Reality
          </h2>
          <p className="text-lg text-brand-concrete max-w-3xl mx-auto">
            A transparent, systematic approach ensuring quality and timely delivery at every stage
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 max-w-7xl mx-auto">
          {DEVELOPMENT_PROCESS.map((process, index) => (
            <TimelineStep
              key={index}
              step={process.step}
              title={process.title}
              description={process.description}
              icon={process.icon}
              isLast={index === DEVELOPMENT_PROCESS.length - 1}
            />
          ))}
        </div>

        {/* Bottom Info Box */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-brand-dutch-blue to-brand-noir-blue rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute top-0 right-0 opacity-10">
              <svg className="w-48 h-48" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="20" cy="20" r="15" />
                <circle cx="50" cy="20" r="15" />
                <circle cx="80" cy="20" r="15" />
                <circle cx="35" cy="50" r="15" />
                <circle cx="65" cy="50" r="15" />
                <circle cx="20" cy="80" r="15" />
                <circle cx="50" cy="80" r="15" />
                <circle cx="80" cy="80" r="15" />
              </svg>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Transparent Progress Updates
                </h3>
                <p className="text-brand-ceramic text-lg leading-relaxed">
                  Stay informed at every stage with regular updates, site visits, and direct communication with our project team.
                </p>
              </div>
              <a
                href="/contact"
                className="flex-shrink-0 inline-flex items-center px-6 py-3 bg-white text-brand-dutch-blue font-semibold rounded-lg hover:bg-brand-ceramic transition-all duration-300 shadow-xl"
              >
                Start Your Journey
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


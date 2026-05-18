import Container from '@/components/ui/Container';
import { WHY_CHOOSE_US } from '@/lib/utils/constants';

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'location':
        return (
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'quality':
        return (
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'time':
        return (
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'payment':
        return (
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        );
      case 'service':
        return (
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'legal':
        return (
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-ceramic/20 hover:border-brand-teal-sky/50">
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-brand-teal-sky/5 rounded-bl-[80px] rounded-tr-2xl transition-all duration-500 group-hover:w-20 group-hover:h-20"></div>

      {/* Icon */}
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-brand-teal-sky to-brand-pastel-blue rounded-xl flex items-center justify-center text-white shadow-lg transform transition-transform duration-500 group-hover:scale-110">
          {getIcon(icon)}
        </div>
        {/* Icon Glow */}
        <div className="absolute inset-0 w-16 h-16 bg-brand-teal-sky/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-brand-dutch-blue mb-4 group-hover:text-brand-teal-sky transition-colors duration-300">
        {title}
      </h3>
      <p className="text-brand-concrete leading-relaxed">
        {description}
      </p>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal-sky via-brand-pastel-blue to-brand-teal-sky rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-brand-ceramic/20">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-teal-sky/10 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-brand-teal-sky rounded-full animate-pulse"></div>
            <span className="text-brand-teal-sky font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dutch-blue mb-4">
            Your Trusted Real Estate Partner
          </h2>
          <p className="text-lg text-brand-concrete max-w-3xl mx-auto">
            Experience excellence in every aspect of your project journey with Patron Group
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-brand-dutch-blue font-semibold mb-6">
            Ready to experience the Patron Group difference?
          </p>
          <a
            href="/projects"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-dutch-blue to-brand-teal-sky text-white font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Explore Our Projects
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
}


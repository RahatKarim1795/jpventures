import Container from '@/components/ui/Container';
import { TESTIMONIALS } from '@/lib/utils/constants';

function TestimonialCard({ name, role, location, quote, rating }: { 
  name: string; 
  role: string; 
  location: string; 
  quote: string; 
  rating: number;
}) {
  return (
    <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-ceramic/20 hover:border-brand-teal-sky/50 h-full flex flex-col">
      {/* Quote Mark */}
      <div className="absolute top-6 right-6 text-brand-teal-sky/10 text-6xl font-serif leading-none group-hover:text-brand-teal-sky/20 transition-colors duration-500">
        &ldquo;
      </div>

      {/* Rating Stars */}
      <div className="flex space-x-1 mb-4 relative z-10">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-brand-teal-sky" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-brand-jet-black text-lg leading-relaxed mb-6 italic relative z-10 flex-grow">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Client Info */}
      <div className="flex items-center space-x-4 pt-6 border-t border-brand-ceramic/30 relative z-10">
        {/* Avatar Placeholder */}
        <div className="w-12 h-12 bg-gradient-to-br from-brand-dutch-blue to-brand-teal-sky rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
          {name.charAt(0)}
        </div>
        
        <div>
          <h4 className="font-bold text-brand-dutch-blue text-lg group-hover:text-brand-teal-sky transition-colors duration-300">
            {name}
          </h4>
          <p className="text-brand-concrete text-sm">{role}</p>
          <p className="text-brand-teal-sky text-xs font-medium">{location}</p>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-dutch-blue via-brand-teal-sky to-brand-pastel-blue rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-brand-midnight-blue">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-brand-dutch-blue rounded-full animate-pulse"></div>
            <span className="text-brand-teal-sky font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-concrete mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-brand-concrete max-w-2xl mx-auto">
            Real experiences from satisfied property owners across our developments
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              location={testimonial.location}
              quote={testimonial.quote}
              rating={testimonial.rating}
            />
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 bg-white rounded-2xl shadow-lg px-8 py-6 border border-brand-ceramic/30">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-dutch-blue to-brand-teal-sky rounded-full flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-brand-dutch-blue">500+</p>
                <p className="text-sm text-brand-concrete">Satisfied Families</p>
              </div>
            </div>
            
            <div className="h-12 w-px bg-brand-ceramic/50"></div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-teal-sky to-brand-pastel-blue rounded-full flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-brand-dutch-blue">4.9/5</p>
                <p className="text-sm text-brand-concrete">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}



import { ContactForm } from '@/components/ContactForm';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with GenX Secure for custom quotes, product demos, or any questions about our security solutions.',
};

export default function ContactPage() {
  const officeAddress = "Panshul House ,2H23+23R, Saurashtra Bank Society, Pushkarna Nagar, Bansidhar Society, Narayan Nagar, Ahmedabad, Gujarat 380007, India";
  const encodedAddress = encodeURIComponent(officeAddress);
  const mapSrc = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=B&output=embed`;

  return (
    <div className="bg-gradient-to-b from-background to-secondary/30 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">Contact GenX Secure</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help you find the best security solutions. Reach out to us for a personalized consultation.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2 bg-card p-6 sm:p-8 rounded-lg shadow-xl border">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg shadow-xl border">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <Building className="h-6 w-6 mr-3 text-primary" />
                Our Office
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-primary/80" />
                  {officeAddress}
                </p>
                <p className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 shrink-0 text-primary/80" />
                  <a href="tel:+9107912345678" className="hover:text-primary transition-colors">+91 (079) 1234 5678</a>
                </p>
                <p className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 shrink-0 text-primary/80" />
                  <a href="mailto:info.aims.ahmedabad@example.com" className="hover:text-primary transition-colors">info.aims.ahmedabad@example.com</a>
                </p>
              </div>
            </div>
             <div className="bg-card p-6 rounded-lg shadow-xl border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Business Hours</h3>
              <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-muted-foreground">Saturday: 10:00 AM - 3:00 PM</p>
              <p className="text-muted-foreground">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Container (full width, outside main container's horizontal padding) */}
      <div className="relative overflow-hidden rounded-lg shadow-xl border mx-0 md:mx-0 mt-12 md:mt-16">
        {/* Title Box Overlay */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 bg-card text-card-foreground px-8 py-4 rounded-b-xl shadow-lg text-center w-full max-w-md">
          <h2 className="text-xl md:text-2xl font-semibold">
            Find Us On The Map
          </h2>
        </div>
        <iframe
          src={mapSrc}
          width="100%"
          height="450"
          style={{ border: 0, display: 'block' }} // display:block to remove extra space below iframe
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="GenX Secure Office Location"
        ></iframe>
      </div>
    </div>
  );
}

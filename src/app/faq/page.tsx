import type { Metadata } from 'next';
import { FAQPageContent } from './FAQPageContent';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about GenX Secure products, services, and solutions.',
};

export default function FAQPage() {
  return <FAQPageContent />;
}

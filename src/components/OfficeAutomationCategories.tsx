import { SolutionCategoryCard } from "./SolutionCategoryCard";
import { Wifi, Presentation, Speaker } from "lucide-react";

const officeAutomationCategoriesData = [
  {
    id: 'wifi-solutions',
    name: 'Wifi solutions',
    slug: 'wifi-solutions',
    shortDescription: 'Robust and high-speed wireless network solutions.',
    description: 'Robust and high-speed wireless network solutions.',
    images: ['/Solutions/Automation/wifi.jpg'],
    category: 'Office & Home Automations',
    icon: Wifi
  },
  {
    id: 'conference-room-solutions',
    name: 'Conference room solutions',
    slug: 'conference-room-solutions',
    shortDescription: 'Integrated audio-visual systems for modern meeting rooms.',
    description: 'Integrated audio-visual systems for modern meeting rooms.',
    images: ['/Solutions/Automation/conference.jpg'],
    category: 'Office & Home Automations',
    icon: Presentation
  },
  {
    id: 'pa-system',
    name: 'PA system',
    slug: 'pa-system',
    shortDescription: 'Public address systems for clear communication.',
    description: 'Public address systems for clear communication.',
    images: ['/Solutions/Automation/pa_system.jpg'],
    category: 'Office & Home Automations',
    icon: Speaker
  },
];

export function OfficeAutomationCategories() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 md:mb-8 text-center">
        Explore Office & Home Automations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {officeAutomationCategoriesData.map((category) => (
          <SolutionCategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
} 
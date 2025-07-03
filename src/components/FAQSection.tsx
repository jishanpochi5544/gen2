import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What security solutions does GenX Secure offer?",
    answer: "GenX Secure offers a comprehensive range of security solutions including surveillance systems (CCTV cameras, voice loggers), access control systems, fire safety equipment, intruder detection systems, and office & home automation solutions. We also provide command and control room setups for centralized security management."
  },
  {
    question: "Do you provide installation and maintenance services?",
    answer: "Yes, we provide professional installation, regular maintenance, and after-sales support for all our security systems. Our team of certified technicians ensures proper setup and optimal performance of your security infrastructure."
  },
  {
    question: "Can your systems be integrated with existing security infrastructure?",
    answer: "Yes, our solutions are designed to be compatible with most existing security systems. We perform thorough assessments to ensure seamless integration while maintaining or enhancing your current security capabilities."
  },
  {
    question: "What types of businesses do you serve?",
    answer: "We serve a wide range of sectors including corporate offices, retail establishments, industrial facilities, educational institutions, healthcare facilities, and residential complexes. Our solutions can be customized to meet specific security requirements of any organization."
  },
  {
    question: "Do you offer remote monitoring capabilities?",
    answer: "Yes, many of our security solutions come with remote monitoring capabilities. Through our mobile apps and web interfaces, you can monitor your security systems, receive real-time alerts, and manage access controls from anywhere."
  }
];

interface FAQSectionProps {
  className?: string;
  isVisible?: boolean;
}

export function FAQSection({ className, isVisible }: FAQSectionProps) {
  return (
    <div className={cn(
      "w-[95%] mx-auto transition-all duration-700 ease-out",
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16',
      className
    )}>
      <div className="w-full bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className={cn(
              "group transition-all duration-700 ease-in-out border-b last:border-b-0",
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
              "hover:bg-accent/5 rounded-lg my-4 px-4 py-2"
            )}
            style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
          >
            <div className="cursor-pointer text-lg font-medium text-foreground/90 
                          transition-all duration-500 ease-in-out py-4 font-sans tracking-tight
                          group-hover:text-primary group-hover:translate-x-2">
              {faq.question}
            </div>
            <div className="overflow-hidden transition-all duration-700 ease-in-out max-h-0 
                          opacity-0 transform translate-y-[-10px] scale-95
                          group-hover:max-h-[300px] group-hover:opacity-100 
                          group-hover:translate-y-0 group-hover:scale-100
                          font-serif text-base leading-relaxed text-foreground/90
                          pb-0 group-hover:pb-4">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
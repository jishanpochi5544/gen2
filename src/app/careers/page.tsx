"use client";

import { Briefcase, Heart, GraduationCap, Globe, Coffee, Users, Send, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const benefits = [
  {
    staticImage: "/icons/health.png",
    gif: "/icons/health.gif",
    title: "Health & Wellness",
    description: "Comprehensive medical, dental, and vision coverage for you and your family."
  },
  {
    staticImage: "/icons/learning.png",
    gif: "/icons/learning.gif",
    title: "Learning & Development",
    description: "Continuous learning opportunities with dedicated training budgets and certification support."
  },
  {
    staticImage: "/icons/remote.png",
    gif: "/icons/remote.gif",
    title: "Remote Work",
    description: "Flexible work arrangements with hybrid and remote options available."
  },
  {
    staticImage: "/icons/balance.png",
    gif: "/icons/balance.gif",
    title: "Work-Life Balance",
    description: "Generous PTO, paid holidays, and flexible working hours."
  },
  {
    staticImage: "/icons/team.png",
    gif: "/icons/team.gif",
    title: "Team Events",
    description: "Regular team building activities, social events, and company outings."
  },
  {
    staticImage: "/icons/career.png",
    gif: "/icons/career.gif",
    title: "Career Growth",
    description: "Clear career progression paths and mentorship opportunities."
  }
];

const openings = [
  {
    id: 1,
    title: "Senior Security Systems Engineer",
    department: "Engineering",
    location: "Mumbai, India (Hybrid)",
    type: "Full-time",
    description: "Lead the design and implementation of advanced security systems for enterprise clients.",
    featured: true
  },
  {
    id: 2,
    title: "Technical Support Specialist",
    department: "Customer Success",
    location: "Delhi, India",
    type: "Full-time",
    description: "Provide expert technical support for our security solutions and systems."
  },
  {
    id: 3,
    title: "Sales Engineer",
    department: "Sales",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Drive technical sales and provide solutions consulting to enterprise clients.",
    featured: true
  },
  {
    id: 4,
    title: "Product Manager",
    department: "Product",
    location: "Remote (India)",
    type: "Full-time",
    description: "Lead the product strategy and roadmap for our security solutions."
  }
];

export default function CareersPage() {
  const [hoveredJob, setHoveredJob] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    coverLetter: ''
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        resume: e.target.files![0]
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-[#f7b801]/90"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('/hero-background-1.png')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading tracking-tight">
              Join Our Mission
        </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-light">
              Help us shape the future of security technology and make a real impact in protecting what matters most.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="hover:scale-105 transition-transform bg-[#f7b801] hover:bg-[#f7b801]/90 text-primary font-medium text-lg px-8"
              onClick={() => document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary font-heading">Our Culture</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              At GenX Secure, we foster an environment of innovation, collaboration, and continuous growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-500 ease-in-out 
                bg-gradient-to-br from-white to-gray-50 hover:to-gray-100
                transform hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f7b801]/0 via-[#f7b801] to-[#f7b801]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader>
                  <div className="relative">
                    <div className="h-24 w-24 rounded-xl overflow-hidden mb-6 
                    transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <img 
                        src={benefit.staticImage}
                        alt={benefit.title}
                        className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                      />
                      <img 
                        src={benefit.gif}
                        alt={`${benefit.title} animation`}
                        className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-heading text-primary mb-3 group-hover:text-[#f7b801] transition-colors duration-300">
                    {benefit.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-light text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#f7b801]/0 via-[#f7b801] to-[#f7b801]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section id="openings" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white font-heading">Current Openings</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Explore our current opportunities and find your perfect role.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openings.map((job) => (
              <div 
                key={job.id} 
                className="relative h-fit"
                onMouseEnter={() => setHoveredJob(job.id)}
                onMouseLeave={() => setHoveredJob(null)}
              >
                <Card 
                  className={cn(
                    "transition-all duration-700 ease-in-out overflow-hidden bg-gray-800 border-gray-700",
                    hoveredJob === job.id 
                      ? "ring-2 ring-[#f7b801]"
                      : "hover:shadow-lg hover:-translate-y-1 hover:bg-gray-700",
                    "relative"
                  )}
                >
                  {job.featured && (
                    <div className="absolute top-4 right-4 flex items-center text-[#f7b801] text-sm font-medium">
                      <Star className="h-4 w-4 mr-1 fill-[#f7b801]" />
                      Featured
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl mb-2 font-heading text-white">{job.title}</CardTitle>
                        <CardDescription>
                          <div className="space-y-2">
                            <p className="text-gray-300">{job.department} · {job.location}</p>
                            <p className="text-[#f7b801] font-medium">{job.type}</p>
                          </div>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 font-light text-lg">{job.description}</p>
                    <div 
                      className={cn(
                        "mt-8 space-y-4 bg-gray-700 p-6 rounded-lg transition-all duration-1000 ease-in-out transform",
                        hoveredJob === job.id 
                          ? "opacity-100 max-h-[1000px] translate-y-0" 
                          : "opacity-0 max-h-0 -translate-y-4 overflow-hidden p-0"
                      )}
                    >
                      <div className={cn(
                        "transition-opacity duration-1000 ease-in-out space-y-4",
                        hoveredJob === job.id ? "opacity-100 delay-200" : "opacity-0"
                      )}>
                        <Input
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#f7b801] focus:ring-[#f7b801] transition-all duration-500"
                        />
                        <Input
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#f7b801] focus:ring-[#f7b801] transition-all duration-500"
                        />
                        <Input
                          type="tel"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#f7b801] focus:ring-[#f7b801] transition-all duration-500"
                        />
                        <div className="relative w-full space-y-1">
                          <div className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3">
                            <Input
                              type="file"
                              accept=".pdf,.doc,.docx"
                              onChange={handleFileChange}
                              className="w-full bg-transparent border-0 text-white 
                                file:mr-3 file:py-1.5 file:px-4 file:rounded-lg file:border-0 
                                file:text-sm file:font-medium file:bg-[#f7b801]/10 
                                file:text-[#f7b801] hover:file:bg-[#f7b801]/20 
                                transition-all duration-500 text-sm
                                focus:outline-none focus:ring-0
                                h-9"
                            />
                          </div>
                          <p className="text-gray-400 text-xs pl-1">PDF, DOC, DOCX (Max: 5MB)</p>
                        </div>
                        <Textarea
                          placeholder="Cover Letter (Optional)"
                          value={formData.coverLetter}
                          onChange={(e) => setFormData(prev => ({ ...prev, coverLetter: e.target.value }))}
                          className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#f7b801] focus:ring-[#f7b801] transition-all duration-500"
                        />
                        <a
                          href={`mailto:jishanpochi30@gmail.com?subject=${encodeURIComponent(`Job Application - ${job.title}`)}&body=${encodeURIComponent(
                            `Dear Hiring Team,

I am writing to express my interest in the ${job.title} position at GenX Secure.

Professional Information:
----------------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Location: ${job.location}
Department: ${job.department}
Position Type: ${job.type}

Cover Letter:
-----------
${formData.coverLetter || 'Not provided'}

I have attached my resume for your review.

Thank you for considering my application. I look forward to discussing how I can contribute to GenX Secure.

Best regards,
${formData.name}`
                          )}`}
                          className={`w-full mt-2 inline-block text-center rounded-lg px-6 py-3 font-semibold bg-[#f7b801] text-gray-900 hover:bg-[#f7b801]/90 transition-colors ${!(formData.name && formData.email && formData.phone) ? 'pointer-events-none opacity-50' : ''}`}
                          tabIndex={formData.name && formData.email && formData.phone ? 0 : -1}
                          aria-disabled={!(formData.name && formData.email && formData.phone)}
                        >
                          Apply via Email <Send className="ml-2 h-4 w-4 inline" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Application Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7b801]/5 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-primary font-heading">Don't See Your Perfect Role?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 font-light">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-[#f7b801] text-[#f7b801] hover:bg-[#f7b801]/10 font-medium px-8"
          >
            Submit General Application
          </Button>
      </div>
      </section>
    </div>
  );
}

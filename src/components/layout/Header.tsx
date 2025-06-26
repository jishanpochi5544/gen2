"use client";
import Link from 'next/link';
import { ShieldCheck, Menu, X, ChevronDown, LucideIcon, Video, HardDrive, KeyRound, ListChecks, Info, Layers, Palette, Mail as MailIconSvg, ArrowUpRight, Grid, Camera, Award, Building2, Settings, ArrowRight, House, Mic, Cpu, Flame, Siren, SignalZero, ScreenShare } from 'lucide-react';
import { SparkleButton } from '@/components/ui/SparkleButton';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { navItems } from '@/lib/data';
import type { NavItem, MegaMenuCardItem } from '@/types';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";


export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [isSolutionsMenuOpen, setIsSolutionsMenuOpen] = React.useState(false);
  const solutionsMenuTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const solutionsTriggerRef = React.useRef<HTMLButtonElement>(null);
  const solutionsMenuCooldownRef = React.useRef(false);

  const handleSolutionsMenuEnter = () => {
    if (solutionsMenuCooldownRef.current) {
      return;
    }
    if (solutionsMenuTimerRef.current) {
      clearTimeout(solutionsMenuTimerRef.current);
      solutionsMenuTimerRef.current = null;
    }
    setIsSolutionsMenuOpen(true);
  };

  const handleSolutionsMenuLeave = () => {
    solutionsMenuTimerRef.current = setTimeout(() => {
      setIsSolutionsMenuOpen(false);
    }, 200); 
  };
  
  const handleOtherNavItemEnter = () => {
    if (solutionsMenuTimerRef.current) {
      clearTimeout(solutionsMenuTimerRef.current);
      solutionsMenuTimerRef.current = null;
    }
    if (isSolutionsMenuOpen) {
      setIsSolutionsMenuOpen(false);
      solutionsMenuCooldownRef.current = true;
      setTimeout(() => {
        solutionsMenuCooldownRef.current = false;
      }, 300); 
    } else {
      setIsSolutionsMenuOpen(false);
    }
  };

  const closeSolutionsMenuOnScroll = () => {
      setIsSolutionsMenuOpen(false); 
    };
  

  useEffect(() => {
    const handleHeaderScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    window.addEventListener('scroll', closeSolutionsMenuOnScroll, { passive: true });
    
    handleHeaderScroll(); 

    return () => {
      window.removeEventListener('scroll', handleHeaderScroll);
      window.removeEventListener('scroll', closeSolutionsMenuOnScroll);
      if (solutionsMenuTimerRef.current) {
        clearTimeout(solutionsMenuTimerRef.current);
      }
    };
  }, []); 

  const solutionCardsData: MegaMenuCardItem[] = [
    {
      name: 'Surveillance Systems',
      href: '/solutions?category=Surveillance%20Systems',
      icon: Video,
      description: "Comprehensive monitoring with CCTV, Voice Loggers, and HPC for analytics.",
      dataAiHint: 'surveillance systems overview',
      subItems: [
        { name: "CCTV Cameras", href: `/solutions?category=${encodeURIComponent("CCTV Cameras")}` },
        { name: "Voice Logger", href: `/solutions?category=${encodeURIComponent("Voice Logger")}` },
        { name: "HPC", href: `/solutions?category=${encodeURIComponent("HPC")}` },
      ]
    },
    {
      name: 'Fire & Emergency System',
      href: `/solutions?category=${encodeURIComponent("Fire & Emergency System")}`,
      icon: Flame,
      description: "Early detection, alerts, and communication for fire safety and emergencies.",
      dataAiHint: 'fire safety system',
    },
    {
      name: 'Access Control',
      href: `/solutions?category=${encodeURIComponent("Access Control")}`,
      icon: KeyRound,
      description: "Manage facility access with cutting-edge systems for top-tier security.",
      dataAiHint: 'access control security',
    },
    {
      name: 'Intruder Detection System',
      href: `/solutions?category=${encodeURIComponent("Intruder Detection System")}`,
      icon: Siren,
      description: "Reliable sensors and alarms to detect and deter unauthorized access.",
      dataAiHint: 'intruder alarm system',
    },
    {
      name: 'Office & Home Automations',
      href: `/solutions?category=${encodeURIComponent("Office & Home Automations")}`,
      icon: Settings,
      description: "Smart automation solutions for offices and homes, enhancing comfort and efficiency.",
      dataAiHint: 'office and home automation',
    },
    {
      name: 'Command Control Room',
      href: `/solutions?category=${encodeURIComponent("Command Control Room")}`,
      icon: ScreenShare,
      description: "Integrated solutions for central monitoring and operational command.",
      dataAiHint: 'security control room',
    },
    {
      name: "All Solutions",
      href: "/solutions",
      icon: Grid,
      description: "Browse our complete catalog of innovative security products.",
      dataAiHint: 'all solutions grid',
    }
  ];

  const NavLink = ({ item, className, onClick, children, onMouseEnter }: { item: NavItem, className?: string, onClick?: () => void, children?: React.ReactNode, onMouseEnter?: () => void }) => {
    const isActive = pathname === item.href || (item.href === '/solutions' && pathname.startsWith('/solutions'));
    const IconComponent = item.icon;

    return (
      <Link
        href={item.href}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        className={cn(
          "group relative text-sm font-medium transition-colors hover:text-primary py-2",
          isActive ? "text-primary" : "text-foreground/80",
          className
        )}
      >
        <span className="relative z-10 flex items-center">
          {IconComponent && <IconComponent className="mr-2 h-4 w-4 inline-block" />}
          {item.label}
          {children}
        </span>
        {!item.isMegaMenu && (
            <span
            className={cn(
                "absolute bottom-0 left-1/2 block h-[2px] bg-primary transition-all duration-300 ease-out transform -translate-x-1/2",
                isActive ? "w-full" : "w-0 group-hover:w-full"
            )}
            ></span>
        )}
      </Link>
    );
  };
  

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className={cn(
        "container flex max-w-screen-2xl items-center justify-between transition-all duration-300 ease-in-out",
        isScrolled ? "h-16" : "h-20"
      )}>
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-300 group md:ml-4" onMouseEnter={handleOtherNavItemEnter}>
           <Image
              src="/genx-logo.png" 
              alt="GenX Secure Logo"
              width={isScrolled ? 212 : 254}
              height={isScrolled ? 40 : 48}
              className="object-contain transition-all duration-300 group-hover:scale-105"
              data-ai-hint="company logo"
              priority
            />
        </Link>

        <div className="hidden md:flex items-center md:mr-4">
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return item.isMegaMenu ? (
                <DropdownMenu key={item.href} open={isSolutionsMenuOpen} onOpenChange={setIsSolutionsMenuOpen}>
                  <DropdownMenuTrigger
                    ref={solutionsTriggerRef}
                    asChild
                    onMouseEnter={handleSolutionsMenuEnter}
                    onMouseLeave={handleSolutionsMenuLeave}
                    onClick={(e) => {
                       // Let onOpenChange handle the state via Radix
                    }}
                  >
                    <Button
                      variant="ghost"
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary hover:bg-primary/5 px-3 py-2 h-auto group",
                        (pathname.startsWith('/solutions') || isSolutionsMenuOpen) ? "text-primary bg-primary/10" : "text-foreground/80"
                      )}
                      aria-expanded={isSolutionsMenuOpen}
                    >
                      {IconComponent && <IconComponent className="mr-2 h-4 w-4 inline-block" />}
                      {item.label}
                      <ChevronDown className={cn("ml-1 h-4 w-4 opacity-70 transition-transform duration-200", isSolutionsMenuOpen && "rotate-180")} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="center"
                    className="w-full lg:max-w-6xl p-6 shadow-xl rounded-lg border bg-background/90 backdrop-blur-sm" // Max width increased slightly
                    onMouseEnter={handleSolutionsMenuEnter}
                    onMouseLeave={handleSolutionsMenuLeave}
                    sideOffset={isScrolled ? 8 : 12} 
                  >
                    <DropdownMenuLabel className="text-2xl font-bold text-foreground px-0 pb-4 mb-6 border-b text-center">
                      Explore Our Security Solutions
                    </DropdownMenuLabel>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> {/* Adjusted for potential more cards */}
                       {solutionCardsData.map((card) => {
                        const CardIcon = card.icon;
                        const hasSubItems = card.subItems && card.subItems.length > 0;
                        return (
                           <div
                            key={card.name}
                            className={cn(
                               "group/item relative flex flex-col p-6 rounded-2xl transition-all duration-300",
                               "bg-gradient-to-br from-white via-[#FFF7E6] to-[#FFE4B3]/20",
                               "border border-[#FFE4B3]",
                               "shadow-[0_2px_8px_-2px_rgba(255,153,0,0.1)]",
                               "hover:shadow-[0_8px_20px_-4px_rgba(255,153,0,0.15),0_4px_12px_-2px_rgba(255,153,0,0.1)]",
                               "hover:border-[#FF9900]/30 hover:-translate-y-1",
                               "hover:bg-gradient-to-br hover:from-white hover:via-[#FFE4B3]/30 hover:to-[#FFD580]/30"
                            )}
                          >
                            <div className="flex items-center mb-3">
                              <Link
                                href={card.href}
                                onClick={() => setIsSolutionsMenuOpen(false)}
                                className="flex items-center group/titletext"
                              >
                                <div className={cn(
                                  "flex-shrink-0 mr-3 inline-flex items-center justify-center rounded-xl",
                                  "bg-gradient-to-br from-[#FFE4B3] to-[#FFD580] p-2.5",
                                  "shadow-[0_2px_4px_rgba(255,153,0,0.15)]",
                                  "transition-all duration-300",
                                  "group-hover/titletext:shadow-[0_4px_8px_rgba(255,153,0,0.25)]",
                                  "group-hover/titletext:scale-105",
                                  "group-hover/titletext:bg-gradient-to-br",
                                  "group-hover/titletext:from-[#FFD580] group-hover/titletext:to-[#FFE4B3]"
                                )}>
                                  <CardIcon className="h-8 w-8 text-black/80 transition-all duration-300 group-hover/titletext:rotate-[-5deg] group-hover/titletext:scale-110" />
                                </div>
                                <h3 className="text-xl font-semibold text-black/80 group-hover/titletext:text-black transition-colors whitespace-normal break-words">
                                  {card.name}
                                </h3>
                              </Link>
                            </div>

                                                         <div className="text-sm text-black/70 flex-grow">
                               <p className="line-clamp-2 mb-4">{card.description}</p>
                               {hasSubItems && card.subItems && (
                                 <ul className="space-y-2.5 pt-3 border-t border-[#FFE4B3]">
                                  {card.subItems.map(subItem => (
                                    <li key={subItem.name}>
                                      <Link
                                        href={subItem.href}
                                        className="flex items-center text-sm text-black/60 hover:text-black group/sublink"
                                        onClick={() => setIsSolutionsMenuOpen(false)}
                                      >
                                        <ArrowRight className="mr-2 h-3.5 w-3.5 transition-all duration-300 group-hover/sublink:translate-x-1 group-hover/sublink:text-black" />
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                                                         {card.name !== "All Solutions" && (
                              <Link
                                  href={card.href}
                                  className={cn(
                                    "absolute bottom-4 right-4 flex items-center justify-center h-10 w-10 rounded-xl transition-all duration-500",
                                    "bg-gradient-to-br from-[#FFE4B3] to-[#FFD580]",
                                    "shadow-[0_2px_4px_rgba(255,153,0,0.15)]",
                                    "text-black/80",
                                    "group-hover/item:shadow-[0_4px_8px_rgba(255,153,0,0.25)]",
                                    "hover:scale-110 hover:from-[#FFD580] hover:to-[#FFE4B3]"
                                  )}
                                  onClick={() => setIsSolutionsMenuOpen(false)}
                                  aria-label={`Explore ${card.name}`}
                              >
                                  <ArrowRight className="h-5 w-5 transition-all duration-500 animate-pulse group-hover/item:animate-none group-hover/item:rotate-[360deg]" />
                              </Link>
                            )}
                              {card.name === "All Solutions" && (
                                <Link
                                    href={card.href}
                                    className={cn(
                                    "mt-auto block w-full text-center py-2.5 rounded-xl transition-all duration-300",
                                    "bg-gradient-to-r from-[#FFE4B3] to-[#FFD580]",
                                    "text-black/80 shadow-[0_2px_4px_rgba(255,153,0,0.15)]",
                                    "hover:shadow-[0_4px_8px_rgba(255,153,0,0.25)]",
                                    "hover:from-[#FFD580] hover:to-[#FFE4B3]"
                                    )}
                                    onClick={() => setIsSolutionsMenuOpen(false)}
                                >
                                  Explore All Solutions
                                </Link>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <NavLink
                  key={item.href}
                  item={item}
                  className="px-3 block"
                  onMouseEnter={handleOtherNavItemEnter}
                />
              );
            })}
          </nav>
           <div className="ml-6 flex items-center" onMouseEnter={handleOtherNavItemEnter}>
            <Link href="/contact" passHref legacyBehavior>
              <button
                type="button"
                className="flex justify-center items-center shadow-xl text-sm font-medium bg-gray-50 backdrop-blur-md isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#f5f7fa] before:hover:bg-gradient-to-r before:hover:from-blue-600 before:hover:to-blue-300 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-5 py-2 overflow-hidden border-2 rounded-full group"
                style={{ minWidth: '120px' }}
              >
                Contact Us
                <svg
                  className="w-6 h-6 ml-2 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-1.5 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-6 flex flex-col">
              <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
               <div className="flex justify-between items-center mb-4">
                 <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image
                      src="/genx-logo.png" 
                      alt="GenX Secure Logo"
                      width={212}
                      height={40}
                      className="object-contain"
                      data-ai-hint="company logo"
                      priority
                    />
                  </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                     <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>

              <div className="flex flex-col space-y-5 flex-grow">
                {navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    item={item}
                    className="text-lg py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                ))}
              </div>
              <div className="mt-auto pt-6 border-t border-border/30">
                <Link href="/contact" passHref legacyBehavior>
                  <button
                    type="button"
                    className="w-full flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#f3f4f6] before:hover:bg-gradient-to-r before:hover:from-blue-600 before:hover:to-blue-300 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Explore
                    <svg
                      className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                      viewBox="0 0 16 19"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                        className="fill-gray-800 group-hover:fill-gray-800"
                      ></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

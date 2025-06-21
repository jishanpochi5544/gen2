
import type { TeamMember } from '@/types';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Mail, Phone, Linkedin, Facebook, Instagram } from 'lucide-react';

interface TeamMemberFlipCardProps {
  member: TeamMember;
}

export function TeamMemberFlipCard({ member }: TeamMemberFlipCardProps) {
  return (
    <div className="group w-72 h-96 [perspective:1000px]">
      <div className={cn(
        "relative w-full h-full rounded-lg shadow-xl border border-border",
        "transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
      )}>
        {/* Front Side - Image, Name */}
        <div className={cn(
          "absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden bg-card flex flex-col"
        )}>
          <div className="flex-grow relative">
            <Image
              src={member.image}
              alt={member.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={member.dataAiHint || 'team member photo'}
            />
          </div>
          <div className="p-3 bg-background/80 backdrop-blur-sm border-t border-border/50 text-center">
            <h4 className="font-bold text-md text-foreground truncate">{member.name}</h4>
            {/* Icons removed from here */}
          </div>
        </div>

        {/* Back Side - Details with Rotating Border and Social Icons */}
        <div className={cn(
          "absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden bg-card",
          "[transform:rotateY(180deg)] text-card-foreground"
        )}>
          {/* Animated Border Container */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-md">
            <div
              className={cn(
                "absolute w-40 h-[160%] animate-rotation_481",
                "bg-[linear-gradient(90deg,transparent,#ff9966,#ff9966,#ff9966,#ff9966,transparent)]"
              )}
            />
          </div>
          {/* Actual Content (sits on top of animation, slightly inset) */}
          <div className="absolute inset-[3px] bg-card rounded-[calc(theme(borderRadius.lg)-3px)] p-4 flex flex-col text-center">
            {/* Top section for Name and Role */}
            <div className="mb-3 pt-2">
              <h3 className="text-xl font-bold text-primary">{member.name}</h3>
              <p className="text-sm text-accent font-semibold">{member.role}</p>
            </div>

            {/* Bio section */}
            <div className="flex-grow overflow-y-auto text-center custom-scrollbar mb-3">
              {member.bio ? (
                <p className="text-xs text-foreground/90 font-semibold text-center">
                  {member.bio}
                </p>
              ) : (
                <p className="text-xs text-foreground/90 font-semibold text-center">
                  A dedicated member of the GenX Secure team, committed to excellence and innovation in security solutions.
                </p>
              )}
            </div>

            {/* Social Icons Section */}
            <div className="mt-auto pt-3 border-t border-border/30">
              <div className="flex justify-center items-center space-x-4">
                <a href={member.email ? `mailto:${member.email}` : "#"} aria-label={`Email ${member.name}`} className="text-muted-foreground hover:text-primary hover:scale-110 transform transition-all duration-200">
                  <Mail className="w-5 h-5" />
                </a>
                <a href={member.phone ? `tel:${member.phone}` : "#"} aria-label={`Call ${member.name}`} className="text-muted-foreground hover:text-primary hover:scale-110 transform transition-all duration-200">
                  <Phone className="w-5 h-5" />
                </a>
                {/* Add other social links similarly, potentially from member data */}
                <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary hover:scale-110 transform transition-all duration-200">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary hover:scale-110 transform transition-all duration-200">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary hover:scale-110 transform transition-all duration-200">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

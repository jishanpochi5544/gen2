
"use client";

import type { Metadata } from 'next';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { AlertTriangle, Info, Terminal, CheckCircle, Palette, Settings, User, CalendarDaysIcon, MessageSquare, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

// export const metadata: Metadata = { // Metadata cannot be used in client components directly like this
//   title: 'UI Components Showcase',
//   description: 'A showcase of various UI components available in GenX Secure.',
// };


export default function ComponentsShowcasePage() {
  const { toast } = useToast();
  const [progress, setProgress] = useState(13);
  const [sliderValue, setSliderValue] = useState([50]);
  const [isChecked, setIsChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("option-one");
  const [isSwitchedOn, setIsSwitchedOn] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-background to-secondary/30 min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <header className="text-center mb-12">
          <Palette className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">UI Components Showcase</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the variety of beautifully styled UI elements used across GenX Secure.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Section 1: Interactive Elements */}
          <Card className="shadow-lg border hover:shadow-accent/20 hover:border-accent/70 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center"><Settings className="mr-2 h-6 w-6 text-primary" />Interactive Elements</CardTitle>
              <CardDescription>Common controls for user input and interaction.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nameInput">Name Input</Label>
                <Input id="nameInput" placeholder="e.g., John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="messageTextarea">Message</Label>
                <Textarea id="messageTextarea" placeholder="Type your message here..." />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" checked={isChecked} onCheckedChange={(checked) => setIsChecked(Boolean(checked))} />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
              <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="r1" />
                  <Label htmlFor="r1">Option One</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="r2" />
                  <Label htmlFor="r2">Option Two</Label>
                </div>
              </RadioGroup>
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" checked={isSwitchedOn} onCheckedChange={setIsSwitchedOn} />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
              </div>
              <div className="space-y-2">
                <Label>Slider ({sliderValue[0]})</Label>
                <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
              </div>
              <Button>Default Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="secondary">Secondary Button</Button>
            </CardContent>
          </Card>

          {/* Section 2: Feedback & Display */}
          <Card className="shadow-lg border hover:shadow-accent/20 hover:border-accent/70 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center"><Info className="mr-2 h-6 w-6 text-primary" />Feedback & Display</CardTitle>
              <CardDescription>Elements for conveying information and status.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>You can use a terminal for advanced commands.</AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Error!</AlertTitle>
                <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
              </Alert>
              <div className="space-x-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
              <div className="space-y-2">
                <Label>Progress ({progress}%)</Label>
                <Progress value={progress} className="w-full" />
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover Me (Tooltip)</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a helpful tooltip!</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="https://placehold.co/100x100.png" alt="@shadcn" data-ai-hint="person avatar" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>User Avatar</p>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: Overlays & Modals */}
          <Card className="shadow-lg border hover:shadow-accent/20 hover:border-accent/70 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center"><MessageSquare className="mr-2 h-6 w-6 text-primary" />Overlays & Modals</CardTitle>
              <CardDescription>Components for pop-ups and notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    {/* Dialog content example */}
                    <Input defaultValue="Pedro Duarte" />
                  </div>
                  <DialogClose asChild>
                     <Button type="button" variant="secondary">Close</Button>
                  </DialogClose>
                </DialogContent>
              </Dialog>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">Show Alert Dialog</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your account.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Open Popover</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Dimensions</h4>
                      <p className="text-sm text-muted-foreground">
                        Set the dimensions for the layer.
                      </p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <Button
                onClick={() => {
                  toast({
                    title: "Scheduled: Catch up ",
                    description: "Friday, February 10, 2023 at 5:57 PM",
                    action: (
                       <Button variant="outline" size="sm">Undo</Button>
                    ),
                  });
                }}
              >
                Show Toast
              </Button>
            </CardContent>
          </Card>
          
          {/* Section 4: Navigation & Layout */}
           <Card className="shadow-lg border hover:shadow-accent/20 hover:border-accent/70 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center"><Palette className="mr-2 h-6 w-6 text-primary" />Navigation & Layout</CardTitle>
              <CardDescription>Elements for organizing content and navigation.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to WAI-ARIA design patterns.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Separator />
              <Tabs defaultValue="account" className="w-full">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">Make changes to your account here.</TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Section 5: Date */}
          <Card className="shadow-lg border hover:shadow-accent/20 hover:border-accent/70 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center"><CalendarDaysIcon className="mr-2 h-6 w-6 text-primary" />Date</CardTitle>
              <CardDescription>Component for date selection.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
               <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}

    
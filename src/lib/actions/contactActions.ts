
'use server';

import * as z from "zod";

// Re-define the schema here or import from a shared location if it grows
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(50, "Name must be less than 50 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional().refine(value => !value || /^[+]?[0-9\s-()]{7,20}$/.test(value), "Invalid phone number format."),
  company: z.string().max(50, "Company name must be less than 50 characters.").optional(),
  inquiryType: z.enum(["quote", "demo", "question"], { required_error: "Please select an inquiry type."}),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message must be less than 500 characters."),
});

type FormData = z.infer<typeof formSchema>;

export async function submitContactInquiry(data: FormData): Promise<{ success: boolean; message: string }> {
  console.log("Server Action: Contact form data received:", data);
  
  // Simulate backend processing (e.g., sending an email, saving to database)
  // For now, we'll just log it and return success.
  // In a real application, you'd integrate with an email service or database here.
  
  // Simulate a short delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // You could add error handling here if email sending/DB save fails
  // For example:
  // if (Math.random() > 0.8) { // Simulate a 20% chance of error
  //   console.error("Server Action: Failed to process inquiry.");
  //   return { success: false, message: "An unexpected error occurred on the server. Please try again." };
  // }

  return { success: true, message: "Your inquiry has been submitted successfully! We'll get back to you soon." };
}

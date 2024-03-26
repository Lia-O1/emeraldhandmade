import { z } from "zod";

export const paymentFormSchema = z.object({
  name: z
    .string()
    .min(1, "Please enter your name")
    .regex(/^[A-Za-z\s]+$/, "Name can only contain letters")
    .refine(
      (value) => (value.match(/[A-Za-z]/g) || []).length >= 4,
      "Name must be at least 4 characters long"
    ),

  cardNumber: z
    .string()
    .min(1, "Please enter your card number")
    .regex(/^[0-9\s]+$/, "Card number can only contain digits")
    .refine(
      (value) => (value.match(/\d/g) || []).length >= 16,
      "Card number must be at least 16 digits long"
    )
    .refine(
      (value) => (value.match(/\d/g) || []).length <= 19,
      "Card number cannot exceed 19 digits"
    ),

  expiresMonth: z
    .string()
    .refine(
      (value) => /^(0[1-9]|1[0-2])$/.test(value),
      "Please enter a month as a two-digit number between 01 and 12"
    )
    .refine((value) => value !== "", "Please enter the expiration month"),
  expiresYear: z
    .string()
    .refine((value) => /^\d{4}$/.test(value), "Please enter a 4-digit year")
    .refine((value) => value !== "", "Please enter the expiration year")
    .refine(
      (value) => parseInt(value) >= new Date().getFullYear(),
      "The year cannot be in the past"
    )
    .refine(
      (value) =>
        parseInt(value) >= new Date().getFullYear() &&
        parseInt(value) <= new Date().getFullYear() + 10,
      `The year cannot be more than 10 years in the future`
    ),
  cvc: z
    .string()
    .min(1, "Please enter the CVC")
    .regex(/^\d+$/, "CVC can only contain digits")
    .min(3, "CVC must be at least 3 digits long")
    .max(4, "CVC cannot exceed 4 digits"),
});

export type TPaymentFormSchema = z.infer<typeof paymentFormSchema>;

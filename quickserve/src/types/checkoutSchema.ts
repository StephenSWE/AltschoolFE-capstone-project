import { z } from "zod";

export const checkoutSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
});


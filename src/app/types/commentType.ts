import { z } from "zod";
export const commentSchema = z.object({
  name: z
    .string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(20, "El nombre debe tener menos de 50 caracteres"),
  email: z
    .string()
    .email("Debe ser un email valido")
    .min(3, "El email debe tener al menos 3 caracteres")
    .max(50, "El email debe tener menos de 100 caracteres"),
  body: z
    .string()
    .min(3, "El comentario debe tener al menos 3 caracteres")
    .max(200, "El comentario debe tener menos de 200 caracteres"),
});
export type Comment = z.infer<typeof commentSchema>;

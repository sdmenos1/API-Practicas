import { z } from "zod";
export const commentSchema = z.object({
  character: z
    .string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(20, "El nombre debe tener menos de 50 caracteres"),
  title: z
    .string()
    .min(3, "El titulo debe tener al menos 3 caracteres")
    .max(50, "El titulo debe tener menos de 100 caracteres"),
  body: z
    .string()
    .min(3, "El comentario debe tener al menos 3 caracteres")
    .max(200, "El comentario debe tener menos de 200 caracteres"),
});
export type Comment = z.infer<typeof commentSchema>;

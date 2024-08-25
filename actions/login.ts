//* Use server membuat data auth dikirimkan ke server
"use server";

//* Tanpa use server data auth hanya dibaca pada browser

import * as z from "zod";
import { LoginSchema } from "@/schemas";
// import { error } from "console";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  console.log(validatedFields);
  if (!validatedFields.success) {
    return {
      error: "Invalid Fields",
    };
  }

  return {
    success: "Login Success",
  };
};

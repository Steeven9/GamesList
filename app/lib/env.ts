import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    MONGODB_URI: z.string().url(),
    API_URL: z.string().url(),
  },
  client: {},
  runtimeEnv: {
    MONGODB_URI: process.env.MONGODB_URI || "mongodb://mongodb",
    API_URL: process.env.API_URL || "http://localhost:3000/api",
  },
});

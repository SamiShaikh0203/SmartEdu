import { defineConfig } from "drizzle-kit";
import {config} from "dotenv"
config()

export default defineConfig({
  dialect: "postgresql",
  schema: "./config/schema.js",

  dbCredentials:{
    url:"postgresql://Smartedu_owner:npg_jFRXpq7tZcV8@ep-billowing-forest-a10oix5g.ap-southeast-1.aws.neon.tech/Smartedu?sslmode=require"
    }
});

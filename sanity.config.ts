import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure"; // ✅ Changed from "sanity/desk"
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "Lumiqraft CMS",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  basePath: "/studio", // ✅ Add this

  plugins: [
    structureTool(), // ✅ Changed from deskTool()
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});

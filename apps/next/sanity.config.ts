/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { media } from "sanity-plugin-media";

import { apiVersion, dataset, projectId } from "./sanity/lib/api";
import { locate } from "./sanity/plugins/locate";
import { pageStructure, singletonPlugin } from "./sanity/plugins/settings";
import { schema } from "./sanity/schema";
import home from "./sanity/schemas/singletons/home";
import settings from "./sanity/schemas/singletons/settings";

export default defineConfig({
  title: "Visual Editing Demo",
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure: pageStructure([home, settings]) }),
    presentationTool({
      locate,
      previewUrl: {
        draftMode: {
          enable: "/api/draft",
        },
      },
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([home.name, settings.name]),
    media(),
  ],
});

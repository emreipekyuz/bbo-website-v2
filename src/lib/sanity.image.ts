import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

const projectId = process.env.SANITY_PROJECT_ID!;
const dataset = process.env.SANITY_DATASET || "production";

export const urlFor = (source: any) =>
  createImageUrlBuilder({ projectId, dataset }).image(source as Image);


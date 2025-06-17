import { z } from "zod/v4";

export const linkSchema = z.object({
  label: z.string(),
  url: z.string(),
  openLinkInNewTab: z.boolean(),
  showIcon: z.boolean(),
  lucideIconName: z.string(),
});

const imageSchema = z.object({
  alternativeText: z.string(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
});

const socialItemSchema = z.object({
  id: z.number(),
  label: z.string(),
  name: z.string(),
  url: z.string(),
});

export const heroItemSchema = z.object({
  id: z.number(),
  preheading: z.string(),
  heading: z.string(),
  cta: linkSchema,
  image: imageSchema
});

export const globalDataSchema = z.object({
  navbar: z.object({
    leftMenu: z.array(linkSchema.extend({ id: z.number() })),
    rightMenu: z.array(linkSchema.extend({ id: z.number() })),
    cta: linkSchema,
  }),
  siteRepresentation: z.object({
    logo: imageSchema,
    socialChannels: z.array(socialItemSchema),
  }),
});

export const homeDataSchema = z.object({
  hero: z.array(heroItemSchema),
});

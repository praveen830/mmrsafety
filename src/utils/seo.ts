/**
 * MMR Safety — SEO Utilities
 */

import { siteConfig } from "@data/siteConfig";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noindex?: boolean;
}

/**
 * Generates a formatted page title using the site's title template.
 */
export function getPageTitle(title?: string): string {
  if (!title || title === siteConfig.seo.defaultTitle) {
    return siteConfig.seo.defaultTitle;
  }
  return siteConfig.seo.titleTemplate.replace("%s", title);
}

/**
 * Resolves SEO properties with sensible defaults.
 */
export function resolveSEO(props: SEOProps = {}) {
  return {
    title: getPageTitle(props.title),
    description: props.description ?? siteConfig.seo.defaultDescription,
    canonicalUrl: props.canonicalUrl ?? siteConfig.url,
    ogImage: props.ogImage ?? siteConfig.seo.defaultOgImage,
    ogType: props.ogType ?? siteConfig.seo.type,
    noindex: props.noindex ?? false,
  };
}

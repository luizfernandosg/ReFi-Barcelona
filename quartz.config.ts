import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "ReFi Barcelona",
    pageTitleSuffix: " - Bridging Global and Local Regenerative Finance",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "refi-barcelona.netlify.app", // TODO: Update with actual domain
    ignorePatterns: ["private", "templates", ".obsidian", "backup_*"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fafdf9", // Very light green-tinted white (Minimal ReFi)
          lightgray: "#f0f0f0", // Neutral light gray
          gray: "#b8b8b8", // Neutral medium gray
          darkgray: "#4e4e4e", // Neutral dark gray  
          dark: "#2b2b2b", // Dark text (from Minimal)
          secondary: "#4a7c59", // ReFi primary green (sophisticated)
          tertiary: "#6fa76f", // Lighter ReFi green
          highlight: "rgba(74, 124, 89, 0.15)", // Green selection
          textHighlight: "rgba(229, 181, 103, 0.5)", // Warm yellow highlight
        },
        darkMode: {
          light: "#161618", // Dark background (from Minimal)
          lightgray: "#393639", // Dark light gray
          gray: "#646464", // Medium gray
          darkgray: "#d4d4d4", // Light gray text
          dark: "#ebebec", // Light text (from Minimal)
          secondary: "#6fa76f", // Brighter ReFi green for dark mode
          tertiary: "#4a7c59", // ReFi primary green
          highlight: "rgba(111, 167, 111, 0.20)", // Green selection
          textHighlight: "rgba(255, 177, 80, 0.3)", // Warm amber highlight
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config

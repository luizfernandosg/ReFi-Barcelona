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
          light: "#f9fdf9", // Very light green-tinted white
          lightgray: "#e8f3e8", // Light green-gray
          gray: "#a8c8a8", // Medium green-gray
          darkgray: "#2d5a2d", // Dark forest green
          dark: "#1a3d1a", // Very dark forest green
          secondary: "#2d7d32", // Forest green for links
          tertiary: "#66bb6a", // Vibrant green for accents
          highlight: "rgba(102, 187, 106, 0.15)", // Light green highlight
          textHighlight: "#81c78488", // Green text highlight
        },
        darkMode: {
          light: "#0d1b0d", // Very dark green background
          lightgray: "#1a3d1a", // Dark green-gray
          gray: "#4a7c4a", // Medium green
          darkgray: "#a8c8a8", // Light green-gray for text
          dark: "#e8f3e8", // Very light green for main text
          secondary: "#81c784", // Light green for links
          tertiary: "#66bb6a", // Vibrant green accents
          highlight: "rgba(129, 199, 132, 0.15)", // Light green highlight
          textHighlight: "#81c78488", // Green text highlight
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

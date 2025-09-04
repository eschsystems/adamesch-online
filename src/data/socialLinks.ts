export interface SocialLink {
  platform: string;
  handle: string;
  url: string;
  redirectPath: string; // The path that will trigger the redirect (without leading slash)
  isHidden?: boolean; // Optional: if true, link will not be displayed in the UI but still work as redirect
}

export const socialLinks: SocialLink[] = [
  {
    platform: "github",
    handle: "@adamesch",
    url: "https://github.com/adamesch",
    redirectPath: "github"
  },
  {
    platform: "linkedin", 
    handle: "@adameschpro",
    url: "https://linkedin.com/in/adameschpro",
    redirectPath: "linkedin"
  },
  {
    platform: "twitter",
    handle: "@mcescher0",
    url: "https://twitter.com/mcescher0",
    redirectPath: "twitter"
  },
  {
    platform: "x",
    handle: "@mcescher0",
    url: "https://x.com/mcescher0",
    redirectPath: "x",
    isHidden: true
  },
  {
    platform: "threads", 
    handle: "@adamesch_",
    url: "https://www.threads.com/@adamesch_",
    redirectPath: "threads"
  },
  {
    platform: "instagram", 
    handle: "@adamesch_",
    url: "https://www.instagram.com/adamesch_",
    redirectPath: "instagram"
  },
  {
    platform: "bluesky", 
    handle: "@adamesch.online",
    url: "https://bsky.app/profile/adamesch.online",
    redirectPath: "bluesky"
  },
  {
    platform: "twitch",
    handle: "@garaknotaspy", 
    url: "https://www.twitch.tv/garaknotaspy",
    redirectPath: "twitch"
  },
  {
    platform: "youtube", 
    handle: "@adamesch",
    url: "https://www.youtube.com/adamesch",
    redirectPath: "youtube"
  },
  {
    platform: "ko-fi", 
    handle: "@adamesch",
    url: "https://ko-fi.com/adamesch",
    redirectPath: "buymeacoffee"
  },
  {
    platform: "patreon", 
    handle: "@adamesch",
    url: "https://patreon.com/adamesch",
    redirectPath: "patreon"
  },
  {
    platform: "substack", 
    handle: "@adamesch",
    url: "https://substack.com/@adamesch",
    redirectPath: "substack"
  },
  {
    platform: "throne", 
    handle: "@adamesch",
    url: "https://throne.com/adamesch",
    redirectPath: "throne"
  },
  {
    platform: "followme",
    handle: "all links",
    url: "https://adamesch.online/#followme",
    redirectPath: "followme",
    isHidden: true
  }
];

// Helper function to get redirect mapping for Next.js
export function getRedirectMapping() {
  return socialLinks.reduce((acc, link) => {
    acc[link.redirectPath] = link.url;
    return acc;
  }, {} as Record<string, string>);
}

// Helper function to find link by platform
export function getLinkByPlatform(platform: string): SocialLink | undefined {
  return socialLinks.find(link => link.platform.toLowerCase() === platform.toLowerCase());
}

// Helper function to find link by redirect path
export function getLinkByRedirectPath(redirectPath: string): SocialLink | undefined {
  return socialLinks.find(link => link.redirectPath === redirectPath);
}
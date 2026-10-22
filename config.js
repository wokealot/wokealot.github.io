// ============================================================
//  SITE_CONFIG — the ONLY file you need to edit.
//  Change text, links, projects, images, colors here.
// ============================================================
window.SITE_CONFIG = {
  version: "6",                        // bump this whenever you change assets so browsers refetch them
  name: "WOKEALOT",
  siteTitle: "WOKEALOT — Roblox Dev",   // browser tab title (keep short; tabs truncate)
  subtitle: "Fullstack Programmer",
  kanjiLogo: "滝",                       // small kanji next to the nav logo
  tagline: "Turning creative ideas into reality.",
  commissionsOpen: true,                // shows "Open for commissions" in Contact

  heroIntro:
    "I've been scripting on Roblox for almost a year, primarily specializing in Skills/Abilities, UI Scripting, VFX Scripting, and Combat Systems. I also have experience with backend, including Data/ProfileStore and other gameplay systems.",

  about:
    "I'm a Roblox developer focused on creating engaging and high-quality systems. I enjoy turning creative ideas into functional and polished experiences, whether it's combat, abilities, UI, VFX, or backend systems.",
  aboutExtra:
    "If you need something that isn't listed, feel free to ask and I'll let you know if I can do it.",

  // Stats shown in About. Keep these honest — "projects" is counted from the list below automatically.
  stats: [
    { value: "1+", label: "Year Experience" },
    { value: "auto", label: "Public Demos" },   // "auto" = number of projects
    { value: "100%", label: "Passion" },
  ],

  skills: [
    { name: "Combat Systems",        icon: "swords" },
    { name: "UI Scripting",          icon: "ui" },
    { name: "Skills / Movesets",     icon: "spark" },
    { name: "Data / ProfileStore",   icon: "db" },
    { name: "VFX Scripting",         icon: "vfx" },
    { name: "Other Backend Systems", icon: "gear" },
  ],

  // Category filter buttons, in order. "All" is added automatically.
  categories: ["Combat", "Abilities", "UI"],

  // Add a demo = add one object. Thumbnail is pulled from YouTube automatically.
  projects: [
    { title: "Battleground Combat System",     youtube: "https://youtu.be/W8ymF6NWyX0", category: "Combat" },
    { title: "Unfinished Sword Combat System", youtube: "https://youtu.be/OmiSr5dz04k", category: "Combat",    note: "Unfinished / WIP" },
    { title: "Choso Piercing Blood",           youtube: "https://youtu.be/r_GAHlbXXkU", category: "Abilities" },
    { title: "Magic Combat System",            youtube: "https://youtu.be/hkEWgNcqHxo", category: "Combat" },
    { title: "Tatsumaki Wall Combo",           youtube: "https://youtu.be/IiXAa3eZl-w", category: "Abilities" },
    { title: "Jotaro Beatdown",                youtube: "https://youtu.be/igtoyunrA2w", category: "Abilities" },
    { title: "Aerial Ground Slam Skill",       youtube: "https://youtu.be/hCxrtJvkNZc", category: "Abilities" },
    { title: "Scrapped Combo Skill",           youtube: "https://youtu.be/mt_1b-gGgWI", category: "Abilities", note: "Prototype / scrapped" },
    { title: "Slot Selection",                 youtube: "https://youtu.be/7K9BTRlawbs", category: "UI" },
  ],

  discordUsername: "wokealot",   // "copy" button, no profile URL
  brandColors: true,             // platform colors on the contact icons (false = all white)
  // ids: x, youtube, discord, roblox, github
  socials: [
    { id: "x",       label: "Twitter",          sub: "@wokealot",    url: "https://x.com/wokealot" },
    { id: "youtube", label: "YouTube",          sub: "@cncerned",    url: "https://www.youtube.com/@cncerned" },
    { id: "discord", label: "Discord",          sub: "wokealot",     copy: true },
    { id: "discord", label: "Portfolio Server", sub: "Join Now",     url: "https://discord.gg/SwsYwQKCca" },
    { id: "roblox",  label: "Roblox",           sub: "View Profile", url: "https://www.roblox.com/users/11074309439/profile" },
  ],

  // Character art. Put your PNG/JPG files in /assets and set the paths.
  // Leave a path empty ("") and that layer is skipped (a subtle texture shows instead).
  images: {
    hero:     { src: "assets/hero-ink.svg",         opacity: 1,   parallax: 0.05 }, // right side of hero
    heroFigure:     { src: "assets/hero-figure.png",     opacity: 1,   parallax: 0.03, size: "contain", position: "right bottom" }, // characters sit over the ink layers
    aboutFigure:    { src: "assets/about-figure.png",    opacity: .95, parallax: 0.03, size: "contain", position: "center bottom" },
    skillsFigure:   { src: "assets/skills-figure.png",   opacity: .8,  parallax: 0.02, size: "contain", position: "right bottom" },
    contactFigure:  { src: "assets/contact-figure.png",  opacity: .9,  parallax: 0.02, size: "contain", position: "right bottom" },
    projectsFigure: { src: "assets/projects-figure.png", opacity: .85, parallax: 0.02, size: "contain", position: "left center" },
    heroInsetA: { src: "assets/inset-eye.svg" },     // small framed panels next to the name
    heroInsetB: { src: "assets/inset-torii.svg" },
    about:    { src: "assets/about-lightning.svg",  opacity: 1,   parallax: 0.04 },
    skills:   { src: "assets/skills-halftone.svg",  opacity: 1,   parallax: 0.03 },
    projects: { src: "assets/projects-strokes.svg", opacity: 0.9, parallax: 0.03 },
    contact:  { src: "assets/contact-torii.svg",    opacity: 0.9, parallax: 0.03 },
    texture:  { src: "", opacity: 0.18 }, // optional paper/brush texture tiled over everything
  },

  // Japanese side-notes, exactly as in the mockup. Edit freely.
  jp: {
    hero:     { vertical: "開発者", quote: "「創造を現実に。」", list: ["Create", "Develop", "Design", "Bring to life"] },
    about:    { vertical: "進み続ける。", list: ["Discipline", "Creativity", "Progress", "Better systems"] },
    projects: { vertical: "限界はない。", list: ["More ideas", "More systems", "More to come"] },
    skills:   { quote: "\"Ideas → Systems → Experiences.\"" },
    contact:  { vertical: "楽しもう。", list: ["Same passion.", "Different ideas.", "Bigger systems."] },
  },

  colors: {
    bg: "#0c0c0e",
    surface: "#141417",
    text: "#e8e6e1",
    muted: "#8d8a84",
    accent: "#c8323a",      // crimson
    accentSoft: "#6f9cc9",  // soft blue
  },

  animations: {
    enabled: true,          // master switch (also off when the OS asks for reduced motion)
    parallax: true,
    revealOnScroll: true,
  },
};

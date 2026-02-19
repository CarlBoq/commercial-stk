function makePanelImage(title: string, subtitle: string, accent: string) {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1280" height="800" viewBox="0 0 1280 800">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="100%" stop-color="#e2e8f0"/>
      </linearGradient>
    </defs>
    <rect width="1280" height="800" fill="url(#bg)"/>
    <rect x="88" y="78" width="1104" height="110" rx="20" fill="${accent}" opacity="0.18"/>
    <text x="120" y="136" font-size="48" font-family="Segoe UI, Arial, sans-serif" fill="#0f172a" font-weight="700">${title}</text>
    <text x="120" y="170" font-size="24" font-family="Segoe UI, Arial, sans-serif" fill="#475569">${subtitle}</text>
    <rect x="88" y="230" width="740" height="470" rx="20" fill="#ffffff" stroke="#cbd5e1"/>
    <rect x="852" y="230" width="340" height="220" rx="20" fill="#ffffff" stroke="#cbd5e1"/>
    <rect x="852" y="480" width="340" height="220" rx="20" fill="#ffffff" stroke="#cbd5e1"/>
    <rect x="124" y="282" width="668" height="24" rx="8" fill="${accent}" opacity="0.22"/>
    <rect x="124" y="330" width="616" height="18" rx="8" fill="#94a3b8" opacity="0.35"/>
    <rect x="124" y="368" width="552" height="18" rx="8" fill="#94a3b8" opacity="0.35"/>
    <rect x="124" y="418" width="186" height="160" rx="14" fill="#f8fafc" stroke="#cbd5e1"/>
    <rect x="333" y="418" width="186" height="160" rx="14" fill="#f8fafc" stroke="#cbd5e1"/>
    <rect x="542" y="418" width="186" height="160" rx="14" fill="#f8fafc" stroke="#cbd5e1"/>
  </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export const HOW_IT_WORKS_PREVIEW_IMAGES = {
  setup: makePanelImage("Setup Stage", "Onboarding workspace and team setup", "#0ea5e9"),
  schedule: makePanelImage("Schedule Stage", "Shift planning and policy workflows", "#22c55e"),
  payroll: makePanelImage("Payroll Stage", "Approvals and payroll-ready exports", "#f97316"),
} as const;

export const ABOUT_PREVIEW_IMAGES = {
  story: makePanelImage("Brand Story", "Positioning, mission, and customer value promise", "#2563eb"),
  trust: makePanelImage("Trust Layer", "Security, compliance, and support credibility", "#14b8a6"),
  team: makePanelImage("Team & Milestones", "People, outcomes, and growth momentum", "#a855f7"),
} as const;

export type FeatureItem = {
  key:
    | "my-schedule"
    | "premium-values"
    | "my-documents"
    | "my-company"
    | "training"
    | "my-request"
    | "my-schedule-cost";
  title: string;
  tagline: string;
  summary: string;
  contents: string[];
};

export const FEATURE_CATALOG: FeatureItem[] = [
  {
    key: "my-schedule",
    title: "My Schedule",
    tagline: "Live employee schedule with confirmation flow",
    summary:
      "Displays the employee's current schedule on the dashboard with a confirmation button.",
    contents: [
      "Current shift and assigned schedule view",
      "One-click shift confirmation button",
      "Schedule visibility directly from the employee dashboard",
    ],
  },
  {
    key: "premium-values",
    title: "Premium Values",
    tagline: "Overtime and premium hour inputs in one workspace",
    summary:
      "Allows employees to input OT hours, Rest Day hours, and Night Shift Differential (NSD) hours.",
    contents: [
      "OT hour entry fields",
      "Rest Day hour entry fields",
      "NSD hour entry fields",
      "Payroll-ready premium hour recording",
    ],
  },
  {
    key: "my-documents",
    title: "My Documents",
    tagline: "Employee document uploads connected to admin view",
    summary:
      "Enables employees to upload required 201 documents, which are viewable in the admin dashboard.",
    contents: [
      "201 document upload support",
      "Employee-side document submission",
      "Admin dashboard visibility for uploaded files",
      "Centralized document tracking for compliance",
    ],
  },
  {
    key: "my-company",
    title: "My Company",
    tagline: "Company culture and policy hub inside the app",
    summary:
      "Displays company information such as the Theme Song, Videos, Code of Conduct, and Mission and Vision within the employee app.",
    contents: [
      "Theme Song section",
      "Company videos section",
      "Code of Conduct access",
      "Mission and Vision display",
    ],
  },
  {
    key: "training",
    title: "Training and Development",
    tagline: "Training materials and modules for employee growth",
    summary:
      "Provides employees access to company training videos and training modules.",
    contents: [
      "Training video library",
      "Training module access",
      "Single in-app training location",
    ],
  },
  {
    key: "my-request",
    title: "My Request",
    tagline: "Multi-purpose employee ticketing and request management",
    summary:
      "Ticketing tools that allow creation and management of multi-purpose employee request forms through the admin dashboard.",
    contents: [
      "Multi-purpose request form creation",
      "Ticket-based request tracking",
      "Admin dashboard request management",
      "Status visibility for employee requests",
    ],
  },
  {
    key: "my-schedule-cost",
    title: "My Schedule Cost",
    tagline: "Early labor cost forecasting for better planning",
    summary: "Forecasts potential labor costs upon account creation.",
    contents: [
      "Initial labor cost projection during setup",
      "Cost visibility for planning decisions",
      "Forecast support before schedule finalization",
    ],
  },
];

export const FEATURE_BY_KEY = Object.fromEntries(
  FEATURE_CATALOG.map((feature) => [feature.key, feature]),
) as Record<FeatureItem["key"], FeatureItem>;

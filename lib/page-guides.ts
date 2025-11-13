export const PAGE_GUIDES = {
  overview: {
    title: "Dashboard Overview",
    description:
      "Your central hub for compliance status, key metrics, and actionable insights. All critical compliance information at a glance.",
    steps: [
      {
        number: 1,
        title: "Review Compliance Metrics",
        description:
          "Check your KPIs: Screened suppliers, Classified products, Market coverage, and Certificate status. Red/Yellow indicators need immediate attention.",
      },
      {
        number: 2,
        title: "Check Live Screening Status",
        description:
          "See real-time sanctions screening results. Green (Clear) means no hits, Yellow (Review needed) requires investigation, Red (Hit - escalated) needs urgent action.",
      },
      {
        number: 3,
        title: "Follow the Framework",
        description:
          "Track progress through RSM's 4-phase compliance framework: Assessment → Screening → Risk Analysis → Implementation.",
      },
      {
        number: 4,
        title: "Review Priorities",
        description:
          "AI-powered recommendations highlight what needs your attention first based on your compliance risks.",
      },
    ],
  },
  suppliers: {
    title: "Suppliers & Partners",
    description:
      "Manage your supplier network with comprehensive sanctions screening, WWFT compliance checks, and risk assessment.",
    steps: [
      {
        number: 1,
        title: "Add or Update Suppliers",
        description:
          "Click 'Add Supplier' to register new business partners. Complete all fields: company name, legal entity, beneficial ownership, and region.",
      },
      {
        number: 2,
        title: "Understand Screening Status",
        description:
          "Green = Cleared by sanctions lists. Yellow = Requires manual review. Red = Hit on OFAC/EU/UN lists - escalate immediately.",
      },
      {
        number: 3,
        title: "Review Risk Factors",
        description:
          "Assess jurisdiction risk, beneficial ownership transparency, and certifications. High-risk suppliers need enhanced due diligence.",
      },
      {
        number: 4,
        title: "Monitor Compliance",
        description:
          "Rescreening happens automatically. Stay updated with notifications when screening status changes or certificates expire.",
      },
    ],
  },
  products: {
    title: "Products & Classification",
    description:
      "Classify Fairphone products for export control, customs, and regulatory compliance across all markets.",
    steps: [
      {
        number: 1,
        title: "Understand Product Categories",
        description:
          "Fairphone products are classified as: FP6/FP5/FP4 (phones), Fairbuds (accessories), Spare parts, and Components. Each has different regulatory implications.",
      },
      {
        number: 2,
        title: "HS Codes & Tariffs",
        description:
          "HS codes determine tariff rates and VAT. HS 8517 is standard for phones. Accessories fall under 8516/8528 depending on function.",
      },
      {
        number: 3,
        title: "ECCN Classification",
        description:
          "ECCN determines US export restrictions. Most Fairphone products are EAR99 (no license required). Specific components may need licensing.",
      },
      {
        number: 4,
        title: "Market-Specific Rules",
        description:
          "Each market (EU, US, UK, CH) has different requirements. Use the compliance matrix to ensure all classifications are correct.",
      },
    ],
  },
  workflow: {
    title: "Data Input & Processing",
    description:
      "Streamlined workflow to input supplier, product, and shipment data with automatic compliance processing.",
    steps: [
      {
        number: 1,
        title: "Select Data Type",
        description:
          "Choose what you're adding: New Supplier, New Product, or New Shipment. Each has specific required fields.",
      },
      {
        number: 2,
        title: "Fill Required Information",
        description:
          "Complete all mandatory fields marked with *. Use dropdowns for standardized values (countries, HS codes, etc.) to ensure consistency.",
      },
      {
        number: 3,
        title: "Automatic Processing",
        description:
          "Once submitted, the system automatically: screens for sanctions, checks export restrictions, validates certifications, and assigns risk scores.",
      },
      {
        number: 4,
        title: "Review Results",
        description:
          "System returns compliance results within seconds. Any issues or manual review needs are flagged. Approved data enters your compliance records.",
      },
    ],
  },
  reports: {
    title: "Reports & Output",
    description: "Generate role-specific compliance reports for different stakeholders and regulatory bodies.",
    steps: [
      {
        number: 1,
        title: "Select Your Role",
        description:
          "Your role determines available reports. Procurement sees supplier summaries, Compliance sees full audit trails, Management sees risk dashboards.",
      },
      {
        number: 2,
        title: "Choose Report Type",
        description:
          "Options include: Compliance Summary, Audit Pack, Risk Dashboard, Screening Log, Certification Status, and Market Regulation Checklist.",
      },
      {
        number: 3,
        title: "Customize Filters",
        description:
          "Filter by date range, market, supplier, product, or risk level. Add your logo and branding for external distribution.",
      },
      {
        number: 4,
        title: "Export & Share",
        description:
          "Download as PDF (for auditors), Excel (for analysis), or share directly via secure link. Audit trails track all access and modifications.",
      },
    ],
  },
  "market-compliance": {
    title: "Market Regulations",
    description: "Navigate regulatory requirements for each market where Fairphone operates.",
    steps: [
      {
        number: 1,
        title: "Select Your Market",
        description:
          "Choose between EU, UK, Switzerland, US, or China. Each has unique export controls, sanctions, and customs requirements.",
      },
      {
        number: 2,
        title: "Review Applicable Frameworks",
        description:
          "See which regulations apply: EU has CE marking and RoHS, US has EAR/ITAR and FCC, UK has post-Brexit customs rules, Switzerland has specific tech restrictions.",
      },
      {
        number: 3,
        title: "Check Your Compliance Status",
        description:
          "Green indicates full compliance, Yellow shows items needing attention, Red flags violations. Use this to identify gaps and plan remediation.",
      },
      {
        number: 4,
        title: "Plan Supply Chain",
        description:
          "Use market data to optimize supply routes, identify compliance-friendly suppliers, and mitigate geopolitical risks.",
      },
    ],
  },
}

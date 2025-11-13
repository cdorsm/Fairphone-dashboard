export const REGULATORY_FRAMEWORKS = {
  EU: {
    dualUse: {
      name: "EU Dual-Use Regulation 2021/821",
      items: "Annex I - Dual-Use Items",
      scope: "Strategic items with military/terrorism applications",
      controls: ["Licensing required", "Technology transfer restrictions", "End-use checks"],
      category: "export-control",
    },
    militaryList: {
      name: "EU Common Military List",
      items: "Military equipment and technology",
      scope: "Defense products",
      controls: ["Authorization required", "End-use verification", "National security review"],
      category: "export-control",
    },
    torture: {
      name: "EU Regulation on Goods for Torture",
      items: "Torture and surveillance equipment",
      scope: "Goods designed to torture or restrict freedoms",
      controls: ["Export prohibited", "Screening against torture lists"],
      category: "export-control",
    },
    embargoes: {
      name: "EU Arm Embargoes, Restrictions & Sanctions",
      items: "Country-specific restrictions",
      scope: "Russia, Belarus, Iran, Syria, DRC, etc.",
      controls: ["Country screening", "Entity screening", "End-use controls"],
      category: "sanctions",
    },
    aml: {
      name: "EU AML/WWFT Directive 2022/2557",
      items: "Customer due diligence requirements",
      scope: "Wire transfer restrictions and money laundering",
      controls: ["CDD/EDD", "WWFT compliance", "Wire transfer restrictions"],
      category: "aml",
    },
  },
  NL: {
    customs: {
      name: "Dutch General Customs Law",
      items: "Customs documentation and procedures",
      scope: "Import/export of goods",
      controls: ["HS Code classification", "Tariff compliance", "Customs documentation"],
      category: "customs",
    },
    strategic: {
      name: "Dutch Decree Strategic Goods",
      items: "Strategic goods implementation order",
      scope: "Sensitive technology and goods",
      controls: ["Strategic goods licensing", "Technology transfer control"],
      category: "export-control",
    },
    sanctions: {
      name: "Dutch Sanctions Act 1977",
      items: "National sanctions implementation",
      scope: "Netherlands-specific sanctions programs",
      controls: ["Sanctions screening", "Entity screening"],
      category: "sanctions",
    },
  },
  US: {
    itar: {
      name: "International Traffic in Arms Regulations (ITAR)",
      items: "US Munitions List",
      scope: "Defense articles and technical data",
      controls: ["DDTC licensing", "End-use controls", "Re-export restrictions"],
      category: "export-control",
    },
    ear: {
      name: "Export Administration Regulations (EAR)",
      items: "Commerce Control List (CCL)",
      scope: "Dual-use items, encryption, semiconductors",
      controls: ["BIS licensing", "ECCN classification", "Re-export controls"],
      category: "export-control",
    },
    ofac: {
      name: "OFAC Sanctions Programs",
      items: "Comprehensive Sanctions, SDN List, etc.",
      scope: "Country and entity sanctions",
      controls: ["Entity screening", "Country embargoes", "Blocked persons"],
      category: "sanctions",
    },
  },
}

export const PHASE_ASSESSMENT = {
  phase1: {
    name: "Identify Trade Compliance Obligations",
    description: "Map applicable export control, sanctions, and customs regulations",
    tasks: [
      "Review EU Dual-Use Regulation applicability",
      "Assess US EAR/ITAR applicability",
      "Identify relevant sanctions programs",
      "Review Dutch strategic goods controls",
    ],
  },
  phase2: {
    name: "Analyze Business Activities",
    description: "Assess which activities trigger compliance obligations",
    tasks: [
      "Map product sourcing (CN, US, JP, EU)",
      "Analyze supply chain routes",
      "Review technology transfer activities",
      "Identify high-risk transactions",
    ],
  },
  phase3: {
    name: "Assess Compliance Position & Risks",
    description: "Evaluate current controls vs. required measures",
    tasks: [
      "Identify compliance measures needed",
      "Document existing compliance controls",
      "Conduct gap analysis",
      "Assess control effectiveness",
      "Risk-based action plan",
    ],
  },
  phase4: {
    name: "Execute & Implement Measures",
    description: "Design and implement compliance measures at all organizational levels",
    tasks: [
      "Strategic: Compliance program design",
      "Tactical: Process and procedure implementation",
      "Operational: Training and screening execution",
      "Continuous monitoring and improvement",
    ],
  },
}

export const RISK_FACTORS = {
  productRisks: {
    "dual-use-items": { name: "Dual-Use Item Risk", weight: 0.25 },
    "military-tech": { name: "Military Technology Risk", weight: 0.2 },
    semiconductor: { name: "Semiconductor Risk (EAR)", weight: 0.15 },
    encryption: { name: "Encryption/Security Tech Risk", weight: 0.1 },
  },
  locationRisks: {
    "china-us-tension": { name: "China-US Trade Tension", weight: 0.3, regions: ["CN", "US"] },
    "eu-sanctions": { name: "EU Sanctions Programs", weight: 0.25, regions: ["RU", "BY", "IR", "SY"] },
    "supply-concentration": { name: "Supply Chain Concentration", weight: 0.2, regions: ["CN", "TW"] },
    "sanctions-risk": { name: "Country Sanctions Risk", weight: 0.25 },
  },
  operationalRisks: {
    "classification-accuracy": { name: "HS/ECCN Misclassification", weight: 0.2 },
    documentation: { name: "Incomplete Documentation", weight: 0.15 },
    "kyc-screening": { name: "KYC/Sanctions Screening", weight: 0.25 },
    "training-gaps": { name: "Employee Training Gaps", weight: 0.15 },
    "vendor-compliance": { name: "Vendor Compliance", weight: 0.25 },
  },
}

export const COMPLIANCE_CONTROLS = {
  strategic: [
    "Compliance program governance and roles/responsibilities",
    "Trade compliance policy and procedures",
    "Risk management framework",
    "Audit and monitoring system",
    "Management review and escalation procedures",
  ],
  tactical: [
    "Supplier due diligence and screening procedures",
    "Product classification procedures (HS/ECCN)",
    "Export determination process",
    "Transaction screening procedures",
    "Document retention and record management",
    "Sanctions list monitoring",
    "Technology transfer assessment",
  ],
  operational: [
    "Supplier due diligence execution",
    "Transaction screening and screening hits management",
    "Customs classification and documentation",
    "Shipment clearance process",
    "Incident reporting and escalation",
    "Employee compliance training",
    "Compliance with audit findings",
  ],
}

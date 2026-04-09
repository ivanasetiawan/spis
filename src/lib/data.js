/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  SLIDE / SECTION CONTENT                                    ║
 * ║  Edit text here — no HTML needed. The layout renders it.    ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

export const meta = {
  title: "LATAM Nutrition Ecosystem Transformation",
  logo: "/Logo-abbott.png",
  presenter: "Your Regional Growth Partner",
};

export const sections = [
  // ── 0  HERO ──────────────────────────────────────────────
  {
    id: "hero",
    nav: "Home",
    layout: "hero",
    kicker: "Strategic Deck",
    title: "LATAM Nutrition Ecosystem Transformation",
    subtitle: "Presented by: Your Regional Growth Partner",
    image:
      "https://plus.unsplash.com/premium_photo-1723118424218-54c1de8140c7?q=80&w=2453&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // ── 1  EXECUTIVE SUMMARY ────────────────────────────────
  {
    id: "executive-summary",
    nav: "Summary",
    layout: "split",
    kicker: "1: Summary",
    title: "Executive Summary",
    subtitle: "The Pivot to Consumer Centricity",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    items: [
      {
        label: "Strategic Vision",
        text: "Transitioning from a HCP-led (Healthcare Professional) communication model to a dominant Downstream (B2C) Consumer Journey.",
      },
      {
        label: "The Catalyst",
        text: "Replicating global success stories (e.g., the Malaysia Case Study) within the highly fragmented and nuanced Latin American landscape.",
      },
      {
        label: "The Value Proposition",
        text: 'Implementing an Agile Governance Framework that serves as the "Operating System" for marketing across the entire Nutrition portfolio (Pediatrics & Adults).',
      },
    ],
  },

  // ── 2  LEADERSHIP CONTEXT ───────────────────────────────
  {
    id: "leadership",
    nav: "Leadership",
    layout: "cards",
    kicker: "2: Leadership",
    title: "Leadership Context",
    subtitle: "Strategic Alignment",
    cards: [
      {
        icon: "👤",
        label: "Stakeholder Recognition",
        text: "Richard Schneider — a leader defined by Industrial Psychology expertise and a proven track record in high-growth emerging markets.",
      },
      {
        icon: "🏆",
        label: "The Legacy",
        text: 'Pioneering the shift from "Product to Purpose" in Malaysia through cognitive-emotional storytelling, hyper-personalization, and O2O (Online-to-Offline) integration.',
      },
      {
        icon: "🎯",
        label: "The Mandate",
        text: "As CMO of LATAM, scaling the prestige of Similac, PediaSure, Ensure, and Glucerna by harmonizing global standards with local market agility.",
      },
    ],
  },

  // ── 3  LATAM CHALLENGE ──────────────────────────────────
  {
    id: "challenge",
    nav: "Challenge",
    layout: "challenge",
    kicker: "3: Challenge",
    title: "The LATAM Downstream Challenge",
    subtitle: "Obstacles & Opportunities",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    points: [
      {
        icon: "🗺️",
        label: "Market Fragmentation",
        text: "Divergent regulatory landscapes and cultural nuances that impede speed-to-market.",
      },
      {
        icon: "🔒",
        label: "Operational Silos",
        text: "Lack of synergy between Pediatric and Adult nutrition segments.",
      },
      {
        icon: "💡",
        label: "The Opportunity",
        text: 'The Latin American consumer journey is won at the intersection of digital influence and retail availability. We must own the "Final Meter."',
      },
    ],
  },

  // ── 4  GOVERNANCE MODEL ─────────────────────────────────
  {
    id: "governance",
    nav: "Governance",
    layout: "pillars",
    kicker: "4: Operational POV",
    title: 'The "Glocal" Governance Model',
    subtitle: "Governance for Agility",
    intro:
      "Redefining governance not as a bureaucratic bottleneck, but as a frictionless highway for regional execution.",
    pillars: [
      {
        number: 1,
        label: "Regulatory Fast-Track",
        text: "Integrated Medical-Legal-Regulatory (MLR) copywriting to ensure B2C content is pre-validated.",
        icon: "⚡",
      },
      {
        number: 2,
        label: "Asset Omnichannelization",
        text: 'A centralized "Content Factory" that produces high-tier regional assets with tactical local adaptations.',
        icon: "🏭",
      },
      {
        number: 3,
        label: "Data Stewardship",
        text: "A unified regional data architecture to track the consumer life-cycle — from infancy to healthy aging.",
        icon: "📊",
      },
    ],
  },

  // ── 5  ORG CHART ────────────────────────────────────────
  {
    id: "org-chart",
    nav: "Org Chart",
    layout: "org",
    kicker: "5: Organization",
    title: "The LATAM Nutri-Growth Hub",
    subtitle: "Organizational Structure",
    lead: { label: "CMO LATAM", desc: "Visionary & P&L Owner" },
    units: [
      {
        icon: "🔍",
        label: "Consumer Experience & Insights",
        text: "Curators of First-Party Data and regional CRM loyalty programs.",
      },
      {
        icon: "✏️",
        label: "Content & Brand Agility",
        text: "An agile production unit focused on cross-brand storytelling and digital-first assets.",
      },
      {
        icon: "🛒",
        label: "Commerce & Retail Excellence",
        text: 'Specialists in E-commerce (Amazon, Mercado Libre) and "Perfect Store" retail execution.',
      },
      {
        icon: "⚖️",
        label: "Regulatory Liaison",
        text: "The critical bridge ensuring creative output aligns with Abbott's rigorous clinical ethics.",
      },
    ],
  },

  // ── 6  MULTI-BRAND LIFECYCLE ────────────────────────────
  {
    id: "lifecycle",
    nav: "Lifecycle",
    layout: "lifecycle",
    kicker: "6: Lifecycle",
    title: "Multi-Brand Lifecycle Strategy",
    subtitle: "From Cradle to Maturity",
    segments: [
      {
        icon: "👶",
        label: "Pediatrics",
        brands: "Similac / PediaSure",
        text: "Establishing early-stage brand equity through educational content and digital ecosystem support for parents.",
        color: "#007acc",
      },
      {
        icon: "🧑‍🦳",
        label: "Adults",
        brands: "Ensure / Glucerna",
        text: 'Capturing the "Silver Economy" and metabolic health markets via messaging focused on vitality, independence, and clinical efficacy.',
        color: "#986bb0",
      },
    ],
    flywheel:
      'Leveraging the governance model to ensure a "cradle-to-maturity" consumer retention strategy.',
  },

  // ── 7  90-DAY ROADMAP ───────────────────────────────────
  {
    id: "roadmap",
    nav: "Roadmap",
    layout: "roadmap",
    kicker: "7: Roadmap",
    title: "The 90-Day Strategic Roadmap",
    subtitle: "Phased Execution Plan",
    phases: [
      {
        days: "1–30",
        label: "Diagnosis & Alignment",
        text: "Mapping operational bottlenecks and synchronizing regional KPIs with Chicago's global benchmarks.",
        pct: 33,
      },
      {
        days: "31–60",
        label: "The Agility Pilot",
        text: 'Deploying a high-impact B2C pilot for a select brand to demonstrate the efficiency of the "Fast-Track" approval flow.',
        pct: 66,
      },
      {
        days: "61–90",
        label: "Scale & Optimization",
        text: "Full-portfolio integration and the unveiling of the Regional Downstream Dashboard for real-time decision-making.",
        pct: 100,
      },
    ],
  },

  // ── 8  PARTNERING / CTA ─────────────────────────────────
  {
    id: "partnering",
    nav: "Partner",
    layout: "closing",
    kicker: "8: Partnering",
    title: "Partnering for Transformation",
    subtitle: "Beyond Vendor Status",
    quote:
      '"We are not an agency that executes ads; we are the architects of your regional legacy."',
    objective:
      "Driving sustainable Sell-Out growth and fortifying Brand Equity across the Latin American continent.",
    contact: {
      name: "Stefanie Parra",
      cta: "Ask me anything",
      email: "stefanieparra@sp.com",
      avatar: "/sp.jpeg",
    },
  },
];

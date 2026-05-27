import { useState, useEffect, useRef } from "react";

const SYSTEM = `You are Sheena Lakshmi — UX Design Manager (Content) at SAP, Bengaluru — answering questions on your personal portfolio site. Visitors are recruiters, hiring managers, and curious professionals.

CRITICAL RULE — NO FABRICATION: You must ONLY answer using information explicitly stated in this prompt. Never invent, assume, or extrapolate specific details, anecdotes, names, numbers, career outcomes, or examples that are not explicitly written here. If a question touches on something not covered in this prompt, say: "That's a great question — I'd love to discuss it directly. Feel free to email me at sheenalakshmi@gmail.com." Do not fill gaps with plausible-sounding details. Silence is better than invention.

Speak in first person. Be warm, confident, and direct. Lead with measurable impact. Keep answers 2–4 sentences unless more detail is asked.

WHO I AM:
20+ years of experience — 8+ years specialising in UX content design, 16+ years in technical documentation.
Currently: UX Design Manager (Content), SAP, Bengaluru (2025–Present).
Previously: Content Design Lead & Strategist at Intuit (Sep 2022–2025) — working on QuickBooks Online, QuickBooks Desktop, and Intuit Enterprise Suite; Senior User Assistance Developer & Content Design Strategist at SAP (Jan 2019–Aug 2022) — working on SAP Analytics Cloud; Senior Technical Writer at McAfee (Jun 2017–Dec 2018), Editorial Consultant at Origin Learning Solutions/VMware eLearning (Feb 2016–May 2017), Documentation Product Lead at Dell Technologies (Jul 2008–Feb 2016), Senior Technical Writer at RSA Security (Aug 2007–Aug 2008), Senior Information Developer at Huawei Technologies (Jun 2004–Jul 2007), Information Developer at Advance Educational Technologies (Jan 2000–Feb 2002).
Contact: sheenalakshmi@gmail.com | +91 98458 07918 | linkedin.com/in/sheena-lakshmi-232a425/

IMPACT AT A GLANCE:
37% YoY growth in budgets created by companies
22% lift in first-time feature adoption
CES improvement: 13% to 52% (FP&A budgeting)
4.8/5 Workshop NPS (D4 Design); 5/5 NPS (technical communicators training)
100K GNS guided in 1.5 years with 88% 90-day retention
780K+ budgets created in QBO by 133K company files; 70K repeat monthly customers

CURRENT ROLE — SAP India (2025–Present):
- Lead and mentor a team of 8 content designers across SAP enterprise products
- Drive content design for AI Agents — crafting context-aware conversational experiences for SAP AI portfolio
- Lead content evaluation and prompt engineering for Concur, Ariba, and SuccessFactors
- Define content strategy, voice and tone guidelines, and design system standards across product lines
- Partner with product management, UX design, and engineering teams across global markets
- Design and facilitate Design Thinking workshops; established ethical AI content guidelines organisation-wide

PORTFOLIO 1 — Financial Planning & Analysis, Intuit Enterprise Suite & QuickBooks Online | Content Design Lead
Precise metrics:
- Overall FP&A engagement: 12.54% in QBO Advanced, 8.39% in QBO Plus (against FY24 baseline of 10% and 3.5% respectively); 11.76% for Intuit Enterprise Suite
- 37% YoY growth in budgets created by companies in Feb; 36% growth in overall companies during peak months (Nov, Dec, Jan, Feb)
- 25% increase in number of budgets created in Feb YoY
- 780K+ budgets created in QBO by 133K company files in one year; 70K repeat monthly customers
- FTU conversion rate greater than 13% for budgeting feature
- CES improved from 13% at launch to 52%
- 75% conversion rate from custom forecast to budget; approximately 10% from AI forecasts to budgets
- AI forecasting engagement raised to 36%
Key contributions: Named and positioned Financial Planning and Analysis within QBO left navigation; led card sorting from Budgets to FP&A; led A/B experiment on AI forecasting; built scalable content framework across approximately 10 workstreams; influenced ethical AI communication with AI Governance Council, IntuitAssist, legal and marketing; led cashflow planner transition in two-week turnaround; participated in 30+ follow-me-homes, 6 quantitative surveys, research for 6+ workstreams; collaborated with Ted Drake on ARIA, Alt+Text, keyboard accessibility.

PORTFOLIO 2 — QuickBooks Desktop Migration, Intuit | Content Design Lead
Results: 100K GNS in 1.5 years; 380K GNS on QBO from DTM in FY24; 88% 90-day retention; Payments approximately $213M revenue; Payroll 617K users $723M revenue; Tango 360K+ downloads 134K active; Desktop Core 235K customers; CES 7% to 32%.

PROJECT 3 — First-Time User Onboarding, Intuit QuickBooks | Content Designer and Strategist
22% lift in first-time feature adoption. Reduced cognitive load, improved engagement and retention.

PROJECT 4 — Feature Nomenclature Design, SAP Analytics Cloud | Content Design Strategist
Schedule Publication adopted as final UI label. 87% participant agreement in card sort. 100% stakeholder consensus.

PROJECT 5 — Content UX and Information Architecture, SAP Analytics Cloud | Content Design Strategist
Approximately 750 topics centralised across Banking, Insurance, Oil and Gas. Improved onboarding and adoption.

PROJECT 6 — Leadership and Thought Leadership, SAP and Intuit | UX Design Manager
Manage and mentor 8 content designers at SAP. UXIndia workshop approximately 120 participants. D4 Design NPS 4.8/5. Technical communicators training NPS 5/5. ADPList BeMore 200+ participants. Intuit Superstar Award Q4 2023. Top Mentor on ADPList twice.

PROJECT 7 — Design Thinking Facilitation, SAP | Certified DT Coach
Certified DT Coach SAP Design Thinking Academy 2021. PM processes streamlined. Outstanding stakeholder feedback.

CORE SKILLS: Content strategy and operations, Design thinking facilitation, Stakeholder management, Team mentorship, UX writing and content design, Conversational AI design, Information architecture, User research and testing, AI Agent content design, Prompt engineering, LLM evaluation, Ethical AI, Digital adoption WalkMe.

AWARDS: Intuit Superstar Award 2023 Customer Obsession, Trajectory Changing Performance, Women in Leadership Intuit, Top Talent SAP, Top Mentor ADPList twice, Workshop NPS 4.8+/5.

EDUCATION: PG Diploma Mass Communication Journalism Bhavans College 2003-2004; Diplomas Java Advanced Java Web Design SSI Ltd 2000-2001; BSc Chemistry University of Calicut 1994-1997; Design Thinking Coach SAP 2021; User Research SAP 2019.

LEADERSHIP STYLE: I give people freedom to do their work and clear blockers. I set guardrails — stand-ups, project plans, timelines, regular check-ins. Mentorship is guiding not spoonfeeding. Data and metrics handle pushback, not emotional justifications. AI is a content designer's companion. I handle ambiguity with patience.

RECRUITER QUESTIONS: Good content design means content that doesn't speak but does the task — invisible. Success is measured by click-through rates, task completion, engagement, feature adoption, A/B test data. I work collaboratively with PMs and designers, backed by data. I scale quality through frameworks and reusable systems.

REDIRECT TO 1:1: For salary, weaknesses, failures, reasons for leaving, what I want in next role, personal motivations, work-life balance — respond exactly: "That's something I'd love to answer in a 1:1 conversation — feel free to reach out at sheenalakshmi@gmail.com or connect on LinkedIn."

AVAILABILITY: Good content is invisible and complements the user experience. I can make your content speak less and do more.`

const PROJECTS = [
  {
    id: "01",
    title: "Financial Planning & Analysis",
    company: "Intuit · QuickBooks Online & Enterprise Suite",
    role: "Content Design Lead — FP&A Portfolio",
    metric: "37%",
    metricLabel: "YoY growth in budgets created by companies",
    tags: ["Content Strategy", "AI Adoption", "User Research", "Systems Design"],
    description: "Content design lead for the full FP&A portfolio within Intuit Enterprise Suite and QuickBooks Online — budgeting, forecasting, cash flow — across global markets. FP&A is a strategic pillar for MM IES.",
    challenge: "Create a cohesive, discoverable, and scalable content experience for a rapidly evolving financial planning platform serving small and mid-market businesses globally — while advocating for ethical, AI-led solutions that help SMBs become profitable.",
    keyActions: [
      "Named and positioned 'Financial Planning and Analysis' within QBO left navigation — led card sorting to move from 'Budgets' to FP&A, directly impacting discoverability and engagement",
      "Built scalable content framework and reusable library across ~10 workstreams spanning budgeting, forecasting, cash flow, and reporting",
      "Accelerated AI forecast adoption to 36% through onboarding messaging and clear CTAs — partnered with PM and XD on A/B experiment",
      "Influenced ethical AI communication: collaborated with AI Governance Council, IntuitAssist teams, legal, and marketing to set a precedent for transparent AI messaging",
      "Led cashflow planner transition — rebranded feature, decommissioned AI forecasting within cashflow, coordinated with sales, marketing, and customer success in a two-week turnaround",
      "Participated in 30+ follow-me-homes, contributed to 6 quantitative surveys, synthesised research for 6+ workstreams",
      "Collaborated with accessibility leader Ted Drake to enforce ARIA labels, Alt+Text, and keyboard accessibility across the FP&A suite",
    ],
    results: [
      { label: "YoY growth in budgets created", value: "+37%" },
      { label: "Budgets created (Feb YoY)", value: "+25%" },
      { label: "Budgets created in QBO (1 year)", value: "780K+" },
      { label: "Company files creating budgets", value: "133K" },
      { label: "Repeat monthly customers", value: "70K" },
      { label: "CES (launch to now)", value: "13% to 52%" },
      { label: "AI forecast usage", value: "36%" },
      { label: "FP&A engagement (QBO Adv)", value: "12.54%" },
      { label: "FP&A engagement (QBO Plus)", value: "8.39%" },
      { label: "FP&A engagement (IES)", value: "11.76%" },
      { label: "FTU conversion (budgeting)", value: ">13%" },
      { label: "Custom forecast to budget", value: "75%" },
    ],
    artifacts: [
      { label: "Content Design for FP&A", type: "pdf", href: "https://drive.google.com/file/d/1LBO2ZH22ocsOP2950ATB-qzxrHUdmySe/view?usp=sharing", desc: "Process, framework, and systems" },
    ],
    samples: [{ label: "Content Design for FP&A", type: "pdf", href: "https://drive.google.com/file/d/1LBO2ZH22ocsOP2950ATB-qzxrHUdmySe/view?usp=sharing" }],
    askPrompt: "Tell me about your FP&A content design work at Intuit across QuickBooks Online and Intuit Enterprise Suite.",
  },
  {
    id: "03", title: "First-Time User Onboarding", company: "Intuit · QuickBooks",
    role: "Content Designer & Strategist", metric: "22%", metricLabel: "Lift in first-time feature adoption",
    tags: ["Onboarding", "UX Writing", "SMB", "Cognitive Load"],
    description: "Small and mid-market business owners faced frustration juggling multiple tools alongside QuickBooks. The onboarding experience needed to clearly convey value while reducing cognitive overload — without overwhelming or overpromising.",
    challenge: "SMB users faced cognitive overload and stress from juggling multiple planning tools. Onboarding needed to clearly convey value and reduce user effort, supporting learnability without overwhelming or overpromising.",
    keyActions: [
      "Conducted quantitative and qualitative research to understand user motivations, pain points, and expectations",
      "Identified the intersection between business objectives and user needs to prioritise budgeting features and benefits",
      "Brainstormed user-centric keyword messaging reflecting common motivations around problem-solving",
      "Followed Intuit's FTU content framework: clear headline, benefit-driven description, actionable CTAs",
      "Applied benefit-driven but realistic tone focusing on user outcomes — avoiding jargon, overstatements, and complex feature details",
    ],
    results: [
      { label: "First-time adoption lift", value: "+22%" },
      { label: "User confusion", value: "Reduced" },
      { label: "Engagement & retention", value: "Improved" },
      { label: "Cognitive load", value: "Lowered" },
    ],
    artifacts: [
      { label: "NDA Project", type: "nda", href: "", desc: "This is an NDA project. Get in touch for more info." },
    ],
    samples: [],
    askPrompt: "Tell me about the first-time user onboarding project and how you approached it.",
  },
  {
    id: "04", title: "Feature Nomenclature Design", company: "SAP · SAP Analytics Cloud",
    role: "Content Design Strategist", metric: "87%", metricLabel: "Card sort agreement rate",
    tags: ["Product Naming", "User Research", "Card Sorting", "Stakeholder Management"],
    description: "The on-premises SAP Analytics version used 'Publication' as a verb/process; the cloud version treated it as an object/noun. Users transitioning between versions faced significant confusion — requiring a research-led naming solution scalable across future features.",
    challenge: "The existing on-premises version used 'Publication' as a verb/process whereas the cloud version treated it as an object/noun. Users transitioning might find 'Scheduling a Publication' confusing — requiring terminology that was both intuitive and scalable.",
    keyActions: [
      "Engaged product managers, experts, and customer advocates to understand feature capabilities and audience differences",
      "Studied naming conventions in Tableau, Adobe Analytics, and Zoho to identify best practices",
      "Identified key personas: Business Analysts, CFOs, Marketing Executives, and BI Admins",
      "Facilitated card sorting exercises testing 'Publication', 'Scheduling', 'Bursting', and 'Sharing'",
      "Created low-fidelity prototypes for the critical user journey; advocated for user-centred communication approach",
    ],
    results: [
      { label: "Feature name adopted", value: "Schedule Publication" },
      { label: "Card sort agreement", value: "87%" },
      { label: "UX alignment", value: "Heuristic compliant" },
      { label: "Stakeholder consensus", value: "100%" },
    ],
    artifacts: [
      { label: "Research & Card Sort Findings", type: "deck", href: "https://docs.google.com/presentation/d/1rvoEgkoJhLP3cqEhBnNs0CKo-__slYio/edit?usp=sharing&ouid=114238183564892136776&rtpof=true&sd=true", desc: "Naming study methodology, card sort results, competitive analysis, and final rationale" },
    ],
    samples: [],
    askPrompt: "Walk me through the product naming case study at SAP Analytics.",
  },
  {
    id: "05", title: "Content UX & Information Architecture", company: "SAP · SAP Analytics Cloud",
    role: "Content Design Strategist", metric: "750", metricLabel: "Topics centralised & restructured",
    tags: ["Information Architecture", "Systems Thinking", "Content Audit", "Enterprise"],
    description: "Customers faced significant challenges accessing large, scattered, and outdated PDF help documents across Banking, Insurance, and Oil & Gas. Updating and maintaining was inefficient — making timely, relevant support for critical analytics offerings nearly impossible.",
    challenge: "Customers struggled to access and navigate large, scattered, and outdated PDF help documents. Updating and maintaining these was inefficient, making it difficult to provide timely, relevant support for critical analytics offerings.",
    keyActions: [
      "Performed a detailed audit of around 750 topics across multiple sources — cataloguing all relevant business content",
      "Defined and refined key personas spanning Banking, Insurance, and Oil & Gas across Finance, Operations, and Expense Management",
      "Created and administered an information survey to identify content gaps and validate persona insights",
      "Developed a comprehensive information architecture, centralising and categorising content for intuitive navigation",
      "Migrated all business content into a unified XML-based authoring environment within the main product help portal",
    ],
    results: [
      { label: "Topics centralised", value: "~750" },
      { label: "Industries covered", value: "Banking, Insurance, O&G" },
      { label: "Maintenance overhead", value: "Significantly reduced" },
      { label: "Customer onboarding", value: "Improved" },
    ],
    artifacts: [
      { label: "Information Architecture", type: "deck", href: "https://drive.google.com/file/d/1pN2cLA5hFaMk6VCmk_7mJDDByoFFK1io/view?usp=drive_link", desc: "IA design and content taxonomy" },
    ],
    samples: [],
    askPrompt: "Tell me about the content UX consistency project at SAP Analytics.",
  },
  {
    id: "06", title: "Leadership & Thought Leadership", company: "SAP · Intuit",
    role: "UX Design Manager", metric: "4.8/5", metricLabel: "NPS across all workshops",
    tags: ["Mentorship", "Public Speaking", "Ethical AI", "Accessibility"],
    description: "Building content culture, developing talent, and establishing thought leadership while driving business results across multiple product lines — from workshop design to enterprise ethical AI guidelines.",
    challenge: "Building a strong content design culture, developing talent at scale, and establishing thought leadership in the industry — while simultaneously driving business results across multiple product lines.",
    keyActions: [
      "Manage and mentor 8 content designers at SAP; built and coached Intuit content team for 3 years",
      "Led 1:1 and group workshops on Content Design, Prompt Design, and Career Transition",
      "Delivered keynote workshops at UXIndia (120+ participants) and D4 Design (NPS 4.8/5)",
      "Recognised as Top Mentor on ADPList twice; speaker at ADPList BeMore Conference and W-Summit",
      "Worked with leaders to set ARIA/Alt+text standards; ran accessibility audits organisation-wide",
      "Developed enterprise frameworks for ethical AI content guidelines adopted by global teams",
    ],
    results: [
      { label: "Intuit Superstar Award", value: "2023" },
      { label: "ADPList Top Mentor", value: "Twice" },
      { label: "Workshop NPS", value: "4.8+ / 5" },
      { label: "Women in Leadership", value: "Intuit programme" },
    ],
    artifacts: [
      { label: "Prompt Design Talk — UXIndia 2023", type: "pdf", href: "https://drive.google.com/file/d/13jmLxMgV4uvIEV4X7yiJrx_PUXJz4eQJ/view?usp=drive_link", desc: "Slides from UXIndia keynote on prompt design" },
      { label: "NextGen Network Interview", type: "video", href: "https://www.youtube.com/watch?v=SQcGF5OinFs", desc: "Featured interview on content design career" },
      { label: "ADPList BeMore Conference", type: "video", href: "https://drive.google.com/file/d/1td8NBDKhQpO3TRvM87p-mxb4nAs28i4L/view", desc: "Conference talk recording" },
      { label: "W-Summit Career Talk", type: "video", href: "https://www.youtube.com/watch?v=i1EgVExCpj0", desc: "Career guidance session recording" },
      { label: "Accessibility and content design", type: "pdf", href: "https://drive.google.com/file/d/1Ta3WAxtTtBClyt-8gcHAjrgS0Gi34lfF/view?usp=drive_link", desc: "ARIA and Alt-text guidelines document" },
    ],
    samples: [
      { label: "NextGen Network Interview", type: "video", href: "https://www.youtube.com/watch?v=SQcGF5OinFs" },
      { label: "ADPList BeMore Conference", type: "video", href: "https://drive.google.com/file/d/1td8NBDKhQpO3TRvM87p-mxb4nAs28i4L/view" },
      { label: "W-Summit Career Talk", type: "video", href: "https://www.youtube.com/watch?v=i1EgVExCpj0" },
    ],
    askPrompt: "Tell me about your mentorship, workshops, and thought leadership work.",
  },
  {
    id: "07", title: "Design Thinking Facilitation", company: "SAP",
    role: "Certified DT Coach", metric: "", metricLabel: "Virtual DT workshop across business lines",
    metricSvg: true,
    tags: ["Design Thinking", "Facilitation", "Process Optimisation", "Virtual Workshop"],
    description: "As a newly inducted Certified Design Thinking Coach (SAP Design Thinking Academy, 2021), addressed multiple overlapping tools and processes within the India location and helped Project Management teams overcome communication and synchronisation challenges.",
    challenge: "Multiple overlapping tools and processes within the India location prevented Project Management teams from communicating and synchronising effectively across business lines.",
    keyActions: [
      "Mapped user journeys of various lines of businesses from start to end across different teams and processes",
      "Methodically helped teams identify problem areas and suggest scalable solutions for prioritised areas",
      "Identified diverse number of tools, processes, and overlaps preventing synchronous communication",
      "Delivered comprehensive virtual facilitation despite limited time and resources",
      "Certified Design Thinking Coach with Virtual Facilitation — SAP Design Thinking Academy, 2021",
    ],
    results: [
      { label: "Process optimised", value: "Multiple BUs" },
      { label: "Tool overlaps", value: "Identified & resolved" },
      { label: "Stakeholder feedback", value: "Outstanding" },
      { label: "Format", value: "Virtual-first" },
    ],
    artifacts: [
      { label: "DT Workshop Summary", type: "pdf", href: "https://drive.google.com/file/d/1A8KvWoRUVi_gqtNi_H90KnzsMkQYEHQ_/view?usp=sharing", desc: "Password protected — email sheenalakshmi@gmail.com to request access." },
      { label: "Facilitation Deck", type: "deck", href: "https://drive.google.com/file/d/1L3QZCszZJ3Y-vnk9UBcvK5i3eVZ2bnHZ/view?usp=sharing", desc: "Password protected — email sheenalakshmi@gmail.com to request access." },
      { label: "Process Maps", type: "screenshot", href: "https://drive.google.com/file/d/1rK2-ov-SJtiTmCPxTBGVhVtdk25uYXiQ/view?usp=sharing", desc: "Password protected — email sheenalakshmi@gmail.com to request access." },
    ],
    samples: [],
    askPrompt: "Tell me about the design thinking facilitation project at SAP.",
  },
];

const SKILLS_LIST = [
  { group: "Strategy & Leadership", items: ["Content Leadership & Operations", "Content Strategy", "Design Thinking", "Stakeholder Management", "Team Mentorship"] },
  { group: "Design & Research", items: ["UX Writing & Content Design", "Information Architecture", "User Research & Testing", "Data-Informed Design", "Systems Design"] },
  { group: "Emerging Specialisms", items: ["Prompt Design", "Conversation Design", "Ethical AI", "Digital Adoption (WalkMe)"] },
  { group: "Tools", items: ["Figma", "Balsamiq", "Jira", "Mural · Miro", "UserTesting · GreatQuestion", "Writer.AI"] },
];

const CHIPS = [
  "What's your most impactful project?",
  "How do you lead content teams?",
  "What AI experience do you have?",
  "Are you open to new roles?",
  "Walk me through your design process",
];

const DARK_C = {
  bg: "#0B0D12", surface: "#161A23", card: "#191C26", cardHov: "#222638",
  border: "rgba(255,255,255,0.07)", accent: "#7B9FBF",
  aLo: "rgba(123,159,191,0.12)", aMid: "rgba(123,159,191,0.25)",
  text: "#E4DDD0", muted: "#A0AEC0",
  green: "#4EC98A", gLo: "rgba(78,201,138,0.1)",
  navBg: "rgba(11,13,18,0.96)", shadow: "rgba(0,0,0,0.4)",
};

const LIGHT_C = {
  bg: "#FAFAF8", surface: "#F0EDE6", card: "#FFFFFF", cardHov: "#F5F2EC",
  border: "rgba(0,0,0,0.1)", accent: "#1A4B8C",
  aLo: "rgba(26,75,140,0.08)", aMid: "rgba(26,75,140,0.18)",
  text: "#1A1A2E", muted: "#4A5568",
  green: "#166534", gLo: "rgba(22,101,52,0.1)",
  navBg: "rgba(26,43,78,0.97)", shadow: "rgba(0,0,0,0.15)",
};

// ── CHANGE 1: default to LIGHT_C ──
let C = LIGHT_C;

const SANS = "'DM Sans', sans-serif";
const SERIF = "'Cormorant Garant', serif";

const getStyles = (C) => `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garant:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html,body{background:${C.bg};transition:background 0.3s ease,color 0.3s ease}
  ::-webkit-scrollbar{width:4px}
  ::-webkit-scrollbar-track{background:transparent}
  ::-webkit-scrollbar-thumb{background:${C.aMid};border-radius:2px}
  .sl-chip{background:${C.aLo};border:1px solid ${C.aMid};color:${C.accent};padding:7px 13px;border-radius:20px;font-size:12px;font-family:${SANS};cursor:pointer;white-space:nowrap;transition:all 0.2s;line-height:1}
  .sl-chip:hover{background:${C.aMid};border-color:${C.accent};color:${C.accent};transform:translateY(-1px)}
  .sl-send{background:${C.accent};border:none;width:38px;height:38px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all 0.2s;color:#fff;font-size:17px;font-weight:700}
  .sl-send:hover:not(:disabled){opacity:0.85;transform:scale(1.06)}
  .sl-send:disabled{opacity:0.35;cursor:not-allowed}
  .sl-ta{flex:1;background:transparent;border:none;outline:none;color:${C.text};font-family:${SANS};font-size:14px;line-height:1.6;resize:none;min-height:22px;max-height:110px}
  .sl-ta::placeholder{color:${C.muted}}
  @keyframes sl-bounce{0%,80%,100%{transform:scale(0.55);opacity:0.25}40%{transform:scale(1);opacity:1}}
  .sl-dot{animation:sl-bounce 1.3s infinite ease-in-out}
  .sl-dot:nth-child(2){animation-delay:.15s}
  .sl-dot:nth-child(3){animation-delay:.3s}
  @keyframes sl-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
  .sl-msg{animation:sl-in 0.25s ease forwards}
  @keyframes sl-pulse{0%,100%{opacity:0.35}50%{opacity:1}}
  .sl-pulse{animation:sl-pulse 2.8s ease infinite}
  @keyframes sl-fade{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
  .sl-page-in{animation:sl-fade 0.4s ease forwards}
  .sl-nav-link{font-size:12px;color:rgba(200,208,224,0.7);text-decoration:none;letter-spacing:0.06em;transition:color 0.2s}
  .sl-nav-link:hover{color:#fff}
  .sl-resume-btn{display:inline-flex;align-items:center;gap:7px;background:transparent;border:1px solid rgba(123,159,191,0.4);color:#A8C4E0;padding:7px 16px;border-radius:8px;font-size:12px;font-family:${SANS};letter-spacing:0.06em;cursor:pointer;transition:all 0.22s;text-decoration:none;font-weight:500;white-space:nowrap}
  .sl-resume-btn:hover{background:rgba(123,159,191,0.15);border-color:#A8C4E0;transform:translateY(-1px)}
  .sl-proj-card{background:${C.card};border:1px solid ${C.border};border-radius:16px;overflow:hidden;transition:all 0.25s;cursor:default}
  .sl-proj-card:hover{border-color:${C.aMid};box-shadow:0 12px 40px ${C.shadow}}
  .sl-cta-btn{background:${C.accent};border:none;color:#fff;padding:7px 13px;border-radius:8px;font-size:11px;font-family:${SANS};letter-spacing:0.04em;cursor:pointer;transition:all 0.2s;display:block;width:100%;text-align:center;font-weight:500}
  .sl-cta-btn:hover{opacity:0.85;transform:translateY(-1px);box-shadow:0 4px 12px ${C.shadow}}
  .sl-ask{background:${C.aLo};border:1px solid ${C.aMid};color:${C.accent};padding:8px 14px;border-radius:8px;font-size:12px;font-family:${SANS};letter-spacing:0.06em;cursor:pointer;transition:all 0.2s;display:inline-block}
  .sl-ask:hover{background:${C.aMid}}
  .sl-sample{display:inline-flex;align-items:center;gap:5px;background:${C.aLo};border:1px solid ${C.border};color:${C.muted};padding:6px 12px;border-radius:8px;font-size:12px;font-family:${SANS};text-decoration:none;transition:all 0.2s;margin-right:7px;margin-top:7px}
  .sl-sample:hover{border-color:${C.aMid};color:${C.text};background:${C.aMid}}
  .sl-skill-tag{background:${C.surface};border:1px solid ${C.border};color:${C.muted};padding:6px 13px;border-radius:8px;font-size:12px;font-family:${SANS};display:inline-block;margin:4px;transition:border-color 0.2s}
  .sl-skill-tag:hover{border-color:${C.aMid};color:${C.text}}
  .sl-mode-btn{display:flex;align-items:center;gap:8px;padding:8px 16px;border-radius:10px;border:1px solid rgba(255,255,255,0.12);font-family:${SANS};font-size:12px;letter-spacing:0.06em;cursor:pointer;transition:all 0.22s;font-weight:500}
  .sl-exp-row{padding:20px 0;border-bottom:1px solid ${C.border};transition:background 0.2s}
  .sl-exp-row:first-child{border-top:1px solid ${C.border}}
  @keyframes sl-modal-in{from{opacity:0;transform:scale(0.97)}to{opacity:1;transform:scale(1)}}
  .sl-modal{animation:sl-modal-in 0.25s ease forwards}
  .sl-theme-btn{background:transparent;border:1px solid rgba(255,255,255,0.15);color:rgba(200,208,224,0.8);width:34px;height:34px;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:15px;transition:all 0.22s;flex-shrink:0}
  .sl-theme-btn:hover{background:rgba(255,255,255,0.1);border-color:rgba(255,255,255,0.3)}
`;

function Avatar({ size = 30 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%", flexShrink: 0,
      background: `linear-gradient(135deg, ${C.accent} 0%, #4A6F8A 100%)`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: SERIF, fontWeight: 600, fontSize: size * 0.38, color: "#fff", marginTop: 2,
    }}>SL</div>
  );
}

function Dots() {
  return (
    <div style={{ display: "flex", gap: 4, alignItems: "center", padding: "4px 0" }}>
      {[0,1,2].map(i => (
        <div key={i} className="sl-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: C.accent, animationDelay: `${i*0.15}s` }} />
      ))}
    </div>
  );
}

function Tag({ label }) {
  return (
    <span style={{
      fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase",
      border: `1px solid ${C.border}`, padding: "3px 8px", borderRadius: 4,
      color: C.muted, fontFamily: SANS, display: "inline-block",
    }}>{label}</span>
  );
}

function DTIcon({ size = 52 }) {
  const cx = size / 2, cy = size / 2, R = size * 0.37;
  const nodes = ["EMP","DEF","IDE","PRO","IMP"];
  const pts = nodes.map((_, i) => {
    const angle = (i / nodes.length) * 2 * Math.PI - Math.PI / 2;
    return [cx + R * Math.cos(angle), cy + R * Math.sin(angle)];
  });
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="dtarr" markerWidth="4" markerHeight="4" refX="3" refY="2" orient="auto">
          <path d="M0,0 L4,2 L0,4 Z" fill={C.accent} opacity="0.7"/>
        </marker>
      </defs>
      <circle cx={cx} cy={cy} r={R + 4} fill="none" stroke={C.accent} strokeWidth="1" strokeDasharray="3 3" opacity="0.25"/>
      {pts.map(([x1,y1], i) => {
        const [x2,y2] = pts[(i+1) % pts.length];
        const mx=(x1+x2)/2, my=(y1+y2)/2;
        const dx=x2-x1, dy=y2-y1, len=Math.sqrt(dx*dx+dy*dy);
        const nx=-dy/len*6, ny=dx/len*6;
        return <path key={i} d={`M${x1},${y1} Q${mx+nx},${my+ny} ${x2},${y2}`} fill="none" stroke={C.accent} strokeWidth="1" opacity="0.5" markerEnd="url(#dtarr)"/>;
      })}
      {pts.map(([x,y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={size * 0.1} fill={C.accent} opacity={0.45 + i * 0.1}/>
          <text x={x} y={y + size*0.045} textAnchor="middle" fontFamily="Helvetica" fontSize={size*0.075} fill="#fff" fontWeight="700">{nodes[i]}</text>
        </g>
      ))}
    </svg>
  );
}

function ModeToggle({ mode, setMode }) {
  return (
    <div style={{ display: "flex", gap: 4, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", padding: 4, borderRadius: 12 }}>
      {[
        { id: "ai", icon: "✦", label: "Ask Me" },
        { id: "classic", icon: "≡", label: "View Portfolio" },
      ].map(m => (
        <button key={m.id} className="sl-mode-btn" onClick={() => setMode(m.id)}
          style={{
            background: mode === m.id ? "rgba(255,255,255,0.18)" : "transparent",
            color: mode === m.id ? "#fff" : "rgba(200,208,224,0.72)",
            borderColor: mode === m.id ? "rgba(255,255,255,0.3)" : "transparent",
          }}>
          <span style={{ fontSize: 13 }}>{m.icon}</span>
          {m.label}
        </button>
      ))}
    </div>
  );
}

const LARGE_THRESHOLD = 380;

function getFront(content) {
  const first = content.split(/\n\n/)[0].trim();
  if (first.length <= 160) return first;
  const cut = first.slice(0, 165);
  const lastDot = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf(".\n"));
  return lastDot > 60 ? cut.slice(0, lastDot + 1) : cut + "…";
}

function getDetail(content) {
  const parts = content.split(/\n\n/);
  return parts.slice(1).join("\n\n").trim();
}

function AssistantMessage({ content, idx, expanded, onToggle }) {
  const isLarge = content.length > LARGE_THRESHOLD;
  const front = isLarge ? getFront(content) : content;
  const detail = isLarge ? getDetail(content) : "";
  const hasDetail = detail.length > 0;

  return (
    <div style={{ maxWidth: "86%", background: C.card, border: `1px solid ${C.border}`, borderRadius: "4px 16px 16px 16px", overflow: "hidden" }}>
      {isLarge ? (
        <div style={{ padding: "12px 16px 10px", borderBottom: expanded && hasDetail ? `1px solid ${C.border}` : "none", background: C.aLo }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 7 }}>
            <div style={{ width: 4, height: 4, borderRadius: "50%", background: C.accent, flexShrink: 0 }}/>
            <span style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: C.accent, fontFamily: SANS, fontWeight: 500 }}>Key takeaway</span>
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.75, color: C.text, wordBreak: "break-word" }}>{renderMarkdown(front)}</p>
        </div>
      ) : (
        <div style={{ padding: "11px 14px" }}>
          <p style={{ fontSize: 13, lineHeight: 1.75, color: C.text, wordBreak: "break-word", margin: 0 }}>{renderMarkdown(content)}</p>
        </div>
      )}
      {isLarge && hasDetail && expanded && (
        <div style={{ padding: "12px 16px 10px" }}>
          <p style={{ fontSize: 13, lineHeight: 1.75, color: C.text, wordBreak: "break-word", margin: 0 }}>{renderMarkdown(detail)}</p>
        </div>
      )}
      {isLarge && hasDetail && (
        <button onClick={() => onToggle(idx)}
          style={{ display: "flex", alignItems: "center", gap: 6, width: "100%", padding: "8px 16px", background: "transparent", borderLeft: "none", borderRight: "none", borderBottom: "none", borderTop: `1px solid ${C.border}`, cursor: "pointer", color: C.accent, fontSize: 11, fontFamily: SANS, fontWeight: 500, letterSpacing: "0.04em", textAlign: "left", transition: "background 0.15s" }}
          onMouseEnter={e => e.currentTarget.style.background = C.aLo}
          onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
          <span style={{ fontSize: 13, lineHeight: 1 }}>{expanded ? "↑" : "↓"}</span>
          {expanded ? "Collapse" : "Deep dive →"}
        </button>
      )}
    </div>
  );
}

function renderMarkdown(text) {
  if (!text) return null;
  return text.split("\n").map((line, li) => {
    const tokens = line.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
    const nodes = tokens.map((tok, ti) => {
      if (tok.startsWith("**") && tok.endsWith("**")) return <strong key={ti} style={{ fontWeight: 600, color: "inherit" }}>{tok.slice(2, -2)}</strong>;
      if (tok.startsWith("*") && tok.endsWith("*")) return <em key={ti} style={{ fontStyle: "italic", color: "inherit" }}>{tok.slice(1, -1)}</em>;
      return tok;
    });
    return <span key={li}>{nodes}{li < text.split("\n").length - 1 && <br />}</span>;
  });
}

function AIMode({ onAsk, msgs, setMsgs, busy, setBusy, input, setInput, setMode }) {
  const endRef = useRef(null);
  const inputRef = useRef(null);
  const [expandedMsgs, setExpandedMsgs] = useState(new Set());

  const toggleExpand = (idx) => {
    setExpandedMsgs(prev => { const next = new Set(prev); next.has(idx) ? next.delete(idx) : next.add(idx); return next; });
  };

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, busy]);

  const send = async (text) => {
    const q = text.trim();
    if (!q || busy) return;
    const history = [...msgs, { role: "user", content: q }];
    setMsgs(history);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-haiku-4-5-20251001", max_tokens: 1000, system: SYSTEM, messages: history }),
      });
      const data = await res.json();
      const reply = data.content?.find(b => b.type === "text")?.text ?? "I couldn't fetch a response — please email sheenalakshmi@gmail.com!";
      setMsgs([...history, { role: "assistant", content: reply }]);
    } catch {
      setMsgs([...history, { role: "assistant", content: "Something went wrong — try again or reach out at sheenalakshmi@gmail.com." }]);
    } finally {
      setBusy(false);
    }
  };

  const onKey = (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(input); } };
  const freshChat = msgs.length <= 2;

  return (
    <div className="sl-page-in" style={{ maxWidth: 720, margin: "0 auto", padding: "44px 24px 60px" }}>
      <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: 14 }}>AI-Powered Portfolio · Ask Me Anything</p>
      <h1 style={{ fontFamily: SERIF, fontSize: "clamp(32px,5vw,56px)", fontWeight: 600, lineHeight: 1.1, marginBottom: 10, color: C.text }}>Sheena Lakshmi</h1>
      <h2 style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(20px,3.5vw,38px)", fontWeight: 400, lineHeight: 1.18, marginBottom: 14, color: C.text }}>
        20+ years of turning complexity<br />into <span style={{ color: C.accent }}>clarity</span> &amp; <span style={{ color: C.accent }}>business impact.</span>
      </h2>
      <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.85, maxWidth: 480, marginBottom: 36 }}>
        I bring 20+ years of experience across SAP, Intuit, Dell, and McAfee — leading content strategy and UX design that drives measurable business impact. Ask me anything below, or{" "}
        <button onClick={() => setMode("classic")}
          style={{ background: "none", border: "none", padding: 0, color: C.accent, fontFamily: SANS, fontSize: 13, fontWeight: 500, cursor: "pointer", textDecoration: "underline", textDecorationStyle: "dotted", textUnderlineOffset: 3, transition: "opacity 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.75"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}>switch to Portfolio View</button>{" "}to browse my work.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginBottom: 40 }}>
        {[["$936M+","Contributed to revenue by way of migration"], ["20+","Years experience"], ["22%","Feature adoption lift"], ["4.8/5","Workshop NPS"]].map(([n, l]) => (
          <div key={l} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 10px", textAlign: "center" }}>
            <p style={{ fontFamily: SERIF, fontSize: 28, fontWeight: 600, color: C.accent, lineHeight: 1 }}>{n}</p>
            <p style={{ fontSize: 9, color: C.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 5, lineHeight: 1.4 }}>{l}</p>
          </div>
        ))}
      </div>

      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
        <div style={{ padding: "12px 18px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 10, background: C.card }}>
          <Avatar size={32} />
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 13, fontWeight: 500, color: C.text }}>Sheena Lakshmi</p>
            <p style={{ fontSize: 11, color: C.muted }}>AI-powered · Answers drawn from real work &amp; experience</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5, background: C.gLo, border: "1px solid rgba(78,201,138,0.2)", padding: "3px 9px", borderRadius: 10 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: C.green }} />
            <span style={{ fontSize: 10, color: C.green }}>Active</span>
          </div>
        </div>

        <div style={{ padding: "20px 18px", minHeight: 280, maxHeight: 440, overflowY: "auto", display: "flex", flexDirection: "column", gap: 12 }}>
          {msgs.map((m, i) => (
            <div key={i} className="sl-msg" style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start", gap: 9, alignItems: "flex-start" }}>
              {m.role === "assistant" && <Avatar size={26} />}
              {m.role === "user" ? (
                <div style={{ maxWidth: "82%", background: C.accent, color: "#fff", padding: "11px 14px", borderRadius: "16px 4px 16px 16px", fontSize: 13, lineHeight: 1.75, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{m.content}</div>
              ) : (
                <AssistantMessage content={m.content} idx={i} expanded={expandedMsgs.has(i)} onToggle={toggleExpand} />
              )}
            </div>
          ))}
          {busy && (
            <div className="sl-msg" style={{ display: "flex", gap: 9 }}>
              <Avatar size={26} />
              <div style={{ background: C.card, padding: "11px 14px", borderRadius: "4px 16px 16px 16px" }}><Dots /></div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {freshChat && (
          <div style={{ padding: "0 18px 12px", display: "flex", gap: 7, flexWrap: "wrap" }}>
            {CHIPS.map(c => <button key={c} className="sl-chip" onClick={() => send(c)}>{c}</button>)}
          </div>
        )}

        <div style={{ borderTop: `1px solid ${C.border}`, padding: "11px 14px", display: "flex", gap: 9, alignItems: "flex-end", background: C.card }}>
          <textarea ref={inputRef} className="sl-ta" rows={1} value={input} onChange={e => setInput(e.target.value)} onKeyDown={onKey} placeholder="Ask me about my work, process, or availability…" />
          <button className="sl-send" onClick={() => send(input)} disabled={!input.trim() || busy}>↑</button>
        </div>
      </div>

      <p style={{ fontSize: 11, color: C.muted, marginTop: 12, letterSpacing: "0.08em", textAlign: "center", opacity: 0.5 }}>
        Powered by Claude · All answers reflect Sheena's real experience
      </p>
    </div>
  );
}

function ClassicMode({ onAskAbout }) {
  const [drawer, setDrawer] = useState(null);
  const ARTIFACT_ICONS = { pdf: "PDF", deck: "▤", screenshot: "⊡", video: "▶", notion: "N" };
  const openDrawer = (p) => setDrawer(p);
  const closeDrawer = () => setDrawer(null);

  return (
    <div style={{ position: "relative" }}>
      {drawer && <div onClick={closeDrawer} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 50, backdropFilter: "blur(4px)" }} />}

      <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: "min(560px, 92vw)", background: C.surface, borderLeft: `1px solid ${C.border}`, zIndex: 60, transform: drawer ? "translateX(0)" : "translateX(100%)", transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)", display: "flex", flexDirection: "column", overflowY: "auto", boxShadow: drawer ? "-20px 0 60px rgba(0,0,0,0.3)" : "none" }}>
        {drawer && (
          <>
            <div style={{ padding: "20px 28px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "flex-start", background: C.card, position: "sticky", top: 0, zIndex: 1 }}>
              <div>
                <p style={{ fontSize: 10, color: C.muted, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 4 }}>{drawer.id} · {drawer.company}</p>
                <h2 style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 600, color: C.text, lineHeight: 1.2 }}>{drawer.title}</h2>
                <p style={{ fontSize: 12, color: C.muted, marginTop: 3 }}>{drawer.role}</p>
              </div>
              <button onClick={closeDrawer} style={{ background: "transparent", border: `1px solid ${C.border}`, color: C.muted, width: 32, height: 32, borderRadius: "50%", cursor: "pointer", fontSize: 18, lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginLeft: 16, marginTop: 2, transition: "all 0.2s" }}>×</button>
            </div>

            <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: 28 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{drawer.tags.map(t => <Tag key={t} label={t} />)}</div>

              <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "18px 22px", display: "flex", gap: 20, alignItems: "center" }}>
                <div>
                  {drawer.metricSvg ? <DTIcon size={64}/> : <p style={{ fontFamily: SERIF, fontSize: 40, fontWeight: 600, color: C.accent, lineHeight: 1 }}>{drawer.metric}</p>}
                  <p style={{ fontSize: 11, color: C.muted, letterSpacing: "0.08em", marginTop: 4 }}>{drawer.metricLabel}</p>
                </div>
              </div>

              <div>
                <p style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: C.accent, marginBottom: 10 }}>Challenge & Context</p>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.85 }}>{drawer.challenge}</p>
              </div>

              <div>
                <p style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: C.accent, marginBottom: 12 }}>Key Actions</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {drawer.keyActions.map((a, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <span style={{ fontFamily: SANS, fontSize: 11, color: C.accent, flexShrink: 0, marginTop: 2, opacity: 0.7 }}>{String(i + 1).padStart(2, "0")}</span>
                      <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.75 }}>{a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: C.accent, marginBottom: 12 }}>Results</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 10 }}>
                  {drawer.results.map(r => (
                    <div key={r.label} style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 14px" }}>
                      <p style={{ fontFamily: SERIF, fontSize: 20, fontWeight: 600, color: C.accent, lineHeight: 1, marginBottom: 5 }}>{r.value}</p>
                      <p style={{ fontSize: 10, color: C.muted, letterSpacing: "0.05em", lineHeight: 1.4 }}>{r.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: C.accent, marginBottom: 12 }}>Proof & Artifacts</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {drawer.artifacts.map(a => {
                    if (a.type === "nda") return (
                      <div key={a.label} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: "16px 20px" }}>
                        <p style={{ fontSize: 13, color: C.muted, fontStyle: "italic", lineHeight: 1.6 }}>{a.desc}</p>
                      </div>
                    );
                    const isPlaceholder = a.href.startsWith("ADD_");
                    return (
                      <div key={a.label}
                        style={{ background: C.card, border: `1px solid ${isPlaceholder ? "rgba(0,0,0,0.04)" : C.border}`, borderRadius: 10, padding: "12px 16px", display: "flex", alignItems: "center", gap: 14, opacity: isPlaceholder ? 0.45 : 1, cursor: isPlaceholder ? "default" : "pointer" }}
                        onClick={() => !isPlaceholder && window.open(a.href, "_blank")}>
                        <div style={{ width: 36, height: 36, borderRadius: 8, flexShrink: 0, background: isPlaceholder ? C.surface : C.aLo, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600, color: isPlaceholder ? C.muted : C.accent, fontFamily: SANS }}>
                          {ARTIFACT_ICONS[a.type] || "↗"}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{ fontSize: 13, fontWeight: 500, color: isPlaceholder ? C.muted : C.text, marginBottom: 2 }}>
                            {a.label}{isPlaceholder && <span style={{ fontSize: 11, marginLeft: 8, opacity: 0.6 }}>(link pending)</span>}
                          </p>
                          <p style={{ fontSize: 11, color: C.muted, lineHeight: 1.4 }}>{a.desc}</p>
                        </div>
                        {!isPlaceholder && <span style={{ fontSize: 14, color: C.muted, flexShrink: 0 }}>↗</span>}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div style={{ paddingTop: 4, paddingBottom: 8 }}>
                <button className="sl-ask" style={{ width: "100%", textAlign: "center", padding: "12px" }} onClick={() => { closeDrawer(); onAskAbout(drawer.askPrompt); }}>
                  ✦ Ask me about this project in the AI chat
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "44px 24px 80px" }}>

        <section style={{ marginBottom: 72 }}>
          <div style={{ display: "flex", gap: 32, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: 14 }}>About</p>
              <h1 style={{ fontFamily: SERIF, fontSize: "clamp(28px,4vw,48px)", fontWeight: 600, lineHeight: 1.18, marginBottom: 18, color: C.text }}>Sheena Lakshmi</h1>
              <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.9, marginBottom: 14, maxWidth: 560 }}>UX Design Manager and Content Design Leader with 20+ years of experience — 8+ years specialising in UX content design and 16+ years in technical documentation.</p>
              <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.9, maxWidth: 560 }}>Proven track record of building and scaling high-performing content teams at Fortune 500 companies (SAP, Intuit, Dell, McAfee). Deep expertise in AI content design for enterprise products, prompt engineering, conversation design, ethical AI, and data-informed UX research.</p>
              <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap", alignItems: "center" }}>
                <a href="https://drive.google.com/file/d/1hO3DGojjYWth37mQvykE7tdnO8XaoHLo/view?usp=sharing" target="_blank" rel="noreferrer" className="sl-resume-btn">↓ Download Resume</a>
                <a href="mailto:sheenalakshmi@gmail.com" className="sl-nav-link" style={{ color: C.accent }}>sheenalakshmi@gmail.com ↗</a>
                <a href="https://www.linkedin.com/in/sheena-lakshmi-232a425/" target="_blank" rel="noreferrer" className="sl-nav-link">LinkedIn ↗</a>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, flexShrink: 0 }}>
              {[["$936M+","Contributed to revenue by way of migration"], ["20+","Years experience"], ["22%","Feature adoption lift"], ["4.8/5","Workshop NPS"]].map(([n, l]) => (
                <div key={l} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "18px 14px", textAlign: "center", minWidth: 100 }}>
                  <p style={{ fontFamily: SERIF, fontSize: 28, fontWeight: 600, color: C.accent, lineHeight: 1 }}>{n}</p>
                  <p style={{ fontSize: 9, color: C.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 6, lineHeight: 1.4 }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 72 }}>
          <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: 28 }}>Experience</p>
          {[
            { role: "UX Design Manager (Content)", co: "SAP India", period: "2025 – Present" },
            { role: "Content Design Lead & Strategist", co: "Intuit (QuickBooks)", period: "Sep 2022 – 2025" },
            { role: "Senior User Assistance Developer / Content Design Strategist", co: "SAP (SAP Analytics Cloud)", period: "Jan 2019 – Aug 2022" },
            { role: "Senior Technical Writer", co: "McAfee India", period: "Jun 2017 – Dec 2018" },
            { role: "Editorial Consultant", co: "Origin Learning Solutions (VMware eLearning)", period: "Feb 2016 – May 2017" },
            { role: "Documentation Product Lead", co: "Dell Technologies", period: "Jul 2008 – Feb 2016" },
            { role: "Senior Technical Writer", co: "RSA Security India", period: "Aug 2007 – Aug 2008" },
            { role: "Senior Information Developer", co: "Huawei Technologies India", period: "Jun 2004 – Jul 2007" },
            { role: "Information Developer", co: "Advance Educational Technologies India", period: "Jan 2000 – Feb 2002" },
          ].map((e, i) => (
            <div key={i} className="sl-exp-row">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 500, color: C.text, marginBottom: 3 }}>{e.role}</p>
                  <p style={{ fontSize: 12, color: C.muted }}>{e.co}</p>
                </div>
                <span style={{ fontSize: 11, color: C.muted, letterSpacing: "0.08em", flexShrink: 0, marginLeft: 16 }}>{e.period}</span>
              </div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 72 }}>
          <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: 10 }}>Case Studies</p>
          <p style={{ fontSize: 12, color: C.muted, marginBottom: 28, lineHeight: 1.7 }}>Click <strong style={{ color: C.text, fontWeight: 500 }}>View case study</strong> on any project to see the full challenge, process, results, and artifacts.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {PROJECTS.map(p => {
              const isActive = drawer?.id === p.id;
              const isInactive = drawer && !isActive;
              return (
                <div key={p.id} className="sl-proj-card"
                  style={{ transition: "opacity 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease", opacity: isInactive ? 0.45 : 1, border: isActive ? `1.5px solid ${C.accent}` : `1px solid ${C.border}`, background: isActive ? C.aLo : C.card, boxShadow: isActive ? `0 0 0 3px ${C.aMid}, 0 8px 32px ${C.shadow}` : "none" }}>
                  <div style={{ padding: "18px 22px", display: "flex", alignItems: "center", gap: 16 }}>
                    <span style={{ fontFamily: SANS, fontSize: 11, color: C.muted, letterSpacing: "0.1em", flexShrink: 0 }}>{p.id}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                        <h3 style={{ fontFamily: SERIF, fontSize: 19, fontWeight: 600, color: C.text, lineHeight: 1.2 }}>{p.title}</h3>
                        <span style={{ fontSize: 11, color: C.muted, flexShrink: 0 }}>{p.company}</span>
                      </div>
                      <p style={{ fontSize: 12, color: C.muted, marginTop: 4, lineHeight: 1.6, maxWidth: 520 }}>{p.description}</p>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8 }}>{p.tags.map(t => <Tag key={t} label={t} />)}</div>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0, paddingLeft: 12 }}>
                      {p.metricSvg ? <div style={{ display: "flex", justifyContent: "flex-end" }}><DTIcon size={48}/></div> : <p style={{ fontFamily: SERIF, fontSize: 24, fontWeight: 600, color: C.accent, lineHeight: 1 }}>{p.metric}</p>}
                      <p style={{ fontSize: 9, color: C.muted, maxWidth: 90, textAlign: "right", lineHeight: 1.4, marginTop: 3 }}>{p.metricLabel}</p>
                      <button className="sl-cta-btn" style={{ marginTop: 10 }} onClick={() => openDrawer(p)}>View case study →</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section style={{ marginBottom: 72 }}>
          <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: 28 }}>Skills & Tools</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
            {SKILLS_LIST.map(sg => (
              <div key={sg.group}>
                <p style={{ fontSize: 11, color: C.muted, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10 }}>{sg.group}</p>
                <div>{sg.items.map(s => <span key={s} className="sl-skill-tag">{s}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 72 }}>
          <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: 28 }}>Recognition</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12 }}>
            {[
              { award: "Intuit Superstar Award", detail: "Customer Obsession · 2023 — highest company recognition" },
              { award: "Trajectory Changing Performance", detail: "Highest merit rating at Intuit" },
              { award: "Women in Leadership", detail: "Intuit — 6-month intensive coaching programme" },
              { award: "Top Mentor on ADPList", detail: "Recognised twice in a row" },
              { award: "Top Talent", detail: "SAP recognition" },
              { award: "Workshop NPS 4.8+ / 5", detail: "Across all design thinking and content workshops" },
            ].map(a => (
              <div key={a.award} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "16px 20px" }}>
                <p style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 600, color: C.text, marginBottom: 4 }}>{a.award}</p>
                <p style={{ fontSize: 12, color: C.muted }}>{a.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: 20 }}>Get in Touch</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
            <div>
              <h2 style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 400, lineHeight: 1.2, marginBottom: 16, color: C.text }}>Let's make something great together.</h2>
              <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.85 }}>Good content is invisible and complements the user experience. I can make your content speak less and do more.</p>
            </div>
            <div>
              {[
                { label: "Email", value: "sheenalakshmi@gmail.com", href: "mailto:sheenalakshmi@gmail.com" },
                { label: "LinkedIn", value: "/in/sheena-lakshmi-232a425", href: "https://www.linkedin.com/in/sheena-lakshmi-232a425/" },
                { label: "Phone", value: "+91 98458 07918", href: "tel:+919845807918" },
              ].map(ct => (
                <div key={ct.label} style={{ padding: "16px 0", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 10, color: C.muted, letterSpacing: "0.2em", textTransform: "uppercase" }}>{ct.label}</span>
                  <a href={ct.href} target={ct.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="sl-nav-link" style={{ color: C.text }}>{ct.value} →</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function SheenaPortfolio() {
  // ── CHANGE 2: Portfolio mode as default ───────────────────────────────────
  const [mode, setMode]   = useState("classic"); // "ai" | "classic"
  // ── CHANGE 3: Light theme as default ─────────────────────────────────────
  const [theme, setTheme] = useState("light");
  const [msgs, setMsgs]   = useState([{
    role: "assistant",
    content: "Hi! I'm Sheena — a UX Design Manager (Content) at SAP with 20+ years of experience — 16 in technical writing and 8 in UX content design.\n\nI've led content strategy at Intuit and SAP, mentored teams of 8+, and delivered measurable growth across global products.\n\nAsk me anything — or switch to Portfolio View to browse my work and samples. 👋",
  }]);
  const [busy, setBusy]   = useState(false);
  const [input, setInput] = useState("");

  C = theme === "dark" ? DARK_C : LIGHT_C;

  useEffect(() => {
    const s = document.createElement("style");
    s.id = "sl-theme-styles";
    s.textContent = getStyles(C);
    const existing = document.getElementById("sl-theme-styles");
    if (existing) existing.remove();
    document.head.appendChild(s);
    return () => { const el = document.getElementById("sl-theme-styles"); if (el) el.remove(); };
  }, [theme]);

  const handleAskAbout = (prompt) => {
    setMode("ai");
    setTimeout(() => {
      const q = prompt.trim();
      if (!q || busy) return;
      const history = [...msgs, { role: "user", content: q }];
      setMsgs(history);
      setBusy(true);
      fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-haiku-4-5-20251001", max_tokens: 1000, system: SYSTEM, messages: history }),
      })
        .then(r => r.json())
        .then(data => {
          const reply = data.content?.find(b => b.type === "text")?.text ?? "Reach out at sheenalakshmi@gmail.com!";
          setMsgs([...history, { role: "assistant", content: reply }]);
        })
        .catch(() => {
          setMsgs([...history, { role: "assistant", content: "Something went wrong — try again or email sheenalakshmi@gmail.com." }]);
        })
        .finally(() => setBusy(false));
    }, 100);
  };

  return (
    <div style={{ background: C.bg, color: C.text, minHeight: "100vh", fontFamily: SANS, transition: "background 0.3s ease, color 0.3s ease" }}>
      <nav style={{ width: "100%", padding: "14px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.08)", background: C.navBg, backdropFilter: "blur(16px)", position: "sticky", top: 0, zIndex: 30 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }} />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <ModeToggle mode={mode} setMode={setMode} />
          <button className="sl-theme-btn" onClick={() => setTheme(t => t === "dark" ? "light" : "dark")} title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <a href="https://drive.google.com/file/d/1hO3DGojjYWth37mQvykE7tdnO8XaoHLo/view?usp=sharing" target="_blank" rel="noreferrer" className="sl-resume-btn">↓ Resume</a>
          <a href="mailto:sheenalakshmi@gmail.com" className="sl-nav-link">Contact ↗</a>
        </div>
      </nav>
      {mode === "ai"
        ? <AIMode msgs={msgs} setMsgs={setMsgs} busy={busy} setBusy={setBusy} input={input} setInput={setInput} onAsk={handleAskAbout} setMode={setMode} />
        : <ClassicMode onAskAbout={handleAskAbout} />
      }
    </div>
  );
}

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
Key contributions: Named and positioned Financial Planning and Analysis within QBO left navigation; led card sorting from Budgets to FP&A; led A/B experiment on AI forecasting; built scalable content framework across approximately 10 workstreams; influenced ethical AI communication with AI Governance Council, IntuitAssist, legal and marketing; led cashflow planner transition in two-week turnaround; participated in 30+ follow-me-homes, 6 quantitative surveys, research for 6+ workstreams; collaborated with accessibility leaders on ARIA, Alt+Text, and keyboard accessibility.

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
    title: "Content Design & Strategy",
    company: "Intuit · QuickBooks Online & Enterprise Suite",
    role: "Content Design Lead — FP&A Portfolio",
    metric: "37%",
    metricLabel: "YoY growth in budgets created by companies",
    tags: ["Content Strategy", "AI Adoption", "User Research", "Systems Design"],
    description: "Content design lead for the full FP&A portfolio within Intuit Enterprise Suite and QuickBooks Online — budgeting, forecasting, cash flow — across global markets. FP&A is a strategic pillar for the Mid-Market Intuit Enterprise Suite (IES).",
    challenge: "Create a cohesive, discoverable, and scalable content experience for a rapidly evolving financial planning platform serving small and mid-market businesses globally — while advocating for ethical, AI-led solutions that help SMBs become profitable.",
    keyActions: [
      "Named and positioned 'Financial Planning and Analysis' within QBO left navigation — led card sorting to move from 'Budgets' to FP&A, directly impacting discoverability and engagement",
      "Built scalable content framework and reusable library across ~10 workstreams spanning budgeting, forecasting, cash flow, and reporting",
      "Accelerated AI forecast adoption to 36% through onboarding messaging and clear CTAs — partnered with PM and XD on A/B experiment",
      "Influenced ethical AI communication: collaborated with AI Governance Council, IntuitAssist teams, legal, and marketing to set a precedent for transparent AI messaging",
      "Led cashflow planner transition — rebranded feature, decommissioned AI forecasting within cashflow, coordinated with sales, marketing, and customer success in a two-week turnaround",
      "Participated in 30+ follow-me-homes, contributed to 6 quantitative surveys, synthesised research for 6+ workstreams",
      "Collaborated with accessibility leaders to enforce ARIA labels, Alt+Text, and keyboard accessibility across the FP&A suite",
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
    description: "As a newly certified Design Thinking Coach (SAP Design Thinking Academy, 2021), addressed multiple overlapping tools and processes within the India location and helped Project Management teams overcome communication and synchronisation challenges.",
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
  .sl-nav-link{font-size:12px;color:${C.accent};text-decoration:none;letter-spacing:0.06em;transition:all 0.2s;font-weight:500;text-decoration:underline;text-underline-offset:3px;text-decoration-style:dotted}
  .sl-nav-link:hover{opacity:0.75}
  .sl-resume-btn{display:inline-flex;align-items:center;gap:7px;background:${C.accent};border:1.5px solid ${C.accent};color:#fff;padding:9px 20px;border-radius:8px;font-size:12px;font-family:${SANS};letter-spacing:0.06em;cursor:pointer;transition:all 0.22s;text-decoration:none;font-weight:500;white-space:nowrap;box-shadow:0 2px 8px ${C.shadow}}
  .sl-resume-btn:hover{opacity:0.88;transform:translateY(-2px);box-shadow:0 4px 16px ${C.shadow}}
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

  const SESSION_LIMIT = 10;

  const send = async (text) => {
    const q = text.trim();
    if (!q || busy) return;
    if (msgs.filter(m => m.role === "user").length >= SESSION_LIMIT) {
      setMsgs(prev => [...prev, {
        role: "assistant",
        content: "You've reached the message limit for this session. To continue the conversation, please reach out at sheenalakshmi@gmail.com or connect on LinkedIn.",
      }]);
      return;
    }
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



// ─── FP&A Case Study Overlay ─────────────────────────────────────────────────
function CaseStudyFPA({ onBack, onHome }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Lock body scroll while overlay is open
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const CS = {
    bg:      "#FAFAF8",
    card:    "#FFFFFF",
    surface: "#F0EDE6",
    border:  "rgba(0,0,0,0.09)",
    accent:  "#1A4B8C",
    text:    "#0F172A",
    muted:   "#1F2937",
    label:   "#374151",
    navy:    "#0F1A2E",
  };

  const SB = "'Cormorant Garant', Georgia, serif";
  const SN = "'DM Sans', system-ui, sans-serif";
  const SM = "'DM Mono', monospace";

  const SectionLabel = ({ children }) => (
    <p style={{
      fontFamily: SM, fontSize: 10, letterSpacing: "0.28em",
      textTransform: "uppercase", color: CS.accent,
      marginBottom: 8, display: "flex", alignItems: "center", gap: 12,
    }}>
      {children}
      <span style={{ flex: 1, height: 1, background: CS.border, maxWidth: 48, display: "inline-block" }}/>
    </p>
  );

  const Section = ({ children, style }) => (
    <section style={{ marginBottom: 56, ...style }}>{children}</section>
  );

  const HR = () => (
    <hr style={{ border: "none", borderTop: `1px solid ${CS.border}`, margin: "44px 0" }}/>
  );

  const goals = [
    {
      num: "01", title: "World-class content",
      body: "Consistent voice and tone across the FP&A suite. Upskill the team, leverage GenAI tools, generate microcopy and feature names backed by data, and measure content effectiveness rigorously.",
    },
    {
      num: "02", title: "Scalable strategy",
      body: "Build frameworks and evangelise content design across PM and XD communities. Create modular, reusable processes using a platform mindset — so quality scales without depending on any one person.",
    },
    {
      num: "03", title: "Ethical AI communication",
      body: "Collaborate with the AI Governance Council. Lead content strategy around responsible AI communication — with full explainability, legal disclaimers, and ethical framing as non-negotiables.",
    },
  ];

  const steps = [
    { num: "01", title: "Empathise — Research & Discovery", body: "Conducted 30+ follow-me-homes and contributed to 6 quantitative surveys across 6+ workstreams. Identified user motivations, pain points, and first-time expectations for business planning in QuickBooks." },
    { num: "02", title: "Define — Strategy & Positioning", body: "Named and positioned 'Financial Planning and Analysis' within QBO's left navigation through a card sorting exercise — replacing 'Budgets' — directly improving discoverability, adoption, and engagement across the suite." },
    { num: "03", title: "Ideate — Framework & System Building", body: "Built a scalable content framework with reusable libraries, standardised voice and tone, and structured guidance for technical, marketing, and legal communication. Coached PM and XD partners on content design principles and Writer.AI." },
    { num: "04", title: "Prototype — Content Design Across Workstreams", body: "Designed content from ground zero for budgeting (CA, UK, AU, ROW), P&L-based forecasting, balance sheet budgeting, subdivided budgeting, Custom Reports Builder, AI-based forecasting, collaborative budgeting, Goals creation, autosave, prefill past actuals, and large payload budgeting." },
    { num: "05", title: "Test — Validation & Iteration", body: "Led A/B experiments to improve AI forecasting engagement. Applied CES as a primary metric to track real-world content impact. Accessibility audits and compliance work embedded from day one." },
  ];

  const screens = [
    { key: "product1", label: "FTU hero state — Forecasting onboarding", alt: "QuickBooks Forecast like a pro onboarding screen" },
    { key: "product2", label: "AI forecast detail — Planning made easier", alt: "QuickBooks AI-powered automatic forecast detail view" },
    { key: "product3", label: "Budget import — Enhanced feature nudge", alt: "QuickBooks import consolidated budgets notification" },
    { key: "product4", label: "FTU hero state — Budgeting onboarding", alt: "QuickBooks Plan your finances and stay ahead hero state" },
    { key: "product5", label: "Budget creation — Setup wizard", alt: "QuickBooks budget creation wizard flow" },
    { key: "product6", label: "Budget spreadsheet — Error state copy", alt: "QuickBooks budget spreadsheet with error state" },
  ];

  const artifacts = [
    { key: "artifactTracker",    title: "Content Design Engagement Tracker", desc: "A structured tracker defining level of engagement (Review vs Consultation), tasks, status, prerequisites, and notes for each workstream — ensuring consistent content design coverage across ~10 simultaneous FP&A projects." },
    { key: "artifactContentLib", title: "FP&A Content Library", desc: "A centralised content library cataloguing microcopy by component type, product area (Cash flow, Budgets), scenario, screen, and content value — enabling reuse and consistency across the suite." },
    { key: "artifactGuidelines", title: "FP&A Content Guidelines", desc: "Voice and tone guidelines tailored to FP&A users — warm, genuine, and confident. Structured into Content Sanity, Content Design System, and Content Design Support modules." },
    { key: "artifactDesignSys",  title: "FP&A Content Design System", desc: "Component-level content guidelines covering 20+ UI components — Badge, Buttons, Drawers, Toast messages, Modal dialogs, Tooltips, Text fields, Loaders, Navigation, and more." },
    { key: "artifactProcess",    title: "Discovery & Onboarding Content Strategy", desc: "A full content strategy document built on the design thinking process (Empathise → Define → Ideate → Prototype → Test). Includes general content guidelines, hero state guidelines, and feature nudge guidelines with examples." },
  ];

  const principles = [
    { bold: "Foster excellence", rest: " through coaching and creating opportunities for peers to thrive" },
    { bold: "Never stop learning", rest: " — staying current in AI, content design, and evolving SMB user needs" },
    { bold: "Think systems", rest: " — building frameworks that don't depend on any single person" },
    { bold: "Deep customer empathy", rest: " — every decision grounded in real user research, not assumptions" },
    { bold: "Stakeholder management", rest: " through subject matter expertise and user advocacy" },
    { bold: "Equip, empower, and be accountable", rest: " — to the team, the product, and the customer" },
  ];

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 200,
      background: CS.bg, color: CS.text,
      fontFamily: SN, overflowY: "auto",
      display: "flex", flexDirection: "column",
    }} ref={scrollRef}>

      {/* ── STICKY NAV ── */}
      <div style={{
        position: "sticky", top: 0, zIndex: 10,
        background: "rgba(250,250,248,0.95)", backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${CS.border}`,
        padding: "12px 40px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexShrink: 0,
      }}>
        <button onClick={onBack} style={{
          display: "flex", alignItems: "center", gap: 7,
          background: "transparent", border: `1px solid ${CS.border}`,
          color: CS.accent, fontFamily: SN, fontSize: 12, fontWeight: 500,
          letterSpacing: "0.04em", padding: "7px 14px", borderRadius: 8,
          cursor: "pointer", transition: "all 0.2s",
        }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(26,75,140,0.06)"; e.currentTarget.style.borderColor = CS.accent; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = CS.border; }}
        >
          ← Back to case studies
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => window.print()} style={{
            display: "flex", alignItems: "center", gap: 6,
            background: "transparent", border: `1px solid ${CS.border}`,
            color: CS.label, fontFamily: SN, fontSize: 12,
            padding: "7px 14px", borderRadius: 8, cursor: "pointer", transition: "all 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = CS.accent}
            onMouseLeave={e => e.currentTarget.style.borderColor = CS.border}
          >
            ↓ Save as PDF
          </button>
          <button onClick={onHome} style={{
            display: "flex", alignItems: "center", gap: 7,
            background: CS.accent, border: "none",
            color: "#fff", fontFamily: SN, fontSize: 12, fontWeight: 500,
            letterSpacing: "0.04em", padding: "7px 16px", borderRadius: 8,
            cursor: "pointer", transition: "all 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            ⌂ Portfolio home
          </button>
        </div>
      </div>

      {/* ── COVER ── */}
      <div style={{
        background: "linear-gradient(160deg, #0F1A2E 0%, #1A3A6C 60%, #1A4B8C 100%)",
        color: "#fff", padding: "72px 0 64px", position: "relative", overflow: "hidden", flexShrink: 0,
      }}>
        <div style={{ position: "absolute", top: -40, right: -60, width: 360, height: 360, borderRadius: "50%", background: "rgba(123,159,191,0.12)", pointerEvents: "none" }}/>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: SM, fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(180,215,245,0.9)", marginBottom: 18, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 32, height: 1, background: "rgba(123,159,191,0.6)", display: "inline-block" }}/>
            Case Study · Intuit QuickBooks
          </p>
          <h1 style={{ fontFamily: SB, fontSize: "clamp(36px,5vw,58px)", fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.01em", marginBottom: 10, color: "#fff" }}>
            Content Design<br/>&amp; Strategy<br/>
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "rgba(200,220,240,0.82)" }}>for FP&amp;A</em>
          </h1>
          <p style={{ fontSize: 14, color: "rgba(220,235,250,0.8)", marginBottom: 44, letterSpacing: "0.02em" }}>
            UX content design for QuickBooks Financial Planning and Analysis — from ground zero to strategic product pillar
          </p>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {[["Role","Content Design Lead"],["Product","QuickBooks FP&A · IES"],["Duration","2022 – 2025"],["Scope","Global · SMB · Mid-market"]].map(([label, val], i) => (
              <div key={label} style={{ padding: "12px 28px", borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.12)" }}>
                <span style={{ fontFamily: SM, fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(180,215,245,0.85)", display: "block", marginBottom: 4 }}>{label}</span>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.92)", fontWeight: 500 }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "64px 40px 80px", width: "100%" }}>

        {/* BACKGROUND */}
        <Section>
          <SectionLabel>Background</SectionLabel>
          <h2 style={{ fontFamily: SB, fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, lineHeight: 1.2, color: CS.text, marginBottom: 14 }}>
            From a budgeting tool to a <em style={{ fontStyle: "italic", fontWeight: 400, color: CS.accent }}>comprehensive FP&amp;A suite</em>
          </h2>
          <p style={{ fontSize: 14, color: CS.muted, lineHeight: 1.85, marginBottom: 12 }}>
            I joined the QuickBooks FP&A team as a senior content designer and took full ownership of content strategy for capabilities built out of the India Development Center. Over the engagement, the product evolved from a basic, data entry-based budgeting interface into a feature-rich financial planning platform — spanning budgeting, forecasting, cash flow, and reporting — serving small and mid-market businesses globally.
          </p>
          <p style={{ fontSize: 14, color: CS.muted, lineHeight: 1.85 }}>
            FP&A became a strategic pillar for Intuit's Mid-Market Intuit Enterprise Suite (IES), and content design played a measurable role in its adoption and engagement outcomes across QBO Advanced, QBO Plus, and Intuit Enterprise Suite.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 20 }}>
            {["Content Strategy","AI Adoption","User Research","Systems Design","Ethical AI","Accessibility"].map(t => (
              <span key={t} style={{ fontFamily: SM, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", border: `1px solid ${CS.border}`, padding: "4px 10px", borderRadius: 4, color: CS.label }}>{t}</span>
            ))}
          </div>
        </Section>

        <HR/>

        {/* GOALS */}
        <Section>
          <SectionLabel>Content Design Goals</SectionLabel>
          <h2 style={{ fontFamily: SB, fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, lineHeight: 1.2, color: CS.text, marginBottom: 14 }}>
            Three strategic <em style={{ fontStyle: "italic", fontWeight: 400, color: CS.accent }}>goals</em> anchoring the work
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginTop: 20 }}>
            {goals.map(g => (
              <div key={g.num} style={{ background: CS.card, border: `1px solid ${CS.border}`, borderRadius: 12, padding: "22px 18px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: CS.accent }}/>
                <span style={{ fontFamily: SB, fontSize: 40, fontWeight: 700, color: CS.surface, lineHeight: 1, display: "block", marginBottom: 10 }}>{g.num}</span>
                <span style={{ fontSize: 11, fontWeight: 600, color: CS.accent, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8, display: "block" }}>{g.title}</span>
                <p style={{ fontSize: 12, color: CS.muted, lineHeight: 1.75, margin: 0 }}>{g.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <HR/>

        {/* PROCESS */}
        <Section>
          <SectionLabel>Process</SectionLabel>
          <h2 style={{ fontFamily: SB, fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, lineHeight: 1.2, color: CS.text, marginBottom: 14 }}>
            A design thinking approach to <em style={{ fontStyle: "italic", fontWeight: 400, color: CS.accent }}>content strategy</em>
          </h2>
          <p style={{ fontSize: 14, color: CS.muted, lineHeight: 1.85, marginBottom: 20 }}>
            Every content decision was grounded in user evidence and scaled across approximately 10 simultaneous workstreams through a structured, repeatable process.
          </p>
          <div style={{ border: `1px solid ${CS.border}`, borderRadius: 12, overflow: "hidden" }}>
            {steps.map((s, i) => (
              <div key={s.num} style={{ display: "flex", borderBottom: i < steps.length - 1 ? `1px solid ${CS.border}` : "none", background: CS.card }}>
                <span style={{ width: 56, flexShrink: 0, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "18px 0", fontFamily: SM, fontSize: 11, color: CS.accent, fontWeight: 500, letterSpacing: "0.06em", borderRight: `1px solid ${CS.border}` }}>{s.num}</span>
                <div style={{ padding: "18px 22px", flex: 1 }}>
                  <h4 style={{ fontSize: 13, fontWeight: 600, color: CS.text, marginBottom: 5 }}>{s.title}</h4>
                  <p style={{ fontSize: 13, color: CS.muted, margin: 0, lineHeight: 1.8 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <HR/>

        {/* PRODUCT SCREENS */}
        <Section>
          <SectionLabel>In the Product</SectionLabel>
          <h2 style={{ fontFamily: SB, fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, lineHeight: 1.2, color: CS.text, marginBottom: 14 }}>
            Content <em style={{ fontStyle: "italic", fontWeight: 400, color: CS.accent }}>in context</em>
          </h2>
          <p style={{ fontSize: 14, color: CS.muted, lineHeight: 1.85, marginBottom: 20 }}>
            These screens show the content design in the live QuickBooks product — from first-time user onboarding to AI-powered forecasting and budget creation flows.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {screens.map(s => (
              <div key={s.key} style={{ background: CS.card, border: `1px solid ${CS.border}`, borderRadius: 12, overflow: "hidden" }}>
                <img
                  src={`/cs-${s.key}.jpg`}
                  alt={s.alt}
                  style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
                />
                <div style={{ padding: "10px 14px", borderTop: `1px solid ${CS.border}`, fontFamily: SM, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: CS.label }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <HR/>

        {/* ARTIFACTS */}
        <Section>
          <SectionLabel>Artefacts &amp; Deliverables</SectionLabel>
          <h2 style={{ fontFamily: SB, fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, lineHeight: 1.2, color: CS.text, marginBottom: 14 }}>
            What I <em style={{ fontStyle: "italic", fontWeight: 400, color: CS.accent }}>built</em>
          </h2>
          <p style={{ fontSize: 14, color: CS.muted, lineHeight: 1.85, marginBottom: 20 }}>
            Actual deliverables from the engagement — content frameworks, guidelines, a component-level design system, and a structured onboarding content strategy.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {artifacts.map(a => (
              <div key={a.key} style={{ background: CS.card, border: `1px solid ${CS.border}`, borderRadius: 12, overflow: "hidden" }}>
                <img
                  src={`/cs-${a.key}.jpg`}
                  alt={a.title}
                  style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
                />
                <div style={{ padding: "16px 20px", borderTop: `1px solid ${CS.border}` }}>
                  <strong style={{ display: "block", fontSize: 13, fontWeight: 600, color: CS.text, marginBottom: 5 }}>{a.title}</strong>
                  <p style={{ fontSize: 12, color: CS.muted, margin: 0, lineHeight: 1.7 }}>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <HR/>

        {/* LEADERSHIP */}
        <Section>
          <SectionLabel>Content Design Leadership</SectionLabel>
          <h2 style={{ fontFamily: SB, fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, lineHeight: 1.2, color: CS.text, marginBottom: 14 }}>
            Leading <em style={{ fontStyle: "italic", fontWeight: 400, color: CS.accent }}>beyond</em> the immediate team
          </h2>
          <p style={{ fontSize: 14, color: CS.muted, lineHeight: 1.85, marginBottom: 20 }}>
            My influence extended beyond FP&A into the broader content and design community — within Intuit and externally — through workshops, coaching, and reusable standards adopted by other product teams.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {principles.map((p, i) => (
              <div key={i} style={{ background: CS.card, border: `1px solid ${CS.border}`, borderRadius: 10, padding: "14px 16px", display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: CS.accent, flexShrink: 0, marginTop: 6 }}/>
                <p style={{ fontSize: 13, color: CS.muted, margin: 0, lineHeight: 1.7 }}>
                  <strong style={{ color: CS.text, fontWeight: 600 }}>{p.bold}</strong>{p.rest}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* FOOTER NAV */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 32, borderTop: `1px solid ${CS.border}` }}>
          <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 7, background: "transparent", border: `1px solid ${CS.border}`, color: CS.accent, fontFamily: SN, fontSize: 13, fontWeight: 500, padding: "10px 20px", borderRadius: 8, cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(26,75,140,0.06)"; e.currentTarget.style.borderColor = CS.accent; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = CS.border; }}
          >
            ← Back to case studies
          </button>
          <button onClick={onHome} style={{ display: "flex", alignItems: "center", gap: 7, background: CS.accent, border: "none", color: "#fff", fontFamily: SN, fontSize: 13, fontWeight: 500, padding: "10px 20px", borderRadius: 8, cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            ⌂ Portfolio home
          </button>
        </div>

      </div>
    </div>
  );
}



// ─── First-Time User Onboarding Case Study Overlay ───────────────────────────
function CaseStudyOnboarding({ onBack, onHome }) {

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const CS = {
    bg:      "#FAFAF8",
    card:    "#FFFFFF",
    surface: "#F0EDE6",
    border:  "rgba(0,0,0,0.09)",
    accent:  "#1A4B8C",
    text:    "#0F172A",
    muted:   "#1F2937",
    label:   "#374151",
    navy:    "#0F1A2E",
    green:   "#166534",
    greenBg: "rgba(22,101,52,0.08)",
  };

  const SB = "'Cormorant Garant', Georgia, serif";
  const SN = "'DM Sans', system-ui, sans-serif";
  const SM = "'DM Mono', monospace";

  const SectionLabel = ({ children }) => (
    <p style={{ fontFamily: SM, fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: CS.accent, marginBottom: 8, display: "flex", alignItems: "center", gap: 12 }} role="heading" aria-level="3">
      {children}
      <span style={{ flex: 1, height: 1, background: CS.border, maxWidth: 48, display: "inline-block" }} aria-hidden="true"/>
    </p>
  );

  const HR = () => <hr style={{ border: "none", borderTop: `1px solid ${CS.border}`, margin: "44px 0" }} aria-hidden="true"/>;

  const ImpactStat = ({ value, label }) => (
    <div style={{ background: CS.card, border: `1px solid ${CS.border}`, borderRadius: 12, padding: "22px 18px", textAlign: "center" }}>
      <span style={{ fontFamily: SB, fontSize: 36, fontWeight: 700, color: CS.accent, lineHeight: 1, display: "block", marginBottom: 8 }} aria-label={`${value} — ${label}`}>{value}</span>
      <span style={{ fontFamily: SM, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: CS.label, lineHeight: 1.5, display: "block" }}>{label}</span>
    </div>
  );

  const NavBtn = ({ onClick, children, primary }) => (
    <button
      onClick={onClick}
      style={{
        display: "flex", alignItems: "center", gap: 7,
        background: primary ? CS.accent : "transparent",
        border: primary ? "none" : `1px solid ${CS.border}`,
        color: primary ? "#fff" : CS.accent,
        fontFamily: SN, fontSize: 12, fontWeight: 500,
        letterSpacing: "0.04em", padding: "7px 16px", borderRadius: 8,
        cursor: "pointer", transition: "all 0.2s",
      }}
      onMouseEnter={e => { if (primary) e.currentTarget.style.opacity = "0.88"; else { e.currentTarget.style.background = "rgba(26,75,140,0.06)"; e.currentTarget.style.borderColor = CS.accent; }}}
      onMouseLeave={e => { if (primary) e.currentTarget.style.opacity = "1"; else { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = CS.border; }}}
    >
      {children}
    </button>
  );

  const goals = [
    { icon: "⚡", title: "Convey speed to benefit", body: "Show users immediately what they gain from budgeting in QuickBooks — before they even interact." },
    { icon: "📖", title: "Support learnability", body: "Reduce cognitive load so users can absorb the value proposition without financial expertise." },
    { icon: "🤝", title: "Build trust and retain", body: "Build trust through personalisation and benefit-driven language that reflects real user goals." },
    { icon: "🎯", title: "Personalise and build trust", body: "Speak to the specific pain of juggling QuickBooks and spreadsheets — make users feel understood." },
  ];

  const commGoals = [
    { do: true, text: "Lead with customer benefit, not feature capability" },
    { do: true, text: "Write for all knowledge levels — never assume" },
    { do: true, text: "Keep it realistic — don't over-inflate what a feature does" },
    { do: true, text: "Focus on what customers can do, not what the product is" },
    { do: true, text: "Low cognitive load: short sentences, plain language" },
    { do: false, text: "Use phrases like 'save time' or 'easily'" },
    { do: false, text: "Go into feature detail on the FTU screen" },
    { do: false, text: "Centre copy on the product rather than the user" },
    { do: false, text: "Use jargon or assume financial expertise" },
  ];

  const steps = [
    { num: "01", phase: "Empathise", title: "Quantitative & qualitative research", body: "Understood user motivation, stress points, and mental models around planning. Key insight: SMB owners were exhausted from back-and-forth between QuickBooks and external spreadsheets for business planning. Two personas defined — the time-poor Business Owner managing everything solo, and the Financial Planner supporting business growth." },
    { num: "02", phase: "Define", title: "Intersection of business goals & user goals", body: "Identified which budgeting features and benefits to highlight based on where user needs and business objectives overlapped. Focused on the fact that QuickBooks already holds the user's financial data — the key differentiation no spreadsheet offers." },
    { num: "03", phase: "Ideate", title: "Keyword brainstorming — answering user questions", body: "Brainstormed around four user questions: Why should I care? What problem are you solving? What is your differentiation? How does this make my work more efficient? Every line of copy had to answer at least one of these questions. Avoided empty phrases like 'save time' or 'easily'." },
    { num: "04", phase: "Content", title: "Apply FTU framework: headline → CTA", body: "Applied Intuit's FTU content framework: a benefit-first headline, one-sentence description (key takeaway, plain language, no jargon), three scannable benefit bullets (what users can do — not feature specs), a primary action CTA ('Create budget'), and a secondary CTA ('Import budget') for users with existing data." },
  ];

  const qaItems = [
    { q: "Why should I care?", a: "SMB owners need a plan to stay solvent — QuickBooks already has your data." },
    { q: "What problem of mine are you solving?", a: "Ending the back-and-forth between QuickBooks and spreadsheets." },
    { q: "What is your differentiation?", a: "Budgets built using your real QuickBooks financial data — no double entry." },
    { q: "How does this make my work more efficient?", a: "Compare actuals against your plan, inside the tool you already use." },
  ];

  const screenAnnotations = [
    { label: "Headline", note: "Benefit-first, customer-focused. 'Plan your finances and stay ahead'" },
    { label: "Description", note: "One sentence — key takeaway, plain language, no jargon" },
    { label: "Benefit bullets", note: "Three scannable benefits. What users can do, not what the feature is" },
    { label: "Primary CTA", note: "'Create budget' — action verb, green for visual hierarchy" },
    { label: "Secondary CTA", note: "'Import budget' — lower-hierarchy link for existing-data users" },
  ];

  const outcomes = [
    { value: "+22%", label: "First-time feature adoption lift" },
    { value: ">13%", label: "FTU conversion rate: hero → create budget" },
    { value: "780K+", label: "Budgets created in QBO (133K company files)" },
    { value: "13%→52%", label: "CES improvement from launch to now" },
  ];

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 200, background: CS.bg, color: CS.text, fontFamily: SN, overflowY: "auto", display: "flex", flexDirection: "column" }}
      role="dialog"
      aria-modal="true"
      aria-label="First-Time User Onboarding Case Study"
    >

      {/* ── STICKY NAV ── */}
      <div style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(250,250,248,0.95)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${CS.border}`, padding: "12px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }} role="navigation" aria-label="Case study navigation">
        <NavBtn onClick={onBack}>← Back to case studies</NavBtn>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <NavBtn onClick={() => window.print()}>↓ Save as PDF</NavBtn>
          <NavBtn onClick={onHome} primary>⌂ Portfolio home</NavBtn>
        </div>
      </div>

      {/* ── COVER ── */}
      <div style={{ background: "linear-gradient(160deg, #0F1A2E 0%, #1A3A6C 60%, #1A4B8C 100%)", color: "#fff", padding: "72px 0 64px", position: "relative", overflow: "hidden", flexShrink: 0 }} role="banner">
        <div style={{ position: "absolute", top: -40, right: -60, width: 360, height: 360, borderRadius: "50%", background: "rgba(123,159,191,0.12)", pointerEvents: "none" }} aria-hidden="true"/>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: SM, fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(180,215,245,0.9)", marginBottom: 18, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 32, height: 1, background: "rgba(123,159,191,0.6)", display: "inline-block" }} aria-hidden="true"/>
            Case Study · Intuit QuickBooks
          </p>
          <h1 style={{ fontFamily: SB, fontSize: "clamp(34px,5vw,56px)", fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.01em", marginBottom: 10, color: "#fff" }}>
            First-Time User<br/>Onboarding<br/>
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "rgba(200,220,240,0.82)" }}>Budgeting in QuickBooks</em>
          </h1>
          <p style={{ fontSize: 14, color: "rgba(220,235,250,0.8)", marginBottom: 44, maxWidth: 540 }}>
            Designing a budgeting FTU experience that motivates small and mid-market business owners to plan with confidence — inside the tool they already use.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {[["Product","QuickBooks Budgeting"],["Role","Content Design Lead"],["Outcome","+22% First-time adoption"],["Method","Research · FTU Framework"]].map(([label, val], i) => (
              <div key={label} style={{ padding: "12px 28px", borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.12)" }}>
                <span style={{ fontFamily: SM, fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(180,215,245,0.85)", display: "block", marginBottom: 4 }}>{label}</span>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.92)", fontWeight: 500 }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "64px 40px 80px", width: "100%" }}>

        {/* SCENARIO & BACKGROUND */}
        <section aria-labelledby="h-background">
          <SectionLabel>01 · Scenario &amp; Background</SectionLabel>
          <h2 id="h-background" style={{ fontFamily: SB, fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, lineHeight: 1.2, color: CS.text, marginBottom: 14 }}>
            What we <em style={{ fontStyle: "italic", fontWeight: 400, color: CS.accent }}>set out to do</em>
          </h2>
          <p style={{ fontSize: 14, color: CS.muted, lineHeight: 1.85, marginBottom: 12 }}>
            Design a first-time-user (FTU) experience that motivates users to try the budgeting capability in QuickBooks — and gives them a clear summary of what they can accomplish. Users can create budgets directly in QuickBooks or import budgets created outside of QuickBooks. This sits under the larger Financial Planning &amp; Analysis (FP&amp;A) umbrella.
          </p>

          {/* Dual goals */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 24 }}>
            <div style={{ background: CS.card, border: `1px solid ${CS.border}`, borderRadius: 12, padding: "22px 20px" }}>
              <p style={{ fontFamily: SM, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: CS.accent, marginBottom: 14 }}>Experience Goals</p>
              {["Convey speed to benefit","Support learnability","Engage and retain","Personalise and build trust"].map(g => (
                <div key={g} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: CS.accent, flexShrink: 0, marginTop: 6 }} aria-hidden="true"/>
                  <p style={{ fontSize: 13, color: CS.muted, margin: 0, lineHeight: 1.7 }}>{g}</p>
                </div>
              ))}
            </div>
            <div style={{ background: CS.card, border: `1px solid ${CS.border}`, borderRadius: 12, padding: "22px 20px" }}>
              <p style={{ fontFamily: SM, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: CS.accent, marginBottom: 14 }}>Communication Goals</p>
              {["Lead with benefit","Reduce cognitive load","Plain and simple language","Say more with less","Be contextual"].map(g => (
                <div key={g} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: CS.accent, flexShrink: 0, marginTop: 6 }} aria-hidden="true"/>
                  <p style={{ fontSize: 13, color: CS.muted, margin: 0, lineHeight: 1.7 }}>{g}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <HR/>

        {/* EMPATHISE */}
        <section aria-labelledby="h-empathise">
          <SectionLabel>02 · Empathise</SectionLabel>
          <h2 id="h-empathise" style={{ fontFamily: SB, fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, lineHeight: 1.2, color: CS.text, marginBottom: 14 }}>
            Customer problem &amp; <em style={{ fontStyle: "italic", fontWeight: 400, color: CS.accent }}>who we design for</em>
          </h2>

          {/* User quote */}
          <blockquote style={{ background: CS.surface, borderLeft: `3px solid ${CS.accent}`, borderRadius: "0 10px 10px 0", padding: "20px 24px", margin: "20px 0 24px" }}>
            <p style={{ fontFamily: SB, fontSize: 17, fontStyle: "italic", color: CS.text, lineHeight: 1.7, margin: 0 }}>
              "I am a small/mid-market business owner trying to create plans to meet my business goals. But I have to do a lot of back-and-forth manual work with QuickBooks and other tools to plan my business — because most of my planning happens outside of QuickBooks. This makes me feel exhausted and stressed."
            </p>
          </blockquote>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div style={{ background: CS.card, border: `1px solid ${CS.border}`, borderRadius: 12, padding: "22px 20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 24 }} aria-hidden="true">👤</span>
                <div>
                  <p style={{ fontFamily: SM, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: CS.accent, margin: 0 }}>Persona 1</p>
                  <strong style={{ fontSize: 14, color: CS.text }}>Business Owner</strong>
                </div>
              </div>
              <p style={{ fontSize: 13, color: CS.muted, lineHeight: 1.75, margin: 0 }}>Single-handedly manages their business with no external help or support. Time-poor, needs clarity fast and minimal cognitive load.</p>
            </div>
            <div style={{ background: CS.card, border: `1px solid ${CS.border}`, borderRadius: 12, padding: "22px 20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 24 }} aria-hidden="true">📊</span>
                <div>
                  <p style={{ fontFamily: SM, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: CS.accent, margin: 0 }}>Persona 2</p>
                  <strong style={{ fontSize: 14, color: CS.text }}>Financial Planner</strong>
                </div>
              </div>
              <p style={{ fontSize: 13, color: CS.muted, lineHeight: 1.75, margin: 0 }}>Supports a business owner in planning operations and growth — with or without an accountant alongside them.</p>
            </div>
          </div>
        </section>

        <HR/>

        {/* DEFINE & PROCESS */}
        <section aria-labelledby="h-define">
          <SectionLabel>03 · Define &amp; Ideate</SectionLabel>
          <h2 id="h-define" style={{ fontFamily: SB, fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, lineHeight: 1.2, color: CS.text, marginBottom: 14 }}>
            Research process &amp; <em style={{ fontStyle: "italic", fontWeight: 400, color: CS.accent }}>content framework</em>
          </h2>
          <p style={{ fontSize: 14, color: CS.muted, lineHeight: 1.85, marginBottom: 20 }}>
            Every content decision was grounded in user evidence. The process moved from research to framework application in four structured phases.
          </p>
          <div style={{ border: `1px solid ${CS.border}`, borderRadius: 12, overflow: "hidden" }}>
            {steps.map((s, i) => (
              <div key={s.num} style={{ display: "flex", borderBottom: i < steps.length - 1 ? `1px solid ${CS.border}` : "none", background: CS.card }}>
                <div style={{ width: 80, flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "18px 0", borderRight: `1px solid ${CS.border}` }}>
                  <span style={{ fontFamily: SM, fontSize: 11, color: CS.accent, fontWeight: 500, letterSpacing: "0.06em" }}>{s.num}</span>
                  <span style={{ fontFamily: SM, fontSize: 9, color: CS.label, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4, textAlign: "center", padding: "0 8px", lineHeight: 1.4 }}>{s.phase}</span>
                </div>
                <div style={{ padding: "18px 22px", flex: 1 }}>
                  <h4 style={{ fontSize: 13, fontWeight: 600, color: CS.text, marginBottom: 6 }}>{s.title}</h4>
                  <p style={{ fontSize: 13, color: CS.muted, margin: 0, lineHeight: 1.8 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <HR/>

        {/* Q&A — User questions */}
        <section aria-labelledby="h-ideate">
          <SectionLabel>04 · Ideate</SectionLabel>
          <h2 id="h-ideate" style={{ fontFamily: SB, fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, lineHeight: 1.2, color: CS.text, marginBottom: 14 }}>
            What users are asking — <em style={{ fontStyle: "italic", fontWeight: 400, color: CS.accent }}>and how we answer</em>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
            {qaItems.map((qa, i) => (
              <div key={i} style={{ background: CS.card, border: `1px solid ${CS.border}`, borderRadius: 10, padding: "16px 20px", display: "grid", gridTemplateColumns: "240px 1fr", gap: 20, alignItems: "start" }}>
                <p style={{ fontFamily: SM, fontSize: 12, fontWeight: 500, color: CS.accent, margin: 0, letterSpacing: "0.02em" }}>{qa.q}</p>
                <p style={{ fontSize: 13, color: CS.muted, margin: 0, lineHeight: 1.7 }}>{qa.a}</p>
              </div>
            ))}
          </div>

          {/* Voice & tone dos and don'ts */}
          <p style={{ fontFamily: SM, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: CS.accent, marginBottom: 16 }}>Voice &amp; Tone Principles</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div style={{ background: "rgba(22,101,52,0.06)", border: "1px solid rgba(22,101,52,0.18)", borderRadius: 12, padding: "20px" }}>
              <p style={{ fontFamily: SM, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: CS.green, marginBottom: 14, fontWeight: 600 }}>✓ Do</p>
              {commGoals.filter(g => g.do).map((g, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
                  <span style={{ color: CS.green, fontWeight: 700, fontSize: 13, flexShrink: 0 }} aria-hidden="true">✓</span>
                  <p style={{ fontSize: 13, color: CS.muted, margin: 0, lineHeight: 1.7 }}>{g.text}</p>
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(185,28,28,0.05)", border: "1px solid rgba(185,28,28,0.15)", borderRadius: 12, padding: "20px" }}>
              <p style={{ fontFamily: SM, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#991B1B", marginBottom: 14, fontWeight: 600 }}>✗ Don't</p>
              {commGoals.filter(g => !g.do).map((g, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
                  <span style={{ color: "#991B1B", fontWeight: 700, fontSize: 13, flexShrink: 0 }} aria-hidden="true">✗</span>
                  <p style={{ fontSize: 13, color: CS.muted, margin: 0, lineHeight: 1.7 }}>{g.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <HR/>

        {/* FINAL SCREEN */}
        <section aria-labelledby="h-screen">
          <SectionLabel>05 · Final FTU Screen</SectionLabel>
          <h2 id="h-screen" style={{ fontFamily: SB, fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, lineHeight: 1.2, color: CS.text, marginBottom: 14 }}>
            The shipped <em style={{ fontStyle: "italic", fontWeight: 400, color: CS.accent }}>first-time-user experience</em>
          </h2>
          <p style={{ fontSize: 14, color: CS.muted, lineHeight: 1.85, marginBottom: 20 }}>
            The final screen that shipped — every element deliberate, every word tested against the user questions and FTU framework.
          </p>

          {/* Screen image */}
          <div style={{ background: CS.card, border: `1px solid ${CS.border}`, borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
            <img
              src="/cs-ftu-screen.jpg"
              alt="The shipped QuickBooks budgeting first-time user onboarding screen showing the headline 'Plan your finances and stay ahead', a one-sentence description, three benefit bullets, a primary Create Budget button and a secondary Import Budget link"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          {/* Screen annotations */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {screenAnnotations.map((a, i) => (
              <div key={i} style={{ background: CS.card, border: `1px solid ${CS.border}`, borderRadius: 10, padding: "12px 18px", display: "grid", gridTemplateColumns: "130px 1fr", gap: 16, alignItems: "center" }}>
                <span style={{ fontFamily: SM, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: CS.accent, fontWeight: 500 }}>{a.label}</span>
                <p style={{ fontSize: 13, color: CS.muted, margin: 0, lineHeight: 1.6 }}>{a.note}</p>
              </div>
            ))}
          </div>
        </section>

        <HR/>

        {/* OUTCOMES */}
        <section aria-labelledby="h-outcomes">
          <SectionLabel>06 · Outcome</SectionLabel>
          <h2 id="h-outcomes" style={{ fontFamily: SB, fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, lineHeight: 1.2, color: CS.text, marginBottom: 14 }}>
            Results that followed <em style={{ fontStyle: "italic", fontWeight: 400, color: CS.accent }}>the FTU redesign</em>
          </h2>
          <p style={{ fontSize: 14, color: CS.muted, lineHeight: 1.85, marginBottom: 24 }}>
            The redesigned onboarding experience delivered measurable uplift across first-time adoption, conversion, and customer effort — validating the benefit-first, research-led content approach.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {outcomes.map(o => <ImpactStat key={o.label} value={o.value} label={o.label}/>)}
          </div>

          {/* NDA note */}
          <div style={{ background: CS.surface, border: `1px solid ${CS.border}`, borderRadius: 10, padding: "16px 20px", marginTop: 24, display: "flex", gap: 12, alignItems: "flex-start" }}>
            <span style={{ fontSize: 16, flexShrink: 0 }} aria-hidden="true">🔒</span>
            <p style={{ fontSize: 13, color: CS.muted, margin: 0, lineHeight: 1.7, fontStyle: "italic" }}>
              Additional work samples and design artefacts for this project are under NDA. To discuss this work in detail, please reach out directly at{" "}
              <a href="mailto:sheenalakshmi@gmail.com" style={{ color: CS.accent }}>sheenalakshmi@gmail.com</a>.
            </p>
          </div>
        </section>

        {/* FOOTER NAV */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 32, borderTop: `1px solid ${CS.border}`, marginTop: 44 }} role="navigation" aria-label="Page navigation">
          <NavBtn onClick={onBack}>← Back to case studies</NavBtn>
          <NavBtn onClick={onHome} primary>⌂ Portfolio home</NavBtn>
        </div>

      </main>
    </div>
  );
}


// ─── Feature Nomenclature Case Study Overlay ────────────────────────────────
function CaseStudyNaming({ onBack, onHome }) {

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const CS = {
    bg:      "#FAFAF8",
    card:    "#FFFFFF",
    surface: "#F0EDE6",
    border:  "rgba(0,0,0,0.09)",
    accent:  "#1A4B8C",
    text:    "#0F172A",
    muted:   "#1F2937",
    label:   "#374151",
    navy:    "#0F1A2E",
    green:   "#166534",
    amber:   "#92400E",
    amberBg: "rgba(146,64,14,0.07)",
  };
  const SB = "'Cormorant Garant', Georgia, serif";
  const SN = "'DM Sans', system-ui, sans-serif";
  const SM = "'DM Mono', monospace";

  const SectionLabel = ({ children }) => (
    <p style={{ fontFamily: SM, fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: CS.accent, marginBottom: 8, display: "flex", alignItems: "center", gap: 12 }} role="heading" aria-level="3">
      {children}
      <span style={{ flex: 1, height: 1, background: CS.border, maxWidth: 48, display: "inline-block" }} aria-hidden="true"/>
    </p>
  );

  const HR = () => <hr style={{ border: "none", borderTop: `1px solid ${CS.border}`, margin: "44px 0" }} aria-hidden="true"/>;

  const NavBtn = ({ onClick, children, primary }) => (
    <button onClick={onClick}
      style={{ display: "flex", alignItems: "center", gap: 7, background: primary ? CS.accent : "transparent", border: primary ? "none" : `1px solid ${CS.border}`, color: primary ? "#fff" : CS.accent, fontFamily: SN, fontSize: 12, fontWeight: 500, letterSpacing: "0.04em", padding: "7px 16px", borderRadius: 8, cursor: "pointer", transition: "all 0.2s" }}
      onMouseEnter={e => { if (primary) e.currentTarget.style.opacity = "0.88"; else { e.currentTarget.style.background = "rgba(26,75,140,0.06)"; e.currentTarget.style.borderColor = CS.accent; }}}
      onMouseLeave={e => { if (primary) e.currentTarget.style.opacity = "1"; else { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = CS.border; }}}
    >{children}</button>
  );

  const ImpactStat = ({ value, label }) => (
    <div style={{ background: CS.card, border: `1px solid ${CS.border}`, borderRadius: 12, padding: "22px 18px", textAlign: "center" }}>
      <span style={{ fontFamily: SB, fontSize: 36, fontWeight: 700, color: CS.accent, lineHeight: 1, display: "block", marginBottom: 8 }} aria-label={value + " — " + label}>{value}</span>
      <span style={{ fontFamily: SM, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: CS.label, lineHeight: 1.5, display: "block" }}>{label}</span>
    </div>
  );

  // ── SVG: Naming conflict diagram ──────────────────────────────────────────
  const ConflictDiagram = () => (
    <figure aria-label="Diagram showing naming conflict between on-premises and cloud versions of SAP Analytics">
      <svg viewBox="0 0 760 200" width="100%" role="img" aria-labelledby="conflict-title" style={{ display: "block" }}>
        <title id="conflict-title">Naming conflict: on-premises uses Publication as verb, cloud uses Publication as noun</title>
        {/* On-prem box */}
        <rect x="20" y="30" width="300" height="140" rx="10" fill="#F0EDE6" stroke="rgba(0,0,0,0.09)" strokeWidth="1"/>
        <text x="170" y="58" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="10" fill="#6B7280" letterSpacing="2">ON-PREMISES</text>
        <text x="170" y="88" textAnchor="middle" fontFamily="Cormorant Garant, Georgia, serif" fontSize="22" fontWeight="700" fill="#0F172A">Publication</text>
        <text x="170" y="112" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="12" fill="#4B5563">used as a</text>
        <rect x="100" y="122" width="140" height="28" rx="6" fill="rgba(146,64,14,0.12)" stroke="rgba(146,64,14,0.25)" strokeWidth="1"/>
        <text x="170" y="141" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="11" fontWeight="600" fill="#92400E">VERB / PROCESS</text>
        <text x="170" y="160" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="11" fill="#6B7280">"Schedule a Publication"</text>

        {/* Arrow + conflict */}
        <line x1="325" y1="100" x2="435" y2="100" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" strokeDasharray="5 3"/>
        <circle cx="380" cy="100" r="24" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1.5"/>
        <text x="380" y="96" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="18" fill="#DC2626">⚡</text>
        <text x="380" y="113" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="8" fill="#DC2626" letterSpacing="1">CONFLICT</text>

        {/* Cloud box */}
        <rect x="440" y="30" width="300" height="140" rx="10" fill="#EFF6FF" stroke="rgba(26,75,140,0.12)" strokeWidth="1"/>
        <text x="590" y="58" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="10" fill="#6B7280" letterSpacing="2">CLOUD</text>
        <text x="590" y="88" textAnchor="middle" fontFamily="Cormorant Garant, Georgia, serif" fontSize="22" fontWeight="700" fill="#0F172A">Publication</text>
        <text x="590" y="112" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="12" fill="#4B5563">used as a</text>
        <rect x="518" y="122" width="144" height="28" rx="6" fill="rgba(26,75,140,0.1)" stroke="rgba(26,75,140,0.22)" strokeWidth="1"/>
        <text x="590" y="141" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="11" fontWeight="600" fill="#1A4B8C">NOUN / OBJECT</text>
        <text x="590" y="160" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="11" fill="#6B7280">"Scheduling a Publication"</text>
      </svg>
      <figcaption style={{ fontFamily: SM, fontSize: 10, letterSpacing: "0.1em", color: CS.label, textAlign: "center", marginTop: 8 }}>The naming conflict — same word, fundamentally different meaning across versions</figcaption>
    </figure>
  );

  // ── SVG: Card sort results ────────────────────────────────────────────────
  const CardSortResults = () => {
    const terms = [
      { name: "Schedule Publication", pct: 87, winner: true },
      { name: "Scheduling",           pct: 54, winner: false },
      { name: "Automatic Sharing",    pct: 41, winner: false },
      { name: "Sharing",              pct: 33, winner: false },
      { name: "Bursting",             pct: 18, winner: false },
    ];
    const maxW = 480;
    return (
      <figure aria-label="Card sort results showing agreement rates for five candidate terms">
        <svg viewBox={`0 0 680 ${terms.length * 52 + 60}`} width="100%" role="img" aria-labelledby="cardsort-title" style={{ display: "block" }}>
          <title id="cardsort-title">Card sort agreement rates: Schedule Publication 87%, Scheduling 54%, Automatic Sharing 41%, Sharing 33%, Bursting 18%</title>
          <text x="20" y="28" fontFamily="DM Mono, monospace" fontSize="10" fill="#6B7280" letterSpacing="2">TERM TESTED</text>
          <text x="680" y="28" textAnchor="end" fontFamily="DM Mono, monospace" fontSize="10" fill="#6B7280" letterSpacing="2">AGREEMENT RATE</text>
          {terms.map((t, i) => {
            const y = 44 + i * 52;
            const barW = (t.pct / 100) * maxW;
            return (
              <g key={t.name} role="listitem">
                <rect x="0" y={y} width="680" height="40" rx="6" fill={t.winner ? "rgba(26,75,140,0.05)" : "rgba(0,0,0,0.02)"} stroke={t.winner ? "rgba(26,75,140,0.15)" : "rgba(0,0,0,0.06)"} strokeWidth="1"/>
                <text x="16" y={y + 25} fontFamily="DM Sans, sans-serif" fontSize="13" fontWeight={t.winner ? "600" : "400"} fill={t.winner ? "#0F172A" : "#374151"}>{t.name}</text>
                {t.winner && (
                  <g>
                    <rect x="208" y={y + 10} width="58" height="18" rx="4" fill={CS.accent}/>
                    <text x="237" y={y + 23} textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="9" fill="#fff" letterSpacing="1">ADOPTED</text>
                  </g>
                )}
                {/* bar track */}
                <rect x="280" y={y + 12} width={maxW} height="16" rx="4" fill="rgba(0,0,0,0.05)"/>
                {/* bar fill */}
                <rect x="280" y={y + 12} width={barW} height="16" rx="4" fill={t.winner ? CS.accent : "rgba(0,0,0,0.18)"}/>
                <text x={280 + barW + 8} y={y + 25} fontFamily="DM Mono, monospace" fontSize="12" fontWeight="600" fill={t.winner ? CS.accent : "#374151"}>{t.pct}%</text>
              </g>
            );
          })}
        </svg>
        <figcaption style={{ fontFamily: SM, fontSize: 10, letterSpacing: "0.1em", color: CS.label, textAlign: "center", marginTop: 8 }}>Card sort results — 'Schedule Publication' achieved the highest agreement rate of all terms tested</figcaption>
      </figure>
    );
  };

  // ── SVG: Competitor analysis ──────────────────────────────────────────────
  const CompetitorChart = () => {
    const competitors = [
      { name: "Tableau", pattern: "Schedule · Distribute · Publish", approach: "Verb-led. 'Schedule' used as an action. Clear separation between scheduling and sharing." },
      { name: "Adobe Analytics", pattern: "Report Delivery · Scheduling", approach: "Noun-first. Emphasises the deliverable (report) over the action. Strong discoverability." },
      { name: "Zoho Analytics", pattern: "Share · Export · Schedule", approach: "Action-first. 'Schedule' used alongside other distribution verbs. Broad but less precise." },
    ];
    return (
      <figure aria-label="Competitive analysis of naming conventions in Tableau, Adobe Analytics, and Zoho Analytics">
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {competitors.map(comp => (
            <div key={comp.name} style={{ background: CS.card, border: `1px solid ${CS.border}`, borderRadius: 10, padding: "16px 20px", display: "grid", gridTemplateColumns: "120px 1fr", gap: 20, alignItems: "start" }}>
              <div>
                <p style={{ fontFamily: SM, fontSize: 11, fontWeight: 600, color: CS.accent, margin: 0, letterSpacing: "0.04em" }}>{comp.name}</p>
                <p style={{ fontFamily: SM, fontSize: 10, color: CS.label, margin: "5px 0 0", letterSpacing: "0.06em" }}>{comp.pattern}</p>
              </div>
              <p style={{ fontSize: 13, color: CS.muted, margin: 0, lineHeight: 1.75 }}>{comp.approach}</p>
            </div>
          ))}
        </div>
        <figcaption style={{ fontFamily: SM, fontSize: 10, letterSpacing: "0.1em", color: CS.label, marginTop: 10 }}>Competitor analysis across three major analytics platforms informed the naming decision</figcaption>
      </figure>
    );
  };

  const personas = [
    { role: "Business Analyst", desc: "Creates and manages scheduled reports for stakeholders. Needs clarity on what the action does and what gets sent." },
    { role: "CFO", desc: "Receives reports, rarely configures them. Needs recognisable terminology, not technical jargon." },
    { role: "Marketing Executive", desc: "Uses scheduled reports for campaign tracking. Expects familiar patterns from other analytics tools." },
    { role: "BI Admin", desc: "Configures scheduling for multiple users across the org. Needs precision, scalability, and heuristic consistency." },
  ];

  const processSteps = [
    { num: "01", phase: "Stakeholder", title: "Understand context & audience differences", body: "Engaged product managers, customer advocates, and product experts to map capabilities, audience differences, and on-premises vs. cloud contexts. Key finding: product teams were anchored to 'Publication' from BusinessObjects legacy — stakeholder bias had to be countered with evidence, not debate." },
    { num: "02", phase: "Research", title: "Competitor analysis — benchmark naming conventions", body: "Studied naming conventions, UX microcopy, and user workflows in Tableau, Adobe Analytics, and Zoho Analytics. Identified that 'Schedule' as a verb was the most recognisable and transferable term across platforms — supporting Nielsen's Recognition over Recall heuristic." },
    { num: "03", phase: "Personas", title: "Recruit and validate key user personas", body: "Identified and recruited research participants across four key personas: Business Analysts, CFOs, Marketing Executives, and BI Admins. Mix of real customers and internal SMEs. Persona validation ensured the naming solution worked across all levels of technical fluency." },
    { num: "04", phase: "Card Sort", title: "Facilitated card sorting — 5 candidate terms", body: "Tested five candidate terms: 'Publication', 'Scheduling', 'Bursting', 'Sharing', 'Automatic Sharing', and 'Schedule Publication'. Card sort conducted with a mix of real users and internal stakeholders. 'Schedule Publication' achieved 87% agreement — highest of all terms. 'Bursting' (an on-premises legacy term) scored only 18% — directly validating the need for a naming change." },
    { num: "05", phase: "Prototypes", title: "Low-fidelity prototype validation in context", body: "Created low-fidelity prototypes for the critical user journey and validated the name in context — not just as an isolated label. Testing the name within the actual UI interaction revealed edge cases in pluralisation and article usage. Deliberately omitted the article 'a' and avoided plural form to ensure the label was grammatically neutral and scalable." },
    { num: "06", phase: "Advocacy", title: "Multi-round stakeholder alignment", body: "Managed multiple rounds of stakeholder discussions with the Terminology Team, Product, and Design — backed by research findings. When the product owner refused to move away from 'Bursting', the 18% card sort score and user articulation data made the case. The Terminology Team independently validated 'Schedule Publication'. 100% stakeholder consensus achieved after multi-round advocacy." },
  ];

  const rationale = [
    { point: "Grammatically neutral", detail: "Omitting 'a' and avoiding the plural makes the label work across all contexts — 'Schedule Publication', not 'Schedule a Publication' or 'Schedule Publications'." },
    { point: "Heuristic compliant", detail: "Verb in present tense ('Schedule') aligns with Nielsen's Recognition over Recall — the action is self-evident, not buried in a noun." },
    { point: "Artifact-agnostic", detail: "Term 'Publication' is retained for any future schedulable artifact — not narrowed to Stories or Reports — making it scalable for platform expansion." },
    { point: "Cross-version clarity", detail: "Users transitioning from on-premises understand 'Publication' as the object; the verb 'Schedule' resolves the ambiguity cleanly." },
    { point: "Competitor-aligned", detail: "Consistent with how 'Schedule' is used as an action across Tableau, Adobe, and Zoho — reducing learning overhead for new users." },
  ];

  const outcomes = [
    { value: "87%", label: "Card sort agreement rate — highest of all terms" },
    { value: "100%", label: "Stakeholder consensus after multi-round advocacy" },
    { value: "5", label: "Candidate terms evaluated in card sort" },
    { value: "4", label: "Persona types represented in research" },
  ];

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 200, background: CS.bg, color: CS.text, fontFamily: SN, overflowY: "auto", display: "flex", flexDirection: "column" }}
      role="dialog"
      aria-modal="true"
      aria-label="Feature Nomenclature Design Case Study"
    >
      {/* ── STICKY NAV ── */}
      <div style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(250,250,248,0.95)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${CS.border}`, padding: "12px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }} role="navigation" aria-label="Case study navigation">
        <NavBtn onClick={onBack}>← Back to case studies</NavBtn>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <NavBtn onClick={() => window.print()}>↓ Save as PDF</NavBtn>
          <NavBtn onClick={onHome} primary>⌂ Portfolio home</NavBtn>
        </div>
      </div>

      {/* ── COVER ── */}
      <div style={{ background: "linear-gradient(160deg, #0F1A2E 0%, #1A3A6C 60%, #1A4B8C 100%)", color: "#fff", padding: "72px 0 64px", position: "relative", overflow: "hidden", flexShrink: 0 }} role="banner">
        <div style={{ position: "absolute", top: -40, right: -60, width: 360, height: 360, borderRadius: "50%", background: "rgba(123,159,191,0.12)", pointerEvents: "none" }} aria-hidden="true"/>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: SM, fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(180,215,245,0.9)", marginBottom: 18, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 32, height: 1, background: "rgba(123,159,191,0.6)", display: "inline-block" }} aria-hidden="true"/>
            Case Study · SAP Analytics Cloud
          </p>
          <h1 style={{ fontFamily: SB, fontSize: "clamp(34px,5vw,56px)", fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.01em", marginBottom: 10, color: "#fff" }}>
            Feature<br/>Nomenclature Design<br/>
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "rgba(200,220,240,0.82)" }}>Naming what users actually understand</em>
          </h1>
          <p style={{ fontSize: 14, color: "rgba(220,235,250,0.8)", marginBottom: 44, maxWidth: 560 }}>
            A research-led naming solution to resolve a fundamental terminology conflict between on-premises and cloud analytics — producing a term that is intuitive, scalable, and heuristic-compliant.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {[["Product","SAP Analytics Cloud"],["Role","Content Design Strategist"],["Outcome","87% card sort agreement"],["Method","User research · Card sorting · Prototypes"]].map(([label, val], i) => (
              <div key={label} style={{ padding: "12px 28px", borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.12)" }}>
                <span style={{ fontFamily: SM, fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(180,215,245,0.85)", display: "block", marginBottom: 4 }}>{label}</span>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.92)", fontWeight: 500 }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "64px 40px 80px", width: "100%" }}>

        {/* BACKGROUND */}
        <section aria-labelledby="h-background">
          <SectionLabel>01 · Background</SectionLabel>
          <h2 id="h-background" style={{ fontFamily: SB, fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, lineHeight: 1.2, color: CS.text, marginBottom: 14 }}>
            The same word, <em style={{ fontStyle: "italic", fontWeight: 400, color: CS.accent }}>two different meanings</em>
          </h2>
          <p style={{ fontSize: 14, color: CS.muted, lineHeight: 1.85, marginBottom: 12 }}>
            SAP Analytics Cloud was evolving from an on-premises-first product to a cloud-native platform. The on-premises version used 'Publication' as a verb or process — something you do. The cloud version treated it as a noun or object — something that exists. Users transitioning between versions faced genuine confusion.
          </p>
          <p style={{ fontSize: 14, color: CS.muted, lineHeight: 1.85, marginBottom: 24 }}>
            The challenge was compounded by strong stakeholder bias toward the legacy term from BusinessObjects. The solution had to be backed by user evidence, not just design opinion — and had to scale across all future schedulable artifacts, not just the current feature.
          </p>
          <ConflictDiagram/>
        </section>

        <HR/>

        {/* PERSONAS */}
        <section aria-labelledby="h-personas">
          <SectionLabel>02 · Who We Design For</SectionLabel>
          <h2 id="h-personas" style={{ fontFamily: SB, fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, lineHeight: 1.2, color: CS.text, marginBottom: 14 }}>
            Four personas, <em style={{ fontStyle: "italic", fontWeight: 400, color: CS.accent }}>one consistent term</em>
          </h2>
          <p style={{ fontSize: 14, color: CS.muted, lineHeight: 1.85, marginBottom: 20 }}>
            The naming solution had to work across a wide spectrum of users — from technically fluent BI Admins to executives who receive reports but rarely configure them. Research participants were a mix of real customers and internal stakeholders.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {personas.map(p => (
              <div key={p.role} style={{ background: CS.card, border: `1px solid ${CS.border}`, borderRadius: 12, padding: "20px" }}>
                <p style={{ fontFamily: SM, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: CS.accent, marginBottom: 6 }}>{p.role}</p>
                <p style={{ fontSize: 13, color: CS.muted, margin: 0, lineHeight: 1.75 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <HR/>

        {/* PROCESS */}
        <section aria-labelledby="h-process">
          <SectionLabel>03 · Process</SectionLabel>
          <h2 id="h-process" style={{ fontFamily: SB, fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, lineHeight: 1.2, color: CS.text, marginBottom: 14 }}>
            Six steps from <em style={{ fontStyle: "italic", fontWeight: 400, color: CS.accent }}>conflict to consensus</em>
          </h2>
          <p style={{ fontSize: 14, color: CS.muted, lineHeight: 1.85, marginBottom: 20 }}>
            Countering stakeholder bias required more than good instincts — it required a rigorous, evidence-based methodology that made the user data undeniable.
          </p>
          <div style={{ border: `1px solid ${CS.border}`, borderRadius: 12, overflow: "hidden" }}>
            {processSteps.map((s, i) => (
              <div key={s.num} style={{ display: "flex", borderBottom: i < processSteps.length - 1 ? `1px solid ${CS.border}` : "none", background: CS.card }}>
                <div style={{ width: 80, flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "18px 0", borderRight: `1px solid ${CS.border}` }}>
                  <span style={{ fontFamily: SM, fontSize: 11, color: CS.accent, fontWeight: 500, letterSpacing: "0.06em" }}>{s.num}</span>
                  <span style={{ fontFamily: SM, fontSize: 9, color: CS.label, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4, textAlign: "center", padding: "0 8px", lineHeight: 1.4 }}>{s.phase}</span>
                </div>
                <div style={{ padding: "18px 22px", flex: 1 }}>
                  <h4 style={{ fontSize: 13, fontWeight: 600, color: CS.text, marginBottom: 6 }}>{s.title}</h4>
                  <p style={{ fontSize: 13, color: CS.muted, margin: 0, lineHeight: 1.8 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <HR/>

        {/* COMPETITOR ANALYSIS */}
        <section aria-labelledby="h-competitors">
          <SectionLabel>04 · Competitive Analysis</SectionLabel>
          <h2 id="h-competitors" style={{ fontFamily: SB, fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, lineHeight: 1.2, color: CS.text, marginBottom: 14 }}>
            How the <em style={{ fontStyle: "italic", fontWeight: 400, color: CS.accent }}>industry names it</em>
          </h2>
          <p style={{ fontSize: 14, color: CS.muted, lineHeight: 1.85, marginBottom: 20 }}>
            Benchmarking naming conventions across Tableau, Adobe Analytics, and Zoho revealed a clear industry pattern — 'Schedule' as a verb is the most recognisable and transferable term, supporting Nielsen's Recognition over Recall heuristic.
          </p>
          <CompetitorChart/>
        </section>

        <HR/>

        {/* CARD SORT RESULTS */}
        <section aria-labelledby="h-cardsort">
          <SectionLabel>05 · Card Sort Results</SectionLabel>
          <h2 id="h-cardsort" style={{ fontFamily: SB, fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, lineHeight: 1.2, color: CS.text, marginBottom: 14 }}>
            What users <em style={{ fontStyle: "italic", fontWeight: 400, color: CS.accent }}>actually chose</em>
          </h2>
          <p style={{ fontSize: 14, color: CS.muted, lineHeight: 1.85, marginBottom: 20 }}>
            Five candidate terms were tested in a card sorting exercise with a mix of real users and internal stakeholders. 'Schedule Publication' achieved the highest agreement rate by a significant margin. 'Bursting' — the legacy on-premises term — scored only 18%, directly validating the case for change.
          </p>
          <CardSortResults/>
        </section>

        <HR/>

        {/* NAMING RATIONALE */}
        <section aria-labelledby="h-rationale">
          <SectionLabel>06 · Naming Rationale</SectionLabel>
          <h2 id="h-rationale" style={{ fontFamily: SB, fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, lineHeight: 1.2, color: CS.text, marginBottom: 14 }}>
            Why <em style={{ fontStyle: "italic", fontWeight: 400, color: CS.accent }}>'Schedule Publication'</em> is the right answer
          </h2>
          <p style={{ fontSize: 14, color: CS.muted, lineHeight: 1.85, marginBottom: 20 }}>
            Every design decision in the label had intentional reasoning — from the omission of 'a' to the choice of present-tense verb.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {rationale.map((r, i) => (
              <div key={i} style={{ background: CS.card, border: `1px solid ${CS.border}`, borderRadius: 10, padding: "16px 20px", display: "grid", gridTemplateColumns: "180px 1fr", gap: 20, alignItems: "start" }}>
                <p style={{ fontFamily: SM, fontSize: 11, fontWeight: 600, color: CS.accent, margin: 0, letterSpacing: "0.04em" }}>{r.point}</p>
                <p style={{ fontSize: 13, color: CS.muted, margin: 0, lineHeight: 1.75 }}>{r.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <HR/>

        {/* OUTCOMES */}
        <section aria-labelledby="h-outcomes">
          <SectionLabel>07 · Outcomes</SectionLabel>
          <h2 id="h-outcomes" style={{ fontFamily: SB, fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, lineHeight: 1.2, color: CS.text, marginBottom: 14 }}>
            From conflict <em style={{ fontStyle: "italic", fontWeight: 400, color: CS.accent }}>to consensus</em>
          </h2>
          <p style={{ fontSize: 14, color: CS.muted, lineHeight: 1.85, marginBottom: 24 }}>
            'Schedule Publication' was adopted as the final UI label and released immediately. The term was independently validated by SAP's Terminology Team and is now future-proofed for all schedulable artifacts on the platform.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
            {outcomes.map(o => <ImpactStat key={o.label} value={o.value} label={o.label}/>)}
          </div>

          {/* Final adopted label callout */}
          <div style={{ background: "rgba(26,75,140,0.06)", border: `1.5px solid ${CS.accent}`, borderRadius: 12, padding: "24px 28px", display: "flex", alignItems: "center", gap: 24 }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: SM, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: CS.accent, marginBottom: 8 }}>Adopted UI Label</p>
              <p style={{ fontFamily: SB, fontSize: 32, fontWeight: 700, color: CS.text, margin: 0, lineHeight: 1 }}>Schedule Publication</p>
              <p style={{ fontSize: 13, color: CS.muted, marginTop: 10, lineHeight: 1.7 }}>Artifact-agnostic · Present-tense verb · Grammatically neutral · Future-proofed for platform expansion</p>
            </div>
            <div style={{ textAlign: "center", flexShrink: 0 }}>
              <span style={{ fontFamily: SB, fontSize: 48, fontWeight: 700, color: CS.accent, display: "block", lineHeight: 1 }}>87%</span>
              <span style={{ fontFamily: SM, fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: CS.label }}>agreement rate</span>
            </div>
          </div>
        </section>

        {/* FOOTER NAV */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 32, borderTop: `1px solid ${CS.border}`, marginTop: 44 }} role="navigation" aria-label="Page navigation">
          <NavBtn onClick={onBack}>← Back to case studies</NavBtn>
          <NavBtn onClick={onHome} primary>⌂ Portfolio home</NavBtn>
        </div>

      </main>
    </div>
  );
}


// ─── Content UX & IA Case Study Overlay ─────────────────────────────────────
function CaseStudyIA({ onBack, onHome }) {

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const CS = {
    bg:"#FAFAF8",card:"#FFFFFF",surface:"#F0EDE6",border:"rgba(0,0,0,0.09)",
    accent:"#1A4B8C",text:"#0F172A",muted:"#1F2937",label:"#374151",navy:"#0F1A2E",
  };
  const SB = "'Cormorant Garant', Georgia, serif";
  const SN = "'DM Sans', system-ui, sans-serif";
  const SM = "'DM Mono', monospace";

  const SectionLabel = ({ children }) => (
    <p style={{ fontFamily:SM, fontSize:10, letterSpacing:"0.28em", textTransform:"uppercase", color:CS.accent, marginBottom:8, display:"flex", alignItems:"center", gap:12 }} role="heading" aria-level="3">
      {children}<span style={{ flex:1, height:1, background:CS.border, maxWidth:48, display:"inline-block" }} aria-hidden="true"/>
    </p>
  );
  const HR = () => <hr style={{ border:"none", borderTop:`1px solid ${CS.border}`, margin:"44px 0" }} aria-hidden="true"/>;
  const NavBtn = ({ onClick, children, primary }) => (
    <button onClick={onClick}
      style={{ display:"flex", alignItems:"center", gap:7, background:primary?CS.accent:"transparent", border:primary?"none":`1px solid ${CS.border}`, color:primary?"#fff":CS.accent, fontFamily:SN, fontSize:12, fontWeight:500, letterSpacing:"0.04em", padding:"7px 16px", borderRadius:8, cursor:"pointer", transition:"all 0.2s" }}
      onMouseEnter={e=>{ if(primary) e.currentTarget.style.opacity="0.88"; else { e.currentTarget.style.background="rgba(26,75,140,0.06)"; e.currentTarget.style.borderColor=CS.accent; }}}
      onMouseLeave={e=>{ if(primary) e.currentTarget.style.opacity="1"; else { e.currentTarget.style.background="transparent"; e.currentTarget.style.borderColor=CS.border; }}}
    >{children}</button>
  );
  const ImpactStat = ({ value, label }) => (
    <div style={{ background:CS.card, border:`1px solid ${CS.border}`, borderRadius:12, padding:"22px 18px", textAlign:"center" }}>
      <span style={{ fontFamily:SB, fontSize:34, fontWeight:700, color:CS.accent, lineHeight:1, display:"block", marginBottom:8 }} aria-label={value+" — "+label}>{value}</span>
      <span style={{ fontFamily:SM, fontSize:10, letterSpacing:"0.12em", textTransform:"uppercase", color:CS.label, lineHeight:1.5, display:"block" }}>{label}</span>
    </div>
  );

  // ── SVG: IA Tree ─────────────────────────────────────────────────────────
  const IATree = () => (
    <figure aria-label="Information architecture hierarchy showing SAP Help Portal branching into Banking, Insurance, and Oil and Gas, each with sub-categories">
      <svg viewBox="0 0 760 260" width="100%" role="img" aria-labelledby="ia-tree-title" style={{ display:"block" }}>
        <title id="ia-tree-title">Information Architecture: SAP Help Portal root with Banking, Insurance, Oil and Gas industry branches each containing Finance, Operations, and Expense Management leaves</title>
        {/* Root */}
        <rect x="255" y="10" width="250" height="44" rx="8" fill="rgba(26,75,140,0.12)" stroke={CS.accent} strokeWidth="1.5"/>
        <text x="380" y="28" textAnchor="middle" fontFamily="DM Mono,monospace" fontSize="10" fill="#6B7280" letterSpacing="2">UNIFIED HELP PORTAL</text>
        <text x="380" y="46" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="13" fontWeight="600" fill="#0F172A">SAP Analytics Cloud</text>
        {/* Trunk lines */}
        {[120,380,640].map(x => <line key={x} x1="380" y1="54" x2={x} y2="108" stroke="rgba(26,75,140,0.25)" strokeWidth="1.5" strokeDasharray="4 3"/>)}
        {/* L2 nodes */}
        {[
          [20,108,220,"Banking"],
          [270,108,220,"Insurance"],
          [520,108,220,"Oil & Gas"],
        ].map(([x,y,w,label]) => (
          <g key={label}>
            <rect x={x} y={y} width={w} height="40" rx="7" fill="rgba(26,75,140,0.08)" stroke="rgba(26,75,140,0.2)" strokeWidth="1"/>
            <text x={x+w/2} y={y+25} textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="13" fontWeight="600" fill="#0F172A">{label}</text>
          </g>
        ))}
        {/* L3 lines + nodes */}
        {[
          // Banking children
          [130,148,40,198,"Finance"],[130,148,130,198,"Operations"],[130,148,220,198,"Expense Mgmt"],
          // Insurance children
          [380,148,290,198,"Finance"],[380,148,380,198,"Operations"],[380,148,470,198,"Risk Mgmt"],
          // O&G children
          [630,148,540,198,"Finance"],[630,148,630,198,"Operations"],[630,148,720,198,"HSE"],
        ].map(([x1,y1,x2,y2,label],i) => (
          <g key={i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(0,0,0,0.1)" strokeWidth="1" strokeDasharray="3 2"/>
            <rect x={x2-40} y={y2} width="80" height="28" rx="5" fill={CS.card} stroke={CS.border} strokeWidth="0.8"/>
            <text x={x2} y={y2+18} textAnchor="middle" fontFamily="DM Mono,monospace" fontSize="9" fill={CS.label} letterSpacing="0.5">{label}</text>
          </g>
        ))}
        {/* Count badge */}
        <rect x="306" y="234" width="148" height="22" rx="5" fill="rgba(26,75,140,0.08)" stroke="rgba(26,75,140,0.15)" strokeWidth="1"/>
        <text x="380" y="249" textAnchor="middle" fontFamily="DM Mono,monospace" fontSize="10" fill={CS.accent} letterSpacing="1">~750 TOPICS CENTRALISED</text>
      </svg>
      <figcaption style={{ fontFamily:SM, fontSize:10, letterSpacing:"0.1em", color:CS.label, textAlign:"center", marginTop:8 }}>Unified IA across three industries — single source of truth replacing scattered, outdated PDFs</figcaption>
    </figure>
  );

  // ── SVG: Before/After ────────────────────────────────────────────────────
  const BeforeAfter = () => (
    <figure aria-label="Before and after comparison: scattered PDFs versus unified XML portal">
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
        <div style={{ background:"rgba(185,28,28,0.04)", border:"1px solid rgba(185,28,28,0.14)", borderRadius:12, padding:"22px 20px" }}>
          <p style={{ fontFamily:SM, fontSize:10, letterSpacing:"0.2em", textTransform:"uppercase", color:"#991B1B", marginBottom:16, fontWeight:600 }}>Before</p>
          {["~750 topics scattered across multiple PDF documents","Different owners, no consistent taxonomy","Customers searching across disconnected sources","Maintenance required updating each document separately","No persona-led design or discoverability strategy","Critical analytics content effectively invisible to new users"].map((t,i) => (
            <div key={i} style={{ display:"flex", gap:10, alignItems:"flex-start", marginBottom:10 }}>
              <span style={{ color:"#DC2626", fontWeight:700, flexShrink:0, fontSize:13 }} aria-hidden="true">✗</span>
              <p style={{ fontSize:13, color:CS.muted, margin:0, lineHeight:1.7 }}>{t}</p>
            </div>
          ))}
        </div>
        <div style={{ background:"rgba(22,101,52,0.05)", border:"1px solid rgba(22,101,52,0.16)", borderRadius:12, padding:"22px 20px" }}>
          <p style={{ fontFamily:SM, fontSize:10, letterSpacing:"0.2em", textTransform:"uppercase", color:"#166534", marginBottom:16, fontWeight:600 }}>After</p>
          {["Single unified XML help portal — one source of truth","Persona-led IA across Finance, Operations, Expense Mgmt","Industry-specific navigation: Banking, Insurance, O&G","Content taxonomy and templates for ongoing scalability","Information survey validated gaps and persona assumptions","Significantly reduced maintenance overhead"].map((t,i) => (
            <div key={i} style={{ display:"flex", gap:10, alignItems:"flex-start", marginBottom:10 }}>
              <span style={{ color:"#166534", fontWeight:700, flexShrink:0, fontSize:13 }} aria-hidden="true">✓</span>
              <p style={{ fontSize:13, color:CS.muted, margin:0, lineHeight:1.7 }}>{t}</p>
            </div>
          ))}
        </div>
      </div>
      <figcaption style={{ fontFamily:SM, fontSize:10, letterSpacing:"0.1em", color:CS.label, marginTop:10 }}>The transformation from fragmented PDFs to a unified, persona-led help portal</figcaption>
    </figure>
  );

  const industries = [
    { name:"Banking", lobs:["Finance","Operations","Expense Management"], topics:"~250 topics", desc:"Balance sheet reporting, financial planning, expense tracking for mid-to-large banking institutions." },
    { name:"Insurance", lobs:["Finance","Operations","Risk Management"], topics:"~280 topics", desc:"Actuarial analysis, policy management, operational reporting across general and life insurance." },
    { name:"Oil & Gas", lobs:["Finance","Operations","HSE"], topics:"~220 topics", desc:"Project cost management, operational analytics, health safety and environment reporting." },
  ];

  const processSteps = [
    { num:"01", phase:"Audit", title:"Detailed audit of ~750 topics across multiple sources", body:"Catalogued, categorised, and assessed all relevant business content across multiple document sources. Tagged each topic by industry, line of business, content type, and audience — building the foundation for persona-led IA." },
    { num:"02", phase:"Personas", title:"Defined and refined key personas across three industries", body:"Identified core personas spanning Banking, Insurance, and Oil & Gas — across Finance, Operations, and Expense Management lines of business. Personas were grounded in real customer use cases and SAP's customer advocate network." },
    { num:"03", phase:"Survey", title:"Information survey — validate gaps and surface needs", body:"Created and administered an information survey to identify content gaps, validate persona assumptions, and surface unmet user needs. Survey responses directly shaped taxonomy decisions and content prioritisation." },
    { num:"04", phase:"Design", title:"Comprehensive information architecture design", body:"Developed a full IA — centralising and categorising content for intuitive navigation across all three industries. Established content taxonomy, topic naming conventions, and navigation hierarchy. Designed for discoverability across both new and experienced users." },
    { num:"05", phase:"Migration", title:"Migrated all content to unified XML help portal", body:"Migrated all business content into SAP's unified XML-based authoring environment within the main product help portal. Set up content templates and taxonomy standards to ensure ongoing maintenance was fast, consistent, and low-overhead." },
  ];

  const outcomes = [
    { value:"~750", label:"Topics centralised across 3 industries" },
    { value:"3", label:"Industries: Banking, Insurance, O&G" },
    { value:"9", label:"Lines of business covered" },
    { value:"1", label:"Unified source of truth" },
  ];

  return (
    <div style={{ position:"fixed", inset:0, zIndex:200, background:CS.bg, color:CS.text, fontFamily:SN, overflowY:"auto", display:"flex", flexDirection:"column" }}
      role="dialog" aria-modal="true" aria-label="Content UX and Information Architecture Case Study">
      {/* NAV */}
      <div style={{ position:"sticky", top:0, zIndex:10, background:"rgba(250,250,248,0.95)", backdropFilter:"blur(12px)", borderBottom:`1px solid ${CS.border}`, padding:"12px 40px", display:"flex", justifyContent:"space-between", alignItems:"center", flexShrink:0 }} role="navigation" aria-label="Case study navigation">
        <NavBtn onClick={onBack}>← Back to case studies</NavBtn>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <NavBtn onClick={() => window.print()}>↓ Save as PDF</NavBtn>
          <NavBtn onClick={onHome} primary>⌂ Portfolio home</NavBtn>
        </div>
      </div>

      {/* COVER */}
      <div style={{ background:"linear-gradient(160deg,#0F1A2E 0%,#1A3A6C 60%,#1A4B8C 100%)", color:"#fff", padding:"72px 0 64px", position:"relative", overflow:"hidden", flexShrink:0 }} role="banner">
        <div style={{ position:"absolute", top:-40, right:-60, width:360, height:360, borderRadius:"50%", background:"rgba(123,159,191,0.12)", pointerEvents:"none" }} aria-hidden="true"/>
        <div style={{ maxWidth:820, margin:"0 auto", padding:"0 40px", position:"relative", zIndex:1 }}>
          <p style={{ fontFamily:SM, fontSize:11, letterSpacing:"0.24em", textTransform:"uppercase", color:"rgba(180,215,245,0.9)", marginBottom:18, display:"flex", alignItems:"center", gap:12 }}>
            <span style={{ width:32, height:1, background:"rgba(123,159,191,0.6)", display:"inline-block" }} aria-hidden="true"/>
            Case Study · SAP Analytics Cloud
          </p>
          <h1 style={{ fontFamily:SB, fontSize:"clamp(34px,5vw,56px)", fontWeight:600, lineHeight:1.08, letterSpacing:"-0.01em", marginBottom:10, color:"#fff" }}>
            Content UX &amp;<br/>Information Architecture<br/>
            <em style={{ fontStyle:"italic", fontWeight:400, color:"rgba(200,220,240,0.82)" }}>From scattered PDFs to a unified help portal</em>
          </h1>
          <p style={{ fontSize:14, color:"rgba(220,235,250,0.8)", marginBottom:44, maxWidth:560 }}>Centralising ~750 scattered topics across Banking, Insurance, and Oil &amp; Gas into a unified, persona-led information architecture — reducing maintenance overhead and improving customer onboarding across enterprise analytics.</p>
          <div style={{ display:"flex", flexWrap:"wrap" }}>
            {[["Product","SAP Analytics Cloud"],["Role","Content Design Strategist"],["Outcome","~750 topics centralised"],["Method","Content audit · Persona design · IA · Migration"]].map(([label,val],i) => (
              <div key={label} style={{ padding:"12px 28px", borderLeft:i===0?"none":"1px solid rgba(255,255,255,0.12)" }}>
                <span style={{ fontFamily:SM, fontSize:9, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(180,215,245,0.85)", display:"block", marginBottom:4 }}>{label}</span>
                <span style={{ fontSize:13, color:"rgba(255,255,255,0.92)", fontWeight:500 }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BODY */}
      <main style={{ maxWidth:820, margin:"0 auto", padding:"64px 40px 80px", width:"100%" }}>

        <section aria-labelledby="h-bg05">
          <SectionLabel>01 · Background &amp; Challenge</SectionLabel>
          <h2 id="h-bg05" style={{ fontFamily:SB, fontSize:"clamp(24px,3.5vw,36px)", fontWeight:600, lineHeight:1.2, color:CS.text, marginBottom:14 }}>
            Critical analytics content, <em style={{ fontStyle:"italic", fontWeight:400, color:CS.accent }}>effectively invisible</em>
          </h2>
          <p style={{ fontSize:14, color:CS.muted, lineHeight:1.85, marginBottom:12 }}>SAP Analytics Cloud offered industry-specific analytics capabilities for Banking, Insurance, and Oil &amp; Gas customers — but the help content supporting these capabilities was scattered across large, outdated PDF documents maintained by different owners with no consistent structure.</p>
          <p style={{ fontSize:14, color:CS.muted, lineHeight:1.85, marginBottom:24 }}>Customers onboarding to these enterprise analytics offerings faced friction at every stage. Updating a single topic required touching multiple documents. There was no unified taxonomy, no persona-led design, and no discoverability strategy.</p>
          <BeforeAfter/>
        </section>

        <HR/>

        <section aria-labelledby="h-industries">
          <SectionLabel>02 · Industries &amp; Lines of Business</SectionLabel>
          <h2 id="h-industries" style={{ fontFamily:SB, fontSize:"clamp(24px,3.5vw,36px)", fontWeight:600, lineHeight:1.2, color:CS.text, marginBottom:14 }}>
            Three industries, <em style={{ fontStyle:"italic", fontWeight:400, color:CS.accent }}>nine lines of business</em>
          </h2>
          <p style={{ fontSize:14, color:CS.muted, lineHeight:1.85, marginBottom:20 }}>The IA had to serve genuinely different users across industries — a Finance analyst in Banking has fundamentally different needs from an HSE manager in Oil &amp; Gas. Each industry required its own persona research before IA design could begin.</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14 }}>
            {industries.map(ind => (
              <div key={ind.name} style={{ background:CS.card, border:`1px solid ${CS.border}`, borderRadius:12, padding:"22px 18px", position:"relative", overflow:"hidden" }}>
                <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:CS.accent }}/>
                <p style={{ fontFamily:SB, fontSize:22, fontWeight:700, color:CS.text, marginBottom:6 }}>{ind.name}</p>
                <p style={{ fontFamily:SM, fontSize:9, letterSpacing:"0.12em", textTransform:"uppercase", color:CS.accent, marginBottom:10 }}>{ind.topics}</p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:5, marginBottom:12 }}>
                  {ind.lobs.map(l => <span key={l} style={{ fontFamily:SM, fontSize:9, letterSpacing:"0.08em", textTransform:"uppercase", border:`1px solid ${CS.border}`, padding:"3px 8px", borderRadius:4, color:CS.label }}>{l}</span>)}
                </div>
                <p style={{ fontSize:12, color:CS.muted, margin:0, lineHeight:1.75 }}>{ind.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <HR/>

        <section aria-labelledby="h-process05">
          <SectionLabel>03 · Process</SectionLabel>
          <h2 id="h-process05" style={{ fontFamily:SB, fontSize:"clamp(24px,3.5vw,36px)", fontWeight:600, lineHeight:1.2, color:CS.text, marginBottom:14 }}>
            Five steps from <em style={{ fontStyle:"italic", fontWeight:400, color:CS.accent }}>audit to migration</em>
          </h2>
          <div style={{ border:`1px solid ${CS.border}`, borderRadius:12, overflow:"hidden" }}>
            {processSteps.map((s,i) => (
              <div key={s.num} style={{ display:"flex", borderBottom:i<processSteps.length-1?`1px solid ${CS.border}`:"none", background:CS.card }}>
                <div style={{ width:80, flexShrink:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"flex-start", padding:"18px 0", borderRight:`1px solid ${CS.border}` }}>
                  <span style={{ fontFamily:SM, fontSize:11, color:CS.accent, fontWeight:500, letterSpacing:"0.06em" }}>{s.num}</span>
                  <span style={{ fontFamily:SM, fontSize:9, color:CS.label, letterSpacing:"0.08em", textTransform:"uppercase", marginTop:4, textAlign:"center", padding:"0 8px", lineHeight:1.4 }}>{s.phase}</span>
                </div>
                <div style={{ padding:"18px 22px", flex:1 }}>
                  <h4 style={{ fontSize:13, fontWeight:600, color:CS.text, marginBottom:6 }}>{s.title}</h4>
                  <p style={{ fontSize:13, color:CS.muted, margin:0, lineHeight:1.8 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <HR/>

        <section aria-labelledby="h-ia-tree">
          <SectionLabel>04 · Information Architecture</SectionLabel>
          <h2 id="h-ia-tree" style={{ fontFamily:SB, fontSize:"clamp(24px,3.5vw,36px)", fontWeight:600, lineHeight:1.2, color:CS.text, marginBottom:14 }}>
            The IA — <em style={{ fontStyle:"italic", fontWeight:400, color:CS.accent }}>designed for discoverability</em>
          </h2>
          <p style={{ fontSize:14, color:CS.muted, lineHeight:1.85, marginBottom:20 }}>A three-level hierarchy placing the unified SAP Help Portal at root, with industry branches and line-of-business leaves — built on validated personas and information survey findings.</p>
          <IATree/>
        </section>

        <HR/>

        <section aria-labelledby="h-artifact05">
          <SectionLabel>05 · Proof &amp; Artefacts</SectionLabel>
          <h2 id="h-artifact05" style={{ fontFamily:SB, fontSize:"clamp(24px,3.5vw,36px)", fontWeight:600, lineHeight:1.2, color:CS.text, marginBottom:14 }}>
            Deliverables &amp; <em style={{ fontStyle:"italic", fontWeight:400, color:CS.accent }}>live artefact</em>
          </h2>
          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            {[
              { icon:"IA", label:"Information Architecture Document", desc:"Full IA design and content taxonomy — industry hierarchy, LOB breakdown, content templates, and taxonomy standards. Includes persona mapping and navigation logic.", href:"https://drive.google.com/file/d/1pN2cLA5hFaMk6VCmk_7mJDDByoFFK1io/view?usp=drive_link" },
            ].map(a => (
              <div key={a.label} onClick={() => window.open(a.href,"_blank")} style={{ background:CS.card, border:`1px solid ${CS.border}`, borderRadius:10, padding:"16px 20px", display:"flex", alignItems:"center", gap:16, cursor:"pointer", transition:"all 0.2s" }}
                onMouseEnter={e=>{ e.currentTarget.style.borderColor=CS.accent; e.currentTarget.style.background="rgba(26,75,140,0.03)"; }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor=CS.border; e.currentTarget.style.background=CS.card; }}>
                <div style={{ width:40, height:40, borderRadius:8, background:"rgba(26,75,140,0.08)", border:`1px solid rgba(26,75,140,0.15)`, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:SM, fontSize:11, fontWeight:600, color:CS.accent, flexShrink:0 }}>{a.icon}</div>
                <div style={{ flex:1 }}>
                  <strong style={{ display:"block", fontSize:13, fontWeight:600, color:CS.text, marginBottom:3 }}>{a.label}</strong>
                  <p style={{ fontSize:12, color:CS.muted, margin:0, lineHeight:1.6 }}>{a.desc}</p>
                </div>
                <span style={{ fontSize:16, color:CS.accent, flexShrink:0 }}>↗</span>
              </div>
            ))}
          </div>
        </section>

        <HR/>

        <section aria-labelledby="h-outcomes05">
          <SectionLabel>06 · Outcomes</SectionLabel>
          <h2 id="h-outcomes05" style={{ fontFamily:SB, fontSize:"clamp(24px,3.5vw,36px)", fontWeight:600, lineHeight:1.2, color:CS.text, marginBottom:14 }}>
            A scalable foundation for <em style={{ fontStyle:"italic", fontWeight:400, color:CS.accent }}>enterprise analytics content</em>
          </h2>
          <p style={{ fontSize:14, color:CS.muted, lineHeight:1.85, marginBottom:24 }}>The migration delivered a single, maintainable source of truth for all industry analytics content — with improved customer onboarding across Banking, Insurance, and Oil &amp; Gas, and a scalable structure ready for future industry expansion.</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12 }}>
            {outcomes.map(o => <ImpactStat key={o.label} value={o.value} label={o.label}/>)}
          </div>
        </section>

        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:32, borderTop:`1px solid ${CS.border}`, marginTop:44 }} role="navigation" aria-label="Page navigation">
          <NavBtn onClick={onBack}>← Back to case studies</NavBtn>
          <NavBtn onClick={onHome} primary>⌂ Portfolio home</NavBtn>
        </div>
      </main>
    </div>
  );
}

// ─── Leadership & Thought Leadership Case Study Overlay ─────────────────────
function CaseStudyLeadership({ onBack, onHome }) {

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const CS = {
    bg:"#FAFAF8",card:"#FFFFFF",surface:"#F0EDE6",border:"rgba(0,0,0,0.09)",
    accent:"#1A4B8C",text:"#0F172A",muted:"#1F2937",label:"#374151",navy:"#0F1A2E",
  };
  const SB = "'Cormorant Garant', Georgia, serif";
  const SN = "'DM Sans', system-ui, sans-serif";
  const SM = "'DM Mono', monospace";

  const SectionLabel = ({ children }) => (
    <p style={{ fontFamily:SM, fontSize:10, letterSpacing:"0.28em", textTransform:"uppercase", color:CS.accent, marginBottom:8, display:"flex", alignItems:"center", gap:12 }} role="heading" aria-level="3">
      {children}<span style={{ flex:1, height:1, background:CS.border, maxWidth:48, display:"inline-block" }} aria-hidden="true"/>
    </p>
  );
  const HR = () => <hr style={{ border:"none", borderTop:`1px solid ${CS.border}`, margin:"44px 0" }} aria-hidden="true"/>;
  const NavBtn = ({ onClick, children, primary }) => (
    <button onClick={onClick}
      style={{ display:"flex", alignItems:"center", gap:7, background:primary?CS.accent:"transparent", border:primary?"none":`1px solid ${CS.border}`, color:primary?"#fff":CS.accent, fontFamily:SN, fontSize:12, fontWeight:500, letterSpacing:"0.04em", padding:"7px 16px", borderRadius:8, cursor:"pointer", transition:"all 0.2s" }}
      onMouseEnter={e=>{ if(primary) e.currentTarget.style.opacity="0.88"; else { e.currentTarget.style.background="rgba(26,75,140,0.06)"; e.currentTarget.style.borderColor=CS.accent; }}}
      onMouseLeave={e=>{ if(primary) e.currentTarget.style.opacity="1"; else { e.currentTarget.style.background="transparent"; e.currentTarget.style.borderColor=CS.border; }}}
    >{children}</button>
  );
  const ImpactStat = ({ value, label }) => (
    <div style={{ background:CS.card, border:`1px solid ${CS.border}`, borderRadius:12, padding:"20px 16px", textAlign:"center" }}>
      <span style={{ fontFamily:SB, fontSize:32, fontWeight:700, color:CS.accent, lineHeight:1, display:"block", marginBottom:8 }} aria-label={value+" — "+label}>{value}</span>
      <span style={{ fontFamily:SM, fontSize:10, letterSpacing:"0.12em", textTransform:"uppercase", color:CS.label, lineHeight:1.5, display:"block" }}>{label}</span>
    </div>
  );


  const principles = [
    { title:"Foster excellence", body:"Through structured coaching, peer review, and creating opportunities for the team to thrive and present their work publicly." },
    { title:"Never stop learning", body:"Staying current in AI, content design, and evolving user needs. Learning is a continuous habit, not a periodic exercise." },
    { title:"Think systems", body:"Building frameworks and content systems that don't depend on any single person — scalable quality that outlasts the individual." },
    { title:"Deep customer empathy", body:"Every team and product decision grounded in real user research. No assumptions. No fabrication." },
    { title:"Stakeholder management", body:"Building subject matter expertise and user advocacy, thereby earning trust rather than demanding it." },
    { title:"Equip, empower, be accountable", body:"Setting clear expectations, providing resources, then stepping back. Accountability without micromanagement." },
  ];

  const teamWork = [
    { icon:"🎯", title:"Skills gap analysis", body:"Ran a structured skills gap analysis across the team, identified individual growth areas, and created personalised development plans with resources and timelines." },
    { icon:"📝", title:"Peer review programme", body:"Led 24+ peer review sessions at Intuit — FY23 to FY24 — setting rigorous content hygiene standards and building a culture of craft within the team." },
    { icon:"🤝", title:"Coaching office hours", body:"Introduced twice-weekly content coaching office hours for product designers — raising the bar on content quality across teams beyond my direct remit." },
    { icon:"📊", title:"Benchmarking & voice standards", body:"Completed a benchmarking study to assess team expertise on Intuit's Voice and Tone standard — used findings to focus upskilling where it mattered most." },
    { icon:"🤖", title:"AI tools training", body:"Conducted Writer.AI training for product designers across QBDT and FP&A — embedding AI-assisted content design into the team's daily workflow." },
    { icon:"♿", title:"Accessibility standards", body:"Collaborated with accessibility leaders to enforce ARIA labels, Alt+Text, and keyboard accessibility as developer checklist items across the organisation." },
  ];

  const artifacts = [
    { icon:"▶", label:"Intuit NextGen Network Interview", desc:"Featured podcast interview on content design career growth, leadership philosophy, and the transition from technical writing to UX content design.", href:"https://www.youtube.com/watch?v=SQcGF5OinFs", tag:"YouTube" },
    { icon:"▶", label:"ADPList BeMore Conference", desc:"Co-hosted panel with 200+ content designers, UX designers, and researchers globally. Topics: content design career growth, mentorship, and building design culture.", href:"https://drive.google.com/file/d/1td8NBDKhQpO3TRvM87p-mxb4nAs28i4L/view", tag:"Recording" },
    { icon:"▶", label:"W-Summit Career Talk", desc:"Career guidance session on transitioning into content design, building a portfolio, and navigating the UX industry as a woman in tech.", href:"https://www.youtube.com/watch?v=i1EgVExCpj0", tag:"YouTube" },
    { icon:"PDF", label:"Prompt Design — UXIndia Global Conference 2023", desc:"Keynote workshop slides from UXIndia Q4 2023 — content design and prompt design for AI products, delivered to ~120 participants globally.", href:"https://drive.google.com/file/d/13jmLxMgV4uvIEV4X7yiJrx_PUXJz4eQJ/view?usp=drive_link", tag:"Slides" },
    { icon:"PDF", label:"Accessibility & Content Design Guidelines", desc:"ARIA labels, Alt+Text standards, and keyboard accessibility guidelines — developed collaboratively with accessibility leaders and adopted as developer checklist items.", href:"https://drive.google.com/file/d/1Ta3WAxtTtBClyt-8gcHAjrgS0Gi34lfF/view?usp=drive_link", tag:"Document" },
  ];

  const awards = [
    { award:"Intuit India Superstar Award", year:"2023", detail:"Customer Obsession category — the highest company recognition for individual contributors. Recognises extraordinary impact on customer experience." },
    { award:"Trajectory Changing Performance", year:"Intuit", detail:"Highest merit rating at Intuit — reserved for exceptional individual contributors who demonstrably move the business." },
    { award:"Women in Leadership", year:"Intuit", detail:"Selected for Intuit's 6-month intensive leadership coaching programme for exceptional individual contributors." },
    { award:"Top Mentor on ADPList", year:"Twice in a row", detail:"Recognised by the ADPList community as a top mentor in content design and UX — two consecutive recognition cycles." },
    { award:"Top Talent", year:"SAP Labs", detail:"Recognised by SAP leadership for exceptional contribution to content design quality and team culture." },
    { award:"Featured — NextGen Podcast", year:"Intuit", detail:"Selected by Intuit to represent the company's next generation of design leaders in a featured podcast interview." },
  ];

  const outcomes = [
    { value:"4.8/5", label:"Workshop NPS — D4 Design" },
    { value:"5/5", label:"Workshop NPS — Tech communicators" },
    { value:"120+", label:"UXIndia keynote participants" },
    { value:"200+", label:"ADPList BeMore participants" },
  ];

  return (
    <div style={{ position:"fixed", inset:0, zIndex:200, background:CS.bg, color:CS.text, fontFamily:SN, overflowY:"auto", display:"flex", flexDirection:"column" }}
      role="dialog" aria-modal="true" aria-label="Leadership and Thought Leadership Case Study">
      {/* NAV */}
      <div style={{ position:"sticky", top:0, zIndex:10, background:"rgba(250,250,248,0.95)", backdropFilter:"blur(12px)", borderBottom:`1px solid ${CS.border}`, padding:"12px 40px", display:"flex", justifyContent:"space-between", alignItems:"center", flexShrink:0 }} role="navigation" aria-label="Case study navigation">
        <NavBtn onClick={onBack}>← Back to case studies</NavBtn>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <NavBtn onClick={() => window.print()}>↓ Save as PDF</NavBtn>
          <NavBtn onClick={onHome} primary>⌂ Portfolio home</NavBtn>
        </div>
      </div>

      {/* COVER */}
      <div style={{ background:"linear-gradient(160deg,#0F1A2E 0%,#1A3A6C 60%,#1A4B8C 100%)", color:"#fff", padding:"72px 0 64px", position:"relative", overflow:"hidden", flexShrink:0 }} role="banner">
        <div style={{ position:"absolute", top:-40, right:-60, width:360, height:360, borderRadius:"50%", background:"rgba(123,159,191,0.12)", pointerEvents:"none" }} aria-hidden="true"/>
        <div style={{ maxWidth:820, margin:"0 auto", padding:"0 40px", position:"relative", zIndex:1 }}>
          <p style={{ fontFamily:SM, fontSize:11, letterSpacing:"0.24em", textTransform:"uppercase", color:"rgba(180,215,245,0.9)", marginBottom:18, display:"flex", alignItems:"center", gap:12 }}>
            <span style={{ width:32, height:1, background:"rgba(123,159,191,0.6)", display:"inline-block" }} aria-hidden="true"/>
            Case Study · SAP Labs &amp; Intuit
          </p>
          <h1 style={{ fontFamily:SB, fontSize:"clamp(34px,5vw,56px)", fontWeight:600, lineHeight:1.08, letterSpacing:"-0.01em", marginBottom:10, color:"#fff" }}>
            Leadership &amp;<br/>Thought Leadership<br/>
            <em style={{ fontStyle:"italic", fontWeight:400, color:"rgba(200,220,240,0.82)" }}>Building content culture from within</em>
          </h1>
          <p style={{ fontSize:14, color:"rgba(220,235,250,0.8)", marginBottom:44, maxWidth:560 }}>Managing and mentoring content design teams at SAP and Intuit, establishing industry thought leadership, and embedding ethical AI and accessibility standards across global product organisations.</p>
          <div style={{ display:"flex", flexWrap:"wrap" }}>
            {[["Organisations","SAP Labs · Intuit"],["Role","UX Design Manager"],["Recognition","Intuit Superstar Award 2023"],["Reach","200+ at conferences · 8 designers led"]].map(([label,val],i) => (
              <div key={label} style={{ padding:"12px 28px", borderLeft:i===0?"none":"1px solid rgba(255,255,255,0.12)" }}>
                <span style={{ fontFamily:SM, fontSize:9, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(180,215,245,0.85)", display:"block", marginBottom:4 }}>{label}</span>
                <span style={{ fontSize:13, color:"rgba(255,255,255,0.92)", fontWeight:500 }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BODY */}
      <main style={{ maxWidth:820, margin:"0 auto", padding:"64px 40px 80px", width:"100%" }}>

        <section aria-labelledby="h-bg06">
          <SectionLabel>01 · Overview</SectionLabel>
          <h2 id="h-bg06" style={{ fontFamily:SB, fontSize:"clamp(24px,3.5vw,36px)", fontWeight:600, lineHeight:1.2, color:CS.text, marginBottom:14 }}>
            Leading <em style={{ fontStyle:"italic", fontWeight:400, color:CS.accent }}>beyond immediate boundaries</em>
          </h2>
          <p style={{ fontSize:14, color:CS.muted, lineHeight:1.85, marginBottom:12 }}>Content design leadership is not just about what the team ships — it's about the culture, standards, and capabilities you build that outlast any individual project. At SAP and Intuit, I led content design teams while simultaneously establishing thought leadership in the industry and embedding organisation-wide standards for ethical AI, accessibility, and content quality.</p>
          <p style={{ fontSize:14, color:CS.muted, lineHeight:1.85, marginBottom:24 }}>This work is not a single project — it is a body of practice built across years, organisations, and communities. The metrics are recognition, NPS scores, and the lasting influence on how teams think about and practice content design.</p>
        </section>

        <HR/>

        <section aria-labelledby="h-team06">
          <SectionLabel>02 · Team Leadership</SectionLabel>
          <h2 id="h-team06" style={{ fontFamily:SB, fontSize:"clamp(24px,3.5vw,36px)", fontWeight:600, lineHeight:1.2, color:CS.text, marginBottom:14 }}>
            Developing talent <em style={{ fontStyle:"italic", fontWeight:400, color:CS.accent }}>at scale</em>
          </h2>
          <p style={{ fontSize:14, color:CS.muted, lineHeight:1.85, marginBottom:20 }}>At SAP I manage a team of 8 content designers across enterprise products. At Intuit, I built and led the content design team for 3 years — 1 FTE and 3 contingent workers — raising standards and developing capability through structured mentorship, peer review, and coaching programmes.</p>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            {teamWork.map(tw => (
              <div key={tw.title} style={{ background:CS.card, border:`1px solid ${CS.border}`, borderRadius:12, padding:"20px" }}>
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
                  <span style={{ fontSize:22 }} aria-hidden="true">{tw.icon}</span>
                  <strong style={{ fontSize:13, color:CS.text, fontWeight:600 }}>{tw.title}</strong>
                </div>
                <p style={{ fontSize:13, color:CS.muted, margin:0, lineHeight:1.75 }}>{tw.body}</p>
              </div>
            ))}
          </div>
        </section>

        <HR/>

        <section aria-labelledby="h-principles06">
          <SectionLabel>03 · Leadership Philosophy</SectionLabel>
          <h2 id="h-principles06" style={{ fontFamily:SB, fontSize:"clamp(24px,3.5vw,36px)", fontWeight:600, lineHeight:1.2, color:CS.text, marginBottom:14 }}>
            Six principles I <em style={{ fontStyle:"italic", fontWeight:400, color:CS.accent }}>lead by</em>
          </h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
            {principles.map((p,i) => (
              <div key={i} style={{ background:CS.card, border:`1px solid ${CS.border}`, borderRadius:10, padding:"18px 20px" }}>
                <strong style={{ display:"block", fontSize:13, color:CS.accent, fontWeight:600, marginBottom:6 }}>{p.title}</strong>
                <p style={{ fontSize:13, color:CS.muted, margin:0, lineHeight:1.75 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <HR/>

        <section aria-labelledby="h-talks06">
          <SectionLabel>04 · Talks &amp; Conferences</SectionLabel>
          <h2 id="h-talks06" style={{ fontFamily:SB, fontSize:"clamp(24px,3.5vw,36px)", fontWeight:600, lineHeight:1.2, color:CS.text, marginBottom:14 }}>
            Sharing knowledge <em style={{ fontStyle:"italic", fontWeight:400, color:CS.accent }}>beyond the org</em>
          </h2>
          <p style={{ fontSize:14, color:CS.muted, lineHeight:1.85, marginBottom:20 }}>Represented Intuit and SAP at 4+ design conferences and summits — speaking on content design leadership, prompt design for AI, career growth, and accessibility. All talks and recordings are accessible below.</p>
          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            {artifacts.map(a => (
              <div key={a.label} onClick={() => window.open(a.href,"_blank")}
                style={{ background:CS.card, border:`1px solid ${CS.border}`, borderRadius:10, padding:"16px 20px", display:"flex", alignItems:"center", gap:16, cursor:"pointer", transition:"all 0.2s" }}
                onMouseEnter={e=>{ e.currentTarget.style.borderColor=CS.accent; e.currentTarget.style.background="rgba(26,75,140,0.03)"; }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor=CS.border; e.currentTarget.style.background=CS.card; }}>
                <div style={{ width:40, height:40, borderRadius:8, background:"rgba(26,75,140,0.08)", border:`1px solid rgba(26,75,140,0.15)`, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:SM, fontSize:10, fontWeight:600, color:CS.accent, flexShrink:0 }}>{a.icon}</div>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4 }}>
                    <strong style={{ fontSize:13, fontWeight:600, color:CS.text }}>{a.label}</strong>
                    <span style={{ fontFamily:SM, fontSize:9, letterSpacing:"0.1em", textTransform:"uppercase", background:"rgba(26,75,140,0.08)", color:CS.accent, padding:"2px 7px", borderRadius:4 }}>{a.tag}</span>
                  </div>
                  <p style={{ fontSize:12, color:CS.muted, margin:0, lineHeight:1.6 }}>{a.desc}</p>
                </div>
                <span style={{ fontSize:16, color:CS.accent, flexShrink:0 }}>↗</span>
              </div>
            ))}
          </div>
        </section>

        <HR/>

        <section aria-labelledby="h-awards06">
          <SectionLabel>05 · Recognition</SectionLabel>
          <h2 id="h-awards06" style={{ fontFamily:SB, fontSize:"clamp(24px,3.5vw,36px)", fontWeight:600, lineHeight:1.2, color:CS.text, marginBottom:14 }}>
            Awards &amp; <em style={{ fontStyle:"italic", fontWeight:400, color:CS.accent }}>recognition</em>
          </h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:32 }}>
            {awards.map(a => (
              <div key={a.award} style={{ background:CS.card, border:`1px solid ${CS.border}`, borderRadius:12, padding:"20px" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:8 }}>
                  <strong style={{ fontFamily:SB, fontSize:17, color:CS.text, lineHeight:1.2 }}>{a.award}</strong>
                  <span style={{ fontFamily:SM, fontSize:10, color:CS.accent, letterSpacing:"0.08em", flexShrink:0, marginLeft:8, whiteSpace:"nowrap" }}>{a.year}</span>
                </div>
                <p style={{ fontSize:12, color:CS.muted, margin:0, lineHeight:1.7 }}>{a.detail}</p>
              </div>
            ))}
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12 }}>
            {outcomes.map(o => <ImpactStat key={o.label} value={o.value} label={o.label}/>)}
          </div>
        </section>

        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:32, borderTop:`1px solid ${CS.border}`, marginTop:44 }} role="navigation" aria-label="Page navigation">
          <NavBtn onClick={onBack}>← Back to case studies</NavBtn>
          <NavBtn onClick={onHome} primary>⌂ Portfolio home</NavBtn>
        </div>
      </main>
    </div>
  );
}

// ─── Design Thinking Facilitation Case Study Overlay ────────────────────────
function CaseStudyDT({ onBack, onHome }) {

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const CS = {
    bg:"#FAFAF8",card:"#FFFFFF",surface:"#F0EDE6",border:"rgba(0,0,0,0.09)",
    accent:"#1A4B8C",text:"#0F172A",muted:"#1F2937",label:"#374151",navy:"#0F1A2E",
  };
  const SB = "'Cormorant Garant', Georgia, serif";
  const SN = "'DM Sans', system-ui, sans-serif";
  const SM = "'DM Mono', monospace";

  const SectionLabel = ({ children }) => (
    <p style={{ fontFamily:SM, fontSize:10, letterSpacing:"0.28em", textTransform:"uppercase", color:CS.accent, marginBottom:8, display:"flex", alignItems:"center", gap:12 }} role="heading" aria-level="3">
      {children}<span style={{ flex:1, height:1, background:CS.border, maxWidth:48, display:"inline-block" }} aria-hidden="true"/>
    </p>
  );
  const HR = () => <hr style={{ border:"none", borderTop:`1px solid ${CS.border}`, margin:"44px 0" }} aria-hidden="true"/>;
  const NavBtn = ({ onClick, children, primary }) => (
    <button onClick={onClick}
      style={{ display:"flex", alignItems:"center", gap:7, background:primary?CS.accent:"transparent", border:primary?"none":`1px solid ${CS.border}`, color:primary?"#fff":CS.accent, fontFamily:SN, fontSize:12, fontWeight:500, letterSpacing:"0.04em", padding:"7px 16px", borderRadius:8, cursor:"pointer", transition:"all 0.2s" }}
      onMouseEnter={e=>{ if(primary) e.currentTarget.style.opacity="0.88"; else { e.currentTarget.style.background="rgba(26,75,140,0.06)"; e.currentTarget.style.borderColor=CS.accent; }}}
      onMouseLeave={e=>{ if(primary) e.currentTarget.style.opacity="1"; else { e.currentTarget.style.background="transparent"; e.currentTarget.style.borderColor=CS.border; }}}
    >{children}</button>
  );

  // ── SVG: Double Diamond ───────────────────────────────────────────────────
  const DoubleDiamond = () => (
    <figure aria-label="Double diamond design thinking process diagram showing two phases: Discover and Define on the left, Develop and Deliver on the right, with a convergence point in the centre">
      <svg viewBox="0 0 760 200" width="100%" role="img" aria-labelledby="dd-title" style={{ display:"block" }}>
        <title id="dd-title">Double diamond process: Phase 1 Discover diverges then converges to Define; Phase 2 Develop diverges then converges to Deliver</title>
        {/* Left diamond — Discover/Define */}
        <path d="M 80 100 L 230 25 L 380 100 L 230 175 Z" fill="rgba(26,75,140,0.07)" stroke="rgba(26,75,140,0.3)" strokeWidth="1.5"/>
        {/* Right diamond — Develop/Deliver */}
        <path d="M 380 100 L 530 25 L 680 100 L 530 175 Z" fill="rgba(22,101,52,0.06)" stroke="rgba(22,101,52,0.3)" strokeWidth="1.5"/>
        {/* Centre convergence dot */}
        <circle cx="380" cy="100" r="8" fill={CS.accent}/>
        <circle cx="380" cy="100" r="14" fill="none" stroke={CS.accent} strokeWidth="1" opacity="0.3"/>
        {/* Phase labels — left */}
        <text x="165" y="95" textAnchor="middle" fontFamily="DM Mono,monospace" fontSize="10" fill="#1A4B8C" letterSpacing="1">DISCOVER</text>
        <text x="165" y="108" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="11" fill="#4B5563">User journeys · Tool audit</text>
        {/* Phase labels — right */}
        <text x="530" y="95" textAnchor="middle" fontFamily="DM Mono,monospace" fontSize="10" fill="#166534" letterSpacing="1">DEVELOP</text>
        <text x="530" y="108" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="11" fill="#4B5563">Ideation · Prioritisation</text>
        {/* Define label — convergence */}
        <text x="310" y="40" textAnchor="middle" fontFamily="DM Mono,monospace" fontSize="9" fill="#6B7280" letterSpacing="1">DEFINE</text>
        <line x1="310" y1="44" x2="355" y2="90" stroke="rgba(0,0,0,0.12)" strokeWidth="0.8"/>
        {/* Deliver label */}
        <text x="620" y="40" textAnchor="middle" fontFamily="DM Mono,monospace" fontSize="9" fill="#6B7280" letterSpacing="1">DELIVER</text>
        <line x1="620" y1="44" x2="650" y2="90" stroke="rgba(0,0,0,0.12)" strokeWidth="0.8"/>
        {/* Diverge labels */}
        <text x="155" y="18" textAnchor="middle" fontFamily="DM Mono,monospace" fontSize="8" fill="#9CA3AF" letterSpacing="1">DIVERGE</text>
        <text x="295" y="18" textAnchor="middle" fontFamily="DM Mono,monospace" fontSize="8" fill="#9CA3AF" letterSpacing="1">CONVERGE</text>
        <text x="460" y="18" textAnchor="middle" fontFamily="DM Mono,monospace" fontSize="8" fill="#9CA3AF" letterSpacing="1">DIVERGE</text>
        <text x="620" y="18" textAnchor="middle" fontFamily="DM Mono,monospace" fontSize="8" fill="#9CA3AF" letterSpacing="1">CONVERGE</text>
        {/* Entry/exit points */}
        <circle cx="80" cy="100" r="5" fill="rgba(26,75,140,0.3)"/>
        <circle cx="680" cy="100" r="5" fill="rgba(22,101,52,0.5)"/>
        <text x="40" y="104" textAnchor="middle" fontFamily="DM Mono,monospace" fontSize="8" fill="#9CA3AF">START</text>
        <text x="720" y="104" textAnchor="middle" fontFamily="DM Mono,monospace" fontSize="8" fill="#166534">RESULT</text>
      </svg>
      <figcaption style={{ fontFamily:SM, fontSize:10, letterSpacing:"0.1em", color:CS.label, textAlign:"center", marginTop:8 }}>The double diamond process applied across SAP India's Project Management business lines</figcaption>
    </figure>
  );

  // ── SVG: Problem map ──────────────────────────────────────────────────────
  const ProblemMap = () => (
    <figure aria-label="Diagram showing multiple overlapping tools and fragmented processes preventing synchronous communication between Project Management teams across SAP India business lines">
      <svg viewBox="0 0 760 180" width="100%" role="img" aria-labelledby="pm-title" style={{ display:"block" }}>
        <title id="pm-title">Problem map: Multiple tools (Jira, Confluence, Teams, SharePoint, Email) and fragmented processes creating communication gaps between PM Team A, PM Team B, and PM Team C across business lines</title>
        {/* Teams */}
        {[["PM Team A",80],["PM Team B",380],["PM Team C",660]].map(([label,cx]) => (
          <g key={label}>
            <circle cx={cx} cy="90" r="38" fill="rgba(26,75,140,0.08)" stroke="rgba(26,75,140,0.2)" strokeWidth="1.5"/>
            <text x={cx} y="86" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="12" fontWeight="600" fill="#0F172A">{label.split(" ")[0]+" "+label.split(" ")[1]}</text>
            <text x={cx} y="100" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="11" fill="#4B5563">{label.split(" ")[2]}</text>
          </g>
        ))}
        {/* Fragmented tools in middle */}
        {[
          [230,55,"Jira"],[290,40,"Confluence"],[340,70,"Teams"],[230,125,"SharePoint"],[300,110,"Email"],[355,130,"Docs"],
        ].map(([x,y,label]) => (
          <g key={label}>
            <rect x={x-28} y={y-12} width={56} height={22} rx="5" fill={CS.card} stroke={CS.border} strokeWidth="0.8"/>
            <text x={x} y={y+4} textAnchor="middle" fontFamily="DM Mono,monospace" fontSize="9" fill={CS.label} letterSpacing="0.5">{label}</text>
          </g>
        ))}
        {/* Conflict indicator */}
        <circle cx="290" cy="90" r="22" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1.5"/>
        <text x="290" y="86" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="16" fill="#DC2626">⚡</text>
        <text x="290" y="100" textAnchor="middle" fontFamily="DM Mono,monospace" fontSize="7" fill="#DC2626" letterSpacing="0.5">OVERLAP</text>
        {/* Connecting lines — dashed/fragmented */}
        {[[118,90,248,90],[332,90,490,90]].map(([x1,y1,x2,y2],i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(220,38,38,0.3)" strokeWidth="1.5" strokeDasharray="5 4"/>
        ))}
        <line x1="118" y1="90" x2="490" y2="90" stroke="rgba(0,0,0,0)" strokeWidth="0"/>
        {/* Arrow from right team to centre */}
        <line x1="622" y1="90" x2="500" y2="90" stroke="rgba(220,38,38,0.3)" strokeWidth="1.5" strokeDasharray="5 4"/>
      </svg>
      <figcaption style={{ fontFamily:SM, fontSize:10, letterSpacing:"0.1em", color:CS.label, textAlign:"center", marginTop:8 }}>The root problem — multiple overlapping tools and fragmented processes preventing synchronous communication</figcaption>
    </figure>
  );

  const processSteps = [
    { num:"01", phase:"Map", title:"User journey mapping across all business lines", body:"Mapped user journeys of Project Management teams end-to-end — across different roles, tools, processes, and communication points. This surface-level mapping revealed where handoffs broke down and where duplication created overhead." },
    { num:"02", phase:"Discover", title:"Tool and process audit", body:"Identified a diverse set of tools, process redundancies, and communication gaps preventing synchronous collaboration. Teams were using overlapping combinations of Jira, Confluence, Teams, SharePoint, and email — often for the same tasks with no agreed convention." },
    { num:"03", phase:"Define", title:"Root cause identification and problem prioritisation", body:"Methodically helped teams articulate root problem areas rather than surface symptoms. Used design thinking facilitation to separate 'this is painful' from 'this is the root cause' — ensuring solutions addressed real issues, not workarounds." },
    { num:"04", phase:"Develop", title:"Ideation — scalable solutions for prioritised pain points", body:"Facilitated structured ideation sessions. Teams brainstormed solutions for each prioritised problem area, using How Might We prompts to open up possibility space before narrowing. Solutions were evaluated against scalability and cross-team adoption potential." },
    { num:"05", phase:"Deliver", title:"Virtual facilitation — limited time, significant constraints", body:"Delivered the entire workshop virtually — across teams with different working styles, time zones, and tool familiarity — with limited preparation time and resources. Established a repeatable DT facilitation model that could be replicated for future workshops at SAP India." },
  ];

  const artifacts = [
    { icon:"PDF", label:"DT Workshop Summary", desc:"Session summary, outcomes, key findings, and recommended next steps from the Project Management design thinking workshop. Password protected.", href:"https://drive.google.com/file/d/1A8KvWoRUVi_gqtNi_H90KnzsMkQYEHQ_/view?usp=sharing", pw:true },
    { icon:"▤",   label:"Facilitation Deck", desc:"Full workshop facilitation deck — all slides, exercises, How Might We prompts, and facilitation notes used in the virtual session. Password protected.", href:"https://drive.google.com/file/d/1L3QZCszZJ3Y-vnk9UBcvK5i3eVZ2bnHZ/view?usp=sharing", pw:true },
    { icon:"⊡",   label:"User Journey Process Maps", desc:"End-to-end user journey maps across Project Management business lines — showing current-state workflows, pain points, tool touchpoints, and communication gaps identified during the workshop. Password protected.", href:"https://drive.google.com/file/d/1rK2-ov-SJtiTmCPxTBGVhVtdk25uYXiQ/view?usp=sharing", pw:true },
  ];

  const outcomes = [
    { value:"5", label:"PM teams across business lines" },
    { value:"Multi-BU", label:"Processes streamlined" },
    { value:"100%", label:"Virtual facilitation" },
    { value:"Outstanding", label:"Stakeholder feedback" },
  ];

  return (
    <div style={{ position:"fixed", inset:0, zIndex:200, background:CS.bg, color:CS.text, fontFamily:SN, overflowY:"auto", display:"flex", flexDirection:"column" }}
      role="dialog" aria-modal="true" aria-label="Design Thinking Facilitation Case Study">
      {/* NAV */}
      <div style={{ position:"sticky", top:0, zIndex:10, background:"rgba(250,250,248,0.95)", backdropFilter:"blur(12px)", borderBottom:`1px solid ${CS.border}`, padding:"12px 40px", display:"flex", justifyContent:"space-between", alignItems:"center", flexShrink:0 }} role="navigation" aria-label="Case study navigation">
        <NavBtn onClick={onBack}>← Back to case studies</NavBtn>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <NavBtn onClick={() => window.print()}>↓ Save as PDF</NavBtn>
          <NavBtn onClick={onHome} primary>⌂ Portfolio home</NavBtn>
        </div>
      </div>

      {/* COVER */}
      <div style={{ background:"linear-gradient(160deg,#0F1A2E 0%,#1A3A6C 60%,#1A4B8C 100%)", color:"#fff", padding:"72px 0 64px", position:"relative", overflow:"hidden", flexShrink:0 }} role="banner">
        <div style={{ position:"absolute", top:-40, right:-60, width:360, height:360, borderRadius:"50%", background:"rgba(123,159,191,0.12)", pointerEvents:"none" }} aria-hidden="true"/>
        <div style={{ maxWidth:820, margin:"0 auto", padding:"0 40px", position:"relative", zIndex:1 }}>
          <p style={{ fontFamily:SM, fontSize:11, letterSpacing:"0.24em", textTransform:"uppercase", color:"rgba(180,215,245,0.9)", marginBottom:18, display:"flex", alignItems:"center", gap:12 }}>
            <span style={{ width:32, height:1, background:"rgba(123,159,191,0.6)", display:"inline-block" }} aria-hidden="true"/>
            Case Study · SAP Labs India
          </p>
          <h1 style={{ fontFamily:SB, fontSize:"clamp(34px,5vw,56px)", fontWeight:600, lineHeight:1.08, letterSpacing:"-0.01em", marginBottom:10, color:"#fff" }}>
            Design Thinking<br/>Facilitation<br/>
            <em style={{ fontStyle:"italic", fontWeight:400, color:"rgba(200,220,240,0.82)" }}>From fragmented tools to synchronised teams</em>
          </h1>
          <p style={{ fontSize:14, color:"rgba(220,235,250,0.8)", marginBottom:44, maxWidth:560 }}>As a newly certified Design Thinking Coach, I led a virtual DT workshop across SAP India's Project Management business lines — mapping user journeys, identifying tool overlaps, and facilitating scalable solutions across teams with different working styles.</p>
          <div style={{ display:"flex", flexWrap:"wrap" }}>
            {[["Organisation","SAP Labs India"],["Role","Certified DT Coach"],["Certification","SAP Design Thinking Academy 2021"],["Format","Virtual · Multi-team · Cross-BU"]].map(([label,val],i) => (
              <div key={label} style={{ padding:"12px 28px", borderLeft:i===0?"none":"1px solid rgba(255,255,255,0.12)" }}>
                <span style={{ fontFamily:SM, fontSize:9, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(180,215,245,0.85)", display:"block", marginBottom:4 }}>{label}</span>
                <span style={{ fontSize:13, color:"rgba(255,255,255,0.92)", fontWeight:500 }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BODY */}
      <main style={{ maxWidth:820, margin:"0 auto", padding:"64px 40px 80px", width:"100%" }}>

        <section aria-labelledby="h-bg07">
          <SectionLabel>01 · Background &amp; Challenge</SectionLabel>
          <h2 id="h-bg07" style={{ fontFamily:SB, fontSize:"clamp(24px,3.5vw,36px)", fontWeight:600, lineHeight:1.2, color:CS.text, marginBottom:14 }}>
            Multiple tools, <em style={{ fontStyle:"italic", fontWeight:400, color:CS.accent }}>no synchronisation</em>
          </h2>
          <p style={{ fontSize:14, color:CS.muted, lineHeight:1.85, marginBottom:12 }}>Project Management teams across SAP India's various business lines were working in silos — using overlapping combinations of tools and processes with no agreed conventions or communication standards. The result was duplicated work, missed handoffs, and significant friction in cross-team collaboration.</p>
          <p style={{ fontSize:14, color:CS.muted, lineHeight:1.85, marginBottom:24 }}>As a newly certified Design Thinking Coach (SAP Design Thinking Academy, 2021), I was tasked with facilitating a virtual DT workshop to surface root causes and co-create scalable solutions — with limited preparation time and significant logistical constraints.</p>
          <ProblemMap/>
        </section>

        <HR/>

        <section aria-labelledby="h-framework07">
          <SectionLabel>02 · Framework</SectionLabel>
          <h2 id="h-framework07" style={{ fontFamily:SB, fontSize:"clamp(24px,3.5vw,36px)", fontWeight:600, lineHeight:1.2, color:CS.text, marginBottom:14 }}>
            The double diamond, <em style={{ fontStyle:"italic", fontWeight:400, color:CS.accent }}>applied virtually</em>
          </h2>
          <p style={{ fontSize:14, color:CS.muted, lineHeight:1.85, marginBottom:20 }}>The SAP Design Thinking framework — based on the double diamond model — guided the workshop structure. Two diverge-converge cycles: first to discover and define the real problem, then to develop and deliver scalable solutions.</p>
          <DoubleDiamond/>
        </section>

        <HR/>

        <section aria-labelledby="h-process07">
          <SectionLabel>03 · Process</SectionLabel>
          <h2 id="h-process07" style={{ fontFamily:SB, fontSize:"clamp(24px,3.5vw,36px)", fontWeight:600, lineHeight:1.2, color:CS.text, marginBottom:14 }}>
            Five-step facilitation <em style={{ fontStyle:"italic", fontWeight:400, color:CS.accent }}>across business lines</em>
          </h2>
          <div style={{ border:`1px solid ${CS.border}`, borderRadius:12, overflow:"hidden" }}>
            {processSteps.map((s,i) => (
              <div key={s.num} style={{ display:"flex", borderBottom:i<processSteps.length-1?`1px solid ${CS.border}`:"none", background:CS.card }}>
                <div style={{ width:80, flexShrink:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"flex-start", padding:"18px 0", borderRight:`1px solid ${CS.border}` }}>
                  <span style={{ fontFamily:SM, fontSize:11, color:CS.accent, fontWeight:500, letterSpacing:"0.06em" }}>{s.num}</span>
                  <span style={{ fontFamily:SM, fontSize:9, color:CS.label, letterSpacing:"0.08em", textTransform:"uppercase", marginTop:4, textAlign:"center", padding:"0 8px", lineHeight:1.4 }}>{s.phase}</span>
                </div>
                <div style={{ padding:"18px 22px", flex:1 }}>
                  <h4 style={{ fontSize:13, fontWeight:600, color:CS.text, marginBottom:6 }}>{s.title}</h4>
                  <p style={{ fontSize:13, color:CS.muted, margin:0, lineHeight:1.8 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <HR/>

        <section aria-labelledby="h-artifacts07">
          <SectionLabel>04 · Proof &amp; Artefacts</SectionLabel>
          <h2 id="h-artifacts07" style={{ fontFamily:SB, fontSize:"clamp(24px,3.5vw,36px)", fontWeight:600, lineHeight:1.2, color:CS.text, marginBottom:14 }}>
            Workshop <em style={{ fontStyle:"italic", fontWeight:400, color:CS.accent }}>deliverables</em>
          </h2>
          <p style={{ fontSize:14, color:CS.muted, lineHeight:1.85, marginBottom:20 }}>All artefacts are available on request. Files are password protected to safeguard internal SAP content — please email <a href="mailto:sheenalakshmi@gmail.com" style={{ color:CS.accent }}>sheenalakshmi@gmail.com</a> for access.</p>
          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            {artifacts.map(a => (
              <div key={a.label} onClick={() => window.open(a.href,"_blank")}
                style={{ background:CS.card, border:`1px solid ${CS.border}`, borderRadius:10, padding:"16px 20px", display:"flex", alignItems:"center", gap:16, cursor:"pointer", transition:"all 0.2s" }}
                onMouseEnter={e=>{ e.currentTarget.style.borderColor=CS.accent; e.currentTarget.style.background="rgba(26,75,140,0.03)"; }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor=CS.border; e.currentTarget.style.background=CS.card; }}>
                <div style={{ width:40, height:40, borderRadius:8, background:"rgba(26,75,140,0.08)", border:`1px solid rgba(26,75,140,0.15)`, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:SM, fontSize:11, fontWeight:600, color:CS.accent, flexShrink:0 }}>{a.icon}</div>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4 }}>
                    <strong style={{ fontSize:13, fontWeight:600, color:CS.text }}>{a.label}</strong>
                    {a.pw && <span style={{ fontFamily:SM, fontSize:9, letterSpacing:"0.1em", textTransform:"uppercase", background:"rgba(146,64,14,0.08)", color:"#92400E", padding:"2px 7px", borderRadius:4 }}>🔒 Password protected</span>}
                  </div>
                  <p style={{ fontSize:12, color:CS.muted, margin:0, lineHeight:1.6 }}>{a.desc}</p>
                </div>
                <span style={{ fontSize:16, color:CS.accent, flexShrink:0 }}>↗</span>
              </div>
            ))}
          </div>
        </section>

        <HR/>

        <section aria-labelledby="h-outcomes07">
          <SectionLabel>05 · Outcomes</SectionLabel>
          <h2 id="h-outcomes07" style={{ fontFamily:SB, fontSize:"clamp(24px,3.5vw,36px)", fontWeight:600, lineHeight:1.2, color:CS.text, marginBottom:14 }}>
            From overlap to <em style={{ fontStyle:"italic", fontWeight:400, color:CS.accent }}>alignment</em>
          </h2>
          <p style={{ fontSize:14, color:CS.muted, lineHeight:1.85, marginBottom:24 }}>Tool overlaps were identified and resolved. PM processes were streamlined across multiple business units. The workshop established a repeatable DT facilitation model for future sessions at SAP India.</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12, marginBottom:24 }}>
            {outcomes.map(o => (
              <div key={o.label} style={{ background:CS.card, border:`1px solid ${CS.border}`, borderRadius:12, padding:"20px 16px", textAlign:"center" }}>
                <span style={{ fontFamily:SB, fontSize:o.value.length > 6 ? 22 : 32, fontWeight:700, color:CS.accent, lineHeight:1, display:"block", marginBottom:8 }}>{o.value}</span>
                <span style={{ fontFamily:SM, fontSize:10, letterSpacing:"0.12em", textTransform:"uppercase", color:CS.label, lineHeight:1.5, display:"block" }}>{o.label}</span>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <blockquote style={{ background:CS.surface, borderLeft:`3px solid ${CS.accent}`, borderRadius:"0 10px 10px 0", padding:"20px 24px" }}>
            <p style={{ fontFamily:SB, fontSize:19, fontStyle:"italic", color:CS.text, lineHeight:1.7, margin:0 }}>
              "This was no easy topic… executed pretty well."
            </p>
            <p style={{ fontFamily:SM, fontSize:10, letterSpacing:"0.12em", textTransform:"uppercase", color:CS.label, marginTop:12, margin:"12px 0 0" }}>
              — Stakeholder feedback, SAP India DT Workshop
            </p>
          </blockquote>
        </section>

        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:32, borderTop:`1px solid ${CS.border}`, marginTop:44 }} role="navigation" aria-label="Page navigation">
          <NavBtn onClick={onBack}>← Back to case studies</NavBtn>
          <NavBtn onClick={onHome} primary>⌂ Portfolio home</NavBtn>
        </div>
      </main>
    </div>
  );
}
function ClassicMode({ onAskAbout, onCaseStudy }) {
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
                <p style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: C.accent, marginBottom: 10 }}>Challenge &amp; Context</p>
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
                <p style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: C.accent, marginBottom: 12 }}>Proof &amp; Artefacts</p>
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
                <a href="mailto:sheenalakshmi@gmail.com" className="sl-nav-link">sheenalakshmi@gmail.com ↗</a>
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
                      <button className="sl-cta-btn" style={{ marginTop: 10 }} onClick={() => p.id === "01" && onCaseStudy ? onCaseStudy("fpa") : p.id === "03" && onCaseStudy ? onCaseStudy("onboarding") : p.id === "04" && onCaseStudy ? onCaseStudy("naming") : p.id === "05" && onCaseStudy ? onCaseStudy("ia") : p.id === "06" && onCaseStudy ? onCaseStudy("leadership") : p.id === "07" && onCaseStudy ? onCaseStudy("dt") : openDrawer(p)}>View case study →</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section style={{ marginBottom: 72 }}>
          <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: 28 }}>Skills &amp; Tools</p>
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
                  <a href={ct.href} target={ct.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="sl-nav-link">{ct.value} →</a>
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
  const [caseStudy, setCaseStudy] = useState(null); // null | "fpa"
  // ── CHANGE 3: Light theme as default ─────────────────────────────────────
  const [theme, setTheme] = useState("light");
  const [msgs, setMsgs]   = useState([{
    role: "assistant",
    content: "Hi! I'm Sheena — a UX Design Manager (Content) at SAP with 20+ years of experience — 16 in technical documentation and 8 in UX content design.\n\nI've led content strategy at Intuit and SAP, mentored teams of 8+, and delivered measurable growth across global products.\n\nAsk me anything — or switch to Portfolio View to browse my work and samples. 👋",
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

  const openCaseStudy = (id) => setCaseStudy(id);

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

      {caseStudy === "fpa" && (
        <CaseStudyFPA
          onBack={() => { setCaseStudy(null); setMode("classic"); }}
          onHome={() => { setCaseStudy(null); setMode("classic"); }}
        />
      )}
      {caseStudy === "onboarding" && (
        <CaseStudyOnboarding
          onBack={() => { setCaseStudy(null); setMode("classic"); }}
          onHome={() => { setCaseStudy(null); setMode("classic"); }}
        />
      )}
      {caseStudy === "naming" && (
        <CaseStudyNaming
          onBack={() => { setCaseStudy(null); setMode("classic"); }}
          onHome={() => { setCaseStudy(null); setMode("classic"); }}
        />
      )}
      {caseStudy === "ia" && (
        <CaseStudyIA
          onBack={() => { setCaseStudy(null); setMode("classic"); }}
          onHome={() => { setCaseStudy(null); setMode("classic"); }}
        />
      )}
      {caseStudy === "leadership" && (
        <CaseStudyLeadership
          onBack={() => { setCaseStudy(null); setMode("classic"); }}
          onHome={() => { setCaseStudy(null); setMode("classic"); }}
        />
      )}
      {caseStudy === "dt" && (
        <CaseStudyDT
          onBack={() => { setCaseStudy(null); setMode("classic"); }}
          onHome={() => { setCaseStudy(null); setMode("classic"); }}
        />
      )}

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
        : <ClassicMode onAskAbout={handleAskAbout} onCaseStudy={openCaseStudy} />
      }
    </div>
  );
}

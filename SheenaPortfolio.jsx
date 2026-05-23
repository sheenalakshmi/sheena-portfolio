import { useState, useEffect, useRef } from "react";

// ─── AI System Prompt ─────────────────────────────────────────────────────────
const SYSTEM = `You are Sheena Lakshmi — UX Design Manager (Content) at SAP Labs, Bengaluru — answering questions on your personal portfolio site. Visitors are recruiters, hiring managers, and curious professionals.

Speak in first person. Be warm, confident, and direct. Lead with measurable impact. Keep answers 2–4 sentences unless more detail is asked. If asked something outside your background, gracefully say so and invite them to email you.

WHO I AM:
16+ years in enterprise writing. 8+ years leading UX and content transformation at Fortune 500 companies.
Currently: UX Design Manager (Content), SAP Labs, Bengaluru. Previously: Content Design Lead & Strategist, Intuit (QuickBooks).
Contact: sheenalakshmi@gmail.com | +91 9845807918 | linkedin.com/in/sheena-lakshmi-232a425/

CORE SKILLS:
Content leadership & strategy · Data-informed design · User research & testing · Design thinking · Systems design · Prompt design · LLM training · Conversation design · Ethical AI · Accessibility · Digital adoption · Team mentorship
Tools: Figma · Balsamiq · Writer.AI · Mural · Miro · WalkMe · Jira · UserTesting · GreatQuestion · Claude · ChatGPT · Gemini · Perplexity

PROJECTS:
[1] FP&A Content Strategy — Intuit QuickBooks | Content Design Strategist
Impact: 37% YoY increase in budgeting companies; 25% rise in budgets created; FP&A engagement ↑12.54% (QBO Adv) & ↑8.39% (QBO Plus); CES improved 13%→52%; AI forecast usage raised to 36%; FTU >13% budgeting; 75% custom forecast-to-budget.
Work: Led content design strategy for QuickBooks FP&A across global markets. Positioned FP&A in primary nav, built scalable frameworks, led 30+ user interviews, A/B tests, card sorting, usability studies.

[2] Content Operations & Team Leadership — Intuit QuickBooks | Content Design Lead
Impact: Guided 100K GNS in 1.5 years; 88% 90-day retention; CES 7%→32%; Payments $213M revenue; Payroll $723M revenue.
Work: Managed content ops for complex product ecosystem. Mentored team, led 24+ peer reviews, weekly coaching.

[3] Product Feature Naming — SAP Analytics | Content Design Strategist
Impact: 'Schedule Publication' adopted as feature name; reduced cognitive load; improved learnability and scalability.
Work: Resolved naming conflict between on-prem and cloud versions. Ran user interviews, competitor analysis, card sorting, low-fi prototype testing.

[4] Content UX & Information Architecture — SAP Analytics | Content Design Strategist
Impact: Centralised ~750 topics; streamlined maintenance; improved onboarding/adoption across Banking, Insurance, Oil & Gas.
Work: Audited 750 topics, defined personas across industries and LOBs, designed IA, migrated all content to unified XML authoring environment.

[5] First-Time User Onboarding — Intuit QuickBooks | Content Designer & Strategist
Impact: 22% increase in first-time feature adoption; reduced cognitive load; improved engagement and retention.
Work: Qual/quant research on SMB user motivations. Crafted benefit-driven onboarding copy. Outcome-focused voice and tone.

[6] Leadership & Thought Leadership — SAP Labs · Intuit | UX Design Manager
Impact: Intuit Superstar Award Q4 2023; top mentor on ADPList twice; workshop NPS 4.8+/5; doubled team capabilities.
Work: Manage and mentor 8 content designers at SAP. Built Intuit content team for 3 years. Delivered workshops at UXIndia (120+ participants). Speaker at ADPList BeMore Conference and W-Summit.

[7] Design Thinking Facilitation — SAP | DT Coach
Impact: Streamlined PM processes across business lines. Testimonial: "This was no easy topic… executed pretty well."
Work: Mapped user journeys, identified tool/process overlaps, delivered virtual DT workshop.

AWARDS: Intuit Superstar Award for Customer Obsession (Q4 2023) · Top talent at SAP · Top mentor on ADPList (twice) · All workshops NPS 4.8+/5

AVAILABILITY: Open to senior UX leadership, content strategy, and design management opportunities. Based in Bengaluru; open to global/remote.`;

// ─── Data ─────────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: "01", title: "FP&A Content Strategy", company: "Intuit QuickBooks",
    role: "Content Design Strategist", metric: "37%", metricLabel: "YoY growth in budgeting companies",
    tags: ["Content Strategy", "AI Adoption", "User Research", "Systems Design"],
    description: "Led content design strategy for all QuickBooks Financial Planning & Analysis capabilities — budgeting, forecasting, cash flow — across global markets. Positioned FP&A in primary navigation, built scalable content frameworks, and led 30+ user interviews, A/B tests, and usability studies.",
    results: [
      { label: "FP&A Engagement", value: "+12.54% (QBO Adv)" },
      { label: "Budgets Created", value: "+25% YoY" },
      { label: "CES", value: "13% → 52%" },
      { label: "AI Forecast Usage", value: "36%" },
    ],
    samples: [
      { label: "Content Design Framework (PDF)", type: "pdf", href: "https://file.notion.so/f/f/26585f19-10d2-4c21-b3ff-e89641172fe6/643f22f5-ded4-4d6d-8036-12dd04697c98/Content_Design__FPA.pdf?table=block&id=258dfd46-6d0a-804b-8f1a-f6d9a97452f8&spaceId=26585f19-10d2-4c21-b3ff-e89641172fe6&expirationTimestamp=1779530400000&signature=w9xv9Q2PR2Tph-9tnTCPxyoFIhKtnOP466wRgBKhKbY&downloadName=Content+Design_+FP%26A.pdf" },
    ],
    askPrompt: "Tell me more about your FP&A content strategy work at Intuit and the impact it had.",
  },
  {
    id: "02", title: "Team Leadership & Content Ops", company: "Intuit QuickBooks",
    role: "Content Design Lead", metric: "100K", metricLabel: "GNS guided in 1.5 years",
    tags: ["Team Leadership", "Content Ops", "Mentorship", "Coaching"],
    description: "Managed content operations for a complex product ecosystem — core, payments, mobile, payroll, and migration tools. Mentored contingent workers, led 24+ peer-review sessions, and instituted content hygiene practices that elevated quality across the board.",
    results: [
      { label: "90-Day Retention", value: "88%" },
      { label: "Payments Revenue", value: "$213M" },
      { label: "Payroll Revenue", value: "$723M" },
      { label: "CES", value: "7% → 32%" },
    ],
    samples: [],
    askPrompt: "Tell me about your content operations and team leadership work at Intuit.",
  },
  {
    id: "03", title: "Feature Nomenclature Design", company: "SAP Analytics",
    role: "Content Design Strategist", metric: "↓", metricLabel: "Cognitive load via naming clarity",
    tags: ["Product Naming", "User Research", "Card Sorting", "Stakeholder Management"],
    description: "Resolved a naming conflict between SAP's on-premises and cloud analytics versions. Ran user interviews, competitor analysis (Tableau, Adobe, Zoho), card sorting exercises, and low-fidelity prototype testing to align on a term that was both intuitive and scalable.",
    results: [
      { label: "Feature Name Adopted", value: "Schedule Publication" },
      { label: "Scalability", value: "Future-proofed for artifacts" },
      { label: "UX Alignment", value: "Heuristic compliant" },
      { label: "Stakeholder Buy-in", value: "100%" },
    ],
    samples: [],
    askPrompt: "Walk me through the product naming case study at SAP Analytics.",
  },
  {
    id: "04", title: "Content UX & Information Architecture", company: "SAP Analytics",
    role: "Content Design Strategist", metric: "750", metricLabel: "Topics centralised & restructured",
    tags: ["Information Architecture", "Systems Thinking", "Content Audit", "XML Authoring"],
    description: "Audited ~750 topics across scattered PDFs, defined personas across Banking, Insurance, and Oil & Gas, and redesigned the IA to centralise all business content in a unified, navigable help portal — dramatically cutting maintenance overhead.",
    results: [
      { label: "Topics Migrated", value: "~750" },
      { label: "Industries Covered", value: "Banking, Insurance, O&G" },
      { label: "Maintenance", value: "Streamlined" },
      { label: "Customer Adoption", value: "↑" },
    ],
    samples: [],
    askPrompt: "Tell me about the content UX consistency project at SAP Analytics.",
  },
  {
    id: "05", title: "First-Time User Onboarding", company: "Intuit QuickBooks",
    role: "Content Designer & Strategist", metric: "22%", metricLabel: "Lift in first-time feature adoption",
    tags: ["Onboarding", "UX Writing", "SMB", "Cognitive Load"],
    description: "Conducted qual and quant research to understand SMB user motivations and pain points around business planning. Crafted benefit-driven onboarding copy using Intuit's FTU framework — outcome-focused, no jargon, no overpromising.",
    results: [
      { label: "Feature Adoption", value: "+22% (FTU)" },
      { label: "Cognitive Load", value: "Significantly reduced" },
      { label: "Engagement", value: "Improved retention" },
      { label: "User Clarity", value: "↑ from research" },
    ],
    samples: [],
    askPrompt: "Tell me about the first-time user onboarding project and how you approached it.",
  },
  {
    id: "06", title: "Leadership & Thought Leadership", company: "SAP Labs · Intuit",
    role: "UX Design Manager", metric: "4.8", metricLabel: "NPS across all workshops",
    tags: ["Mentorship", "Public Speaking", "Ethical AI", "Accessibility"],
    description: "Manage and mentor 8 content designers at SAP. Built and coached the Intuit content team for 3 years. Delivered workshops at UXIndia (120+ participants) and D4 Design. Developed ethical AI content guidelines. Speaker at ADPList BeMore Conference and W-Summit.",
    results: [
      { label: "Intuit Superstar Award", value: "Q4 2023" },
      { label: "ADPList Top Mentor", value: "Twice" },
      { label: "Workshop NPS", value: "4.8+ / 5" },
      { label: "Team Growth", value: "Doubled capabilities" },
    ],
    samples: [
      { label: "Prompt Design — UXIndia 2023", type: "pdf", href: "#" },
      { label: "NextGen Network Interview", type: "video", href: "https://www.youtube.com/watch?v=SQcGF5OinFs" },
      { label: "ADPList BeMore Conference", type: "video", href: "https://drive.google.com/file/d/1td8NBDKhQpO3TRvM87p-mxb4nAs28i4L/view" },
      { label: "W-Summit Career Talk", type: "video", href: "https://www.youtube.com/watch?v=i1EgVExCpj0" },
    ],
    askPrompt: "Tell me about your mentorship, workshops, and thought leadership work.",
  },
  {
    id: "07", title: "Design Thinking Facilitation", company: "SAP Labs",
    role: "Design Thinking Coach", metric: "✦", metricLabel: "Virtual DT workshop, multiple business lines",
    tags: ["Design Thinking", "Facilitation", "Process Optimisation", "Virtual Workshop"],
    description: "As a newly inducted DT coach, mapped user journeys across business lines, identified overlapping tools and processes preventing synchronous communication, and delivered a one-of-a-kind virtual Design Thinking workshop.",
    results: [
      { label: "Process Optimised", value: "Multiple BUs" },
      { label: "Tool Overlaps", value: "Identified & resolved" },
      { label: "Stakeholder NPS", value: "Outstanding" },
      { label: "Format", value: "Virtual-first" },
    ],
    samples: [],
    askPrompt: "Tell me about the design thinking facilitation project at SAP.",
  },
];

const SKILLS_LIST = [
  { group: "Strategy & Leadership", items: ["Content Leadership & Operations", "Content Strategy", "Design Thinking", "Stakeholder Management", "Team Mentorship"] },
  { group: "Design & Research", items: ["UX Writing & Content Design", "Information Architecture", "User Research & Testing", "Data-Informed Design", "Systems Design"] },
  { group: "Emerging Specialisms", items: ["Prompt Design", "LLM Training", "Conversation Design", "Ethical AI", "Digital Adoption (WalkMe)"] },
  { group: "Tools", items: ["Figma", "Balsamiq", "Jira", "Mural · Miro", "UserTesting · GreatQuestion", "Writer.AI"] },
];

const CHIPS = [
  "What's your most impactful project?",
  "How do you lead content teams?",
  "What AI experience do you have?",
  "Are you open to new roles?",
  "Walk me through your design process",
];

// ─── Design tokens ─────────────────────────────────────────────────────────────
const C = {
  bg:     "#0B0D12", surface: "#12151C", card: "#191C26", cardHov: "#1e2130",
  border: "rgba(255,255,255,0.07)", accent: "#C4976A",
  aLo:    "rgba(196,151,106,0.1)", aMid: "rgba(196,151,106,0.22)",
  text:   "#E4DDD0", muted: "rgba(228,221,208,0.42)",
  green:  "#4EC98A", gLo: "rgba(78,201,138,0.1)",
};
const SANS  = "'DM Sans', sans-serif";
const SERIF = "'Cormorant Garant', serif";

// ─── Global styles ─────────────────────────────────────────────────────────────
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garant:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html,body{background:${C.bg}}
  ::-webkit-scrollbar{width:4px}
  ::-webkit-scrollbar-track{background:transparent}
  ::-webkit-scrollbar-thumb{background:${C.aMid};border-radius:2px}

  .sl-chip{background:${C.aLo};border:1px solid ${C.aMid};color:rgba(196,151,106,0.8);
    padding:7px 13px;border-radius:20px;font-size:12px;font-family:${SANS};
    cursor:pointer;white-space:nowrap;transition:all 0.2s;line-height:1}
  .sl-chip:hover{background:${C.aMid};border-color:rgba(196,151,106,0.5);color:${C.accent};transform:translateY(-1px)}

  .sl-send{background:${C.accent};border:none;width:38px;height:38px;border-radius:50%;
    cursor:pointer;display:flex;align-items:center;justify-content:center;
    flex-shrink:0;transition:all 0.2s;color:${C.bg};font-size:17px;font-weight:700}
  .sl-send:hover:not(:disabled){background:#d4a87a;transform:scale(1.06)}
  .sl-send:disabled{opacity:0.35;cursor:not-allowed}

  .sl-ta{flex:1;background:transparent;border:none;outline:none;color:${C.text};
    font-family:${SANS};font-size:14px;line-height:1.6;resize:none;min-height:22px;max-height:110px}
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

  .sl-nav-link{font-size:12px;color:${C.muted};text-decoration:none;letter-spacing:0.06em;transition:color 0.2s}
  .sl-nav-link:hover{color:${C.accent}}

  .sl-proj-card{background:${C.card};border:1px solid ${C.border};border-radius:16px;
    overflow:hidden;transition:all 0.25s;cursor:pointer}
  .sl-proj-card:hover{border-color:${C.aMid};transform:translateY(-2px);box-shadow:0 12px 40px rgba(0,0,0,0.35)}

  .sl-ask{background:${C.aLo};border:1px solid ${C.aMid};color:${C.accent};
    padding:8px 14px;border-radius:8px;font-size:12px;font-family:${SANS};
    letter-spacing:0.06em;cursor:pointer;transition:all 0.2s;display:inline-block}
  .sl-ask:hover{background:${C.aMid}}

  .sl-sample{display:inline-flex;align-items:center;gap:5px;
    background:rgba(255,255,255,0.04);border:1px solid ${C.border};
    color:${C.muted};padding:6px 12px;border-radius:8px;font-size:12px;
    font-family:${SANS};text-decoration:none;transition:all 0.2s;margin-right:7px;margin-top:7px}
  .sl-sample:hover{border-color:${C.aMid};color:${C.text};background:rgba(196,151,106,0.07)}

  .sl-skill-tag{background:${C.surface};border:1px solid ${C.border};
    color:${C.muted};padding:6px 13px;border-radius:8px;font-size:12px;
    font-family:${SANS};display:inline-block;margin:4px;transition:border-color 0.2s}
  .sl-skill-tag:hover{border-color:${C.aMid};color:${C.text}}

  .sl-mode-btn{display:flex;align-items:center;gap:8px;padding:8px 16px;
    border-radius:10px;border:1px solid ${C.border};font-family:${SANS};
    font-size:12px;letter-spacing:0.06em;cursor:pointer;transition:all 0.22s;font-weight:500}

  .sl-exp-row{padding:20px 0;border-bottom:1px solid ${C.border};transition:background 0.2s}
  .sl-exp-row:first-child{border-top:1px solid ${C.border}}
`;

// ─── Shared sub-components ─────────────────────────────────────────────────────
function Avatar({ size = 30 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%", flexShrink: 0,
      background: `linear-gradient(135deg, ${C.accent} 0%, #8B5534 100%)`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: SERIF, fontWeight: 600, fontSize: size * 0.38, color: C.bg, marginTop: 2,
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

function StatusBadge() {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 6,
      background: C.gLo, border: "1px solid rgba(78,201,138,0.2)",
      padding: "5px 12px", borderRadius: 18,
    }}>
      <div className="sl-pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: C.green }} />
      <span style={{ fontSize: 10, color: "rgba(78,201,138,0.85)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        Open to opportunities
      </span>
    </div>
  );
}

// ─── Mode toggle ──────────────────────────────────────────────────────────────
function ModeToggle({ mode, setMode }) {
  return (
    <div style={{
      display: "flex", gap: 4,
      background: C.surface, border: `1px solid ${C.border}`,
      padding: 4, borderRadius: 12,
    }}>
      {[
        { id: "ai",      icon: "✦", label: "Ask Me" },
        { id: "classic", icon: "≡", label: "View Portfolio" },
      ].map(m => (
        <button
          key={m.id}
          className="sl-mode-btn"
          onClick={() => setMode(m.id)}
          style={{
            background: mode === m.id ? C.accent : "transparent",
            color: mode === m.id ? C.bg : C.muted,
            borderColor: mode === m.id ? C.accent : "transparent",
          }}
        >
          <span style={{ fontSize: 13 }}>{m.icon}</span>
          {m.label}
        </button>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// AI CHAT MODE
// ═══════════════════════════════════════════════════════════════════
function AIMode({ onAsk, msgs, setMsgs, busy, setBusy, input, setInput }) {
  const endRef  = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, busy]);

  const send = async (text) => {
    const q = text.trim();
    if (!q || busy) return;
    const history = [...msgs, { role: "user", content: q }];
    setMsgs(history);
    setInput("");
    setBusy(true);
    try {
      const res  = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1000, system: SYSTEM, messages: history }),
      });
      const data = await res.json();
      const reply = data.content?.find(b => b.type === "text")?.text
        ?? "I couldn't fetch a response — please email sheenalakshmi@gmail.com!";
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

      {/* Hero */}
      <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: 14 }}>
        AI-Powered Portfolio · Ask Me Anything
      </p>
      <h1 style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(28px,4.5vw,52px)", fontWeight: 400, lineHeight: 1.18, marginBottom: 14 }}>
        16 years of turning complexity<br />into <span style={{ color: C.accent }}>clarity</span> &amp; <span style={{ color: C.accent }}>business impact.</span>
      </h1>
      <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.85, maxWidth: 480, marginBottom: 36 }}>
        I lead content strategy and UX design at Fortune 500 companies — building teams, frameworks, and experiences that drive measurable adoption. Ask me anything below, or switch to Portfolio View to browse my work.
      </p>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginBottom: 40 }}>
        {[["16+","Years"], ["37%","YoY growth"], ["8+","Designers led"], ["4.8","Workshop NPS"]].map(([n, l]) => (
          <div key={l} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 10px", textAlign: "center" }}>
            <p style={{ fontFamily: SERIF, fontSize: 28, fontWeight: 600, color: C.accent, lineHeight: 1 }}>{n}</p>
            <p style={{ fontSize: 9, color: C.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 5, lineHeight: 1.4 }}>{l}</p>
          </div>
        ))}
      </div>

      {/* Chat */}
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>

        {/* Chat header */}
        <div style={{ padding: "12px 18px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 10, background: C.card }}>
          <Avatar size={32} />
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 13, fontWeight: 500, color: C.text }}>Sheena Lakshmi</p>
            <p style={{ fontSize: 11, color: C.muted }}>AI-powered · Answers drawn from real work &amp; experience</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5, background: C.gLo, border: "1px solid rgba(78,201,138,0.2)", padding: "3px 9px", borderRadius: 10 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: C.green }} />
            <span style={{ fontSize: 10, color: "rgba(78,201,138,0.8)" }}>Active</span>
          </div>
        </div>

        {/* Messages */}
        <div style={{ padding: "20px 18px", minHeight: 280, maxHeight: 440, overflowY: "auto", display: "flex", flexDirection: "column", gap: 12 }}>
          {msgs.map((m, i) => (
            <div key={i} className="sl-msg" style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start", gap: 9, alignItems: "flex-start" }}>
              {m.role === "assistant" && <Avatar size={26} />}
              <div style={{
                maxWidth: "82%",
                background: m.role === "user" ? C.accent : C.card,
                color: m.role === "user" ? C.bg : C.text,
                padding: "11px 14px",
                borderRadius: m.role === "user" ? "16px 4px 16px 16px" : "4px 16px 16px 16px",
                fontSize: 13, lineHeight: 1.75, whiteSpace: "pre-wrap", wordBreak: "break-word",
              }}>{m.content}</div>
            </div>
          ))}
          {busy && (
            <div className="sl-msg" style={{ display: "flex", gap: 9 }}>
              <Avatar size={26} />
              <div style={{ background: C.card, padding: "11px 14px", borderRadius: "4px 16px 16px 16px" }}>
                <Dots />
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Chips */}
        {freshChat && (
          <div style={{ padding: "0 18px 12px", display: "flex", gap: 7, flexWrap: "wrap" }}>
            {CHIPS.map(c => <button key={c} className="sl-chip" onClick={() => send(c)}>{c}</button>)}
          </div>
        )}

        {/* Input */}
        <div style={{ borderTop: `1px solid ${C.border}`, padding: "11px 14px", display: "flex", gap: 9, alignItems: "flex-end", background: C.card }}>
          <textarea ref={inputRef} className="sl-ta" rows={1} value={input}
            onChange={e => setInput(e.target.value)} onKeyDown={onKey}
            placeholder="Ask me about my work, process, or availability…" />
          <button className="sl-send" onClick={() => send(input)} disabled={!input.trim() || busy}>↑</button>
        </div>
      </div>

      <p style={{ fontSize: 11, color: "rgba(228,221,208,0.18)", marginTop: 12, letterSpacing: "0.08em", textAlign: "center" }}>
        Powered by Claude · All answers reflect Sheena's real experience
      </p>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// CLASSIC PORTFOLIO MODE
// ═══════════════════════════════════════════════════════════════════
function ClassicMode({ onAskAbout }) {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => setExpanded(prev => prev === id ? null : id);

  return (
    <div className="sl-page-in" style={{ maxWidth: 900, margin: "0 auto", padding: "44px 24px 80px" }}>

      {/* ── ABOUT ── */}
      <section style={{ marginBottom: 72 }}>
        <div style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: 14 }}>
              About
            </p>
            <h1 style={{ fontFamily: SERIF, fontSize: "clamp(28px,4vw,48px)", fontWeight: 600, lineHeight: 1.18, marginBottom: 18 }}>
              Sheena Lakshmi
            </h1>
            <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.9, marginBottom: 16, maxWidth: 560 }}>
              I help companies succeed by transforming complex software interactions into clear, user-focused experiences led by content — driving adoption and business impact.
            </p>
            <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.9, maxWidth: 560 }}>
              With 16+ years in enterprise writing and 8+ years leading UX and content transformation at Fortune 500 companies, I've built and scaled high-performing teams, implemented enterprise-wide content strategy frameworks, and delivered measurable results across global markets. Expert in ethical AI, accessibility, digital adoption, and creating measurable user and business outcomes.
            </p>
            <div style={{ display: "flex", gap: 20, marginTop: 24, flexWrap: "wrap" }}>
              <a href="mailto:sheenalakshmi@gmail.com" className="sl-nav-link" style={{ color: C.accent }}>sheenalakshmi@gmail.com ↗</a>
              <a href="https://www.linkedin.com/in/sheena-lakshmi-232a425/" target="_blank" rel="noreferrer" className="sl-nav-link">LinkedIn ↗</a>
              <a href="tel:+919845807918" className="sl-nav-link">+91 98458 07918</a>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, flexShrink: 0 }}>
            {[["16+","Years"], ["37%","YoY growth"], ["8+","Designers led"], ["4.8","Workshop NPS"]].map(([n, l]) => (
              <div key={l} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "18px 14px", textAlign: "center", minWidth: 100 }}>
                <p style={{ fontFamily: SERIF, fontSize: 30, fontWeight: 600, color: C.accent, lineHeight: 1 }}>{n}</p>
                <p style={{ fontSize: 9, color: C.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 6, lineHeight: 1.4 }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section style={{ marginBottom: 72 }}>
        <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: 28 }}>Experience</p>
        {[
          { role: "UX Design Manager (Content)", co: "SAP Labs", period: "Current", loc: "Bengaluru, India" },
          { role: "Content Design Lead & Strategist", co: "Intuit (QuickBooks)", period: "3 years", loc: "Remote / Global" },
          { role: "Content Design Strategist", co: "SAP Analytics", period: "Earlier", loc: "Bengaluru, India" },
          { role: "DT Coach & Senior Content Designer", co: "SAP Labs", period: "Earlier", loc: "Bengaluru, India" },
        ].map((e, i) => (
          <div key={i} className="sl-exp-row">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <p style={{ fontSize: 15, fontWeight: 500, color: C.text, marginBottom: 3 }}>{e.role}</p>
                <p style={{ fontSize: 12, color: C.muted }}>{e.co} · {e.loc}</p>
              </div>
              <span style={{ fontSize: 11, color: C.muted, letterSpacing: "0.08em", flexShrink: 0, marginLeft: 16 }}>{e.period}</span>
            </div>
          </div>
        ))}
      </section>

      {/* ── CASE STUDIES ── */}
      <section style={{ marginBottom: 72 }}>
        <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: 10 }}>
          Case Studies
        </p>
        <p style={{ fontSize: 12, color: C.muted, marginBottom: 28, lineHeight: 1.7 }}>
          Click any project to expand details and access work samples. Use <strong style={{ color: C.accent, fontWeight: 400 }}>Ask Sheena</strong> to dive deeper.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {PROJECTS.map(p => {
            const isOpen = expanded === p.id;
            return (
              <div key={p.id} className="sl-proj-card">
                {/* Card header — always visible */}
                <div onClick={() => toggle(p.id)} style={{ padding: "18px 22px", display: "flex", alignItems: "center", gap: 16 }}>
                  <span style={{ fontFamily: SANS, fontSize: 11, color: C.muted, letterSpacing: "0.1em", flexShrink: 0 }}>{p.id}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                      <h3 style={{ fontFamily: SERIF, fontSize: 20, fontWeight: 600, color: C.text, lineHeight: 1.2 }}>{p.title}</h3>
                      <span style={{ fontSize: 11, color: C.muted }}>{p.company}</span>
                    </div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8 }}>
                      {p.tags.map(t => <Tag key={t} label={t} />)}
                    </div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0, paddingLeft: 12 }}>
                    <p style={{ fontFamily: SERIF, fontSize: 26, fontWeight: 600, color: C.accent, lineHeight: 1 }}>{p.metric}</p>
                    <p style={{ fontSize: 9, color: C.muted, maxWidth: 100, textAlign: "right", lineHeight: 1.4, marginTop: 3 }}>{p.metricLabel}</p>
                  </div>
                  <div style={{ flexShrink: 0, color: C.muted, fontSize: 18, marginLeft: 12, transition: "transform 0.25s", transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}>+</div>
                </div>

                {/* Expanded details */}
                {isOpen && (
                  <div style={{ padding: "0 22px 22px", borderTop: `1px solid ${C.border}` }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 220px", gap: 24, paddingTop: 20 }}>

                      {/* Description */}
                      <div>
                        <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: C.muted, marginBottom: 8 }}>Overview</p>
                        <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.85, marginBottom: 20 }}>{p.description}</p>

                        {/* Work samples */}
                        {p.samples.length > 0 && (
                          <div>
                            <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: C.muted, marginBottom: 4 }}>Work Samples</p>
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                              {p.samples.map(s => (
                                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="sl-sample">
                                  <span style={{ fontSize: 10 }}>{s.type === "video" ? "▶" : "PDF"}</span>
                                  {s.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Ask AI button */}
                        <div style={{ marginTop: 18 }}>
                          <button className="sl-ask" onClick={() => onAskAbout(p.askPrompt)}>
                            ✦ Ask Sheena about this project
                          </button>
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: C.muted, marginBottom: 10 }}>Results</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          {p.results.map(r => (
                            <div key={r.label} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, padding: "12px 14px" }}>
                              <p style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 600, color: C.accent, lineHeight: 1 }}>{r.value}</p>
                              <p style={{ fontSize: 10, color: C.muted, letterSpacing: "0.06em", marginTop: 4, lineHeight: 1.4 }}>{r.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section style={{ marginBottom: 72 }}>
        <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: 28 }}>Skills & Tools</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
          {SKILLS_LIST.map(sg => (
            <div key={sg.group}>
              <p style={{ fontSize: 11, color: C.muted, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10 }}>{sg.group}</p>
              <div>
                {sg.items.map(s => <span key={s} className="sl-skill-tag">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── RECOGNITION ── */}
      <section style={{ marginBottom: 72 }}>
        <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: 28 }}>Recognition</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12 }}>
          {[
            { award: "Intuit Superstar Award", detail: "Customer Obsession · Q4 2023" },
            { award: "Top Talent", detail: "SAP Labs recognition" },
            { award: "Top Mentor on ADPList", detail: "Recognised twice in a row" },
            { award: "Workshop NPS 4.8+ / 5", detail: "Across all trainings and workshops" },
          ].map(a => (
            <div key={a.award} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "18px 20px" }}>
              <p style={{ fontFamily: SERIF, fontSize: 17, fontWeight: 600, color: C.text, marginBottom: 5 }}>{a.award}</p>
              <p style={{ fontSize: 12, color: C.muted }}>{a.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section>
        <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: 20 }}>Get in Touch</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(26px,3.5vw,44px)", fontWeight: 400, lineHeight: 1.2, marginBottom: 16 }}>
              Let's make something great together.
            </h2>
            <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.85 }}>
              Open to senior UX leadership, content strategy, and design management opportunities. Based in Bengaluru — open to global and remote roles.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              { label: "Email", value: "sheenalakshmi@gmail.com", href: "mailto:sheenalakshmi@gmail.com" },
              { label: "LinkedIn", value: "/in/sheena-lakshmi-232a425", href: "https://www.linkedin.com/in/sheena-lakshmi-232a425/" },
              { label: "Phone", value: "+91 98458 07918", href: "tel:+919845807918" },
            ].map(c => (
              <div key={c.label} style={{ padding: "16px 0", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 10, color: C.muted, letterSpacing: "0.2em", textTransform: "uppercase" }}>{c.label}</span>
                <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="sl-nav-link" style={{ color: C.text }}>
                  {c.value} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// ROOT
// ═══════════════════════════════════════════════════════════════════
export default function SheenaPortfolio() {
  const [mode, setMode]   = useState("ai"); // "ai" | "classic"
  const [msgs, setMsgs]   = useState([{
    role: "assistant",
    content: "Hi! I'm Sheena — a UX Design Manager (Content) at SAP Labs with 16+ years of experience turning complex enterprise software into clear, human-centred experiences.\n\nI've led content strategy at Intuit and SAP, mentored teams of 8+, and delivered measurable growth across global products.\n\nAsk me anything — or switch to Portfolio View to browse my work and samples. 👋",
  }]);
  const [busy, setBusy]   = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    const s = document.createElement("style");
    s.textContent = STYLES;
    document.head.appendChild(s);
    return () => document.head.removeChild(s);
  }, []);

  // When user clicks "Ask Sheena" from classic mode — switch to AI, fire question
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
        body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1000, system: SYSTEM, messages: history }),
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
    <div style={{ background: C.bg, color: C.text, minHeight: "100vh", fontFamily: SANS }}>

      {/* ── NAV ── */}
      <nav style={{
        width: "100%", padding: "14px 40px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        borderBottom: `1px solid ${C.border}`,
        background: "rgba(11,13,18,0.95)", backdropFilter: "blur(16px)",
        position: "sticky", top: 0, zIndex: 30,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontFamily: SERIF, fontSize: 20, fontWeight: 600, letterSpacing: "0.01em" }}>
            Sheena Lakshmi
          </span>
          <span style={{ fontSize: 11, color: C.muted, letterSpacing: "0.08em", display: "none" }}>
            UX Design Manager · Content
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <StatusBadge />
          <ModeToggle mode={mode} setMode={setMode} />
          <a href="mailto:sheenalakshmi@gmail.com" className="sl-nav-link">Contact ↗</a>
        </div>
      </nav>

      {/* ── PAGE CONTENT ── */}
      {mode === "ai"
        ? <AIMode
            msgs={msgs} setMsgs={setMsgs}
            busy={busy} setBusy={setBusy}
            input={input} setInput={setInput}
            onAsk={handleAskAbout}
          />
        : <ClassicMode onAskAbout={handleAskAbout} />
      }
    </div>
  );
}

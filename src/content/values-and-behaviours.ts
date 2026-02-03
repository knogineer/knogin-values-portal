export type LevelId = 'l1' | 'l2' | 'l3' | 'l4' | 'l5' | 'l6';

export type DimensionId =
  | 'impact'
  | 'delivery'
  | 'craft'
  | 'collaboration'
  | 'security'
  | 'growth';

export interface ValueItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly behaviours: readonly string[];
}

export interface LevelDimension {
  readonly id: DimensionId;
  readonly title: string;
  readonly hint: string;
}

export interface LevelExpectations {
  readonly title: string;
  readonly tagline: string;
  readonly summary: string;
  readonly expectations: Readonly<Record<DimensionId, readonly string[]>>;
}

export interface RoleFamily {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly examples: readonly string[];
  readonly typicalTitlesByLevel: Readonly<Record<LevelId, readonly string[]>>;
  readonly serviceLens: readonly string[];
}

export interface OperationalRole {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly accountabilities: readonly string[];
  readonly whatTheyNeed: readonly string[];
  readonly whatKnoginProvides: readonly string[];
}

export interface OperationalRoleFamily {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly disclaimer: string;
  readonly roles: readonly OperationalRole[];
  readonly serviceLens: readonly string[];
  readonly relatedServices?: readonly Array<{ label: string; href: string }>;
}

export const content = {
  site: {
    name: 'Knogin',
    portalName: 'Values & Behaviours',
    description:
      "A public view of how we work and what \"great\" looks like across the roles and mission environments we serve.",
    primaryCtaInternal: { label: 'Explore role expectations', href: '#role-expectations' },
    primaryCtaExternal: { label: 'Explore operational roles', href: '#operational-roles' },
    secondaryCta: { label: 'Read our values', href: '#values' },
  },

  values: [
    {
      id: 'mission-first',
      title: 'Mission first',
      description: 'We optimize for real operational outcomes, not internal vanity metrics.',
      behaviours: [
        'Prioritize the user in the field: speed, reliability, and clear workflows.',
        'Make trade-offs explicit and document why.',
        'Escalate risk early when the mission could be impacted.',
        'Ship improvements that reduce cognitive load.',
      ],
    },
    {
      id: 'evidence-integrity',
      title: 'Evidence and integrity',
      description: 'We produce work that stands up to scrutiny: auditors, courts, and peers.',
      behaviours: [
        'Separate fact, inference, and uncertainty in every output.',
        'Preserve provenance: sources, timestamps, and chain-of-custody where applicable.',
        'Prefer repeatable processes over one-off heroics.',
        'Correct errors quickly and visibly.',
      ],
    },
    {
      id: 'secure-by-default',
      title: 'Secure by default',
      description: 'Security, privacy, and access control are design constraints, not an afterthought.',
      behaviours: [
        'Assume sensitive data. Use least privilege and auditability.',
        'Threat model new features and integrations.',
        'Treat secrets, logs, and analytics as security surfaces.',
        'Build safe failure modes: degrade gracefully, never silently expose data.',
      ],
    },
    {
      id: 'clarity-over-complexity',
      title: 'Clarity over complexity',
      description: 'Simple, explainable systems scale better than clever ones.',
      behaviours: [
        'Write readable code, docs, and runbooks.',
        'Prefer standard formats and boring tech when possible.',
        'Name things well: concepts, interfaces, and decisions.',
        'Make workflows understandable to non-engineers.',
      ],
    },
    {
      id: 'own-the-outcome',
      title: 'Own the outcome',
      description: 'We take responsibility end-to-end: from intent to impact.',
      behaviours: [
        'Close the loop with users and stakeholders.',
        'Measure what matters: accuracy, latency, uptime, and adoption.',
        'Remove blockers and reduce operational risk proactively.',
        'Leave systems better than you found them.',
      ],
    },
    {
      id: 'build-for-humans',
      title: 'Build for humans',
      description: 'We build for people under pressure, across abilities, languages, and constraints.',
      behaviours: [
        'Design for accessibility and inclusive language.',
        'Respect time zones and operational realities.',
        'Communicate with empathy and precision.',
        'Optimize for calm, usable interfaces under stress.',
      ],
    },
  ] satisfies readonly ValueItem[],

  roleExpectations: {
    title: 'Role expectations',
    subtitle:
      'One framework that works across developers, PSAP/ECC operations, security command centers, and RTCC teams.',
    note:
      'Titles vary by discipline and geography. The throughline stays consistent: outcomes, defensibility, and trust.',
  },

  dimensions: [
    {
      id: 'impact',
      title: 'Impact and scope',
      hint: 'What you own and how far your decisions reach.',
    },
    {
      id: 'delivery',
      title: 'Execution and delivery',
      hint: 'How you plan, execute, and ship.',
    },
    {
      id: 'craft',
      title: 'Craft and quality',
      hint: 'Correctness, maintainability, and professionalism.',
    },
    {
      id: 'collaboration',
      title: 'Collaboration',
      hint: 'How you communicate, align, and work with others.',
    },
    {
      id: 'security',
      title: 'Security and trust',
      hint: 'How you protect data, users, and the organization.',
    },
    {
      id: 'growth',
      title: 'Growth and leadership',
      hint: 'How you learn, mentor, and raise the bar.',
    },
  ] satisfies readonly LevelDimension[],

  levels: {
    l1: {
      title: 'L1 - Foundation',
      tagline: 'Learns fast, delivers carefully.',
      summary:
        'Delivers well-scoped tasks with guidance. Focuses on fundamentals and reliable execution.',
      expectations: {
        impact: [
          'Owns small tasks and follows established patterns.',
          'Asks clarifying questions early and avoids guessing.',
          'Escalates uncertainty quickly when safety, privacy, or reliability may be affected.',
        ],
        delivery: [
          'Breaks work into small steps and communicates progress.',
          'Uses checklists, tests, or validation steps as appropriate.',
          'Keeps work visible: drafts, early reviews, and quick iterations.',
        ],
        craft: [
          'Produces readable changes with clear naming and intent.',
          'Learns and follows local conventions (runbooks, SOPs, code style).',
          'Fixes issues found in their own work before handoff.',
        ],
        collaboration: [
          'Communicates clearly and respectfully in writing.',
          'Accepts feedback and iterates quickly.',
          'Seeks context from operators, analysts, or stakeholders before making assumptions.',
        ],
        security: [
          'Handles data carefully and follows access control rules.',
          'Asks before sharing sensitive information.',
          'Learns common security pitfalls relevant to the role.',
        ],
        growth: [
          'Keeps a learning plan and asks for actionable feedback.',
          'Documents what they learned for the team.',
          'Builds habits: notes, runbooks, and checklists.',
        ],
      },
    },
    l2: {
      title: 'L2 - Practitioner',
      tagline: 'Owns small outcomes end-to-end.',
      summary:
        'Independently delivers a feature slice, workflow improvement, or analysis with minimal supervision.',
      expectations: {
        impact: [
          'Owns a small outcome from definition to delivery.',
          'Understands users and constraints well enough to propose options.',
          'Flags trade-offs and risks with sensible recommendations.',
        ],
        delivery: [
          'Plans work, sets expectations, and meets commitments.',
          'Uses instrumentation, logs, QA, or operational checks to validate outcomes.',
          'Coordinates small changes across systems when needed.',
        ],
        craft: [
          'Writes maintainable work with tests, SOP updates, and clear documentation.',
          'Improves existing systems instead of only adding new ones.',
          'Uses standards and shared components to reduce bespoke complexity.',
        ],
        collaboration: [
          'Works effectively across functions and time zones.',
          'Writes clear updates: what changed, why, and how to operate it.',
          'Contributes to constructive reviews and decisions.',
        ],
        security: [
          'Applies secure defaults and least privilege consistently.',
          'Understands how work affects privacy and compliance.',
          'Treats observability data as potentially sensitive.',
        ],
        growth: [
          'Mentors peers informally through pairing, shadowing, or reviews.',
          'Builds reusable knowledge: templates, runbooks, and playbooks.',
          'Owns a skill area and keeps it current.',
        ],
      },
    },
    l3: {
      title: 'L3 - Senior',
      tagline: 'Leads delivery, raises quality.',
      summary:
        'Owns substantial outcomes, anticipates risk, and mentors others. Drives alignment across stakeholders and services.',
      expectations: {
        impact: [
          'Owns outcomes that span multiple components, teams, or shifts.',
          'Defines success metrics and validates impact after launch.',
          'Identifies systemic issues and proposes durable fixes.',
        ],
        delivery: [
          'Leads execution: decomposes work, sequences delivery, and mitigates risk.',
          'Manages incidents with calm coordination and follow-up.',
          'Creates operational readiness: documentation, alerts, and training.',
        ],
        craft: [
          'Sets a high bar for correctness, performance, and maintainability.',
          'Reviews work for architecture, risk, and long-term cost.',
          'Designs interfaces, SOPs, and workflows that are observable and testable.',
        ],
        collaboration: [
          'Aligns stakeholders with clear narratives and decision records.',
          'Handles disagreement productively and drives closure.',
          'Builds strong cross-functional relationships and feedback loops.',
        ],
        security: [
          'Threat models new work and ensures safe defaults.',
          'Designs for auditability and evidence integrity where needed.',
          'Raises security concerns early and helps resolve them.',
        ],
        growth: [
          'Mentors and coaches others with actionable feedback.',
          'Uplifts team practices: reviews, quality gates, and documentation.',
          'Builds domain expertise and shares it broadly.',
        ],
      },
    },
    l4: {
      title: 'L4 - Lead',
      tagline: 'Shapes direction, unblocks teams.',
      summary:
        'Leads multi-stream work and sets standards. Ensures delivery, operational excellence, and consistent decision-making.',
      expectations: {
        impact: [
          'Owns outcomes across multiple teams, centers, or domains.',
          'Sets direction and aligns work to mission and business priorities.',
          'Balances near-term delivery with long-term health.',
        ],
        delivery: [
          'Runs initiatives with clear milestones, risks, and dependencies.',
          'Builds repeatable delivery systems: templates, tooling, and automation.',
          'Ensures incident readiness and post-incident learning.',
        ],
        craft: [
          'Defines standards and enforces them through review and tooling.',
          'Guides architecture decisions and de-risks major changes.',
          'Invests in observability, training, and operational maturity.',
        ],
        collaboration: [
          'Coordinates across functions: product, engineering, operations, and security.',
          'Creates clarity in complex environments through strong communication.',
          'Builds alignment without relying on authority.',
        ],
        security: [
          'Treats security and compliance as non-negotiable delivery constraints.',
          'Ensures access control, logging, and auditability are consistent.',
          'Champions secure-by-design patterns and safe operational practices.',
        ],
        growth: [
          'Develops people through structured mentoring and feedback.',
          'Builds a culture of ownership and continuous improvement.',
          'Creates opportunities for others to lead.',
        ],
      },
    },
    l5: {
      title: 'L5 - Principal',
      tagline: 'Sets strategy, scales excellence.',
      summary:
        'Defines long-term direction and strengthens the operating system. Influences across teams and product lines.',
      expectations: {
        impact: [
          'Owns outcomes with org-wide implications and multi-year horizon.',
          'Identifies the highest leverage problems and solves them.',
          'Defines platform strategy with measurable outcomes.',
        ],
        delivery: [
          'Turns strategy into executable roadmaps and governance.',
          'Improves throughput by simplifying systems and decisions.',
          'Builds resilience into the organization: standards, training, and playbooks.',
        ],
        craft: [
          'Sets architectural direction and ensures coherence across services.',
          'Raises the quality bar through patterns, reviews, and education.',
          'Builds systems that are explainable, testable, and defensible.',
        ],
        collaboration: [
          'Aligns diverse stakeholders around shared constraints and goals.',
          'Represents Knogin credibly with partners and customers.',
          'Creates clear operating models for cross-team work.',
        ],
        security: [
          'Defines security posture and ensures it is embedded in delivery.',
          'Anticipates regulatory and compliance needs and builds ahead of them.',
          'Treats trust as a feature: privacy, safety, and transparency.',
        ],
        growth: [
          'Grows leaders and experts across multiple disciplines.',
          'Builds learning systems: documentation, training, and communities of practice.',
          'Creates leverage by enabling others to succeed.',
        ],
      },
    },
    l6: {
      title: 'L6 - Director',
      tagline: 'Accountable for outcomes at scale.',
      summary:
        'Leads teams and leaders, aligns strategy, and ensures delivery, security, and culture across domains.',
      expectations: {
        impact: [
          'Sets priorities and owns outcomes for a major business area.',
          'Ensures teams deliver measurable mission and customer value.',
          'Balances strategy, execution, and organizational health.',
        ],
        delivery: [
          'Builds operating cadence: planning, reviews, incidents, and retrospectives.',
          'Allocates resources effectively and manages cross-team dependencies.',
          'Ensures predictable delivery and operational excellence.',
        ],
        craft: [
          'Holds the bar for quality, safety, and professional standards.',
          'Funds technical debt reduction and reliability work.',
          'Creates environments where teams can do great work.',
        ],
        collaboration: [
          'Communicates strategy clearly and repeatedly across the organization.',
          'Builds partnerships and resolves conflict with empathy and firmness.',
          'Represents Knogin with integrity to customers and stakeholders.',
        ],
        security: [
          'Owns security and compliance outcomes for the organization.',
          'Ensures governance, risk management, and audit readiness.',
          'Makes trust measurable and operational.',
        ],
        growth: [
          'Develops leaders and builds succession plans.',
          'Shapes culture through hiring, coaching, and clear expectations.',
          'Creates systems that make excellence repeatable.',
        ],
      },
    },
  } satisfies Readonly<Record<LevelId, LevelExpectations>>,

  knoginRoleFamilies: [
    {
      id: 'developers-and-integrations',
      title: 'Developers and integrations',
      description: 'Platform builders: product engineering, data, SRE, integration engineering.',
      examples: [
        'API and data integrations',
        'Reliability and incident response',
        'Observability and auditability',
        'Automation and deployment safety',
      ],
      typicalTitlesByLevel: {
        l1: ['Junior developer', 'Associate engineer', 'Implementation engineer (junior)'],
        l2: ['Software engineer', 'Integration engineer', 'SRE (mid)'],
        l3: ['Senior engineer', 'Senior integration engineer', 'Senior SRE'],
        l4: ['Staff engineer', 'Tech lead', 'Lead SRE'],
        l5: ['Principal engineer', 'Principal architect'],
        l6: ['Engineering director', 'Director of platform'],
      },
      serviceLens: [
        'APIs and data contracts are part of evidence integrity.',
        'Every integration must be observable, auditable, and secure-by-default.',
        'Operational users need calm workflows and safe failure modes.',
      ],
    },
    {
      id: 'delivery-and-operations',
      title: 'Delivery and operations',
      description: 'Implementation, customer delivery, program operations, and incident leadership.',
      examples: [
        'Solution design and deployment planning',
        'Operational readiness and training',
        'Incident leadership and stakeholder comms',
        'Continuous improvement via feedback loops',
      ],
      typicalTitlesByLevel: {
        l1: ['Implementation associate', 'Support specialist (junior)'],
        l2: ['Implementation specialist', 'Customer support specialist'],
        l3: ['Senior implementation specialist', 'Operations lead (shift)'],
        l4: ['Delivery lead', 'Program lead', 'Incident commander (internal)'],
        l5: ['Principal delivery lead', 'Operations program owner'],
        l6: ['Director of delivery', 'Director of operations'],
      },
      serviceLens: [
        'Operational excellence is a product feature: runbooks, training, and readiness.',
        'We speak in outcomes, risks, and mitigations - not just tasks.',
        'We never hide risk; we surface it early with options.',
      ],
    },
    {
      id: 'security-and-trust',
      title: 'Security and trust',
      description: 'Security engineering, privacy, compliance, governance, and audit readiness.',
      examples: [
        'Threat modeling and security reviews',
        'Access control and tenant isolation',
        'Auditability, evidence integrity, and logging',
        'Policy-driven governance and compliance posture',
      ],
      typicalTitlesByLevel: {
        l1: ['Security analyst (junior)'],
        l2: ['Security analyst', 'Compliance analyst'],
        l3: ['Senior security engineer', 'GRC lead'],
        l4: ['Security lead', 'Trust lead'],
        l5: ['Principal security architect', 'Principal GRC'],
        l6: ['Security director', 'Director of trust & compliance'],
      },
      serviceLens: [
        'Trust is an operational outcome, not a marketing claim.',
        'Auditability and least privilege are non-negotiable.',
        'Incident handling needs clear handoffs and post-incident learning.',
      ],
    },
    {
      id: 'intelligence-and-analysis',
      title: 'Intelligence and analysis',
      description: 'Applied analysis across investigations, intelligence fusion, and decision support.',
      examples: ['Entity resolution', 'Link analysis', 'OSINT workflows', 'Briefings and reporting'],
      typicalTitlesByLevel: {
        l1: ['Research associate', 'Junior analyst'],
        l2: ['Analyst', 'Intelligence specialist'],
        l3: ['Senior analyst', 'Case coordinator'],
        l4: ['Lead analyst', 'Intelligence lead'],
        l5: ['Principal analyst', 'Program architect (analysis)'],
        l6: ['Director of intelligence', 'Director of analysis'],
      },
      serviceLens: [
        'Separate fact, inference, and uncertainty in every output.',
        'Make analysis defensible and reproducible.',
        'Collaboration must preserve provenance and access control.',
      ],
    },
    {
      id: 'product-and-design',
      title: 'Product and design',
      description: 'Product strategy, UX, research, and documentation for mission-critical users.',
      examples: [
        'Operational UX and workflow design',
        'User research with PSAP/ECC, RTCC, and security teams',
        'Product discovery and roadmap prioritization',
        'Content design, documentation, and enablement',
      ],
      typicalTitlesByLevel: {
        l1: ['Associate product manager', 'Junior UX designer', 'Documentation specialist (junior)'],
        l2: ['Product manager', 'UX designer', 'Technical writer'],
        l3: ['Senior product manager', 'Senior UX designer', 'Research lead'],
        l4: ['Lead product manager', 'Design lead', 'Head of product (small org)'],
        l5: ['Principal product manager', 'Principal designer'],
        l6: ['Director of product', 'Director of design'],
      },
      serviceLens: [
        'Design for humans under pressure: clarity, speed, and safe defaults.',
        'Accessibility is a first-class requirement, not a retrofit.',
        'Outcomes matter more than outputs; validate impact after launch.',
      ],
    },
    {
      id: 'commercial-and-partnerships',
      title: 'Commercial and partnerships',
      description: 'Customer success, partnerships, and go-to-market for sensitive mission environments.',
      examples: [
        'Mission-fit discovery and requirements translation',
        'Customer success and long-term adoption',
        'Partnerships, procurement, and vendor governance',
        'Training, enablement, and stakeholder comms',
      ],
      typicalTitlesByLevel: {
        l1: ['BD associate', 'Customer success associate', 'Sales development rep'],
        l2: ['Account executive', 'Customer success manager', 'Partnerships manager'],
        l3: ['Senior account executive', 'Senior customer success manager', 'Partner lead'],
        l4: ['Commercial lead', 'Strategic accounts lead'],
        l5: ['Principal partnerships', 'Head of commercial'],
        l6: ['Commercial director', 'Director of partnerships'],
      },
      serviceLens: [
        'Never oversell: trust is built by accuracy, not hype.',
        'Security and governance are part of customer value, not a blocker.',
        'Clear expectations prevent risk in procurement, rollout, and operations.',
      ],
    },
  ] satisfies readonly RoleFamily[],

  operationalRoleFamilies: [
    {
      id: 'psap-ecc',
      title: 'PSAP / ECC (emergency communications)',
      description: 'Call taking, dispatch, supervision, and center leadership.',
      disclaimer:
        'These are product-design personas, not employment guidelines. They describe what our systems must support.',
      roles: [
        {
          id: 'call-taker',
          title: 'Call taker',
          description: 'First contact: triage, calm, and accurate capture under pressure.',
          accountabilities: [
            'Triage rapidly and capture critical details with minimal rework.',
            'Maintain composure and clarity under stress.',
            'Create clean, auditable records that stand up later.',
          ],
          whatTheyNeed: [
            'Fast workflows with minimal clicks and low cognitive load.',
            'Clear prompts and validation for critical fields.',
            'Resilience when information is incomplete or changing.',
          ],
          whatKnoginProvides: [
            'Structured intake and guided workflows (policy-aligned).',
            'Reliable audit trails and evidence-grade recordkeeping.',
            'Graceful degradation when dependencies fail.',
          ],
        },
        {
          id: 'dispatcher',
          title: 'Dispatcher',
          description: 'Coordination: units, priorities, and updates in real time.',
          accountabilities: [
            'Coordinate resources and maintain an accurate operational picture.',
            'Prioritize based on policy and real-time risk.',
            'Keep handoffs clean between shifts and agencies.',
          ],
          whatTheyNeed: [
            'Real-time updates and clear status visibility.',
            'Strong interoperability and integration with adjacent systems.',
            'Decision support without hiding uncertainty.',
          ],
          whatKnoginProvides: [
            'Streaming updates, shared operational context, and collaboration.',
            'Integrations that are observable, auditable, and resilient.',
            'Clear confidence and provenance when automation is involved.',
          ],
        },
        {
          id: 'shift-supervisor',
          title: 'Shift supervisor',
          description: 'Quality, policy adherence, and real-time escalation.',
          accountabilities: [
            'Make escalation decisions and coordinate multi-incident load.',
            'Coach, review, and improve quality under real conditions.',
            'Ensure after-action learning is captured.',
          ],
          whatTheyNeed: [
            'Dashboards that show workload, risk, and quality signals.',
            'Audit-friendly review tools and replayability.',
            'Clear incident timelines with provenance.',
          ],
          whatKnoginProvides: [
            'Operational metrics with transparent definitions.',
            'Evidence-grade timelines and defensible records.',
            'Workflows designed for calm coordination under stress.',
          ],
        },
        {
          id: 'center-leadership',
          title: 'Center leadership',
          description: 'Accountable for readiness, compliance, and outcomes.',
          accountabilities: [
            'Operational readiness: staffing, training, and SOPs.',
            'Governance: access control, policy, and audit readiness.',
            'Performance outcomes and stakeholder accountability.',
          ],
          whatTheyNeed: [
            'Clear reporting and audit exports with provenance.',
            'Governance controls and least-privilege access models.',
            'Predictable deployment and change management.',
          ],
          whatKnoginProvides: [
            'Governance and auditability as first-class capabilities.',
            'Secure-by-default controls with defensible logging.',
            'Deployment safety: staging, feature flags, and rollback paths.',
          ],
        },
      ],
      serviceLens: [
        'Speed matters, but correctness matters more.',
        'Audit trails must be automatic - not a separate workflow.',
        'Interfaces must be usable under stress and with partial information.',
      ],
      relatedServices: [
        { label: 'Emergency Response', href: 'https://knogin.com/en/products/emergency-response' },
        { label: 'Collaboration & Communications', href: 'https://knogin.com/en/products/collaboration-communications' },
      ],
    },
    {
      id: 'rtcc',
      title: 'RTCC (real-time intelligence and investigations)',
      description: 'Real-time crime centers, intelligence fusion, and investigation support.',
      disclaimer:
        'These personas describe the workflows we design for and the constraints we respect (auditability, provenance, access control).',
      roles: [
        {
          id: 'rtcc-analyst',
          title: 'Analyst',
          description: 'Finds signal fast, with defensible reasoning.',
          accountabilities: [
            'Fuse sources and surface the highest-confidence signal.',
            'Separate fact, inference, and uncertainty.',
            'Provide briefings that are defensible and reproducible.',
          ],
          whatTheyNeed: [
            'Fast search and entity resolution with clear provenance.',
            'Explainable graph/link reasoning and reversible merges.',
            'Collaboration without losing chain-of-custody.',
          ],
          whatKnoginProvides: [
            'Entity profiles, graph analysis, and explainable links.',
            'Provenance-first analysis and audit-ready reporting.',
            'Controlled collaboration and permissions.',
          ],
        },
        {
          id: 'rtcc-lead',
          title: 'Lead analyst / supervisor',
          description: 'Quality control, prioritization, and coordination.',
          accountabilities: [
            'Set triage priorities and coordinate multi-case load.',
            'Ensure analytic quality and consistency.',
            'Coach analysts and standardize outputs.',
          ],
          whatTheyNeed: [
            'Review workflows and templated reporting.',
            'Clear operational metrics and workload visibility.',
            'Governance: access, logging, and audit trails.',
          ],
          whatKnoginProvides: [
            'Workflow templates and evidence-ready exports.',
            'Operational reporting and activity timelines.',
            'Built-in governance controls.',
          ],
        },
        {
          id: 'rtcc-leadership',
          title: 'Program leadership',
          description: 'Outcome accountability and multi-agency trust.',
          accountabilities: [
            'Define standards for defensible analysis.',
            'Coordinate multi-agency sharing with clear governance.',
            'Measure impact and manage risk.',
          ],
          whatTheyNeed: [
            'Strong tenant boundaries and sharing controls.',
            'Audit exports and evidence integrity.',
            'Transparent system behavior for stakeholders.',
          ],
          whatKnoginProvides: [
            'Governed sharing and access control patterns.',
            'Evidence integrity and reproducible workflows.',
            'Transparent reporting with provenance and uncertainty.',
          ],
        },
      ],
      serviceLens: [
        'Make analysis defensible and reproducible, not just fast.',
        'Expose uncertainty and provenance explicitly.',
        'Collaboration must preserve access control and evidence integrity.',
      ],
      relatedServices: [
        { label: 'Entity Profiles', href: 'https://knogin.com/en/products/entity-profiles' },
        { label: 'Graph Analysis', href: 'https://knogin.com/en/products/graph-analysis' },
        { label: 'Intelligence & OSINT', href: 'https://knogin.com/en/products/intelligence-osint' },
      ],
    },
    {
      id: 'security-command-center',
      title: 'Security command centers (SOC / SecOps)',
      description: 'Detection, response, governance, and reporting.',
      disclaimer:
        'These personas focus on trust outcomes: least privilege, auditability, and safe operations under pressure.',
      roles: [
        {
          id: 'soc-analyst',
          title: 'SOC analyst',
          description: 'Triage, investigate, and escalate safely.',
          accountabilities: [
            'Triage alerts and validate signal vs noise.',
            'Escalate with clear evidence and timelines.',
            'Coordinate response while maintaining audit trails.',
          ],
          whatTheyNeed: [
            'High-signal detection with explainable context.',
            'Strong logging and auditability.',
            'Clear handoffs and incident documentation.',
          ],
          whatKnoginProvides: [
            'Defensible timelines and provenance in workflows.',
            'Governance controls and audit-ready logs.',
            'Repeatable incident response playbooks.',
          ],
        },
        {
          id: 'incident-lead',
          title: 'Incident lead',
          description: 'Coordinate response and ensure learning.',
          accountabilities: [
            'Coordinate response across teams and systems.',
            'Protect data and access while restoring services.',
            'Drive post-incident remediation and prevention.',
          ],
          whatTheyNeed: [
            'A clear operational picture and trustworthy telemetry.',
            'Least privilege access with emergency pathways.',
            'Runbooks, dashboards, and dependable audit trails.',
          ],
          whatKnoginProvides: [
            'Operational readiness patterns and observability.',
            'Governed access models with auditability.',
            'Tooling and workflows that support post-incident learning.',
          ],
        },
        {
          id: 'security-leadership',
          title: 'Security leadership',
          description: 'Risk ownership, compliance, and trust posture.',
          accountabilities: [
            'Define security posture and ensure compliance alignment.',
            'Ensure audit readiness and defensible operations.',
            'Manage vendor, integration, and data-sharing risk.',
          ],
          whatTheyNeed: [
            'Clear governance and strong tenant isolation.',
            'Transparent controls and evidence for auditors.',
            'Predictable change management and security review paths.',
          ],
          whatKnoginProvides: [
            'Secure-by-default controls and defensible audit trails.',
            'Privacy and security patterns embedded in delivery.',
            'Change safety via staged rollout and feature flags.',
          ],
        },
      ],
      serviceLens: [
        'Trust is measurable: access control, audit trails, and safe defaults.',
        'Incident response requires clarity, not cleverness.',
        'Telemetry is sensitive; observability must be governed.',
      ],
      relatedServices: [
        { label: 'Security', href: 'https://knogin.com/en/security' },
        { label: 'Safeguards', href: 'https://knogin.com/en/safeguards' },
      ],
    },
    {
      id: 'it-integrations',
      title: 'IT and integrations',
      description: 'Admins and integration owners who keep mission systems connected.',
      disclaimer:
        'These personas are about interoperability, change safety, and auditability - not about organizational hierarchy.',
      roles: [
        {
          id: 'system-admin',
          title: 'System administrator',
          description: 'Keeps systems stable, secure, and compliant.',
          accountabilities: [
            'Manage configuration, access, and operational readiness.',
            'Maintain uptime and safe upgrades.',
            'Support audits and governance requirements.',
          ],
          whatTheyNeed: [
            'Predictable deployments and safe rollback.',
            'Clear configuration management and change history.',
            'Observability and troubleshooting tools.',
          ],
          whatKnoginProvides: [
            'Feature flags, staged rollout, and dependable change logs.',
            'Governed configuration and secure defaults.',
            'Operational metrics, logs, and runbook-aligned tooling.',
          ],
        },
        {
          id: 'integration-owner',
          title: 'Integration owner',
          description: 'Builds and maintains critical data flows and APIs.',
          accountabilities: [
            'Keep integrations reliable and correctly mapped.',
            'Manage schema changes and versioning.',
            'Ensure data quality and provenance.',
          ],
          whatTheyNeed: [
            'Stable APIs, clear contracts, and versioning.',
            'Replayability and idempotency for pipelines.',
            'Audit-friendly logging and error handling.',
          ],
          whatKnoginProvides: [
            'Clear API contracts and integration guidance.',
            'Resilient pipelines and observable integrations.',
            'Data-quality-first patterns and defensible logs.',
          ],
        },
      ],
      serviceLens: [
        'Interop is a trust feature: you must be able to leave, export, and verify.',
        'Schema changes must be safe and reversible.',
        'Data quality is a prerequisite for analytics and AI.',
      ],
      relatedServices: [
        { label: 'Developers', href: 'https://knogin.com/en/developers' },
        { label: 'Integration Guide', href: 'https://knogin.com/en/docs/integration-guide' },
      ],
    },
    {
      id: 'evidence-and-disclosure',
      title: 'Evidence and disclosure',
      description: 'Evidence intake, chain-of-custody, case prep, and defensible disclosure.',
      disclaimer:
        'These personas describe the constraints we design for (evidence integrity, access control, audit trails). They are not employment guidelines.',
      roles: [
        {
          id: 'evidence-custodian',
          title: 'Evidence custodian / technician',
          description: 'Owns intake, integrity, and controlled access to digital evidence.',
          accountabilities: [
            'Ensure evidence is ingested correctly with a defensible chain-of-custody.',
            'Control access and retention policies for sensitive materials.',
            'Support audits, court requests, and secure exports.',
          ],
          whatTheyNeed: [
            'Automatic chain-of-custody and complete activity histories.',
            'Secure sharing with least-privilege access and time-boxed permissions.',
            'Reliable export formats and audit-friendly reporting.',
          ],
          whatKnoginProvides: [
            'Evidence-grade provenance and audit logs by default.',
            'Governed access models with tenant isolation and permissions.',
            'Repeatable workflows for exports, retention, and review.',
          ],
        },
        {
          id: 'case-investigator',
          title: 'Investigator / case officer',
          description: 'Builds cases with clear evidence and repeatable workflows.',
          accountabilities: [
            'Assemble evidence and analysis into a coherent, defensible case narrative.',
            'Coordinate across units while keeping records reliable.',
            'Maintain clarity on what is known, inferred, and uncertain.',
          ],
          whatTheyNeed: [
            'Fast retrieval of relevant evidence with provenance preserved.',
            'Workflows that reduce manual handoffs and duplicate work.',
            'Tools that surface uncertainty without hiding context.',
          ],
          whatKnoginProvides: [
            'Investigation workflows designed for reproducibility and review.',
            'Entity profiles, linkage, and timelines with provenance.',
            'Collaboration patterns that preserve governance and audit trails.',
          ],
        },
        {
          id: 'disclosure-officer',
          title: 'Disclosure officer / paralegal',
          description: 'Produces defensible disclosure packages and maintains traceability.',
          accountabilities: [
            'Prepare disclosure packages with clear provenance and auditability.',
            'Track decisions, redactions, and what was provided to whom and when.',
            'Coordinate across agencies while maintaining governance.',
          ],
          whatTheyNeed: [
            'Repeatable packaging workflows with full history and accountability.',
            'Clear permissions and controlled sharing boundaries.',
            'Audit-ready logs that reduce manual recordkeeping.',
          ],
          whatKnoginProvides: [
            'Disclosure workflows designed for traceability and defensibility.',
            'Governed sharing and access control patterns.',
            'Evidence integrity and reliable exports with activity history.',
          ],
        },
      ],
      serviceLens: [
        'Chain-of-custody and audit trails must be automatic, not optional.',
        'Sharing must be governed: least privilege, expiration, and clear records.',
        'Outputs should be defensible for auditors, courts, and external stakeholders.',
      ],
      relatedServices: [
        { label: 'Evidence Management', href: 'https://knogin.com/en/products/evidence-management' },
        { label: 'Disclosure', href: 'https://knogin.com/en/products/disclosure' },
        { label: 'Investigation Workflows', href: 'https://knogin.com/en/products/investigation-workflows' },
        { label: 'BWC Analytics', href: 'https://knogin.com/en/products/bwc-analytics' },
      ],
    },
    {
      id: 'analytics-and-reporting',
      title: 'Analytics and reporting',
      description: 'Performance, quality, and defensible reporting across mission programs.',
      disclaimer:
        'These personas focus on measurement and governance: what happened, why, and what changed - with provenance and auditability.',
      roles: [
        {
          id: 'performance-analyst',
          title: 'Performance analyst',
          description: 'Measures outcomes and identifies what improves mission performance.',
          accountabilities: [
            'Define metrics that reflect real operational outcomes.',
            'Surface trends and anomalies with clear definitions and caveats.',
            'Communicate insights in ways that drive action.',
          ],
          whatTheyNeed: [
            'Clear metric definitions and trustworthy instrumentation.',
            'Repeatable reporting with lineage and provenance.',
            'Exports and dashboards that do not hide uncertainty.',
          ],
          whatKnoginProvides: [
            'Analytics with transparent definitions and defensible data handling.',
            'Audit-friendly exports and reporting workflows.',
            'A platform approach to measurement across services and integrations.',
          ],
        },
        {
          id: 'quality-auditor',
          title: 'Quality and compliance auditor',
          description: 'Ensures policy adherence with defensible review processes.',
          accountabilities: [
            'Review cases, incidents, and outputs for quality and policy adherence.',
            'Maintain audit trails that stand up to external scrutiny.',
            'Drive corrective actions and continuous improvement.',
          ],
          whatTheyNeed: [
            'Replayability: timelines, decisions, and changes over time.',
            'Strong governance and permissions.',
            'Clear recordkeeping with minimal manual effort.',
          ],
          whatKnoginProvides: [
            'Evidence-grade timelines, logs, and activity histories.',
            'Governance controls designed for audit readiness.',
            'Workflow templates for consistent review and reporting.',
          ],
        },
      ],
      serviceLens: [
        'If it cannot be explained, it cannot be trusted.',
        'Metrics must be defined, versioned, and reviewable.',
        'Reports should enable action: what changed, what to do next, and why.',
      ],
      relatedServices: [
        { label: 'Analytics & Reporting', href: 'https://knogin.com/en/products/analytics-reporting' },
        { label: 'Stream Analytics', href: 'https://knogin.com/en/products/stream-analytics' },
        { label: 'Enterprise Platform', href: 'https://knogin.com/en/products/enterprise-platform' },
      ],
    },
  ] satisfies readonly OperationalRoleFamily[],
} as const;

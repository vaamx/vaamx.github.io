// ═══════════════════════════════════════════════════════════
// Project data — populates the modal on tile click.
// ═══════════════════════════════════════════════════════════
const PROJECTS = {
  'obelyzk': {
    title: "Obelyzk",
    year: 2025,
    role: "Founding Engineer · BitSage Network",
    image: "assets/projects/obelyzk.jpg",
    summary: "Open-source Rust ZK proving engine for ML inference. Proved a 14-billion-parameter transformer on Starknet.",
    body: [
      "Obelyzk is a domain-specific zero-knowledge proving system built for one job: producing succinct, on-chain-verifiable proofs that a neural network ran exactly as claimed. It sits on top of StarkWare's STWO proving framework — Circle STARKs over the Mersenne-31 field — and extends it with ML-specific circuits, GPU acceleration, and a streaming protocol for billion-parameter models.",
      "We picked the GKR sumcheck route over a naive arithmetization. The math turns matrix-matrix multiplication from an O(n³)-row trace problem into an O(n)-verifier sumcheck. For a 14B-parameter Qwen2.5 model that meant the difference between a proof that's possible and one that fits in a single transaction.",
      "Verified end-to-end on Starknet Sepolia in April 2026: Qwen2.5-14B (281 transformer layers) and GLM-4-9B. Roughly twenty thousand lines of custom CUDA do the heavy lifting — MLE restriction, sumcheck rounds, Poseidon-Merkle commits, all memory-resident on H100s."
    ],
    metrics: [
      { value: "14B", label: "Params verified on-chain" },
      { value: "20k+", label: "Lines of CUDA" },
      { value: "950+", label: "Tests passing" }
    ],
    tags: ["Rust", "CUDA", "Cairo", "STWO", "Starknet", "GKR Sumcheck", "Circle STARKs"],
    links: [
      { href: "https://crates.io/crates/obelyzk", label: "crates.io ↗", primary: true },
      { href: "https://github.com/Bitsage-Network", label: "GitHub" },
      { href: "articles/gkr-sumcheck-practitioner-guide.html", label: "Read the deep dive" }
    ]
  },

  'ciro-ai': {
    title: "Ciro AI",
    year: 2024,
    role: "Founding Engineer & CTO",
    image: "assets/projects/ciro-ai.jpg",
    summary: "Real-time ML and computer-vision platform for industrial manufacturing. Operating across three countries.",
    body: [
      "Ciro is an AI lab built for the factory floor. The platform stitches together vision-based quality control, real-time anomaly detection, natural-language queries against operational data, and workflow automation — deployed across chemical, pharmaceutical, and electronics manufacturers in three countries.",
      "Stack ends to end: TypeScript / React dashboards, Node.js + FastAPI backends, a PostgreSQL + DuckDB analytical core, and Python ML services for vision (YOLO, DETR) and NL-to-SQL agents over operational data. Edge inference runs on NVIDIA Jetsons; cloud orchestration is on AWS.",
      "Selected for XFounders Accelerator (backed by Starknet Foundation and StarkWare); presented at Hi Tech! Stuttgart Match Arena Batch #9 alongside Siemens, Bosch, and other Industry 4.0 partners."
    ],
    metrics: [
      { value: "3", label: "Countries deployed" },
      { value: "XF '26", label: "Accelerator cohort" },
      { value: "ISA-101", label: "Compliance-ready UI" }
    ],
    tags: ["TypeScript", "React", "Node.js", "Python", "PyTorch", "FastAPI", "PostgreSQL", "DuckDB", "AWS", "YOLO"],
    links: [
      { href: "https://ciroai.us", label: "ciroai.us ↗", primary: true }
    ]
  },

  'bitsage': {
    title: "BitSage Network",
    year: 2025,
    role: "Founding Engineer",
    image: "assets/projects/bitsage.jpg",
    summary: "Verifiable decentralized compute marketplace on Starknet — from rendering and AI inference to ZK proof generation.",
    body: [
      "BitSage is the marketplace that sits on top of Obelyzk. It coordinates a network of validators and prover nodes selling compute capacity — for rendering, AI inference, or zero-knowledge proof generation — with cryptographic guarantees that the work actually ran.",
      "Rust node implementation, ten Cairo smart contracts deployed on Starknet, a Next.js + TypeScript marketplace frontend, and a Discord bot for cluster operations. Validators stake on-chain; provers are paid by job; settlement is trustless.",
      "Compute marketplaces today are honor systems with reputation scores on top. BitSage replaces the honor system with a proof. If the prover lies about which model produced an output, the verification fails on-chain and they get slashed — no human in the loop."
    ],
    metrics: [
      { value: "10", label: "Cairo contracts" },
      { value: "Sepolia", label: "Live network" }
    ],
    tags: ["Rust", "Cairo", "Starknet", "Next.js", "TypeScript", "Substrate"],
    links: [
      { href: "https://bitsage.network", label: "bitsage.network ↗", primary: true },
      { href: "https://github.com/Bitsage-Network", label: "GitHub" }
    ]
  },

  'singularity': {
    title: "Singularity Data Lake",
    year: 2025,
    role: "Lead Data Engineer · Ciro AI",
    image: "assets/projects/singularity.jpg",
    summary: "ETL and warehousing layer powering Ciro AI's real-time analytics for industrial customers.",
    body: [
      "Singularity is the data-engineering backbone underneath every Ciro analytic. It extracts from SAP, legacy ERPs, MES systems, and industrial PLCs, transforms it into a columnar Apache Parquet store with DuckDB as the query engine, and feeds the natural-language interface and ML feature pipelines downstream.",
      "Airflow orchestrates the daily and incremental jobs. Idempotent writes, schema evolution, late-arriving fact handling, partition pruning — the unglamorous data-engineering work that lets dashboards stay fast as customers grow from 10M to 10B rows."
    ],
    metrics: [
      { value: "Parquet", label: "Columnar core" },
      { value: "DuckDB", label: "Query engine" }
    ],
    tags: ["Python", "Apache Parquet", "DuckDB", "Airflow", "AWS S3", "PostgreSQL"]
  },

  'ciro-erp': {
    title: "Ciro ERP",
    year: 2025,
    role: "Lead Architect · Ciro AI",
    image: "assets/projects/ciro-erp.jpg",
    summary: "Manufacturing ERP for chemical and pharmaceutical producers, with DTE / DGII e-invoicing for LATAM.",
    body: [
      "An end-to-end ERP designed for chemical, pharmaceutical, and veterinary-products manufacturers. Production, inventories, accounting, batch protocols, lot traceability, QC workflows, and an ISA-101 plant view for the factory floor.",
      "Native integration with El Salvador's DTE / DGII electronic-invoicing standard — built on the same primitives that power findex.la. TypeScript + React for the office UI, a separate ISA-101 plant interface, Node.js services with FastAPI for the ML/agent layer, and a hardened audit log for regulators.",
      "Designed alongside an industrial engineer with ten years on the manufacturing floor — every screen was reviewed against an actual production shift before it shipped."
    ],
    metrics: [
      { value: "ISA-101", label: "Plant UI standard" },
      { value: "DTE", label: "Native e-invoicing" }
    ],
    tags: ["TypeScript", "React", "Next.js", "PostgreSQL", "FastAPI", "Node.js", "ISA-101"]
  },

  'orbita': {
    title: "Órbita Field Sales",
    year: 2024,
    role: "Mobile Lead · Ciro AI",
    image: "assets/projects/orbita.jpg",
    summary: "Offline-first React Native field-sales companion for industrial distributors operating in low-connectivity regions.",
    body: [
      "Field sales reps for industrial distributors spend most of their day in warehouses and customer sites where the cellular signal is unreliable. Órbita is built offline-first: the app holds the full catalog, customer ledgers, and pending orders in local SQLite, syncs incrementally when connectivity returns, and resolves conflicts deterministically.",
      "React Native + Expo, TypeScript end-to-end, push notifications via Expo Push, and a custom sync engine on top of Watermelon DB. Deployed to manufacturing distributors in El Salvador, Guatemala, and Honduras."
    ],
    metrics: [
      { value: "Offline-first", label: "Sync architecture" },
      { value: "3", label: "Countries shipped" }
    ],
    tags: ["React Native", "Expo", "TypeScript", "SQLite", "WatermelonDB"]
  },

  'cirovision': {
    title: "CIROvision",
    year: 2024,
    role: "Lead Vision Engineer · Ciro AI",
    image: "assets/projects/cirovision.jpg",
    summary: "Computer-vision pipelines for factory-floor quality control, defect detection, and operational telemetry.",
    body: [
      "CIROvision turns existing factory cameras into a quality-control sensor network. Custom-trained YOLO and DETR detectors for product-specific defect classes, real-time alerts via WebSocket to operator dashboards, and a feedback loop that lets line supervisors confirm or correct detections to keep the model improving.",
      "PyTorch for training, TensorRT for edge inference on NVIDIA Jetson devices, and a Python orchestration layer that handles model versioning, A/B rollouts, and metrics reporting."
    ],
    metrics: [
      { value: "YOLO", label: "Detector backbone" },
      { value: "TensorRT", label: "Edge inference" },
      { value: "Jetson", label: "On-device deploy" }
    ],
    tags: ["PyTorch", "YOLO", "DETR", "OpenCV", "TensorRT", "NVIDIA Jetson", "Python"]
  },

  'vcn': {
    title: "Vision Control Nexus",
    year: 2024,
    role: "Architect",
    image: "assets/projects/vcn.jpg",
    summary: "Forensic video review and analytics platform — server-side ingest, GPU transcoding, React frontend for search and annotation.",
    body: [
      "A platform for reviewing and analysing surveillance and operational footage at scale. Server-side ingest via GStreamer, GPU-accelerated transcoding to web-friendly codecs, and a React frontend with frame-accurate scrubbing, search, event annotation, and chain-of-custody export.",
      "Built for operators reviewing days of footage at a time. The UI is engineered for speed: virtualized timelines, GPU-decoded preview, keyboard-first navigation."
    ],
    metrics: [
      { value: "GPU", label: "Hardware decode" },
      { value: "Frame-accurate", label: "Scrubbing" }
    ],
    tags: ["React", "TypeScript", "FFmpeg", "GStreamer", "NVIDIA", "Docker"]
  },

  'content-studio': {
    title: "Content Studio",
    year: 2025,
    role: "Engineering Lead",
    image: "assets/projects/content-studio.jpg",
    summary: "Reusable motion-graphics and AI-video production pipeline for brand content.",
    body: [
      "A Python + JavaScript pipeline for templated motion graphics and AI-generated video. Brand kits define the design language; scene scripts compose templates with brand assets and AI-generated b-roll; a Makefile orchestrates rendering, post-processing, and final export.",
      "Used internally to produce the Ciro launch video, BitSage product walkthroughs, and a small library of recurring brand content. The same primitives drive the proposal-generation tool that produces investor-facing PDFs."
    ],
    metrics: [
      { value: "Brand-aware", label: "Template engine" },
      { value: "AI b-roll", label: "Generation" }
    ],
    tags: ["Python", "JavaScript", "FFmpeg", "Three.js", "Make", "Stable Diffusion"]
  },

  'aerion': {
    title: "Aerion Token",
    year: 2025,
    role: "Mechanism Design",
    image: "assets/projects/aerion.jpg",
    summary: "Token economics, mechanism design, and technical whitepaper for a compute-marketplace network.",
    body: [
      "Designed the token mechanics, incentive structures, and economic security model for the Aerion compute network. Validator staking, prover rewards, marketplace fee structures, slashing conditions for falsified proofs, and a vesting model designed for long-term protocol-aligned holders.",
      "Mechanism design grounded in formal game theory — Stanford coursework + practitioner instinct from running token launches. Whitepaper drafted, reviewed by counsel, and shipped alongside protocol launch."
    ],
    tags: ["Tokenomics", "Mechanism Design", "Game Theory", "Whitepaper"]
  },

  'sugarfunge': {
    title: "SugarFunge Protocol",
    year: 2022,
    role: "Lead Protocol Engineer & CPO",
    image: "assets/projects/sugarfunge.jpg",
    summary: "On-chain behavioral-economics engine on Substrate for high-frequency trading and game economies.",
    body: [
      "SugarFunge was the on-chain backbone for blockchain-native game economies and HFT-grade trading flows. Substrate / Rust core, custom pallets for asset bundling, dynamic pricing, and trustless order matching with settlement. The marketplace frontend (Next.js + TypeScript + GraphQL) gave game studios a no-code path to launch and run their token economies.",
      "Discord and Telegram bot integrations for operator workflows, an on-chain analytics dashboard, and a partner ecosystem of game studios shipping live economies on top of the protocol."
    ],
    metrics: [
      { value: "Substrate", label: "L1 framework" },
      { value: "Polkadot", label: "Ecosystem" }
    ],
    tags: ["Substrate", "Rust", "Polkadot", "Next.js", "TypeScript", "GraphQL", "DeFi"]
  },

  'simbotic': {
    title: "Simbotic",
    year: 2019,
    role: "Co-creator · Vertex Studio",
    image: "assets/projects/simbotic.jpg",
    summary: "Advanced AI simulation platform bridging virtual and physical worlds — Epic MegaGrant recipient.",
    body: [
      "Simbotic is the simulation and synthetic-data platform we built at Vertex Studio for AI agents that need to learn about the physical world before they ever touch it. The pitch: large language models are excellent with text, terrible with three dimensions. Simbotic gives them a place to develop spatial reasoning, manipulation, and environmental understanding.",
      "Multi-agent training environments. Unlimited synthetic data via domain randomization. Diffusion-model and NeRF-based 3D scene generation. A human-in-the-loop layer that lets domain experts guide AI learning instead of just labelling. Real-time training pipelines compress what used to be weeks of supervised data collection into hours.",
      "Stack: <strong>Unreal Engine 5</strong> for the visual layer, <strong>NVIDIA</strong> for GPU acceleration, <strong>PyTorch</strong> for the learning side, <strong>GStreamer</strong> for the streaming pipeline, <strong>Rust</strong> for the performance-critical core, <strong>Kubernetes</strong> for orchestration. Third-party integrations with ROS 2 (URDF / RViz), Open Sound Control, and PX4 for flight-controller SIL/HIL — defense, robotics, and entertainment customers come at it from very different angles.",
      "Awarded an Epic MegaGrant for the Unreal plugin and documentation work. Continues to ship out of Vertex Studio."
    ],
    metrics: [
      { value: "Epic", label: "MegaGrant recipient" },
      { value: "UE5", label: "Visual layer" },
      { value: "Multi-agent", label: "Training environments" }
    ],
    tags: ["Unreal Engine 5", "PyTorch", "Rust", "NVIDIA", "NeRFs", "Diffusion Models", "GStreamer", "Kubernetes", "ROS 2", "PX4"],
    links: [
      { href: "https://simbotic.ai", label: "simbotic.ai ↗", primary: true },
      { href: "https://x.com/studio_vertex", label: "Vertex Studio" }
    ]
  },

  'sortium': {
    title: "Sortium",
    year: 2021,
    role: "Engineering Lead · Vertex Studio",
    image: "assets/projects/sortium.jpg",
    summary: "Your AI-powered production team — just a prompt away. Generative 3D asset pipeline for game studios and creative teams.",
    body: [
      "Sortium is the productize-the-team idea applied to 3D content. A creative director describes what they need — a character, a prop, a full scene — and the platform orchestrates a team of specialized AI agents (modelling, texturing, rigging, lighting, scene composition) to deliver the asset, game-ready, in minutes instead of weeks.",
      "Built on the same Unreal Engine + PyTorch foundation as Simbotic, with a heavier emphasis on multi-agent orchestration and a producer-facing UI that hides the underlying complexity. Each agent in the production chain has its own model, its own constraints, and its own handoff contract with the next one downstream.",
      "Designed for game studios, ad agencies, and any creative team where the bottleneck isn't ideas — it's the asset pipeline catching up to them."
    ],
    metrics: [
      { value: "Prompt → asset", label: "Production loop" },
      { value: "Multi-agent", label: "Orchestration" }
    ],
    tags: ["Unreal Engine", "PyTorch", "Multi-agent AI", "Generative 3D", "Diffusion Models", "Python"]
  },

  'cosmogene': {
    title: "Cosmogene",
    year: 2022,
    role: "Engineering Lead · Vertex Studio",
    image: "assets/projects/cosmogene.jpg",
    summary: "Create your personal AI pet — a companion that lives, learns, and evolves in a procedurally-generated 3D universe.",
    body: [
      "Cosmogene is the consumer-facing application of the agent-and-simulation technology that grew out of Simbotic and Sortium. Each user adopts an AI pet whose appearance, behaviour, and habitat are procedurally generated; the pet learns from interactions, develops a personality over time, and lives inside a 3D universe rendered in Unreal.",
      "Two bets stacked on each other. <strong>Technical:</strong> simulation-grade environments and agent training are now cheap enough to run for individual consumer applications, not just enterprise robotics R&amp;D. <strong>Product:</strong> people want a relationship with an AI that has a body in a world, not just a face on a screen.",
      "Internally, Cosmogene shares a great deal of code with Simbotic — the agents are the same agents, the world simulation uses the same kernels. The product layer on top is what makes it a pet instead of a research environment."
    ],
    metrics: [
      { value: "Procedural", label: "Worlds & companions" },
      { value: "Unreal", label: "Rendering" }
    ],
    tags: ["Unreal Engine", "PyTorch", "AI Agents", "Generative 3D", "Diffusion Models", "Consumer AI"]
  },

  'vertex': {
    title: "Vertex Studio — AI & Sim Lab",
    year: 2020,
    role: "Chief Product Officer / Lead ML & Simulation Engineer",
    image: "assets/projects/vertex.jpg",
    summary: "Enterprise simulation and synthetic-data R&D lab. Grew from R&D to $1M+ ARR.",
    body: [
      "Three years leading ML and simulation systems at Vertex. The core product was an enterprise synthetic-data platform: Unreal Engine for the simulation runtime, custom rendering pipelines for domain-specific output (lidar, depth, segmentation masks), and a Python + PyTorch training stack that consumed the generated data downstream.",
      "Shipped the customer-facing web platform in React + TypeScript with a Node.js job-orchestration layer running on AWS Batch for distributed rendering. WebGL previews via Three.js so customers could inspect scenes before queuing batch jobs.",
      "Also responsible for the computer-vision pipelines on the deployment side: PyTorch training, OpenCV preprocessing, TensorRT for edge inference on NVIDIA devices."
    ],
    metrics: [
      { value: "$1M+", label: "ARR achieved" },
      { value: "3yrs", label: "Tenure" }
    ],
    tags: ["Unreal Engine", "Python", "PyTorch", "React", "TypeScript", "Node.js", "AWS Batch", "Three.js", "OpenCV", "TensorRT"]
  },

  'virse-meta': {
    title: "VirseHQ × Meta",
    year: 2016,
    role: "Product Engineer · VirseHQ",
    image: "assets/projects/virse-meta.jpg",
    summary: "Enterprise 3D retail experiences shipped to Meta Quest and Rift — the XR slice of VirseHQ's metaverse work.",
    body: [
      "The slice of VirseHQ that ran on Meta hardware. Native XR clients for Quest and Rift, integrations into Meta's enterprise tooling, and the engineering glue that let our 3D retail universes show up inside the headsets enterprise customers were already buying.",
      "The interesting work was less about flashy rendering and more about XR-grade reliability: full-body networking under packet loss, hand-tracking input that doesn't drop frames, spatial audio that survives a thirty-person room. Enterprise demos fail loudly when the framerate dips — the whole experience falls apart in ways a 2D dashboard never does."
    ],
    metrics: [
      { value: "Quest · Rift", label: "Target headsets" },
      { value: "OpenXR", label: "Cross-platform" }
    ],
    tags: ["Meta Quest", "Oculus Rift", "Unreal Engine", "Unity", "OpenXR", "WebGL", "Real-time multiplayer"]
  },

  'virse': {
    title: "VirseHQ — 3D Retail Metaverse",
    year: 2015,
    role: "Product Engineer & Regional Director",
    image: "assets/projects/virse.jpg",
    summary: "AI-powered 3D retail universe where enterprise brands meet their customers in immersive shoppable spaces. $15M ARR.",
    body: [
      "VirseHQ was the immersive 3D retail metaverse: an AI-powered platform that let enterprise brands launch their own branded universes — shoppable spaces, interactive product experiences, multiplayer customer events, and the production tooling to ship all of it without standing up a game studio.",
      "Stack spanned full-stack: <strong>React + Node.js</strong> for the management console, <strong>Unity</strong> and <strong>Unreal</strong> for the 3D runtimes, <strong>WebGL</strong> clients for browser-based access, and a real-time multiplayer networking layer with strict synchronization guarantees for enterprise demos. The business reached <strong>$15M ARR</strong> during my tenure.",
      "Beyond engineering, I led the regional expansion into Latin America — the enterprise sales motion, the customer onboarding, and the localization work that comes with delivering immersive products in markets with very different connectivity and infrastructure."
    ],
    metrics: [
      { value: "$15M", label: "ARR" },
      { value: "LATAM", label: "Regional lead" }
    ],
    tags: ["React", "Node.js", "Unity", "Unreal", "WebGL", "Three.js", "Real-time multiplayer", "Metaverse"]
  },

  'kraken': {
    title: "Kraken Exchange Infrastructure",
    year: 2017,
    role: "Product Engineer (via skalex GmbH)",
    image: "assets/projects/kraken.jpg",
    summary: "Matching engines, liquidity protocols, and high-frequency trading infrastructure for tier-one cryptocurrency exchanges.",
    body: [
      "Three years in Munich building exchange infrastructure during the early crypto boom. Matching engines, order book management, liquidity-provision algorithms, and the connective tissue around them — Node.js + TypeScript for orchestration and APIs, C++ components on the latency-critical paths, and Redis for hot-path state.",
      "High-availability architecture: active-active deployments across regions, custom WebSocket fan-out for market data, fault-tolerant order books with strict latency budgets. The kind of system where a 200ms outage costs more than a year of payroll."
    ],
    metrics: [
      { value: "Tier-1", label: "Exchange operators" },
      { value: "HFT", label: "Latency budgets" }
    ],
    tags: ["Node.js", "TypeScript", "C++", "Redis", "WebSocket", "Matching Engine", "HFT"]
  },

  'kadevjo': {
    title: "Novatech / Kadevjo",
    year: 2014,
    role: "Co-founder & Chief Innovation Officer",
    image: "assets/projects/kadevjo.jpg",
    summary: "Salvadoran mobile-game studio. Shipped Guanapolio — the country's Monopoly — and a portfolio of mobile titles. Reached $1M ARR, exited.",
    body: [
      "Co-founded a game development studio in San Salvador at twenty. The flagship was <strong>Guanapolio</strong> — a Salvadoran take on Monopoly with locations and landmarks from across the country, and game pieces featuring El Cipitío, La Tenchis, Jorge ‘Mágico’ González, and Frank Velásquez. The mobile adaptation launched on iOS and Android on March 19, 2014, and earned national and international recognition for cultural localization done right.",
      "The studio shipped a broader portfolio of mobile titles and Salvadoran-market apps in <strong>Unity / C#</strong>, with some of the earliest crypto-integration experiments coming out of the region. Grew to <strong>$1M ARR</strong> and exited.",
      "Looking back, the studio was less a game company than a venture studio in disguise — we built what the market wanted, learned to ship product fast, and used the proceeds to fund the next thing. The operational discipline learned shipping mobile titles into LATAM is the foundation every later company sat on."
    ],
    metrics: [
      { value: "$1M", label: "ARR" },
      { value: "Exited", label: "Outcome" },
      { value: "iOS · Android", label: "Platforms" }
    ],
    tags: ["Unity", "C#", "iOS", "Android", "Mobile Games", "LATAM"],
    links: [
      { href: "https://historico.elsalvador.com/historico/123748/guanapolio-presenta-su-app-para-movil.html", label: "Guanapolio launch coverage ↗", primary: true }
    ]
  },

  'findex': {
    title: "findex.la",
    year: 2023,
    role: "Co-architect",
    image: "assets/projects/findex.jpg",
    summary: "DTE / DGII electronic-invoicing infrastructure for El Salvador.",
    body: [
      "Built and operated alongside the team that now powers Ciro's ERP tax-integration layer. Electronic-invoicing infrastructure compliant with El Salvador's DTE / DGII standard, processing thousands of documents daily for businesses across the country.",
      "TypeScript + Node.js services, PostgreSQL, async queues with retry and dead-letter handling, and a hardened audit log for regulators. Designed so any single-document failure cannot break the whole batch."
    ],
    tags: ["TypeScript", "Node.js", "PostgreSQL", "DGII", "DTE"],
    links: [
      { href: "https://findex.la", label: "findex.la ↗", primary: true }
    ]
  }
};

// ═══════════════════════════════════════════════════════════
// Project modal
// ═══════════════════════════════════════════════════════════
const modal = document.getElementById('project-modal');
const modalImg     = document.getElementById('modal-image');
const modalYear    = document.getElementById('modal-year');
const modalRole    = document.getElementById('modal-role');
const modalTitle   = document.getElementById('modal-title');
const modalSummary = document.getElementById('modal-summary');
const modalBody    = document.getElementById('modal-body');
const modalMetrics = document.getElementById('modal-metrics');
const modalTags    = document.getElementById('modal-tags');
const modalLinks   = document.getElementById('modal-links');

function openProject(slug) {
  const p = PROJECTS[slug];
  if (!p) return;

  modalImg.src = p.image;
  modalImg.alt = p.title;
  modalYear.textContent  = p.year ?? '';
  modalRole.textContent  = p.role ?? '';
  modalTitle.textContent = p.title;
  modalSummary.textContent = p.summary ?? '';

  modalBody.innerHTML = '';
  (p.body || []).forEach((para) => {
    const el = document.createElement('p');
    el.innerHTML = para;
    modalBody.appendChild(el);
  });

  modalMetrics.innerHTML = '';
  (p.metrics || []).forEach((m) => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="modal-metric-value">${m.value}</span><span class="modal-metric-label">${m.label}</span>`;
    modalMetrics.appendChild(li);
  });

  modalTags.innerHTML = '';
  (p.tags || []).forEach((t) => {
    const li = document.createElement('li');
    li.textContent = t;
    modalTags.appendChild(li);
  });

  modalLinks.innerHTML = '';
  (p.links || []).forEach((l) => {
    const a = document.createElement('a');
    a.href = l.href;
    a.textContent = l.label;
    if (l.primary) a.classList.add('is-primary');
    if (l.href.startsWith('http')) { a.target = '_blank'; a.rel = 'noopener'; }
    modalLinks.appendChild(a);
  });

  modal.removeAttribute('hidden');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  // focus first close button
  const close = modal.querySelector('.modal-close');
  if (close) setTimeout(() => close.focus(), 30);

  // deep-link via hash
  if (history.pushState) history.pushState(null, '', `#project-${slug}`);
}

function closeProject() {
  modal.setAttribute('hidden', '');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  if (location.hash.startsWith('#project-') && history.pushState) {
    history.pushState(null, '', '#portfolio');
  }
}

// Tile click → open modal
document.querySelectorAll('.tile').forEach((tile) => {
  tile.addEventListener('click', (e) => {
    // ignore filter-button clicks if any nested in unrelated stuff
    const link = e.target.closest('.tile-link');
    if (!link) return;
    e.preventDefault();
    const slug = tile.dataset.project;
    if (slug) openProject(slug);
  });
});

// Close handlers
modal.querySelectorAll('[data-close]').forEach((el) => {
  el.addEventListener('click', closeProject);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.hasAttribute('hidden')) closeProject();
});

// Deep-link on load
const initialHash = location.hash;
if (initialHash.startsWith('#project-')) {
  const slug = initialHash.replace('#project-', '');
  setTimeout(() => openProject(slug), 80);
}

// ═══════════════════════════════════════════════════════════
// Portfolio filter
// ═══════════════════════════════════════════════════════════
const chips = document.querySelectorAll('.chip');
const tiles = document.querySelectorAll('.tile');

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const filter = chip.dataset.filter;
    chips.forEach((c) => {
      c.classList.toggle('is-active', c === chip);
      c.setAttribute('aria-selected', c === chip ? 'true' : 'false');
    });
    tiles.forEach((tile) => {
      const cats = (tile.dataset.cats || '').split(/\s+/);
      const show = filter === 'all' || cats.includes(filter);
      tile.classList.toggle('is-hidden', !show);
    });
  });
});

// ═══════════════════════════════════════════════════════════
// Nav active state + reveal-on-scroll
// ═══════════════════════════════════════════════════════════
const navLinks = document.querySelectorAll('.nav-links a[data-nav]');
const sections = Array.from(navLinks)
  .map((a) => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window) {
  const navIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const id = e.target.id;
      navLinks.forEach((a) => {
        a.classList.toggle('is-active', a.getAttribute('href') === '#' + id);
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  sections.forEach((s) => navIO.observe(s));

  const revealTargets = document.querySelectorAll('.tile, .article, .bio, .skills, .profile, .hero-inner');
  revealTargets.forEach((el) => el.classList.add('reveal'));

  const revealIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        revealIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -4% 0px' });

  revealTargets.forEach((el) => revealIO.observe(el));

  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.in)').forEach((el) => el.classList.add('in'));
  }, 600);
}

// Current year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

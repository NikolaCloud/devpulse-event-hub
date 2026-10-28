// DevPulse - Tech Conferences & CFP Hub Logic

const EVENTS_DATA = [
  {
    id: "conf-01",
    name: "NeuralSystems Summit 2026",
    dates: "OCT 14 - 16, 2026",
    city: "San Francisco",
    country: "USA",
    venue: "Moscone West & Virtual Stream",
    category: "AI / ML",
    format: "Hybrid",
    cfp_status: "CFP Open",
    cfp_deadline: "Aug 30, 2026",
    attendees: "3,500+",
    ticket_price: "$450 / Free Virtual",
    description: "The premier gathering for autonomous agent architectures, local inference runtimes, and large language model quantization.",
    tracks: ["Agentic Workflows", "Quantization & Edge ML", "Distributed Training"],
    accent: "#10B981",
    headliners: ["Dr. Elena Rostova (KernelAI)", "Marcus Vance (DeepTrace)"],
    agenda: [
      { time: "09:00 - 10:15", title: "Keynote: Multi-Agent Consensus at Scale", speaker: "Dr. Elena Rostova" },
      { time: "10:45 - 12:00", title: "Technical Deep-Dive: 2-Bit Quantization Runtimes", speaker: "Marcus Vance" },
      { time: "13:30 - 15:00", title: "Hands-on Workshop: Building Self-Healing Tool Use Pipelines", speaker: "Lab Leads" },
      { time: "15:30 - 17:00", title: "Panel: Safety Guardrails vs Autonomous Compute", speaker: "Open Standards Guild" }
    ]
  },
  {
    id: "conf-02",
    name: "Rust & Systems Con Europe",
    "dates": "NOV 04 - 06, 2026",
    city: "Berlin",
    country: "Germany",
    venue: "Kraftwerk Berlin",
    category: "Systems",
    format: "In-Person",
    cfp_status: "Closing Soon",
    cfp_deadline: "Jul 15, 2026",
    attendees: "1,800+",
    ticket_price: "€380",
    description: "Deep-dive into low-level systems programming, Linux eBPF telemetry, memory-safe kernels, and high-frequency trading engines.",
    tracks: ["eBPF & Kernel", "Memory Safety", "High Throughput Networking"],
    accent: "#F97316",
    headliners: ["Felix Berg (CrateOS)", "Astrid Lind (Vanguard LowLatency)"],
    agenda: [
      { time: "09:30 - 10:45", title: "Writing a Zero-Copy Packet Engine in Rust", speaker: "Felix Berg" },
      { time: "11:15 - 12:30", title: "eBPF Observability in Microsecond Latency Loops", speaker: "Astrid Lind" },
      { time: "14:00 - 15:30", title: "Compiler Internals & SIMD Vectorization", speaker: "Core Toolchain Group" }
    ]
  },
  {
    id: "conf-03",
    name: "CloudNative & Kubernetes Global",
    "dates": "DEC 01 - 03, 2026",
    city: "Singapore",
    country: "Singapore",
    venue: "Suntec Convention Centre",
    category: "DevOps",
    format: "In-Person",
    cfp_status: "CFP Open",
    cfp_deadline: "Sep 20, 2026",
    attendees: "4,200+",
    ticket_price: "$520",
    description: "Scaling multi-region clusters, GitOps continuous delivery, zero-trust service meshes, and cloud-native cost governance.",
    tracks: ["Multi-Cloud Orchestration", "GitOps at Scale", "FinOps & Cost"],
    accent: "#06B6D4",
    headliners: ["Kenji Tanaka (Tokyo Mesh)", "Sarah Jenkins (Hyperscale Lab)"],
    agenda: [
      { time: "09:00 - 10:30", title: "Orchestrating 100k Pods Across Geo-Distributed Regions", speaker: "Kenji Tanaka" },
      { time: "11:00 - 12:15", title: "FinOps: Slicing 40% Off Cloud Egress Bills", speaker: "Sarah Jenkins" },
      { time: "14:00 - 16:00", title: "Service Mesh Live Chaos Testing", speaker: "Reliability Ops" }
    ]
  },
  {
    id: "conf-04",
    name: "ZeroDay Security Defense Expo",
    "dates": "JAN 19 - 21, 2027",
    city: "London",
    country: "UK",
    venue: "ExCeL London",
    category: "Security",
    format: "Hybrid",
    cfp_status: "Tickets Live",
    cfp_deadline: "Closed",
    attendees: "2,400+",
    ticket_price: "£590",
    description: "Red team exploits, offensive security engineering, hardware vulnerability analysis, and zero-day threat intelligence.",
    tracks: ["Adversary Simulation", "Firmware & IoT Reverse Engineering", "SOC Automation"],
    accent: "#EF4444",
    headliners: ["Viktor Stone (ShadowGuard)", "Nadia Al-Mansoor (CyberUnit)"],
    agenda: [
      { time: "10:00 - 11:30", title: "Live Firmware Exploitation Demonstration", speaker: "Viktor Stone" },
      { time: "12:00 - 13:00", title: "Autonomous SIEM: Replacing Human Alert Fatigue", speaker: "Nadia Al-Mansoor" },
      { time: "14:30 - 16:00", title: "Capture The Flag Global Finals", speaker: "SecTeam" }
    ]
  },
  {
    id: "conf-05",
    name: "Decentralized Protocols Forum",
    "dates": "FEB 10 - 12, 2027",
    city: "Zurich",
    country: "Switzerland",
    venue: "Kongresshaus Zurich",
    category: "Web3",
    format: "In-Person",
    cfp_status: "CFP Open",
    cfp_deadline: "Oct 31, 2026",
    attendees: "1,600+",
    ticket_price: "CHF 420",
    description: "Zero-knowledge rollups, peer-to-peer consensus mechanisms, cryptographic verifiable computing, and formal verification.",
    tracks: ["ZK-SNARKs & Proofs", "P2P Consensus", "Formal Verification"],
    accent: "#8B5CF6",
    headliners: ["Dr. Lucas Meyer (ETH CryptoLab)", "Sora Takahashi (ZeroState)"],
    agenda: [
      { time: "09:30 - 11:00", title: "Mathematical Foundations of Recursive ZK Proofs", speaker: "Dr. Lucas Meyer" },
      { time: "11:30 - 12:45", title: "State Machine Replication Without Global Clocks", speaker: "Sora Takahashi" }
    ]
  },
  {
    id: "conf-06",
    name: "Global TypeScript & Modern Web",
    "dates": "MAR 24 - 26, 2027",
    city: "Amsterdam",
    country: "Netherlands",
    venue: "Beurs van Berlage",
    category: "Frontend",
    format: "Hybrid",
    cfp_status: "Tickets Live",
    cfp_deadline: "Closed",
    attendees: "2,900+",
    ticket_price: "€320 / Free Online",
    description: "Next-generation build toolchains, WebAssembly runtimes, server components architecture, and state management at scale.",
    tracks: ["Compiler Architecture", "WebAssembly in Production", "Micro-Frontends"],
    accent: "#3B82F6",
    headliners: ["Arjan de Vries (CoreJS)", "Chloe Dubois (RenderEngine)"],
    agenda: [
      { time: "10:00 - 11:15", title: "Rust-Powered Bundlers: Compiling 100k Modules in 40ms", speaker: "Arjan de Vries" },
      { time: "11:45 - 13:00", title: "Native WebAssembly Audio & Graphics Worklets", speaker: "Chloe Dubois" }
    ]
  }
];

let selectedCategory = 'all';

function getStatusClass(status) {
  if (status === 'CFP Open') return 'status-cfp-open';
  if (status === 'Closing Soon') return 'status-closing-soon';
  return 'status-live';
}

function renderEvents(list) {
  const grid = document.getElementById('events-grid');
  const countEl = document.getElementById('events-count');

  if (countEl) {
    countEl.textContent = `${list.length} global summits listed`;
  }

  if (list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; background: #fff; border: 2px solid #0F172A; border-radius: 8px; padding: 3rem; text-align: center; box-shadow: 4px 4px 0 #0F172A;">
        <h3 style="font-family: var(--font-display); font-size: 1.4rem; margin-bottom: 0.5rem;">No matching conferences found</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Try adjusting search keywords or selecting "All Categories".</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = list.map(item => `
    <article class="event-card" data-id="${item.id}">
      <div class="card-top-row">
        <span class="date-stamp">${item.dates}</span>
        <span class="status-badge ${getStatusClass(item.cfp_status)}">${item.cfp_status}</span>
      </div>

      <h3 class="event-title">${item.name}</h3>
      <div class="event-venue">📍 ${item.venue} // ${item.city}, ${item.country}</div>

      <p class="event-desc">${item.description}</p>

      <div class="event-tracks">
        ${item.tracks.map(t => `<span class="track-tag">#${t}</span>`).join('')}
      </div>

      <div class="card-foot">
        <div class="ticket-meta">
          ${item.ticket_price}
          <span>CFP: ${item.cfp_deadline}</span>
        </div>
        <div style="display: flex; gap: 0.5rem;">
          <button class="btn-outline view-agenda-btn" data-id="${item.id}" style="padding: 0.45rem 0.85rem; font-size: 0.82rem;">
            Agenda Tracks &rarr;
          </button>
          <button class="btn-black" onclick="saveToCalendar('${item.name}', '${item.dates}')" style="padding: 0.45rem 0.85rem; font-size: 0.82rem;">
            + Calendar
          </button>
        </div>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.view-agenda-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      openAgendaModal(id);
    });
  });
}

function applyFilters() {
  const search = document.getElementById('search-input').value.toLowerCase().trim();
  const format = document.getElementById('format-filter').value;
  const status = document.getElementById('status-filter').value;
  const sort = document.getElementById('sort-filter').value;

  let filtered = EVENTS_DATA.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search) ||
                          item.city.toLowerCase().includes(search) ||
                          item.description.toLowerCase().includes(search);
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesFormat = format === 'all' || item.format === format;
    const matchesStatus = status === 'all' || item.cfp_status === status;
    return matchesSearch && matchesCategory && matchesFormat && matchesStatus;
  });

  if (sort === 'name-asc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === 'attendees-desc') {
    filtered.sort((a, b) => parseInt(b.attendees) - parseInt(a.attendees));
  }

  renderEvents(filtered);
}

function openAgendaModal(id) {
  const item = EVENTS_DATA.find(e => e.id === id);
  if (!item) return;

  const modal = document.getElementById('agenda-modal');
  const body = document.getElementById('agenda-modal-body');

  body.innerHTML = `
    <div style="margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 2px solid var(--border-strong);">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div>
          <span class="status-badge ${getStatusClass(item.cfp_status)}" style="margin-bottom: 0.5rem; display:inline-block;">${item.cfp_status}</span>
          <h2 style="font-family: var(--font-display); font-size: 1.8rem; font-weight: 700; margin-top: 0.25rem;">${item.name}</h2>
          <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted); margin-top: 0.35rem;">
            📅 ${item.dates} | 📍 ${item.venue}
          </div>
        </div>
      </div>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-family: var(--font-display); font-size: 0.95rem; text-transform: uppercase; margin-bottom: 0.5rem;">Featured Headliners</h4>
      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
        ${item.headliners.map(h => `<span style="background: var(--bg-page); border: 1px solid var(--border-light); font-family: var(--font-mono); font-size: 0.85rem; font-weight: 600; padding: 0.4rem 0.8rem; border-radius: 4px;">👤 ${h}</span>`).join('')}
      </div>
    </div>

    <h4 style="font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; margin-bottom: 0.75rem;">Curated Track Agenda</h4>
    <div class="timeline-list">
      ${item.agenda.map(a => `
        <div class="timeline-item">
          <div class="tl-time">${a.time}</div>
          <div>
            <div class="tl-title">${a.title}</div>
            <div class="tl-speaker">Speaker: ${a.speaker}</div>
          </div>
        </div>
      `).join('')}
    </div>

    <div style="display: flex; gap: 1rem; margin-top: 2rem;">
      <button class="btn-black" style="flex: 1; text-align: center;" onclick="alert('Ticket checkout redirected to official summit gateway.')">
        Get Delegate Pass (${item.ticket_price}) &rarr;
      </button>
      <button class="btn-outline" onclick="saveToCalendar('${item.name}', '${item.dates}')">
        Sync .ICS Calendar
      </button>
    </div>
  `;

  modal.classList.add('active');
}

function openSubmitModal() {
  document.getElementById('submit-modal').classList.add('active');
}

function closeModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
}

function saveToCalendar(name, dates) {
  alert(`✓ Calendar event "${name}" (${dates}) added to your queue!`);
}

document.addEventListener('DOMContentLoaded', () => {
  renderEvents(EVENTS_DATA);

  // Search and selects
  document.getElementById('search-input').addEventListener('input', applyFilters);
  document.getElementById('format-filter').addEventListener('change', applyFilters);
  document.getElementById('status-filter').addEventListener('change', applyFilters);
  document.getElementById('sort-filter').addEventListener('change', applyFilters);

  // Quick tabs
  document.querySelectorAll('.tab-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      document.querySelectorAll('.tab-pill').forEach(p => p.classList.remove('active'));
      e.currentTarget.classList.add('active');
      selectedCategory = e.currentTarget.getAttribute('data-cat');
      applyFilters();
    });
  });

  // Modal triggers
  document.getElementById('open-submit-btn').addEventListener('click', openSubmitModal);
  document.getElementById('open-submit-hero-btn').addEventListener('click', openSubmitModal);
  document.querySelectorAll('.modal-close-btn').forEach(b => b.addEventListener('click', closeModals));

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-overlay')) closeModals();
    });
  });

  const submitForm = document.getElementById('event-submit-form');
  if (submitForm) {
    submitForm.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('submit-feedback').style.display = 'block';
      setTimeout(() => {
        closeModals();
        submitForm.reset();
        document.getElementById('submit-feedback').style.display = 'none';
      }, 1600);
    });
  }
});


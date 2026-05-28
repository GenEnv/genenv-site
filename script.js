let projects = window.GENENV_CONTENT?.projects || [
  {
    title: "Human-AI Co-Design Framework",
    year: "2026",
    type: "Research",
    status: "pending",
    description: "Performance-aware co-design framework for constructed environments.",
    tags: ["research", "AI", "co-design"],
    palette: ["#182018", "#566954", "#d8d8cf", "#9b4938"],
    texture: "grid",
    media: "assets/site-media/optimized/ppt-09-image99.webp",
    href: "pages/human-ai-co-design.html",
  },
  {
    title: "Decoding Urban Form",
    year: "2026",
    type: "Research",
    status: "active",
    description: "UBC APSC-PAEI funded research on urban form and computational interpretation.",
    tags: ["research", "urban form", "tool"],
    palette: ["#171713", "#58717a", "#c7c2b5", "#d7e0dc"],
    texture: "mesh",
    media: "assets/site-media/optimized/ppt-11-image13.webp",
    href: "pages/decoding-urban-form.html",
  },
  {
    title: "GenAI & LLM-Enabled Co-Design",
    year: "2025-2026",
    type: "Research",
    status: "active",
    description: "Work Learn supported research on generative AI, language models, and design collaboration.",
    tags: ["research", "AI", "co-design"],
    palette: ["#2a2923", "#9b4938", "#ddddd5", "#6b6f60"],
    texture: "contour",
    media: "assets/site-media/optimized/ppt-14-image102.webp",
    href: "pages/genai-llm-codesign.html",
  },
  {
    title: "Digital Thermal Sandbox",
    year: "2026",
    type: "Research",
    status: "active",
    description: "Trees and Materials: a microclimate simulation project with Yuhao Lu and collaborators.",
    tags: ["research", "simulation", "microclimate"],
    palette: ["#efeee9", "#58717a", "#171713", "#b8bab2"],
    texture: "scan",
    media: "assets/site-media/optimized/ppt-15-image50.webp",
    href: "pages/digital-thermal-sandbox.html",
  },
  {
    title: "Generative Planting at Scale",
    year: "2024",
    type: "Publication / Talk",
    status: "published",
    description: "Generative AI approach to planting design, published in JoDLA and presented through ASLA.",
    tags: ["publication", "AI", "landscape"],
    palette: ["#11130f", "#d8d8cf", "#566954", "#9b4938"],
    texture: "mesh",
    media: "assets/site-media/optimized/ppt-05-image78.webp",
    href: "pages/generative-planting.html",
  },
  {
    title: "RiverGAN",
    year: "2022",
    type: "Publication / Tool",
    status: "published",
    description: "Fluvial landform generation based on physical simulations and generative adversarial networks.",
    tags: ["publication", "tool", "landform"],
    palette: ["#dad9cf", "#171713", "#9b4938", "#58717a"],
    texture: "grid",
    media: "assets/site-media/optimized/ppt-03-image30.webp",
    href: "pages/rivergan.html",
  },
  {
    title: "Streetscape Creator",
    year: "2021",
    type: "Tool",
    status: "completed",
    description: "Computational design contract with SWA Group.",
    tags: ["tool", "urbanism", "practice"],
    palette: ["#232820", "#6f7568", "#d0cfc5", "#58717a"],
    texture: "scan",
    media: "assets/site-media/optimized/ppt-04-image55.webp",
    href: "pages/streetscape-creator.html",
  },
  {
    title: "Robotic Landscapes",
    year: "2019",
    type: "Tool",
    status: "completed",
    description: "Autodesk-supported project with Bradley Cantrell.",
    tags: ["tool", "landscape", "robotics"],
    palette: ["#171713", "#566954", "#b8bab2", "#9b4938"],
    texture: "contour",
    media: "assets/site-media/optimized/ppt-06-image76.webp",
    href: "pages/robotic-landscapes.html",
  },
  {
    title: "Landscape Agents",
    year: "2025",
    type: "Workshop",
    status: "completed",
    description: "DigitalFUTURES workshop at Tongji University with Runjia Tian.",
    tags: ["course", "workshop", "AI"],
    palette: ["#1c211b", "#58717a", "#efeee9", "#9b4938"],
    texture: "mesh",
    media: "assets/site-media/optimized/ppt-17-image71.webp",
    href: "pages/landscape-agents.html",
  },
  {
    title: "The Third Eye",
    year: "2019",
    type: "Exhibition",
    status: "exhibited",
    description: "Curator / exhibitor in Eye of the City, Bi-City Biennale of Urbanism and Architecture, Shenzhen.",
    tags: ["exhibition", "urbanism", "media"],
    palette: ["#11130f", "#9b4938", "#b8bab2", "#58717a"],
    texture: "grid",
    media: "assets/site-media/optimized/ppt-01-image93.webp",
    href: "pages/third-eye.html",
  },
];

const grid = document.querySelector("#projectGrid");
const dialog = document.querySelector("#projectDialog");
const dialogContent = document.querySelector("#dialogContent");
const closeButton = document.querySelector(".dialog-close");
const filterButtons = Array.from(document.querySelectorAll(".filter-chip"));
const clusterMap = document.querySelector("#clusterMap");
const activeProjectTitle = document.querySelector("#activeProjectTitle");
const activeProjectMeta = document.querySelector("#activeProjectMeta");
const activeProjectDescription = document.querySelector("#activeProjectDescription");
const activeProjectLink = document.querySelector("#activeProjectLink");
const heroPanel = document.querySelector(".hero-panel");
const panelKicker = document.querySelector(".panel-kicker");
const hero = document.querySelector(".hero");
let activeHomeNodeId = null;
let activeLegendFilter = null;
let draggedNode = null;
let dragOffset = { x: 0, y: 0 };
let panelHovered = false;

let homeNodes = window.GENENV_CONTENT?.nodes || [
  {
    id: "p-human-ai",
    label: "Human-AI",
    title: "Human-AI Co-Design Framework",
    meta: "Research · 2026",
    description: "Performance-aware co-design framework for constructed environments.",
    type: "research",
    tags: ["landscape", "computation", "design"],
    gx: 7,
    gy: 7,
    href: "pages/human-ai-co-design.html",
    media: "assets/site-media/optimized/ppt-09-image99.webp",
  },
  {
    id: "p-urban-form",
    label: "Urban Form",
    title: "Decoding Urban Form",
    meta: "Research · 2026",
    description: "Computational interpretation of urban form, supported by UBC APSC-PAEI.",
    type: "research",
    tags: ["urbanism", "computation", "tool"],
    gx: 13,
    gy: 6,
    href: "pages/decoding-urban-form.html",
    media: "assets/site-media/optimized/ppt-11-image13.webp",
  },
  {
    id: "p-llm",
    label: "LLM Co-Design",
    title: "GenAI & LLM-Enabled Co-Design",
    meta: "Research · 2025-2026",
    description: "Research on generative AI, language models, and collaborative design systems.",
    type: "research",
    tags: ["AI", "computation", "design"],
    gx: 10,
    gy: 13,
    href: "pages/genai-llm-codesign.html",
    media: "assets/site-media/optimized/ppt-14-image102.webp",
  },
  {
    id: "p-planting",
    label: "Planting",
    title: "Generative Planting at Scale",
    meta: "Writing · 2024",
    description: "A generative AI approach to planting design, published in JoDLA and presented through ASLA.",
    type: "writing",
    tags: ["landscape", "AI", "writing"],
    gx: 5,
    gy: 17,
    href: "pages/generative-planting.html",
    media: "assets/site-media/optimized/ppt-05-image78.webp",
  },
  {
    id: "p-rivergan",
    label: "RiverGAN",
    title: "RiverGAN",
    meta: "Tool · 2022",
    description: "Fluvial landform generation based on physical simulations and generative adversarial networks.",
    type: "tool",
    tags: ["landscape", "simulation", "tool"],
    gx: 16,
    gy: 16,
    href: "pages/rivergan.html",
    media: "assets/site-media/optimized/ppt-03-image30.webp",
  },
  {
    id: "t-des212",
    label: "DES 212",
    title: "DES 212: Design Media II",
    meta: "Teaching · UBC 2025 W2",
    description: "Design media, representation, computation, and critical tool use.",
    type: "teaching",
    tags: ["teaching", "media", "design"],
    gx: 24,
    gy: 6,
    href: "pages/des-212.html",
  },
  {
    id: "t-arch515",
    label: "ARCH 515",
    title: "ARCH 515: Design Media I (LARC)",
    meta: "Teaching · UBC 2025 W1",
    description: "Media foundations for landscape architecture.",
    type: "teaching",
    tags: ["teaching", "landscape", "media"],
    gx: 30,
    gy: 12,
    href: "pages/arch-515.html",
  },
  {
    id: "t-arch540",
    label: "ARCH 540",
    title: "ARCH 540: Studio V: Designing the Design",
    meta: "Teaching · UBC 2025 W1",
    description: "A studio archive for designing design systems and methods.",
    type: "teaching",
    tags: ["teaching", "design", "systems"],
    gx: 25,
    gy: 18,
    href: "pages/arch-540.html",
  },
  {
    id: "people-xun",
    label: "Xun Liu",
    title: "Xun Liu",
    meta: "People · Director",
    description: "Assistant Professor at UBC School of Architecture + Landscape Architecture.",
    type: "people",
    tags: ["people", "director"],
    gx: 12,
    gy: 22,
    href: "pages/xun-liu.html",
  },
  {
    id: "people-ra",
    label: "RAs",
    title: "Research Assistants",
    meta: "People · Lab",
    description: "Research assistants working on Decoding Urban Form and GenAI & LLM-Enabled Co-Design.",
    type: "people",
    tags: ["people", "research"],
    gx: 19,
    gy: 22,
    href: "pages/research-assistants.html",
  },
  {
    id: "people-students",
    label: "Students",
    title: "Students",
    meta: "People · Teaching",
    description: "Selected student projects connect course archives back to the lab's research field.",
    type: "people",
    tags: ["people", "teaching"],
    gx: 27,
    gy: 23,
    href: "pages/students.html",
  },
];

let homeEdges = window.GENENV_CONTENT?.edges || [
  ["people-xun", "p-human-ai"],
  ["people-xun", "p-urban-form"],
  ["people-xun", "p-llm"],
  ["people-xun", "t-des212"],
  ["people-xun", "t-arch515"],
  ["people-xun", "t-arch540"],
  ["people-ra", "p-urban-form"],
  ["people-ra", "p-llm"],
  ["people-students", "t-des212"],
  ["people-students", "t-arch515"],
  ["people-students", "t-arch540"],
  ["t-des212", "p-llm"],
  ["t-arch540", "p-human-ai"],
  ["t-arch515", "p-planting"],
  ["p-human-ai", "p-llm"],
  ["p-planting", "p-rivergan"],
  ["p-urban-form", "p-rivergan"],
];

function textureFor(type) {
  const textures = {
    grid:
      "linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)",
    mesh:
      "radial-gradient(circle at 20% 30%, rgba(255,255,255,.36) 0 2px, transparent 3px), radial-gradient(circle at 74% 62%, rgba(255,255,255,.22) 0 2px, transparent 3px)",
    contour: "repeating-radial-gradient(circle at 35% 45%, rgba(255,255,255,.22) 0 1px, transparent 1px 16px)",
    scan: "repeating-linear-gradient(0deg, rgba(255,255,255,.24) 0 1px, transparent 1px 13px)",
  };
  return textures[type] || textures.grid;
}

function backgroundFor(project) {
  const [a, b, c, d] = project.palette;
  return `
    radial-gradient(circle at 18% 24%, ${c}, transparent 18%),
    radial-gradient(circle at 72% 34%, ${d}, transparent 22%),
    linear-gradient(135deg, ${a}, ${b} 54%, ${c})
  `;
}

function renderProjects(filter = "all") {
  const visible = projects.filter((project) => filter === "all" || project.tags.includes(filter));
  grid.innerHTML = visible
    .map(
      (project, index) => `
        <a
          class="project-card"
          href="${project.href}"
          data-index="${projects.indexOf(project)}"
          style="--card-bg: ${backgroundFor(project)}; --texture: ${textureFor(project.texture)}; --x: ${
            28 + index * 9
          }%; --y: ${22 + index * 7}%"
        >
          <span class="project-visual" aria-hidden="true"></span>
          <span class="project-info">
            <span>
              <span class="project-kicker">
                <span>${project.type}</span>
                <span>${project.year}</span>
              </span>
              <h3>${project.title}</h3>
              <p>${project.description}</p>
            </span>
            <span class="project-tags">
              ${project.tags.slice(0, 3).map((tag) => `<span>${tag}</span>`).join("")}
            </span>
          </span>
        </a>
      `
    )
    .join("");
}

function renderContentSections() {
  const projectList = document.querySelector("#projects .compact-list");
  if (projectList) {
    projectList.innerHTML = projects
      .filter((project) => project.tags.includes("research") || project.tags.includes("tool"))
      .slice(0, 7)
      .map(
        (project) => `
          <article>
            <span>${project.year}</span>
            <strong>${project.title}</strong>
          </article>
        `
      )
      .join("");
  }

  const teachingList = document.querySelector("#teaching .course-list");
  if (teachingList) {
    teachingList.innerHTML = projects
      .filter((project) => project.tags.includes("course"))
      .map(
        (project) => `
          <article class="course-row">
            <span>${project.year}</span>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
          </article>
        `
      )
      .join("");
  }

  const writingList = document.querySelector("#writing .writing-list");
  if (writingList) {
    writingList.innerHTML = projects
      .filter((project) => project.tags.includes("publication") || project.tags.includes("writing"))
      .map(
        (project) => `
          <a href="${project.href}" aria-label="${project.title}">
            <span>${project.year}</span>
            <strong>${project.title}</strong>
            <em>${project.description}</em>
          </a>
        `
      )
      .join("");
  }
}

function selectHomeNode(nodeId) {
  const node = homeNodes.find((item) => item.id === nodeId);
  if (!node) return;
  activeHomeNodeId = node.id;
  activeProjectTitle.textContent = node.title;
  panelKicker.textContent = node.type;
  activeProjectMeta.textContent = `${node.meta.split("·").pop().trim()} · ${node.tags.join(" · ")}`;
  activeProjectDescription.textContent = node.description;
  activeProjectLink.href = node.href;
  activeProjectLink.setAttribute("aria-label", `Open ${node.title}`);
  heroPanel.classList.remove("is-empty");
  heroPanel.classList.add("is-visible");
  positionHeroPanel(node);
  heroPanel.style.setProperty("--card-color", nodeColor(node.type));
  heroPanel.style.setProperty("--card-media", node.media ? `url('${node.media}')` : "none");
  document.querySelectorAll(".map-node").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.id === node.id);
  });
  document.querySelectorAll(".cluster-edge").forEach((edge) => {
    const active = edge.dataset.from === node.id || edge.dataset.to === node.id;
    edge.classList.toggle("is-active", active);
  });
}

function renderClusterMap() {
  const edges = homeEdges
    .map(([from, to], index) => {
      const a = homeNodes.find((node) => node.id === from);
      const b = homeNodes.find((node) => node.id === to);
      return `<path class="cluster-edge" data-from="${from}" data-to="${to}" style="--edge-index: ${index}" d="${edgePath(a, b, index)}"></path>`;
    })
    .join("");
  const nodes = homeNodes
    .map(
      (node, index) => `
        <button class="map-node ${node.type}" type="button" data-id="${node.id}" style="--gx: ${node.gx}; --gy: ${node.gy}; --node-color: ${nodeColor(node.type)}; --node-index: ${index}">
          <span class="pixel-icon" aria-hidden="true"></span>
          <span class="map-node-label">${node.label}</span>
        </button>
      `
    )
    .join("");
  clusterMap.innerHTML = `
    <svg aria-hidden="true" focusable="false" preserveAspectRatio="none">${edges}</svg>
    ${nodes}
  `;
  clusterMap.appendChild(heroPanel);
  clusterMap.querySelectorAll(".map-node").forEach((node) => {
    node.addEventListener("mouseenter", () => {
      clusterMap.classList.add("is-near");
      previewHomeNode(node.dataset.id);
    });
    node.addEventListener("mouseleave", () => {
      clusterMap.classList.remove("is-near");
      clearHomePreview();
    });
    node.addEventListener("click", (event) => {
      event.stopPropagation();
      selectHomeNode(node.dataset.id);
    });
    node.addEventListener("focus", () => selectHomeNode(node.dataset.id));
    node.addEventListener("pointerdown", startNodeDrag);
  });
  document.querySelectorAll(".cluster-legend button").forEach((button) => {
    button.addEventListener("click", () => toggleLegendFilter(button.dataset.filter));
  });
  updateAllEdges();
  clusterMap.addEventListener("click", resetHomeMap);
}

function edgePath(a, b, edgeIndex = 0) {
  const start = nodePoint(a);
  const end = nodePoint(b);
  const size = gridSize();
  const turnX = Math.abs(start.x - end.x) > size * 4 ? snapPixel((start.x + end.x) / 2) : start.x;
  const route = [start, { x: turnX, y: start.y }, { x: turnX, y: end.y }, end];
  return roundedPath(route, size);
}

function roundedPath(points, radius) {
  if (points.length < 2) return "";
  const commands = [`M ${points[0].x} ${points[0].y}`];
  for (let i = 1; i < points.length - 1; i += 1) {
    const previous = points[i - 1];
    const current = points[i];
    const next = points[i + 1];
    const incoming = Math.hypot(current.x - previous.x, current.y - previous.y);
    const outgoing = Math.hypot(next.x - current.x, next.y - current.y);
    const r = Math.min(radius, incoming / 2, outgoing / 2);
    if (r < 1) {
      commands.push(`L ${current.x} ${current.y}`);
      continue;
    }
    const inX = current.x - ((current.x - previous.x) / incoming) * r;
    const inY = current.y - ((current.y - previous.y) / incoming) * r;
    const outX = current.x + ((next.x - current.x) / outgoing) * r;
    const outY = current.y + ((next.y - current.y) / outgoing) * r;
    commands.push(`L ${inX} ${inY}`);
    commands.push(`Q ${current.x} ${current.y} ${outX} ${outY}`);
  }
  const last = points[points.length - 1];
  commands.push(`L ${last.x} ${last.y}`);
  return commands.join(" ");
}

function startNodeDrag(event) {
  event.stopPropagation();
  const target = event.currentTarget;
  const node = homeNodes.find((item) => item.id === target.dataset.id);
  if (!node) return;
  const rect = clusterMap.getBoundingClientRect();
  const size = gridSize();
  draggedNode = node;
  dragOffset.x = event.clientX - rect.left - node.gx * size;
  dragOffset.y = event.clientY - rect.top - node.gy * size;
  target.setPointerCapture(event.pointerId);
  clusterMap.classList.add("is-dragging");
  selectHomeNode(node.id);
}

function dragNode(event) {
  if (!draggedNode) return;
  const rect = clusterMap.getBoundingClientRect();
  const size = gridSize();
  const rawX = event.clientX - rect.left - dragOffset.x;
  const rawY = event.clientY - rect.top - dragOffset.y;
  draggedNode.gx = snapToGrid(rawX / size, 1, 1, Math.floor(rect.width / size) - 1);
  draggedNode.gy = snapToGrid(rawY / size, 1, 3, Math.floor(rect.height / size) - 1);
  updateNodeLayout(draggedNode);
}

function stopNodeDrag() {
  draggedNode = null;
  clusterMap.classList.remove("is-dragging");
}

function hideSelection() {
  activeHomeNodeId = null;
  heroPanel.classList.remove("is-visible");
  heroPanel.classList.add("is-empty");
  document.querySelectorAll(".map-node").forEach((item) => {
    item.classList.remove("is-active");
  });
  document.querySelectorAll(".cluster-edge").forEach((edge) => {
    edge.classList.remove("is-active");
  });
}

function resetHomeMap(event) {
  if (event?.target?.closest?.(".map-node")) return;
  if (event?.target?.closest?.(".hero-panel")) return;
  hideSelection();
  clearLegendFilter();
}

function updateNodeLayout(node) {
  const el = clusterMap.querySelector(`.map-node[data-id="${node.id}"]`);
  if (el) {
    el.style.setProperty("--gx", node.gx);
    el.style.setProperty("--gy", node.gy);
  }
  clusterMap.querySelectorAll(`.cluster-edge[data-from="${node.id}"]`).forEach((edge) => {
    const to = homeNodes.find((item) => item.id === edge.dataset.to);
    edge.setAttribute("d", edgePath(node, to, Number(edge.style.getPropertyValue("--edge-index")) || 0));
  });
  clusterMap.querySelectorAll(`.cluster-edge[data-to="${node.id}"]`).forEach((edge) => {
    const from = homeNodes.find((item) => item.id === edge.dataset.from);
    edge.setAttribute("d", edgePath(from, node, Number(edge.style.getPropertyValue("--edge-index")) || 0));
  });
  if (activeHomeNodeId === node.id) {
    positionHeroPanel(node);
  }
}

function updateAllEdges() {
  const rect = clusterMap.getBoundingClientRect();
  const svg = clusterMap.querySelector("svg");
  if (svg) {
    svg.setAttribute("viewBox", `0 0 ${Math.max(rect.width, 1)} ${Math.max(rect.height, 1)}`);
  }
  clusterMap.querySelectorAll(".cluster-edge").forEach((edge) => {
    const from = homeNodes.find((item) => item.id === edge.dataset.from);
    const to = homeNodes.find((item) => item.id === edge.dataset.to);
    edge.setAttribute("d", edgePath(from, to, Number(edge.style.getPropertyValue("--edge-index")) || 0));
  });
  if (activeHomeNodeId) {
    const activeNode = homeNodes.find((item) => item.id === activeHomeNodeId);
    if (activeNode) positionHeroPanel(activeNode);
  }
}

function positionHeroPanel(node) {
  const rect = clusterMap.getBoundingClientRect();
  const point = nodePoint(node);
  const size = gridSize();
  const panelWidth = window.innerWidth < 760 ? size * 9 : size * 10;
  const panelHeight = panelWidth;
  const margin = size;
  const canOpenRight = point.x + size + panelWidth <= rect.width - margin;
  const canOpenDown = point.y + size + panelHeight <= rect.height - margin;
  const rawLeft = canOpenRight ? point.x + size : point.x - size - panelWidth;
  const rawTop = canOpenDown ? point.y + size : point.y - size - panelHeight;
  const left = snapPixel(Math.min(Math.max(rawLeft, margin), rect.width - panelWidth - margin));
  const top = snapPixel(Math.min(Math.max(rawTop, margin), rect.height - panelHeight - margin));
  const originX = canOpenRight ? "0" : "100%";
  const originY = canOpenDown ? "0" : "100%";
  heroPanel.style.left = `${left}px`;
  heroPanel.style.top = `${top}px`;
  heroPanel.style.setProperty("--panel-width", `${panelWidth}px`);
  heroPanel.style.setProperty("--panel-height", `${panelHeight}px`);
  heroPanel.style.setProperty("--panel-origin-x", originX);
  heroPanel.style.setProperty("--panel-origin-y", originY);
}

function nodePoint(node) {
  const size = gridSize();
  return {
    x: node.gx * size,
    y: node.gy * size,
  };
}

function snapPixel(value) {
  const size = gridSize();
  return Math.round(value / size) * size;
}

function snapToGrid(value, unit, min, max) {
  return Math.min(Math.max(Math.round(value / unit) * unit, min), max);
}

function gridSize() {
  return Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--grid")) || 32;
}

function nodeColor(type) {
  if (type === "research") return "#6cb7ff";
  if (type === "tool") return "#35f4c7";
  if (type === "teaching") return "#ff6f61";
  if (type === "writing") return "#c994ff";
  return "#f5df7a";
}

function toggleLegendFilter(type) {
  activeLegendFilter = activeLegendFilter === type ? null : type;
  applyLegendFilter();
}

function previewHomeNode(nodeId) {
  document.querySelectorAll(".cluster-edge").forEach((edge) => {
    const active = edge.dataset.from === nodeId || edge.dataset.to === nodeId;
    edge.classList.toggle("is-preview", active);
  });
}

function clearHomePreview() {
  document.querySelectorAll(".cluster-edge").forEach((edge) => {
    edge.classList.remove("is-preview");
  });
}

function clearLegendFilter() {
  activeLegendFilter = null;
  applyLegendFilter();
}

function applyLegendFilter() {
  clusterMap.classList.toggle("has-filter", Boolean(activeLegendFilter));
  document.querySelectorAll(".cluster-legend button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === activeLegendFilter);
  });
  document.querySelectorAll(".map-node").forEach((node) => {
    const data = homeNodes.find((item) => item.id === node.dataset.id);
    node.classList.toggle("is-filtered", Boolean(activeLegendFilter && data.type === activeLegendFilter));
  });
  document.querySelectorAll(".cluster-edge").forEach((edge) => {
    const from = homeNodes.find((node) => node.id === edge.dataset.from);
    const to = homeNodes.find((node) => node.id === edge.dataset.to);
    const active = activeLegendFilter && (from.type === activeLegendFilter || to.type === activeLegendFilter);
    edge.classList.toggle("is-active", Boolean(active));
  });
}

function openProject(project) {
  dialogContent.innerHTML = `
    <div class="dialog-hero" style="--card-bg: ${backgroundFor(project)}">
      <h2>${project.title}</h2>
    </div>
    <div class="dialog-body">
      <dl>
        <div>
          <dt>Type</dt>
          <dd>${project.type}</dd>
        </div>
        <div>
          <dt>Year</dt>
          <dd>${project.year}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>${project.status}</dd>
        </div>
      </dl>
      <div>
        <p>${project.description}</p>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </div>
    </div>
  `;
  dialog.showModal();
}

closeButton.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderProjects(button.dataset.filter);
  });
});

renderProjects();
renderContentSections();
renderClusterMap();

function readPointer(event) {
  updateProximity(event.clientX, event.clientY);
}

function updateProximity(clientX, clientY) {
  const rect = clusterMap.getBoundingClientRect();
  const px = clientX - rect.left;
  const py = clientY - rect.top;
  const originX = Math.min(Math.max((px / Math.max(rect.width, 1)) * 100, 0), 100);
  const originY = Math.min(Math.max((py / Math.max(rect.height, 1)) * 100, 0), 100);
  clusterMap.style.setProperty("--origin-x", `${originX}%`);
  clusterMap.style.setProperty("--origin-y", `${originY}%`);
  hero.style.setProperty("--mouse-x", `${clientX}px`);
  hero.style.setProperty("--mouse-y", `${clientY}px`);
  let near = false;
  clusterMap.querySelectorAll(".map-node").forEach((nodeEl) => {
    const box = nodeEl.getBoundingClientRect();
    const cx = box.left + box.width / 2;
    const cy = box.top + box.height / 2;
    const distance = Math.hypot(clientX - cx, clientY - cy);
    const force = Math.max(0, 1 - distance / 150);
    nodeEl.style.setProperty("--proximity-scale", (1 + force).toFixed(3));
    nodeEl.classList.toggle("is-near", force > 0.22);
    if (force > 0.22) near = true;
  });
  clusterMap.classList.toggle("is-near", near);
}

function maybeDismissActiveNode(clientX, clientY) {
  if (!activeHomeNodeId || draggedNode || panelHovered) return;
  const activeEl = clusterMap.querySelector(`.map-node[data-id="${activeHomeNodeId}"]`);
  if (!activeEl) return;
  const box = activeEl.getBoundingClientRect();
  const cx = box.left + box.width / 2;
  const cy = box.top + box.height / 2;
  const distance = Math.hypot(clientX - cx, clientY - cy);
  if (distance > gridSize() * 6) {
    hideSelection();
  }
}

heroPanel.addEventListener("pointerenter", () => {
  panelHovered = true;
});
heroPanel.addEventListener("pointerleave", () => {
  panelHovered = false;
});
window.addEventListener("pointermove", readPointer);
window.addEventListener("pointermove", dragNode);
window.addEventListener("pointerup", stopNodeDrag);
window.addEventListener("pointercancel", stopNodeDrag);
window.addEventListener("resize", updateAllEdges);

(() => {
  const C = window.SITE_CONFIG;
  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const get = (path) => path.split(".").reduce((o, k) => (o ? o[k] : undefined), C.jp);
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches || !C.animations.enabled;

  const ICONS = {
    x: '<svg viewBox="0 0 24 24"><path d="M18 2h3l-7.5 8.6L22 22h-6.8l-5.3-6.9L3.8 22H.8l8-9.2L.5 2h7l4.8 6.3L18 2zm-1.2 18h1.9L7.3 3.9H5.3L16.8 20z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>',
    discord: '<svg viewBox="0 0 24 24"><path d="M20.3 4.4A19.8 19.8 0 0 0 15.4 3l-.2.5a18 18 0 0 1 4.5 2.3 15 15 0 0 0-15.4 0A18 18 0 0 1 8.8 3.5L8.6 3a19.8 19.8 0 0 0-4.9 1.4C.6 9 0 13.4.2 17.8a20 20 0 0 0 6 3l1.3-2.1a13 13 0 0 1-2-1l.5-.4a14.3 14.3 0 0 0 12 0l.5.4a13 13 0 0 1-2 1l1.3 2.1a20 20 0 0 0 6-3c.4-5.1-.9-9.5-3.5-13.4zM8.5 15.2c-1.2 0-2.1-1.1-2.1-2.4s.9-2.4 2.1-2.4 2.2 1.1 2.1 2.4c0 1.3-.9 2.4-2.1 2.4zm7 0c-1.2 0-2.1-1.1-2.1-2.4s.9-2.4 2.1-2.4 2.2 1.1 2.1 2.4c0 1.3-.9 2.4-2.1 2.4z"/></svg>',
    roblox: '<svg viewBox="0 0 24 24"><path d="M4.9 0 0 19.1 19.1 24 24 4.9 4.9 0zm9 14.6-5-1.3 1.3-5 5 1.3-1.3 5z"/></svg>',
    github: '<svg viewBox="0 0 24 24"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"/></svg>',
    swords: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3l9 9M21 3l-9 9M5 17l2 2M19 17l-2 2M3 21l6-6M21 21l-6-6"/></svg>',
    ui: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="14" rx="1"/><path d="M3 9h18M8 21h8"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></svg>',
    db: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',
    vfx: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/><circle cx="12" cy="12" r="2"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
  };

  // ---------- theme ----------
  const root = document.documentElement.style;
  for (const [k, v] of Object.entries(C.colors)) root.setProperty(`--${k}`, v);
  document.title = C.siteTitle;

  // ---------- text bindings ----------
  const fill = (t) => String(t ?? "").replace("{realName}", C.realName || C.name).replace("I'm  —", "I'm");
  document.querySelectorAll("[data-cfg]").forEach((n) => (n.textContent = fill(C[n.dataset.cfg])));
  document.querySelectorAll("[data-jp]").forEach((n) => (n.textContent = get(n.dataset.jp) ?? ""));
  document.querySelectorAll("[data-jp-list]").forEach((n) => (get(n.dataset.jpList) || []).forEach((t) => n.append(el("li", null, t))));

  // ---------- art layers ----------
  const artLayers = [];
  document.querySelectorAll("[data-img]").forEach((n) => {
    const cfg = C.images[n.dataset.img];
    if (!cfg || !cfg.src) { n.classList.add("art-empty"); return; }
    const img = new Image();
    img.onload = () => { n.style.backgroundImage = `url("${img.src}")`; if (cfg.size) n.style.backgroundSize = cfg.size; if (cfg.position) n.style.backgroundPosition = cfg.position; n.style.opacity = cfg.opacity ?? 1; n.classList.add("is-loaded"); };
    img.onerror = () => n.classList.add("art-empty"); // missing file → texture fallback, no broken image
    img.src = cfg.src + "?v=" + (C.version || 0);
    if (cfg.parallax) artLayers.push({ n, f: cfg.parallax });
  });
  if (C.images.texture?.src) { const t = $(".texture"); t.style.backgroundImage = `url("${C.images.texture.src}")`; t.style.opacity = C.images.texture.opacity ?? 0.2; }

  // ---------- nav socials ----------
  const linkSocials = C.socials.filter((s) => s.url);
  linkSocials.forEach((s) => { const a = el("a", "icon-btn" + (C.brandColors ? " brand-" + s.id : ""), ICONS[s.id]); a.href = s.url; a.target = "_blank"; a.rel = "noopener"; a.setAttribute("aria-label", s.label); $("#navSocial").append(a); });

  // ---------- stats ----------
  C.stats.forEach((s) => $("#stats").append(el("div", "stat", `<strong>${s.value === "auto" ? C.projects.length : s.value}</strong><span>${s.label}</span>`)));

  // ---------- skills ----------
  C.skills.forEach((s) => $("#skillGrid").append(el("div", "skill-card", `<span class="skill-icon">${ICONS[s.icon] || ICONS.spark}</span><span>${s.name}</span>`)));

  // ---------- projects ----------
  const ytId = (u) => (u.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/) || [])[1];
  const grid = $("#projectGrid");
  C.projects.forEach((p, i) => {
    const id = ytId(p.youtube);
    const card = el("article", "card reveal");
    card.dataset.cat = p.category;
    card.style.setProperty("--i", i);
    card.innerHTML = `
      <button class="thumb" aria-label="Play ${p.title}">
        <img src="https://i.ytimg.com/vi/${id}/maxresdefault.jpg" alt="" loading="lazy" onerror="this.onerror=()=>this.style.visibility='hidden';this.src='https://i.ytimg.com/vi/${id}/hqdefault.jpg'">
        <span class="play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>
        ${p.note ? `<span class="badge">${p.note}</span>` : ""}
      </button>
      <div class="card-meta"><h3>${p.title}</h3><span>${p.category}</span></div>`;
    const thumb = card.querySelector(".thumb");
    thumb.addEventListener("click", () => openVideo(id, p.title));
    if (!reduced && C.animations.hoverPreview && matchMedia("(hover: hover)").matches) {
      let t;
      thumb.addEventListener("mouseenter", () => { t = setTimeout(() => {
        const f = el("iframe", "preview"); f.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&controls=0&rel=0&playsinline=1`; f.tabIndex = -1; f.setAttribute("aria-hidden", "true"); thumb.append(f);
      }, 500); });
      thumb.addEventListener("mouseleave", () => { clearTimeout(t); thumb.querySelector(".preview")?.remove(); });
    }
    grid.append(card);
  });

  // filters
  const filters = $("#filters");
  ["All", ...C.categories].forEach((c, i) => {
    const b = el("button", "chip" + (i ? "" : " is-active"), c); b.role = "tab";
    b.addEventListener("click", () => {
      filters.querySelectorAll(".chip").forEach((x) => x.classList.toggle("is-active", x === b));
      grid.querySelectorAll(".card").forEach((k) => (k.hidden = c !== "All" && k.dataset.cat !== c));
    });
    filters.append(b);
  });
  $("#viewAll").addEventListener("click", (e) => { e.preventDefault(); filters.firstChild.click(); });

  // ---------- video modal ----------
  const modal = $("#modal"), frame = $("#modalFrame");
  function openVideo(id, title) {
    frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&vq=hd1080" title="${title}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    $("#modalTitle").textContent = title; modal.hidden = false; document.body.style.overflow = "hidden"; document.body.classList.add("video-open");
    $(".modal-close").focus();
  }
  function closeVideo() { modal.hidden = true; frame.innerHTML = ""; document.body.style.overflow = ""; document.body.classList.remove("video-open"); }
  modal.querySelectorAll("[data-close]").forEach((n) => n.addEventListener("click", closeVideo));
  addEventListener("keydown", (e) => e.key === "Escape" && !modal.hidden && closeVideo());

  // ---------- contact ----------
  $("#contactLine").textContent = (C.commissionsOpen ? "Open for commissions. " : "") + "Feel free to reach out through any of my socials.";
  const toast = $("#toast");
  C.socials.forEach((s) => {
    const a = el(s.copy ? "button" : "a", "social-card" + (C.brandColors ? " brand-" + s.id : ""), `<span class="social-icon">${ICONS[s.id]}</span><span class="social-text"><strong>${s.label}</strong><small>${s.sub}</small></span><span class="arrow">→</span>`);
    if (s.copy) a.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(C.discordUsername); toast.textContent = `Copied "${C.discordUsername}"`; }
      catch { toast.textContent = `Discord: ${C.discordUsername}`; }
      toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 1800);
    });
    else { a.href = s.url; a.target = "_blank"; a.rel = "noopener"; }
    $("#socialGrid").append(a);
  });

  // ---------- nav ----------
  const toggle = $(".nav-toggle"), links = $(".nav-links");
  toggle.addEventListener("click", () => { const o = links.classList.toggle("open"); toggle.setAttribute("aria-expanded", o); });
  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => links.classList.remove("open")));
  const spy = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting &&
    links.querySelectorAll("a").forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + e.target.id))), { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));

  // ---------- scroll progress / font-ready fade ----------
  const bar = $("#progress");
  if (C.animations.scrollProgress && bar) addEventListener("scroll", () => { const d = document.documentElement; bar.style.transform = `scaleX(${scrollY / (d.scrollHeight - innerHeight)})`; }, { passive: true });
  else bar?.remove();
  (document.fonts?.ready || Promise.resolve()).then(() => document.body.classList.add("ready"));
  setTimeout(() => document.body.classList.add("ready"), 1500); // never hold the page hostage to a font

  // ---------- motion ----------
  if (reduced || !C.animations.revealOnScroll) document.querySelectorAll(".reveal").forEach((n) => n.classList.add("in"));
  else { const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 }); document.querySelectorAll(".reveal").forEach((n) => io.observe(n)); }

  if (!reduced && C.animations.parallax && artLayers.length) {
    let ticking = false;
    const run = () => { artLayers.forEach(({ n, f }) => { const r = n.parentElement.getBoundingClientRect(); if (r.bottom < -200 || r.top > innerHeight + 200) return; n.style.transform = `translate3d(0,${Math.round((r.top - innerHeight / 2) * -f)}px,0)`; }); ticking = false; };
    addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(run); ticking = true; } }, { passive: true }); run();
  }
})();

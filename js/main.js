(() => {
  'use strict';

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];

  let lang = 'en';
  let activeFilter = 'all';
  const projects = window.portfolioProjects || [];
  const T = window.portfolioTranslations || { en: {}, ar: {} };

  const text = (value) =>
    typeof value === 'string' ? value : value?.[lang] || value?.en || '';

  const escapeHtml = (value) =>
    String(value ?? '').replace(/[&<>"']/g, (character) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    })[character]);

  // Treat URLs and local image paths as real images. Existing thumbnail IDs
  // such as "sales", "table", and "python" continue to use generated previews.
  function isImageSource(value) {
    return typeof value === 'string' && (
      /^(https?:)?\/\//i.test(value) ||
      /^(\.\.\/|\.\/|\/)/.test(value) ||
      /\.(avif|gif|jpe?g|png|svg|webp)(\?.*)?(#.*)?$/i.test(value)
    );
  }

  function renderPreview(source, large = false, alt = 'Project preview') {
    if (isImageSource(source)) {
      return `<img class="project-preview-image${large ? ' is-large' : ''}" src="${escapeHtml(source)}" alt="${escapeHtml(alt)}" loading="lazy">`;
    }
    return chartSvg(source || 'dashboard', large);
  }

  function chartSvg(kind = 'dashboard', large = false) {
    const width = large ? 780 : 360;
    const height = large ? 270 : 145;
    let bars = '';
    let labels = '';

    for (let index = 0; index < 7; index += 1) {
      const barHeight = [42, 70, 51, 88, 64, 100, 79][index] * (large ? 1.2 : 0.7);
      bars += `<rect x="${large ? 40 + index * 36 : 25 + index * 15}" y="${height - 28 - barHeight}" width="${large ? 19 : 9}" height="${barHeight}" rx="3" fill="${index === 5 ? '#20e0b2' : '#168ca1'}" opacity="${index === 5 ? 1 : 0.8}"/>`;
    }

    for (let index = 0; index < 4; index += 1) {
      labels += `<line x1="${large ? 25 : 15}" y1="${45 + index * (height - 75) / 3}" x2="${width - 18}" y2="${45 + index * (height - 75) / 3}" stroke="#173b4d" stroke-dasharray="3 5"/>`;
    }

    const title = kind === 'sql' ? 'QUERY RESULTS'
      : kind === 'python' ? 'EXPLORATORY ANALYSIS'
      : kind === 'table' ? 'DATA PREVIEW'
      : kind === 'sales' ? 'SALES OVERVIEW'
      : 'PERFORMANCE OVERVIEW';

    const line = `<polyline points="${large ? '45,150 120,125 190,140 260,91 330,112 400,72 470,88 540,45 615,61 700,28' : '25,88 65,72 105,81 145,49 185,62 225,37 265,46 315,23'}" fill="none" stroke="#20e0b2" stroke-width="${large ? 3 : 2.5}" stroke-linecap="round" stroke-linejoin="round"/>`;
    const codePreview = kind === 'sql' || kind === 'python';
    const codeBars = Array.from({ length: large ? 8 : 5 }, (_, index) =>
      `<rect x="${large ? 105 : 60}" y="${large ? 54 + index * 23 : 39 + index * 17}" width="${(index % 3 + 2) * (large ? 42 : 24)}" height="${large ? 5 : 3}" rx="2" fill="${index % 2 ? '#178e9e' : '#20bca1'}" opacity=".${index % 3 + 4}"/>`
    ).join('');

    return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${title} preview" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="bg-${kind}-${large ? 'l' : 's'}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#0c3045"/><stop offset="1" stop-color="#061522"/></linearGradient></defs>
      <rect width="100%" height="100%" fill="url(#bg-${kind}-${large ? 'l' : 's'})"/>
      <rect x="0" y="0" width="${large ? 80 : 44}" height="100%" fill="#04101c"/>
      <circle cx="${large ? 18 : 12}" cy="15" r="4" fill="#20e0b2"/>
      <rect x="${large ? 13 : 8}" y="${large ? 35 : 28}" width="${large ? 48 : 27}" height="4" rx="2" fill="#1b6270"/>
      <rect x="${large ? 13 : 8}" y="${large ? 49 : 38}" width="${large ? 37 : 20}" height="3" rx="2" fill="#17394a"/>
      <rect x="${large ? 13 : 8}" y="${large ? 62 : 48}" width="${large ? 42 : 23}" height="3" rx="2" fill="#17394a"/>
      <text x="${large ? 100 : 57}" y="${large ? 27 : 20}" font-size="${large ? 11 : 7}" fill="#9cb8c8" font-family="sans-serif" letter-spacing="1.2">${title}</text>
      ${codePreview ? `${codeBars}<ellipse cx="${width * 0.78}" cy="${height * 0.63}" rx="${large ? 60 : 31}" ry="${large ? 45 : 25}" fill="#08799b" opacity=".5"/>` : `${labels}
        <rect x="${large ? 100 : 57}" y="${large ? 42 : 30}" width="${large ? 245 : 120}" height="${large ? 75 : 47}" rx="5" fill="#082538" stroke="#17495b"/>
        <text x="${large ? 112 : 65}" y="${large ? 58 : 40}" font-size="${large ? 8 : 5}" fill="#8baaba">${large ? 'KEY METRICS' : 'METRICS'}</text>
        <text x="${large ? 112 : 65}" y="${large ? 91 : 63}" font-size="${large ? 20 : 12}" fill="#e7f8fc" font-family="sans-serif">${kind === 'sales' ? 'Sales trends' : 'Overview'}</text>
        <rect x="${large ? 365 : 192}" y="${large ? 42 : 30}" width="${large ? 385 : 150}" height="${large ? 75 : 47}" rx="5" fill="#082538" stroke="#17495b"/>
        <text x="${large ? 380 : 201}" y="${large ? 58 : 40}" font-size="${large ? 8 : 5}" fill="#8baaba">${large ? 'TREND EXPLORER' : 'TREND'}</text>${line}
        <rect x="${large ? 100 : 57}" y="${large ? 132 : 86}" width="${large ? 310 : 145}" height="${large ? 115 : 48}" rx="5" fill="#082538" stroke="#17495b"/>
        <text x="${large ? 112 : 65}" y="${large ? 148 : 96}" font-size="${large ? 8 : 5}" fill="#8baaba">${large ? 'CATEGORY COMPARISON' : 'CATEGORIES'}</text>${bars}
        <rect x="${large ? 425 : 211}" y="${large ? 132 : 86}" width="${large ? 325 : 131}" height="${large ? 115 : 48}" rx="5" fill="#082538" stroke="#17495b"/>
        <circle cx="${large ? 505 : 246}" cy="${large ? 185 : 111}" r="${large ? 32 : 15}" fill="none" stroke="#20e0b2" stroke-width="${large ? 13 : 6}"/>
        <circle cx="${large ? 505 : 246}" cy="${large ? 185 : 111}" r="${large ? 32 : 15}" fill="none" stroke="#1587a1" stroke-width="${large ? 13 : 6}" stroke-dasharray="${large ? '70 150' : '32 80'}" transform="rotate(-90 ${large ? 505 : 246} ${large ? 185 : 111})"/>
        <rect x="${large ? 560 : 270}" y="${large ? 166 : 101}" width="${large ? 135 : 54}" height="5" rx="2" fill="#1b6170"/>
        <rect x="${large ? 560 : 270}" y="${large ? 180 : 111}" width="${large ? 95 : 38}" height="5" rx="2" fill="#17394a"/>
        <rect x="${large ? 560 : 270}" y="${large ? 194 : 121}" width="${large ? 115 : 46}" height="5" rx="2" fill="#17394a"/>`}
    </svg>`;
  }

  function statusLabel(project) {
    return T[lang]?.[project.status] || project.status || '';
  }

  function renderProjects() {
    const visibleProjects = projects.filter((project) =>
      activeFilter === 'all' || (project.categories || []).includes(activeFilter)
    );
    const count = $('#projectCount');
    const grid = $('#projectsGrid');
    if (!count || !grid) return;

    count.textContent = String(visibleProjects.length).padStart(2, '0');
    grid.innerHTML = visibleProjects.map((project) => `
      <article class="project-card">
        <div class="project-thumb">
          ${renderPreview(project.thumbnail, false, text(project.title))}
          <span class="project-status ${escapeHtml(project.status || '')}">${escapeHtml(statusLabel(project))}</span>
        </div>
        <span class="project-type">◈ ${escapeHtml(text(project.type))}</span>
        <h3>${escapeHtml(text(project.title))}</h3>
        <p>${escapeHtml(text(project.description))}</p>
        <div class="tag-row">${(project.tools || []).slice(0, 3).map((tool) => `<span>${escapeHtml(tool)}</span>`).join('')}</div>
        <button class="case-btn" data-project="${escapeHtml(project.id)}">${escapeHtml(T[lang]?.viewCase || 'View case study')} <span>↗</span></button>
      </article>
    `).join('');

    $$('[data-project]').forEach((button) => {
      button.addEventListener('click', () => openCase(button.dataset.project));
    });
  }

  function linkHtml(url, label) {
    if (url) {
      return `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} ↗</a>`;
    }
    return `<a class="empty-link" href="#" onclick="return false" title="${escapeHtml(T[lang]?.noLink || 'No link available')}">${escapeHtml(label)} · ${escapeHtml(T[lang]?.noLink || 'No link available')}</a>`;
  }

  function listHtml(items = []) {
    return items.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  }

  function openImage(source, alt = 'Project screenshot') {
    const viewer = $('#imageViewer');
    const image = viewer?.querySelector('img');
    if (!viewer || !image) return;

    if (isImageSource(source)) {
      image.src = source;
    } else {
      image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(chartSvg(source || 'dashboard', true))}`;
    }
    image.alt = alt;
    viewer.classList.add('open');
    viewer.setAttribute('aria-hidden', 'false');
  }

  function openCase(id) {
    const project = projects.find((item) => item.id === id);
    if (!project) return;

    const setText = (selector, value) => {
      const element = $(selector);
      if (element) element.textContent = value ?? '';
    };
    const setHtml = (selector, value) => {
      const element = $(selector);
      if (element) element.innerHTML = value ?? '';
    };

    // Keep a stable project ID instead of trying to identify it by translated title.
    const modal = $('#caseModal');
    if (modal) modal.dataset.projectId = project.id;

    setText('#caseTitle', text(project.title));
    setText('#caseDescription', text(project.description));
    setText('#caseStatus', statusLabel(project));
    setText('#caseCategory', text(project.type));
    setHtml('#caseTools', (project.tools || []).map((tool) => `<span>${escapeHtml(tool)}</span>`).join(''));
    setHtml('#caseCover', renderPreview(project.thumbnail, true, text(project.title)));
    setText('#caseProblemText', text(project.businessProblem));
    setHtml('#caseQuestionsList', listHtml(project.questions?.[lang] || project.questions?.en || []));
    setText('#caseDatasetText', text(project.dataset));
    setHtml('#caseMethodList', listHtml(project.methodology?.[lang] || project.methodology?.en || []));
    setHtml('#caseFindingsList', listHtml(project.findings?.[lang] || project.findings?.en || []));
    setHtml('#caseDeliverablesList', listHtml(project.deliverables?.[lang] || project.deliverables?.en || []));

    const gallery = project.screenshots?.length ? project.screenshots : [project.thumbnail];
    setHtml('#caseGalleryGrid', gallery.map((source, index) => `
      <button class="gallery-item" data-shot-index="${index}" aria-label="Open project screenshot ${index + 1}">
        ${renderPreview(source, false, `${text(project.title)} screenshot ${index + 1}`)}
      </button>
    `).join(''));

    const links = linkHtml(project.links?.github, T[lang]?.github || 'GitHub')
      + linkHtml(project.links?.demo, T[lang]?.demo || 'Live demo')
      + linkHtml(project.links?.dataset, T[lang]?.datasetLink || 'Dataset');
    setHtml('#caseLinksList', links);
    setText('#sideDataset', text(project.dataset));
    setHtml('#sideTools', (project.tools || []).map((tool) => `<span>${escapeHtml(tool)}</span>`).join(''));
    setHtml('#sideMethod', listHtml(project.methodology?.[lang] || project.methodology?.en || []));
    setHtml('#sideLinks', links);

    $$('#caseNav a').forEach((anchor) => {
      anchor.classList.toggle('selected', anchor.getAttribute('href') === '#caseOverview');
    });
    if ($('#caseMain')) $('#caseMain').scrollTop = 0;
    modal?.classList.add('open');
    modal?.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    // Use the selected project's current screenshot source (URL or old preview ID).
    $$('[data-shot-index]').forEach((button) => {
      button.addEventListener('click', () => {
        const source = gallery[Number(button.dataset.shotIndex)];
        openImage(source, `${text(project.title)} screenshot`);
      });
    });
  }

  function closeCase() {
    const modal = $('#caseModal');
    modal?.classList.remove('open');
    modal?.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  function closeImageViewer() {
    const viewer = $('#imageViewer');
    viewer?.classList.remove('open');
    viewer?.setAttribute('aria-hidden', 'true');
  }

  function applyLanguage() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    $$('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (T[lang]?.[key]) element.textContent = T[lang][key];
    });
    $$('[data-i18n-html]').forEach((element) => {
      const key = element.dataset.i18nHtml;
      if (T[lang]?.[key]) element.innerHTML = T[lang][key];
    });

    const languageButton = $('#langBtn');
    if (languageButton) {
      languageButton.innerHTML = lang === 'en'
        ? 'عربي <span class="switch"><i></i></span> EN'
        : 'EN <span class="switch"><i></i></span> عربي';
    }

    renderProjects();
    const openModal = $('#caseModal');
    const currentProjectId = openModal?.dataset.projectId;
    if (openModal?.classList.contains('open') && currentProjectId) {
      openCase(currentProjectId);
    }
  }

  $('#filters')?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    activeFilter = button.dataset.filter;
    $$('.filter').forEach((filter) => filter.classList.toggle('active', filter === button));
    renderProjects();
  });

  $('#langBtn')?.addEventListener('click', () => {
    lang = lang === 'en' ? 'ar' : 'en';
    applyLanguage();
  });

  $('#menuBtn')?.addEventListener('click', () => $('#nav')?.classList.toggle('open'));
  $$('#nav a').forEach((anchor) => anchor.addEventListener('click', () => $('#nav')?.classList.remove('open')));
  $$('[data-close]').forEach((button) => button.addEventListener('click', closeCase));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeCase();
      closeImageViewer();
    }
  });

  $('.viewer-close')?.addEventListener('click', closeImageViewer);
  $('#caseNav')?.addEventListener('click', (event) => {
    const anchor = event.target.closest('a');
    if (!anchor) return;
    $('#caseNav').querySelectorAll('a').forEach((item) => item.classList.toggle('selected', item === anchor));
  });

  const sections = $$('main section[id]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        $$('#nav a').forEach((anchor) => {
          anchor.classList.toggle('active', anchor.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach((section) => observer.observe(section));
  }

  applyLanguage();
})();
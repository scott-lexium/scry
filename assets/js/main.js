// ── Platform detection ────────────────────────────────────────────────────

const platform = (() => {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes('mac'))   return 'mac';
  if (ua.includes('win'))   return 'win';
  if (ua.includes('linux')) return 'linux';
  return 'mac';
})();

const RELEASES_BASE = 'https://github.com/Scottlexium/scrcpy/releases/latest/download';

const DOWNLOADS = {
  mac: [
    { label: 'Apple Silicon (M1/M2/M3/M4)', file: 'scrcpy-gui-mac-arm64.dmg',  size: '~85 MB', primary: true },
    { label: 'Intel Mac',                   file: 'scrcpy-gui-mac-x64.dmg',    size: '~88 MB' },
  ],
  win: [
    { label: 'Windows Installer (x64)',     file: 'scrcpy-gui-win-x64.exe',           size: '~78 MB', primary: true },
    { label: 'Portable (no install)',        file: 'scrcpy-gui-win-x64-portable.exe',  size: '~78 MB' },
  ],
  linux: [
    { label: 'AppImage (x64)',              file: 'scrcpy-gui-linux-x64.AppImage', size: '~90 MB', primary: true },
    { label: 'Debian/Ubuntu (.deb)',         file: 'scrcpy-gui-linux-x64.deb',     size: '~65 MB' },
  ],
};

// ── Highlight current platform on download page ───────────────────────────

function initDownloadPage() {
  document.querySelectorAll('.download-card').forEach(card => {
    card.classList.remove('recommended');
  });
  const active = document.querySelector(`[data-platform="${platform}"]`);
  if (active) active.classList.add('recommended');
}

// ── Hero download button → correct platform ───────────────────────────────

function initHeroButton() {
  const btn = document.getElementById('hero-dl-btn');
  if (!btn) return;
  const labels = { mac: 'Download for macOS', win: 'Download for Windows', linux: 'Download for Linux' };
  btn.textContent = labels[platform] || 'Download';
  btn.href = 'download.html';
}

// ── Animated number counters ──────────────────────────────────────────────

function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current.toLocaleString() + suffix;
      if (current >= target) clearInterval(timer);
    }, 16);
  });
}

// ── Intersection observer for counter trigger ────────────────────────────

const statsSection = document.querySelector('.stats-bar');
if (statsSection) {
  new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) animateCounters();
  }, { threshold: 0.5 }).observe(statsSection);
}

document.addEventListener('DOMContentLoaded', () => {
  initHeroButton();
  initDownloadPage();
});

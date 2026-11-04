// Content script running inside Tinkercad Editor
(() => {
  if (window.__bf_tinkercad_injected) return;
  window.__bf_tinkercad_injected = true;

  function injectFloatingButton() {
    if (document.getElementById('bf-tinkercad-fab')) return;

    const fab = document.createElement('div');
    fab.id = 'bf-tinkercad-fab';
    fab.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999999;
      display: flex;
      align-items: center;
      gap: 8px;
      background: #18140f;
      color: #f0a23a;
      border: 2px solid #f0a23a;
      border-radius: 30px;
      padding: 8px 16px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 13px;
      font-weight: 700;
      box-shadow: 0 4px 16px rgba(0,0,0,0.4);
      cursor: pointer;
      user-select: none;
      transition: all 0.2s ease;
    `;
    fab.innerHTML = `
      <span style="font-size: 16px;">🔬</span>
      <span>Export to Biofilament Lab</span>
    `;

    fab.addEventListener('mouseenter', () => {
      fab.style.transform = 'translateY(-2px) scale(1.02)';
      fab.style.boxShadow = '0 6px 20px rgba(240, 162, 58, 0.35)';
      fab.style.background = '#251e15';
    });

    fab.addEventListener('mouseleave', () => {
      fab.style.transform = 'none';
      fab.style.boxShadow = '0 4px 16px rgba(0,0,0,0.4)';
      fab.style.background = '#18140f';
    });

    fab.addEventListener('click', () => {
      if (typeof window.runBiofilamentImport === 'function') {
        window.runBiofilamentImport();
      } else if (typeof window.runLayerlingImport === 'function') {
        window.runLayerlingImport();
      } else {
        // Inject extension importer script
        const s = document.createElement('script');
        s.src = chrome.runtime.getURL('importer.js');
        s.onload = () => {
          s.remove();
          if (typeof window.runBiofilamentImport === 'function') {
            window.runBiofilamentImport();
          } else if (typeof window.runLayerlingImport === 'function') {
            window.runLayerlingImport();
          }
        };
        (document.head || document.documentElement).appendChild(s);
      }
    });

    document.body.appendChild(fab);
  }

  // Inject when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectFloatingButton);
  } else {
    setTimeout(injectFloatingButton, 2000);
  }
})();

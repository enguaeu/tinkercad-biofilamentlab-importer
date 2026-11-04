document.addEventListener('DOMContentLoaded', () => {
  const btnExport = document.getElementById('btn-export');
  const btnOpenLab = document.getElementById('btn-open-lab');
  const statusDiv = document.getElementById('status');

  btnOpenLab.addEventListener('click', () => {
    chrome.tabs.create({ url: 'http://192.168.50.5:8081/labs/biofilament_lab/' });
  });

  btnExport.addEventListener('click', async () => {
    statusDiv.textContent = 'جاري فحص الصفحة...';
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (!tab || !tab.url) {
        statusDiv.textContent = 'تعذر الوصول إلى التبويب النشط';
        return;
      }

      const isTinkercad = tab.url.includes('tinkercad.com/things/') && tab.url.includes('/edit');
      if (!isTinkercad) {
        statusDiv.innerHTML = '⚠️ افتح تصميماً في محرر Tinkercad أولاً:<br><code style="font-size:10px;">tinkercad.com/things/.../edit</code>';
        return;
      }

      statusDiv.textContent = 'جاري تفعيل أداة التصدير في Tinkercad...';

      // Inject importer.js then call runLayerlingImport()
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['importer.js']
      });

      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          if (typeof window.runBiofilamentImport === 'function') {
            window.runBiofilamentImport();
          } else if (typeof window.runLayerlingImport === 'function') {
            window.runLayerlingImport();
          } else {
            alert('تعذر تشغيل أداة التصدير');
          }
        }
      });

      statusDiv.textContent = '✓ تم إطلاق نافذة التصدير داخل Tinkercad بنجاح!';
    } catch (err) {
      console.error(err);
      statusDiv.textContent = 'خطأ: ' + (err.message || err);
    }
  });
});

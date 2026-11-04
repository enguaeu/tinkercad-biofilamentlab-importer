# Tinkercad to Biofilament Lab
### أداة تصدير التصاميم والمجسمات من Tinkercad إلى مختبر Biofilament Lab ثلاثي الأبعاد

Bring your Tinkercad designs directly into **Biofilament Lab** so you can continue editing, assembling, and slicing them for 3D printing.

---

## 🌐 روابط مباشرة / Quick Links
- **صفحة الإعداد المباشرة (Setup Page):** [https://enguaeu.github.io/tinkercad-biofilamentlab-importer/](https://enguaeu.github.io/tinkercad-biofilamentlab-importer/)
- **المختبر المحلي (Local Lab Studio):** [http://192.168.50.5:8081/labs/biofilament_lab/](http://192.168.50.5:8081/labs/biofilament_lab/)
- **تحميل الإضافة المستقلة (Offline Edition):** [tinkercad-biofilamentlab-browser.zip](https://github.com/enguaeu/tinkercad-biofilamentlab-importer/releases/latest/download/tinkercad-biofilamentlab-browser.zip)
- **إضافة كروم وإيدج (Chrome / Edge MV3 Extension):** [tinkercad-biofilamentlab-extension-mv3.zip](https://github.com/enguaeu/tinkercad-biofilamentlab-importer/releases/latest/download/tinkercad-biofilamentlab-extension-mv3.zip)

---

## 🚀 طريقة الاستخدام (How to Use)

### الخيار 1: علامة المتصفح (Bookmarklet - بدون أي تثبيت)
1. افتح صفحة الإعداد [Setup Page](https://enguaeu.github.io/tinkercad-biofilamentlab-importer/) في متصفحك.
2. أظهر شريط الإشارات المرجعية (`Ctrl + Shift + B` على ويندوز/لينكس، أو `Cmd + Shift + B` على ماك).
3. اسحب زر **Export to Biofilament Lab** الأزرق وضعه في شريط الإشارات.
4. ادخل إلى أي تصميم مفتوح في محرر [Tinkercad](https://www.tinkercad.com/).
5. اضغط على العلامة المحفوظة؛ سيتم استخراج التصميم بالكامل وتحميل ملف بصيغة `.lyl`.
6. افتح [Biofilament Lab](http://192.168.50.5:8081/labs/biofilament_lab/) واسحب الملف إليه مباشرة لبدء العمل.

### الخيار 2: إضافة المتصفح الرسمية (Chrome & Edge Extension MV3)
1. حمّل ملف `tinkercad-biofilamentlab-extension-mv3.zip` وفك الضغط عنه.
2. افتح صفحة الإضافات في متصفحك: `chrome://extensions` أو `edge://extensions`.
3. فعّل **وضع المطور (Developer mode)** في أعلى اليمين.
4. اضغط على **تحميل حزمة غير مضغوطة (Load unpacked)** واختر مجلد الإضافة `extension`.
5. ستظهر أيقونة Biofilament Lab في شريط أدوات المتصفح، بالإضافة إلى زر عائم داخل Tinkercad للتصدير بنقرة واحدة!

---

## ⚙️ مميزات الأداة (Features)
- **دعم الأجزاء المحددة (Selected-parts export):** اختر مجسماً أو مجموعة محددة لتصديرها وحدها أو تصدير التصميم كاملاً.
- **تجميعات ضخمة (Large Assemblies):** دعم تقسيم التصاميم الكبيرة تلقائياً لتناسب حدود الذاكرة.
- **تكامل تام مع صيغة .lyl:** متوافق 100% مع محرك Biofilament Lab ثلاثي الأبعاد ونواة Manifold CSG.
- **حفظ محلي وأمان كامل:** التحويل يتم بالكامل داخل متصفحك دون إرسال بيانات المجسمات إلى أي خادم خارجي.

---

## 📦 التثبيت والتطوير (Development)
```bash
# تثبيت التبعيات
npm ci --ignore-scripts

# بناء صفحات المتصفح وعلامة الإشارة
python tools/build_browser.py

# حزم الإصدار الكامل والأرشيفات
python tools/package_release.py
```

## 📜 الترخيص (License)
Apache-2.0 License · مبني ومطور لـ [Biofilament UAE](https://biofilament.ae) بواسطة [@enguaeu](https://github.com/enguaeu).

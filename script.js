// ══════════════════════════════════════════
// LANGUAGE SYSTEM
// ══════════════════════════════════════════
var LANG = 'en';

var I18N = {
  // Header
  'live-feed': {en:'LIVE THREAT FEED', ar:'بث التهديدات المباشر'},
  // Tabs
  'tab-map':   {en:'Community Threat Map', ar:'خريطة التهديدات'},
  'tab-ai':    {en:'Scam Detector', ar:'كاشف النصب'},
  'tab-sim':   {en:'Phishing Simulator', ar:'محاكي التصيد'},
  'tab-kb':    {en:'Knowledge Base', ar:'قاعدة المعرفة'},
  'tab-stats': {en:'Statistics', ar:'الإحصاءات'},
  // Sidebar
  'total-reports': {en:'Total Reports', ar:'إجمالي البلاغات'},
  'this-week':     {en:'This Week', ar:'هذا الأسبوع'},
  'critical':      {en:'Critical', ar:'حرج'},
  'threat-types':  {en:'Threat Types', ar:'أنواع التهديدات'},
  'filter-lbl':    {en:'// filter by severity', ar:'// تصفية حسب الخطورة'},
  'f-all':         {en:'All', ar:'الكل'},
  'f-critical':    {en:'Critical', ar:'حرج'},
  'f-high':        {en:'High', ar:'عالٍ'},
  'f-medium':      {en:'Medium', ar:'متوسط'},
  'f-low':         {en:'Low', ar:'منخفض'},
  'recent-reports':{en:'// recent reports', ar:'// آخر البلاغات'},
  'report-scam':   {en:'⚠ Report a Scam', ar:'⚠ بلّغ عن نصبة'},
  // AI page
  'ai-title':      {en:'🔍 Scam Detector', ar:'🔍 كاشف النصب'},
  'ai-subtitle':   {en:'Paste any suspicious message, SMS, email, or link below. Our pattern-based engine will analyze it for phishing signals, scam patterns, and threats specific to Kuwait.', ar:'الصق أي رسالة مشبوهة أو رابط في الأسفل. المحرك سيحللها ويكشف الأنماط الاحتيالية والتهديدات الخاصة بالكويت.'},
  'analyze-btn':   {en:'🔍 Analyze Message', ar:'🔍 تحليل الرسالة'},
  'analyzing':     {en:'⏳ Analyzing...', ar:'⏳ جاري التحليل...'},
  'ai-hint':       {en:'Supports Arabic & English', ar:'يدعم العربي والإنجليزي'},
  'risk-score':    {en:'RISK SCORE', ar:'درجة الخطر'},
  // Simulator
  'sim-title':     {en:'🎯 Phishing Simulator', ar:'🎯 محاكي التصيد'},
  'sim-subtitle':  {en:'Test your ability to spot real Kuwaiti scams. Can you identify the threat?', ar:'اختبر قدرتك على اكتشاف النصب الكويتي. هل تستطيع تحديد التهديد؟'},
  'sim-next':      {en:'Next Scenario →', ar:'السيناريو التالي →'},
  'try-again':     {en:'🔄 Try Again', ar:'🔄 حاول مجدداً'},
  'score-label':   {en:'out of', ar:'من'},
  // Stats
  'total-incidents':{en:'Total Incidents', ar:'إجمالي الحوادث'},
  'stat-critical':  {en:'Critical', ar:'حرج'},
  'phishing-attacks':{en:'Phishing Attacks', ar:'هجمات التصيد'},
  'threat-cats':    {en:'Threat Categories', ar:'فئات التهديدات'},
  'refresh-now':    {en:'↻ Refresh Now', ar:'↻ تحديث الآن'},
  'type-bars':      {en:'// threats by type', ar:'// التهديدات حسب النوع'},
  'sev-bars':       {en:'// threats by severity', ar:'// التهديدات حسب الخطورة'},
  'area-heat':      {en:'// incidents by area (top 12)', ar:'// الحوادث حسب المنطقة'},
  // Modal
  'modal-title':    {en:'Report a New Threat', ar:'بلّغ عن تهديد جديد'},
  'modal-title-lbl':{en:'Scam Title *', ar:'عنوان النصبة *'},
  'modal-desc-lbl': {en:'Description', ar:'الوصف'},
  'modal-type-lbl': {en:'Threat Type', ar:'نوع التهديد'},
  'modal-sev-lbl':  {en:'Severity', ar:'الخطورة'},
  'modal-area-lbl': {en:'Area *', ar:'المنطقة *'},
  'submit-btn':     {en:'Submit Report', ar:'إرسال البلاغ'},
  'ok-msg':         {en:'✓ Report submitted! Thank you for keeping Kuwait safe.', ar:'✓ تم إرسال البلاغ! شكراً لمساهمتك في حماية الكويت.'},
  // KB
  'kb-read':        {en:'📖 Read Details →', ar:'📖 اقرأ التفاصيل →'},
  'kb-details-lbl': {en:'// Full Details', ar:'// التفاصيل الكاملة'},
  // AI Examples
  'ai-try':         {en:'Try:', ar:'جرّب:'},
  'ex-civil':       {en:'Civil ID', ar:'بطاقة مدنية'},
  'ex-relative':    {en:'Relative Scam', ar:'نصب القريب'},
  'ex-otp':         {en:'OTP Theft', ar:'سرقة OTP'},
  'ex-invest':      {en:'Fake Investment', ar:'استثمار وهمي'},
  'ex-legit':       {en:'Legit Message', ar:'رسالة شرعية'},
  // KB Modal nav
  'kb-prev':        {en:'← Previous', ar:'← السابق'},
  'kb-next':        {en:'Next →', ar:'التالي →'},
  'kb-source':      {en:'🔗 Official Source', ar:'🔗 المصدر الرسمي'},
  'kb-search-ph':   {en:'Search knowledge base...', ar:'ابحث في قاعدة المعرفة...'},
  'kb-no-results':  {en:'No articles found matching your search.', ar:'لا توجد مقالات مطابقة لبحثك.'},
  // About
  'tab-about':      {en:'About', ar:'حول'},
  'about-desc':     {en:'ShieldKW is Kuwait\'s first community-driven AI cybersecurity awareness platform. Built to protect Kuwaiti citizens from digital threats through real-time threat mapping, AI-powered scam detection, and interactive security education.', ar:'ShieldKW هي أول منصة كويتية مجتمعية للتوعية بالأمن السيبراني بالذكاء الاصطناعي. مصممة لحماية المواطنين الكويتيين من التهديدات الرقمية عبر خرائط التهديدات الحية وكشف الاحتيال بالذكاء الاصطناعي والتعليم الأمني التفاعلي.'},
  'about-f1-title': {en:'Community Threat Map', ar:'خريطة التهديدات المجتمعية'},
  'about-f1-desc':  {en:'Real-time interactive map showing reported cyber threats across all Kuwait governorates. Filter by severity, explore by area, and report new threats.', ar:'خريطة تفاعلية حية تعرض التهديدات السيبرانية المبلّغ عنها في جميع محافظات الكويت. فلتر حسب الخطورة واستكشف حسب المنطقة وأبلغ عن تهديدات جديدة.'},
  'about-f2-title': {en:'Scam Detector', ar:'كاشف النصب'},
  'about-f2-desc':  {en:'Paste any suspicious message and our pattern-based engine analyzes it for 50+ Kuwait-specific scam patterns — from fake KNET alerts to rental scams and chain messages.', ar:'الصق أي رسالة مشبوهة ومحرك التحليل يفحصها لأكثر من 50 نمط احتيال كويتي — من تنبيهات KNET المزيفة إلى احتيال الإيجار والرسائل المتسلسلة.'},
  'about-f3-title': {en:'Phishing Simulator', ar:'محاكي التصيد'},
  'about-f3-desc':  {en:'Interactive quiz with 42 real-world Kuwaiti scam scenarios — 20 randomly selected each session. Test your ability to identify phishing, social engineering, and fraud attempts.', ar:'اختبار تفاعلي مع 42 سيناريو احتيال كويتي حقيقي — 20 يتم اختيارها عشوائياً كل جلسة. اختبر قدرتك على اكتشاف التصيد والهندسة الاجتماعية ومحاولات الاحتيال.'},
  'about-f4-title': {en:'Knowledge Base', ar:'قاعدة المعرفة'},
  'about-f4-desc':  {en:'18 comprehensive cybersecurity articles covering NIST frameworks, Kuwait cybercrime law, bank security, social media privacy, and more.', ar:'18 مقالة شاملة في الأمن السيبراني تغطي أطر NIST وقانون الجرائم المعلوماتية الكويتي وأمان البنوك وخصوصية السوشيال ميديا والمزيد.'},
  'about-f5-title': {en:'Live Statistics', ar:'إحصاءات حية'},
  'about-f5-desc':  {en:'Real-time dashboard with threat breakdowns by type, severity, area, governorate, and timeline. Refresh anytime with the Refresh Now button.', ar:'لوحة تحكم حية مع تفاصيل التهديدات حسب النوع والخطورة والمنطقة والمحافظة والجدول الزمني. حدّث في أي وقت بزر التحديث.'},
  'about-f6-title': {en:'Full Bilingual Support', ar:'دعم ثنائي اللغة كامل'},
  'about-f6-desc':  {en:'Complete Arabic & English support with RTL layout switching, bilingual content across all pages, and Kuwaiti dialect detection in the AI engine.', ar:'دعم كامل للعربية والإنجليزية مع تبديل اتجاه RTL ومحتوى ثنائي اللغة في جميع الصفحات وكشف اللهجة الكويتية في محرك الذكاء الاصطناعي.'},
  'about-tech-title':{en:'Technology Stack', ar:'التقنيات المستخدمة'},
  'about-tech-desc': {en:'Built with modern web technologies for a fast, responsive, and secure experience.', ar:'مبنية بتقنيات ويب حديثة لتجربة سريعة ومتجاوبة وآمنة.'},
  'about-highlights-title': {en:'Project Highlights', ar:'أبرز الإنجازات'},
  'about-highlights-desc': {en:'Key numbers and achievements of the ShieldKW platform.', ar:'أرقام وإنجازات رئيسية لمنصة ShieldKW.'},
  'hl-reports':    {en:'Demo Threat Reports', ar:'بلاغات تهديد تجريبية'},
  'hl-scenarios':  {en:'Phishing Scenarios', ar:'سيناريو تصيّد'},
  'hl-articles':   {en:'Knowledge Articles', ar:'مقالة معرفية'},
  'hl-rules':      {en:'Scam Detection Rules', ar:'قاعدة كشف احتيال'},
  'hl-langs':      {en:'Languages (EN/AR)', ar:'لغات (EN/AR)'},
  'hl-govs':       {en:'Governorates Covered', ar:'محافظات مغطاة'},
  'about-rights':    {en:'All rights reserved.', ar:'جميع الحقوق محفوظة.'},
  'about-purpose':   {en:'Built as a cybersecurity awareness initiative for the people of Kuwait.', ar:'مبنية كمبادرة توعية بالأمن السيبراني لأبناء الكويت.'},
  'export-btn':      {en:'Export', ar:'تصدير'},
  'export-copied':   {en:'✓ CSV downloaded!', ar:'✓ تم تحميل الملف!'},
  // Toasts
  'no-msg-toast':    {en:'Please enter a message to analyze.',ar:'الرجاء إدخال رسالة للتحليل.'},
  'url-copied':      {en:'✓ URL copied',ar:'✓ تم نسخ الرابط'},
  'copy-failed':     {en:'Copy failed — copy manually',ar:'تعذّر النسخ، انسخ يدوياً'},
  'report-ok-toast': {en:'✓ Report submitted!',ar:'✓ تم إرسال البلاغ!'},
  // Simulator
  'sim-q-prefix':    {en:'Q',ar:'س'},
  'sim-score-lbl':   {en:'Score:',ar:'النتيجة:'},
  // Stats
  'gov-chart':       {en:'// incidents by governorate',ar:'// الحوادث حسب المحافظة'},
  // Source badges
  'source-demo':     {en:'Demo',ar:'تجريبي'},
  'source-community':{en:'Community',ar:'مجتمعي'},
  // AI actions panel
  'warn-dont-act':   {en:'🚫 Do not act before verifying',ar:'🚫 لا تتصرف قبل التحقق'},
  'warn-no-link':    {en:'Do not click any link in the message',ar:'لا تضغط أي رابط في الرسالة'},
  'warn-no-otp':     {en:'Do not send any OTP code or password',ar:'لا ترسل أي رمز OTP أو كلمة مرور'},
  'warn-no-transfer':{en:'Do not transfer money before confirming in person',ar:'لا تحوّل أي مبلغ مالي قبل التأكد شخصياً'},
  'warn-call-direct':{en:'Call the official entity directly on their known number',ar:'اتصل بالجهة الرسمية مباشرة على رقمها المعروف'},
  'url-check-lbl':   {en:'// detected url — scan it',ar:'// فحص الرابط المكتشف'},
  'vt-scan-btn':     {en:'Scan URL in VirusTotal',ar:'افحص الرابط في VirusTotal'},
  'copy-url-btn':    {en:'Copy URL',ar:'نسخ الرابط'},
  'call-official-lbl':{en:'// contact the official entity directly',ar:'// اتصل بالجهة الرسمية مباشرة'},
  'telecom-name':    {en:'Telecom Companies',ar:'شركات الاتصالات'},
  'telecom-nums':    {en:'Zain: 107 | Ooredoo: 121 | STC: 900',ar:'زين: 107 | Ooredoo: 121 | STC: 900'},
  'aramex-name':     {en:'Official Aramex',ar:'Aramex الرسمي'},
  'cbk-license':     {en:'Central Bank of Kuwait (license verification)',ar:'البنك المركزي الكويتي (للتحقق من التراخيص)'},
  'cybercrime-name': {en:'Cybercrime Unit — Ministry of Interior',ar:'وحدة الجرائم المعلوماتية — وزارة الداخلية'},
  'cybercrime-num':  {en:'Cybercrime Unit: 1872',ar:'وحدة إدارة الجرائم الإلكترونية: 1872'},
  // Risk bar scale
  'risk-low':        {en:'LOW',      ar:'منخفض'},
  'risk-med':        {en:'MEDIUM',   ar:'متوسط'},
  'risk-high-lbl':   {en:'HIGH',     ar:'عالٍ'},
  'risk-crit-lbl':   {en:'CRITICAL', ar:'حرج'},
  // Scam Detector controls
  'clear-btn':       {en:'✕ Clear',          ar:'✕ مسح'},
  'copy-result-btn': {en:'📋 Copy Result',   ar:'📋 نسخ النتيجة'},
  'chars-lbl':       {en:'chars',            ar:'حرف'},
  'copied-ok':       {en:'✓ Copied!',        ar:'✓ تم النسخ!'},
  // Map
  'map-legend':      {en:'Legend',           ar:'المفتاح'},
  // Stats
  'top-hotspot':     {en:'🔥 HOTSPOT',       ar:'🔥 الأعلى'},
  // Hardcoded strings → i18n
  'area-select-ph':  {en:'— Select area —',  ar:'— اختر المنطقة —'},
  'tl-label':        {en:'// timeline — ',    ar:'// الجدول الزمني — '},
  'title-area-req':  {en:'Title and area are required!', ar:'العنوان والمنطقة مطلوبان!'},
  'reported-by':     {en:'Reported by community member.', ar:'بلاغ من أحد أفراد المجتمع.'},
  'sim-from':        {en:'From: ',            ar:'من: '},
  'sim-no-subject':  {en:'(No Subject)',      ar:'(بدون موضوع)'},
  'moi-paci':        {en:'MOI / PACI',        ar:'وزارة الداخلية / PACI'},
  'nbk-name':        {en:'National Bank of Kuwait (NBK)', ar:'بنك الكويت الوطني NBK'},
  'kfh-name':        {en:'Kuwait Finance House (KFH)',    ar:'بيت التمويل الكويتي KFH'},
  'cbk-name':        {en:'Central Bank of Kuwait (CBK)',  ar:'البنك المركزي الكويتي CBK'},
  'signals-detected':{en:'signals detected',  ar:'إشارة مكتشفة'},
  'risk-score-colon':{en:'Risk Score:',       ar:'درجة الخطر:'},
  'level-critical':  {en:'CRITICAL THREAT',   ar:'تهديد خطير'},
  'level-high':      {en:'HIGH RISK',         ar:'خطر عالٍ'},
  'level-medium':    {en:'MEDIUM RISK',       ar:'خطر متوسط'},
  'level-safe':      {en:'LIKELY SAFE',       ar:'على الأرجح آمن'},
  'score-msg-bad':   {en:'You need to review the Knowledge Base and practice more — scammers exploit lack of awareness.', ar:'لازم تراجع قسم Knowledge Base وتتدرب أكثر — المحتالون يستغلون قلة الوعي.'},
  'score-msg-ok':    {en:'Not bad! But there are weak points you need to work on. Review the examples you got wrong.', ar:'مو بطال! بس في نقاط ضعف تحتاج تشتغل عليها. راجع الأمثلة اللي غلطت فيها.'},
  'score-msg-good':  {en:'Good! You have solid awareness. Share ShieldKW with your family and friends to protect them.', ar:'كويس! عندك وعي جيد. شارك ShieldKW مع عيلتك وأصحابك لتحميهم.'},
  'score-msg-great': {en:'Excellent! You are an expert at detecting scams. Help others learn and protect themselves.', ar:'ممتاز! أنت خبير في اكتشاف الاحتيال. ساعد غيرك يتعلم ويحمي نفسه.'},
  'val-title-short': {en:'Title must be at least 3 characters.', ar:'العنوان يجب أن يكون 3 أحرف على الأقل.'},
  'val-title-long':  {en:'Title must be under 120 characters.', ar:'العنوان يجب أن يكون أقل من 120 حرفاً.'},
  'val-area-req':    {en:'Please select an area.', ar:'الرجاء اختيار المنطقة.'},
  'val-desc-long':   {en:'Description must be under 500 characters.', ar:'الوصف يجب أن يكون أقل من 500 حرف.'},
  'best-score':      {en:'Best:',             ar:'الأفضل:'},
};

function t(key){ return (I18N[key] && I18N[key][LANG]) || key; }

function toggleLang(){
  LANG = LANG === 'en' ? 'ar' : 'en';
  var btn = document.getElementById('langBtn');
  btn.textContent = LANG === 'en' ? 'عربي' : 'English';

  var html = document.documentElement;
  if(LANG === 'ar'){
    html.setAttribute('dir','rtl');
    html.setAttribute('lang','ar');
  } else {
    html.setAttribute('dir','ltr');
    html.setAttribute('lang','en');
  }

  applyLang();
}

function applyModalSelects(){
  var TYPE_OPTIONS = [
    {en:'Phishing',         ar:'تصيّد'},
    {en:'Financial Fraud',  ar:'احتيال مالي'},
    {en:'Social Engineering',ar:'هندسة اجتماعية'},
    {en:'Identity Theft',   ar:'سرقة هوية'},
    {en:'Malware',          ar:'برمجيات خبيثة'},
    {en:'Other',            ar:'أخرى'}
  ];
  var SEV_OPTIONS = [
    {en:'Critical', ar:'حرج'},
    {en:'High',     ar:'عالٍ'},
    {en:'Medium',   ar:'متوسط'},
    {en:'Low',      ar:'منخفض'}
  ];
  var fType = document.getElementById('fType');
  var fSev  = document.getElementById('fSev');
  if(fType){
    TYPE_OPTIONS.forEach(function(o,i){
      if(fType.options[i]) fType.options[i].text = o[LANG];
    });
  }
  if(fSev){
    SEV_OPTIONS.forEach(function(o,i){
      if(fSev.options[i]) fSev.options[i].text = o[LANG];
    });
  }
  var fArea = document.getElementById('fArea');
  if(fArea && fArea.options[0]){
    fArea.options[0].text = t('area-select-ph');
  }
}

function applyLang(){
  // Apply to all i18n elements
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var key = el.getAttribute('data-i18n');
    if(I18N[key]) el.textContent = I18N[key][LANG];
  });
  // Apply placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){
    var key = el.getAttribute('data-i18n-placeholder');
    if(I18N[key]) el.placeholder = I18N[key][LANG];
  });
  // Re-render dynamic content
  renderList();
  renderMarkers();
  renderSidebarStats();
  renderStats(true);
  buildKB();
  if(typeof loadScenario==='function') loadScenario();
  // Clear KB search on lang change
  var kbS = document.getElementById('kbSearch');
  if(kbS){ kbS.value = ''; }
  // Update report modal labels
  var mhd = document.querySelector('.mhd');
  if(mhd) mhd.textContent = t('modal-title');
  // Translate modal selects
  applyModalSelects();
}

// ══════════════════════════════════════════
// DATA
// ══════════════════════════════════════════
var CITIES={
  // ── Capital Governorate
  "Kuwait City":{lat:29.3759,lng:47.9774},
  "Sharq":{lat:29.3755,lng:48.0017},
  "Dasma":{lat:29.3590,lng:47.9940},
  "Bneid Al-Gar":{lat:29.3637,lng:47.9883},
  "Nugra":{lat:29.3650,lng:47.9570},
  "Shuwakh":{lat:29.3582,lng:47.9421},
  "Shuwaikh Industrial":{lat:29.3484,lng:47.9173},
  "Kaifan":{lat:29.3553,lng:47.9744},
  "Shamiya":{lat:29.3505,lng:47.9680},
  "Rawda":{lat:29.3444,lng:47.9877},
  "Adailiya":{lat:29.3400,lng:47.9780},
  "Khaldiya":{lat:29.3365,lng:47.9650},
  "Sulaibikhat":{lat:29.3388,lng:47.9200},
  "Doha":{lat:29.3530,lng:47.9330},
  "Mirqab":{lat:29.3680,lng:47.9870},
  "Abdullah Al-Salem":{lat:29.3475,lng:47.9810},
  "Nuzha":{lat:29.3510,lng:47.9930},
  "Faiha":{lat:29.3395,lng:47.9935},
  "Qibla":{lat:29.3710,lng:47.9720},
  // ── Hawalli Governorate
  "Hawalli":{lat:29.3427,lng:48.0286},
  "Salmiya":{lat:29.3347,lng:48.0650},
  "Rumaithiya":{lat:29.3202,lng:48.0650},
  "Mishref":{lat:29.3009,lng:48.0644},
  "Bayan":{lat:29.3167,lng:48.0563},
  "Bidaa":{lat:29.3364,lng:48.0463},
  "Surra":{lat:29.3333,lng:47.9958},
  "Qortuba":{lat:29.3310,lng:47.9833},
  "Salwa":{lat:29.2957,lng:48.0650},
  "Qadisiya":{lat:29.3585,lng:47.9905},
  "Jabriya":{lat:29.3190,lng:48.0440},
  "Hateen":{lat:29.3100,lng:48.0350},
  "Salam":{lat:29.3080,lng:48.0240},
  "Shaab":{lat:29.3600,lng:48.0100},
  "Maidan Hawalli":{lat:29.3450,lng:48.0350},
  "Siddiq":{lat:29.3230,lng:48.0100},
  // ── Farwaniya Governorate
  "Farwaniya":{lat:29.2767,lng:47.9585},
  "Jleeb Al-Shuyoukh":{lat:29.2868,lng:47.9674},
  "Khaitan":{lat:29.3017,lng:47.9710},
  "Ardiya":{lat:29.3052,lng:47.9332},
  "Rikka":{lat:29.2905,lng:47.9440},
  "Andalous":{lat:29.2755,lng:47.9333},
  "Omariya":{lat:29.3030,lng:47.9500},
  "Rehab":{lat:29.2900,lng:47.9280},
  "Sabah Al-Nasser":{lat:29.2820,lng:47.9430},
  "Ishbiliya":{lat:29.2700,lng:47.9550},
  "Dajeej":{lat:29.2620,lng:47.9500},
  "Firdous":{lat:29.2680,lng:47.9650},
  "Khaitan Al-Janoubi":{lat:29.2950,lng:47.9680},
  "Abdullah Al-Mubarak":{lat:29.2470,lng:47.9180},
  // ── Ahmadi Governorate
  "Ahmadi":{lat:29.0769,lng:48.0838},
  "Mangaf":{lat:29.0953,lng:48.1200},
  "Mahboula":{lat:29.1459,lng:48.1190},
  "Fintas":{lat:29.1714,lng:48.1170},
  "Fahaheel":{lat:29.0817,lng:48.1300},
  "Abu Halifa":{lat:29.1244,lng:48.1170},
  "Rumaila":{lat:29.1132,lng:48.0774},
  "Sabahiya":{lat:29.1350,lng:48.0870},
  "Riqqa":{lat:29.1500,lng:48.0950},
  "Hadiya":{lat:29.1600,lng:48.0800},
  // Wafra removed — too far south near Saudi border
  "Egaila":{lat:29.1560,lng:48.1200},
  "Jaber Al-Ali":{lat:29.1710,lng:48.0850},
  "Ali Sabah Al-Salem":{lat:29.1820,lng:48.0550},
  "Fahad Al-Ahmad":{lat:29.1300,lng:48.1050},
  "Mina Abdullah":{lat:29.0440,lng:48.1500},
  "Khairan":{lat:28.9900,lng:48.1550},
  "Shuaiba":{lat:29.0320,lng:48.1430},
  // ── Jahra Governorate
  "Jahra":{lat:29.3375,lng:47.6581},
  "Saad Al-Abdullah":{lat:29.2830,lng:47.8100},
  "Qairawan":{lat:29.2900,lng:47.8350},
  "Naeem":{lat:29.3420,lng:47.6680},
  "Sulaibiya":{lat:29.2690,lng:47.8650},
  "Taima":{lat:29.3360,lng:47.6750},
  "Naseem":{lat:29.3430,lng:47.6500},
  "Qasr":{lat:29.3300,lng:47.6480},
  "Oyoun":{lat:29.3480,lng:47.6600},
  "Waha":{lat:29.3200,lng:47.6520},
  // Abdali removed — too far north near Iraqi border
  // ── Mubarak Al-Kabeer Governorate
  "Sabah Al-Salem":{lat:29.2652,lng:48.0569},
  "Qurain":{lat:29.2600,lng:48.0770},
  "Adan":{lat:29.2560,lng:48.0880},
  "Messila":{lat:29.2730,lng:48.0960},
  "Abu Fatira":{lat:29.2100,lng:48.1080},
  "Fnaitees":{lat:29.2490,lng:48.1020},
  "Mubarak Al-Kabeer":{lat:29.2530,lng:48.0650},
  "Sabhan":{lat:29.2400,lng:48.0330},
  "Wista":{lat:29.2580,lng:48.0480},
  "Al-Qusor":{lat:29.2650,lng:48.0650}
};
var SC={Critical:"#ff3c5a",High:"#f5a623",Medium:"#00d4ff",Low:"#00ff88"};
var SK={Critical:"sc",High:"sh",Medium:"sm",Low:"sl"};
var BK={Critical:"bc",High:"bh",Medium:"bm",Low:"bl"};

var reports=[
  // ── Critical
  {id:1, title:{en:"Fake KNET Payment Page",ar:"صفحة دفع KNET مزيفة"}, desc:{en:"Fake KNET page stealing card data through a fraudulent online store.",ar:"صفحة KNET مزيفة تسرق بيانات البطاقة عبر متجر إلكتروني وهمي."}, type:{en:"Financial Fraud",ar:"احتيال مالي"}, sev:"Critical", area:"Kuwait City"},
  {id:2, title:{en:"Fake NBK OTP Request",ar:"طلب OTP مزيف من NBK"}, desc:{en:"Call pretending to be NBK support asking for OTP to 'secure the account'.",ar:"مكالمة تدّعي أنها من دعم NBK وتطلب رمز OTP لـ 'تأمين الحساب'."}, type:{en:"Social Engineering",ar:"هندسة اجتماعية"}, sev:"Critical", area:"Sharq"},
  {id:3, title:{en:"Fake Residency Renewal SMS",ar:"رسالة تجديد إقامة مزيفة"}, desc:{en:"Message claiming your residency expired and asking for payment via suspicious link.",ar:"رسالة تدّعي أن إقامتك منتهية وتطلب دفع رسوم عبر رابط مشبوه."}, type:{en:"Phishing",ar:"تصيّد"}, sev:"Critical", area:"Jleeb Al-Shuyoukh"},
  {id:4, title:{en:"Fake Bank Al-Ahli Login",ar:"صفحة دخول بنك الأهلي مزيفة"}, desc:{en:"Cloned bank page sent via email to steal login credentials.",ar:"صفحة بنك مستنسخة ترسل عبر إيميل لسرقة بيانات الدخول."}, type:{en:"Phishing",ar:"تصيّد"}, sev:"Critical", area:"Rumaithiya"},
  {id:5, title:{en:"Suspicious VPN App",ar:"تطبيق VPN مشبوه"}, desc:{en:"Free VPN app spreading on WhatsApp that requests excessive permissions and steals passwords.",ar:"تطبيق VPN مجاني ينتشر على واتساب يطلب صلاحيات واسعة ويسرق كلمات المرور."}, type:{en:"Malware",ar:"برمجيات خبيثة"}, sev:"Critical", area:"Surra"},
  {id:6, title:{en:"Real Estate Investment Scam",ar:"احتيال استثمار عقاري"}, desc:{en:"Tempting investment offer on Telegram with guaranteed 40% returns. The company is fake.",ar:"عرض استثماري مغري عبر تيليغرام بعوائد مضمونة 40%. الشركة وهمية."}, type:{en:"Financial Fraud",ar:"احتيال مالي"}, sev:"Critical", area:"Fintas"},
  {id:7, title:{en:"Fake KFH Account Freeze",ar:"تجميد حساب KFH مزيف"}, desc:{en:"Email claiming KFH account is frozen, link leads to fake login page.",ar:"إيميل يدّعي تجميد حساب KFH، الرابط يوصّل لصفحة دخول مزيفة."}, type:{en:"Phishing",ar:"تصيّد"}, sev:"Critical", area:"Bayan"},
  {id:8, title:{en:"Fake Police Impersonation Call",ar:"مكالمة انتحال شرطة مزيفة"}, desc:{en:"Person claiming to be police saying your name is in a case and demanding bail payment.",ar:"شخص يدّعي أنه من الشرطة ويقول إن اسمك وارد في قضية ويطلب دفع كفالة."}, type:{en:"Social Engineering",ar:"هندسة اجتماعية"}, sev:"Critical", area:"Farwaniya"},
  // ── High
  {id:9, title:{en:"Fake Ministry of Interior SMS",ar:"رسالة وزارة الداخلية مزيفة"}, desc:{en:"SMS claiming civil ID expiry with a phishing link.",ar:"SMS يدّعي انتهاء صلاحية البطاقة المدنية مع رابط تصيد."}, type:{en:"Phishing",ar:"تصيّد"}, sev:"High", area:"Salmiya"},
  {id:10, title:{en:"Relative Impersonation Scam",ar:"نصب القريب"}, desc:{en:"Call from unknown number impersonating a relative and requesting urgent money transfer.",ar:"مكالمة من رقم مجهول ينتحل قريبك ويطلب تحويل فوري لورطة."}, type:{en:"Social Engineering",ar:"هندسة اجتماعية"}, sev:"High", area:"Farwaniya"},
  {id:11, title:{en:"Crypto Investment Scam",ar:"احتيال استثمار عملات رقمية"}, desc:{en:"Instagram ad promising 300% returns. The platform steals deposits.",ar:"إعلان إنستغرام يعد بعوائد 300%. المنصة تسرق الودائع."}, type:{en:"Financial Fraud",ar:"احتيال مالي"}, sev:"High", area:"Mishref"},
  {id:12, title:{en:"Car Purchase Scam",ar:"احتيال شراء سيارة"}, desc:{en:"WhatsApp ad for a cheap car, seller asks for advance deposit then disappears.",ar:"إعلان واتساب سيارة رخيصة والبائع يطلب عربون مسبق ثم يختفي."}, type:{en:"Financial Fraud",ar:"احتيال مالي"}, sev:"High", area:"Fahaheel"},
  {id:13, title:{en:"Domestic Worker Scam",ar:"احتيال عمالة منزلية"}, desc:{en:"Ad offering cheap domestic workers, asks for advance payment — no worker exists.",ar:"إعلان عمالة بأسعار رخيصة يطلب دفعة مقدمة ولا يوجد عامل."}, type:{en:"Financial Fraud",ar:"احتيال مالي"}, sev:"High", area:"Mahboula"},
  {id:14, title:{en:"Fake Burgan Bank Alert",ar:"تنبيه بنك برقان مزيف"}, desc:{en:"SMS about suspicious transaction, link is a cloned Burgan login page.",ar:"SMS عن معاملة مشبوهة، الرابط صفحة دخول برقان مستنسخة."}, type:{en:"Phishing",ar:"تصيّد"}, sev:"High", area:"Qadisiya"},
  {id:15, title:{en:"WhatsApp Hijack Scam",ar:"سرقة حساب واتساب"}, desc:{en:"Message asking for WhatsApp activation code to 'update account'. Used to steal your account.",ar:"رسالة تطلب رمز تفعيل واتساب لـ 'تحديث الحساب'. تُستخدم لسرقة حسابك."}, type:{en:"Social Engineering",ar:"هندسة اجتماعية"}, sev:"High", area:"Hawalli"},
  {id:16, title:{en:"Fake Talabat Refund",ar:"استرداد طلبات مزيف"}, desc:{en:"SMS claiming you overpaid for an order, link steals card data.",ar:"SMS يدّعي أن طلبك دُفع زيادة، الرابط يسرق بيانات البطاقة."}, type:{en:"Financial Fraud",ar:"احتيال مالي"}, sev:"High", area:"Bayan"},
  {id:17, title:{en:"Fake Quran App with Malware",ar:"تطبيق قرآن مزيف يحوي malware"}, desc:{en:"Quran recitation app spreading on WhatsApp that contains spyware.",ar:"تطبيق تلاوة قرآن ينتشر واتساب يحتوي على برنامج تجسس."}, type:{en:"Malware",ar:"برمجيات خبيثة"}, sev:"High", area:"Khaitan"},
  {id:18, title:{en:"Fake Job Offer — Oil Company",ar:"عرض وظيفة مزيف — شركة نفط"}, desc:{en:"Message offering a job at a Kuwaiti oil company, asks for ID photos and registration fees.",ar:"رسالة بعرض وظيفة في شركة نفط كويتية تطلب صور الهوية ورسوم تسجيل."}, type:{en:"Identity Theft",ar:"سرقة هوية"}, sev:"High", area:"Ahmadi"},
  {id:19, title:{en:"Fake Gulf Bank Suspension",ar:"تعليق بنك الخليج مزيف"}, desc:{en:"Email claims Gulf Bank account suspended, asks to verify via external link.",ar:"إيميل يدّعي تعليق حساب بنك الخليج ويطلب التحقق عبر رابط خارجي."}, type:{en:"Phishing",ar:"تصيّد"}, sev:"High", area:"Nugra"},
  // ── Medium
  {id:20, title:{en:"WhatsApp Delivery Scam",ar:"احتيال توصيل واتساب"}, desc:{en:"Message asking for urgent customs fee payment via suspicious link.",ar:"رسالة تطلب دفع رسوم جمارك عاجلة عبر رابط مشبوه."}, type:{en:"Social Engineering",ar:"هندسة اجتماعية"}, sev:"Medium", area:"Hawalli"},
  {id:21, title:{en:"Fake MOH Health Survey",ar:"استبيان وزارة الصحة مزيف"}, desc:{en:"WhatsApp message with official appearance containing a malicious link.",ar:"رسالة واتساب بمظهر رسمي تحتوي على رابط ضار."}, type:{en:"Phishing",ar:"تصيّد"}, sev:"Medium", area:"Jahra"},
  {id:22, title:{en:"Fake Government Fine SMS",ar:"رسالة غرامة حكومية مزيفة"}, desc:{en:"SMS claiming a traffic fine must be paid within 24 hours.",ar:"SMS يدّعي غرامة مرورية يجب دفعها خلال 24 ساعة."}, type:{en:"Phishing",ar:"تصيّد"}, sev:"Medium", area:"Qadisiya"},
  {id:23, title:{en:"Fake Co-op Contest",ar:"مسابقة وهمية جمعية تعاونية"}, desc:{en:"Message saying you won a prize from a co-op, asks for personal data to claim it.",ar:"رسالة تقول فزت بجائزة من الجمعية وتطلب بياناتك لاستلامها."}, type:{en:"Identity Theft",ar:"سرقة هوية"}, sev:"Medium", area:"Khaitan"},
  {id:24, title:{en:"Fake Zain/Ooredoo Prize",ar:"جائزة زين/Ooredoo مزيفة"}, desc:{en:"Call claiming you won a prize from a telecom company, asks for your data.",ar:"مكالمة تدّعي فوزك بجائزة من شركة الاتصالات وتطلب بياناتك."}, type:{en:"Social Engineering",ar:"هندسة اجتماعية"}, sev:"Medium", area:"Ardiya"},
  {id:25, title:{en:"Fake Scholarship Offer",ar:"عرض منحة دراسية مزيف"}, desc:{en:"Message offering a fake scholarship, asks for passport copy and registration fee.",ar:"رسالة بعرض منحة دراسية وهمية تطلب صورة الجواز ومبلغاً لـ 'تسجيل'."}, type:{en:"Identity Theft",ar:"سرقة هوية"}, sev:"Medium", area:"Sabah Al-Salem"},
  {id:26, title:{en:"Apartment Rental Scam",ar:"احتيال تأجير شقة"}, desc:{en:"Ad for cheap apartment asking for deposit before viewing. The apartment is fake.",ar:"إعلان شقة بسعر رخيص يطلب مقدمة إيجار قبل المعاينة. الشقة وهمية."}, type:{en:"Financial Fraud",ar:"احتيال مالي"}, sev:"Medium", area:"Rumaithiya"},
  {id:27, title:{en:"Fake PACI Website",ar:"موقع PACI مزيف"}, desc:{en:"Website mimicking paci.gov.kw that steals civil ID numbers and identity data.",ar:"موقع يشبه paci.gov.kw يسرق الرقم المدني وبيانات الهوية."}, type:{en:"Phishing",ar:"تصيّد"}, sev:"Medium", area:"Shuwaikh Industrial"},
  {id:28, title:{en:"Instagram Fake Giveaway",ar:"هدية إنستغرام مزيفة"}, desc:{en:"Fake account of a Kuwaiti brand asking you to follow and send data to win.",ar:"حساب مزيف لعلامة تجارية كويتية يطلب منك متابعة وإرسال بياناتك للفوز."}, type:{en:"Identity Theft",ar:"سرقة هوية"}, sev:"Medium", area:"Mishref"},
  {id:29, title:{en:"Fake Loan Offer SMS",ar:"عرض قرض مزيف"}, desc:{en:"Message offering interest-free loan, asks for ID photo and advance payment.",ar:"رسالة تعرض قرضاً بدون فوائد وتطلب صورة هوية ومبلغاً مسبقاً."}, type:{en:"Financial Fraud",ar:"احتيال مالي"}, sev:"Medium", area:"Mangaf"},
  {id:30, title:{en:"Fake Survey Call",ar:"مكالمة استطلاع رأي وهمية"}, desc:{en:"Survey call collecting personal data later used for fraud.",ar:"مكالمة لاستطلاع رأي تجمع بيانات شخصية وتستخدمها لاحقاً في الاحتيال."}, type:{en:"Identity Theft",ar:"سرقة هوية"}, sev:"Medium", area:"Dasma"},
  // ── Low
  {id:31, title:{en:"Spam Investment Group",ar:"مجموعة استثمار مشبوهة"}, desc:{en:"WhatsApp group promoting unlicensed suspicious investments.",ar:"مجموعة واتساب تروّج لاستثمارات مشبوهة بدون ترخيص."}, type:{en:"Financial Fraud",ar:"احتيال مالي"}, sev:"Low", area:"Bidaa"},
  {id:32, title:{en:"Fake Charity Donation",ar:"تبرع خيري مزيف"}, desc:{en:"Message asking for donations to a fake charity, especially during Ramadan.",ar:"رسالة تطلب تبرعات لجمعية خيرية وهمية خاصة في رمضان."}, type:{en:"Financial Fraud",ar:"احتيال مالي"}, sev:"Low", area:"Qortuba"},
  {id:33, title:{en:"Phishing Email — KPC",ar:"إيميل تصيّد — KPC"}, desc:{en:"Email impersonating Kuwait Petroleum Corporation asking to update employee records.",ar:"إيميل ينتحل شركة البترول الكويتية ويطلب تحديث بيانات الموظفين."}, type:{en:"Phishing",ar:"تصيّد"}, sev:"Low", area:"Ahmadi"},
  {id:34, title:{en:"Fake Tech Support Call",ar:"مكالمة دعم فني مزيفة"}, desc:{en:"Call claiming your device is hacked and asking to install remote control software.",ar:"مكالمة تدّعي أن جهازك مخترق وتطلب تثبيت برنامج تحكم عن بُعد."}, type:{en:"Malware",ar:"برمجيات خبيثة"}, sev:"Low", area:"Shuwakh"},
  {id:35, title:{en:"SMS Prize — Lulu Hypermarket",ar:"جائزة لولو هايبرماركت"}, desc:{en:"Message claiming you won a Lulu voucher, asks to click a link to claim.",ar:"رسالة تدّعي فوزك بقسيمة لولو وتطلب الضغط على رابط للاستلام."}, type:{en:"Phishing",ar:"تصيّد"}, sev:"Low", area:"Farwaniya"},
  // ── New reports for expanded areas
  {id:36, title:{en:"Fake Sahel App Update",ar:"تحديث تطبيق ساهل مزيف"}, desc:{en:"SMS claiming urgent Sahel app update needed with a malicious APK download link.",ar:"رسالة تدّعي تحديث عاجل لتطبيق ساهل مع رابط تحميل APK خبيث."}, type:{en:"Malware",ar:"برمجيات خبيثة"}, sev:"Critical", area:"Jabriya"},
  {id:37, title:{en:"Fake Kuwait Airways Booking",ar:"حجز الخطوط الكويتية مزيف"}, desc:{en:"Email with fake Kuwait Airways booking confirmation asking to verify payment details.",ar:"إيميل بتأكيد حجز مزيف من الخطوط الكويتية يطلب تأكيد بيانات الدفع."}, type:{en:"Phishing",ar:"تصيّد"}, sev:"High", area:"Rawda"},
  {id:38, title:{en:"Delivery Company Impersonation",ar:"انتحال شركة توصيل"}, desc:{en:"WhatsApp message claiming to be Aramex/DHL asking for customs payment via suspicious link.",ar:"رسالة واتساب تدّعي أنها أرامكس/DHL وتطلب دفع رسوم جمارك عبر رابط مشبوه."}, type:{en:"Financial Fraud",ar:"احتيال مالي"}, sev:"High", area:"Qurain"},
  {id:39, title:{en:"Fake School Registration",ar:"تسجيل مدرسة مزيف"}, desc:{en:"Ad offering guaranteed school placement for children — requires registration fee upfront.",ar:"إعلان يعد بتأمين مقعد مدرسة لأبنائك — يطلب رسوم تسجيل مقدمة."}, type:{en:"Financial Fraud",ar:"احتيال مالي"}, sev:"Medium", area:"Sabahiya"},
  {id:40, title:{en:"Fake Traffic Camera Alert",ar:"تنبيه كاميرا مرور مزيف"}, desc:{en:"SMS claiming traffic violation recorded by camera with a suspicious payment link.",ar:"رسالة تدّعي تسجيل مخالفة مرورية بالكاميرا مع رابط دفع مشبوه."}, type:{en:"Phishing",ar:"تصيّد"}, sev:"High", area:"Saad Al-Abdullah"},
  {id:41, title:{en:"Cryptocurrency Mining Scam",ar:"احتيال تعدين عملات رقمية"}, desc:{en:"Telegram group promising passive income from cloud mining — deposits stolen.",ar:"مجموعة تيليغرام تعد بدخل سلبي من التعدين السحابي — الودائع تُسرق."}, type:{en:"Financial Fraud",ar:"احتيال مالي"}, sev:"High", area:"Siddiq"},
  {id:42, title:{en:"Fake Electricity Bill SMS",ar:"فاتورة كهرباء مزيفة"}, desc:{en:"Message claiming unpaid electricity bill threatening disconnection within 24 hours.",ar:"رسالة تدّعي فاتورة كهرباء غير مدفوعة وتهدد بالقطع خلال 24 ساعة."}, type:{en:"Social Engineering",ar:"هندسة اجتماعية"}, sev:"Medium", area:"Kaifan"},
  {id:43, title:{en:"Instagram Account Verification Scam",ar:"احتيال توثيق حساب إنستغرام"}, desc:{en:"DM offering Instagram blue badge verification for a fee — steals login credentials.",ar:"رسالة خاصة تعرض توثيق حساب إنستغرام بعلامة زرقاء مقابل مبلغ — تسرق بيانات الدخول."}, type:{en:"Identity Theft",ar:"سرقة هوية"}, sev:"Medium", area:"Adan"},
  {id:44, title:{en:"Fake Gym Membership Deal",ar:"عرض اشتراك نادي رياضي مزيف"}, desc:{en:"Ad offering lifetime gym membership at unrealistically low price — payment disappears.",ar:"إعلان اشتراك نادي مدى الحياة بسعر غير منطقي — المبلغ يختفي."}, type:{en:"Financial Fraud",ar:"احتيال مالي"}, sev:"Low", area:"Messila"},
  {id:45, title:{en:"Warba Bank Phishing",ar:"تصيّد بنك وربة"}, desc:{en:"Fake Warba Bank security alert asking to verify account through malicious link.",ar:"تنبيه أمني مزيف من بنك وربة يطلب التحقق من الحساب عبر رابط خبيث."}, type:{en:"Phishing",ar:"تصيّد"}, sev:"Critical", area:"Hateen"},
  {id:46, title:{en:"Fake Visa Application Service",ar:"خدمة تأشيرات مزيفة"}, desc:{en:"Website offering fast visa processing for Kuwaiti travelers — collects passport data and fees.",ar:"موقع يعرض استخراج تأشيرات سريعة للمسافرين الكويتيين — يجمع بيانات الجواز ورسوم."}, type:{en:"Identity Theft",ar:"سرقة هوية"}, sev:"High", area:"Fnaitees"},
  {id:47, title:{en:"Fake Concert Tickets",ar:"تذاكر حفلة مزيفة"}, desc:{en:"Selling fake concert or event tickets at discounted prices via social media.",ar:"بيع تذاكر حفلات أو فعاليات مزيفة بأسعار مخفضة عبر السوشيال ميديا."}, type:{en:"Financial Fraud",ar:"احتيال مالي"}, sev:"Medium", area:"Egaila"},
  {id:48, title:{en:"Boubyan Bank Clone Site",ar:"موقع بنك بوبيان المستنسخ"}, desc:{en:"Perfectly cloned Boubyan Bank website distributed via Google Ads targeting Kuwaiti users.",ar:"موقع مستنسخ بالكامل لبنك بوبيان يُوزّع عبر إعلانات قوقل يستهدف المستخدمين الكويتيين."}, type:{en:"Phishing",ar:"تصيّد"}, sev:"Critical", area:"Sulaibiya"},
  {id:49, title:{en:"Fake Pet Sale Scam",ar:"احتيال بيع حيوانات أليفة"}, desc:{en:"Instagram ad selling exotic pets with advance payment — no delivery ever made.",ar:"إعلان إنستغرام لبيع حيوانات أليفة نادرة بدفع مسبق — لا يتم التسليم أبداً."}, type:{en:"Financial Fraud",ar:"احتيال مالي"}, sev:"Low", area:"Abdullah Al-Mubarak"},
  {id:50, title:{en:"Sahel Password Reset Scam",ar:"إعادة تعيين كلمة مرور ساهل"}, desc:{en:"Email claiming your Sahel account needs password reset — link leads to credential harvesting page.",ar:"إيميل يدّعي أن حساب ساهل يحتاج إعادة تعيين كلمة المرور — الرابط يوصّل لصفحة سرقة بيانات."}, type:{en:"Phishing",ar:"تصيّد"}, sev:"High", area:"Shamiya"}
];

// ── localStorage persistence for user-submitted reports ──
function saveUserReports(){
  try{
    var userReps = reports.filter(function(r){return r.userSubmitted;});
    localStorage.setItem('shieldkw_user_reports', JSON.stringify(userReps));
  }catch(e){}
}
function loadUserReports(){
  try{
    var saved = localStorage.getItem('shieldkw_user_reports');
    if(!saved) return;
    var userReps = JSON.parse(saved);
    if(!Array.isArray(userReps)) return;
    userReps.forEach(function(r){
      r.userSubmitted = true;
      // avoid duplicates
      var exists = reports.some(function(existing){return existing.id===r.id;});
      if(!exists) reports.unshift(r);
    });
  }catch(e){}
}
loadUserReports();

// ── Demo rotation — show a different subset + shift positions every 30 min ──
var _demoSeed = Math.floor(Date.now() / 1800000);
var _origDemos = reports.filter(function(r){return !r.userSubmitted;});
function rotateDemoReports(){
  _demoSeed = Math.floor(Date.now() / 1800000);
  // remove old demos, keep user reports
  var userReps = reports.filter(function(r){return r.userSubmitted;});
  // shuffle demos deterministically and pick 35 of 50
  var shuffled = _origDemos.slice().sort(function(a,b){
    var ha = ((a.id * 2654435761 + _demoSeed * 40503) >>> 0);
    var hb = ((b.id * 2654435761 + _demoSeed * 40503) >>> 0);
    return ha - hb;
  });
  var picked = shuffled.slice(0, 35);
  reports.length = 0;
  picked.forEach(function(r){ reports.push(r); });
  userReps.forEach(function(r){ reports.unshift(r); });
}
rotateDemoReports();
setInterval(function(){
  rotateDemoReports();
  renderList();renderMarkers();renderSidebarStats();renderStats(true);
}, 1800000);

var activeFilter='all';

// ══════════════════════════════════════════
// TABS
// ══════════════════════════════════════════
function switchTab(id,el){
  document.querySelectorAll('.page').forEach(function(p){p.classList.remove('active');});
  document.querySelectorAll('.tab').forEach(function(t){t.classList.remove('active');});
  document.getElementById('page-'+id).classList.add('active');
  el.classList.add('active');
  if(id==='map' && leafletMap) setTimeout(function(){ leafletMap.invalidateSize(); },100);
}

// ══════════════════════════════════════════
// CLOCK
// ══════════════════════════════════════════
setInterval(function(){document.getElementById('clock').textContent=new Date().toLocaleTimeString('en-KW',{hour:'2-digit',minute:'2-digit',second:'2-digit'});},1000);
document.getElementById('clock').textContent=new Date().toLocaleTimeString('en-KW',{hour:'2-digit',minute:'2-digit',second:'2-digit'});

// ══════════════════════════════════════════
// MAP — Leaflet
// ══════════════════════════════════════════
var leafletMap, markerLayer;

function initMap(){
  leafletMap = L.map('leafletMap', {
    center: [29.20, 47.98],
    zoom: 10,
    minZoom: 8,
    maxZoom: 16,
    zoomControl: true,
    attributionControl: false
  });
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    subdomains: 'abcd'
  }).addTo(leafletMap);
  markerLayer = L.layerGroup().addTo(leafletMap);
  renderMarkers();
}

function fitMapToMarkers(){
  if(!markerLayer || !leafletMap) return;
  var layers = markerLayer.getLayers();
  if(layers.length===0) return;
  var group = L.featureGroup(layers);
  leafletMap.fitBounds(group.getBounds().pad(0.15), {maxZoom:12});
}

function renderMarkers(){
  if(!markerLayer) return;
  markerLayer.clearLayers();
  var vis = activeFilter==='all' ? reports : reports.filter(function(r){ return r.sev===activeFilter; });
  vis.forEach(function(r){
    var city = CITIES[r.area]; if(!city) return;
    var col = SC[r.sev] || '#00d4ff';
    var h1 = ((r.id * 2654435761 + _demoSeed * 40503) >>> 0) % 10000;
    var h2 = ((r.id * 340573 + _demoSeed * 17957) >>> 0) % 10000;
    var jLat = (h1 / 10000 - 0.5) * 0.003;
    var jLng = (h2 / 10000 - 0.5) * 0.003;
    // Pulsing glow for Critical only
    if(r.sev==='Critical'){
      var pulseIcon = L.divIcon({
        className:'',
        html:'<div class="map-pulse" style="background:'+col+';"></div>',
        iconSize:[32,32],
        iconAnchor:[16,16]
      });
      L.marker([city.lat+jLat, city.lng+jLng], {icon:pulseIcon, interactive:false}).addTo(markerLayer);
    }
    var rad = r.sev==='Critical'?9:r.sev==='High'?7:r.sev==='Medium'?6:5;
    // Outer glow ring for High+
    if(r.sev==='Critical'||r.sev==='High'){
      L.circleMarker([city.lat+jLat, city.lng+jLng], {
        radius: rad+4,fillColor:col,color:'transparent',weight:0,fillOpacity:0.12,interactive:false
      }).addTo(markerLayer);
    }
    var marker = L.circleMarker([city.lat+jLat, city.lng+jLng], {
      radius: rad,
      fillColor: col,
      color: 'rgba(0,0,0,0.35)',
      weight: 1,
      opacity: 1,
      fillOpacity: r.sev==='Critical'?0.9:r.sev==='High'?0.8:0.65
    }).addTo(markerLayer);
    var tagStyle='font-size:10px;padding:2px 6px;border-radius:4px;';
    marker.bindPopup(
      '<div style="font-family:\'Segoe UI\',sans-serif;min-width:180px;">'+
      '<div style="font-weight:700;font-size:13px;margin-bottom:4px;color:#fff;">'+esc(rt(r.title))+'</div>'+
      '<div style="font-size:12px;color:#aaa;margin-bottom:6px;line-height:1.5;">'+esc(rt(r.desc))+'</div>'+
      '<div style="display:flex;gap:5px;flex-wrap:wrap;">'+
      '<span style="'+tagStyle+'background:'+col+'22;color:'+col+';border:1px solid '+col+'55;">'+(SEV_DISPLAY[r.sev]?SEV_DISPLAY[r.sev][LANG]:r.sev)+'</span>'+
      '<span style="'+tagStyle+'background:rgba(0,212,255,0.1);color:#00d4ff;border:1px solid rgba(0,212,255,0.3);">'+esc(rt(r.type))+'</span>'+
      '<span style="'+tagStyle+'background:rgba(255,255,255,0.03);color:#6b7280;border:1px solid rgba(255,255,255,0.06);">📍 '+esc(r.area)+'</span>'+
      (r.userSubmitted?'<span style="'+tagStyle+'background:rgba(0,255,136,0.1);color:#00ff88;border:1px solid rgba(0,255,136,0.3);">'+t('source-community')+'</span>':'<span style="'+tagStyle+'background:rgba(83,104,128,0.15);color:#6b7280;border:1px solid rgba(255,255,255,0.08);">'+t('source-demo')+'</span>')+
      '</div></div>',
      {className:'dark-popup', maxWidth:280}
    );
    marker.on('click', function(){ highlightCard(r.id); });
  });
  fitMapToMarkers();
}
function rt(v){ return typeof v==='object' ? (v[LANG]||v.en||v.ar||'') : (v||''); }
function esc(s){
  if(!s) return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
function csvSafe(s){
  s = String(s).replace(/"/g,'""');
  if(/^[\=\+\-\@\t\r]/.test(s)) s = "'" + s;
  return '"'+s+'"';
}
function renderList(){
  var vis=activeFilter==='all'?reports:reports.filter(function(r){return r.sev===activeFilter;});
  var h='';
  vis.forEach(function(r){
    var srcBadge = r.userSubmitted
      ? '<span style="font-size:0.55rem;background:rgba(0,255,136,0.1);color:#00ff88;border:1px solid rgba(0,255,136,0.3);border-radius:3px;padding:1px 5px;margin-left:4px;">'+t('source-community')+'</span>'
      : '<span style="font-size:0.55rem;background:rgba(83,104,128,0.2);color:var(--muted2);border:1px solid var(--border);border-radius:3px;padding:1px 5px;margin-left:4px;">'+t('source-demo')+'</span>';
    var sevLabel = SEV_DISPLAY[r.sev] ? (SEV_DISPLAY[r.sev][LANG]||r.sev) : r.sev;
    h+='<div class="rcard '+(SK[r.sev]||'')+'" id="card-'+r.id+'" onclick="highlightCard('+r.id+')">'+
      '<div class="rcard-top"><div class="rcard-title">'+esc(rt(r.title))+srcBadge+'</div>'+
      '<span class="badge '+(BK[r.sev]||'bm')+'">'+sevLabel+'</span></div>'+
      '<div class="rcard-meta"><span>📍 '+esc(r.area)+'</span><span class="rcard-type">'+esc(rt(r.type))+'</span></div></div>';
  });
  document.getElementById('reportList').innerHTML=h||'<div style="padding:16px;text-align:center;font-size:0.7rem;color:var(--muted2)">No reports.</div>';
}
// ══════════════════════════════════════════
// STATS — live computed from reports[]
// ══════════════════════════════════════════
var TYPE_COLORS = {
  'Phishing':           '#ff3c5a',
  'Financial Fraud':    '#f5a623',
  'Social Engineering': '#00d4ff',
  'Identity Theft':     '#a855f7',
  'Malware':            '#ec4899',
  'Other':              '#6b7280'
};
var SEV_COLORS = {
  'Critical': '#ff3c5a',
  'High':     '#f5a623',
  'Medium':   '#00d4ff',
  'Low':      '#00ff88'
};
var SEV_DISPLAY = {
  'Critical':{en:'Critical',ar:'حرج'},
  'High':    {en:'High',    ar:'عالٍ'},
  'Medium':  {en:'Medium',  ar:'متوسط'},
  'Low':     {en:'Low',     ar:'منخفض'}
};
var AREA_COLORS = ['c3','c4','c2','c1','c4','c3','c2','c4','c3','c2','c4','c3'];

function fmtDate(d){
  var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return months[d.getMonth()]+' '+String(d.getDate()).padStart(2,'0');
}
function fmtTime(d){
  return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')+':'+String(d.getSeconds()).padStart(2,'0');
}

function renderStats(animate){
  var now = new Date();

  // ── KPI numbers (count live from reports[])
  var total    = reports.length;
  var critical = reports.filter(function(r){return r.sev==='Critical';}).length;
  var phishing = reports.filter(function(r){var tp=typeof r.type==='object'?r.type.en:r.type;return tp==='Phishing';}).length;
  var types    = {};
  reports.forEach(function(r){var tp=typeof r.type==='object'?r.type.en:r.type;types[tp]=1;});
  var typeCount = Object.keys(types).length;

  document.getElementById('st-total').textContent    = total;
  document.getElementById('st-critical').textContent = critical;
  document.getElementById('st-phishing').textContent = phishing;
  document.getElementById('st-types').textContent    = typeCount;

  // ── Timestamp
  document.getElementById('st-lastupdate').textContent =
    fmtDate(now) + ' ' + fmtTime(now);

  // ── By Type bars
  var TYPE_I18N = {'Phishing':{en:'Phishing',ar:'تصيّد'},'Financial Fraud':{en:'Financial Fraud',ar:'احتيال مالي'},'Social Engineering':{en:'Social Engineering',ar:'هندسة اجتماعية'},'Identity Theft':{en:'Identity Theft',ar:'سرقة هوية'},'Malware':{en:'Malware',ar:'برمجيات خبيثة'}};
  var typeCounts = {};
  reports.forEach(function(r){ var tp=typeof r.type==='object'?r.type.en:r.type; typeCounts[tp] = (typeCounts[tp]||0)+1; });
  var typeMax = Math.max.apply(null, Object.values(typeCounts).concat([1]));
  var typeSorted = Object.keys(typeCounts).sort(function(a,b){return typeCounts[b]-typeCounts[a];});
  var typeBarsHTML = '';
  typeSorted.forEach(function(t){
    var cnt = typeCounts[t];
    var pct = Math.round(cnt/typeMax*100);
    var col = TYPE_COLORS[t]||'#6b7280';
    var displayName = TYPE_I18N[t] ? TYPE_I18N[t][LANG] : t;
    typeBarsHTML +=
      '<div class="bar-row">'+
        '<div class="bar-label" style="font-size:0.68rem;color:var(--text);width:120px;flex-shrink:0;">'+displayName+'</div>'+
        '<div class="bar-track" style="flex:1;height:10px;background:var(--panel2);border-radius:5px;overflow:hidden;">'+
          '<div class="bar-fill" style="width:0%;height:100%;border-radius:5px;background:'+col+';transition:width 0.7s ease;"></div>'+
        '</div>'+
        '<div class="bar-val" style="font-size:0.68rem;color:var(--muted2);font-family:monospace;width:24px;text-align:right;flex-shrink:0;">'+cnt+'</div>'+
      '</div>';
  });
  document.getElementById('st-type-bars').innerHTML = typeBarsHTML;

  // ── By Severity bars
  var SEV_I18N = {'Critical':{en:'Critical',ar:'حرج'},'High':{en:'High',ar:'عالٍ'},'Medium':{en:'Medium',ar:'متوسط'},'Low':{en:'Low',ar:'منخفض'}};
  var sevOrder = ['Critical','High','Medium','Low'];
  var sevBarsHTML = '';
  var sevMax = Math.max.apply(null, sevOrder.map(function(s){
    return reports.filter(function(r){return r.sev===s;}).length;
  }).concat([1]));
  sevOrder.forEach(function(s){
    var cnt = reports.filter(function(r){return r.sev===s;}).length;
    var pct = Math.round(cnt/sevMax*100);
    var col = SEV_COLORS[s];
    var sevName = SEV_I18N[s] ? SEV_I18N[s][LANG] : s;
    sevBarsHTML +=
      '<div class="bar-row">'+
        '<div class="bar-label" style="font-size:0.68rem;color:var(--text);width:120px;flex-shrink:0;">'+sevName+'</div>'+
        '<div class="bar-track" style="flex:1;height:10px;background:var(--panel2);border-radius:5px;overflow:hidden;">'+
          '<div class="bar-fill" style="width:0%;height:100%;border-radius:5px;background:'+col+';transition:width 0.7s ease;"></div>'+
        '</div>'+
        '<div class="bar-val" style="font-size:0.68rem;color:var(--muted2);font-family:monospace;width:24px;text-align:right;flex-shrink:0;">'+cnt+'</div>'+
      '</div>';
  });
  document.getElementById('st-sev-bars').innerHTML = sevBarsHTML;

  // ── By Area heatmap (top 12, sorted by count)
  var areaCounts = {};
  reports.forEach(function(r){ areaCounts[r.area] = (areaCounts[r.area]||0)+1; });
  var areaSorted = Object.keys(areaCounts).sort(function(a,b){return areaCounts[b]-areaCounts[a];}).slice(0,12);
  var areaMax = areaCounts[areaSorted[0]]||1;
  var areaHTML = '';
  areaSorted.forEach(function(a,i){
    var cnt = areaCounts[a];
    var intensity = cnt/areaMax;
    var col = cnt>=3?'var(--red)':cnt>=2?'var(--orange)':'var(--accent)';
    var isTop = i===0;
    var topBadge = isTop ? '<span style="font-size:0.5rem;background:var(--red);color:#fff;border-radius:3px;padding:1px 4px;font-family:monospace;font-weight:700;margin-left:4px;">'+t('top-hotspot')+'</span>' : '';
    var cellStyle = isTop
      ? 'background:rgba(255,60,90,0.12);border:1px solid rgba(255,60,90,0.35);'
      : 'background:rgba(0,212,255,'+( 0.03 + intensity*0.08 ).toFixed(3)+');';
    areaHTML +=
      '<div class="area-cell" style="'+cellStyle+'">'+
        '<div class="area-name" style="font-size:0.7rem;color:var(--text);display:flex;align-items:center;">'+a+topBadge+'</div>'+
        '<div class="area-count" style="font-family:monospace;font-size:0.8rem;font-weight:700;color:'+col+'">'+cnt+'</div>'+
      '</div>';
  });
  document.getElementById('st-area-heat').innerHTML = areaHTML;

  // ── Timeline — last 7 calendar days from today
  var tlHTML = '';
  var tlMax = 0;
  var dayCounts = [];
  for(var d=6; d>=0; d--){
    var day = new Date(now);
    day.setDate(now.getDate()-d);
    day.setHours(0,0,0,0);
    var nextDay = new Date(day); nextDay.setDate(day.getDate()+1);
    // count reports that have id-based "fake" timestamps spread across last 7 days
    // distribute existing reports evenly across the 7 days based on report id
    var cnt2 = reports.filter(function(r){
      // Each report gets a pseudo-timestamp: offset = (id-1) % 7 days ago
      var reportDay = new Date(now);
      reportDay.setDate(now.getDate() - ((r.id-1)%7));
      reportDay.setHours(0,0,0,0);
      return reportDay.getTime() === day.getTime();
    }).length;
    dayCounts.push({label: fmtDate(day), count: cnt2, isToday: d===0});
    if(cnt2>tlMax) tlMax=cnt2;
  }
  if(tlMax===0) tlMax=1;
  var tlColors = ['#f5a623','#ff3c5a','#00d4ff','#f5a623','#ff3c5a','#a855f7','#00ff88'];
  dayCounts.forEach(function(dc,i){
    var pct = Math.round(dc.count/tlMax*100);
    var col = tlColors[i%tlColors.length];
    var todayStyle = dc.isToday ? 'font-weight:700;color:var(--accent)' : '';
    tlHTML +=
      '<div class="tl-row">'+
        '<div class="tl-date" style="font-size:0.65rem;color:var(--muted2);font-family:monospace;width:76px;flex-shrink:0;'+todayStyle+'">'+
          dc.label+(dc.isToday?' ◀':'')+
        '</div>'+
        '<div class="tl-bar-track" style="flex:1;height:8px;background:var(--panel2);border-radius:4px;overflow:hidden;">'+
          '<div class="tl-bar-fill" style="width:0%;height:100%;border-radius:4px;background:'+col+';transition:width 0.7s ease;"></div>'+
        '</div>'+
        '<div class="tl-count" style="font-size:0.65rem;color:var(--muted2);font-family:monospace;width:20px;text-align:right;flex-shrink:0;">'+dc.count+'</div>'+
      '</div>';
  });
  // Title with current date range
  var d0 = new Date(now); d0.setDate(now.getDate()-6);
  var tlLabel = t('tl-label');
  document.getElementById('st-tl-title').textContent = tlLabel+fmtDate(d0)+' → '+fmtDate(now);
  document.getElementById('st-timeline').innerHTML = tlHTML;

  // ── By Governorate breakdown
  var GOV_MAP = {
    'Kuwait City':'Capital','Sharq':'Capital','Dasma':'Capital','Bneid Al-Gar':'Capital','Nugra':'Capital','Shuwakh':'Capital','Shuwaikh Industrial':'Capital','Kaifan':'Capital','Shamiya':'Capital','Rawda':'Capital','Adailiya':'Capital','Khaldiya':'Capital','Sulaibikhat':'Capital','Doha':'Capital','Mirqab':'Capital','Abdullah Al-Salem':'Capital','Nuzha':'Capital','Faiha':'Capital','Qibla':'Capital',
    'Hawalli':'Hawalli','Salmiya':'Hawalli','Rumaithiya':'Hawalli','Mishref':'Hawalli','Bayan':'Hawalli','Bidaa':'Hawalli','Surra':'Hawalli','Qortuba':'Hawalli','Salwa':'Hawalli','Qadisiya':'Hawalli','Jabriya':'Hawalli','Hateen':'Hawalli','Salam':'Hawalli','Shaab':'Hawalli','Maidan Hawalli':'Hawalli','Siddiq':'Hawalli',
    'Farwaniya':'Farwaniya','Jleeb Al-Shuyoukh':'Farwaniya','Khaitan':'Farwaniya','Ardiya':'Farwaniya','Rikka':'Farwaniya','Andalous':'Farwaniya','Omariya':'Farwaniya','Rehab':'Farwaniya','Sabah Al-Nasser':'Farwaniya','Ishbiliya':'Farwaniya','Dajeej':'Farwaniya','Firdous':'Farwaniya','Khaitan Al-Janoubi':'Farwaniya','Abdullah Al-Mubarak':'Farwaniya',
    'Ahmadi':'Ahmadi','Mangaf':'Ahmadi','Mahboula':'Ahmadi','Fintas':'Ahmadi','Fahaheel':'Ahmadi','Abu Halifa':'Ahmadi','Rumaila':'Ahmadi','Sabahiya':'Ahmadi','Riqqa':'Ahmadi','Hadiya':'Ahmadi','Wafra':'Ahmadi','Egaila':'Ahmadi','Jaber Al-Ali':'Ahmadi','Ali Sabah Al-Salem':'Ahmadi','Fahad Al-Ahmad':'Ahmadi','Mina Abdullah':'Ahmadi','Khairan':'Ahmadi','Shuaiba':'Ahmadi',
    'Jahra':'Jahra','Saad Al-Abdullah':'Jahra','Qairawan':'Jahra','Naeem':'Jahra','Sulaibiya':'Jahra','Taima':'Jahra','Naseem':'Jahra','Qasr':'Jahra','Oyoun':'Jahra','Waha':'Jahra','Abdali':'Jahra',
    'Sabah Al-Salem':'Mubarak Al-Kabeer','Qurain':'Mubarak Al-Kabeer','Adan':'Mubarak Al-Kabeer','Messila':'Mubarak Al-Kabeer','Abu Fatira':'Mubarak Al-Kabeer','Fnaitees':'Mubarak Al-Kabeer','Mubarak Al-Kabeer':'Mubarak Al-Kabeer','Sabhan':'Mubarak Al-Kabeer','Wista':'Mubarak Al-Kabeer','Al-Qusor':'Mubarak Al-Kabeer'
  };
  var GOV_COLORS = {'Capital':'#00d4ff','Hawalli':'#a855f7','Farwaniya':'#f5a623','Ahmadi':'#10b981','Jahra':'#ff3c5a','Mubarak Al-Kabeer':'#ec4899'};
  var GOV_FLAGS  = {'Capital':'🏙️','Hawalli':'🏘️','Farwaniya':'🏭','Ahmadi':'🛢️','Jahra':'🌾','Mubarak Al-Kabeer':'🏗️'};
  var GOV_NAMES_AR = {'Capital':'العاصمة','Hawalli':'حولي','Farwaniya':'الفروانية','Ahmadi':'الأحمدي','Jahra':'الجهراء','Mubarak Al-Kabeer':'مبارك الكبير'};
  var govCounts = {};
  reports.forEach(function(r){
    var gov = GOV_MAP[r.area] || 'Other';
    govCounts[gov] = (govCounts[gov]||0)+1;
  });
  var govOrder = ['Capital','Hawalli','Farwaniya','Ahmadi','Jahra','Mubarak Al-Kabeer'];
  var govMax = Math.max.apply(null, govOrder.map(function(g){return govCounts[g]||0;}).concat([1]));
  var govHTML = '';
  govOrder.forEach(function(g){
    var cnt = govCounts[g]||0;
    var col = GOV_COLORS[g];
    var flag = GOV_FLAGS[g];
    var pctW = Math.round(cnt/govMax*100);
    govHTML +=
      '<div class="bar-row" style="align-items:center;">'+
        '<div style="font-size:0.68rem;color:var(--text);width:130px;flex-shrink:0;display:flex;align-items:center;gap:5px;">'+
          '<span>'+flag+'</span><span>'+(LANG==='ar'?(GOV_NAMES_AR[g]||g):g)+'</span>'+
        '</div>'+
        '<div style="flex:1;height:12px;background:var(--panel2);border-radius:6px;overflow:hidden;">'+
          '<div style="width:0%;height:100%;border-radius:6px;background:'+col+';transition:width 0.8s ease;" data-gov-w="'+pctW+'"></div>'+
        '</div>'+
        '<div style="font-size:0.68rem;color:'+col+';font-family:monospace;font-weight:700;width:28px;text-align:right;flex-shrink:0;">'+cnt+'</div>'+
      '</div>';
  });
  document.getElementById('st-gov-bars').innerHTML = govHTML;

  // ── Animate bars after DOM insertion
  setTimeout(function(){
    document.querySelectorAll('#page-stats .bar-fill, #page-stats .tl-bar-fill').forEach(function(el){
      var target = el.style.width === '0%' ? el.getAttribute('data-w') : null;
      // read width from parent context — recalculate
    });
    // Trigger bar animations by setting widths
    var typeFills = document.querySelectorAll('#st-type-bars .bar-fill');
    var typeKeys = typeSorted;
    typeFills.forEach(function(el,i){
      var cnt = typeCounts[typeKeys[i]]||0;
      el.style.width = Math.round(cnt/typeMax*100)+'%';
    });
    var sevFills = document.querySelectorAll('#st-sev-bars .bar-fill');
    sevOrder.forEach(function(s,i){
      var cnt = reports.filter(function(r){return r.sev===s;}).length;
      if(sevFills[i]) sevFills[i].style.width = Math.round(cnt/sevMax*100)+'%';
    });
    var tlFills = document.querySelectorAll('#st-timeline .tl-bar-fill');
    dayCounts.forEach(function(dc,i){
      if(tlFills[i]) tlFills[i].style.width = Math.round(dc.count/tlMax*100)+'%';
    });
    document.querySelectorAll('#st-gov-bars [data-gov-w]').forEach(function(el){
      el.style.width = el.getAttribute('data-gov-w')+'%';
    });
  }, 60);
}

// ── Sidebar stats (map tab counters)
function renderSidebarStats(){
  var now = new Date();
  var weekAgo = new Date(now); weekAgo.setDate(now.getDate()-7);
  var weekCount = reports.filter(function(r){
    var reportDay = new Date(now);
    reportDay.setDate(now.getDate() - ((r.id-1)%7));
    return r.userSubmitted || reportDay >= weekAgo;
  }).length;
  document.getElementById('sTotal').textContent = reports.length;
  document.getElementById('sWeek').textContent  = weekCount;
  document.getElementById('sCrit').textContent  = reports.filter(function(r){return r.sev==='Critical';}).length;
  var tt={};reports.forEach(function(r){var tp=typeof r.type==='object'?r.type.en:r.type;tt[tp]=1;});
  document.getElementById('sTypes').textContent = Object.keys(tt).length;
}

function setFilter(f,btn){
  activeFilter=f;
  document.querySelectorAll('.fbtn').forEach(function(b){b.classList.remove('on');});
  btn.classList.add('on');
  renderList();renderMarkers();
}
function highlightCard(id){
  document.querySelectorAll('.rcard').forEach(function(c){c.style.background='';});
  var c=document.getElementById('card-'+id);
  if(c){c.style.background='rgba(0,212,255,0.07)';c.scrollIntoView({behavior:'smooth',block:'nearest'});}
}

// ══════════════════════════════════════════
// MODAL
// ══════════════════════════════════════════
function openModal(){
  window._modalTrigger=document.activeElement;
  document.getElementById('modalBg').classList.add('open');
  document.getElementById('okMsg').style.display='none';
  var first=document.getElementById('fTitle');
  if(first) setTimeout(function(){first.focus();},80);
}
function closeModal(){
  document.getElementById('modalBg').classList.remove('open');
  document.getElementById('fTitle').value='';document.getElementById('fDesc').value='';document.getElementById('fArea').value='';
  // clear validation highlights
  ['fTitle','fDesc','fArea'].forEach(function(id){document.getElementById(id).style.borderColor='';});
  // restore focus to trigger
  if(window._modalTrigger){window._modalTrigger.focus();window._modalTrigger=null;}
}
function submitReport(){
  var titleEl=document.getElementById('fTitle');
  var areaEl=document.getElementById('fArea');
  var descEl=document.getElementById('fDesc');
  var titleVal=titleEl.value.trim();
  var descVal=descEl.value.trim();
  var a=areaEl.value;
  // clear previous highlights
  [titleEl,areaEl,descEl].forEach(function(el){el.style.borderColor='';});
  // validate title
  if(titleVal.length<3){titleEl.style.borderColor='var(--red)';titleEl.focus();showToast(t('val-title-short'),true);return;}
  if(titleVal.length>120){titleEl.style.borderColor='var(--red)';titleEl.focus();showToast(t('val-title-long'),true);return;}
  // validate area
  if(!a){areaEl.style.borderColor='var(--red)';areaEl.focus();showToast(t('val-area-req'),true);return;}
  // validate description length
  if(descVal.length>500){descEl.style.borderColor='var(--red)';descEl.focus();showToast(t('val-desc-long'),true);return;}
  var typeVal=document.getElementById('fType').value;
  var fallback=t('reported-by');
  // Sanitize user input to prevent XSS
  titleVal = esc(titleVal);
  descVal = descVal ? esc(descVal) : '';
  var newReport={id:Date.now(),userSubmitted:true,title:{en:titleVal,ar:titleVal},desc:{en:descVal||fallback,ar:descVal||fallback},type:{en:typeVal,ar:typeVal},sev:document.getElementById('fSev').value,area:a};
  reports.unshift(newReport);
  saveUserReports();
  renderSidebarStats();renderStats(true);renderList();renderMarkers();
  document.getElementById('okMsg').style.display='block';
  showToast(t('report-ok-toast'));
  setTimeout(closeModal,1600);
}

// ══════════════════════════════════════════
// AI VALIDATOR
// ══════════════════════════════════════════
var EXAMPLES=[
  // 0 - بطاقة مدنية
  "عزيزي المواطن، بطاقتك المدنية انتهت صلاحيتها. يرجى التجديد الفوري خلال 24 ساعة على الرابط: http://moi-kw.info/renew?id=293847 وإلا سيتم تعليق خدماتك الحكومية.",
  // 1 - نصب القريب باللهجة الكويتية
  "هلا أخوي، أنا فهد ابن عمك. أنا وايد بورطة الحين — وقعت لي حادث وعندي غرامة لازم أسددها قبل المغرب وإلا يحبسوني. ممكن تحولي 250 دينار على الآيبان هذا؟ وخليها بينا لا تقول البيت، بسوي لك ردة بكره إن شاء الله.",
  // 2 - سرقة OTP
  "مرحبا، أنا من قسم الأمن ببنك الكويت الوطني. لاحظنا محاولة دخول مشبوهة على حسابك. لتأمين الحساب سيصلك رمز على جوالك، ارسله لي الحين حتى نوقف العملية.",
  // 3 - استثمار وهمي
  "🔥 فرصة استثمارية ذهبية! ضاعف أموالك خلال 30 يوم مع منصة TradeKW. عوائد مضمونة 40% شهرياً. انضم الحين وابدأ بـ 100 دينار فقط! سجّل: http://tradekw-profit.xyz/join",
  // 4 - شرعي للمقارنة
  "CBK: Your monthly statement for March 2026 is ready. Log in to e-banking to view your statement. Do not share your PIN or OTP with anyone. CBK never asks for passwords."
];
function loadExample(i){document.getElementById('aiInput').value=EXAMPLES[i];}

function runValidator(){
  var msg=document.getElementById('aiInput').value.trim();
  if(!msg){showToast(t('no-msg-toast'),true);return;}
  var btn=document.getElementById('aiBtn');
  btn.disabled=true;btn.innerHTML='<span>⏳</span> '+t('analyzing').replace('⏳ ','');
  setTimeout(function(){
    var result=analyzeMessage(msg);
    showResult(result);
    btn.disabled=false;
    var aspan=document.querySelector('#aiBtn [data-i18n="analyze-btn"]');
    if(aspan) aspan.textContent=t('analyze-btn'); else btn.innerHTML='<span>🔍</span> '+t('analyze-btn').replace('🔍 ','');
  },1200);
}

function analyzeMessage(msg){
  var m = msg.toLowerCase();
  var score = 0;
  var signals = [];
  var detectedTypes = [];

  // ════════════════════════════════════════════════════════
  // BLOCK A — روابط وعناوين مشبوهة
  // ════════════════════════════════════════════════════════

  // A1: امتداد نطاق خطير
  if(/https?:\/\/[^\s]*(?:\.info|\.xyz|\.site|\.click|\.tk|\.top|\.cc|\.pw|\.ru|\.cn|\.biz|\.online|\.store|\.live|\.icu|\.vip|\.gq|\.ml|\.ga|\.cf)/.test(m)){
    score+=38;
    signals.push({icon:'🔴',cat:{en:'Link',ar:'رابط'},text:{en:'Highly suspicious domain extension (.info/.xyz/.tk etc.) — Official Kuwaiti websites always end with .gov.kw',ar:'امتداد نطاق مشبوه جداً (.info/.xyz/.tk وغيرها) — المواقع الرسمية الكويتية تنتهي دائماً بـ .gov.kw'}});
  }
  // A2: رابط يحاكي موقع حكومي كويتي لكنه مزيف
  if(/https?:\/\/[^\s]*(moi|paci|mof|moh|moc|mofa|mosal|customs|maktabi|sahel|mcs|citra|nbk|knet|cbk|boubyan|burgan|ahli|gulf)[^\.]*\.(info|net|org|xyz|site|biz|online|co|io|app)/.test(m)){
    score+=45;
    signals.push({icon:'🔴',cat:{en:'Link',ar:'رابط'},text:{en:'Website impersonates a Kuwaiti official entity but uses a fake domain — verify the link ends with the exact .gov.kw domain',ar:'الموقع يقلّد جهة كويتية رسمية لكن نطاقه مزيف — تحقق أن الرابط هو gov.kw الحقيقي'}});
  }
  // A3: رابط خارجي غير رسمي
  if(/https?:\/\//.test(m) && !/\.gov\.kw|moi\.gov\.kw|cbk\.gov\.kw|paci\.gov\.kw|mof\.gov\.kw|moh\.gov\.kw|citra\.gov\.kw|nbk\.com|nbkonline\.com|boubyanbank\.com|kfh\.com|gbkuwait\.com|burgan\.com|abk-kuwait\.com|ahlibank\.com\.kw|knet\.com\.kw|ooredoo\.com\.kw|zain\.com\.kw|stc\.com\.kw/.test(m)){
    score+=18;
    signals.push({icon:'🟠',cat:{en:'Link',ar:'رابط'},text:{en:'Link from an unrecognized source — do not click links from unknown numbers or unexpected messages',ar:'رابط من جهة غير معروفة — لا تضغط على روابط من أرقام مجهولة أو رسائل غير متوقعة'}});
  }
  // A4: رابط مختصر مشبوه
  if(/https?:\/\/(bit\.ly|tinyurl|t\.co|goo\.gl|ow\.ly|rb\.gy|cutt\.ly|shorturl|is\.gd|buff\.ly|tiny\.cc|bl\.ink|clck\.ru)\//.test(m)){
    score+=25;
    signals.push({icon:'🟠',cat:{en:'Link',ar:'رابط'},text:{en:'Shortened URL — scammers use URL shorteners to hide the real suspicious destination',ar:'رابط مختصر — المحتالون يستخدمون روابط مختصرة لإخفاء العنوان الحقيقي المشبوه'}});
  }

  // ════════════════════════════════════════════════════════
  // BLOCK B — أساليب الضغط النفسي
  // ════════════════════════════════════════════════════════

  // B1: استعجال باللهجة الكويتية والعربية
  var urgKw = /الحين|هلاه|بسرعة|ما تتأخر|لا تتأخر|ما عندك وقت|ما في وقت|دقيقة|ثواني|وايد ضروري|ضروري الحين|عاجل الحين|ابد ما تأخر|قبل الدوام|قبل المغرب|قبل العصر|قبل ما يغلق|قبل ما ينتهي/;
  var urgMsa = /فوري|عاجل|فوراً|عاجلاً|على الفور|بشكل عاجل|في أقرب وقت|خلال 24 ساعة|خلال ساعة|خلال دقائق|قبل انتهاء|سيتم تعليق|سيتم إيقاف|سيتم حجب|سيتم إلغاء|سنضطر|آخر فرصة/;
  var urgEn  = /urgent|immediately|right now|act now|within 24|before it expires|last chance|account will be|will be suspended|will be blocked|will be terminated|limited time|expires soon/;
  if(urgKw.test(m) || urgMsa.test(m) || urgEn.test(m)){
    score+=22;
    signals.push({icon:'🟠',cat:{en:'Pressure',ar:'ضغط'},text:{en:'Urgency language — scammers create fake pressure to stop you from thinking. Always take your time and verify',ar:'لغة استعجال — المحتالون يخلقون ضغطاً وهمياً لمنعك من التفكير. خذ وقتك دائماً وتحقق'}});
  }
  // B2: تهديد بعواقب
  var threat = /سيتم إلغاء|سيتم حذف|سيتم تجميد|ستخسر|ستفقد|سنضطر لإلغاء|حسابك سيُغلق|ستُحرم|محروم من|ستواجه عقوبة|ستُحال|يحبسونك|نوقف خدماتك|نلغي اشتراكك|يوقفون رقمك/;
  var threatEn = /account will be closed|will lose access|will be penalized|legal action|will be reported|will be arrested|face consequences/;
  if(threat.test(m) || threatEn.test(m)){
    score+=20;
    signals.push({icon:'🟠',cat:{en:'Threat',ar:'تهديد'},text:{en:'Threat of negative consequences — a common tactic to force quick action without thinking',ar:'تهديد بعواقب سلبية — أسلوب شائع لإجبارك على التصرف بسرعة دون تفكير'}});
  }
  // B3: إيهام بالمكافأة / الترغيب
  var lure = /ربحت|فزت|اخترناك|تهانينا|مبروك|أنت الفائز|تم اختيارك|مكافأة خاصة|عرض حصري|فرصة ذهبية|مجاناً|مجانية|هدية|gift|free|exclusive offer|you have been selected/;
  if(lure.test(m)){
    score+=15;
    signals.push({icon:'🟡',cat:{en:'Lure',ar:'إغراء'},text:{en:'Bait of prize or free gift — always verify before responding to any unexpected offer',ar:'إغراء بمكافأة أو هدية مجانية — تحقق قبل الاستجابة لأي عرض غير متوقع'}});
  }

  // ════════════════════════════════════════════════════════
  // BLOCK C — انتحال هويات كويتية رسمية
  // ════════════════════════════════════════════════════════

  // C1: وزارة الداخلية / البطاقة المدنية
  var moiScam = /بطاقة مدنية|بطاقتك المدنية|civil id|الرقم المدني|تجديد البطاقة|بطاقة.*انتهت|انتهت.*بطاقة|صلاحية.*بطاقة|بطاقة.*صلاحية|انتهت صلاحيتها|وزارة الداخلية.*رابط|moi.*renew|renew.*civil/;
  if(moiScam.test(m)){
    score+=30; detectedTypes.push('civil_id');
    signals.push({icon:'🔴',cat:{en:'ID Scam',ar:'هوية رسمية'},text:{en:'Civil ID scam — MOI never sends renewal links via SMS or WhatsApp. Renewal is done at paci.gov.kw or authorized centers only',ar:'احتيال البطاقة المدنية — وزارة الداخلية لا ترسل روابط تجديد عبر SMS أو واتساب أبداً. تجديد البطاقة يتم عبر paci.gov.kw أو المراكز المعتمدة'}});
  }
  // C2: PACI / الإقامة / جوازات
  var paciScam = /إقامة.*انتهت|انتهت.*إقامة|تجديد إقامة|إقامتك منتهية|تأشيرة.*انتهت|تأشيرة.*تجديد|جواز.*انتهى|هجرة.*رابط|paci.*link|iqama.*renew/;
  if(paciScam.test(m) && /(رابط|link|ادفع|رسوم|http|موقع)/.test(m)){
    score+=30; detectedTypes.push('iqama');
    signals.push({icon:'🔴',cat:{en:'ID Scam',ar:'هوية رسمية'},text:{en:'Residency renewal scam — Immigration never sends payment links via messages. Renewal is done at paci.gov.kw only',ar:'احتيال تجديد الإقامة — الهجرة والجوازات لا ترسل روابط دفع عبر الرسائل. تجديد الإقامة عبر paci.gov.kw الرسمي فقط'}});
  }
  // C3: KNET
  var knetScam = /(knet|كي نت|كيه نت|كي-نت|شبكة الكويت)/.test(m) && /(suspend|block|verify|تعليق|موقوف|تحقق|علّق|مجمّد|frozen|suspended|verify your|تحقق من|أكّد|confirm)/.test(m);
  if(knetScam){ score+=35; detectedTypes.push('knet');
    signals.push({icon:'🔴',cat:{en:'Bank/Payment',ar:'بنك/دفع'},text:{en:'Fake KNET alert — KNET never sends verification links via SMS. Call the official line 1800 if you have an issue',ar:'تنبيه KNET مزيف — KNET لا يرسل روابط تحقق عبر SMS. إذا واجهت مشكلة اتصل على 1800 الخط الرسمي'}});
  }
  // C4: بنك الكويت الوطني NBK
  var nbkScam = /(nbk|بنك الكويت الوطني|البنك الوطني|nbkonline)/.test(m) && /(otp|رمز|كلمة مرور|password|pin|تحقق|verify|تسجيل دخول|اضغط|رابط)/.test(m);
  if(nbkScam){ score+=35; detectedTypes.push('nbk');
    signals.push({icon:'🔴',cat:{en:'Bank',ar:'بنك'},text:{en:'NBK impersonation — National Bank of Kuwait will never ask for OTP or password via message or call. Call 1801801',ar:'انتحال هوية NBK — بنك الكويت الوطني لن يطلب OTP أو كلمة مرور عبر رسالة أو مكالمة. اتصل على 1801801'}});
  }
  // C5: بيت التمويل الكويتي KFH
  var kfhScam = /(kfh|بيت التمويل|بيتك|kfhonline)/.test(m) && /(otp|رمز|كلمة مرور|password|تحقق|verify|رابط|link|تجميد|frozen)/.test(m);
  if(kfhScam){ score+=35; detectedTypes.push('kfh');
    signals.push({icon:'🔴',cat:{en:'Bank',ar:'بنك'},text:{en:'KFH impersonation — KFH never asks for OTP via messages. Call 1803333',ar:'انتحال هوية KFH — بيت التمويل لا يطلب رمز OTP عبر الرسائل. اتصل على 1803333'}});
  }
  // C6: بنوك كويتية أخرى
  var otherBank = /(burgan|بنك برقان|boubyan|بنك بوبيان|gulf bank|بنك الخليج|الأهلي.*بنك|بنك الأهلي|ahli bank|cbk|البنك المركزي|warba|وربة|masraf|مصرف)/.test(m) && /(suspend|block|frozen|تعليق|تجميد|موقوف|رابط|verify|otp|رمز)/.test(m);
  if(otherBank){ score+=30; detectedTypes.push('bank');
    signals.push({icon:'🔴',cat:{en:'Bank',ar:'بنك'},text:{en:'Kuwait bank impersonation — any real bank will never ask for your data via an SMS link. Call the official number on the back of your card',ar:'انتحال هوية بنك كويتي — أي بنك حقيقي لن يطلب بياناتك عبر رابط SMS. اتصل على الرقم الرسمي خلف بطاقتك'}});
  }
  // C7: اتصالات كويتية (زين / Ooredoo / STC)
  var telecomScam = /(زين|zain|اوريدو|ooredoo|stc|فيفا|viva)/.test(m) && /(جائزة|فزت|ربحت|اشتراك.*مجاني|مجاني.*اشتراك|رصيد.*مجاني|تحقق.*حسابك|otp|رمز تفعيل|verify)/.test(m);
  if(telecomScam){ score+=28; detectedTypes.push('telecom');
    signals.push({icon:'🟠',cat:{en:'Telecom',ar:'اتصالات'},text:{en:'Telecom company impersonation — telecom companies do not send verification links or prizes via WhatsApp',ar:'انتحال هوية شركة اتصالات كويتية — شركات الاتصالات لا ترسل روابط تحقق أو جوائز عبر واتساب'}});
  }
  // C8: جمعيات تعاونية كويتية
  var jam3iya = /(جمعية|تعاونية|co-op|coop).{0,30}(جائزة|فزت|ربحت|سحب|مكافأة|هدية|استلم)/.test(m);
  if(jam3iya){ score+=25; detectedTypes.push('jam3iya');
    signals.push({icon:'🟠',cat:{en:'Co-op',ar:'جمعية'},text:{en:'Co-op impersonation — co-ops do not announce prizes via WhatsApp or SMS. Visit the co-op directly',ar:'انتحال هوية جمعية تعاونية — الجمعيات لا تُعلن عن جوائز عبر واتساب أو SMS. راجع الجمعية مباشرة'}});
  }
  // C9: وزارات وجهات حكومية أخرى
  var govFake = /(وزارة الصحة|وزارة المالية|وزارة التجارة|وزارة الخارجية|وزارة الشؤون|هيئة الاتصالات|citra|البلدية|أمانة العاصمة)/.test(m) && /(رابط|link|http|ادفع|رسوم|تحقق|verify|تسجيل)/.test(m);
  if(govFake){ score+=28; detectedTypes.push('gov_fake');
    signals.push({icon:'🔴',cat:{en:'Government',ar:'حكومي'},text:{en:'Impersonating a Kuwaiti government entity — government agencies do not request payment or verification via SMS links. Go directly to the entity\'s website',ar:'انتحال جهة حكومية كويتية — الجهات الحكومية لا تطلب الدفع أو التحقق عبر روابط SMS. ادخل موقع الجهة مباشرة من متصفحك'}});
  }

  // ════════════════════════════════════════════════════════
  // BLOCK D — أنواع الاحتيال الكويتية المعروفة
  // ════════════════════════════════════════════════════════

  // D1: نصب القريب (انتحال شخصية قريب في ورطة)
  var naqarib1 = /(ابن عمي|ابن عمك|ابن خالي|ابن خالك|بنت عمتي|بنت خالتي|اخوي|أخوي|خوي|اختي|أختي|ريلي|قريبي|ولد عمي|ولد خالي|فلان ابن|أنا ابن)/.test(m) && /(ورطة|مشكلة|حادث|وقفوني|حبسوني|حادثة|غرامة|حجز|توقيف|مستشفى|عملية|دين|كفالة)/.test(m);
  var naqarib2 = /(رقم ثاني|رقم جديد|هاتفي انكسر|هاتفي ضاع|انكسر هاتفي|ضاع هاتفي|موبايلي خربان|شيلتوني رقمي|رقم مؤقت)/.test(m) && /(محتاج|أحتاج|ابي|أبي|ممكن تساعدني|تعيني)/.test(m);
  var naqarib3 = /(محتاج|أحتاج|ابي|أبي).{0,25}(دينار|kwd|فلوس|مبلغ).{0,25}(الحين|ضروري|عاجل|بسرعة|قبل|هلاه)/;
  if(naqarib1 || naqarib2 || naqarib3.test(m)){
    score+=42; detectedTypes.push('naqarib');
    signals.push({icon:'🔴',cat:{en:'Relative Scam',ar:'نصب القريب'},text:{en:'Relative scam — someone calls from an unknown number claiming to be your relative in trouble and requests an urgent transfer. Call that person on their known number before any action',ar:'نصب القريب — أسلوب معروف جداً بالكويت: شخص يتصل من رقم مجهول يدّعي أنه قريبك في ورطة ويطلب تحويل فوري. اتصل بالشخص على رقمه الأصلي قبل أي خطوة'}});
  }
  // D2: طلب الكتمان عن الأهل
  var secrecy = /(ما تقول|ما تحكي|لا تقول|لا تحكي|ما تخبر|لا تخبر|خليها سر|بيننا وبين الله|بيني وبينك|لا أحد يدري|ما أبي أحد يعرف|لا تشوّش|ما أبيهم يعرفون|ما أبي يعرف البيت|ما أبي يشغلون بالهم)/.test(m);
  if(secrecy){
    score+=25;
    signals.push({icon:'🔴',cat:{en:'Relative Scam',ar:'نصب القريب'},text:{en:'Secrecy request — the scammer asks you not to tell anyone in the family. An honest person never asks for secrecy',ar:'طلب الكتمان — المحتال يطلب منك عدم إخبار أحد من العيلة. الشخص الصادق ما يطلب منك الكتمان أبداً'}});
  }
  // D3: احتيال العمالة المنزلية
  var omalaScam = /(عمالة|خادمة|شغالة|سائق|طباخ|حارس|عامل منزلي|domestic worker|maid|driver|cook)/.test(m) && /(مقدمة|رسوم|advance|processing|دفع مسبق|ارسل.*قبل|قبل ما تيي|تكاليف نقل|تأشيرة.*ادفع)/.test(m);
  if(omalaScam){ score+=32; detectedTypes.push('3omala');
    signals.push({icon:'🔴',cat:{en:'Domestic Worker',ar:'عمالة منزلية'},text:{en:'Domestic worker scam — never pay any amount before receiving the worker. Trusted agencies do not request deposits via WhatsApp',ar:'احتيال العمالة المنزلية — لا تدفع أي مبلغ قبل استلام العامل. الشركات الموثوقة لا تطلب مقدمات عبر واتساب'}});
  }
  // D4: احتيال بيع وشراء (سيارات / أجهزة / عقارات)
  var buyScam = /(سيارة|سياره|جهاز|لابتوب|آيفون|iphone|شاشة|تلفزيون|أثاث|شقة|فيلا|بيت|أرض)/.test(m) && /(رخيص|بسعر مغري|تصفية|سعر لقطة|بسعر السوق تقريباً|من المالك مباشرة)/.test(m) && /(عربون|مقدمة|احجز الحين|ارسل.*أحجز|حول.*مقدمة|paypal|western union|حوالة)/.test(m);
  if(buyScam){ score+=30; detectedTypes.push('buy_scam');
    signals.push({icon:'🔴',cat:{en:'Buy/Sell',ar:'بيع وشراء'},text:{en:'Buy/sell scam — unrealistic prices with a deposit request before receipt is a clear scam sign. Never transfer before seeing the item',ar:'احتيال بيع وشراء — أسعار غير منطقية مع طلب عربون أو مقدمة قبل الاستلام هي علامة احتيال واضحة. لا تحوّل قبل ما تشوف البضاعة'}});
  }
  // D5: احتيال الاستثمار والعملات الرقمية
  var invest = /(ضاعف أرباحك|ضاعف أموالك|عوائد مضمونة|ربح مضمون|guaranteed profit|guaranteed return|ربح يومي|daily profit|passive income|دخل سلبي|استثمار آمن|مضمون 100|forex|فوركس|binary|ثنائي|crypto|كريبتو|بيتكوين|bitcoin|ethereum|إيثيريوم|usdt|تيثر|عملة رقمية|trading bot|بوت تداول)/.test(m) && /(انضم|سجّل|استثمر|حوّل|ابدأ|ادفع|اشترك|join|invest|deposit|transfer)/.test(m);
  if(invest){ score+=38; detectedTypes.push('invest');
    signals.push({icon:'🔴',cat:{en:'Financial Fraud',ar:'احتيال مالي'},text:{en:'Investment scam — there is no such thing as guaranteed profits or fixed daily returns. This is a classic Ponzi scheme',ar:'احتيال استثماري — لا يوجد في الدنيا استثمار بعوائد مضمونة أو أرباح يومية ثابتة. هذا احتيال كلاسيكي يعرف بـ Ponzi Scheme'}});
  }
  // D6: احتيال وظائف وهمية
  var job = /(وظيفة|job offer|فرصة عمل|نبحث عن|hiring|vacancy|مطلوب موظف|نوفر عمل|فرصة عمل بالكويت)/.test(m) && /(هوية|جواز|passport|civil id|صورة.*بطاقة|ارسل بيانات|رسوم تسجيل|processing fee|رسوم استخراج|مقدمة|advance payment|ارسل على واتساب)/.test(m);
  if(job){ score+=30; detectedTypes.push('job');
    signals.push({icon:'🟠',cat:{en:'Fake Job',ar:'وظيفة وهمية'},text:{en:'Fake job — real companies do not request ID photos or registration fees via WhatsApp. Verify the company through official websites',ar:'وظيفة مشبوهة — الشركات الحقيقية لا تطلب صور الهوية أو رسوم تسجيل عبر واتساب. تحقق من الشركة عبر المواقع الرسمية'}});
  }
  // D7: احتيال المسابقات والجوائز الوهمية
  var prize = /(فزت|ربحت|تهانينا|مبروك|congratulations|you are the winner|you won|لقد فزت|تم اختيارك|رقمك الفائز|اسمك خرج)/.test(m) && /(جائزة|prize|award|مبلغ|check|شيك|gift card|بطاقة هدية|ارسل.*لتستلم|ادفع.*رسوم|processing fee|رسوم إدارية|ضريبة|tax)/.test(m);
  if(prize){ score+=40; detectedTypes.push('prize');
    signals.push({icon:'🔴',cat:{en:'Fake Prize',ar:'جائزة وهمية'},text:{en:'Fake prize — no real prize requires fees to claim. This is known as Advance Fee Fraud',ar:'جائزة وهمية — لا توجد جوائز حقيقية تطلب رسوماً لاستلامها. هذا الأسلوب معروف بـ Advance Fee Fraud'}});
  }
  // D8: احتيال تطبيقات وهمية / برامج خبيثة
  var malware = /(حمّل|تحميل|نزّل|install|download|ثبّت).{0,40}(تطبيق|app|apk|برنامج|ملف|file).{0,40}(الرابط|هنا|here|link|من هنا)/.test(m);
  var malware2 = /(اضغط هنا لتفعيل|انقر لتحديث|تحديث مهم|important update|security update|تحديث أمني|تحديث فوري|update your app|رابط التحميل)/.test(m);
  if(malware || malware2){ score+=30; detectedTypes.push('malware');
    signals.push({icon:'🔴',cat:{en:'Malware',ar:'برامج خبيثة'},text:{en:'Suspicious download link — never download apps from links in messages. Use App Store or Google Play only',ar:'رابط تحميل مشبوه — لا تحمّل تطبيقات من روابط في الرسائل. استخدم App Store أو Google Play فقط'}});
  }
  // D9: احتيال التصيد عبر واتساب بالكويتي
  var whatsapp = /(واتساب.*رابط|رابط.*واتساب|اضغط الرابط|اضغط هنا|click here|press here|انقر هنا).{0,60}(بياناتك|معلوماتك|حسابك|account|تسجيل الدخول|login|verify)/.test(m);
  if(whatsapp){ score+=25; detectedTypes.push('phishing');
    signals.push({icon:'🟠',cat:{en:'Phishing',ar:'تصيد'},text:{en:'Phishing link via WhatsApp — do not enter your data in any link received via messages even if it looks official',ar:'رابط تصيد عبر واتساب — لا تدخل بياناتك في أي رابط تصلك عبر الرسائل حتى لو بدا رسمياً'}});
  }
  // D10: احتيال "اعطني كود الـ OTP"
  var otpScam = /(ارسلي الكود|ارسل الكود|ارسل الرمز|send me the code|send the otp|send otp|كود.*وصلك|رمز.*وصلك|الرمز اللي وصلك|الكود اللي جالك|ايش الرمز|وش الكود|وش الرقم اللي وصل|رقم التحقق اللي وصل|verification code.*send|share the code)/.test(m);
  if(otpScam){ score+=50; detectedTypes.push('otp_theft');
    signals.push({icon:'🔴',cat:{en:'OTP Theft',ar:'سرقة OTP'},text:{en:'OTP theft request — extremely dangerous! Never send your verification code to anyone, even if they claim to be from a bank or official entity. This is the most dangerous type of scam',ar:'طلب رمز OTP — خطر جداً! لا ترسل رمز التحقق لأي أحد أبداً، حتى لو ادّعى أنه من البنك أو الجهة الرسمية. هذا أخطر أنواع الاحتيال'}});
  }

  // ════════════════════════════════════════════════════════
  // BLOCK E — بيانات شخصية وحساسة
  // ════════════════════════════════════════════════════════

  // E1: طلب بيانات البطاقة البنكية
  var cardData = /(رقم البطاقة|card number|رقم الكارت|cvv|cvc|card verification|تاريخ الانتهاء|expiry date|تاريخ الصلاحية|رقم بطاقتك كاملاً|ارسل.*بيانات.*بطاقة)/.test(m);
  if(cardData){ score+=45; detectedTypes.push('card_data');
    signals.push({icon:'🔴',cat:{en:'Sensitive Data',ar:'بيانات حساسة'},text:{en:'Bank card data request — never send your card number, CVV, or expiry date to anyone for any reason',ar:'طلب بيانات البطاقة البنكية — لا ترسل رقم البطاقة أو CVV أو تاريخ الانتهاء لأي أحد بأي سبب كان'}});
  }
  // E2: طلب كلمة المرور
  var passReq = /(كلمة مرورك|كلمة المرور|password|باسورد|رمز الدخول|pin.*ارسل|ارسل.*pin|ارسل.*password)/.test(m);
  if(passReq){ score+=40;
    signals.push({icon:'🔴',cat:{en:'Sensitive Data',ar:'بيانات حساسة'},text:{en:'Password request — no legitimate entity ever asks for your password. This is fraud',ar:'طلب كلمة المرور — لا توجد جهة رسمية تطلب كلمة مرورك أبداً. هذا احتيال'}});
  }
  // E3: طلب صورة الهوية / الجواز
  var idReq = /(صورة.*هوية|صورة.*جواز|صورة.*بطاقة|ارسل.*هوية|ارسل.*جواز|ارسل.*بطاقة المدنية|copy of.*id|copy of.*passport|id photo|passport photo|scan.*id|هوية.*واضحة|جواز.*واضح)/.test(m);
  if(idReq){ score+=30;
    signals.push({icon:'🟠',cat:{en:'Personal Data',ar:'بيانات شخصية'},text:{en:'ID or passport photo request — never send your ID photo via WhatsApp or Telegram. This data is used for identity theft',ar:'طلب صورة هوية أو جواز — لا ترسل صورة هويتك عبر واتساب أو تيليغرام. هذه البيانات تُستخدم في سرقة الهوية'}});
  }

  // ════════════════════════════════════════════════════════
  // BLOCK F — مؤشرات مالية كويتية
  // ════════════════════════════════════════════════════════

  // F1: آيبان / تحويل بنكي عاجل
  var ibanUrgent = /(آيبان|iban|رقم حساب|account number).{0,80}(الحين|فوري|ضروري|عاجل|اليوم|قبل|now|urgent|immediately)/.test(m);
  if(ibanUrgent){ score+=25;
    signals.push({icon:'🟠',cat:{en:'Wire Transfer',ar:'تحويل مالي'},text:{en:'Urgent IBAN transfer request — never transfer money based on a message or call alone. Verify in person first',ar:'طلب تحويل عاجل على آيبان — لا تحوّل أي مبلغ بناءً على رسالة أو مكالمة فقط. تحقق شخصياً أولاً'}});
  }
  // F2: مبالغ صغيرة معتادة في النصب الكويتي
  var smallAmounts = /(50 دينار|100 دينار|150 دينار|200 دينار|250 دينار|300 دينار|2\.500|5\.000|10\.000 دينار|kwd 50|kwd 100|kwd 200|kwd 500)/.test(m) && /(الحين|عاجل|فوري|ضروري|ارسل|حول|transfer)/.test(m);
  if(smallAmounts){ score+=18;
    signals.push({icon:'🟡',cat:{en:'Financial',ar:'مالي'},text:{en:'Urgent money request — scammers typically request reasonable amounts so you won\'t hesitate. Always verify before any transfer',ar:'طلب مبلغ مالي بشكل عاجل — المحتالون عادةً يطلبون مبالغ معقولة حتى لا تتردد. تحقق قبل أي تحويل'}});
  }
  // F3: PayPal / Western Union / حوالات مشبوهة
  var payMethod = /(paypal|western union|مني|hawala|حوالة غير رسمية|gift card|بطاقة هدية|itunes|google play.*دفع|شحن رصيد.*ارسل)/.test(m);
  if(payMethod){ score+=30;
    signals.push({icon:'🔴',cat:{en:'Suspicious Payment',ar:'طريقة دفع مشبوهة'},text:{en:'Suspicious payment method — official entities never request payment via PayPal, Western Union, or gift cards. Classic fraud sign',ar:'طريقة دفع مشبوهة — الجهات الرسمية لا تطلب الدفع عبر PayPal أو Western Union أو بطاقات هدايا. هذه علامة احتيال كلاسيكية'}});
  }

  // ════════════════════════════════════════════════════════
  // BLOCK G — علامات إيجابية (يخفّض الدرجة)
  // ════════════════════════════════════════════════════════

  // G1: نطاق حكومي كويتي رسمي
  if(/\.gov\.kw/.test(m)){
    score-=20;
    signals.push({icon:'🟢',cat:{en:'Positive',ar:'إيجابي'},text:{en:'Official government domain (.gov.kw) — verify the link starts with https:// and ends with exactly .gov.kw',ar:'نطاق حكومي رسمي (.gov.kw) — تحقق أن الرابط يبدأ بـ https:// وينتهي بـ .gov.kw بالضبط'}});
  }
  // G2: تحذير من مشاركة OTP (دليل على رسالة شرعية)
  if(/(لا تشارك.*otp|لا تعطي.*رمز|لا تشارك.*رمز|do not share.*otp|never share.*otp|otp.*لا تشاركه|رمز.*لا تعطيه لأحد|لن نطلب منك.*رمز|we will never ask.*otp|we never ask)/.test(m)){
    score-=30;
    signals.push({icon:'🟢',cat:{en:'Positive',ar:'إيجابي'},text:{en:'Message warns against sharing OTP — this is how legitimate institutions advise customers',ar:'الرسالة تحذّر من مشاركة OTP — هذا سلوك المؤسسات الشرعية التي تنصح عملاءها بعدم المشاركة'}});
  }
  // G3: إخلاء مسؤولية أمني
  if(/(لن نطلب|لا نطلب|لا يطلب|never ask|will never ask|نؤكد أننا لن)/.test(m)){
    score-=20;
    signals.push({icon:'🟢',cat:{en:'Positive',ar:'إيجابي'},text:{en:'Security disclaimer — official institutions always remind customers they will never ask for passwords',ar:'إخلاء مسؤولية أمني — المؤسسات الرسمية دائماً تذكّر عملاءها أنها لن تطلب كلمات المرور'}});
  }
  // G4: خطوط خدمة عملاء رسمية كويتية
  if(/(1801801|1888|1805|1800000|161|165|1888|22415300|24843000|call.*18|اتصل على 1)/.test(m)){
    score-=12;
    signals.push({icon:'🟢',cat:{en:'Positive',ar:'إيجابي'},text:{en:'Official Kuwaiti customer service number — trusted entities direct you to their official numbers',ar:'رقم خدمة عملاء رسمي كويتي — الجهات الموثوقة توجهك للاتصال على أرقامها الرسمية'}});
  }
  // G5: رسالة بدون رابط ولا طلب مال
  if(!/https?:\/\//.test(m) && !/(دفع|ارسل|حول|transfer|ادفع|pay|آيبان|iban|كلمة مرور|otp|رمز|cvv|pin)/.test(m)){
    score-=10;
    signals.push({icon:'🟢',cat:{en:'Positive',ar:'إيجابي'},text:{en:'No link or sensitive data request in this message — positive indicator',ar:'لا يوجد رابط أو طلب بيانات حساسة في الرسالة — مؤشر إيجابي'}});
  }

  // ════════════════════════════════════════════════════════
  // BLOCK H — منصات وأنواع جديدة
  // ════════════════════════════════════════════════════════

  // H1: بائع إنستغرام/سناب يرفض الدفع عند الاستلام
  if(/(dm|direct|راسلنا|الخاص|دايركت|inbox|snap|سناب|إنستغرام|انستقرام|instagram|تيك توك|tiktok)/.test(m) && /(prepayment|دفع مسبق|حول قبل|transfer first|لا.*cod|no cod|ما.*كاش|بنك فقط|تحويل فقط|ادفع الحين|ما عندنا دفع عند)/.test(m)){
    score+=28; detectedTypes.push('insta_scam');
    signals.push({icon:'🟠',cat:{en:'Unknown Seller',ar:'بائع مجهول'},text:{en:'Social media seller refusing cash-on-delivery — trusted sellers always offer COD. Prepayment to an unknown account = high risk',ar:'بائع على السوشيال ميديا يرفض الدفع عند الاستلام — البائعون الموثوقون دائماً يوفرون COD. الدفع المسبق لحساب مجهول = خطر كبير'}});
  }

  // H2: شركة توصيل وهمية (DHL/Aramex/FedEx)
  if(/(dhl|aramex|fedex|smsa|fetchr|zajil|زاجل|delivery|شحنتك|طردك|باكيج|package|parcel|shipment)/.test(m) && /(احتجزت|موقوفة|رسوم جمرك|customs fee|release fee|ادفع.*لتستلم|verify.*address|تحديث.*عنوان|رابط.*تحديث|customs charges)/.test(m)){
    score+=38; detectedTypes.push('fake_delivery');
    signals.push({icon:'🔴',cat:{en:'Fake Delivery',ar:'توصيل وهمي'},text:{en:'Fake delivery message — real delivery companies never send links to pay customs fees via SMS. Check the official company website directly with your tracking number',ar:'رسالة توصيل مزيفة — شركات التوصيل الحقيقية لا ترسل روابط لدفع رسوم جمارك عبر SMS. تحقق مباشرة من موقع الشركة الرسمي برقم الشحنة'}});
  }

  // H3: إيجار وهمي (مالك مسافر + مقدمة قبل المعاينة)
  if(/(شقة|فيلا|غرفة|apartment|flat|villa|room|للإيجار|للايجار|for rent)/.test(m) && /(مسافر|سفر|خارج الكويت|outside kuwait|غائب|abroad|ارسل المقدمة|deposit|حول.*لحجز|booking.*transfer|reserve.*pay)/.test(m)){
    score+=38; detectedTypes.push('rental_scam');
    signals.push({icon:'🔴',cat:{en:'Rental Scam',ar:'إيجار وهمي'},text:{en:'Rental scam — landlord "abroad" asking for a deposit before viewing is a classic fraud recipe. Never transfer any amount before seeing the unit in person and verifying the owner\'s identity',ar:'احتيال إيجار — صاحب البيت "مسافر" ويطلب مقدمة قبل المعاينة هي وصفة نصب كلاسيكية. لا تحوّل أي مبلغ قبل أن ترى الوحدة شخصياً وتتأكد من هوية المالك'}});
  }

  // H4: كاريم / طلبات / نون / أمازون وهمية
  if(/(careem|كريم|talabat|طلبات|deliveroo|noon|نون|amazon|امازون|instashop|namshi)/.test(m) && /(فزت|ربحت|مبروك|كوبون|voucher|promo|cashback|استرداد|refund|اضغط.*لتفعيل|رابط.*الجائزة|free delivery.*احتجز|عرض.*حصري.*رابط)/.test(m)){
    score+=30; detectedTypes.push('fake_app');
    signals.push({icon:'🟠',cat:{en:'Fake App',ar:'تطبيق وهمي'},text:{en:'Fake message impersonating a known app — real prizes and offers appear inside the app itself, not via external messages',ar:'رسالة مزيفة باسم تطبيق معروف — الجوائز والعروض الحقيقية تظهر داخل التطبيق مباشرة، لا عبر رسائل خارجية'}});
  }

  // H5: قروض وهمية سريعة بدون ضمانات
  if(/(قرض|تمويل|loan|financing|credit).{0,50}(سريع|فوري|بدون ضمان|بدون كفيل|بدون إثبات|no guarantee|no collateral|instant|موافقة فورية|تحويل.*ساعة|خلال ساعة)/.test(m)){
    score+=35; detectedTypes.push('fake_loan');
    signals.push({icon:'🔴',cat:{en:'Fake Loan',ar:'قرض وهمي'},text:{en:'Fake loan — licensed banks do not offer loans via WhatsApp with no guarantees. This type targets people in financial need and steals their data',ar:'قرض وهمي — البنوك المرخصة لا تعرض قروضاً عبر واتساب بدون ضمانات. هذا النوع يستهدف الأشخاص المحتاجين للمال ويسرق بياناتهم'}});
  }

  // H6: رسالة من حساب مسروق تنشر روابط
  if(/(صاحبي|اخوي|أخوي|صديقي|حبيبي|يبيلك|يريدك|أرسلي|شيل).{0,40}(رابط|link|http|اضغط|شوف)/.test(m) && /(عرض|offer|جايزة|مجاني|free|فلوس|ربح|خصم)/.test(m)){
    score+=22; detectedTypes.push('chain_msg');
    signals.push({icon:'🟠',cat:{en:'Chain Message',ar:'رسالة متسلسلة'},text:{en:'Suspicious link from someone you know — their account may be compromised and used to spread malicious links. Call the person directly before clicking any link',ar:'رابط مشبوه من معرفة — حساب صاحبك قد يكون مسروقاً ويُستخدم لنشر روابط خبيثة. اتصل بالشخص مباشرة قبل ما تضغط أي رابط'}});
  }

  // ════════════════════════════════════════════════════════
  // BLOCK I — Advanced Pattern Analysis
  // ════════════════════════════════════════════════════════

  // I1: Multiple scam techniques compound scoring
  if(detectedTypes.length >= 3){
    score += 15;
    signals.push({icon:'🔴',cat:{en:'Multi-Vector',ar:'متعدد الأساليب'},text:{en:'Multiple scam techniques detected simultaneously — this is a sophisticated attack using '+detectedTypes.length+' different methods',ar:'تم اكتشاف عدة أساليب احتيال في وقت واحد — هذا هجوم متطور يستخدم '+detectedTypes.length+' طرق مختلفة'}});
  }

  // I2: Very short message with link
  if(m.length < 60 && /https?:\/\//.test(m)){
    score += 12;
    signals.push({icon:'🟡',cat:{en:'Pattern',ar:'نمط'},text:{en:'Very short message with a link — scammers often send brief messages to avoid detection',ar:'رسالة قصيرة جداً مع رابط — المحتالون يرسلون رسائل مختصرة لتجنب الكشف'}});
  }

  // I3: Excessive emojis as distraction
  var emojiMatches = msg.match(/[\u2600-\u27BF]|[\uD83C-\uDBFF][\uDC00-\uDFFF]/g);
  var emojiCount = emojiMatches ? emojiMatches.length : 0;
  if(emojiCount >= 5 && score > 15){
    score += 8;
    signals.push({icon:'🟡',cat:{en:'Pattern',ar:'نمط'},text:{en:'Excessive emojis used as visual distraction — a common manipulation tactic in scam messages',ar:'استخدام مفرط للإيموجي كإلهاء بصري — أسلوب تلاعب شائع في رسائل الاحتيال'}});
  }

  // I4: Mixed Arabic-English with link
  var hasArabic = /[\u0600-\u06FF]/.test(msg);
  var hasEnglish = /[a-zA-Z]{3,}/.test(msg);
  var hasLink = /https?:\/\//.test(m);
  if(hasArabic && hasEnglish && hasLink && score > 20){
    score += 5;
    signals.push({icon:'🟡',cat:{en:'Pattern',ar:'نمط'},text:{en:'Mixed Arabic-English with a link — legitimate Kuwaiti institutions usually communicate in one consistent language',ar:'خلط عربي-إنجليزي مع رابط — المؤسسات الكويتية الرسمية عادةً تتواصل بلغة واحدة متسقة'}});
  }

  // I5: Impersonal greeting + action request
  var impersonal = /(عزيزي العميل|عزيزي المستخدم|عزيزي المواطن|dear customer|dear user|dear citizen|dear valued|dear applicant|dear member)/.test(m);
  if(impersonal && /(ادفع|حول|ارسل|اضغط|click|pay|transfer|verify|تحقق)/.test(m)){
    score += 10;
    signals.push({icon:'🟡',cat:{en:'Pattern',ar:'نمط'},text:{en:'Generic greeting ("Dear Customer") with action request — real institutions address you by name',ar:'تحية عامة ("عزيزي العميل") مع طلب إجراء — المؤسسات الحقيقية تخاطبك باسمك'}});
  }

  // I6: Foreign phone number (not +965)
  if(/\+(?!965)\d{1,3}[\s\-]?\d/.test(msg) && score > 10){
    score += 8;
    signals.push({icon:'🟡',cat:{en:'Origin',ar:'المصدر'},text:{en:'Foreign phone number detected — be extra cautious with messages from non-Kuwaiti numbers',ar:'رقم هاتف أجنبي — كن حذراً جداً من رسائل الأرقام غير الكويتية'}});
  }

  // I7: IBAN present
  if(/KW\d{2}[A-Z]{4}\d{22}|iban/i.test(msg)){
    score += 10;
    signals.push({icon:'🟡',cat:{en:'Financial',ar:'مالي'},text:{en:'IBAN bank account number present — verify the account holder identity before any transfer',ar:'رقم حساب IBAN موجود — تحقق من هوية صاحب الحساب قبل أي تحويل'}});
  }

  // I8: Excessive caps/exclamation marks
  var exclamCount = (m.match(/!/g) || []).length;
  var capsWords = (msg.match(/[A-Z]{4,}/g) || []).length;
  if((exclamCount >= 4 || capsWords >= 3) && score > 10){
    score += 6;
    signals.push({icon:'🟡',cat:{en:'Pattern',ar:'نمط'},text:{en:'Excessive emphasis (caps/exclamation marks) — professional communications use measured tone',ar:'تأكيد مبالغ فيه (أحرف كبيرة/علامات تعجب) — التواصل الاحترافي يستخدم نبرة هادئة'}});
  }

  // I9: Crypto wallet address
  if(/0x[a-fA-F0-9]{40}|[13][a-km-zA-HJ-NP-Z1-9]{25,34}|T[A-Za-z1-9]{33}/.test(msg)){
    score += 35;
    signals.push({icon:'🔴',cat:{en:'Crypto',ar:'عملات رقمية'},text:{en:'Cryptocurrency wallet address detected — sending crypto is irreversible and untraceable. Never send crypto based on a message',ar:'تم اكتشاف عنوان محفظة عملات رقمية — إرسال الكريبتو لا يمكن استرداده ولا تتبعه. لا ترسل كريبتو بناءً على رسالة'}});
  }

  // I10: Sahel impersonation
  if(/(sahel|ساهل|سهل)/.test(m) && /(رابط|link|http|تحديث|update|تحقق|verify|password|كلمة مرور)/.test(m) && !/sahel\.com\.kw/.test(m)){
    score += 30; detectedTypes.push('sahel_fake');
    signals.push({icon:'🔴',cat:{en:'Government',ar:'حكومي'},text:{en:'Fake Sahel impersonation — the real Sahel platform is sahel.com.kw only. Never click Sahel links from SMS or WhatsApp',ar:'انتحال ساهل مزيف — منصة ساهل الحقيقية هي sahel.com.kw فقط. لا تضغط روابط ساهل من SMS أو واتساب'}});
  }

  // ════════════════════════════════════════════════════════
  // تقييم نهائي
  // ════════════════════════════════════════════════════════
  score = Math.max(0, Math.min(100, score));

  // تحديد النوع الرئيسي للتهديد
  var mainType = {en:'',ar:''};
  if(detectedTypes.indexOf('otp_theft')>=0) mainType = {en:'OTP Code Theft',ar:'سرقة رمز OTP'};
  else if(detectedTypes.indexOf('naqarib')>=0) mainType = {en:'Relative Scam',ar:'نصب القريب'};
  else if(detectedTypes.indexOf('card_data')>=0) mainType = {en:'Bank Data Theft',ar:'سرقة بيانات بنكية'};
  else if(detectedTypes.indexOf('invest')>=0) mainType = {en:'Investment Fraud',ar:'احتيال استثماري'};
  else if(detectedTypes.indexOf('prize')>=0) mainType = {en:'Fake Prize',ar:'جائزة وهمية'};
  else if(detectedTypes.indexOf('knet')>=0||detectedTypes.indexOf('nbk')>=0||detectedTypes.indexOf('bank')>=0) mainType = {en:'Bank Impersonation',ar:'انتحال هوية بنك'};
  else if(detectedTypes.indexOf('civil_id')>=0) mainType = {en:'Civil ID Scam',ar:'احتيال بطاقة مدنية'};
  else if(detectedTypes.indexOf('iqama')>=0) mainType = {en:'Residency Renewal Scam',ar:'احتيال تجديد إقامة'};
  else if(detectedTypes.indexOf('malware')>=0) mainType = {en:'Malware',ar:'برنامج خبيث'};
  else if(detectedTypes.indexOf('job')>=0) mainType = {en:'Fake Job',ar:'وظيفة وهمية'};
  else if(detectedTypes.indexOf('3omala')>=0) mainType = {en:'Domestic Worker Scam',ar:'احتيال عمالة منزلية'};
  else if(detectedTypes.indexOf('buy_scam')>=0) mainType = {en:'Buy/Sell Scam',ar:'احتيال بيع وشراء'};
  else if(detectedTypes.indexOf('fake_delivery')>=0) mainType = {en:'Fake Delivery',ar:'رسالة توصيل مزيفة'};
  else if(detectedTypes.indexOf('rental_scam')>=0) mainType = {en:'Rental Scam',ar:'احتيال إيجار'};
  else if(detectedTypes.indexOf('fake_loan')>=0) mainType = {en:'Fake Loan',ar:'قرض وهمي'};
  else if(detectedTypes.indexOf('insta_scam')>=0) mainType = {en:'Social Media Seller Scam',ar:'بائع سوشيال ميديا مشبوه'};
  else if(detectedTypes.indexOf('fake_app')>=0) mainType = {en:'App Impersonation',ar:'انتحال تطبيق معروف'};
  else if(detectedTypes.indexOf('chain_msg')>=0) mainType = {en:'Suspicious Chain Message',ar:'رسالة متسلسلة مشبوهة'};
  else if(detectedTypes.indexOf('sahel_fake')>=0) mainType = {en:'Sahel Impersonation',ar:'انتحال ساهل'};

  var mtEn = mainType.en; var mtAr = mainType.ar;
  var levelKey, color, emoji;
  if(score>=70){levelKey='level-critical';color='#ff3c5a';emoji='🚨';}
  else if(score>=45){levelKey='level-high';color='#f5a623';emoji='⚠️';}
  else if(score>=20){levelKey='level-medium';color='#00d4ff';emoji='🔍';}
  else{levelKey='level-safe';color='#00ff88';emoji='✅';}
  var levelText = t(levelKey);
  var mtLocal = LANG==='ar' ? mtAr : mtEn;
  var subLabel = mtLocal ? levelText+' — '+mtLocal : levelText;

  if(signals.length===0){
    if(score<20) signals.push({icon:'🟢',cat:'',text:{en:'No obvious threat signals. Remember: when in doubt, do not click any link — contact the entity directly.',ar:'لا توجد علامات تهديد واضحة. تذكر: عند أي شك لا تضغط الرابط واتصل بالجهة مباشرة.'}});
    else signals.push({icon:'🟡',cat:'',text:{en:'Some patterns warrant attention. Verify the official source before taking any action.',ar:'بعض الأنماط تستدعي الانتباه. تحقق من المصدر الرسمي قبل أي إجراء.'}});
  }
  return{score:score, subLabel:subLabel, color:color, emoji:emoji, signals:signals, types:detectedTypes};
}

function showResult(r){
  var res=document.getElementById('aiResult');
  res.classList.add('show');
  var signalsLabel = t('signals-detected');
  var riskScoreLabel = t('risk-score-colon');
  window._copyResultTxt = r.subLabel+' | '+riskScoreLabel+' '+r.score+'/100 | ShieldKW';
  document.getElementById('resultHeader').innerHTML=
    '<span style="font-size:22px">'+r.emoji+'</span>'+
    '<div style="flex:1;">'+
      '<div style="font-size:0.9rem;font-weight:800;color:'+r.color+'">'+r.subLabel+'</div>'+
      '<div style="font-size:0.65rem;color:var(--muted2);font-family:monospace;margin-top:3px">'+riskScoreLabel+' '+r.score+'/100 &nbsp;|&nbsp; '+r.signals.length+' '+signalsLabel+'</div>'+
    '</div>'+
    '<button onclick="copyResultSummary()" title="'+t('copy-result-btn')+'" style="flex-shrink:0;background:var(--panel);border:1px solid var(--border);color:var(--muted2);border-radius:6px;padding:5px 10px;font-size:0.62rem;cursor:pointer;font-family:monospace;transition:all 0.15s;" onmouseover="this.style.borderColor=\'var(--accent)\';this.style.color=\'var(--accent)\'" onmouseout="this.style.borderColor=\'var(--border)\';this.style.color=\'var(--muted2)\'">📋</button>';
  var fill=document.getElementById('riskFill');
  fill.style.width='0%'; fill.style.background=r.color;
  setTimeout(function(){fill.style.width=r.score+'%';},50);

  var sigs='';
  r.signals.forEach(function(s){
    var catBadge = s.cat ? '<span style="font-size:0.52rem;padding:1px 6px;border-radius:3px;background:rgba(255,255,255,0.06);color:var(--muted2);border:1px solid var(--border);margin-left:6px;vertical-align:middle">'+rt(s.cat)+'</span>' : '';
    sigs+='<div class="signal-item"><span class="signal-icon">'+s.icon+'</span><span class="signal-text">'+catBadge+' '+rt(s.text)+'</span></div>';
  });
  document.getElementById('resultSignals').innerHTML=sigs;

  // ── بناء لوحة الإجراءات الفورية
  var msg = document.getElementById('aiInput').value;
  var urlMatch = msg.match(/https?:\/\/[^\s]+/);
  var detectedUrl = urlMatch ? urlMatch[0] : null;

  var actionsHtml = '';

  // Warning box for high risk
  if(r.score >= 45){
    actionsHtml += '<div style="background:rgba(255,60,90,0.1);border:1px solid rgba(255,60,90,0.35);border-radius:8px;padding:13px 16px;margin-bottom:12px;">'
      +'<div style="font-size:0.78rem;font-weight:700;color:var(--red);margin-bottom:6px;">'+t('warn-dont-act')+'</div>'
      +'<div style="font-size:0.72rem;color:var(--text);line-height:1.7;">'
      +'• '+t('warn-no-link')+'<br>'
      +'• '+t('warn-no-otp')+'<br>'
      +'• '+t('warn-no-transfer')+'<br>'
      +'• '+t('warn-call-direct')
      +'</div></div>';
  }

  // URL scanner button
  if(detectedUrl){
    var vtUrl = 'https://www.virustotal.com/gui/url/'+encodeURIComponent(detectedUrl);
    actionsHtml += '<div style="margin-bottom:10px;">'
      +'<div style="font-size:0.62rem;text-transform:uppercase;letter-spacing:1.5px;color:var(--muted2);margin-bottom:7px;font-family:monospace;">'+t('url-check-lbl')+'</div>'
      +'<div style="background:var(--panel2);border:1px solid var(--border);border-radius:7px;padding:9px 12px;font-size:0.7rem;font-family:monospace;color:var(--muted2);word-break:break-all;margin-bottom:7px;">'+detectedUrl+'</div>'
      +'<div style="display:flex;gap:8px;flex-wrap:wrap;">'
      +'<a href="'+vtUrl+'" target="_blank" style="display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,#1a6b3c,#0d4a2a);color:#00ff88;border:1px solid rgba(0,255,136,0.3);border-radius:6px;padding:7px 14px;font-size:0.72rem;font-weight:700;text-decoration:none;transition:all 0.2s;" onmouseover="this.style.boxShadow=\'0 4px 14px rgba(0,255,136,0.3)\'" onmouseout="this.style.boxShadow=\'none\'">'
      +'<span>🔬</span> '+t('vt-scan-btn')+'</a>'
      +'<button data-url="'+detectedUrl.replace(/"/g,'&quot;')+'" onclick="copyToClip(this.getAttribute(\'data-url\'))" style="display:inline-flex;align-items:center;gap:6px;background:var(--panel);color:var(--muted2);border:1px solid var(--border);border-radius:6px;padding:7px 14px;font-size:0.72rem;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.borderColor=\'var(--accent)\';this.style.color=\'var(--accent)\'" onmouseout="this.style.borderColor=\'var(--border)\';this.style.color=\'var(--muted2)\'">'
      +'<span>📋</span> '+t('copy-url-btn')+'</button>'
      +'</div></div>';
  }

  // Kuwait emergency contacts by detected threat type
  var emergencyNums = '';
  var types = r.types || [];
  var eRow = function(icon,name,num,last){
    return '<div style="display:flex;align-items:center;gap:8px;padding:6px 0;'+(last?'':' border-bottom:1px solid var(--border);')+'"><span style="font-size:16px">'+icon+'</span><div><div style="font-size:0.72rem;font-weight:600;color:#fff">'+name+'</div><div style="font-size:0.68rem;color:var(--accent);font-family:monospace">'+num+'</div></div></div>';
  };
  if(types.indexOf('civil_id')>=0 || types.indexOf('iqama')>=0 || types.indexOf('gov_fake')>=0){
    emergencyNums += eRow('🏛️', t('moi-paci'), '1889 | 25326400');
  }
  if(types.indexOf('knet')>=0){
    emergencyNums += eRow('💳','KNET','1800 | 22281234');
  }
  if(types.indexOf('nbk')>=0){
    emergencyNums += eRow('🏦', t('nbk-name'), '1801801');
  }
  if(types.indexOf('kfh')>=0){
    emergencyNums += eRow('🏦', t('kfh-name'), '1803333');
  }
  if(types.indexOf('bank')>=0){
    emergencyNums += eRow('🏦', t('cbk-name'), '22164600');
  }
  if(types.indexOf('telecom')>=0){
    emergencyNums += eRow('📱', t('telecom-name'), t('telecom-nums'));
  }
  if(types.indexOf('fake_delivery')>=0){
    emergencyNums += eRow('📦', t('aramex-name'), 'aramex.com | 22274747');
  }
  if(types.indexOf('fake_loan')>=0){
    emergencyNums += eRow('🏦', t('cbk-license'), '22164600');
  }
  // Always show cybercrime unit
  emergencyNums += eRow('🚨', t('cybercrime-name'), t('cybercrime-num'), true);

  if(r.score >= 20){
    actionsHtml += '<div style="background:var(--panel2);border:1px solid var(--border);border-radius:8px;padding:12px 14px;">'
      +'<div style="font-size:0.62rem;text-transform:uppercase;letter-spacing:1.5px;color:var(--muted2);margin-bottom:9px;font-family:monospace;">'+t('call-official-lbl')+'</div>'
      +emergencyNums
      +'</div>';
  }

  document.getElementById('aiActions').innerHTML = actionsHtml;
  res.scrollIntoView({behavior:'smooth',block:'nearest'});
}

function copyResultSummary(){
  var txt = window._copyResultTxt || '';
  navigator.clipboard.writeText(txt).then(function(){
    showToast(t('copied-ok'));
  }).catch(function(){
    showToast(t('copy-failed'),true);
  });
}

function copyToClip(txt){
  navigator.clipboard.writeText(txt).then(function(){
    showToast(t('url-copied'));
  }).catch(function(){
    showToast(t('copy-failed'),true);
  });
}

function updateCharCount(len){
  var el = document.getElementById('aiCharCount');
  if(!el) return;
  el.textContent = len > 0 ? len + ' ' + t('chars-lbl') : '';
}

function clearDetector(){
  var inp = document.getElementById('aiInput');
  if(inp){ inp.value = ''; inp.focus(); }
  updateCharCount(0);
  var res = document.getElementById('aiResult');
  if(res) res.classList.remove('show');
}

// ══════════════════════════════════════════
// PHISHING SIMULATOR
// ══════════════════════════════════════════
var SCENARIOS=[
  {
    from:{en:'+965-XXXX-XXXX',ar:'+965-XXXX-XXXX'},
    subject:{en:'Urgent Notice — Your Civil ID',ar:'إشعار عاجل — بطاقتك المدنية'},
    body:{en:'Dear citizen,\n\nPlease be informed that your civil ID has expired. To avoid suspension of all government services, please renew immediately via this link:\n\n<span class="scenario-link">http://moi-kw-renew.info/civil-id?token=KW29384</span>\n\nGeneral Directorate of Residency — Kuwait Ministry of Interior',ar:'عزيزي المواطن،\n\nيرجى العلم أن بطاقتك المدنية قد انتهت صلاحيتها. لتجنب تعليق جميع الخدمات الحكومية يرجى التجديد فوراً عبر الرابط:\n\n<span class="scenario-link">http://moi-kw-renew.info/civil-id?token=KW29384</span>\n\nالمديرية العامة للإقامة — وزارة الداخلية الكويتية'},
    q:{en:'What is the first thing you should check in this message?',ar:'ما أول شيء تتحقق منه في هذه الرسالة؟'},
    opts:[{en:'The link — does it end with .gov.kw?',ar:'الرابط — هل ينتهي بـ .gov.kw؟'},{en:'The sender\'s name',ar:'اسم المُرسل'},{en:'The message text — any spelling errors?',ar:'نص الرسالة — هل فيه أخطاء إملائية؟'},{en:'The sender\'s phone number',ar:'رقم الهاتف المُرسل منه'}],
    correct:0,
    feedback:{en:'✅ <strong>Correct!</strong> Always check the link first. This link ends with .info, not .gov.kw — which immediately reveals the scam. The official MOI website is moi.gov.kw only. MOI never sends renewal links via SMS.',ar:'✅ <strong>صح!</strong> أول شيء دائماً هو الرابط. الرابط هنا ينتهي بـ .info وليس .gov.kw — وهذا يكشف الاحتيال فوراً. الموقع الرسمي لوزارة الداخلية هو moi.gov.kw فقط. وزارة الداخلية لا ترسل روابط تجديد عبر SMS أبداً.'}
  },
  {
    from:{en:'WhatsApp: +965 9XXX XXXX',ar:'واتساب: +965 9XXX XXXX'},subject:{en:'',ar:''},
    body:{en:'Hey bro, it\'s Youssef, your cousin.\n\nI\'m in big trouble right now — I had an accident and I have a fine I need to pay before evening or they\'ll put me in jail.\n\nCan you transfer <strong>250 KWD</strong> to this IBAN?\nBoubyan Bank: KW80BBYN0000000000000012345\n\nI\'ll pay you back tomorrow, and keep it between us — I don\'t want the family to worry.',ar:'هلا أخوي، أنا يوسف ابن عمك.\n\nأنا وايد بورطة الحين — وقعت لي حادث وعندي غرامة لازم أسددها قبل المغرب وإلا يحبسوني.\n\nممكن تحولي <strong>250 دينار</strong> على هذا الآيبان؟\nبنك بوبيان: KW80BBYN0000000000000012345\n\nأرجعلك المبلغ بكره، وخليها بيننا — ما أبي أهلي يشغلون بالهم.'},
    q:{en:'What makes you suspicious of this message?',ar:'وش اللي يخليك تشك في هذي الرسالة؟'},
    opts:[{en:'The number is unknown',ar:'الرقم مجهول وما أعرفه'},{en:'Asking to keep it secret from family is a classic scam sign',ar:'طلب الكتمان عن الأهل هو علامة احتيال كلاسيكية'},{en:'Urgency and psychological pressure',ar:'الاستعجال والضغط النفسي'},{en:'All of the above — all are clear scam signs',ar:'كل ما فوق — كلها علامات احتيال واضحة'}],
    correct:3,
    feedback:{en:'✅ <strong>Excellent!</strong> All points are correct — unknown number + secrecy request + urgency = classic relative scam. Golden rule: before any transfer, call the person on their original number you know. If they don\'t answer, call their family directly.',ar:'✅ <strong>ممتاز!</strong> كل النقاط صحيحة — رقم مجهول + طلب الكتمان + الاستعجال = نصب القريب الكلاسيكي. القاعدة الذهبية: قبل أي تحويل، اتصل بالشخص نفسه على رقمه الأصلي اللي تعرفه. إذا ما رد، اتصل بأهله مباشرة.'}
  },
  {
    from:{en:'Incoming call: +965 2XXX XXXX',ar:'مكالمة واردة: +965 2XXX XXXX'},subject:{en:'',ar:''},
    body:{en:'<em>Phone call...</em>\n\n"Good evening, I\'m Ahmed from the Information Security department at National Bank of Kuwait. We detected a suspicious login attempt on your account from a device in India.\n\nTo protect your account, we\'ll send a verification code to your phone — I need you to read it to me now to stop the transaction or your account will be frozen."',ar:'<em>مكالمة هاتفية...</em>\n\n"مساء الخير، أنا أحمد من قسم أمن المعلومات في بنك الكويت الوطني. رصدنا محاولة دخول مشبوهة على حسابك من جهاز غريب في الهند.\n\nلحماية حسابك سنرسل لك رمز تحقق على جوالك — أحتاج منك تقرأه لي الحين حتى نوقف العملية وإلا سيُجمَّد حسابك."'},
    q:{en:'What do you do?',ar:'ماذا تفعل؟'},
    opts:[{en:'Give him the code — my account is in danger!',ar:'أعطيه الرمز — حسابي في خطر!'},{en:'Tell him to wait and call NBK at 1801801 directly',ar:'أقول له انتظر وأتصل بـ NBK على 1801801 مباشرة'},{en:'Ask for his employee ID to verify',ar:'أطلب منه رقم موظف حتى أتحقق'},{en:'Hang up immediately — NBK will never ask for OTP',ar:'أقفل الخط فوراً — بنك NBK لن يطلب OTP أبداً'}],
    correct:3,
    feedback:{en:'✅ <strong>Correct — hang up immediately!</strong> This is the most dangerous type of scam. NBK and any real bank will never ask for OTP or password over the phone — even in the most critical situations. If in doubt, hang up and call the official number 1801801 yourself.',ar:'✅ <strong>صح — أقفل الخط فوراً!</strong> هذا أخطر أنواع الاحتيال. NBK وأي بنك حقيقي لن يطلب رمز OTP أو كلمة مرور عبر الهاتف أبداً — حتى في أخطر الحالات. إذا شككت، أقفل واتصل أنت على الرقم الرسمي 1801801.'}
  },
  {
    from:{en:'SMS: MOI-KUWAIT',ar:'SMS: MOI-KUWAIT'},subject:{en:'',ar:''},
    body:{en:'Ministry of Interior:\nA traffic violation has been recorded for your vehicle XXX-XXXX for KWD 30.\nPlease pay within 48 hours to avoid doubling the fine:\n<span class="scenario-link">https://moi-kuwait-fines.com/pay/KW3948</span>',ar:'وزارة الداخلية:\nتم تسجيل مخالفة مرورية بسيارتك رقم XXX-XXXX بمبلغ KWD 30.\nيرجى السداد خلال 48 ساعة لتجنب مضاعفة الغرامة:\n<span class="scenario-link">https://moi-kuwait-fines.com/pay/KW3948</span>'},
    q:{en:'What is the main problem with this message?',ar:'ما المشكلة الرئيسية في هذه الرسالة؟'},
    opts:[{en:'The amount is too small',ar:'المبلغ صغير جداً'},{en:'The link is moi-kuwait-fines.com not moi.gov.kw',ar:'الرابط moi-kuwait-fines.com وليس moi.gov.kw'},{en:'It doesn\'t include your personal name',ar:'ما فيها اسمك الشخصي'},{en:'It was sent as SMS not email',ar:'إرسالها كـ SMS وليس إيميل'}],
    correct:1,
    feedback:{en:'✅ <strong>Correct!</strong> The link is the problem. The official MOI website is moi.gov.kw — not any other domain no matter how similar. Fine payments are done via the MOI app or sahel.com.kw only.',ar:'✅ <strong>صح!</strong> الرابط هو المشكلة. الموقع الرسمي لوزارة الداخلية هو moi.gov.kw — وليس أي نطاق آخر مهما كان اسمه قريباً. دفع المخالفات يتم عبر تطبيق MOI أو sahel.com.kw الرسمي فقط.'}
  },
  {
    from:{en:'Telegram: Kuwait_Invest_Pro',ar:'تيليغرام: Kuwait_Invest_Pro'},subject:{en:'',ar:''},
    body:{en:'🔥 <strong>Exclusive investment opportunity for Kuwaitis!</strong>\n\nTradeKW smart trading platform:\n✅ Guaranteed daily profits 3-5%\n✅ Over 2,000 Kuwaiti investors\n✅ Withdraw profits in 24 hours\n✅ Start with just 100 KWD!\n\nRegister now: <span class="scenario-link">http://tradekw-profit.xyz/vip</span>',ar:'🔥 <strong>فرصة استثمارية حصرية لأبناء الكويت!</strong>\n\nمنصة TradeKW للتداول الذكي:\n✅ أرباح يومية مضمونة 3-5%\n✅ أكثر من 2,000 مستثمر كويتي\n✅ سحب الأرباح في 24 ساعة\n✅ ابدأ بـ 100 دينار فقط!\n\nسجّل الحين: <span class="scenario-link">http://tradekw-profit.xyz/vip</span>'},
    q:{en:'Why is this definitely a scam?',ar:'لماذا هذا احتيال بالتأكيد؟'},
    opts:[{en:'Because guaranteed profit doesn\'t exist in real investing',ar:'لأن الربح المضمون لا يوجد في أي استثمار حقيقي'},{en:'Because the link ends with .xyz',ar:'لأن الرابط ينتهي بـ .xyz'},{en:'Because it starts with a small amount to lure people',ar:'لأنه يبدأ بمبلغ صغير لجذب الناس'},{en:'All of the above',ar:'كل ما فوق صحيح'}],
    correct:3,
    feedback:{en:'✅ <strong>Excellent!</strong> All points are correct. Real investments have no guarantees. The .xyz link is suspicious. Starting with a small amount is a classic lure. This is known as a Ponzi Scheme — early investors profit from later ones until the whole thing collapses.',ar:'✅ <strong>ممتاز!</strong> كل النقاط صحيحة. الاستثمارات الحقيقية ليس فيها ضمان. الرابط .xyz مشبوه. والبداية بمبلغ صغير أسلوب كلاسيكي لجذب الضحية. هذا النوع يُعرف بـ Ponzi Scheme — الأوائل يربحون من أموال اللاحقين حتى ينهار الكل.'}
  },
  {
    from:{en:'Your friend: +965 9XXX XXXX',ar:'صاحبك: +965 9XXX XXXX'},subject:{en:'',ar:''},
    body:{en:'Hey! I need your help.\n\nWhatsApp asked me to enter your phone number to verify my account — you\'ll receive a message with a 6-digit code.\n\nCan you send me the code you received? It\'s urgent, otherwise my account will be deleted.',ar:'هلا! أنا محتاج مساعدة.\n\nواتساب طلب مني إدخال رقم هاتفك للتحقق من حسابي — راح يوصلك رسالة فيها رمز مكوّن من 6 أرقام.\n\nممكن تراسلني الرمز اللي وصلك؟ ضروري الحين وإلا يُلغى حسابي.'},
    q:{en:'What is this person trying to do?',ar:'ماذا يحاول هذا الشخص أن يفعل؟'},
    opts:[{en:'Asking for real technical help',ar:'يطلب مساعدة تقنية حقيقية'},{en:'Trying to steal YOUR WhatsApp account',ar:'يحاول سرقة حساب واتساب الخاص بك'},{en:'Wants to verify your number',ar:'يريد التحقق من رقمك'},{en:'Trying to reactivate their account',ar:'يحاول إعادة تفعيل حسابه'}],
    correct:1,
    feedback:{en:'🚨 <strong>WhatsApp account theft!</strong> The 6-digit code is YOUR account\'s activation code — if you give it to this person, they will steal your account and use it to scam your friends and family. Your friend\'s account is likely already stolen. Never send this code to anyone.',ar:'🚨 <strong>سرقة حساب واتساب!</strong> الرمز المكوّن من 6 أرقام هو رمز تفعيل حسابك أنت — إذا أعطيته لهذا الشخص سيسرق حسابك ويستخدمه لنصب أصدقائك وعيلتك. حساب صاحبك على الأرجح مسروق بالفعل وهو لا يعلم. لا ترسل هذا الرمز لأحد أبداً.'}
  },
  {
    from:{en:'CBK Kuwait',ar:'CBK Kuwait'},subject:{en:'',ar:''},
    body:{en:'Central Bank of Kuwait:\nYour account statement for February 2026 is ready.\n\nLog in via the official website: <span class="scenario-link">https://www.cbk.gov.kw</span>\n\nReminder: CBK will never ask for your password, OTP, or PIN via SMS or phone. If anyone requests these claiming to be CBK, hang up and call 22164600.',ar:'بنك الكويت المركزي:\nكشف حسابك لشهر فبراير 2026 جاهز.\n\nسجّل دخولك عبر الموقع الرسمي: <span class="scenario-link">https://www.cbk.gov.kw</span>\n\nتذكير: CBK لن يطلب كلمة مرورك أو رمز OTP أو PIN عبر SMS أو الهاتف. إذا طلب أحد ذلك ادّعاءً أنه CBK، أغلق الخط واتصل على 22164600.'},
    q:{en:'Is this message legitimate or suspicious?',ar:'هل هذه الرسالة شرعية أم مشبوهة؟'},
    opts:[{en:'Suspicious — it contains a link',ar:'مشبوهة — فيها رابط'},{en:'Legitimate — official domain + security warning',ar:'شرعية — نطاق رسمي + تحذير أمني'},{en:'Not clear',ar:'مش واضح'},{en:'Suspicious — banks don\'t send SMS',ar:'مشبوهة — البنك لا يرسل SMS'}],
    correct:1,
    feedback:{en:'✅ <strong>Legitimate!</strong> 3 signs confirm this: (1) The link cbk.gov.kw is the real official domain. (2) The message explicitly warns against sharing OTP — this is what real institutions do. (3) It gives you an official number to verify. Compare this to fake messages that pressure you to act immediately.',ar:'✅ <strong>شرعية!</strong> 3 علامات تؤكد ذلك: (1) الرابط cbk.gov.kw — النطاق الرسمي الحقيقي. (2) الرسالة تحذّر صراحةً من مشاركة OTP — وهذا ما تفعله المؤسسات الحقيقية. (3) تعطيك رقم رسمي للتحقق. قارن هذا بالرسائل المزيفة التي تطلب منك التصرف فوراً.'}
  },
  {
    from:{en:'WhatsApp: +971 5X XXX XXXX',ar:'واتساب: +971 5X XXX XXXX'},subject:{en:'',ar:''},
    body:{en:'Assalamu Alaikum,\n\nWe are Gulf Petroleum Services looking for Kuwaiti employees urgently.\n\n<strong>Salary: 1,800 KWD/month + housing + car</strong>\n\nRequired for registration:\n• Civil ID photo\n• Passport photo\n• Registration fee: KWD 25 (refunded after hiring)\n\nSend to this WhatsApp for details.',ar:'السلام عليكم،\n\nنحن شركة Gulf Petroleum Services نبحث عن موظفين كويتيين بشكل عاجل.\n\n<strong>الراتب: 1,800 دينار شهرياً + سكن + سيارة</strong>\n\nالمطلوب للتسجيل:\n• صورة البطاقة المدنية\n• صورة الجواز\n• رسوم تسجيل: KWD 25 (تُرد بعد التعيين)\n\nأرسل على هذا الواتساب للتفاصيل.'},
    q:{en:'What is the clearest scam sign here?',ar:'ما علامة الاحتيال الأوضح هنا؟'},
    opts:[{en:'The salary is too high',ar:'الراتب مرتفع جداً'},{en:'The phone number is from UAE +971',ar:'رقم الهاتف من الإمارات +971'},{en:'Asking for registration fee + ID photos',ar:'طلب رسوم تسجيل + صور الهوية'},{en:'The company is unknown',ar:'الشركة غير معروفة'}],
    correct:2,
    feedback:{en:'✅ <strong>Correct!</strong> Asking for registration fees + ID photos via WhatsApp is the clearest sign. Real companies never charge fees for hiring, and never collect ID photos via WhatsApp. The UAE number and high salary are supporting signs, but the fees are the key indicator.',ar:'✅ <strong>صح!</strong> طلب رسوم تسجيل + صور الهوية عبر واتساب هي العلامة الأوضح. الشركات الحقيقية لا تطلب رسوماً للتوظيف، ولا تجمع صور الهوية عبر واتساب. الرقم الإماراتي والراتب المرتفع هي علامات داعمة لكن الأساسية هي الرسوم.'}
  },
  {
    from:{en:'Instagram Ad',ar:'إعلان في أنستقرام'},subject:{en:'',ar:''},
    body:{en:'🏠 <strong>Apartment for Rent — Rawda</strong>\n\n3 rooms + living room | 3rd floor | Fully furnished\n💰 Price: <strong>250 KWD/month</strong> (limited offer!)\n\nThe owner is currently traveling outside Kuwait. To reserve the apartment, please send one month\'s deposit (250 KWD) via IBAN and we\'ll send you the key upon arrival.\n\nOffer valid for 24 hours only!',ar:'🏠 <strong>شقة للإيجار — الروضة</strong>\n\n3 غرف + صالة | الطابق الثالث | مفروشة بالكامل\n💰 السعر: <strong>250 دينار شهرياً</strong> (عروض محدودة!)\n\nالمالك مسافر خارج الكويت حالياً. لحجز الشقة يرجى إرسال مقدمة شهر واحد (250 دينار) على الآيبان ونرسل لك المفتاح بعد الوصول.\n\nالعرض لمدة 24 ساعة فقط!'},
    q:{en:'Why is this ad very suspicious?',ar:'لماذا هذا الإعلان مشبوه جداً؟'},
    opts:[{en:'The price is too cheap for the area',ar:'السعر رخيص جداً بالنسبة للمنطقة'},{en:'Owner is traveling and asks for deposit before viewing',ar:'المالك مسافر ويطلب دفع مقدمة قبل المعاينة'},{en:'24-hour offer = fake pressure',ar:'العرض لمدة 24 ساعة = ضغط وهمي'},{en:'All of the above',ar:'كل ما فوق'}],
    correct:3,
    feedback:{en:'✅ <strong>All points are correct!</strong> Unrealistically low price + absent owner + deposit before viewing + fake urgency = guaranteed scam. Rule: never pay for an apartment before seeing it with your own eyes and verifying the owner\'s identity.',ar:'✅ <strong>كل النقاط صحيحة!</strong> سعر منخفض غير منطقي + مالك غائب + طلب مقدمة قبل معاينة + ضغط وهمي = احتيال مضمون. القاعدة: لا تدفع أي مبلغ لشقة قبل أن تراها بعينيك وتتحقق من هوية المالك الحقيقي.'}
  },
  {
    from:{en:'Family WhatsApp Group',ar:'مجموعة واتساب عائلية'},subject:{en:'',ar:''},
    body:{en:'📲 <strong>Great app for family communication!</strong>\n\nInstall this app so we can communicate better and share photos and videos:\n\n<span class="scenario-link">http://family-share-app.top/install/KWFamily.apk</span>\n\nThank you! 🙏',ar:'📲 <strong>تطبيق رائع للتواصل مع العيلة!</strong>\n\nثبّت هذا التطبيق حتى نقدر نتواصل بشكل أفضل ونشارك الصور والفيديوهات:\n\n<span class="scenario-link">http://family-share-app.top/install/KWFamily.apk</span>\n\nThank you! 🙏'},
    q:{en:'What is the main danger in this message?',ar:'ما الخطر الرئيسي في هذه الرسالة؟'},
    opts:[{en:'The app is free, which is suspicious',ar:'التطبيق مجاني وهذا مشبوه'},{en:'The link downloads an APK file outside official app stores',ar:'الرابط يوصّل لتحميل ملف APK خارج متاجر التطبيقات الرسمية'},{en:'The message is in English',ar:'الرسالة بالإنجليزي'},{en:'It was sent in a family group',ar:'إرسالها في مجموعة عائلية'}],
    correct:1,
    feedback:{en:'🚨 <strong>Danger!</strong> APK files outside Google Play or App Store may contain spyware or malware. The person who sent this may have a stolen account being used to spread the virus. Never install any app from a link in a message — regardless of the source.',ar:'🚨 <strong>خطر!</strong> ملفات APK خارج Google Play أو App Store قد تحتوي على برامج تجسس أو malware. الشخص الذي أرسل هذا قد يكون حسابه مسروقاً ويُستخدم لنشر الفيروس. لا تثبّت أي تطبيق من رابط في رسالة — مهما كان المصدر.'}
  },
  {
    from:{en:'SMS: KNET-ALERT',ar:'SMS: KNET-ALERT'},subject:{en:'',ar:''},
    body:{en:'KNET Security Alert:\nYour KNET account has been temporarily suspended due to suspicious activity.\n\nTo restore access, please verify your identity immediately:\n<span class="scenario-link">https://knet-verify-kw.com/restore?ref=KW84726</span>\n\nFailure to verify within 12 hours will result in permanent account closure.\n\nKNET Customer Protection Team',ar:'تنبيه KNET الأمني:\nتم تعليق حساب KNET الخاص بك مؤقتاً بسبب نشاط مشبوه.\n\nلاستعادة الوصول يرجى التحقق من هويتك فوراً:\n<span class="scenario-link">https://knet-verify-kw.com/restore?ref=KW84726</span>\n\nعدم التحقق خلال 12 ساعة سيؤدي لإغلاق الحساب نهائياً.\n\nفريق حماية العملاء - KNET'},
    q:{en:'How can you tell this is a scam?',ar:'كيف تعرف أن هذه الرسالة احتيال؟'},
    opts:[{en:'KNET does not have user accounts that can be "suspended"',ar:'KNET ليس لديه حسابات مستخدمين يمكن "تعليقها"'},{en:'The link should end with .kw',ar:'الرابط لازم ينتهي بـ .kw'},{en:'They forgot to include my name',ar:'ما ذكروا اسمي في الرسالة'},{en:'SMS alerts are always fake',ar:'تنبيهات SMS دائماً مزيفة'}],
    correct:0,
    feedback:{en:'✅ <strong>Correct!</strong> KNET is a payment network, not a personal account service — it cannot be "suspended" for individual users. This is a fundamental misunderstanding scammers exploit. Additionally, the link knet-verify-kw.com is not the official knet.com.kw domain. KNET will never contact you to "verify your identity."',ar:'✅ <strong>صح!</strong> KNET هي شبكة دفع وليست خدمة حسابات شخصية — لا يمكن "تعليقها" للمستخدمين الأفراد. هذا سوء فهم يستغله المحتالون. بالإضافة لذلك، الرابط knet-verify-kw.com ليس النطاق الرسمي knet.com.kw. KNET لن تتواصل معك أبداً لـ "التحقق من هويتك".'}
  },
  {
    from:{en:'Email: hr@gulf-petroleum-careers.com',ar:'إيميل: hr@gulf-petroleum-careers.com'},subject:{en:'Job Offer — Kuwait Oil Company',ar:'عرض وظيفة — شركة نفط الكويت'},
    body:{en:'Dear Applicant,\n\nCongratulations! Based on your CV, you have been selected for a position at Kuwait Oil Company.\n\n<strong>Position:</strong> Senior Operations Coordinator\n<strong>Salary:</strong> 2,200 KWD/month + benefits\n\n<strong>Required documents:</strong>\n• Scanned copy of Civil ID (front & back)\n• Passport copy\n• Processing fee: KWD 35 (refundable)\n\nPlease reply with documents to proceed.\n\nHR Department — Gulf Petroleum Services',ar:'عزيزي المتقدم،\n\nمبروك! بناءً على سيرتك الذاتية تم اختيارك لوظيفة في شركة نفط الكويت.\n\n<strong>المسمى:</strong> منسق عمليات أول\n<strong>الراتب:</strong> 2,200 دينار شهرياً + مزايا\n\n<strong>المستندات المطلوبة:</strong>\n• نسخة سكانر من البطاقة المدنية (وجهين)\n• نسخة من الجواز\n• رسوم معالجة: KWD 35 (قابلة للاسترداد)\n\nيرجى الرد بالمستندات للمتابعة.\n\nقسم الموارد البشرية — Gulf Petroleum Services'},
    q:{en:'What are the red flags in this job offer?',ar:'ما العلامات التحذيرية في هذا العرض الوظيفي؟'},
    opts:[{en:'The salary seems reasonable for Kuwait',ar:'الراتب معقول للكويت'},{en:'They ask for ID copies and a fee before hiring',ar:'يطلبون صور هوية ورسوم قبل التعيين'},{en:'The email is not from an official KOC domain',ar:'الإيميل ليس من نطاق KOC الرسمي'},{en:'Both B and C — fake domain + ID request + fee',ar:'ب و ج معاً — نطاق مزيف + طلب هوية + رسوم'}],
    correct:3,
    feedback:{en:'✅ <strong>Correct — multiple red flags!</strong> (1) The email gulf-petroleum-careers.com is NOT the official KOC domain (kockw.com). (2) Real companies never ask for ID copies via email before an interview. (3) No legitimate employer charges a "processing fee." These are classic job scam tactics — the fee is stolen and your ID copies are used for identity theft.',ar:'✅ <strong>صح — عدة علامات تحذيرية!</strong> (1) الإيميل gulf-petroleum-careers.com ليس نطاق KOC الرسمي (kockw.com). (2) الشركات الحقيقية لا تطلب صور الهوية عبر الإيميل قبل المقابلة. (3) لا يوجد صاحب عمل شرعي يطلب "رسوم معالجة." هذه أساليب نصب وظائف كلاسيكية — الرسوم تُسرق وصور هويتك تُستخدم لسرقة الهوية.'}
  },
  {
    from:{en:'WhatsApp: +965 6XXX XXXX',ar:'واتساب: +965 6XXX XXXX'},subject:{en:'',ar:''},
    body:{en:'Salam bro,\n\nI found this amazing crypto trading bot — it trades automatically and makes profit while you sleep! 💰\n\nLook at my earnings this week: <strong>+850 KWD in 5 days!</strong>\n\nYou only need to deposit 50 KWD to start. I can send you the link if you want.\n\nWallah it\'s legit, my friend Ahmad is already using it and he quit his job! 🚀',ar:'السلام أخوي،\n\nلقيت بوت تداول عملات رقمية خرافي — يتداول أوتوماتيك ويربح وأنت نايم! 💰\n\nشوف أرباحي هالأسبوع: <strong>+850 دينار في 5 أيام!</strong>\n\nبس تحتاج تودع 50 دينار حتى تبدأ. أقدر أرسلك الرابط إذا تبي.\n\nوالله شيء مضمون، صاحبي أحمد يستخدمه وترك شغله! 🚀'},
    q:{en:'Why is this definitely a scam?',ar:'لماذا هذا احتيال بالتأكيد؟'},
    opts:[{en:'Crypto trading is illegal in Kuwait',ar:'تداول العملات الرقمية غير قانوني بالكويت'},{en:'No bot can guarantee consistent profits — this is a Ponzi scheme',ar:'لا يوجد بوت يضمن أرباح ثابتة — هذا مخطط بونزي'},{en:'The deposit amount is too small',ar:'مبلغ الإيداع صغير جداً'},{en:'WhatsApp messages cannot be trusted',ar:'رسائل واتساب لا يمكن الوثوق بها'}],
    correct:1,
    feedback:{en:'✅ <strong>Correct!</strong> No trading bot or system can guarantee consistent daily profits. This is a classic Ponzi/pyramid scheme: early "investors" get paid from new deposits to create fake credibility, then the whole thing collapses and everyone loses their money. The small initial deposit (50 KWD) is designed to lower your guard. The "friend who quit his job" story is social engineering.',ar:'✅ <strong>صح!</strong> لا يوجد بوت أو نظام تداول يضمن أرباح يومية ثابتة. هذا مخطط بونزي/هرمي كلاسيكي: "المستثمرون" الأوائل يحصلون على أموال من الودائع الجديدة لخلق مصداقية مزيفة، ثم ينهار الكل ويخسر الجميع أموالهم. الإيداع الصغير (50 دينار) مصمم لتقليل حذرك. قصة "الصاحب اللي ترك شغله" هي هندسة اجتماعية.'}
  },
  {
    from:{en:'Email: support@sahel-gov-kw.net',ar:'إيميل: support@sahel-gov-kw.net'},subject:{en:'Sahel Account Security Update',ar:'تحديث أمان حساب ساهل'},
    body:{en:'Dear User,\n\nAs part of our security enhancement program, all Sahel accounts require a mandatory password reset.\n\nPlease click the link below to update your credentials:\n<span class="scenario-link">https://sahel-gov-kw.net/security-update</span>\n\nYour account will be deactivated in 48 hours if not updated.\n\nSahel — Kuwait Government Digital Services',ar:'عزيزي المستخدم،\n\nكجزء من برنامج تعزيز الأمان، جميع حسابات ساهل تحتاج إعادة تعيين كلمة المرور إلزامياً.\n\nيرجى الضغط على الرابط أدناه لتحديث بياناتك:\n<span class="scenario-link">https://sahel-gov-kw.net/security-update</span>\n\nسيتم إلغاء تفعيل حسابك خلال 48 ساعة إذا لم يتم التحديث.\n\nساهل — الخدمات الرقمية الحكومية الكويتية'},
    q:{en:'What is the critical clue that this is phishing?',ar:'ما الدليل الحاسم أن هذه رسالة تصيّد؟'},
    opts:[{en:'Sahel never sends emails',ar:'ساهل لا يرسل إيميلات أبداً'},{en:'The domain sahel-gov-kw.net is fake — real Sahel is sahel.com.kw',ar:'النطاق sahel-gov-kw.net مزيف — ساهل الحقيقي هو sahel.com.kw'},{en:'48 hours is too long for a security update',ar:'48 ساعة مدة طويلة جداً لتحديث أمني'},{en:'The email is in English',ar:'الإيميل بالإنجليزي'}],
    correct:1,
    feedback:{en:'✅ <strong>Correct!</strong> The domain sahel-gov-kw.net is a fake — the real Sahel platform is sahel.com.kw. Scammers often create domains that look similar by adding "gov" or "kw" in the middle. Always type sahel.com.kw directly in your browser instead of clicking any link. Government platforms will never threaten to deactivate your account via email.',ar:'✅ <strong>صح!</strong> النطاق sahel-gov-kw.net مزيف — منصة ساهل الحقيقية هي sahel.com.kw. المحتالون يصنعون نطاقات تبدو مشابهة بإضافة "gov" أو "kw" في النص. دائماً اكتب sahel.com.kw مباشرة في المتصفح بدل الضغط على أي رابط. المنصات الحكومية لن تهدد بإلغاء حسابك عبر الإيميل.'}
  },
  {
    from:{en:'Instagram DM: @luxury_watches_kw',ar:'رسالة إنستغرام: @luxury_watches_kw'},subject:{en:'',ar:''},
    body:{en:'Hey! 👋\n\nWe have original luxury watches at 70% OFF! 🔥\nRolex, Omega, Cartier — all authentic with warranty.\n\n<strong>Special today only:</strong> Rolex Submariner for just 350 KWD (original price 3,500 KWD)\n\nPay via bank transfer and we ship within Kuwait in 24 hours. No COD available — prepayment only.\n\nDM us to order! ⌚',ar:'هلا! 👋\n\nعندنا ساعات فخمة أصلية بخصم 70%! 🔥\nرولكس، أوميغا، كارتييه — كلها أصلية مع ضمان.\n\n<strong>عرض اليوم فقط:</strong> رولكس سبمارينر بس 350 دينار (السعر الأصلي 3,500 دينار)\n\nادفع تحويل بنكي ونوصّل داخل الكويت خلال 24 ساعة. ما عندنا دفع عند الاستلام — دفع مسبق فقط.\n\nراسلنا على الخاص للطلب! ⌚'},
    q:{en:'What makes this Instagram offer suspicious?',ar:'ما الذي يجعل هذا العرض مشبوهاً؟'},
    opts:[{en:'70% off luxury watches is unrealistic',ar:'خصم 70% على ساعات فخمة غير واقعي'},{en:'No COD — prepayment only via bank transfer',ar:'لا يوجد دفع عند الاستلام — دفع مسبق فقط بتحويل بنكي'},{en:'"Today only" is fake urgency pressure',ar:'"اليوم فقط" ضغط وهمي واستعجال مزيف'},{en:'All of the above — classic Instagram scam',ar:'كل ما فوق — احتيال إنستغرام كلاسيكي'}],
    correct:3,
    feedback:{en:'✅ <strong>All correct!</strong> This is a textbook Instagram scam: (1) 70-90% off luxury items is impossible — real Rolex watches cannot be discounted that much. (2) Bank transfer only with no COD means you have no protection if the item never arrives. (3) "Today only" is psychological pressure to prevent you from thinking. Rule: never buy luxury items from unverified Instagram accounts, and always insist on COD or meeting in person.',ar:'✅ <strong>كلها صح!</strong> هذا احتيال إنستغرام نموذجي: (1) خصم 70-90% على منتجات فخمة مستحيل — ساعات رولكس الأصلية ما يمكن تنخصم بهالشكل. (2) التحويل البنكي فقط بدون دفع عند الاستلام يعني ما عندك حماية إذا ما وصل شيء. (3) "اليوم فقط" ضغط نفسي لمنعك من التفكير. القاعدة: لا تشتري منتجات فاخرة من حسابات إنستغرام غير موثقة، ودائماً أصر على الدفع عند الاستلام أو المقابلة شخصياً.'}
  },{
    from:{en:'SMS: ARAMEX-KW',ar:'SMS: ARAMEX-KW'},subject:{en:'',ar:''},
    body:{en:'Your package #KW3847291 is held at Kuwait Customs.\n\nA customs clearance fee of <strong>KWD 2.500</strong> is required before delivery.\n\nPay now to release your shipment:\n<span class="scenario-link">https://aramex-kw-customs.net/pay/release?id=KW384</span>\n\nAramex Kuwait Customer Service',ar:'طردك رقم #KW3847291 محتجز لدى الجمارك الكويتية.\n\nرسوم التخليص الجمركي المطلوبة: <strong>2.500 دينار</strong> قبل التوصيل.\n\nادفع الحين لتحرير شحنتك:\n<span class="scenario-link">https://aramex-kw-customs.net/pay/release?id=KW384</span>\n\nأرامكس خدمة عملاء الكويت'},
    q:{en:'What is the clearest sign this is fake?',ar:'ما أوضح علامة أن هذه الرسالة مزيفة؟'},
    opts:[{en:'Aramex does charge customs fees',ar:'أرامكس تفرض رسوم جمارك فعلاً'},{en:'The link domain is aramex-kw-customs.net, not aramex.com',ar:'النطاق aramex-kw-customs.net وليس aramex.com الرسمي'},{en:'The fee amount is too small',ar:'مبلغ الرسوم صغير جداً'},{en:'Aramex does not deliver to Kuwait',ar:'أرامكس لا توصّل للكويت'}],
    correct:1,
    feedback:{en:'✅ <strong>Correct!</strong> The real Aramex website is aramex.com only. Scammers create lookalike domains like aramex-kw-customs.net to trick you. Real delivery companies either collect fees at the door or direct you to their official app — never via an SMS link.',ar:'✅ <strong>صح!</strong> موقع أرامكس الحقيقي هو aramex.com فقط. المحتالون يصنعون نطاقات مشابهة مثل aramex-kw-customs.net لخداعك. شركات التوصيل الحقيقية تجمع الرسوم عند الباب أو تحيلك للتطبيق الرسمي — وليس عبر رابط SMS أبداً.'}
  },{
    from:{en:'Instagram: @luxury_cars_kw_rental',ar:'إنستغرام: @luxury_cars_kw_rental'},subject:{en:'',ar:''},
    body:{en:'🚗 <strong>Rent your dream car — Kuwait!</strong>\n\nFerrari | Lamborghini | Range Rover\n💰 Starting from KWD 80/day\n\nOwner currently outside Kuwait. To reserve:\n1. Transfer <strong>1 week deposit (KWD 560)</strong> via IBAN\n2. We deliver the car to your door on your arrival date\n\nDM for IBAN details. Offer valid 24 hours only! ⏰',ar:'🚗 <strong>استأجر سيارة أحلامك — الكويت!</strong>\n\nفيراري | لامبورغيني | رينج روفر\n💰 من 80 دينار/يوم\n\nالمالك خارج الكويت حالياً. للحجز:\n1. حوّل <strong>إيداع أسبوع (560 دينار)</strong> على الآيبان\n2. نوصّل السيارة لبابك في تاريخ وصولك\n\nراسل على الخاص للآيبان. العرض لمدة 24 ساعة! ⏰'},
    q:{en:'Why should you never pay this deposit?',ar:'لماذا لا يجب أبداً أن تدفع هذه المقدمة؟'},
    opts:[{en:'80 KWD/day is too cheap for a Ferrari',ar:'80 دينار يوم رخيص جداً لفيراري'},{en:'Owner is "abroad" + deposit before seeing the car + urgency = classic scam combo',ar:'"المالك خارج الكويت" + مقدمة قبل رؤية السيارة + استعجال = مزيج احتيال كلاسيكي'},{en:'Luxury car rental is illegal in Kuwait',ar:'تأجير السيارات الفاخرة غير قانوني بالكويت'},{en:'Instagram is not used for rentals',ar:'إنستغرام لا يُستخدم للتأجير'}],
    correct:1,
    feedback:{en:'✅ <strong>All 3 red flags are there!</strong> (1) Owner conveniently "abroad" so you can\'t meet. (2) Large deposit before ever seeing the car. (3) "24 hours only" fake urgency. Rule: never pay any amount for a car/apartment/item before physically seeing it and verifying ownership.',ar:'✅ <strong>الثلاث علامات موجودة!</strong> (1) المالك "خارج الكويت" بشكل مريب فما تقدر تقابله. (2) إيداع كبير قبل رؤية السيارة. (3) "24 ساعة فقط" استعجال وهمي. القاعدة: لا تدفع أي مبلغ لسيارة/شقة/بضاعة قبل أن تراها شخصياً وتتحقق من هوية المالك.'}
  },{
    from:{en:'WhatsApp: +965 5XXX XXXX',ar:'واتساب: +965 5XXX XXXX'},subject:{en:'',ar:''},
    body:{en:'Assalamu Alaikum,\n\n💰 <strong>Need urgent cash? We can help!</strong>\n\nInstant personal loans — Kuwait:\n✅ Up to KWD 10,000\n✅ No guarantor required\n✅ No salary transfer needed\n✅ Approved in 1 hour\n✅ Any nationality\n\nJust send us:\n• Civil ID photo\n• KWD 30 processing fee (refundable)\n\nReply YES to start your application! 💬',ar:'السلام عليكم،\n\n💰 <strong>تحتاج فلوس بشكل عاجل؟ نقدر نساعدك!</strong>\n\nقروض شخصية فورية — الكويت:\n✅ حتى 10,000 دينار\n✅ بدون كفيل\n✅ بدون تحويل راتب\n✅ موافقة خلال ساعة\n✅ جميع الجنسيات\n\nأرسل لنا فقط:\n• صورة البطاقة المدنية\n• رسوم معالجة 30 دينار (قابلة للاسترداد)\n\nرد YES لتبدأ الطلب! 💬'},
    q:{en:'What makes this loan offer a scam?',ar:'ما الذي يجعل هذا العرض احتيالاً؟'},
    opts:[{en:'KWD 10,000 is too large for a personal loan',ar:'10,000 دينار كثير لقرض شخصي'},{en:'Licensed banks never advertise on WhatsApp or charge upfront fees',ar:'البنوك المرخصة لا تعلن عبر واتساب ولا تطلب رسوم مسبقة'},{en:'No guarantor loans don\'t exist in Kuwait',ar:'القروض بدون كفيل غير موجودة بالكويت'},{en:'1-hour approval is impossible',ar:'الموافقة خلال ساعة مستحيلة'}],
    correct:1,
    feedback:{en:'🚨 <strong>Loan scam!</strong> This is one of the most dangerous scam types because it targets people in financial need. Red flags: (1) No licensed bank advertises on WhatsApp. (2) The KWD 30 "refundable" fee is the actual theft. (3) Asking for your Civil ID gives them your identity to misuse. Always verify any lender with the Central Bank of Kuwait (CBK) at cbk.gov.kw.',ar:'🚨 <strong>احتيال قروض!</strong> هذا من أخطر أنواع النصب لأنه يستهدف المحتاجين مالياً. علامات الخطر: (1) لا يوجد بنك مرخص يعلن عبر واتساب. (2) رسوم الـ 30 دينار "القابلة للاسترداد" هي عملية السرقة الفعلية. (3) صورة البطاقة المدنية تُستخدم لسرقة هويتك. دائماً تحقق من أي جهة تمويل عبر موقع بنك الكويت المركزي cbk.gov.kw.'}
  },{
    from:{en:'SMS: MOH-KUWAIT',ar:'SMS: MOH-KUWAIT'},subject:{en:'',ar:''},
    body:{en:'Ministry of Health — Kuwait:\nOur records show your vaccination file is <strong>incomplete</strong>.\n\nFailure to update within 48 hours may result in restriction of health services.\n\nUpdate your health record immediately:\n<span class="scenario-link">https://moh-kw-health.com/update/vax?id=KW29183</span>\n\nMinistry of Health Kuwait',ar:'وزارة الصحة — الكويت:\nسجلاتنا تُظهر أن ملف تطعيماتك <strong>غير مكتمل</strong>.\n\nعدم التحديث خلال 48 ساعة قد يؤدي لتقييد الخدمات الصحية.\n\nحدّث سجلك الصحي فوراً:\n<span class="scenario-link">https://moh-kw-health.com/update/vax?id=KW29183</span>\n\nوزارة الصحة الكويت'},
    q:{en:'What immediately exposes this as phishing?',ar:'ما الذي يكشف هذه الرسالة كتصيّد فوراً؟'},
    opts:[{en:'The Ministry of Health doesn\'t track vaccinations',ar:'وزارة الصحة لا تتتبع التطعيمات'},{en:'The domain moh-kw-health.com is fake — real MOH is moh.gov.kw',ar:'النطاق moh-kw-health.com مزيف — وزارة الصحة الحقيقية هي moh.gov.kw'},{en:'48 hours is too short for a government deadline',ar:'48 ساعة قصير جداً لمهلة حكومية'},{en:'SMS from government is always suspicious',ar:'SMS من الحكومة مشبوه دائماً'}],
    correct:1,
    feedback:{en:'✅ <strong>Correct!</strong> The domain tells the whole story. Kuwait\'s real Ministry of Health is moh.gov.kw — not moh-kw-health.com. Scammers add "kw" or "kuwait" in fake domains to look convincing. Health service restrictions are never communicated through SMS links. Check your health record directly at moh.gov.kw.',ar:'✅ <strong>صح!</strong> النطاق يقول كل شيء. وزارة الصحة الكويتية الحقيقية هي moh.gov.kw — وليس moh-kw-health.com. المحتالون يضيفون "kw" أو "kuwait" في النطاقات المزيفة لتبدو مقنعة. تقييد الخدمات الصحية لا يتم إبلاغك به عبر روابط SMS. راجع سجلك الصحي مباشرة عبر moh.gov.kw.'}
  },{
    from:{en:'Your friend\'s WhatsApp account',ar:'حساب واتساب صاحبك'},subject:{en:'',ar:''},
    body:{en:'Bro check this out! 👀\n\nFound this crazy Talabat deal — first 10 people get <strong>FREE orders for a whole month!</strong> 🎉\n\nClick before it expires:\n<span class="scenario-link">http://talabat-offers-kw.xyz/freemonth?ref=KW8472</span>\n\nI already claimed mine, easiest thing ever!',ar:'أخوي شوف هذا! 👀\n\nلقيت عرض طلبات خرافي — أول 10 أشخاص يحصلون على <strong>طلبيات مجانية شهر كامل!</strong> 🎉\n\nاضغط قبل ما ينتهي:\n<span class="scenario-link">http://talabat-offers-kw.xyz/freemonth?ref=KW8472</span>\n\nأنا خذيتها، أسهل شي بالدنيا!'},
    q:{en:'What is the right thing to do?',ar:'ما التصرف الصحيح هنا؟'},
    opts:[{en:'Click it — you trust this friend completely',ar:'أضغطه — هذا صاحبي وأثق فيه'},{en:'Call your friend first — their account may be hacked and sending this automatically',ar:'اتصل بصاحبك أولاً — حسابه قد يكون مسروقاً ويرسل هذا تلقائياً'},{en:'Share it in the family group to let everyone benefit',ar:'شاركه في مجموعة العيلة حتى يستفيد الكل'},{en:'It\'s fine because Talabat is a real company',ar:'لا بأس لأن طلبات شركة حقيقية'}],
    correct:1,
    feedback:{en:'🚨 <strong>Stolen account chain scam!</strong> When a friend\'s WhatsApp account is hacked, it automatically sends phishing links to all their contacts — the friend doesn\'t even know it\'s happening. Signs: (1) Domain is talabat-offers-kw.xyz — not talabat.com. (2) "Already claimed mine" is social proof manipulation. Rule: always call before clicking any link sent by a contact, no matter who it is.',ar:'🚨 <strong>احتيال حساب مسروق!</strong> عندما يُسرق حساب واتساب صاحبك، يرسل تلقائياً روابط تصيد لجميع جهات اتصاله — وصاحبك لا يدري. العلامات: (1) النطاق talabat-offers-kw.xyz — وليس talabat.com. (2) "أنا خذيتها" هو تلاعب بالإثبات الاجتماعي. القاعدة: اتصل دائماً قبل أن تضغط أي رابط يرسله لك أي شخص، مهما كانت العلاقة.'}
  },
  // ── NEW SCENARIOS (21-42) ──
  {
    from:{en:'SMS: ZAIN-KW',ar:'SMS: ZAIN-KW'},subject:{en:'',ar:''},
    body:{en:'Zain Kuwait:\nYour prepaid balance is <strong>-2.750 KWD</strong>. Your line will be disconnected in 6 hours.\n\nRecharge immediately to avoid disconnection:\n<span class="scenario-link">https://zain-kw-recharge.com/topup?num=965XXXX</span>\n\nZain Customer Support',ar:'زين الكويت:\nرصيدك المسبق <strong>-2.750 دينار</strong>. سيتم قطع خطك خلال 6 ساعات.\n\nاشحن فوراً لتجنب القطع:\n<span class="scenario-link">https://zain-kw-recharge.com/topup?num=965XXXX</span>\n\nدعم عملاء زين'},
    q:{en:'How do you know this SMS is fake?',ar:'كيف تعرف أن هذه الرسالة مزيفة؟'},
    opts:[{en:'Zain doesn\'t allow negative balances on prepaid',ar:'زين لا تسمح برصيد سالب على المسبق الدفع'},{en:'The domain zain-kw-recharge.com is not zain.com',ar:'النطاق zain-kw-recharge.com ليس zain.com'},{en:'Both — negative prepaid balance is impossible and the domain is fake',ar:'الاثنين — رصيد سالب مسبق الدفع مستحيل والنطاق مزيف'},{en:'6 hours is too short',ar:'6 ساعات فترة قصيرة جداً'}],
    correct:2,
    feedback:{en:'✅ <strong>Correct!</strong> Two dead giveaways: (1) Prepaid lines cannot go negative — they simply stop working at zero. (2) Zain\'s real domain is zain.com — not zain-kw-recharge.com. Always recharge through the official My Zain app or website.',ar:'✅ <strong>صح!</strong> علامتان واضحتان: (1) خطوط المسبق الدفع لا يمكن أن تصبح سالبة — تتوقف ببساطة عند الصفر. (2) نطاق زين الحقيقي هو zain.com — وليس zain-kw-recharge.com. دائماً اشحن من تطبيق My Zain الرسمي أو الموقع.'}
  },
  {
    from:{en:'Email: noreply@kuwaituniversity-admission.com',ar:'إيميل: noreply@kuwaituniversity-admission.com'},subject:{en:'KU Admission Confirmation',ar:'تأكيد قبول جامعة الكويت'},
    body:{en:'Dear Student,\n\nCongratulations! You have been <strong>accepted</strong> into Kuwait University for the Fall 2026 semester.\n\nTo confirm your enrollment, please pay the registration fee of <strong>KWD 45</strong> within 72 hours:\n<span class="scenario-link">https://kuwaituniversity-admission.com/confirm?id=KU2026</span>\n\nKuwait University Admissions Office',ar:'عزيزي الطالب،\n\nمبروك! تم <strong>قبولك</strong> في جامعة الكويت للفصل الدراسي خريف 2026.\n\nلتأكيد تسجيلك يرجى دفع رسوم التسجيل <strong>45 دينار</strong> خلال 72 ساعة:\n<span class="scenario-link">https://kuwaituniversity-admission.com/confirm?id=KU2026</span>\n\nمكتب القبول — جامعة الكويت'},
    q:{en:'What exposes this as a scam?',ar:'ما الذي يكشف أن هذه احتيال؟'},
    opts:[{en:'Kuwait University is free for Kuwaitis — no registration fees',ar:'جامعة الكويت مجانية للكويتيين — لا رسوم تسجيل'},{en:'The domain is not kuniv.edu.kw',ar:'النطاق ليس kuniv.edu.kw'},{en:'Both — no fees + fake domain',ar:'الاثنين — لا رسوم + نطاق مزيف'},{en:'72 hours is suspicious',ar:'72 ساعة مدة مشبوهة'}],
    correct:2,
    feedback:{en:'✅ <strong>Correct!</strong> (1) Kuwait University does not charge registration fees — it\'s free for Kuwaiti nationals. (2) The official domain is kuniv.edu.kw, not kuwaituniversity-admission.com. University admissions are done through the official portal only.',ar:'✅ <strong>صح!</strong> (1) جامعة الكويت لا تفرض رسوم تسجيل — التعليم مجاني للكويتيين. (2) النطاق الرسمي هو kuniv.edu.kw وليس kuwaituniversity-admission.com. القبول يتم عبر البوابة الرسمية فقط.'}
  },
  {
    from:{en:'WhatsApp: +965 9XXX XXXX',ar:'واتساب: +965 9XXX XXXX'},subject:{en:'',ar:''},
    body:{en:'Salam sis! 💎\n\nI\'m selling <strong>22K gold sets</strong> at wholesale prices — closing my shop and everything must go!\n\n🔥 Full gold set (necklace + earrings + bracelet): only <strong>180 KWD</strong> (market value 500+ KWD)\n\nTransfer via KNET link and I\'ll deliver to your door today. Limited pieces left!\n\n<span class="scenario-link">https://knet-pay-gold.com/order?set=22k</span>',ar:'السلام أختي! 💎\n\nأبيع <strong>أطقم ذهب عيار 22</strong> بأسعار الجملة — أقفل المحل وكل شيء لازم يروح!\n\n🔥 طقم ذهب كامل (سلسلة + حلق + إسوارة): بس <strong>180 دينار</strong> (قيمته بالسوق 500+ دينار)\n\nحوّلي عبر رابط KNET وأوصّل لبابك اليوم. قطع محدودة!\n\n<span class="scenario-link">https://knet-pay-gold.com/order?set=22k</span>'},
    q:{en:'What is the biggest red flag?',ar:'ما أكبر علامة تحذيرية؟'},
    opts:[{en:'Gold at 65% below market value is impossible',ar:'ذهب بأقل من 65% من سعر السوق مستحيل'},{en:'KNET does not have payment links like knet-pay-gold.com',ar:'KNET لا يملك روابط دفع مثل knet-pay-gold.com'},{en:'Both — impossible price + fake KNET link',ar:'الاثنين — سعر مستحيل + رابط KNET مزيف'},{en:'Delivery to door is unusual',ar:'التوصيل للباب غير عادي'}],
    correct:2,
    feedback:{en:'✅ <strong>Correct!</strong> Gold prices are set by global markets — no one can sell 22K gold at 65% below market value. And KNET has no direct payment links — the domain knet-pay-gold.com is completely fake. Always buy gold from licensed shops and pay in person.',ar:'✅ <strong>صح!</strong> أسعار الذهب تحددها الأسواق العالمية — لا أحد يبيع ذهب عيار 22 بأقل من 65% من سعر السوق. وKNET ليس لديها روابط دفع مباشرة — النطاق knet-pay-gold.com مزيف تماماً. دائماً اشترِ الذهب من محلات مرخصة وادفع شخصياً.'}
  },
  {
    from:{en:'Email: security@nbk-alerts.com',ar:'إيميل: security@nbk-alerts.com'},subject:{en:'NBK: Card Blocked',ar:'NBK: تم حظر البطاقة'},
    body:{en:'Dear Valued Customer,\n\nYour NBK debit card ending in <strong>****4821</strong> has been <strong>temporarily blocked</strong> due to unusual activity detected from an overseas location.\n\nTo unblock your card, please verify your identity:\n<span class="scenario-link">https://nbk-alerts.com/unblock?card=4821</span>\n\nIf this wasn\'t you, call us immediately.\n\nNBK Fraud Prevention Team',ar:'عزيزي العميل،\n\nتم <strong>حظر بطاقتك</strong> NBK المنتهية بـ <strong>****4821</strong> مؤقتاً بسبب نشاط غير عادي من موقع خارجي.\n\nلإلغاء الحظر يرجى التحقق من هويتك:\n<span class="scenario-link">https://nbk-alerts.com/unblock?card=4821</span>\n\nإذا لم تكن أنت، اتصل بنا فوراً.\n\nفريق الاحتيال - NBK'},
    q:{en:'This email looks very professional. How can you tell it\'s fake?',ar:'هذا الإيميل يبدو احترافي جداً. كيف تعرف أنه مزيف؟'},
    opts:[{en:'NBK would call you, not email',ar:'NBK سيتصلون فيك مش إيميل'},{en:'The domain nbk-alerts.com is not nbk.com — the official NBK domain',ar:'النطاق nbk-alerts.com ليس nbk.com — النطاق الرسمي لـ NBK'},{en:'Banks never mention card numbers',ar:'البنوك لا تذكر أرقام البطاقات أبداً'},{en:'The email is in English',ar:'الإيميل بالإنجليزي'}],
    correct:1,
    feedback:{en:'✅ <strong>Correct!</strong> The official NBK website is nbk.com — not nbk-alerts.com. Scammers make professional-looking emails with fake domains that sound legitimate. Showing the last 4 digits of your card is actually a tactic to build false trust. If you ever receive such an email, go directly to nbk.com or call 1801801.',ar:'✅ <strong>صح!</strong> موقع NBK الرسمي هو nbk.com — وليس nbk-alerts.com. المحتالون يصنعون إيميلات احترافية بنطاقات مزيفة تبدو شرعية. ذكر آخر 4 أرقام من بطاقتك هو أسلوب لبناء ثقة مزيفة. إذا وصلك مثل هذا الإيميل، ادخل مباشرة على nbk.com أو اتصل 1801801.'}
  },
  {
    from:{en:'Instagram: @apple_store_kw_official',ar:'إنستغرام: @apple_store_kw_official'},subject:{en:'',ar:''},
    body:{en:'🎉 <strong>Apple Kuwait Grand Giveaway!</strong>\n\nWe\'re giving away <strong>50 iPhone 16 Pro Max</strong> to celebrate our new store opening!\n\nTo enter:\n1. Follow @apple_store_kw_official\n2. Like this post\n3. Fill out the form: <span class="scenario-link">https://apple-kw-giveaway.com/enter</span>\n(We need your name, phone, and Civil ID for delivery verification)\n\nWinners announced in 48 hours! 📱',ar:'🎉 <strong>سحب آبل الكويت الكبير!</strong>\n\nنسحب على <strong>50 آيفون 16 برو ماكس</strong> بمناسبة افتتاح فرعنا الجديد!\n\nللمشاركة:\n1. تابع @apple_store_kw_official\n2. لايك هذا البوست\n3. عبّي النموذج: <span class="scenario-link">https://apple-kw-giveaway.com/enter</span>\n(نحتاج اسمك ورقمك والرقم المدني لتوصيل الجائزة)\n\nالإعلان عن الفائزين خلال 48 ساعة! 📱'},
    q:{en:'What is the real goal of this "giveaway"?',ar:'ما الهدف الحقيقي من هذا "السحب"؟'},
    opts:[{en:'To promote Apple\'s new store',ar:'للترويج لمتجر آبل الجديد'},{en:'To collect Civil IDs and personal data for identity theft',ar:'لجمع الأرقام المدنية والبيانات الشخصية لسرقة الهوية'},{en:'To gain Instagram followers',ar:'لزيادة متابعين إنستغرام'},{en:'It\'s a legitimate Apple promotion',ar:'هي حملة آبل حقيقية'}],
    correct:1,
    feedback:{en:'🚨 <strong>Identity theft trap!</strong> This is NOT an official Apple account. Apple never runs giveaways through random Instagram accounts or asks for Civil ID numbers. The real goal is collecting your personal data — name, phone, and especially your Civil ID — which can be used for fraud, fake loans, or identity theft. Official Apple promotions only appear at apple.com/kw.',ar:'🚨 <strong>فخ سرقة هوية!</strong> هذا ليس حساب آبل رسمي. آبل لا تسوي سحوبات من حسابات إنستغرام عشوائية ولا تطلب الرقم المدني. الهدف الحقيقي هو جمع بياناتك — الاسم والرقم وخصوصاً الرقم المدني — اللي يُستخدم في الاحتيال والقروض المزيفة وسرقة الهوية. عروض آبل الرسمية تظهر فقط في apple.com/kw.'}
  },
  {
    from:{en:'WhatsApp Group: "VIP Forex Signals 🔥"',ar:'مجموعة واتساب: "إشارات فوركس VIP 🔥"'},subject:{en:'',ar:''},
    body:{en:'📊 <strong>Today\'s FREE signal:</strong>\n\nGOLD BUY @ 2340 → TP 2365 (+250 pips)\n✅ Win rate: 97.3%\n✅ Yesterday\'s profit: +1,200 KWD\n\nJoin our VIP channel for unlimited signals:\n💰 Monthly: 75 KWD\n💰 Lifetime: 300 KWD\n\nPay via IBAN and get instant access.\n<em>Over 5,000 Kuwaiti traders trust us!</em>',ar:'📊 <strong>إشارة مجانية اليوم:</strong>\n\nذهب شراء @ 2340 → TP 2365 (+250 نقطة)\n✅ نسبة النجاح: 97.3%\n✅ ربح أمس: +1,200 دينار\n\nانضم لقناتنا VIP لإشارات بلا حدود:\n💰 شهري: 75 دينار\n💰 مدى الحياة: 300 دينار\n\nادفع عبر IBAN واحصل على وصول فوري.\n<em>أكثر من 5,000 متداول كويتي يثقون بنا!</em>'},
    q:{en:'Why should you never pay for these "signals"?',ar:'لماذا لا يجب أن تدفع مقابل هذه "الإشارات"؟'},
    opts:[{en:'97% win rate is impossible — even top hedge funds don\'t achieve that',ar:'97% نسبة نجاح مستحيلة — حتى أكبر الصناديق لا تحققها'},{en:'If their signals really worked, they wouldn\'t need to sell them',ar:'لو إشاراتهم فعلاً ناجحة ما يحتاجون يبيعونها'},{en:'Both — impossible claims + if it worked they\'d trade themselves',ar:'الاثنين — ادعاءات مستحيلة + لو نجحت يتداولون بأنفسهم'},{en:'Forex trading is illegal',ar:'تداول الفوركس غير قانوني'}],
    correct:2,
    feedback:{en:'✅ <strong>Correct!</strong> A 97% win rate is mathematically impossible in real trading. And the logic is simple: if someone had a magic formula for guaranteed profits, they would use it themselves — not sell it for 75 KWD. These groups show fake screenshots and cherry-picked results. Many are also fronts for unlicensed brokers that steal deposits.',ar:'✅ <strong>صح!</strong> نسبة نجاح 97% مستحيلة رياضياً في التداول الحقيقي. والمنطق بسيط: لو عند شخص وصفة أرباح مضمونة يستخدمها بنفسه — ما يبيعها بـ 75 دينار. هذه المجموعات تعرض سكرينشوتات مزيفة ونتائج منتقاة. وكثير منها واجهات لوسطاء غير مرخصين يسرقون الودائع.'}
  },
  {
    from:{en:'SMS: SAHEL-GOV',ar:'SMS: SAHEL-GOV'},subject:{en:'',ar:''},
    body:{en:'Kuwait e-Government (Sahel):\nYour government services access expires on 01/04/2026.\n\nTo continue using Sahel, please verify your identity and update your phone number:\n<span class="scenario-link">https://sahel.com.kw/verify</span>\n\nFailure to update will result in temporary suspension of all digital services.\n\nKuwait Central Agency for Information Technology',ar:'الحكومة الإلكترونية (ساهل):\nصلاحية وصولك للخدمات الحكومية تنتهي بتاريخ 01/04/2026.\n\nلمواصلة استخدام ساهل، يرجى التحقق من هويتك وتحديث رقم هاتفك:\n<span class="scenario-link">https://sahel.com.kw/verify</span>\n\nعدم التحديث سيؤدي لتعليق مؤقت لجميع الخدمات الرقمية.\n\nالجهاز المركزي لتكنولوجيا المعلومات — الكويت'},
    q:{en:'This message uses the real sahel.com.kw domain. Is it safe?',ar:'هذه الرسالة تستخدم نطاق sahel.com.kw الحقيقي. هل هي آمنة؟'},
    opts:[{en:'Yes — the domain is correct so it must be real',ar:'نعم — النطاق صحيح فلازم تكون حقيقية'},{en:'Be cautious — SMS links can display one URL but redirect to another',ar:'كن حذراً — روابط SMS قد تعرض عنوان لكن تحولك لعنوان آخر'},{en:'No — Sahel never sends SMS messages',ar:'لا — ساهل لا يرسل رسائل SMS أبداً'},{en:'Check by typing sahel.com.kw manually in your browser instead of clicking',ar:'تحقق بكتابة sahel.com.kw يدوياً في المتصفح بدل الضغط على الرابط'}],
    correct:3,
    feedback:{en:'✅ <strong>Best answer!</strong> Even when a link looks correct in SMS, it can redirect to a fake page — this is called "link masking." The safest approach is to NEVER click links in SMS messages. Instead, open your browser and type sahel.com.kw yourself. If there really is an issue with your account, you\'ll see it when you log in.',ar:'✅ <strong>أفضل إجابة!</strong> حتى لو الرابط يبدو صحيحاً في SMS، قد يحوّلك لصفحة مزيفة — وهذا يسمى "إخفاء الرابط." الأسلم هو عدم الضغط على روابط SMS أبداً. بدلاً من ذلك افتح المتصفح واكتب sahel.com.kw بنفسك. إذا فعلاً في مشكلة بحسابك ستراها عند تسجيل الدخول.'}
  },
  {
    from:{en:'Incoming Call: +965 1XXX XXX',ar:'مكالمة واردة: +965 1XXX XXX'},subject:{en:'',ar:''},
    body:{en:'<em>Phone call...</em>\n\n"Assalamu Alaikum. I\'m calling from the Prosecution Office. Your name has been mentioned in an ongoing case regarding money laundering.\n\nThis is your final warning before an arrest warrant is issued. To clear your name, you must pay a <strong>security deposit of KWD 500</strong> immediately to this account.\n\nDo not discuss this with anyone or it will complicate the legal proceedings."',ar:'<em>مكالمة هاتفية...</em>\n\n"السلام عليكم. أنا أتصل من النيابة العامة. اسمك ورد في قضية غسيل أموال جارية.\n\nهذا آخر تحذير قبل إصدار أمر القبض. لتبرئة اسمك يجب دفع <strong>تأمين مالي 500 دينار</strong> فوراً على هذا الحساب.\n\nلا تخبر أحداً وإلا ستتعقّد الإجراءات القانونية."'},
    q:{en:'What should you do immediately?',ar:'ماذا يجب أن تفعل فوراً؟'},
    opts:[{en:'Pay to avoid arrest',ar:'ادفع لتجنب القبض'},{en:'Ask for more details about the case',ar:'اطلب تفاصيل أكثر عن القضية'},{en:'Hang up — the prosecution never calls to demand money',ar:'أقفل الخط — النيابة لا تتصل أبداً لطلب فلوس'},{en:'Call a lawyer first',ar:'اتصل بمحامي أولاً'}],
    correct:2,
    feedback:{en:'✅ <strong>Hang up immediately!</strong> This is one of the most terrifying scams — authority impersonation. Key facts: (1) The Prosecution Office NEVER calls citizens to demand money. (2) Legal proceedings involve official written summons, not phone calls. (3) "Don\'t tell anyone" is the #1 sign of manipulation. (4) No legal system requires cash deposits to "clear your name." If threatened, call the police at 112.',ar:'✅ <strong>أقفل الخط فوراً!</strong> هذا من أكثر أنواع الاحتيال ترويعاً — انتحال صفة السلطة. حقائق مهمة: (1) النيابة العامة لا تتصل أبداً لطلب فلوس. (2) الإجراءات القانونية تتضمن استدعاء رسمي مكتوب وليس اتصالات. (3) "لا تخبر أحداً" هي العلامة الأولى للتلاعب. (4) لا يوجد نظام قانوني يطلب إيداع نقدي لـ "تبرئة اسمك." إذا تعرضت لتهديد اتصل بالشرطة 112.'}
  },
  {
    from:{en:'WhatsApp: +965 6XXX XXXX',ar:'واتساب: +965 6XXX XXXX'},subject:{en:'',ar:''},
    body:{en:'Bro, I just found a way to get <strong>FREE Ooredoo internet</strong> — unlimited data for 3 months! 📶\n\nJust install this app and enter your phone number:\n<span class="scenario-link">http://ooredoo-free-data.xyz/install.apk</span>\n\nI\'ve been using it for 2 weeks and my data hasn\'t run out. Share it with the boys! 🔥',ar:'أخوي، لقيت طريقة تحصل <strong>إنترنت Ooredoo مجاني</strong> — بيانات لا محدودة لمدة 3 أشهر! 📶\n\nبس ثبّت هذا التطبيق وأدخل رقم تلفونك:\n<span class="scenario-link">http://ooredoo-free-data.xyz/install.apk</span>\n\nأنا أستخدمه من أسبوعين وبياناتي ما خلصت. شاركه مع الشباب! 🔥'},
    q:{en:'What is the real danger of this "free data" app?',ar:'ما الخطر الحقيقي من تطبيق "البيانات المجانية"؟'},
    opts:[{en:'It might slow down your phone',ar:'ممكن يبطئ تلفونك'},{en:'The APK is likely malware/spyware that steals your data and passwords',ar:'ملف APK على الأرجح برنامج خبيث/تجسس يسرق بياناتك وكلمات مرورك'},{en:'Free internet doesn\'t exist in Kuwait',ar:'الإنترنت المجاني غير موجود بالكويت'},{en:'Ooredoo will sue you',ar:'Ooredoo ستقاضيك'}],
    correct:1,
    feedback:{en:'🚨 <strong>Malware alert!</strong> APK files from unknown sources are the #1 way phones get infected with spyware. Once installed, this app can: record your calls, steal banking passwords, read your messages, and access your photos. The "friend" who sent this likely has a compromised account. NEVER install APK files outside Google Play Store.',ar:'🚨 <strong>تحذير برنامج خبيث!</strong> ملفات APK من مصادر مجهولة هي الطريقة الأولى لإصابة الهواتف بالتجسس. بعد التثبيت يقدر التطبيق: يسجل مكالماتك، يسرق كلمات مرور البنك، يقرأ رسائلك، ويوصل لصورك. "الصديق" اللي أرسل هذا على الأرجح حسابه مخترق. لا تثبّت ملفات APK خارج Google Play Store أبداً.'}
  },
  {
    from:{en:'SMS: KFH-SECURE',ar:'SMS: KFH-SECURE'},subject:{en:'',ar:''},
    body:{en:'Kuwait Finance House:\nA login attempt was detected from <strong>Dubai, UAE</strong> at 3:42 AM.\n\nIf this was NOT you, secure your account now:\n<span class="scenario-link">https://kfh-secure-login.com/verify?acc=KFH29384</span>\n\nIgnoring this message may result in unauthorized access to your funds.\n\nKFH Digital Security',ar:'بيت التمويل الكويتي:\nتم رصد محاولة دخول من <strong>دبي، الإمارات</strong> الساعة 3:42 صباحاً.\n\nإذا لم تكن أنت، أمّن حسابك الآن:\n<span class="scenario-link">https://kfh-secure-login.com/verify?acc=KFH29384</span>\n\nتجاهل هذه الرسالة قد يؤدي لوصول غير مصرح لأموالك.\n\nالأمن الرقمي — KFH'},
    q:{en:'What makes this particularly dangerous?',ar:'ما الذي يجعل هذه الرسالة خطيرة بشكل خاص؟'},
    opts:[{en:'It mentions a specific city and time — making it feel real',ar:'تذكر مدينة ووقت محدد — مما يجعلها تبدو حقيقية'},{en:'The domain kfh-secure-login.com looks legitimate but isn\'t kfh.com.kw',ar:'النطاق kfh-secure-login.com يبدو شرعي لكنه ليس kfh.com.kw'},{en:'Both — specific details create panic + fake domain steals credentials',ar:'الاثنين — التفاصيل المحددة تثير الذعر + النطاق المزيف يسرق البيانات'},{en:'KFH doesn\'t have digital banking',ar:'KFH ليس عنده خدمات إلكترونية'}],
    correct:2,
    feedback:{en:'✅ <strong>Correct!</strong> This is an advanced phishing attack. The specific city (Dubai) and time (3:42 AM) are designed to create instant panic — making you click without thinking. But: (1) KFH\'s real domain is kfh.com.kw, not kfh-secure-login.com. (2) Real banks block suspicious logins automatically — they don\'t ask you to "verify" via a link. Always call KFH directly at 1803333 if concerned.',ar:'✅ <strong>صح!</strong> هذا هجوم تصيّد متطور. المدينة المحددة (دبي) والوقت (3:42 صباحاً) مصممة لإثارة الذعر الفوري — تخليك تضغط بدون تفكير. لكن: (1) نطاق KFH الحقيقي هو kfh.com.kw وليس kfh-secure-login.com. (2) البنوك الحقيقية تحظر الدخول المشبوه تلقائياً — ما تطلب منك "التحقق" عبر رابط. دائماً اتصل بـ KFH مباشرة على 1803333.'}
  },
  {
    from:{en:'WhatsApp: +965 5XXX XXXX',ar:'واتساب: +965 5XXX XXXX'},subject:{en:'',ar:''},
    body:{en:'Hey, I bought a PlayStation 5 but my son already has one. Selling it <strong>brand new sealed</strong> for 85 KWD only (market price 140 KWD).\n\nI can meet you at The Avenues Mall food court today. Cash only.\n\nI\'ll send you photos and the receipt. First come first served!',ar:'هلا، شريت بلايستيشن 5 بس ولدي عنده واحد. أبيعه <strong>جديد مقفل</strong> بـ 85 دينار فقط (سعر السوق 140 دينار).\n\nأقدر أقابلك في أفنيوز فود كورت اليوم. كاش فقط.\n\nأرسلك صور والفاتورة. أول واحد يوصل ياخذه!'},
    q:{en:'Compared to other scams in this quiz, how risky is this message?',ar:'مقارنة بالاحتيالات الأخرى في هذا الاختبار، كم هذه الرسالة خطيرة؟'},
    opts:[{en:'Very dangerous — same as other scams',ar:'خطيرة جداً — مثل باقي الاحتيالات'},{en:'Low risk — meeting in public, cash, verifiable item. Could be legitimate',ar:'مخاطرة قليلة — مقابلة بمكان عام، كاش، بضاعة يمكن فحصها. ممكن تكون حقيقية'},{en:'Moderate risk — price is too good',ar:'مخاطرة متوسطة — السعر جيد جداً'},{en:'Zero risk — it\'s a PS5',ar:'لا مخاطرة — هذا بلايستيشن'}],
    correct:1,
    feedback:{en:'✅ <strong>Good judgment!</strong> Not every deal is a scam. This one has positive signs: (1) Public meeting place (Avenues Mall). (2) Cash payment — no IBAN or links. (3) You can inspect the sealed box and receipt in person. (4) The discount is reasonable, not outrageous. Stay cautious, but don\'t let scam awareness make you paranoid about every transaction.',ar:'✅ <strong>حكم جيد!</strong> مش كل عرض احتيال. هذا عنده علامات إيجابية: (1) مكان عام للمقابلة (أفنيوز). (2) دفع كاش — لا آيبان ولا روابط. (3) تقدر تفحص العلبة المقفلة والفاتورة شخصياً. (4) الخصم معقول مش مبالغ فيه. خلك حذر، لكن لا تخلي الوعي بالاحتيال يخليك ترتاب من كل معاملة.'}
  },
  {
    from:{en:'Email: hr@koc-careers.org',ar:'إيميل: hr@koc-careers.org'},subject:{en:'Interview Schedule — KOC',ar:'موعد المقابلة — KOC'},
    body:{en:'Dear Applicant,\n\nWe are pleased to inform you that you have been shortlisted for an interview at <strong>Kuwait Oil Company</strong>.\n\n<strong>Date:</strong> April 3, 2026\n<strong>Time:</strong> 10:00 AM\n<strong>Location:</strong> KOC Headquarters, Ahmadi\n\nPlease bring the following:\n• Original Civil ID\n• University certificates\n\nNo fees are required. Please confirm attendance by replying to this email.\n\nHR Department — KOC',ar:'عزيزي المتقدم،\n\nيسرنا إبلاغكم أنه تم ترشيحكم لمقابلة في <strong>شركة نفط الكويت</strong>.\n\n<strong>التاريخ:</strong> 3 أبريل 2026\n<strong>الوقت:</strong> 10:00 صباحاً\n<strong>المكان:</strong> مقر KOC الرئيسي، الأحمدي\n\nيرجى إحضار:\n• البطاقة المدنية الأصلية\n• الشهادات الجامعية\n\nلا توجد رسوم مطلوبة. يرجى تأكيد الحضور بالرد على هذا الإيميل.\n\nقسم الموارد البشرية — KOC'},
    q:{en:'Is this email safe or suspicious?',ar:'هل هذا الإيميل آمن أم مشبوه؟'},
    opts:[{en:'Safe — KOC is a real company',ar:'آمن — KOC شركة حقيقية'},{en:'Suspicious — the domain koc-careers.org is not kockw.com',ar:'مشبوه — النطاق koc-careers.org ليس kockw.com'},{en:'Safe — they didn\'t ask for fees',ar:'آمن — ما طلبوا رسوم'},{en:'Can\'t tell',ar:'ما أقدر أحدد'}],
    correct:1,
    feedback:{en:'✅ <strong>Sharp eye!</strong> Despite looking professional and not asking for money, the domain koc-careers.org is NOT the official KOC domain (kockw.com). This could be a social engineering setup — they might ask for sensitive information later or redirect you to a fake location. Always verify job interviews through the company\'s official website or call their HR directly.',ar:'✅ <strong>نظر حاد!</strong> رغم المظهر الاحترافي وعدم طلب رسوم، النطاق koc-careers.org ليس نطاق KOC الرسمي (kockw.com). هذا قد يكون تمهيد لهندسة اجتماعية — قد يطلبون معلومات حساسة لاحقاً أو يحولونك لمكان مزيف. دائماً تحقق من مقابلات العمل عبر الموقع الرسمي للشركة أو اتصل بقسم الموارد البشرية مباشرة.'}
  },
  {
    from:{en:'WhatsApp: +965 9XXX XXXX',ar:'واتساب: +965 9XXX XXXX'},subject:{en:'',ar:''},
    body:{en:'Salam bro! 🏡\n\nI\'m a real estate agent — I have a <strong>chalets for rent in Khairan</strong> for the weekend.\n\n3 bedrooms + pool + beach access\n💰 Only <strong>75 KWD/night</strong>\n\nBut I need <strong>full payment in advance</strong> via IBAN because the owner requires it. I\'ll send you the location after payment.\n\nAvailable this weekend only! Book now before it\'s gone. 🏖️',ar:'السلام أخوي! 🏡\n\nأنا وسيط عقاري — عندي <strong>شاليه للإيجار بالخيران</strong> لنهاية الأسبوع.\n\n3 غرف + مسبح + وصول للبحر\n💰 بس <strong>75 دينار/ليلة</strong>\n\nبس أحتاج <strong>الدفع كامل مقدماً</strong> عبر آيبان لأن المالك يطلب جذي. أرسلك الموقع بعد الدفع.\n\nمتوفر هالويكند بس! احجز قبل ما يخلص. 🏖️'},
    q:{en:'Why is this chalet rental suspicious?',ar:'لماذا إيجار الشاليه هذا مشبوه؟'},
    opts:[{en:'75 KWD/night is too cheap for Khairan',ar:'75 دينار/ليلة رخيص جداً للخيران'},{en:'Full payment before seeing the property or location',ar:'الدفع الكامل قبل رؤية الشاليه أو الموقع'},{en:'WhatsApp agents are always scams',ar:'وسطاء واتساب دائماً احتيال'},{en:'Khairan chalets don\'t have pools',ar:'شاليهات الخيران ما فيها مسابح'}],
    correct:1,
    feedback:{en:'✅ <strong>Correct!</strong> The critical red flag is paying in full BEFORE ever seeing the chalet or even getting the location. A legitimate rental always lets you visit first or at minimum provides the exact location and photos verifiable on Google Maps. The IBAN payment means your money is gone with no protection if the chalet doesn\'t exist.',ar:'✅ <strong>صح!</strong> العلامة الحاسمة هي الدفع الكامل قبل رؤية الشاليه أو حتى معرفة الموقع. الإيجار الشرعي دائماً يخليك تزور أولاً أو على الأقل يوفر الموقع الدقيق وصور يمكن التحقق منها على خرائط قوقل. الدفع عبر آيبان يعني أموالك راحت بدون حماية إذا الشاليه ما كان موجود.'}
  },
  {
    from:{en:'SMS: MOSAL-KW',ar:'SMS: MOSAL-KW'},subject:{en:'',ar:''},
    body:{en:'Ministry of Social Affairs:\nYour social assistance application <strong>#KW-SA-29384</strong> has been approved.\n\nAmount: <strong>KWD 250/month</strong>\n\nTo activate payments, verify your bank details:\n<span class="scenario-link">https://mosal-kw-verify.com/activate?ref=29384</span>\n\nPayments will begin within 5 business days after verification.\n\nMOSAL — Kuwait',ar:'وزارة الشؤون الاجتماعية:\nتم الموافقة على طلب المساعدة الاجتماعية <strong>#KW-SA-29384</strong>.\n\nالمبلغ: <strong>250 دينار/شهر</strong>\n\nلتفعيل الدفعات يرجى التحقق من بيانات حسابك البنكي:\n<span class="scenario-link">https://mosal-kw-verify.com/activate?ref=29384</span>\n\nستبدأ الدفعات خلال 5 أيام عمل بعد التحقق.\n\nوزارة الشؤون — الكويت'},
    q:{en:'What is suspicious about this approval message?',ar:'ما المشبوه في رسالة الموافقة هذه؟'},
    opts:[{en:'The amount seems too high',ar:'المبلغ يبدو مرتفع'},{en:'Government assistance is never communicated via SMS links',ar:'المساعدات الحكومية لا يتم إبلاغها عبر روابط SMS'},{en:'The domain mosal-kw-verify.com is not the official government domain',ar:'النطاق mosal-kw-verify.com ليس النطاق الحكومي الرسمي'},{en:'Both B and C — no SMS links + fake domain',ar:'ب و ج — لا روابط SMS + نطاق مزيف'}],
    correct:3,
    feedback:{en:'✅ <strong>Correct!</strong> Two critical issues: (1) Government benefits are managed through official portals (Sahel) — never through SMS links. (2) The domain mosal-kw-verify.com is fake. This scam targets people waiting for government assistance, making them desperate to click. Verify any government communication through sahel.com.kw directly.',ar:'✅ <strong>صح!</strong> مشكلتان جوهريتان: (1) المساعدات الحكومية تُدار عبر البوابات الرسمية (ساهل) — وليس عبر روابط SMS. (2) النطاق mosal-kw-verify.com مزيف. هذا الاحتيال يستهدف المنتظرين للمساعدات الحكومية مما يجعلهم يضغطون بلهفة. تحقق من أي تواصل حكومي عبر sahel.com.kw مباشرة.'}
  },
  {
    from:{en:'Talabat App Notification',ar:'إشعار تطبيق طلبات'},subject:{en:'',ar:''},
    body:{en:'<strong>Your Talabat order #TLB-8472 has been delivered!</strong> 🎉\n\nOrder summary:\n• 2x Machboos Deyay — Al-Walimah Restaurant\n• 1x Vimto\n\nTotal: KWD 4.250 (paid via KNET)\n\nRate your experience in the app!\n\nIf you didn\'t place this order, contact us at help.talabat.com.',ar:'<strong>تم توصيل طلبك من طلبات #TLB-8472!</strong> 🎉\n\nملخص الطلب:\n• 2x مچبوس دياي — مطعم الوليمة\n• 1x فيمتو\n\nالمجموع: 4.250 دينار (مدفوع عبر KNET)\n\nقيّم تجربتك في التطبيق!\n\nإذا لم تقم بهذا الطلب تواصل معنا عبر help.talabat.com.'},
    q:{en:'Is this notification legitimate or a scam?',ar:'هل هذا الإشعار حقيقي أم احتيال؟'},
    opts:[{en:'Scam — it mentions a specific order you didn\'t make',ar:'احتيال — يذكر طلب محدد ما سويته'},{en:'Legitimate — in-app notification with no suspicious links or requests',ar:'حقيقي — إشعار داخل التطبيق بدون روابط مشبوهة أو طلبات'},{en:'Scam — it mentions KNET',ar:'احتيال — يذكر KNET'},{en:'Can\'t tell without more information',ar:'ما أقدر أحدد بدون معلومات أكثر'}],
    correct:1,
    feedback:{en:'✅ <strong>Legitimate!</strong> This is a normal Talabat delivery notification. Signs it\'s real: (1) It came through the app, not SMS or email. (2) No links to click or actions demanded. (3) It references a real Kuwaiti restaurant and local items. (4) It directs you to the official help.talabat.com for concerns. Not everything is a scam — learning to identify safe messages is just as important!',ar:'✅ <strong>حقيقي!</strong> هذا إشعار توصيل طلبات عادي. علامات أنه حقيقي: (1) جاء من التطبيق وليس SMS أو إيميل. (2) لا روابط أو إجراءات مطلوبة. (3) يذكر مطعم كويتي حقيقي وأصناف محلية. (4) يوجهك لـ help.talabat.com الرسمي للاستفسارات. مش كل شيء احتيال — تعلّم تحديد الرسائل الآمنة بنفس أهمية كشف المزيفة!'}
  },
  {
    from:{en:'Email: admin@kuwait-ecommerce.store',ar:'إيميل: admin@kuwait-ecommerce.store'},subject:{en:'Your order is ready!',ar:'طلبك جاهز!'},
    body:{en:'Dear Customer,\n\nYour order <strong>#EC-39281</strong> is ready for pickup!\n\nBut we found a <strong>payment discrepancy of KWD 1.500</strong> on your account.\n\nTo resolve this and release your order, please update your payment method:\n<span class="scenario-link">https://kuwait-ecommerce.store/payment-update?id=39281</span>\n\nIf unresolved within 24 hours, your order will be cancelled and refund processing will take 30 days.\n\nKuwait E-Commerce Customer Service',ar:'عزيزي العميل،\n\nطلبك <strong>#EC-39281</strong> جاهز للاستلام!\n\nلكن وجدنا <strong>فرق في الدفع بمبلغ 1.500 دينار</strong> على حسابك.\n\nلحل المشكلة وتحرير طلبك يرجى تحديث طريقة الدفع:\n<span class="scenario-link">https://kuwait-ecommerce.store/payment-update?id=39281</span>\n\nإذا لم يُحل خلال 24 ساعة سيُلغى طلبك وعملية الاسترداد ستستغرق 30 يوماً.\n\nخدمة عملاء الكويت للتجارة الإلكترونية'},
    q:{en:'What scam technique is being used here?',ar:'ما أسلوب الاحتيال المستخدم هنا؟'},
    opts:[{en:'Creating urgency with the 24-hour deadline',ar:'خلق استعجال بمهلة 24 ساعة'},{en:'Using a small amount (KWD 1.5) to seem credible',ar:'استخدام مبلغ صغير (1.5 دينار) ليبدو مقنع'},{en:'Threatening a 30-day refund delay to discourage ignoring',ar:'التهديد بتأخير استرداد 30 يوم لمنعك من التجاهل'},{en:'All of the above — multiple pressure tactics combined',ar:'كل ما فوق — عدة أساليب ضغط مجتمعة'}],
    correct:3,
    feedback:{en:'✅ <strong>Excellent analysis!</strong> This email uses three manipulation layers: (1) Urgency (24 hours). (2) Small believable amount (KWD 1.5 — you\'d think "why risk my order over 1.5?"). (3) Punishment for inaction (30-day refund delay). The combination is designed to make you click without thinking. Rule: never update payment details through email links — go directly to the store\'s official website.',ar:'✅ <strong>تحليل ممتاز!</strong> هذا الإيميل يستخدم ثلاث طبقات تلاعب: (1) استعجال (24 ساعة). (2) مبلغ صغير مقنع (1.5 دينار — تفكر "ليش أخاطر بطلبي على 1.5؟"). (3) عقوبة على عدم التصرف (تأخير استرداد 30 يوم). الجمع بينها مصمم لتضغط بدون تفكير. القاعدة: لا تحدث بيانات الدفع عبر روابط الإيميل — ادخل مباشرة على الموقع الرسمي للمتجر.'}
  },
  {
    from:{en:'WhatsApp: +965 9XXX XXXX',ar:'واتساب: +965 9XXX XXXX'},subject:{en:'',ar:''},
    body:{en:'Assalamu Alaikum brother,\n\nWe are collecting donations for <strong>orphans in Gaza</strong>. Every dinar helps. 🤲\n\nPlease donate via this account:\nIBAN: KW81GULF0000000000012345\nName: Ahmad Human Care\n\nMay Allah reward you. Share this message to spread the good. 🕊️',ar:'السلام عليكم أخوي،\n\nنجمع تبرعات لـ <strong>أيتام غزة</strong>. كل دينار يفرق. 🤲\n\nتبرع عبر هذا الحساب:\nIBAN: KW81GULF0000000000012345\nالاسم: أحمد هيومن كير\n\nجزاك الله خير. شارك الرسالة لنشر الخير. 🕊️'},
    q:{en:'How should you handle charity requests via WhatsApp?',ar:'كيف يجب التعامل مع طلبات التبرع عبر واتساب؟'},
    opts:[{en:'Donate — it\'s for a good cause',ar:'تبرع — القضية نبيلة'},{en:'Ignore all WhatsApp charity requests',ar:'تجاهل جميع طلبات التبرع عبر واتساب'},{en:'Only donate through verified, licensed charities (Kuwait Red Crescent, KRCS, etc.)',ar:'تبرع فقط عبر جمعيات خيرية مرخصة وموثقة (الهلال الأحمر الكويتي، إلخ)'},{en:'Report as spam',ar:'بلّغ عنها كسبام'}],
    correct:2,
    feedback:{en:'✅ <strong>Best approach!</strong> Fake charity scams exploit genuine compassion — especially during crises. The safest way to donate is through verified organizations like Kuwait Red Crescent Society (krcs.org.kw) or Zakat House. Never transfer money to personal accounts claiming to be charities. Licensed charities have official websites, transparent accounting, and government registration.',ar:'✅ <strong>أفضل طريقة!</strong> احتيال الجمعيات الخيرية يستغل الرحمة الحقيقية — خصوصاً أثناء الأزمات. أسلم طريقة للتبرع هي عبر منظمات موثقة مثل الهلال الأحمر الكويتي (krcs.org.kw) أو بيت الزكاة. لا تحوّل فلوس لحسابات شخصية تدّعي أنها خيرية. الجمعيات المرخصة عندها مواقع رسمية وحسابات شفافة وتسجيل حكومي.'}
  },
  {
    from:{en:'SMS: KEPA-KW',ar:'SMS: KEPA-KW'},subject:{en:'',ar:''},
    body:{en:'Kuwait EPA Environmental Violation:\nA complaint has been filed against your property for <strong>waste disposal violation</strong>.\n\nFine: <strong>KWD 150</strong>\n\nPay within 48 hours to avoid legal action:\n<span class="scenario-link">https://kepa-kw-fines.com/pay?case=KW2947</span>\n\nKuwait Environment Public Authority',ar:'هيئة البيئة الكويتية — مخالفة بيئية:\nتم تقديم شكوى ضد عقارك بسبب <strong>مخالفة التخلص من النفايات</strong>.\n\nالغرامة: <strong>150 دينار</strong>\n\nادفع خلال 48 ساعة لتجنب الإجراءات القانونية:\n<span class="scenario-link">https://kepa-kw-fines.com/pay?case=KW2947</span>\n\nالهيئة العامة للبيئة — الكويت'},
    q:{en:'Why is this fine notification clearly fake?',ar:'لماذا إشعار الغرامة هذا مزيف بوضوح؟'},
    opts:[{en:'EPA doesn\'t issue fines',ar:'هيئة البيئة لا تصدر غرامات'},{en:'The domain kepa-kw-fines.com is not the official EPA website',ar:'النطاق kepa-kw-fines.com ليس موقع هيئة البيئة الرسمي'},{en:'Government fines are delivered via official mail, not SMS links',ar:'الغرامات الحكومية تُبلّغ عبر البريد الرسمي وليس روابط SMS'},{en:'Both B and C — fake domain + wrong notification method',ar:'ب و ج — نطاق مزيف + طريقة إبلاغ خاطئة'}],
    correct:3,
    feedback:{en:'✅ <strong>Correct!</strong> Government agencies in Kuwait issue official fines through formal channels — written notices, official mail, or through Sahel/MOI portals. They never send SMS with payment links. And the domain kepa-kw-fines.com is fake — the real EPA website uses a .gov.kw domain. Any fine notification via SMS link is a scam.',ar:'✅ <strong>صح!</strong> الجهات الحكومية بالكويت تصدر الغرامات عبر قنوات رسمية — إشعارات مكتوبة أو بريد رسمي أو عبر ساهل/وزارة الداخلية. لا ترسل أبداً SMS مع روابط دفع. والنطاق kepa-kw-fines.com مزيف — موقع هيئة البيئة الحقيقي يستخدم نطاق .gov.kw. أي إشعار غرامة عبر رابط SMS هو احتيال.'}
  },
  {
    from:{en:'WhatsApp: +44 7XXX XXXXXX',ar:'واتساب: +44 7XXX XXXXXX'},subject:{en:'',ar:''},
    body:{en:'Hello! I\'m Sarah from a UK marketing agency.\n\nWe\'re hiring <strong>remote product testers in Kuwait</strong>. 💼\n\nTask: Buy products from online stores, test them, write a review. We reimburse the purchase + pay you <strong>KWD 15 per review</strong>.\n\nStart with a small purchase (KWD 5-10) and we\'ll reimburse + pay you.\n\n<span class="scenario-link">https://review-jobs-global.com/signup?region=KW</span>\n\nJoin 200+ Kuwaiti reviewers already earning!',ar:'مرحباً! أنا سارة من وكالة تسويق بريطانية.\n\nنوظّف <strong>فاحصين منتجات عن بُعد في الكويت</strong>. 💼\n\nالمهمة: اشترِ منتجات من متاجر إلكترونية، جرّبها، اكتب مراجعة. نعوّض الشراء + ندفعلك <strong>15 دينار لكل مراجعة</strong>.\n\nابدأ بشراء صغير (5-10 دينار) ونعوّضك + ندفعلك.\n\n<span class="scenario-link">https://review-jobs-global.com/signup?region=KW</span>\n\nانضم لـ 200+ مراجع كويتي يكسبون بالفعل!'},
    q:{en:'What type of scam is this?',ar:'ما نوع هذا الاحتيال؟'},
    opts:[{en:'Advance fee fraud — you pay upfront and never get reimbursed',ar:'احتيال رسوم مسبقة — تدفع مقدماً ولا تُعوَّض أبداً'},{en:'Task scam — starts small, then asks for bigger "investments"',ar:'احتيال المهام — يبدأ صغير ثم يطلب "استثمارات" أكبر'},{en:'It\'s a legitimate remote work opportunity',ar:'هذه فرصة عمل عن بُعد حقيقية'},{en:'Identity theft through the signup form',ar:'سرقة هوية عبر نموذج التسجيل'}],
    correct:1,
    feedback:{en:'🚨 <strong>Task scam — one of the fastest-growing scam types!</strong> Here\'s how it works: (1) You buy a small item (KWD 5). (2) They actually reimburse you + pay KWD 15 to build trust. (3) Then tasks get bigger: KWD 50, 100, 200... (4) Eventually they say "invest KWD 500 for a VIP task" and disappear. Victims lose thousands because the early payouts made it feel real.',ar:'🚨 <strong>احتيال المهام — من أسرع أنواع الاحتيال نمواً!</strong> كيف يعمل: (1) تشتري شيء صغير (5 دينار). (2) فعلاً يعوّضونك + يدفعون 15 دينار لبناء الثقة. (3) ثم المهام تكبر: 50، 100، 200 دينار... (4) في النهاية يقولون "استثمر 500 دينار لمهمة VIP" ويختفون. الضحايا يخسرون آلاف لأن الدفعات الأولى خلت الموضوع يبدو حقيقي.'}
  },
  {
    from:{en:'SMS: +965 1XX XXXX',ar:'SMS: +965 1XX XXXX'},subject:{en:'',ar:''},
    body:{en:'The Co-operative Society — Kuwait:\n\nDear member, you have <strong>accumulated points worth KWD 23.750</strong> that expire in 3 days.\n\nRedeem your points now:\n<span class="scenario-link">https://coop-kw-points.com/redeem?member=KW8472</span>\n\nDon\'t let your points go to waste!\n\nKuwait Union of Consumer Co-operative Societies',ar:'الجمعية التعاونية — الكويت:\n\nعزيزي العضو، لديك <strong>نقاط متراكمة بقيمة 23.750 دينار</strong> تنتهي صلاحيتها خلال 3 أيام.\n\nاستبدل نقاطك الآن:\n<span class="scenario-link">https://coop-kw-points.com/redeem?member=KW8472</span>\n\nلا تخلي نقاطك تروح!\n\nاتحاد الجمعيات التعاونية الاستهلاكية — الكويت'},
    q:{en:'What makes this points redemption suspicious?',ar:'ما الذي يجعل استبدال النقاط هذا مشبوهاً؟'},
    opts:[{en:'Co-ops don\'t have loyalty programs',ar:'الجمعيات ما عندها برامج ولاء'},{en:'Points expiring in exactly 3 days creates fake urgency',ar:'انتهاء النقاط في 3 أيام بالضبط يخلق استعجال وهمي'},{en:'The domain coop-kw-points.com is not an official co-op website',ar:'النطاق coop-kw-points.com ليس موقع جمعية رسمي'},{en:'Both B and C — fake urgency + fake domain',ar:'ب و ج — استعجال وهمي + نطاق مزيف'}],
    correct:3,
    feedback:{en:'✅ <strong>Correct!</strong> While some co-ops do have loyalty programs, they manage them through their own apps and cards — not SMS links. The domain coop-kw-points.com is fake, and the 3-day expiry is classic urgency pressure. If your co-op has a points program, check through their official app or visit the branch in person.',ar:'✅ <strong>صح!</strong> بعض الجمعيات فعلاً عندها برامج ولاء لكنها تديرها عبر تطبيقاتها وبطاقاتها — وليس روابط SMS. النطاق coop-kw-points.com مزيف، وانتهاء الصلاحية خلال 3 أيام هو ضغط استعجال كلاسيكي. إذا جمعيتك عندها برنامج نقاط، تحقق عبر تطبيقهم الرسمي أو زر الفرع شخصياً.'}
  },
  {
    from:{en:'Email: support@stc-kw-billing.com',ar:'إيميل: support@stc-kw-billing.com'},subject:{en:'STC Bill Overdue',ar:'فاتورة STC متأخرة'},
    body:{en:'Dear Customer,\n\nYour STC postpaid bill of <strong>KWD 47.250</strong> is <strong>14 days overdue</strong>.\n\nYour line will be disconnected within 24 hours unless payment is made:\n<span class="scenario-link">https://stc-kw-billing.com/pay?acc=965XXXXX</span>\n\nAlternatively, pay through the MySTC app or visit any STC branch.\n\nSTC — Kuwait',ar:'عزيزي العميل،\n\nفاتورة STC الآجلة بمبلغ <strong>47.250 دينار</strong> <strong>متأخرة 14 يوم</strong>.\n\nسيتم قطع خطك خلال 24 ساعة إلا إذا تم الدفع:\n<span class="scenario-link">https://stc-kw-billing.com/pay?acc=965XXXXX</span>\n\nبدلاً من ذلك ادفع عبر تطبيق MySTC أو زر أي فرع STC.\n\nSTC — الكويت'},
    q:{en:'This message mentions the MySTC app and branches. Is it legitimate?',ar:'هذه الرسالة تذكر تطبيق MySTC والفروع. هل هي شرعية؟'},
    opts:[{en:'Yes — it gives multiple payment options',ar:'نعم — تعطي خيارات دفع متعددة'},{en:'The domain stc-kw-billing.com is not stc.com.kw — the real STC domain',ar:'النطاق stc-kw-billing.com ليس stc.com.kw — نطاق STC الحقيقي'},{en:'Mentioning real alternatives doesn\'t make the fake link safe',ar:'ذكر بدائل حقيقية لا يجعل الرابط المزيف آمن'},{en:'Both B and C — scammers add real info to build credibility around the fake link',ar:'ب و ج — المحتالون يضيفون معلومات حقيقية لبناء مصداقية حول الرابط المزيف'}],
    correct:3,
    feedback:{en:'✅ <strong>Sharp thinking!</strong> This is an advanced phishing technique: mixing real information (MySTC app, branch visits) with a fake payment link to appear more credible. The real STC domain is stc.com.kw — not stc-kw-billing.com. Scammers know that adding legitimate alternatives makes the fake link seem less suspicious. Always pay through the official MySTC app directly.',ar:'✅ <strong>تفكير حاد!</strong> هذا أسلوب تصيّد متقدم: خلط معلومات حقيقية (تطبيق MySTC، زيارة الفروع) مع رابط دفع مزيف ليبدو أكثر مصداقية. نطاق STC الحقيقي هو stc.com.kw — وليس stc-kw-billing.com. المحتالون يعرفون أن إضافة بدائل حقيقية يجعل الرابط المزيف أقل إثارة للشك. دائماً ادفع عبر تطبيق MySTC الرسمي مباشرة.'}
  }
];

var simIdx=0,simScore=0,simStreak=0,simAnswered=false;
var SIM_COUNT=20;
var _simPool=[];
function shuffleSimPool(){
  var arr=SCENARIOS.slice();
  // Fisher-Yates shuffle
  for(var i=arr.length-1;i>0;i--){
    var j=Math.floor(Math.random()*(i+1));
    var tmp=arr[i];arr[i]=arr[j];arr[j]=tmp;
  }
  _simPool=arr.slice(0,SIM_COUNT);
}
shuffleSimPool();

function loadScenario(){
  var s=_simPool[simIdx];
  document.getElementById('simQNum').textContent=t('sim-q-prefix')+' '+(simIdx+1)+'/'+SIM_COUNT;
  document.getElementById('simProgress').style.width=(simIdx/SIM_COUNT*100)+'%';
  document.getElementById('simScore').textContent=t('sim-score-lbl')+' '+simScore;
  var bestStored=parseInt(localStorage.getItem('shieldkw_best_score')||'0',10);
  var bestEl=document.getElementById('simBest');
  if(bestEl && bestStored>0) bestEl.textContent=t('best-score')+' '+bestStored+'/'+SIM_COUNT;
  document.getElementById('simFrom').textContent=t('sim-from')+rt(s.from);
  var subj=rt(s.subject);
  document.getElementById('simSubject').textContent=subj||t('sim-no-subject');
  document.getElementById('simBody').innerHTML=rt(s.body).replace(/\n/g,'<br>');
  document.getElementById('simQuestion').textContent=rt(s.q);
  var opts='';
  s.opts.forEach(function(o,i){
    opts+='<button class="sim-opt" onclick="answerSim('+i+')">'+rt(o)+'</button>';
  });
  document.getElementById('simOptions').innerHTML=opts;
  document.getElementById('simFeedback').className='sim-feedback';
  document.getElementById('simNext').className='sim-next';
  document.getElementById('scoreCard').className='score-card';
  document.getElementById('scenarioCard').style.display='block';
  simAnswered=false;
}

function answerSim(idx){
  if(simAnswered)return;
  simAnswered=true;
  var s=_simPool[simIdx];
  var opts=document.querySelectorAll('.sim-opt');
  opts.forEach(function(o){o.disabled=true;});
  if(idx===s.correct){
    opts[idx].className='sim-opt correct';
    simScore++;
    simStreak++;
  } else {
    opts[idx].className='sim-opt wrong';
    opts[s.correct].className='sim-opt correct';
    simStreak=0;
  }
  var strkEl=document.getElementById('simStreak');
  if(strkEl) strkEl.textContent=simStreak>=2?'🔥 '+simStreak:'';

  var fb=document.getElementById('simFeedback');
  fb.innerHTML=rt(s.feedback);
  fb.className='sim-feedback show';
  var nextBtn=document.getElementById('simNext');
  nextBtn.className='sim-next show';
  nextBtn.textContent=t('sim-next');
}

function nextScenario(){
  simIdx++;
  if(simIdx>=SIM_COUNT){
    showScore();
  } else {
    loadScenario();
  }
}

function showScore(){
  document.getElementById('scenarioCard').style.display='none';
  var sc=document.getElementById('scoreCard');
  sc.className='score-card show';
  var total=SIM_COUNT;
  document.getElementById('scoreFinal').textContent=simScore+'/'+total;
  document.getElementById('scoreFinal').style.color=simScore>=Math.ceil(total*0.8)?'#00ff88':simScore>=Math.ceil(total*0.5)?'#f5a623':'#ff3c5a';
  var pct=simScore/total;
  var msgKeys = ['score-msg-bad','score-msg-ok','score-msg-good','score-msg-great'];
  document.getElementById('scoreMsg').textContent=t(msgKeys[pct>=0.9?3:pct>=0.7?2:pct>=0.4?1:0]);
  document.getElementById('simProgress').style.width='100%';
  document.getElementById('simScore').textContent=t('sim-score-lbl')+' '+simScore+'/'+total;
  // Save best score to localStorage
  var best = parseInt(localStorage.getItem('shieldkw_best_score')||'0',10);
  if(simScore>best){localStorage.setItem('shieldkw_best_score',String(simScore));best=simScore;}
  var bestEl=document.getElementById('simBest');
  if(bestEl) bestEl.textContent=t('best-score')+' '+best+'/'+total;
}

function restartSim(){simIdx=0;simScore=0;simStreak=0;var strkEl=document.getElementById('simStreak');if(strkEl)strkEl.textContent='';shuffleSimPool();loadScenario();}

// ══════════════════════════════════════════
// KNOWLEDGE BASE
// ══════════════════════════════════════════
var KB_ITEMS=[
  {icon:'🏛️',color:'#3b82f6',source:'NIST',
   title:{en:'NIST Cybersecurity Framework (CSF)',ar:'إطار NIST للأمن السيبراني'},
   body:{en:'The NIST Cybersecurity Framework — the global standard for managing security risks in organizations.',ar:'إطار NIST للأمن السيبراني — الأساس العالمي لإدارة مخاطر الأمن في المنظمات.'},
   tags:['Framework','Risk Management','NIST'],
   detail:{en:'The framework operates on 5 core functions: (1) Identify — know your assets and risks. (2) Protect — apply necessary safeguards. (3) Detect — monitor and search for incidents. (4) Respond — act when an incident is detected. (5) Recover — restore services. ShieldKW applies this framework at the Kuwait community level.',ar:'الإطار يعمل على 5 وظائف رئيسية: (1) Identify — اعرف أصولك ومخاطرك. (2) Protect — طبّق الحمايات اللازمة. (3) Detect — راقب وابحث عن الحوادث. (4) Respond — تصرّف عند اكتشاف حادث. (5) Recover — استعد وأعد الخدمات. ShieldKW يطبّق هذا الإطار على مستوى المجتمع الكويتي.'},
   link:'https://www.nist.gov/cyberframework'},
  {icon:'🔐',color:'#ef4444',source:'OWASP',
   title:{en:'OWASP Top 10 Web Vulnerabilities',ar:'Top 10 أخطر ثغرات تطبيقات الويب'},
   body:{en:'OWASP publishes the top 10 most critical web application vulnerabilities — essential for any developer or security professional.',ar:'OWASP يصدر قائمة بأخطر 10 ثغرات في تطبيقات الويب — أساس لأي مطوّر أو مختص أمن.'},
   tags:['Web Security','Vulnerabilities','Developers'],
   detail:{en:'Top 3 current vulnerabilities: (1) Broken Access Control — apps not properly restricting user permissions. (2) Cryptographic Failures — sensitive data exposed due to weak encryption. (3) Injection — SQL/Command Injection attacks. For Kuwaiti developers: check your projects for these vulnerabilities before launch.',ar:'أخطر 3 ثغرات حالياً: (1) Broken Access Control — تطبيقات لا تحدّ صلاحيات المستخدمين بشكل صحيح. (2) Cryptographic Failures — بيانات حساسة مكشوفة بسبب تشفير ضعيف. (3) Injection — هجمات SQL/Command Injection. للمطورين الكويتيين: تحققوا من هذه الثغرات في مشاريعكم قبل الإطلاق.'},
   link:'https://owasp.org/www-project-top-ten/'},
  {icon:'🇰🇼',color:'#009900',source:'CITRA',
   title:{en:'Kuwait Cybercrime Law',ar:'قانون جرائم المعلوماتية الكويتي'},
   body:{en:'Law No. 63 of 2015 on combating IT crimes — the legal framework protecting Kuwaitis.',ar:'قانون رقم 63 لسنة 2015 بشأن مكافحة جرائم تقنية المعلومات — الإطار القانوني لحماية الكويتيين.'},
   tags:['Kuwait Law','Legal','CITRA'],
   detail:{en:'Key articles: Article 3 — Unauthorized access (3 years prison + fine). Article 12 — Electronic fraud (3 years + 3000 KWD fine). Article 14 — Digital identity theft. Article 17 — Distributing harmful content. To report cybercrime: CITRA at 165, or Cybercrime Unit at 1872.',ar:'أبرز المواد: المادة 3 — الدخول غير المصرح به (سجن 3 سنوات + غرامة). المادة 12 — الاحتيال الإلكتروني (سجن 3 سنوات + غرامة 3000 دينار). المادة 14 — سرقة الهوية الرقمية. المادة 17 — نشر المحتوى الضار. للإبلاغ عن جريمة إلكترونية: CITRA على 165، أو وحدة الجرائم المعلوماتية 1872.'},
   link:'https://www.citra.gov.kw'},
  {icon:'💳',color:'#f59e0b',source:'CBK',
   title:{en:'KNET & Kuwait Bank Security',ar:'أمان KNET والبنوك الكويتية'},
   body:{en:'Central Bank of Kuwait guidelines for protection against electronic banking fraud.',ar:'إرشادات البنك المركزي الكويتي للحماية من الاحتيال البنكي الإلكتروني.'},
   tags:['Banking','KNET','CBK'],
   detail:{en:'Golden rules: (1) Never share OTP or PIN — even with bank staff. (2) KNET never sends payment links via SMS. (3) Check HTTPS and official bank domain before entering data. (4) Enable SMS alerts for every transaction. (5) If you lose your card, call immediately to block it. Emergency: NBK 1801801, KFH 1803333, CBK 22164600.',ar:'القواعد الذهبية: (1) لا تشارك OTP أو PIN — حتى مع موظف البنك. (2) KNET لا يرسل روابط دفع عبر SMS. (3) تحقق من HTTPS ونطاق البنك الرسمي قبل إدخال بياناتك. (4) فعّل إشعارات SMS لكل معاملة. (5) إذا فقدت بطاقتك اتصل فوراً لإيقافها. أرقام الطوارئ: NBK 1801801، KFH 1803333، CBK 22164600.'},
   link:'https://www.cbk.gov.kw'},
  {icon:'🦠',color:'#ec4899',source:'VirusTotal',
   title:{en:'Scan Suspicious Links & Files',ar:'فحص الروابط والملفات المشبوهة'},
   body:{en:'VirusTotal scans any link or file with 70+ security engines in seconds — an indispensable tool.',ar:'VirusTotal يفحص أي رابط أو ملف بأكثر من 70 محرك أمني في ثوانٍ — أداة لا غنى عنها.'},
   tags:['Tools','URL Scanner','Malware'],
   detail:{en:'How to use it: (1) Go to virustotal.com. (2) Paste the suspicious link or upload the file. (3) Wait for results — if 3+ engines flag danger, the file is highly suspicious. Checks against Kaspersky, BitDefender, ESET, and more. ShieldKW opens VirusTotal directly from analysis results.',ar:'كيف تستخدمه: (1) اذهب إلى virustotal.com. (2) الصق الرابط المشبوه أو ارفع الملف. (3) انتظر النتيجة — إذا أشار 3 محركات أو أكثر للخطر فالملف مشبوه جداً. يفحص ضد قواعد بيانات Kaspersky وBitDefender وESET وغيرهم.'},
   link:'https://www.virustotal.com'},
  {icon:'📱',color:'#8b5cf6',source:'WhatsApp',
   title:{en:'Protect Your WhatsApp Account',ar:'حماية حسابك على واتساب'},
   body:{en:'WhatsApp is the most-used channel for scams in Kuwait — here is how to protect your account.',ar:'واتساب هو القناة الأكثر استخداماً في الاحتيال بالكويت — إليك كيف تحمي حسابك.'},
   tags:['WhatsApp','Social Media','Security'],
   detail:{en:'Protection steps: (1) Enable two-step verification in settings. (2) Never send the 6-digit activation code to anyone. (3) If your account is stolen: reinstall WhatsApp and enter your number to recover it. (4) Do not click links from unknown numbers. (5) Review privacy settings: who can see your photo, status, and info.',ar:'خطوات الحماية: (1) فعّل التحقق بخطوتين من الإعدادات. (2) لا ترسل رمز التفعيل المكون من 6 أرقام لأحد أبداً. (3) إذا سُرق حسابك: ثبّت واتساب مجدداً على هاتفك وأدخل رقمك لاسترجاعه. (4) لا تضغط روابط من أرقام مجهولة. (5) تحقق من الخصوصية: من يرى صورتك وحالتك ومعلوماتك.'},
   link:'https://www.whatsapp.com/security'},
  {icon:'🔑',color:'#06b6d4',source:'NIST',
   title:{en:'Strong Passwords & 2FA',ar:'كلمات المرور القوية والـ 2FA'},
   body:{en:'95% of breaches start with a weak or stolen password — here is how to protect yourself.',ar:'95% من عمليات الاختراق تبدأ بكلمة مرور ضعيفة أو مسروقة — إليك كيف تحمي نفسك.'},
   tags:['Passwords','2FA','Account Security'],
   detail:{en:'Strong password rules: (1) At least 12 characters — numbers, letters, and symbols. (2) Do not use your name, birthday, or children\'s names. (3) Different password for each account. (4) Use a Password Manager like Bitwarden or 1Password. (5) Enable two-factor authentication (2FA) on all important accounts — email, banking, and social media.',ar:'قواعد كلمة المرور القوية: (1) 12 حرفاً على الأقل — أرقام وحروف ورموز. (2) لا تستخدم اسمك أو تاريخ ميلادك أو اسم أبنائك. (3) كلمة مرور مختلفة لكل حساب. (4) استخدم Password Manager مثل Bitwarden أو 1Password. (5) فعّل المصادقة الثنائية (2FA) على كل حساباتك المهمة — البريد والبنك والسوشيال ميديا.'},
   link:'https://csrc.nist.gov/publications/sp'},
  {icon:'🛡️',color:'#10b981',source:'SANS',
   title:{en:'Common Scam Types in Kuwait',ar:'أنواع الاحتيال الشائعة بالكويت'},
   body:{en:'A comprehensive guide to the most widespread electronic scam types in Kuwait and how each works.',ar:'دليل شامل لأنواع الاحتيال الإلكتروني الأكثر انتشاراً في الكويت وطريقة كل نوع.'},
   tags:['Kuwait','Scam Types','Awareness'],
   detail:{en:'Top 6 types: (1) Relative Scam — impersonating a relative in trouble. (2) Civil ID Scam — fake renewal link. (3) OTP Theft — call "from the bank". (4) Fake Investment — guaranteed false returns. (5) Fake Prize — congratulations you won! (6) Job Scam — fake registration fees. All rely on urgency and creating a sense of danger or reward.',ar:'أشهر 6 أنواع: (1) نصب القريب — انتحال شخصية قريب في ورطة. (2) احتيال البطاقة المدنية — رابط تجديد مزيف. (3) سرقة OTP — مكالمة "من البنك". (4) الاستثمار الوهمي — عوائد مضمونة كاذبة. (5) الجائزة الوهمية — مبروك فزت! (6) نصب الوظيفة — رسوم تسجيل وهمية. كلها تعتمد على الاستعجال وإيهامك بالخطر أو المكسب.'},
   link:'https://www.sans.org'},
  {icon:'🌐',color:'#f97316',source:'PACI',
   title:{en:'Official Kuwait Government Services',ar:'الخدمات الحكومية الكويتية الرسمية'},
   body:{en:'List of official government websites and apps — verify before any transaction.',ar:'قائمة بالمواقع والتطبيقات الحكومية الرسمية — تحقق منها قبل أي معاملة.'},
   tags:['Kuwait Gov','Official Sites','PACI'],
   detail:{en:'Official approved sites only: MOI: moi.gov.kw | PACI (Residency): paci.gov.kw | MOF: mof.gov.kw | MOH: moh.gov.kw | CITRA: citra.gov.kw | Government Portal: e.gov.kw | Sahel App: sahel.com.kw. Any site not ending in .gov.kw or not on this list — do not enter your data.',ar:'المواقع الرسمية المعتمدة فقط: وزارة الداخلية: moi.gov.kw | PACI (الإقامة): paci.gov.kw | وزارة المالية: mof.gov.kw | وزارة الصحة: moh.gov.kw | CITRA: citra.gov.kw | بوابة الحكومة: e.gov.kw | تطبيق ساهل: sahel.com.kw. أي موقع لا ينتهي بـ .gov.kw أو لا يمت لهذه القائمة بصلة — لا تدخل بياناتك فيه.'},
   link:'https://e.gov.kw'},
  {icon:'🔍',color:'#a855f7',source:'Cybersecurity',
   title:{en:'How to Verify a Suspicious Message',ar:'كيف تتحقق من أي رسالة مشبوهة'},
   body:{en:'5 practical steps to follow before replying to or clicking a link in an unknown message.',ar:'5 خطوات عملية تتبعها قبل أي رد أو ضغط على رابط في رسالة مجهولة.'},
   tags:['Practical Tips','Verification','Tips'],
   detail:{en:'Steps: (1) The link — does it end with the official domain? (2) The sender — is the number or email logical? (3) Urgency — does the message pressure you to act immediately? (4) Requested data — does it ask for OTP, password, or card details? (5) Independent verification — call the entity on their official number that you know, not the number in the message.',ar:'الخطوات: (1) الرابط — هل ينتهي بالنطاق الرسمي؟ (2) المُرسل — هل الرقم أو الإيميل منطقي؟ (3) الاستعجال — هل الرسالة تضغط عليك للتصرف فوراً؟ (4) البيانات المطلوبة — هل تطلب OTP أو كلمة مرور أو بطاقتك؟ (5) التحقق المستقل — اتصل بالجهة على رقمها الرسمي الذي تعرفه أنت، لا الرقم الوارد في الرسالة.'},
   link:'https://www.cisa.gov/topics/cybersecurity-best-practices'},
  {icon:'👨‍👩‍👦',color:'#e11d48',source:'Family Safety',
   title:{en:'Protecting Elderly from Scams',ar:'حماية كبار السن من الاحتيال'},
   body:{en:'Elderly people are the most targeted in Kuwait — here is how to protect your parents and elders.',ar:'كبار السن هم الأكثر استهدافاً في الكويت — إليك كيف تحمي والديك وكبار العيلة.'},
   tags:['Family','Elderly','Awareness'],
   detail:{en:'Practical tips: (1) Teach them the golden rule: do not transfer money to anyone without calling me first. (2) Add your number as an emergency contact on their phone. (3) Explain that banks never ask for OTP. (4) If they receive a suspicious message, screenshot it, delete it, and do not respond. (5) Enable transaction alerts on their phone.',ar:'نصائح عملية: (1) علّمهم القاعدة الذهبية: لا تحوّل فلوس لأحد بدون ما تكلمني أولاً. (2) أضف رقمك كجهة اتصال طوارئ في هاتفهم. (3) اشرح لهم أن البنوك لا تطلب OTP أبداً. (4) إذا وصلتهم رسالة مشبوهة، خذ لقطة شاشة واحذفها ولا تتفاعل معها. (5) فعّل تنبيهات المعاملات البنكية على هاتفهم.'},
   link:'https://www.cisa.gov/audiences/individuals-and-families'},
  {icon:'🚨',color:'#dc2626',source:'Emergency',
   title:{en:'What to Do If You Are a Scam Victim',ar:'ماذا تفعل إذا وقعت ضحية احتيال؟'},
   body:{en:'If you fell victim to electronic fraud — immediate steps to take in Kuwait.',ar:'إذا تعرضت للاحتيال الإلكتروني — الخطوات الفورية التي يجب اتخاذها في الكويت.'},
   tags:['Emergency','Response','Victim Help'],
   detail:{en:'Immediate steps: (1) Call your bank immediately to stop transactions — NBK 1801801, KFH 1803333. (2) Change your passwords from another secure device. (3) Report to Cybercrime Unit: 1872. (4) Keep all evidence — screenshots, phone numbers, links. (5) Report to CITRA at 165. (6) If financial crime, file a report at the nearest police station with all evidence.',ar:'الخطوات الفورية: (1) اتصل ببنكك فوراً لإيقاف أي معاملات — NBK 1801801، KFH 1803333. (2) غيّر كلمات مرورك من جهاز آخر آمن. (3) أبلغ وحدة الجرائم المعلوماتية: 1872. (4) احتفظ بكل الأدلة — لقطات شاشة، أرقام هواتف، روابط. (5) أبلغ CITRA على 165. (6) إذا كانت جريمة مالية، قدّم بلاغاً في أقرب مركز شرطة مع كل الأدلة.'},
   link:'https://www.citra.gov.kw'},
  // ── New KB articles
  {icon:'📱',color:'#0ea5e9',source:'Mobile Security',
   title:{en:'Mobile Device Security',ar:'أمان الأجهزة المحمولة'},
   body:{en:'Your phone holds your entire digital life — here is how to keep it secure.',ar:'هاتفك يحتوي على حياتك الرقمية بالكامل — إليك كيف تحميه.'},
   tags:['Mobile','Android','iOS','Security'],
   detail:{en:'Essential mobile security steps: (1) Keep your OS and apps updated — updates patch security vulnerabilities. (2) Only install apps from official stores (App Store / Google Play). (3) Review app permissions — a flashlight app should not need access to your contacts. (4) Enable screen lock with biometrics (fingerprint/face) + PIN. (5) Enable Find My Device (iPhone: Find My, Android: Find My Device) to locate or wipe your phone if lost. (6) Never connect to unknown public WiFi without a trusted VPN. (7) Disable Bluetooth and AirDrop when not in use.',ar:'خطوات أمان الجوال الأساسية: (1) حدّث نظامك وتطبيقاتك دائماً — التحديثات تسدّ ثغرات أمنية. (2) حمّل التطبيقات من المتاجر الرسمية فقط (App Store / Google Play). (3) راجع صلاحيات التطبيقات — تطبيق الكشاف ما يحتاج يوصل لجهات اتصالك. (4) فعّل قفل الشاشة ببصمة الإصبع أو الوجه + رقم سري. (5) فعّل Find My Device لتتبع أو مسح هاتفك إذا ضاع. (6) لا تتصل بشبكات WiFi عامة مجهولة بدون VPN موثوق. (7) أغلق البلوتوث وAirDrop لما ما تستخدمهم.'},
   link:'https://www.cisa.gov/topics/cybersecurity-best-practices'},
  {icon:'🛒',color:'#22c55e',source:'E-Commerce',
   title:{en:'Safe Online Shopping in Kuwait',ar:'التسوق الإلكتروني الآمن في الكويت'},
   body:{en:'Online shopping is booming in Kuwait — protect yourself from fake stores and payment fraud.',ar:'التسوق الإلكتروني منتشر بالكويت — احمِ نفسك من المتاجر الوهمية والاحتيال.'},
   tags:['E-Commerce','Shopping','KNET','Safety'],
   detail:{en:'Safe shopping rules: (1) Only shop on well-known sites (Amazon, Noon, Xcite, Best Al Yousifi, Blink) or verified Instagram sellers. (2) Check for HTTPS and padlock icon before entering card data. (3) Use virtual cards or prepaid cards for online purchases. (4) Never enter card data on a site you reached via an SMS link. (5) Enable transaction alerts so you know instantly when your card is charged. (6) If a deal seems too good to be true, it probably is. (7) For Instagram/social media sellers, check reviews and ask for COD (cash on delivery) option.',ar:'قواعد التسوق الآمن: (1) اشترِ من مواقع معروفة فقط (Amazon, Noon, Xcite, Best Al Yousifi, Blink) أو بائعين موثقين في إنستغرام. (2) تأكد من وجود HTTPS وأيقونة القفل قبل إدخال بيانات البطاقة. (3) استخدم بطاقات افتراضية أو مسبقة الدفع للشراء أونلاين. (4) لا تدخل بيانات البطاقة في موقع وصلته عبر رابط SMS. (5) فعّل تنبيهات المعاملات لتعرف فوراً لما يتم خصم مبلغ. (6) إذا العرض أحسن من الطبيعي، على الأرجح احتيال. (7) لبائعي إنستغرام، تحقق من التقييمات واطلب الدفع عند الاستلام.'},
   link:'https://consumer.ftc.gov/shopping-and-donating/online-shopping'},
  {icon:'📸',color:'#e879f9',source:'Privacy',
   title:{en:'Social Media Privacy Guide',ar:'دليل خصوصية السوشيال ميديا'},
   body:{en:'Your social media profiles reveal more than you think — here is how to protect your privacy.',ar:'حساباتك في السوشيال ميديا تكشف أكثر مما تتوقع — إليك كيف تحمي خصوصيتك.'},
   tags:['Privacy','Instagram','Snapchat','TikTok'],
   detail:{en:'Privacy steps: (1) Set your Instagram and Snapchat to private — scammers mine public profiles for personal data. (2) Never post photos of your civil ID, passport, car plate, or home address. (3) Disable location tags on posts — they reveal where you live and travel. (4) Be cautious with quizzes and games that ask for personal info ("your first pet name" is often a security question). (5) Review third-party apps connected to your accounts and remove unused ones. (6) Use different email addresses for social media and banking. (7) Enable login alerts to know if someone accesses your account.',ar:'خطوات الخصوصية: (1) اجعل حسابات إنستغرام وسنابشات خاصة — المحتالون يجمعون بيانات من الحسابات العامة. (2) لا تنشر صور البطاقة المدنية أو الجواز أو لوحة السيارة أو عنوان البيت أبداً. (3) ألغِ تحديد الموقع في المنشورات — يكشف وين تسكن وتسافر. (4) احذر من الألعاب والاختبارات التي تطلب معلومات شخصية ("اسم حيوانك الأليف الأول" غالباً سؤال أمان). (5) راجع التطبيقات المرتبطة بحساباتك واحذف اللي ما تستخدمها. (6) استخدم إيميلات مختلفة للسوشيال ميديا وللبنك. (7) فعّل تنبيهات تسجيل الدخول لتعرف إذا أحد دخل حسابك.'},
   link:'https://www.cisa.gov/audiences/individuals-and-families'},
  {icon:'🏠',color:'#f97316',source:'Network Security',
   title:{en:'Secure Your Home WiFi',ar:'تأمين شبكة WiFi المنزلية'},
   body:{en:'Your home WiFi is the gateway to all your devices — secure it properly.',ar:'شبكة WiFi البيت هي البوابة لكل أجهزتك — أمّنها بشكل صحيح.'},
   tags:['WiFi','Router','Home Network'],
   detail:{en:'Home WiFi security: (1) Change the default router admin password immediately — many Kuwaiti ISP routers use "admin/admin". (2) Use WPA3 or WPA2 encryption — never leave WiFi open. (3) Change your WiFi name (SSID) to something that does not identify you or your apartment. (4) Create a guest network for visitors — keeps your main network separate. (5) Update your router firmware regularly. (6) Disable WPS (WiFi Protected Setup) — it has known vulnerabilities. (7) Check connected devices regularly for unknown connections.',ar:'أمان WiFi المنزلي: (1) غيّر كلمة مرور الراوتر الافتراضية فوراً — كثير من راوترات مزودي الإنترنت بالكويت تستخدم "admin/admin". (2) استخدم تشفير WPA3 أو WPA2 — لا تترك الشبكة مفتوحة أبداً. (3) غيّر اسم الشبكة (SSID) لاسم ما يدلّ عليك أو على شقتك. (4) أنشئ شبكة ضيوف للزوار — تفصل أجهزتك عن أجهزتهم. (5) حدّث برنامج الراوتر بشكل دوري. (6) أغلق WPS — فيه ثغرات معروفة. (7) تحقق من الأجهزة المتصلة بشبكتك بشكل دوري.'},
   link:'https://www.cisa.gov/topics/cybersecurity-best-practices'},
  {icon:'💼',color:'#6366f1',source:'Work Security',
   title:{en:'Cybersecurity at Work',ar:'الأمن السيبراني في بيئة العمل'},
   body:{en:'Workplace cybersecurity habits that protect you and your company.',ar:'عادات الأمن السيبراني التي تحمي موظفيك وشركتك.'},
   tags:['Workplace','Enterprise','Email Security'],
   detail:{en:'Workplace security essentials: (1) Never use personal email for work — and never use work email for personal accounts. (2) Lock your computer when leaving your desk (Win+L or Cmd+L). (3) Do not plug in unknown USB drives — they may contain malware. (4) Verify wire transfer requests via phone — Business Email Compromise (BEC) costs companies millions. (5) Report suspicious emails to IT immediately — do not just delete them. (6) Use company VPN when working remotely. (7) Do not share work credentials with colleagues — even temporarily.',ar:'أساسيات أمان بيئة العمل: (1) لا تستخدم إيميلك الشخصي للعمل — ولا إيميل العمل لحساباتك الشخصية. (2) اقفل الكمبيوتر لما تقوم من مكتبك (Win+L أو Cmd+L). (3) لا تشبك فلاشات USB مجهولة — قد تحتوي على malware. (4) تحقق من طلبات التحويلات المالية عبر الهاتف — احتيال البريد الإلكتروني التجاري (BEC) يكلف الشركات ملايين. (5) أبلغ IT فوراً عن الإيميلات المشبوهة — لا تحذفها فقط. (6) استخدم VPN الشركة عند العمل عن بُعد. (7) لا تشارك بيانات الدخول مع الزملاء — حتى مؤقتاً.'},
   link:'https://www.sans.org/security-awareness-training'},
  {icon:'🧒',color:'#f43f5e',source:'Child Safety',
   title:{en:'Protecting Children Online',ar:'حماية الأطفال على الإنترنت'},
   body:{en:'Children in Kuwait are increasingly online — here is how to keep them safe from threats.',ar:'أطفال الكويت يستخدمون الإنترنت أكثر من أي وقت — إليك كيف تحميهم.'},
   tags:['Children','Parental Controls','Online Safety'],
   detail:{en:'Child safety steps: (1) Set up parental controls on all devices — iOS Screen Time, Google Family Link, or router-level filtering. (2) Teach children never to share personal info (name, school, location) with strangers online. (3) Keep devices in shared family areas, not bedrooms. (4) Regularly check their app list and online activity — not to spy, but to protect. (5) Explain that not everyone online is who they say they are. (6) Set age-appropriate content filters on YouTube, TikTok, and gaming platforms. (7) Create an open environment where children feel safe telling you if something uncomfortable happens online.',ar:'خطوات حماية الأطفال: (1) فعّل الرقابة الأبوية على كل الأجهزة — Screen Time للآيفون، Google Family Link للأندرويد، أو فلترة من الراوتر. (2) علّم أطفالك أن لا يشاركوا معلوماتهم الشخصية (الاسم، المدرسة، الموقع) مع غرباء أونلاين. (3) خلّي الأجهزة في الأماكن المشتركة، مو في غرف النوم. (4) راجع تطبيقاتهم ونشاطهم بشكل دوري — مو للتجسس بل للحماية. (5) اشرح لهم أن مو كل شخص أونلاين هو اللي يقول عن نفسه. (6) فعّل فلاتر المحتوى المناسبة للعمر في يوتيوب وتيك توك والألعاب. (7) اخلق بيئة مفتوحة يحسّون فيها بالأمان ليقولون لك إذا صار شيء مزعج أونلاين.'},
   link:'https://www.cisa.gov/audiences/individuals-and-families'}
];

var kbActiveIdx = 0;

function openKB(i){
  window._kbTrigger=document.activeElement;
  kbActiveIdx = i;
  renderKBModal(i);
  document.getElementById('kbModalBg').classList.add('open');
  var closeBtn=document.querySelector('.kb-modal-close');
  if(closeBtn) setTimeout(function(){closeBtn.focus();},80);
}
function closeKB(){
  document.getElementById('kbModalBg').classList.remove('open');
  if(window._kbTrigger){window._kbTrigger.focus();window._kbTrigger=null;}
}
function kbNav(dir){
  kbActiveIdx = Math.max(0, Math.min(KB_ITEMS.length-1, kbActiveIdx+dir));
  renderKBModal(kbActiveIdx);
}
function renderKBModal(i){
  var item = KB_ITEMS[i];
  // head
  var icon = document.getElementById('kbMIcon');
  icon.textContent = item.icon;
  icon.style.background = item.color+'22';
  icon.style.border = '1px solid '+item.color+'40';
  document.getElementById('kbMSrc').textContent = item.source;
  document.getElementById('kbMTitle').textContent = rt(item.title);
  // body
  document.getElementById('kbMSummary').textContent = rt(item.body);
  // detail — split on numbered points if present
  var detailEl = document.getElementById('kbMDetail');
  var detailText = rt(item.detail);
  var points = detailText.split(/(?=\(\d+\)|\d+\.\s)/);
  if(points.length > 1){
    var ul = '<ul class="kb-modal-detail-points">';
    points.forEach(function(pt){
      pt = pt.trim();
      if(!pt) return;
      ul += '<li><span class="kb-point-bullet" style="background:'+item.color+'"></span><span>'+pt+'</span></li>';
    });
    ul += '</ul>';
    detailEl.innerHTML = ul;
  } else {
    detailEl.textContent = detailText;
  }
  // tags
  document.getElementById('kbMTags').innerHTML =
    item.tags.map(function(t){ return '<span class="kb-modal-tag">'+t+'</span>'; }).join('');
  // link
  document.getElementById('kbVisit').href = item.link;
  // nav buttons
  document.getElementById('kbPrev').disabled = i === 0;
  document.getElementById('kbNext').disabled = i === KB_ITEMS.length-1;
  // counter badge on source
  document.getElementById('kbMSrc').textContent = item.source + '  ·  ' + (i+1) + ' / ' + KB_ITEMS.length;
}

function buildKB(){
  var grid = document.getElementById('kbGrid');
  // Remove old cards but keep the search bar
  var oldCards = grid.querySelectorAll('.kb-card, .kb-no-results');
  oldCards.forEach(function(c){ c.remove(); });
  var badge = document.getElementById('kbCount');
  if(badge) badge.textContent = KB_ITEMS.length;
  KB_ITEMS.forEach(function(item, i){
    var card = document.createElement('div');
    card.className = 'kb-card';
    card.innerHTML =
      '<div class="kb-card-top">'+
        '<div class="kb-icon" style="background:'+item.color+'20;border:1px solid '+item.color+'35">'+item.icon+'</div>'+
        '<div style="flex:1;min-width:0;">'+
          '<div class="kb-source">'+item.source+'</div>'+
          '<div class="kb-title">'+rt(item.title)+'</div>'+
        '</div>'+
        '<span style="font-size:0.65rem;color:var(--muted2);flex-shrink:0;font-family:monospace;">'+
          (i+1)+'/'+KB_ITEMS.length+
        '</span>'+
      '</div>'+
      '<div class="kb-body-wrap">'+
        '<div class="kb-summary">'+rt(item.body)+'</div>'+
        '<div class="kb-tags">'+
          item.tags.map(function(t){ return '<span class="kb-tag">'+t+'</span>'; }).join('')+
        '</div>'+
      '</div>'+
      '<div class="kb-footer">'+
        '<button class="kb-read-btn">'+t('kb-read')+'</button>'+
        '<a href="'+item.link+'" target="_blank" class="kb-ext-link" onclick="event.stopPropagation()">'+item.source+' ↗</a>'+
      '</div>';
    // click on card or read btn → open modal
    var btn = card.querySelector('.kb-read-btn');
    btn.addEventListener('click', function(e){ e.stopPropagation(); openKB(i); });
    card.addEventListener('click', function(){ openKB(i); });
    // hover accent border
    card.addEventListener('mouseenter', function(){ card.style.borderColor = item.color+'80'; });
    card.addEventListener('mouseleave', function(){ card.style.borderColor = ''; });
    grid.appendChild(card);
  });
}

// Close KB modal on bg click
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('kbModalBg').addEventListener('click', function(e){
    if(e.target === this) closeKB();
  });
});
// Keyboard nav for KB modal
document.addEventListener('keydown', function(e){
  // Report modal — Escape to close + focus trap
  var reportModal = document.getElementById('modalBg');
  if(reportModal.classList.contains('open')){
    if(e.key === 'Escape'){closeModal();return;}
    if(e.key === 'Tab'){
      var focusable = reportModal.querySelectorAll('input,textarea,select,button,[tabindex]:not([tabindex="-1"])');
      if(focusable.length){
        var first=focusable[0], last=focusable[focusable.length-1];
        if(e.shiftKey && document.activeElement===first){e.preventDefault();last.focus();}
        else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus();}
      }
    }
    return;
  }
  // KB modal — Escape, arrows, focus trap
  if(!document.getElementById('kbModalBg').classList.contains('open')) return;
  if(e.key === 'Escape') closeKB();
  if(e.key === 'ArrowRight') kbNav(1);
  if(e.key === 'ArrowLeft') kbNav(-1);
  if(e.key === 'Tab'){
    var kbModal = document.getElementById('kbModalBg');
    var kbFocusable = kbModal.querySelectorAll('button,a,[tabindex]:not([tabindex="-1"])');
    if(kbFocusable.length){
      var kbFirst=kbFocusable[0], kbLast=kbFocusable[kbFocusable.length-1];
      if(e.shiftKey && document.activeElement===kbFirst){e.preventDefault();kbLast.focus();}
      else if(!e.shiftKey && document.activeElement===kbLast){e.preventDefault();kbFirst.focus();}
    }
  }
});

// ══════════════════════════════════════════
// KB SEARCH / FILTER
// ══════════════════════════════════════════
function filterKB(query){
  var q = query.toLowerCase().trim();
  var grid = document.getElementById('kbGrid');
  var cards = grid.querySelectorAll('.kb-card');
  var noRes = grid.querySelector('.kb-no-results');
  if(noRes) noRes.remove();
  var anyVisible = false;
  cards.forEach(function(card, i){
    var item = KB_ITEMS[i];
    if(!item) return;
    var searchText = (rt(item.title)+' '+rt(item.body)+' '+item.tags.join(' ')+' '+item.source+' '+rt(item.detail)).toLowerCase();
    if(!q || searchText.indexOf(q) >= 0){
      card.style.display = '';
      anyVisible = true;
    } else {
      card.style.display = 'none';
    }
  });
  if(!anyVisible && q){
    var noDiv = document.createElement('div');
    noDiv.className = 'kb-no-results';
    noDiv.textContent = t('kb-no-results');
    grid.appendChild(noDiv);
  }
}

// ══════════════════════════════════════════
// ANIMATED COUNTER
// ══════════════════════════════════════════
function animateCounter(el, target, duration){
  var start = 0;
  var startTime = null;
  duration = duration || 800;
  function step(ts){
    if(!startTime) startTime = ts;
    var progress = Math.min((ts - startTime) / duration, 1);
    var ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    var current = Math.round(ease * target);
    el.textContent = current;
    if(progress < 1) requestAnimationFrame(step);
    else {
      el.textContent = target;
      el.classList.add('count-animated');
      setTimeout(function(){ el.classList.remove('count-animated'); }, 300);
    }
  }
  requestAnimationFrame(step);
}

function animateAllCounters(){
  // Sidebar stats
  var sTotal = document.getElementById('sTotal');
  var sCrit = document.getElementById('sCrit');
  var sWeek = document.getElementById('sWeek');
  var sTypes = document.getElementById('sTypes');
  animateCounter(sTotal, reports.length, 600);
  animateCounter(sWeek, reports.length, 700);
  animateCounter(sCrit, reports.filter(function(r){return r.sev==='Critical';}).length, 800);
  var tt={}; reports.forEach(function(r){var tp=typeof r.type==='object'?r.type.en:r.type;tt[tp]=1;});
  animateCounter(sTypes, Object.keys(tt).length, 500);
  // Stats page KPIs
  var stTotal = document.getElementById('st-total');
  var stCrit = document.getElementById('st-critical');
  var stPhish = document.getElementById('st-phishing');
  var stTypes = document.getElementById('st-types');
  if(stTotal && stTotal.textContent !== '—'){
    animateCounter(stTotal, parseInt(stTotal.textContent)||0, 600);
    animateCounter(stCrit, parseInt(stCrit.textContent)||0, 700);
    animateCounter(stPhish, parseInt(stPhish.textContent)||0, 800);
    animateCounter(stTypes, parseInt(stTypes.textContent)||0, 500);
  }
}

// ══════════════════════════════════════════
// EXPORT REPORTS
// ══════════════════════════════════════════
function exportReports(){
  var vis = activeFilter==='all' ? reports : reports.filter(function(r){ return r.sev===activeFilter; });
  var rows = ['"#","Severity","Title","Type","Area","Description","Source"'];
  vis.forEach(function(r, i){
    var source = r.userSubmitted ? 'Community' : 'Demo';
    var col = [
      i+1,
      csvSafe(r.sev),
      csvSafe(rt(r.title)),
      csvSafe(rt(r.type)),
      csvSafe(r.area),
      csvSafe(rt(r.desc)),
      csvSafe(source)
    ];
    rows.push(col.join(','));
  });
  var csv = rows.join('\n');
  var blob = new Blob([csv], {type:'text/csv'});
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'ShieldKW_Reports_' + new Date().toISOString().slice(0,10) + '.csv';
  a.click();
  showToast(t('export-copied'));
}

// ══════════════════════════════════════════
// TOAST
// ══════════════════════════════════════════
function showToast(msg,err){
  var t=document.getElementById('toast');
  t.textContent=msg;t.style.borderColor=err?'#ff3c5a':'#00ff88';t.style.color=err?'#ff3c5a':'#00ff88';
  t.classList.add('show');setTimeout(function(){t.classList.remove('show');},3000);
}

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
document.getElementById('modalBg').addEventListener('click',function(e){if(e.target===this)closeModal();});
window.addEventListener('resize',function(){
  if(leafletMap && document.getElementById('page-map').classList.contains('active')) leafletMap.invalidateSize();
});

function init(){
  initMap();
  renderList();
  renderSidebarStats();
  renderStats(true);
  loadScenario();
  buildKB();
  applyLang();
  // Animate counters on first load
  setTimeout(animateAllCounters, 200);
}

if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}

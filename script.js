// ══════════════════════════════════════════
// LANGUAGE SYSTEM
// ══════════════════════════════════════════
var LANG = 'en';

var I18N = {
  // Header
  'live-feed': {en:'LIVE THREAT FEED', ar:'بث التهديدات المباشر'},
  // Tabs
  'tab-map':   {en:'Community Threat Map', ar:'خريطة التهديدات'},
  'tab-ai':    {en:'AI Scam Validator', ar:'كاشف النصب'},
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
  'ai-title':      {en:'🤖 AI Scam Validator', ar:'🤖 كاشف النصب بالذكاء الاصطناعي'},
  'ai-subtitle':   {en:'Paste any suspicious message, SMS, email, or link below. Our AI will analyze it for phishing signals, scam patterns, and threats specific to Kuwait.', ar:'الصق أي رسالة مشبوهة أو رابط في الأسفل. الذكاء الاصطناعي سيحللها ويكشف الأنماط الاحتيالية والتهديدات الخاصة بالكويت.'},
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
  'about-f2-title': {en:'AI Scam Validator', ar:'كاشف الاحتيال بالذكاء الاصطناعي'},
  'about-f2-desc':  {en:'Paste any suspicious message and our AI engine analyzes it for 40+ Kuwait-specific scam patterns — from fake KNET alerts to relative impersonation scams.', ar:'الصق أي رسالة مشبوهة ومحرك الذكاء الاصطناعي يحللها لأكثر من 40 نمط احتيال كويتي — من تنبيهات KNET المزيفة إلى نصب القريب.'},
  'about-f3-title': {en:'Phishing Simulator', ar:'محاكي التصيد'},
  'about-f3-desc':  {en:'Interactive quiz with 15 real-world Kuwaiti scam scenarios. Test your ability to identify phishing, social engineering, and fraud attempts.', ar:'اختبار تفاعلي مع 15 سيناريو احتيال كويتي حقيقي. اختبر قدرتك على اكتشاف التصيد والهندسة الاجتماعية ومحاولات الاحتيال.'},
  'about-f4-title': {en:'Knowledge Base', ar:'قاعدة المعرفة'},
  'about-f4-desc':  {en:'18 comprehensive cybersecurity articles covering NIST frameworks, Kuwait cybercrime law, bank security, social media privacy, and more.', ar:'18 مقالة شاملة في الأمن السيبراني تغطي أطر NIST وقانون الجرائم المعلوماتية الكويتي وأمان البنوك وخصوصية السوشيال ميديا والمزيد.'},
  'about-f5-title': {en:'Live Statistics', ar:'إحصاءات حية'},
  'about-f5-desc':  {en:'Real-time dashboard with threat breakdowns by type, severity, area, and timeline — auto-refreshed every 60 seconds.', ar:'لوحة تحكم حية مع تفاصيل التهديدات حسب النوع والخطورة والمنطقة والجدول الزمني — تحديث تلقائي كل 60 ثانية.'},
  'about-f6-title': {en:'Full Bilingual Support', ar:'دعم ثنائي اللغة كامل'},
  'about-f6-desc':  {en:'Complete Arabic & English support with RTL layout switching, bilingual content across all pages, and Kuwaiti dialect detection in the AI engine.', ar:'دعم كامل للعربية والإنجليزية مع تبديل اتجاه RTL ومحتوى ثنائي اللغة في جميع الصفحات وكشف اللهجة الكويتية في محرك الذكاء الاصطناعي.'},
  'about-tech-title':{en:'Technology Stack', ar:'التقنيات المستخدمة'},
  'about-tech-desc': {en:'Built with modern web technologies for a fast, responsive, and secure experience.', ar:'مبنية بتقنيات ويب حديثة لتجربة سريعة ومتجاوبة وآمنة.'},
  'about-rights':    {en:'All rights reserved.', ar:'جميع الحقوق محفوظة.'},
  'about-purpose':   {en:'Built as a cybersecurity awareness initiative for the people of Kuwait.', ar:'مبنية كمبادرة توعية بالأمن السيبراني لأبناء الكويت.'},
  'export-btn':      {en:'Export', ar:'تصدير'},
  'export-copied':   {en:'✓ Reports copied to clipboard!', ar:'✓ تم نسخ البلاغات!'},
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
  "Salmiya":{lat:29.3347,lng:48.0758},
  "Rumaithiya":{lat:29.3202,lng:48.0767},
  "Mishref":{lat:29.3009,lng:48.0644},
  "Bayan":{lat:29.3167,lng:48.0563},
  "Bidaa":{lat:29.3364,lng:48.0463},
  "Surra":{lat:29.3333,lng:47.9958},
  "Qortuba":{lat:29.3310,lng:47.9833},
  "Salwa":{lat:29.2957,lng:48.0760},
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
  "Mangaf":{lat:29.0953,lng:48.1317},
  "Mahboula":{lat:29.1459,lng:48.1304},
  "Fintas":{lat:29.1714,lng:48.1278},
  "Fahaheel":{lat:29.0817,lng:48.1415},
  "Abu Halifa":{lat:29.1244,lng:48.1278},
  "Rumaila":{lat:29.1132,lng:48.0774},
  "Sabahiya":{lat:29.1350,lng:48.0870},
  "Riqqa":{lat:29.1500,lng:48.0950},
  "Hadiya":{lat:29.1600,lng:48.0800},
  "Wafra":{lat:28.6360,lng:47.9320},
  "Egaila":{lat:29.1560,lng:48.1200},
  "Jaber Al-Ali":{lat:29.1710,lng:48.0850},
  "Ali Sabah Al-Salem":{lat:29.1820,lng:48.0550},
  "Fahad Al-Ahmad":{lat:29.1300,lng:48.1050},
  "Mina Abdullah":{lat:29.0400,lng:48.1710},
  "Khairan":{lat:28.9700,lng:48.3500},
  "Shuaiba":{lat:29.0300,lng:48.1600},
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
  "Abdali":{lat:29.9600,lng:47.6700},
  // ── Mubarak Al-Kabeer Governorate
  "Sabah Al-Salem":{lat:29.2652,lng:48.0569},
  "Qurain":{lat:29.2600,lng:48.0770},
  "Adan":{lat:29.2560,lng:48.0880},
  "Messila":{lat:29.2730,lng:48.0960},
  "Abu Fatira":{lat:29.2100,lng:48.1200},
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
    center: [29.32, 47.98],
    zoom: 11,
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

function renderMarkers(){
  if(!markerLayer) return;
  markerLayer.clearLayers();
  var vis = activeFilter==='all' ? reports : reports.filter(function(r){ return r.sev===activeFilter; });
  vis.forEach(function(r){
    var city = CITIES[r.area]; if(!city) return;
    var col = SC[r.sev] || '#00d4ff';
    var jLat = (((r.id*137.5)%1)-0.5)*0.008;
    var jLng = (((r.id*97.3)%1)-0.5)*0.008;
    // For critical threats, add a pulsing div marker behind
    if(r.sev==='Critical'){
      var pulseIcon = L.divIcon({
        className:'',
        html:'<div class="map-pulse" style="background:'+col+';"></div>',
        iconSize:[28,28],
        iconAnchor:[14,14]
      });
      L.marker([city.lat+jLat, city.lng+jLng], {icon:pulseIcon, interactive:false}).addTo(markerLayer);
    }
    var marker = L.circleMarker([city.lat+jLat, city.lng+jLng], {
      radius: r.sev==='Critical' ? 9 : 7,
      fillColor: col,
      color: col,
      weight: 2,
      opacity: 0.9,
      fillOpacity: r.sev==='Critical' ? 0.75 : 0.55
    }).addTo(markerLayer);
    marker.bindPopup(
      '<div style="font-family:\'Segoe UI\',sans-serif;min-width:180px;">'+
      '<div style="font-weight:700;font-size:13px;margin-bottom:4px;color:#fff;">'+rt(r.title)+'</div>'+
      '<div style="font-size:12px;color:#aaa;margin-bottom:6px;line-height:1.5;">'+rt(r.desc)+'</div>'+
      '<div style="display:flex;gap:5px;flex-wrap:wrap;">'+
      '<span style="font-size:10px;padding:2px 6px;border-radius:3px;background:'+col+'22;color:'+col+';border:1px solid '+col+'55;">'+r.sev+'</span>'+
      '<span style="font-size:10px;padding:2px 6px;border-radius:3px;background:rgba(0,212,255,0.1);color:#00d4ff;border:1px solid rgba(0,212,255,0.3);">'+rt(r.type)+'</span>'+
      '<span style="font-size:10px;padding:2px 6px;border-radius:3px;background:rgba(255,255,255,0.03);color:#6b7280;border:1px solid rgba(255,255,255,0.06);">📍 '+r.area+'</span>'+
      '</div></div>',
      {className:'dark-popup', maxWidth:280}
    );
    marker.on('click', function(){ highlightCard(r.id); });
  });
}
function rt(v){ return typeof v==='object' ? (v[LANG]||v.en||v.ar||v) : v; }
function renderList(){
  var vis=activeFilter==='all'?reports:reports.filter(function(r){return r.sev===activeFilter;});
  var h='';
  vis.forEach(function(r){
    h+='<div class="rcard '+(SK[r.sev]||'')+'" id="card-'+r.id+'" onclick="highlightCard('+r.id+')">'+
      '<div class="rcard-top"><div class="rcard-title">'+rt(r.title)+'</div>'+
      '<span class="badge '+(BK[r.sev]||'bm')+'">'+r.sev+'</span></div>'+
      '<div class="rcard-meta"><span>📍 '+r.area+'</span><span class="rcard-type">'+rt(r.type)+'</span></div></div>';
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
    areaHTML +=
      '<div class="area-cell" style="background:rgba(0,212,255,'+( 0.03 + intensity*0.08 ).toFixed(3)+');">'+
        '<div class="area-name" style="font-size:0.7rem;color:var(--text);">'+a+'</div>'+
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
  document.getElementById('st-tl-title').textContent =
    '// timeline — '+fmtDate(d0)+' → '+fmtDate(now);
  document.getElementById('st-timeline').innerHTML = tlHTML;

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
  }, 60);
}

// ── Sidebar stats (map tab counters)
function renderSidebarStats(){
  document.getElementById('sTotal').textContent = reports.length;
  document.getElementById('sWeek').textContent  = reports.length;
  document.getElementById('sCrit').textContent  = reports.filter(function(r){return r.sev==='Critical';}).length;
  var tt={};reports.forEach(function(r){var tp=typeof r.type==='object'?r.type.en:r.type;tt[tp]=1;});
  document.getElementById('sTypes').textContent = Object.keys(tt).length;
}

// Auto-refresh stats every 60 seconds
setInterval(function(){ renderStats(false); renderSidebarStats(); }, 60000);
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
function openModal(){document.getElementById('modalBg').classList.add('open');document.getElementById('okMsg').style.display='none';}
function closeModal(){document.getElementById('modalBg').classList.remove('open');document.getElementById('fTitle').value='';document.getElementById('fDesc').value='';document.getElementById('fArea').value='';}
function submitReport(){
  var t=document.getElementById('fTitle').value.trim();
  var a=document.getElementById('fArea').value;
  if(!t||!a){showToast('Title and area are required!',true);return;}
  var typeVal=document.getElementById('fType').value;
  reports.unshift({id:Date.now(),title:{en:t,ar:t},desc:{en:document.getElementById('fDesc').value.trim()||'Reported by community member.',ar:document.getElementById('fDesc').value.trim()||'بلاغ من أحد أفراد المجتمع.'},type:{en:typeVal,ar:typeVal},sev:document.getElementById('fSev').value,area:a});
  renderSidebarStats();renderStats(true);renderList();renderMarkers();
  document.getElementById('okMsg').style.display='block';
  showToast('✓ Report submitted!');
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
  if(!msg){showToast('الرجاء إدخال رسالة للتحليل.',true);return;}
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
    signals.push({icon:'🔴',cat:'رابط',text:'امتداد نطاق مشبوه جداً (.info/.xyz/.tk وغيرها) — المواقع الرسمية الكويتية تنتهي دائماً بـ .gov.kw'});
  }
  // A2: رابط يحاكي موقع حكومي كويتي لكنه مزيف
  if(/https?:\/\/[^\s]*(moi|paci|mof|moh|moc|mofa|mosal|customs|maktabi|sahel|mcs|citra|nbk|knet|cbk|boubyan|burgan|ahli|gulf)[^\.]*\.(info|net|org|xyz|site|biz|online|co|io|app)/.test(m)){
    score+=45;
    signals.push({icon:'🔴',cat:'رابط',text:'الموقع يقلّد جهة كويتية رسمية لكن نطاقه مزيف — تحقق أن الرابط هو gov.kw الحقيقي'});
  }
  // A3: رابط خارجي غير رسمي
  if(/https?:\/\//.test(m) && !/\.gov\.kw|moi\.gov\.kw|cbk\.gov\.kw|paci\.gov\.kw|mof\.gov\.kw|moh\.gov\.kw|citra\.gov\.kw|nbk\.com|nbkonline\.com|boubyanbank\.com|kfh\.com|gbkuwait\.com|burgan\.com|abk-kuwait\.com|ahlibank\.com\.kw|knet\.com\.kw|ooredoo\.com\.kw|zain\.com\.kw|stc\.com\.kw/.test(m)){
    score+=18;
    signals.push({icon:'🟠',cat:'رابط',text:'رابط من جهة غير معروفة — لا تضغط على روابط من أرقام مجهولة أو رسائل غير متوقعة'});
  }
  // A4: رابط مختصر مشبوه
  if(/https?:\/\/(bit\.ly|tinyurl|t\.co|goo\.gl|ow\.ly|rb\.gy|cutt\.ly|shorturl|is\.gd|buff\.ly|tiny\.cc|bl\.ink|clck\.ru)\//.test(m)){
    score+=25;
    signals.push({icon:'🟠',cat:'رابط',text:'رابط مختصر — المحتالون يستخدمون روابط مختصرة لإخفاء العنوان الحقيقي المشبوه'});
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
    signals.push({icon:'🟠',cat:'ضغط',text:'لغة استعجال — المحتالون يخلقون ضغطاً وهمياً لمنعك من التفكير. خذ وقتك دائماً وتحقق'});
  }
  // B2: تهديد بعواقب
  var threat = /سيتم إلغاء|سيتم حذف|سيتم تجميد|ستخسر|ستفقد|سنضطر لإلغاء|حسابك سيُغلق|ستُحرم|محروم من|ستواجه عقوبة|ستُحال|يحبسونك|نوقف خدماتك|نلغي اشتراكك|يوقفون رقمك/;
  var threatEn = /account will be closed|will lose access|will be penalized|legal action|will be reported|will be arrested|face consequences/;
  if(threat.test(m) || threatEn.test(m)){
    score+=20;
    signals.push({icon:'🟠',cat:'تهديد',text:'تهديد بعواقب سلبية — أسلوب شائع لإجبارك على التصرف بسرعة دون تفكير'});
  }
  // B3: إيهام بالمكافأة / الترغيب
  var lure = /ربحت|فزت|اخترناك|تهانينا|مبروك|أنت الفائز|تم اختيارك|مكافأة خاصة|عرض حصري|فرصة ذهبية|مجاناً|مجانية|هدية|gift|free|exclusive offer|you have been selected/;
  if(lure.test(m)){
    score+=15;
    signals.push({icon:'🟡',cat:'إغراء',text:'إغراء بمكافأة أو هدية مجانية — تحقق قبل الاستجابة لأي عرض غير متوقع'});
  }

  // ════════════════════════════════════════════════════════
  // BLOCK C — انتحال هويات كويتية رسمية
  // ════════════════════════════════════════════════════════

  // C1: وزارة الداخلية / البطاقة المدنية
  var moiScam = /بطاقة مدنية|بطاقتك المدنية|civil id|الرقم المدني|تجديد البطاقة|بطاقة.*انتهت|انتهت.*بطاقة|صلاحية.*بطاقة|بطاقة.*صلاحية|انتهت صلاحيتها|وزارة الداخلية.*رابط|moi.*renew|renew.*civil/;
  if(moiScam.test(m)){
    score+=30; detectedTypes.push('civil_id');
    signals.push({icon:'🔴',cat:'هوية رسمية',text:'احتيال البطاقة المدنية — وزارة الداخلية لا ترسل روابط تجديد عبر SMS أو واتساب أبداً. تجديد البطاقة يتم عبر paci.gov.kw أو المراكز المعتمدة'});
  }
  // C2: PACI / الإقامة / جوازات
  var paciScam = /إقامة.*انتهت|انتهت.*إقامة|تجديد إقامة|إقامتك منتهية|تأشيرة.*انتهت|تأشيرة.*تجديد|جواز.*انتهى|هجرة.*رابط|paci.*link|iqama.*renew/;
  if(paciScam.test(m) && /(رابط|link|ادفع|رسوم|http|موقع)/.test(m)){
    score+=30; detectedTypes.push('iqama');
    signals.push({icon:'🔴',cat:'هوية رسمية',text:'احتيال تجديد الإقامة — الهجرة والجوازات لا ترسل روابط دفع عبر الرسائل. تجديد الإقامة عبر paci.gov.kw الرسمي فقط'});
  }
  // C3: KNET
  var knetScam = /(knet|كي نت|كيه نت|كي-نت|شبكة الكويت)/.test(m) && /(suspend|block|verify|تعليق|موقوف|تحقق|علّق|مجمّد|frozen|suspended|verify your|تحقق من|أكّد|confirm)/.test(m);
  if(knetScam){ score+=35; detectedTypes.push('knet');
    signals.push({icon:'🔴',cat:'بنك/دفع',text:'تنبيه KNET مزيف — KNET لا يرسل روابط تحقق عبر SMS. إذا واجهت مشكلة اتصل على 1800 الخط الرسمي'});
  }
  // C4: بنك الكويت الوطني NBK
  var nbkScam = /(nbk|بنك الكويت الوطني|البنك الوطني|nbkonline)/.test(m) && /(otp|رمز|كلمة مرور|password|pin|تحقق|verify|تسجيل دخول|اضغط|رابط)/.test(m);
  if(nbkScam){ score+=35; detectedTypes.push('nbk');
    signals.push({icon:'🔴',cat:'بنك',text:'انتحال هوية NBK — بنك الكويت الوطني لن يطلب OTP أو كلمة مرور عبر رسالة أو مكالمة. اتصل على 1801801'});
  }
  // C5: بيت التمويل الكويتي KFH
  var kfhScam = /(kfh|بيت التمويل|بيتك|kfhonline)/.test(m) && /(otp|رمز|كلمة مرور|password|تحقق|verify|رابط|link|تجميد|frozen)/.test(m);
  if(kfhScam){ score+=35; detectedTypes.push('kfh');
    signals.push({icon:'🔴',cat:'بنك',text:'انتحال هوية KFH — بيت التمويل لا يطلب رمز OTP عبر الرسائل. اتصل على 1803333'});
  }
  // C6: بنوك كويتية أخرى
  var otherBank = /(burgan|بنك برقان|boubyan|بنك بوبيان|gulf bank|بنك الخليج|الأهلي.*بنك|بنك الأهلي|ahli bank|cbk|البنك المركزي|warba|وربة|masraf|مصرف)/.test(m) && /(suspend|block|frozen|تعليق|تجميد|موقوف|رابط|verify|otp|رمز)/.test(m);
  if(otherBank){ score+=30; detectedTypes.push('bank');
    signals.push({icon:'🔴',cat:'بنك',text:'انتحال هوية بنك كويتي — أي بنك حقيقي لن يطلب بياناتك عبر رابط SMS. اتصل على الرقم الرسمي خلف بطاقتك'});
  }
  // C7: اتصالات كويتية (زين / Ooredoo / STC)
  var telecomScam = /(زين|zain|اوريدو|ooredoo|stc|فيفا|viva)/.test(m) && /(جائزة|فزت|ربحت|اشتراك.*مجاني|مجاني.*اشتراك|رصيد.*مجاني|تحقق.*حسابك|otp|رمز تفعيل|verify)/.test(m);
  if(telecomScam){ score+=28; detectedTypes.push('telecom');
    signals.push({icon:'🟠',cat:'اتصالات',text:'انتحال هوية شركة اتصالات كويتية — شركات الاتصالات لا ترسل روابط تحقق أو جوائز عبر واتساب'});
  }
  // C8: جمعيات تعاونية كويتية
  var jam3iya = /(جمعية|تعاونية|co-op|coop).{0,30}(جائزة|فزت|ربحت|سحب|مكافأة|هدية|استلم)/.test(m);
  if(jam3iya){ score+=25; detectedTypes.push('jam3iya');
    signals.push({icon:'🟠',cat:'جمعية',text:'انتحال هوية جمعية تعاونية — الجمعيات لا تُعلن عن جوائز عبر واتساب أو SMS. راجع الجمعية مباشرة'});
  }
  // C9: وزارات وجهات حكومية أخرى
  var govFake = /(وزارة الصحة|وزارة المالية|وزارة التجارة|وزارة الخارجية|وزارة الشؤون|هيئة الاتصالات|citra|البلدية|أمانة العاصمة)/.test(m) && /(رابط|link|http|ادفع|رسوم|تحقق|verify|تسجيل)/.test(m);
  if(govFake){ score+=28; detectedTypes.push('gov_fake');
    signals.push({icon:'🔴',cat:'حكومي',text:'انتحال جهة حكومية كويتية — الجهات الحكومية لا تطلب الدفع أو التحقق عبر روابط SMS. ادخل موقع الجهة مباشرة من متصفحك'});
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
    signals.push({icon:'🔴',cat:'نصب القريب',text:'نصب القريب — أسلوب معروف جداً بالكويت: شخص يتصل من رقم مجهول يدّعي أنه قريبك في ورطة ويطلب تحويل فوري. اتصل بالشخص على رقمه الأصلي قبل أي خطوة'});
  }
  // D2: طلب الكتمان عن الأهل
  var secrecy = /(ما تقول|ما تحكي|لا تقول|لا تحكي|ما تخبر|لا تخبر|خليها سر|بيننا وبين الله|بيني وبينك|لا أحد يدري|ما أبي أحد يعرف|لا تشوّش|ما أبيهم يعرفون|ما أبي يعرف البيت|ما أبي يشغلون بالهم)/.test(m);
  if(secrecy){
    score+=25;
    signals.push({icon:'🔴',cat:'نصب القريب',text:'طلب الكتمان — المحتال يطلب منك عدم إخبار أحد من العيلة. الشخص الصادق ما يطلب منك الكتمان أبداً'});
  }
  // D3: احتيال العمالة المنزلية
  var omalaScam = /(عمالة|خادمة|شغالة|سائق|طباخ|حارس|عامل منزلي|domestic worker|maid|driver|cook)/.test(m) && /(مقدمة|رسوم|advance|processing|دفع مسبق|ارسل.*قبل|قبل ما تيي|تكاليف نقل|تأشيرة.*ادفع)/.test(m);
  if(omalaScam){ score+=32; detectedTypes.push('3omala');
    signals.push({icon:'🔴',cat:'عمالة منزلية',text:'احتيال العمالة المنزلية — لا تدفع أي مبلغ قبل استلام العامل. الشركات الموثوقة لا تطلب مقدمات عبر واتساب'});
  }
  // D4: احتيال بيع وشراء (سيارات / أجهزة / عقارات)
  var buyScam = /(سيارة|سياره|جهاز|لابتوب|آيفون|iphone|شاشة|تلفزيون|أثاث|شقة|فيلا|بيت|أرض)/.test(m) && /(رخيص|بسعر مغري|تصفية|سعر لقطة|بسعر السوق تقريباً|من المالك مباشرة)/.test(m) && /(عربون|مقدمة|احجز الحين|ارسل.*أحجز|حول.*مقدمة|paypal|western union|حوالة)/.test(m);
  if(buyScam){ score+=30; detectedTypes.push('buy_scam');
    signals.push({icon:'🔴',cat:'بيع وشراء',text:'احتيال بيع وشراء — أسعار غير منطقية مع طلب عربون أو مقدمة قبل الاستلام هي علامة احتيال واضحة. لا تحوّل قبل ما تشوف البضاعة'});
  }
  // D5: احتيال الاستثمار والعملات الرقمية
  var invest = /(ضاعف أرباحك|ضاعف أموالك|عوائد مضمونة|ربح مضمون|guaranteed profit|guaranteed return|ربح يومي|daily profit|passive income|دخل سلبي|استثمار آمن|مضمون 100|forex|فوركس|binary|ثنائي|crypto|كريبتو|بيتكوين|bitcoin|ethereum|إيثيريوم|usdt|تيثر|عملة رقمية|trading bot|بوت تداول)/.test(m) && /(انضم|سجّل|استثمر|حوّل|ابدأ|ادفع|اشترك|join|invest|deposit|transfer)/.test(m);
  if(invest){ score+=38; detectedTypes.push('invest');
    signals.push({icon:'🔴',cat:'احتيال مالي',text:'احتيال استثماري — لا يوجد في الدنيا استثمار بعوائد مضمونة أو أرباح يومية ثابتة. هذا احتيال كلاسيكي يعرف بـ Ponzi Scheme'});
  }
  // D6: احتيال وظائف وهمية
  var job = /(وظيفة|job offer|فرصة عمل|نبحث عن|hiring|vacancy|مطلوب موظف|نوفر عمل|فرصة عمل بالكويت)/.test(m) && /(هوية|جواز|passport|civil id|صورة.*بطاقة|ارسل بيانات|رسوم تسجيل|processing fee|رسوم استخراج|مقدمة|advance payment|ارسل على واتساب)/.test(m);
  if(job){ score+=30; detectedTypes.push('job');
    signals.push({icon:'🟠',cat:'وظيفة وهمية',text:'وظيفة مشبوهة — الشركات الحقيقية لا تطلب صور الهوية أو رسوم تسجيل عبر واتساب. تحقق من الشركة عبر المواقع الرسمية'});
  }
  // D7: احتيال المسابقات والجوائز الوهمية
  var prize = /(فزت|ربحت|تهانينا|مبروك|congratulations|you are the winner|you won|لقد فزت|تم اختيارك|رقمك الفائز|اسمك خرج)/.test(m) && /(جائزة|prize|award|مبلغ|check|شيك|gift card|بطاقة هدية|ارسل.*لتستلم|ادفع.*رسوم|processing fee|رسوم إدارية|ضريبة|tax)/.test(m);
  if(prize){ score+=40; detectedTypes.push('prize');
    signals.push({icon:'🔴',cat:'جائزة وهمية',text:'جائزة وهمية — لا توجد جوائز حقيقية تطلب رسوماً لاستلامها. هذا الأسلوب معروف بـ Advance Fee Fraud'});
  }
  // D8: احتيال تطبيقات وهمية / برامج خبيثة
  var malware = /(حمّل|تحميل|نزّل|install|download|ثبّت).{0,40}(تطبيق|app|apk|برنامج|ملف|file).{0,40}(الرابط|هنا|here|link|من هنا)/.test(m);
  var malware2 = /(اضغط هنا لتفعيل|انقر لتحديث|تحديث مهم|important update|security update|تحديث أمني|تحديث فوري|update your app|رابط التحميل)/.test(m);
  if(malware || malware2){ score+=30; detectedTypes.push('malware');
    signals.push({icon:'🔴',cat:'برامج خبيثة',text:'رابط تحميل مشبوه — لا تحمّل تطبيقات من روابط في الرسائل. استخدم App Store أو Google Play فقط'});
  }
  // D9: احتيال التصيد عبر واتساب بالكويتي
  var whatsapp = /(واتساب.*رابط|رابط.*واتساب|اضغط الرابط|اضغط هنا|click here|press here|انقر هنا).{0,60}(بياناتك|معلوماتك|حسابك|account|تسجيل الدخول|login|verify)/.test(m);
  if(whatsapp){ score+=25; detectedTypes.push('phishing');
    signals.push({icon:'🟠',cat:'تصيد',text:'رابط تصيد عبر واتساب — لا تدخل بياناتك في أي رابط تصلك عبر الرسائل حتى لو بدا رسمياً'});
  }
  // D10: احتيال "اعطني كود الـ OTP"
  var otpScam = /(ارسلي الكود|ارسل الكود|ارسل الرمز|send me the code|send the otp|send otp|كود.*وصلك|رمز.*وصلك|الرمز اللي وصلك|الكود اللي جالك|ايش الرمز|وش الكود|وش الرقم اللي وصل|رقم التحقق اللي وصل|verification code.*send|share the code)/.test(m);
  if(otpScam){ score+=50; detectedTypes.push('otp_theft');
    signals.push({icon:'🔴',cat:'سرقة OTP',text:'طلب رمز OTP — خطر جداً! لا ترسل رمز التحقق لأي أحد أبداً، حتى لو ادّعى أنه من البنك أو الجهة الرسمية. هذا أخطر أنواع الاحتيال'});
  }

  // ════════════════════════════════════════════════════════
  // BLOCK E — بيانات شخصية وحساسة
  // ════════════════════════════════════════════════════════

  // E1: طلب بيانات البطاقة البنكية
  var cardData = /(رقم البطاقة|card number|رقم الكارت|cvv|cvc|card verification|تاريخ الانتهاء|expiry date|تاريخ الصلاحية|رقم بطاقتك كاملاً|ارسل.*بيانات.*بطاقة)/.test(m);
  if(cardData){ score+=45; detectedTypes.push('card_data');
    signals.push({icon:'🔴',cat:'بيانات حساسة',text:'طلب بيانات البطاقة البنكية — لا ترسل رقم البطاقة أو CVV أو تاريخ الانتهاء لأي أحد بأي سبب كان'});
  }
  // E2: طلب كلمة المرور
  var passReq = /(كلمة مرورك|كلمة المرور|password|باسورد|رمز الدخول|pin.*ارسل|ارسل.*pin|ارسل.*password)/.test(m);
  if(passReq){ score+=40;
    signals.push({icon:'🔴',cat:'بيانات حساسة',text:'طلب كلمة المرور — لا توجد جهة رسمية تطلب كلمة مرورك أبداً. هذا احتيال'});
  }
  // E3: طلب صورة الهوية / الجواز
  var idReq = /(صورة.*هوية|صورة.*جواز|صورة.*بطاقة|ارسل.*هوية|ارسل.*جواز|ارسل.*بطاقة المدنية|copy of.*id|copy of.*passport|id photo|passport photo|scan.*id|هوية.*واضحة|جواز.*واضح)/.test(m);
  if(idReq){ score+=30;
    signals.push({icon:'🟠',cat:'بيانات شخصية',text:'طلب صورة هوية أو جواز — لا ترسل صورة هويتك عبر واتساب أو تيليغرام. هذه البيانات تُستخدم في سرقة الهوية'});
  }

  // ════════════════════════════════════════════════════════
  // BLOCK F — مؤشرات مالية كويتية
  // ════════════════════════════════════════════════════════

  // F1: آيبان / تحويل بنكي عاجل
  var ibanUrgent = /(آيبان|iban|رقم حساب|account number).{0,80}(الحين|فوري|ضروري|عاجل|اليوم|قبل|now|urgent|immediately)/.test(m);
  if(ibanUrgent){ score+=25;
    signals.push({icon:'🟠',cat:'تحويل مالي',text:'طلب تحويل عاجل على آيبان — لا تحوّل أي مبلغ بناءً على رسالة أو مكالمة فقط. تحقق شخصياً أولاً'});
  }
  // F2: مبالغ صغيرة معتادة في النصب الكويتي
  var smallAmounts = /(50 دينار|100 دينار|150 دينار|200 دينار|250 دينار|300 دينار|2\.500|5\.000|10\.000 دينار|kwd 50|kwd 100|kwd 200|kwd 500)/.test(m) && /(الحين|عاجل|فوري|ضروري|ارسل|حول|transfer)/.test(m);
  if(smallAmounts){ score+=18;
    signals.push({icon:'🟡',cat:'مالي',text:'طلب مبلغ مالي بشكل عاجل — المحتالون عادةً يطلبون مبالغ معقولة حتى لا تتردد. تحقق قبل أي تحويل'});
  }
  // F3: PayPal / Western Union / حوالات مشبوهة
  var payMethod = /(paypal|western union|مني|hawala|حوالة غير رسمية|gift card|بطاقة هدية|itunes|google play.*دفع|شحن رصيد.*ارسل)/.test(m);
  if(payMethod){ score+=30;
    signals.push({icon:'🔴',cat:'طريقة دفع مشبوهة',text:'طريقة دفع مشبوهة — الجهات الرسمية لا تطلب الدفع عبر PayPal أو Western Union أو بطاقات هدايا. هذه علامة احتيال كلاسيكية'});
  }

  // ════════════════════════════════════════════════════════
  // BLOCK G — علامات إيجابية (يخفّض الدرجة)
  // ════════════════════════════════════════════════════════

  // G1: نطاق حكومي كويتي رسمي
  if(/\.gov\.kw/.test(m)){
    score-=20;
    signals.push({icon:'🟢',cat:'إيجابي',text:'نطاق حكومي رسمي (.gov.kw) — تحقق أن الرابط يبدأ بـ https:// وينتهي بـ .gov.kw بالضبط'});
  }
  // G2: تحذير من مشاركة OTP (دليل على رسالة شرعية)
  if(/(لا تشارك.*otp|لا تعطي.*رمز|لا تشارك.*رمز|do not share.*otp|never share.*otp|otp.*لا تشاركه|رمز.*لا تعطيه لأحد|لن نطلب منك.*رمز|we will never ask.*otp|we never ask)/.test(m)){
    score-=30;
    signals.push({icon:'🟢',cat:'إيجابي',text:'الرسالة تحذّر من مشاركة OTP — هذا سلوك المؤسسات الشرعية التي تنصح عملاءها بعدم المشاركة'});
  }
  // G3: إخلاء مسؤولية أمني
  if(/(لن نطلب|لا نطلب|لا يطلب|never ask|will never ask|نؤكد أننا لن)/.test(m)){
    score-=20;
    signals.push({icon:'🟢',cat:'إيجابي',text:'إخلاء مسؤولية أمني — المؤسسات الرسمية دائماً تذكّر عملاءها أنها لن تطلب كلمات المرور'});
  }
  // G4: خطوط خدمة عملاء رسمية كويتية
  if(/(1801801|1888|1805|1800000|161|165|1888|22415300|24843000|call.*18|اتصل على 1)/.test(m)){
    score-=12;
    signals.push({icon:'🟢',cat:'إيجابي',text:'رقم خدمة عملاء رسمي كويتي — الجهات الموثوقة توجهك للاتصال على أرقامها الرسمية'});
  }
  // G5: رسالة بدون رابط ولا طلب مال
  if(!/https?:\/\//.test(m) && !/(دفع|ارسل|حول|transfer|ادفع|pay|آيبان|iban|كلمة مرور|otp|رمز|cvv|pin)/.test(m)){
    score-=10;
    signals.push({icon:'🟢',cat:'إيجابي',text:'لا يوجد رابط أو طلب بيانات حساسة في الرسالة — مؤشر إيجابي'});
  }

  // ════════════════════════════════════════════════════════
  // تقييم نهائي
  // ════════════════════════════════════════════════════════
  score = Math.max(0, Math.min(100, score));

  // تحديد النوع الرئيسي للتهديد
  var mainType = '';
  if(detectedTypes.indexOf('otp_theft')>=0) mainType = 'سرقة رمز OTP';
  else if(detectedTypes.indexOf('naqarib')>=0) mainType = 'نصب القريب';
  else if(detectedTypes.indexOf('card_data')>=0) mainType = 'سرقة بيانات بنكية';
  else if(detectedTypes.indexOf('invest')>=0) mainType = 'احتيال استثماري';
  else if(detectedTypes.indexOf('prize')>=0) mainType = 'جائزة وهمية';
  else if(detectedTypes.indexOf('knet')>=0||detectedTypes.indexOf('nbk')>=0||detectedTypes.indexOf('bank')>=0) mainType = 'انتحال هوية بنك';
  else if(detectedTypes.indexOf('civil_id')>=0) mainType = 'احتيال بطاقة مدنية';
  else if(detectedTypes.indexOf('iqama')>=0) mainType = 'احتيال تجديد إقامة';
  else if(detectedTypes.indexOf('malware')>=0) mainType = 'برنامج خبيث';
  else if(detectedTypes.indexOf('job')>=0) mainType = 'وظيفة وهمية';
  else if(detectedTypes.indexOf('3omala')>=0) mainType = 'احتيال عمالة منزلية';
  else if(detectedTypes.indexOf('buy_scam')>=0) mainType = 'احتيال بيع وشراء';

  var level, color, emoji, arabic;
  if(score>=70){level='CRITICAL THREAT';arabic='تهديد خطير'+(mainType?' — '+mainType:'');color='#ff3c5a';emoji='🚨';}
  else if(score>=45){level='HIGH RISK';arabic='خطر عالٍ'+(mainType?' — '+mainType:'');color='#f5a623';emoji='⚠️';}
  else if(score>=20){level='MEDIUM RISK';arabic='خطر متوسط'+(mainType?' — '+mainType:'');color='#00d4ff';emoji='🔍';}
  else{level='LIKELY SAFE';arabic='على الأرجح آمن';color='#00ff88';emoji='✅';}

  if(signals.length===0){
    if(score<20) signals.push({icon:'🟢',cat:'',text:'لا توجد علامات تهديد واضحة. تذكر: عند أي شك لا تضغط الرابط واتصل بالجهة مباشرة.'});
    else signals.push({icon:'🟡',cat:'',text:'بعض الأنماط تستدعي الانتباه. تحقق من المصدر الرسمي قبل أي إجراء.'});
  }
  return{score:score, level:level, arabic:arabic, color:color, emoji:emoji, signals:signals, types:detectedTypes};
}

function showResult(r){
  var res=document.getElementById('aiResult');
  res.classList.add('show');
  document.getElementById('resultHeader').innerHTML=
    '<span style="font-size:22px">'+r.emoji+'</span>'+
    '<div>'+
      '<div style="font-size:0.9rem;font-weight:800;color:'+r.color+'">'+r.level+
        '<span style="font-size:0.75rem;font-weight:600;margin-right:8px;opacity:0.85"> — '+r.arabic+'</span>'+
      '</div>'+
      '<div style="font-size:0.65rem;color:var(--muted2);font-family:monospace;margin-top:3px">Risk Score: '+r.score+'/100 &nbsp;|&nbsp; '+r.signals.length+' إشارة مكتشفة</div>'+
    '</div>';
  var fill=document.getElementById('riskFill');
  fill.style.width='0%'; fill.style.background=r.color;
  setTimeout(function(){fill.style.width=r.score+'%';},50);

  var sigs='';
  r.signals.forEach(function(s){
    var catBadge = s.cat ? '<span style="font-size:0.52rem;padding:1px 6px;border-radius:3px;background:rgba(255,255,255,0.06);color:var(--muted2);border:1px solid var(--border);margin-left:6px;vertical-align:middle">'+s.cat+'</span>' : '';
    sigs+='<div class="signal-item"><span class="signal-icon">'+s.icon+'</span><span class="signal-text">'+catBadge+' '+s.text+'</span></div>';
  });
  document.getElementById('resultSignals').innerHTML=sigs;

  // ── بناء لوحة الإجراءات الفورية
  var msg = document.getElementById('aiInput').value;
  var urlMatch = msg.match(/https?:\/\/[^\s]+/);
  var detectedUrl = urlMatch ? urlMatch[0] : null;

  var actionsHtml = '';

  // تحذير حمر عند خطر عالٍ
  if(r.score >= 45){
    actionsHtml += '<div style="background:rgba(255,60,90,0.1);border:1px solid rgba(255,60,90,0.35);border-radius:8px;padding:13px 16px;margin-bottom:12px;">'
      +'<div style="font-size:0.78rem;font-weight:700;color:var(--red);margin-bottom:6px;">🚫 لا تتصرف قبل التحقق</div>'
      +'<div style="font-size:0.72rem;color:var(--text);line-height:1.7;">'
      +'• لا تضغط أي رابط في الرسالة<br>'
      +'• لا ترسل أي رمز OTP أو كلمة مرور<br>'
      +'• لا تحوّل أي مبلغ مالي قبل التأكد شخصياً<br>'
      +'• اتصل بالجهة الرسمية مباشرة على رقمها المعروف'
      +'</div></div>';
  }

  // زر فحص الرابط بـ VirusTotal
  if(detectedUrl){
    var vtUrl = 'https://www.virustotal.com/gui/url/'+encodeURIComponent(detectedUrl);
    actionsHtml += '<div style="margin-bottom:10px;">'
      +'<div style="font-size:0.62rem;text-transform:uppercase;letter-spacing:1.5px;color:var(--muted2);margin-bottom:7px;font-family:monospace;">// فحص الرابط المكتشف</div>'
      +'<div style="background:var(--panel2);border:1px solid var(--border);border-radius:7px;padding:9px 12px;font-size:0.7rem;font-family:monospace;color:var(--muted2);word-break:break-all;margin-bottom:7px;">'+detectedUrl+'</div>'
      +'<div style="display:flex;gap:8px;flex-wrap:wrap;">'
      +'<a href="'+vtUrl+'" target="_blank" style="display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,#1a6b3c,#0d4a2a);color:#00ff88;border:1px solid rgba(0,255,136,0.3);border-radius:6px;padding:7px 14px;font-size:0.72rem;font-weight:700;text-decoration:none;transition:all 0.2s;" onmouseover="this.style.boxShadow=\'0 4px 14px rgba(0,255,136,0.3)\'" onmouseout="this.style.boxShadow=\'none\'">'
      +'<span>🔬</span> افحص الرابط في VirusTotal</a>'
      +'<button data-url="'+detectedUrl.replace(/"/g,'&quot;')+'" onclick="copyToClip(this.getAttribute(\'data-url\'))" style="display:inline-flex;align-items:center;gap:6px;background:var(--panel);color:var(--muted2);border:1px solid var(--border);border-radius:6px;padding:7px 14px;font-size:0.72rem;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.borderColor=\'var(--accent)\';this.style.color=\'var(--accent)\'" onmouseout="this.style.borderColor=\'var(--border)\';this.style.color=\'var(--muted2)\'">'
      +'<span>📋</span> نسخ الرابط</button>'
      +'</div></div>';
  }

  // أرقام الطوارئ الكويتية حسب نوع التهديد
  var emergencyNums = '';
  var types = r.types || [];
  if(types.indexOf('civil_id')>=0 || types.indexOf('iqama')>=0 || types.indexOf('gov_fake')>=0){
    emergencyNums += '<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--border);"><span style="font-size:16px">🏛️</span><div><div style="font-size:0.72rem;font-weight:600;color:#fff">وزارة الداخلية / PACI</div><div style="font-size:0.68rem;color:var(--accent);font-family:monospace">1889 &nbsp;|&nbsp; 25326400</div></div></div>';
  }
  if(types.indexOf('knet')>=0){
    emergencyNums += '<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--border);"><span style="font-size:16px">💳</span><div><div style="font-size:0.72rem;font-weight:600;color:#fff">KNET</div><div style="font-size:0.68rem;color:var(--accent);font-family:monospace">1800 &nbsp;|&nbsp; 22281234</div></div></div>';
  }
  if(types.indexOf('nbk')>=0){
    emergencyNums += '<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--border);"><span style="font-size:16px">🏦</span><div><div style="font-size:0.72rem;font-weight:600;color:#fff">بنك الكويت الوطني NBK</div><div style="font-size:0.68rem;color:var(--accent);font-family:monospace">1801801</div></div></div>';
  }
  if(types.indexOf('kfh')>=0){
    emergencyNums += '<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--border);"><span style="font-size:16px">🏦</span><div><div style="font-size:0.72rem;font-weight:600;color:#fff">بيت التمويل الكويتي KFH</div><div style="font-size:0.68rem;color:var(--accent);font-family:monospace">1803333</div></div></div>';
  }
  if(types.indexOf('bank')>=0){
    emergencyNums += '<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--border);"><span style="font-size:16px">🏦</span><div><div style="font-size:0.72rem;font-weight:600;color:#fff">البنك المركزي الكويتي CBK</div><div style="font-size:0.68rem;color:var(--accent);font-family:monospace">22164600</div></div></div>';
  }
  if(types.indexOf('telecom')>=0){
    emergencyNums += '<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--border);"><span style="font-size:16px">📱</span><div><div style="font-size:0.72rem;font-weight:600;color:#fff">شركات الاتصالات</div><div style="font-size:0.68rem;color:var(--accent);font-family:monospace">زين: 107 &nbsp;|&nbsp; Ooredoo: 121 &nbsp;|&nbsp; STC: 900</div></div></div>';
  }
  // طوارئ عامة دائماً
  emergencyNums += '<div style="display:flex;align-items:center;gap:8px;padding:6px 0;"><span style="font-size:16px">🚨</span><div><div style="font-size:0.72rem;font-weight:600;color:#fff">وحدة الجرائم المعلوماتية — وزارة الداخلية</div><div style="font-size:0.68rem;color:var(--accent);font-family:monospace">وحدة إدارة الجرائم الإلكترونية: 1872</div></div></div>';

  if(r.score >= 20){
    actionsHtml += '<div style="background:var(--panel2);border:1px solid var(--border);border-radius:8px;padding:12px 14px;">'
      +'<div style="font-size:0.62rem;text-transform:uppercase;letter-spacing:1.5px;color:var(--muted2);margin-bottom:9px;font-family:monospace;">// اتصل بالجهة الرسمية مباشرة</div>'
      +emergencyNums
      +'</div>';
  }

  document.getElementById('aiActions').innerHTML = actionsHtml;
  res.scrollIntoView({behavior:'smooth',block:'nearest'});
}

function copyToClip(txt){
  navigator.clipboard.writeText(txt).then(function(){
    showToast('✓ تم نسخ الرابط');
  }).catch(function(){
    showToast('تعذّر النسخ، انسخ يدوياً',true);
  });
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
  }
];

var simIdx=0,simScore=0,simAnswered=false;

function loadScenario(){
  var s=SCENARIOS[simIdx];
  document.getElementById('simQNum').textContent='Q '+(simIdx+1)+'/'+SCENARIOS.length;
  document.getElementById('simProgress').style.width=(simIdx/SCENARIOS.length*100)+'%';
  document.getElementById('simScore').textContent='Score: '+simScore;
  document.getElementById('simFrom').textContent=(LANG==='ar'?'من: ':'From: ')+rt(s.from);
  var subj=rt(s.subject);
  document.getElementById('simSubject').textContent=subj||(LANG==='ar'?'(بدون موضوع)':'(No Subject)');
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
  var s=SCENARIOS[simIdx];
  var opts=document.querySelectorAll('.sim-opt');
  opts.forEach(function(o){o.disabled=true;});
  if(idx===s.correct){
    opts[idx].className='sim-opt correct';
    simScore++;
  } else {
    opts[idx].className='sim-opt wrong';
    opts[s.correct].className='sim-opt correct';
  }
  var fb=document.getElementById('simFeedback');
  fb.innerHTML=rt(s.feedback);
  fb.className='sim-feedback show';
  var nextBtn=document.getElementById('simNext');
  nextBtn.className='sim-next show';
  nextBtn.textContent=t('sim-next');
}

function nextScenario(){
  simIdx++;
  if(simIdx>=SCENARIOS.length){
    showScore();
  } else {
    loadScenario();
  }
}

function showScore(){
  document.getElementById('scenarioCard').style.display='none';
  var sc=document.getElementById('scoreCard');
  sc.className='score-card show';
  var total=SCENARIOS.length;
  document.getElementById('scoreFinal').textContent=simScore+'/'+total;
  document.getElementById('scoreFinal').style.color=simScore>=Math.ceil(total*0.8)?'#00ff88':simScore>=Math.ceil(total*0.5)?'#f5a623':'#ff3c5a';
  var pct=simScore/total;
  var msgs = LANG==='ar' ? [
    'لازم تراجع قسم Knowledge Base وتتدرب أكثر — المحتالون يستغلون قلة الوعي.',
    'مو بطال! بس في نقاط ضعف تحتاج تشتغل عليها. راجع الأمثلة اللي غلطت فيها.',
    'كويس! عندك وعي جيد. شارك ShieldKW مع عيلتك وأصحابك لتحميهم.',
    'ممتاز! أنت خبير في اكتشاف الاحتيال. ساعد غيرك يتعلم ويحمي نفسه.'
  ] : [
    'You need to review the Knowledge Base and practice more — scammers exploit lack of awareness.',
    'Not bad! But there are weak points you need to work on. Review the examples you got wrong.',
    'Good! You have solid awareness. Share ShieldKW with your family and friends to protect them.',
    'Excellent! You are an expert at detecting scams. Help others learn and protect themselves.'
  ];
  document.getElementById('scoreMsg').textContent=msgs[pct>=0.9?3:pct>=0.7?2:pct>=0.4?1:0];
  document.getElementById('simProgress').style.width='100%';
  document.getElementById('simScore').textContent='Score: '+simScore+'/'+total;
}

function restartSim(){simIdx=0;simScore=0;loadScenario();}

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
  kbActiveIdx = i;
  renderKBModal(i);
  document.getElementById('kbModalBg').classList.add('open');
}
function closeKB(){
  document.getElementById('kbModalBg').classList.remove('open');
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
  if(!document.getElementById('kbModalBg').classList.contains('open')) return;
  if(e.key === 'Escape') closeKB();
  if(e.key === 'ArrowRight') kbNav(1);
  if(e.key === 'ArrowLeft') kbNav(-1);
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
  var lines = [];
  lines.push('ShieldKW — Threat Report Export');
  lines.push('Generated: ' + new Date().toLocaleString());
  lines.push('Filter: ' + (activeFilter==='all' ? 'All Severities' : activeFilter));
  lines.push('Total: ' + vis.length + ' reports');
  lines.push('═'.repeat(50));
  lines.push('');
  vis.forEach(function(r, i){
    lines.push((i+1) + '. [' + r.sev.toUpperCase() + '] ' + rt(r.title));
    lines.push('   Area: ' + r.area);
    lines.push('   Type: ' + rt(r.type));
    lines.push('   ' + rt(r.desc));
    lines.push('');
  });
  lines.push('═'.repeat(50));
  lines.push('Exported from ShieldKW — shieldkw.com');
  var text = lines.join('\n');
  navigator.clipboard.writeText(text).then(function(){
    showToast(t('export-copied'));
  }).catch(function(){
    // Fallback: download as file
    var blob = new Blob([text], {type:'text/plain'});
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'ShieldKW_Reports_' + new Date().toISOString().slice(0,10) + '.txt';
    a.click();
    showToast(t('export-copied'));
  });
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
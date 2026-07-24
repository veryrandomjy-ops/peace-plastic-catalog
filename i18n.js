/* =====================================================================
 *  i18n.js —— 简体中文 / 繁體中文 / English 语言切换（index.html 与 editor.html 共用）
 *  用法：在页面中先引入本文件，再调用 buildLangBar(el) 生成切换器。
 *  文本取值：
 *    L(src, en)       产品内容字段：src=原始(简体)，en=英文；en 模式取 en，tw 模式把 src 转繁体
 *    t(key)           界面固定文案：从 I18N 取，tw 由 zh 自动转繁体
 *  状态持久化在 localStorage('catalog_lang')。
 * ===================================================================== */
(function () {
  // 简体 -> 繁体 对照表（覆盖产品目录领域与常用界面文字）
  var SIMP2TRAD = {
    '厂':'廠','价':'價','税':'稅','酿':'釀','产':'產','录':'錄','实':'實','图':'圖',
    '点':'點','击':'擊','张':'張','质':'質','规':'規','装':'裝','柜':'櫃','认':'認',
    '宝':'寶','红':'紅','槟':'檳','体':'體','单':'單','个':'個','内':'內','喷':'噴',
    '漆':'漆','盖':'蓋','龙':'龍','头':'頭','连':'連','面':'麵','议':'議','预':'預',
    '览':'覽','编':'編','辑':'輯','导':'導','属':'屬','栏':'欄','删':'刪','确':'確',
    '切':'切','换':'換','语':'語','简':'簡','关':'關','闭':'閉','开':'開','选':'選',
    '项':'項','复':'復','制':'製','动':'動','显':'顯','隐':'隱','印':'印','搜':'搜',
    '索':'索','详':'詳','情':'情','返':'返','页':'頁','后':'後','总':'總','计':'計',
    '数':'數','类':'類','型':'型','状':'狀','态':'態','成':'成','功':'功','失':'失',
    '败':'敗','错':'錯','误':'誤','提':'提','息':'息','消':'消','操':'操','作':'作',
    '取':'取','应':'應','用':'用','问':'問','题':'題','支':'支','持':'持','当':'當',
    '所':'所','有':'有','无':'無','没':'沒','自':'自','手':'手','名':'名','称':'稱',
    '说':'說','明':'明','本':'本','容':'容','上':'上','传':'傳','下':'下','据':'據',
    '模':'模','式':'式','发':'發','布':'佈','客':'客','户':'戶','管':'管','理':'理',
    '列':'列','表':'表','格':'格','起':'起','订':'訂','量':'量','设':'設','置':'置',
    '帮':'幫','助':'助','于':'於','与':'與','对':'對','移':'移','建':'建','除':'除',
    '保':'保','存':'存','新':'新','添':'添','加':'加','款':'款','性':'性','文':'文',
    '字':'字','中':'中','英':'英','查':'查','看':'看','片':'片','载':'載','请':'請',
    '务':'務','须':'須','需':'需','为':'為','么':'麼','怎':'怎','这':'這','那':'那',
    '里':'裡','边':'邊','将':'將','时':'時','会':'會','们':'們','它':'它','她':'她',
    '他':'他','你':'你','我':'我','的':'的','了':'了','吗':'嗎','呢':'呢','吧':'吧',
    '把':'把','被':'被','给':'給','让':'讓','从':'從','向':'向','在':'在','和':'和',
    '或':'或','及':'及','等':'等','并':'並','且':'且','但':'但','而':'而','因':'因',
    '果':'果','虽':'雖','然':'然','既':'既','又':'又','还':'還','也':'也','都':'都',
    '很':'很','更':'更','最':'最','太':'太','较':'較','比':'比','能':'能','可':'可',
    '要':'要','想':'想','知':'知','道':'道','见':'見','听':'聽','话':'話','读':'讀',
    '写':'寫','做':'做','使':'使','令':'令','叫':'叫','号':'號','码':'碼','级':'級',
    '种':'種','样':'樣','些':'些','每':'每','各':'各','另':'另','只':'只','仅':'僅',
    '唯':'唯','独':'獨','全':'全','部':'部','分':'分','余':'餘','其':'其','哪':'哪',
    '谁':'誰','何':'何','几':'幾','多':'多','少':'少','高':'高','低':'低','长':'長',
    '短':'短','大':'大','小':'小','宽':'寬','厚':'厚','深':'深','浅':'淺','远':'遠',
    '近':'近','快':'快','慢':'慢','早':'早','晚':'晚','旧':'舊','好':'好','坏':'壞',
    '优':'優','缺':'缺','强':'強','弱':'弱','轻':'輕','重':'重','难':'難','易':'易',
    '杂':'雜','清':'清','楚':'楚','白':'白','暗':'暗','绿':'綠','蓝':'藍','黄':'黃',
    '黑':'黑','紫':'紫','橙':'橙','灰':'灰','粉':'粉','彩':'彩','色':'色','光':'光',
    '影':'影','声':'聲','音':'音','风':'風','云':'雲','雨':'雨','电':'電','网':'網',
    '软':'軟','硬':'硬','件':'件','库':'庫','单':'單','输':'輸','入':'入','口':'口',
    '窗':'窗','按':'按','钮':'鈕','菜':'菜','标':'標','签':'籤','题':'題','限':'限',
    '登':'登','录':'錄','注':'註','册':'冊','退':'退','权':'權','版':'版','翻':'翻',
    '译':'譯','繁':'繁','默':'默','该':'該','务':'務','须':'須','须':'須','须':'須'
  };

  function toTraditional(s) {
    if (!s) return s;
    return String(s).replace(/[一-鿿]/g, function (ch) { return SIMP2TRAD[ch] || ch; });
  }

  // 界面固定文案（zh 为源，tw 由 toTraditional 自动生成；en 显式给出）
  var I18N = {
    zh: {
      products: '产品目录', gallery: '实拍图廊',
      quote: '面议', price_label: '出厂价 (不含税)',
      close: '关闭 (Esc)', prev: '上一张 (←)', next: '下一张 (→)',
      editor_title: 'Beer Tower 目录编辑器',
      preview: '预览', edit: '编辑',
      match_all: '🔍 一键匹配全部图片', export_data: '⬇ 导出数据',
      add_product: '＋ 添加一款产品',
      add_spec: '＋ 添加属性', add_price: '＋ 添加价格栏',
      add_img: '＋ 添加图片', add_angle: '＋加图',
      match_photos: '🔍 按型号匹配图片',
      del: '删除', del_price: '删除整栏价格',
      restore_price: '＋ 添加价格栏', cover: '封面',
      toast_add_product: '已添加一款新产品',
      toast_del_product: '已删除该产品',
      toast_del_price: '已删除整栏价格，可点“＋ 添加价格栏”恢复',
      toast_add_price: '已添加价格栏',
      toast_add_spec: '已添加属性，点左侧文字改名、右侧填值',
      toast_add_color: '已添加颜色，点色块可上传该颜色图片',
      toast_match: '已为 {n} 款产品自动匹配图片',
      toast_match_none: '没有可匹配的产品（或都已配图）',
      toast_img_updated: '图片已更新（点「导出数据」后持久化）',
      toast_no_match: '未找到匹配图片',
      toast_exported: '已导出 catalog-data.js（下载后覆盖原文件，刷新即可生效）',
      toast_add_color: '已添加颜色，点色块可上传该颜色图片',
      toast_del_color: '已删除该颜色',
      toast_del_spec: '已删除该属性',
      toast_rm_angle: '已删除当前视角',
      toast_at_least_one: '至少保留 1 张视角（可点击图片替换）',
      toast_matched_one: '已匹配 {n} 张图',
      print: '🖨 打印 / PDF',
      add_color: '＋ 加颜色',
      del_color: '删除颜色',
      del_spec: '删除该属性'
    },
    en: {
      products: 'Product Catalog', gallery: 'Photo Gallery',
      quote: 'Quote', price_label: 'Ex-works Price (excl. tax)',
      close: 'Close (Esc)', prev: 'Prev (←)', next: 'Next (→)',
      editor_title: 'Beer Tower Catalog Editor',
      preview: 'Preview', edit: 'Edit',
      match_all: '🔍 Auto-match all photos', export_data: '⬇ Export Data',
      add_product: '＋ Add a product',
      add_spec: '＋ Add attribute', add_price: '＋ Add price block',
      add_img: '＋ Add image', add_angle: '＋ Add photo',
      match_photos: '🔍 Match photos by model',
      del: 'Delete', del_price: 'Delete price block',
      restore_price: '＋ Add price block', cover: 'Cover',
      toast_add_product: 'Added a new product',
      toast_del_product: 'Product deleted',
      toast_del_price: 'Price block deleted; click "＋ Add price block" to restore',
      toast_add_price: 'Price block added',
      toast_add_spec: 'Attribute added; click the label to rename, fill the value',
      toast_add_color: 'Color added; click the swatch to upload its photo',
      toast_match: 'Auto-matched photos for {n} products',
      toast_match_none: 'No products to match (or all already have photos)',
      toast_img_updated: 'Image updated (click "Export Data" to persist)',
      toast_no_match: 'No matching photo found',
      toast_exported: 'Exported catalog-data.js (overwrite the file, then refresh)',
      toast_add_color: 'Color added; click the swatch to upload its photo',
      toast_del_color: 'Color deleted',
      toast_del_spec: 'Attribute deleted',
      toast_rm_angle: 'Current view deleted',
      toast_at_least_one: 'Keep at least 1 view (click image to replace)',
      toast_matched_one: 'Matched {n} photos',
      print: '🖨 Print / PDF',
      add_color: '＋ Add color',
      del_color: 'Delete color',
      del_spec: 'Delete attribute'
    }
  };

  var _LANG = 'zh';
  try { _LANG = localStorage.getItem('catalog_lang') || 'zh'; } catch (e) {}

  function getLang() { return _LANG; }

  function setLang(l) {
    _LANG = (l === 'tw' || l === 'en') ? l : 'zh';
    try { localStorage.setItem('catalog_lang', _LANG); } catch (e) {}
    if (typeof window.__renderCatalog === 'function') window.__renderCatalog();
    if (typeof window.render === 'function') window.render();
    applyLangBar();
  }

  // 产品内容：src=原始(简体)，en=英文。en 取 en；tw 把 src 转繁体；zh 取 src。
  function L(src, en) {
    if (_LANG === 'en') return (en != null && en !== '') ? en : (src != null ? src : '');
    if (_LANG === 'tw') return toTraditional(src == null ? '' : src);
    return src == null ? '' : src;
  }

  // 界面固定文案
  function t(key) {
    var z = (I18N.zh[key] != null) ? I18N.zh[key] : key;
    if (_LANG === 'en') return (I18N.en[key] != null) ? I18N.en[key] : z;
    if (_LANG === 'tw') return toTraditional(z);
    return z;
  }

  function buildLangBar(el) {
    if (!el) return;
    el.innerHTML = '<button type="button" data-l="zh">简体</button>'
                 + '<button type="button" data-l="tw">繁體</button>'
                 + '<button type="button" data-l="en">EN</button>';
    el.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-l]');
      if (b) setLang(b.getAttribute('data-l'));
    });
    applyLangBar();
  }

  function applyLangBar() {
    var btns = document.querySelectorAll('.lang-bar button');
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle('on', btns[i].getAttribute('data-l') === _LANG);
    }
  }

  window.I18N = I18N;
  window.toTraditional = toTraditional;
  window.getLang = getLang;
  window.setLang = setLang;
  window.L = L;
  window.t = t;
  window.buildLangBar = buildLangBar;
  window.applyLangBar = applyLangBar;
})();

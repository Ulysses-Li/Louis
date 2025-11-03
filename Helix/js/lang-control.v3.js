(() => {
const DICT = {
  'zh-TW': {
    'nav.lang': '語言／地區',
    'nav.main': '主選單',
    'nav.home': '首頁',
    'nav.search': '搜尋',
    'nav.toggle': '切換導覽',
    'nav.region.apac': '亞太地區',
    'nav.region.americas_europe': '美洲與歐洲',

    'helix.title': 'NC Helix Drill 程式產生器',

    'form.partNo.title': '選擇刀具料號',
    'form.partNo.group1': '料號 (99321 系列)',
    'form.partNo.group2': '料號 (99323 系列)',
    'form.partNo.extBarLabel': '選擇延長桿',
    'form.partNo.status.none': '尚未選擇料號。',
    'form.partNo.status.selected': '已選擇料號',
    'form.partNo.extBarStatus.none': '尚未選擇延長桿。',
    'form.partNo.extBarStatus.selected': '已選擇延長桿',

    'form.material.label': '工件材質',
    'form.material.isoHint': 'ISO 群組',

    'form.mode.mode1': '模式1',
    'form.mode.mode2': '模式2',
    'form.mode.mode3': '模式3',

    'form.modeDesc.mode1': '實心加工，螺旋銑削',
    'form.modeDesc.mode2': '實心加工，第一孔/第二孔：螺旋銑削',
    'form.modeDesc.mode3': '預孔／薄板，擴孔 + 螺旋補間',

    'form.params.preBore': '預孔直徑',
    'form.params.machiningDia': '加工直徑',
    'form.params.depth': '加工深度',
    'form.params.pitch': '牙距',

    'form.others.toolDia': '刀具直徑 ØDc',
    'form.others.cuttingSpeed': '切削速度',
    'form.others.spindleSpeed': '主軸轉速',
    'form.others.teeth': '齒數',
    'form.others.feedPerTooth': '每刃進給',
    'form.others.feedRate': '進給率',
    'form.others.toolNo': '刀具號碼',
    'form.others.coorSystem': '座標系',
    'form.others.coorX': '座標 X',
    'form.others.coorY': '座標 Y',
    'form.others.safeZ': '安全高度 Z',
    'form.others.surfaceZ': '工件表面 Z',

    'form.actions.addTool': '加入刀具',
    'form.actions.generate': '產生 G-Code',
    'form.actions.export': '匯出檔案',
    'form.actions.clear': '清除',

    'form.common.select': '請選擇...',
    'form.common.clear': '清除',

    'form.placeholders.mm': 'mm',
    'form.placeholders.m_min': 'm/min',
    'form.placeholders.rpm': 'RPM',
    'form.placeholders.mm_tooth': 'mm/tooth',
    'form.placeholders.mm_min': 'mm/min',
    'form.placeholders.selectTool': '請先選擇刀具',

    // 主軸功率（新增）
    'form.power.label': '主軸功率',
    'form.power.low': '< 12 kW（低／保守）',
    'form.power.medium': '12–20 kW（中）',
    'form.power.high': '> 20 kW（高）',

    // 結果區（新增）
    'form.results.machiningTime': '預估加工時間：{time} 秒'
  },

  'en-US': {
    'nav.lang': 'Language/Region',
    'nav.main': 'Main menu',
    'nav.home': 'Home',
    'nav.search': 'Search',
    'nav.toggle': 'Toggle navigation',
    'nav.region.apac': 'Asia / Pacific',
    'nav.region.americas_europe': 'Americas & Europe',

    'helix.title': 'NC Program Generator for NC Helix Drill',

    'form.partNo.title': 'Select Part No.',
    'form.partNo.group1': 'Part No. (99321 Series)',
    'form.partNo.group2': 'Part No. (99323 Series)',
    'form.partNo.extBarLabel': 'Select Extension Bar',
    'form.partNo.status.none': 'No Part No. selected.',
    'form.partNo.status.selected': 'Selected Part No.',
    'form.partNo.extBarStatus.none': 'No extension bar selected.',
    'form.partNo.extBarStatus.selected': 'Selected extension bar',

    'form.material.label': 'Workpiece material',
    'form.material.isoHint': 'ISO group',

    'form.mode.mode1': 'Mode 1',
    'form.mode.mode2': 'Mode 2',
    'form.mode.mode3': 'Mode 3',

    'form.modeDesc.mode1': 'On solid surface, Helical interpolation',
    'form.modeDesc.mode2': 'On solid surface, 1st hole/2nd: Helical interpolation',
    'form.modeDesc.mode3': 'Pre-bore / thin wall, boring + helical interpolation',

    'form.params.preBore': 'Pre-bore diameter',
    'form.params.machiningDia': 'Machining Diameter',
    'form.params.depth': 'Depth of Cut',
    'form.params.pitch': 'Pitch',

    'form.others.toolDia': 'Tool Diameter ØDc',
    'form.others.cuttingSpeed': 'Cutting Speed',
    'form.others.spindleSpeed': 'Spindle Speed',
    'form.others.teeth': 'Number of Teeth',
    'form.others.feedPerTooth': 'Feed per Tooth',
    'form.others.feedRate': 'Feed Rate',
    'form.others.toolNo': 'Tool Number',
    'form.others.coorSystem': 'Coordinate System',
    'form.others.coorX': 'Coordinate X',
    'form.others.coorY': 'Coordinate Y',
    'form.others.safeZ': 'Safe Height Z',
    'form.others.surfaceZ': 'Surface Coordinate Z',

    'form.actions.addTool': 'Add Tool',
    'form.actions.generate': 'Generate',
    'form.actions.export': 'Export',
    'form.actions.clear': 'Clear',

    'form.common.select': 'Please select...',
    'form.common.clear': 'Clear',

    'form.placeholders.mm': 'mm',
    'form.placeholders.m_min': 'm/min',
    'form.placeholders.rpm': 'RPM',
    'form.placeholders.mm_tooth': 'mm/tooth',
    'form.placeholders.mm_min': 'mm/min',
    'form.placeholders.selectTool': 'Please Select Tool',

    // Spindle power (added)
    'form.power.label': 'Spindle Power',
    'form.power.low': '< 12 kW (Low / Conservative)',
    'form.power.medium': '12–20 kW (Medium)',
    'form.power.high': '> 20 kW (High)',

    // Result (added)
    'form.results.machiningTime': 'Estimated Machining Time: {time} sec'
  },

  'ja-JP': {
    'nav.lang': '言語／地域',
    'nav.main': 'メインメニュー',
    'nav.home': 'ホーム',
    'nav.search': '検索',
    'nav.toggle': 'ナビゲーションを切り替え',
    'nav.region.apac': 'アジア／太平洋',
    'nav.region.americas_europe': 'アメリカ・ヨーロッパ',

    'helix.title': 'NCヘリカルドリル プログラムジェネレータ',

    'form.partNo.title': '部品番号を選択',
    'form.partNo.group1': '部品番号 (99321 シリーズ)',
    'form.partNo.group2': '部品番号 (99323 シリーズ)',
    'form.partNo.extBarLabel': '延長バーを選択',
    'form.partNo.status.none': '部品番号が選択されていません。',
    'form.partNo.status.selected': '選択された部品番号',
    'form.partNo.extBarStatus.none': '延長バーが選択されていません。',
    'form.partNo.extBarStatus.selected': '選択された延長バー',

    'form.material.label': 'ワーク材質',
    'form.material.isoHint': 'ISO グループ',

    'form.mode.mode1': 'モード1',
    'form.mode.mode2': 'モード2',
    'form.mode.mode3': 'モード3',

    'form.modeDesc.mode1': 'ソリッド加工、ヘリカル補間',
    'form.modeDesc.mode2': 'ソリッド加工、第一穴/第二穴：ヘリカル補間',
    'form.modeDesc.mode3': '下穴／薄板、拡孔＋ヘリカル補間',

    'form.params.preBore': '下穴径',
    'form.params.machiningDia': '加工径',
    'form.params.depth': '切り込み深さ',
    'form.params.pitch': 'ピッチ',

    'form.others.toolDia': '工具径 ØDc',
    'form.others.cuttingSpeed': '切削速度',
    'form.others.spindleSpeed': '主軸回転数',
    'form.others.teeth': '刃数',
    'form.others.feedPerTooth': '一刃当たりの送り',
    'form.others.feedRate': '送り速度',
    'form.others.toolNo': '工具番号',
    'form.others.coorSystem': '座標系',
    'form.others.coorX': '座標 X',
    'form.others.coorY': '座標 Y',
    'form.others.safeZ': '安全高さ Z',
    'form.others.surfaceZ': 'ワーク表面 Z',

    'form.actions.addTool': '工具を追加',
    'form.actions.generate': '生成',
    'form.actions.export': 'エクスポート',
    'form.actions.clear': 'クリア',

    'form.common.select': '選択してください...',
    'form.common.clear': 'クリア',

    'form.placeholders.mm': 'mm',
    'form.placeholders.m_min': 'm/min',
    'form.placeholders.rpm': 'RPM',
    'form.placeholders.mm_tooth': 'mm/tooth',
    'form.placeholders.mm_min': 'mm/min',
    'form.placeholders.selectTool': '工具を選択してください',

    // 主軸出力（追加）
    'form.power.label': '主軸出力',
    'form.power.low': '＜12 kW（低／保守）',
    'form.power.medium': '12–20 kW（中）',
    'form.power.high': '＞20 kW（高）',

    // 結果（追加）
    'form.results.machiningTime': '推定加工時間：{time}秒'
  },

  'de-DE': {
    'nav.lang': 'Sprache/Region',
    'nav.main': 'Hauptmenü',
    'nav.home': 'Startseite',
    'nav.search': 'Suche',
    'nav.toggle': 'Navigation umschalten',
    'nav.region.apac': 'Asien / Pazifik',
    'nav.region.americas_europe': 'Amerika & Europa',

    'helix.title': 'NC-Programmgenerator für NC-Helixbohrer',

    'form.partNo.title': 'Teilenummer auswählen',
    'form.partNo.group1': 'Teilenummer (Serie 99321)',
    'form.partNo.group2': 'Teilenummer (Serie 99323)',
    'form.partNo.extBarLabel': 'Verlängerung auswählen',
    'form.partNo.status.none': 'Keine Teilenummer ausgewählt.',
    'form.partNo.status.selected': 'Ausgewählte Teilenummer',
    'form.partNo.extBarStatus.none': 'Keine Verlängerung ausgewählt.',
    'form.partNo.extBarStatus.selected': 'Ausgewählte Verlängerung',

    'form.material.label': 'Werkstückmaterial',
    'form.material.isoHint': 'ISO-Gruppe',

    'form.mode.mode1': 'Modus 1',
    'form.mode.mode2': 'Modus 2',
    'form.mode.mode3': 'Modus 3',

    'form.modeDesc.mode1': 'Bearbeitung im Vollen, Helixinterpolation',
    'form.modeDesc.mode2': 'Bearbeitung im Vollen, 1. Bohrung/2.: Helixinterpolation',
    'form.modeDesc.mode3': 'Vorbohren/Dünnwandig, Aufbohren + Helixinterpolation',

    'form.params.preBore': 'Vorbohrdurchmesser',
    'form.params.machiningDia': 'Bearbeitungsdurchmesser',
    'form.params.depth': 'Schnitttiefe',
    'form.params.pitch': 'Steigung',

    'form.others.toolDia': 'Werkzeugdurchmesser ØDc',
    'form.others.cuttingSpeed': 'Schnittgeschwindigkeit',
    'form.others.spindleSpeed': 'Spindeldrehzahl',
    'form.others.teeth': 'Anzahl der Zähne',
    'form.others.feedPerTooth': 'Vorschub pro Zahn',
    'form.others.feedRate': 'Vorschubgeschwindigkeit',
    'form.others.toolNo': 'Werkzeugnummer',
    'form.others.coorSystem': 'Koordinatensystem',
    'form.others.coorX': 'Koordinate X',
    'form.others.coorY': 'Koordinate Y',
    'form.others.safeZ': 'Sicherheitshöhe Z',
    'form.others.surfaceZ': 'Werkstückoberfläche Z',

    'form.actions.addTool': 'Werkzeug hinzufügen',
    'form.actions.generate': 'Generieren',
    'form.actions.export': 'Exportieren',
    'form.actions.clear': 'Löschen',

    'form.common.select': 'Bitte auswählen...',
    'form.common.clear': 'Löschen',

    'form.placeholders.mm': 'mm',
    'form.placeholders.m_min': 'm/min',
    'form.placeholders.rpm': 'U/min',
    'form.placeholders.mm_tooth': 'mm/Zahn',
    'form.placeholders.mm_min': 'mm/min',
    'form.placeholders.selectTool': 'Bitte Werkzeug auswählen',

    // Spindelleistung (neu)
    'form.power.label': 'Spindelleistung',
    'form.power.low': '< 12 kW (Niedrig / konservativ)',
    'form.power.medium': '12–20 kW (Mittel)',
    'form.power.high': '> 20 kW (Hoch)',

    // Ergebnis (neu)
    'form.results.machiningTime': 'Geschätzte Bearbeitungszeit: {time} s'
  },

  'es-ES': {
    'nav.lang': 'Idioma/Región',
    'nav.main': 'Menú principal',
    'nav.home': 'Inicio',
    'nav.search': 'Buscar',
    'nav.toggle': 'Alternar navegación',
    'nav.region.apac': 'Asia / Pacífico',
    'nav.region.americas_europe': 'Américas y Europa',

    'helix.title': 'Generador de Programas NC para Broca Helicoidal NC',

    'form.partNo.title': 'Seleccionar N.º de pieza',
    'form.partNo.group1': 'N.º de pieza (Serie 99321)',
    'form.partNo.group2': 'N.º de pieza (Serie 99323)',
    'form.partNo.extBarLabel': 'Seleccionar barra de extensión',
    'form.partNo.status.none': 'No se ha seleccionado N.º de pieza.',
    'form.partNo.status.selected': 'N.º de pieza seleccionado',
    'form.partNo.extBarStatus.none': 'No se ha seleccionado barra de extensión.',
    'form.partNo.extBarStatus.selected': 'Barra de extensión seleccionada',

    'form.material.label': 'Material de la pieza',
    'form.material.isoHint': 'Grupo ISO',

    'form.mode.mode1': 'Modo 1',
    'form.mode.mode2': 'Modo 2',
    'form.mode.mode3': 'Modo 3',

    'form.modeDesc.mode1': 'En superficie sólida, Interpolación helicoidal',
    'form.modeDesc.mode2': 'En superficie sólida, 1er agujero/2do: Interpolación helicoidal',
    'form.modeDesc.mode3': 'Pretaladro/chapas finas, alesado + interpolación helicoidal',

    'form.params.preBore': 'Diámetro de pre-taladro',
    'form.params.machiningDia': 'Diámetro de mecanizado',
    'form.params.depth': 'Profundidad de corte',
    'form.params.pitch': 'Paso',

    'form.others.toolDia': 'Diámetro de herramienta ØDc',
    'form.others.cuttingSpeed': 'Velocidad de corte',
    'form.others.spindleSpeed': 'Velocidad del husillo',
    'form.others.teeth': 'Número de dientes',
    'form.others.feedPerTooth': 'Avance por diente',
    'form.others.feedRate': 'Velocidad de avance',
    'form.others.toolNo': 'Número de herramienta',
    'form.others.coorSystem': 'Sistema de coordenadas',
    'form.others.coorX': 'Coordenada X',
    'form.others.coorY': 'Coordenada Y',
    'form.others.safeZ': 'Altura de seguridad Z',
    'form.others.surfaceZ': 'Coordenada de superficie Z',

    'form.actions.addTool': 'Añadir herramienta',
    'form.actions.generate': 'Generar',
    'form.actions.export': 'Exportar',
    'form.actions.clear': 'Limpiar',

    'form.common.select': 'Por favor seleccione...',
    'form.common.clear': 'Limpiar',

    'form.placeholders.mm': 'mm',
    'form.placeholders.m_min': 'm/min',
    'form.placeholders.rpm': 'RPM',
    'form.placeholders.mm_tooth': 'mm/diente',
    'form.placeholders.mm_min': 'mm/min',
    'form.placeholders.selectTool': 'Seleccione la herramienta',

    // Potencia del husillo (nuevo)
    'form.power.label': 'Potencia del husillo',
    'form.power.low': '< 12 kW (Baja / conservadora)',
    'form.power.medium': '12–20 kW (Media)',
    'form.power.high': '> 20 kW (Alta)',

    // Resultado (nuevo)
    'form.results.machiningTime': 'Tiempo de mecanizado estimado: {time} seg'
  }
};


  const STORAGE_KEY = 'site.lang';
  let currentLang = 'zh-TW';

  function getInitialLang() {
    const q = new URL(window.location.href).searchParams.get('lang');
    return q || localStorage.getItem(STORAGE_KEY) || 'zh-TW';
  }

  function get(key, fallback = '') {
    const dict = DICT[currentLang] || DICT['zh-TW'];
    return dict[key] || fallback || `[${key}]`;
  }

  function setLang(lang) {
    currentLang = DICT[lang] ? lang : 'zh-TW';
    const dict = DICT[currentLang];

    document.querySelectorAll('[data-i18n], [data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key && dict[key]) {
        el.textContent = dict[key];
      }
      const placeholderKey = el.getAttribute('data-i18n-placeholder');
      if (placeholderKey && dict[placeholderKey]) {
        el.setAttribute('placeholder', dict[placeholderKey]);
      }
    });

    // Update arbitrary attributes via data-i18n-attrs (e.g., title, aria-label, value)
    document.querySelectorAll('[data-i18n-attrs]').forEach(el => {
      const attrs = el.getAttribute('data-i18n-attrs').split(',').map(s => s.trim()).filter(Boolean);
      attrs.forEach(attr => {
        const key = el.getAttribute(`data-i18n-${attr}`);
        if (key && dict[key]) el.setAttribute(attr, dict[key]);
      });
    });
    localStorage.setItem(STORAGE_KEY, currentLang);

    // Manually trigger updates for dynamic elements that might need it
    if (typeof window.onPartSelect === 'function' && document.getElementById('partsGroup1')) {
      const activeSelect = document.getElementById('partsGroup1').selectedIndex > 0
        ? document.getElementById('partsGroup1')
        : document.getElementById('partsGroup2');
      onPartSelect(activeSelect);
    }
    if (typeof window.setMode === 'function' && typeof window.currentMode !== 'undefined') {
      setMode(window.currentMode);
    }
  }

  function initLangMenu() {
    document.querySelectorAll('.country-item:not(.disabled)').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        const lang = a.getAttribute('data-lang');
        if (lang) setLang(lang);
      });
    });
  }


  document.addEventListener('DOMContentLoaded', () => {
    setLang(getInitialLang());
    initLangMenu();
  });

  window.LangCtl = { setLang, get };
})();
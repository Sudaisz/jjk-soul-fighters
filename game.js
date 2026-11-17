// JJK Soul Fighters v6 — BEYOND
// Fixed unlock, Jikan images + strong fallbacks, error handling

const CHARACTERS = [
  {id:'yuji',name:'Yuji Itadori',search:'Itadori',tier:'Grade 4',stage:'Base',cost:0,rating:79,maxHp:118,
   info:'Vessel of Sukuna. Superhuman strength.',
   moves:[{name:'Divergent Fist',dmg:21,desc:'Delayed impact'},{name:'Black Flash',dmg:36,desc:'Critical timing',chance:0.33},{name:'Manji Kick',dmg:24,desc:'Spinning kick'},{name:'Cursed Punch',dmg:28,desc:'Reinforced blow'}]},
  {id:'megumi',name:'Megumi Fushiguro',search:'Fushiguro',tier:'Grade 2',stage:'Base',cost:0,rating:77,maxHp:102,
   info:'Ten Shadows Technique user.',
   moves:[{name:'Divine Dogs',dmg:22,desc:'Twin shikigami'},{name:'Nue',dmg:28,desc:'Lightning bird'},{name:'Toad',dmg:18,desc:'Bind'},{name:'Chimera Shadow',dmg:33,desc:'Domain start'}]},
  {id:'nobara',name:'Nobara Kugisaki',search:'Kugisaki',tier:'Grade 3',stage:'Base',cost:0,rating:75,maxHp:96,
   info:'Straw Doll Technique.',
   moves:[{name:'Resonance',dmg:26,desc:'Nail link'},{name:'Hairpin',dmg:30,desc:'Explosive nails'},{name:'Straw Doll',dmg:22,desc:'Cursed doll'},{name:'Black Flash',dmg:36,desc:'Critical',chance:0.28}]},
  {id:'maki',name:'Maki Zenin',search:'Maki',tier:'Grade 4',stage:'Base',cost:0,rating:78,maxHp:112,
   info:'Heavenly Restriction. Cursed tools.',
   moves:[{name:'Playful Cloud',dmg:27,desc:'Staff'},{name:'Cursed Tool',dmg:25,desc:'Slash'},{name:'Speed Blitz',dmg:20,desc:'Speed'},{name:'Precision',dmg:23,desc:'Targeted'}]},
  {id:'panda',name:'Panda',search:'Panda',tier:'Grade 2',stage:'Base',cost:40,rating:80,maxHp:128,
   info:'Cursed corpse with three cores.',
   moves:[{name:'Gorilla Mode',dmg:31,desc:'Power'},{name:'Drumming',dmg:25,desc:'Vibration'},{name:'Heavy Punch',dmg:23,desc:'Strike'},{name:'Sibling Bond',dmg:19,desc:'Support'}]},
  {id:'inumaki',name:'Toge Inumaki',search:'Inumaki',tier:'Semi-Grade 1',stage:'Base',cost:55,rating:83,maxHp:92,
   info:'Cursed Speech user.',
   moves:[{name:"Don't Move",dmg:16,desc:'Bind'},{name:'Explode',dmg:34,desc:'Blast'},{name:'Get Crushed',dmg:29,desc:'Crush'},{name:'Twist',dmg:27,desc:'Twist'}]},
  {id:'nanami',name:'Kento Nanami',search:'Nanami',tier:'Grade 1',stage:'Base',cost:80,rating:87,maxHp:132,
   info:'Ratio Technique specialist.',
   moves:[{name:'Ratio Technique',dmg:30,desc:'7:3'},{name:'Overtime',dmg:38,desc:'After hours'},{name:'Collapse',dmg:26,desc:'Break'},{name:'Blunt Strike',dmg:22,desc:'Blade'}]},
  {id:'todo',name:'Aoi Todo',search:'Todo',tier:'Grade 1',stage:'Base',cost:95,rating:89,maxHp:142,
   info:'Boogie Woogie. Black Flash machine.',
   moves:[{name:'Boogie Woogie',dmg:24,desc:'Swap'},{name:'Black Flash',dmg:42,desc:'Massive crit',chance:0.4},{name:'Simple Domain',dmg:20,desc:'Defense'},{name:'Brotherhood',dmg:28,desc:'Power'}]},
  {id:'yuta',name:'Yuta Okkotsu',search:'Yuta',tier:'Special Grade',stage:'Base',cost:200,rating:95,maxHp:158,
   info:'Rika. Copy technique.',
   moves:[{name:'Rika',dmg:38,desc:'Queen of Curses'},{name:'Cursed Speech',dmg:23,desc:'Command'},{name:'Thin Ice Breaker',dmg:32,desc:'Copy'},{name:'Love Beam',dmg:44,desc:'Output'}]},
  {id:'maki_aw',name:'Maki Zenin',search:'Maki',tier:'Special',stage:'Awakened',cost:250,rating:94,maxHp:168,
   info:'Awakened. Toji-level body + soul sight.',
   moves:[{name:'Split Soul Katana',dmg:40,desc:'Soul cut'},{name:'Toji Speed',dmg:34,desc:'Restriction'},{name:'Playful Cloud Max',dmg:37,desc:'Staff'},{name:'Perfect Sight',dmg:30,desc:'Soul vision'}]},
  {id:'toji',name:'Toji Fushiguro',search:'Toji',tier:'Special',stage:'Heavenly Restriction',cost:350,rating:96,maxHp:175,
   info:'The Sorcerer Killer.',
   moves:[{name:'Inverted Spear',dmg:42,desc:'Nullify'},{name:'Playful Cloud',dmg:38,desc:'Staff'},{name:'Chain of Thousand',dmg:35,desc:'Chain'},{name:'Assassin Strike',dmg:48,desc:'Kill shot',chance:0.25}]},
  {id:'geto',name:'Suguru Geto',search:'Geto',tier:'Special Grade',stage:'Curse User',cost:320,rating:93,maxHp:162,
   info:'Curse Manipulation. Uzumaki.',
   moves:[{name:'Uzumaki',dmg:47,desc:'Maximum'},{name:'Curse Swarm',dmg:34,desc:'Swarm'},{name:'Playful Cloud',dmg:31,desc:'Tool'},{name:'Womb Profusion',dmg:52,desc:'Domain',chance:0.2}]},
  {id:'gojo',name:'Satoru Gojo',search:'Gojo',tier:'The Strongest',stage:'Limitless',cost:500,rating:99,maxHp:195,
   info:'Limitless + Six Eyes.',
   moves:[{name:'Infinity',dmg:14,desc:'Untouchable'},{name:'Blue',dmg:40,desc:'Attraction'},{name:'Red',dmg:46,desc:'Repulsion'},{name:'Hollow Purple',dmg:72,desc:'Imaginary mass',chance:0.22}]},
  {id:'sukuna',name:'Ryomen Sukuna',search:'Sukuna',tier:'King of Curses',stage:'Heian',cost:550,rating:99,maxHp:215,
   info:'King of Curses. Malevolent Shrine.',
   moves:[{name:'Dismantle',dmg:36,desc:'Slash'},{name:'Cleave',dmg:43,desc:'Adjust'},{name:'Fire Arrow',dmg:38,desc:'Open'},{name:'Malevolent Shrine',dmg:78,desc:'Domain',chance:0.18}]}
];

const BOTS = [
  {name:'Grade 4 Spirit',seed:'spirit',maxHp:80,power:0.7},
  {name:'Finger Bearer',seed:'finger',maxHp:120,power:0.95},
  {name:'Hanami',seed:'hanami',maxHp:150,power:1.15},
  {name:'Jogo',seed:'jogo',maxHp:160,power:1.25},
  {name:'Mahito',seed:'mahito',maxHp:170,power:1.35},
  {name:'Special Grade',seed:'special',maxHp:195,power:1.55}
];

// Image cache from Jikan
const imageCache = {};

function fallbackImg(seed) {
  return `https://api.dicebear.com/9.x/adventurer/svg?seed=${encodeURIComponent(seed)}&backgroundColor=1a0f2e,2d1a4d`;
}

async function loadJikanImages() {
  const status = document.getElementById('status-msg');
  const endpoints = [
    'https://jikan.lucashdo.com/v1/anime/40748/characters',
    'https://api.jikan.moe/v4/anime/40748/characters'
  ];

  if (status) status.textContent = 'Loading character images...';

  for (const endpoint of endpoints) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 9000);
      let res;
      try {
        res = await fetch(endpoint, { signal: controller.signal, cache: 'no-store' });
      } finally {
        clearTimeout(timeout);
      }
      if (!res.ok) throw new Error('Image API returned ' + res.status);

      const payload = await res.json();
      const list = Array.isArray(payload.data) ? payload.data : Array.isArray(payload) ? payload : [];
      if (!list.length) throw new Error('Image API returned no characters');

      list.forEach(item => {
        const character = item.character || item;
        const name = (character.name || '').toLowerCase();
        const images = character.images || item.images || {};
        const url = images.webp?.image_url || images.jpg?.image_url || images.image_url;
        if (!url) return;

        CHARACTERS.forEach(c => {
          const search = c.search.toLowerCase();
          const firstName = c.name.split(' ')[0].toLowerCase();
          if (name.includes(search) || name.includes(firstName)) {
            if (!imageCache[c.id]) imageCache[c.id] = url;
          }
        });
      });

      if (Object.keys(imageCache).length > 0) {
        if (status) status.textContent = 'Character images loaded';
        setTimeout(() => { if (status) status.textContent = ''; }, 1500);
        return;
      }
      throw new Error('No matching character images found');
    } catch (err) {
      console.warn('Character image source failed:', endpoint, err);
    }
  }

  if (status) status.textContent = 'Using fallback images';
  setTimeout(() => { if (status) status.textContent = ''; }, 2000);
}

function getCharImg(c) {
  return imageCache[c.id] || fallbackImg(c.id);
}

function getBotImg(seed) {
  return fallbackImg(seed);
}

// ===== STATE & AUTH =====
let state = {
  user: null,
  soul: 0,
  unlocked: ['yuji','megumi','nobara','maki'],
  selected: null,
  player: null,
  enemy: null,
  playerHp: 0,
  enemyHp: 0,
  turn: 'player'
};

function getAccounts() {
  try { return JSON.parse(localStorage.getItem('jjk_accounts') || '{}'); }
  catch { return {}; }
}
function saveAccounts(acc) {
  localStorage.setItem('jjk_accounts', JSON.stringify(acc));
}
function simpleHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = ((h << 5) - h) + str.charCodeAt(i) | 0;
  return String(h);
}

function register() {
  try {
    const user = document.getElementById('reg-user').value.trim().toLowerCase();
    const pass = document.getElementById('reg-pass').value;
    const pass2 = document.getElementById('reg-pass2').value;
    if (user.length < 3) return alert('Username must be at least 3 characters');
    if (pass.length < 4) return alert('Password must be at least 4 characters');
    if (pass !== pass2) return alert('Passwords do not match');
    const acc = getAccounts();
    if (acc[user]) return alert('Username already taken');
    // New accounts start with 150 Soul Energy so they can unlock early characters
    acc[user] = { pass: simpleHash(pass), soul: 150, unlocked: ['yuji','megumi','nobara','maki'] };
    saveAccounts(acc);
    alert('Account created with 150 Soul Energy! Please login.');
    showLoginForm();
  } catch (e) {
    alert('Register failed: ' + e.message);
  }
}

function login() {
  try {
    const user = document.getElementById('login-user').value.trim().toLowerCase();
    const pass = document.getElementById('login-pass').value;
    const acc = getAccounts();
    if (!acc[user] || acc[user].pass !== simpleHash(pass)) {
      return alert('Wrong username or password');
    }
    state.user = user;
    state.soul = acc[user].soul ?? 0;
    state.unlocked = Array.isArray(acc[user].unlocked) ? acc[user].unlocked : ['yuji','megumi','nobara','maki'];
    localStorage.setItem('jjk_current_user', user);
    enterGame();
  } catch (e) {
    alert('Login failed: ' + e.message);
  }
}

function logout() {
  saveProgress();
  state.user = null;
  localStorage.removeItem('jjk_current_user');
  showScreen('screen-login');
  showLoginForm();
}

function saveProgress() {
  if (!state.user) return;
  try {
    const acc = getAccounts();
    if (acc[state.user]) {
      acc[state.user].soul = state.soul;
      acc[state.user].unlocked = state.unlocked;
      saveAccounts(acc);
    }
  } catch (e) {
    console.warn('Save failed', e);
  }
}

function showLoginForm() {
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('register-form').style.display = 'none';
}
function showRegisterForm() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('register-form').style.display = 'block';
}

async function enterGame() {
  document.getElementById('user-display').textContent = state.user;
  updateSoulUI();
  showScreen('screen-select');
  await loadJikanImages();
  renderChars();
}

// ===== UI =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}
function updateSoulUI() {
  const el = document.getElementById('soul-count');
  if (el) el.textContent = state.soul;
}

function unlockCharacter(charId) {
  const c = CHARACTERS.find(x => x.id === charId);
  if (!c) return;
  if (state.unlocked.includes(charId)) return;

  if (state.soul < c.cost) {
    alert(`Not enough Soul Energy!\n\nNeed: ${c.cost} SE\nYou have: ${state.soul} SE\n\n${c.info}`);
    return;
  }

  const ok = confirm(`Unlock ${c.name} (${c.stage})?\n\n${c.info}\n\nCost: ${c.cost} Soul Energy`);
  if (!ok) return;

  state.soul -= c.cost;
  state.unlocked.push(charId);
  saveProgress();
  updateSoulUI();
  renderChars();
  alert(`Unlocked ${c.name}!`);
}

function selectCharacter(charId) {
  if (!state.unlocked.includes(charId)) return;
  state.selected = charId;
  const btn = document.getElementById('btn-fight');
  if (btn) btn.disabled = false;
  renderChars();
}

function renderChars() {
  const grid = document.getElementById('char-grid');
  if (!grid) return;
  grid.innerHTML = '';

  CHARACTERS.forEach(c => {
    const unlocked = state.unlocked.includes(c.id);
    const card = document.createElement('div');
    card.className = `char-card ${unlocked ? 'unlocked' : 'locked'} ${state.selected === c.id ? 'selected' : ''}`;

    const imgUrl = getCharImg(c);

    card.innerHTML = `
      <div class="card-img-wrap">
        <img class="card-img" src="${imgUrl}" alt="${c.name}" loading="lazy"
          onerror="this.onerror=null;this.src='${fallbackImg(c.id)}';this.classList.add('fallback');" />
        <div class="rating">${c.rating}</div>
        ${!unlocked ? `<div class="cost-badge">${c.cost} SE</div>` : ''}
      </div>
      <div class="card-body">
        <div class="name">${c.name}</div>
        <div class="meta">${c.tier} • ${c.stage}</div>
        ${!unlocked ? `<button class="btn unlock-btn" type="button">UNLOCK</button>` : ''}
      </div>
    `;

    // Unlock button
    const unlockBtn = card.querySelector('.unlock-btn');
    if (unlockBtn) {
      unlockBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        unlockCharacter(c.id);
      });
    }

    // Select unlocked card
    card.addEventListener('click', () => {
      if (unlocked) selectCharacter(c.id);
    });

    grid.appendChild(card);
  });
}

// ===== BATTLE =====
function startBattle() {
  try {
    const char = CHARACTERS.find(c => c.id === state.selected);
    if (!char) return;

    const botIndex = Math.min(Math.floor(state.unlocked.length / 2.5) + Math.floor(Math.random() * 2), BOTS.length - 1);
    const bot = BOTS[botIndex];

    state.player = { ...char };
    state.enemy = {
      name: bot.name,
      seed: bot.seed,
      maxHp: Math.floor(bot.maxHp * (0.9 + Math.random() * 0.25)),
      power: bot.power,
      moves: [
        { name: 'Cursed Slash', dmg: Math.floor(16 * bot.power) },
        { name: 'Domain Pulse', dmg: Math.floor(24 * bot.power) },
        { name: 'Malevolent Hit', dmg: Math.floor(20 * bot.power) },
        { name: 'Final Technique', dmg: Math.floor(30 * bot.power) }
      ]
    };

    state.playerHp = state.player.maxHp;
    state.enemyHp = state.enemy.maxHp;
    state.turn = 'player';

    document.getElementById('player-name').textContent = state.player.name + (state.player.stage !== 'Base' ? ` [${state.player.stage}]` : '');
    document.getElementById('enemy-name').textContent = state.enemy.name;
    document.getElementById('player-portrait').style.backgroundImage = `url('${getCharImg(state.player)}')`;
    document.getElementById('enemy-portrait').style.backgroundImage = `url('${getBotImg(state.enemy.seed)}')`;

    updateBars();
    setLog(`${state.player.name} enters the courtyard...`);
    renderMoves();
    showScreen('screen-battle');
  } catch (e) {
    alert('Could not start battle: ' + e.message);
  }
}

function updateBars() {
  try {
    document.getElementById('player-hp').style.width = Math.max(0, (state.playerHp / state.player.maxHp) * 100) + '%';
    document.getElementById('enemy-hp').style.width = Math.max(0, (state.enemyHp / state.enemy.maxHp) * 100) + '%';
    document.getElementById('player-hp-text').textContent = `${Math.max(0, Math.ceil(state.playerHp))}/${state.player.maxHp}`;
    document.getElementById('enemy-hp-text').textContent = `${Math.max(0, Math.ceil(state.enemyHp))}/${state.enemy.maxHp}`;
  } catch (e) {}
}

function setLog(m) {
  const el = document.getElementById('battle-log');
  if (el) el.textContent = m;
}

function renderMoves() {
  const box = document.getElementById('moves-container');
  if (!box) return;
  box.innerHTML = '';
  state.player.moves.forEach((m, i) => {
    const b = document.createElement('button');
    b.className = 'move-btn';
    b.disabled = state.turn !== 'player';
    b.innerHTML = `<span class="move-name">${m.name}</span><span class="move-desc">${m.desc} • ${m.dmg}</span>`;
    b.onclick = () => playerAttack(i);
    box.appendChild(b);
  });
}

function showAttackPopup(char, move, dmg, isCrit) {
  try {
    const p = document.getElementById('attack-popup');
    if (!p) return;
    document.getElementById('popup-img').style.backgroundImage = `url('${getCharImg(char)}')`;
    document.getElementById('popup-char').textContent = char.name;
    document.getElementById('popup-move').textContent = isCrit ? `BLACK FLASH • ${move.name}` : move.name;
    document.getElementById('popup-desc').textContent = move.desc;
    document.getElementById('popup-dmg').textContent = `${dmg} DMG`;
    p.classList.remove('hidden');
    const time = (isCrit || /Domain|Purple|Shrine|Uzumaki|Rika/.test(move.name)) ? 1600 : 1100;
    setTimeout(() => p.classList.add('hidden'), time);
  } catch (e) {}
}

function playerAttack(i) {
  if (state.turn !== 'player') return;
  try {
    const move = state.player.moves[i];
    let dmg = move.dmg;
    let isCrit = false;
    if (move.chance && Math.random() < move.chance) {
      dmg = Math.floor(dmg * 1.65);
      isCrit = true;
    }
    state.enemyHp -= dmg;

    const pp = document.getElementById('player-portrait');
    const ep = document.getElementById('enemy-portrait');
    if (pp) { pp.classList.add('attack'); setTimeout(() => pp.classList.remove('attack'), 260); }
    if (ep) { ep.classList.add('hit'); setTimeout(() => ep.classList.remove('hit'), 300); }

    showAttackPopup(state.player, move, dmg, isCrit);
    showDamage(dmg, isCrit);
    showEffect(isCrit ? '⚡' : '💥');
    shake();

    setLog(isCrit ? `BLACK FLASH! ${move.name} for ${dmg}!` : `${state.player.name} uses ${move.name} → ${dmg}`);
    updateBars();
    state.turn = 'enemy';
    renderMoves();

    if (state.enemyHp <= 0) {
      setTimeout(() => endBattle(true), 1700);
      return;
    }
    setTimeout(enemyTurn, 1700);
  } catch (e) {
    console.error(e);
  }
}

function enemyTurn() {
  if (state.enemyHp <= 0) return;
  try {
    const move = state.enemy.moves[Math.floor(Math.random() * state.enemy.moves.length)];
    let dmg = Math.max(10, move.dmg + Math.floor(Math.random() * 7) - 2);
    if (state.player.id === 'gojo' && Math.random() < 0.4) {
      dmg = Math.floor(dmg * 0.35);
      setLog(`Infinity reduces damage to ${dmg}`);
    } else {
      setLog(`${state.enemy.name} uses ${move.name} → ${dmg}`);
    }
    state.playerHp -= dmg;

    const ep = document.getElementById('enemy-portrait');
    const pp = document.getElementById('player-portrait');
    if (ep) { ep.classList.add('attack'); setTimeout(() => ep.classList.remove('attack'), 260); }
    if (pp) { pp.classList.add('hit'); setTimeout(() => pp.classList.remove('hit'), 300); }

    showDamage(dmg, false);
    showEffect('💢');
    updateBars();

    if (state.playerHp <= 0) {
      setTimeout(() => endBattle(false), 900);
      return;
    }
    state.turn = 'player';
    renderMoves();
  } catch (e) {
    console.error(e);
  }
}

function showEffect(e) {
  const el = document.getElementById('battle-effect');
  if (!el) return;
  el.textContent = e;
  el.classList.remove('show');
  void el.offsetWidth;
  el.classList.add('show');
}
function showDamage(n, c) {
  const el = document.getElementById('damage-float');
  if (!el) return;
  el.textContent = c ? `-${n}!` : `-${n}`;
  el.style.color = c ? '#fbbf24' : '#f87171';
  el.classList.remove('show');
  void el.offsetWidth;
  el.classList.add('show');
}
function shake() {
  const a = document.getElementById('arena');
  if (!a) return;
  a.classList.remove('shake-screen');
  void a.offsetWidth;
  a.classList.add('shake-screen');
}

function endBattle(won) {
  const t = document.getElementById('result-title');
  const s = document.getElementById('result-soul');
  if (won) {
    const gain = 55 + Math.floor(Math.random() * 50) + state.unlocked.length * 6;
    state.soul += gain;
    saveProgress();
    t.textContent = 'VICTORY';
    t.className = 'result-title win';
    s.textContent = `+${gain} Soul Energy`;
  } else {
    t.textContent = 'DEFEATED';
    t.className = 'result-title lose';
    s.textContent = 'No Soul Energy gained';
  }
  showScreen('screen-result');
}

// Wire events safely
function bind(id, fn) {
  const el = document.getElementById(id);
  if (el) el.onclick = fn;
}

bind('btn-login', login);
bind('btn-register', register);
bind('btn-show-register', showRegisterForm);
bind('btn-show-login', showLoginForm);
bind('btn-logout', logout);
bind('btn-fight', startBattle);
bind('btn-again', () => {
  if (state.selected) startBattle();
  else { updateSoulUI(); renderChars(); showScreen('screen-select'); }
});
bind('btn-menu', () => { updateSoulUI(); renderChars(); showScreen('screen-select'); });

// Auto login
(async function init() {
  try {
    const u = localStorage.getItem('jjk_current_user');
    const acc = getAccounts();
    if (u && acc[u]) {
      state.user = u;
      state.soul = acc[u].soul ?? 0;
      state.unlocked = Array.isArray(acc[u].unlocked) ? acc[u].unlocked : ['yuji','megumi','nobara','maki'];
      await enterGame();
    }
  } catch (e) {
    console.warn('Init error', e);
  }
})();

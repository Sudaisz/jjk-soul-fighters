// ===== JJK SOUL FIGHTERS v2 =====
// Created by BEYOND

const CHARACTERS = [
  // ===== STARTERS =====
  {
    id: 'yuji',
    name: 'Yuji Itadori',
    emoji: '👊',
    tier: 'Grade 4',
    stage: 'Base',
    cost: 0,
    maxHp: 115,
    moves: [
      { name: 'Divergent Fist', dmg: 20, desc: 'Delayed cursed impact' },
      { name: 'Black Flash', dmg: 34, desc: 'Critical timing', chance: 0.32 },
      { name: 'Manji Kick', dmg: 23, desc: 'Spinning kick' },
      { name: 'Cursed Energy Punch', dmg: 27, desc: 'Reinforced fist' }
    ]
  },
  {
    id: 'megumi',
    name: 'Megumi Fushiguro',
    emoji: '🐺',
    tier: 'Grade 2',
    stage: 'Base',
    cost: 0,
    maxHp: 100,
    moves: [
      { name: 'Divine Dogs', dmg: 21, desc: 'Twin shikigami' },
      { name: 'Nue', dmg: 27, desc: 'Lightning bird' },
      { name: 'Toad', dmg: 17, desc: 'Tongue bind' },
      { name: 'Chimera Shadow', dmg: 32, desc: 'Domain start' }
    ]
  },
  {
    id: 'nobara',
    name: 'Nobara Kugisaki',
    emoji: '🔨',
    tier: 'Grade 3',
    stage: 'Base',
    cost: 0,
    maxHp: 95,
    moves: [
      { name: 'Resonance', dmg: 25, desc: 'Nail link' },
      { name: 'Hairpin', dmg: 29, desc: 'Explosive nails' },
      { name: 'Straw Doll', dmg: 21, desc: 'Cursed doll' },
      { name: 'Black Flash', dmg: 35, desc: 'Critical', chance: 0.28 }
    ]
  },
  {
    id: 'maki',
    name: 'Maki Zenin',
    emoji: '🗡️',
    tier: 'Grade 4',
    stage: 'Base',
    cost: 0,
    maxHp: 110,
    moves: [
      { name: 'Playful Cloud', dmg: 26, desc: 'Three-section staff' },
      { name: 'Cursed Tool Slash', dmg: 24, desc: 'Weapon attack' },
      { name: 'Speed Blitz', dmg: 19, desc: 'Enhanced agility' },
      { name: 'Precision Strike', dmg: 22, desc: 'Targeted hit' }
    ]
  },
  {
    id: 'panda',
    name: 'Panda',
    emoji: '🐼',
    tier: 'Grade 2',
    stage: 'Base',
    cost: 40,
    maxHp: 125,
    moves: [
      { name: 'Gorilla Mode', dmg: 30, desc: 'Power core' },
      { name: 'Unblockable Drumming', dmg: 24, desc: 'Core vibration' },
      { name: 'Cursed Energy Punch', dmg: 22, desc: 'Heavy hit' },
      { name: 'Sibling Bond', dmg: 18, desc: 'Support boost' }
    ]
  },
  {
    id: 'inumaki',
    name: 'Toge Inumaki',
    emoji: '🍙',
    tier: 'Semi-Grade 1',
    stage: 'Base',
    cost: 60,
    maxHp: 90,
    moves: [
      { name: 'Don’t Move', dmg: 15, desc: 'Cursed Speech bind' },
      { name: 'Explode', dmg: 33, desc: 'Forced explosion' },
      { name: 'Get Crushed', dmg: 28, desc: 'Crush command' },
      { name: 'Twist', dmg: 26, desc: 'Body twist' }
    ]
  },

  // ===== GRADE 1 / MID =====
  {
    id: 'nanami',
    name: 'Kento Nanami',
    emoji: '💼',
    tier: 'Grade 1',
    stage: 'Base',
    cost: 90,
    maxHp: 130,
    moves: [
      { name: 'Ratio Technique', dmg: 29, desc: '7:3 weak point' },
      { name: 'Overtime', dmg: 36, desc: 'After 6PM power' },
      { name: 'Collapse', dmg: 25, desc: 'Structural break' },
      { name: 'Blunt Wrap', dmg: 21, desc: 'Cloth blade' }
    ]
  },
  {
    id: 'todo',
    name: 'Aoi Todo',
    emoji: '💪',
    tier: 'Grade 1',
    stage: 'Base',
    cost: 110,
    maxHp: 140,
    moves: [
      { name: 'Boogie Woogie', dmg: 23, desc: 'Position swap' },
      { name: 'Black Flash', dmg: 40, desc: 'Massive critical', chance: 0.38 },
      { name: 'Simple Domain', dmg: 19, desc: 'Defense' },
      { name: 'Brotherhood', dmg: 27, desc: 'Emotional power' }
    ]
  },
  {
    id: 'mechamaru',
    name: 'Kokichi Mechamaru',
    emoji: '🤖',
    tier: 'Grade 1',
    stage: 'Base',
    cost: 100,
    maxHp: 135,
    moves: [
      { name: 'Ultimate Mechamaru', dmg: 31, desc: 'Mode Absolute' },
      { name: 'Ultra Cannon', dmg: 34, desc: 'Energy blast' },
      { name: 'Boost On', dmg: 24, desc: 'Speed surge' },
      { name: 'Miracle Cannon', dmg: 38, desc: 'Charged shot' }
    ]
  },
  {
    id: 'kamo',
    name: 'Noritoshi Kamo',
    emoji: '🩸',
    tier: 'Semi-Grade 1',
    stage: 'Base',
    cost: 85,
    maxHp: 115,
    moves: [
      { name: 'Piercing Blood', dmg: 30, desc: 'Blood beam' },
      { name: 'Convergence', dmg: 22, desc: 'Blood compress' },
      { name: 'Flowing Red Scale', dmg: 26, desc: 'Body boost' },
      { name: 'Crimson Binding', dmg: 20, desc: 'Blood bind' }
    ]
  },
  {
    id: 'mai',
    name: 'Mai Zenin',
    emoji: '🔫',
    tier: 'Grade 3',
    stage: 'Base',
    cost: 50,
    maxHp: 85,
    moves: [
      { name: 'Construction Bullet', dmg: 28, desc: 'Created bullet' },
      { name: 'Sniper Shot', dmg: 24, desc: 'Long range' },
      { name: 'Cursed Energy Shot', dmg: 20, desc: 'Reinforced round' },
      { name: 'Quick Draw', dmg: 18, desc: 'Fast fire' }
    ]
  },

  // ===== AWAKENED / STRONG FORMS =====
  {
    id: 'maki_awakened',
    name: 'Maki Zenin',
    emoji: '⚔️',
    tier: 'Special',
    stage: 'Awakened',
    cost: 280,
    maxHp: 165,
    moves: [
      { name: 'Split Soul Katana', dmg: 38, desc: 'Soul-cutting blade' },
      { name: 'Toji-level Speed', dmg: 32, desc: 'Heavenly Restriction' },
      { name: 'Playful Cloud Max', dmg: 35, desc: 'Full power staff' },
      { name: 'Perfect Sight', dmg: 28, desc: 'See the soul' }
    ]
  },
  {
    id: 'yuta',
    name: 'Yuta Okkotsu',
    emoji: '🖤',
    tier: 'Special Grade',
    stage: 'Base',
    cost: 220,
    maxHp: 155,
    moves: [
      { name: 'Rika Manifest', dmg: 36, desc: 'Queen of Curses' },
      { name: 'Cursed Speech', dmg: 22, desc: 'Copied command' },
      { name: 'Thin Ice Breaker', dmg: 30, desc: 'Technique copy' },
      { name: 'Pure Love Beam', dmg: 42, desc: 'Massive output' }
    ]
  },

  // ===== TOP TIER =====
  {
    id: 'toji',
    name: 'Toji Fushiguro',
    emoji: '⛓️',
    tier: 'Special',
    stage: 'Heavenly Restriction',
    cost: 380,
    maxHp: 170,
    moves: [
      { name: 'Inverted Spear', dmg: 40, desc: 'Nullifies techniques' },
      { name: 'Playful Cloud', dmg: 36, desc: 'Master staff' },
      { name: 'Chain of a Thousand',
        dmg: 33, desc: 'Long range chain' },
      { name: 'Assassin Strike', dmg: 45, desc: 'Perfect kill shot', chance: 0.22 }
    ]
  },
  {
    id: 'gojo',
    name: 'Satoru Gojo',
    emoji: '👁️',
    tier: 'The Strongest',
    stage: 'Limitless',
    cost: 520,
    maxHp: 190,
    moves: [
      { name: 'Infinity', dmg: 12, desc: 'Almost untouchable' },
      { name: 'Cursed Technique Lapse: Blue', dmg: 38, desc: 'Attraction' },
      { name: 'Cursed Technique Reversal: Red', dmg: 44, desc: 'Repulsion' },
      { name: 'Hollow Purple', dmg: 68, desc: 'Imaginary mass', chance: 0.22 }
    ]
  },
  {
    id: 'sukuna',
    name: 'Ryomen Sukuna',
    emoji: '👑',
    tier: 'King of Curses',
    stage: 'Heian Form',
    cost: 580,
    maxHp: 210,
    moves: [
      { name: 'Dismantle', dmg: 34, desc: 'Invisible slash' },
      { name: 'Cleave', dmg: 41, desc: 'Adjusts to toughness' },
      { name: 'Open - Fire Arrow', dmg: 36, desc: 'Thermonuclear' },
      { name: 'Malevolent Shrine', dmg: 75, desc: 'Domain Expansion', chance: 0.18 }
    ]
  },
  {
    id: 'geto',
    name: 'Suguru Geto',
    emoji: '🧙',
    tier: 'Special Grade',
    stage: 'Curse Manipulator',
    cost: 350,
    maxHp: 160,
    moves: [
      { name: 'Uzumaki', dmg: 45, desc: 'Maximum: Uzumaki' },
      { name: 'Curse Spirit Swarm', dmg: 32, desc: 'Hundreds of curses' },
      { name: 'Playful Cloud', dmg: 30, desc: 'Absorbed tool' },
      { name: 'Domain: Womb Profusion', dmg: 50, desc: 'Open domain', chance: 0.2 }
    ]
  }
];

const BOTS = [
  { name: 'Grade 4 Spirit', emoji: '👻', maxHp: 75, power: 0.65 },
  { name: 'Finger Bearer', emoji: '🖐️', maxHp: 115, power: 0.9 },
  { name: 'Hanami', emoji: '🌸', maxHp: 145, power: 1.15 },
  { name: 'Jogo', emoji: '🌋', maxHp: 155, power: 1.25 },
  { name: 'Mahito', emoji: '🎭', maxHp: 165, power: 1.35 },
  { name: 'Special Grade Curse', emoji: '💀', maxHp: 185, power: 1.5 }
];

// State
let state = {
  profileName: '',
  soul: 0,
  unlocked: ['yuji', 'megumi', 'nobara', 'maki'],
  selected: null,
  player: null,
  enemy: null,
  playerHp: 0,
  enemyHp: 0,
  turn: 'player'
};

// ===== PROFILE / SAVE =====
function load() {
  try {
    const raw = localStorage.getItem('jjk_soul_fighters_v2');
    if (raw) {
      const data = JSON.parse(raw);
      state.profileName = data.profileName || '';
      state.soul = data.soul || 0;
      state.unlocked = data.unlocked || state.unlocked;
    }
  } catch (e) {}
}

function save() {
  localStorage.setItem('jjk_soul_fighters_v2', JSON.stringify({
    profileName: state.profileName,
    soul: state.soul,
    unlocked: state.unlocked
  }));
}

function createProfile() {
  const name = document.getElementById('player-name-input').value.trim();
  if (!name || name.length < 2) {
    alert('Enter a name (at least 2 characters)');
    return;
  }
  state.profileName = name;
  save();
  showWelcome();
}

function showWelcome() {
  document.getElementById('profile-box').style.display = 'none';
  document.getElementById('welcome-box').style.display = 'block';
  document.getElementById('welcome-name').textContent = state.profileName;
  document.getElementById('player-tag').textContent = state.profileName;
}

function resetProfile() {
  if (confirm('Switch profile? Current progress stays saved under this name.')) {
    document.getElementById('profile-box').style.display = 'block';
    document.getElementById('welcome-box').style.display = 'none';
    document.getElementById('player-name-input').value = '';
  }
}

// ===== UI =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function updateSoulUI() {
  document.getElementById('soul-count').textContent = state.soul;
}

function renderChars() {
  const grid = document.getElementById('char-grid');
  grid.innerHTML = '';
  CHARACTERS.forEach(c => {
    const unlocked = state.unlocked.includes(c.id);
    const card = document.createElement('div');
    card.className = `char-card ${unlocked ? 'unlocked' : 'locked'} ${state.selected === c.id ? 'selected' : ''}`;
    card.innerHTML = `
      <div class="avatar">${c.emoji}</div>
      <div class="name">${c.name}</div>
      <div class="tier">${c.tier}</div>
      <div class="stage-tag">${c.stage}</div>
      ${!unlocked ? `<div class="cost">${c.cost} SE</div>` : ''}
    `;
    card.onclick = () => {
      if (!unlocked) {
        if (state.soul >= c.cost) {
          if (confirm(`Unlock ${c.name} (${c.stage}) for ${c.cost} Soul Energy?`)) {
            state.soul -= c.cost;
            state.unlocked.push(c.id);
            save();
            updateSoulUI();
            renderChars();
          }
        } else {
          alert(`Need ${c.cost} Soul Energy. Keep fighting!`);
        }
        return;
      }
      state.selected = c.id;
      document.getElementById('btn-fight').disabled = false;
      renderChars();
    };
    grid.appendChild(card);
  });
}

// ===== BATTLE =====
function startBattle() {
  const char = CHARACTERS.find(c => c.id === state.selected);
  if (!char) return;

  const botIndex = Math.min(Math.floor(state.unlocked.length / 2.2) + Math.floor(Math.random() * 2), BOTS.length - 1);
  const bot = BOTS[botIndex];

  state.player = { ...char };
  state.enemy = {
    name: bot.name,
    emoji: bot.emoji,
    maxHp: Math.floor(bot.maxHp * (0.9 + Math.random() * 0.25)),
    power: bot.power,
    moves: [
      { name: 'Cursed Slash', dmg: Math.floor(15 * bot.power) },
      { name: 'Domain Pulse', dmg: Math.floor(23 * bot.power) },
      { name: 'Malevolent Hit', dmg: Math.floor(19 * bot.power) },
      { name: 'Final Technique', dmg: Math.floor(29 * bot.power) }
    ]
  };

  state.playerHp = state.player.maxHp;
  state.enemyHp = state.enemy.maxHp;
  state.turn = 'player';

  document.getElementById('player-name').textContent = state.player.name + (state.player.stage !== 'Base' ? ` [${state.player.stage}]` : '');
  document.getElementById('enemy-name').textContent = state.enemy.name;
  document.getElementById('player-sprite').textContent = state.player.emoji;
  document.getElementById('enemy-sprite').textContent = state.enemy.emoji;

  updateBars();
  setLog(`${state.player.name} enters the Tokyo Jujutsu High training grounds...`);
  renderMoves();
  showScreen('screen-battle');
}

function updateBars() {
  const pPct = Math.max(0, (state.playerHp / state.player.maxHp) * 100);
  const ePct = Math.max(0, (state.enemyHp / state.enemy.maxHp) * 100);
  document.getElementById('player-hp').style.width = pPct + '%';
  document.getElementById('enemy-hp').style.width = ePct + '%';
  document.getElementById('player-hp-text').textContent = `${Math.max(0, Math.ceil(state.playerHp))} / ${state.player.maxHp}`;
  document.getElementById('enemy-hp-text').textContent = `${Math.max(0, Math.ceil(state.enemyHp))} / ${state.enemy.maxHp}`;
}

function setLog(msg) {
  document.getElementById('battle-log').textContent = msg;
}

function renderMoves() {
  const container = document.getElementById('moves-container');
  container.innerHTML = '';
  state.player.moves.forEach((m, i) => {
    const btn = document.createElement('button');
    btn.className = 'move-btn';
    btn.disabled = state.turn !== 'player';
    btn.innerHTML = `<span class="move-name">${m.name}</span><span class="move-desc">${m.desc} • ${m.dmg}</span>`;
    btn.onclick = () => playerAttack(i);
    container.appendChild(btn);
  });
}

function playerAttack(index) {
  if (state.turn !== 'player') return;
  const move = state.player.moves[index];
  let dmg = move.dmg;
  let isCrit = false;

  if (move.chance && Math.random() < move.chance) {
    dmg = Math.floor(dmg * 1.65);
    isCrit = true;
  }

  // Gojo Infinity special: small damage reduction next turn (simple version)
  state.enemyHp -= dmg;

  document.getElementById('player-sprite').classList.add('attack');
  setTimeout(() => document.getElementById('player-sprite').classList.remove('attack'), 280);

  document.getElementById('enemy-sprite').classList.add('hit');
  setTimeout(() => document.getElementById('enemy-sprite').classList.remove('hit'), 320);

  showDamage(dmg, isCrit);
  showEffect(isCrit ? '⚡' : '💥');
  shakeScreen();

  if (isCrit) {
    setLog(`BLACK FLASH! ${state.player.name} lands ${move.name} for ${dmg}!`);
  } else {
    setLog(`${state.player.name} uses ${move.name} → ${dmg} damage`);
  }

  updateBars();
  state.turn = 'enemy';
  renderMoves();

  if (state.enemyHp <= 0) {
    setTimeout(() => endBattle(true), 800);
    return;
  }
  setTimeout(enemyTurn, 950);
}

function enemyTurn() {
  if (state.enemyHp <= 0) return;
  const move = state.enemy.moves[Math.floor(Math.random() * state.enemy.moves.length)];
  let dmg = move.dmg + Math.floor(Math.random() * 7) - 2;
  dmg = Math.max(9, dmg);

  // Simple Infinity reduction if player is Gojo
  if (state.player.id === 'gojo' && Math.random() < 0.4) {
    dmg = Math.floor(dmg * 0.4);
    setLog(`Infinity blocks most of the attack! ${state.enemy.name} hits for only ${dmg}`);
  } else {
    setLog(`${state.enemy.name} uses ${move.name} → ${dmg} damage`);
  }

  state.playerHp -= dmg;

  document.getElementById('enemy-sprite').classList.add('attack');
  setTimeout(() => document.getElementById('enemy-sprite').classList.remove('attack'), 280);
  document.getElementById('player-sprite').classList.add('hit');
  setTimeout(() => document.getElementById('player-sprite').classList.remove('hit'), 320);

  showDamage(dmg, false);
  showEffect('💢');
  updateBars();

  if (state.playerHp <= 0) {
    setTimeout(() => endBattle(false), 800);
    return;
  }

  state.turn = 'player';
  renderMoves();
}

function showEffect(emoji) {
  const el = document.getElementById('battle-effect');
  el.textContent = emoji;
  el.classList.remove('show');
  void el.offsetWidth;
  el.classList.add('show');
}

function showDamage(amount, crit) {
  const el = document.getElementById('damage-float');
  el.textContent = crit ? `-${amount}!` : `-${amount}`;
  el.style.color = crit ? '#fbbf24' : '#f87171';
  el.classList.remove('show');
  void el.offsetWidth;
  el.classList.add('show');
}

function shakeScreen() {
  const arena = document.getElementById('arena');
  arena.classList.remove('shake-screen');
  void arena.offsetWidth;
  arena.classList.add('shake-screen');
}

function endBattle(won) {
  const title = document.getElementById('result-title');
  const soulEl = document.getElementById('result-soul');

  if (won) {
    const gain = 45 + Math.floor(Math.random() * 55) + (state.unlocked.length * 7);
    state.soul += gain;
    save();
    title.textContent = 'VICTORY';
    title.className = 'result-title win';
    soulEl.textContent = `+${gain} Soul Energy`;
  } else {
    title.textContent = 'DEFEATED';
    title.className = 'result-title lose';
    soulEl.textContent = 'No Soul Energy gained';
  }
  showScreen('screen-result');
}

// ===== EVENTS =====
document.getElementById('btn-create-profile').onclick = createProfile;
document.getElementById('btn-reset-profile').onclick = resetProfile;

document.getElementById('btn-start').onclick = () => {
  updateSoulUI();
  renderChars();
  showScreen('screen-select');
};

document.getElementById('btn-fight').onclick = startBattle;

document.getElementById('btn-again').onclick = () => {
  if (state.selected) startBattle();
  else {
    updateSoulUI();
    renderChars();
    showScreen('screen-select');
  }
};

document.getElementById('btn-menu').onclick = () => {
  updateSoulUI();
  renderChars();
  showScreen('screen-select');
};

// Init
load();
if (state.profileName) {
  showWelcome();
} else {
  document.getElementById('profile-box').style.display = 'block';
  document.getElementById('welcome-box').style.display = 'none';
}

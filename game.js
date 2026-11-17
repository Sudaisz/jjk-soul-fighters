// ===== JJK SOUL FIGHTERS =====
// Created by BEYOND

const CHARACTERS = [
  {
    id: 'yuji',
    name: 'Yuji Itadori',
    emoji: '👊',
    tier: 'Starter',
    cost: 0,
    maxHp: 110,
    moves: [
      { name: 'Divergent Fist', dmg: 18, desc: 'Solid punch' },
      { name: 'Black Flash', dmg: 32, desc: 'Critical strike', chance: 0.35 },
      { name: 'Manji Kick', dmg: 22, desc: 'Fast kick' },
      { name: 'Cursed Energy Burst', dmg: 28, desc: 'Raw power' }
    ]
  },
  {
    id: 'megumi',
    name: 'Megumi Fushiguro',
    emoji: '🐺',
    tier: 'Starter',
    cost: 0,
    maxHp: 95,
    moves: [
      { name: 'Divine Dogs', dmg: 20, desc: 'Summon attack' },
      { name: 'Nue', dmg: 26, desc: 'Lightning strike' },
      { name: 'Toad', dmg: 16, desc: 'Bind + damage' },
      { name: 'Domain Ambush', dmg: 30, desc: 'Chimera shadow' }
    ]
  },
  {
    id: 'nobara',
    name: 'Nobara Kugisaki',
    emoji: '🔨',
    tier: 'Starter',
    cost: 0,
    maxHp: 90,
    moves: [
      { name: 'Resonance', dmg: 24, desc: 'Nail technique' },
      { name: 'Hairpin', dmg: 28, desc: 'Explosive nails' },
      { name: 'Straw Doll', dmg: 20, desc: 'Cursed doll' },
      { name: 'Black Flash', dmg: 34, desc: 'Critical', chance: 0.3 }
    ]
  },
  {
    id: 'maki',
    name: 'Maki Zenin',
    emoji: '🗡️',
    tier: 'Starter',
    cost: 0,
    maxHp: 105,
    moves: [
      { name: 'Playful Cloud', dmg: 25, desc: 'Heavy staff' },
      { name: 'Split Soul', dmg: 30, desc: 'Cursed tool' },
      { name: 'Heavenly Restriction', dmg: 22, desc: 'Enhanced body' },
      { name: 'Blinding Strike', dmg: 18, desc: 'Speed attack' }
    ]
  },
  {
    id: 'nanami',
    name: 'Kento Nanami',
    emoji: '💼',
    tier: 'Grade 1',
    cost: 80,
    maxHp: 120,
    moves: [
      { name: 'Ratio Technique', dmg: 28, desc: '7:3 critical' },
      { name: 'Overtime', dmg: 35, desc: 'After hours power' },
      { name: 'Collapse', dmg: 24, desc: 'Structural damage' },
      { name: 'Blunt Strike', dmg: 20, desc: 'Wrapped blade' }
    ]
  },
  {
    id: 'todo',
    name: 'Aoi Todo',
    emoji: '💪',
    tier: 'Grade 1',
    cost: 100,
    maxHp: 130,
    moves: [
      { name: 'Boogie Woogie', dmg: 22, desc: 'Swap positions' },
      { name: 'Simple Domain', dmg: 18, desc: 'Defense boost' },
      { name: 'Black Flash', dmg: 38, desc: 'Massive critical', chance: 0.4 },
      { name: 'Brotherhood Punch', dmg: 26, desc: 'Emotional power' }
    ]
  },
  {
    id: 'yuta',
    name: 'Yuta Okkotsu',
    emoji: '⚔️',
    tier: 'Special',
    cost: 180,
    maxHp: 140,
    moves: [
      { name: 'Rika', dmg: 32, desc: 'Queen of curses' },
      { name: 'Cursed Speech', dmg: 20, desc: 'Command' },
      { name: 'Thin Ice Breaker', dmg: 28, desc: 'Copied technique' },
      { name: 'Love Beam', dmg: 40, desc: 'Pure cursed energy' }
    ]
  },
  {
    id: 'gojo',
    name: 'Satoru Gojo',
    emoji: '👁️',
    tier: 'The Strongest',
    cost: 450,
    maxHp: 180,
    moves: [
      { name: 'Infinity', dmg: 15, desc: 'Defensive (reduces next)' },
      { name: 'Blue', dmg: 35, desc: 'Attraction' },
      { name: 'Red', dmg: 42, desc: 'Repulsion' },
      { name: 'Hollow Purple', dmg: 65, desc: 'Imaginary mass', chance: 0.25 }
    ]
  },
  {
    id: 'sukuna',
    name: 'Ryomen Sukuna',
    emoji: '👑',
    tier: 'King of Curses',
    cost: 500,
    maxHp: 200,
    moves: [
      { name: 'Dismantle', dmg: 30, desc: 'Invisible slash' },
      { name: 'Cleave', dmg: 38, desc: 'Adjusts to toughness' },
      { name: 'Open', dmg: 25, desc: 'Fire arrow' },
      { name: 'Malevolent Shrine', dmg: 70, desc: 'Domain Expansion', chance: 0.2 }
    ]
  }
];

const BOTS = [
  { name: 'Grade 4 Spirit', emoji: '👻', maxHp: 80, power: 0.7 },
  { name: 'Finger Bearer', emoji: '🖐️', maxHp: 110, power: 0.9 },
  { name: 'Hanami', emoji: '🌸', maxHp: 140, power: 1.1 },
  { name: 'Jogo', emoji: '🌋', maxHp: 150, power: 1.2 },
  { name: 'Mahito', emoji: '🎭', maxHp: 160, power: 1.3 },
  { name: 'Special Grade', emoji: '💀', maxHp: 180, power: 1.5 }
];

// State
let state = {
  soul: 0,
  unlocked: ['yuji', 'megumi', 'nobara', 'maki'],
  selected: null,
  player: null,
  enemy: null,
  playerHp: 0,
  enemyHp: 0,
  turn: 'player',
  log: ''
};

// Load / Save
function load() {
  try {
    const raw = localStorage.getItem('jjk_soul_fighters');
    if (raw) {
      const data = JSON.parse(raw);
      state.soul = data.soul || 0;
      state.unlocked = data.unlocked || state.unlocked;
    }
  } catch (e) {}
}

function save() {
  localStorage.setItem('jjk_soul_fighters', JSON.stringify({
    soul: state.soul,
    unlocked: state.unlocked
  }));
}

// UI Helpers
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
      <div class="emoji">${c.emoji}</div>
      <div class="name">${c.name}</div>
      <div class="tier">${c.tier}</div>
      ${!unlocked ? `<div class="cost">${c.cost} SE</div>` : ''}
    `;
    card.onclick = () => {
      if (!unlocked) {
        if (state.soul >= c.cost) {
          if (confirm(`Unlock ${c.name} for ${c.cost} Soul Energy?`)) {
            state.soul -= c.cost;
            state.unlocked.push(c.id);
            save();
            updateSoulUI();
            renderChars();
          }
        } else {
          alert(`Need ${c.cost} Soul Energy. Fight more to earn it!`);
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

// Battle
function startBattle() {
  const char = CHARACTERS.find(c => c.id === state.selected);
  if (!char) return;

  // Scale bot based on how many unlocked + random
  const botIndex = Math.min(Math.floor(state.unlocked.length / 2) + Math.floor(Math.random() * 2), BOTS.length - 1);
  const botTemplate = BOTS[botIndex];

  state.player = { ...char };
  state.enemy = {
    name: botTemplate.name,
    emoji: botTemplate.emoji,
    maxHp: Math.floor(botTemplate.maxHp * (0.9 + Math.random() * 0.3)),
    power: botTemplate.power,
    moves: [
      { name: 'Cursed Slash', dmg: Math.floor(16 * botTemplate.power) },
      { name: 'Domain Pulse', dmg: Math.floor(24 * botTemplate.power) },
      { name: 'Malevolent Hit', dmg: Math.floor(20 * botTemplate.power) },
      { name: 'Final Technique', dmg: Math.floor(30 * botTemplate.power) }
    ]
  };

  state.playerHp = state.player.maxHp;
  state.enemyHp = state.enemy.maxHp;
  state.turn = 'player';

  document.getElementById('player-name').textContent = state.player.name;
  document.getElementById('enemy-name').textContent = state.enemy.name;
  document.getElementById('player-sprite').textContent = state.player.emoji;
  document.getElementById('enemy-sprite').textContent = state.enemy.emoji;

  updateBars();
  setLog(`${state.player.name} faces ${state.enemy.name}!`);
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
    btn.innerHTML = `<span class="move-name">${m.name}</span><span class="move-desc">${m.desc} • ${m.dmg} dmg</span>`;
    btn.onclick = () => playerAttack(i);
    container.appendChild(btn);
  });
}

function playerAttack(index) {
  if (state.turn !== 'player') return;
  const move = state.player.moves[index];
  let dmg = move.dmg;

  // Critical chance
  if (move.chance && Math.random() < move.chance) {
    dmg = Math.floor(dmg * 1.6);
    setLog(`BLACK FLASH! ${state.player.name} lands ${move.name} for ${dmg}!`);
  } else {
    setLog(`${state.player.name} uses ${move.name} → ${dmg} damage`);
  }

  state.enemyHp -= dmg;
  showEffect('💥');
  document.getElementById('enemy-sprite').classList.add('hit');
  setTimeout(() => document.getElementById('enemy-sprite').classList.remove('hit'), 350);

  updateBars();
  state.turn = 'enemy';
  renderMoves();

  if (state.enemyHp <= 0) {
    setTimeout(() => endBattle(true), 700);
    return;
  }

  setTimeout(enemyTurn, 900);
}

function enemyTurn() {
  if (state.enemyHp <= 0) return;
  const move = state.enemy.moves[Math.floor(Math.random() * state.enemy.moves.length)];
  const dmg = move.dmg + Math.floor(Math.random() * 6) - 2;
  state.playerHp -= Math.max(8, dmg);

  setLog(`${state.enemy.name} uses ${move.name} → ${dmg} damage`);
  showEffect('💢');
  document.getElementById('player-sprite').classList.add('hit');
  setTimeout(() => document.getElementById('player-sprite').classList.remove('hit'), 350);

  updateBars();

  if (state.playerHp <= 0) {
    setTimeout(() => endBattle(false), 700);
    return;
  }

  state.turn = 'player';
  renderMoves();
}

function showEffect(emoji) {
  const el = document.getElementById('battle-effect');
  el.textContent = emoji;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 600);
}

function endBattle(won) {
  const title = document.getElementById('result-title');
  const soulEl = document.getElementById('result-soul');

  if (won) {
    const gain = 40 + Math.floor(Math.random() * 50) + (state.unlocked.length * 8);
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

// Events
document.getElementById('btn-start').onclick = () => {
  updateSoulUI();
  renderChars();
  showScreen('screen-select');
};

document.getElementById('btn-back-intro').onclick = () => showScreen('screen-intro');

document.getElementById('btn-fight').onclick = startBattle;

document.getElementById('btn-again').onclick = () => {
  if (state.selected) startBattle();
  else showScreen('screen-select');
};

document.getElementById('btn-menu').onclick = () => {
  updateSoulUI();
  renderChars();
  showScreen('screen-select');
};

// Init
load();
updateSoulUI();

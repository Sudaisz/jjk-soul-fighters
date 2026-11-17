// JJK Soul Fighters v4 — BEYOND
// Images from public MAL / reliable sources + consistent seeds

const CHARACTERS = [
  // STARTERS
  {id:'yuji',name:'Yuji Itadori',img:'https://cdn.myanimelist.net/images/characters/11/422417.jpg',tier:'Grade 4',stage:'Base',cost:0,rating:79,maxHp:118,
   info:'Vessel of Sukuna. Superhuman strength.',
   moves:[{name:'Divergent Fist',dmg:21,desc:'Delayed impact'},{name:'Black Flash',dmg:36,desc:'0.000001s critical',chance:0.33},{name:'Manji Kick',dmg:24,desc:'Spinning kick'},{name:'Cursed Punch',dmg:28,desc:'Reinforced blow'}]},
  {id:'megumi',name:'Megumi Fushiguro',img:'https://cdn.myanimelist.net/images/characters/2/391555.jpg',tier:'Grade 2',stage:'Base',cost:0,rating:77,maxHp:102,
   info:'Ten Shadows Technique user.',
   moves:[{name:'Divine Dogs',dmg:22,desc:'Twin shikigami'},{name:'Nue',dmg:28,desc:'Lightning bird'},{name:'Toad',dmg:18,desc:'Bind'},{name:'Chimera Shadow',dmg:33,desc:'Domain start'}]},
  {id:'nobara',name:'Nobara Kugisaki',img:'https://cdn.myanimelist.net/images/characters/12/422416.jpg',tier:'Grade 3',stage:'Base',cost:0,rating:75,maxHp:96,
   info:'Straw Doll Technique. Resonance specialist.',
   moves:[{name:'Resonance',dmg:26,desc:'Nail link'},{name:'Hairpin',dmg:30,desc:'Explosive nails'},{name:'Straw Doll',dmg:22,desc:'Cursed doll'},{name:'Black Flash',dmg:36,desc:'Critical',chance:0.28}]},
  {id:'maki',name:'Maki Zenin',img:'https://cdn.myanimelist.net/images/characters/6/422418.jpg',tier:'Grade 4',stage:'Base',cost:0,rating:78,maxHp:112,
   info:'Heavenly Restriction. Cursed tool master.',
   moves:[{name:'Playful Cloud',dmg:27,desc:'Staff assault'},{name:'Cursed Tool',dmg:25,desc:'Weapon slash'},{name:'Speed Blitz',dmg:20,desc:'Enhanced speed'},{name:'Precision',dmg:23,desc:'Targeted hit'}]},

  // MID
  {id:'panda',name:'Panda',img:'https://cdn.myanimelist.net/images/characters/10/422420.jpg',tier:'Grade 2',stage:'Base',cost:45,rating:80,maxHp:128,
   info:'Cursed corpse. Three cores.',
   moves:[{name:'Gorilla Mode',dmg:31,desc:'Power core'},{name:'Drumming',dmg:25,desc:'Vibration'},{name:'Heavy Punch',dmg:23,desc:'Core strike'},{name:'Sibling Bond',dmg:19,desc:'Support'}]},
  {id:'inumaki',name:'Toge Inumaki',img:'https://cdn.myanimelist.net/images/characters/5/422419.jpg',tier:'Semi-Grade 1',stage:'Base',cost:65,rating:83,maxHp:92,
   info:'Cursed Speech. Words become commands.',
   moves:[{name:"Don't Move",dmg:16,desc:'Bind'},{name:'Explode',dmg:34,desc:'Forced blast'},{name:'Get Crushed',dmg:29,desc:'Crush'},{name:'Twist',dmg:27,desc:'Body twist'}]},
  {id:'nanami',name:'Kento Nanami',img:'https://cdn.myanimelist.net/images/characters/9/391556.jpg',tier:'Grade 1',stage:'Base',cost:95,rating:87,maxHp:132,
   info:'Ratio Technique. Overtime is deadly.',
   moves:[{name:'Ratio Technique',dmg:30,desc:'7:3 critical'},{name:'Overtime',dmg:38,desc:'After hours'},{name:'Collapse',dmg:26,desc:'Structure break'},{name:'Blunt Strike',dmg:22,desc:'Wrapped blade'}]},
  {id:'todo',name:'Aoi Todo',img:'https://cdn.myanimelist.net/images/characters/3/422421.jpg',tier:'Grade 1',stage:'Base',cost:115,rating:89,maxHp:142,
   info:'Boogie Woogie. Black Flash monster.',
   moves:[{name:'Boogie Woogie',dmg:24,desc:'Swap'},{name:'Black Flash',dmg:42,desc:'Massive crit',chance:0.4},{name:'Simple Domain',dmg:20,desc:'Defense'},{name:'Brotherhood',dmg:28,desc:'Power of friendship'}]},
  {id:'mechamaru',name:'Kokichi Muta',img:'https://cdn.myanimelist.net/images/characters/4/422422.jpg',tier:'Grade 1',stage:'Mechamaru',cost:105,rating:86,maxHp:138,
   info:'Puppet user. Ultimate Mechamaru Mode Absolute.',
   moves:[{name:'Ultra Cannon',dmg:35,desc:'Energy blast'},{name:'Boost On',dmg:25,desc:'Speed'},{name:'Miracle Cannon',dmg:39,desc:'Charged'},{name:'Mode Absolute',dmg:32,desc:'Full power'}]},
  {id:'kamo',name:'Noritoshi Kamo',img:'https://cdn.myanimelist.net/images/characters/7/422423.jpg',tier:'Semi-Grade 1',stage:'Base',cost:88,rating:84,maxHp:118,
   info:'Blood Manipulation. Kamo clan heir.',
   moves:[{name:'Piercing Blood',dmg:31,desc:'Blood beam'},{name:'Convergence',dmg:23,desc:'Compress'},{name:'Flowing Red Scale',dmg:27,desc:'Body boost'},{name:'Crimson Binding',dmg:21,desc:'Bind'}]},
  {id:'mai',name:'Mai Zenin',img:'https://cdn.myanimelist.net/images/characters/8/422424.jpg',tier:'Grade 3',stage:'Base',cost:55,rating:73,maxHp:88,
   info:'Construction. Creates one bullet a day.',
   moves:[{name:'Construction Bullet',dmg:29,desc:'Created round'},{name:'Sniper Shot',dmg:25,desc:'Long range'},{name:'Cursed Shot',dmg:21,desc:'Reinforced'},{name:'Quick Draw',dmg:19,desc:'Fast'}]},

  // STRONG
  {id:'maki_aw',name:'Maki Zenin',img:'https://cdn.myanimelist.net/images/characters/6/422418.jpg',tier:'Special',stage:'Awakened',cost:290,rating:94,maxHp:168,
   info:'Fully awakened. Toji-level physicality + soul vision.',
   moves:[{name:'Split Soul Katana',dmg:40,desc:'Cuts the soul'},{name:'Toji Speed',dmg:34,desc:'Heavenly Restriction'},{name:'Playful Cloud Max',dmg:37,desc:'Full staff'},{name:'Perfect Sight',dmg:30,desc:'Sees souls'}]},
  {id:'yuta',name:'Yuta Okkotsu',img:'https://cdn.myanimelist.net/images/characters/11/391557.jpg',tier:'Special Grade',stage:'Base',cost:240,rating:95,maxHp:158,
   info:'Rika. Copy technique. Immense cursed energy.',
   moves:[{name:'Rika',dmg:38,desc:'Queen of Curses'},{name:'Cursed Speech',dmg:23,desc:'Command'},{name:'Thin Ice Breaker',dmg:32,desc:'Copy'},{name:'Love Beam',dmg:44,desc:'Pure output'}]},
  {id:'toji',name:'Toji Fushiguro',img:'https://cdn.myanimelist.net/images/characters/2/422425.jpg',tier:'Special',stage:'Heavenly Restriction',cost:400,rating:96,maxHp:175,
   info:'The Sorcerer Killer. Zero cursed energy, perfect body.',
   moves:[{name:'Inverted Spear',dmg:42,desc:'Nullifies CT'},{name:'Playful Cloud',dmg:38,desc:'Master staff'},{name:'Chain of Thousand',dmg:35,desc:'Long chain'},{name:'Assassin Strike',dmg:48,desc:'Kill shot',chance:0.25}]},
  {id:'geto',name:'Suguru Geto',img:'https://cdn.myanimelist.net/images/characters/14/391558.jpg',tier:'Special Grade',stage:'Curse User',cost:370,rating:93,maxHp:162,
   info:'Curse Manipulation. Maximum: Uzumaki.',
   moves:[{name:'Uzumaki',dmg:47,desc:'Maximum technique'},{name:'Curse Swarm',dmg:34,desc:'Hundreds of curses'},{name:'Playful Cloud',dmg:31,desc:'Absorbed tool'},{name:'Womb Profusion',dmg:52,desc:'Domain',chance:0.2}]},

  // TOP
  {id:'gojo',name:'Satoru Gojo',img:'https://cdn.myanimelist.net/images/characters/15/422426.jpg',tier:'The Strongest',stage:'Limitless',cost:550,rating:99,maxHp:195,
   info:'Limitless + Six Eyes. The Honored One.',
   moves:[{name:'Infinity',dmg:14,desc:'Untouchable'},{name:'Blue',dmg:40,desc:'Attraction'},{name:'Red',dmg:46,desc:'Repulsion'},{name:'Hollow Purple',dmg:72,desc:'Imaginary mass',chance:0.22}]},
  {id:'sukuna',name:'Ryomen Sukuna',img:'https://cdn.myanimelist.net/images/characters/7/422427.jpg',tier:'King of Curses',stage:'Heian',cost:600,rating:99,maxHp:215,
   info:'The undisputed King. Malevolent Shrine.',
   moves:[{name:'Dismantle',dmg:36,desc:'Invisible slash'},{name:'Cleave',dmg:43,desc:'Adjusts to toughness'},{name:'Fire Arrow',dmg:38,desc:'Open'},{name:'Malevolent Shrine',dmg:78,desc:'Domain Expansion',chance:0.18}]}
];

const BOTS = [
  {name:'Grade 4 Spirit',img:'https://cdn.myanimelist.net/images/characters/11/422417.jpg',maxHp:78,power:0.65},
  {name:'Finger Bearer',img:'https://cdn.myanimelist.net/images/characters/7/422427.jpg',maxHp:118,power:0.92},
  {name:'Hanami',img:'https://cdn.myanimelist.net/images/characters/14/391558.jpg',maxHp:148,power:1.15},
  {name:'Jogo',img:'https://cdn.myanimelist.net/images/characters/15/422426.jpg',maxHp:158,power:1.25},
  {name:'Mahito',img:'https://cdn.myanimelist.net/images/characters/2/422425.jpg',maxHp:168,power:1.35},
  {name:'Special Grade',img:'https://cdn.myanimelist.net/images/characters/7/422427.jpg',maxHp:190,power:1.55}
];

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

// ===== AUTH (local) =====
function getAccounts() {
  try { return JSON.parse(localStorage.getItem('jjk_accounts') || '{}'); } catch { return {}; }
}
function saveAccounts(acc) {
  localStorage.setItem('jjk_accounts', JSON.stringify(acc));
}
function simpleHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = ((h << 5) - h) + str.charCodeAt(i) | 0;
  return h.toString(36);
}

function register() {
  const user = document.getElementById('reg-user').value.trim().toLowerCase();
  const pass = document.getElementById('reg-pass').value;
  const pass2 = document.getElementById('reg-pass2').value;
  if (user.length < 3) return alert('Username must be at least 3 characters');
  if (pass.length < 4) return alert('Password must be at least 4 characters');
  if (pass !== pass2) return alert('Passwords do not match');
  const acc = getAccounts();
  if (acc[user]) return alert('Username already taken');
  acc[user] = { pass: simpleHash(pass), soul: 0, unlocked: ['yuji','megumi','nobara','maki'] };
  saveAccounts(acc);
  alert('Account created! Please login.');
  showLoginForm();
}

function login() {
  const user = document.getElementById('login-user').value.trim().toLowerCase();
  const pass = document.getElementById('login-pass').value;
  const acc = getAccounts();
  if (!acc[user] || acc[user].pass !== simpleHash(pass)) return alert('Wrong username or password');
  state.user = user;
  state.soul = acc[user].soul || 0;
  state.unlocked = acc[user].unlocked || ['yuji','megumi','nobara','maki'];
  localStorage.setItem('jjk_current_user', user);
  enterGame();
}

function logout() {
  saveProgress();
  state.user = null;
  localStorage.removeItem('jjk_current_user');
  document.getElementById('login-user').value = '';
  document.getElementById('login-pass').value = '';
  showScreen('screen-login');
  showLoginForm();
}

function saveProgress() {
  if (!state.user) return;
  const acc = getAccounts();
  if (acc[state.user]) {
    acc[state.user].soul = state.soul;
    acc[state.user].unlocked = state.unlocked;
    saveAccounts(acc);
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

function enterGame() {
  document.getElementById('user-display').textContent = state.user;
  updateSoulUI();
  renderChars();
  showScreen('screen-select');
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
    card.className = `char-card ${unlocked?'unlocked':'locked'} ${state.selected===c.id?'selected':''}`;
    card.innerHTML = `
      <img class="card-img" src="${c.img}" alt="${c.name}" onerror="this.src='https://via.placeholder.com/200x240/1a0f2e/a855f7?text=${encodeURIComponent(c.name.split(' ')[0])}'" loading="lazy"/>
      <div class="rating">${c.rating}</div>
      ${!unlocked?`<div class="cost">${c.cost} SE</div>`:''}
      <div class="card-body">
        <div class="name">${c.name}</div>
        <div class="meta">${c.tier} • ${c.stage}</div>
      </div>`;
    card.onclick = () => {
      if (!unlocked) {
        if (state.soul >= c.cost) {
          if (confirm(`Unlock ${c.name} (${c.stage})\n${c.info}\n\nCost: ${c.cost} Soul Energy?`)) {
            state.soul -= c.cost;
            state.unlocked.push(c.id);
            saveProgress();
            updateSoulUI();
            renderChars();
          }
        } else alert(`Need ${c.cost} Soul Energy.\n\n${c.info}`);
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
  const botIndex = Math.min(Math.floor(state.unlocked.length/2.3) + Math.floor(Math.random()*2), BOTS.length-1);
  const bot = BOTS[botIndex];

  state.player = {...char};
  state.enemy = {
    name: bot.name,
    img: bot.img,
    maxHp: Math.floor(bot.maxHp * (0.9 + Math.random()*0.25)),
    power: bot.power,
    moves: [
      {name:'Cursed Slash',dmg:Math.floor(16*bot.power)},
      {name:'Domain Pulse',dmg:Math.floor(24*bot.power)},
      {name:'Malevolent Hit',dmg:Math.floor(20*bot.power)},
      {name:'Final Technique',dmg:Math.floor(30*bot.power)}
    ]
  };
  state.playerHp = state.player.maxHp;
  state.enemyHp = state.enemy.maxHp;
  state.turn = 'player';

  document.getElementById('player-name').textContent = state.player.name + (state.player.stage!=='Base'?` [${state.player.stage}]`:'');
  document.getElementById('enemy-name').textContent = state.enemy.name;
  document.getElementById('player-portrait').style.backgroundImage = `url('${state.player.img}')`;
  document.getElementById('enemy-portrait').style.backgroundImage = `url('${state.enemy.img}')`;

  updateBars();
  setLog(`${state.player.name} steps into the Tokyo Jujutsu High courtyard...`);
  renderMoves();
  showScreen('screen-battle');
}

function updateBars() {
  document.getElementById('player-hp').style.width = Math.max(0,(state.playerHp/state.player.maxHp)*100)+'%';
  document.getElementById('enemy-hp').style.width = Math.max(0,(state.enemyHp/state.enemy.maxHp)*100)+'%';
  document.getElementById('player-hp-text').textContent = `${Math.max(0,Math.ceil(state.playerHp))}/${state.player.maxHp}`;
  document.getElementById('enemy-hp-text').textContent = `${Math.max(0,Math.ceil(state.enemyHp))}/${state.enemy.maxHp}`;
}
function setLog(m){document.getElementById('battle-log').textContent=m}
function renderMoves() {
  const box = document.getElementById('moves-container');
  box.innerHTML = '';
  state.player.moves.forEach((m,i)=>{
    const b = document.createElement('button');
    b.className = 'move-btn';
    b.disabled = state.turn !== 'player';
    b.innerHTML = `<span class="move-name">${m.name}</span><span class="move-desc">${m.desc} • ${m.dmg}</span>`;
    b.onclick = () => playerAttack(i);
    box.appendChild(b);
  });
}

function showAttackPopup(char, move, dmg, isCrit) {
  const p = document.getElementById('attack-popup');
  document.getElementById('popup-img').style.backgroundImage = `url('${char.img}')`;
  document.getElementById('popup-char').textContent = char.name;
  document.getElementById('popup-move').textContent = isCrit ? `BLACK FLASH • ${move.name}` : move.name;
  document.getElementById('popup-desc').textContent = move.desc;
  document.getElementById('popup-dmg').textContent = `${dmg} DMG`;
  p.classList.remove('hidden');
  const time = (isCrit || /Domain|Purple|Shrine|Uzumaki|Rika/.test(move.name)) ? 1700 : 1200;
  setTimeout(() => p.classList.add('hidden'), time);
}

function playerAttack(i) {
  if (state.turn !== 'player') return;
  const move = state.player.moves[i];
  let dmg = move.dmg, isCrit = false;
  if (move.chance && Math.random() < move.chance) { dmg = Math.floor(dmg*1.65); isCrit = true; }
  state.enemyHp -= dmg;

  document.getElementById('player-portrait').classList.add('attack');
  setTimeout(()=>document.getElementById('player-portrait').classList.remove('attack'),260);
  document.getElementById('enemy-portrait').classList.add('hit');
  setTimeout(()=>document.getElementById('enemy-portrait').classList.remove('hit'),300);

  showAttackPopup(state.player, move, dmg, isCrit);
  showDamage(dmg, isCrit);
  showEffect(isCrit?'⚡':'💥');
  shake();

  setLog(isCrit ? `BLACK FLASH! ${state.player.name} lands ${move.name} for ${dmg}!` : `${state.player.name} uses ${move.name} → ${dmg}`);
  updateBars();
  state.turn = 'enemy';
  renderMoves();

  if (state.enemyHp <= 0) { setTimeout(()=>endBattle(true), 1800); return; }
  setTimeout(enemyTurn, 1800);
}

function enemyTurn() {
  if (state.enemyHp <= 0) return;
  const move = state.enemy.moves[Math.floor(Math.random()*state.enemy.moves.length)];
  let dmg = Math.max(10, move.dmg + Math.floor(Math.random()*7)-2);
  if (state.player.id==='gojo' && Math.random()<0.42) {
    dmg = Math.floor(dmg*0.35);
    setLog(`Infinity reduces the attack to ${dmg}!`);
  } else setLog(`${state.enemy.name} uses ${move.name} → ${dmg}`);

  state.playerHp -= dmg;
  document.getElementById('enemy-portrait').classList.add('attack');
  setTimeout(()=>document.getElementById('enemy-portrait').classList.remove('attack'),260);
  document.getElementById('player-portrait').classList.add('hit');
  setTimeout(()=>document.getElementById('player-portrait').classList.remove('hit'),300);
  showDamage(dmg,false); showEffect('💢'); updateBars();

  if (state.playerHp <= 0) { setTimeout(()=>endBattle(false),900); return; }
  state.turn = 'player';
  renderMoves();
}

function showEffect(e){const el=document.getElementById('battle-effect');el.textContent=e;el.classList.remove('show');void el.offsetWidth;el.classList.add('show')}
function showDamage(n,c){const el=document.getElementById('damage-float');el.textContent=c?`-${n}!`:`-${n}`;el.style.color=c?'#fbbf24':'#f87171';el.classList.remove('show');void el.offsetWidth;el.classList.add('show')}
function shake(){const a=document.getElementById('arena');a.classList.remove('shake-screen');void a.offsetWidth;a.classList.add('shake-screen')}

function endBattle(won) {
  const t = document.getElementById('result-title');
  const s = document.getElementById('result-soul');
  if (won) {
    const gain = 50 + Math.floor(Math.random()*60) + state.unlocked.length*8;
    state.soul += gain;
    saveProgress();
    t.textContent = 'VICTORY'; t.className = 'result-title win';
    s.textContent = `+${gain} Soul Energy`;
  } else {
    t.textContent = 'DEFEATED'; t.className = 'result-title lose';
    s.textContent = 'No Soul Energy gained';
  }
  showScreen('screen-result');
}

// Events
document.getElementById('btn-login').onclick = login;
document.getElementById('btn-register').onclick = register;
document.getElementById('btn-show-register').onclick = showRegisterForm;
document.getElementById('btn-show-login').onclick = showLoginForm;
document.getElementById('btn-logout').onclick = logout;
document.getElementById('btn-fight').onclick = startBattle;
document.getElementById('btn-again').onclick = () => state.selected ? startBattle() : (updateSoulUI(),renderChars(),showScreen('screen-select'));
document.getElementById('btn-menu').onclick = () => { updateSoulUI(); renderChars(); showScreen('screen-select'); };

// Auto login if session exists
(function init(){
  const u = localStorage.getItem('jjk_current_user');
  const acc = getAccounts();
  if (u && acc[u]) {
    state.user = u;
    state.soul = acc[u].soul || 0;
    state.unlocked = acc[u].unlocked || ['yuji','megumi','nobara','maki'];
    enterGame();
  }
})();

// ========================================================
// SAVE DATA
// ========================================================

let username =
  localStorage.getItem(
    "kiUsername3"
  ) || "";


let usedNames =
  JSON.parse(
    localStorage.getItem(
      "kiUsedNames3"
    )
  ) || [];


let coins =
  Number(
    localStorage.getItem(
      "kiCoins3"
    )
  ) || 0;


let bestWave =
  Number(
    localStorage.getItem(
      "kiBestWave3"
    )
  ) || 0;


let totalKills =
  Number(
    localStorage.getItem(
      "kiKills3"
    )
  ) || 0;


let rebirths =
  Number(
    localStorage.getItem(
      "kiRebirths3"
    )
  ) || 0;


const defaultUpgrades = {
  damage: 1,
  bullets: 1,
  cooling: 1,
  health: 1,
  precision: 1,
  crit: 1,
  magnet: 1,
  bulletSpeed: 0
};

let upgrades = {
  ...defaultUpgrades,
  ...(JSON.parse(
    localStorage.getItem(
      "kiUpgrades3"
    )
  ) || {})
};

if (
  typeof upgrades.bulletSpeed !==
  "number"
) {
  upgrades.bulletSpeed =
    0;
}


let tutorialSeen =
  localStorage.getItem(
    "kiTutorialSeen3"
  ) ===
  "true";


let owned =
  JSON.parse(
    localStorage.getItem(
      "kiOwned3"
    )
  ) || {
    guns: ["pulse"],
    drones: [],
    keyboards: ["standard"]
  };


let equipped =
  JSON.parse(
    localStorage.getItem(
      "kiEquipped3"
    )
  ) || {
    gun: "pulse",
    drone: null,
    keyboard: "standard",
    keycap: "standard"
  };


let ownedKeycaps =
  JSON.parse(
    localStorage.getItem(
      "kiKeycaps3"
    )
  ) || [
    "standard"
  ];


// ========================================================
// ITEMS
// ========================================================

const guns = {

  pulse: {
    name:
      "Pulse Blaster",

    icon:
      "🔫",

    price:
      0,

    description:
      "Balanced blue plasma.",

    damage:
      1,

    heat:
      1,

    bulletClass:
      "pulse",

    speed:
      -13,

    sound:
      "pulse"
  },


  redLaser: {
    name:
      "Red Laser",

    icon:
      "🔴",

    price:
      180,

    description:
      "Fast red beams with low heat.",

    damage:
      0.92,

    heat:
      0.72,

    bulletClass:
      "red-laser",

    speed:
      -18,

    sound:
      "laser"
  },


  cryo: {
    name:
      "Cryo Blaster",

    icon:
      "❄️",

    price:
      400,

    description:
      "Freezes enemies sometimes.",

    damage:
      1,

    heat:
      0.95,

    bulletClass:
      "cryo",

    speed:
      -12,

    sound:
      "cryo"
  },


  flame: {
    name:
      "Flame Cannon",

    icon:
      "🔥",

    price:
      650,

    description:
      "Burning fireballs.",

    damage:
      1.08,

    heat:
      1.15,

    bulletClass:
      "fire",

    speed:
      -11,

    sound:
      "flame"
  },


  scatter: {
    name:
      "Scatter Blaster",

    icon:
      "💥",

    price:
      950,

    description:
      "Wide burst of smaller shots.",

    damage:
      0.78,

    heat:
      1.25,

    bulletClass:
      "scatter",

    speed:
      -12,

    sound:
      "scatter"
  },


  rail: {
    name:
      "Railgun",

    icon:
      "⚡",

    price:
      1600,

    description:
      "Massive damage and heavy heat.",

    damage:
      2.35,

    heat:
      1.75,

    bulletClass:
      "rail",

    speed:
      -20,

    sound:
      "rail"
  },


  void: {
    name:
      "Void Cannon",

    icon:
      "🌌",

    price:
      3200,

    description:
      "Explosive purple energy.",

    damage:
      1.65,

    heat:
      1.3,

    bulletClass:
      "void",

    speed:
      -10,

    sound:
      "void"
  },


  nova: {
    name:
      "Nova Pulse",

    icon:
      "☄️",

    price:
      5200,

    description:
      "Heavy starfire bursts with a brighter trail.",

    damage:
      2.2,

    heat:
      1.55,

    bulletClass:
      "nova",

    speed:
      -16,

    sound:
      "rail"
  },


  arc: {
    name:
      "Arc Storm",

    icon:
      "⚙️",

    price:
      7600,

    description:
      "Charged shots that hit harder at range.",

    damage:
      2.7,

    heat:
      1.8,

    bulletClass:
      "arc",

    speed:
      -19,

    sound:
      "void"
  }

};


const drones = {

  gun: {
    name:
      "Gun Drone",

    icon:
      "🛸",

    price:
      400,

    description:
      "Automatically shoots enemies."
  },


  repair: {
    name:
      "Repair Drone",

    icon:
      "🤖",

    price:
      650,

    description:
      "Repairs shield slowly."
  },


  cryo: {
    name:
      "Cryo Drone",

    icon:
      "❄️",

    price:
      900,

    description:
      "Occasionally freezes a mob."
  },


  coin: {
    name:
      "Coin Drone",

    icon:
      "🪙",

    price:
      1300,

    description:
      "Raises kill credit rewards."
  },


  tesla: {
    name:
      "Tesla Drone",

    icon:
      "⚡",

    price:
      1900,

    description:
      "Zaps several mobs."
  },


  prism: {
    name:
      "Prism Drone",

    icon:
      "🔷",

    price:
      3100,

    description:
      "Quick multi-hit bursts for elite mobs."
  },


  harvester: {
    name:
      "Harvester Drone",

    icon:
      "🌾",

    price:
      4300,

    description:
      "Steals extra coins from each kill."
  }

};


const keyboards = {

  standard: {
    name:
      "Standard Board",

    icon:
      "⌨️",

    price:
      0,

    description:
      "Standard keyboard case.",

    shield:
      0,

    cooling:
      0,

    className:
      ""
  },


  neon: {
    name:
      "Neon Board",

    icon:
      "🌈",

    price:
      300,

    description:
      "+10 shield.",

    shield:
      10,

    cooling:
      0,

    className:
      "neon-board"
  },


  military: {
    name:
      "Military Board",

    icon:
      "🪖",

    price:
      500,

    description:
      "+25 shield.",

    shield:
      25,

    cooling:
      0,

    className:
      "military-board"
  },


  cryo: {
    name:
      "Cryo Board",

    icon:
      "🧊",

    price:
      850,

    description:
      "+15 shield and better cooling.",

    shield:
      15,

    cooling:
      0.65,

    className:
      "cryo-board"
  },


  void: {
    name:
      "Void Board",

    icon:
      "🌌",

    price:
      1800,

    description:
      "+50 shield and faster cooling.",

    shield:
      50,

    cooling:
      0.45,

    className:
      "void-board"
  },


  sentinel: {
    name:
      "Sentinel Board",

    icon:
      "🛰️",

    price:
      3600,

    description:
      "+80 shield, +0.85 cooling, warmer build.",

    shield:
      80,

    cooling:
      0.85,

    className:
      "sentinel-board"
  },


  eclipse: {
    name:
      "Eclipse Board",

    icon:
      "🌑",

    price:
      5600,

    description:
      "+120 shield and elite cooling tuning.",

    shield:
      120,

    cooling:
      0.95,

    className:
      "eclipse-board"
  }

};


const keycaps = {

  standard: {
    name:
      "Standard",

    className:
      ""
  },

  red: {
    name:
      "Red",

    className:
      "keycap-red"
  },

  blue: {
    name:
      "Blue",

    className:
      "keycap-blue"
  },

  green: {
    name:
      "Green",

    className:
      "keycap-green"
  },

  yellow: {
    name:
      "Yellow",

    className:
      "keycap-yellow"
  },

  purple: {
    name:
      "Purple",

    className:
      "keycap-purple"
  },

  pink: {
    name:
      "Pink",

    className:
      "keycap-pink"
  },

  orange: {
    name:
      "Orange",

    className:
      "keycap-orange"
  },

  white: {
    name:
      "White",

    className:
      "keycap-white"
  },

  rainbow: {
    name:
      "Rainbow",

    className:
      "keycap-rainbow"
  },

  galaxy: {
    name:
      "Galaxy",

    className:
      "keycap-galaxy"
  }

};


// ========================================================
// MOBS
// ========================================================

const enemyTypes = {

  zombie: {
    name:
      "SPACE ZOMBIE",

    icon:
      "🧟",

    hp:
      32,

    speed:
      0.46,

    damage:
      10,

    reward:
      1,

    unlock:
      1
  },


  armorBeast: {
    name:
      "ARMOR BEAST",

    icon:
      "🦎",

    hp:
      55,

    shield:
      40,

    speed:
      0.36,

    damage:
      15,

    reward:
      2,

    unlock:
      5
  },


  runner: {
    name:
      "VOID RUNNER",

    icon:
      "👹",

    hp:
      42,

    speed:
      0.84,

    damage:
      15,

    reward:
      2,

    unlock:
      10
  },


  blastBug: {
    name:
      "BLAST BUG",

    icon:
      "🪲",

    hp:
      60,

    speed:
      0.57,

    damage:
      30,

    reward:
      3,

    unlock:
      15
  },


  teleporter: {
    name:
      "PHASE ALIEN",

    icon:
      "👽",

    hp:
      90,

    speed:
      0.45,

    damage:
      18,

    reward:
      4,

    unlock:
      20
  },


  mutant: {
    name:
      "VOID MUTANT",

    icon:
      "🧟‍♂️",

    hp:
      130,

    speed:
      0.4,

    damage:
      22,

    reward:
      5,

    unlock:
      25
  },


  wraith: {
    name:
      "NIGHT WRAITH",

    icon:
      "👻",

    hp:
      170,

    speed:
      0.92,

    damage:
      26,

    reward:
      7,

    unlock:
      30
  },


  brute: {
    name:
      "VOID BRUTE",

    icon:
      "🦴",

    hp:
      240,

    speed:
      0.28,

    damage:
      34,

    reward:
      9,

    unlock:
      35
  },


  seer: {
    name:
      "ASTRAL SEER",

    icon:
      "🔮",

    hp:
      290,

    speed:
      0.34,

    damage:
      38,

    reward:
      12,

    unlock:
      40
  },


  glitchHound: {
    name:
      "VOID HOUND",

    icon:
      "🐺",

    hp:
      360,

    speed:
      0.76,

    damage:
      44,

    reward:
      17,

    unlock:
      46
  },


  runeCrawler: {
    name:
      "ARC SPIDER",

    icon:
      "🕷️",

    hp:
      470,

    speed:
      0.52,

    damage:
      50,

    reward:
      21,

    unlock:
      52
  },


  necromancer: {
    name:
      "DARK SUMMONER",

    icon:
      "🧙‍♂️",

    hp:
      165,

    speed:
      0.3,

    damage:
      20,

    reward:
      6,

    unlock:
      30
  },


  novaStalker: {
    name:
      "NOVA STALKER",

    icon:
      "🛸",

    hp:
      380,

    speed:
      0.59,

    damage:
      42,

    reward:
      16,

    unlock:
      45
  },


  titan: {
    name:
      "GALACTIC TITAN",

    icon:
      "👾",

    hp:
      800,

    speed:
      0.19,

    damage:
      50,

    reward:
      25,

    unlock:
      10
  }

};


// ========================================================
// WORDS
// ========================================================

const normalWords = [
  "GO",
  "UP",
  "GUN",
  "HIT",
  "RUN"
];


const eliteWords = [
  "FIRE",
  "BOOM",
  "STAR"
];


const bossWords = [
  "BOSS",
  "VOID"
];


const worldOrder = [
  "orbit",
  "moon",
  "mars",
  "void",
  "cyber"
];


const worlds = {
  orbit: {
    name: "ORBITAL STATION",
    range: "WAVES 1–10",
    intro: "THREAT LEVEL RISING",
    bodyClass: "world-orbit"
  },

  moon: {
    name: "LUNAR WARD",
    range: "WAVES 11–20",
    intro: "SECTOR DOCKED",
    bodyClass: "world-moon"
  },

  mars: {
    name: "RED FRONTIER",
    range: "WAVES 21–30",
    intro: "HELLSCAPE ALERT",
    bodyClass: "world-mars"
  },

  void: {
    name: "VOID DEPTHS",
    range: "WAVES 31–40",
    intro: "DEEP SPACE COLLAPSE",
    bodyClass: "world-void"
  },

  cyber: {
    name: "CYBER NECROPOLIS",
    range: "WAVES 41+",
    intro: "FINAL SECTOR",
    bodyClass: "world-cyber"
  }
};


const bossTypes = {
  titan: {
    name: "GALACTIC TITAN",
    icon: "👾",
    hp: 900,
    speed: 0.19,
    damage: 52,
    reward: 28,
    unlock: 10,
    tier: "boss-tier-1",
    world: "orbit"
  },

  moonWarden: {
    name: "MOON WARDEN",
    icon: "🛡️",
    hp: 1600,
    speed: 0.22,
    damage: 60,
    reward: 40,
    unlock: 20,
    tier: "boss-tier-2",
    world: "moon"
  },

  magmaBeast: {
    name: "MAGMA BEHEMOTH",
    icon: "🔥",
    hp: 2400,
    speed: 0.25,
    damage: 68,
    reward: 55,
    unlock: 30,
    tier: "boss-tier-3",
    world: "mars"
  },

  abyssalKing: {
    name: "ABYSSAL KING",
    icon: "🌌",
    hp: 3400,
    speed: 0.2,
    damage: 78,
    reward: 70,
    unlock: 40,
    tier: "boss-tier-4",
    world: "void"
  },

  eclipseSentinel: {
    name: "ECLIPSE SENTINEL",
    icon: "🛸",
    hp: 5000,
    speed: 0.18,
    damage: 90,
    reward: 100,
    unlock: 50,
    tier: "boss-tier-5",
    world: "cyber"
  }
};


// ========================================================
// STATE
// ========================================================

let running =
  false;


let wave =
  1;


let kills =
  0;


let combo =
  0;


let runCoins =
  0;


let maxHealth =
  100;


let health =
  100;


let heat =
  0;


let precision =
  100;


let overheated =
  false;


let lastShot =
  0;


let bullets =
  [];


let enemies =
  [];


let enemiesRemaining =
  0;


let waveTotal =
  0;


let waveChanging =
  false;


let spawnTimers =
  [];


let activeExecution =
  null;


let droneTimer =
  null;


let floatingCoinTimer =
  null;


let currentModifier =
  "NONE";


let currentWorld =
  "orbit";


// ========================================================
// ELEMENTS
// ========================================================

const lobby =
  document.getElementById(
    "lobby"
  );


const game =
  document.getElementById(
    "game"
  );


const arena =
  document.getElementById(
    "arena"
  );


const keyboard =
  document.getElementById(
    "keyboard"
  );


const enemyLayer =
  document.getElementById(
    "enemy-layer"
  );


const bulletLayer =
  document.getElementById(
    "bullet-layer"
  );


const coinLayer =
  document.getElementById(
    "coin-layer"
  );


const particleLayer =
  document.getElementById(
    "particle-layer"
  );


const combatLayer =
  document.getElementById(
    "combat-text-layer"
  );


const enemyProjectileLayer =
  document.getElementById(
    "enemy-projectile-layer"
  );


// ========================================================
// USERNAME
// ========================================================

function checkUsername() {

  if (
    username
  ) {

    updateUsernameUI();
    showTutorial();
    return;

  }


  document
    .getElementById(
      "username-overlay"
    )
    .classList.add(
      "show"
    );

}


function showTutorial() {

  if (
    tutorialSeen
  ) {

    return;

  }

  const overlay =
    document.getElementById(
      "tutorial-overlay"
    );

  overlay.classList.add(
    "show"
  );

}


document
  .getElementById(
    "tutorial-close"
  )
  .addEventListener(
    "click",
    () => {
      tutorialSeen =
        true;
      save();
      document
        .getElementById(
          "tutorial-overlay"
        )
        .classList.remove(
          "show"
        );
    }
  );


document
  .getElementById(
    "username-submit"
  )
  .addEventListener(

    "click",

    createUsername

  );


document
  .getElementById(
    "username-input"
  )
  .addEventListener(

    "keydown",

    event => {

      if (
        event.key ===
        "Enter"
      ) {

        createUsername();

      }

    }

  );


function createUsername() {

  const input =
    document.getElementById(
      "username-input"
    );


  const error =
    document.getElementById(
      "username-error"
    );


  const value =
    input.value
    .trim();


  const normalized =
    value.toLowerCase();


  if (
    value.length <
    3
  ) {

    error.textContent =
      "Username must be at least 3 characters.";

    return;

  }


  if (
    !/^[a-zA-Z0-9_]+$/.test(
      value
    )
  ) {

    error.textContent =
      "Use only letters, numbers and underscores.";

    return;

  }


  if (
    usedNames
      .map(
        name =>
          name.toLowerCase()
      )
      .includes(
        normalized
      )
  ) {

    error.textContent =
      "That username is already used on this device.";

    playErrorSound();

    return;

  }


  username =
    value;


  usedNames.push(
    value
  );


  localStorage.setItem(
    "kiUsername3",
    username
  );


  localStorage.setItem(
    "kiUsedNames3",
    JSON.stringify(
      usedNames
    )
  );


  document
    .getElementById(
      "username-overlay"
    )
    .classList.remove(
      "show"
    );


  playSuccessSound();

  updateUsernameUI();

}


function updateUsernameUI() {

  document.getElementById(
    "profile-username"
  ).textContent =
    username ||
    "COMMANDER";


  document.getElementById(
    "game-username"
  ).textContent =
    username ||
    "COMMANDER";

}


// ========================================================
// AUDIO ENGINE
// ========================================================

let audioContext =
  null;


function getAudio() {

  if (
    !audioContext
  ) {

    audioContext =
      new (
        window.AudioContext ||
        window.webkitAudioContext
      )();

  }


  return audioContext;

}


function tone(
  frequency,
  duration,
  type = "sine",
  volume = 0.025,
  endFrequency = null
) {

  try {

    const ctx =
      getAudio();


    const osc =
      ctx.createOscillator();


    const gain =
      ctx.createGain();


    osc.type =
      type;


    osc.frequency.setValueAtTime(
      frequency,
      ctx.currentTime
    );


    if (
      endFrequency
    ) {

      osc.frequency.exponentialRampToValueAtTime(
        endFrequency,
        ctx.currentTime +
        duration
      );

    }


    gain.gain.setValueAtTime(
      volume,
      ctx.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      ctx.currentTime +
      duration
    );


    osc.connect(
      gain
    );


    gain.connect(
      ctx.destination
    );


    osc.start();


    osc.stop(
      ctx.currentTime +
      duration
    );

  }

  catch (error) {}

}


// ========================================================
// UNIQUE GUN SOUNDS
// ========================================================

function playGunSound(
  gunId
) {

  if (
    gunId ===
    "pulse"
  ) {

    tone(
      420,
      0.055,
      "square",
      0.018,
      280
    );

  }


  else if (
    gunId ===
    "redLaser"
  ) {

    tone(
      900,
      0.07,
      "sawtooth",
      0.016,
      430
    );

  }


  else if (
    gunId ===
    "cryo"
  ) {

    tone(
      780,
      0.09,
      "sine",
      0.018,
      1150
    );

    setTimeout(
      () =>
        tone(
          1300,
          0.05,
          "sine",
          0.008,
          900
        ),
      25
    );

  }


  else if (
    gunId ===
    "flame"
  ) {

    tone(
      150,
      0.11,
      "sawtooth",
      0.02,
      70
    );

  }


  else if (
    gunId ===
    "scatter"
  ) {

    tone(
      105,
      0.08,
      "square",
      0.028,
      65
    );

    setTimeout(
      () =>
        tone(
          190,
          0.035,
          "square",
          0.012,
          95
        ),
      20
    );

  }


  else if (
    gunId ===
    "rail"
  ) {

    tone(
      85,
      0.16,
      "sawtooth",
      0.028,
      35
    );

    setTimeout(
      () =>
        tone(
          1100,
          0.12,
          "sine",
          0.02,
          380
        ),
      25
    );

  }


  else if (
    gunId ===
    "void"
  ) {

    tone(
      70,
      0.18,
      "triangle",
      0.025,
      40
    );

    setTimeout(
      () =>
        tone(
          320,
          0.15,
          "sine",
          0.015,
          110
        ),
      20
    );

  }

}


function playKillSound() {

  tone(
    220,
    0.05,
    "square",
    0.018,
    130
  );


  setTimeout(
    () =>
      tone(
        520,
        0.06,
        "sine",
        0.012,
        760
      ),
    25
  );

}


function playCoinSound() {

  tone(
    720,
    0.05,
    "sine",
    0.025,
    980
  );


  setTimeout(
    () =>
      tone(
        1200,
        0.05,
        "sine",
        0.018,
        1500
      ),
    45
  );

}


function playCrateSound() {

  tone(
    120,
    0.15,
    "triangle",
    0.025,
    75
  );


  setTimeout(
    () =>
      tone(
        500,
        0.15,
        "sine",
        0.018,
        900
      ),
    100
  );

}


function playBreachSound() {

  tone(
    90,
    0.2,
    "sawtooth",
    0.03,
    45
  );

}


function playJamSound() {

  tone(
    180,
    0.07,
    "square",
    0.02,
    90
  );


  setTimeout(
    () =>
      tone(
        130,
        0.07,
        "square",
        0.015,
        70
      ),
    70
  );

}


function playDroneSound(
  type
) {

  if (
    type ===
    "gun"
  ) {

    tone(
      650,
      0.04,
      "square",
      0.012,
      420
    );

  }


  if (
    type ===
    "repair"
  ) {

    tone(
      520,
      0.1,
      "sine",
      0.01,
      780
    );

  }


  if (
    type ===
    "cryo"
  ) {

    tone(
      980,
      0.08,
      "sine",
      0.012,
      1300
    );

  }


  if (
    type ===
    "tesla"
  ) {

    tone(
      1300,
      0.05,
      "square",
      0.012,
      700
    );

  }

}


function playSuccessSound() {

  tone(
    500,
    0.06,
    "sine",
    0.025,
    700
  );


  setTimeout(
    () =>
      tone(
        800,
        0.07,
        "sine",
        0.02,
        1100
      ),
    55
  );

}


function playErrorSound() {

  tone(
    130,
    0.13,
    "square",
    0.025,
    80
  );

}


function playRebirthSound() {

  tone(
    180,
    0.3,
    "sine",
    0.025,
    600
  );


  setTimeout(
    () =>
      tone(
        600,
        0.3,
        "sine",
        0.02,
        1300
      ),
    160
  );

}


// ========================================================
// MENU
// ========================================================

document
  .querySelectorAll(
    ".menu-tab"
  )
  .forEach(

    button => {

      button.addEventListener(

        "click",

        () => {

          tone(
            430,
            0.035,
            "sine",
            0.01,
            520
          );


          const page =
            button.dataset.menu;


          document
            .querySelectorAll(
              ".menu-tab"
            )
            .forEach(

              tab =>
                tab.classList.toggle(
                  "active",
                  tab === button
                )

            );


          document
            .querySelectorAll(
              ".menu-page"
            )
            .forEach(

              pageElement =>
                pageElement.classList.toggle(
                  "active",
                  pageElement.dataset.page === page
                )

            );


          if (
            page ===
            "rebirth"
          ) {

            updateRebirthUI();

          }

        }

      );

    }

  );


// ========================================================
// SHOP RENDERING
// ========================================================

function renderShops() {

  renderShop(
    "guns",
    guns,
    document.getElementById(
      "gun-shop"
    )
  );


  renderShop(
    "drones",
    drones,
    document.getElementById(
      "drone-shop"
    )
  );


  renderShop(
    "keyboards",
    keyboards,
    document.getElementById(
      "keyboard-shop"
    )
  );


  renderKeycaps();

}


function renderShop(
  category,
  data,
  container
) {

  container.innerHTML =
    "";


  Object.entries(
    data
  )
  .forEach(

    ([id, item]) => {

      const isOwned =
        owned[
          category
        ].includes(
          id
        );


      const equippedId =
        category ===
        "guns"
          ?
          equipped.gun
          :
        category ===
        "drones"
          ?
          equipped.drone
          :
          equipped.keyboard;


      const isEquipped =
        equippedId ===
        id;


      const card =
        document.createElement(
          "article"
        );


      card.className =
        "shop-item";


      if (
        isEquipped
      ) {

        card.classList.add(
          "equipped"
        );

      }


      card.innerHTML = `

        ${
          isEquipped
            ?
            `
            <div class="equipped-badge">
              EQUIPPED
            </div>
            `
            :
            ""
        }

        <div class="item-icon">
          ${item.icon}
        </div>

        <h3>
          ${item.name}
        </h3>

        <p>
          ${item.description}
        </p>

        <div class="item-price">

          ${
            isOwned
              ?
              "OWNED"
              :
              `🪙 ${item.price}`
          }

        </div>

        <button class="item-action">

          ${
            isEquipped
              ?
              "EQUIPPED"
              :
            isOwned
              ?
              "EQUIP"
              :
              "BUY"
          }

        </button>

      `;


      card
        .querySelector(
          ".item-action"
        )
        .addEventListener(

          "click",

          () => {

            if (
              isEquipped
            ) {

              return;

            }


            if (
              isOwned
            ) {

              equipItem(
                category,
                id
              );

            }

            else {

              buyItem(
                category,
                id
              );

            }

          }

        );


      container.appendChild(
        card
      );

    }

  );

}


// ========================================================
// KEYCAP COLLECTION
// ========================================================

function renderKeycaps() {

  const list =
    document.getElementById(
      "keycap-list"
    );


  list.innerHTML =
    "";


  ownedKeycaps.forEach(

    id => {

      const data =
        keycaps[
          id
        ];


      if (
        !data
      ) {

        return;

      }


      const button =
        document.createElement(
          "button"
        );


      button.className =
        "keycap-chip";


      if (
        equipped.keycap ===
        id
      ) {

        button.classList.add(
          "active"
        );

      }


      button.textContent =
        data.name;


      const previewClass =
        data.className;


      if (
        previewClass ===
        "keycap-red"
      ) {
        button.style.background =
          "#b9213b";
      }

      else if (
        previewClass ===
        "keycap-blue"
      ) {
        button.style.background =
          "#315db5";
      }

      else if (
        previewClass ===
        "keycap-green"
      ) {
        button.style.background =
          "#228755";
      }

      else if (
        previewClass ===
        "keycap-yellow"
      ) {
        button.style.background =
          "#b99b2b";

        button.style.color =
          "#211b00";
      }

      else if (
        previewClass ===
        "keycap-purple"
      ) {
        button.style.background =
          "#7128b7";
      }

      else if (
        previewClass ===
        "keycap-pink"
      ) {
        button.style.background =
          "#c43291";
      }

      else if (
        previewClass ===
        "keycap-orange"
      ) {
        button.style.background =
          "#b95d21";
      }

      else if (
        previewClass ===
        "keycap-white"
      ) {
        button.style.background =
          "#e7edf4";

        button.style.color =
          "#10151c";
      }

      else if (
        previewClass ===
        "keycap-rainbow"
      ) {

        button.style.background =
          "linear-gradient(90deg,#ff5570,#ffd44d,#55e58f,#50b7ff,#bf67ff)";

      }

      else if (
        previewClass ===
        "keycap-galaxy"
      ) {

        button.style.background =
          "linear-gradient(90deg,#251052,#6630aa,#254e98)";

      }


      button.addEventListener(

        "click",

        () => {

          equipped.keycap =
            id;


          playSuccessSound();

          save();

          applyLoadoutVisuals();

          renderKeycaps();

        }

      );


      list.appendChild(
        button
      );

    }

  );

}


// ========================================================
// BUY / EQUIP
// ========================================================

function buyItem(
  category,
  id
) {

  const data =
    category ===
    "guns"
      ?
      guns
      :
    category ===
    "drones"
      ?
      drones
      :
      keyboards;


  const item =
    data[
      id
    ];


  if (
    coins <
    item.price
  ) {

    playErrorSound();

    flashCoinBalance();

    return;

  }


  coins -=
    item.price;


  owned[
    category
  ].push(
    id
  );


  equipItem(
    category,
    id
  );


  save();

}


function equipItem(
  category,
  id
) {

  if (
    category ===
    "guns"
  ) {

    equipped.gun =
      id;

  }


  if (
    category ===
    "drones"
  ) {

    equipped.drone =
      id;

  }


  if (
    category ===
    "keyboards"
  ) {

    equipped.keyboard =
      id;

  }


  playSuccessSound();


  save();

  renderShops();

  applyLoadoutVisuals();

}


// ========================================================
// UPGRADES
// ========================================================

const upgradeCosts = {

  damage:
    8,

  bullets:
    25,

  cooling:
    12,

  health:
    10,

  precision:
    18,

  crit:
    26,

  magnet:
    30,

  bulletSpeed:
    35

};


function getUpgradeCost(
  type
) {

  const level =
    Number.isFinite(
      upgrades[type]
    )
      ? upgrades[type]
      : 0;

  return Math.floor(

    (upgradeCosts[type] || 0)

    *

    Math.pow(
      1.65,
      level -
      1
    )

  );

}


document
  .querySelectorAll(
    ".quick-upgrade"
  )
  .forEach(

    button => {

      button.addEventListener(

        "click",

        () => {

          const type =
            button.dataset.upgrade;


          if (
            type ===
            "bullets" &&
            upgrades.bullets >=
            6
          ) {

            playErrorSound();

            return;

          }

          if (
            (type ===
              "precision" &&
              upgrades.precision >=
              8) ||
            (type ===
              "crit" &&
              upgrades.crit >=
              8) ||
            (type ===
              "magnet" &&
              upgrades.magnet >=
              8) ||
            (type ===
              "bulletSpeed" &&
              upgrades.bulletSpeed >=
              8)
          ) {

            playErrorSound();

            return;

          }


          const cost =
            getUpgradeCost(
              type
            );


          if (
            coins <
            cost
          ) {

            flashCoinBalance();

            playErrorSound();

            return;

          }


          coins -=
            cost;


          upgrades[
            type
          ]++;


          playSuccessSound();

          save();

        }

      );

    }

  );


// ========================================================
// CRATES — NERFED
// ========================================================

const cratePrices = {

  basic:
    80,

  neon:
    220,

  cosmic:
    500

};


const basicKeycapPool = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "white"
];


const neonKeycapPool = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "pink",
  "purple"
];


const cosmicKeycapPool = [
  "pink",
  "purple",
  "rainbow",
  "galaxy"
];


document
  .querySelectorAll(
    ".crate-button"
  )
  .forEach(

    button => {

      button.addEventListener(

        "click",

        () => {

          openCrate(
            button.dataset.crate
          );

        }

      );

    }

  );


function openCrate(
  type
) {

  const price =
    cratePrices[
      type
    ];


  if (
    coins <
    price
  ) {

    flashCoinBalance();

    playErrorSound();

    return;

  }


  coins -=
    price;


  save();


  const overlay =
    document.getElementById(
      "crate-overlay"
    );


  const crate =
    document.getElementById(
      "opening-crate"
    );


  const light =
    document.querySelector(
      ".crate-light"
    );


  document.getElementById(
    "crate-result-title"
  ).textContent =
    "OPENING...";


  document.getElementById(
    "crate-result-description"
  ).textContent =
    "CHECKING KEYCAPS";


  document.getElementById(
    "close-crate"
  ).style.display =
    "none";


  crate.className =
    "shake";


  overlay.classList.add(
    "show"
  );


  playCrateSound();


  setTimeout(

    () => {

      crate.className =
        "burst";


      light.classList.add(
        "flash"
      );


      const reward =
        getCrateReward(
          type
        );


      document.getElementById(
        "crate-result-title"
      ).textContent =
        reward.title;


      document.getElementById(
        "crate-result-description"
      ).textContent =
        reward.description;


      document.getElementById(
        "close-crate"
      ).style.display =
        "block";


      playSuccessSound();


      save();

      renderKeycaps();


      setTimeout(

        () => {

          light.classList.remove(
            "flash"
          );

        },

        550

      );

    },

    1400

  );

}


function getCrateReward(
  type
) {

  let pool =
    basicKeycapPool;


  let keycapChance =
    0.72;


  let duplicateCoins =
    25;


  if (
    type ===
    "neon"
  ) {

    pool =
      neonKeycapPool;


    keycapChance =
      0.82;


    duplicateCoins =
      55;

  }


  if (
    type ===
    "cosmic"
  ) {

    pool =
      cosmicKeycapPool;


    keycapChance =
      0.9;


    duplicateCoins =
      120;

  }


  if (
    Math.random() <
    keycapChance
  ) {

    const keycap =
      randomItem(
        pool
      );


    if (
      !ownedKeycaps.includes(
        keycap
      )
    ) {

      ownedKeycaps.push(
        keycap
      );


      return {

        title:
          "NEW KEYCAP!",

        description:
          `🎨 ${keycaps[keycap].name.toUpperCase()} KEYCAPS`

      };

    }


    coins +=
      duplicateCoins;


    return {

      title:
        "DUPLICATE",

      description:
        `Converted to 🪙${duplicateCoins}`

    };

  }


  const smallCoins =
    type ===
    "basic"
      ?
      randomInteger(
        15,
        40
      )
      :
    type ===
    "neon"
      ?
      randomInteger(
        45,
        90
      )
      :
      randomInteger(
        100,
        170
      );


  coins +=
    smallCoins;


  return {

    title:
      "CREDIT CHIP",

    description:
      `🪙 +${smallCoins}`

  };

}


document
  .getElementById(
    "close-crate"
  )
  .addEventListener(

    "click",

    () => {

      document
        .getElementById(
          "crate-overlay"
        )
        .classList.remove(
          "show"
        );

    }

  );


// ========================================================
// REBIRTH
// ========================================================

function rebirthRequirement() {

  return {

    wave:
      20 +
      rebirths *
      5,

    coins:
      Math.floor(
        2500 *
        Math.pow(
          1.7,
          rebirths
        )
      )

  };

}


function rebirthPreviewText() {

  const nextBonus =
    1 +
    rebirths *
    0.08;

  const nextCash =
    cashMultiplier() +
    0.5;

  const nextShield =
    rebirthShieldBonus() +
    10;

  return [
    `+${(nextBonus * 100 - 100).toFixed(0)}% damage`,
    `+${nextCash.toFixed(2)}× coin gain`,
    `+${nextShield} starting shield`
  ];

}


function cashMultiplier() {

  return (
    1 +
    rebirths *
    0.5
  );

}


function rebirthDamageMultiplier() {

  return (
    1 +
    rebirths *
    0.08
  );

}


function rebirthShieldBonus() {

  return (
    rebirths *
    10
  );

}


function updateRebirthUI() {

  const requirement =
    rebirthRequirement();

  const preview =
    rebirthPreviewText();


  document.getElementById(
    "rebirth-cash-multiplier"
  ).textContent =
    cashMultiplier()
    .toFixed(2)
    +
    "×";


  document.getElementById(
    "rebirth-damage-bonus"
  ).textContent =
    `+${rebirths * 8}%`;


  document.getElementById(
    "rebirth-shield-bonus"
  ).textContent =
    `+${rebirthShieldBonus()}`;


  document.getElementById(
    "rebirth-wave-requirement"
  ).textContent =
    `Reach Wave ${requirement.wave}`;


  document.getElementById(
    "rebirth-coin-requirement"
  ).textContent =
    `Have 🪙${requirement.coins.toLocaleString()}`;


  document.getElementById(
    "rebirth-preview"
  ).innerHTML =
    preview
      .map(
        line =>
          `<span>${line}</span>`
      )
      .join("");


  const canRebirth =
    bestWave >=
    requirement.wave
    &&
    coins >=
    requirement.coins;


  document.getElementById(
    "rebirth-button"
  ).disabled =
    !canRebirth;

}


document
  .getElementById(
    "rebirth-button"
  )
  .addEventListener(

    "click",

    () => {

      const requirement =
        rebirthRequirement();


      if (
        bestWave <
        requirement.wave
        ||
        coins <
        requirement.coins
      ) {

        playErrorSound();

        return;

      }


      rebirths++;


      coins =
        0;


      bestWave =
        0;


      upgrades = {
        damage:
          1,

        bullets:
          1,

        cooling:
          1,

        health:
          1
      };


      owned = {
        guns:
          ["pulse"],

        drones:
          [],

        keyboards:
          ["standard"]
      };


      equipped.gun =
        "pulse";


      equipped.drone =
        null;


      equipped.keyboard =
        "standard";


      // keycaps stay forever
      // username stays forever


      playRebirthSound();


      save();

      renderShops();

      applyLoadoutVisuals();

      updateRebirthUI();


      showLobbyFlash(
        `REBIRTH ${rebirths}!`
      );

    }

  );


// ========================================================
// START RUN
// ========================================================

document
  .getElementById(
    "start-run"
  )
  .addEventListener(

    "click",

    startGame

  );


function startGame() {

  lobby.classList.remove(
    "active"
  );


  game.classList.add(
    "active"
  );


  clearArena();

  clearJammedKeys();


  currentWorld =
    "orbit";

  applyWorldTheme(
    currentWorld
  );


  running =
    true;


  wave =
    1;


  kills =
    0;


  combo =
    0;


  runCoins =
    0;


  heat =
    0;


  precision =
    100;


  overheated =
    false;


  const board =
    keyboards[
      equipped.keyboard
    ];


  maxHealth =
    100
    +
    upgrades.health *
    18
    +
    board.shield
    +
    rebirthShieldBonus();


  health =
    maxHealth;


  applyLoadoutVisuals();


  startDrone();


  scheduleFloatingCoin();


  showAnnouncement(
    "⚠ INVASION",
    "DEFEND!"
  );


  updateHUD();


  setTimeout(
    startWave,
    800
  );

}


function getWorldForWave(
  targetWave
) {

  const index =
    Math.min(
      worldOrder.length -
      1,
      Math.floor(
        (targetWave -
          1) /
        10
      )
    );

  return worldOrder[
    index
  ];

}


function applyWorldTheme(
  worldId
) {

  const world =
    worlds[
      worldId
    ] ||
    worlds.orbit;

  document.body.classList.remove(
    ...Object.keys(
      worlds
    ).map(
      key =>
        `world-${key}`
    )
  );

  document.body.classList.add(
    world.bodyClass
  );

  document.getElementById(
    "world-name"
  ).textContent =
    world.name;

  document.getElementById(
    "world-range"
  ).textContent =
    world.range;

}


function showWorldTransition(
  worldId
) {

  const world =
    worlds[
      worldId
    ] ||
    worlds.orbit;

  const box =
    document.getElementById(
      "world-transition"
    );

  document.getElementById(
    "world-transition-small"
  ).textContent =
    "ENTERING SECTOR";

  document.getElementById(
    "world-transition-name"
  ).textContent =
    world.name;

  document.getElementById(
    "world-transition-sub"
  ).textContent =
    world.intro;

  box.classList.remove(
    "show"
  );

  void box.offsetWidth;

  box.classList.add(
    "show"
  );

  setTimeout(
    () =>
      box.classList.remove(
        "show"
      ),
    2200
  );

}


// ========================================================
// KEYBOARD VISUALS
// ========================================================

function applyLoadoutVisuals() {

  keyboard.className =
    "";


  const board =
    keyboards[
      equipped.keyboard
    ];


  if (
    board.className
  ) {

    keyboard.classList.add(
      board.className
    );

  }


  const keycap =
    keycaps[
      equipped.keycap
    ];


  if (
    keycap &&
    keycap.className
  ) {

    keyboard.classList.add(
      keycap.className
    );

  }


  const droneVisual =
    document.getElementById(
      "drone-visual"
    );


  if (
    !equipped.drone
  ) {

    droneVisual.classList.add(
      "hidden"
    );

  }

  else {

    droneVisual.classList.remove(
      "hidden"
    );


    document.getElementById(
      "drone-body"
    ).textContent =
      drones[
        equipped.drone
      ].icon;

  }

}


// ========================================================
// WAVE SYSTEM
// ========================================================

function startWave() {

  if (
    !running
  ) {

    return;

  }


  const nextWorld =
    getWorldForWave(
      wave
    );

  if (
    nextWorld !==
    currentWorld
  ) {

    currentWorld =
      nextWorld;

    applyWorldTheme(
      currentWorld
    );

    showWorldTransition(
      currentWorld
    );

  }


  waveChanging =
    false;


  closeExecution();


  const bossWave =
    wave %
    10 ===
    0;


  const events = [
    "NONE",
    "SWARM",
    "FAST",
    "ARMORED",
    "BOUNTY"
  ];


  currentModifier =
    wave >=
    4
    &&
    Math.random() <
    0.4
      ?
      randomItem(
        events.slice(
          1
        )
      )
      :
      "NONE";


  let amount =
    6 +
    Math.floor(
      wave *
      1.5
    );


  if (
    wave ===
    1
  ) {

    amount =
      8;

  }


  if (
    wave ===
    2
  ) {

    amount =
      10;

  }


  if (
    currentModifier ===
    "SWARM"
  ) {

    amount +=
      5;

  }


  if (
    bossWave
  ) {

    const bossKey =
      getBossForWave(
        wave
      );

    const bossMeta =
      bossTypes[
        bossKey
      ];

    showAnnouncement(
      "⚠ BOSS WAVE",
      bossMeta
        ?
        bossMeta.name
        :
        "TITAN INBOUND"
    );

  }


  else if (
    wave >
    1
    &&
    wave %
    5 ===
    0
  ) {

    const newMob =
      Object.values(
        enemyTypes
      )
      .find(

        mob =>
          mob.unlock ===
          wave
          &&
          mob.name !==
          "GALACTIC TITAN"

      );


    showAnnouncement(
      "NEW MOB!",
      newMob
        ?
        newMob.name
        :
        `WAVE ${wave}`
    );

  }


  else {

    showAnnouncement(
      currentModifier ===
      "NONE"
        ?
        "WAVE INBOUND"
        :
        currentModifier,

      `WAVE ${wave}`
    );

  }


  waveTotal =
    amount;


  enemiesRemaining =
    amount;


  for (
    let i =
      0;

    i <
    amount;

    i++
  ) {

    const timer =
      setTimeout(

        () => {

          if (
            !running
          ) {

            return;

          }


          if (
            bossWave
            &&
            i ===
            0
          ) {

            spawnEnemy(
              getBossForWave(
                wave
              )
            );

          }

          else {

            spawnEnemy();

          }

        },

        i *
        Math.max(
          170,
          440 -
          wave *
          7
        )

      );


    spawnTimers.push(
      timer
    );

  }


  updateHUD();

}


// ========================================================
// MOB SELECTION
// ========================================================

function getBossForWave(
  targetWave
) {

  const worldId =
    getWorldForWave(
      targetWave
    );

  const bossPool =
    [
      "titan",
      "moonWarden",
      "magmaBeast",
      "abyssalKing",
      "eclipseSentinel"
    ]
    .filter(
      key =>
        bossTypes[
          key
        ].unlock <=
        targetWave
        &&
        bossTypes[
          key
        ].world ===
        worldId
    );

  if (
    !bossPool.length
  ) {

    return "titan";

  }

  return randomItem(
    bossPool
  );

}


function chooseEnemy() {

  const available =
    Object.keys(
      enemyTypes
    )
    .filter(

      type =>
        !Object.hasOwn(
          bossTypes,
          type
        )
        &&
        enemyTypes[
          type
        ].unlock <=
        wave

    );


  return randomItem(
    available
  );

}


// ========================================================
// SPAWN MOB
// ========================================================

function spawnEnemy(
  forced =
    null
) {

  const type =
    forced ||
    chooseEnemy();


  const bossMeta =
    bossTypes[
      type
    ];


  const base =
    bossMeta ||
    enemyTypes[
      type
    ];


  const boss =
    !!bossMeta;


  const elite =
    !boss
    &&
    wave >=
    3
    &&
    Math.random() <
    Math.min(
      0.04 +
      wave *
      0.004,
      0.22
    );


  const shooter =
    boss
    ||
    (
      Math.random() <
      0.03
    );


  let hp =
    base.hp *
    (
      1 +
      wave *
      0.07
    );


  let speed =
    base.speed *
    (
      1 +
      wave *
      0.018
    );


  let reward =
    base.reward;


  if (
    currentModifier ===
    "ARMORED"
  ) {

    hp *=
      1.4;

  }


  if (
    currentModifier ===
    "FAST"
  ) {

    speed *=
      1.4;

  }


  if (
    currentModifier ===
    "BOUNTY"
  ) {

    reward *=
      2;

  }


  if (
    elite
  ) {

    hp *=
      1.7;


    speed *=
      1.12;


    reward *=
      2;

  }


  hp =
    Math.round(
      hp
    );


  const level =
    Math.max(
      1,
      wave +
      randomInteger(
        -1,
        2
      )
    );


  const element =
    document.createElement(
      "div"
    );


  element.className =
    `enemy ${
      boss
        ?
        "boss"
        :
        ""
    }`;


  element.innerHTML = `

    <div class="enemy-info">

      <div class="enemy-tags">

        ${
          elite
            ?
            `
            <span class="enemy-tag elite-tag">
              ★ ELITE
            </span>
            `
            :
            ""
        }

        ${
          shooter
            ?
            `
            <span class="enemy-tag shooter-tag">
              🔴 SHOOTER
            </span>
            `
            :
            ""
        }

      </div>

      <div class="enemy-title">

        ${base.name}

        <span class="enemy-level">
          LV.${level}
        </span>

      </div>

      <div class="enemy-hp-text">
        ${hp} / ${hp}
      </div>

      <div class="enemy-hp">
        <div class="enemy-hp-fill"></div>
      </div>

      ${
        base.shield
          ?
          `
          <div class="enemy-shield">
            <div class="enemy-shield-fill"></div>
          </div>
          `
          :
          ""
      }

    </div>

    <div class="enemy-body">
      ${base.icon}
    </div>

    ${
      boss
        ?
        `<div class="boss-aura-ring" style="color:${bossMeta.tier.includes('2') ? '#ffdf62' : bossMeta.tier.includes('3') ? '#57edff' : bossMeta.tier.includes('4') ? '#c57aff' : bossMeta.tier.includes('5') ? '#64ff9f' : '#ff6e6e'}"></div>`
        :
        ""
    }

  `;


  enemyLayer.appendChild(
    element
  );


  const arenaRect =
    arena.getBoundingClientRect();


  const boardRect =
    keyboard.getBoundingClientRect();


  const width =
    boss
      ?
      155
      :
      110;


  if (
    boss
    &&
    element.classList
  ) {

    element.classList.add(
      bossMeta.tier
    );

  }


  const minX =
    boardRect.left -
    arenaRect.left +
    10;


  const maxX =
    boardRect.right -
    arenaRect.left -
    width -
    10;


  const shield =
    base.shield
      ?
      Math.round(
        base.shield *
        (
          1 +
          wave *
          0.05
        )
      )
      :
      0;


  const enemy = {

    type,

    base,

    element,

    boss,

    elite,

    shooter,

    level,

    hp,

    maxHp:
      hp,

    shield,

    maxShield:
      shield,

    speed,

    baseSpeed:
      speed,

    damage:
      base.damage,

    reward:
      Math.round(
        reward
      ),

    x:
      randomNumber(
        minX,
        Math.max(
          minX +
          20,
          maxX
        )
      ),

    y:
      randomNumber(
        -220,
        -100
      ),

    nextShot:
      performance.now()
      +
      randomInteger(
        2800,
        5000
      ),

    nextAbility:
      performance.now()
      +
      2600,

    executionOffered:
      false

  };


  enemies.push(
    enemy
  );


  updateEnemyUI(
    enemy
  );


  renderEnemy(
    enemy
  );


  if (
    boss
  ) {

    document.body.classList.add(
      "boss-active"
    );

    showBossBar(
      enemy
    );

  }

}


// ========================================================
// INPUT
// ========================================================

document.addEventListener(

  "keydown",

  event => {

    if (
      !running
      ||
      event.repeat
    ) {

      return;

    }


    const pressed =
      event.key
      .toLowerCase();


    const key =
      document.querySelector(
        `.key[data-key="${CSS.escape(pressed)}"]`
      );


    if (
      !key
    ) {

      return;

    }


    event.preventDefault();


    key.classList.add(
      "active"
    );


    if (
      activeExecution
      &&
      pressed !==
      " "
    ) {

      handleExecution(
        pressed
      );

    }


    attemptShoot(
      key
    );

  }

);


document
  .querySelectorAll(
    ".key"
  )
  .forEach(
    key => {
      key.addEventListener(
        "click",
        () => {
          if (
            !running
          ) {
            return;
          }

          const keyValue =
            key.dataset.key;

          key.classList.add(
            "active"
          );

          if (
            activeExecution
            &&
            keyValue !==
            " "
          ) {
            handleExecution(
              keyValue.toLowerCase()
            );
            setTimeout(
              () =>
                key.classList.remove(
                  "active"
                ),
              110
            );
            return;
          }

          attemptShoot(
            key
          );

          setTimeout(
            () =>
              key.classList.remove(
                "active"
              ),
            110
          );
        }
      );
    }
  );


document.addEventListener(

  "keyup",

  event => {

    const pressed =
      event.key
      .toLowerCase();


    const key =
      document.querySelector(
        `.key[data-key="${CSS.escape(pressed)}"]`
      );


    if (
      key
    ) {

      key.classList.remove(
        "active"
      );

    }

  }

);


// ========================================================
// SHOOT
// ========================================================

function attemptShoot(
  key
) {

  if (
    overheated
    ||
    key.classList.contains(
      "jammed"
    )
  ) {

    return;

  }


  const gun =
    guns[
      equipped.gun
    ];


  const now =
    performance.now();


  const gap =
    now -
    lastShot;


  lastShot =
    now;


  if (
    gap <
    50
  ) {

    precision -=
      13;

  }


  else if (
    gap <
    80
  ) {

    precision -=
      5;

  }


  else {

    precision +=
      2;

  }


  precision =
    clamp(
      precision,
      10,
      100
    );


  heat +=
    (
      7.5 +
      Math.max(
        0,
        upgrades.bullets -
        1
      )
    )
    *
    gun.heat;


  if (
    heat >=
    100
  ) {

    heat =
      100;


    triggerOverheat();

    return;

  }


  fireGun(
    key
  );


  playGunSound(
    equipped.gun
  );

}


// ========================================================
// DIFFERENT WEAPON FIRE
// ========================================================

function fireGun(
  key
) {

  const gun =
    guns[
      equipped.gun
    ];


  const rect =
    key.getBoundingClientRect();


  const arenaRect =
    arena.getBoundingClientRect();


  const x =
    rect.left +
    rect.width /
    2 -
    arenaRect.left;


  const y =
    arena.clientHeight -
    12;


  let amount =
    Math.min(
      upgrades.bullets,
      6
    );


  let spread =
    0.8;


  if (
    equipped.gun ===
    "scatter"
  ) {

    amount +=
      3;


    spread =
      1.5;

  }


  for (
    let i =
      0;

    i <
    amount;

    i++
  ) {

    const center =
      (
        amount -
        1
      )
      /
      2;


    createBullet(

      x,

      y,

      (
        i -
        center
      )
      *
      spread,

      gun

    );

  }

}


// ========================================================
// BULLET
// ========================================================

function createBullet(
  x,
  y,
  vx,
  gun
) {

  const element =
    document.createElement(
      "div"
    );


  element.className =
    `bullet ${
      gun.bulletClass
    }`;


  bulletLayer.appendChild(
    element
  );


  const bulletSpeedLevel =
    Number.isFinite(
      upgrades.bulletSpeed
    )
      ? upgrades.bulletSpeed
      : 0;

  bullets.push({

    element,

    x,

    y,

    vx,

    vy:
      gun.speed *
      (
        1 +
        bulletSpeedLevel *
        0.12
      ),

    damage:
      (
        8 +
        upgrades.damage *
        5
      )
      *
      gun.damage
      *
      rebirthDamageMultiplier()
      *
      (
        1 +
        precision /
        100 *
        0.25
      )

  });

}


// ========================================================
// COOLING
// ========================================================

setInterval(

  () => {

    if (
      !running
      ||
      overheated
    ) {

      return;

    }


    const board =
      keyboards[
        equipped.keyboard
      ];


    heat -=
      1.25
      +
      upgrades.cooling *
      0.55
      +
      board.cooling;


    heat =
      Math.max(
        0,
        heat
      );


    precision =
      Math.min(
        100,
        precision +
        0.6 +
        upgrades.precision *
        0.3
      );


    updateHUD();

  },

  100

);


// ========================================================
// OVERHEAT
// ========================================================

function triggerOverheat() {

  overheated =
    true;


  combo =
    0;


  document.getElementById(
    "overheat-warning"
  )
  .classList.add(
    "show"
  );


  tone(
    110,
    0.2,
    "sawtooth",
    0.025,
    60
  );


  setTimeout(

    () => {

      overheated =
        false;


      heat =
        45;


      document.getElementById(
        "overheat-warning"
      )
      .classList.remove(
        "show"
      );

    },

    1450

  );

}


// ========================================================
// LOOP
// ========================================================

function gameLoop() {

  if (
    running
  ) {

    moveBullets();

    moveEnemies();

    collisions();

  }


  requestAnimationFrame(
    gameLoop
  );

}


gameLoop();


// ========================================================
// BULLET MOVEMENT
// ========================================================

function moveBullets() {

  for (
    let i =
      bullets.length -
      1;

    i >=
    0;

    i--
  ) {

    const bullet =
      bullets[
        i
      ];


    bullet.x +=
      bullet.vx;


    bullet.y +=
      bullet.vy;


    bullet.element.style.left =
      bullet.x +
      "px";


    bullet.element.style.top =
      bullet.y +
      "px";


    if (
      bullet.y <
      -90
    ) {

      bullet.element.remove();


      bullets.splice(
        i,
        1
      );

    }

  }

}


// ========================================================
// MOB MOVEMENT
// ========================================================

function moveEnemies() {

  const arenaRect =
    arena.getBoundingClientRect();


  const boardRect =
    keyboard.getBoundingClientRect();


  const left =
    boardRect.left -
    arenaRect.left +
    5;


  for (
    let i =
      enemies.length -
      1;

    i >=
    0;

    i--
  ) {

    const enemy =
      enemies[
        i
      ];


    const width =
      enemy.boss
        ?
        155
        :
        110;


    const right =
      boardRect.right -
      arenaRect.left -
      width -
      5;


    // shooter

    if (
      enemy.shooter
      &&
      performance.now() >
      enemy.nextShot
    ) {

      enemyShoot(
        enemy
      );


      enemy.nextShot =
        performance.now()
        +
        randomInteger(

          enemy.boss
            ?
            1800
            :
            3000,

          enemy.boss
            ?
            2800
            :
            5200

        );

    }


    // teleport

    if (
      enemy.type ===
      "teleporter"
      &&
      performance.now() >
      enemy.nextAbility
    ) {

      enemy.x =
        randomNumber(
          left,
          Math.max(
            left,
            right
          )
        );


      enemy.nextAbility =
        performance.now()
        +
        2400;


      combatText(
        enemy.x,
        enemy.y,
        "BLINK!",
        "special-text"
      );


      tone(
        900,
        0.07,
        "sine",
        0.012,
        1200
      );

    }


    // mutant rage

    if (
      enemy.type ===
      "mutant"
      &&
      enemy.hp <
      enemy.maxHp *
      0.5
    ) {

      enemy.speed =
        enemy.baseSpeed *
        1.6;

    }


    // summoner heal

    if (
      enemy.type ===
      "necromancer"
      &&
      performance.now() >
      enemy.nextAbility
    ) {

      enemy.nextAbility =
        performance.now()
        +
        3000;


      enemies.forEach(

        mob => {

          if (
            mob !==
            enemy
          ) {

            mob.hp =
              Math.min(
                mob.maxHp,
                mob.hp +
                mob.maxHp *
                0.05
              );


            updateEnemyUI(
              mob
            );

          }

        }

      );


      combatText(
        enemy.x,
        enemy.y,
        "HEAL!",
        "special-text"
      );


      tone(
        340,
        0.12,
        "sine",
        0.012,
        650
      );

    }


    enemy.y +=
      enemy.speed;


    enemy.x +=
      Math.sin(
        performance.now()
        /
        470
        +
        i
      )
      *
      0.18;


    enemy.x =
      clamp(
        enemy.x,
        left,
        Math.max(
          left,
          right
        )
      );


    renderEnemy(
      enemy
    );


    maybeExecution(
      enemy
    );


    if (
      enemy.y >
      arena.clientHeight -
      70
    ) {

      breach(
        enemy
      );


      removeEnemy(
        enemy
      );


      enemiesRemaining--;


      checkWaveComplete();

    }

  }

}


// ========================================================
// SHOOTER ATTACK
// ========================================================

function enemyShoot(
  enemy
) {

  const available =
    Array.from(
      document.querySelectorAll(
        ".key:not(.jammed)"
      )
    );


  if (
    !available.length
  ) {

    return;

  }


  const key =
    randomItem(
      available
    );


  key.classList.add(
    "targeted"
  );


  tone(
    260,
    0.055,
    "square",
    0.012,
    180
  );


  setTimeout(

    () => {

      if (
        !running
        ||
        !enemies.includes(
          enemy
        )
      ) {

        key.classList.remove(
          "targeted"
        );

        return;

      }


      launchEnemyShot(
        enemy,
        key
      );

    },

    400

  );

}


// ========================================================
// ENEMY PROJECTILE
// ========================================================

function launchEnemyShot(
  enemy,
  key
) {

  const body =
    enemy.element
    .querySelector(
      ".enemy-body"
    );


  if (
    !body
  ) {

    return;

  }


  const enemyRect =
    body.getBoundingClientRect();


  const keyRect =
    key.getBoundingClientRect();


  const sx =
    enemyRect.left +
    enemyRect.width /
    2;


  const sy =
    enemyRect.top +
    enemyRect.height /
    2;


  const ex =
    keyRect.left +
    keyRect.width /
    2;


  const ey =
    keyRect.top +
    keyRect.height /
    2;


  const shot =
    document.createElement(
      "div"
    );


  shot.className =
    "enemy-projectile";


  shot.style.left =
    sx +
    "px";


  shot.style.top =
    sy +
    "px";


  enemyProjectileLayer.appendChild(
    shot
  );


  const animation =
    shot.animate(

      [
        {
          transform:
            "translate(0,0)"
        },

        {
          transform:
            `translate(
              ${ex - sx}px,
              ${ey - sy}px
            )`
        }
      ],

      {
        duration:
          650,

        easing:
          "linear"
      }

    );


  animation.onfinish =
    () => {

      shot.remove();


      key.classList.remove(
        "targeted"
      );


      if (
        running
      ) {

        jamKey(
          key
        );


        playJamSound();


        showAnnouncement(
          "KEY HIT!",
          `${keyLabel(key)} JAMMED`
        );

      }

    };

}


// ========================================================
// JAM
// ========================================================

function jamKey(
  key
) {

  if (
    key.classList.contains(
      "jammed"
    )
  ) {

    return;

  }


  key.classList.add(
    "jammed"
  );


  const label =
    document.createElement(
      "span"
    );


  label.className =
    "jam-label";


  key.appendChild(
    label
  );


  const start =
    performance.now();


  const duration =
    5000;


  const timer =
    setInterval(

      () => {

        const remaining =
          duration
          -
          (
            performance.now()
            -
            start
          );


        label.textContent =
          `JAM ${
            Math.max(
              0,
              remaining /
              1000
            )
            .toFixed(1)
          }`;


        if (
          remaining <=
          0
        ) {

          clearInterval(
            timer
          );


          key.classList.remove(
            "jammed"
          );


          label.remove();

        }

      },

      100

    );

}


// ========================================================
// BREACH
// ========================================================

function breach(
  enemy
) {

  const damage =
    enemy.damage;


  health -=
    damage;


  health =
    Math.max(
      0,
      health
    );


  combo =
    0;


  showShieldLoss(
    damage
  );


  const available =
    Array.from(
      document.querySelectorAll(
        ".key:not(.jammed)"
      )
    );


  if (
    available.length
  ) {

    const key =
      randomItem(
        available
      );


    jamKey(
      key
    );


    showAnnouncement(
      "BREACH!",
      `${keyLabel(key)} JAMMED`
    );

  }


  playBreachSound();


  if (
    health <=
    0
  ) {

    die();

  }

}


// ========================================================
// SHIELD LOSS POPUP
// ========================================================

function showShieldLoss(
  amount
) {

  const text =
    document.createElement(
      "div"
    );


  text.className =
    "shield-loss";


  text.textContent =
    `-${amount} SHIELD`;


  document.body.appendChild(
    text
  );


  setTimeout(

    () =>
      text.remove(),

    950

  );

}


// ========================================================
// COLLISIONS
// ========================================================

function collisions() {

  for (
    let b =
      bullets.length -
      1;

    b >=
    0;

    b--
  ) {

    const bullet =
      bullets[
        b
      ];


    if (
      !bullet.element.isConnected
    ) {

      continue;

    }


    const bulletRect =
      bullet.element
      .getBoundingClientRect();


    for (
      let e =
        enemies.length -
        1;

      e >=
      0;

      e--
    ) {

      const enemy =
        enemies[
          e
        ];


      const body =
        enemy.element
        .querySelector(
          ".enemy-body"
        );


      if (
        !body
      ) {

        continue;

      }


      const enemyRect =
        body.getBoundingClientRect();


      const hit =
        bulletRect.left <
        enemyRect.right
        &&
        bulletRect.right >
        enemyRect.left
        &&
        bulletRect.top <
        enemyRect.bottom
        &&
        bulletRect.bottom >
        enemyRect.top;


      if (
        !hit
      ) {

        continue;

      }


      hitEnemy(
        enemy,
        bullet.damage
      );


      bullet.element.remove();


      bullets.splice(
        b,
        1
      );


      break;

    }

  }

}


// ========================================================
// HIT MOB
// ========================================================

function hitEnemy(
  enemy,
  damage
) {

  const critical =
    Math.random() <
    (
      0.06
      +
      precision /
      100 *
      0.08
      +
      upgrades.crit *
      0.012
    );


  if (
    critical
  ) {

    damage *=
      2;

  }


  if (
    enemy.shield >
    0
  ) {

    const absorbed =
      Math.min(
        enemy.shield,
        damage
      );


    enemy.shield -=
      absorbed;


    damage -=
      absorbed;

  }


  if (
    damage >
    0
  ) {

    enemy.hp -=
      damage;

  }


  gunSpecialEffect(
    enemy,
    damage
  );


  updateEnemyUI(
    enemy
  );


  enemy.element.classList.remove(
    "enemy-hit"
  );


  void enemy.element.offsetWidth;


  enemy.element.classList.add(
    "enemy-hit"
  );


  combatText(

    enemy.x +
    35,

    enemy.y +
    20,

    critical
      ?
      `CRIT ${Math.round(damage)}`
      :
      `-${Math.round(damage)}`,

    critical
      ?
      "crit-text"
      :
      "damage-text"

  );


  particles(
    enemy.x +
    50,
    enemy.y +
    70,
    5,
    "spark"
  );


  if (
    enemy.boss
  ) {

    updateBossBar(
      enemy
    );

  }


  if (
    enemy.hp <=
    0
  ) {

    killEnemy(
      enemy
    );

  }

}


// ========================================================
// WEAPON EFFECTS
// ========================================================

function gunSpecialEffect(
  enemy,
  damage
) {

  if (
    equipped.gun ===
    "cryo"
    &&
    Math.random() <
    0.17
  ) {

    enemy.speed =
      enemy.baseSpeed *
      0.4;


    combatText(
      enemy.x,
      enemy.y,
      "FROZEN!",
      "special-text"
    );


    setTimeout(

      () => {

        if (
          enemies.includes(
            enemy
          )
        ) {

          enemy.speed =
            enemy.baseSpeed;

        }

      },

      1700

    );

  }


  if (
    equipped.gun ===
    "flame"
    &&
    Math.random() <
    0.22
  ) {

    let ticks =
      3;


    const burn =
      setInterval(

        () => {

          if (
            !enemies.includes(
              enemy
            )
          ) {

            clearInterval(
              burn
            );

            return;

          }


          enemy.hp -=
            Math.max(
              3,
              damage *
              0.1
            );


          updateEnemyUI(
            enemy
          );


          combatText(
            enemy.x,
            enemy.y,
            "🔥",
            "special-text"
          );


          ticks--;


          if (
            enemy.hp <=
            0
          ) {

            clearInterval(
              burn
            );


            killEnemy(
              enemy
            );

          }


          if (
            ticks <=
            0
          ) {

            clearInterval(
              burn
            );

          }

        },

        350

      );

  }


  if (
    equipped.gun ===
    "void"
    &&
    Math.random() <
    0.18
  ) {

    enemies
      .slice()
      .forEach(

        other => {

          if (
            other !==
            enemy
            &&
            Math.abs(
              other.x -
              enemy.x
            ) <
            140
          ) {

            other.hp -=
              damage *
              0.45;


            updateEnemyUI(
              other
            );


            if (
              other.hp <=
              0
            ) {

              killEnemy(
                other
              );

            }

          }

        }

      );


    combatText(
      enemy.x,
      enemy.y,
      "VOID BURST!",
      "special-text"
    );

  }

}


// ========================================================
// KILL
// ========================================================

function killEnemy(
  enemy
) {

  if (
    !enemies.includes(
      enemy
    )
  ) {

    return;

  }


  let reward =
    enemy.reward;


  if (
    equipped.drone ===
    "coin"
  ) {

    reward *=
      1.25;

  }


  reward *=
    1 +
    upgrades.magnet *
    0.06;


  reward *=
    cashMultiplier();


  reward =
    Math.max(
      1,
      Math.round(
        reward
      )
    );


  kills++;


  totalKills++;


  combo++;


  // MUCH BIGGER PARTICLE EFFECT

  killParticles(
    enemy
  );


  playKillSound();


  addRunCoinsAnimated(
    reward,
    enemy
  );


  addKillFeed(
    enemy.base.name
  );


  if (
    enemy.boss
  ) {

    hideBossBar();


    showAnnouncement(
      "BOSS DOWN!",
      "TITAN DESTROYED"
    );


    tone(
      90,
      0.3,
      "sawtooth",
      0.035,
      35
    );

  }


  removeEnemy(
    enemy
  );


  enemiesRemaining--;


  if (
    activeExecution
    &&
    activeExecution.enemy ===
    enemy
  ) {

    closeExecution();

  }


  checkWaveComplete();

}


// ========================================================
// BIG KILL PARTICLES
// ========================================================

function killParticles(
  enemy
) {

  const x =
    enemy.x +
    50;


  const y =
    enemy.y +
    65;


  particles(
    x,
    y,
    enemy.boss
      ?
      35
      :
      16,
    "spark"
  );


  particles(
    x,
    y,
    enemy.boss
      ?
      25
      :
      10,
    "enemy-chunk"
  );


  particles(
    x,
    y,
    enemy.boss
      ?
      18
      :
      6,
    "coin-spark"
  );


  const ring =
    document.createElement(
      "div"
    );


  ring.className =
    "kill-ring";


  ring.style.left =
    x +
    "px";


  ring.style.top =
    y +
    "px";


  particleLayer.appendChild(
    ring
  );


  setTimeout(

    () =>
      ring.remove(),

    500

  );

}


// ========================================================
// PARTICLES
// ========================================================

function particles(
  x,
  y,
  amount,
  type =
    "spark"
) {

  for (
    let i =
      0;

    i <
    amount;

    i++
  ) {

    const particle =
      document.createElement(
        "div"
      );


    particle.className =
      `particle ${type}`;


    particle.style.left =
      x +
      "px";


    particle.style.top =
      y +
      "px";


    particle.style.setProperty(
      "--x",
      randomNumber(
        -100,
        100
      )
      +
      "px"
    );


    particle.style.setProperty(
      "--y",
      randomNumber(
        -100,
        100
      )
      +
      "px"
    );


    particle.style.setProperty(
      "--spin",
      randomInteger(
        -360,
        360
      )
      +
      "deg"
    );


    particleLayer.appendChild(
      particle
    );


    setTimeout(

      () =>
        particle.remove(),

      750

    );

  }

}


// ========================================================
// COINS
// ========================================================

function addRunCoinsAnimated(
  amount,
  enemy
) {

  const arenaRect =
    arena.getBoundingClientRect();


  flyCoinToBalance(

    arenaRect.left +
    enemy.x +
    50,

    arenaRect.top +
    enemy.y +
    60,

    amount

  );

}


function flyCoinToBalance(
  startX,
  startY,
  amount
) {

  const target =
    document.getElementById(
      "game-credit-box"
    );


  const targetRect =
    target.getBoundingClientRect();


  const coin =
    document.createElement(
      "div"
    );


  coin.className =
    "coin-fly";


  coin.textContent =
    "🪙";


  coin.style.left =
    startX +
    "px";


  coin.style.top =
    startY +
    "px";


  document.body.appendChild(
    coin
  );


  const tx =
    targetRect.left +
    targetRect.width /
    2 -
    startX;


  const ty =
    targetRect.top +
    targetRect.height /
    2 -
    startY;


  const animation =
    coin.animate(

      [
        {
          transform:
            "translate(0,0) scale(1.25)"
        },

        {
          transform:
            `translate(
              ${tx * 0.45}px,
              ${ty * 0.4 - 80}px
            )
            scale(1.05)`
        },

        {
          transform:
            `translate(
              ${tx}px,
              ${ty}px
            )
            scale(.25)`
        }
      ],

      {
        duration:
          650,

        easing:
          "ease-in"
      }

    );


  animation.onfinish =
    () => {

      coin.remove();


      runCoins +=
        amount;


      playCoinSound();


      target.classList.remove(
        "coin-pop"
      );


      void target.offsetWidth;


      target.classList.add(
        "coin-pop"
      );


      updateHUD();

    };

}


// ========================================================
// RANDOM FLOATING COIN
// ========================================================

function scheduleFloatingCoin() {

  clearTimeout(
    floatingCoinTimer
  );


  if (
    !running
  ) {

    return;

  }


  floatingCoinTimer =
    setTimeout(

      () => {

        if (
          running
        ) {

          spawnFloatingCoin();

          scheduleFloatingCoin();

        }

      },

      randomInteger(
        7000,
        15000
      )

    );

}


function spawnFloatingCoin() {

  const coin =
    document.createElement(
      "div"
    );


  coin.className =
    "floating-coin";


  coin.textContent =
    "🪙";


  const baseValue =
    randomInteger(
      2,
      6
    );


  const value =
    Math.round(
      baseValue *
      cashMultiplier()
    );


  coin.style.left =
    randomNumber(
      arena.clientWidth *
      0.23,
      arena.clientWidth *
      0.77
    )
    +
    "px";


  coin.style.top =
    randomNumber(
      70,
      Math.max(
        100,
        arena.clientHeight -
        110
      )
    )
    +
    "px";


  coinLayer.appendChild(
    coin
  );


  coin.addEventListener(

    "click",

    () => {

      const rect =
        coin.getBoundingClientRect();


      flyCoinToBalance(
        rect.left,
        rect.top,
        value
      );


      coin.remove();

    },

    {
      once:
        true
    }

  );


  setTimeout(

    () => {

      if (
        coin.isConnected
      ) {

        coin.animate(

          [
            {
              opacity:
                1
            },

            {
              opacity:
                0
            }
          ],

          {
            duration:
              300
          }

        );


        setTimeout(
          () =>
            coin.remove(),
          300
        );

      }

    },

    5500

  );

}


// ========================================================
// DRONES
// ========================================================

function startDrone() {

  clearInterval(
    droneTimer
  );


  const visual =
    document.getElementById(
      "drone-visual"
    );


  if (
    !equipped.drone
  ) {

    visual.classList.add(
      "hidden"
    );

    return;

  }


  visual.classList.remove(
    "hidden"
  );


  document.getElementById(
    "drone-body"
  ).textContent =
    drones[
      equipped.drone
    ].icon;


  droneTimer =
    setInterval(

      () => {

        if (
          !running
        ) {

          return;

        }


        const drone =
          equipped.drone;


        if (
          drone ===
          "repair"
        ) {

          if (
            health <
            maxHealth
          ) {

            health =
              Math.min(
                maxHealth,
                health +
                3
              );


            playDroneSound(
              "repair"
            );


            updateHUD();

          }


          return;

        }


        if (
          enemies.length ===
          0
        ) {

          return;

        }


        const target =
          randomItem(
            enemies
          );


        if (
          drone ===
          "gun"
        ) {

          droneAttackVisual(
            target,
            "#47efff"
          );


          target.hp -=
            11;


          playDroneSound(
            "gun"
          );

        }


        else if (
          drone ===
          "cryo"
        ) {

          droneAttackVisual(
            target,
            "#a9f9ff"
          );


          target.speed =
            target.baseSpeed *
            0.3;


          playDroneSound(
            "cryo"
          );


          setTimeout(

            () => {

              if (
                enemies.includes(
                  target
                )
              ) {

                target.speed =
                  target.baseSpeed;

              }

            },

            1600

          );


          return;

        }


        else if (
          drone ===
          "tesla"
        ) {

          enemies
            .slice(
              0,
              3
            )
            .forEach(

              mob => {

                droneAttackVisual(
                  mob,
                  "#ffe95a"
                );


                mob.hp -=
                  13;


                updateEnemyUI(
                  mob
                );


                if (
                  mob.hp <=
                  0
                ) {

                  killEnemy(
                    mob
                  );

                }

              }

            );


          playDroneSound(
            "tesla"
          );


          return;

        }


        updateEnemyUI(
          target
        );


        if (
          target.hp <=
          0
        ) {

          killEnemy(
            target
          );

        }

      },

      2600

    );

}


// ========================================================
// DRONE BEAM
// ========================================================

function droneAttackVisual(
  enemy,
  color
) {

  const drone =
    document.getElementById(
      "drone-visual"
    );


  const target =
    enemy.element
    .querySelector(
      ".enemy-body"
    );


  if (
    !target
  ) {

    return;

  }


  const dr =
    drone.getBoundingClientRect();


  const tr =
    target.getBoundingClientRect();


  const x1 =
    dr.left +
    dr.width /
    2;


  const y1 =
    dr.top +
    dr.height /
    2;


  const x2 =
    tr.left +
    tr.width /
    2;


  const y2 =
    tr.top +
    tr.height /
    2;


  const distance =
    Math.hypot(
      x2 -
      x1,
      y2 -
      y1
    );


  const angle =
    Math.atan2(
      y2 -
      y1,
      x2 -
      x1
    )
    *
    180 /
    Math.PI;


  const beam =
    document.createElement(
      "div"
    );


  Object.assign(
    beam.style,
    {
      position:
        "fixed",

      left:
        x1 +
        "px",

      top:
        y1 +
        "px",

      width:
        distance +
        "px",

      height:
        "4px",

      zIndex:
        "95",

      transformOrigin:
        "left center",

      transform:
        `rotate(${angle}deg)`,

      background:
        color,

      boxShadow:
        `0 0 12px ${color}`,

      pointerEvents:
        "none"
    }
  );


  document.body.appendChild(
    beam
  );


  setTimeout(

    () =>
      beam.remove(),

    130

  );

}


// ========================================================
// EXECUTION
// ========================================================

function maybeExecution(
  enemy
) {

  if (
    activeExecution
    ||
    enemy.executionOffered
    ||
    enemy.hp >
    enemy.maxHp *
    0.28
  ) {

    return;

  }


  let chance =
    0.0017;


  if (
    enemy.elite
  ) {

    chance =
      0.008;

  }


  if (
    enemy.boss
  ) {

    chance =
      0.015;

  }


  if (
    Math.random() >
    chance
  ) {

    return;

  }


  enemy.executionOffered =
    true;


  const pool =
    enemy.boss
      ?
      bossWords
      :
    enemy.elite
      ?
      eliteWords
      :
      normalWords;


  activeExecution = {

    enemy,

    word:
      randomItem(
        pool
      )
      .toLowerCase(),

    index:
      0

  };


  document.getElementById(
    "execution-box"
  )
  .classList.add(
    "active"
  );


  renderExecution();

}


function handleExecution(
  key
) {

  if (
    !activeExecution
  ) {

    return;

  }


  if (
    key ===
    activeExecution.word[
      activeExecution.index
    ]
  ) {

    activeExecution.index++;


    renderExecution();


    if (
      activeExecution.index >=
      activeExecution.word.length
    ) {

      const enemy =
        activeExecution.enemy;


      killEnemy(
        enemy
      );


      showAnnouncement(
        "FINISH!",
        "TARGET ERASED"
      );


      tone(
        650,
        0.1,
        "sine",
        0.02,
        1100
      );

    }

  }

  else if (
    key.length ===
    1
  ) {

    activeExecution.index =
      0;


    renderExecution();


    tone(
      120,
      0.05,
      "square",
      0.01,
      80
    );

  }

}


function renderExecution() {

  const box =
    document.getElementById(
      "execution-word"
    );


  box.innerHTML =
    "";


  activeExecution.word
    .toUpperCase()
    .split("")
    .forEach(

      (
        letter,
        index
      ) => {

        const span =
          document.createElement(
            "span"
          );


        span.textContent =
          letter;


        span.className =
          "execution-letter";


        if (
          index <
          activeExecution.index
        ) {

          span.classList.add(
            "correct"
          );

        }


        else if (
          index ===
          activeExecution.index
        ) {

          span.classList.add(
            "current"
          );

        }


        box.appendChild(
          span
        );

      }

    );

}


function closeExecution() {

  activeExecution =
    null;


  document.getElementById(
    "execution-box"
  )
  .classList.remove(
    "active"
  );

}


// ========================================================
// WAVE COMPLETE
// ========================================================

function checkWaveComplete() {

  if (
    enemiesRemaining >
    0
    ||
    enemies.length >
    0
    ||
    waveChanging
    ||
    !running
  ) {

    return;

  }


  waveChanging =
    true;


  health =
    Math.min(
      maxHealth,
      health +
      maxHealth *
      0.06
    );


  showAnnouncement(
    "WAVE CLEARED!",
    `WAVE ${wave}`
  );


  tone(
    480,
    0.08,
    "sine",
    0.015,
    700
  );


  setTimeout(

    () => {

      wave++;

      startWave();

    },

    1500

  );

}


// ========================================================
// MOB UI
// ========================================================

function updateEnemyUI(
  enemy
) {

  const hpFill =
    enemy.element
    .querySelector(
      ".enemy-hp-fill"
    );


  hpFill.style.width =
    clamp(
      enemy.hp /
      enemy.maxHp *
      100,
      0,
      100
    )
    +
    "%";


  enemy.element
    .querySelector(
      ".enemy-hp-text"
    )
    .textContent =
      `${Math.ceil(enemy.hp)} / ${enemy.maxHp}`;


  if (
    enemy.maxShield
  ) {

    enemy.element
      .querySelector(
        ".enemy-shield-fill"
      )
      .style.width =
        clamp(
          enemy.shield /
          enemy.maxShield *
          100,
          0,
          100
        )
        +
        "%";

  }

}


function renderEnemy(
  enemy
) {

  enemy.element.style.left =
    enemy.x +
    "px";


  enemy.element.style.top =
    enemy.y +
    "px";

}


function removeEnemy(
  enemy
) {

  const index =
    enemies.indexOf(
      enemy
    );


  if (
    index >=
    0
  ) {

    enemies.splice(
      index,
      1
    );

  }


  enemy.element.remove();

}


// ========================================================
// BOSS
// ========================================================

function showBossBar(
  enemy
) {

  document.getElementById(
    "boss-bar"
  )
  .classList.add(
    "show"
  );


  document.getElementById(
    "boss-name"
  ).textContent =
    enemy.base.name;


  updateBossBar(
    enemy
  );

}


function updateBossBar(
  enemy
) {

  document.getElementById(
    "boss-fill"
  )
  .style.width =
    clamp(
      enemy.hp /
      enemy.maxHp *
      100,
      0,
      100
    )
    +
    "%";


  document.getElementById(
    "boss-hp"
  ).textContent =
    `${Math.ceil(enemy.hp)} / ${enemy.maxHp}`;

}


function hideBossBar() {

  document.getElementById(
    "boss-bar"
  )
  .classList.remove(
    "show"
  );

  document.body.classList.remove(
    "boss-active"
  );

}


// ========================================================
// HUD
// ========================================================

function updateHUD() {

  document.getElementById(
    "wave"
  ).textContent =
    wave;


  document.getElementById(
    "kills"
  ).textContent =
    kills;


  document.getElementById(
    "run-coins"
  ).textContent =
    runCoins;


  document.getElementById(
    "combo"
  ).textContent =
    combo;


  document.getElementById(
    "health-text"
  ).textContent =
    `${Math.ceil(health)} / ${maxHealth}`;


  document.getElementById(
    "health-fill"
  ).style.width =
    health /
    maxHealth *
    100
    +
    "%";


  document.getElementById(
    "heat-text"
  ).textContent =
    Math.round(
      heat
    );


  document.getElementById(
    "heat-fill"
  ).style.width =
    heat +
    "%";


  document.getElementById(
    "precision-text"
  ).textContent =
    Math.round(
      precision
    );


  document.getElementById(
    "precision-fill"
  ).style.width =
    precision +
    "%";


  document.getElementById(
    "modifier"
  ).textContent =
    currentModifier;


  let heatState =
    "COOL";


  if (
    heat >
    80
  ) {

    heatState =
      "DANGER";

  }


  else if (
    heat >
    55
  ) {

    heatState =
      "HOT";

  }


  else if (
    heat >
    30
  ) {

    heatState =
      "WARM";

  }


  document.getElementById(
    "heat-state"
  ).textContent =
    heatState;


  const completed =
    waveTotal -
    enemiesRemaining;


  document.getElementById(
    "wave-progress-fill"
  ).style.width =
    (
      waveTotal
        ?
        clamp(
          completed /
          waveTotal *
          100,
          0,
          100
        )
        :
        0
    )
    +
    "%";


  const threat =
    document.getElementById(
      "threat"
    );


  if (
    wave >=
    30
  ) {

    threat.textContent =
      "INSANE";


    threat.style.color =
      "#ff3d64";

  }


  else if (
    wave >=
    20
  ) {

    threat.textContent =
      "EXTREME";


    threat.style.color =
      "#ff923d";

  }


  else if (
    wave >=
    10
  ) {

    threat.textContent =
      "HIGH";


    threat.style.color =
      "#ffe95a";

  }


  else if (
    wave >=
    5
  ) {

    threat.textContent =
      "MEDIUM";


    threat.style.color =
      "#47efff";

  }


  else {

    threat.textContent =
      "LOW";


    threat.style.color =
      "#54ffa1";

  }

}


// ========================================================
// LOBBY UI
// ========================================================

function updateLobby() {

  document.getElementById(
    "lobby-coins"
  ).textContent =
    coins;


  document.getElementById(
    "best-wave"
  ).textContent =
    bestWave;


  document.getElementById(
    "total-kills"
  ).textContent =
    totalKills;


  document.getElementById(
    "top-rebirths"
  ).textContent =
    rebirths;


  document.getElementById(
    "profile-rebirths"
  ).textContent =
    rebirths;


  document.getElementById(
    "equipped-gun-name"
  ).textContent =
    guns[
      equipped.gun
    ].name.toUpperCase();


  document.getElementById(
    "equipped-drone-name"
  ).textContent =
    equipped.drone
      ?
      drones[
        equipped.drone
      ].name.toUpperCase()
      :
      "NONE";


  document.getElementById(
    "equipped-board-name"
  ).textContent =
    keyboards[
      equipped.keyboard
    ].name.toUpperCase();


  document.getElementById(
    "equipped-keycap-name"
  ).textContent =
    keycaps[
      equipped.keycap
    ]
      ?
      keycaps[
        equipped.keycap
      ].name.toUpperCase()
      :
      "STANDARD";


  [
    "damage",
    "bullets",
    "cooling",
    "health",
    "precision",
    "crit",
    "magnet",
    "bulletSpeed"
  ]
  .forEach(

    type => {

      document.getElementById(
        `${type}-level`
      ).textContent =
        upgrades[
          type
        ];


      document.getElementById(
        `${type}-cost`
      ).textContent =
        type ===
        "bullets"
        &&
        upgrades.bullets >=
        6
          ?
          "MAX"
          :
          getUpgradeCost(
            type
          );

    }

  );


  updateUsernameUI();

  updateRebirthUI();

}


// ========================================================
// ANNOUNCEMENT
// ========================================================

function showAnnouncement(
  small,
  main
) {

  const box =
    document.getElementById(
      "announcement"
    );


  document.getElementById(
    "announcement-small"
  ).textContent =
    small;


  document.getElementById(
    "announcement-main"
  ).textContent =
    main;


  box.classList.remove(
    "show"
  );


  void box.offsetWidth;


  box.classList.add(
    "show"
  );

}


// ========================================================
// COMBAT TEXT
// ========================================================

function combatText(
  x,
  y,
  text,
  type
) {

  const element =
    document.createElement(
      "div"
    );


  element.className =
    `combat-text ${type}`;


  element.textContent =
    text;


  element.style.left =
    x +
    "px";


  element.style.top =
    y +
    "px";


  combatLayer.appendChild(
    element
  );


  setTimeout(

    () =>
      element.remove(),

    750

  );

}


// ========================================================
// FEED
// ========================================================

function addKillFeed(
  text
) {

  const feed =
    document.getElementById(
      "kill-feed"
    );


  const item =
    document.createElement(
      "div"
    );


  item.className =
    "kill-feed-item";


  item.textContent =
    `☠ ${text}`;


  feed.prepend(
    item
  );


  while (
    feed.children.length >
    5
  ) {

    feed.lastChild.remove();

  }

}


// ========================================================
// DEATH
// ========================================================

function die() {

  if (
    !running
  ) {

    return;

  }


  running =
    false;


  clearInterval(
    droneTimer
  );


  clearTimeout(
    floatingCoinTimer
  );


  coins +=
    runCoins;


  bestWave =
    Math.max(
      bestWave,
      wave
    );


  save();


  document.getElementById(
    "death-wave"
  ).textContent =
    wave;


  document.getElementById(
    "death-kills"
  ).textContent =
    kills;


  document.getElementById(
    "death-coins"
  ).textContent =
    runCoins;


  document.getElementById(
    "death-screen"
  )
  .classList.add(
    "show"
  );


  tone(
    170,
    0.35,
    "sawtooth",
    0.025,
    55
  );

}


document.getElementById(
  "return-lobby"
)
.addEventListener(

  "click",

  () => {

    document.getElementById(
      "death-screen"
    )
    .classList.remove(
      "show"
    );


    game.classList.remove(
      "active"
    );


    lobby.classList.add(
      "active"
    );


    clearArena();

    updateLobby();

    renderShops();

  }

);


// ========================================================
// CLEAR
// ========================================================

function clearArena() {

  enemyLayer.innerHTML =
    "";


  bulletLayer.innerHTML =
    "";


  coinLayer.innerHTML =
    "";


  particleLayer.innerHTML =
    "";


  combatLayer.innerHTML =
    "";


  enemyProjectileLayer.innerHTML =
    "";


  enemies =
    [];


  bullets =
    [];


  spawnTimers.forEach(

    timer =>
      clearTimeout(
        timer
      )

  );


  spawnTimers =
    [];


  hideBossBar();

}


function clearJammedKeys() {

  document
    .querySelectorAll(
      ".key"
    )
    .forEach(

      key => {

        key.classList.remove(
          "jammed",
          "targeted",
          "active"
        );


        key
          .querySelectorAll(
            ".jam-label"
          )
          .forEach(

            label =>
              label.remove()

          );

      }

    );

}


// ========================================================
// SAVE
// ========================================================

function save() {

  localStorage.setItem(
    "kiTutorialSeen3",
    tutorialSeen
  );


  localStorage.setItem(
    "kiCoins3",
    coins
  );


  localStorage.setItem(
    "kiBestWave3",
    bestWave
  );


  localStorage.setItem(
    "kiKills3",
    totalKills
  );


  localStorage.setItem(
    "kiRebirths3",
    rebirths
  );


  localStorage.setItem(
    "kiUpgrades3",
    JSON.stringify(
      upgrades
    )
  );


  localStorage.setItem(
    "kiOwned3",
    JSON.stringify(
      owned
    )
  );


  localStorage.setItem(
    "kiEquipped3",
    JSON.stringify(
      equipped
    )
  );


  localStorage.setItem(
    "kiKeycaps3",
    JSON.stringify(
      ownedKeycaps
    )
  );


  updateLobby();

}


// ========================================================
// SMALL UI FX
// ========================================================

function flashCoinBalance() {

  document.getElementById(
    "lobby-credit-box"
  )
  .animate(

    [
      {
        transform:
          "translateX(0)"
      },

      {
        transform:
          "translateX(-8px)"
      },

      {
        transform:
          "translateX(8px)"
      },

      {
        transform:
          "translateX(0)"
      }
    ],

    {
      duration:
        300
    }

  );

}


function showLobbyFlash(
  text
) {

  const popup =
    document.createElement(
      "div"
    );


  popup.textContent =
    text;


  Object.assign(
    popup.style,
    {
      position:
        "fixed",

      zIndex:
        "1500",

      left:
        "50%",

      top:
        "50%",

      transform:
        "translate(-50%,-50%)",

      color:
        "#d9a6ff",

      fontSize:
        "55px",

      fontWeight:
        "900",

      textShadow:
        "0 0 30px #a459ff",

      pointerEvents:
        "none"
    }
  );


  document.body.appendChild(
    popup
  );


  popup.animate(

    [
      {
        opacity:
          0,

        transform:
          "translate(-50%,-50%) scale(1.7)"
      },

      {
        opacity:
          1,

        transform:
          "translate(-50%,-50%) scale(1)"
      },

      {
        opacity:
          0,

        transform:
          "translate(-50%,-80%) scale(.8)"
      }
    ],

    {
      duration:
        1300
    }

  );


  setTimeout(
    () =>
      popup.remove(),
    1350
  );

}


// ========================================================
// HELPERS
// ========================================================

function keyLabel(
  key
) {

  return key.dataset.key ===
    " "
      ?
      "SPACE"
      :
      key.dataset.key
      .toUpperCase();

}


function clamp(
  value,
  min,
  max
) {

  return Math.min(
    Math.max(
      value,
      min
    ),
    max
  );

}


function randomNumber(
  min,
  max
) {

  return (
    Math.random()
    *
    (
      max -
      min
    )
    +
    min
  );

}


function randomInteger(
  min,
  max
) {

  return Math.floor(
    randomNumber(
      min,
      max +
      1
    )
  );

}


function randomItem(
  array
) {

  return array[
    Math.floor(
      Math.random()
      *
      array.length
    )
  ];

}


// ========================================================
// INITIALIZE
// ========================================================

updateLobby();

renderShops();

applyLoadoutVisuals();

checkUsername();
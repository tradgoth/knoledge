// ========================================
// BUDDYS SUPER FUN QUIZ - TOTALLY NORMAL
// Created by DarkAlessa1999 (Todd) & Buddy
// Last update: November 14, 2003
// Nothing weird in this code at all
// ========================================

// Console messages for snoopy developers
console.log('%c!! BUDDY WELCOMES YOU !!', 'color: #ff66cc; font-size: 24px; font-family: Comic Sans MS;');
console.log('%cYou found the quiz code! Buddy sees everything.', 'color: #ff99ff;');
console.log('%cDont worry, the horror effects are totally normal quiz features', 'color: #cc66cc;');
console.log('%cIf you see this after 2010, the quiz has leaked into your timeline', 'color: #ff6600;');
console.log('%c...buddy is always watching...', 'color: #660000; font-size: 8px;');

// ========================================
// QUESTION BANK - TOTALLY FUN QUESTIONS
// ========================================
const questions = [
    // Tier 0 - Easy & Cute
    {
        tier: 0,
        question: "What's the name of our cute little town? :3",
        corruptedQuestion: "What town calls to the guilty?",
        answers: ["Silent Hill", "Raccoon City", "Innsmouth", "Midwich"],
        correct: 0
    },
    {
        tier: 0,
        question: "Who is the main character of Silent Hill 2? (hes so cool!!)",
        corruptedQuestion: "Who killed his wife and forgot?",
        answers: ["James Sunderland", "Harry Mason", "Heather Mason", "Henry Townshend"],
        correct: 0
    },
    {
        tier: 0,
        question: "What pretty lake is near Silent Hill?",
        corruptedQuestion: "What lake holds the bodies?",
        answers: ["Toluca Lake", "Lake Michigan", "Crystal Lake", "Lake Placid"],
        correct: 0
    },
    // Tier 1 - Medium
    {
        tier: 1,
        question: "What hotel does James visit in SH2?",
        corruptedQuestion: "Where did he smother her with a pillow?",
        answers: ["Lakeview Hotel", "Overlook Hotel", "Grand Hotel", "Woodside Apartments"],
        correct: 0
    },
    {
        tier: 1,
        question: "Whats the name of the scary hospital?",
        corruptedQuestion: "Where do the nurses wait?",
        answers: ["Brookhaven Hospital", "Arkham Asylum", "St. Johns", "Alchemilla Hospital"],
        correct: 0
    },
    {
        tier: 1,
        question: "What artifact does Dahlia want Harry to collect?",
        corruptedQuestion: "What cage trapped the burning girl?",
        answers: ["Flauros", "Aglaophotis", "Metatron Seal", "Halo of the Sun"],
        correct: 0
    },
    // Tier 2 - Hard & Dark
    {
        tier: 2,
        question: "What did James really do to Mary?",
        corruptedQuestion: "WHAT DID JAMES DO? CONFESS.",
        answers: ["Killed her with a pillow", "Let her die naturally", "Took her to Silent Hill", "Nothing wrong"],
        correct: 0
    },
    {
        tier: 2,
        question: "What bracelet does Maria wear?",
        corruptedQuestion: "What marks the shadow bride?",
        answers: ["Black Moon Lilith sigil", "Cross necklace", "Wedding ring", "Hospital bracelet"],
        correct: 0
    },
    {
        tier: 2,
        question: "According to the Kabbalah, who is Metatron?",
        corruptedQuestion: "Who watches from the highest sphere?",
        answers: ["The highest angel/celestial scribe", "A demon lord", "God himself", "The first human"],
        correct: 0
    },
    // Tier 3 - Extreme
    {
        tier: 3,
        question: "What psychological concept does Pyramid Head represent?",
        corruptedQuestion: "WHAT IS YOUR SHADOW? WHAT DO YOU HIDE?",
        answers: ["The Shadow (Jung)", "The Id (Freud)", "The Superego", "The Anima"],
        correct: 0
    },
    {
        tier: 3,
        question: "What did Dahlia do to Alessa?",
        corruptedQuestion: "HOW DO YOU BIRTH A GOD?",
        answers: ["Burned her alive in a ritual", "Abandoned her", "Sent her to school", "Loved her unconditionally"],
        correct: 0
    },
    {
        tier: 3,
        question: "Why does the town manifest monsters?",
        corruptedQuestion: "WHY DO YOUR SINS HAVE FORM?",
        answers: ["Reflects visitors unconscious guilt", "Random spawning", "Government experiments", "Alien invasion"],
        correct: 0
    },
    // Tier 4 - Incomprehensible
    {
        tier: 4,
        question: "D̶O̶ ̶Y̶O̶U̶ ̶R̶E̶M̶E̶M̶B̶E̶R̶?",
        corruptedQuestion: "D̸̨̛O̷̧̊ ̶̣̈Y̷̰̓Ö̵͙U̵̢̔ ̷̣͠R̶̥̈́E̴͙͒M̵̗̈́E̶̟̔M̶̰̌B̶͙̐E̷̱͘R̵̤̈ ̴̣̏W̸̻̃H̵̰̾Ä̷͙T̶̠̒ ̶̰̌Y̵̻͝O̵̤͆U̷̥̐ ̵͖͘D̵̰͝I̵̗͝D̵̪̈?",
        answers: ["yes", "no", "i dont understand", "MAKE IT STOP"],
        correct: 0
    }
];

// Shuffle and select 13 questions
function getQuizQuestions() {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 13);
}

// ========================================
// GAME STATE
// ========================================
let gameState = {
    currentQuestion: 0,
    score: 0,
    horrorLevel: 0,
    paranoia: 0,
    questions: [],
    isPlaying: false,
    hasEnded: false,
    tabAwayTime: 0,
    lastTabAway: 0,
    wrongAnswers: 0,
    jumpscareShown: false,
    audioContext: null,
    eyePositions: [],
    writings: [],
    bloodDrips: 0
};

// ========================================
// AUDIO SYSTEM - Web Audio API
// ========================================
function initAudio() {
    if (!gameState.audioContext) {
        gameState.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return gameState.audioContext;
}

function playSound(type, options = {}) {
    try {
        const ctx = initAudio();
        if (ctx.state === 'suspended') ctx.resume();

        const now = ctx.currentTime;
        const duration = options.duration || 0.3;

        switch(type) {
            case 'correct':
                // Happy ding
                const osc1 = ctx.createOscillator();
                const gain1 = ctx.createGain();
                osc1.type = 'sine';
                osc1.frequency.setValueAtTime(880, now);
                osc1.frequency.setValueAtTime(1100, now + 0.1);
                gain1.gain.setValueAtTime(0.3, now);
                gain1.gain.exponentialDecayTo(0.01, now + 0.3);
                osc1.connect(gain1).connect(ctx.destination);
                osc1.start(now);
                osc1.stop(now + 0.3);
                break;

            case 'wrong':
                // Buzzer
                const osc2 = ctx.createOscillator();
                const gain2 = ctx.createGain();
                osc2.type = 'sawtooth';
                osc2.frequency.setValueAtTime(150, now);
                gain2.gain.setValueAtTime(0.2, now);
                gain2.gain.exponentialDecayTo(0.01, now + 0.5);
                osc2.connect(gain2).connect(ctx.destination);
                osc2.start(now);
                osc2.stop(now + 0.5);
                break;

            case 'heartbeat':
                // Thump thump
                for (let i = 0; i < 2; i++) {
                    const beat = ctx.createOscillator();
                    const beatGain = ctx.createGain();
                    beat.type = 'sine';
                    beat.frequency.setValueAtTime(60 + (gameState.horrorLevel * 5), now + (i * 0.15));
                    beatGain.gain.setValueAtTime(0.4, now + (i * 0.15));
                    beatGain.gain.exponentialDecayTo(0.01, now + (i * 0.15) + 0.1);
                    beat.connect(beatGain).connect(ctx.destination);
                    beat.start(now + (i * 0.15));
                    beat.stop(now + (i * 0.15) + 0.15);
                }
                break;

            case 'static':
                // Radio static
                const bufferSize = ctx.sampleRate * 0.5;
                const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
                const data = buffer.getChannelData(0);
                for (let i = 0; i < bufferSize; i++) {
                    data[i] = Math.random() * 2 - 1;
                }
                const noise = ctx.createBufferSource();
                const noiseGain = ctx.createGain();
                noise.buffer = buffer;
                noiseGain.gain.setValueAtTime(0.1 + (gameState.horrorLevel * 0.02), now);
                noiseGain.gain.exponentialDecayTo(0.01, now + 0.5);
                noise.connect(noiseGain).connect(ctx.destination);
                noise.start(now);
                break;

            case 'siren':
                // Silent Hill siren
                const siren = ctx.createOscillator();
                const sirenGain = ctx.createGain();
                siren.type = 'sawtooth';
                siren.frequency.setValueAtTime(350, now);
                siren.frequency.linearRampToValueAtTime(750, now + 2);
                siren.frequency.linearRampToValueAtTime(350, now + 4);
                sirenGain.gain.setValueAtTime(0.15, now);
                sirenGain.gain.setValueAtTime(0.15, now + 3.5);
                sirenGain.gain.exponentialDecayTo(0.01, now + 4);
                siren.connect(sirenGain).connect(ctx.destination);
                siren.start(now);
                siren.stop(now + 4);
                break;

            case 'jumpscare':
                // Loud burst
                const jumpOsc = ctx.createOscillator();
                const jumpNoise = ctx.createBufferSource();
                const jumpGain = ctx.createGain();

                jumpOsc.type = 'sawtooth';
                jumpOsc.frequency.setValueAtTime(100, now);
                jumpOsc.frequency.linearRampToValueAtTime(50, now + 0.5);

                const jBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.5, ctx.sampleRate);
                const jData = jBuffer.getChannelData(0);
                for (let i = 0; i < jBuffer.length; i++) {
                    jData[i] = Math.random() * 2 - 1;
                }
                jumpNoise.buffer = jBuffer;

                jumpGain.gain.setValueAtTime(0.5, now);
                jumpGain.gain.exponentialDecayTo(0.01, now + 0.5);

                jumpOsc.connect(jumpGain).connect(ctx.destination);
                jumpNoise.connect(jumpGain);

                jumpOsc.start(now);
                jumpNoise.start(now);
                jumpOsc.stop(now + 0.5);
                break;

            case 'whisper':
                // Creepy whisper effect
                for (let i = 0; i < 5; i++) {
                    const whispOsc = ctx.createOscillator();
                    const whispGain = ctx.createGain();
                    whispOsc.type = 'sine';
                    whispOsc.frequency.setValueAtTime(200 + Math.random() * 400, now + i * 0.1);
                    whispGain.gain.setValueAtTime(0.05, now + i * 0.1);
                    whispGain.gain.exponentialDecayTo(0.001, now + i * 0.1 + 0.3);
                    whispOsc.connect(whispGain).connect(ctx.destination);
                    whispOsc.start(now + i * 0.1);
                    whispOsc.stop(now + i * 0.1 + 0.3);
                }
                break;

            case 'metal':
                // Metallic scrape
                const metalOsc = ctx.createOscillator();
                const metalGain = ctx.createGain();
                const filter = ctx.createBiquadFilter();
                metalOsc.type = 'square';
                metalOsc.frequency.setValueAtTime(80, now);
                metalOsc.frequency.linearRampToValueAtTime(120, now + 0.3);
                filter.type = 'bandpass';
                filter.frequency.setValueAtTime(500, now);
                metalGain.gain.setValueAtTime(0.15, now);
                metalGain.gain.exponentialDecayTo(0.01, now + 0.4);
                metalOsc.connect(filter).connect(metalGain).connect(ctx.destination);
                metalOsc.start(now);
                metalOsc.stop(now + 0.4);
                break;

            case 'glitch':
                // Digital glitch
                for (let i = 0; i < 3; i++) {
                    const glitchOsc = ctx.createOscillator();
                    const glitchGain = ctx.createGain();
                    glitchOsc.type = 'square';
                    glitchOsc.frequency.setValueAtTime(Math.random() * 2000 + 100, now + i * 0.05);
                    glitchGain.gain.setValueAtTime(0.1, now + i * 0.05);
                    glitchGain.gain.setValueAtTime(0, now + i * 0.05 + 0.03);
                    glitchOsc.connect(glitchGain).connect(ctx.destination);
                    glitchOsc.start(now + i * 0.05);
                    glitchOsc.stop(now + i * 0.05 + 0.05);
                }
                break;

            case 'drone':
                // Low ominous drone
                const drone = ctx.createOscillator();
                const drone2 = ctx.createOscillator();
                const droneGain = ctx.createGain();
                drone.type = 'sine';
                drone2.type = 'sine';
                drone.frequency.setValueAtTime(55, now);
                drone2.frequency.setValueAtTime(55.5, now); // Slight detune for beating
                droneGain.gain.setValueAtTime(0.1, now);
                droneGain.gain.exponentialDecayTo(0.01, now + 2);
                drone.connect(droneGain).connect(ctx.destination);
                drone2.connect(droneGain);
                drone.start(now);
                drone2.start(now);
                drone.stop(now + 2);
                drone2.stop(now + 2);
                break;
        }
    } catch(e) {
        console.log('Audio error (this is fine):', e);
    }
}

// Fix for GainNode exponentialDecayTo
AudioParam.prototype.exponentialDecayTo = function(value, endTime) {
    this.exponentialRampToValueAtTime(Math.max(value, 0.0001), endTime);
};

// ========================================
// VISUAL EFFECTS
// ========================================
function addBloodDrip() {
    if (gameState.bloodDrips >= 30) return;

    const drip = document.createElement('div');
    drip.className = 'blood-drip';
    drip.style.left = Math.random() * 100 + 'vw';
    drip.style.animationDuration = (3 + Math.random() * 3) + 's';
    document.getElementById('effectsContainer').appendChild(drip);
    gameState.bloodDrips++;

    setTimeout(() => {
        drip.remove();
        gameState.bloodDrips--;
    }, 8000);
}

function addCornerEye() {
    if (gameState.eyePositions.length >= 8) return;

    const eye = document.createElement('div');
    eye.className = 'corner-eye';
    eye.textContent = '';

    const positions = ['top', 'bottom', 'left', 'right'];
    const pos = positions[Math.floor(Math.random() * positions.length)];

    switch(pos) {
        case 'top':
            eye.style.top = '20px';
            eye.style.left = Math.random() * 80 + 10 + '%';
            break;
        case 'bottom':
            eye.style.bottom = '20px';
            eye.style.left = Math.random() * 80 + 10 + '%';
            break;
        case 'left':
            eye.style.left = '20px';
            eye.style.top = Math.random() * 80 + 10 + '%';
            break;
        case 'right':
            eye.style.right = '20px';
            eye.style.top = Math.random() * 80 + 10 + '%';
            break;
    }

    document.getElementById('effectsContainer').appendChild(eye);
    gameState.eyePositions.push(eye);

    setTimeout(() => {
        eye.remove();
        gameState.eyePositions = gameState.eyePositions.filter(e => e !== eye);
    }, 10000 + Math.random() * 5000);
}

function addWallWriting() {
    const writings = [
        "THERE WAS A HOLE HERE",
        "ITS GONE NOW",
        "DONT LOOK AWAY",
        "BUDDY SEES YOU",
        "WHY DID YOU DO IT",
        "YOU CANT LEAVE",
        "THE FOG IS COMING",
        "REMEMBER WHAT YOU DID",
        "ITS YOUR FAULT",
        "KEEP PLAYING",
        "DONT STOP",
        "BUDDY LOVES YOU"
    ];

    const writing = document.createElement('div');
    writing.className = 'wall-writing';
    writing.textContent = writings[Math.floor(Math.random() * writings.length)];
    writing.style.top = Math.random() * 60 + 20 + '%';
    writing.style.left = Math.random() * 60 + 20 + '%';
    writing.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;

    document.getElementById('effectsContainer').appendChild(writing);

    setTimeout(() => writing.remove(), 5000 + Math.random() * 3000);
}

function triggerSubliminal() {
    const symbols = ['', '', '', '', ''];
    const subliminal = document.getElementById('subliminal');
    subliminal.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    subliminal.classList.add('flash');
    setTimeout(() => subliminal.classList.remove('flash'), 50);
}

function showFakeError() {
    const errors = [
        "ERROR: Mary.exe terminated unexpectedly",
        "WARNING: Pyramid_Head.process approaching",
        "FATAL: Cannot escape process 'SilentHill'",
        "ERROR: guilt_suppression failed",
        "WARNING: Buddy.exe is not responding (this is normal)",
        "ERROR: sin_count overflow",
        "CRITICAL: Otherworld transition imminent",
        "WARNING: User consciousness fading"
    ];

    alert(errors[Math.floor(Math.random() * errors.length)]);
}

function flashColors() {
    document.body.classList.add('invert-colors');
    setTimeout(() => document.body.classList.remove('invert-colors'), 100);
}

function showJumpscare(type) {
    if (gameState.jumpscareShown) return;
    gameState.jumpscareShown = true;

    playSound('jumpscare');

    const jumpscares = [
        { image: '', text: 'I SEE YOU' },
        { image: '', text: 'PUNISHMENT' },
        { image: '', text: 'TIME FOR YOUR MEDICINE' },
        { image: '', text: 'WHY DID YOU KILL ME' },
        { image: '', text: 'THERE WAS A HOLE HERE' }
    ];

    const scare = jumpscares[type % jumpscares.length];

    const overlay = document.createElement('div');
    overlay.className = 'jumpscare';
    overlay.innerHTML = `
        <div class="jumpscare-image">${scare.image}</div>
        <div class="jumpscare-text">${scare.text}</div>
    `;
    document.body.appendChild(overlay);

    setTimeout(() => {
        overlay.remove();
        gameState.jumpscareShown = false;
    }, 800);
}

// ========================================
// MASCOT TRANSFORMATION
// ========================================
function updateMascot() {
    const stage = Math.floor(gameState.horrorLevel / 2);
    const face = document.getElementById('mascotFace');
    const mouth = document.getElementById('mascotMouth');
    const eyeLeft = document.getElementById('eyeLeft');
    const eyeRight = document.getElementById('eyeRight');
    const thirdEye = document.getElementById('thirdEye');
    const bloodLeft = document.getElementById('bloodTearLeft');
    const bloodRight = document.getElementById('bloodTearRight');

    if (stage >= 2) {
        face.classList.add('corrupted');
        mouth.classList.add('corrupted');
    }

    if (stage >= 4) {
        face.classList.add('very-corrupted');
        mouth.classList.add('very-corrupted');
        eyeLeft.classList.add('corrupted');
        eyeRight.classList.add('corrupted');
    }

    if (stage >= 3) {
        bloodLeft.classList.add('visible');
        bloodRight.classList.add('visible');
    }

    if (stage >= 5) {
        thirdEye.classList.add('visible');
    }
}

// ========================================
// HORROR LEVEL UPDATES
// ========================================
function updateHorrorEffects() {
    const level = gameState.horrorLevel;
    const container = document.getElementById('quizContainer');
    const title = document.getElementById('quizTitle');
    const staticOverlay = document.getElementById('staticOverlay');
    const vhsLines = document.getElementById('vhsLines');
    const heartbeat = document.getElementById('heartbeatOverlay');
    const pyramidHead = document.getElementById('pyramidHead');
    const nurse = document.getElementById('nurseFigure');
    const radio = document.getElementById('radioStatic');
    const mainContainer = document.getElementById('mainContainer');

    // Remove old corruption classes
    container.className = 'quiz-container';
    title.className = 'quiz-title';

    // Apply corruption based on level
    if (level >= 2) {
        container.classList.add('corrupted-1');
    }
    if (level >= 4) {
        container.classList.add('corrupted-2');
        title.classList.add('corrupted');
    }
    if (level >= 6) {
        container.classList.add('corrupted-3');
        staticOverlay.classList.add('visible');
    }
    if (level >= 8) {
        container.classList.add('corrupted-4');
        title.classList.add('very-corrupted');
        vhsLines.classList.add('visible');
        heartbeat.classList.add('visible');
    }
    if (level >= 10) {
        container.classList.add('corrupted-5');
        radio.classList.add('visible');
    }
    if (level >= 12) {
        pyramidHead.classList.add('visible');
        mainContainer.classList.add('rotate-room');
    }
    if (level >= 14) {
        nurse.classList.add('visible');
    }

    // Update sidebar info
    document.getElementById('sidebarHorror').textContent = Math.min(level * 7, 100) + '%';
    document.getElementById('sidebarParanoia').textContent =
        gameState.paranoia > 3 ? 'EXTREME' :
        gameState.paranoia > 1 ? 'ELEVATED' : 'NORMAL';

    // Update Buddy Says
    updateBuddySays();

    // Update page elements
    updatePageCorruption();

    // Update mascot
    updateMascot();

    // Update button styles
    updateButtonStyles();
}

function updateBuddySays() {
    const level = gameState.horrorLevel;
    const buddySays = document.getElementById('buddySays');

    const messages = [
        "Hi friend!! Ready for a FUN quiz?? Lets gooo!!",
        "Youre doing great!! Keep it up!! :3",
        "Hmm... the fog is getting thicker...",
        "Buddy feels... strange... keep playing...",
        "D̶o̶n̶t̶ ̶l̶o̶o̶k̶ ̶a̶w̶a̶y̶.̶.̶.̶",
        "Buddy sees what you did...",
        "WHY DID YOU STOP LOOKING AT THE SCREEN",
        "T̸̨̛h̸̢̛e̵͙̓ ̶̣̈q̷̣̈́ū̸̢i̵͙̓ẓ̶̈ ̶̣̈ṇ̷̈́ĕ̸̢ṿ̶̈ȇ̸̢ṛ̶̈ ̶̣̈ê̸̢ṇ̶̈ḍ̶̈ṣ̷̈́",
        "B̷̨̛Ụ̶̌D̷̰͝D̵̪̈Y̵̻͝ ̷̞̊L̵̰͒O̵̡̊V̸̳̊E̵̖͋S̵̱̐ ̷̣̀Y̵̗͝O̷̤͝U̵̢̔"
    ];

    const index = Math.min(Math.floor(level / 2), messages.length - 1);
    buddySays.textContent = messages[index];
}

function updatePageCorruption() {
    const level = gameState.horrorLevel;
    const title = document.getElementById('pageTitle');
    const warning = document.getElementById('warningText');
    const marquee = document.getElementById('marqueeText');
    const divider = document.getElementById('divider1');
    const sidebarWarning = document.getElementById('sidebarWarning');
    const pentas = ['penta1', 'penta2', 'penta3', 'footerPenta1', 'footerPenta2', 'footerPenta3'];

    if (level >= 4) {
        title.innerHTML = "~*~BUDDYS ̶S̶U̶P̶E̶R̶ ̶F̶U̶N̶ QUIZ~*~<br><span style='font-size: 14px;'>(You cant leave)</span>";
        warning.textContent = "!! WARNING: SOMETHING IS WRONG !!";
        warning.style.color = '#ff0000';
    }

    if (level >= 6) {
        title.innerHTML = "~*~T̸H̶E̵ ̷Q̶U̵I̶Z̷~*~<br><span style='font-size: 14px;'>(T̵h̷e̵r̸e̷ ̵i̷s̸ ̵n̴o̸ ̴e̵s̶c̷a̴p̶e̴)</span>";
        marquee.textContent = "THE FOG COMES !! BUDDY IS WATCHING !! DONT LOOK AWAY !! WHY DID YOU DO IT !! THE QUIZ NEVER ENDS !! BUDDY LOVES YOU !! YOU CANT LEAVE !!";
        divider.textContent = "";
    }

    if (level >= 8) {
        pentas.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = '';
        });

        sidebarWarning.innerHTML = "[W̷̡̛A̴R̵̨̛N̴I̶N̵G̸]<br>[D̵O̴ ̷N̴O̷T̴ ̵L̷O̴O̵K̴ ̵A̴W̴A̵Y̵]<br>[B̷̨̛U̸D̵D̷Y̶ ̵S̷E̷E̵S̶ ̷A̸L̷L̵]";
    }

    if (level >= 10) {
        document.getElementById('quizTitle').textContent = "B̷̨̛Ụ̶̌D̷̰͝D̵̪̈Y̵̻͝ ̷̞̊S̵̱̐Ȇ̸̢E̵̖͋S̵̱̐ ̷̣̀A̴L̷L̵";
    }
}

function updateButtonStyles() {
    const level = gameState.horrorLevel;
    const buttons = document.querySelectorAll('.answer-btn');

    buttons.forEach(btn => {
        btn.classList.remove('corrupted', 'very-corrupted');
        if (level >= 4) btn.classList.add('corrupted');
        if (level >= 8) btn.classList.add('very-corrupted');
    });
}

// ========================================
// RANDOM EVENTS
// ========================================
let eventInterval;

function startRandomEvents() {
    eventInterval = setInterval(() => {
        if (!gameState.isPlaying || gameState.hasEnded) return;
        if (gameState.horrorLevel < 3) return;

        const rand = Math.random();
        const level = gameState.horrorLevel;

        if (rand < 0.15 && level >= 4) {
            playSound('static');
        } else if (rand < 0.25 && level >= 5) {
            addWallWriting();
        } else if (rand < 0.35 && level >= 6) {
            addCornerEye();
        } else if (rand < 0.45 && level >= 7) {
            addBloodDrip();
        } else if (rand < 0.5 && level >= 8) {
            triggerSubliminal();
        } else if (rand < 0.55 && level >= 9) {
            playSound('whisper');
        } else if (rand < 0.6 && level >= 10) {
            flashColors();
        } else if (rand < 0.62 && level >= 12) {
            showFakeError();
        } else if (rand < 0.65 && level >= 4) {
            playSound('heartbeat');
        } else if (rand < 0.7 && level >= 8) {
            playSound('metal');
        } else if (rand < 0.75 && level >= 6) {
            playSound('drone');
        }
    }, 3000 - (gameState.horrorLevel * 150));
}

// ========================================
// PARANOIA SYSTEM (Tab Away Detection)
// ========================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        gameState.lastTabAway = Date.now();
    } else {
        if (gameState.isPlaying && gameState.lastTabAway > 0) {
            const awayTime = Date.now() - gameState.lastTabAway;
            if (awayTime > 1500 && gameState.horrorLevel >= 4) {
                gameState.paranoia++;
                gameState.horrorLevel += 0.5;

                const messages = [
                    "I̷ ̷S̷A̷W̷ ̷Y̷O̷U̷ ̷L̷O̷O̷K̷ ̷A̷W̷A̷Y̷",
                    "BUDDY NOTICED YOU LEFT",
                    "WHERE DID YOU GO?",
                    "DONT LEAVE BUDDY ALONE",
                    "THE QUIZ MISSED YOU"
                ];

                alert(messages[Math.floor(Math.random() * messages.length)]);

                if (gameState.paranoia >= 3 && Math.random() < 0.5) {
                    showJumpscare(Math.floor(Math.random() * 5));
                }

                updateHorrorEffects();
            }
        }
        gameState.lastTabAway = 0;
    }
});

// ========================================
// TYPEWRITER EFFECT
// ========================================
function typeWriter(element, text, speed = 50, callback) {
    element.textContent = '';
    element.classList.add('typewriter');
    let i = 0;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;

            // Random glitch sounds during typing
            if (gameState.horrorLevel >= 6 && Math.random() < 0.1) {
                playSound('glitch');
            }

            setTimeout(type, speed - (gameState.horrorLevel * 2));
        } else {
            element.classList.remove('typewriter');
            if (callback) callback();
        }
    }

    type();
}

// ========================================
// GAME FUNCTIONS
// ========================================
function startQuiz() {
    gameState = {
        ...gameState,
        currentQuestion: 0,
        score: 0,
        horrorLevel: 0,
        paranoia: 0,
        questions: getQuizQuestions(),
        isPlaying: true,
        hasEnded: false,
        wrongAnswers: 0
    };

    document.getElementById('introScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';

    // Initial happy sounds
    playSound('correct');

    startRandomEvents();
    showQuestion();
}

function showQuestion() {
    const q = gameState.questions[gameState.currentQuestion];
    const questionText = document.getElementById('questionText');
    const answersContainer = document.getElementById('answersContainer');
    const progressFill = document.getElementById('progressFill');
    const scoreDisplay = document.getElementById('scoreDisplay');

    // Update progress
    const progress = ((gameState.currentQuestion) / 13) * 100;
    progressFill.style.width = progress + '%';

    if (gameState.horrorLevel >= 6) {
        progressFill.classList.add('corrupted');
        scoreDisplay.classList.add('corrupted');
    }

    scoreDisplay.textContent = `Score: ${gameState.score}/${gameState.currentQuestion} | Question: ${gameState.currentQuestion + 1}/13`;

    // Choose question text based on horror level
    const useCorrupted = gameState.horrorLevel >= 4;
    const text = useCorrupted ? q.corruptedQuestion : q.question;

    // Clear answers
    answersContainer.innerHTML = '';

    // Show question with typewriter effect if corrupted
    if (gameState.horrorLevel >= 3) {
        questionText.classList.add('corrupted');
        typeWriter(questionText, text, 40, () => showAnswers(q));
    } else {
        questionText.textContent = text;
        showAnswers(q);
    }
}

function showAnswers(q) {
    const answersContainer = document.getElementById('answersContainer');

    q.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer;
        btn.onclick = () => selectAnswer(index, q.correct);

        if (gameState.horrorLevel >= 4) btn.classList.add('corrupted');
        if (gameState.horrorLevel >= 8) btn.classList.add('very-corrupted');

        answersContainer.appendChild(btn);
    });
}

function selectAnswer(selected, correct) {
    const isCorrect = selected === correct;

    if (isCorrect) {
        gameState.score++;
        playSound('correct');
        createSparkles();
    } else {
        gameState.wrongAnswers++;
        gameState.horrorLevel += 1.5;
        playSound('wrong');

        // Chance of jumpscare on wrong answer at high horror
        if (gameState.horrorLevel >= 6 && Math.random() < 0.3) {
            setTimeout(() => showJumpscare(Math.floor(Math.random() * 5)), 500);
        }
    }

    // Horror always increases
    gameState.horrorLevel += 0.5 + (gameState.questions[gameState.currentQuestion].tier * 0.3);

    // Update effects
    updateHorrorEffects();

    // Check for Otherworld transition
    if (gameState.currentQuestion === 4 && gameState.horrorLevel >= 3) {
        otherworldTransition();
    }

    // Next question
    gameState.currentQuestion++;

    if (gameState.currentQuestion >= 13) {
        endGame();
    } else {
        setTimeout(showQuestion, 500);
    }
}

function createSparkles() {
    if (gameState.horrorLevel >= 6) return; // No sparkles in horror mode

    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('span');
        sparkle.className = 'sparkle';
        sparkle.textContent = ['', '', '', '', ''][Math.floor(Math.random() * 5)];
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        document.getElementById('quizContainer').appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
    }
}

function otherworldTransition() {
    playSound('siren');

    // Flash screen
    document.body.style.backgroundColor = '#fff';
    setTimeout(() => document.body.style.backgroundColor = '', 100);

    // Show Seal of Metatron briefly
    const seal = document.getElementById('sealMetatron');
    seal.textContent = '';
    seal.style.display = 'block';
    setTimeout(() => seal.style.display = 'none', 3000);

    // Accelerate horror
    gameState.horrorLevel += 2;
}

// ========================================
// ENDINGS
// ========================================
function endGame() {
    gameState.hasEnded = true;
    gameState.isPlaying = false;
    clearInterval(eventInterval);

    const percentage = (gameState.score / 13) * 100;

    let ending;

    // Dog ending if paranoia is high
    if (gameState.paranoia > 4) {
        ending = getDogEnding();
    } else if (percentage >= 85) {
        ending = getLeaveEnding();
    } else if (percentage >= 60) {
        ending = getMariaEnding();
    } else if (percentage >= 35) {
        ending = getInWaterEnding();
    } else {
        ending = getRebirthEnding();
    }

    showEnding(ending);
}

function getLeaveEnding() {
    return {
        title: "LEAVE",
        text: "You found the truth. You proved your KNOLEDGE. You can go now. The fog parts... Buddy waves goodbye... You wake up... It was just a quiz... wasnt it?",
        color: "#999999",
        background: "linear-gradient(180deg, #333 0%, #111 100%)"
    };
}

function getMariaEnding() {
    return {
        title: "MARIA",
        text: "You couldnt let go. You found someone new. Buddy transforms into something familiar... She looks like Mary... but different... She coughs. The quiz repeats. Forever.",
        color: "#ff6699",
        background: "linear-gradient(180deg, #660033 0%, #330011 100%)"
    };
}

function getInWaterEnding() {
    return {
        title: "IN WATER",
        text: "The weight was too much to bear. Buddy sinks into the lake... Your score sinks with him... The questions fade... The fog consumes... In your restless dreams, you see that quiz...",
        color: "#6699ff",
        background: "linear-gradient(180deg, #003366 0%, #001133 100%)"
    };
}

function getRebirthEnding() {
    return {
        title: "REBIRTH",
        text: "The ritual demands everything. Your wrong answers have meaning. Buddy transcends. The quiz becomes something else. Press F5 to try the ritual again. And again. And again.",
        color: "#ff3300",
        background: "linear-gradient(180deg, #660000 0%, #220000 100%)"
    };
}

function getDogEnding() {
    return {
        title: "DOG",
        text: "You looked away too many times. Buddy reveals his true form... Its a Shiba Inu at a computer. The dog has been controlling everything. The quiz. The fog. Silent Hill itself. bark bark bark. Thank you for playing!",
        color: "#ffcc00",
        background: "linear-gradient(180deg, #666600 0%, #333300 100%)",
        special: true
    };
}

function showEnding(ending) {
    // Clear effects
    document.getElementById('effectsContainer').innerHTML = '';
    document.getElementById('staticOverlay').classList.remove('visible');
    document.getElementById('vhsLines').classList.remove('visible');
    document.getElementById('heartbeatOverlay').classList.remove('visible');
    document.getElementById('pyramidHead').classList.remove('visible');
    document.getElementById('nurseFigure').classList.remove('visible');
    document.getElementById('radioStatic').classList.remove('visible');

    const endingScreen = document.getElementById('endingScreen');
    endingScreen.style.display = 'flex';
    endingScreen.innerHTML = `
        <div class="ending-screen" style="background: ${ending.background};">
            <div class="ending-title" style="color: ${ending.color};">${ending.title}</div>
            <div class="ending-text" style="color: ${ending.color};">${ending.text}</div>
            <p style="margin-top: 40px; color: #666;">
                Final Score: ${gameState.score}/13 (${Math.round((gameState.score/13)*100)}%)<br>
                Paranoia Level: ${gameState.paranoia}<br>
                Horror Level: ${Math.round(gameState.horrorLevel)}
            </p>
            <button class="btn-old" onclick="location.reload()" style="margin-top: 20px;">
                ${ending.special ? 'pet the dog' : 'TRY AGAIN??'}
            </button>
            <p style="margin-top: 20px; font-size: 12px; color: #444;">
                <a href="index.html" style="color: #666;">Return to main site</a>
            </p>
        </div>
    `;

    document.getElementById('gameScreen').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'none';

    // Special dog ending music (sort of)
    if (ending.special) {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => playSound('correct'), i * 200);
        }
    } else {
        playSound('drone');
    }
}

// ========================================
// EYE TRACKING
// ========================================
document.addEventListener('mousemove', (e) => {
    if (!gameState.isPlaying) return;

    const pupilLeft = document.getElementById('pupilLeft');
    const pupilRight = document.getElementById('pupilRight');

    const mascot = document.getElementById('mascot');
    const rect = mascot.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const distance = Math.min(5, Math.hypot(e.clientX - centerX, e.clientY - centerY) / 50);

    const offsetX = Math.cos(angle) * distance;
    const offsetY = Math.sin(angle) * distance;

    pupilLeft.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    pupilRight.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

// ========================================
// INITIALIZATION
// ========================================
window.addEventListener('load', () => {
    console.log('%cQuiz loaded. Buddy is ready.', 'color: #ff66cc;');
    console.log('%c...the fog awaits...', 'color: #660000; font-size: 8px;');
});

// Warn before leaving
window.addEventListener('beforeunload', (e) => {
    if (gameState.isPlaying && !gameState.hasEnded && gameState.horrorLevel >= 4) {
        e.preventDefault();
        e.returnValue = 'Buddy doesnt want you to leave...';
    }
});

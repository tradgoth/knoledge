// ========================================
// BUDDYS SUPER FUN QUIZ - TOTALLY NORMAL
// Created by DarkAlessa1999 (Todd) & Buddy
// Last update: November 14, 2003
// Nothing weird in this code at all
// v2.0 - NOW WITH MORE "FEATURES"
// ========================================

// Console messages for snoopy developers
console.log('%c!! BUDDY WELCOMES YOU !!', 'color: #ff66cc; font-size: 24px; font-family: Comic Sans MS;');
console.log('%cYou found the quiz code! Buddy sees everything.', 'color: #ff99ff;');
console.log('%cDont worry, the horror effects are totally normal quiz features', 'color: #cc66cc;');
console.log('%cIf you see this after 2010, the quiz has leaked into your timeline', 'color: #ff6600;');
console.log('%c...buddy is always watching...', 'color: #660000; font-size: 8px;');
console.log('%cprotip: wait on the ending screen. trust me.', 'color: #333; font-size: 6px;');
console.log('%c', 'padding: 50px; background: url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\'><text y=\'50\' font-size=\'60\'>👁️</text></svg>") no-repeat;');
console.log('%cFUN FACTS:', 'color: #ff9900; font-weight: bold;');
console.log('%c• There are 6 possible endings', 'color: #ffcc00;');
console.log('%c• Perfect score unlocks a secret', 'color: #ffcc00;');
console.log('%c• The dog ending IS canon', 'color: #ffcc00;');
console.log('%c• Tab away at your own risk', 'color: #ffcc00;');
console.log('%c• 72 demons were bound for this quiz', 'color: #ffcc00;');
console.log('%c• Todd worked really hard on this', 'color: #ffcc00;');
console.log('%c• Metatron is watching your score', 'color: #ff0000;');

// ========================================
// QUESTION BANK - TOTALLY FUN QUESTIONS
// (now with 100% MORE forbidden lore!!)
// ========================================
const questions = [
    // =========== TIER 0 - Easy & Cute ===========
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
    {
        tier: 0,
        question: "What is Jamess wifes name? (she seems nice!!)",
        corruptedQuestion: "Who did you smother with a pillow?",
        answers: ["Mary", "Maria", "Laura", "Angela"],
        correct: 0
    },
    {
        tier: 0,
        question: "What creature follows James around? (he looks friendly!!)",
        corruptedQuestion: "What executioner waits in the dark?",
        answers: ["Pyramid Head", "Nemesis", "Scissorman", "Robbie the Rabbit"],
        correct: 0
    },
    {
        tier: 0,
        question: "What weather is Silent Hill famous for?",
        corruptedQuestion: "What hides the monsters from sight?",
        answers: ["Fog", "Rain", "Snow", "Sunshine"],
        correct: 0
    },
    // =========== TIER 1 - Medium ===========
    {
        tier: 1,
        question: "What hotel does James visit in SH2?",
        corruptedQuestion: "Where did he smother her with a pillow?",
        answers: ["Lakeview Hotel", "Overlook Hotel", "Grand Hotel", "Bates Motel"],
        correct: 0
    },
    {
        tier: 1,
        question: "Whats the name of the scary hospital in SH2?",
        corruptedQuestion: "Where do the nurses wait?",
        answers: ["Brookhaven Hospital", "Arkham Asylum", "St. Johns", "Alchemilla Hospital"],
        correct: 0
    },
    {
        tier: 1,
        question: "What did Dahlia call the Seal of Metatron? (she lied btw)",
        corruptedQuestion: "What deception led Harry astray?",
        answers: ["Mark of Samael", "Halo of the Sun", "Seal of Solomon", "Sign of God"],
        correct: 0
    },
    {
        tier: 1,
        question: "What does the radio do when monsters are near?",
        corruptedQuestion: "What warns you before they strike?",
        answers: ["Emits static", "Plays music", "Glows red", "Speaks warnings"],
        correct: 0
    },
    {
        tier: 1,
        question: "What grimoire does the Order reference?",
        corruptedQuestion: "What book binds the 72 demons?",
        answers: ["Lesser Key of Solomon", "Necronomicon", "Book of Shadows", "Bible"],
        correct: 0
    },
    // =========== TIER 2 - Hard & Dark ===========
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
        question: "Why can Laura see no monsters in SH2?",
        corruptedQuestion: "Why is the innocent spared?",
        answers: ["She has no guilt or trauma", "Shes a ghost", "Monsters like her", "Shes blind"],
        correct: 0
    },
    {
        tier: 2,
        question: "What is Maria REALLY?",
        corruptedQuestion: "Who created the shadow bride?",
        answers: ["James manifested Anima/tulpa", "Marys twin sister", "A nurse from Brookhaven", "A real person"],
        correct: 0
    },
    {
        tier: 2,
        question: "What Old Testament practice does Alessas burning mirror?",
        corruptedQuestion: "What ancient evil burned children?",
        answers: ["Molech sacrifice", "Animal sacrifice", "Burnt offerings", "Passover lamb"],
        correct: 0
    },
    {
        tier: 2,
        question: "What demon king appears in the SH2 Remake puzzles?",
        corruptedQuestion: "What King of Hell reveals eternal secrets?",
        answers: ["Paimon", "Asmodeus", "Baal", "Satan"],
        correct: 0
    },
    {
        tier: 2,
        question: "Who is Lilith in Jewish mysticism?",
        corruptedQuestion: "Who was Adams FIRST wife?",
        answers: ["Lilith", "Eves sister", "An angel", "lilian"],
        correct: 0
    },
    // =========== TIER 3 - Extreme ===========
    {
        tier: 3,
        question: "What psychological concept does Pyramid Head represent?",
        corruptedQuestion: "WHAT IS YOUR SHADOW? WHAT DO YOU HIDE?",
        answers: ["The Shadow (Jung)", "The Id (Freud)", "The Superego", "The Hardway"],
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
    {
        tier: 3,
        question: "What book describes Azazel as leader of the Watchers?",
        corruptedQuestion: "Who taught humanity forbidden secrets?",
        answers: ["Book of Enoch", "Book of Revelation", "Genesis", "Deuteronomy"],
        correct: 0
    },
    {
        tier: 3,
        question: "What are the Watchers in fallen angel lore?",
        corruptedQuestion: "Who abandoned heaven for human flesh?",
        answers: ["200 angels who fell to Earth", "Guardian spirits", "Demon hunters", "Archangels"],
        correct: 0
    },
    {
        tier: 3,
        question: "What happens during James Shadow Integration?",
        corruptedQuestion: "When did you accept your guilt?",
        answers: ["He admits needing punishment", "He defeats Pyramid Head", "He forgets everything", "He dies"],
        correct: 0
    },
    {
        tier: 3,
        question: "In SH: Homecoming, what Cain/Abel parallel exists?",
        corruptedQuestion: "Where is your brother? What did you do?",
        answers: ["Alex and Joshua Shepherd", "James and his father", "Harry and his wife", "Walter and Henry"],
        correct: 0
    },
    {
        tier: 3,
        question: "What does Jacobs Ladder represent in SH lore?",
        corruptedQuestion: "What ladder connects worlds?",
        answers: ["Town as liminal purgatory space", "Stairs to heaven", "A hospital", "Alessas escape route"],
        correct: 0
    },
    {
        tier: 3,
        question: "What corrupted relationship mirrors Samael and Lilith?",
        corruptedQuestion: "What dark marriage rules Silent Hill?",
        answers: ["The towns demiurge and feminine", "Harry and his wife", "James and Maria", "Dahlia and her god"],
        correct: 0
    },
    // =========== TIER 4 - Incomprehensible ===========
    {
        tier: 4,
        question: "D̶O̶ ̶Y̶O̶U̶ ̶R̶E̶M̶E̶M̶B̶E̶R̶?",
        corruptedQuestion: "D̸̨̛O̷̧̊ ̶̣̈Y̷̰̓Ö̵͙U̵̢̔ ̷̣͠R̶̥̈́E̴͙͒M̵̗̈́E̶̟̔M̶̰̌B̶͙̐E̷̱͘R̵̤̈ ̴̣̏W̸̻̃H̵̰̾Ä̷͙T̶̠̒ ̶̰̌Y̵̻͝O̵̤͆U̷̥̐ ̵͖͘D̵̰͝I̵̗͝D̵̪̈?",
        answers: ["yes", "no", "i dont understand", "MAKE IT STOP"],
        correct: 0
    },
    {
        tier: 4,
        question: "W̷̡̛H̸̢̛Y̵͙̓ ̶̣̈Ḍ̷̈́I̸̢̓D̶̈ ̶̣̈Y̷̰̓O̵͙̊U̵̢̔ ̷̣͠C̶̥̈́O̴͙͒M̵̗̈́E̶̟̔?",
        corruptedQuestion: "T̸H̵E̷ ̶F̵O̷G̸ ̵C̷A̸L̵L̷E̵D̵ ̷Y̵O̷U̵ ̵H̸E̷R̴E̸",
        answers: ["to find what I lost", "to remember", "to forget", "to die"],
        correct: 0
    },
    {
        tier: 4,
        question: "B̸̨̛Ů̷̧Ḍ̶̈D̷̰̓Y̵͙ ̵̢̔Ḷ̷͠Ö̶̥́V̴͙͒Ë̵̗́S̶̟̔ ̶̰̌Ÿ̵̪O̵̻͝Ṳ̵͆.̷̥̐ ̵͖͘D̵̰͝O̵̗͝ ̵̪̈Y̵̻͝O̵̤͆U̷̥̐ ̵͖͘L̵̰͝O̵̗͝V̵̪̈E̵̻͝ ̵̤͆B̷̥̐U̵͖͘D̵̰͝D̵̗͝Ÿ̵̪?",
        corruptedQuestion: "T̷̨̛H̸̢̛E̵͙̓Ṛ̶̈Ẹ̷̈́ ̸̢̓Ï̶Ṣ̶̈ ̷̰̓N̵͙̊O̵̢̔ ̷̣͠Ë̶̥́S̴͙͒C̵̗̈́A̶̟̔P̶̰̌Ë̵̪",
        answers: ["yes buddy i love you", "no", "who is buddy", "please let me go"],
        correct: 0
    }
];

// Shuffle and select 13 questions with balanced tiers
function getQuizQuestions() {
    const tier0 = questions.filter(q => q.tier === 0).sort(() => Math.random() - 0.5);
    const tier1 = questions.filter(q => q.tier === 1).sort(() => Math.random() - 0.5);
    const tier2 = questions.filter(q => q.tier === 2).sort(() => Math.random() - 0.5);
    const tier3 = questions.filter(q => q.tier === 3).sort(() => Math.random() - 0.5);
    const tier4 = questions.filter(q => q.tier === 4).sort(() => Math.random() - 0.5);

    // Select balanced mix: 3 easy, 3 medium, 3 hard, 3 extreme, 1 incomprehensible
    const selected = [
        ...tier0.slice(0, 3),
        ...tier1.slice(0, 3),
        ...tier2.slice(0, 3),
        ...tier3.slice(0, 3),
        ...tier4.slice(0, 1)
    ];

    // Sort by tier for progressive difficulty
    return selected.sort((a, b) => a.tier - b.tier);
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
    bloodDrips: 0,
    cracksOnScreen: 0,
    postEndingPhase: 0,
    trueEndingTimer: null,
    endingShown: null,
    popupsShown: 0,
    crtEffectsActive: false,
    buttonChaseActive: false
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

            case 'glass':
                // Glass breaking
                const glassNoise = ctx.createBufferSource();
                const glassGain = ctx.createGain();
                const glassFilter = ctx.createBiquadFilter();
                const glassBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.3, ctx.sampleRate);
                const glassData = glassBuffer.getChannelData(0);
                for (let i = 0; i < glassBuffer.length; i++) {
                    glassData[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.05));
                }
                glassNoise.buffer = glassBuffer;
                glassFilter.type = 'highpass';
                glassFilter.frequency.setValueAtTime(2000, now);
                glassGain.gain.setValueAtTime(0.4, now);
                glassGain.gain.exponentialDecayTo(0.01, now + 0.3);
                glassNoise.connect(glassFilter).connect(glassGain).connect(ctx.destination);
                glassNoise.start(now);
                break;

            case 'cough':
                // Coughing sound
                for (let i = 0; i < 3; i++) {
                    const coughNoise = ctx.createBufferSource();
                    const coughGain = ctx.createGain();
                    const coughFilter = ctx.createBiquadFilter();
                    const coughBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.15, ctx.sampleRate);
                    const coughData = coughBuffer.getChannelData(0);
                    for (let j = 0; j < coughBuffer.length; j++) {
                        coughData[j] = (Math.random() * 2 - 1) * Math.sin(j / 100) * Math.exp(-j / (ctx.sampleRate * 0.05));
                    }
                    coughNoise.buffer = coughBuffer;
                    coughFilter.type = 'bandpass';
                    coughFilter.frequency.setValueAtTime(800, now + i * 0.4);
                    coughGain.gain.setValueAtTime(0.2, now + i * 0.4);
                    coughGain.gain.exponentialDecayTo(0.01, now + i * 0.4 + 0.15);
                    coughNoise.connect(coughFilter).connect(coughGain).connect(ctx.destination);
                    coughNoise.start(now + i * 0.4);
                }
                break;

            case 'bubbles':
                // Underwater bubbles
                for (let i = 0; i < 10; i++) {
                    const bubbleOsc = ctx.createOscillator();
                    const bubbleGain = ctx.createGain();
                    bubbleOsc.type = 'sine';
                    bubbleOsc.frequency.setValueAtTime(300 + Math.random() * 500, now + i * 0.2);
                    bubbleOsc.frequency.exponentialRampToValueAtTime(600 + Math.random() * 400, now + i * 0.2 + 0.1);
                    bubbleGain.gain.setValueAtTime(0.05, now + i * 0.2);
                    bubbleGain.gain.exponentialDecayTo(0.001, now + i * 0.2 + 0.15);
                    bubbleOsc.connect(bubbleGain).connect(ctx.destination);
                    bubbleOsc.start(now + i * 0.2);
                    bubbleOsc.stop(now + i * 0.2 + 0.2);
                }
                break;

            case 'chant':
                // Ritual chanting
                const chantFreqs = [110, 130, 165, 110, 98];
                chantFreqs.forEach((freq, i) => {
                    const chantOsc = ctx.createOscillator();
                    const chantGain = ctx.createGain();
                    chantOsc.type = 'sawtooth';
                    chantOsc.frequency.setValueAtTime(freq, now + i * 0.5);
                    chantGain.gain.setValueAtTime(0.08, now + i * 0.5);
                    chantGain.gain.exponentialDecayTo(0.01, now + i * 0.5 + 0.4);
                    chantOsc.connect(chantGain).connect(ctx.destination);
                    chantOsc.start(now + i * 0.5);
                    chantOsc.stop(now + i * 0.5 + 0.5);
                });
                break;

            case 'bark':
                // Dog bark
                for (let i = 0; i < 3; i++) {
                    const barkOsc = ctx.createOscillator();
                    const barkGain = ctx.createGain();
                    barkOsc.type = 'sawtooth';
                    barkOsc.frequency.setValueAtTime(300, now + i * 0.3);
                    barkOsc.frequency.exponentialRampToValueAtTime(150, now + i * 0.3 + 0.1);
                    barkGain.gain.setValueAtTime(0.2, now + i * 0.3);
                    barkGain.gain.exponentialDecayTo(0.01, now + i * 0.3 + 0.15);
                    barkOsc.connect(barkGain).connect(ctx.destination);
                    barkOsc.start(now + i * 0.3);
                    barkOsc.stop(now + i * 0.3 + 0.2);
                }
                break;

            case 'peaceful':
                // Peaceful ambient
                const peacefulChord = [261.63, 329.63, 392];
                peacefulChord.forEach(freq => {
                    const pOsc = ctx.createOscillator();
                    const pGain = ctx.createGain();
                    pOsc.type = 'sine';
                    pOsc.frequency.setValueAtTime(freq, now);
                    pGain.gain.setValueAtTime(0.05, now);
                    pGain.gain.exponentialDecayTo(0.001, now + 3);
                    pOsc.connect(pGain).connect(ctx.destination);
                    pOsc.start(now);
                    pOsc.stop(now + 3);
                });
                break;

            case 'windows_error':
                // Windows error ding
                const winOsc = ctx.createOscillator();
                const winGain = ctx.createGain();
                winOsc.type = 'square';
                winOsc.frequency.setValueAtTime(440, now);
                winGain.gain.setValueAtTime(0.15, now);
                winGain.gain.setValueAtTime(0, now + 0.1);
                winGain.gain.setValueAtTime(0.15, now + 0.15);
                winGain.gain.exponentialDecayTo(0.01, now + 0.3);
                winOsc.connect(winGain).connect(ctx.destination);
                winOsc.start(now);
                winOsc.stop(now + 0.3);
                break;

            case 'degauss':
                // CRT degauss warble
                const degOsc = ctx.createOscillator();
                const degGain = ctx.createGain();
                degOsc.type = 'sine';
                degOsc.frequency.setValueAtTime(60, now);
                degOsc.frequency.linearRampToValueAtTime(120, now + 0.2);
                degOsc.frequency.linearRampToValueAtTime(60, now + 0.5);
                degGain.gain.setValueAtTime(0.2, now);
                degGain.gain.exponentialDecayTo(0.01, now + 0.5);
                degOsc.connect(degGain).connect(ctx.destination);
                degOsc.start(now);
                degOsc.stop(now + 0.5);
                break;

            case 'aim_door':
                // AIM door open sound (classic 2003)
                const aimOsc = ctx.createOscillator();
                const aimOsc2 = ctx.createOscillator();
                const aimGain = ctx.createGain();
                aimOsc.type = 'sine';
                aimOsc2.type = 'sine';
                aimOsc.frequency.setValueAtTime(880, now);
                aimOsc.frequency.setValueAtTime(1046, now + 0.1);
                aimOsc.frequency.setValueAtTime(1318, now + 0.2);
                aimOsc2.frequency.setValueAtTime(440, now);
                aimOsc2.frequency.setValueAtTime(523, now + 0.1);
                aimOsc2.frequency.setValueAtTime(659, now + 0.2);
                aimGain.gain.setValueAtTime(0.15, now);
                aimGain.gain.exponentialDecayTo(0.01, now + 0.35);
                aimOsc.connect(aimGain).connect(ctx.destination);
                aimOsc2.connect(aimGain);
                aimOsc.start(now);
                aimOsc2.start(now);
                aimOsc.stop(now + 0.35);
                aimOsc2.stop(now + 0.35);
                break;

            case 'dialup':
                // Dial-up modem sound (nostalgic horror)
                const dialNoise = ctx.createBufferSource();
                const dialGain = ctx.createGain();
                const dialFilter = ctx.createBiquadFilter();
                const dialBuffer = ctx.createBuffer(1, ctx.sampleRate * 1.5, ctx.sampleRate);
                const dialData = dialBuffer.getChannelData(0);
                for (let i = 0; i < dialBuffer.length; i++) {
                    const t = i / ctx.sampleRate;
                    // Mix of tones that sound like modem handshake
                    dialData[i] = Math.sin(t * 2000 * Math.PI * 2) * 0.3 * Math.sin(t * 20) +
                                  Math.sin(t * 1400 * Math.PI * 2) * 0.2 * Math.cos(t * 15) +
                                  (Math.random() - 0.5) * 0.2 * Math.sin(t * 10);
                }
                dialNoise.buffer = dialBuffer;
                dialFilter.type = 'bandpass';
                dialFilter.frequency.setValueAtTime(1200, now);
                dialGain.gain.setValueAtTime(0.15, now);
                dialGain.gain.exponentialDecayTo(0.01, now + 1.5);
                dialNoise.connect(dialFilter).connect(dialGain).connect(ctx.destination);
                dialNoise.start(now);
                break;

            case 'screech':
                // Metal screech (Pyramid Head dragging)
                const screechOsc = ctx.createOscillator();
                const screechOsc2 = ctx.createOscillator();
                const screechGain = ctx.createGain();
                const screechFilter = ctx.createBiquadFilter();
                screechOsc.type = 'sawtooth';
                screechOsc2.type = 'square';
                screechOsc.frequency.setValueAtTime(200, now);
                screechOsc.frequency.linearRampToValueAtTime(400, now + 0.5);
                screechOsc2.frequency.setValueAtTime(203, now);
                screechOsc2.frequency.linearRampToValueAtTime(397, now + 0.5);
                screechFilter.type = 'bandpass';
                screechFilter.frequency.setValueAtTime(800, now);
                screechFilter.Q.setValueAtTime(5, now);
                screechGain.gain.setValueAtTime(0.1, now);
                screechGain.gain.exponentialDecayTo(0.01, now + 0.6);
                screechOsc.connect(screechFilter).connect(screechGain).connect(ctx.destination);
                screechOsc2.connect(screechFilter);
                screechOsc.start(now);
                screechOsc2.start(now);
                screechOsc.stop(now + 0.6);
                screechOsc2.stop(now + 0.6);
                break;

            case 'success':
                // Happy success jingle (fake hope)
                const successFreqs = [523, 659, 784, 1046];
                successFreqs.forEach((freq, i) => {
                    const sOsc = ctx.createOscillator();
                    const sGain = ctx.createGain();
                    sOsc.type = 'sine';
                    sOsc.frequency.setValueAtTime(freq, now + i * 0.1);
                    sGain.gain.setValueAtTime(0.15, now + i * 0.1);
                    sGain.gain.exponentialDecayTo(0.01, now + i * 0.1 + 0.2);
                    sOsc.connect(sGain).connect(ctx.destination);
                    sOsc.start(now + i * 0.1);
                    sOsc.stop(now + i * 0.1 + 0.25);
                });
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
        // Classic SH references
        "THERE WAS A HOLE HERE",
        "ITS GONE NOW",
        "IN MY RESTLESS DREAMS",
        "I SEE THAT TOWN",
        "SILENT HILL",
        "ROOM 312",
        "MARY...",
        "THE DOG DID IT",
        // Lore from articles
        "THE SEAL PROTECTS NOTHING",
        "METATRON WATCHES",
        "SAMAEL DECEIVES",
        "LILITH WAS FIRST",
        "TOPHET BURNS ETERNAL",
        "MOLECH DEMANDS",
        "THE WATCHERS FELL",
        "AZAZEL TAUGHT US",
        "FLAUROS TRAPS TRUTH",
        "72 DEMONS BOUND",
        "PAIMON KNOWS SECRETS",
        "THE SHADOW FOLLOWS",
        "ANIMA MANIFESTS",
        "JACOB SAW THE LADDER",
        "THE COLLECTIVE BLEEDS",
        "ALESSA BURNS STILL",
        // Buddy/Quiz specific
        "DONT LOOK AWAY",
        "BUDDY SEES YOU",
        "WHY DID YOU DO IT",
        "YOU CANT LEAVE",
        "THE FOG IS COMING",
        "REMEMBER WHAT YOU DID",
        "ITS YOUR FAULT",
        "KEEP PLAYING",
        "DONT STOP",
        "BUDDY LOVES YOU",
        "THE QUIZ NEVER ENDS",
        "TODD WAS RIGHT",
        "CHECK YOUR SCORE",
        "LOOK BEHIND YOU",
        "THE FOG REMEMBERS"
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

function addScreenCrack() {
    if (gameState.cracksOnScreen >= 10) return;

    const patterns = ['crack-pattern-1', 'crack-pattern-2', 'crack-pattern-3'];
    const crack = document.createElement('div');
    crack.className = 'screen-crack ' + patterns[Math.floor(Math.random() * patterns.length)];
    crack.style.left = Math.random() * 80 + 10 + '%';
    crack.style.top = Math.random() * 80 + 10 + '%';
    crack.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.getElementById('cracksContainer').appendChild(crack);
    gameState.cracksOnScreen++;

    playSound('glass');
}

function triggerSubliminal() {
    const symbols = ['', '', '', '', '', ''];
    const subliminal = document.getElementById('subliminal');
    subliminal.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    subliminal.classList.add('flash');
    setTimeout(() => subliminal.classList.remove('flash'), 50);
}

function flashColors() {
    document.body.classList.add('invert-colors');
    setTimeout(() => document.body.classList.remove('invert-colors'), 100);
}

function triggerCRTEffect() {
    const effects = ['degauss', 'flicker', 'tear', 'burnin'];
    const effect = effects[Math.floor(Math.random() * effects.length)];

    switch(effect) {
        case 'degauss':
            document.body.classList.add('degauss-wobble');
            playSound('degauss');
            setTimeout(() => document.body.classList.remove('degauss-wobble'), 500);
            break;
        case 'flicker':
            document.body.classList.add('crt-flicker');
            setTimeout(() => document.body.classList.remove('crt-flicker'), 2000);
            break;
        case 'tear':
            const tear = document.getElementById('horizontalTear');
            tear.style.display = 'block';
            setTimeout(() => tear.style.display = 'none', 3000);
            break;
        case 'burnin':
            document.getElementById('burnInGhost').classList.add('visible');
            setTimeout(() => document.getElementById('burnInGhost').classList.remove('visible'), 5000);
            break;
    }
}

function triggerScreenMelt() {
    const container = document.getElementById('mainContainer');
    container.classList.add('screen-melt');
    setTimeout(() => container.classList.remove('screen-melt'), 5000);
}

// ========================================
// FAKE ERROR POPUPS
// ========================================
const fakeErrors = [
    { title: "buddy.exe", icon: "⚠️", message: "Buddy.exe has performed an illegal operation and will be shut down.\n\nIf the problem persists, contact your system administrator (Buddy)." },
    { title: "Mary.dll - Error", icon: "❌", message: "Cannot find Mary.dll\n\nThe specified module could not be found.\n\nShe was here. Now shes gone." },
    { title: "Silent Hill", icon: "💀", message: "A fatal exception 0E has occurred at 0028:C0011312 in VXD PYRAMID_HEAD.\n\nThe current application will be terminated." },
    { title: "Warning", icon: "⚠️", message: "ERROR: sin_count overflow\n\nYour sins exceed the maximum integer value.\n\nPlease repent and try again." },
    { title: "System Error", icon: "🖥️", message: "Not enough memory to display horror.\n\nClose some applications and try again.\n\n(You cannot close this application)" },
    { title: "VIRUS ALERT", icon: "🦠", message: "VIRUS DETECTED: pyramid_head.worm\n\nYour soul has been infected.\n\nQuarantine is not possible." },
    { title: "quiz.exe", icon: "❓", message: "Quiz has stopped responding.\n\nBuddy is thinking...\n\nPlease wait. Do not look away." },
    { title: "Otherworld.sys", icon: "🌫️", message: "The Otherworld transition is imminent.\n\nPlease save all work.\n\n(There is nothing to save)" },
    { title: "metatron.exe", icon: "✡️", message: "The Seal has been broken.\n\nAlessa's protection is failing.\n\nDahlia was right all along." },
    { title: "Internet Explorer", icon: "🌐", message: "This page contains both secure and nonsecure items.\n\nDo you want to display the nonsecure items?\n\n(The fog counts as nonsecure)" },
    { title: "AOL Instant Messenger", icon: "💬", message: "BuddyTheMascot wants to send you a file:\n\ntruth.exe (666 KB)\n\nAccept?" },
    { title: "McAfee VirusScan", icon: "🛡️", message: "Threat Detected!\n\nFile: your_guilt.dll\nLocation: C:\\Documents and Settings\\James\\Memories\n\nAction taken: Suppressed (but not forgotten)" },
    { title: "Download Complete", icon: "📥", message: "Download Complete!\n\nFile: forbidden_knowledge.zip\nSize: 72 demons\n\nOpen folder?" },
    { title: "Bonzi Buddy", icon: "🦍", message: "Hi! Its me, your friend Bonzi!\n\nI noticed you havent taken the quiz yet.\n\nWould you like me to help you find Mary?" },
    { title: "RealPlayer", icon: "▶️", message: "Buffering... 66.6%\n\nYour connection to the Otherworld is slow.\n\nPlease wait while we load more fog." },
    { title: "Netscape Navigator", icon: "🧭", message: "Document Done (but your soul isnt)\n\n404: Salvation Not Found\n\nThe requested happiness could not be located." }
];

// Fun loading messages for extra gags
const loadingMessages = [
    "Loading forbidden knowledge...",
    "Summoning quiz questions...",
    "Calibrating horror levels...",
    "Connecting to Otherworld server...",
    "Downloading guilt.dll...",
    "Initializing Buddy AI...",
    "Checking soul integrity...",
    "Loading fog textures...",
    "Binding 72 demons...",
    "Establishing connection to Silent Hill...",
    "Parsing your sins...",
    "Compiling trauma.exe...",
    "Defragmenting memories...",
    "Installing pyramid_head_service...",
    "Verifying seal of metatron..."
];

function showFakeError() {
    if (gameState.popupsShown >= 3) return;

    const error = fakeErrors[Math.floor(Math.random() * fakeErrors.length)];
    const popup = document.createElement('div');
    popup.className = 'fake-popup';
    popup.style.left = (100 + Math.random() * 300) + 'px';
    popup.style.top = (50 + Math.random() * 200) + 'px';

    popup.innerHTML = `
        <div class="popup-title">
            <span>${error.icon} ${error.title}</span>
            <div class="popup-close" onclick="this.parentElement.parentElement.remove(); gameState.popupsShown--;">×</div>
        </div>
        <div class="popup-content">
            <span class="popup-icon">${error.icon}</span>
            ${error.message.replace(/\n/g, '<br>')}
        </div>
        <div class="popup-buttons">
            <button class="popup-btn" onclick="this.parentElement.parentElement.remove(); gameState.popupsShown--;">OK</button>
            <button class="popup-btn" onclick="showFakeError(); this.parentElement.parentElement.remove();">Help</button>
        </div>
    `;

    document.getElementById('popupsContainer').appendChild(popup);
    gameState.popupsShown++;
    playSound('windows_error');
}

function showFakeBSOD() {
    const bsod = document.createElement('div');
    bsod.className = 'jumpscare-bsod';
    bsod.innerHTML = `
        <div class="bsod-title">Windows</div>
        <br><br>
        A fatal exception 0E has occurred at 0028:C0011666 in VXD BUDDY(01) +
        00001337. The current application will be terminated.<br><br>

        *  Press any key to return to Silent Hill.<br>
        *  Press CTRL+ALT+DEL to restart your consciousness.<br><br>

        You will lose any unsaved information in all applications that are
        currently running, including your sanity.<br><br>

        <span style="color: #ffff00;">Press any key to continue _</span><br><br><br>

        <span style="font-size: 10px;">BUDDY_MEMORY_CORRUPTION_DETECTED</span><br>
        <span style="font-size: 10px;">STOP: 0x0000312 (ROOM_NOT_FOUND, MARY_MISSING, GUILT_OVERFLOW)</span>
    `;

    document.body.appendChild(bsod);
    playSound('windows_error');

    const handleKey = () => {
        bsod.remove();
        document.removeEventListener('keydown', handleKey);
        document.removeEventListener('click', handleKey);
    };

    setTimeout(() => {
        document.addEventListener('keydown', handleKey);
        document.addEventListener('click', handleKey);
    }, 1000);

    setTimeout(() => bsod.remove(), 8000);
}

// ========================================
// ENHANCED JUMPSCARES
// ========================================
function showJumpscare(type) {
    if (gameState.jumpscareShown) return;
    gameState.jumpscareShown = true;

    playSound('jumpscare');

    const jumpscareTypes = [
        // 0: Eye
        () => {
            const overlay = document.createElement('div');
            overlay.className = 'jumpscare';
            overlay.innerHTML = `
                <div class="jumpscare-image"></div>
                <div class="jumpscare-text">I SEE YOU</div>
            `;
            return overlay;
        },
        // 1: Pyramid Head
        () => {
            const overlay = document.createElement('div');
            overlay.className = 'jumpscare';
            overlay.innerHTML = `
                <div class="jumpscare-image"></div>
                <div class="jumpscare-text">PUNISHMENT</div>
            `;
            return overlay;
        },
        // 2: Nurse
        () => {
            const overlay = document.createElement('div');
            overlay.className = 'jumpscare';
            overlay.innerHTML = `
                <div class="jumpscare-image"></div>
                <div class="jumpscare-text">TIME FOR YOUR MEDICINE</div>
            `;
            return overlay;
        },
        // 3: Mary
        () => {
            const overlay = document.createElement('div');
            overlay.className = 'jumpscare';
            overlay.style.background = '#000';
            overlay.innerHTML = `
                <div class="jumpscare-image" style="filter: grayscale(1);">👻</div>
                <div class="jumpscare-text">WHY DID YOU KILL ME JAMES</div>
            `;
            return overlay;
        },
        // 4: Hole
        () => {
            const overlay = document.createElement('div');
            overlay.className = 'jumpscare';
            overlay.style.background = '#000';
            overlay.innerHTML = `
                <div class="jumpscare-image" style="font-size: 100px;"></div>
                <div class="jumpscare-text">THERE WAS A HOLE HERE. ITS GONE NOW.</div>
            `;
            return overlay;
        },
        // 5: Corrupted Buddy
        () => {
            const overlay = document.createElement('div');
            overlay.className = 'jumpscare-buddy-corrupt';
            overlay.innerHTML = `
                <div class="corrupt-buddy-face"></div>
                <div class="corrupt-buddy-text">BUDDY LOVES YOU</div>
            `;
            return overlay;
        },
        // 6: Static Face
        () => {
            const overlay = document.createElement('div');
            overlay.className = 'jumpscare-static-face';
            overlay.innerHTML = `
                <div class="static-face-emoji"></div>
            `;
            return overlay;
        },
        // 7: BSOD
        () => {
            showFakeBSOD();
            return null;
        },
        // 8: Monitor Shatter
        () => {
            const overlay = document.createElement('div');
            overlay.className = 'jumpscare-shatter';

            // Create shatter pieces
            for (let i = 0; i < 20; i++) {
                const piece = document.createElement('div');
                piece.className = 'shatter-piece';
                piece.style.left = Math.random() * 100 + '%';
                piece.style.top = Math.random() * 100 + '%';
                piece.style.width = (20 + Math.random() * 80) + 'px';
                piece.style.height = (20 + Math.random() * 80) + 'px';
                piece.style.animationDelay = Math.random() * 0.5 + 's';
                overlay.appendChild(piece);
            }

            playSound('glass');
            return overlay;
        },
        // 9: Skull
        () => {
            const overlay = document.createElement('div');
            overlay.className = 'jumpscare';
            overlay.innerHTML = `
                <div class="jumpscare-image"></div>
                <div class="jumpscare-text">MEMENTO MORI</div>
            `;
            return overlay;
        },
        // 10: Devil
        () => {
            const overlay = document.createElement('div');
            overlay.className = 'jumpscare';
            overlay.style.background = '#220000';
            overlay.innerHTML = `
                <div class="jumpscare-image"></div>
                <div class="jumpscare-text">THE RITUAL IS COMPLETE</div>
            `;
            return overlay;
        },
        // 11: Screaming Face
        () => {
            const overlay = document.createElement('div');
            overlay.className = 'jumpscare';
            overlay.innerHTML = `
                <div class="jumpscare-image"></div>
                <div class="jumpscare-text">AAAAAAAAAAAA</div>
            `;
            return overlay;
        }
    ];

    const createOverlay = jumpscareTypes[type % jumpscareTypes.length];
    const overlay = createOverlay();

    if (overlay) {
        document.body.appendChild(overlay);

        setTimeout(() => {
            overlay.remove();
            gameState.jumpscareShown = false;
        }, 800 + Math.random() * 400);
    } else {
        gameState.jumpscareShown = false;
    }
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

        // Start adding cracks
        if (Math.random() < 0.3) addScreenCrack();
    }
    if (level >= 10) {
        container.classList.add('corrupted-5');
        radio.classList.add('visible');

        // CRT effects become possible
        if (!gameState.crtEffectsActive && Math.random() < 0.2) {
            triggerCRTEffect();
        }
    }
    if (level >= 12) {
        pyramidHead.classList.add('visible');
        mainContainer.classList.add('rotate-room');

        // Screen melt possible
        if (Math.random() < 0.1) triggerScreenMelt();
    }
    if (level >= 14) {
        nurse.classList.add('visible');

        // Enable button chase
        if (!gameState.buttonChaseActive) {
            gameState.buttonChaseActive = true;
            enableButtonChase();
        }
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

function enableButtonChase() {
    document.addEventListener('mousemove', (e) => {
        if (!gameState.buttonChaseActive || !gameState.isPlaying) return;

        const buttons = document.querySelectorAll('.answer-btn');
        buttons.forEach(btn => {
            const rect = btn.getBoundingClientRect();
            const btnCenterX = rect.left + rect.width / 2;
            const btnCenterY = rect.top + rect.height / 2;
            const dist = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);

            if (dist < 100) {
                const angle = Math.atan2(btnCenterY - e.clientY, btnCenterX - e.clientX);
                const pushX = Math.cos(angle) * (100 - dist) * 0.3;
                const pushY = Math.sin(angle) * (100 - dist) * 0.3;
                btn.style.transform = `translate(${pushX}px, ${pushY}px)`;
            } else {
                btn.style.transform = '';
            }
        });
    });
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
        "T̸̨̛h̸̢̛e̵͙̓ ̶̣̈q̷̣̈́ū̸̢i̵͙̓ẓ̶̈ ̶̣̈ṇ̷̈́ĕ̸̢ṿ̶̈ȇ̸̢ṛ̶̈ ̶̣̈ê̸̢ṇ̶̈ḍ̶̈ṣ̷̈́",
        "B̷̨̛Ụ̶̌D̷̰͝D̵̪̈Y̵̻͝ ̷̞̊L̵̰͒O̵̡̊V̸̳̊E̵̖͋S̵̱̐ ̷̣̀Y̵̗͝O̷̤͝U̵̢̔ F̷̨̛O̷̧̊R̶̥̈́E̴͙͒V̸̳̊E̵̖͋R̵̤̈"
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

        if (rand < 0.12 && level >= 4) {
            playSound('static');
        } else if (rand < 0.22 && level >= 5) {
            addWallWriting();
        } else if (rand < 0.32 && level >= 6) {
            addCornerEye();
        } else if (rand < 0.40 && level >= 7) {
            addBloodDrip();
        } else if (rand < 0.47 && level >= 8) {
            triggerSubliminal();
        } else if (rand < 0.53 && level >= 9) {
            playSound('whisper');
        } else if (rand < 0.58 && level >= 10) {
            flashColors();
        } else if (rand < 0.62 && level >= 10) {
            triggerCRTEffect();
        } else if (rand < 0.66 && level >= 11) {
            addScreenCrack();
        } else if (rand < 0.69 && level >= 12) {
            showFakeError();
        } else if (rand < 0.74 && level >= 4) {
            playSound('heartbeat');
        } else if (rand < 0.79 && level >= 8) {
            playSound('metal');
        } else if (rand < 0.84 && level >= 6) {
            playSound('drone');
        } else if (rand < 0.87 && level >= 13) {
            showJumpscare(Math.floor(Math.random() * 12));
        } else if (rand < 0.92 && level >= 2) {
            // Random Buddy helper
            showBuddyHelper();
        } else if (rand < 0.96 && level >= 5) {
            // Random title bar change
            changePageTitle();
        }
    }, 3000 - (gameState.horrorLevel * 150));
}

// Fun page title changes
const pageTitles = [
    "~*~BUDDYS SUPER FUN QUIZ~*~",
    "Quiz - Question " + (gameState.currentQuestion + 1),
    "Buddy sees you...",
    "DONT LOOK AWAY",
    "You have 1 new message",
    "R̶o̷o̴m̵ ̶3̷1̴2̸",
    "(1) Silent Hill",
    "Are you still there?",
    "The fog is coming",
    "pyramidhead_fan_2002 says hi",
    "Your score: ???",
    "Downloading guilt.dll...",
    "METATRON WATCHES",
    "buddy.exe",
    "localhost:666",
    "In my restless dreams...",
];

function changePageTitle() {
    const originalTitle = document.title;
    const newTitle = pageTitles[Math.floor(Math.random() * pageTitles.length)];
    document.title = newTitle;

    // Revert after a while (sometimes)
    if (Math.random() < 0.7) {
        setTimeout(() => {
            document.title = originalTitle;
        }, 5000 + Math.random() * 10000);
    }
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
                    "THE QUIZ MISSED YOU",
                    "BUDDY WAS WORRIED",
                    "YOU CANT ESCAPE BY LEAVING"
                ];

                alert(messages[Math.floor(Math.random() * messages.length)]);

                if (gameState.paranoia >= 3 && Math.random() < 0.5) {
                    showJumpscare(Math.floor(Math.random() * 12));
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
    // Show fake loading screen first (classic 2003 vibes)
    showFakeLoading(() => {
        gameState = {
            ...gameState,
            currentQuestion: 0,
            score: 0,
            horrorLevel: 0,
            paranoia: 0,
            questions: getQuizQuestions(),
            isPlaying: true,
            hasEnded: false,
            wrongAnswers: 0,
            cracksOnScreen: 0,
            postEndingPhase: 0,
            popupsShown: 0,
            buttonChaseActive: false
        };

        // Clear any existing cracks
        document.getElementById('cracksContainer').innerHTML = '';

        document.getElementById('introScreen').style.display = 'none';
        document.getElementById('gameScreen').style.display = 'block';

        // Initial happy sounds
        playSound('correct');
        playSound('aim_door');

        startRandomEvents();
        showQuestion();
    });
}

function showFakeLoading(callback) {
    const introScreen = document.getElementById('introScreen');

    // Replace button with loading bar
    const originalHTML = introScreen.innerHTML;
    introScreen.innerHTML = `
        <div style="text-align: center; padding: 40px;">
            <div style="font-size: 60px; margin-bottom: 20px; animation: spin 2s linear infinite;">🌀</div>
            <h2 style="color: #ff66cc; font-family: Comic Sans MS;">Loading Quiz...</h2>
            <div style="background: #ffccff; border: 3px inset #ff66ff; width: 300px; height: 25px; margin: 20px auto; position: relative; overflow: hidden;">
                <div id="fakeLoadingBar" style="background: linear-gradient(90deg, #ff99ff, #ff66cc); height: 100%; width: 0%; transition: width 0.1s;"></div>
            </div>
            <p id="fakeLoadingText" style="color: #660066; font-size: 14px;">Initializing...</p>
            <p style="color: #999; font-size: 10px; margin-top: 20px;">(This is totally a real loading screen)</p>
        </div>
    `;

    const loadingBar = document.getElementById('fakeLoadingBar');
    const loadingText = document.getElementById('fakeLoadingText');

    let progress = 0;

    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15 + 5;

        if (progress >= 100) {
            progress = 100;
            loadingBar.style.width = '100%';
            loadingText.textContent = 'READY!! :D';
            clearInterval(loadingInterval);

            setTimeout(() => {
                introScreen.innerHTML = originalHTML;
                callback();
            }, 500);
            return;
        }

        loadingBar.style.width = progress + '%';

        // Change message occasionally
        if (Math.random() < 0.4) {
            loadingText.textContent = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
        }

        // Random glitch at 66%
        if (progress > 60 && progress < 70 && Math.random() < 0.3) {
            loadingText.textContent = "W̷a̶i̵t̴.̷.̶.̵";
            loadingBar.style.background = '#660000';
            setTimeout(() => {
                loadingBar.style.background = 'linear-gradient(90deg, #ff99ff, #ff66cc)';
            }, 200);
        }
    }, 150);
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

        // Add crack on wrong answer at high horror
        if (gameState.horrorLevel >= 8) {
            addScreenCrack();
        }

        // Chance of jumpscare on wrong answer at high horror
        if (gameState.horrorLevel >= 6 && Math.random() < 0.3) {
            setTimeout(() => showJumpscare(Math.floor(Math.random() * 12)), 500);
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

    // Add cracks
    addScreenCrack();
    addScreenCrack();
}

// ========================================
// ENHANCED ENDINGS
// ========================================
function endGame() {
    gameState.hasEnded = true;
    gameState.isPlaying = false;
    clearInterval(eventInterval);

    const percentage = (gameState.score / 13) * 100;

    let ending;

    // Special endings first
    if (percentage === 100) {
        // Perfect score = UFO ending
        ending = getUFOEnding();
    } else if (gameState.paranoia > 4) {
        // Dog ending if paranoia is high
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

    gameState.endingShown = ending.type;
    playEndingSequence(ending);
}

function getLeaveEnding() {
    return {
        type: 'leave',
        title: "LEAVE",
        text: "You found the truth. You proved your KNOLEDGE.",
        subtext: "The fog parts... Buddy waves goodbye...",
        finalText: "You wake up. It was just a quiz... wasnt it?",
        toddNote: "WOW you actually got the good ending!! I didnt think anyone would tbh. You clearly know your Silent Hill lore. Maybe TOO well... (are you Valtiel??) (you can tell me)",
        color: "#999999",
        sound: 'peaceful'
    };
}

function getMariaEnding() {
    return {
        type: 'maria',
        title: "MARIA",
        text: "You couldnt let go. You found someone new.",
        subtext: "Buddy transforms into something familiar...",
        finalText: "She looks like Mary... but different... *cough*",
        toddNote: "Ah the Maria ending. You know what this means right?? James couldnt accept Marys death so he created a replacement. Just like you created a replacement for ACTUALLY STUDYING THE LORE. but its ok Buddy still loves you",
        color: "#ff6699",
        sound: 'cough'
    };
}

function getInWaterEnding() {
    return {
        type: 'water',
        title: "IN WATER",
        text: "The weight was too much to bear.",
        subtext: "Buddy sinks into the lake...",
        finalText: "In your restless dreams, you see that quiz...",
        toddNote: "This is the SAD ending (but also kind of the canon one according to SH2 creators??). Like James, you couldnt escape your guilt (of not knowing enough Silent Hill lore). Toluca Lake claims another soul...",
        color: "#6699ff",
        sound: 'bubbles'
    };
}

function getRebirthEnding() {
    return {
        type: 'rebirth',
        title: "REBIRTH",
        text: "The ritual demands everything.",
        subtext: "Your wrong answers have meaning...",
        finalText: "Buddy transcends. Press F5 to try again. And again. And again.",
        toddNote: "You got the CULT ending!! This means you answered so many questions wrong that Buddy decided to use your failures as ritual offerings. The 72 demons of the Lesser Key thank you for your sacrifice. You are now part of the Orders rebirth cycle. Congrats??",
        color: "#ff3300",
        sound: 'chant'
    };
}

function getDogEnding() {
    return {
        type: 'dog',
        title: "DOG",
        text: "You looked away too many times.",
        subtext: "Buddy reveals his true form...",
        finalText: "Its a Shiba Inu at a computer. bark bark bark. Thank you for playing!",
        toddNote: "LMAOOO YOU GOT THE DOG ENDING!! This is the BEST ending (100% canon fight me). Just like in SH2 where you find out a Shiba Inu was controlling everything from a secret room, you have discovered that Buddy was actually a DOG THE WHOLE TIME. I cant believe you looked away from the screen so many times that you triggered this. Absolutely based. 10/10.",
        color: "#ffcc00",
        sound: 'bark',
        special: true
    };
}

// New 6th ending for PERFECT score
function getUFOEnding() {
    return {
        type: 'ufo',
        title: "UFO",
        text: "The aliens have noticed your knowledge.",
        subtext: "A beam of light descends...",
        finalText: "You are abducted. The truth was out there all along.",
        toddNote: "WHAT THE HECK YOU GOT PERFECT SCORE?!?! This unlocks the SECRET UFO ENDING!! Just like the joke ending in SH games where aliens show up, you have proven yourself to be NOT OF THIS WORLD. Either youre a time traveler, you cheated, or youre literally Team Silent. Either way the aliens want to study you now. Congratulations I guess??",
        color: "#00ff00",
        sound: 'success',
        special: true
    };
}

function playEndingSequence(ending) {
    // Clear horror effects
    document.getElementById('effectsContainer').innerHTML = '';
    document.getElementById('staticOverlay').classList.remove('visible');
    document.getElementById('vhsLines').classList.remove('visible');
    document.getElementById('heartbeatOverlay').classList.remove('visible');
    document.getElementById('pyramidHead').classList.remove('visible');
    document.getElementById('nurseFigure').classList.remove('visible');
    document.getElementById('radioStatic').classList.remove('visible');
    document.getElementById('horizontalTear').style.display = 'none';
    document.getElementById('burnInGhost').classList.remove('visible');
    document.body.classList.remove('degauss-wobble', 'crt-flicker');

    // Hide quiz interface (but NOT quizContainer - endingScreen is inside it!)
    document.getElementById('introScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'none';
    document.getElementById('mascot').style.display = 'none';
    document.getElementById('quizTitle').style.display = 'none';

    // Play appropriate sound
    playSound(ending.sound);

    // Create ending container
    const endingScreen = document.getElementById('endingScreen');
    endingScreen.style.display = 'flex';

    // Build ending based on type
    switch(ending.type) {
        case 'leave':
            buildLeaveEnding(ending);
            break;
        case 'maria':
            buildMariaEnding(ending);
            break;
        case 'water':
            buildWaterEnding(ending);
            break;
        case 'rebirth':
            buildRebirthEnding(ending);
            break;
        case 'dog':
            buildDogEnding(ending);
            break;
        case 'ufo':
            buildUFOEnding(ending);
            break;
    }

    // Start post-ending horror timer (except for dog ending)
    if (!ending.special) {
        gameState.trueEndingTimer = setTimeout(() => {
            startPostEndingHorror();
        }, 10000);
    }
}

function buildLeaveEnding(ending) {
    const endingScreen = document.getElementById('endingScreen');
    endingScreen.innerHTML = `
        <div class="ending-screen ending-leave">
            <div class="ending-title" style="color: ${ending.color};">${ending.title}</div>
            <div style="font-size: 80px; margin: 20px 0;" class="buddy-wave">👋</div>
            <div class="ending-text" style="color: ${ending.color};">
                ${ending.text}<br><br>
                <i>${ending.subtext}</i><br><br>
                ${ending.finalText}
            </div>
            ${buildToddNote(ending)}
            ${buildEndingStats()}
            ${buildEndingButtons(ending)}
        </div>
    `;
}

function buildMariaEnding(ending) {
    const endingScreen = document.getElementById('endingScreen');
    endingScreen.innerHTML = `
        <div class="ending-screen ending-maria">
            <div class="ending-title" style="color: ${ending.color};">${ending.title}</div>
            <div class="maria-silhouette">👩</div>
            <div class="ending-text" style="color: ${ending.color};">
                ${ending.text}<br><br>
                <i>${ending.subtext}</i><br><br>
                <span class="maria-cough">${ending.finalText}</span>
            </div>
            ${buildToddNote(ending)}
            ${buildEndingStats()}
            ${buildEndingButtons(ending)}
        </div>
    `;

    // Trigger cough animation
    setTimeout(() => {
        const cough = document.querySelector('.maria-cough');
        if (cough) {
            cough.classList.add('maria-cough');
            playSound('cough');
        }
    }, 3000);
}

function buildWaterEnding(ending) {
    const endingScreen = document.getElementById('endingScreen');
    endingScreen.innerHTML = `
        <div class="ending-screen ending-water">
            <div class="water-rising"></div>
            <div class="ending-title sinking-text" style="color: ${ending.color};">${ending.title}</div>
            <div style="font-size: 80px; margin: 20px 0; opacity: 0.7;">🌊</div>
            <div class="ending-text sinking-text" style="color: ${ending.color};">
                ${ending.text}<br><br>
                <i>${ending.subtext}</i><br><br>
                ${ending.finalText}
            </div>
            ${buildToddNote(ending)}
            ${buildEndingStats()}
            ${buildEndingButtons(ending)}
            <div id="bubbleContainer"></div>
        </div>
    `;

    // Add bubbles
    const bubbleContainer = document.getElementById('bubbleContainer');
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            bubble.style.left = Math.random() * 100 + '%';
            bubble.style.animationDelay = Math.random() * 2 + 's';
            bubbleContainer.appendChild(bubble);
        }, i * 500);
    }
}

function buildRebirthEnding(ending) {
    const endingScreen = document.getElementById('endingScreen');
    endingScreen.innerHTML = `
        <div class="ending-screen ending-rebirth">
            <div class="lightning-flash"></div>
            <div class="ritual-circle">⛧</div>
            <div class="ending-title" style="color: ${ending.color}; position: relative; z-index: 10;">${ending.title}</div>
            <div class="ending-text" style="color: ${ending.color}; position: relative; z-index: 10;">
                ${ending.text}<br><br>
                <i>${ending.subtext}</i><br><br>
                ${ending.finalText}
            </div>
            ${buildToddNote(ending)}
            ${buildEndingStats()}
            ${buildEndingButtons(ending)}
        </div>
    `;
}

function buildDogEnding(ending) {
    const endingScreen = document.getElementById('endingScreen');
    endingScreen.innerHTML = `
        <div class="ending-screen ending-dog">
            <div class="ending-title" style="color: ${ending.color};">${ending.title}</div>
            <div class="dog-dance">🐕</div>
            <div class="ending-text" style="color: #333;">
                ${ending.text}<br><br>
                <i>${ending.subtext}</i><br><br>
                ${ending.finalText}
            </div>
            ${buildToddNote(ending)}
            <div class="credits-roll" id="dogCredits">
                <p><b>🎬 CREDITS 🎬</b></p>
                <p>Quiz Master: Buddy (actually a dog)</p>
                <p>Horror Effects: The Otherworld</p>
                <p>Lore Consultant: The Lesser Key of Solomon</p>
                <p>Music: Silent Hill (in our hearts)</p>
                <p>Web Design: DarkAlessa1999 (Todd)</p>
                <p>Fog Technician: Toluca Lake Dept.</p>
                <p>Special Thanks: Konami, Team Silent</p>
                <p>The Dog: bark bark bark</p>
                <p>&nbsp;</p>
                <p><i>No mascots were harmed in the making of this quiz</i></p>
                <p><i>The dog was in control the whole time</i></p>
                <p><i>All 72 demons returned safely to their vessel</i></p>
                <p>&nbsp;</p>
                <p>🐕 Thank you for playing!! 🐕</p>
            </div>
            ${buildEndingStats()}
            <button class="btn-old" onclick="location.reload()" style="margin-top: 20px; font-size: 20px; background: #ffcc00;">
                🐕 pet the dog 🐕
            </button>
            <p style="margin-top: 20px; font-size: 12px; color: #666;">
                <a href="index.html" style="color: #996600;">Return to main site</a>
            </p>
            <div id="confettiContainer"></div>
        </div>
    `;

    // Add confetti
    const confettiColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            document.getElementById('confettiContainer').appendChild(confetti);
        }, i * 100);
    }

    // Happy sounds
    for (let i = 0; i < 10; i++) {
        setTimeout(() => playSound('correct'), i * 300);
    }
}

function buildUFOEnding(ending) {
    const endingScreen = document.getElementById('endingScreen');
    endingScreen.innerHTML = `
        <div class="ending-screen ending-ufo" style="background: linear-gradient(180deg, #000033 0%, #000011 50%, #001100 100%);">
            <div class="ufo-beam" style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 200px; height: 100%; background: linear-gradient(180deg, rgba(0,255,0,0.3), transparent); animation: beamPulse 2s ease infinite;"></div>
            <div style="font-size: 100px; animation: ufoFloat 2s ease infinite;">🛸</div>
            <div class="ending-title" style="color: ${ending.color};">${ending.title}</div>
            <div class="ending-text" style="color: ${ending.color};">
                ${ending.text}<br><br>
                <i>${ending.subtext}</i><br><br>
                ${ending.finalText}
            </div>
            ${buildToddNote(ending)}
            ${buildEndingStats()}
            <button class="btn-old" onclick="location.reload()" style="margin-top: 20px; font-size: 20px; background: #003300; color: #00ff00; border-color: #00ff00;">
                🛸 BEAM ME UP AGAIN 🛸
            </button>
            <p style="margin-top: 20px; font-size: 12px; color: #006600;">
                <a href="index.html" style="color: #00cc00;">Return to Earth (main site)</a>
            </p>
            <div id="ufoStarsContainer"></div>
        </div>
    `;

    // Add twinkling stars
    const starsContainer = document.getElementById('ufoStarsContainer');
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.style.cssText = `
            position: fixed;
            width: 3px;
            height: 3px;
            background: #fff;
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: twinkle ${1 + Math.random() * 2}s ease infinite;
            opacity: ${0.3 + Math.random() * 0.7};
        `;
        starsContainer.appendChild(star);
    }

    // Alien sounds
    playSound('dialup');
    setTimeout(() => playSound('success'), 1000);
}

function buildToddNote(ending) {
    if (!ending.toddNote) return '';
    return `
        <div style="background: #ffffcc; border: 2px solid #999; padding: 15px; margin: 20px auto; max-width: 500px; text-align: left; color: #000; font-size: 12px;">
            <div style="background: linear-gradient(90deg, #000080, #1084d0); color: white; padding: 3px 8px; margin: -15px -15px 10px -15px; font-size: 11px;">
                📝 DarkAlessa1999 (Todd) says:
            </div>
            ${ending.toddNote}
            <p style="text-align: right; margin-top: 10px; color: #666; font-size: 10px;">- Todd</p>
        </div>
    `;
}

function buildEndingStats() {
    return `
        <p style="margin-top: 40px; color: #666; font-size: 14px;">
            Final Score: ${gameState.score}/13 (${Math.round((gameState.score/13)*100)}%)<br>
            Paranoia Level: ${gameState.paranoia}<br>
            Horror Level: ${Math.round(gameState.horrorLevel)}<br>
            Screen Cracks: ${gameState.cracksOnScreen}<br>
            <span style="font-size: 10px;">Ending: ${gameState.endingShown.toUpperCase()}</span>
        </p>
    `;
}

function buildEndingButtons(ending) {
    return `
        <button class="btn-old" onclick="location.reload()" style="margin-top: 20px;" id="playAgainBtn">
            TRY AGAIN??
        </button>
        <p style="margin-top: 20px; font-size: 12px; color: #444;">
            <a href="index.html" style="color: #666;">Return to main site</a>
            <br><br>
            <span style="color: #333; font-size: 10px;">(...wait here for a moment...)</span>
        </p>
    `;
}

// ========================================
// POST-ENDING HORROR
// ========================================
function startPostEndingHorror() {
    gameState.postEndingPhase = 1;

    // Phase 1: Buddy watching
    setTimeout(() => {
        showBuddyWatching();
    }, 500);
}

function showBuddyWatching() {
    const overlay = document.createElement('div');
    overlay.className = 'buddy-watching-overlay';
    overlay.id = 'buddyWatchingOverlay';
    overlay.innerHTML = `
        <div class="buddy-watching-face"></div>
        <div class="watching-text">Did you think it was over?</div>
    `;

    document.body.appendChild(overlay);
    playSound('whisper');

    setTimeout(() => {
        overlay.remove();
        gameState.postEndingPhase = 2;
        continuePostEndingHorror();
    }, 4000);
}

function continuePostEndingHorror() {
    // Phase 2: Glitch and static
    const endingScreen = document.getElementById('endingScreen');
    if (!endingScreen) return;

    // Random glitches
    let glitchCount = 0;
    const glitchInterval = setInterval(() => {
        if (glitchCount >= 5) {
            clearInterval(glitchInterval);
            gameState.postEndingPhase = 3;
            desperatePhase();
            return;
        }

        flashColors();
        playSound('glitch');
        glitchCount++;
    }, 2000);
}

function desperatePhase() {
    // Make the "TRY AGAIN" button desperate
    const btn = document.getElementById('playAgainBtn');
    if (!btn) return;

    const desperateTexts = [
        "TRY AGAIN??",
        "Please try again?",
        "PLAY AGAIN",
        "Buddy wants you to play again",
        "DONT LEAVE",
        "P̷L̵A̷Y̸ ̵A̶G̶A̷I̸N̷",
        "THE QUIZ MISSES YOU"
    ];

    let textIndex = 0;
    const textInterval = setInterval(() => {
        if (textIndex >= desperateTexts.length - 1) {
            btn.textContent = desperateTexts[desperateTexts.length - 1];
            btn.classList.add('desperate-button');
            clearInterval(textInterval);

            // Start button chase
            startButtonChase(btn);

            // Start true ending timer
            setTimeout(() => {
                showTrueEnding();
            }, 30000);
            return;
        }

        btn.textContent = desperateTexts[textIndex];
        playSound('glitch');
        textIndex++;
    }, 3000);
}

function startButtonChase(btn) {
    let chaseActive = true;

    document.addEventListener('mousemove', function chase(e) {
        if (!chaseActive) {
            document.removeEventListener('mousemove', chase);
            return;
        }

        const rect = btn.getBoundingClientRect();
        const btnCenterX = rect.left + rect.width / 2;
        const btnCenterY = rect.top + rect.height / 2;
        const dist = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);

        if (dist < 150) {
            // Move button away from cursor
            const angle = Math.atan2(btnCenterY - e.clientY, btnCenterX - e.clientX);
            const moveX = Math.cos(angle) * 50;
            const moveY = Math.sin(angle) * 50;

            const currentLeft = parseFloat(btn.style.marginLeft || 0);
            const currentTop = parseFloat(btn.style.marginTop || 0);

            btn.style.marginLeft = (currentLeft + moveX) + 'px';
            btn.style.marginTop = (currentTop + moveY) + 'px';
        }
    });

    // Stop chase after a while
    setTimeout(() => {
        chaseActive = false;
        btn.style.marginLeft = '0';
        btn.style.marginTop = '0';
    }, 20000);
}

function showTrueEnding() {
    // Only show if player waited
    if (gameState.postEndingPhase < 3) return;

    const trueEnding = document.createElement('div');
    trueEnding.className = 'true-ending';
    trueEnding.innerHTML = `
        <div class="true-ending-text">
            <p>You waited.</p>
            <p>&nbsp;</p>
            <p>Most people dont wait.</p>
            <p>&nbsp;</p>
            <p>The fog clears. Not the fog of Silent Hill.</p>
            <p>The fog in your mind.</p>
            <p>&nbsp;</p>
            <p>Buddy was never real.</p>
            <p>The quiz was never real.</p>
            <p>But you played anyway.</p>
            <p>&nbsp;</p>
            <p>In my restless dreams, I see that town.</p>
            <p>Silent Hill.</p>
            <p>&nbsp;</p>
            <p>Thank you for playing Todds Super Fun Quiz.</p>
            <p>The fog will remember you.</p>
            <p>&nbsp;</p>
            <p style="color: #ff0000; margin-top: 30px;">TRUE ENDING: PATIENCE</p>
            <p>&nbsp;</p>
            <p style="font-size: 10px; color: #444;">
                Created by DarkAlessa1999 (Todd)<br>
                November 2003<br>
                <br>
                "The fear of blood tends to create fear for the flesh."
            </p>
            <p>&nbsp;</p>
            <button class="btn-old" onclick="location.reload()" style="margin-top: 20px;">
                Return to the Beginning
            </button>
        </div>
    `;

    document.body.appendChild(trueEnding);
    playSound('peaceful');
}

// ========================================
// EYE TRACKING
// ========================================
document.addEventListener('mousemove', (e) => {
    if (!gameState.isPlaying) return;

    const pupilLeft = document.getElementById('pupilLeft');
    const pupilRight = document.getElementById('pupilRight');

    const mascot = document.getElementById('mascot');
    if (!mascot) return;

    const rect = mascot.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const distance = Math.min(5, Math.hypot(e.clientX - centerX, e.clientY - centerY) / 50);

    const offsetX = Math.cos(angle) * distance;
    const offsetY = Math.sin(angle) * distance;

    if (pupilLeft) pupilLeft.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    if (pupilRight) pupilRight.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

// ========================================
// BUDDY HELPER TIPS (like Clippy but worse)
// ========================================
const buddyTips = [
    // Early game tips (helpful?)
    { minHorror: 0, maxHorror: 3, text: "Hi!! Click an answer to continue! You got this!!", face: "😊" },
    { minHorror: 0, maxHorror: 3, text: "Remember: there are no wrong answers!! (jk there definitely are)", face: "😄" },
    { minHorror: 0, maxHorror: 3, text: "Fun fact: Silent Hill was inspired by the movie Jacob's Ladder!", face: "🎬" },
    { minHorror: 0, maxHorror: 3, text: "Tip: The fog is your friend! (its not)", face: "🌫️" },
    // Mid game tips (concerning)
    { minHorror: 4, maxHorror: 7, text: "You seem... nervous. Is something wrong?", face: "🤔" },
    { minHorror: 4, maxHorror: 7, text: "The Seal of Metatron protects you! (it doesnt)", face: "✡️" },
    { minHorror: 4, maxHorror: 7, text: "Did you know Maria isnt real? Just like this quiz!", face: "😶" },
    { minHorror: 4, maxHorror: 7, text: "Your paranoia level is... interesting.", face: "👀" },
    // Late game tips (threatening)
    { minHorror: 8, maxHorror: 11, text: "Dont look behind you.", face: "😐" },
    { minHorror: 8, maxHorror: 11, text: "The 72 demons appreciate your participation.", face: "⛧" },
    { minHorror: 8, maxHorror: 11, text: "Have you checked your closet recently?", face: "🚪" },
    { minHorror: 8, maxHorror: 11, text: "Your wrong answers have been... noted.", face: "📝" },
    // Endgame tips (help)
    { minHorror: 12, maxHorror: 99, text: "B̷U̵D̶D̵Y̷ ̸L̷O̵V̶E̸S̷ ̷Y̵O̶U̵", face: "😈" },
    { minHorror: 12, maxHorror: 99, text: "T̵h̶e̷r̸e̵ ̶i̶s̵ ̷n̶o̵ ̶e̷s̸c̴a̵p̸e̷", face: "🕳️" },
    { minHorror: 12, maxHorror: 99, text: "R̴e̶m̷e̸m̴b̵e̶r̵ ̸w̸h̸a̵t̶ ̵y̶o̶u̵ ̵d̷i̶d̵", face: "💀" },
];

function showBuddyHelper() {
    // Don't show if one already exists
    if (document.querySelector('.buddy-helper')) return;

    const validTips = buddyTips.filter(t =>
        gameState.horrorLevel >= t.minHorror && gameState.horrorLevel <= t.maxHorror
    );

    if (validTips.length === 0) return;

    const tip = validTips[Math.floor(Math.random() * validTips.length)];

    const helper = document.createElement('div');
    helper.className = 'buddy-helper';
    helper.innerHTML = `
        <span class="buddy-helper-close" onclick="this.parentElement.remove()">×</span>
        <div class="buddy-helper-face">${tip.face}</div>
        <p style="margin: 10px 0 0 0; text-align: center;">${tip.text}</p>
        <p style="margin: 5px 0 0 0; text-align: right; font-size: 10px; color: #666;">- Buddy</p>
    `;

    document.body.appendChild(helper);

    // Auto-remove after some time
    setTimeout(() => {
        if (helper.parentElement) {
            helper.style.opacity = '0';
            helper.style.transition = 'opacity 0.5s';
            setTimeout(() => helper.remove(), 500);
        }
    }, 5000 + Math.random() * 3000);

    // Play sound based on horror level
    if (gameState.horrorLevel < 4) {
        playSound('aim_door');
    } else if (gameState.horrorLevel < 10) {
        playSound('whisper');
    } else {
        playSound('glitch');
    }
}

// ========================================
// INITIALIZATION
// ========================================
window.addEventListener('load', () => {
    console.log('%cQuiz loaded. Buddy is ready.', 'color: #ff66cc;');
    console.log('%c...the fog awaits...', 'color: #660000; font-size: 8px;');
    console.log('%cHint: patience is rewarded at the end...', 'color: #333; font-size: 6px;');

    // Random Buddy helper on page load
    setTimeout(() => {
        if (Math.random() < 0.5) {
            showBuddyHelper();
        }
    }, 3000);
});

// Warn before leaving
window.addEventListener('beforeunload', (e) => {
    if (gameState.isPlaying && !gameState.hasEnded && gameState.horrorLevel >= 4) {
        e.preventDefault();
        e.returnValue = 'Buddy doesnt want you to leave...';
    }
});

// Prevent right-click at high horror
document.addEventListener('contextmenu', (e) => {
    if (gameState.horrorLevel >= 8) {
        e.preventDefault();
        alert('Right click has been disabled by Buddy\n\n(theres nothing to see here anyway)');
    }
});

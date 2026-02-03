import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

const SilentHillQuiz = () => {
  // Core game state
  const [gameState, setGameState] = useState('intro');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [horrorLevel, setHorrorLevel] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Visual effects state
  const [showJumpscare, setShowJumpscare] = useState(false);
  const [jumpscareType, setJumpscareType] = useState(0);
  const [glitchText, setGlitchText] = useState(false);
  const [bloodLevel, setBloodLevel] = useState(0);
  const [screenShake, setScreenShake] = useState(false);
  const [staticOverlay, setStaticOverlay] = useState(0);
  const [corruptedUI, setCorruptedUI] = useState(false);
  const [eyesFollowing, setEyesFollowing] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [ending, setEnding] = useState(null);
  const [fadeToBlack, setFadeToBlack] = useState(false);
  const [heartbeat, setHeartbeat] = useState(false);
  const [flickering, setFlickering] = useState(false);
  const [showMessage, setShowMessage] = useState(null);
  const [rustLevel, setRustLevel] = useState(0);
  const [showHands, setShowHands] = useState(false);
  const [fogOpacity, setFogOpacity] = useState(0);
  const [cracks, setCracks] = useState([]);
  const [shadowFigures, setShadowFigures] = useState([]);
  const [cornerEyes, setCornerEyes] = useState([]);
  const [showNurse, setShowNurse] = useState(false);
  const [invertColors, setInvertColors] = useState(false);
  const [showRadio, setShowRadio] = useState(false);
  const [radioStatic, setRadioStatic] = useState(0);
  const [fakeErrors, setFakeErrors] = useState([]);
  const [subliminalFlash, setSubliminalFlash] = useState(null);
  const [rotatingRoom, setRotatingRoom] = useState(0);
  const [meltingUI, setMeltingUI] = useState(false);
  const [heartbeatIntensity, setHeartbeatIntensity] = useState(1);
  const [showPyramidHead, setShowPyramidHead] = useState(false);
  const [floorHole, setFloorHole] = useState(false);
  const [endingSequence, setEndingSequence] = useState(0);
  const [paranoia, setParanoia] = useState(0);
  const [lastLookAway, setLastLookAway] = useState(null);
  const [typewriterText, setTypewriterText] = useState('');
  const [showSeal, setShowSeal] = useState(false);
  const [otherworldTransition, setOtherworldTransition] = useState(false);
  const [sirenActive, setSirenActive] = useState(false);
  const [showLyingFigure, setShowLyingFigure] = useState(false);
  const [showMannequin, setShowMannequin] = useState(false);
  const [tvFlicker, setTvFlicker] = useState(false);
  const [writingOnWall, setWritingOnWall] = useState([]);
  const [chainFence, setChainFence] = useState(false);
  const [industrialNoise, setIndustrialNoise] = useState(false);
  const [breathFog, setBreathFog] = useState(false);
  const [bloodFootprints, setBloodFootprints] = useState([]);
  const [hallwayEffect, setHallwayEffect] = useState(false);
  const [mirrorReflection, setMirrorReflection] = useState(false);
  const [clockStopped, setClockStopped] = useState(false);
  const [letterAppear, setLetterAppear] = useState(false);
  const [photoFlash, setPhotoFlash] = useState(false);
  const [lockerBang, setLockerBang] = useState(false);
  const [wheelchairMove, setWheelchairMove] = useState(false);
  const [alarmClock, setAlarmClock] = useState(false);
  const [bathroomScene, setBathroomScene] = useState(false);
  const [hotelRoom, setHotelRoom] = useState(false);
  const [randomEvent, setRandomEvent] = useState(null);
  const [distortionLevel, setDistortionLevel] = useState(0);
  const [vhsEffect, setVhsEffect] = useState(false);
  const [grainIntensity, setGrainIntensity] = useState(0);

  const audioContext = useRef(null);
  const containerRef = useRef(null);
  const questionLock = useRef(false);

  // Massive question bank - randomized each game
  const allQuestions = useMemo(() => [
    // Easy/Cute tier
    {
      question: "What's the name of our cute little town? 🏠",
      answers: ["Happy Valley", "Silent Hill", "Sunshine Village", "Friendly Forest"],
      correct: 1,
      tier: 0,
      corruptedQuestion: "What town calls to the guilty?"
    },
    {
      question: "What's the weather usually like in Silent Hill? ☁️",
      answers: ["Sunny", "Foggy", "Rainy", "Snowy"],
      correct: 1,
      tier: 0,
      corruptedQuestion: "What h̷i̶d̵e̷s̶ ̵t̷h̶e̵ ̷t̵r̷u̸t̷h̶?"
    },
    {
      question: "What lake is near Silent Hill? 🌊",
      answers: ["Lake Michigan", "Toluca Lake", "Crystal Lake", "Happy Lake"],
      correct: 1,
      tier: 0,
      corruptedQuestion: "Where do the g̷u̵i̶l̵t̷y̶ sink?"
    },
    // Medium tier
    {
      question: "Who is Alessa's mother?",
      answers: ["Mary", "Maria", "Dahlia", "Lisa"],
      correct: 2,
      tier: 1,
      corruptedQuestion: "Who b̷u̶r̷n̵e̴d̶ her own daughter alive?"
    },
    {
      question: "What symbol did Alessa inscribe around town?",
      answers: ["Pentagram", "Seal of Metatron", "Cross", "Star of David"],
      correct: 1,
      tier: 1,
      corruptedQuestion: "What s̵e̷a̵l̶ keeps the d̷e̸m̵o̷n̶ trapped?"
    },
    {
      question: "What was Toluca Lake called by native tribes?",
      answers: ["Sacred Waters", "The Place of Silenced Spirits", "Healing Springs", "Moon Lake"],
      correct: 1,
      tier: 1,
      corruptedQuestion: "The natives knew. T̷h̶e̵y̷ ̵a̸l̵w̷a̶y̵s̴ ̶k̷n̶e̵w̷."
    },
    {
      question: "What did the Order use Alessa for?",
      answers: ["A prophet", "An incubator for their god", "A healer", "A sacrifice"],
      correct: 1,
      tier: 1,
      corruptedQuestion: "W̸̢H̵̛A̶T̷ ̸D̵I̶D̷ ̵T̶H̷E̵Y̴ ̶P̷U̵T̶ ̷I̵N̶S̴I̵D̶E̷ ̵H̶E̴R̷?"
    },
    {
      question: "What hospital is in Silent Hill?",
      answers: ["Mercy Hospital", "Brookhaven Hospital", "St. Mary's", "General Hospital"],
      correct: 1,
      tier: 1,
      corruptedQuestion: "Where do the n̸u̵r̷s̵e̶s̷ still walk?"
    },
    {
      question: "What hotel does James visit?",
      answers: ["Grand Hotel", "Lakeview Hotel", "Hilton", "Overlook Hotel"],
      correct: 1,
      tier: 1,
      corruptedQuestion: "Room 312. She's w̵a̷i̶t̷i̶n̵g̸."
    },
    // Hard tier
    {
      question: "Who was Adam's first wife according to Kabbalah?",
      answers: ["Eve", "Mary", "Lilith", "Sarah"],
      correct: 2,
      tier: 2,
      corruptedQuestion: "The f̷i̶r̷s̵t̴ ̶d̷e̵m̴o̶n̷ bride who refused submission?"
    },
    {
      question: "What does Pyramid Head represent for James?",
      answers: ["Death", "His Shadow/Guilt", "The Devil", "Alessa's rage"],
      correct: 1,
      tier: 2,
      corruptedQuestion: "W̷h̴a̵t̶ ̷p̵u̶n̵i̷s̴h̶e̷s̵ ̴J̷a̵m̴e̶s̷ for his sins?"
    },
    {
      question: "What ancient god demanded child sacrifice by fire?",
      answers: ["Zeus", "Molech", "Odin", "Ra"],
      correct: 1,
      tier: 2,
      corruptedQuestion: "W̸̛̱H̶̰̑O̷̧͝ ̵̣̈́D̶̰̊E̸̝͝M̷̧̛A̵̰͌N̴̰̆D̸̰͝S̷̱͝ B̵U̵R̷N̵I̷N̶G̵ ̶C̷H̵I̶L̸D̵R̵E̷N̴?"
    },
    {
      question: "Why can't Laura see the monsters?",
      answers: ["She's blind", "She's innocent", "She's dead", "She's dreaming"],
      correct: 1,
      tier: 2,
      corruptedQuestion: "Why can't Y̷O̷U̷ see them y̵e̶t̷?"
    },
    {
      question: "What is Maria?",
      answers: ["James's wife", "A tulpa/manifestation", "A nurse", "A ghost"],
      correct: 1,
      tier: 2,
      corruptedQuestion: "A̵m̷ ̵I̶ ̵r̵e̶a̵l̷?̸ ̷A̵m̸ ̸I̵ ̵h̷e̷r̶?̵"
    },
    {
      question: "What grimoire does the Order follow?",
      answers: ["Necronomicon", "Lesser Key of Solomon", "Book of Shadows", "Torah"],
      correct: 1,
      tier: 2,
      corruptedQuestion: "72 d̵e̶m̵o̶n̴s̷ bound in brass..."
    },
    {
      question: "What does the Flauros artifact do?",
      answers: ["Grants wishes", "Traps/reveals truth", "Summons demons", "Heals wounds"],
      correct: 1,
      tier: 2,
      corruptedQuestion: "The c̷a̵g̶e̷ ̵o̶f̵ ̷p̷e̵a̶c̵e̷... or lies?"
    },
    {
      question: "Who is Samael in the Order's mythology?",
      answers: ["An angel", "The god they worship", "A saint", "A prophet"],
      correct: 1,
      tier: 2,
      corruptedQuestion: "The D̵E̶M̵I̵U̵R̸G̶E̷ pretending to be God?"
    },
    // Extreme tier
    {
      question: "What bracelet does Maria wear?",
      answers: ["Heart charm", "Black Moon Lilith sigil", "Cross", "Nothing"],
      correct: 1,
      tier: 3,
      corruptedQuestion: "The m̴a̶r̵k̷ ̵o̵f̵ ̷t̶h̵e̴ ̶s̵h̶a̴d̵o̶w̸ ̷b̵r̷i̶d̵e̷"
    },
    {
      question: "In the 'Rebirth' ending, what does James seek?",
      answers: ["Escape", "To resurrect Mary", "Revenge", "Forgiveness"],
      correct: 1,
      tier: 3,
      corruptedQuestion: "W̷o̶u̸l̸d̶ ̵y̷o̵u̶ ̷p̷a̶y̵ ̷a̴n̶y̷ ̵p̶r̷i̸c̶e̴?"
    },
    {
      question: "What did James do to Mary?",
      answers: ["Left her", "Killed her", "Saved her", "Married her"],
      correct: 1,
      tier: 3,
      corruptedQuestion: "Y̷O̵U̶ ̷K̵N̷O̶W̸ ̵W̴H̷A̶T̵ ̶Y̵O̶U̷ ̵D̸I̴D̵"
    },
    {
      question: "What is the Otherworld?",
      answers: ["Heaven", "A manifestation of trauma/collective unconscious", "Another planet", "A dream"],
      correct: 1,
      tier: 3,
      corruptedQuestion: "W̸̢̛̮̙̦̪̻̼̰͑͊̏̂̕͜͝H̸̡̨̳̦̺̩̤͖̥͑͐̆̊̋̀̔͊̚͝E̸R̸E̸ ̸Y̸O̸U̸ ̸A̸R̸E̸ ̸N̸O̸W̸"
    },
    // Final questions
    {
      question: "...",
      answers: ["WAKE UP", "LET ME OUT", "I REMEMBER", "I'M SORRY"],
      correct: 2,
      tier: 4,
      corruptedQuestion: "D̶̢̛̮̙̦̪̻̼͑͊̏̂̕͜͝O̶̡̨̳̦̺̩̤͖͑͐̆̊̋̀̔͊̚͝ ̶Y̶O̶U̶ ̶R̶E̶M̶E̶M̶B̶E̶R̶ ̶W̶H̶A̶T̶ ̶Y̶O̶U̶ ̶D̶I̶D̶?"
    },
    {
      question: "W̷̢̛̮̙̦͇̪̮͔̻̼͑͊̏̂̉̈́̕͜͝H̷̡̨̳̦̺̩̤͖̥̬̄͑͐̆̊̋̀̌̔͊̚͝Y̷?",
      answers: ["...", "HELP ME", "FORGIVE ME", "LEAVE ME ALONE"],
      correct: 2,
      tier: 4,
      corruptedQuestion: "T̷H̴E̵R̸E̷ ̸I̶S̵ ̸N̴O̵ ̷F̶O̵R̷G̴I̸V̸E̵N̴E̷S̷S̶"
    }
  ], []);

  const creepyMessages = useMemo(() => [
    "Did you hear that?",
    "Someone is behind you.",
    "Don't look.",
    "It's getting closer.",
    "You shouldn't be here.",
    "The door won't open.",
    "She's watching.",
    "Do you remember what you did?",
    "It wasn't an accident.",
    "Check under the bed.",
    "The radio is screaming.",
    "There was a hole here.",
    "It's gone now.",
    "In my restless dreams...",
    "I see that town.",
    "You promised you'd take me there again someday.",
    "But you never did.",
    "R̷U̵N̸",
    "I̷T̷'̷S̷ ̷H̷E̷R̷E̷",
    "L̷O̷O̷K̷ ̷B̷E̷H̷I̷N̷D̷ ̷Y̷O̷U̷",
    "Y̷O̷U̷ ̷C̷A̷N̷'̷T̷ ̷L̷E̷A̷V̷E̷",
    "I̷ ̷S̷E̷E̷ ̷Y̷O̷U̷",
    "S̷H̷E̷ ̷D̷I̷E̷D̷ ̷B̷E̷C̷A̷U̷S̷E̷ ̷O̷F̷ ̷Y̷O̷U̷",
    "M̵A̷R̶Y̴.̵.̶.̷",
    "J̶A̵M̷E̵S̷.̵.̷.̶",
    "W̵H̶Y̷ ̵D̷I̸D̴ ̵Y̶O̸U̷ ̶K̷I̴L̵L̷ ̷M̶E̵?̶"
  ], []);

  const wallWritings = useMemo(() => [
    "THERE WAS A HOLE HERE",
    "IT'S GONE NOW",
    "SAVE ME",
    "HELP",
    "DON'T LOOK",
    "SHE'S HERE",
    "ROOM 312",
    "FORGIVE ME",
    "I'M SORRY MARY",
    "THE DOOR IS LOCKED",
    "YOU CAN'T RUN",
    "DEAD END"
  ], []);

  // Audio System
  const initAudio = useCallback(() => {
    if (!audioContext.current) {
      audioContext.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContext.current;
  }, []);

  const playSound = useCallback((type, options = {}) => {
    try {
      const ctx = initAudio();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      
      const createOscillator = (freq, waveType, duration, gain = 0.3) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        osc.connect(gainNode);
        gainNode.connect(ctx.destination);
        osc.frequency.value = freq;
        osc.type = waveType;
        gainNode.gain.setValueAtTime(gain, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
        osc.start();
        osc.stop(ctx.currentTime + duration);
        return osc;
      };

      const createNoise = (duration, gain = 0.1) => {
        const bufferSize = ctx.sampleRate * duration;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const noiseGain = ctx.createGain();
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = options.filterFreq || 5000;
        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(ctx.destination);
        noiseGain.gain.setValueAtTime(gain, ctx.currentTime);
        noiseGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
        noise.start();
        return noise;
      };

      switch(type) {
        case 'heartbeat':
          const intensity = options.intensity || 1;
          createOscillator(45 * intensity, 'sine', 0.25, 0.4 * intensity);
          setTimeout(() => createOscillator(40 * intensity, 'sine', 0.2, 0.3 * intensity), 120);
          break;
          
        case 'jumpscare':
          createOscillator(180, 'sawtooth', 0.4, 0.6);
          createOscillator(220, 'square', 0.3, 0.4);
          createOscillator(90, 'triangle', 0.5, 0.3);
          createNoise(0.4, 0.5);
          break;
          
        case 'static':
          createNoise(options.duration || 0.5, options.gain || 0.15);
          break;
          
        case 'radioStatic':
          const radioNoise = createNoise(2, 0.08);
          createOscillator(60, 'sine', 2, 0.05);
          for (let i = 0; i < 5; i++) {
            setTimeout(() => {
              createOscillator(200 + Math.random() * 800, 'square', 0.05, 0.1);
            }, Math.random() * 1500);
          }
          break;
          
        case 'siren':
          const siren = ctx.createOscillator();
          const sirenGain = ctx.createGain();
          siren.connect(sirenGain);
          sirenGain.connect(ctx.destination);
          siren.type = 'sine';
          const sirenDuration = options.duration || 8;
          siren.frequency.setValueAtTime(350, ctx.currentTime);
          for (let i = 0; i < sirenDuration; i += 4) {
            siren.frequency.linearRampToValueAtTime(750, ctx.currentTime + i + 2);
            siren.frequency.linearRampToValueAtTime(350, ctx.currentTime + i + 4);
          }
          sirenGain.gain.setValueAtTime(0.25, ctx.currentTime);
          sirenGain.gain.setValueAtTime(0.25, ctx.currentTime + sirenDuration - 1);
          sirenGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + sirenDuration);
          siren.start();
          siren.stop(ctx.currentTime + sirenDuration);
          break;
          
        case 'drone':
          createOscillator(50, 'sawtooth', 4, 0.12);
          createOscillator(51, 'sawtooth', 4, 0.1);
          createOscillator(100, 'sine', 4, 0.08);
          createNoise(4, 0.03);
          break;
          
        case 'industrialClang':
          createOscillator(100, 'square', 0.1, 0.4);
          createOscillator(150, 'sawtooth', 0.15, 0.3);
          createNoise(0.2, 0.3);
          setTimeout(() => {
            createOscillator(80, 'square', 0.08, 0.2);
          }, 100);
          break;
          
        case 'chains':
          for (let i = 0; i < 8; i++) {
            setTimeout(() => {
              createOscillator(600 + Math.random() * 600, 'triangle', 0.08, 0.15);
              createNoise(0.04, 0.08);
            }, i * 80 + Math.random() * 40);
          }
          break;
          
        case 'footstep':
          createOscillator(70 + Math.random() * 20, 'sine', 0.12, 0.25);
          createNoise(0.08, 0.15);
          break;
          
        case 'doorCreak':
          const creak = ctx.createOscillator();
          const creakGain = ctx.createGain();
          creak.connect(creakGain);
          creakGain.connect(ctx.destination);
          creak.type = 'sawtooth';
          creak.frequency.setValueAtTime(80, ctx.currentTime);
          creak.frequency.exponentialRampToValueAtTime(250, ctx.currentTime + 0.8);
          creak.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 1.5);
          creakGain.gain.setValueAtTime(0.12, ctx.currentTime);
          creakGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.5);
          creak.start();
          creak.stop(ctx.currentTime + 1.5);
          break;
          
        case 'breathing':
          const breath = ctx.createOscillator();
          const breathGain = ctx.createGain();
          breath.connect(breathGain);
          breathGain.connect(ctx.destination);
          breath.type = 'sine';
          breath.frequency.value = 90;
          breathGain.gain.setValueAtTime(0, ctx.currentTime);
          breathGain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.8);
          breathGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 2);
          breath.start();
          breath.stop(ctx.currentTime + 2);
          createNoise(2, 0.02);
          break;
          
        case 'metalScrape':
          const scrape = ctx.createOscillator();
          const scrapeGain = ctx.createGain();
          const scrapeFilter = ctx.createBiquadFilter();
          scrape.connect(scrapeFilter);
          scrapeFilter.connect(scrapeGain);
          scrapeGain.connect(ctx.destination);
          scrapeFilter.type = 'highpass';
          scrapeFilter.frequency.value = 2000;
          scrape.type = 'sawtooth';
          scrape.frequency.setValueAtTime(300, ctx.currentTime);
          scrape.frequency.linearRampToValueAtTime(800, ctx.currentTime + 1);
          scrapeGain.gain.setValueAtTime(0.15, ctx.currentTime);
          scrapeGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1);
          scrape.start();
          scrape.stop(ctx.currentTime + 1);
          break;
          
        case 'whisper':
          createNoise(1.5, 0.04);
          createOscillator(180 + Math.random() * 40, 'sine', 1.5, 0.02);
          createOscillator(220 + Math.random() * 40, 'sine', 1, 0.015);
          break;
          
        case 'lockerBang':
          createOscillator(60, 'square', 0.1, 0.5);
          createOscillator(120, 'sawtooth', 0.15, 0.4);
          createNoise(0.2, 0.4);
          break;
          
        case 'glitch':
          for (let i = 0; i < 4; i++) {
            setTimeout(() => {
              createOscillator(Math.random() * 1500 + 100, 'square', 0.03, 0.25);
            }, i * 30);
          }
          break;
          
        case 'reverseHit':
          const rev = ctx.createOscillator();
          const revGain = ctx.createGain();
          rev.connect(revGain);
          revGain.connect(ctx.destination);
          rev.type = 'sine';
          rev.frequency.setValueAtTime(40, ctx.currentTime);
          rev.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.4);
          revGain.gain.setValueAtTime(0.01, ctx.currentTime);
          revGain.gain.linearRampToValueAtTime(0.35, ctx.currentTime + 0.35);
          revGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
          rev.start();
          rev.stop(ctx.currentTime + 0.4);
          break;
          
        case 'fleshSquish':
          createNoise(0.3, 0.2);
          createOscillator(80, 'sine', 0.3, 0.15);
          createOscillator(120, 'triangle', 0.2, 0.1);
          break;
          
        case 'childLaugh':
          for (let i = 0; i < 3; i++) {
            setTimeout(() => {
              createOscillator(400 + i * 50, 'sine', 0.15, 0.1);
              createOscillator(600 + i * 50, 'triangle', 0.1, 0.05);
            }, i * 200);
          }
          break;
          
        case 'churchBell':
          createOscillator(180, 'sine', 3, 0.2);
          createOscillator(360, 'sine', 2.5, 0.1);
          createOscillator(540, 'sine', 2, 0.05);
          break;
          
        default:
          break;
      }
    } catch (e) {
      console.log('Audio error:', e);
    }
  }, [initAudio]);

  // Shuffle and select questions
  const initializeQuestions = useCallback(() => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    const tier0 = shuffled.filter(q => q.tier === 0).slice(0, 2);
    const tier1 = shuffled.filter(q => q.tier === 1).slice(0, 3);
    const tier2 = shuffled.filter(q => q.tier === 2).slice(0, 4);
    const tier3 = shuffled.filter(q => q.tier === 3).slice(0, 2);
    const tier4 = shuffled.filter(q => q.tier === 4).slice(0, 2);
    
    const selected = [...tier0, ...tier1, ...tier2, ...tier3, ...tier4];
    setCurrentQuestions(selected);
  }, [allQuestions]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Tab away detection
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && gameState === 'playing' && horrorLevel >= 4) {
        setLastLookAway(Date.now());
      } else if (!document.hidden && lastLookAway && horrorLevel >= 4) {
        const awayTime = Date.now() - lastLookAway;
        if (awayTime > 1500) {
          setParanoia(prev => prev + 1);
          const messages = [
            "I̷ ̷S̷A̷W̷ ̷Y̷O̷U̷ ̷L̷O̷O̷K̷ ̷A̷W̷A̷Y̷",
            "D̷O̷N̷'̷T̷ ̷L̷E̷A̷V̷E̷ ̷M̷E̷",
            "Y̷O̷U̷ ̷C̷A̷N̷'̷T̷ ̷H̷I̷D̷E̷",
            "I̷'̷M̷ ̷S̷T̷I̷L̷L̷ ̷H̷E̷R̷E̷"
          ];
          setShowMessage(messages[Math.floor(Math.random() * messages.length)]);
          setTimeout(() => setShowMessage(null), 2000);
          if (Math.random() > 0.5) {
            triggerJumpscare(Math.floor(Math.random() * 5));
          }
        }
        setLastLookAway(null);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [gameState, horrorLevel, lastLookAway]);

  // Random events system
  useEffect(() => {
    if (horrorLevel >= 3 && gameState === 'playing') {
      const eventInterval = setInterval(() => {
        if (Math.random() > 0.6) {
          const events = [
            () => { playSound('footstep'); },
            () => { playSound('chains'); },
            () => { playSound('doorCreak'); },
            () => { setLockerBang(true); playSound('lockerBang'); setTimeout(() => setLockerBang(false), 300); },
            () => { playSound('whisper'); },
            () => { playSound('breathing'); },
            () => { 
              setPhotoFlash(true); 
              setTimeout(() => setPhotoFlash(false), 100);
            },
            () => { playSound('metalScrape'); },
            () => {
              const msg = creepyMessages[Math.floor(Math.random() * Math.min(creepyMessages.length, horrorLevel + 5))];
              setShowMessage(msg);
              setTimeout(() => setShowMessage(null), 2500);
            },
            () => {
              if (horrorLevel >= 5) {
                setInvertColors(true);
                setTimeout(() => setInvertColors(false), 100);
              }
            },
            () => {
              if (horrorLevel >= 4) {
                const writing = wallWritings[Math.floor(Math.random() * wallWritings.length)];
                setWritingOnWall(prev => [...prev, {
                  id: Date.now(),
                  text: writing,
                  x: 5 + Math.random() * 70,
                  y: 10 + Math.random() * 60,
                  rotation: (Math.random() - 0.5) * 30
                }]);
              }
            },
            () => {
              if (horrorLevel >= 6) {
                playSound('industrialClang');
              }
            }
          ];
          const event = events[Math.floor(Math.random() * events.length)];
          event();
        }
      }, 3000 - horrorLevel * 150);
      return () => clearInterval(eventInterval);
    }
  }, [horrorLevel, gameState, playSound, creepyMessages, wallWritings]);

  // Glitch effects
  useEffect(() => {
    if (horrorLevel >= 2) {
      const interval = setInterval(() => {
        if (Math.random() > 0.65) {
          setGlitchText(true);
          playSound('glitch');
          setTimeout(() => setGlitchText(false), 80 + Math.random() * 150);
        }
      }, 2500 - horrorLevel * 150);
      return () => clearInterval(interval);
    }
  }, [horrorLevel, playSound]);

  // Progressive horror effects
  useEffect(() => {
    if (horrorLevel >= 2) {
      setFogOpacity(Math.min(0.05 + horrorLevel * 0.03, 0.4));
      setGrainIntensity(Math.min(horrorLevel * 0.05, 0.3));
    }
    if (horrorLevel >= 3) {
      setEyesFollowing(true);
      setShowRadio(true);
    }
    if (horrorLevel >= 4) {
      setHeartbeat(true);
      setVhsEffect(true);
    }
    if (horrorLevel >= 5) {
      setBreathFog(true);
    }
    if (horrorLevel >= 6) {
      setChainFence(true);
    }
  }, [horrorLevel]);

  // Heartbeat system
  useEffect(() => {
    if (heartbeat && gameState === 'playing') {
      const interval = setInterval(() => {
        playSound('heartbeat', { intensity: heartbeatIntensity });
      }, Math.max(600, 1400 - horrorLevel * 80));
      return () => clearInterval(interval);
    }
  }, [heartbeat, gameState, playSound, heartbeatIntensity, horrorLevel]);

  // Flickering
  useEffect(() => {
    if (horrorLevel >= 5 && gameState === 'playing') {
      const interval = setInterval(() => {
        if (Math.random() > 0.6) {
          setFlickering(true);
          playSound('static', { duration: 0.1, gain: 0.1 });
          setTimeout(() => setFlickering(false), 30 + Math.random() * 80);
        }
      }, 2000 + Math.random() * 2000);
      return () => clearInterval(interval);
    }
  }, [horrorLevel, gameState, playSound]);

  // Radio static intensity
  useEffect(() => {
    if (showRadio && gameState === 'playing') {
      const interval = setInterval(() => {
        setRadioStatic(horrorLevel >= 5 ? 0.5 + Math.random() * 0.5 : Math.random() * 0.3);
        if (horrorLevel >= 4 && Math.random() > 0.7) {
          playSound('radioStatic');
        }
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [showRadio, gameState, horrorLevel, playSound]);

  // Subliminal flashes
  useEffect(() => {
    if (horrorLevel >= 5 && gameState === 'playing') {
      const flashInterval = setInterval(() => {
        if (Math.random() > 0.7) {
          const images = ['👁️', '💀', '🩸', '⛧', '☠️', '😱', '🔪', '⚰️', '🪦', '👻'];
          setSubliminalFlash(images[Math.floor(Math.random() * images.length)]);
          setTimeout(() => setSubliminalFlash(null), 40 + Math.random() * 40);
        }
      }, 4000);
      return () => clearInterval(flashInterval);
    }
  }, [horrorLevel, gameState]);

  // Add visual elements progressively
  useEffect(() => {
    if (horrorLevel >= 4 && cracks.length < horrorLevel * 3) {
      const timeout = setTimeout(() => {
        setCracks(prev => [...prev, {
          id: Date.now() + Math.random(),
          x: Math.random() * 100,
          y: Math.random() * 100,
          rotation: Math.random() * 360,
          size: 40 + Math.random() * 80
        }]);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [horrorLevel, cracks.length]);

  // Shadow figures
  useEffect(() => {
    if (horrorLevel >= 6 && shadowFigures.length < 4) {
      const timeout = setTimeout(() => {
        setShadowFigures(prev => [...prev, {
          id: Date.now(),
          side: Math.random() > 0.5 ? 'left' : 'right',
          top: 15 + Math.random() * 60
        }]);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [horrorLevel, shadowFigures.length]);

  // Corner eyes
  useEffect(() => {
    if (horrorLevel >= 5 && gameState === 'playing') {
      const eyeInterval = setInterval(() => {
        if (cornerEyes.length < 10 && Math.random() > 0.5) {
          setCornerEyes(prev => [...prev, {
            id: Date.now() + Math.random(),
            x: Math.random() > 0.5 ? Math.random() * 15 : 85 + Math.random() * 15,
            y: Math.random() * 100,
            size: 8 + Math.random() * 16
          }]);
        }
      }, 2500);
      return () => clearInterval(eyeInterval);
    }
  }, [horrorLevel, cornerEyes.length, gameState]);

  // Blood footprints
  useEffect(() => {
    if (horrorLevel >= 5 && bloodFootprints.length < 12) {
      const interval = setInterval(() => {
        if (Math.random() > 0.6) {
          setBloodFootprints(prev => [...prev, {
            id: Date.now(),
            x: Math.random() * 80 + 10,
            y: Math.random() * 80 + 10,
            rotation: Math.random() * 360
          }]);
        }
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [horrorLevel, bloodFootprints.length]);

  // Typewriter effect
  useEffect(() => {
    if (gameState === 'playing' && currentQuestions.length > 0 && !isTransitioning) {
      const q = currentQuestions[questionIndex];
      if (!q) return;
      
      const text = horrorLevel >= 4 ? q.corruptedQuestion : q.question;
      setTypewriterText('');
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          setTypewriterText(text.substring(0, i + 1));
          if (horrorLevel >= 5 && Math.random() > 0.85) {
            playSound('glitch');
          }
          i++;
        } else {
          clearInterval(typeInterval);
        }
      }, horrorLevel >= 6 ? 25 : horrorLevel >= 4 ? 35 : 50);
      return () => clearInterval(typeInterval);
    }
  }, [questionIndex, gameState, horrorLevel, playSound, currentQuestions, isTransitioning]);

  // Rust level
  useEffect(() => {
    if (horrorLevel >= 3) {
      setRustLevel(Math.min((horrorLevel - 2) * 15, 100));
      setDistortionLevel(Math.min(horrorLevel * 0.5, 4));
    }
  }, [horrorLevel]);

  const triggerJumpscare = useCallback((type = 0) => {
    setJumpscareType(type);
    setShowJumpscare(true);
    setScreenShake(true);
    playSound('jumpscare');
    
    if (type === 1 || type === 3) {
      setInvertColors(true);
      setTimeout(() => setInvertColors(false), 150);
    }
    
    const duration = type >= 3 ? 1800 : type >= 2 ? 1200 : 600;
    setTimeout(() => {
      setShowJumpscare(false);
      setScreenShake(false);
    }, duration);
  }, [playSound]);

  const triggerOtherworldTransition = useCallback(() => {
    setOtherworldTransition(true);
    playSound('siren', { duration: 6 });
    setSirenActive(true);
    
    setTimeout(() => {
      setOtherworldTransition(false);
      setSirenActive(false);
    }, 4000);
  }, [playSound]);

  const addFakeError = useCallback(() => {
    const errors = [
      "ERROR: Reality.exe has stopped responding",
      "WARNING: Memory corruption detected in sector 312",
      "FATAL: Cannot escape process 'SilentHill'",
      "ERROR: sin_count overflow",
      "WARNING: Entity detected in /home/user",
      "SYSTEM: guilt.dll loaded successfully",
      "ERROR: Mary.exe terminated unexpectedly",
      "WARNING: Pyramid_Head.process approaching",
      "FATAL: Escape route not found",
      "ERROR: Fog density exceeds maximum threshold",
      "WARNING: Audio hallucination detected",
      "SYSTEM: countdown_to_judgment = " + Math.floor(Math.random() * 100),
    ];
    const newError = {
      id: Date.now() + Math.random(),
      text: errors[Math.floor(Math.random() * errors.length)],
      x: 5 + Math.random() * 60,
      y: 5 + Math.random() * 60
    };
    setFakeErrors(prev => [...prev, newError]);
    setTimeout(() => {
      setFakeErrors(prev => prev.filter(e => e.id !== newError.id));
    }, 3500);
  }, []);

  const handleAnswer = useCallback((answerIndex) => {
    if (questionLock.current || isTransitioning) return;
    questionLock.current = true;
    setIsTransitioning(true);
    
    const currentQ = currentQuestions[questionIndex];
    if (!currentQ) return;
    
    const isCorrect = answerIndex === currentQ.correct;
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    } else if (horrorLevel >= 3) {
      setParanoia(prev => prev + 1);
    }

    // Increase horror
    const tierBonus = currentQ.tier >= 2 ? 1 : 0;
    setHorrorLevel(prev => Math.min(prev + 1 + tierBonus, 15));
    setHeartbeatIntensity(prev => Math.min(prev + 0.15, 2.5));

    // Trigger effects based on question index and randomness
    const qIdx = questionIndex;
    
    // Always some effect after first few questions
    if (qIdx >= 2) {
      if (Math.random() > 0.7) playSound('whisper');
    }
    
    if (qIdx === 2) {
      playSound('doorCreak');
      setFogOpacity(0.15);
    }
    
    if (qIdx === 3) {
      if (!isCorrect) triggerJumpscare(0);
      setShowHands(true);
    }
    
    if (qIdx === 4) {
      setBloodLevel(1);
      playSound('radioStatic');
      addFakeError();
    }
    
    if (qIdx === 5) {
      triggerOtherworldTransition();
      setBloodLevel(2);
      setShowLyingFigure(true);
    }
    
    if (qIdx === 6) {
      triggerJumpscare(1);
      setStaticOverlay(0.25);
      setCorruptedUI(true);
      playSound('industrialClang');
    }
    
    if (qIdx === 7) {
      setBloodLevel(3);
      setShowNurse(true);
      setShowMannequin(true);
      playSound('fleshSquish');
      addFakeError();
    }
    
    if (qIdx === 8) {
      triggerJumpscare(2);
      setShowPyramidHead(true);
      playSound('metalScrape');
      setRotatingRoom(3);
    }
    
    if (qIdx === 9) {
      setMeltingUI(true);
      setBloodLevel(4);
      setStaticOverlay(0.4);
      triggerJumpscare(3);
      playSound('drone');
    }
    
    if (qIdx === 10) {
      setFloorHole(true);
      setBloodLevel(5);
      setHallwayEffect(true);
      addFakeError();
      addFakeError();
    }
    
    if (qIdx >= 11) {
      triggerJumpscare(4);
      setLetterAppear(true);
    }

    // Random additional effects
    if (horrorLevel >= 5 && Math.random() > 0.6) {
      addFakeError();
    }
    if (horrorLevel >= 6 && Math.random() > 0.7) {
      playSound('childLaugh');
    }
    if (horrorLevel >= 7 && Math.random() > 0.5) {
      setInvertColors(true);
      setTimeout(() => setInvertColors(false), 200);
    }

    // Move to next question or end
    const transitionDelay = horrorLevel > 5 ? 1200 : 800;
    setTimeout(() => {
      if (questionIndex < currentQuestions.length - 1) {
        setQuestionIndex(prev => prev + 1);
        questionLock.current = false;
        setIsTransitioning(false);
      } else {
        determineEnding();
      }
    }, transitionDelay);
  }, [questionIndex, currentQuestions, horrorLevel, isTransitioning, playSound, triggerJumpscare, triggerOtherworldTransition, addFakeError]);

  const determineEnding = useCallback(() => {
    setFadeToBlack(true);
    playSound('drone');
    setEndingSequence(1);
    
    setTimeout(() => {
      setEndingSequence(2);
      playSound('churchBell');
    }, 2500);
    
    setTimeout(() => {
      setEndingSequence(3);
    }, 5000);
    
    setTimeout(() => {
      const totalQuestions = currentQuestions.length;
      const scorePercent = score / totalQuestions;
      
      if (scorePercent >= 0.85) {
        setEnding('leave');
      } else if (scorePercent >= 0.6) {
        setEnding('maria');
      } else if (scorePercent >= 0.35) {
        setEnding('inwater');
      } else if (paranoia > 4) {
        setEnding('dog');
      } else {
        setEnding('rebirth');
      }
      setGameState('ending');
      setFadeToBlack(false);
      setEndingSequence(0);
    }, 6500);
  }, [score, paranoia, currentQuestions.length, playSound]);

  const startGame = useCallback(() => {
    initAudio();
    initializeQuestions();
    setGameState('playing');
    setQuestionIndex(0);
    setScore(0);
    setHorrorLevel(0);
    setBloodLevel(0);
    setStaticOverlay(0);
    setCorruptedUI(false);
    setEyesFollowing(false);
    setShowPyramidHead(false);
    setFogOpacity(0);
    setCracks([]);
    setShadowFigures([]);
    setCornerEyes([]);
    setRustLevel(0);
    setShowHands(false);
    setShowNurse(false);
    setShowMannequin(false);
    setShowLyingFigure(false);
    setMeltingUI(false);
    setRotatingRoom(0);
    setFloorHole(false);
    setFakeErrors([]);
    setParanoia(0);
    setHeartbeatIntensity(1);
    setWritingOnWall([]);
    setBloodFootprints([]);
    setShowRadio(false);
    setVhsEffect(false);
    setGrainIntensity(0);
    setDistortionLevel(0);
    setHallwayEffect(false);
    setLetterAppear(false);
    setIsTransitioning(false);
    questionLock.current = false;
  }, [initAudio, initializeQuestions]);

  const resetGame = useCallback(() => {
    setGameState('intro');
    setHorrorLevel(0);
    setBloodLevel(0);
    setStaticOverlay(0);
    setCorruptedUI(false);
    setEyesFollowing(false);
    setEnding(null);
    setShowPyramidHead(false);
    setShowNurse(false);
    setShowMannequin(false);
    setShowLyingFigure(false);
    setShowHands(false);
    setCracks([]);
    setShadowFigures([]);
    setCornerEyes([]);
    setFogOpacity(0);
    setRustLevel(0);
    setWritingOnWall([]);
    setBloodFootprints([]);
    setHeartbeat(false);
    setShowRadio(false);
    setChainFence(false);
    setFloorHole(false);
    setMeltingUI(false);
    setRotatingRoom(0);
    setVhsEffect(false);
    setGrainIntensity(0);
    setDistortionLevel(0);
    setHallwayEffect(false);
    setLetterAppear(false);
    setBreathFog(false);
  }, []);

  // Background based on horror level
  const getBackgroundStyle = () => {
    const backgrounds = [
      'bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200', // 0
      'bg-gradient-to-br from-pink-200 via-purple-100 to-blue-200', // 1
      'bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200', // 2
      'bg-gradient-to-br from-orange-300 via-red-200 to-purple-300', // 3
      'bg-gradient-to-br from-red-300 via-gray-400 to-purple-400', // 4
      'bg-gradient-to-br from-red-400 via-gray-500 to-gray-700', // 5
      'bg-gradient-to-br from-red-500 via-gray-700 to-gray-900', // 6
      'bg-gradient-to-br from-red-700 via-gray-800 to-black', // 7
      'bg-gradient-to-br from-red-900 via-black to-gray-900', // 8
      'bg-gradient-to-br from-black via-red-950 to-black', // 9
      'bg-black', // 10+
    ];
    return backgrounds[Math.min(horrorLevel, backgrounds.length - 1)];
  };

  // ============== COMPONENTS ==============

  const Mascot = ({ corrupted = false }) => {
    const stage = Math.min(Math.floor(horrorLevel / 1.2), 10);
    
    return (
      <div className="relative" style={{
        filter: stage >= 3 ? `saturate(${Math.max(0, 1 - stage * 0.1)}) contrast(${1 + stage * 0.08}) brightness(${Math.max(0.4, 1 - stage * 0.06)})` : 'none',
        transform: `scale(${1 + stage * 0.04})`
      }}>
        <svg viewBox="0 0 100 100" className={`w-32 h-32 ${corrupted ? 'animate-pulse' : ''} transition-all duration-700`}>
          <defs>
            <filter id="roughen">
              <feTurbulence type="fractalNoise" baseFrequency={stage * 0.01} numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale={stage * 2} />
            </filter>
          </defs>
          
          {/* Base face */}
          <circle 
            cx="50" cy="50" r="45" 
            fill={stage < 3 ? "#FFB6C1" : stage < 5 ? "#a86070" : stage < 7 ? "#6a3040" : "#3a1520"} 
            filter={stage >= 4 ? "url(#roughen)" : "none"}
          />
          
          {/* Rust/decay patches */}
          {stage >= 5 && (
            <>
              <ellipse cx="30" cy="60" rx="12" ry="8" fill="#4a2020" opacity="0.6" />
              <ellipse cx="70" cy="35" rx="10" ry="12" fill="#3a1515" opacity="0.5" />
              <ellipse cx="55" cy="75" rx="15" ry="6" fill="#4a2525" opacity="0.4" />
            </>
          )}
          
          {/* Eyes */}
          <ellipse cx="35" cy="40" rx={stage < 4 ? 8 : 10 + stage * 0.5} ry={stage < 4 ? 8 : 12 + stage * 0.5} fill={stage < 3 ? "white" : stage < 5 ? "#2a2a2a" : "#0a0000"} />
          <ellipse cx="65" cy="40" rx={stage < 4 ? 8 : 10 + stage * 0.5} ry={stage < 4 ? 8 : 12 + stage * 0.5} fill={stage < 3 ? "white" : stage < 5 ? "#2a2a2a" : "#0a0000"} />
          
          {/* Pupils */}
          {eyesFollowing ? (
            <>
              <circle 
                cx={33 + (mousePos.x / (typeof window !== 'undefined' ? window.innerWidth : 1)) * 4} 
                cy={38 + (mousePos.y / (typeof window !== 'undefined' ? window.innerHeight : 1)) * 4} 
                r={stage < 4 ? 4 : 5 + stage * 0.3} 
                fill={stage < 3 ? "#333" : "#ff0000"}
                style={{ filter: stage >= 4 ? `drop-shadow(0 0 ${stage}px red)` : 'none' }}
              />
              <circle 
                cx={63 + (mousePos.x / (typeof window !== 'undefined' ? window.innerWidth : 1)) * 4} 
                cy={38 + (mousePos.y / (typeof window !== 'undefined' ? window.innerHeight : 1)) * 4} 
                r={stage < 4 ? 4 : 5 + stage * 0.3} 
                fill={stage < 3 ? "#333" : "#ff0000"}
                style={{ filter: stage >= 4 ? `drop-shadow(0 0 ${stage}px red)` : 'none' }}
              />
            </>
          ) : (
            <>
              <circle cx="35" cy="40" r={4} fill="#333" />
              <circle cx="65" cy="40" r={4} fill="#333" />
            </>
          )}
          
          {/* Mouth progression */}
          {stage < 2 && (
            <path d="M 35 65 Q 50 80 65 65" stroke="#333" strokeWidth="3" fill="none" />
          )}
          {stage >= 2 && stage < 4 && (
            <path d="M 32 65 L 68 65" stroke="#2a2a2a" strokeWidth="3" fill="none" />
          )}
          {stage >= 4 && stage < 6 && (
            <>
              <path d="M 28 68 L 72 68" stroke="#200" strokeWidth="4" fill="none" />
              {[...Array(6)].map((_, i) => (
                <line key={i} x1={32 + i * 8} y1="62" x2={32 + i * 8} y2="74" stroke="#300" strokeWidth="2" />
              ))}
            </>
          )}
          {stage >= 6 && (
            <>
              <ellipse cx="50" cy="70" rx="22" ry="16" fill="#0a0000" />
              {[...Array(10)].map((_, i) => (
                <polygon key={i} points={`${32 + i * 4},58 ${34 + i * 4},72 ${30 + i * 4},72`} fill="#503030" />
              ))}
              {[...Array(8)].map((_, i) => (
                <polygon key={i} points={`${34 + i * 4},82 ${36 + i * 4},70 ${32 + i * 4},70`} fill="#503030" />
              ))}
            </>
          )}
          
          {/* Eyebrows - increasingly angry */}
          {stage >= 3 && (
            <>
              <line x1="22" y1={30 - stage} x2="45" y2={36 - stage * 0.5} stroke="#200" strokeWidth="3" strokeLinecap="round" />
              <line x1="78" y1={30 - stage} x2="55" y2={36 - stage * 0.5} stroke="#200" strokeWidth="3" strokeLinecap="round" />
            </>
          )}
          
          {/* Blood drips from eyes and mouth */}
          {stage >= 5 && (
            <>
              <path d="M 35 52 Q 33 65 30 85" stroke="#700" strokeWidth="3" fill="none" />
              <path d="M 65 52 Q 67 65 70 85" stroke="#700" strokeWidth="3" fill="none" />
              <circle cx="30" cy="88" r="4" fill="#700" />
              <circle cx="70" cy="88" r="4" fill="#700" />
            </>
          )}
          {stage >= 6 && (
            <>
              <path d="M 40 86 L 38 98" stroke="#600" strokeWidth="4" fill="none" />
              <path d="M 50 86 L 50 100" stroke="#600" strokeWidth="5" fill="none" />
              <path d="M 60 86 L 62 98" stroke="#600" strokeWidth="4" fill="none" />
            </>
          )}
          
          {/* Cracks in face */}
          {stage >= 7 && (
            <>
              <path d="M 18 25 L 30 40 L 22 55 L 28 70" stroke="#000" strokeWidth="2" fill="none" opacity="0.8" />
              <path d="M 82 28 L 72 45 L 78 60 L 70 72" stroke="#000" strokeWidth="2" fill="none" opacity="0.8" />
              <path d="M 45 10 L 48 25 L 42 35" stroke="#000" strokeWidth="1.5" fill="none" opacity="0.6" />
            </>
          )}
          
          {/* Third eye */}
          {stage >= 8 && (
            <>
              <ellipse cx="50" cy="22" rx="10" ry="12" fill="#0a0000" />
              <circle cx="50" cy="22" r="5" fill="#ff0000" style={{ filter: 'drop-shadow(0 0 8px red)' }}>
                <animate attributeName="r" values="5;6;5" dur="1s" repeatCount="indefinite" />
              </circle>
              <circle cx="50" cy="22" r="2" fill="#000" />
            </>
          )}
          
          {/* Barbed wire halo */}
          {stage >= 9 && (
            <g transform="translate(50, -5)">
              <ellipse cx="0" cy="0" rx="50" ry="15" fill="none" stroke="#333" strokeWidth="2" strokeDasharray="4,4" />
              {[...Array(8)].map((_, i) => (
                <polygon key={i} points={`${-45 + i * 12},${Math.sin(i) * 5} ${-42 + i * 12},${Math.sin(i) * 5 - 5} ${-39 + i * 12},${Math.sin(i) * 5}`} fill="#444" />
              ))}
            </g>
          )}
        </svg>
        
        {/* Flies around mascot */}
        {stage >= 6 && (
          <div className="absolute inset-0 pointer-events-none overflow-visible">
            {[...Array(stage)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-gray-800 rounded-full"
                style={{
                  left: `${50 + Math.cos(Date.now() / 500 + i * 0.8) * 60}%`,
                  top: `${50 + Math.sin(Date.now() / 400 + i * 0.8) * 60}%`,
                  animation: `fly${i % 3} ${1 + Math.random()}s ease-in-out infinite`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  const PyramidHeadFigure = () => (
    <div 
      className="fixed pointer-events-none transition-all duration-[2000ms]"
      style={{ 
        bottom: showPyramidHead ? '0' : '-500px',
        right: '3%',
        width: '180px',
        height: '450px',
        zIndex: 100,
        filter: 'drop-shadow(0 0 30px rgba(50,0,0,0.9))'
      }}
    >
      <svg viewBox="0 0 100 250" className="w-full h-full">
        {/* Helmet/Pyramid */}
        <polygon points="50,0 10,100 90,100" fill="#2a0505" stroke="#1a0000" strokeWidth="2" />
        <line x1="50" y1="0" x2="50" y2="100" stroke="#1a0000" strokeWidth="1" opacity="0.6" />
        <line x1="50" y1="0" x2="10" y2="100" stroke="#1a0000" strokeWidth="1" opacity="0.3" />
        <line x1="50" y1="0" x2="90" y2="100" stroke="#1a0000" strokeWidth="1" opacity="0.3" />
        
        {/* Rust on helmet */}
        <ellipse cx="30" cy="60" rx="15" ry="20" fill="#4a1010" opacity="0.5" />
        <ellipse cx="70" cy="70" rx="12" ry="15" fill="#3a0808" opacity="0.4" />
        
        {/* Body */}
        <rect x="25" y="100" width="50" height="150" fill="#1a0808" />
        
        {/* Apron/Smock with blood */}
        <path d="M 25 110 L 20 230 L 80 230 L 75 110 Z" fill="#2a1010" />
        <ellipse cx="40" cy="150" rx="10" ry="15" fill="#500" opacity="0.6" />
        <ellipse cx="55" cy="180" rx="12" ry="10" fill="#400" opacity="0.5" />
        <ellipse cx="45" cy="210" rx="15" ry="8" fill="#500" opacity="0.7" />
        
        {/* Arms */}
        <rect x="5" y="105" width="20" height="70" fill="#2a1515" />
        <rect x="75" y="105" width="20" height="70" fill="#2a1515" />
        
        {/* Great Knife */}
        <g transform="rotate(20, 95, 100)">
          <rect x="95" y="90" width="80" height="10" fill="#1a1a1a" />
          <polygon points="175,85 195,95 175,105" fill="#2a2a2a" />
          <rect x="90" y="88" width="8" height="14" fill="#3a2020" />
        </g>
        
        {/* Blood dripping */}
        <line x1="30" y1="230" x2="30" y2="250" stroke="#600" strokeWidth="3" />
        <line x1="50" y1="230" x2="50" y2="248" stroke="#600" strokeWidth="4" />
        <line x1="70" y1="230" x2="70" y2="245" stroke="#600" strokeWidth="3" />
      </svg>
    </div>
  );

  const NurseFigure = () => (
    <div 
      className="fixed pointer-events-none transition-all duration-1000"
      style={{ 
        opacity: showNurse ? 0.85 : 0,
        left: showNurse ? '3%' : '-200px',
        top: '25%',
        width: '120px',
        height: '280px',
        zIndex: 95
      }}
    >
      <svg viewBox="0 0 60 140" className="w-full h-full">
        {/* Head - bandaged/disfigured */}
        <circle cx="30" cy="18" r="16" fill="#6B5B50" />
        <path d="M 15 10 Q 30 0 45 10" stroke="#4a3a30" strokeWidth="10" fill="none" />
        <path d="M 18 20 Q 30 15 42 20" stroke="#3a2a20" strokeWidth="6" fill="none" />
        
        {/* Face - distorted */}
        <ellipse cx="24" cy="20" rx="3" ry="4" fill="#0a0000" />
        <ellipse cx="36" cy="18" rx="4" ry="3" fill="#0a0000" />
        <path d="M 25 28 Q 30 32 35 28" stroke="#2a0000" strokeWidth="2" fill="none" />
        
        {/* Nurse cap */}
        <rect x="18" y="2" width="24" height="8" fill="#c0b0a0" />
        <rect x="27" y="0" width="6" height="10" fill="#800" />
        
        {/* Body - nurse outfit */}
        <rect x="18" y="34" width="24" height="55" fill="#c0b0a0" />
        <line x1="30" y1="34" x2="30" y2="89" stroke="#a09080" strokeWidth="1" />
        
        {/* Blood stains on uniform */}
        <ellipse cx="24" cy="50" rx="6" ry="8" fill="#600" opacity="0.7" />
        <ellipse cx="36" cy="65" rx="5" ry="10" fill="#500" opacity="0.6" />
        <ellipse cx="28" cy="80" rx="8" ry="5" fill="#600" opacity="0.5" />
        
        {/* Arms - one holding pipe */}
        <rect x="5" y="38" width="13" height="45" fill="#6B5B50" />
        <rect x="42" y="38" width="13" height="45" fill="#6B5B50" />
        <rect x="0" y="75" width="8" height="30" fill="#333" /> {/* Pipe */}
        
        {/* Legs */}
        <rect x="20" y="89" width="8" height="45" fill="#6B5B50" />
        <rect x="32" y="89" width="8" height="45" fill="#6B5B50" />
        
        {/* Shoes */}
        <ellipse cx="24" cy="136" rx="6" ry="4" fill="#2a2a2a" />
        <ellipse cx="36" cy="136" rx="6" ry="4" fill="#2a2a2a" />
      </svg>
    </div>
  );

  const LyingFigure = () => (
    <div 
      className="fixed pointer-events-none transition-all duration-1000"
      style={{ 
        opacity: showLyingFigure ? 0.7 : 0,
        right: showLyingFigure ? '15%' : '-200px',
        bottom: '5%',
        width: '200px',
        height: '80px',
        zIndex: 85
      }}
    >
      <svg viewBox="0 0 200 80" className="w-full h-full">
        {/* Body - straitjacket creature */}
        <ellipse cx="100" cy="40" rx="80" ry="30" fill="#4a3a30" />
        <ellipse cx="40" cy="40" rx="25" ry="20" fill="#5a4a40" /> {/* Head area */}
        
        {/* Wrapped/bound appearance */}
        <path d="M 30 20 Q 100 10 170 25" stroke="#3a2a20" strokeWidth="3" fill="none" />
        <path d="M 25 40 Q 100 30 175 40" stroke="#3a2a20" strokeWidth="3" fill="none" />
        <path d="M 30 60 Q 100 50 170 55" stroke="#3a2a20" strokeWidth="3" fill="none" />
        
        {/* Legs in straightjacket */}
        <ellipse cx="160" cy="45" rx="30" ry="15" fill="#4a3a30" />
        
        {/* Ooze/acid */}
        <ellipse cx="80" cy="70" rx="30" ry="8" fill="#3a4a30" opacity="0.6" />
        <ellipse cx="130" cy="72" rx="20" ry="6" fill="#3a4a30" opacity="0.5" />
      </svg>
    </div>
  );

  const Mannequin = () => (
    <div 
      className="fixed pointer-events-none transition-all duration-1000"
      style={{ 
        opacity: showMannequin ? 0.75 : 0,
        left: showMannequin ? '85%' : '110%',
        top: '30%',
        width: '80px',
        height: '200px',
        zIndex: 90,
        transform: 'scaleX(-1)'
      }}
    >
      <svg viewBox="0 0 60 150" className="w-full h-full">
        {/* Two pairs of legs fused */}
        <rect x="5" y="0" width="12" height="70" fill="#8B7355" />
        <rect x="20" y="0" width="12" height="75" fill="#8B7355" />
        <rect x="28" y="5" width="12" height="72" fill="#8B7355" />
        <rect x="43" y="0" width="12" height="68" fill="#8B7355" />
        
        {/* Pelvis area - inverted torso */}
        <ellipse cx="30" cy="75" rx="25" ry="15" fill="#7a6345" />
        
        {/* "Upper" body - actually more legs pointing up */}
        <rect x="8" y="80" width="10" height="50" fill="#8B7355" />
        <rect x="22" y="78" width="10" height="55" fill="#8B7355" />
        <rect x="36" y="80" width="10" height="52" fill="#8B7355" />
        
        {/* Feet at top */}
        <ellipse cx="13" cy="132" rx="8" ry="5" fill="#6a5335" />
        <ellipse cx="27" cy="135" rx="8" ry="5" fill="#6a5335" />
        <ellipse cx="41" cy="134" rx="8" ry="5" fill="#6a5335" />
        
        {/* Feet at bottom */}
        <ellipse cx="11" cy="3" rx="7" ry="4" fill="#6a5335" transform="rotate(180, 11, 3)" />
        <ellipse cx="26" cy="3" rx="7" ry="4" fill="#6a5335" transform="rotate(180, 26, 3)" />
        <ellipse cx="34" cy="8" rx="7" ry="4" fill="#6a5335" transform="rotate(180, 34, 8)" />
        <ellipse cx="49" cy="3" rx="7" ry="4" fill="#6a5335" transform="rotate(180, 49, 3)" />
      </svg>
    </div>
  );

  const BloodDrip = ({ level }) => (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden" style={{ zIndex: 50 }}>
      {[...Array(Math.min(level * 15, 60))].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${(i * 6.5 + Math.random() * 4) % 100}%`,
            width: `${12 + Math.random() * 25}px`,
            height: `${level * 50 + Math.random() * 150}px`,
            top: 0,
            background: `linear-gradient(to bottom, #8B0000, #5a0000, #3a0000)`,
            borderRadius: '0 0 50% 50%',
            opacity: 0.8 + Math.random() * 0.2,
            animation: `drip ${1.2 + Math.random() * 1.5}s ease-in forwards`,
            animationDelay: `${Math.random() * 2.5}s`
          }}
        />
      ))}
      {level >= 3 && [...Array(level * 4)].map((_, i) => (
        <div
          key={`pool-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 85}%`,
            bottom: `${Math.random() * 25}%`,
            width: `${60 + Math.random() * 120}px`,
            height: `${15 + Math.random() * 25}px`,
            background: 'radial-gradient(ellipse, #6a0000, #4a0000, #2a0000)',
            opacity: 0.7,
            animation: `poolSpread ${1.5 + Math.random()}s ease-out forwards`,
            animationDelay: `${1 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );

  const Fog = ({ opacity }) => (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 30 }}>
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(80,80,80,${opacity * 1.2}) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 30%, rgba(70,70,70,${opacity}) 0%, transparent 45%),
            radial-gradient(ellipse at 50% 80%, rgba(60,60,60,${opacity * 0.8}) 0%, transparent 55%),
            radial-gradient(ellipse at center, transparent 20%, rgba(40,40,40,${opacity * 0.6}) 70%, rgba(20,20,20,${opacity}) 100%)
          `,
          animation: 'fogDrift 15s ease-in-out infinite'
        }}
      />
    </div>
  );

  const RustOverlay = ({ level }) => (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{ 
        zIndex: 25,
        opacity: level / 100,
        background: `
          radial-gradient(ellipse at 30% 20%, rgba(80,30,10,0.4) 0%, transparent 50%),
          radial-gradient(ellipse at 70% 70%, rgba(60,20,5,0.5) 0%, transparent 45%),
          radial-gradient(ellipse at center, transparent 30%, rgba(50,15,5,0.6) 70%, rgba(30,10,0,0.8) 100%)
        `,
        mixBlendMode: 'multiply'
      }}
    />
  );

  const StaticOverlay = ({ intensity }) => (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{ 
        zIndex: 60,
        opacity: intensity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        mixBlendMode: 'overlay',
        animation: 'staticFlicker 0.05s infinite'
      }}
    />
  );

  const VHSEffect = () => (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 65 }}>
      {/* Scan lines */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
          animation: 'scanlines 0.1s linear infinite'
        }}
      />
      {/* Color aberration bars */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute w-full"
          style={{
            height: '2px',
            top: `${20 + i * 30 + Math.random() * 10}%`,
            background: 'linear-gradient(90deg, transparent, rgba(255,0,0,0.3), rgba(0,255,255,0.3), transparent)',
            animation: `vhsBar ${0.5 + Math.random()}s ease-in-out infinite`,
            animationDelay: `${Math.random()}s`
          }}
        />
      ))}
    </div>
  );

  const GrainOverlay = ({ intensity }) => (
    <div 
      className="fixed inset-0 pointer-events-none mix-blend-overlay"
      style={{ 
        zIndex: 62,
        opacity: intensity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
        animation: 'grain 0.2s steps(1) infinite'
      }}
    />
  );

  const Radio = ({ staticLevel }) => (
    <div 
      className="fixed bottom-4 right-4 pointer-events-none transition-opacity duration-500"
      style={{ zIndex: 110, opacity: showRadio ? 1 : 0 }}
    >
      <div className="relative">
        <svg viewBox="0 0 80 50" className="w-24 h-16">
          {/* Radio body */}
          <rect x="5" y="10" width="70" height="35" rx="3" fill="#2a2a2a" stroke="#1a1a1a" strokeWidth="2" />
          {/* Speaker grille */}
          <rect x="10" y="15" width="35" height="25" fill="#1a1a1a" />
          {[...Array(6)].map((_, i) => (
            <line key={i} x1="12" y1={17 + i * 4} x2="43" y2={17 + i * 4} stroke="#333" strokeWidth="1" />
          ))}
          {/* Dial */}
          <circle cx="58" cy="27" r="10" fill="#333" stroke="#444" strokeWidth="1" />
          <line x1="58" y1="27" x2="58" y2="19" stroke="#666" strokeWidth="2" style={{ transform: `rotate(${staticLevel * 180}deg)`, transformOrigin: '58px 27px' }} />
          {/* Light */}
          <circle cx="58" cy="40" r="3" fill={staticLevel > 0.3 ? "#ff3333" : "#333"}>
            {staticLevel > 0.3 && <animate attributeName="opacity" values="1;0.5;1" dur="0.3s" repeatCount="indefinite" />}
          </circle>
        </svg>
        {staticLevel > 0.3 && (
          <div className="absolute -top-6 left-0 text-red-500 text-xs font-mono animate-pulse">
            {staticLevel > 0.7 ? "! ! !" : "..."}
          </div>
        )}
      </div>
    </div>
  );

  const Cracks = ({ cracks }) => (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 70 }}>
      {cracks.map(crack => (
        <svg 
          key={crack.id}
          className="absolute"
          style={{
            left: `${crack.x}%`,
            top: `${crack.y}%`,
            width: `${crack.size}px`,
            height: `${crack.size}px`,
            transform: `rotate(${crack.rotation}deg)`,
            opacity: 0.7
          }}
          viewBox="0 0 100 100"
        >
          <path 
            d="M 50 0 L 45 25 L 30 35 L 48 50 L 35 70 L 50 60 L 65 85 L 55 55 L 75 45 L 52 38 L 60 15 Z" 
            fill="rgba(0,0,0,0.4)" 
            stroke="rgba(0,0,0,0.8)" 
            strokeWidth="1"
          />
        </svg>
      ))}
    </div>
  );

  const ShadowFigures = ({ figures }) => (
    <>
      {figures.map(fig => (
        <div
          key={fig.id}
          className="fixed pointer-events-none"
          style={{
            [fig.side]: '-30px',
            top: `${fig.top}%`,
            width: '80px',
            height: '200px',
            zIndex: 40,
            animation: `shadowPeek${fig.side} 4s ease-in-out infinite`
          }}
        >
          <svg viewBox="0 0 40 100" className="w-full h-full" style={{ filter: 'blur(2px)' }}>
            <ellipse cx={fig.side === 'left' ? '35' : '5'} cy="15" rx="12" ry="15" fill="rgba(0,0,0,0.95)" />
            <rect x={fig.side === 'left' ? '28' : '-2'} y="30" width="14" height="70" fill="rgba(0,0,0,0.95)" />
          </svg>
        </div>
      ))}
    </>
  );

  const CornerEyes = ({ eyes }) => (
    <>
      {eyes.map(eye => (
        <div
          key={eye.id}
          className="fixed pointer-events-none"
          style={{
            left: `${eye.x}%`,
            top: `${eye.y}%`,
            zIndex: 80,
            animation: 'eyePulse 3s ease-in-out infinite'
          }}
        >
          <svg width={eye.size} height={eye.size * 0.6} viewBox="0 0 30 18">
            <ellipse cx="15" cy="9" rx="14" ry="8" fill="#0a0000" stroke="#300" strokeWidth="1" />
            <circle 
              cx={13 + (mousePos.x / (typeof window !== 'undefined' ? window.innerWidth : 1)) * 4} 
              cy={9 + (mousePos.y / (typeof window !== 'undefined' ? window.innerHeight : 1)) * 2} 
              r="5" 
              fill="#cc0000"
              style={{ filter: 'drop-shadow(0 0 4px #ff0000)' }}
            />
            <circle 
              cx={13 + (mousePos.x / (typeof window !== 'undefined' ? window.innerWidth : 1)) * 4} 
              cy={9 + (mousePos.y / (typeof window !== 'undefined' ? window.innerHeight : 1)) * 2} 
              r="2" 
              fill="#000"
            />
          </svg>
        </div>
      ))}
    </>
  );

  const ReachingHands = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 45 }}>
      {/* Left hands */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`left-${i}`}
          className="absolute"
          style={{
            left: '-100px',
            top: `${10 + i * 18}%`,
            animation: `reachFromLeft ${2.5 + i * 0.4}s ease-in-out infinite`,
            animationDelay: `${i * 0.25}s`
          }}
        >
          <svg width="140" height="70" viewBox="0 0 140 70">
            <path 
              d="M 0 35 Q 50 30 70 35 L 82 20 L 87 35 L 100 15 L 102 35 L 112 22 L 112 38 L 120 30 L 118 42 Q 90 50 70 45 Q 50 50 0 40 Z" 
              fill="#3a2828" 
              stroke="#1a0808" 
              strokeWidth="1"
            />
          </svg>
        </div>
      ))}
      {/* Right hands */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`right-${i}`}
          className="absolute"
          style={{
            right: '-100px',
            top: `${15 + i * 16}%`,
            transform: 'scaleX(-1)',
            animation: `reachFromLeft ${2.2 + i * 0.35}s ease-in-out infinite`,
            animationDelay: `${i * 0.3 + 0.15}s`
          }}
        >
          <svg width="140" height="70" viewBox="0 0 140 70">
            <path 
              d="M 0 35 Q 50 30 70 35 L 82 20 L 87 35 L 100 15 L 102 35 L 112 22 L 112 38 L 120 30 L 118 42 Q 90 50 70 45 Q 50 50 0 40 Z" 
              fill="#3a2828" 
              stroke="#1a0808" 
              strokeWidth="1"
            />
          </svg>
        </div>
      ))}
      {/* Bottom hands */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`bottom-${i}`}
          className="absolute"
          style={{
            left: `${5 + i * 12}%`,
            bottom: '-80px',
            transform: 'rotate(-90deg)',
            animation: `reachFromBottom ${1.8 + i * 0.2}s ease-in-out infinite`,
            animationDelay: `${i * 0.15}s`
          }}
        >
          <svg width="100" height="50" viewBox="0 0 100 50">
            <path 
              d="M 0 25 Q 35 20 50 25 L 58 12 L 62 25 L 72 10 L 74 25 L 82 16 L 82 28 L 88 22 L 86 32 Q 65 38 50 34 Q 35 38 0 30 Z" 
              fill="#3a2828" 
              stroke="#1a0808" 
              strokeWidth="1"
            />
          </svg>
        </div>
      ))}
    </div>
  );

  const WallWritings = ({ writings }) => (
    <>
      {writings.map(w => (
        <div
          key={w.id}
          className="fixed pointer-events-none font-mono"
          style={{
            left: `${w.x}%`,
            top: `${w.y}%`,
            transform: `rotate(${w.rotation}deg)`,
            color: '#5a0000',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
            opacity: 0.7,
            zIndex: 35,
            animation: 'fadeInWriting 2s ease-out forwards'
          }}
        >
          {w.text}
        </div>
      ))}
    </>
  );

  const BloodFootprints = ({ footprints }) => (
    <>
      {footprints.map(fp => (
        <div
          key={fp.id}
          className="fixed pointer-events-none"
          style={{
            left: `${fp.x}%`,
            top: `${fp.y}%`,
            transform: `rotate(${fp.rotation}deg)`,
            zIndex: 32,
            opacity: 0.5
          }}
        >
          <svg width="30" height="50" viewBox="0 0 30 50">
            <ellipse cx="15" cy="35" rx="10" ry="14" fill="#4a0000" />
            <circle cx="8" cy="10" r="4" fill="#4a0000" />
            <circle cx="14" cy="6" r="3" fill="#4a0000" />
            <circle cx="20" cy="8" r="3" fill="#4a0000" />
            <circle cx="24" cy="14" r="3" fill="#4a0000" />
          </svg>
        </div>
      ))}
    </>
  );

  const ChainFence = () => (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{ 
        zIndex: 28,
        opacity: chainFence ? 0.15 : 0,
        transition: 'opacity 2s',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 L20 0 L40 20 L20 40 Z' fill='none' stroke='%23333' stroke-width='2'/%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px'
      }}
    />
  );

  const FloorHole = () => (
    <div 
      className="fixed bottom-0 left-1/2 transform -translate-x-1/2 pointer-events-none transition-all duration-1000"
      style={{ 
        zIndex: 55,
        width: '350px',
        height: '220px',
        opacity: floorHole ? 1 : 0
      }}
    >
      <svg viewBox="0 0 350 220" className="w-full h-full">
        <ellipse cx="175" cy="200" rx="160" ry="90" fill="#050000" />
        <ellipse cx="175" cy="200" rx="120" ry="60" fill="#000" />
        <ellipse cx="175" cy="200" rx="80" ry="35" fill="#0a0000" />
        
        {/* Things reaching up */}
        {[...Array(7)].map((_, i) => (
          <g key={i}>
            <path
              d={`M ${90 + i * 30} 200 Q ${95 + i * 30} ${140 - i * 8} ${100 + i * 30 + Math.sin(i) * 10} ${100 - i * 5}`}
              stroke="#1a0a0a"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
              style={{ animation: `reachFromAbyss ${2.5 + i * 0.3}s ease-in-out infinite` }}
            />
            {/* Fingers */}
            <circle cx={100 + i * 30} cy={95 - i * 5} r="6" fill="#1a0a0a" style={{ animation: `reachFromAbyss ${2.5 + i * 0.3}s ease-in-out infinite` }} />
          </g>
        ))}
      </svg>
    </div>
  );

  const OtherworldTransition = () => (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{ 
        zIndex: 200,
        animation: otherworldTransition ? 'otherworldPeel 4s ease-in-out forwards' : 'none'
      }}
    >
      {/* Peeling effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(45deg, #1a0000 25%, transparent 25%, transparent 75%, #1a0000 75%)',
          backgroundSize: '60px 60px',
          animation: otherworldTransition ? 'rustSpread 4s ease-in-out forwards' : 'none'
        }}
      />
      {/* Flash */}
      <div 
        className="absolute inset-0 bg-red-900"
        style={{
          animation: otherworldTransition ? 'otherworldFlash 4s ease-in-out forwards' : 'none'
        }}
      />
    </div>
  );

  const SealOfMetatron = () => (
    <div 
      className="fixed inset-0 flex items-center justify-center pointer-events-none"
      style={{ 
        zIndex: 150,
        opacity: showSeal ? 0.3 : 0,
        transition: 'opacity 3s'
      }}
    >
      <svg viewBox="0 0 200 200" className="w-96 h-96" style={{ animation: 'rotateSlow 30s linear infinite' }}>
        {/* Outer circle */}
        <circle cx="100" cy="100" r="95" fill="none" stroke="#600" strokeWidth="2" />
        <circle cx="100" cy="100" r="85" fill="none" stroke="#600" strokeWidth="1" />
        
        {/* Hexagram */}
        <polygon points="100,15 150,90 50,90" fill="none" stroke="#800" strokeWidth="2" />
        <polygon points="100,185 50,110 150,110" fill="none" stroke="#800" strokeWidth="2" />
        
        {/* Inner circles */}
        <circle cx="100" cy="100" r="45" fill="none" stroke="#600" strokeWidth="1" />
        <circle cx="100" cy="100" r="25" fill="none" stroke="#600" strokeWidth="1" />
        
        {/* Symbols around edge */}
        {[...Array(12)].map((_, i) => (
          <text
            key={i}
            x={100 + 75 * Math.cos((i * 30 - 90) * Math.PI / 180)}
            y={100 + 75 * Math.sin((i * 30 - 90) * Math.PI / 180)}
            fill="#800"
            fontSize="10"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {['ש', 'א', 'מ', 'ל', '⛧', 'ת', 'ר', 'פ', '☩', 'נ', 'ד', '⚸'][i]}
          </text>
        ))}
      </svg>
    </div>
  );

  const LetterFromMary = () => (
    <div 
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-1000"
      style={{ 
        zIndex: 180,
        opacity: letterAppear ? 1 : 0,
        transform: `translate(-50%, -50%) rotate(${letterAppear ? 0 : 10}deg)`
      }}
    >
      <div className="bg-amber-100 p-6 rounded shadow-2xl max-w-sm" style={{ fontFamily: 'cursive' }}>
        <p className="text-amber-900 text-sm leading-relaxed">
          "In my restless dreams, I see that town... Silent Hill.
          <br /><br />
          You promised me you'd take me there again someday. But you never did.
          <br /><br />
          Well, I'm alone there now, in our 'special place'... waiting for you."
        </p>
        <p className="text-amber-800 text-right mt-4 text-xs">- Mary</p>
      </div>
    </div>
  );

  const PhotoFlash = () => (
    <div 
      className="fixed inset-0 bg-white pointer-events-none"
      style={{ 
        zIndex: 250,
        opacity: photoFlash ? 1 : 0,
        transition: 'opacity 0.05s'
      }}
    />
  );

  const FakeErrorWindows = ({ errors }) => (
    <>
      {errors.map(error => (
        <div
          key={error.id}
          className="fixed bg-gray-900 border border-red-800 rounded shadow-2xl animate-pulse"
          style={{
            left: `${error.x}%`,
            top: `${error.y}%`,
            zIndex: 210,
            maxWidth: '280px',
            fontFamily: 'monospace'
          }}
        >
          <div className="flex items-center gap-2 bg-red-900 px-3 py-1 rounded-t">
            <span className="text-red-300 text-xs">⚠️ SYSTEM ERROR</span>
            <span className="ml-auto text-red-400 cursor-not-allowed text-xs">✕</span>
          </div>
          <div className="p-3">
            <p className="text-red-400 text-xs">{error.text}</p>
          </div>
        </div>
      ))}
    </>
  );

  const SubliminalFlash = ({ content }) => (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black pointer-events-none"
      style={{ zIndex: 300 }}
    >
      <span className="text-[18rem] text-red-600" style={{ textShadow: '0 0 100px red, 0 0 200px darkred' }}>
        {content}
      </span>
    </div>
  );

  const Jumpscare = ({ type }) => {
    const jumpscares = [
      // Type 0: Giant Eye
      <div key="0" className="fixed inset-0 flex items-center justify-center bg-black z-[280]">
        <svg viewBox="0 0 300 180" className="w-[500px] h-[300px]">
          <ellipse cx="150" cy="90" rx="145" ry="85" fill="#1a0000" stroke="#ff0000" strokeWidth="4" />
          <ellipse cx="150" cy="90" rx="100" ry="60" fill="#200" />
          <circle cx="150" cy="90" r="50" fill="#400" />
          <circle cx="150" cy="90" r="35" fill="#ff0000" style={{ filter: 'drop-shadow(0 0 30px red)' }}>
            <animate attributeName="r" values="35;40;35" dur="0.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="150" cy="90" r="15" fill="#000" />
          {/* Veins */}
          {[...Array(8)].map((_, i) => (
            <path key={i} d={`M ${10 + i * 15} ${50 + (i % 3) * 20} Q ${50 + i * 10} ${70 + (i % 2) * 20} ${80 + i * 8} ${85 + (i % 3) * 5}`} stroke="#600" strokeWidth="2" fill="none" />
          ))}
        </svg>
      </div>,
      
      // Type 1: Pyramid Head closeup
      <div key="1" className="fixed inset-0 flex items-center justify-center bg-red-950 z-[280]">
        <svg viewBox="0 0 300 400" className="w-80 h-auto">
          <polygon points="150,0 40,180 260,180" fill="#1a0000" stroke="#000" strokeWidth="4" />
          <line x1="150" y1="0" x2="150" y2="180" stroke="#0a0000" strokeWidth="2" />
          <rect x="70" y="180" width="160" height="220" fill="#0a0505" />
          {/* Blood splatter */}
          {[...Array(10)].map((_, i) => (
            <circle key={i} cx={80 + Math.random() * 140} cy={200 + Math.random() * 180} r={5 + Math.random() * 15} fill="#500" opacity="0.8" />
          ))}
        </svg>
        <div className="absolute text-5xl text-red-600 font-bold mt-96" style={{ textShadow: '0 0 30px red', fontFamily: 'serif' }}>
          LOOKING FOR ME?
        </div>
      </div>,
      
      // Type 2: Nurse face
      <div key="2" className="fixed inset-0 bg-black z-[280] flex items-center justify-center">
        <svg viewBox="0 0 200 250" className="w-72 h-auto">
          {/* Bandaged head */}
          <circle cx="100" cy="100" r="80" fill="#5a4a40" />
          <path d="M 30 70 Q 100 40 170 70" stroke="#3a2a20" strokeWidth="20" fill="none" />
          <path d="M 25 100 Q 100 70 175 100" stroke="#3a2a20" strokeWidth="15" fill="none" />
          <path d="M 30 130 Q 100 100 170 130" stroke="#3a2a20" strokeWidth="12" fill="none" />
          
          {/* Distorted eyes */}
          <ellipse cx="70" cy="90" rx="20" ry="25" fill="#0a0000" />
          <ellipse cx="130" cy="85" rx="25" ry="20" fill="#0a0000" />
          <circle cx="70" cy="90" r="8" fill="#ff0000" style={{ filter: 'drop-shadow(0 0 10px red)' }} />
          <circle cx="130" cy="85" r="8" fill="#ff0000" style={{ filter: 'drop-shadow(0 0 10px red)' }} />
          
          {/* Gaping mouth */}
          <ellipse cx="100" cy="160" rx="35" ry="30" fill="#0a0000" />
          {[...Array(8)].map((_, i) => (
            <rect key={i} x={72 + i * 7} y="135" width="4" height="20" fill="#4a3a30" transform={`rotate(${(i - 3.5) * 5}, ${74 + i * 7}, 145)`} />
          ))}
        </svg>
        <div className="absolute text-3xl text-white font-mono mt-80 animate-pulse">
          T̷I̵M̷E̶ ̵F̷O̸R̷ ̵Y̷O̸U̷R̶ ̵M̷E̶D̵I̷C̷I̸N̷E̶
        </div>
      </div>,
      
      // Type 3: Mary's face
      <div key="3" className="fixed inset-0 bg-black z-[280] flex flex-col items-center justify-center">
        <svg viewBox="0 0 180 220" className="w-64 h-auto opacity-60">
          <ellipse cx="90" cy="90" rx="65" ry="80" fill="#4a4a4a" />
          {/* Sunken eyes */}
          <ellipse cx="60" cy="75" rx="18" ry="22" fill="#1a1a1a" />
          <ellipse cx="120" cy="75" rx="18" ry="22" fill="#1a1a1a" />
          {/* Hollow stare */}
          <circle cx="60" cy="78" r="5" fill="#333" />
          <circle cx="120" cy="78" r="5" fill="#333" />
          {/* Mouth */}
          <path d="M 55 130 Q 90 145 125 130" stroke="#2a2a2a" strokeWidth="3" fill="none" />
          {/* Hair */}
          <path d="M 25 50 Q 30 20 90 10 Q 150 20 155 50 L 160 180 Q 90 200 20 180 Z" fill="#2a2a2a" opacity="0.8" />
        </svg>
        <div className="text-white text-2xl font-serif mt-8 text-center max-w-md animate-pulse">
          "James... why did you kill me?"
        </div>
        <div className="text-red-500 text-4xl font-bold mt-4" style={{ textShadow: '0 0 20px red' }}>
          WHY?
        </div>
      </div>,
      
      // Type 4: The hole
      <div key="4" className="fixed inset-0 bg-black z-[280] flex items-center justify-center">
        <div className="text-center">
          <div 
            className="w-64 h-64 rounded-full mx-auto mb-8"
            style={{
              background: 'radial-gradient(circle, #000 0%, #0a0000 40%, #1a0000 60%, #2a0000 80%, #000 100%)',
              boxShadow: 'inset 0 0 100px rgba(100,0,0,0.8), 0 0 50px rgba(0,0,0,0.9)',
              animation: 'holePulse 1s ease-in-out infinite'
            }}
          />
          <div className="text-gray-500 text-xl font-mono">
            THERE WAS A HOLE HERE.
          </div>
          <div className="text-gray-600 text-xl font-mono mt-2">
            IT'S GONE NOW.
          </div>
        </div>
      </div>
    ];
    
    return jumpscares[type % jumpscares.length];
  };

  const EndingSequenceOverlay = () => (
    <div className="fixed inset-0 bg-black z-[300] flex items-center justify-center">
      {endingSequence === 1 && (
        <div className="text-center">
          <div className="text-red-800 text-xl font-mono animate-pulse mb-4">
            ANALYZING SINS...
          </div>
          <div className="w-64 h-2 bg-gray-900 rounded overflow-hidden">
            <div className="h-full bg-red-900 animate-pulse" style={{ width: '60%', animation: 'loadBar 2s ease-in-out' }} />
          </div>
        </div>
      )}
      {endingSequence === 2 && (
        <div className="text-white text-5xl font-serif tracking-[0.3em]">
          {[..."JUDGMENT"].map((char, i) => (
            <span 
              key={i} 
              className="inline-block"
              style={{ 
                animation: `letterReveal 0.5s ease-out forwards`,
                animationDelay: `${i * 0.1}s`,
                opacity: 0
              }}
            >
              {char}
            </span>
          ))}
        </div>
      )}
      {endingSequence === 3 && (
        <div className="text-center">
          <svg viewBox="0 0 100 100" className="w-32 h-32 mx-auto mb-4">
            <polygon points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" fill="none" stroke="#600" strokeWidth="2" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="#600" strokeWidth="1" />
          </svg>
          <div className="text-gray-600 text-lg font-serif">
            The town has rendered its verdict...
          </div>
        </div>
      )}
    </div>
  );

  const EndingScreen = () => {
    const endings = {
      leave: {
        title: "LEAVE",
        subtitle: "You found the truth. You can go now.",
        text: "The fog lifts. The town releases you—for now. But as you drive away, you glance in the rearview mirror. For just a moment, you see her standing at the edge of town, watching. The road stretches endlessly before you. You know you'll never truly leave. Silent Hill lives in your dreams now. In your guilt. In your memories. Some doors, once opened, can never be closed.",
        color: "text-gray-300",
        bg: "from-gray-700 via-gray-800 to-black"
      },
      maria: {
        title: "MARIA",
        subtitle: "You couldn't let go. You found someone new.",
        text: "She looks just like her. Acts almost like her. But she's not her, is she? You leave together, her hand warm in yours. She smiles—that smile that's almost right. As you drive, she coughs. Just once. You pretend not to notice. 'I'm so happy we're together,' she says. 'Promise you'll never leave me.' You promise. Like you promised before. The cycle begins again.",
        color: "text-pink-300",
        bg: "from-pink-900 via-red-900 to-black"
      },
      inwater: {
        title: "IN WATER",
        subtitle: "The weight was too much to bear.",
        text: "You drive to Toluca Lake one final time. Mary's letter rests on the passenger seat, worn from reading. The water is dark and still. You know what you have to do. The car enters slowly, water seeping through the doors. It's cold. So cold. But as the darkness closes in, you feel something like peace. The guilt releases its grip. At last, you'll be together. Just like you promised.",
        color: "text-blue-300",
        bg: "from-blue-900 via-slate-900 to-black"
      },
      rebirth: {
        title: "REBIRTH",
        subtitle: "The ritual demands everything.",
        text: "You found it—the Crimson Ceremony. In the abandoned church, you gather the items of power: the White Chrism, the Book of Lost Memories, the Obsidian Goblet, the Crimson Tome. You row across the lake to the forgotten island. The words come to you as if from a dream. The god of this place demands sacrifice. But to see her again... to hold her one more time... wouldn't you pay any price?",
        color: "text-red-400",
        bg: "from-red-900 via-red-950 to-black"
      },
      dog: {
        title: "DOG",
        subtitle: "The truth behind everything.",
        text: "In a small observation room behind the hotel, you find it: a Shiba Inu operating an elaborate control panel. Monitors display every nightmare you endured, every monster you faced. The dog looks at you and barks happily, tail wagging. A cheerful J-pop song begins to play. Credits roll. Was it all... a game? The dog seems very proud of itself. Good boy.",
        color: "text-yellow-300",
        bg: "from-yellow-800 via-amber-900 to-black"
      }
    };

    const e = endings[ending] || endings.leave;
    
    return (
      <div className={`min-h-screen bg-gradient-to-b ${e.bg} flex flex-col items-center justify-center p-8 relative overflow-hidden`}>
        {/* Background animations */}
        {ending === 'inwater' && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(60)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-blue-400"
                style={{
                  width: `${3 + Math.random() * 8}px`,
                  height: `${3 + Math.random() * 8}px`,
                  left: `${Math.random() * 100}%`,
                  opacity: 0.15,
                  animation: `bubbleRise ${8 + Math.random() * 12}s linear infinite`,
                  animationDelay: `${Math.random() * 8}s`
                }}
              />
            ))}
          </div>
        )}
        
        {ending === 'rebirth' && (
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <svg viewBox="0 0 200 200" className="w-[700px] h-[700px]" style={{ animation: 'rotateSlow 60s linear infinite' }}>
              <polygon points="100,10 120,80 190,80 135,120 155,190 100,145 45,190 65,120 10,80 80,80" fill="none" stroke="#ff0000" strokeWidth="1" />
              <circle cx="100" cy="100" r="90" fill="none" stroke="#ff0000" strokeWidth="1" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="#ff0000" strokeWidth="0.5" />
            </svg>
          </div>
        )}
        
        {ending === 'dog' && (
          <div className="absolute top-10 left-10 text-6xl animate-bounce">🐕</div>
        )}
        
        <div className="max-w-2xl text-center relative z-10">
          <h1 
            className={`text-7xl font-bold mb-4 ${e.color} tracking-[0.4em]`} 
            style={{ textShadow: '0 0 40px currentColor', fontFamily: 'serif' }}
          >
            {e.title}
          </h1>
          <p className={`text-lg ${e.color} opacity-50 mb-8 tracking-[0.2em] italic`}>
            {e.subtitle}
          </p>
          <p className={`text-base ${e.color} leading-loose opacity-75`} style={{ fontFamily: 'serif' }}>
            {e.text}
          </p>
          
          <button
            onClick={resetGame}
            className="mt-16 px-10 py-3 bg-black/50 text-gray-400 rounded border border-gray-800 hover:bg-gray-900 hover:border-gray-600 transition-all tracking-[0.2em] text-sm"
          >
            TRY AGAIN?
          </button>
        </div>
        
        <div className="absolute bottom-8 text-gray-700 text-xs tracking-widest">
          SCORE: {score}/{currentQuestions.length} | CORRUPTION: {Math.floor((horrorLevel / 15) * 100)}%
        </div>
      </div>
    );
  };

  // ============== MAIN RENDER ==============
  
  const glitchClass = glitchText ? 'animate-pulse' : '';
  const shakeClass = screenShake ? 'animate-shake' : '';
  const flickerClass = flickering ? 'opacity-0' : 'opacity-100';

  return (
    <div 
      ref={containerRef}
      className={`min-h-screen ${getBackgroundStyle()} transition-all duration-700 ${shakeClass} ${flickerClass} overflow-hidden relative`}
      style={{ 
        fontFamily: horrorLevel < 4 ? "'Comic Sans MS', 'Chalkboard', cursive" : "'Courier New', monospace",
        transform: `rotate(${rotatingRoom}deg)`,
        filter: invertColors ? 'invert(1) hue-rotate(180deg)' : `blur(${distortionLevel * 0.2}px)`,
        transition: 'transform 3s ease-in-out, filter 0.15s'
      }}
    >
      {/* Global Styles */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0) rotate(0); }
          10% { transform: translateX(-4px) rotate(-0.5deg); }
          20% { transform: translateX(4px) rotate(0.5deg); }
          30% { transform: translateX(-4px) rotate(-0.5deg); }
          40% { transform: translateX(4px) rotate(0.5deg); }
          50% { transform: translateX(-4px) rotate(-0.5deg); }
          60% { transform: translateX(4px) rotate(0.5deg); }
          70% { transform: translateX(-4px) rotate(-0.5deg); }
          80% { transform: translateX(4px) rotate(0.5deg); }
          90% { transform: translateX(-2px) rotate(-0.25deg); }
        }
        .animate-shake { animation: shake 0.3s ease-in-out; }
        @keyframes staticFlicker {
          0% { opacity: 0.3; transform: translateX(0); }
          25% { opacity: 0.5; transform: translateX(-1px); }
          50% { opacity: 0.2; transform: translateX(1px); }
          75% { opacity: 0.6; transform: translateX(-1px); }
          100% { opacity: 0.3; transform: translateX(0); }
        }
        @keyframes drip {
          0% { transform: translateY(-100%) scaleY(0.8); }
          100% { transform: translateY(0) scaleY(1); }
        }
        @keyframes poolSpread {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 0.7; }
        }
        @keyframes fogDrift {
          0%, 100% { transform: scale(1) translate(0, 0); }
          33% { transform: scale(1.05) translate(2%, 1%); }
          66% { transform: scale(0.98) translate(-1%, 2%); }
        }
        @keyframes reachFromLeft {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(80px); }
        }
        @keyframes reachFromBottom {
          0%, 100% { transform: rotate(-90deg) translateX(0); }
          50% { transform: rotate(-90deg) translateX(50px); }
        }
        @keyframes reachFromAbyss {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-40px); }
        }
        @keyframes eyePulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes shadowPeekleft {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(40px); }
        }
        @keyframes shadowPeekright {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-40px); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeInWriting {
          0% { opacity: 0; transform: scale(0.8) rotate(var(--rotation, 0deg)); }
          100% { opacity: 0.7; transform: scale(1) rotate(var(--rotation, 0deg)); }
        }
        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }
        @keyframes vhsBar {
          0%, 100% { opacity: 0; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(10px); }
        }
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-1%, -1%); }
          20% { transform: translate(1%, 1%); }
          30% { transform: translate(-1%, 1%); }
          40% { transform: translate(1%, -1%); }
          50% { transform: translate(-1%, 0); }
          60% { transform: translate(1%, 0); }
          70% { transform: translate(0, 1%); }
          80% { transform: translate(0, -1%); }
          90% { transform: translate(1%, 1%); }
        }
        @keyframes letterReveal {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes loadBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes holePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes otherworldFlash {
          0% { opacity: 0; }
          10% { opacity: 0.8; }
          20% { opacity: 0; }
          30% { opacity: 0.6; }
          40% { opacity: 0; }
          50% { opacity: 0.9; }
          60%, 100% { opacity: 0; }
        }
        @keyframes bubbleRise {
          0% { transform: translateY(100vh) scale(1); }
          100% { transform: translateY(-10vh) scale(0.5); }
        }
        @keyframes fly0 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(10px, -10px); } }
        @keyframes fly1 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-8px, 12px); } }
        @keyframes fly2 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(12px, 8px); } }
      `}</style>

      {/* All overlays and effects */}
      {bloodLevel > 0 && <BloodDrip level={bloodLevel} />}
      {fogOpacity > 0 && <Fog opacity={fogOpacity} />}
      {rustLevel > 0 && <RustOverlay level={rustLevel} />}
      {staticOverlay > 0 && <StaticOverlay intensity={staticOverlay} />}
      {vhsEffect && <VHSEffect />}
      {grainIntensity > 0 && <GrainOverlay intensity={grainIntensity} />}
      {chainFence && <ChainFence />}
      {cracks.length > 0 && <Cracks cracks={cracks} />}
      {shadowFigures.length > 0 && <ShadowFigures figures={shadowFigures} />}
      {cornerEyes.length > 0 && <CornerEyes eyes={cornerEyes} />}
      {showHands && <ReachingHands />}
      {writingOnWall.length > 0 && <WallWritings writings={writingOnWall} />}
      {bloodFootprints.length > 0 && <BloodFootprints footprints={bloodFootprints} />}
      {floorHole && <FloorHole />}
      
      {/* Characters */}
      {showPyramidHead && <PyramidHeadFigure />}
      {showNurse && <NurseFigure />}
      {showLyingFigure && <LyingFigure />}
      {showMannequin && <Mannequin />}
      
      {/* UI Elements */}
      {showRadio && <Radio staticLevel={radioStatic} />}
      {showSeal && <SealOfMetatron />}
      {letterAppear && <LetterFromMary />}
      {fakeErrors.length > 0 && <FakeErrorWindows errors={fakeErrors} />}
      {subliminalFlash && <SubliminalFlash content={subliminalFlash} />}
      {photoFlash && <PhotoFlash />}
      {otherworldTransition && <OtherworldTransition />}
      {showJumpscare && <Jumpscare type={jumpscareType} />}
      {fadeToBlack && endingSequence > 0 && <EndingSequenceOverlay />}
      
      {/* Messages */}
      {showMessage && (
        <div 
          className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[180] pointer-events-none"
        >
          <div 
            className="text-3xl md:text-4xl text-red-500 font-bold px-8 py-4 rounded border border-red-900/50"
            style={{ 
              textShadow: '0 0 20px red, 0 0 40px darkred',
              background: 'rgba(0,0,0,0.8)',
              animation: 'pulse 0.5s ease-in-out infinite'
            }}
          >
            {showMessage}
          </div>
        </div>
      )}

      {/* Siren indicator */}
      {sirenActive && (
        <div className="fixed top-4 left-4 z-[190] flex items-center gap-3">
          <div className="w-4 h-4 bg-red-600 rounded-full" style={{ animation: 'pulse 0.5s ease-in-out infinite' }} />
          <span className="text-red-500 text-sm font-mono tracking-wider">⚠ OTHERWORLD TRANSITION ⚠</span>
        </div>
      )}

      {/* ============== INTRO SCREEN ============== */}
      {gameState === 'intro' && (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
          <div className="relative">
            <Mascot />
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <span 
                  key={i}
                  className="absolute text-2xl"
                  style={{
                    left: `${-30 + Math.random() * 160}%`,
                    top: `${-30 + Math.random() * 160}%`,
                    animation: `bounce 1s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`
                  }}
                >
                  {['✨', '🌟', '💖', '🎀', '🌈', '🦋', '🌸', '💫', '⭐', '🎈'][i]}
                </span>
              ))}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-pink-500 mt-8 mb-3 text-center">
            🌸 Buddy's Super Fun Quiz! 🌸
          </h1>
          <p className="text-lg md:text-xl text-purple-400 mb-8 text-center max-w-md">
            Test your knowledge with our adorable mascot! Ready for some fun trivia? 💕
          </p>
          
          <button
            onClick={startGame}
            className="px-10 py-5 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 text-white text-2xl font-bold rounded-full shadow-xl hover:scale-110 transition-all active:scale-95"
            style={{ 
              boxShadow: '0 0 40px rgba(255,150,200,0.5)',
              animation: 'pulse 2s ease-in-out infinite'
            }}
          >
            🎮 Let's Play! 🎮
          </button>
          
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {['🌟', '🎈', '🌈', '🦋', '🌺', '🎀', '🍭', '🦄', '🎪', '🍬'].map((emoji, i) => (
              <span 
                key={i} 
                className="text-2xl md:text-3xl" 
                style={{ animation: `bounce 0.8s ease-in-out infinite`, animationDelay: `${i * 0.08}s` }}
              >
                {emoji}
              </span>
            ))}
          </div>
          
          <p className="mt-8 text-pink-400 text-sm">
            {allQuestions.length} questions in our trivia bank! 🎉
          </p>
        </div>
      )}

      {/* ============== PLAYING SCREEN ============== */}
      {gameState === 'playing' && currentQuestions.length > 0 && (
        <div className={`flex flex-col items-center justify-center min-h-screen p-4 md:p-8 ${corruptedUI ? 'skew-y-1' : ''} ${meltingUI ? 'animate-pulse' : ''}`}>
          {/* Mascot */}
          <div className={`mb-6 ${horrorLevel >= 7 ? 'animate-pulse' : ''}`}>
            <Mascot corrupted={horrorLevel >= 4} />
          </div>
          
          {/* Question Card */}
          <div 
            className={`backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-2xl w-full shadow-2xl transition-all duration-500 ${glitchClass}`}
            style={{ 
              backgroundColor: horrorLevel >= 7 ? 'rgba(5,0,0,0.95)' : horrorLevel >= 5 ? 'rgba(15,5,5,0.95)' : horrorLevel >= 3 ? 'rgba(30,20,20,0.9)' : 'rgba(255,255,255,0.92)',
              borderWidth: horrorLevel >= 3 ? '2px' : '0',
              borderColor: horrorLevel >= 6 ? '#3a0000' : horrorLevel >= 3 ? '#4a2020' : 'transparent',
              transform: corruptedUI ? `rotate(${(Math.sin(Date.now() / 1000) * 1.5)}deg)` : 'none',
              boxShadow: horrorLevel >= 5 ? '0 0 60px rgba(80,0,0,0.6), inset 0 0 30px rgba(50,0,0,0.3)' : undefined
            }}
          >
            {/* Progress */}
            <div className="flex justify-between mb-4 text-xs md:text-sm">
              <span className={horrorLevel >= 4 ? 'text-red-400' : 'text-gray-500'}>
                {horrorLevel >= 6 
                  ? `Q̷.̵ ̶${questionIndex + 1}/${currentQuestions.length}`
                  : `Question ${questionIndex + 1}/${currentQuestions.length}`}
              </span>
              <span className={horrorLevel >= 4 ? 'text-red-400' : 'text-gray-500'}>
                {horrorLevel >= 7 
                  ? `S̷c̵o̶r̷e̵:̷ ̴${score}` 
                  : `Score: ${score}`}
              </span>
            </div>
            
            {/* Progress bar */}
            <div className="w-full h-2 bg-gray-300 rounded-full mb-6 overflow-hidden" style={{ backgroundColor: horrorLevel >= 4 ? '#1a0a0a' : undefined }}>
              <div 
                className="h-full transition-all duration-700 rounded-full"
                style={{ 
                  width: `${((questionIndex) / currentQuestions.length) * 100}%`,
                  backgroundColor: horrorLevel >= 5 ? '#6a0000' : horrorLevel >= 3 ? '#8B0000' : '#ec4899'
                }}
              />
            </div>
            
            {/* Question */}
            <h2 
              className={`text-xl md:text-2xl font-bold mb-6 text-center transition-colors duration-500 min-h-[4rem] ${horrorLevel >= 4 ? 'text-red-300' : 'text-gray-800'} ${glitchClass}`}
            >
              {horrorLevel >= 3 ? typewriterText : currentQuestions[questionIndex]?.question}
              {horrorLevel >= 3 && <span className="animate-pulse ml-1">|</span>}
            </h2>
            
            {/* Answers */}
            <div className="grid grid-cols-1 gap-3">
              {currentQuestions[questionIndex]?.answers.map((answer, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  disabled={isTransitioning}
                  className={`p-4 rounded-xl text-base md:text-lg font-medium transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${
                    horrorLevel >= 6 
                      ? 'bg-gray-900/90 text-red-300 hover:bg-red-900/70 border border-red-900/50' 
                      : horrorLevel >= 4
                        ? 'bg-gray-800/90 text-gray-200 hover:bg-gray-700/90 border border-gray-700'
                        : horrorLevel >= 2
                          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          : 'bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 hover:from-pink-200 hover:to-purple-200'
                  }`}
                  style={corruptedUI ? { 
                    transform: `rotate(${(Math.random() - 0.5) * 3}deg) translateX(${(Math.random() - 0.5) * 8}px)` 
                  } : {}}
                >
                  {horrorLevel < 3 && (
                    <span className="mr-2">{['🅰️', '🅱️', '©️', '🅳'][i]}</span>
                  )}
                  {answer}
                </button>
              ))}
            </div>
          </div>

          {/* Status messages */}
          {horrorLevel >= 3 && (
            <div className="mt-6 text-center">
              <p className={`text-sm transition-colors duration-500 ${horrorLevel >= 5 ? 'text-red-500' : 'text-gray-500'} ${glitchClass}`}>
                {horrorLevel >= 8 
                  ? "T̵̢H̵̛E̶̡R̷̨E̵ ̷I̶S̵ ̸N̷O̶ ̵E̷S̵C̶A̷P̷E̵" 
                  : horrorLevel >= 6 
                    ? "Something is very wrong..." 
                    : horrorLevel >= 4
                      ? "The fog is getting thicker..."
                      : "Keep going..."}
              </p>
            </div>
          )}

          {/* Heartbeat indicator */}
          {heartbeat && (
            <div className="fixed bottom-4 left-4 flex items-center gap-2 z-[100]">
              <div 
                className="text-red-600 text-2xl"
                style={{ 
                  animation: `pulse ${Math.max(0.3, 1 / heartbeatIntensity)}s ease-in-out infinite`,
                  textShadow: '0 0 15px red'
                }}
              >
                ♥
              </div>
              <span className="text-red-400 text-xs font-mono">
                {Math.floor(60 * heartbeatIntensity)} BPM
              </span>
            </div>
          )}

          {/* Horror level indicator */}
          {horrorLevel >= 4 && (
            <div className="fixed bottom-4 right-4 text-xs font-mono z-[100]" style={{ color: `rgb(${100 + horrorLevel * 10}, 0, 0)` }}>
              CORRUPTION: {Math.floor((horrorLevel / 15) * 100)}%
            </div>
          )}
        </div>
      )}

      {/* ============== ENDING SCREEN ============== */}
      {gameState === 'ending' && <EndingScreen />}
    </div>
  );
};

export default SilentHillQuiz;
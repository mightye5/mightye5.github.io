       var slider = document.getElementById("myRange");
var output = document.getElementById("sfxVolumeValue");

output.innerHTML = slider.value;
var sfxVolume = slider.value / 100;
slider.oninput = function() {
  output.innerHTML = this.value;
  sfxVolume = slider.value / 100;
  console.log("SFX Volume set to: " + sfxVolume);
}
let musicGainNode;
var musicVolume = 0.5;
var musicSlider = document.getElementById("musicRange");
var musicOutput = document.getElementById("musicVolumeValue");

// Initialize the music volume display
if (musicOutput) musicOutput.innerHTML = musicSlider.value;

// Add music volume slider listener
if (musicSlider) {
    musicSlider.oninput = function() {
        musicOutput.innerHTML = this.value;
        musicVolume = this.value / 100;
        if (musicGainNode) {
            musicGainNode.gain.value = musicVolume;
        }
        console.log("Music Volume set to: " + musicVolume);
    }
}

       // ================ GAME STATE VARIABLES ================
        // Basic game currency and costs 
        window.count =  0;                  // Player's current money
        let cost1 = 10,                 // Worker cost
            cost2 = 25,                 // Manager cost
            cost3 = 15,                 // Click upgrade cost
            cost4 = 100,                // director cost
            cost5 = 225,               // VP cost
            cost6 = 500,               // COO cost
            cost7 = 1250,                // CEO cost
            cost8 = 2275,                 // Chairman cost
            cost9 = 5000,                 // Milkshake Oracle cost
            cost10 = 12500,               // Shadow Fryer cost
            cost11 = 17500,               // Keeper of the Hidden Feast cost
            cost12 = 22500,              // Verdant Keeper cost
            cost13 = 50000,              // Emulsifier Supreme cost
            cost14 = 125000,             // Flame Whisperer cost
            cost15 = 200000,             // Cheese Chancellor cost
            cost16 = 375000,            // High Priest cost
            cost17 = 525000,            // Golden Archmage cost
            cost18 = 1000000,           // Patty Matriarch cost
            cost19 = 5000000,           // Grand Grillmaster cost
            cost20 = 20;            // Click multiply cost
        // Game mechanics variables
        let mps = 0,                    // Money per second
            worker = 1.5,               // Base manager production
            clicks = 1,                 // Money per click
            manager = 5,
            clickamount = 2,
            director = 7.5,
            VP = 10,
            COO = 17.5,
            ceo = 50,
            chairman = 125,
            oracle = 250,
            fryer = 400,
            feast = 850,
            verdant = 1250,
            emulsifier = 1700,
            whisperer = 2900,
            chancellor = 5000,
            priest = 10000,
            archmage = 25000,
            matriarch = 55000,
            grillmaster = 250000;
        // Upgrade counters
        var M = 0,                      // Number of workers
            M2 = 0,                     // Number of managers
            M3 = 0,                     // Number of click upgrades
            M4 = 0,                     // Number of directors
            M5 = 0,                     // Number of VPs
            M6 = 0,                     // Number of COOs
            M7 = 0,                     // Number of CEOs 
            M8 = 0,                     // Number of Chairmen
            M9 = 0,                     // Number of Milkshake Oracles
            M10 = 0,                    // Number of Shadow Fryers
            M11 = 0,                    // Number of Keepers of the Hidden Feast
            M12 = 0,                    // Number of Verdant Keepers
            M13 = 0,                    // Number of Emulsifier Supremes
            M14 = 0,                    // Number of Flame Whisperers
            M15 = 0,                    // Number of Cheese Chancellors
            M16 = 0,                    // Number of High Priests
            M17 = 0,                    // Number of Golden Archmages
            M18 = 0,                    // Number of Patty Matriarchs
            M19 = 0,                    // Number of Grand Grillmasters
            M20 = 0;            // Number of Click Multipliers
        // Upgrade status
          let  upg1 = 0,                   // Coffee upgrade status
            upg3 = 0;                   // Ice cream machine upgrade status
            upg8 = 0,
            upg9 = 0,
            upg10 = 0,
            upg11 = 0,
            upg12 = 0,
            upg13 = 0,
            upg14 = 0,
            upg15 = 0,
            upg16 = 0,
            upg17 = 0,
            upg18 = 0,
            upg19 = 0,
            upg20 = 0,
            upg21 = 0,
            upg22 = 0,
            upg23 = 0,
            upg24 = 0,
            upg25 = 0,
            upg26 = 0,
            upg27 = 0,
            upg28 = 0,
            upg29 = 0,
            upg30 = 0,
            upg31 = 0,
            upg39 = 0,
            upg40 = 0,
            upg41 = 0,
            upg42 = 0;
        // Special upgrade costs
        let upgp1 = 150;                 // Coffee upgrade cost
        let upgp2 = 100000;           // Golden burger cost
        let upgp3 = 15000;              // Ice cream machine upgrade cost
        let upgp4 = 500000,
        upgp5 = 800000,
        upgp6 = 1000000,
        upgp7 = 1250000;
        let upgp8 = 25000,
    upgp9 = 75000,
    upgp10 = 100000,
    upgp11 = 175000,
    upgp12 = 225000,
    upgp13 = 300000,
    upgp14 = 500000,
    upgp15 = 750000,
    upgp16 = 1000000,
    upgp17 = 1250000,
    upgp18 = 1550000,
    upgp19 = 2000000,
    upgp20 = 3500000,
    upgp21 = 6250000,
    upgp22 = 10250000,
    upgp23 = 15750000,
    upgp24 = 22500000,
    upgp25 = 55000000,
    upgp26 = 125000000,
    upgp27 = 250000000,
    upgp28 = 500000000,
    upgp29 = 750000000,
    upgp30 = 1750000000,
    upgp31 = 2000000000,
    upgp32 = 2500000000,
    upgp33 = 3000000000,
    upgp34 = 3500000000,
    upgp35 = 4000000000,
    upgp36 = 4500000000,
    upgp37 = 5000000000,
    upgp38 = 5500000000,
    upgp39 = 600000,
    upgp40 = 1750000,
    upgp41 = 13000000,
    upgp42 = 175000000;
        // Special features
        let golden_burger = 1;          // Golden burger multiplier
        let moneymultiplier = 1;        // Global money multiplier
        let ablepres = 0;               // Prestige system (not implemented)
        let franchises = 1;             // How many franchises you have
        let fcost = 500000;            // The cost of a franchise
        let totalclicks = 0;
        let totaltime = 0;
        let bimage = 0;
        let dark_mode = false;          // Dark mode toggle
        //Everything Ice cream related
         let ice = 0,                             // Player's current ice creams
            ips = 0,                             // how many ice creams you get per second
            icost1 = 50,                          // The first Ice cream upgrade cost     
            icost2 = 75,                         // The second Ice cream upgrade cost 
            icost3 = 100,                        // The third Ice cream upgrade cost 
            icost4 = 150,                        // The fourth Ice cream upgrade cost 
            icost5 = 200,                        // The fifth Ice cream upgrade cost
            icost6 = 250,                        // The sixth Ice cream upgrade cost
            icost7 = 300,
            icost8 = 350,
            icost9 = 400,
            icost10 = 450,
            icost11 = 500,
            icost12 = 550,
            icost13 = 600,
            icost14 = 650,
            iceupg1 = 0,            // whether you have the first ice cream upgrade or not
            iceupg2 = 0,           // whether you have the second ice cream upgrade or not
            iceupg3 = 0,            // whether you have the third ice cream upgrade or not
            iceupg4 = 0,           // whether you have the fourth ice cream upgrade or not
            iceupg5 = 0,            // whether you have the fifth ice cream upgrade or not
            iceupg6 = 0,            // whether you have the sixth ice cream upgrade or not
            iceupg7 = 0,
            iceupg8 = 0,
            iceupg9 = 0,
            iceupg10 = 0,
            iceupg11 = 0,
            iceupg12 = 0,
            iceupg13 = 0,
            iceupg14 = 0;

        let purchaseAmount = 1;     // quantity of employees to buy
        const employeeInfo = {
            extraButton: { base: 10, rate: 1.1, costVar: 'cost1', countVar: 'M' },
            Button2: { base: 25, rate: 1.1, costVar: 'cost2', countVar: 'M2' },
            Clickbutton: { base: 15, rate: 1.15, costVar: 'cost3', countVar: 'M3' },
            directorbutton: { base: 100, rate: 1.1, costVar: 'cost4', countVar: 'M4' },
            VPbutton: { base: 225, rate: 1.1, costVar: 'cost5', countVar: 'M5' },
            COObutton: { base: 500, rate: 1.1, costVar: 'cost6', countVar: 'M6' },
            ceobutton: { base: 1250, rate: 1.1, costVar: 'cost7', countVar: 'M7' },
            chairbutton: { base: 2275, rate: 1.1, costVar: 'cost8', countVar: 'M8' },
            MObutton: { base: 5000, rate: 1.1, costVar: 'cost9', countVar: 'M9' },
            SFbutton: { base: 12500, rate: 1.1, costVar: 'cost10', countVar: 'M10' },
            feastbutton: { base: 17500, rate: 1.1, costVar: 'cost11', countVar: 'M11' },
            verdantbutton: { base: 22500, rate: 1.1, costVar: 'cost12', countVar: 'M12' },
            ESbutton: { base: 50000, rate: 1.1, costVar: 'cost13', countVar: 'M13' },
            FWbutton: { base: 125000, rate: 1.1, costVar: 'cost14', countVar: 'M14' },
            CCbutton: { base: 200000, rate: 1.1, costVar: 'cost15', countVar: 'M15' },
            priestbutton: { base: 375000, rate: 1.1, costVar: 'cost16', countVar: 'M16' },
            GAbutton: { base: 525000, rate: 1.1, costVar: 'cost17', countVar: 'M17' },
            PMbutton: { base: 1000000, rate: 1.1, costVar: 'cost18', countVar: 'M18' },
            GGbutton: { base: 5000000, rate: 1.1, costVar: 'cost19', countVar: 'M19' },
            Clickbutton2: { base: 20, rate: 1.15, costVar: 'cost20', countVar: 'M20' }
        };

        function setPurchaseAmount(amount) {
            purchaseAmount = amount;
            updateAll();
        }
function ToggleDark() {
    dark_mode = !dark_mode;
    document.documentElement.classList.toggle("dark-mode");
}
        window.givemoney = function(amount) {
        if (typeof amount !== 'number' || amount < 0) {
            console.error("Invalid amount!");
            return;
        }
        window.count += amount;
        console.log(`Money updated: ${window.count}`);
        updateAll();
        };
        function computeEmployeeCost(id, quantity) {
            const info = employeeInfo[id];
            if (!info || quantity <= 0) return 0;
            let total = 0;
            for (let i = 0; i < quantity; i++) {
                total += Math.round(info.base * Math.pow(info.rate, window[info.countVar] + i) * 10) / 10;
            }
            return total;
        }

        function getMaxAffordable(id) {
            const info = employeeInfo[id];
            if (!info) return 0;
            let qty = 0;
            let current = window[info.countVar];
            let available = count;
            let cost = Math.round(info.base * Math.pow(info.rate, current) * 10) / 10;
            while (available >= cost) {
                available -= cost;
                current++;
                qty++;
                cost = Math.round(info.base * Math.pow(info.rate, current) * 10) / 10;
            }
            return qty;
        }
        // ================ AUDIO SYSTEM ================
        let audioContext;               // Web Audio API context
        let soundBuffers = {};          // Storage for loaded sound files
        let audioLoaded = false;        // Flag for audio system status

        /**
         * Initializes the audio system and loads all sound files
         * Uses async/await for proper sound loading
         */
        
        async function initAudio() {
            try {
                // Create audio context
                audioContext = new (window.AudioContext || window.webkitAudioContext)();

                // Define sound files to load
                const sounds = {
                    music: 'Sound-effects/busy-restaurant-dining-room-ambience-128466.mp3',
                    click: 'Sound-effects/mixkit-hard-typewriter-click-1119.mp3',
                    purchase: 'Sound-effects/purchase-successful-ingame-230550.mp3',
                    coffee: 'Sound-effects/cash-register-purchase-87313.mp3',
                    error: 'Sound-effects/error-sound-fx.wav',
                    golden: 'Sound-effects/you-win-sequence-2-183949.mp3',
                    achieve: 'Sound-effects/game-level-complete-143022.mp3',
                    save: 'Sound-effects/Gamesaved.mp3'
                };

                // Load all sounds in parallel
                const loadPromises = Object.entries(sounds).map(([key, path]) => 
                    fetch(path)
                        .then(response => response.arrayBuffer())
                        .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
                        .then(audioBuffer => {
                            soundBuffers[key] = audioBuffer;
                        })
                        .catch(e => console.warn(`Failed to load sound ${key}:`, e))
                );
                audioLoaded = true;
                await Promise.all(loadPromises);
                audioLoaded = true;

                // Start background music loop
musicSource = playSound('music', musicVolume);
            } catch (e) {
                console.warn('Web Audio API initialization failed:', e);
                audioLoaded = false;
            }
        }

        /**
         * Plays a sound effect with specified volume
         * @param {string} soundType - The type of sound to play (from soundBuffers)
         * @param {number} volume - Volume level from 0 to 1
         */
function playSound(soundType = 'click', volume = 0.5) {
    if (!audioContext || !audioLoaded || !soundBuffers[soundType]) {
        return;
    }

    try {
        const source = audioContext.createBufferSource();
        source.buffer = soundBuffers[soundType];

        const gainNode = audioContext.createGain();
        
        // Use different volume for music vs sound effects
        if (soundType === 'music') {
            musicGainNode = gainNode;
            gainNode.gain.value = musicVolume;
            source.loop = true;
        } else {
            gainNode.gain.value = volume * sfxVolume;
        }

        source.connect(gainNode);
        gainNode.connect(audioContext.destination);

        source.start(0);
        
        return source; // Return the source for potential future reference
    } catch (e) {
        console.warn('Error playing sound:', e);
    }
}
let musicSource;




        // ================ GAME MECHANICS ================

        /**
         * Handles worker purchase
         * Workers provide steady income over time
         */
        function extraAction() {
            let quantity = purchaseAmount === 'max' ? getMaxAffordable('extraButton') : purchaseAmount;
            let bought = 0;
            while (quantity > 0 && count >= cost1) {
                mps += worker;
                M += 1;
                if (upg8 == 1) {
                    const oldworkerAmount = parseFloat((manager).toFixed(1));
                    if (M2 >= 1) {
                        manager += parseFloat((M * 0.5).toFixed(1));
                        const workerincrease = (manager - oldworkerAmount);
                        mps += parseFloat((workerincrease).toFixed(1));
                    }
                }
                count -= cost1;
                cost1 = Math.round(10 * (1.1 ** M) * 10) / 10;
                quantity--;
                bought++;
            }
            if (bought > 0) {
                playSound('purchase', 0.4*sfxVolume);
            } else {
                playSound('error', 0.4*sfxVolume);
            }
            updateAll();
        }

        /**
         * Handles manager purchase
         * Managers provide more income than workers
         */
        function Action2() {
            let quantity = purchaseAmount === 'max' ? getMaxAffordable('Button2') : purchaseAmount;
            let bought = 0;
            while (quantity > 0 && count >= cost2) {
                mps += manager;
                M2 += 1;
                count -= cost2;
                cost2 = Math.round(25 * (1.1 ** M2) * 10) / 10;
                quantity--;
                bought++;
            }
            if (bought > 0) {
                playSound('purchase', 0.4*sfxVolume);
            } else {
                playSound('error', 0.4*sfxVolume);
            }
            updateAll();
        }

        /**
         * Upgrades the click value
         * Increases money earned per click
         */
        function clickadd() {
            let quantity = purchaseAmount === 'max' ? getMaxAffordable('Clickbutton') : purchaseAmount;
            let bought = 0;
            while (quantity > 0 && count >= cost3) {
                clicks += parseFloat((clickamount).toFixed(1));
                M3 += 1;
                count -= cost3;
                cost3 = Math.round(15 * (1.15 ** M3) * 10) / 10;
                quantity--;
                bought++;
            }
            if (bought > 0) {
                playSound('purchase', 0.4*sfxVolume);
            } else {
                playSound('error', 0.4*sfxVolume);
            }
            updateAll();
        }
  function clickmultiply() {
            let quantity = purchaseAmount === 'max' ? getMaxAffordable('Clickbutton2') : purchaseAmount;
            let bought = 0;
            while (quantity > 0 && count >= cost20) {
                clicks += clicks*0.1;
                clickamount += clicks*0.1;
                M20 += 1;
                count -= cost20;
                cost20 = Math.round(20 * (1.15 ** M20) * 10) / 10;
                quantity--;
                bought++;
                console.log(cost20)
            }
            if (bought > 0) {
                playSound('purchase', 0.4*sfxVolume);
            } else {
                playSound('error', 0.4*sfxVolume);
            }
            updateAll();
        }
        /**
         * Handles director purchase
         * directores provide significant income boost
         */
        function baction() {
            let quantity = purchaseAmount === 'max' ? getMaxAffordable('directorbutton') : purchaseAmount;
            let bought = 0;
            while (quantity > 0 && count >= cost4) {
                mps += director;
                M4 += 1;
                count -= cost4;
                cost4 = Math.round(100 * (1.1 ** M4) * 10) / 10;
                quantity--;
                bought++;
            }
            if (bought > 0) {
                playSound('purchase', 0.4*sfxVolume);
            } else {
                playSound('error', 0.4*sfxVolume);
            }
            updateAll();
        }

function vaction() {
    let quantity = purchaseAmount === 'max' ? getMaxAffordable('VPbutton') : purchaseAmount;
    let bought = 0;
    while (quantity > 0 && count >= cost5) {
        mps += VP;
        M5 += 1;
        count -= cost5;
        cost5 = Math.round((225 * (1.1 ** M5) * 10) / 10);
        quantity--;
        bought++;
    }
    if (bought > 0) {
        playSound('purchase', 0.4*sfxVolume);
    } else {
        playSound('error', 0.4*sfxVolume);
    }
    updateAll();
}
function COOaction() {
    let quantity = purchaseAmount === 'max' ? getMaxAffordable('COObutton') : purchaseAmount;
    let bought = 0;
    while (quantity > 0 && count >= cost6) {
        mps += COO;
        M6 += 1;
        count -= cost6;
        cost6 = Math.round((500 * (1.1 ** M6) * 10) / 10);
        quantity--;
        bought++;
    }
    if (bought > 0) {
        playSound('purchase', 0.4*sfxVolume);
    } else {
        playSound('error', 0.4*sfxVolume);
    }
    updateAll();
}
        function caction() {
            let quantity = purchaseAmount === 'max' ? getMaxAffordable('ceobutton') : purchaseAmount;
            let bought = 0;
            while (quantity > 0 && count >= cost7) {
                mps += ceo;
                M7 += 1;
                count -= cost7;
                cost7 = Math.round((1250 * (1.1 ** M7) * 10) / 10);
                quantity--;
                bought++;
            }
            if (bought > 0) {
                playSound('purchase', 0.4*sfxVolume);
            } else {
                playSound('error', 0.4*sfxVolume);
            }
            updateAll();
        }
        // Chairman Function
function chairaction() {
    let quantity = purchaseAmount === 'max' ? getMaxAffordable('chairbutton') : purchaseAmount;
    let bought = 0;
    while (quantity > 0 && count >= cost8) {
        mps += chairman;
        M8 += 1;
        count -= cost8;
        cost8 = Math.round((2275 * (1.1 ** M8) * 10) / 10);
        quantity--;
        bought++;
    }
    if (bought > 0) {
        playSound('purchase', 0.4*sfxVolume);
    } else {
        playSound('error', 0.4*sfxVolume);
    }
    updateAll();
}

// Milkshake Oracle Function
function MOaction() {
    let quantity = purchaseAmount === 'max' ? getMaxAffordable('MObutton') : purchaseAmount;
    let bought = 0;
    while (quantity > 0 && count >= cost9) {
        mps += oracle;
        M9 += 1;
        count -= cost9;
        cost9 = Math.round((5000 * (1.1 ** M9) * 10) / 10);
        quantity--;
        bought++;
    }
    if (bought > 0) {
        playSound('purchase', 0.4*sfxVolume);
    } else {
        playSound('error', 0.4*sfxVolume);
    }
    updateAll();
}

// Shadow Fryer Function
function SFaction() {
    let quantity = purchaseAmount === 'max' ? getMaxAffordable('SFbutton') : purchaseAmount;
    let bought = 0;
    while (quantity > 0 && count >= cost10) {
        mps += fryer;
        M10 += 1;
        count -= cost10;
        cost10 = Math.round((12500 * (1.1 ** M10) * 10) / 10);
        quantity--;
        bought++;
    }
    if (bought > 0) {
        playSound('purchase', 0.4*sfxVolume);
    } else {
        playSound('error', 0.4*sfxVolume);
    }
    updateAll();
}

// Keeper of the Hidden Feast Function
function feastaction() {
    let quantity = purchaseAmount === 'max' ? getMaxAffordable('feastbutton') : purchaseAmount;
    let bought = 0;
    while (quantity > 0 && count >= cost11) {
        mps += feast;
        M11 += 1;
        count -= cost11;
        cost11 = Math.round((17500 * (1.1 ** M11) * 10) / 10);
        quantity--;
        bought++;
    }
    if (bought > 0) {
        playSound('purchase', 0.4*sfxVolume);
    } else {
        playSound('error', 0.4*sfxVolume);
    }
    updateAll();
}

// Verdant Keeper Function
function verdantaction() {
    let quantity = purchaseAmount === 'max' ? getMaxAffordable('verdantbutton') : purchaseAmount;
    let bought = 0;
    while (quantity > 0 && count >= cost12) {
        mps += verdant;
        M12 += 1;
        count -= cost12;
        cost12 = Math.round((22500 * (1.1 ** M12) * 10) / 10);
        quantity--;
        bought++;
    }
    if (bought > 0) {
        playSound('purchase', 0.4*sfxVolume);
    } else {
        playSound('error', 0.4*sfxVolume);
    }
    updateAll();
}

// Emulsifier Supreme Function
function ESaction() {
    let quantity = purchaseAmount === 'max' ? getMaxAffordable('ESbutton') : purchaseAmount;
    let bought = 0;
    while (quantity > 0 && count >= cost13) {
        mps += emulsifier;
        M13 += 1;
        count -= cost13;
        cost13 = Math.round((50000 * (1.1 ** M13) * 10) / 10);
        quantity--;
        bought++;
    }
    if (bought > 0) {
        playSound('purchase', 0.4*sfxVolume);
    } else {
        playSound('error', 0.4*sfxVolume);
    }
    updateAll();
}

// Flame Whisperer Function
function FWaction() {
    let quantity = purchaseAmount === 'max' ? getMaxAffordable('FWbutton') : purchaseAmount;
    let bought = 0;
    while (quantity > 0 && count >= cost14) {
        mps += whisperer;
        M14 += 1;
        count -= cost14;
        cost14 = Math.round((125000 * (1.1 ** M14) * 10) / 10);
        quantity--;
        bought++;
    }
    if (bought > 0) {
        playSound('purchase', 0.4*sfxVolume);
    } else {
        playSound('error', 0.4*sfxVolume);
    }
    updateAll();
}

// Cheese Chancellor Function
function CCaction() {
    let quantity = purchaseAmount === 'max' ? getMaxAffordable('CCbutton') : purchaseAmount;
    let bought = 0;
    while (quantity > 0 && count >= cost15) {
        mps += chancellor;
        M15 += 1;
        count -= cost15;
        cost15 = Math.round((200000 * (1.1 ** M15) * 10) / 10);
        quantity--;
        bought++;
    }
    if (bought > 0) {
        playSound('purchase', 0.4*sfxVolume);
    } else {
        playSound('error', 0.4*sfxVolume);
    }
    updateAll();
}

// High Priest Function
function priestaction() {
    let quantity = purchaseAmount === 'max' ? getMaxAffordable('priestbutton') : purchaseAmount;
    let bought = 0;
    while (quantity > 0 && count >= cost16) {
        mps += priest;
        M16 += 1;
        count -= cost16;
        cost16 = Math.round((375000 * (1.1 ** M16) * 10) / 10);
        quantity--;
        bought++;
    }
    if (bought > 0) {
        playSound('purchase', 0.4*sfxVolume);
    } else {
        playSound('error', 0.4*sfxVolume);
    }
    updateAll();
}

// Golden Archmage Function
function GAaction() {
    let quantity = purchaseAmount === 'max' ? getMaxAffordable('GAbutton') : purchaseAmount;
    let bought = 0;
    while (quantity > 0 && count >= cost17) {
        mps += archmage;
        M17 += 1;
        count -= cost17;
        cost17 = Math.round((525000 * (1.1 ** M17) * 10) / 10);
        quantity--;
        bought++;
    }
    if (bought > 0) {
        playSound('purchase', 0.4*sfxVolume);
    } else {
        playSound('error', 0.4*sfxVolume);
    }
    updateAll();
}

// Patty Matriarch Function
function PMaction() {
    let quantity = purchaseAmount === 'max' ? getMaxAffordable('PMbutton') : purchaseAmount;
    let bought = 0;
    while (quantity > 0 && count >= cost18) {
        mps += matriarch;
        M18 += 1;
        count -= cost18;
        cost18 = Math.round((1000000 * (1.1 ** M18) * 10) / 10);
        quantity--;
        bought++;
    }
    if (bought > 0) {
        playSound('purchase', 0.4*sfxVolume);
    } else {
        playSound('error', 0.4*sfxVolume);
    }
    updateAll();
}

// Grand Grillmaster Function
function GGaction() {
    let quantity = purchaseAmount === 'max' ? getMaxAffordable('GGbutton') : purchaseAmount;
    let bought = 0;
    while (quantity > 0 && count >= cost19) {
        mps += grillmaster;
        M19 += 1;
        count -= cost19;
        cost19 = Math.round((5000000 * (1.1 ** M19) * 10) / 10);
        quantity--;
        bought++;
    }
    if (bought > 0) {
        playSound('purchase', 0.4*sfxVolume);
    } else {
        playSound('error', 0.4*sfxVolume);
    }
    updateAll();
}
        /**
         * Coffee upgrade - increases worker efficiency
         */
        // Update the upgrade1 function to handle the position shift
        function upgrade1() {
    if (count >= upgp1) {
        count -= upgp1;
    
        const oldworkerAmount = parseFloat((worker).toFixed(1));
        worker = parseFloat((worker * 2.5).toFixed(1));
        if (M >= 1) {
            const workerincrease = (worker - oldworkerAmount) * M;
            mps += parseFloat((workerincrease).toFixed(1));
        }

        // Just remove the button, not the container
        document.getElementById("upgrade1").remove();
     //   document.getElementById("upgrade1tooltipcontainer").remove();
        hideTooltip('upgrade1tooltip');

        // Store button in variable and check if it exists
        const upgrade3Button = document.getElementById("upgrade3");
        if (upgrade3Button) {
            upgrade3Button.style.display = 'flex';
        }

        // Update the restaurant image
        const franchiseImg = document.getElementById('Franchise1');
        if (franchiseImg) {
            franchiseImg.src = 'Restaurant-images/Restaurant+coffee.png';
        }

        upg1 = 1;
        playSound('coffee', 0.4*sfxVolume);
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade2() {
    const chesburger = document.querySelector('.image-button');
    if (count >= upgp2) {
        count -= upgp2;
        bimage += 1;
        golden_burger += 2;  // Double click value
        chesburger.style.backgroundImage = "url('Burger-images/GoldenBurger.png')";
        const upgrade4Button = document.getElementById("upgrade4");
        if (upgrade4Button) {
            upgrade4Button.style.display = 'flex';
        }
        // Remove the upgrade2 button instead of hiding it
        document.getElementById("upgrade2").remove();
        hideTooltip('upgrade2tooltip'); // Hide the tooltip

        playSound('golden', 0.6*sfxVolume);
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade3() {
    if (count >= upgp3) {
        count -= upgp3;
        upg3 = 1;
        ips = 1;


        const oldworkerAmount = parseFloat((manager).toFixed(1));
        manager = parseFloat((manager * 2.5).toFixed(1));
        if (M2 >= 1) {
            const workerincrease = (manager - oldworkerAmount) * M2;
            mps += parseFloat((workerincrease).toFixed(1));
        }

        const upgrade3Button = document.getElementById("upgrade3");
        document.getElementById('Managertooltip').textContent = "Earns $" + manager + " per second";
        if (upgrade3Button) {
            upgrade3Button.remove();
            hideTooltip('upgrade3tooltip'); // Hide the tooltip
        }
        document.getElementById("upgrade8").style.display = 'flex';
        // Update the restaurant image
        const franchiseImg = document.getElementById('Franchise1');
        if (franchiseImg) {
            franchiseImg.src = 'Restaurant-images/restaurantcoffee+ice.png';
        }

        // Move upgrade2 to the top position if it exists
        const upgrade2Button = document.getElementById("upgrade2");
        if (upgrade2Button) {
            upgrade2Button.style.order = "1";
        }
        playSound('coffee', 0.4*sfxVolume);
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade4() {
    const chesburger = document.querySelector('.image-button');
    if (count >= upgp4) {
        count -= upgp4;
        golden_burger += 2.5;  // Double click value
        chesburger.style.backgroundImage = "url('Burger-images/Diamondburger.png')";
        bimage += 1;
        // Remove the upgrade4 button instead of hiding it
        document.getElementById("upgrade4").remove();
        hideTooltip('upgrade4tooltip'); // Hide the tooltip
        const upgrade5Button = document.getElementById("upgrade5");
        if (upgrade5Button) {
            upgrade5Button.style.display = 'flex';
        }
        playSound('golden', 0.6*sfxVolume);
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade5() {
    const chesburger = document.querySelector('.image-button');
    if (count >= upgp5) {
        count -= upgp5;
        golden_burger += 3;  // Double click value
        chesburger.style.backgroundImage = "url('Burger-images/Sapphireburger.png')";
        bimage += 1;
        // Remove the upgrade5 button instead of hiding it
        document.getElementById("upgrade5").remove();
        hideTooltip('upgrade5tooltip'); // Hide the tooltip
        const upgrade6Button = document.getElementById("upgrade6");
        if (upgrade6Button) {
            upgrade6Button.style.display = 'flex';
        }
        playSound('golden', 0.6*sfxVolume);
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade6() {
  
    if (count >= upgp6) {
        count -= upgp6;
        golden_burger += 3.5;  // Double click value
        const chesburger = document.querySelector('.image-button');
        chesburger.style.backgroundImage = "url('Burger-images/Uraniumburger.png')";
        bimage += 1;
        // Remove the upgrade6 button instead of hiding it
        document.getElementById("upgrade6").remove();
        hideTooltip('upgrade6tooltip'); // Hide the tooltip
        const upgrade7Button = document.getElementById("upgrade7");
        if (upgrade7Button) {
            upgrade7Button.style.display = 'flex';
        }
        playSound('golden', 0.6*sfxVolume);
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade7() {
    const chesburger = document.querySelector('.image-button');
    if (count >= upgp7) {
        count -= upgp7;
        golden_burger += 4;  // Double click value
        chesburger.style.backgroundImage = "url('Burger-images/Obsidianburger.png')";
        bimage += 1;
        if (upg18 == 1) {
            document.getElementById("upgrade31").style.display = 'flex'; // Show the first secret menu item upgrade
        }
        // Remove the upgrade7 button instead of hiding it
        document.getElementById("upgrade7").remove();
        hideTooltip('upgrade7tooltip'); // Hide the tooltip

        playSound('golden', 0.6*sfxVolume);
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade8() {
    if (count >= upgp8) {
        count -= upgp8;
        upg8 = 1;
        const oldworkerAmount = parseFloat((manager).toFixed(1));
        if (M2 >= 1) {
            manager += parseFloat((M * 0.5).toFixed(1));
            const workerincrease = (manager - oldworkerAmount);
            mps += parseFloat((workerincrease).toFixed(1));
                 }
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById('Managertooltip').textContent = "Earns $" + manager + " per second";
        document.getElementById("upgrade8").remove();
        hideTooltip('upgrade8tooltip'); // Hide the tooltip
        document.getElementById("upgrade9").style.display = 'flex';
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade9() {
    if (count >= upgp9) {
        count -= upgp9;
        mps *= 1.5;
        upg9 = 1;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById("upgrade9").remove();
        hideTooltip('upgrade9tooltip'); // Hide the tooltip
        document.getElementById("upgrade10").style.display = 'flex';
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade10() {
    if (count >= upgp10) {
        count -= upgp10;
        upg10 = 1;
        VP *= 1.5;
        COO *= 1.5;
        ceo *= 1.5;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById('VPtooltip').textContent = "Earns $" + VP + " per second";
        document.getElementById('COOtooltip').textContent = "Earns $" + COO + " per second";
        document.getElementById('Ceotooltip').textContent = "Earns $" + ceo + " per second";
        document.getElementById("upgrade10").remove();
        hideTooltip('upgrade10tooltip'); // Hide the tooltip
        document.getElementById("upgrade11").style.display = 'flex';
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade11() {
    if (count >= upgp11 && M4 >= 50 && M5 >= 50) {
        count -= upgp11;
        M4 -= 50; // Deduct 50 Directors
        M5 -= 50; // Deduct 50 Vice Presidents
        upg11 = 1;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById("upgrade11").remove();
        hideTooltip('upgrade11tooltip'); // Hide the tooltip
        document.getElementById("upgrade12").style.display = 'flex';
        document.getElementById("MObutton").style.display = 'flex'; // Show Milkshake Oracle
        document.getElementById("SFbutton").style.display = 'flex'; // Show Shadow Fryer
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade12() {
    if (count >= upgp12) {
        count -= upgp12;
        upg12 = 1;
        ips *= 1.25;
        oracle *= 1.5;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById('MOtooltip').textContent = "Earns $" + oracle + " per second";
        document.getElementById("upgrade12").remove();
        hideTooltip('upgrade12tooltip'); // Hide the tooltip
        document.getElementById("upgrade13").style.display = 'flex';
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade13() {
    if (count >= upgp13) {
        count -= upgp13;
        upg13 = 1;
        COO += M9 * 0.05;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById('COOtooltip').textContent = "Earns $" + COO + " per second";
        document.getElementById("upgrade13").remove();
        hideTooltip('upgrade13tooltip'); // Hide the tooltip
        document.getElementById("upgrade14").style.display = 'flex';
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade14() {
    if (count >= upgp14) {
        count -= upgp14;
        upg14 = 1;
        mps *= 1.25;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById("upgrade14").remove();
        hideTooltip('upgrade14tooltip'); // Hide the tooltip
        document.getElementById("upgrade39").style.display = 'flex';
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade39() {
    if (count >= upgp39) {
        count -= upgp39;
        upg39 = 1;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById("upgrade39").remove();
        hideTooltip('upgrade39tooltip');
        document.getElementById("betteroracle").style.display = 'flex';
        document.getElementById("betterfryer").style.display = 'flex';
        document.getElementById("upgrade15").style.display = 'flex';
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade15() {
    if (count >= upgp15 && M7 >= 50 && M9 >= 50) {
        count -= upgp15;
        M7 -= 50; // Deduct 50 CEOs
        M9 -= 50; // Deduct 50 Oracles
        upg15 = 1;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById("upgrade15").remove();
        hideTooltip('upgrade15tooltip'); // Hide the tooltip
        document.getElementById("upgrade16").style.display = 'flex';
        document.getElementById("feastbutton").style.display = 'flex'; // Show Keeper of the Hidden Feast
        document.getElementById("verdantbutton").style.display = 'flex'; // Show Verdant Keeper
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}



function upgrade16() {
    if (count >= upgp16) {
        count -= upgp16;
        upg16 = 1;
        verdant *= 1.5;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById('Verdanttooltip').textContent = "Earns $" + verdant + " per second";
        document.getElementById("upgrade16").remove();
        hideTooltip('upgrade16tooltip'); // Hide the tooltip
        document.getElementById("upgrade17").style.display = 'flex';
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade17() {
    if (count >= upgp17) {
        count -= upgp17;
        upg17 = 1;
        fryer += M12 * 0.05;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById('SFtooltip').textContent = "Earns $" + fryer + " per second";
        document.getElementById("upgrade17").remove();
        hideTooltip('upgrade17tooltip'); // Hide the tooltip
        document.getElementById("upgrade18").style.display = 'flex';
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade18() {
    if (count >= upgp18) {
        count -= upgp18;
        upg18 = 1;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById("upgrade18").remove();
        hideTooltip('upgrade18tooltip'); // Hide the tooltip
        document.getElementById("upgrade40").style.display = 'flex';
        if (upg31 == 0 && bimage == 5) {
            document.getElementById("upgrade31").style.display = 'flex'; // Show the first secret menu item upgrade
        }
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade40() {
    if (count >= upgp40) {
        count -= upgp40;
        upg40 = 1;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById("upgrade40").remove();
        hideTooltip('upgrade40tooltip');
        document.getElementById("betterfeast").style.display = 'flex';
        document.getElementById("betterverdant").style.display = 'flex';
        document.getElementById("upgrade19").style.display = 'flex';
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}


function upgrade19() {
    if (count >= upgp19 && M12 >= 50 && M10 >= 50) {
        count -= upgp19;
        M12 -= 50; // Deduct 50 Verdant Keepers
        M10 -= 50; // Deduct 50 Shadow Fryers
        upg19 = 1;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById("upgrade19").remove();
        hideTooltip('upgrade19tooltip'); // Hide the tooltip
        document.getElementById("upgrade20").style.display = 'flex';
        document.getElementById("FWbutton").style.display = 'flex'; // Show Flame Whisperer
        document.getElementById("CCbutton").style.display = 'flex'; // Show Cheese Chancellor
        document.getElementById("ESbutton").style.display = 'flex'; // Show Emulsifier Supreme
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}



function upgrade20() {
    if (count >= upgp20) {
        count -= upgp20;
        upg20 = 1;
        whisperer *= 1.5;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById('FWtooltip').textContent = "Earns $" + whisperer + " per second";
        document.getElementById("upgrade20").remove();
        hideTooltip('upgrade20tooltip'); // Hide the tooltip
        document.getElementById("upgrade21").style.display = 'flex';
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade21() {
    if (count >= upgp21) {
        count -= upgp21;
        upg21 = 1;
        VP += M14 * 0.1;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById('VPtooltip').textContent = "Earns $" + VP + " per second";
        document.getElementById("upgrade21").remove();
        hideTooltip('upgrade21tooltip'); // Hide the tooltip
        document.getElementById("upgrade22").style.display = 'flex';
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade22() {
    if (count >= upgp22) {
        count -= upgp22;
        upg22 = 1;
        emulsifier *= 1.5;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById('EStooltip').textContent = "Earns $" + emulsifier + " per second";
        document.getElementById("upgrade22").remove();
        hideTooltip('upgrade22tooltip'); // Hide the tooltip
        document.getElementById("upgrade41").style.display = 'flex';
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade41() {
    if (count >= upgp41) {
        count -= upgp41;
        upg41 = 1;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById("upgrade41").remove();
        hideTooltip('upgrade41tooltip');
        document.getElementById("betterwhisperer").style.display = 'flex';
        document.getElementById("betterchancellor").style.display = 'flex';
        document.getElementById("upgrade23").style.display = 'flex';
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade23() {
    if (count >= upgp23 && M15 >= 50 && M14 >= 50) {
        count -= upgp23;
        M15 -= 50; // Deduct 50 Cheese Chancellors
        M14 -= 50; // Deduct 50 Flame Whisperers
        upg23 = 1;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById("upgrade23").remove();
        hideTooltip('upgrade23tooltip'); // Hide the tooltip
        document.getElementById("upgrade24").style.display = 'flex';
        document.getElementById("GAbutton").style.display = 'flex'; // Show Golden Archmage
        document.getElementById("priestbutton").style.display = 'flex'; // Show High Priest of the Golden Bun
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade24() {
    if (count >= upgp24) {
        count -= upgp24;
        upg24 = 1;
        archmage *= 1.5;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById('GAtooltip').textContent = "Earns $" + archmage + " per second";
        document.getElementById("upgrade24").remove();
        hideTooltip('upgrade24tooltip'); // Hide the tooltip
        document.getElementById("upgrade25").style.display = 'flex';
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade25() {
    if (count >= upgp25) {
        count -= upgp25;
        upg25 = 1;
        worker += archmage * 0.15;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById('Workertooltip').textContent = "Earns $" + worker + " per second";
        document.getElementById("upgrade25").remove();
        hideTooltip('upgrade25tooltip'); // Hide the tooltip
        document.getElementById("upgrade26").style.display = 'flex';
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade26() {
    if (count >= upgp26) {
        count -= upgp26;
        upg26 = 1;
        mps *= 1.35;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById("upgrade26").remove();
        hideTooltip('upgrade26tooltip'); // Hide the tooltip
        document.getElementById("upgrade42").style.display = 'flex';
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade42() {
    if (count >= upgp42) {
        count -= upgp42;
        upg42 = 1;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById("upgrade42").remove();
        hideTooltip('upgrade42tooltip');
        document.getElementById("betterarchmage").style.display = 'flex';
        document.getElementById("betterpriest").style.display = 'flex';
        document.getElementById("upgrade27").style.display = 'flex';
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade27() {
    if (count >= upgp27 && M17 >= 50 && M13 >= 50) {
        count -= upgp27;
        M17 -= 50; // Deduct 50 Archmages
        M13 -= 50; // Deduct 50 Emulsifier Supremes
        upg27 = 1;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById("upgrade27").remove();
        hideTooltip('upgrade27tooltip'); // Hide the tooltip
        document.getElementById("upgrade28").style.display = 'flex';
        document.getElementById("PMbutton").style.display = 'flex'; // Show Patty Matriarch
        document.getElementById("GGbutton").style.display = 'flex'; // Show Grand Grillmaster
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}
function upgrade28() {
    if (count >= upgp28) {
        count -= upgp28;
        upg28 = 1;
        matriarch *= 1.5;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById('PMtooltip').textContent = "Earns $" + matriarch + " per second";
        document.getElementById("upgrade28").remove();
        hideTooltip('upgrade28tooltip');
        document.getElementById("upgrade29").style.display = 'flex';
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade29() {
    if (count >= upgp29) {
        count -= upgp29;
        upg29 = 1;
        emulsifier += matriarch * 0.2;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById('EStooltip').textContent = "Earns $" + emulsifier + " per second";
        document.getElementById("upgrade29").remove();
        hideTooltip('upgrade29tooltip');
        document.getElementById("upgrade30").style.display = 'flex';
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade30() {
      playSound('error', 0.4);
    return;
    /* if (count >= upgp30) {
        count -= upgp30;
        upg30 = 1;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById("upgrade30").remove();
        hideTooltip('upgrade30tooltip');
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
        */
}
function upgrade31() {
    if (count >= upgp31) {
        count -= upgp31;
        upg31 = 1;
        golden_burger += 5.5;
        bimage += 1;
        const chesburger = document.querySelector('.image-button');
        chesburger.style.backgroundImage = "url('Burger-images/Prismburger.png')";
        document.getElementById("upgrade31").remove();
        hideTooltip('upgrade31tooltip');
        document.getElementById("upgrade32").style.display = 'flex';
        playSound('golden', 0.6*sfxVolume);
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade32() {
    if (count >= upgp32) {
        count -= upgp32;
        golden_burger += 6.5;
        bimage += 1;
        const chesburger = document.querySelector('.image-button');
        chesburger.style.backgroundImage = "url('Burger-images/Infernoburger.png')";
        document.getElementById("upgrade32").remove();
        hideTooltip('upgrade32tooltip');
        document.getElementById("upgrade33").style.display = 'flex';
        playSound('golden', 0.6*sfxVolume);
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade33() {
    if (count >= upgp33) {
        count -= upgp33;
        golden_burger += 7.5;
        bimage += 1;
        const chesburger = document.querySelector('.image-button');
        chesburger.style.backgroundImage = "url('Burger-images/Auroraburger.png')";
        document.getElementById("upgrade33").remove();
        hideTooltip('upgrade33tooltip');
        document.getElementById("upgrade34").style.display = 'flex';
        playSound('golden', 0.6*sfxVolume);
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade34() {
    if (count >= upgp34) {
        count -= upgp34;
        golden_burger += 9;
        bimage += 1;
        const chesburger = document.querySelector('.image-button');
        chesburger.style.backgroundImage = "url('Burger-images/Phoenixburger.png')";
        document.getElementById("upgrade34").remove();
        hideTooltip('upgrade34tooltip');
        document.getElementById("upgrade35").style.display = 'flex';
        playSound('golden', 0.6*sfxVolume);
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade35() {
    if (count >= upgp35) {
        count -= upgp35;
        golden_burger += 10;
        bimage += 1;
        const chesburger = document.querySelector('.image-button');
        chesburger.style.backgroundImage = "url('Burger-images/Galacticburger.png')";
        document.getElementById("upgrade35").remove();
        hideTooltip('upgrade35tooltip');
        document.getElementById("upgrade36").style.display = 'flex';
        playSound('golden', 0.6*sfxVolume);
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade36() {
    if (count >= upgp36) {
        count -= upgp36;
        golden_burger += 12;
        bimage += 1;
        const chesburger = document.querySelector('.image-button');
        chesburger.style.backgroundImage = "url('Burger-images/Eldritchburger.png')";
        document.getElementById("upgrade36").remove();
        hideTooltip('upgrade36tooltip');
        document.getElementById("upgrade37").style.display = 'flex';
        playSound('golden', 0.6*sfxVolume);
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade37() {
    if (count >= upgp37) {
        count -= upgp37;
        golden_burger += 14;
        bimage += 1;
        const chesburger = document.querySelector('.image-button');
        chesburger.style.backgroundImage = "url('Burger-images/Heavenlyburger.png')";
        document.getElementById("upgrade37").remove();
        hideTooltip('upgrade37tooltip');
        document.getElementById("upgrade38").style.display = 'flex';
        playSound('golden', 0.6*sfxVolume);
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function upgrade38() {
    if (count >= upgp38) {
        count -= upgp38;
        bimage += 1;
        golden_burger += 16.5;
        const chesburger = document.querySelector('.image-button');
        chesburger.style.backgroundImage = "url('Burger-images/Infinitefeastburger.png')";
        document.getElementById("upgrade38").remove();
        hideTooltip('upgrade38tooltip');
        playSound('golden', 0.6*sfxVolume);
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}
        function moreicepers() {
            if (ice >= icost1) {
                ips += 2.5;
                iceupg1 += 1;
                ice -= icost1;
                icost1 = Math.round(icost1 * 1.5);
                playSound('purchase', 0.4*sfxVolume);
                updateAll();

            } else {
                playSound('error', 0.4*sfxVolume);
                updateAll();
            }
        }        
        function betterclick() {
            if (ice >= icost4) {
                const oldClickAmount =  parseFloat((clickamount).toFixed(1));;
                clickamount += parseFloat((clickamount * 0.2).toFixed(1));
                if (M3 >= 1) {
                    const clickIncrease = (clickamount - oldClickAmount) * M3;
                    clicks +=  parseFloat((clickIncrease * 0.2).toFixed(1));
                }
                iceupg4 += 1;
                ice -= icost4;
                icost4 = Math.round(icost4 * 1.25);
                playSound('purchase', 0.4*sfxVolume);
                updateAll();

            } else {
                playSound('error', 0.4*sfxVolume);
                updateAll();
            }
        }
        function betterworker() {
            if (ice >= icost2) {
                const oldWorkerValue = worker;
                worker += parseFloat((worker * 0.2).toFixed(1));
                // Apply the increase to existing workers
                if (M >= 1) {
                    const increase = (worker - oldWorkerValue) * M;
                    mps += increase;
                }
                iceupg2 += 1;
                ice -= icost2;
                icost2 = Math.round(icost2 * 1.25);
                playSound('purchase', 0.4*sfxVolume);
                updateAll();
            } else {
                playSound('error', 0.4*sfxVolume);
                updateAll();
            }
        }

        function bettermanager() {
            if (ice >= icost3) {
                const oldManagerValue = manager;
                manager += Math.round(manager * 0.2);
                // Apply the increase to existing managers
                if (M2 >= 1) {
                    const increase = (manager - oldManagerValue) * M2;
                    mps += increase;
                }
                iceupg3 += 1;
                ice -= icost3;
                icost3 = Math.round(icost3 * 1.25);
                playSound('purchase', 0.4*sfxVolume);
                updateAll();
            } else {
                playSound('error', 0.4*sfxVolume);
                updateAll();
            }
        }

        function betterdirector() {
            if (ice >= icost5) {
                const olddirectorValue = director;
                director += Math.round(director * 0.2);
                // Apply the increase to existing directores
                if (M4 >= 1) {
                    const increase = (director - olddirectorValue) * M4;
                    mps += increase;
                }
                iceupg5 += 1;
                ice -= icost5;
                icost5 = Math.round(icost5 * 1.25);
                playSound('purchase', 0.4*sfxVolume);
                updateAll();
            } else {
                playSound('error', 0.4*sfxVolume);
                updateAll();
            }
        }

function betterceo() {
            if (ice >= icost6) {
                const oldCeoValue = ceo;
                ceo += Math.round(ceo * 0.2);
                // Apply the increase to existing CEOs
                if (M5 >= 1) {
                    const increase = (ceo - oldCeoValue) * M5;
                    mps += increase;
                }
                iceupg6 += 1;
                ice -= icost6;
                icost6 = Math.round(icost6 * 1.25);
                playSound('purchase', 0.4*sfxVolume);
                updateAll();
            } else {
                playSound('error', 0.4*sfxVolume);
                updateAll();
            }
        }
        /**
         * Checks if user is on mobile device
         * Redirects to mobile page if available
         */
        function detectMobile() {
                        if (window.location.pathname.includes('mobile_restricted.html')) {
                return true;
            }
            if ((window.innerWidth <= 950)) {
                try {
                    fetch('mobile_restricted.html')
                        .then(response => {
                            if (response.ok) {
                                window.location.href = "mobile_restricted.html";
                            } else {
                                alert("This website is not available on mobile devices.");
                            }
                        })
                        .catch(error => {
                            console.error('Error checking mobile page:', error);
                            alert("This website is not available on mobile devices.");
                        });
                } catch (e) {
                    console.error('Redirection failed:', e);
                    alert("This website is not available on mobile devices.");
                }
                return false;
            }
            return true;
        }

        // ================ UI UPDATES ================

        /**
         * Updates button text with new costs
         */
function formatCurrency(num) {
    // Add safety check for undefined/null values
    if (num === undefined || num === null) {
        return "0.0";
    }

    // Convert to number if it isn't already
    num = Number(num);
    
    // Check if number is valid
    if (isNaN(num)) {
        return "0.0";
    }

    if (num < 1000) {
        return num.toFixed(1);
    }
    
    const abbreviations = [
        { value: 1e24, symbol: "Sp" },
        { value: 1e21, symbol: "Sx" },
        { value: 1e18, symbol: "Qn" },
        { value: 1e15, symbol: "Qd" },
        { value: 1e12, symbol: "T" },
        { value: 1e9, symbol: "B" },
        { value: 1e6, symbol: "M" },
        { value: 1e3, symbol: "K" }
    ];
    
    for (const { value, symbol } of abbreviations) {
        if (num >= value) {
            return (num / value).toFixed(1) + symbol;
        }
    }
    
    return num.toFixed(1);
}

function betteroracle() {
    if (ice >= icost7) {
        const oldVal = oracle;
        oracle += Math.round(oracle * 0.2);
        if (M9 >= 1) {
            const increase = (oracle - oldVal) * M9;
            mps += increase;
        }
        iceupg7 += 1;
        ice -= icost7;
        icost7 = Math.round(icost7 * 1.25);
        playSound('purchase', 0.4*sfxVolume);
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function betterfryer() {
    if (ice >= icost8) {
        const oldVal = fryer;
        fryer += Math.round(fryer * 0.2);
        if (M10 >= 1) {
            const increase = (fryer - oldVal) * M10;
            mps += increase;
        }
        iceupg8 += 1;
        ice -= icost8;
        icost8 = Math.round(icost8 * 1.25);
        playSound('purchase', 0.4*sfxVolume);
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function betterfeast() {
    if (ice >= icost9) {
        const oldVal = feast;
        feast += Math.round(feast * 0.2);
        if (M11 >= 1) {
            const increase = (feast - oldVal) * M11;
            mps += increase;
        }
        iceupg9 += 1;
        ice -= icost9;
        icost9 = Math.round(icost9 * 1.25);
        playSound('purchase', 0.4*sfxVolume);
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function betterverdant() {
    if (ice >= icost10) {
        const oldVal = verdant;
        verdant += Math.round(verdant * 0.2);
        if (M12 >= 1) {
            const increase = (verdant - oldVal) * M12;
            mps += increase;
        }
        iceupg10 += 1;
        ice -= icost10;
        icost10 = Math.round(icost10 * 1.25);
        playSound('purchase', 0.4*sfxVolume);
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function betterwhisperer() {
    if (ice >= icost11) {
        const oldVal = whisperer;
        whisperer += Math.round(whisperer * 0.2);
        if (M14 >= 1) {
            const increase = (whisperer - oldVal) * M14;
            mps += increase;
        }
        iceupg11 += 1;
        ice -= icost11;
        icost11 = Math.round(icost11 * 1.25);
        playSound('purchase', 0.4*sfxVolume);
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function betterchancellor() {
    if (ice >= icost12) {
        const oldVal = chancellor;
        chancellor += Math.round(chancellor * 0.2);
        if (M15 >= 1) {
            const increase = (chancellor - oldVal) * M15;
            mps += increase;
        }
        iceupg12 += 1;
        ice -= icost12;
        icost12 = Math.round(icost12 * 1.25);
        playSound('purchase', 0.4*sfxVolume);
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function betterarchmage() {
    if (ice >= icost13) {
        const oldVal = archmage;
        archmage += Math.round(archmage * 0.2);
        if (M17 >= 1) {
            const increase = (archmage - oldVal) * M17;
            mps += increase;
        }
        iceupg13 += 1;
        ice -= icost13;
        icost13 = Math.round(icost13 * 1.25);
        playSound('purchase', 0.4*sfxVolume);
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function betterpriest() {
    if (ice >= icost14) {
        const oldVal = priest;
        priest += Math.round(priest * 0.2);
        if (M16 >= 1) {
            const increase = (priest - oldVal) * M16;
            mps += increase;
        }
        iceupg14 += 1;
        ice -= icost14;
        icost14 = Math.round(icost14 * 1.25);
        playSound('purchase', 0.4*sfxVolume);
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

// Update buttons with formatted currency and counts
function updateButtons(buttons) {
    buttons.forEach(button => {
        const element = document.getElementById(button.id);
        if (element) {
            let countText = '';
            const countMap = {
                'extraButton': M,
                'Button2': M2,
                'Clickbutton': M3,
                'Clickbutton2': M20,
                'directorbutton': M4,
                'VPbutton': M5,
                'COObutton': M6,
                'ceobutton': M7,
                'chairbutton': M8,
                'MObutton': M9,
                'SFbutton': M10,
                'feastbutton': M11,
                'verdantbutton': M12,
                'ESbutton': M13,
                'FWbutton': M14,
                'CCbutton': M15,
                'priestbutton': M16,
                'GAbutton': M17,
                'PMbutton': M18,
                'GGbutton': M19
            };

            if (countMap.hasOwnProperty(button.id)) {
                countText = ` (${countMap[button.id]})`;
            }

            let quantity = purchaseAmount === 'max' ? getMaxAffordable(button.id) : purchaseAmount;
            if (quantity < 1) quantity = 1;
            let cost = button.cost;
            if (employeeInfo.hasOwnProperty(button.id)) {
                cost = computeEmployeeCost(button.id, quantity);
            }

            const qtyText = quantity > 1 ? ` x${quantity}` : '';
            element.textContent = `${button.label}${qtyText}: $${formatCurrency(cost)}${countText}`;
        }
    });
}

// Update upgrade buttons with formatted currency
function updateUpgradeButtons() {
    const upgradeMap = {
        'upgrade1': { cost: upgp1, condition: true },
        'upgrade2': { cost: upgp2, condition: true },
        'upgrade3': { cost: upgp3, condition: upg1 === 1 },
        'upgrade4': { cost: upgp4, condition: bimage === 1 },
        'upgrade5': { cost: upgp5, condition: bimage === 2 },
        'upgrade6': { cost: upgp6, condition: bimage === 3 },
        'upgrade7': { cost: upgp7, condition: bimage === 4 },
        'upgrade8': { cost: upgp8, condition: upg3 === 1 },
        'upgrade9': { cost: upgp9, condition: upg8 === 1 },
        'upgrade10': { cost: upgp10, condition: upg9 === 1 },
        'upgrade11': { cost: upgp11, condition: upg10 === 1, requirements: { M4: 50, M5: 50 } },
        'upgrade12': { cost: upgp12, condition: upg11 === 1 },
        'upgrade13': { cost: upgp13, condition: upg12 === 1 },
        'upgrade14': { cost: upgp14, condition: upg13 === 1 },
      
        'upgrade15': { cost: upgp15, condition: upg39 === 1, requirements: { M7: 50, M9: 50 } },
        'upgrade16': { cost: upgp16, condition: upg15 === 1 },
        'upgrade17': { cost: upgp17, condition: upg16 === 1 },
        'upgrade18': { cost: upgp18, condition: upg17 === 1 },
        
        'upgrade19': { cost: upgp19, condition: upg40 === 1, requirements: { M12: 50, M10: 50 } },
        'upgrade20': { cost: upgp20, condition: upg19 === 1 },
        'upgrade21': { cost: upgp21, condition: upg20 === 1 },
        'upgrade22': { cost: upgp22, condition: upg21 === 1 },
     
        'upgrade23': { cost: upgp23, condition: upg41 === 1, requirements: { M15: 50, M14: 50 } },
        'upgrade24': { cost: upgp24, condition: upg23 === 1 },
        'upgrade25': { cost: upgp25, condition: upg24 === 1 },
        'upgrade26': { cost: upgp26, condition: upg25 === 1 },
       
        'upgrade27': { cost: upgp27, condition: upg42 === 1, requirements: { M17: 50, M13: 50 } },
        'upgrade28': { cost: upgp28, condition: upg27 === 1 },
        'upgrade29': { cost: upgp29, condition: upg28 === 1 },
        
        'upgrade30': { cost: upgp30, condition: upg29 === 1 },
        'upgrade31': { cost: upgp31, condition: (upg18 === 1 && bimage === 5) || bimage === 6 },
               'upgrade32': { cost: upgp32, condition: bimage === 6 },
        'upgrade33': { cost: upgp33, condition: bimage === 7 },
        'upgrade34': { cost: upgp34, condition: bimage === 8 },
        'upgrade35': { cost: upgp35, condition: bimage === 9 },
        'upgrade36': { cost: upgp36, condition: bimage === 10 },
        'upgrade37': { cost: upgp37, condition: bimage === 11 },
        'upgrade38': { cost: upgp38, condition: bimage === 12 },
        'upgrade39': { cost: upgp39, condition: upg14 === 1 },
          'upgrade40': { cost: upgp40, condition: upg18 === 1 },
             'upgrade41': { cost: upgp41, condition: upg22 === 1 },
              'upgrade42': { cost: upgp42, condition: upg26 === 1 } 
    };

    const employeeNames = {
        M4: "Directors",
        M5: "VPs",
        M7: "CEOs",
        M9: "Oracles",
        M10: "Shadow Fryers",
        M12: "Verdant Keepers",
        M13: "Emulsifier Supremes",
        M14: "Flame Whisperers",
        M15: "Cheese Chancellors",
        M17: "Golden Archmages"
    };

    for (const [id, data] of Object.entries(upgradeMap)) {
        const element = document.getElementById(id);
        if (element && data.condition) {
            const currentText = element.textContent;
            const label = currentText.split(':')[0];
            let reqText = '';
            if (data.requirements) {
                reqText = Object.entries(data.requirements)
                    .map(([emp, amt]) => `${amt} ${employeeNames[emp] || emp}`)
                    .join(', ');
                reqText = `, ${reqText}`;
            }
            element.textContent = `${label}: $${formatCurrency(data.cost)}${reqText}`;
        }
    }
}

// Update franchise button with formatted currency
function updateFranchiseButton() {
    const franchiseButton = document.getElementById('Franchisebutton');
    if (franchiseButton) {
        if (franchises >= 6) {
            franchiseButton.textContent = 'Max Franchises!';
            franchiseButton.disabled = true;
        } else {
            franchiseButton.textContent = `Open a new Franchise ($${formatCurrency(fcost)})`;
        }
    }
}


// Main update function to keep all currency displays synchronized
function updateAllCurrency() {
    const moneyDisplay = document.getElementById('money');
    if (moneyDisplay) {
        moneyDisplay.textContent = `$${formatCurrency(count)}`;
    }
    
    const mpsDisplay = document.getElementById('mps');
    if (mpsDisplay) {
        mpsDisplay.textContent = `$${formatCurrency(mps)} per second`;
    }
    
    updateButtons(buttonConfigs); // Assuming buttonConfigs is your array of button configurations
    updateUpgradeButtons();
    updateFranchiseButton();
}

        /**
         * Updates all UI elements
         */
        
         function updateAll() {
    updateMoney();
    updatemps();
    updateButtons([
        { id: 'extraButton', label: 'Worker' },
        { id: 'Button2', label: 'Manager' },
        { id: 'Clickbutton', label: 'Better clicks' },
        { id: 'directorbutton', label: 'Director' },
        { id: 'VPbutton', label: 'VP' },
        { id: 'COObutton', label: 'COO' },
        { id: 'ceobutton', label: 'CEO' },
        { id: 'chairbutton', label: 'Chairman' },
        { id: 'MObutton', label: 'Milkshake Oracle' },
        { id: 'SFbutton', label: 'Shadow Fryer' },
        { id: 'feastbutton', label: 'Keeper of the Hidden Feast' },
        { id: 'verdantbutton', label: 'Verdant Keeper' },
        { id: 'ESbutton', label: 'Emulsifier Supreme' },
        { id: 'FWbutton', label: 'Flame Whisperer' },
        { id: 'CCbutton', label: 'Cheese Chancellor' },
        { id: 'priestbutton', label: 'High Priest' },
        { id: 'GAbutton', label: 'Golden Archmage' },
        { id: 'PMbutton', label: 'Patty Matriarch' },
        { id: 'GGbutton', label: 'Grand Grillmaster' },
        { id: 'Clickbutton2', label: 'Multiplicative clicks' },
       // { id: 'upgrade1', label: 'Coffee', cost: upgp1 }
    ]);
    Update();
    checkAchievements();
}
        /**
         * Updates money display
         */
function updateMoney() {
    count = Math.round(count * 10) / 10;
    document.getElementById('money').value = "Money: $" + formatCurrency(count);
    document.getElementById('ice').value = "Ice Creams: " + formatCurrency(ice);
}
        /**
         * Updates money per second and per click displays
         */
function updatemps() {
    const currentMps = parseFloat((mps * moneymultiplier).toFixed(1));
    const currentClicks = parseFloat(((clicks * golden_burger) * moneymultiplier).toFixed(1));
    
    document.getElementById('moneypersecond').value = "Money per second: $" + formatCurrency(currentMps);
    document.getElementById('moneyperclick').value = "Money per click: $" + formatCurrency(currentClicks);
    document.getElementById('moneymultiplier').value = "Money multiplier: " + parseFloat((moneymultiplier).toFixed(1));
    document.getElementById('icepers').value = "Ice Creams per second: " + formatCurrency(ips);
}
        /**
         * Handles clicking the burger
         */
        function addMoney() {
            count += parseFloat(((clicks * golden_burger) * moneymultiplier).toFixed(1));
            updateAll();
            totalclicks++;
            checkAchievements();
            playSound('click', 0.4*sfxVolume);
        }

        /**
         * Updates button colors based on affordability
         */
         function Update() {
    checkAchievements();
    const canAffordColor = '#4CAF50';    // Green when affordable
    const cannotAffordColor = '#dddddd'; // Gray when can't afford

    document.getElementById('moreicepers').textContent =
        "Upgrade the Ice Cream machine! " + formatCurrency(icost1) + ' ice';
    document.getElementById('betterworker').textContent =
        "Make workers better! " + formatCurrency(icost2) + ' ice';
    document.getElementById('bettermanager').textContent =
        "Make managers better! " + formatCurrency(icost3) + ' ice';
    document.getElementById('betterclick').textContent =
        "Make more click money better! " + formatCurrency(icost4) + ' ice';
    document.getElementById('betterdirector').textContent =
        "Make directors better! " + formatCurrency(icost5) + ' ice';
    document.getElementById('betterceo').textContent =
        "Make CEOs better! " + formatCurrency(icost6) + ' ice';
    document.getElementById('betteroracle').textContent =
        "Oracle secrets! " + formatCurrency(icost7) + ' ice';
    document.getElementById('betterfryer').textContent =
        "Fryer tricks! " + formatCurrency(icost8) + ' ice';
    document.getElementById('betterfeast').textContent =
        "Enhance feast! " + formatCurrency(icost9) + ' ice';
    document.getElementById('betterverdant').textContent =
        "Grow verdant! " + formatCurrency(icost10) + ' ice';
    document.getElementById('betterwhisperer').textContent =
        "Whisperer smoke! " + formatCurrency(icost11) + ' ice';
    document.getElementById('betterchancellor').textContent =
        "Cheese mastery! " + formatCurrency(icost12) + ' ice';
    document.getElementById('betterarchmage').textContent =
        "Arcane tips! " + formatCurrency(icost13) + ' ice';
    document.getElementById('betterpriest').textContent =
        "Sacred buns! " + formatCurrency(icost14) + ' ice';

    updateUpgradeButtons();
    updateFranchiseButton();
if (button.id === 'upgrade30' && buttonElement) {
    buttonElement.disabled = true;
    buttonElement.style.backgroundColor = cannotAffordColor;
}
    document.getElementById('Workertooltip').textContent = "Earns $" + formatCurrency(worker) + " per second";
    document.getElementById('Managertooltip').textContent = "Earns $" + formatCurrency(manager) + " per second";
    document.getElementById('Moreclicktooltip').textContent = "Increases click value by $" + formatCurrency(clickamount);
    document.getElementById('directortooltip').textContent = "Earns $" + formatCurrency(director) + " per second";
    document.getElementById('VPtooltip').textContent = "Earns $" + formatCurrency(VP) + " per second";
    document.getElementById('COOtooltip').textContent = "Earns $" + formatCurrency(COO) + " per second";
    document.getElementById('Ceotooltip').textContent = "Earns $" + formatCurrency(ceo) + " per second";
    document.getElementById('Chairmantooltip').textContent = "Earns $" + formatCurrency(chairman) + " per second";
    document.getElementById('MOtooltip').textContent = "Earns $" + formatCurrency(oracle) + " per second";
    document.getElementById('SFtooltip').textContent = "Earns $" + formatCurrency(fryer) + " per second";
    document.getElementById('Feasttooltip').textContent = "Earns $" + formatCurrency(feast) + " per second";
    document.getElementById('Verdanttooltip').textContent = "Earns $" + formatCurrency(verdant) + " per second";
    document.getElementById('EStooltip').textContent = "Earns $" + formatCurrency(emulsifier) + " per second";
    document.getElementById('FWtooltip').textContent = "Earns $" + formatCurrency(whisperer) + " per second";
    document.getElementById('CCtooltip').textContent = "Earns $" + formatCurrency(chancellor) + " per second";
    document.getElementById('Priesttooltip').textContent = "Earns $" + formatCurrency(priest) + " per second";
    document.getElementById('GAtooltip').textContent = "Earns $" + formatCurrency(archmage) + " per second";
    document.getElementById('PMtooltip').textContent = "Earns $" + formatCurrency(matriarch) + " per second";
    document.getElementById('GGtooltip').textContent = "Earns $" + formatCurrency(grillmaster) + " per second";
    document.getElementById('Multiplyclicktooltip').textContent = "Increases click value by 0.1x";
    const buttons = [
        { id: 'extraButton', cost: cost1 },
        { id: 'Button2', cost: cost2 },
        { id: 'Clickbutton', cost: cost3 },
        { id: 'Clickbutton2', cost: cost20 },
        { id: 'directorbutton', cost: cost4 },
        { id: 'VPbutton', cost: cost5 },
        { id: 'COObutton', cost: cost6 },
        { id: 'ceobutton', cost: cost7 },
        { id: 'chairbutton', cost: cost8 },
        { id: 'MObutton', cost: cost9 },
        { id: 'SFbutton', cost: cost10 },
        { id: 'feastbutton', cost: cost11 },
        { id: 'verdantbutton', cost: cost12 },
        { id: 'ESbutton', cost: cost13 },
        { id: 'FWbutton', cost: cost14 },
        { id: 'CCbutton', cost: cost15 },
        { id: 'priestbutton', cost: cost16 },
        { id: 'GAbutton', cost: cost17 },
        { id: 'PMbutton', cost: cost18 },
        { id: 'GGbutton', cost: cost19 },
        { id: 'upgrade1', cost: upgp1 },
        { id: 'upgrade2', cost: upgp2 },
        { id: 'Franchisebutton', cost: fcost },
        { id: 'upgrade3', cost: upgp3 },
        { id: 'upgrade4', cost: upgp4 },
        { id: 'upgrade5', cost: upgp5 },
        { id: 'upgrade6', cost: upgp6 },
        { id: 'upgrade7', cost: upgp7 },
        { id: 'upgrade8', cost: upgp8 },
        { id: 'upgrade9', cost: upgp9 },
        { id: 'upgrade10', cost: upgp10 },
        { id: 'upgrade11', cost: upgp11, requirements: { M4: 50, M5: 50 } },
        { id: 'upgrade12', cost: upgp12 },
        { id: 'upgrade13', cost: upgp13 },
        { id: 'upgrade14', cost: upgp14 },
        { id: 'upgrade39', cost: upgp39 },
        { id: 'upgrade15', cost: upgp15, requirements: { M7: 50, M9: 50 } },
        { id: 'upgrade16', cost: upgp16 },
        { id: 'upgrade17', cost: upgp17 },
        { id: 'upgrade18', cost: upgp18 },
        { id: 'upgrade40', cost: upgp40 },
        { id: 'upgrade19', cost: upgp19, requirements: { M12: 50, M10: 50 } },
        { id: 'upgrade20', cost: upgp20 },
        { id: 'upgrade21', cost: upgp21 },
        { id: 'upgrade22', cost: upgp22 },
        { id: 'upgrade41', cost: upgp41 },
        { id: 'upgrade23', cost: upgp23, requirements: { M15: 50, M14: 50 } },
        { id: 'upgrade24', cost: upgp24 },
        { id: 'upgrade25', cost: upgp25 },
        { id: 'upgrade26', cost: upgp26 },
        { id: 'upgrade42', cost: upgp42 },
        { id: 'upgrade27', cost: upgp27, requirements: { M17: 50, M13: 50 } },
        { id: 'upgrade28', cost: upgp28 },
        { id: 'upgrade29', cost: upgp29 },
        { id: 'upgrade30', cost: upgp30 },
        { id: 'upgrade31', cost: upgp31},
        { id: 'upgrade32', cost: upgp32 },
        { id: 'upgrade33', cost: upgp33 },
        { id: 'upgrade34', cost: upgp34 },
        { id: 'upgrade35', cost: upgp35 },
        { id: 'upgrade36', cost: upgp36 },
        { id: 'upgrade37', cost: upgp37 },
        { id: 'upgrade38', cost: upgp38 }
    ];

    const Ibuttons = [
        { id: 'moreicepers', cost: icost1 },
        { id: 'betterworker', cost: icost2 },
        { id: 'bettermanager', cost: icost3 },
        { id: 'betterclick', cost: icost4 },
        { id: 'betterdirector', cost: icost5 },
        { id: 'betterceo', cost: icost6 },
        { id: 'betteroracle', cost: icost7 },
        { id: 'betterfryer', cost: icost8 },
        { id: 'betterfeast', cost: icost9 },
        { id: 'betterverdant', cost: icost10 },
        { id: 'betterwhisperer', cost: icost11 },
        { id: 'betterchancellor', cost: icost12 },
        { id: 'betterarchmage', cost: icost13 },
        { id: 'betterpriest', cost: icost14 },
    ];  
    window.M4 = M4;
    window.M5 = M5;
    window.M7 = M7;
    window.M9 = M9;
    window.M12 = M12;
    window.M10 = M10;
    window.M15 = M15;
    window.M14 = M14;
    window.M17 = M17;
    window.M13 = M13;
    buttons.forEach(button => {
        const buttonElement = document.getElementById(button.id);
        if (buttonElement) {
            let quantity = purchaseAmount === 'max' ? getMaxAffordable(button.id) : purchaseAmount;
            if (employeeInfo.hasOwnProperty(button.id)) {
                if (quantity < 1) quantity = 1;
            } else {
                quantity = 1; // upgrades always purchased once
            }
            const costToCheck = employeeInfo.hasOwnProperty(button.id)
                ? computeEmployeeCost(button.id, quantity)
                : button.cost;
            const canAfford = count >= costToCheck;
            let meetsRequirements = true;

            // Check additional requirements if they exist
            if (button.requirements) {
                meetsRequirements = Object.entries(button.requirements).every(([key, value]) => {
                    return window[key] && window[key] >= value; // All requirements must pass
                });
            }

            // Update button styling based on conditions
            buttonElement.style.backgroundColor = (canAfford && meetsRequirements) 
                ? canAffordColor 
                : cannotAffordColor;

            // Optional: Add debug logging for requirements
           /* if (button.requirements) {
               console.log(`Button ${button.id}:`, {
                    canAfford,
                    meetsRequirements,
                    requirements: button.requirements,
                    currentValues: Object.entries(button.requirements).reduce((acc, [key]) => {
                        acc[key] = window[key] || 0; // Fallback to 0 if undefined
                        return acc;
                    }, {})
                });
            }
                */
        }
    });

    Ibuttons.forEach(button => {
        const buttonElement = document.getElementById(button.id);
        if (buttonElement) {
            buttonElement.style.backgroundColor = ice >= button.cost ? canAffordColor : cannotAffordColor;
        }
    });
    const upgrade30Btn = document.getElementById('upgrade30');
if (upgrade30Btn) {
    upgrade30Btn.disabled = true;
    upgrade30Btn.style.backgroundColor = '#dddddd';
    upgrade30Btn.textContent = 'Learn from the grand grill master: $???';
}
}
        /**
         * Adds money per second
         */
        
        function moneyps() {
            detectMobile();
            count += mps*moneymultiplier;
            updateAll();
            checkTabHighlights();
            totaltime ++;
            if (upg3 == 1) {
                ice += ips; //if you have upgrade 3, add 1 to the ice, per second
            }
        }

        /**
         * Initializes the game
         */
        function initializeGame() {
            
    if (detectMobile()) {
        updateUpgradeVisibility();
        initAudio();
        setTimeout(loadGame, 300); // Delay loadGame to ensure other initializations are complete
        checkAchievements();
        Update();
    }

        }


        function openFranchise() {
            if (count >= fcost) {
                count -= fcost;
                moneymultiplier += 1;
                fcost = ((fcost * 2.5) * 10) / 10;
                updateAll();
                playSound('purchase', 0.4*sfxVolume);
                franchises += 1;
                const franchiseButton = document.querySelector('.franchise-button');
                franchiseButton.textContent = 'Open a new Franchise ($' + formatCurrency(fcost) + ')';
                // Update the button to show it's purchased
                if (franchises == 2) {
                    document.getElementById('newFranchise').style.display = 'block';
                }
                if (franchises == 3) {
                    document.getElementById('Franchise3').style.display = 'block';
                }
                if (franchises == 4) {
                    document.getElementById('Franchise4').style.display = 'block';
                }
                if (franchises == 5) {
                    document.getElementById('Franchise5').style.display = 'block';
                }
                if (franchises == 6) {
                    document.getElementById('Franchise6').style.display = 'block';
                    franchiseButton.textContent = 'Max Franchises!';
                    franchiseButton.disabled = true;
                    fcost = 99999999999999999999999999999999999999999999999999999999999999999999999999999999999;
                }
                if (franchises >= 7) { 

                }
            } else {
                playSound('error', 0.4*sfxVolume);
            }
        }
        let viewedTabs = {
            franchiseTab: false,
            buttonsTab: false,
            achievementsTab: false
        };

        /**
         * Switches tabs and removes highlight once clicked
         * @param {string} tabName - ID of the tab to switch to
         */
        function switchTab(tabName) {
            // Hide all tab contents
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(tab => tab.classList.remove('active'));

            // Deactivate all tab buttons, remove highlight, and mark tab as viewed
            const tabButtons = document.querySelectorAll('.tab-button');
            tabButtons.forEach(button => {
                button.classList.remove('active');
                if (button.dataset.tab === tabName) {
                    button.classList.add('active');
                    button.classList.remove('highlight');  // Remove highlight after clicking
                    viewedTabs[tabName] = true; // Mark this tab as viewed
                }
            });

            // Show selected tab content
            document.getElementById(tabName).classList.add('active');
        }

        /**
         * Highlights tabs based on affordability of upgrades or unlocked achievements
         */
        function checkTabHighlights() {
            const franchiseTab = document.querySelector('[data-tab="franchiseTab"]');
            const buttonsTab = document.querySelector('[data-tab="buttonsTab"]');
            const achievementsTab = document.querySelector('[data-tab="achievementsTab"]');

            // Example checks for highlighting based on affordability or achievement unlock
            if (count >= fcost) {
                franchiseTab.classList.add('highlight');
            } else {
                franchiseTab.classList.remove('highlight');
            }

            const affordableIceUpgrade = [icost1, icost2, icost3, icost4, icost5, icost6, icost7, icost8, icost9, icost10, icost11, icost12, icost13, icost14].some(cost => ice >= cost);
            if (affordableIceUpgrade ) {
                buttonsTab.classList.add('highlight');
            } else {
                buttonsTab.classList.remove('highlight');
            }

            const unlockedAchievements = Object.values(achievements).some(achievement => achievement.unlocked);
            if (unlockedAchievements && !viewedTabs.achievementsTab) {
                achievementsTab.classList.add('highlight');
            } else {
                achievementsTab.classList.remove('highlight');
            }
        }

        // Initialize the default tab on page load
        window.addEventListener('load', function() {
            detectMobile();
            switchTab('franchiseTab');
            setInterval(checkTabHighlights, 1000); // Periodically check for highlight conditions
        });
        const achievements = {
            firstSteps: { unlocked: false, condition: () => franchises >= 2 },
            empireBuilder: { unlocked: false, condition: () => franchises >= 5 },
            millionaire: { unlocked: false, condition: () => count >= 1000000 },
            masterManager: { unlocked: false, condition: () => M + M2 + M4 + M5 + M6 + M7 + M8 + M9 + M10 + M11 + M12 + M13 + M14 + M15 + M16 + M17 + M18 + M19 >= 50 },
            a100employees: { unlocked: false, condition: () => M + M2 + M4 + M5 + M6 + M7 + M8 + M9 + M10 + M11 + M12 + M13 + M14 + M15 + M16 + M17 + M18 + M19 >= 100 },
            a200employees: { unlocked: false, condition: () => M + M2 + M4 + M5 + M6 + M7 + M8 + M9 + M10 + M11 + M12 + M13 + M14 + M15 + M16 + M17 + M18 + M19 >= 200 },
            a500employees: { unlocked: false, condition: () => M + M2 + M4 + M5 + M6 + M7 + M8 + M9 + M10 + M11 + M12 + M13 + M14 + M15 + M16 + M17 + M18 + M19 >= 500 },
            a1000employees: {unlocked: false, condition: () => M + M2 + M4 + M5 + M6 + M7 + M8 + M9 + M10 + M11 + M12 + M13 + M14 + M15 + M16 + M17 + M18 + M19 >= 1000 },
            goldenTouch: { unlocked: false, condition: () => golden_burger >= 2 },
            coffeeMaster: { unlocked: false, condition: () => upg1 === 1 },
            a100clicks: { unlocked: false, condition: () => totalclicks === 100 },
            a1000clicks: { unlocked: false, condition: () => totalclicks === 1000 },
            a10000clicks: { unlocked: false, condition: () => totalclicks === 10000 },
            a50000clicks: { unlocked: false, condition: () => totalclicks === 50000 },
            a100000clicks: { unlocked: false, condition: () => totalclicks === 100000 },
            a1000000clicks: { unlocked: false, condition: () => totalclicks === 1000000 },
            a1minute: { unlocked: false, condition: () => totaltime >= 60 },
            a10minute: { unlocked: false, condition: () => totaltime >= 600 },
            a30minute: { unlocked: false, condition: () => totaltime >= 1800 },
            a1hour: { unlocked: false, condition: () => totaltime >= 3600 },
            a5hour: { unlocked: false, condition: () => totaltime >= 18000 },
            a12hour: { unlocked: false, condition: () => totaltime >= 43200 },
            a1day: { unlocked: false, condition: () => totaltime >= 86400 },
            a1week: { unlocked: false, condition: () => totaltime >= 604800 }
        };

        /**
         * Checks if any achievements have been unlocked
         * Should be called whenever relevant game state changes
         */
        function checkAchievements() {
            let newUnlocks = false;

            for (const [id, achievement] of Object.entries(achievements)) {
                if (!achievement.unlocked && achievement.condition()) {  // Only unlock if condition is met
                    achievement.unlocked = true;
                    newUnlocks = true;

                    // Find and update the achievement element
                    const achievementElement = document.querySelector(`[data-achievement="${id}"]`);
                    if (achievementElement) {
                        achievementElement.classList.remove('locked');
                        playSound('achieve', 0.1*sfxVolume);
                    }
                }
            }
            if (newUnlocks) {
                viewedTabs.achievementsTab = false;
                checkTabHighlights(); // Immediately check highlights to apply the new achievement notification
            }
        }
        function updateUpgradeVisibility() {
            if (upg1 === 1) {
        const upgrade1Button = document.getElementById("upgrade1");
        if (upgrade1Button) upgrade1Button.remove();
        const franchiseImg = document.getElementById('Franchise1');
        if (franchiseImg) franchiseImg.src = 'Restaurant-images/Restaurant+coffee.png';
    }

    // Ice cream machine upgrade (shown only if coffee upgrade is purchased)
    if (upg3 === 1) {
        const upgrade3Button = document.getElementById("upgrade3");
        if (upgrade3Button) upgrade3Button.remove();
        const franchiseImg = document.getElementById('Franchise1');
        if (franchiseImg) franchiseImg.src = 'Restaurant-images/restaurantcoffee+ice.png';
    } else if (upg1 === 1) {
        const upgrade3Button = document.getElementById("upgrade3");
        if (upgrade3Button) upgrade3Button.style.display = 'flex';
    }

    // Burger upgrades
    const burgerImage = document.querySelector('.image-button');
    const upgrade2Button = document.getElementById("upgrade2"); // Golden
    const upgrade4Button = document.getElementById("upgrade4"); // Diamond
    const upgrade5Button = document.getElementById("upgrade5"); // Sapphire
    const upgrade6Button = document.getElementById("upgrade6"); // Uranium
    const upgrade7Button = document.getElementById("upgrade7"); // Obsidian
    const upgrade31Button = document.getElementById("upgrade31");
    const upgrade32Button = document.getElementById("upgrade32");
    const upgrade33Button = document.getElementById("upgrade33");
    const upgrade34Button = document.getElementById("upgrade34");
    const upgrade35Button = document.getElementById("upgrade35");
    const upgrade36Button = document.getElementById("upgrade36");
    const upgrade37Button = document.getElementById("upgrade37");
    const upgrade38Button = document.getElementById("upgrade38");

    // Hide all burger upgrade buttons initially
    if (upgrade2Button) upgrade2Button.style.display = 'none';
    if (upgrade4Button) upgrade4Button.style.display = 'none';
    if (upgrade5Button) upgrade5Button.style.display = 'none';
    if (upgrade6Button) upgrade6Button.style.display = 'none';
    if (upgrade7Button) upgrade7Button.style.display = 'none';
    if (upgrade31Button) upgrade31Button.style.display = 'none';
    if (upgrade32Button) upgrade32Button.style.display = 'none';
    if (upgrade33Button) upgrade33Button.style.display = 'none';
    if (upgrade34Button) upgrade34Button.style.display = 'none';
    if (upgrade35Button) upgrade35Button.style.display = 'none';
    if (upgrade36Button) upgrade36Button.style.display = 'none';
    if (upgrade37Button) upgrade37Button.style.display = 'none';
    if (upgrade38Button) upgrade38Button.style.display = 'none';

    // Set burger image and display the next available upgrade button based on `bimage`
    switch (bimage) {
        case 1:
            burgerImage.style.backgroundImage = "url('Burger-images/GoldenBurger.png')";
            if (upgrade4Button) upgrade4Button.style.display = 'flex';
            break;
        case 2:
            burgerImage.style.backgroundImage = "url('Burger-images/Diamondburger.png')";
            if (upgrade5Button) upgrade5Button.style.display = 'flex';
            break;
        case 3:
            burgerImage.style.backgroundImage = "url('Burger-images/Sapphireburger.png')";
            if (upgrade6Button) upgrade6Button.style.display = 'flex';
            break;
        case 4:
            burgerImage.style.backgroundImage = "url('Burger-images/Uraniumburger.png')";
            if (upgrade7Button) upgrade7Button.style.display = 'flex';
            break;
        case 5:
            burgerImage.style.backgroundImage = "url('Burger-images/Obsidianburger.png')";
            if (upgrade31Button) upgrade31Button.style.display = 'flex';
            break;
        case 6:
            burgerImage.style.backgroundImage = "url('Burger-images/Prismburger.png')";
            if (upgrade32Button) upgrade32Button.style.display = 'flex';
            break;
        case 7:
            burgerImage.style.backgroundImage = "url('Burger-images/Infernoburger.png')";
            if (upgrade33Button) upgrade33Button.style.display = 'flex';
            break;
        case 8:
            burgerImage.style.backgroundImage = "url('Burger-images/Auroraburger.png')";
            if (upgrade34Button) upgrade34Button.style.display = 'flex';
            break;
        case 9:
            burgerImage.style.backgroundImage = "url('Burger-images/Phoenixburger.png')";
            if (upgrade35Button) upgrade35Button.style.display = 'flex';
            break;
        case 10:
            burgerImage.style.backgroundImage = "url('Burger-images/Galacticburger.png')";
            if (upgrade36Button) upgrade36Button.style.display = 'flex';
            break;
        case 11:
            burgerImage.style.backgroundImage = "url('Burger-images/Eldritchburger.png')";
            if (upgrade37Button) upgrade37Button.style.display = 'flex';
            break;
        case 12:
            burgerImage.style.backgroundImage = "url('Burger-images/Heavenlyburger.png')";
            if (upgrade38Button) upgrade38Button.style.display = 'flex';
            break;
        case 13:
            burgerImage.style.backgroundImage = "url('Burger-images/Infinitefeastburger.png')";
            break;
        default:
            if (upgrade2Button) upgrade2Button.style.display = 'flex';
    }


    // Other upgrades visibility based on conditions
    const upgrade8Button = document.getElementById("upgrade8");
    if (upg8 === 1) {
        if (upgrade8Button) upgrade8Button.remove();
    } else if (upg3 === 1) {
        if (upgrade8Button) upgrade8Button.style.display = 'flex';
    }

    const upgrade9Button = document.getElementById("upgrade9");
    if (upg9 === 1) {
        if (upgrade9Button) upgrade9Button.remove();
    } else if (upg8 === 1) {
        if (upgrade9Button) upgrade9Button.style.display = 'flex';
    }

    const upgrade10Button = document.getElementById("upgrade10");
    if (upg10 === 1) {
        if (upgrade10Button) upgrade10Button.remove();
    } else if (upg9 === 1) {
        if (upgrade10Button) upgrade10Button.style.display = 'flex';
    }

    const upgrade11Button = document.getElementById("upgrade11");
    if (upg11 === 1) {
        if (upgrade11Button) upgrade11Button.remove();
    } else if (upg10 === 1) {
        if (upgrade11Button) upgrade11Button.style.display = 'flex';
    }

    const upgrade12Button = document.getElementById("upgrade12");
    if (upg12 === 1) {
        if (upgrade12Button) upgrade12Button.remove();
    } else if (upg11 === 1) {
        if (upgrade12Button) upgrade12Button.style.display = 'flex';
    }

    const upgrade13Button = document.getElementById("upgrade13");
    if (upg13 === 1) {
        if (upgrade13Button) upgrade13Button.remove();
    } else if (upg12 === 1) {
        if (upgrade13Button) upgrade13Button.style.display = 'flex';
    }

    const upgrade14Button = document.getElementById("upgrade14");
    if (upg14 === 1) {
        if (upgrade14Button) upgrade14Button.remove();
    } else if (upg13 === 1) {
        if (upgrade14Button) upgrade14Button.style.display = 'flex';
    }

    const upgrade39Button = document.getElementById("upgrade39");
    if (upg39 === 1) {
        if (upgrade39Button) upgrade39Button.remove();
    } else if (upg14 === 1) {
        if (upgrade39Button) upgrade39Button.style.display = 'flex';
    }

    const upgrade15Button = document.getElementById("upgrade15");
    if (upg15 === 1) {
        if (upgrade15Button) upgrade15Button.remove();
    } else if (upg39 === 1) {
        if (upgrade15Button) upgrade15Button.style.display = 'flex';
    }

    const upgrade16Button = document.getElementById("upgrade16");
    if (upg16 === 1) {
        if (upgrade16Button) upgrade16Button.remove();
    } else if (upg15 === 1) {
        if (upgrade16Button) upgrade16Button.style.display = 'flex';
    }

    const upgrade17Button = document.getElementById("upgrade17");
    if (upg17 === 1) {
        if (upgrade17Button) upgrade17Button.remove();
    } else if (upg16 === 1) {
        if (upgrade17Button) upgrade17Button.style.display = 'flex';
    }

    const upgrade18Button = document.getElementById("upgrade18");
    if (upg18 === 1) {
        if (upgrade18Button) upgrade18Button.remove();
    } else if (upg17 === 1) {
        if (upgrade18Button) upgrade18Button.style.display = 'flex';
    }

    const upgrade40Button = document.getElementById("upgrade40");
    if (upg40 === 1) {
        if (upgrade40Button) upgrade40Button.remove();
    } else if (upg18 === 1) {
        if (upgrade40Button) upgrade40Button.style.display = 'flex';
    }

    const upgrade19Button = document.getElementById("upgrade19");
    if (upg19 === 1) {
        if (upgrade19Button) upgrade19Button.remove();
    } else if (upg40 === 1) {
        if (upgrade19Button) upgrade19Button.style.display = 'flex';
    }

    const upgrade20Button = document.getElementById("upgrade20");
    if (upg20 === 1) {
        if (upgrade20Button) upgrade20Button.remove();
    } else if (upg19 === 1) {
        if (upgrade20Button) upgrade20Button.style.display = 'flex';
    }

    const upgrade21Button = document.getElementById("upgrade21");
    if (upg21 === 1) {
        if (upgrade21Button) upgrade21Button.remove();
    } else if (upg20 === 1) {
        if (upgrade21Button) upgrade21Button.style.display = 'flex';
    }

    const upgrade22Button = document.getElementById("upgrade22");
    if (upg22 === 1) {
        if (upgrade22Button) upgrade22Button.remove();
    } else if (upg21 === 1) {
        if (upgrade22Button) upgrade22Button.style.display = 'flex';
    }

    const upgrade41Button = document.getElementById("upgrade41");
    if (upg41 === 1) {
        if (upgrade41Button) upgrade41Button.remove();
    } else if (upg22 === 1) {
        if (upgrade41Button) upgrade41Button.style.display = 'flex';
    }

    const upgrade23Button = document.getElementById("upgrade23");
    if (upg23 === 1) {
        if (upgrade23Button) upgrade23Button.remove();
    } else if (upg41 === 1) {
        if (upgrade23Button) upgrade23Button.style.display = 'flex';
    }

    const upgrade24Button = document.getElementById("upgrade24");
    if (upg24 === 1) {
        if (upgrade24Button) upgrade24Button.remove();
    } else if (upg23 === 1) {
        if (upgrade24Button) upgrade24Button.style.display = 'flex';
    }

    const upgrade25Button = document.getElementById("upgrade25");
    if (upg25 === 1) {
        if (upgrade25Button) upgrade25Button.remove();
    } else if (upg24 === 1) {
        if (upgrade25Button) upgrade25Button.style.display = 'flex';
    }

    const upgrade26Button = document.getElementById("upgrade26");
    if (upg26 === 1) {
        if (upgrade26Button) upgrade26Button.remove();
    } else if (upg25 === 1) {
        if (upgrade26Button) upgrade26Button.style.display = 'flex';
    }

    const upgrade42Button = document.getElementById("upgrade42");
    if (upg42 === 1) {
        if (upgrade42Button) upgrade42Button.remove();
    } else if (upg26 === 1) {
        if (upgrade42Button) upgrade42Button.style.display = 'flex';
    }

    const upgrade27Button = document.getElementById("upgrade27");
    if (upg27 === 1) {
        if (upgrade27Button) upgrade27Button.remove();
    } else if (upg42 === 1) {
        if (upgrade27Button) upgrade27Button.style.display = 'flex';
    }

    const upgrade28Button = document.getElementById("upgrade28");
    if (upg28 === 1) {
        if (upgrade28Button) upgrade28Button.remove();
    } else if (upg27 === 1) {
        if (upgrade28Button) upgrade28Button.style.display = 'flex';
    }

    const upgrade29Button = document.getElementById("upgrade29");
    if (upg29 === 1) {
        if (upgrade29Button) upgrade29Button.remove();
    } else if (upg28 === 1) {
        if (upgrade29Button) upgrade29Button.style.display = 'flex';
    }

    const upgrade30Button = document.getElementById("upgrade30");
    if (upg30 === 1) {
        if (upgrade30Button) upgrade30Button.remove();
    } else if (upg29 === 1) {
        if (upgrade30Button) upgrade30Button.style.display = 'flex';
    }
        }



        // Initialize tabs when page loads
        window.addEventListener('load', function() {
            detectMobile();
            // Show franchise tab by default
            switchTab('franchiseTab');
        });
        // Show franchise section from the start

        // Event listeners and intervals
        window.addEventListener('load', initializeGame);
        setInterval(updateAll, 1);
        setInterval(moneyps, 1000);  // Add money every second
        // Save game state
function exportSave(saveObj, filename) {
    try {
        // Build fallback save if none provided
        if (!saveObj) {
            if (typeof buildSave === 'function') {
                saveObj = buildSave();
            } else {
                const stored = localStorage.getItem('burgerGameSave');
                if (stored) {
                    try {
                        saveObj = JSON.parse(stored);
                    } catch (e) {
                        console.warn('Stored save is invalid JSON.', e);
                    }
                }
            }
            if (!saveObj) {
                alert('No save data available to export.');
                return;
            }
        }

        const json = JSON.stringify(saveObj, null, 2);
        const base64 = btoa(unescape(encodeURIComponent(json))); // obfuscated text for copy

        // remove existing export overlay if present
        const existing = document.getElementById('exportOverlay');
        if (existing) existing.remove();

        // create overlay using same classes as import overlay
        const overlay = document.createElement('div');
        overlay.id = 'exportOverlay';
        overlay.className = 'overlay visible';
        overlay.setAttribute('aria-hidden', 'false');

        const panel = document.createElement('div');
        panel.className = 'overlay-panel';

        const info = document.createElement('div');
        info.className = 'overlay-title';
        info.textContent = 'Copy the obfuscated save text below (paste into Import).';

        const textarea = document.createElement('textarea');
        textarea.id = 'exportOverlayTextarea';
        textarea.value = base64;
        textarea.readOnly = true;

        const btnRow = document.createElement('div');
        btnRow.className = 'btn-row';

        const copyBtn = document.createElement('button');
        copyBtn.textContent = 'Copy';
        copyBtn.onclick = async () => {
            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(textarea.value);
                } else {
                    textarea.select();
                    document.execCommand('copy');
                }
                copyBtn.textContent = 'Copied!';
                setTimeout(() => copyBtn.textContent = 'Copy', 1500);
            } catch (e) {
                console.error('Copy failed', e);
                alert('Copy failed. You can manually select and copy the text.');
            }
        };

        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Close';
        closeBtn.onclick = () => {
            overlay.remove();
        };

        btnRow.appendChild(copyBtn);
        btnRow.appendChild(closeBtn);

        panel.appendChild(info);
        panel.appendChild(textarea);
        panel.appendChild(btnRow);
        overlay.appendChild(panel);
        document.body.appendChild(overlay);

        // Autofocus & select for easier copying
        textarea.focus();
        textarea.select();
    } catch (err) {
        console.error('exportSave error:', err);
        alert('Failed to produce export text: ' + (err && err.message ? err.message : err));
    }
}
function decodeBase64ToUtf8(b64) {
    try {
        const binary = atob(b64);
        const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));
        if (window.TextDecoder) return new TextDecoder('utf-8').decode(bytes);
        // fallback
        let str = '';
        for (let i = 0; i < bytes.length; i++) str += String.fromCharCode(bytes[i]);
        return decodeURIComponent(escape(str));
    } catch (e) {
        try { return decodeURIComponent(escape(atob(b64))); } catch (_) { throw e; }
    }
}

function importSaveObject(saveObj) {
    if (!saveObj || typeof saveObj !== 'object' || typeof saveObj.count === 'undefined') {
        alert('Invalid save data. Import aborted.');
        return;
    }
    if (!confirm('Importing a save will overwrite your current progress. Continue?')) return;
    localStorage.setItem('burgerGameSave', JSON.stringify(saveObj));
    playSound && playSound('save', 0.03 * (typeof sfxVolume !== 'undefined' ? sfxVolume : 0.5));
    loadGame();
    alert('Save imported successfully.');
}

function showImportOverlay() {
    const overlay = document.getElementById('importOverlay');
    if (!overlay) return;
    overlay.classList.add('visible');
    overlay.setAttribute('aria-hidden', 'false');
    const ta = document.getElementById('importOverlayTextarea');
    if (ta) { ta.focus(); ta.select(); }
}

function hideImportOverlay() {
    const overlay = document.getElementById('importOverlay');
    if (!overlay) return;
    overlay.classList.remove('visible');
    overlay.setAttribute('aria-hidden', 'true');
    const ta = document.getElementById('importOverlayTextarea');
    if (ta) ta.value = '';
}

// Initialize buttons inside the static overlay (safe to call multiple times)
function initImportOverlay() {
    const importBtn = document.getElementById('importOverlayImport');
    const cancelBtn = document.getElementById('importOverlayCancel');
    const textarea = document.getElementById('importOverlayTextarea');

    if (cancelBtn) cancelBtn.onclick = hideImportOverlay;

    if (importBtn && textarea) {
        importBtn.onclick = function () {
            const val = textarea.value.trim();
            if (!val) { alert('Paste a save first.'); return; }
            try {
                let parsed;
                if (val.startsWith('{') || val.startsWith('[')) {
                    parsed = JSON.parse(val);
                } else {
                    const json = decodeBase64ToUtf8(val);
                    parsed = JSON.parse(json);
                }
                importSaveObject(parsed);
                hideImportOverlay();
            } catch (err) {
                console.error('Import text failed:', err);
                alert('Invalid save text. Make sure you pasted exact export text or valid JSON.');
            }
        };
    }
}

// wire up after DOM ready
window.addEventListener('DOMContentLoaded', initImportOverlay);
        function saveGame() {
            const gameState = {
                // Money and multipliers
                count,
                mps,
                clicks,
                moneymultiplier,
                golden_burger,
                dark_mode,
                // Costs
                cost1,
                cost2,
                cost3,
                cost4,
                cost5,
                cost6,
                cost7,
                cost8,
                cost9,
                cost10,
                cost11,
                cost12,
                cost13,
                cost14,
                cost15,
                cost16,
                cost17,
                cost18,
                cost19,
                cost20,
                upgp1,
                upgp2,
                upgp3,
                upgp4,
                upgp5,
                upgp6,
                upgp7,
                upgp8,
                upgp9,
                upgp10,
                upgp11,
                upgp12,
                upgp13,
                upgp14,
                upgp15,
                upgp16,
                upgp17,
                upgp18,
                upgp19,
                upgp20,
                upgp21,
                upgp22,
                upgp23,
                upgp24,
                upgp25,
                upgp26,
                upgp27,
                upgp28,
                upgp29,
                upgp30,
                upgp39,
                upgp40,
                upgp41,
                upgp42,
                fcost,

                // Production values
                worker,
                manager,
                clickamount,
                director,
                VP,
                COO,
                ceo,
                chairman,
                oracle,
                fryer,
                feast,
                verdant,
                emulsifier,
                whisperer,
                chancellor,
                priest,
                archmage,
                matriarch,
                grillmaster,


                // Counts
                M,
                M2,
                M3,
                M4,
                M5,
                M6,
                M7,
                M8,
                M9,
                M10,
                M11,
                M12,
                M13,
                M14,
                M15,
                M16,  
                M17,
                M18,
                M19,
                M20,
                // Upgrade states
                upg1,
                upg3,
                upg8,
                upg9,
                upg10,
                upg11,
                upg12,
                upg13,
                upg14,
                upg15,
                upg16,
                upg17,
                upg18,
                upg19,
                upg20,
                upg21,
                upg22,
                upg23,
                upg24,
                upg25,
                upg26,
                upg27,
                upg28,
                upg29,
                upg30,
                upg39,
                upg40,
                upg41,
                upg42,
                bimage,
                // Franchise system
                franchises,

                // Statistics
                totalclicks,
                totaltime,

                // Ice cream system
                ice,
                ips,
                icost1,
                icost2,
                icost3,
                icost4,
                icost5,
                icost6,
                icost7,
                icost8,
                icost9,
                icost10,
                icost11,
                icost12,
                icost13,
                icost14,
                iceupg1,
                iceupg2,
                iceupg3,
                iceupg4,
                iceupg5,
                iceupg6,
                iceupg7,
                iceupg8,
                iceupg9,
                iceupg10,
                iceupg11,
                iceupg12,
                iceupg13,
                iceupg14,
                
                
                // Achievement states - Save the unlocked status of each achievement
                achievements: Object.fromEntries(
                    Object.entries(achievements).map(([id, achievement]) => [
                        id,
                        achievement.unlocked
                    ])
                )
                };
                    gameState.musicVolume = musicVolume;
    gameState.sfxVolume = sfxVolume;
            localStorage.setItem('burgerGameSave', JSON.stringify(gameState));
            playSound('save', 0.03*sfxVolume);
        }

        // Load game state
        function loadGame() {
            const savedGame = localStorage.getItem('burgerGameSave');
            if (savedGame) {
                const gameState = JSON.parse(savedGame);

                // Restore money and multipliers
                count = gameState.count;
                mps = gameState.mps;
                clicks = gameState.clicks;
                moneymultiplier = gameState.moneymultiplier;
                golden_burger = gameState.golden_burger;

                // Restore costs
                cost1 = gameState.cost1;
                cost2 = gameState.cost2;
                cost3 = gameState.cost3;
                cost4 = gameState.cost4;
                cost5 = gameState.cost5;
                cost6 = gameState.cost6;
                cost7 = gameState.cost7;
                cost8 = gameState.cost8;
                cost9 = gameState.cost9;
                cost10 = gameState.cost10;
                cost11 = gameState.cost11;
                cost12 = gameState.cost12;
                cost13 = gameState.cost13;
                cost14 = gameState.cost14;
                cost15 = gameState.cost15;
                cost16 = gameState.cost16;
                cost17 = gameState.cost17;
                cost18 = gameState.cost18;
                cost19 = gameState.cost19;
                M20 = gameState.M20;
                   cost20 = gameState.cost20;
                upgp1 = gameState.upgp1;
                upgp2 = gameState.upgp2;
                upgp3 = gameState.upgp3;
                upgp4 = gameState.upgp4;
                upgp5 = gameState.upgp5;
                upgp6 = gameState.upgp6;
                upgp7 = gameState.upgp7;
                upgp8 = gameState.upgp8;
                upgp9 = gameState.upgp9;
                upgp10 = gameState.upgp10;
                upgp11 = gameState.upgp11;
                upgp12 = gameState.upgp12;
                upgp13 = gameState.upgp13;
                upgp14 = gameState.upgp14;
                upgp15 = gameState.upgp15;
                upgp16 = gameState.upgp16;
                upgp17 = gameState.upgp17;
                upgp18 = gameState.upgp18;
                upgp19 = gameState.upgp19;
                upgp20 = gameState.upgp20;
                upgp21 = gameState.upgp21;
                upgp22 = gameState.upgp22;
                upgp23 = gameState.upgp23;
                upgp24 = gameState.upgp24;
                upgp25 = gameState.upgp25;
                upgp26 = gameState.upgp26;
                upgp27 = gameState.upgp27;
                upgp28 = gameState.upgp28;
                upgp29 = gameState.upgp29;
                upgp30 = gameState.upgp30;
                upgp39 = gameState.upgp39;
                upgp40 = gameState.upgp40;
                upgp41 = gameState.upgp41;
                upgp42 = gameState.upgp42;
                fcost = gameState.fcost;
                dark_mode = gameState.dark_mode;
                // Restore production values
                worker = gameState.worker;
                manager = gameState.manager;
                clickamount = gameState.clickamount;
                director = gameState.director;
                VP = gameState.VP;
                COO = gameState.COO;
                ceo = gameState.ceo;
                chairman = gameState.chairman;
                oracle = gameState.oracle;
                fryer = gameState.fryer;
                feast = gameState.feast;
                verdant = gameState.verdant;
                emulsifier = gameState.emulsifier;
                whisperer = gameState.whisperer;
                chancellor = gameState.chancellor;
                priest = gameState.priest;
                archmage = gameState.archmage;
                matriarch = gameState.matriarch;
                grillmaster = gameState.grillmaster;


                // Restore counts
                M = gameState.M;
                M2 = gameState.M2;
                M3 = gameState.M3;
                M4 = gameState.M4;
                M5 = gameState.M5;
                M6 = gameState.M6;
                M7 = gameState.M7;
                M8 = gameState.M8;
                M9 = gameState.M9;
                M10 = gameState.M10;
                M11 = gameState.M11;
                M12 = gameState.M12;
                M13 = gameState.M13;
                M14 = gameState.M14;
                M15 = gameState.M15;
                M16 = gameState.M16;
                M17 = gameState.M17;
                M18 = gameState.M18;
                M19 = gameState.M19;
                // Restore upgrade states
                upg1 = gameState.upg1;
                upg3 = gameState.upg3;
                upg8 = gameState.upg8;
                upg9 = gameState.upg9;
                upg10 = gameState.upg10;
                upg11 = gameState.upg11;
                upg12 = gameState.upg12;
                upg13 = gameState.upg13;
                upg14 = gameState.upg14;
                upg15 = gameState.upg15;
                upg16 = gameState.upg16;
                upg17 = gameState.upg17;
                upg18 = gameState.upg18;
                upg19 = gameState.upg19;
                upg20 = gameState.upg20;
                upg21 = gameState.upg21;
                upg22 = gameState.upg22;
                upg23 = gameState.upg23;
                upg24 = gameState.upg24;
                upg25 = gameState.upg25;
                upg26 = gameState.upg26;
                upg27 = gameState.upg27;
                upg28 = gameState.upg28;
                upg29 = gameState.upg29;
                upg30 = gameState.upg30;
                upg39 = gameState.upg39;
                upg40 = gameState.upg40;
                upg41 = gameState.upg41;
                upg42 = gameState.upg42;

                // Restore franchise system
                franchises = gameState.franchises;

                // Restore statistics
                totalclicks = gameState.totalclicks;
                totaltime = gameState.totaltime;

                // Restore ice cream system
                ice = gameState.ice;
                ips = gameState.ips;
                icost1 = gameState.icost1;
                icost2 = gameState.icost2;
                icost3 = gameState.icost3;
                icost4 = gameState.icost4;
                icost5 = gameState.icost5;
                icost6 = gameState.icost6;
                icost7 = gameState.icost7;
                icost8 = gameState.icost8;
                icost9 = gameState.icost9;
                icost10 = gameState.icost10;
                icost11 = gameState.icost11;
                icost12 = gameState.icost12;
                icost13 = gameState.icost13;
                icost14 = gameState.icost14;
                iceupg1 = gameState.iceupg1;
                iceupg2 = gameState.iceupg2;
                iceupg3 = gameState.iceupg3;
                iceupg4 = gameState.iceupg4;
                iceupg5 = gameState.iceupg5;
                iceupg6 = gameState.iceupg6;
                iceupg7 = gameState.iceupg7;
                iceupg8 = gameState.iceupg8;
                iceupg9 = gameState.iceupg9;
                iceupg10 = gameState.iceupg10;
                iceupg11 = gameState.iceupg11;
                iceupg12 = gameState.iceupg12;
                iceupg13 = gameState.iceupg13;
                iceupg14 = gameState.iceupg14;
                bimage = gameState.bimage;
                    if (gameState.musicVolume !== undefined) {
        musicVolume = gameState.musicVolume;
        musicSlider.value = musicVolume * 100;
        musicOutput.innerHTML = musicSlider.value;
        if (musicGainNode) {
            musicGainNode.gain.value = musicVolume;
        }
    }
    if (gameState.dark_mode === true) {
        document.documentElement.classList.toggle("dark-mode");
        dark_mode = true;
    }
    if (gameState.sfxVolume !== undefined) {
        sfxVolume = gameState.sfxVolume;
        slider.value = sfxVolume * 100;
        output.innerHTML = slider.value;
    }
                // Restore achievements
                const chesburger = document.querySelector('.image-button');
                if (bimage == 1) {
                    chesburger.style.backgroundImage = "url('GoldenBurger.png')";
                }
                if (bimage == 2) {
                    chesburger.style.backgroundImage = "url('Diamondburger.png')";
                }
                if (bimage == 3) {
                    chesburger.style.backgroundImage = "url('Sapphireburger.png')";
                }
                if (bimage == 4) {
                    chesburger.style.backgroundImage = "url('Uraniumburger.png')";
                }
                if (bimage == 5) {
                    chesburger.style.backgroundImage = "url('Obsidianburger.png')";
                }
            if (upg11 === 1) {
                document.getElementById("MObutton").style.display = 'flex'; // Show Milkshake Oracle
                document.getElementById("SFbutton").style.display = 'flex'; // Show Shadow Fryer
            }
            if (upg39 === 1) {
                document.getElementById("betteroracle").style.display = 'flex';
                document.getElementById("betterfryer").style.display = 'flex';
            }
            if (upg15 === 1) {
                document.getElementById("feastbutton").style.display = 'flex'; // Show Keeper of the Hidden Feast
                document.getElementById("verdantbutton").style.display = 'flex'; // Show Verdant Keeper
            }
            if (upg40 === 1) {
                document.getElementById("betterfeast").style.display = 'flex';
                document.getElementById("betterverdant").style.display = 'flex';
            }
            if (upg19 === 1) {
                document.getElementById("FWbutton").style.display = 'flex'; // Show Flame Whisperer
                document.getElementById("CCbutton").style.display = 'flex'; // Show Cheese Chancellor
                document.getElementById("ESbutton").style.display = 'flex'; // Show Emulsifier Supreme
            }
            if (upg41 === 1) {
                document.getElementById("betterwhisperer").style.display = 'flex';
                document.getElementById("betterchancellor").style.display = 'flex';
            }
            if (upg23 === 1) {
                document.getElementById("GAbutton").style.display = 'flex'; // Show Golden Archmage
                document.getElementById("priestbutton").style.display = 'flex'; // Show High Priest of the Golden Bun
            }
            if (upg42 === 1) {
                document.getElementById("betterarchmage").style.display = 'flex';
                document.getElementById("betterpriest").style.display = 'flex';
            }
            if (upg27 === 1) {
                document.getElementById("PMbutton").style.display = 'flex'; // Show Patty Matriarch
                document.getElementById("GGbutton").style.display = 'flex'; // Show Grand Grillmaster
            }

                
                if (gameState.achievements) {
                    Object.entries(gameState.achievements).forEach(([id, unlocked]) => {
                        if (achievements[id]) {
                            achievements[id].unlocked = unlocked;

                            // Update achievement visual state
                            const achievementElement = document.querySelector(`[data-achievement="${id}"]`);
                            if (achievementElement) {
                                achievementElement.classList.toggle('locked', !unlocked);
                            }
                        }
                    });
                }
                checkAchievements();

                // Update visuals
                updateAll();
                   updateUpgradeVisibility(); 
                // Restore visual states based on upgrades
                if (upg1 === 1) {
                    const upgrade1Button = document.getElementById("upgrade1");
                    if (upgrade1Button) upgrade1Button.remove();
                    const franchiseImg = document.getElementById('Franchise1');
                    if (franchiseImg) franchiseImg.src = 'Restaurant-images/Restaurant+coffee.png';
                }

                if (upg3 === 1) {
                    const upgrade3Button = document.getElementById("upgrade3");
                    if (upgrade3Button) upgrade3Button.remove();
                    const franchiseImg = document.getElementById('Franchise1');
                    if (franchiseImg) franchiseImg.src = 'Restaurant-images/restaurantcoffee+ice.png';
                }

                // Restore franchise visuals
                for (let i = 2; i <= franchises && i <= 6; i++) {
                    const franchiseElement = document.getElementById(`Franchise${i}`);
                    if (franchiseElement) franchiseElement.style.display = 'block';
                }

                // Update franchise button if max reached
                if (franchises >= 6) {
                    const franchiseButton = document.querySelector('.franchise-button');
                    if (franchiseButton) {
                        franchiseButton.textContent = 'Max Franchises!';
                        franchiseButton.disabled = true;
                    }
                }

                playSound('purchase', 0.4*sfxVolume);
                alert('Game loaded successfully!');
            } else {
                playSound('error', 0.4*sfxVolume);
                alert('No saved game found!');
            }
        }

        // Delete save
        function deleteSave() {
            if (confirm('Are you sure you want to delete your save? This cannot be undone!')) {
                localStorage.removeItem('burgerGameSave');
                location.reload();
            }
        }

        function showTooltip(event, tooltipId) {
    var tooltip = document.getElementById(tooltipId);
    var rect = event.target.getBoundingClientRect();
    tooltip.style.top = rect.top + window.scrollY + 'px';
    tooltip.style.left = rect.left - tooltip.offsetWidth - 10 + 'px';
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = '1';
}

function hideTooltip(tooltipId) {
    var tooltip = document.getElementById(tooltipId);
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = '0';
}

        // Auto-save every 5 minutes
        setInterval(saveGame, 0.5 * 60 * 1000);

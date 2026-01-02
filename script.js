let isToggled = true;

// Get the checkbox element
const toggleSwitch = document.getElementById('myToggle');
// Get the paragraph element to display the status
const statusText = document.getElementById('variableStatus');

// --- FIX 1: Check if the toggle switch exists before using it ---
// This element doesn't exist on mobile_restricted.html, which causes the "cannot set properties of null" error.
if (toggleSwitch) {
    toggleSwitch.checked = isToggled;
    
    // Add an event listener for the 'change' event on the checkbox
    toggleSwitch.addEventListener('change', function() {
        // Toggle the boolean variable to the opposite value
        isToggled = this.checked;
    });
}
// --- END FIX 1 ---


var slider = document.getElementById("myRange");
var output = document.getElementById("sfxVolumeValue");

if (slider && output) {
    output.innerHTML = slider.value;
    var sfxVolume = slider.value / 100;

    slider.oninput = function() {
        output.innerHTML = this.value;
        sfxVolume = slider.value / 100;
        console.log("SFX Volume set to: " + sfxVolume);
    }
}
let musicGainNode;
var musicVolume = 0.5;
var musicSlider = document.getElementById("musicRange");
var musicOutput = document.getElementById("musicVolumeValue");

// Initialize the music volume display
if (musicSlider && musicOutput) {
    musicOutput.innerHTML = musicSlider.value;

    // Add music volume slider listener
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
let rebirthUpgradeStates = {
    rebirthUpg1: false, // Permanent Coffee Boost
    rebirthUpg3: false, // Faster Hiring
    rebirthUpg4: false, // Golden Legacy
    rebirthUpg5: false, // 7
    rebirthUpg6: false, // Golden Legacy
    rebirthUpg7: false, // Diamond Legacy
    rebirthUpg8: false, // Offline Production
    rebirthUpg9: false, // Automated Ice Cream
    rebirthUpg10: false, // Automated Clicking
    rebirthUpg11: false, // Sapphire Legacy
     rebirthUpg12: false, // Sapphire Legacy
    rebirthUpg13: false, // Better Offline Production
     rebirthUpg14: false, // Sapphire Legacy
    rebirthUpg15: false, // Uranium Legacy
     rebirthUpg16: false, // Sapphire Legacy
    rebirthUpg17: false, // Offline Profits Multiplier
     rebirthUpg18: false, // Sapphire Legacy
      rebirthUpg19: false, // Sapphire Legacy
    rebirthUpg20: false, // Obsidian Legacy
    rebirthUpg21: false, // Transcendent Burger
     rebirthUpg22: false, // Transcendent Burger
    rebirthUpg23: false  // Singularity Engine
};
const buttonsConfig = [
    { id: 'extraButton', costVar: 'cost1' },
    { id: 'Button2', costVar: 'cost2' },
    { id: 'Clickbutton', costVar: 'cost3' },
    { id: 'Clickbutton2', costVar: 'cost20' },
    { id: 'directorbutton', costVar: 'cost4' },
    { id: 'VPbutton', costVar: 'cost5' },
    { id: 'COObutton', costVar: 'cost6' },
    { id: 'ceobutton', costVar: 'cost7' },
    { id: 'chairbutton', costVar: 'cost8' },
    { id: 'MObutton', costVar: 'cost9' },
    { id: 'SFbutton', costVar: 'cost10' },
    { id: 'feastbutton', costVar: 'cost11' },
    { id: 'verdantbutton', costVar: 'cost12' },
    { id: 'ESbutton', costVar: 'cost13' },
    { id: 'FWbutton', costVar: 'cost14' },
    { id: 'CCbutton', costVar: 'cost15' },
    { id: 'priestbutton', costVar: 'cost16' },
    { id: 'GAbutton', costVar: 'cost17' },
    { id: 'PMbutton', costVar: 'cost18' },
    { id: 'GGbutton', costVar: 'cost19' },
    { id: 'upgrade1', costVar: 'upgp1' },
    { id: 'upgrade2', costVar: 'upgp2' },
    { id: 'Franchisebutton', costVar: 'fcost' },
    { id: 'upgrade3', costVar: 'upgp3' },
    { id: 'upgrade4', costVar: 'upgp4' },
    { id: 'upgrade5', costVar: 'upgp5' },
    { id: 'upgrade6', costVar: 'upgp6' },
    { id: 'upgrade7', costVar: 'upgp7' },
    { id: 'upgrade8', costVar: 'upgp8' },
    { id: 'upgrade9', costVar: 'upgp9' },
    { id: 'upgrade10', costVar: 'upgp10' },
    { id: 'upgrade11', costVar: 'upgp11', requirements: { M4: 50, M5: 50 } },
    { id: 'upgrade12', costVar: 'upgp12' },
    { id: 'upgrade13', costVar: 'upgp13' },
    { id: 'upgrade14', costVar: 'upgp14' },
    { id: 'upgrade39', costVar: 'upgp39' },
    { id: 'upgrade15', costVar: 'upgp15', requirements: { M7: 50, M9: 50 } },
    { id: 'upgrade16', costVar: 'upgp16' },
    { id: 'upgrade17', costVar: 'upgp17' },
    { id: 'upgrade18', costVar: 'upgp18' },
    { id: 'upgrade40', costVar: 'upgp40' },
    { id: 'upgrade19', costVar: 'upgp19', requirements: { M12: 50, M10: 50 } },
    { id: 'upgrade20', costVar: 'upgp20' },
    { id: 'upgrade21', costVar: 'upgp21' },
    { id: 'upgrade22', costVar: 'upgp22' },
    { id: 'upgrade41', costVar: 'upgp41' },
    { id: 'upgrade23', costVar: 'upgp23', requirements: { M15: 50, M14: 50 } },
    { id: 'upgrade24', costVar: 'upgp24' },
    { id: 'upgrade25', costVar: 'upgp25' },
    { id: 'upgrade26', costVar: 'upgp26' },
    { id: 'upgrade42', costVar: 'upgp42' },
    { id: 'upgrade27', costVar: 'upgp27', requirements: { M17: 50, M13: 50 } },
    { id: 'upgrade28', costVar: 'upgp28' },
    { id: 'upgrade29', costVar: 'upgp29' },
    { id: 'upgrade30', costVar: 'upgp30' },
    { id: 'upgrade31', costVar: 'upgp31' },
    { id: 'upgrade32', costVar: 'upgp32' },
    { id: 'upgrade33', costVar: 'upgp33' },
    { id: 'upgrade34', costVar: 'upgp34' },
    { id: 'upgrade35', costVar: 'upgp35' },
    { id: 'upgrade36', costVar: 'upgp36' },
    { id: 'upgrade37', costVar: 'upgp37' },
    { id: 'upgrade38', costVar: 'upgp38' }
];

const iceButtonsConfig = [
    { id: 'moreicepers', costVar: 'icost1' },
    { id: 'betterworker', costVar: 'icost2' },
    { id: 'bettermanager', costVar: 'icost3' },
    { id: 'betterclick', costVar: 'icost4' },
    { id: 'betterdirector', costVar: 'icost5' },
    { id: 'betterceo', costVar: 'icost6' },
    { id: 'betteroracle', costVar: 'icost7' },
    { id: 'betterfryer', costVar: 'icost8' },
    { id: 'betterfeast', costVar: 'icost9' },
    { id: 'betterverdant', costVar: 'icost10' },
    { id: 'betterwhisperer', costVar: 'icost11' },
    { id: 'betterchancellor', costVar: 'icost12' },
    { id: 'betterarchmage', costVar: 'icost13' },
    { id: 'betterpriest', costVar: 'icost14' },
    { id: 'bettergrill', costVar: 'icost15' },
    { id: 'betterpatty', costVar: 'icost16' },
];
// New Rebirth Repeatable Upgrades
let rebirthUpg2Levels = 0; // Increased Base Clicks
let rebirthUpg5Levels = 0; // Ice Cream Machine Efficiency
let rebirthUpg6Levels = 0; // Bulk Purchase Discount
let rebirthUpg12Levels = 0; // Rebirth Multiplier
let rebirthUpg14Levels = 0; // Clicker Overdrive
let rebirthUpg22Levels = 0; // Cosmic Rebirth Multiplier
var fake_click_speed = 1000;
let fakeClickIntervalId = null;
var obsidian_legacy = 1;
var rebupgp1 = 1, rebupgp2 = 1, rebupgp3 = 2, rebupgp4 = 3;
var rebupgp5 = 5, rebupgp6 = 4, rebupgp7 = 5, rebupgp8 = 10;
var rebupgp9 = 15, rebupgp10 = 20, rebupgp11 = 10, rebupgp12 = 25, rebupgp13 = 30;
var rebupgp14 = 30, rebupgp15 = 20, rebupgp16 = 40, rebupgp17 = 50, rebupgp20 = 75;
var rebupgp18 = 60, rebupgp19 = 100;
var rebupgp21 = 1000, rebupgp22 = 1250, rebupgp23 = 5000;

let lastSeenTime = Date.now();
let golden_legacy = 1;
let rebirthClickBonus = 0;
let rebirthedTimes = 0;
        // --- FIX 2: Changed 'window.count' to 'let count' ---
        // This makes 'count' a global variable just like 'mps', 'cost1', etc.
        // and fixes the "count is not defined" error in addMoney() and other functions.
        let count = 0;                   // Player's current money
        // --- END FIX 2 ---
        let cost1 = 10,                // Worker cost
            cost2 = 25,                // Manager cost
            cost3 = 15,                // Click upgrade cost
            cost4 = 100,               // director cost
            cost5 = 225,               // VP cost
            cost6 = 500,               // COO cost
            cost7 = 1250,              // CEO cost
            cost8 = 2275,                // Chairman cost
            cost9 = 5000,                // Milkshake Oracle cost
            cost10 = 12500,              // Shadow Fryer cost
            cost11 = 17500,              // Keeper of the Hidden Feast cost
            cost12 = 22500,              // Verdant Keeper cost
            cost13 = 50000,              // Emulsifier Supreme cost
            cost14 = 125000,             // Flame Whisperer cost
            cost15 = 200000,             // Cheese Chancellor cost
            cost16 = 375000,             // High Priest cost
            cost17 = 525000,             // Golden Archmage cost
            cost18 = 1000000,            // Patty Matriarch cost
            cost19 = 5000000,            // Grand Grillmaster cost
            cost20 = 20;            // Click multiply cost
        // Game mechanics variables
        let mps = 0,                   // Money per second
            worker = 1.5,              // Base manager production
            clicks = 1,                // Money per click
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
        var M = 0,                     // Number of workers
            M2 = 0,                    // Number of managers
            M3 = 0,                    // Number of click upgrades
            M4 = 0,                    // Number of directors
            M5 = 0,                    // Number of VPs
            M6 = 0,                    // Number of COOs
            M7 = 0,                    // Number of CEOs 
            M8 = 0,                    // Number of Chairmen
            M9 = 0,                    // Number of Milkshake Oracles
            M10 = 0,                   // Number of Shadow Fryers
            M11 = 0,                   // Number of Keepers of the Hidden Feast
            M12 = 0,                   // Number of Verdant Keepers
            M13 = 0,                   // Number of Emulsifier Supremes
            M14 = 0,                   // Number of Flame Whisperers
            M15 = 0,                   // Number of Cheese Chancellors
            M16 = 0,                   // Number of High Priests
            M17 = 0,                   // Number of Golden Archmages
            M18 = 0,                   // Number of Patty Matriarchs
            M19 = 0,                   // Number of Grand Grillmasters
            M20 = 0;           // Number of Click Multipliers
        // Upgrade status
          let  upg1 = 0,                   // Coffee upgrade status
            upg3 = 0,                   // Ice cream machine upgrade status
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
            upg42 = 0,
            upg43 = 0;
        // Special upgrade costs
        let upgp1 = 150;               // Coffee upgrade cost
        let upgp2 = 100000;            // Golden burger cost
        let upgp3 = 15000;             // Ice cream machine upgrade cost
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
    upgp42 = 175000000,
    upgp43 = 1000000000;
        // Special features
        let golden_burger = 1;         // Golden burger multiplier
        let moneymultiplier = 1;       // Global money multiplier
        let ablepres = 0;              // Prestige system (not implemented)
        let franchises = 1;            // How many franchises you have
        let fcost = 500000;            // The cost of a franchise
        let totalclicks = 0;
        let totaltime = 0;
        let bimage = 0;
        let dark_mode = false;         // Dark mode toggle
        let rebirth_points = 0;        // Rebirth points
        // --- FIX 2: Changed 'window.total_money' to 'let total_money' ---
        // This matches the fix for 'count' and solves the same problem.
        let total_money = 0;           // Total money earned
        // --- END FIX 2 ---
        let lastRebirthCheck = 0;      // Last rebirth check amount of money
        let click_multiplier = 0.01;
        let hasRebirthed = false;   // Whether the player has rebirthed at least once
        //Everything Ice cream related
         var ice = 0,                   // Player's current ice creams
            ips = 0,                   // how many ice creams you get per second
            icost1 = 50,                 // The first Ice cream upgrade cost   
            icost2 = 75,                 // The second Ice cream upgrade cost 
            icost3 = 100,                  // The third Ice cream upgrade cost 
            icost4 = 150,                  // The fourth Ice cream upgrade cost 
            icost5 = 200,                  // The fifth Ice cream upgrade cost
            icost6 = 250,                  // The sixth Ice cream upgrade cost
            icost7 = 300,
            icost8 = 350,
            icost9 = 400,
            icost10 = 450,
            icost11 = 500,
            icost12 = 550,
            icost13 = 600,
            icost14 = 650,
            icost15 = 700,
            icost16 = 750,
            iceupg1 = 0,           // whether you have the first ice cream upgrade or not
            iceupg2 = 0,           // whether you have the second ice cream upgrade or not
            iceupg3 = 0,           // whether you have the third ice cream upgrade or not
            iceupg4 = 0,           // whether you have the fourth ice cream upgrade or not
            iceupg5 = 0,           // whether you have the fifth ice cream upgrade or not
            iceupg6 = 0,           // whether you have the sixth ice cream upgrade or not
            iceupg7 = 0,
            iceupg8 = 0,
            iceupg9 = 0,
            iceupg10 = 0,
            iceupg11 = 0,
            iceupg12 = 0,
            iceupg13 = 0,
            iceupg14 = 0,
            iceupg15 = 0,
            iceupg16 = 0;

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
        count += amount;
        total_money += amount;
        console.log(`Money updated: ${count}`);
        updateAll();
        checkRebirthPoints();
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
            // Because 'count' is now a global 'let', this will work correctly.
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
        let audioContext;              // Web Audio API context
        let soundBuffers = {};         // Storage for loaded sound files
        let audioLoaded = false;       // Flag for audio system status

        /**
         * Initializes the audio system and loads all sound files
         * Uses async/await for proper sound loading
         */
        
        async function initAudio() {
    try {
        // Create audio context
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioContext = new AudioContext();

        // Define sound files to load
        const sounds = {
            music: 'Sound-effects/Chill.mp3',
            click: 'Sound-effects/mixkit-hard-typewriter-click-1119.mp3',
            purchase: 'Sound-effects/purchase-successful-ingame-230550.mp3',
            coffee: 'Sound-effects/cash-register-purchase-87313.mp3',
            error: 'Sound-effects/error.mp3',
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

        await Promise.all(loadPromises);
        audioLoaded = true;

        // --- FIX: Add interaction listener to unlock audio ---
        // Browsers block audio until the user clicks. This waits for that first click.
        const unlockAudio = function() {
            // Resume the context if it's suspended (which it usually is on load)
            if (audioContext.state === 'suspended') {
                audioContext.resume().then(() => {
                    console.log('Audio Context unlocked!');
                });
            }
            
            // Start music if it hasn't started yet
            if (!musicSource) {
                musicSource = playSound('music', musicVolume);
            }

            // Remove these listeners so they don't run on every single click
            document.removeEventListener('click', unlockAudio);
            document.removeEventListener('touchstart', unlockAudio);
            document.removeEventListener('keydown', unlockAudio);
        };

        // Listen for any interaction anywhere on the page
        document.addEventListener('click', unlockAudio);
        document.addEventListener('touchstart', unlockAudio);
        document.addEventListener('keydown', unlockAudio);

        // Try to play immediately (in case the browser allows it, e.g., previously allowed)
        if (audioContext.state === 'running') {
             musicSource = playSound('music', musicVolume);
        }

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
                clicks += clicks * click_multiplier;
                clickamount += clicks * click_multiplier;
                M20 += 1;
                count -= cost20;
                cost20 = Math.round(20 * (1.15 ** M20) * 10) / 10;
                quantity--;
                bought++;
                //console.log(cost20)
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
        if (rebirthUpgradeStates.rebirthUpg7 == true) {
            golden_burger += 2*1.5; 
        } else {
            golden_burger += 2; 
        }
         // Double click value
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
           if (rebirthUpgradeStates.rebirthUpg11 == true) {
            golden_burger += 2.5*1.5; 
        } else {
            golden_burger += 2.5; 
        }  // Double click value
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
        document.getElementById("upgrade43").style.display = 'flex';
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}
function upgrade43() {
    if (count >= upgp43) {
        count -= upgp43;
        upg43 = 1;
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById("upgrade43").remove();
        hideTooltip('upgrade43tooltip');
        document.getElementById("betterpatty").style.display = 'flex';
        document.getElementById("bettergrill").style.display = 'flex';
        document.getElementById("upgrade30").style.display = 'flex';
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}
function upgrade30() {
    if (count >= upgp30) {
        count -= upgp30;
        upg30 = 1;
        
        // Always show the rebirth section after purchasing this upgrade.
        document.getElementById("rebirth").style.display = 'flex';
        
        playSound('purchase', 0.4*sfxVolume);
        document.getElementById("upgrade30").remove();
        hideTooltip('upgrade30tooltip');
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
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

function rebupgrade1() {
    rebirthUpgradeStates.rebirthUpg1 = true;
    
    // Apply the effect immediately
    upg1 = 1;
    const oldWorkerAmount = worker;
    worker *= 2.5;
    if (M >= 1) {
        const workerIncrease = (worker - oldWorkerAmount) * M;
        mps += workerIncrease;
    }
  //  updateButtons();
    // Hide the original upgrade button and show the next one
    const upgrade1Button = document.getElementById("upgrade1");
    if (upgrade1Button) {
        upgrade1Button.style.display = 'none';
    }
    const rebupg5 = document.getElementById("rebirthUpgrade5");
    if (rebupg5) {
      //  rebupg5.style.display = 'flex';
    }
}

// 2. Increased Base Clicks (Repeatable)
function rebupgrade2() {
    rebirthUpg2Levels += 1;
    // The cost will be recalculated automatically by updateRebirthUI()
      //  updateButtons();
    // Apply the effect immediately
    rebirthClickBonus += 1;
}
// 3. Faster Hiring
function rebupgrade3() {
    rebirthUpgradeStates.rebirthUpg3 = true;
    //    updateButtons();
    const rebupg6 = document.getElementById("rebirthUpgrade6");
    if (rebupg6) {
     //   rebupg6.style.display = 'flex';
    }
}

function rebupgrade4() {
    rebirthUpgradeStates.rebirthUpg4 = true;
    golden_legacy = 1.25;
  updateRebirthUI();
    const rebupg7 = document.getElementById("rebirthUpgrade7");
    if (rebupg7) {
      //  rebupg7.style.display = 'flex';
    }
}
function rebupgrade5() {
    if (rebirth_points >= rebupgp5) {
        rebirth_points -= rebupgp5; // Deduct the current cost
        rebirthUpgradeStates.rebirthUpg5 = true;
        rebirthUpg5Levels += 1; // Increment the level of the upgrade

        // Recalculate the cost for the next level
        rebupgp5 = Math.round(5 * Math.pow(1.2, rebirthUpg5Levels)); // Cost increases by 1.2x per level

        // Show the next rebirth upgrade if applicable
        const rebupg9 = document.getElementById("rebirthUpgrade9");
        if (rebupg9) {
         //   rebupg9.style.display = 'flex';
        }

        // Recalculate IPS (Ice Creams Per Second) to apply the upgrade effect
        recalculateIps();
    //updateButtons();
        // Update the UI
        updateRebirthUI();
        playSound('purchase', 0.4 * sfxVolume);
    } else {
        playSound('error', 0.4 * sfxVolume);
        alert('Not enough Rebirth Points!');
    }
}
function recalculateIps() {
    // Start with the base IPS if the initial upgrade is bought
    ips = (upg3 === 1) ? 1 : 0; 

    // Apply the bonus from rebirth upgrade 5 if it exists and has levels
    if (rebirthUpgradeStates.rebirthUpg5 && rebirthUpg5Levels > 0) {
        // Apply a 25% bonus additively for each level
        ips += (1 * 0.25 * rebirthUpg5Levels); 
    }

    // Add logic for any other upgrades affecting IPS here
}
function rebupgrade6() {
    rebirthUpg6Levels += 1;
    // The cost will be recalculated automatically by updateRebirthUI()
    rebupgp6 = Math.round(4 * Math.pow(1.15, rebirthUpg6Levels));
    // Apply the effect immediately
  updateRebirthUI();
     const rebupg10 = document.getElementById("rebirthUpgrade10");
    if (rebupg10) {
     //  rebupg10.style.display = 'flex';
    }
}
function rebupgrade7() {
    rebirthUpgradeStates.rebirthUpg7 = true;
    updateRebirthUI();
    const rebupg11 = document.getElementById("rebirthUpgrade11");
    if (rebupg11) {
     //  rebupg11.style.display = 'flex';
    }
}
function rebupgrade8() {
    rebirthUpgradeStates.rebirthUpg8 = true;
    updateRebirthUI();
    const rebupg13 = document.getElementById("rebirthUpgrade13");
    if (rebupg13) {
    //    rebupg13.style.display = 'flex';
    }
}
function rebupgrade9() {
    rebirthUpgradeStates.rebirthUpg9 = true;
    updateRebirthUI();
    const toggle = document.getElementById("toggleContainer");
    if (toggle) {
       toggle.style.display = 'flex';
    }
}
function rebupgrade10() {
    rebirthUpgradeStates.rebirthUpg10 = true;
    updateRebirthUI();
    const rebupg14 = document.getElementById("rebirthUpgrade14");
    if (rebupg14) {
      //  rebupg14.style.display = 'flex';
    }
}
function rebupgrade11() {
    rebirthUpgradeStates.rebirthUpg11 = true;
    updateRebirthUI();
    const rebupg15 = document.getElementById("rebirthUpgrade15");
    if (rebupg15) {
     //   rebupg15.style.display = 'flex';
    }
}
function rebupgrade12() {
    rebirthUpgradeStates.rebirthUpg12 = true;
    moneymultiplier += parseFloat((Math.pow(1.05, rebirthedTimes)).toFixed(2));
    updateRebirthUI();
    const rebupg16 = document.getElementById("rebirthUpgrade16");
    if (rebupg16) {
     //   rebupg16.style.display = 'flex';
    }
}
function rebupgrade13() {
    rebirthUpgradeStates.rebirthUpg13 = true;
    updateRebirthUI();
    const rebupg17 = document.getElementById("rebirthUpgrade17");
    if (rebupg17) {
     //   rebupg17.style.display = 'flex';
    }
}
function rebupgrade14() {
    if (rebirth_points >= rebupgp14) {
        rebirth_points -= rebupgp14; // Deduct the current cost
        rebirthUpgradeStates.rebirthUpg14 = true;
        rebirthUpg14Levels += 1; // Increment the level of the upgrade
  fake_click_speed /= 2;
        // Recalculate the cost for the next level
        rebupgp14 = Math.round(30 * Math.pow(1.5, rebirthUpg14Levels)); // Cost increases by 1.2x per level

        // Show the next rebirth upgrade if applicable
        const rebupg18 = document.getElementById("rebirthUpgrade18");
        if (rebupg18) {
         //   rebupg18.style.display = 'flex';
        }
  restartFakeClickInterval();

        // Recalculate IPS (Ice Creams Per Second) to apply the upgrade effect
        // Update the UI
        updateRebirthUI();
        playSound('purchase', 0.4 * sfxVolume);
    } else {
        playSound('error', 0.4 * sfxVolume);
        alert('Not enough Rebirth Points!');
    }
}
function rebupgrade15() {
    rebirthUpgradeStates.rebirthUpg15 = true;
    updateRebirthUI();
    updateUpgradeButtons();
    const rebupg20 = document.getElementById("rebirthUpgrade20");
    if (rebupg20) {
        //rebupg20.style.display = 'flex';
    }
}
function rebupgrade16() {
    rebirthUpgradeStates.rebirthUpg16 = true;
    updateRebirthUI();
    updateUpgradeButtons();
    const rebupg19 = document.getElementById("rebirthUpgrade19");
    if (rebupg19) {
     //  rebupg19.style.display = 'flex';
    }
}
function rebupgrade17() {
    rebirthUpgradeStates.rebirthUpg17 = true;
    updateRebirthUI();
    updateUpgradeButtons();
}
function rebupgrade18() {
    rebirthUpgradeStates.rebirthUpg18 = true;
    obsidian_legacy = 2;
    updateRebirthUI();
    updateUpgradeButtons();
}
function rebupgrade19() {
    rebirthUpgradeStates.rebirthUpg19 = true;
    updateRebirthUI();
    checkAchievements();
    updateUpgradeButtons();
}
function rebupgrade20() {
    rebirthUpgradeStates.rebirthUpg20 = true;
    chairman *= 1.5;
    updateRebirthUI();
    checkAchievements();
    updateUpgradeButtons();
}
function rebupgrade21() {
    rebirthUpgradeStates.rebirthUpg21 = true;
    golden_legacy += 50;
    updateRebirthUI();
    checkAchievements();
    updateUpgradeButtons();
}
function rebupgrade23() {
    rebirthUpgradeStates.rebirthUpg23 = true;
    updateRebirthUI();
    checkAchievements();
    updateUpgradeButtons();
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
            if (window.location.pathname.includes('mobile_upgrades.html')) {
                return true;
            }
            if (window.location.pathname.includes('mobile_franchise.html')) {
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
        { value: 1e99, symbol: "Dtg" },   // Duotrigintillion
        { value: 1e96, symbol: "Utg" },   // Untrigintillion
        { value: 1e93, symbol: "Tg" },    // Trigintillion
        { value: 1e90, symbol: "Nvg" },   // Novemvigintillion
        { value: 1e87, symbol: "Ovg" },   // Octovigintillion
        { value: 1e84, symbol: "Spvg" },  // Septenvigintillion
        { value: 1e81, symbol: "Sxvg" },  // Sexvigintillion
        { value: 1e78, symbol: "Qivg" },  // Quinvigintillion
        { value: 1e75, symbol: "Qavg" },  // Quattuorvigintillion
        { value: 1e72, symbol: "Tvg" },   // Trevigintillion
        { value: 1e69, symbol: "Dvg" },   // Duovigintillion
        { value: 1e66, symbol: "Uvg" },   // Unvigintillion
        { value: 1e63, symbol: "Vg" },    // Vigintillion
        { value: 1e60, symbol: "Nmdc" },  // Novemdecillion
        { value: 1e57, symbol: "Ocdc" },  // Octodecillion
        { value: 1e54, symbol: "Spdc" },  // Septendecillion
        { value: 1e51, symbol: "Sxdc" },  // Sexdecillion
        { value: 1e48, symbol: "Qidc" },  // Quindecillion
        { value: 1e45, symbol: "Qadc" },  // Quattuordecillion
        { value: 1e42, symbol: "Tdc" },   // Tredecillion
        { value: 1e39, symbol: "Ddc" },   // Duodecillion
        { value: 1e36, symbol: "Udc" },   // Undecillion
        { value: 1e33, symbol: "Dc" },    // Duodecillion
        { value: 1e30, symbol: "No" },    // Novemdecillion
        { value: 1e27, symbol: "Oc" },    // Octodecillion
        { value: 1e24, symbol: "Sp" },    // Septillion
        { value: 1e21, symbol: "Sx" },    // Sextrillion
        { value: 1e18, symbol: "Qn" },    // Quintillion
        { value: 1e15, symbol: "Qd" },    // Quadrillion
        { value: 1e12, symbol: "T" },   // Trillion
        { value: 1e9, symbol: "B" },    // Billion
        { value: 1e6, symbol: "M" },    // Million
        { value: 1e3, symbol: "K" }    // Thousand
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
function betterpatty() {
    if (ice >= icost15) {
        const oldVal = matriarch;
        matriarch += Math.round(matriarch * 0.2);
        if (M18 >= 1) {
            const increase = (matriarch - oldVal) * M18;
            mps += increase;
        }
        iceupg15 += 1;
        ice -= icost15;
        icost15 = Math.round(icost15 * 1.25);
        playSound('purchase', 0.4*sfxVolume);
        updateAll();
    } else {
        playSound('error', 0.4*sfxVolume);
        updateAll();
    }
}

function bettergrill() {
    if (ice >= icost16) {
        const oldVal = grillmaster;
        grillmaster += Math.round(grillmaster * 0.2);
        if (M19 >= 1) {
            const increase = (grillmaster - oldVal) * M18;
            mps += increase;
        }
        iceupg16 += 1;
        ice -= icost16;
        icost16 = Math.round(icost16 * 1.25);
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
            let cost = button.cost;

            // Apply cost reductions from rebirth upgrades
            if (rebirthUpgradeStates.rebirthUpg3) {
                cost *= 0.95;
            }
            cost *= Math.pow(0.99, rebirthUpg6Levels);

            let quantity = purchaseAmount === 'max' ? getMaxAffordable(button.id) : purchaseAmount;
            
            // --- FIX: If Max buy is selected but user can't afford any (0), show cost for 1 ---
            let quantityForDisplay = quantity;
            if (purchaseAmount === 'max' && quantity === 0) {
                quantityForDisplay = 1;
            }
            // ---------------------------------------------------------------------------------

            let displayCost = computeEmployeeCost(button.id, quantityForDisplay);
            
            // Apply the same cost reductions to the displayed cost
            if (rebirthUpgradeStates.rebirthUpg3) {
                displayCost *= 0.95;
            }
            displayCost *= Math.pow(0.99, rebirthUpg6Levels);

            const countMap = {
                'extraButton': M, 'Button2': M2, 'Clickbutton': M3, 'Clickbutton2': M20,
                'directorbutton': M4, 'VPbutton': M5, 'COObutton': M6, 'ceobutton': M7,
                'chairbutton': M8, 'MObutton': M9, 'SFbutton': M10, 'feastbutton': M11,
                'verdantbutton': M12, 'ESbutton': M13, 'FWbutton': M14, 'CCbutton': M15,
                'priestbutton': M16, 'GAbutton': M17, 'PMbutton': M18, 'GGbutton': M19
            };

            const countText = countMap.hasOwnProperty(button.id) ? ` (${countMap[button.id]})` : '';
            const qtyText = quantity > 1 ? ` x${quantity}` : '';

            // Use 'quantityForDisplay' if you want to show price of 1 when afford is 0, 
            // OR strict 'quantity' if you want it to show cost of specific amount.
            // Standard clicker behavior: Show cost of 1 if you can't afford 1.
            element.textContent = `${button.label}${qtyText}: $${formatCurrency(displayCost)}${countText}`;
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
function applyRebirthUpgrades() {
    if(rebirthUpgradeStates.rebirthUpg15 == true){
    upgp2 = 100000;
    upgp4 = 500000;
    upgp5 = 8000000;
    upgp6 = 5000000;
    upgp7 = 1250000;
    upgp31 = 2000000000;
    upgp32 = 2500000000;
    upgp33 = 3000000000;
    upgp34 = 3500000000;
    upgp35 = 4000000000;
    upgp36 = 4500000000;
    upgp37 = 5000000000;
    upgp38 = 5500000000;
    upgp2 /= 2;
    upgp4 /= 2;
    upgp5 /= 2;
    upgp6 /= 2;
    upgp7 /= 2;
    upgp31 /= 2;
    upgp32 /= 2;
    upgp33 /= 2;
    upgp34 /= 2;
    upgp35 /= 2;
    upgp36 /= 2;
    upgp37 /= 2;
    upgp38 /= 2;
}
    // Reset all temporary bonuses before applying permanent ones
   /* golden_legacy = 1;
    rebirthClickBonus = 0;
    
    // Tier 1 Upgrades
    if (rebirthUpgradeStates.rebirthUpg1) {
        upg1 = 1; // Flag that the upgrade is owned
        worker *= 2.5;
        const upgrade1Button = document.getElementById("upgrade1");
        if (upgrade1Button) {
            upgrade1Button.style.display = 'none';
        }
    }

    if (rebirthUpg2Levels > 0) {
        rebirthClickBonus += rebirthUpg2Levels * 1;
    }
    
    // Tier 2 Upgrades
    if (rebirthUpgradeStates.rebirthUpg4) {
        golden_legacy *= 1.25;
    }
    if (rebirthUpgradeStates.rebirthUpg7) {
        golden_legacy *= 1.5;
    }

    // You would add more rebirth upgrade logic here...
    */
    updateUpgradeVisibility();
    updateAll();
}
function updateRebirthUI() {
    // --- Update Repeatable Upgrades ---

    // Upgrade 2: Increased Base Clicks
    const upg2Btn = document.getElementById("rebirthUpgrade2");
    if (upg2Btn) {
        // Recalculate cost based on current level to ensure it's always correct
        rebupgp2 = 1 + (rebirthUpg2Levels * 0.5);
        upg2Btn.textContent = `Increased Base Clicks: ${formatCurrency(rebupgp2)} RP (${rebirthUpg2Levels})`;
    }

    // You can add similar logic here for your other repeatable upgrades (5, 6, 12, etc.)
    // as you create them.

    // --- FIX: Added null checks before accessing .style ---
    const rebirthUpgrade5Container = document.getElementById("rebirthUpgrade5Container");
    if (rebirthUpgrade5Container) { // Check if the element exists
        if (rebirthUpgradeStates.rebirthUpg1) {
            rebirthUpgrade5Container.style.display = 'flex';
        } else {
            rebirthUpgrade5Container.style.display = 'none';
        }
    }

    // Check and show Rebirth Upgrade 6
    const rebirthUpgrade6Container = document.getElementById("rebirthUpgrade6Container");
    if (rebirthUpgrade6Container) { // Check if the element exists
        if (rebirthUpgradeStates.rebirthUpg3) {
            rebirthUpgrade6Container.style.display = 'flex';
        } else {
            rebirthUpgrade6Container.style.display = 'none';
        }
    }
        const rebirthUpgrade7Container = document.getElementById("rebirthUpgrade7Container");
    if (rebirthUpgrade7Container) { // Check if the element exists
        if (rebirthUpgradeStates.rebirthUpg4) {
            rebirthUpgrade7Container.style.display = 'flex';
        } else {
            rebirthUpgrade7Container.style.display = 'none';
        }
    }
            const rebirthUpgrade9Container = document.getElementById("rebirthUpgrade9Container");
    if (rebirthUpgrade9Container) { // Check if the element exists
        if (rebirthUpgradeStates.rebirthUpg5) {
            rebirthUpgrade9Container.style.display = 'flex';
        } else {
            rebirthUpgrade9Container.style.display = 'none';
        }
    }
    const rebirthUpgrade10Container = document.getElementById("rebirthUpgrade10Container");
    if (rebirthUpgrade10Container) { // Check if the element exists
        if (rebirthUpg6Levels > 0) {
            rebirthUpgrade10Container.style.display = 'flex';
        } else {
            rebirthUpgrade10Container.style.display = 'none';
        }
    }
        const rebirthUpgrade11Container = document.getElementById("rebirthUpgrade11Container");
    if (rebirthUpgrade11Container) { // Check if the element exists
        if (rebirthUpgradeStates.rebirthUpg7) {
            rebirthUpgrade11Container.style.display = 'flex';
        } else {
            rebirthUpgrade11Container.style.display = 'none';
        }
    }
            const rebirthUpgrade12Container = document.getElementById("rebirthUpgrade12Container");
    if (rebirthUpgrade12Container) { // Check if the element exists
        if (rebirthUpgradeStates.rebirthUpg9) {
            rebirthUpgrade12Container.style.display = 'flex';
        } else {
            rebirthUpgrade12Container.style.display = 'none';
        }
    }
    const rebirthUpgrade13Container = document.getElementById("rebirthUpgrade13Container");
    if (rebirthUpgrade13Container) { // Check if the element exists
        if (rebirthUpgradeStates.rebirthUpg8) {
            rebirthUpgrade13Container.style.display = 'flex';
        } else {
            rebirthUpgrade13Container.style.display = 'none';
        }
    }
        const rebirthUpgrade14Container = document.getElementById("rebirthUpgrade14Container");
    if (rebirthUpgrade14Container) { // Check if the element exists
        if (rebirthUpgradeStates.rebirthUpg10) {
            rebirthUpgrade14Container.style.display = 'flex';
        } else {
            rebirthUpgrade14Container.style.display = 'none';
        }
    }
            const rebirthUpgrade15Container = document.getElementById("rebirthUpgrade15Container");
    if (rebirthUpgrade15Container) { // Check if the element exists
        if (rebirthUpgradeStates.rebirthUpg11) {
            rebirthUpgrade15Container.style.display = 'flex';
        } else {
            rebirthUpgrade15Container.style.display = 'none';
        }
    }
   const rebirthUpgrade16Container = document.getElementById("rebirthUpgrade16Container");
    if (rebirthUpgrade16Container) { // Check if the element exists
        if (rebirthUpgradeStates.rebirthUpg12) {
            rebirthUpgrade16Container.style.display = 'flex';
        } else {
            rebirthUpgrade16Container.style.display = 'none';
        }
    }
         const rebirthUpgrade17Container = document.getElementById("rebirthUpgrade17Container");
    if (rebirthUpgrade17Container) { // Check if the element exists
        if (rebirthUpgradeStates.rebirthUpg13) {
            rebirthUpgrade17Container.style.display = 'flex';
        } else {
            rebirthUpgrade17Container.style.display = 'none';
        }
    }
               const rebirthUpgrade18Container = document.getElementById("rebirthUpgrade18Container");
    if (rebirthUpgrade18Container) { // Check if the element exists
        if (rebirthUpgradeStates.rebirthUpg15) {
            rebirthUpgrade18Container.style.display = 'flex';
        } else {
            rebirthUpgrade18Container.style.display = 'none';
        }
    }
                    const rebirthUpgrade19Container = document.getElementById("rebirthUpgrade19Container");
    if (rebirthUpgrade19Container) { // Check if the element exists
        if (rebirthUpgradeStates.rebirthUpg18) {
            rebirthUpgrade19Container.style.display = 'flex';
        } else {
            rebirthUpgrade19Container.style.display = 'none';
        }
    }
    const rebirthUpgrade20Container = document.getElementById("rebirthUpgrade20Container");
    if (rebirthUpgrade20Container) { // Check if the element exists
        if (rebirthUpgradeStates.rebirthUpg16) {
            rebirthUpgrade20Container.style.display = 'flex';
        } else {
            rebirthUpgrade20Container.style.display = 'none';
        }
    }
        const rebirthUpgrade21Container = document.getElementById("rebirthUpgrade21Container");
    if (rebirthUpgrade21Container) { // Check if the element exists
        if (rebirthUpgradeStates.rebirthUpg19) {
            rebirthUpgrade21Container.style.display = 'flex';
        } else {
            rebirthUpgrade21Container.style.display = 'none';
        }
    }
            const rebirthUpgrade23Container = document.getElementById("rebirthUpgrade23Container");
    if (rebirthUpgrade23Container) { // Check if the element exists
        if (rebirthUpgradeStates.rebirthUpg21) {
            rebirthUpgrade23Container.style.display = 'flex';
        } else {
            rebirthUpgrade23Container.style.display = 'none';
        }
    }
    // --- END FIX ---

    const rebirthPointsDisplay = document.getElementById("rebirthPointsDisplay");
    if (rebirthPointsDisplay) {
        rebirthPointsDisplay.textContent = formatCurrency(rebirth_points);
    }
    // --- Update One-Time Upgrades ---
    // This ensures one-time purchases correctly show as "BOUGHT" when the game loads.
    const upg1Btn = document.getElementById("rebirthUpgrade1");
    if (upg1Btn && rebirthUpgradeStates.rebirthUpg1) {
        upg1Btn.textContent = 'Permanent Coffee Boost: BOUGHT';
        upg1Btn.disabled = true;
    }

    const upg3Btn = document.getElementById("rebirthUpgrade3");
    if (upg3Btn && rebirthUpgradeStates.rebirthUpg3) {
        upg3Btn.textContent = 'Faster Hiring: BOUGHT';
        upg3Btn.disabled = true;
    }

    const upg4Btn = document.getElementById("rebirthUpgrade4");
    if (upg4Btn && rebirthUpgradeStates.rebirthUpg4) {
        upg4Btn.textContent = 'Golden Legacy: BOUGHT';
        upg4Btn.disabled = true;
    }
    const upg5Btn = document.getElementById("rebirthUpgrade5");
    if (upg5Btn) {
        upg5Btn.textContent = `Ice Cream Machine Efficiency: ${formatCurrency(rebupgp5)} RP (${rebirthUpg5Levels})`;
    }
        const upg6Btn = document.getElementById("rebirthUpgrade6");
    if (upg6Btn) {
        // Recalculate cost based on current level to ensure it's always correct
        rebupgp6 = 1 + (rebirthUpg6Levels * 0.5); // Ensure this calculation matches your intended cost logic
        upg6Btn.textContent = `Bulk Purchase Discount: ${formatCurrency(rebupgp6)} RP (${rebirthUpg6Levels})`;
    }

    const upg7Btn = document.getElementById("rebirthUpgrade7");
    if (upg7Btn && rebirthUpgradeStates.rebirthUpg7) {
        upg7Btn.textContent = 'Diamond Legacy: BOUGHT';
        upg7Btn.disabled = true;
    }
        const upg8Btn = document.getElementById("rebirthUpgrade8");
    if (upg8Btn && rebirthUpgradeStates.rebirthUpg8) {
        upg8Btn.textContent = 'Offline Production: BOUGHT';
        upg8Btn.disabled = true;
    }
            const upg9Btn = document.getElementById("rebirthUpgrade9");
    if (upg9Btn && rebirthUpgradeStates.rebirthUpg9) {
        upg9Btn.textContent = 'Automated Ice Cream: BOUGHT'; // Corrected text
        upg9Btn.disabled = true;
    }
                const upg10Btn = document.getElementById("rebirthUpgrade10");
    if (upg10Btn && rebirthUpgradeStates.rebirthUpg10) {
        upg10Btn.textContent = 'Automated Clicking: BOUGHT';
        upg10Btn.disabled = true;
    }
        const upg11Btn = document.getElementById("rebirthUpgrade11");
    if (upg11Btn && rebirthUpgradeStates.rebirthUpg11) {
        upg11Btn.textContent = 'Sapphire Legacy: BOUGHT';
        upg11Btn.disabled = true;
    }
            const upg12Btn = document.getElementById("rebirthUpgrade12");
    if (upg12Btn && rebirthUpgradeStates.rebirthUpg12) {
        upg12Btn.textContent = 'Rebirth Multiplier: BOUGHT';
        upg12Btn.disabled = true;
    }
                const upg13Btn = document.getElementById("rebirthUpgrade13");
    if (upg13Btn && rebirthUpgradeStates.rebirthUpg13) {
        upg13Btn.textContent = 'Better Offline Production: BOUGHT';
        upg13Btn.disabled = true;
    }
        const upg14Btn = document.getElementById("rebirthUpgrade14");
    if (upg14Btn) {
         upg14Btn.textContent = `Clicker Overdrive: ${formatCurrency(rebupgp14)} RP (${rebirthUpg14Levels})`;
    }
            const upg15Btn = document.getElementById("rebirthUpgrade15");
    if (upg15Btn && rebirthUpgradeStates.rebirthUpg15) {
        upg15Btn.textContent = 'Uranium Legacy: BOUGHT';
        upg15Btn.disabled = true;
    }
                const upg16Btn = document.getElementById("rebirthUpgrade16");
    if (upg16Btn && rebirthUpgradeStates.rebirthUpg16) {
        upg16Btn.textContent = 'Franchise Mastery : BOUGHT';
        upg16Btn.disabled = true;
    }
                      const upg17Btn = document.getElementById("rebirthUpgrade17");
    if (upg17Btn && rebirthUpgradeStates.rebirthUpg17) {
        upg17Btn.textContent = 'Offline Profits Multiplier : BOUGHT';
        upg17Btn.disabled = true;
    }
    const upg18Btn = document.getElementById("rebirthUpgrade18");
    if (upg18Btn && rebirthUpgradeStates.rebirthUpg18) {
        upg18Btn.textContent = 'Obsidian Legacy : BOUGHT';
        upg18Btn.disabled = true;
    }
        const upg19Btn = document.getElementById("rebirthUpgrade19");
    if (upg19Btn && rebirthUpgradeStates.rebirthUpg19) {
        upg19Btn.textContent = 'Prism Legacy : BOUGHT';
        upg19Btn.disabled = true;
    }
            const upg20Btn = document.getElementById("rebirthUpgrade20");
    if (upg20Btn && rebirthUpgradeStates.rebirthUpg20) {
        upg20Btn.textContent = 'Chairmans Favor : BOUGHT';
        upg20Btn.disabled = true;
    }
   const upg21Btn = document.getElementById("rebirthUpgrade21");
    if (upg21Btn && rebirthUpgradeStates.rebirthUpg21) {
        upg21Btn.textContent = 'Transcendent Burger : BOUGHT';
        upg21Btn.disabled = true;
    }
       const upg23Btn = document.getElementById("rebirthUpgrade23");
    if (upg23Btn && rebirthUpgradeStates.rebirthUpg23) {
        upg23Btn.textContent = 'Singularity Engine : BOUGHT';
        upg23Btn.disabled = true;
    }
    // Add checks for your other one-time rebirth upgrades here.
}
function rebirth() {
    if (upg30 === 1 && rebirth_points > 0) {
        if (!confirm('Are you sure you want to Rebirth? This will reset most of your progress but keep your achievements and rebirth upgrades!')) {
            return;
        }

        hasRebirthed = true;
        rebirthedTimes++;

        const preservedState = {
            total_money: total_money,
            rebirth_points: rebirth_points,
            rebirthUpgradeStates: JSON.parse(JSON.stringify(rebirthUpgradeStates)),
            rebirthUpg2Levels: rebirthUpg2Levels,
            rebirthUpg5Levels: rebirthUpg5Levels,
            rebirthUpg6Levels: rebirthUpg6Levels,
            rebirthUpg12Levels: rebirthUpg12Levels,
            rebirthUpg14Levels: rebirthUpg14Levels,
            rebirthUpg22Levels: rebirthUpg22Levels,
            rebirthedTimes: rebirthedTimes,
            achievements: Object.fromEntries(
                Object.entries(achievements).map(([id, achievement]) => [id, achievement.unlocked])
            )
        };

        resetGame();

        total_money = preservedState.total_money;
        rebirth_points = preservedState.rebirth_points;
        Object.assign(rebirthUpgradeStates, preservedState.rebirthUpgradeStates);
        rebirthUpg2Levels = preservedState.rebirthUpg2Levels;
        rebirthUpg5Levels = preservedState.rebirthUpg5Levels;
        rebirthUpg6Levels = preservedState.rebirthUpg6Levels;
        rebirthUpg12Levels = preservedState.rebirthUpg12Levels;
        rebirthUpg14Levels = preservedState.rebirthUpg14Levels;
        rebirthUpg22Levels = preservedState.rebirthUpg22Levels;
        rebirthedTimes = preservedState.rebirthedTimes;
        Object.entries(preservedState.achievements).forEach(([id, unlocked]) => {
            if (achievements[id]) {
                achievements[id].unlocked = unlocked;
            }
        });
        
        applyRebirthUpgrades();
  restartFakeClickInterval();

        document.getElementById('rebirth_button').disabled = true;
        showRebirthOverlay();
        document.querySelector('.game-wrapper').style.display = 'none';

        playSound('achieve', 0.1 * sfxVolume);
        updateUpgradeVisibility();
        saveGame();
    } else {
        playSound('error', 0.4 * sfxVolume);
    }
}



function resetGame() {
    // Resetting money, production, and multipliers
    count = 0;
    mps = 0;
    clicks = 1;
    moneymultiplier = 1;
    golden_burger = 1;
    franchises = 1;
const chesburger = document.querySelector('.image-button');
chesburger.style.backgroundImage = "url('Burger-images/Burger.png')";

    // Resetting upgrade counts
    M = M2 = M3 = M4 = M5 = M6 = M7 = M8 = M9 = M10 = M11 = M12 = M13 = M14 = M15 = M16 = M17 = M18 = M19 = M20 = 0;

    // Resetting upgrade states
    upg1 = upg3 = upg8 = upg9 = upg10 = upg11 = upg12 = upg13 = upg14 = upg15 = upg16 = upg17 = upg18 = upg19 = upg20 = upg21 = upg22 = upg23 = upg24 = upg25 = upg26 = upg27 = upg28 = upg29 = upg30 = upg39 = upg40 = upg41 = upg42 = upg43 = 0;

    // Resetting costs (if needed, otherwise they'll be recalculated on next purchase)
    cost1 = 10;
    cost2 = 25;
    cost3 = 15;
    cost4 = 100;
    cost5 = 225;
    cost6 = 500;
    cost7 = 1250;
    cost8 = 2275;
    cost9 = 5000;
    cost10 = 12500;
    cost11 = 17500;
    cost12 = 22500;
    cost13 = 50000;
    cost14 = 125000;
    cost15 = 200000;
    cost16 = 375000;
    cost17 = 525000;
    cost18 = 1000000;
    cost19 = 5000000;
    cost20 = 20;
    
    // Resetting upgrade costs
    upgp1 = 150;
    upgp2 = 100000;
    upgp3 = 15000;
    upgp4 = 500000;
    upgp5 = 800000;
    upgp6 = 1000000;
    upgp7 = 1250000;
    upgp8 = 25000;
    upgp9 = 75000;
    upgp10 = 100000;
    upgp11 = 175000;
    upgp12 = 225000;
    upgp13 = 300000;
    upgp14 = 500000;
    upgp15 = 750000;
    upgp16 = 1000000;
    upgp17 = 1250000;
    upgp18 = 1550000;
    upgp19 = 2000000;
    upgp20 = 3500000;
    upgp21 = 6250000;
    upgp22 = 10250000;
    upgp23 = 15750000;
    upgp24 = 22500000;
    upgp25 = 55000000;
    upgp26 = 125000000;
    upgp27 = 250000000;
    upgp28 = 500000000;
    upgp29 = 750000000;
    upgp30 = 1750000000;
    upgp39 = 600000;
    upgp40 = 1750000;
    upgp41 = 13000000;
    upgp42 = 175000000;
    upgp43 = 1000000000;
    fcost = 500000;

    // Resetting production values
    worker = 1.5;
    manager = 5;
    clickamount = 2;
    director = 7.5;
    VP = 10;
    COO = 17.5;
    ceo = 50;
    chairman = 125;
    oracle = 250;
    fryer = 400;
    feast = 850;
    verdant = 1250;
    emulsifier = 1700;
    whisperer = 2900;
    chancellor = 5000;
    priest = 10000;
    archmage = 25000;
    matriarch = 55000;
    grillmaster = 250000;

    // Resetting Ice Cream system
    ice = 0;
    ips = 0;
    icost1 = 50;
    icost2 = 75;
    icost3 = 100;
    icost4 = 150;
    icost5 = 200;
    icost6 = 250;
    icost7 = 300;
    icost8 = 350;
    icost9 = 400;
    icost10 = 450;
    icost11 = 500;
    icost12 = 550;
    icost13 = 600;
    icost14 = 650;
    icost15 = 700;
    icost16 = 750;
    iceupg1 = iceupg2 = iceupg3 = iceupg4 = iceupg5 = iceupg6 = iceupg7 = iceupg8 = iceupg9 = iceupg10 = iceupg11 = iceupg12 = iceupg13 = iceupg14 = iceupg15 = iceupg16 = 0;

    // Resetting game stats
    totalclicks = 0;
    totaltime = 0;
    bimage = 0;
    lastRebirthCheck = 0;

    // Call update functions to refresh the UI with new values
    updateAll();
    updateUpgradeVisibility();
}
function showRebirthOverlay() {
    // --- FIX: Check if elements exist before using them ---
    const overlay = document.getElementById('rebirthOverlay');
    const pointsDisplay = document.getElementById('rebirthPointsDisplay');
    const gameWrapper = document.querySelector('.game-wrapper');

    if (overlay) {
        overlay.classList.add('visible');
        overlay.setAttribute('aria-hidden', 'false');
    } else {
        console.warn("Element with ID 'rebirthOverlay' not found."); // Optional: Warn if missing
    }

    if (pointsDisplay) {
        pointsDisplay.textContent = formatCurrency(rebirth_points); // Use formatCurrency here too
    } else {
        console.warn("Element with ID 'rebirthPointsDisplay' not found."); // Optional: Warn if missing
    }

    if (gameWrapper) {
        gameWrapper.style.display = 'none'; // Hide the main game content
    } else {
        console.warn("Element with class '.game-wrapper' not found."); // Optional: Warn if missing
    }
    // --- END FIX ---
}

function hideRebirthOverlay() {
    // --- FIX: Check if elements exist before using them ---
    const overlay = document.getElementById('rebirthOverlay');
    const gameWrapper = document.querySelector('.game-wrapper');

    if (overlay) {
        overlay.classList.remove('visible');
        overlay.setAttribute('aria-hidden', 'true');
    } else {
        console.warn("Element with ID 'rebirthOverlay' not found."); // Optional: Warn if missing
    }

    if (gameWrapper) {
        gameWrapper.style.display = 'flex'; // Show the main game content again
    } else {
        console.warn("Element with class '.game-wrapper' not found."); // Optional: Warn if missing
    }
    // --- END FIX ---

    updateAll(); // Update the UI in case any rebirth upgrades were bought
    // Consider if reload is necessary - might interrupt user flow if they just bought upgrades
    // location.reload(); 
}
function getRebirthUpgradeInfo(upgradeNumber) {
    const infoMap = {
        1: { id: 'rebirthUpgrade1', isRepeatable: false },
        2: { id: 'rebirthUpgrade2', isRepeatable: true, levelVariable: 'rebirthUpg2Levels' },
        3: { id: 'rebirthUpgrade3', isRepeatable: false },
        4: { id: 'rebirthUpgrade4', isRepeatable: false },
        5: { id: 'rebirthUpgrade5', isRepeatable: true, levelVariable: 'rebirthUpg5Levels' },
        6: { id: 'rebirthUpgrade6', isRepeatable: true, levelVariable: 'rebirthUpg6Levels' },
        7: { id: 'rebirthUpgrade7', isRepeatable: false },
        8: { id: 'rebirthUpgrade8', isRepeatable: false },
        9: { id: 'rebirthUpgrade9', isRepeatable: false },
        10: { id: 'rebirthUpgrade10', isRepeatable: false },
        11: { id: 'rebirthUpgrade11', isRepeatable: false },
        12: { id: 'rebirthUpgrade12', isRepeatable: false},
        13: { id: 'rebirthUpgrade13', isRepeatable: false },
        14: { id: 'rebirthUpgrade14', isRepeatable: true, levelVariable: 'rebirthUpg14Levels' },
        15: { id: 'rebirthUpgrade15', isRepeatable: false },
        16: { id: 'rebirthUpgrade16', isRepeatable: false},
        17: { id: 'rebirthUpgrade17', isRepeatable: false },
        18: { id: 'rebirthUpgrade18', isRepeatable: false },
        19: { id: 'rebirthUpgrade19', isRepeatable: false },
        20: { id: 'rebirthUpgrade20', isRepeatable: false },
        21: { id: 'rebirthUpgrade21', isRepeatable: false },
        22: { id: 'rebirthUpgrade22', isRepeatable: true, levelVariable: 'rebirthUpg22Levels' },
        23: { id: 'rebirthUpgrade23', isRepeatable: false },
    };

    const info = infoMap[upgradeNumber];
    if (info) {
        // Set the cost by dynamically looking up the cost variable
        info.cost = window[`rebupgp${upgradeNumber}`];
    }
    return info;
}

function buyRebirthUpgrade(upgradeNumber) {
    const upgradeInfo = getRebirthUpgradeInfo(upgradeNumber);
    if (!upgradeInfo) {
        console.error("Invalid upgrade number:", upgradeNumber);
        return;
    }

    // Get the current, correct cost for the upgrade from the global variable
    let currentCost = window['rebupgp' + upgradeNumber];

    // Check for an undefined cost right away
    if (currentCost === undefined) {
        console.error(`Cost for upgrade #${upgradeNumber} (rebupgp${upgradeNumber}) is undefined. Make sure it's defined at the top of the script.`);
        playSound('error', 0.4 * sfxVolume);
        return;
    }

    // Check if the player has enough points
    if (rebirth_points >= currentCost) {
        // --- Purchase Successful ---
        rebirth_points -= currentCost; // Subtract the points ONCE
        playSound('purchase', 0.4 * sfxVolume);

        // Call the specific function to apply the upgrade's effect
        const upgradeFunction = window[`rebupgrade${upgradeNumber}`];
        if (typeof upgradeFunction === 'function') {
            upgradeFunction();
        }

        updateAll(); // Refreshes the UI
        saveGame();

    } else {
        // --- Purchase Failed ---
        alert('Not enough Rebirth Points!');
        console.log(`Current Rebirth Points: ${rebirth_points}, Required: ${currentCost}`);
        playSound('error', 0.4 * sfxVolume);
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
    updateRebirthUI();
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

function checkRebirthPoints() {
    // Calculate how many billions have passed since last check
    let billionsPassed = Math.floor(total_money / 1000000000) - Math.floor(lastRebirthCheck / 1000000000);

    if (billionsPassed > 0) {
        rebirth_points += billionsPassed;  // give points
        lastRebirthCheck = total_money;    // update milestone
        //console.log(`+${millionsPassed} Rebirth Point(s)! Total: ${rebirth_points}`);
    }
}
        /**
         * Updates money display
         */
function updateMoney() {
    count = Math.round(count * 10) / 10;
    total_money = Math.round(total_money * 10) / 10;
    checkRebirthPoints();
    document.getElementById('money').value = "Money: $" + formatCurrency(count);
    document.getElementById('ice').value = "Ice Creams: " + formatCurrency(ice);
}
        /**
         * Updates money per second and per click displays
         */
function updatemps() {

    const currentMps = parseFloat((mps * (moneymultiplier*obsidian_legacy)).toFixed(1));
    const currentClicks = parseFloat((((clicks + rebirthUpg2Levels) * (golden_burger * golden_legacy)) * (moneymultiplier*obsidian_legacy)).toFixed(1));
    //const currentips = ips * rebirthUpg5Levels;
    document.getElementById('moneypersecond').value = "Money per second: $" + formatCurrency(currentMps);
    document.getElementById('moneyperclick').value = "Money per click: $" + formatCurrency(currentClicks);
    document.getElementById('moneymultiplier').value = "Money multiplier: " + parseFloat((moneymultiplier*obsidian_legacy).toFixed(1));
    document.getElementById('icepers').value = "Ice Creams per second: " + formatCurrency(ips);
    document.getElementById('rebirth_points').value = "Rebirth Points: " + formatCurrency(rebirth_points);
}
        /**
         * Handles clicking the burger
         */
        function addMoney() {
            // All these variables will now be found correctly!
            count += parseFloat((((clicks + rebirthUpg2Levels) * (golden_burger * golden_legacy)) * (moneymultiplier*obsidian_legacy)).toFixed(1));
            total_money += parseFloat(((clicks + rebirthUpg2Levels) * (golden_burger * golden_legacy) * (moneymultiplier*obsidian_legacy)).toFixed(1));
            checkRebirthPoints();
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

    // 1. Tooltip Updates (Keep existing text updates)
    const moreIcePersBtn = document.getElementById('moreicepers');
    if (moreIcePersBtn) {
        moreIcePersBtn.textContent = "Upgrade the Ice Cream machine! " + formatCurrency(icost1) + ' ice';
    }
    const betterWorkerBtn = document.getElementById('betterworker');
    if (betterWorkerBtn) {
        betterWorkerBtn.textContent = "Make workers better! " + formatCurrency(icost2) + ' ice';
    }
    const betterManagerBtn = document.getElementById('bettermanager');
    if (betterManagerBtn) {
        betterManagerBtn.textContent = "Make managers better! " + formatCurrency(icost3) + ' ice';
    }
    const betterClickBtn = document.getElementById('betterclick');
    if (betterClickBtn) {
        betterClickBtn.textContent = "Make more click money better! " + formatCurrency(icost4) + ' ice';
    }
    const betterDirectorBtn = document.getElementById('betterdirector');
    if (betterDirectorBtn) {
        betterDirectorBtn.textContent = "Make directors better! " + formatCurrency(icost5) + ' ice';
    }
    const betterCeoBtn = document.getElementById('betterceo');
    if (betterCeoBtn) {
        betterCeoBtn.textContent = "Make CEOs better! " + formatCurrency(icost6) + ' ice';
    }
    const betterOracleBtn = document.getElementById('betteroracle');
    if (betterOracleBtn) {
        betterOracleBtn.textContent = "Oracle secrets! " + formatCurrency(icost7) + ' ice';
    }
    const betterFryerBtn = document.getElementById('betterfryer');
    if (betterFryerBtn) {
        betterFryerBtn.textContent = "Fryer tricks! " + formatCurrency(icost8) + ' ice';
    }
    const betterFeastBtn = document.getElementById('betterfeast');
    if (betterFeastBtn) {
        betterFeastBtn.textContent = "Enhance feast! " + formatCurrency(icost9) + ' ice';
    }
    const betterVerdantBtn = document.getElementById('betterverdant');
    if (betterVerdantBtn) {
        betterVerdantBtn.textContent = "Grow verdant! " + formatCurrency(icost10) + ' ice';
    }
    const betterWhispererBtn = document.getElementById('betterwhisperer');
    if (betterWhispererBtn) {
        betterWhispererBtn.textContent = "Whisperer smoke! " + formatCurrency(icost11) + ' ice';
    }
    const betterChancellorBtn = document.getElementById('betterchancellor');
    if (betterChancellorBtn) {
        betterChancellorBtn.textContent = "Cheese mastery! " + formatCurrency(icost12) + ' ice';
    }
    const betterArchmageBtn = document.getElementById('betterarchmage');
    if (betterArchmageBtn) {
        betterArchmageBtn.textContent = "Arcane tips! " + formatCurrency(icost13) + ' ice';
    }
    const betterPriestBtn = document.getElementById('betterpriest');
    if (betterPriestBtn) {
        betterPriestBtn.textContent = "Sacred buns! " + formatCurrency(icost14) + ' ice';
    }
    const betterPattyBtn = document.getElementById('betterpatty');
    if (betterPattyBtn) {
        betterPattyBtn.textContent = "Discover the Smoldering Ember Cone! " + formatCurrency(icost15) + ' ice';
    }
    const betterGrillBtn = document.getElementById('bettergrill');
    if (betterGrillBtn) {
        betterGrillBtn.textContent = "Reassemble the Gilded Dough Whisk! " + formatCurrency(icost16) + ' ice';
    }

    updateUpgradeButtons();
    updateFranchiseButton();

    // Tooltip text updates for employees
    const workerTooltip = document.getElementById('Workertooltip');
    if (workerTooltip) workerTooltip.textContent = "Earns $" + formatCurrency(worker) + " per second";
    
    const managerTooltip = document.getElementById('Managertooltip');
    if (managerTooltip) managerTooltip.textContent = "Earns $" + formatCurrency(manager) + " per second";
    
    const moreClickTooltip = document.getElementById('Moreclicktooltip');
    if (moreClickTooltip) moreClickTooltip.textContent = "Increases click value by $" + formatCurrency(clickamount);
    
    const directorTooltip = document.getElementById('directortooltip');
    if (directorTooltip) directorTooltip.textContent = "Earns $" + formatCurrency(director) + " per second";
    
    const vpTooltip = document.getElementById('VPtooltip');
    if (vpTooltip) vpTooltip.textContent = "Earns $" + formatCurrency(VP) + " per second";
    
    const cooTooltip = document.getElementById('COOtooltip');
    if (cooTooltip) cooTooltip.textContent = "Earns $" + formatCurrency(COO) + " per second";
    
    const ceoTooltip = document.getElementById('Ceotooltip');
    if (ceoTooltip) ceoTooltip.textContent = "Earns $" + formatCurrency(ceo) + " per second";
    
    const chairmanTooltip = document.getElementById('Chairmantooltip');
    if (chairmanTooltip) chairmanTooltip.textContent = "Earns $" + formatCurrency(chairman) + " per second";
    
    const moTooltip = document.getElementById('MOtooltip');
    if (moTooltip) moTooltip.textContent = "Earns $" + formatCurrency(oracle) + " per second";
    
    const sfTooltip = document.getElementById('SFtooltip');
    if (sfTooltip) sfTooltip.textContent = "Earns $" + formatCurrency(fryer) + " per second";
    
    const feastTooltip = document.getElementById('Feasttooltip');
    if (feastTooltip) feastTooltip.textContent = "Earns $" + formatCurrency(feast) + " per second";
    
    const verdantTooltip = document.getElementById('Verdanttooltip');
    if (verdantTooltip) verdantTooltip.textContent = "Earns $" + formatCurrency(verdant) + " per second";
    
    const esTooltip = document.getElementById('EStooltip');
    if (esTooltip) esTooltip.textContent = "Earns $" + formatCurrency(emulsifier) + " per second";
    
    const fwTooltip = document.getElementById('FWtooltip');
    if (fwTooltip) fwTooltip.textContent = "Earns $" + formatCurrency(whisperer) + " per second";
    
    const ccTooltip = document.getElementById('CCtooltip');
    if (ccTooltip) ccTooltip.textContent = "Earns $" + formatCurrency(chancellor) + " per second";
    
    const priestTooltip = document.getElementById('Priesttooltip');
    if (priestTooltip) priestTooltip.textContent = "Earns $" + formatCurrency(priest) + " per second";
    
    const gaTooltip = document.getElementById('GAtooltip');
    if (gaTooltip) gaTooltip.textContent = "Earns $" + formatCurrency(archmage) + " per second";
    
    const pmTooltip = document.getElementById('PMtooltip');
    if (pmTooltip) pmTooltip.textContent = "Earns $" + formatCurrency(matriarch) + " per second";
    
    const ggTooltip = document.getElementById('GGtooltip');
    if (ggTooltip) ggTooltip.textContent = "Earns $" + formatCurrency(grillmaster) + " per second";
    
    const multiplyClickTooltip = document.getElementById('Multiplyclicktooltip');
    if (multiplyClickTooltip) multiplyClickTooltip.textContent = "Increases click value by 0.01x";

    // 2. Define Arrays INSIDE function to catch correct 'let' variable values
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
        { id: 'bettergrill', cost: icost15 },
        { id: 'betterpatty', cost: icost16 },
    ];

    window.M4 = M4; window.M5 = M5; window.M7 = M7; window.M9 = M9;
    window.M12 = M12; window.M10 = M10; window.M15 = M15; window.M14 = M14;
    window.M17 = M17; window.M13 = M13;

    // --- REBIRTH BUTTON (Optimized to prevent lag) ---
    const rebirthButton = document.getElementById("rebirth_button");
    if (rebirthButton) {
        const canAffordRebirth = (upg30 === 1 && rebirth_points >= 1);
        if (canAffordRebirth) {
            if (rebirthButton.disabled === true) {
                rebirthButton.disabled = false;
                rebirthButton.textContent = 'Rebirth!';
                rebirthButton.classList.add('can-afford');
                rebirthButton.classList.remove('cannot-afford');
            }
        } else {
            if (rebirthButton.disabled === false) {
                rebirthButton.disabled = true;
                rebirthButton.textContent = 'Rebirth';
                rebirthButton.classList.add('cannot-afford');
                rebirthButton.classList.remove('can-afford');
            }
        }
    }

    // --- BUTTON LOOPS (Restored to work with 'let' variables + Optimized to prevent lag) ---
    buttons.forEach(button => {
        const buttonElement = document.getElementById(button.id);
        if (buttonElement) {
            let quantity = purchaseAmount === 'max' ? getMaxAffordable(button.id) : purchaseAmount;
            if (employeeInfo.hasOwnProperty(button.id)) {
                if (quantity < 1) quantity = 1;
            } else {
                quantity = 1; 
            }
            const costToCheck = employeeInfo.hasOwnProperty(button.id)
                ? computeEmployeeCost(button.id, quantity)
                : button.cost;
            const canAfford = count >= costToCheck;
            let meetsRequirements = true;

            if (button.requirements) {
                meetsRequirements = Object.entries(button.requirements).every(([key, value]) => {
                    return window[key] !== undefined && window[key] >= value;
                });
            }

            // Only update DOM if class needs changing
            if (canAfford && meetsRequirements) {
                if (!buttonElement.classList.contains('can-afford')) {
                    buttonElement.classList.add('can-afford');
                    buttonElement.classList.remove('cannot-afford');
                }
            } else {
                if (!buttonElement.classList.contains('cannot-afford')) {
                    buttonElement.classList.add('cannot-afford');
                    buttonElement.classList.remove('can-afford');
                }
            }
        }
    });

    Ibuttons.forEach(button => {
        const buttonElement = document.getElementById(button.id);
        if (buttonElement) {
            if (ice >= button.cost) {
                if (!buttonElement.classList.contains('can-afford')) {
                    buttonElement.classList.add('can-afford');
                    buttonElement.classList.remove('cannot-afford');
                }
            } else {
                if (!buttonElement.classList.contains('cannot-afford')) {
                    buttonElement.classList.add('cannot-afford');
                    buttonElement.classList.remove('can-afford');
                }
            }
        }
    });
}
        function moneyps() {
            detectMobile();
            count += mps*(moneymultiplier*obsidian_legacy);
            total_money += mps*(moneymultiplier*obsidian_legacy);
            checkRebirthPoints();
            updateAll();
            checkTabHighlights();
            totaltime ++;
            if (upg3 == 1) {
                ice += ips; //if you have upgrade 3, add 1 to the ice, per second
            }
                if(rebirthUpgradeStates.rebirthUpg9 == true && isToggled == true) {
    buyAllIceUpgrades();
    }

        }

        /**
         * Initializes the game
         */
function initializeGame() {
    if (detectMobile()) {
        initAudio();
        setTimeout(function() {
            loadGame();
            if (hasRebirthed) {
                const rebirthSection = document.getElementById("rebirth");
                if (rebirthSection) {
                    rebirthSection.style.display = 'flex';
                }
            }
        }, 300); // Delay loadGame to ensure other initializations are complete
        checkAchievements();
        Update();
    }
}
function buyall() {
    const employeeIds = Object.keys(employeeInfo);
    let totalPurchased = 0;
    let purchaseMade = true;
    
    // Create a mapping of cost variables to their current values
    const costMapping = {
        'cost1': cost1, 'cost2': cost2, 'cost3': cost3, 'cost4': cost4, 'cost5': cost5,
        'cost6': cost6, 'cost7': cost7, 'cost8': cost8, 'cost9': cost9, 'cost10': cost10,
        'cost11': cost11, 'cost12': cost12, 'cost13': cost13, 'cost14': cost14, 'cost15': cost15,
        'cost16': cost16, 'cost17': cost17, 'cost18': cost18, 'cost19': cost19, 'cost20': cost20
    };
    
    // Sort employees by their current cost (cheapest first)
    const sortedEmployees = employeeIds.sort((a, b) => {
        const costA = costMapping[employeeInfo[a].costVar] || 0;
        const costB = costMapping[employeeInfo[b].costVar] || 0;
        return costA - costB;
    });
    
    // Keep cycling through employees until no more purchases can be made
    while (purchaseMade) {
        purchaseMade = false;
        
        for (const employeeId of sortedEmployees) {
            const info = employeeInfo[employeeId];
            const currentCost = costMapping[info.costVar];
            
            // Skip if cost is undefined or invalid
            if (!currentCost || currentCost <= 0) {
              //  console.log(`Skipping ${employeeId} - invalid cost: ${currentCost}, costVar: ${info.costVar}`);
                continue;
            }
            
            // If we can afford this employee, buy one
            if (count >= currentCost) {
               //  console.log(`Buying ${employeeId} for ${currentCost}`);
                
                // Make the purchase
                count -= currentCost;
                window[info.countVar] += 1;
                
                // Handle special effects for click upgrades
                if (info.costVar === 'cost3') {
                    // Better clicks upgrade
                    clicks += parseFloat(clickamount.toFixed(1));
                } else if (info.costVar === 'cost20') {
                    // Click multiply upgrade
                    clicks += clicks * click_multiplier;
                    clickamount += clicks * click_multiplier;
                }
                
                // Update the cost for next purchase
                const newCost = Math.round(info.base * Math.pow(info.rate, window[info.countVar]) * 10) / 10;
                costMapping[info.costVar] = newCost;
                
                // Also update the actual cost variable
                switch(info.costVar) {
                    case 'cost1': cost1 = newCost; break;
                    case 'cost2': cost2 = newCost; break;
                    case 'cost3': cost3 = newCost; break;
                    case 'cost4': cost4 = newCost; break;
                    case 'cost5': cost5 = newCost; break;
                    case 'cost6': cost6 = newCost; break;
                    case 'cost7': cost7 = newCost; break;
                    case 'cost8': cost8 = newCost; break;
                    case 'cost9': cost9 = newCost; break;
                    case 'cost10': cost10 = newCost; break;
                    case 'cost11': cost11 = newCost; break;
                    case 'cost12': cost12 = newCost; break;
                    case 'cost13': cost13 = newCost; break;
                    case 'cost14': cost14 = newCost; break;
                    case 'cost15': cost15 = newCost; break;
                    case 'cost16': cost16 = newCost; break;
                    case 'cost17': cost17 = newCost; break;
                    case 'cost18': cost18 = newCost; break;
                    case 'cost19': cost19 = newCost; break;
                    case 'cost20': cost20 = newCost; break;
                }
                
                totalPurchased++;
                purchaseMade = true;
            } else {
               // console.log(`Cannot afford ${employeeId} at cost $${currentCost}. Current money: $${count}`);
            }
        }
    }
    
    // Recalculate money per second
    mps = (M * worker) + (M2 * manager) + (M3 * 0) + (M4 * director) + 
          (M5 * VP) + (M6 * COO) + (M7 * ceo) + (M8 * chairman) + 
          (M9 * oracle) + (M10 * fryer) + (M11 * feast) + (M12 * verdant) + 
          (M13 * emulsifier) + (M14 * whisperer) + (M15 * chancellor) + 
          (M16 * priest) + (M17 * archmage) + (M18 * matriarch) + (M19 * grillmaster);
    
    mps = mps * golden_burger * (moneymultiplier * obsidian_legacy);
    
    updateAll();
    
    console.log(`Round-robin complete! Purchased ${totalPurchased} employees total`);
    return totalPurchased;
}

function buyAllIceUpgrades() {
    // Defines the properties for each ice upgrade, including an unlock condition.
    const iceUpgrades = [
        // These are unlocked when the ice cream machine is built (upg3)
        { costVar: 'icost1', upgCountVar: 'iceupg1', costMultiplier: 1.5, isUnlocked: () => upg3 === 1, applyEffect: () => { ips += 2.5; } },
        { costVar: 'icost2', upgCountVar: 'iceupg2', costMultiplier: 1.25, isUnlocked: () => upg3 === 1, applyEffect: () => { const oldVal = worker; worker += parseFloat((worker * 0.2).toFixed(1)); if (M >= 1) { mps += (worker - oldVal) * M; } } },
        { costVar: 'icost3', upgCountVar: 'iceupg3', costMultiplier: 1.25, isUnlocked: () => upg3 === 1, applyEffect: () => { const oldVal = manager; manager += Math.round(manager * 0.2); if (M2 >= 1) { mps += (manager - oldVal) * M2; } } },
        { costVar: 'icost4', upgCountVar: 'iceupg4', costMultiplier: 1.25, isUnlocked: () => upg3 === 1, applyEffect: () => { const oldVal = clickamount; clickamount += parseFloat((clickamount * 0.2).toFixed(1)); if (M3 >= 1) { clicks += (clickamount - oldVal) * M3; } } },
        { costVar: 'icost5', upgCountVar: 'iceupg5', costMultiplier: 1.25, isUnlocked: () => upg3 === 1, applyEffect: () => { const oldVal = director; director += Math.round(director * 0.2); if (M4 >= 1) { mps += (director - oldVal) * M4; } } },
        { costVar: 'icost6', upgCountVar: 'iceupg6', costMultiplier: 1.25, isUnlocked: () => upg3 === 1, applyEffect: () => { const oldVal = ceo; ceo += Math.round(ceo * 0.2); if (M7 >= 1) { mps += (ceo - oldVal) * M7; } } },
        
        // These are unlocked by upg39 ("Advanced Schematics")
        { costVar: 'icost7', upgCountVar: 'iceupg7', costMultiplier: 1.25, isUnlocked: () => upg39 === 1, applyEffect: () => { const oldVal = oracle; oracle += Math.round(oracle * 0.2); if (M9 >= 1) { mps += (oracle - oldVal) * M9; } } },
        { costVar: 'icost8', upgCountVar: 'iceupg8', costMultiplier: 1.25, isUnlocked: () => upg39 === 1, applyEffect: () => { const oldVal = fryer; fryer += Math.round(fryer * 0.2); if (M10 >= 1) { mps += (fryer - oldVal) * M10; } } },
        
        // These are unlocked by upg40 ("Cryo-Piping")
        { costVar: 'icost9', upgCountVar: 'iceupg9', costMultiplier: 1.25, isUnlocked: () => upg40 === 1, applyEffect: () => { const oldVal = feast; feast += Math.round(feast * 0.2); if (M11 >= 1) { mps += (feast - oldVal) * M11; } } },
        { costVar: 'icost10', upgCountVar: 'iceupg10', costMultiplier: 1.25, isUnlocked: () => upg40 === 1, applyEffect: () => { const oldVal = verdant; verdant += Math.round(verdant * 0.2); if (M12 >= 1) { mps += (verdant - oldVal) * M12; } } },
        
        // These are unlocked by upg41 ("Flavor Synthesis")
        { costVar: 'icost11', upgCountVar: 'iceupg11', costMultiplier: 1.25, isUnlocked: () => upg41 === 1, applyEffect: () => { const oldVal = whisperer; whisperer += Math.round(whisperer * 0.2); if (M14 >= 1) { mps += (whisperer - oldVal) * M14; } } },
        { costVar: 'icost12', upgCountVar: 'iceupg12', costMultiplier: 1.25, isUnlocked: () => upg41 === 1, applyEffect: () => { const oldVal = chancellor; chancellor += Math.round(chancellor * 0.2); if (M15 >= 1) { mps += (chancellor - oldVal) * M15; } } },
        
        // These are unlocked by upg42 ("Sugar Sublimation")
        { costVar: 'icost13', upgCountVar: 'iceupg13', costMultiplier: 1.25, isUnlocked: () => upg42 === 1, applyEffect: () => { const oldVal = archmage; archmage += Math.round(archmage * 0.2); if (M17 >= 1) { mps += (archmage - oldVal) * M17; } } },
        { costVar: 'icost14', upgCountVar: 'iceupg14', costMultiplier: 1.25, isUnlocked: () => upg42 === 1, applyEffect: () => { const oldVal = priest; priest += Math.round(priest * 0.2); if (M16 >= 1) { mps += (priest - oldVal) * M16; } } },
        
        // These are unlocked by upg43 ("Celestial Sprinkles")
        { costVar: 'icost15', upgCountVar: 'iceupg15', costMultiplier: 1.25, isUnlocked: () => upg43 === 1, applyEffect: () => { const oldVal = matriarch; matriarch += Math.round(matriarch * 0.2); if (M18 >= 1) { mps += (matriarch - oldVal) * M18; } } },
        { costVar: 'icost16', upgCountVar: 'iceupg16', costMultiplier: 1.25, isUnlocked: () => upg43 === 1, applyEffect: () => { const oldVal = grillmaster; grillmaster += Math.round(grillmaster * 0.2); if (M19 >= 1) { mps += (grillmaster - oldVal) * M19; } } }
    ];

    let anyPurchaseMade = false;

    while (true) {
        let cheapestAffordable = null;
        let minCost = Infinity;

        for (const upgrade of iceUpgrades) {
            // *** THE FIX IS HERE ***
            // First, check if the upgrade is unlocked before checking its cost.
            if (upgrade.isUnlocked()) {
                const currentCost = window[upgrade.costVar];
                if (ice >= currentCost && currentCost < minCost) {
                    minCost = currentCost;
                    cheapestAffordable = upgrade;
                } else {
                   //  console.log(`Cannot afford ${upgrade.upgCountVar} at cost ${currentCost}. Current ice: ${ice}`); // Debug log
                }
            } else {
               // console.log(`Upgrade ${upgrade.upgCountVar} is locked.`); // Debug log for locked upgrades
            } 
        }

        // If no affordable and unlocked upgrade was found, exit the loop.
        if (!cheapestAffordable) {
            break;
        } else {
         //  console.log(`Cheapest affordable upgrade: ${cheapestAffordable.upgCountVar} at cost ${minCost}`); // Debug log
        }

        // Buy the cheapest one and update its state.
        const cost = window[cheapestAffordable.costVar];
        ice -= cost;
        window[cheapestAffordable.upgCountVar]++;
        window[cheapestAffordable.costVar] = Math.round(cost * cheapestAffordable.costMultiplier);
        cheapestAffordable.applyEffect();
        
        anyPurchaseMade = true;
    }

    if (anyPurchaseMade) {
        playSound('purchase', 0.4 * sfxVolume);
    } else {
        playSound('error', 0.4 * sfxVolume);
    }

    updateAll(); // Update the UI once after all purchases are completed.
}

function fakeclick() {
if(rebirthUpgradeStates.rebirthUpg10 == true) {
    const element = document.getElementById('burger-button');

    // If the element doesn't exist, log an error to prevent the game from crashing.
    if (!element) {
        console.error("Could not find the burger button with id='burger-button'");
        return;
    }

    // 1. Add the visual "active" class to make the button look pressed.
    element.classList.add('fake-active');

    // 2. Programmatically trigger the click event to run your addMoney() function.
    element.click();

    // 3. Remove the visual class after a short delay to simulate the button release.
    setTimeout(() => {
        element.classList.remove('fake-active');
    }, 150); // 150 milliseconds is a good duration for a natural-looking click.
}
}
function restartFakeClickInterval() {
    // Ensure a sane minimum interval to avoid extremely fast loops
    if (fakeClickIntervalId) {
        clearInterval(fakeClickIntervalId);
        fakeClickIntervalId = null;
    }
    const intervalMs = Math.max(50, Math.floor(fake_click_speed)); // clamp to 50ms minimum
    fakeClickIntervalId = setInterval(fakeclick, intervalMs);
}

        function openFranchise() {
            if (count >= fcost) {
                count -= fcost;
                if (rebirthUpgradeStates.rebirthUpg16 == true) {
                 moneymultiplier += 1.1;
                } else {
                moneymultiplier += 1;
                }
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
                    fcost = NaN;
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

            const affordableIceUpgrade = [icost1, icost2, icost3, icost4, icost5, icost6, icost7, icost8, icost9, icost10, icost11, icost12, icost13, icost14, icost15, icost16].some(cost => ice >= cost);
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
            a1week: { unlocked: false, condition: () => totaltime >= 604800 },
            finalburger: {unlocked: false, condition: () => rebirthUpgradeStates.rebirthUpg19 === true },
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
    const rebirthUpgrade5Container = document.getElementById("rebirthUpgrade5Container");
    if (rebirthUpgrade5Container) { // Check if the container exists
        if (rebirthUpgradeStates.rebirthUpg1 === true) {
            rebirthUpgrade5Container.style.display = 'flex'; // Use 'block' or 'flex'
        } else {
            rebirthUpgrade5Container.style.display = 'none';
        }
    }
    const rebirthUpgrade6Container = document.getElementById("rebirthUpgrade6Container");
    if (rebirthUpgrade6Container) { // Check if the container exists
        if (rebirthUpgradeStates.rebirthUpg3 === true) {
            rebirthUpgrade6Container.style.display = 'flex'; // Use 'block' or 'flex'
        } else {
            rebirthUpgrade6Container.style.display = 'none';
        }
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
        document.getElementById("rebirth").style.display = 'flex';
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
        setInterval(updateAll, 33);
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
        info.textContent = 'Copy the save text below (paste into Import).';

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
   location.reload();
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
            lastSeenTime = Date.now();
    const gameState = {
        // Core game variables
        count,
        mps,
        clicks,
        moneymultiplier,
        obsidian_legacy,
        golden_burger,
        dark_mode,
        total_money,
        rebirth_points,
        isToggled,
        lastRebirthCheck,
        click_multiplier,
        rebirthedTimes,
        hasRebirthed,
        fake_click_speed,
        // Costs
        cost1, cost2, cost3, cost4, cost5, cost6, cost7, cost8, cost9, cost10,
        cost11, cost12, cost13, cost14, cost15, cost16, cost17, cost18, cost19, cost20,
        upgp1, upgp2, upgp3, upgp4, upgp5, upgp6, upgp7, upgp8, upgp9, upgp10,
        upgp11, upgp12, upgp13, upgp14, upgp15, upgp16, upgp17, upgp18, upgp19, upgp20,
        upgp21, upgp22, upgp23, upgp24, upgp25, upgp26, upgp27, upgp28, upgp29, upgp30,
        upgp39, upgp40, upgp41, upgp42, upgp43, fcost,

        // Production values
        worker, manager, clickamount, director, VP, COO, ceo, chairman, oracle, fryer,
        feast, verdant, emulsifier, whisperer, chancellor, priest, archmage, matriarch, grillmaster,

        // Employee counts
        M, M2, M3, M4, M5, M6, M7, M8, M9, M10,
        M11, M12, M13, M14, M15, M16, M17, M18, M19, M20,

        // Upgrade states
        upg1, upg3, upg8, upg9, upg10, upg11, upg12, upg13, upg14, upg15,
        upg16, upg17, upg18, upg19, upg20, upg21, upg22, upg23, upg24, upg25,
        upg26, upg27, upg28, upg29, upg30, upg31, upg39, upg40, upg41, upg42, upg43,

        // Franchise, stats, and ice cream system
        franchises, totalclicks, totaltime, bimage, ice, ips,
        icost1, icost2, icost3, icost4, icost5, icost6, icost7, icost8, icost9, icost10,
        icost11, icost12, icost13, icost14, icost15, icost16,
        iceupg1, iceupg2, iceupg3, iceupg4, iceupg5, iceupg6, iceupg7, iceupg8, iceupg9, iceupg10,
        iceupg11, iceupg12, iceupg13, iceupg14, iceupg15, iceupg16,

        // Rebirth Upgrade States and Levels
        rebirthUpgradeStates,
        rebirthUpg2Levels,
        rebirthUpg5Levels,
        rebirthUpg6Levels,
        rebirthUpg12Levels,
        rebirthUpg14Levels,
        rebirthUpg22Levels,
        lastSeenTime,
        // Rebirth Upgrade Costs
        rebupgp1, rebupgp2, rebupgp3, rebupgp4, rebupgp5, rebupgp6, rebupgp7, rebupgp8,
        rebupgp9, rebupgp10, rebupgp11, rebupgp12, rebupgp13, rebupgp14, rebupgp15, rebupgp16,
        rebupgp17, rebupgp18, rebupgp19, rebupgp20, rebupgp21, rebupgp22, rebupgp23,

        // Rebirth Multiplier and Bonus Variables
        golden_legacy, rebirthClickBonus,

        // Achievement states
        achievements: Object.fromEntries(
            Object.entries(achievements).map(([id, achievement]) => [id, achievement.unlocked])
        )
    };
    
    gameState.musicVolume = musicVolume;
    gameState.sfxVolume = sfxVolume;
    localStorage.setItem('burgerGameSave', JSON.stringify(gameState));
    playSound('save', 0.03 * sfxVolume);
}









        // Load game state
        // New loadGame() function
function loadGame() {
    const savedGame = localStorage.getItem('burgerGameSave');
    if (savedGame) {
        const gameState = JSON.parse(savedGame);

        // 1. Restore Dark Mode Setting
        dark_mode = (gameState.dark_mode !== undefined) ? gameState.dark_mode : false;
        
        if (dark_mode) {
            document.documentElement.classList.add("dark-mode");
        } else {
            document.documentElement.classList.remove("dark-mode");
        }

        // 2. Restore Music Volume
        if (gameState.musicVolume !== undefined) {
            musicVolume = gameState.musicVolume;
            const musicSlider = document.getElementById("musicRange");
            const musicOutput = document.getElementById("musicVolumeValue");
            
            // Update the slider position and the text number
            if (musicSlider) musicSlider.value = Math.round(musicVolume * 100);
            if (musicOutput) musicOutput.innerHTML = Math.round(musicVolume * 100);
            
            // Apply volume to audio engine immediately if it exists
            if (musicGainNode) {
                musicGainNode.gain.value = musicVolume;
            }
        }

        // 3. Restore SFX Volume
        if (gameState.sfxVolume !== undefined) {
            sfxVolume = gameState.sfxVolume;
            const sfxSlider = document.getElementById("myRange");
            const sfxOutput = document.getElementById("sfxVolumeValue");
            
            // Update the slider position and the text number
            if (sfxSlider) sfxSlider.value = Math.round(sfxVolume * 100);
            if (sfxOutput) sfxOutput.innerHTML = Math.round(sfxVolume * 100);
        }

        // Restore all game variables
        count = gameState.count || 0;
        mps = gameState.mps || 0;
        clicks = gameState.clicks || 1;
        moneymultiplier = gameState.moneymultiplier || 1;
        obsidian_legacy = gameState.obsidian_legacy || 1;
        golden_burger = gameState.golden_burger || 1;
        total_money = gameState.total_money || 0;
        rebirth_points = gameState.rebirth_points || 0;
        lastRebirthCheck = gameState.lastRebirthCheck || 0;
        click_multiplier = gameState.click_multiplier || 0.01;
        rebirthedTimes = gameState.rebirthedTimes || 0;
        hasRebirthed = gameState.hasRebirthed || false;
        fake_click_speed = gameState.fake_click_speed || 1000
        isToggled = (gameState.isToggled !== undefined) ? gameState.isToggled : true;
        // Restore all other variables...
        cost1 = gameState.cost1 || 10;
        cost2 = gameState.cost2 || 25;
        cost3 = gameState.cost3 || 15;
        cost4 = gameState.cost4 || 100;
        cost5 = gameState.cost5 || 225;
        cost6 = gameState.cost6 || 500;
        cost7 = gameState.cost7 || 1250;
        cost8 = gameState.cost8 || 2275;
        cost9 = gameState.cost9 || 5000;
        cost10 = gameState.cost10 || 12500;
        cost11 = gameState.cost11 || 17500;
        cost12 = gameState.cost12 || 22500;
        cost13 = gameState.cost13 || 50000;
        cost14 = gameState.cost14 || 125000;
        cost15 = gameState.cost15 || 200000;
        cost16 = gameState.cost16 || 375000;
        cost17 = gameState.cost17 || 525000;
        cost18 = gameState.cost18 || 1000000;
        cost19 = gameState.cost19 || 5000000;
        cost20 = gameState.cost20 || 20;

        upgp1 = gameState.upgp1 || 150;
        upgp2 = gameState.upgp2 || 100000;
        upgp3 = gameState.upgp3 || 15000;
        upgp4 = gameState.upgp4 || 500000;
        upgp5 = gameState.upgp5 || 800000;
        upgp6 = gameState.upgp6 || 1000000;
        upgp7 = gameState.upgp7 || 1250000;
        upgp8 = gameState.upgp8 || 25000;
        upgp9 = gameState.upgp9 || 75000;
        upgp10 = gameState.upgp10 || 100000;
        upgp11 = gameState.upgp11 || 175000;
        upgp12 = gameState.upgp12 || 225000;
        upgp13 = gameState.upgp13 || 300000;
        upgp14 = gameState.upgp14 || 500000;
        upgp15 = gameState.upgp15 || 750000;
        upgp16 = gameState.upgp16 || 1000000;
        upgp17 = gameState.upgp17 || 1250000;
        upgp18 = gameState.upgp18 || 1550000;
        upgp19 = gameState.upgp19 || 2000000;
        upgp20 = gameState.upgp20 || 3500000;
        upgp21 = gameState.upgp21 || 6250000;
        upgp22 = gameState.upgp22 || 10250000;
        upgp23 = gameState.upgp23 || 15750000;
        upgp24 = gameState.upgp24 || 22500000;
        upgp25 = gameState.upgp25 || 55000000;
        upgp26 = gameState.upgp26 || 125000000;
        upgp27 = gameState.upgp27 || 250000000;
        upgp28 = gameState.upgp28 || 500000000;
        upgp29 = gameState.upgp29 || 750000000;
        upgp30 = gameState.upgp30 || 1750000000;
        upgp39 = gameState.upgp39 || 600000;
        upgp40 = gameState.upgp40 || 1750000;
        upgp41 = gameState.upgp41 || 13000000;
        upgp42 = gameState.upgp42 || 175000000;
        upgp43 = gameState.upgp43 || 1000000000;
        fcost = gameState.fcost || 500000;

        worker = gameState.worker || 1.5;
        clicks = gameState.clicks || 1;
        manager = gameState.manager || 5;
        clickamount = gameState.clickamount || 2;
        director = gameState.director || 7.5;
        VP = gameState.VP || 10;
        COO = gameState.COO || 17.5;
        ceo = gameState.ceo || 50;
        chairman = gameState.chairman || 125;
        oracle = gameState.oracle || 250;
        fryer = gameState.fryer || 400;
        feast = gameState.feast || 850;
        verdant = gameState.verdant || 1250;
        emulsifier = gameState.emulsifier || 1700;
        whisperer = gameState.whisperer || 2900;
        chancellor = gameState.chancellor || 5000;
        priest = gameState.priest || 10000;
        archmage = gameState.archmage || 25000;
        matriarch = gameState.matriarch || 55000;
        grillmaster = gameState.grillmaster || 250000;

        M = gameState.M || 0;
        M2 = gameState.M2 || 0;
        M3 = gameState.M3 || 0;
        M4 = gameState.M4 || 0;
        M5 = gameState.M5 || 0;
        M6 = gameState.M6 || 0;
        M7 = gameState.M7 || 0;
        M8 = gameState.M8 || 0;
        M9 = gameState.M9 || 0;
        M10 = gameState.M10 || 0;
        M11 = gameState.M11 || 0;
        M12 = gameState.M12 || 0;
        M13 = gameState.M13 || 0;
        M14 = gameState.M14 || 0;
        M15 = gameState.M15 || 0;
        M16 = gameState.M16 || 0;
        M17 = gameState.M17 || 0;
        M18 = gameState.M18 || 0;
        M19 = gameState.M19 || 0;
        M20 = gameState.M20 || 0;

        upg1 = gameState.upg1 || 0;
        upg3 = gameState.upg3 || 0;
        upg8 = gameState.upg8 || 0;
        upg9 = gameState.upg9 || 0;
        upg10 = gameState.upg10 || 0;
        upg11 = gameState.upg11 || 0;
        upg12 = gameState.upg12 || 0;
        upg13 = gameState.upg13 || 0;
        upg14 = gameState.upg14 || 0;
        upg15 = gameState.upg15 || 0;
        upg16 = gameState.upg16 || 0;
        upg17 = gameState.upg17 || 0;
        upg18 = gameState.upg18 || 0;
        upg19 = gameState.upg19 || 0;
        upg20 = gameState.upg20 || 0;
        upg21 = gameState.upg21 || 0;
        upg22 = gameState.upg22 || 0;
        upg23 = gameState.upg23 || 0;
        upg24 = gameState.upg24 || 0;
        upg25 = gameState.upg25 || 0;
        upg26 = gameState.upg26 || 0;
        upg27 = gameState.upg27 || 0;
        upg28 = gameState.upg28 || 0;
        upg29 = gameState.upg29 || 0;
        upg30 = gameState.upg30 || 0;
        upg31 = gameState.upg31 || 0;
        upg39 = gameState.upg39 || 0;
        upg40 = gameState.upg40 || 0;
        upg41 = gameState.upg41 || 0;
        upg42 = gameState.upg42 || 0;
        upg43 = gameState.upg43 || 0;

        franchises = gameState.franchises || 1;
        totalclicks = gameState.totalclicks || 0;
        totaltime = gameState.totaltime || 0;
        bimage = gameState.bimage || 0;
        ice = gameState.ice || 0;
        ips = gameState.ips || 0;
        icost1 = gameState.icost1 || 50;
        icost2 = gameState.icost2 || 75;
        icost3 = gameState.icost3 || 100;
        icost4 = gameState.icost4 || 150;
        icost5 = gameState.icost5 || 200;
        icost6 = gameState.icost6 || 250;
        icost7 = gameState.icost7 || 300;
        icost8 = gameState.icost8 || 350;
        icost9 = gameState.icost9 || 400;
        icost10 = gameState.icost10 || 450;
        icost11 = gameState.icost11 || 500;
        icost12 = gameState.icost12 || 550;
        icost13 = gameState.icost13 || 600;
        icost14 = gameState.icost14 || 650;
        icost15 = gameState.icost15 || 700;
        icost16 = gameState.icost16 || 750;
        iceupg1 = gameState.iceupg1 || 0;
        iceupg2 = gameState.iceupg2 || 0;
        iceupg3 = gameState.iceupg3 || 0;
        iceupg4 = gameState.iceupg4 || 0;
        iceupg5 = gameState.iceupg5 || 0;
        iceupg6 = gameState.iceupg6 || 0;
        iceupg7 = gameState.iceupg7 || 0;
        iceupg8 = gameState.iceupg8 || 0;
        iceupg9 = gameState.iceupg9 || 0;
        iceupg10 = gameState.iceupg10 || 0;
        iceupg11 = gameState.iceupg11 || 0;
        iceupg12 = gameState.iceupg12 || 0;
        iceupg13 = gameState.iceupg13 || 0;
        iceupg14 = gameState.iceupg14 || 0;
        iceupg15 = gameState.iceupg15 || 0;
        iceupg16 = gameState.iceupg16 || 0;

        // Restore rebirth upgrades states
        if (gameState.rebirthUpgradeStates) {
            Object.assign(rebirthUpgradeStates, gameState.rebirthUpgradeStates);
        }
        
        // Restore repeatable rebirth upgrade levels
        rebirthUpg2Levels = gameState.rebirthUpg2Levels || 0;
        rebirthUpg5Levels = gameState.rebirthUpg5Levels || 0;
        rebirthUpg6Levels = gameState.rebirthUpg6Levels || 0;
        rebirthUpg12Levels = gameState.rebirthUpg12Levels || 0;
        rebirthUpg14Levels = gameState.rebirthUpg14Levels || 0;
        rebirthUpg22Levels = gameState.rebirthUpg22Levels || 0;
        
        // Restore rebirth upgrade costs and multipliers
        rebupgp1 = gameState.rebupgp1 || 1;
        rebupgp2 = gameState.rebupgp2 || 1;
        rebupgp3 = gameState.rebupgp3 || 2;
        rebupgp4 = gameState.rebupgp4 || 3;
        rebupgp5 = gameState.rebupgp5 || 5;
        rebupgp6 = gameState.rebupgp6 || 4;
        rebupgp7 = gameState.rebupgp7 || 5;
        rebupgp8 = gameState.rebupgp8 || 10;
        rebupgp9 = gameState.rebupgp9 || 15;
        rebupgp10 = gameState.rebupgp10 || 20;
        rebupgp11 = gameState.rebupgp11 || 10;
        rebupgp12 = gameState.rebupgp12 || 25;
        rebupgp13 = gameState.rebupgp13 || 30;
        rebupgp14 = gameState.rebupgp14 || 30;
        rebupgp15 = gameState.rebupgp15 || 20;
        rebupgp16 = gameState.rebupgp16 || 40;
        rebupgp17 = gameState.rebupgp17 || 50;
        rebupgp20 = gameState.rebupgp20 || 100; // Corrected typo (was 75 before)
        rebupgp18 = gameState.rebupgp18 || 60;
        rebupgp19 = gameState.rebupgp19 || 75; // Corrected typo (was 100 before)
        rebupgp21 = gameState.rebupgp21 || 1000;
        rebupgp22 = gameState.rebupgp22 || 1250;
        rebupgp23 = gameState.rebupgp23 || 5000;
        golden_legacy = gameState.golden_legacy || 1;
        rebirthClickBonus = gameState.rebirthClickBonus || 0;
        lastSeenTime = gameState.lastSeenTime || Date.now(); // Default to now if not saved
        
        // Restore achievements
        if (gameState.achievements) {
            Object.entries(gameState.achievements).forEach(([id, unlocked]) => {
                if (achievements[id]) {
                    achievements[id].unlocked = unlocked;
                    const achievementElement = document.querySelector(`[data-achievement="${id}"]`);
                    if (achievementElement) {
                        achievementElement.classList.toggle('locked', !unlocked);
                    }
                }
            });
        }

        // --- FIX: Added null check for toggleContainer ---
        const toggleContainer = document.getElementById("toggleContainer");
        if (toggleContainer) { // Check if the element exists
            if (rebirthUpgradeStates.rebirthUpg9 == true) {
                toggleContainer.style.display = 'flex';
            } else { 
                toggleContainer.style.display = 'none';
            }
        }
        // --- END FIX ---

                const toggleSwitch = document.getElementById('myToggle');
        if (toggleSwitch) {
            toggleSwitch.checked = isToggled;
        }
const now = Date.now();
const offlineDurationInSeconds = Math.floor((now - lastSeenTime) / 1000);


if (rebirthUpgradeStates.rebirthUpg8 === true && offlineDurationInSeconds > 0) {
    let offlineEarnings = (mps * moneymultiplier) * (offlineDurationInSeconds * 0.01); // 1% of MPS per second

 
    if (rebirthUpgradeStates.rebirthUpg13 === true) {
        offlineEarnings *= 2;
    }

   
    if (rebirthUpgradeStates.rebirthUpg17 === true) {
        // This bonus can grow based on your total money.
        const dynamicBonus = 1 + Math.log10(total_money + 1);
        offlineEarnings *= dynamicBonus;
    }
    
    
    
    if (rebirthUpgradeStates.rebirthUpg23 === true) {
        offlineEarnings *= 10;
    }
    

    count += offlineEarnings;
    total_money += offlineEarnings;

    alert(`Welcome back! You earned $${formatCurrency(offlineEarnings)} while you were away.`);
} else if (offlineDurationInSeconds > 0) {
    // This log helps confirm if the check is failing correctly when the upgrade isn't owned.
    console.log("Offline earnings upgrade not purchased or time was zero. Upgrade state:", rebirthUpgradeStates.rebirthUpg8);
}
  restartFakeClickInterval();

        recalculateIps();
        // Apply rebirth upgrades and update UI
        applyRebirthUpgrades();
        updateUpgradeVisibility();
        updateRebirthUI();
        playSound('save', 0.03 * sfxVolume);
      //alert('Game loaded successfully!');
    } else {
        playSound('error', 0.4 * sfxVolume);
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
    if (!tooltip) return; // Exit if tooltip isn't found
    var rect = event.target.getBoundingClientRect();

    // --- NEW FIX: Force browser to calculate dimensions if they are 0 ---
    // This can happen when the tooltip is inside a container that was set to display: none
    if (tooltip.offsetHeight === 0) {
        tooltip.style.visibility = 'hidden'; // Keep it hidden
        tooltip.style.display = 'block';     // Temporarily display it to calculate size
    }

    // Now we can safely get the dimensions
    const tooltipHeight = tooltip.offsetHeight;
    const tooltipWidth = tooltip.offsetWidth;

    // We can now revert the display property so it doesn't interfere with CSS rules
    tooltip.style.display = '';

    // --- Positioning Logic (same as before) ---
    var top = rect.top + window.scrollY + (rect.height / 2) - (tooltipHeight / 2);
    var left = rect.right + 10;

    if (left + tooltipWidth > window.innerWidth) {
        left = rect.left - tooltipWidth - 10;
    }
    
    if (top + tooltipHeight > window.innerHeight + window.scrollY) {
        top = rect.top + window.scrollY - tooltipHeight - 10;
    }
    
    if (top < window.scrollY) {
        top = window.scrollY;
    }
    if (left < 0) {
        left = 10;
    }

    // Apply the final position and make the tooltip visible
    tooltip.style.top = top + "px";
    tooltip.style.left = left + "px";
    tooltip.style.visibility = "visible";
    tooltip.style.opacity = "1";
}

function hideTooltip(tooltipId) {
    var tooltip = document.getElementById(tooltipId);
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = '0';
}
restartFakeClickInterval();
        // Auto-save every 5 minutes
        setInterval(saveGame, 0.5 * 60 * 1000);
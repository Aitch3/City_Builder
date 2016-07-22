(function (window, $) {
    'use strict';

    var peon = {
            population: 1,
            title: "You",
            foodProd: 0,
            woodProd: 0,
            stoneProd: 0,
            explorationProd: 0
        },
        farmer = {
            population: 0,
            title: "Farmers",
            foodProd: 0.5
        },
        woodcutter = {
            population: 0,
            title: "Woodcutters",
            woodProd: 0
        },
        stonecutter = {
            population: 0,
            title: "Stonecutters",
            stoneProd: 0
        },
        hut = {
            amount: 0,
            title: "Huts",
            housing: 2,
            costFood: 2,
            costWood: 4,
            costStone: 0,
            costIncrement: 1.2,
            unlocked: 0
        },
        farm = {
            amount: 0,
            title: "Farms",
            foodProdBonus: 0,
            foodStorage: 30,
            costFood: 1,
            costWood: 4,
            costStone: 0,
            costIncrement: 1.2,
            unlocked: 0
        },
        lumbermill = {
            amount: 0,
            title: "Lumbermills",
            woodProdBonus: 0,
            costFood: 0,
            costWood: 1,
            costStone: 4,
            costIncrement: 1.2,
            unlocked: 0
        },
        quarry = {
            amount: 0,
            title: "Quarries",
            stoneProdBonus: 0,
            costFood: 1,
            costWood: 4,
            costStone: 0,
            costIncrement: 1.2,
            unlocked: 0
        },
        cave = {
            amount: 0,
            foodStorage: 20,
            housing: 3,
            costExploration: 1,
            costIncrement: 1.2,
            unlocked: 0
        },
        forest = {
            amount: 0,
            unlocked: 0
        },
        mountain = {
            amount: 0,
            unlocked: 0
        },
        plain = {
            amount: 0,
            unlocked: 0
        },
        swamp = {
            amount: 0,
            unlocked: 0
        },
        time = {
            min: 0,
            hour: 0,
            day: 1,
            year: 1
        },
        totalTime = {
            min: 0,
            hour: 0,
            day: 0,
            year: 0
        },
        food = {amount: 1},
        wood = {amount: 0},
        stone = {amount: 0},
        exploration = {amount: 0},
        totalResources = {
            food: 0,
            wood: 0,
            stone: 0
        },
        totalPopulation = 0,
        totalBuildings = 0,
        totalTerritory = 0,
        military = {rating: 0},
        diplomacy = {rating: 0},
        nature = {rating: 0},
        mysticism = {rating: 0},
        culture = {rating: 0},
        religion = {rating: 0},
        knowldge = {rating: 0},
        foolish = {rating: 4},
        good = {rating: 0},
        evil = {rating: 0},
        totalTraits = {
            military: 0,
            diplomacy: 0,
            nature: 0,
            mysticism: 0,
            culture: 0,
            religion: 0,
            knowldge: 0,
            foolish: 0,
            good: 0,
            evil: 0
        },
        dead = 0,
        totalDead = 0,
        eventName = "",
        eventCounter = 0,
        eventDelay = 0,
        eventList = [],
        gamePause = 0,
        starveCount = 0,
        populationTotal = 0,
        populationLimit = 0,
        foodStorage = 0,
        startPeon = {
            population: 1,
            title: "You",
            foodProd: 0,
            woodProd: 0,
            stoneProd: 0,
            explorationProd: 0
        },
        startFarmer = {
            population: 0,
            title: "Farmers",
            foodProd: 0.5
        },
        startWoodcutter = {
            startPopulation: 0,
            population: 0,
            title: "Woodcutters",
            woodProd: 0
        },
        startStonecutter = {
            population: 0,
            title: "Stonecutters",
            stoneProd: 0
        },
        startHut = {
            amount: 0,
            title: "Huts",
            housing: 2,
            costFood: 2,
            costWood: 4,
            costStone: 0,
            costIncrement: 1.2,
            unlocked: 0
        },
        startFarm = {
            amount: 0,
            title: "Farms",
            foodProdBonus: 0,
            foodStorage: 30,
            costFood: 1,
            costWood: 4,
            costStone: 0,
            costIncrement: 1.2,
            unlocked: 0
        },
        startLumbermill = {
            amount: 0,
            title: "Lumbermills",
            woodProdBonus: 0,
            costFood: 0,
            costWood: 1,
            costStone: 4,
            costIncrement: 1.2,
            unlocked: 0
        },
        startQuarry = {
            amount: 0,
            title: "Quarries",
            stoneProdBonus: 0,
            costFood: 1,
            costWood: 4,
            costStone: 0,
            costIncrement: 1.2,
            unlocked: 0
        },
        startCave = {
            amount: 0,
            foodStorage: 20,
            housing: 3,
            costExploration: 1,
            costIncrement: 1.2,
            unlocked: 0
        },
        startForest = {
            amount: 0,
            unlocked: 0
        },
        startMountain = {
            amount: 0,
            unlocked: 0
        },
        startPlain = {
            amount: 0,
            unlocked: 0
        },
        startSwamp = {
            amount: 0,
            unlocked: 0
        };
        
    function prettify(input) {
        var output = Math.round(input * 1000000) / 1000000;
        return output.toFixed(0);
    }
    
    function assign(job, number) {
        //var parsedJob = parseJob(job);
        peon.population -= number;
        job.population += number;
    }
    
    function build(building, number) {
        building.amount += number;
        food.amount -= building.costFood;
        wood.amount -= building.costWood;
        stone.amount -= building.costStone;
        building.costFood *= Math.pow(building.costIncrement, building.amount);
        building.costWood *= Math.pow(building.costIncrement, building.amount);
        building.costStone *= Math.pow(building.costIncrement, building.amount);
        building.costFood = building.costFood.toFixed(3);
        building.costWood = building.costWood.toFixed(3);
        building.costStone = building.costStone.toFixed(3);
    }
    
    function find(territory, number) {
        territory.amount += number;
        exploration.amount -= territory.costExploration;
        territory.costExploration *= Math.pow(territory.costIncrement, territory.amount);
        territory.costExploration = territory.costExploration.toFixed(3);
    }
    
    function choiceReady() {
        gamePause = 1;
        document.getElementById('optionButton1').disabled = false;
        document.getElementById('optionButton2').disabled = false;
        document.getElementById('optionButton3').disabled = false;
        document.getElementById('option1').style.visibility = "visible";
        document.getElementById('option2').style.visibility = "visible";
        document.getElementById('option3').style.visibility = "visible";
    }
    
    function choiceDone() {
        document.getElementById('option1').style.visibility = "hidden";
        document.getElementById('option2').style.visibility = "hidden";
        document.getElementById('option3').style.visibility = "hidden";
        document.getElementById('optionText1').innerHTML = "";
        document.getElementById('optionText2').innerHTML = "";
        document.getElementById('optionText3').innerHTML = "";
        eventDelay = 10;
        gamePause = 0;
    }
    
    function wasItDone(name) {
        var listCheck = eventList.indexOf(name);
        return listCheck;
    }
    
    function restart() {
        document.getElementById('choiceText').innerHTML = "Welcome to the Game.";
        if (foolish.rating >= 5) { startPeon.title = "Fools"; }
        peon = startPeon;
        farmer = startFarmer;
        woodcutter = startWoodcutter;
        stonecutter = startStonecutter;
        food.amount = 1;
        farm = startFarm;
        lumbermill = startLumbermill;
        quarry = startQuarry;
        cave = startCave;
        eventName = "";
        eventCounter = 0;
        eventList = [];
        gamePause = 0;
        starveCount = 0;
        populationTotal = 0;
        populationLimit = 0;
    }
    
    function die() {
        choiceReady();
        document.getElementById('choiceText').innerHTML = "You have died. Would you like to try again?";
        document.getElementById('optionText1').innerHTML = "Yes";
        document.getElementById('optionText2').innerHTML = "No";
        document.getElementById('optionButton1').onclick = function () { restart(); gamePause = 0; choiceDone(); };
        document.getElementById('optionButton2').onclick = function () { document.getElementById('choiceText').innerHTML = "You lose."; choiceDone(); };
    }
    
    function starve(number) {
        if (number === 1) {
            die();
        }
    }
           
    function updateWorkers() {
        if (farm.unlocked >= 1) { document.getElementById('farmer').style.display = "block"; }
        if (lumbermill.unlocked >= 1) { document.getElementById('woodcutter').style.display = "block"; }
        if (quarry.unlocked >= 1) { document.getElementById('stonecutter').style.display = "block"; }
        document.getElementById('peonTitle').innerHTML = peon.title;
        document.getElementById('peonAmount').innerHTML = peon.population;
        document.getElementById('farmerAmount').innerHTML = farmer.population;
        document.getElementById('woodcutterAmount').innerHTML = woodcutter.population;
        document.getElementById('stonecutterAmount').innerHTML = stonecutter.population;
        document.getElementById("farmerPlus").onclick = function () { assign(farmer, 1); document.getElementById('farmerPlus').disabled = true; };
        document.getElementById("farmerMinus").onclick = function () { assign(farmer, -1); document.getElementById('farmerMinus').disabled = true; };
        document.getElementById("woodcutterPlus").onclick = function () { assign(woodcutter, 1); document.getElementById('woodcutterPlus').disabled = true; };
        document.getElementById("woodcutterMinus").onclick = function () { assign(woodcutter, -1); document.getElementById('woodcutterMinus').disabled = true; };
        document.getElementById("stonecutterPlus").onclick = function () { assign(stonecutter, 1); document.getElementById('stonecutterPlus').disabled = true; };
        document.getElementById("stonecutterMinus").onclick = function () { assign(stonecutter, -1);  document.getElementById('stonecutterMinus').disabled = true; };
    }

    function updateResources() {
        if (food.amount !== 0) { document.getElementById('food').style.display = "block"; }
        if (wood.amount !== 0) { document.getElementById('wood').style.display = "block"; }
        if (stone.amount !== 0) { document.getElementById('stone').style.display = "block"; }
        if (exploration.amount !== 0) { document.getElementById('exploration').style.display = "block"; }
        document.getElementById('foodAmount').innerHTML = prettify(food.amount);
        document.getElementById('woodAmount').innerHTML = prettify(wood.amount);
        document.getElementById('stoneAmount').innerHTML = prettify(stone.amount);
        document.getElementById('explorationAmount').innerHTML = prettify(exploration.amount);
    }
    
    function updateTerritory() {
        var territoryTotal = cave.amount + forest.amount + mountain.amount + plain.amount + swamp.amount;
        if (territoryTotal >= 1) { document.getElementById('territoryBox').style.display = "block"; }
        if (cave.unlocked >= 1) { document.getElementById('cave').style.display = "block"; }
        document.getElementById("findCave").onclick = function () { find(cave, 1); document.getElementById('findCave').disabled = true; };
        document.getElementById('caveAmount').innerHTML = cave.amount;
        if (forest.unlocked >= 1) { document.getElementById('forest').style.display = "block"; }
        document.getElementById("findForest").onclick = function () { find(forest, 1); document.getElementById('findForest').disabled = true; };
        document.getElementById('forestAmount').innerHTML = forest.amount;
        if (mountain.unlocked >= 1) { document.getElementById('mountain').style.display = "block"; }
        document.getElementById("findMountain").onclick = function () { find(mountain, 1); document.getElementById('findMountain').disabled = true; };
        document.getElementById('mountainAmount').innerHTML = mountain.amount;
        if (plain.unlocked >= 1) { document.getElementById('plain').style.display = "block"; }
        document.getElementById("findPlain").onclick = function () { find(plain, 1); document.getElementById('findPlain').disabled = true; };
        document.getElementById('plainAmount').innerHTML = plain.amount;
        if (swamp.unlocked >= 1) { document.getElementById('swamp').style.display = "block"; }
        document.getElementById("findSwamp").onclick = function () { find(swamp, 1); document.getElementById('findSwamp').disabled = true; };
        document.getElementById('swampAmount').innerHTML = swamp.amount;
    }

    function updateBuildings() {
        if (hut.unlocked >= 1 || farm.unlocked >= 1 || lumbermill.unlocked >= 1 || quarry.unlocked >= 1) { document.getElementById('buildingBox').style.display = "block"; }
        if (hut.unlocked >= 1) { document.getElementById('hut').style.display = "block"; }
        if (farm.unlocked >= 1) { document.getElementById('farm').style.display = "block"; }
        if (lumbermill.unlocked >= 1) { document.getElementById('lumbermill').style.display = "block"; }
        if (quarry.unlocked >= 1) { document.getElementById('quarry').style.display = "block"; }
        document.getElementById('hutAmount').innerHTML = hut.amount;
        document.getElementById('hutCostFood').innerHTML = prettify(hut.costFood);
        document.getElementById('hutCostWood').innerHTML = prettify(hut.costWood);
        document.getElementById('hutCostStone').innerHTML = prettify(hut.costStone);
        document.getElementById('farmAmount').innerHTML = farm.amount;
        document.getElementById('farmCostFood').innerHTML = prettify(farm.costFood);
        document.getElementById('farmCostWood').innerHTML = prettify(farm.costWood);
        document.getElementById('farmCostStone').innerHTML = prettify(farm.costStone);
        document.getElementById('lumbermillAmount').innerHTML = lumbermill.amount;
        document.getElementById('lumbermillCostFood').innerHTML = prettify(lumbermill.costFood);
        document.getElementById('lumbermillCostWood').innerHTML = prettify(lumbermill.costWood);
        document.getElementById('lumbermillCostStone').innerHTML = prettify(lumbermill.costStone);
        document.getElementById('quarryAmount').innerHTML = quarry.amount;
        document.getElementById('quarryCostFood').innerHTML = prettify(quarry.costFood);
        document.getElementById('quarryCostWood').innerHTML = prettify(quarry.costWood);
        document.getElementById('quarryCostStone').innerHTML = prettify(quarry.costStone);
        document.getElementById("buildHut").onclick = function () { build(hut, 1); document.getElementById('buildHut').disabled = true; };
        document.getElementById("buildFarm").onclick = function () { build(farm, 1); document.getElementById('buildFarm').disabled = true; };
        document.getElementById("buildLumbermill").onclick = function () { build(lumbermill, 1); document.getElementById('buildLumbermill').disabled = true; };
        document.getElementById("buildQuarry").onclick = function () { build(quarry, 1); document.getElementById('buildQuarry').disabled = true; };
    }

    function updateButtons() {
        //Workers
        if (peon.population >= 1 && farm.amount > farmer.population) { document.getElementById('farmerPlus').disabled = false; }
        if (farmer.population >= 1) { document.getElementById('farmerMinus').disabled = false; }
        if (peon.population >= 1 && lumbermill.amount > woodcutter.population) { document.getElementById('woodcutterPlus').disabled = false; }
        if (woodcutter.population >= 1) { document.getElementById('woodcutterMinus').disabled = false; }
        if (peon.population >= 1 && quarry.amount > stonecutter.population) { document.getElementById('stonecutterPlus').disabled = false; }
        if (stonecutter.population >= 1) { document.getElementById('stonecutterMinus').disabled = false; }
        //Territories
        if (cave.costExploration <= exploration.amount) { document.getElementById('findCave').disabled = false; }
        if (forest.costExploration <= exploration.amount) { document.getElementById('findForest').disabled = false; }
        if (mountain.costExploration <= exploration.amount) { document.getElementById('findMountain').disabled = false; }
        if (plain.costExploration <= exploration.amount) { document.getElementById('findPlain').disabled = false; }
        if (swamp.costExploration <= exploration.amount) { document.getElementById('findSwamp').disabled = false; }
        //Buildings
        if (hut.costFood <= food.amount && hut.costWood <= wood.amount && hut.costStone <= stone.amount) { document.getElementById('buildHut').disabled = false; }
        if (farm.costFood <= food.amount && farm.costWood <= wood.amount && farm.costStone <= stone.amount) { document.getElementById('buildFarm').disabled = false; }
        if (lumbermill.costFood <= food.amount && lumbermill.costWood <= wood.amount && lumbermill.costStone <= stone.amount) { document.getElementById('buildLumbermill').disabled = false; }
        if (quarry.costFood <= food.amount && quarry.costWood <= wood.amount && quarry.costStone <= stone.amount) { document.getElementById('buildQuarry').disabled = false; }
    }
    
    function updateTime() {
        document.getElementById('minute').innerHTML = prettify(time.min);
        document.getElementById('hour').innerHTML = prettify(time.hour);
        document.getElementById('day').innerHTML = prettify(time.day);
        document.getElementById('year').innerHTML = prettify(time.year);
        if (eventDelay > 0) { eventDelay -= 1; }
    }

    function updateTotals() {
        
    }
    
    function updateAll() {
        updateWorkers();
        updateTerritory();
        updateBuildings();
        updateResources();
        updateButtons();
        updateTime();
        updateTotals();
    }

    function produce() {
        food.amount += ((farmer.population * farmer.foodProd) + (peon.population * peon.foodProd));
        wood.amount += ((woodcutter.population * woodcutter.woodProd) + (peon.population * peon.woodProd));
        stone.amount += ((stonecutter.population * stonecutter.stoneProd) + (peon.population * peon.stoneProd));
        exploration.amount += (peon.population * peon.explorationProd);
    }
    
    function consume() {
        populationTotal = peon.population + farmer.population + woodcutter.population + stonecutter.population;
        populationLimit = (hut.amount * hut.housing) + (cave.amount * cave.housing) + 1;
        foodStorage = (cave.amount * cave.foodStorage) + (farm.amount * farm.foodStorage) + 10;
        food.amount -= (populationTotal * 0.1);
        if (food.amount > foodStorage) { food.amount -= ((food.amount - foodStorage) * 0.1); }
        if (food.amount <= 0 && wasItDone('firstChoice') < 0) { document.getElementById('choiceText').innerHTML = "You are starving to death"; }
        if (food.amount < 0) { food.amount = 0; starveCount += 1; }
        if (starveCount === 10) { starve(populationTotal); }
    }
    
    function eventRun() {
        choiceReady();
        if (eventName === 'firstChoice') {
            document.getElementById('choiceText').innerHTML = "You have no food and you are very hungry. What would you like to do?";
            document.getElementById('optionText1').innerHTML = "Go hunting deer";
            document.getElementById('optionText2').innerHTML = "Start gathering nuts and berries";
            document.getElementById('optionText3').innerHTML = "Starve";
            document.getElementById('optionButton1').onclick = function () { peon.foodProd += 0.2; peon.explorationProd += 0.2; peon.title = "Hunters"; eventName = ""; document.getElementById('choiceText').innerHTML = "You are now on the path of the Hunter."; choiceDone(); };
            document.getElementById('optionButton2').onclick = function () { peon.foodProd += 0.1; peon.woodProd += 0.1; peon.explorationProd += 0.2; peon.title = "Gatherers"; eventName = ""; document.getElementById('choiceText').innerHTML = "You are now on the path of the Gatherer."; choiceDone(); };
            document.getElementById('optionButton3').onclick = function () { foolish.rating += 1; peon.title = "Fools"; eventName = ""; document.getElementById('choiceText').innerHTML = "You are a fool. You are starving to death."; choiceDone(); };
        }
        if (eventName === 'bigHunt') {
            document.getElementById('choiceText').innerHTML = "You find a mammoth, there's good eating on one of those.";
            document.getElementById('optionText1').innerHTML = "Find a friend to help hunt it";
            document.getElementById('optionText2').innerHTML = "Chase it off a cliff";
            document.getElementById('optionText3').innerHTML = "Try to talk to it";
            document.getElementById('optionButton1').onclick = function () { peon.population += 1; peon.foodProd += 0.1; eventName = ""; document.getElementById('choiceText').innerHTML = "Your friend joins you and you can hunt much better."; choiceDone(); };
            document.getElementById('optionButton2').onclick = function () { food.amount += 50; cave.amount += 1; cave.unlocked += 1; eventName = ""; document.getElementById('choiceText').innerHTML = "You successfully harvest a great deal of food, and in doing so, you find a cave."; choiceDone(); };
            document.getElementById('optionButton3').onclick = function () { nature.rating += 1; eventName = ""; document.getElementById('choiceText').innerHTML = "The mammoth teaches you its secrets."; choiceDone(); };
        }
        if (eventName === 'specialFind') {
            document.getElementById('choiceText').innerHTML = "Where would you like to gather food today?";
            document.getElementById('optionText1').innerHTML = "Off in the forest";
            document.getElementById('optionText2').innerHTML = "Up by the mountains";
            document.getElementById('optionText3').innerHTML = "Down in the dirt";
            document.getElementById('optionButton1').onclick = function () { forest.amount += 1; peon.woodProd += 0.2;  forest.unlocked += 1; nature.rating += 1; eventName = ""; document.getElementById('choiceText').innerHTML = "The forest is nice, perhaps you'll keep it."; choiceDone(); };
            document.getElementById('optionButton2').onclick = function () { cave.amount += 1; cave.unlocked += 1; eventName = ""; document.getElementById('choiceText').innerHTML = "In the mountains you find a cave full of bats."; choiceDone(); };
            document.getElementById('optionButton3').onclick = function () { food.amount += 5; stone.amount += 10; eventName = ""; document.getElementById('choiceText').innerHTML = "You spend the afternoon digging in the dirt. You find mushrooms and rocks."; choiceDone(); };
        }
        if (eventName === 'needHome') {
            document.getElementById('choiceText').innerHTML = "You don't have a place to stay and it's getting cold.";
            document.getElementById('optionText1').innerHTML = "Pile up sticks for warmth";
            document.getElementById('optionText2').innerHTML = "Look in the mountains";
            document.getElementById('optionText3').innerHTML = "Kill a tauntaun and climb inside";
            document.getElementById('optionButton1').onclick = function () { peon.woodProd += 0.2; hut.unlocked += 1; hut.amount += 1; document.getElementById('buildHut').disabled = true;  eventName = ""; document.getElementById('choiceText').innerHTML = "You've learned how to build a hut."; choiceDone(); };
            document.getElementById('optionButton2').onclick = function () { peon.explorationProd += 0.2; cave.amount += 1; cave.unlocked += 1; mysticism += 1; eventName = ""; document.getElementById('choiceText').innerHTML = "In the mountains you find a cave full of skeletons."; choiceDone(); };
            document.getElementById('optionButton3').onclick = function () { eventName = ""; eventList.pop(); document.getElementById('choiceText').innerHTML = "You stay warm for the night but you better find something that will last longer."; choiceDone(); };
        }
        if (eventName === 'freeFool') {
            document.getElementById('choiceText').innerHTML = "You have proceeded in your folly and have learned wisdom.";
            document.getElementById('optionText1').innerHTML = "Farm";
            document.getElementById('optionText2').innerHTML = "Lumbermill";
            document.getElementById('optionText3').innerHTML = "Quarry";
            document.getElementById('optionButton1').onclick = function () { farm.unlocked += 1; food.amount += 5; wood.amount += 4; eventName = ""; document.getElementById('choiceText').innerHTML = "You've learned how to build a farm."; choiceDone(); };
            document.getElementById('optionButton2').onclick = function () { lumbermill.unlocked += 1; food.amount += 5; eventName = ""; document.getElementById('choiceText').innerHTML = "You've learned how to build a lumbermill."; choiceDone(); };
            document.getElementById('optionButton3').onclick = function () { quarry.unlocked += 1; food.amount += 5; eventName = ""; document.getElementById('choiceText').innerHTML = "You've learned how to build a quarry."; choiceDone(); };
        }
    }
    
    function eventCheck() {
        if (foolish.rating === 5  && wasItDone('freeFool') < 0) {
            eventName = 'freeFool';
            eventList.push(eventName);
            eventCounter += 1;
        } else if (food.amount <= 0.1 && wasItDone('firstChoice') < 0) {
            eventName = 'firstChoice';
            eventList.push(eventName);
            eventCounter += 1;
        } else if (time.hour >= 1 && wasItDone('bigHunt') < 0) {
            eventName = 'bigHunt';
            eventList.push(eventName);
            eventCounter += 1;
        } else if (food.amount >= 10 && wasItDone('specialFind') < 0) {
            eventName = 'specialFind';
            eventList.push(eventName);
            eventCounter += 1;
        } else if (populationTotal > populationLimit && wasItDone('needHome') < 0) {
            eventName = 'needHome';
            eventList.push(eventName);
            eventCounter += 1;
        }
    }
    
    function timeGoesOn() {
        var seconds = time.min % 60;
        if (seconds === 0) {
            time.hour += 1;
        }
        if (time.hour === 24) {
            time.day += 1;
            time.hour = 0;
        }
        if (time.day === 361) {
            time.year += 1;
            time.day = 1;
        }
    }
    
    window.setInterval(function () {
        if (gamePause === 0) {
            produce();
            consume();
            if (eventName === "" && eventDelay === 0) { eventCheck(); }
            if (eventName !== "") { eventRun(); }
            updateAll();
            time.min += 1;
            timeGoesOn();
        }
    }, 250);
            
}(window, window.$));
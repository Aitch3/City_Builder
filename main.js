(function (window, $) {
    'use strict';

    var peons = {
            startPopulation: 1,
            population: 1,
            name: "peons",
            title: "You",
            foodProd: 0,
            woodProd: 0,
            stoneProd: 0
        },
        farmers = {
            startPopulation: 0,
            population: 0,
            name: "farmers",
            title: "Farmers",
            foodProd: 0.08,
            unlocked: 0
        },
        woodcutters = {
            startPopulation: 0,
            population: 0,
            name: "woodcutters",
            title: "Woodcutters",
            woodProd: 0.01,
            unlocked: 0
        },
        stonecutters = {
            startPopulation: 0,
            population: 0,
            name: "stonecutters",
            title: "Stonecutters",
            stoneProd: 0.005,
            unlocked: 0
        },
        farms = {
            startAmount: 0,
            amount: 0,
            name: "farms",
            title: "Farms",
            foodProdBonus: 0.001,
            costFood: 1,
            costWood: 4,
            costStone: 0,
            costIncrement: 1.2,
            unlocked: 0
        },
        lumbermills = {
            startAmount: 0,
            amount: 0,
            name: "lumbermills",
            title: "Lumbermills",
            woodProdBonus: 0.001,
            costFood: 0,
            costWood: 1,
            costStone: 4,
            costIncrement: 1.2,
            unlocked: 0
        },
        quarries = {
            startAmount: 0,
            amount: 0,
            name: "quarries",
            title: "Quarries",
            stoneProdBonus: 0.001,
            costFood: 1,
            costWood: 4,
            costStone: 0,
            costIncrement: 1.2,
            unlocked: 0
        },
        territory = {
            cave: 0
        },
        time = {
            min: 0,
            hour: 0,
            day: 0,
            year: 0
        },
        food = {amount: 1},
        wood = {amount: 0},
        stone = {amount: 0},
        military = {rating: 0},
        nature = {rating: 0},
        mysticism = {rating: 0},
        culture = {rating: 0},
        religion = {rating: 0},
        eventName = "",
        eventCounter = 0,
        eventList = [],
        dead = 0;

    function prettify(input) {
        var output = Math.round(input * 1000000) / 1000000;
        return output.toFixed(0);
    }
    
    function makeVisible() {
        if (farms.unlocked >= 1) {
            document.getElementById('farms').style.display = "block";
        }
        if (farmers.unlocked >= 1) {
            document.getElementById('farmers').style.display = "block";
        }
        if (lumbermills.unlocked >= 1) {
            document.getElementById('lumbermills').style.display = "block";
        }
        if (woodcutters.unlocked >= 1) {
            document.getElementById('woodcutters').style.display = "block";
        }
        if (quarries.unlocked >= 1) {
            document.getElementById('quarries').style.display = "block";
        }
        if (stonecutters.unlocked >= 1) {
            document.getElementById('stonecutters').style.display = "block";
        }
        if (eventName !== "") {
            document.getElementById('option1').style.visibility = "visible";
            document.getElementById('option2').style.visibility = "visible";
            document.getElementById('option3').style.visibility = "visible";
        } else {
            document.getElementById('option1').style.visibility = "hidden";
            document.getElementById('option2').style.visibility = "hidden";
            document.getElementById('option3').style.visibility = "hidden";
        }
        
    }

    function updateWorkers() {
        document.getElementById('peonTitle').innerHTML = peons.title;
        document.getElementById('peonAmount').innerHTML = peons.population;
        document.getElementById('farmerAmount').innerHTML = farmers.population;
        document.getElementById('woodcutterAmount').innerHTML = woodcutters.population;
        document.getElementById('stonecutterAmount').innerHTML = stonecutters.population;
    }

    function updateResources() {
        document.getElementById('food').innerHTML = prettify(food.amount);
        document.getElementById('wood').innerHTML = prettify(wood.amount);
        document.getElementById('stone').innerHTML = prettify(stone.amount);
    }

    function updateBuildings() {
        document.getElementById('farmAmount').innerHTML = farms.amount;
        document.getElementById('farms.costFood').innerHTML = prettify(farms.costFood);
        document.getElementById('farms.costWood').innerHTML = prettify(farms.costWood);
        document.getElementById('farms.costStone').innerHTML = prettify(farms.costStone);
        document.getElementById('lumbermillAmount').innerHTML = lumbermills.amount;
        document.getElementById('lumbermills.costFood').innerHTML = prettify(lumbermills.costFood);
        document.getElementById('lumbermills.costWood').innerHTML = prettify(lumbermills.costWood);
        document.getElementById('lumbermills.costStone').innerHTML = prettify(lumbermills.costStone);
        document.getElementById('quarryAmount').innerHTML = quarries.amount;
        document.getElementById('quarries.costFood').innerHTML = prettify(quarries.costFood);
        document.getElementById('quarries.costWood').innerHTML = prettify(quarries.costWood);
        document.getElementById('quarries.costStone').innerHTML = prettify(quarries.costStone);
    }

    function updateButtons() {
        if (peons.population >= 1 && farms.amount > farmers.population) {
            document.getElementById('farmerPlus').disabled = false;
        } else {
            document.getElementById('farmerPlus').disabled = true;
        }
        if (farmers.population >= 1) {
            document.getElementById('farmerMinus').disabled = false;
        } else {
            document.getElementById('farmerMinus').disabled = true;
        }
        if (peons.population >= 1 && lumbermills.amount > woodcutters.population) {
            document.getElementById('woodcutterPlus').disabled = false;
        } else {
            document.getElementById('woodcutterPlus').disabled = true;
        }
        if (woodcutters.population >= 1) {
            document.getElementById('woodcutterMinus').disabled = false;
        } else {
            document.getElementById('woodcutterMinus').disabled = true;
        }
        if (peons.population >= 1 && quarries.amount > stonecutters.population) {
            document.getElementById('stonecutterPlus').disabled = false;
        } else {
            document.getElementById('stonecutterPlus').disabled = true;
        }
        if (stonecutters.population >= 1) {
            document.getElementById('stonecutterMinus').disabled = false;
        } else {
            document.getElementById('stonecutterMinus').disabled = true;
        }
        if (farms.costFood <= food.amount && farms.costWood <= wood.amount && farms.costStone <= stone.amount) {
            document.getElementById('buildFarm').disabled = false;
        } else {
            document.getElementById('buildFarm').disabled = true;
        }
        if (lumbermills.costFood <= food.amount && lumbermills.costWood <= wood.amount && lumbermills.costStone <= stone.amount) {
            document.getElementById('buildLumbermill').disabled = false;
        } else {
            document.getElementById('buildLumbermill').disabled = true;
        }
        if (quarries.costFood <= food.amount && quarries.costWood <= wood.amount && quarries.costStone <= stone.amount) {
            document.getElementById('buildQuarry').disabled = false;
        } else {
            document.getElementById('buildQuarry').disabled = true;
        }
    }
    
    function updateTime() {
        document.getElementById('minute').innerHTML = prettify(time.min);
        document.getElementById('hour').innerHTML = prettify(time.hour);
        document.getElementById('day').innerHTML = prettify(time.day);
        document.getElementById('year').innerHTML = prettify(time.year);
    }

    function updateAll() {
        updateWorkers();
        updateBuildings();
        updateResources();
        updateButtons();
        updateTime();
        makeVisible();
    }

    //This bit will take a string from HTML and use it in JS
    /*function parseJob(job) {
        var jobAssignment;
        jobAssignment = window[job];
        return jobAssignment;
    }*/

    function assign(job, number) {
        //var parsedJob = parseJob(job);
        peons.population -= number;
        job.population += number;
        updateAll();
    }
    
    //Old code for HTML buttons
/*    function build(building, number) {
        if (building === 'farms' && farms.costFood <= food && farms.costWood <= wood) {
            farms.amount += number;
            food -= farms.costFood;
            wood -= farms.costWood;
            farms.costFood *= Math.pow(farms.costIncrement, farms.amount);
            farms.costWood *= Math.pow(farms.costIncrement, farms.amount);
            farms.costFood = farms.costFood.toFixed(3);
            farms.costWood = farms.costWood.toFixed(3);
            updateAll();
        }
    }*/
    
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
        updateAll();
    }
    
    /*function freeStuff(stuff, number) {
        stuff.amount += number;
        eventName = "";
    }*/

    function produce() {
        food.amount += ((farmers.population * farmers.foodProd) + (peons.population * peons.foodProd));
        wood.amount += ((woodcutters.population * woodcutters.woodProd) + (peons.population * peons.woodProd));
        stone.amount += ((stonecutters.population * stonecutters.stoneProd) + (peons.population * peons.stoneProd));
    }
    
    function consume() {
        var population = peons.population + farmers.population + woodcutters.population + stonecutters.population;
        food.amount -= (population * 0.1);
    }
    
    function eventRun() {
        if (eventName === 'firstChoice') {
            document.getElementById('choiceText').innerHTML = "You have no food and you are very hungry. What would you like to do?";
            document.getElementById('optionText1').innerHTML = "Go hunting deer";
            document.getElementById('optionText2').innerHTML = "Start gathering nuts and berries";
            document.getElementById('optionText3').innerHTML = "Starve";
            document.getElementById('optionButton1').disabled = false;
            document.getElementById('optionButton2').disabled = false;
            document.getElementById('optionButton3').disabled = false;
            document.getElementById('optionButton1').onclick = function () { food.amount += 10; peons.foodProd += 0.25; peons.title = "Hunters"; eventName = ""; document.getElementById('choiceText').innerHTML = "You are now on the path of the Hunter."; };
            document.getElementById('optionButton2').onclick = function () { food.amount += 5; wood.amount += 2; peons.foodProd += 0.15; peons.woodProd += 0.1; peons.title = "Gatherers"; eventName = ""; document.getElementById('choiceText').innerHTML = "You are now on the path of the Gatherer."; };
            document.getElementById('optionButton3').onclick = function () { mysticism.rating += 1; peons.title = "Fools"; eventName = ""; document.getElementById('choiceText').innerHTML = "You are a fool."; };
        }
        if (eventName === "") {
            document.getElementById('optionButton1').disabled = true;
            document.getElementById('optionButton2').disabled = true;
            document.getElementById('optionButton3').disabled = true;
        }
        if (eventName === 'starving') {
            document.getElementById('choiceText').innerHTML = "You don't have enough food, You will die.";
        }
        if (eventName === 'bigHunt') {
            document.getElementById('choiceText').innerHTML = "You find a mammoth, there's good eating on one of those.";
            document.getElementById('optionText1').innerHTML = "Find a friend to help hunt it";
            document.getElementById('optionText2').innerHTML = "Chase it off a cliff";
            document.getElementById('optionText3').innerHTML = "Try to talk to it";
            document.getElementById('optionButton1').disabled = false;
            document.getElementById('optionButton2').disabled = false;
            document.getElementById('optionButton3').disabled = false;
            document.getElementById('optionButton1').onclick = function () { peons.population += 1; peons.foodProd += 0.05; eventName = ""; document.getElementById('choiceText').innerHTML = "Your friend joins you and you can hunt much better."; };
            document.getElementById('optionButton2').onclick = function () { food.amount += 50; territory.cave += 1; eventName = ""; document.getElementById('choiceText').innerHTML = "You succefully harvest a great deal of food, and in doing so, you find a cave."; };
            document.getElementById('optionButton3').onclick = function () { nature.rating += 1; eventName = ""; document.getElementById('choiceText').innerHTML = "The mammoth teaches you it's secrets."; };
        }
        if (eventName === 'specialFind') {
            document.getElementById('choiceText').innerHTML = "Where would you like to gather food today?";
            document.getElementById('optionText1').innerHTML = "Off in the forest";
            document.getElementById('optionText2').innerHTML = "Up by the mountains";
            document.getElementById('optionText3').innerHTML = "Down in the dirt";
            document.getElementById('optionButton1').disabled = false;
            document.getElementById('optionButton2').disabled = false;
            document.getElementById('optionButton3').disabled = false;
            document.getElementById('optionButton1').onclick = function () { food.amount += 25; wood.amount += 25; nature.rating += 1; eventName = ""; document.getElementById('choiceText').innerHTML = "The forest provides a bounty of food and wood."; };
            document.getElementById('optionButton2').onclick = function () { territory.cave += 1; eventName = ""; document.getElementById('choiceText').innerHTML = "In the mountains you find a cave full of bats."; };
            document.getElementById('optionButton3').onclick = function () { food.amount += 5; stone.amount += 10; eventName = ""; document.getElementById('choiceText').innerHTML = "You spend the afternoon digging in the dirt. You find mushrooms and rocks."; };
        }
    }
    
    function wasItDone(name) {
        var listCheck = eventList.indexOf(name);
        return listCheck;
    }
    
    function eventCheck() {
        var population = peons.population + farmers.population + woodcutters.population + stonecutters.population;
        if (food.amount <= 0.1 && eventCounter === 0 && eventName === "") {
            eventName = 'firstChoice';
            eventList.push('firstChoice');
            eventCounter += 1;
        }
        if ((population / 10) >= food.amount && eventCounter >= 1 && eventName === "" && wasItDone('starving') < 0) {
            eventName = 'starving';
            eventList.push('starving');
            eventCounter += 1;
        }
        if (food.amount >= 20 && eventCounter >= 1 && eventName === "" && wasItDone('bigHunt') < 0) {
            eventName = 'bigHunt';
            eventList.push('bigHunt');
            eventCounter += 1;
        }
        if (wood.amount >= 10 && eventCounter >= 1 && eventName === "" && wasItDone('specialFind') < 0) {
            eventName = 'specialFind';
            eventList.push('specialFind');
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
        produce();
        consume();
        eventCheck();
        eventRun();
        updateAll();
        time.min += 1;
        timeGoesOn();
    }, 250);
        
    function buttonLoad() {
        document.getElementById("buildFarm").onclick = function () { build(farms, 1); };
        document.getElementById("buildLumbermill").onclick = function () { build(lumbermills, 1); };
        document.getElementById("buildQuarry").onclick = function () { build(quarries, 1); };
        document.getElementById("farmerPlus").onclick = function () { assign(farmers, 1); };
        document.getElementById("farmerMinus").onclick = function () { assign(farmers, -1); };
        document.getElementById("woodcutterPlus").onclick = function () { assign(woodcutters, 1); };
        document.getElementById("woodcutterMinus").onclick = function () { assign(woodcutters, -1); };
        document.getElementById("stonecutterPlus").onclick = function () { assign(stonecutters, 1); };
        document.getElementById("stonecutterMinus").onclick = function () { assign(stonecutters, -1); };
    }
        
    buttonLoad();
        
}(window, window.$));
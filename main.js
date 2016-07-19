(function (window, $) {
    'use strict';

    var peons = {
            startPopulation: 10,
            population: 10,
            name: "peons",
            title: "Peons",
            foodProd: 0.015,
            woodProd: 0.0025,
            stoneProd: 0.00125
        },
        farmers = {
            startPopulation: 0,
            population: 0,
            name: "farmers",
            title: "Farmers",
            foodProd: 0.08
        },
        woodcutters = {
            startPopulation: 0,
            population: 0,
            name: "woodcutters",
            title: "Woodcutters",
            woodProd: 0.01
        },
        stonecutters = {
            startPopulation: 0,
            population: 0,
            name: "stonecutters",
            title: "Stonecutters",
            stoneProd: 0.005
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
            costIncrement: 1.2
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
            costIncrement: 1.2
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
            costIncrement: 1.2
        },
        time = {
            min: 0,
            hour: 0,
            day: 0,
            year: 0
        },
        food = {amount: 50},
        wood = {amount: 104},
        stone = {amount: 0},
        eventName = "",
        dead = 0;

    function prettify(input) {
        var output = Math.round(input * 1000000) / 1000000;
        return output.toFixed(0);
    }
    
    function makeVisible() {
        if (farms.amount >= 1) {
            document.getElementById('farmers').style.display = "block";
        }
        if (lumbermills.amount >= 1) {
            document.getElementById('woodcutters').style.display = "block";
        }
        if (quarries.amount >= 1) {
            document.getElementById('stonecutters').style.display = "block";
        }
        if (eventName !== "") {
            document.getElementById('option1').style.display = "block";
            document.getElementById('option2').style.display = "block";
            document.getElementById('option3').style.display = "block";
        } else {
            document.getElementById('option1').style.display = "none";
            document.getElementById('option2').style.display = "none";
            document.getElementById('option3').style.display = "none";
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

    function updateAll() {
        updateWorkers();
        updateBuildings();
        updateResources();
        updateButtons();
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
    
    function freeStuff(stuff, number) {
        stuff.amount += number;
        eventName = "";
    }

    function produce() {
        food.amount += ((farmers.population * farmers.foodProd) + (peons.population * peons.foodProd));
        wood.amount += ((woodcutters.population * woodcutters.woodProd) + (peons.population * peons.woodProd));
        stone.amount += ((stonecutters.population * stonecutters.stoneProd) + (peons.population * peons.stoneProd));
    }
    
    function consume() {
        var population = peons.population + farmers.population + woodcutters.population + stonecutters.population;
        food.amount -= (population * 0.01);
    }
    
    function eventRun() {
        if (eventName === 'FirstChoice') {
            document.getElementById('choiceText').innerHTML = "You have no food and you are very hungry. What would you like to do?";
            document.getElementById('optionText1').innerHTML = "Go hunting mammoths";
            document.getElementById('optionText2').innerHTML = "Start gathering nuts and berries";
            document.getElementById('optionText3').innerHTML = "Starve";
            document.getElementById('optionButton1').disabled = false;
            document.getElementById('optionButton2').disabled = false;
            document.getElementById('optionButton3').disabled = false;
            document.getElementById('optionButton1').onclick = function () { freeStuff(food, 500); };
            document.getElementById('optionButton2').onclick = function () { freeStuff(wood, 500); };
            document.getElementById('optionButton3').onclick = function () { freeStuff(stone, 500); };
        }
        
        if (eventName === "") {
            document.getElementById('choiceText').innerHTML = "You currently have no choices to make.";
            document.getElementById('optionButton1').disabled = true;
            document.getElementById('optionButton2').disabled = true;
            document.getElementById('optionButton3').disabled = true;
        }
    }
    
    function eventCheck() {
        if (time.hour === 1) {
            eventName = 'FirstChoice';
        }
    }
    
    window.setInterval(function () {
        produce();
        consume();
        eventCheck();
        eventRun();
        updateAll();
        time.min += 5;
        if (time.min === 60) {
            time.hour += 1;
            time.min = 0;
        }
        if (time.hour === 24) {
            time.day += 1;
            time.hour = 0;
        }
        if (time.day === 361) {
            time.year += 1;
            time.day = 1;
        }
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
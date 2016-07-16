(function () {
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
            costIncrement: 1.2
        },
        lumbermills = {
            startAmount: 0,
            amount: 0,
            name: "lumbermills",
            title: "Lumbermills",
            woodProdBonus: 0.001,
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
            costIncrement: 1.2
        },
        food = 50,
        wood = 104,
        stone = 0,
        dead = 0,
        day = 0;

    function prettify(input) {
        var output = Math.round(input * 1000000) / 1000000;
        return output.toFixed(1);
    }

    function makeVisible() {
        if (farms.amount >= 1) {
            document.getElementById('farmers').style.visibility = "visible";
        }
    }

    function updateWorkers() {
        document.getElementById('peonAmount').innerHTML = peons.population;
        document.getElementById('farmerAmount').innerHTML = farmers.population;
        document.getElementById('woodcutterAmount').innerHTML = woodcutters.population;
        document.getElementById('stonecutterAmount').innerHTML = stonecutters.population;
    }

    function updateResources() {
        document.getElementById('food').innerHTML = prettify(food);
        document.getElementById('wood').innerHTML = prettify(wood);
        document.getElementById('stone').innerHTML = prettify(stone);
    }

    function updateBuildings() {
        document.getElementById('farmAmount').innerHTML = farms.amount;
        document.getElementById('farms.costFood').innerHTML = prettify(farms.costFood);
        document.getElementById('farms.costWood').innerHTML = prettify(farms.costWood);
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
        if (farms.costFood <= food && farms.costWood <= wood) {
            document.getElementById('buildFarm').disabled = false;
        } else {
            document.getElementById('buildFarm').disabled = true;
        }
    }

    function updateAll() {
        updateWorkers();
        updateBuildings();
        updateResources();
        updateButtons();
        makeVisible();
    }

    function parseJob(job) {
        var jobAssignment;
        jobAssignment = window[job];
        return jobAssignment;
    }

    function assign(job, number) {
        var parsedJob = parseJob(job);
        peons.population -= number;
        parsedJob.population += number;
        updateAll();
    }

    function build(building, number) {
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
    }

    function produce() {
        food += ((farmers.population * farmers.foodProd) + (peons.population * peons.foodProd));
        wood += ((woodcutters.population * woodcutters.woodProd) + (peons.population * peons.woodProd));
        stone += ((stonecutters.population * stonecutters.stoneProd) + (peons.population * peons.stoneProd));
    }
    window.setInterval(function () {

        produce();
        updateAll();
        var population = peons.population + farmers.population + woodcutters.population + stonecutters.population;
        day = day + 1;
        if (day === 20) {
            food -= (population * 0.5);
            day = 0;
        }

    }, 250);
    function buttonLoad() {
        document.getElementById("farmBuild").onclick = build('farms', 1);
    }
    buttonLoad();
}());
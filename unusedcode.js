        /*if ((populationTotal / 10) >= food.amount && eventCounter >= 1 && wasItDone('starving') < 0) {
            eventName = 'starving';
            eventList.push('starving');
            eventCounter += 1;
        }*/
        
        
    //This bit will take a string from HTML and use it in JS
    /*function parseJob(job) {
        var jobAssignment;
        jobAssignment = window[job];
        return jobAssignment;
    }*/

 
    //Old code for HTML buttons
/*    function build(building, number) {
        if (building === 'farm' && farm.costFood <= food && farm.costWood <= wood) {
            farm.amount += number;
            food -= farm.costFood;
            wood -= farm.costWood;
            farm.costFood *= Math.pow(farm.costIncrement, farm.amount);
            farm.costWood *= Math.pow(farm.costIncrement, farm.amount);
            farm.costFood = farm.costFood.toFixed(3);
            farm.costWood = farm.costWood.toFixed(3);
            updateAll();
        }
    }*/
    
    /*function freeStuff(stuff, number) {
        stuff.amount += number;
        eventName = "";
    }*/


function bitch(text, stuff) {
        var node = document.createElement("span"),
            textnode = document.createTextNode(text);
        node.appendChild(textnode);
        document.getElementById('optionText').innerHTML = text;
        document.getElementById('optionButton1').onclick = function () { stuff; };
    }

choice1Print("Go hunting deer", { peon.foodProd += 0.2; peon.explorationProd += 0.2; peon.title = "Hunters"; eventName = ""; choiceDone(); console.log("What?"); }, "You are now on the path of the Hunter.");

/*foods.meat -= (populationTotal * (foods.meat / foodTotal) * 0.2);
        foods.fish -= (populationTotal * (foods.fish / foodTotal) * 0.2);
        foods.nuts -= (populationTotal * (foods.nuts / foodTotal) * 0.2);
        foods.berries -= (populationTotal * (foods.berries / foodTotal) * 0.2);
        foods.fruit -= (populationTotal * (foods.fruit / foodTotal) * 0.2);
        foods.vegetables -= (populationTotal * (foods.vegetables / foodTotal) * 0.2);
        foods.mushrooms -= (populationTotal * (foods.mushrooms / foodTotal) * 0.2);
        foods.grains -= (populationTotal * (foods.grains / foodTotal) * 0.2);
        foods.eggs -= (populationTotal * (foods.eggs / foodTotal) * 0.2);
        foods.milk -= (populationTotal * (foods.milk / foodTotal) * 0.2);
        foods.cheese -= (populationTotal * (foods.cheese / foodTotal) * 0.2);*/
        
   /* foods.meat -= ((foodTotal - foodStorage) * (foods.meat / foodTotal) * 0.1);
            foods.fish -= ((foodTotal - foodStorage) * (foods.fish / foodTotal) * 0.1);
            foods.nuts -= ((foodTotal - foodStorage) * (foods.nuts / foodTotal) * 0.1);
            foods.berries -= ((foodTotal - foodStorage) * (foods.berries / foodTotal) * 0.1);
            foods.fruit -= ((foodTotal - foodStorage) * (foods.fruit / foodTotal) * 0.1);
            foods.vegetables -= ((foodTotal - foodStorage) * (foods.vegetables / foodTotal) * 0.1);
            foods.mushrooms -= ((foodTotal - foodStorage) * (foods.mushrooms / foodTotal) * 0.1);
            foods.grains -= ((foodTotal - foodStorage) * (foods.grains / foodTotal) * 0.1);
            foods.eggs -= ((foodTotal - foodStorage) * (foods.eggs / foodTotal) * 0.1);
            foods.milk -= ((foodTotal - foodStorage) * (foods.milk / foodTotal) * 0.1);
            foods.cheese -= ((foodTotal - foodStorage) * (foods.cheese / foodTotal) * 0.1);
        }*/
        /*if (foods.meat < 0) { foods.meat = 0; }
        if (foods.fish < 0) { foods.fish = 0; }
        if (foods.nuts < 0) { foods.nuts = 0; }
        if (foods.berries < 0) { foods.berries = 0; }
        if (foods.fruit < 0) { foods.fruit = 0; }
        if (foods.vegetables < 0) { foods.vegetables = 0; }
        if (foods.mushrooms < 0) { foods.mushrooms = 0; }
        if (foods.grains < 0) { foods.grains = 0; }
        if (foods.eggs < 0) { foods.eggs = 0; }
        if (foods.milk < 0) { foods.milk = 0; }
        if (foods.cheese < 0) { foods.cheese = 0; }*/
        if (eventName === 'firstChoice') {
            document.getElementById('choiceText').innerHTML = "You have no food and you are very hungry. What would you like to do?";
            document.getElementById('optionText1').innerHTML = "Go hunting deer";
            document.getElementById('optionText2').innerHTML = "Start gathering nuts and berries";
            document.getElementById('optionText3').innerHTML = "Starve";
            document.getElementById('optionButton1').onclick = function () { peon.foodProd += 0.2; peon.explorationProd += 0.2; peon.title = "Hunters"; eventName = "";  document.getElementById('choiceText').innerHTML = "You are now on the path of the Hunter."; choiceDone(); };
            document.getElementById('optionButton2').onclick = function () { peon.foodProd += 0.15; peon.woodProd += 0.15; peon.explorationProd += 0.1; peon.title = "Gatherers"; eventName = ""; document.getElementById('choiceText').innerHTML = "You are now on the path of the Gatherer."; choiceDone(); };
            document.getElementById('optionButton3').onclick = function () { foolish.rating += 1; peon.title = "Fools"; eventName = ""; document.getElementById('choiceText').innerHTML = "You are a fool. You are starving to death."; choiceDone(); };
         /*if (hut.unlocked >= 1) { document.getElementById('hut').style.display = "block"; }
        if (farm.unlocked >= 1) { document.getElementById('farm').style.display = "block"; }
        if (lumbermill.unlocked >= 1) { document.getElementById('lumbermill').style.display = "block"; }
        if (quarry.unlocked >= 1) { document.getElementById('quarry').style.display = "block"; }
        if (hut.unlocked === 0) { document.getElementById('hut').style.display = "none"; }
        if (farm.unlocked === 0) { document.getElementById('farm').style.display = "none"; }
        if (lumbermill.unlocked === 0) { document.getElementById('lumbermill').style.display = "none"; }
        if (quarry.unlocked === 0) { document.getElementById('quarry').style.display = "none"; }
        document.getElementById('hutAmount').innerHTML = hut.amount;
        document.getElementById('farmAmount').innerHTML = farm.amount;
        document.getElementById('lumbermillAmount').innerHTML = lumbermill.amount;
        document.getElementById('quarryAmount').innerHTML = quarry.amount;
        document.getElementById('hutCost').innerHTML = primitiveBuildingCost(hut);
        document.getElementById('farmCost').innerHTML = buildingCost(farm);
        document.getElementById('lumbermillCost').innerHTML = buildingCost(lumbermill);
        document.getElementById('quarryCost').innerHTML = buildingCost(quarry);*/
        
/*if (cave.unlocked >= 1) { document.getElementById('cave').style.display = "block"; }
        if (forest.unlocked >= 1) { document.getElementById('forest').style.display = "block"; }
        if (mountain.unlocked >= 1) { document.getElementById('mountain').style.display = "block"; }
        if (plain.unlocked >= 1) { document.getElementById('plain').style.display = "block"; }
        if (swamp.unlocked >= 1) { document.getElementById('swamp').style.display = "block"; }
        if (stream.unlocked >= 1) { document.getElementById('stream').style.display = "block"; }
        if (spring.unlocked >= 1) { document.getElementById('spring').style.display = "block"; }
        if (beach.unlocked >= 1) { document.getElementById('beach').style.display = "block"; }
        if (lake.unlocked >= 1) { document.getElementById('lake').style.display = "block"; }
        if (pond.unlocked >= 1) { document.getElementById('pond').style.display = "block"; }
        if (ocean.unlocked >= 1) { document.getElementById('ocean').style.display = "block"; }
        if (island.unlocked >= 1) { document.getElementById('island').style.display = "block"; }
        if (grove.unlocked >= 1) { document.getElementById('grove').style.display = "block"; }
        if (glen.unlocked >= 1) { document.getElementById('glen').style.display = "block"; }
        if (hill.unlocked >= 1) { document.getElementById('hill').style.display = "block"; }
        if (canyon.unlocked >= 1) { document.getElementById('canyon').style.display = "block"; }
        if (river.unlocked >= 1) { document.getElementById('river').style.display = "block"; }
        if (delta.unlocked >= 1) { document.getElementById('delta').style.display = "block"; }
        if (cliff.unlocked >= 1) { document.getElementById('cliff').style.display = "block"; }
        if (bay.unlocked >= 1) { document.getElementById('bay').style.display = "block"; }
        if (cave.unlocked === 0) { document.getElementById('cave').style.display = "none"; }
        if (forest.unlocked === 0) { document.getElementById('forest').style.display = "none"; }
        if (mountain.unlocked === 0) { document.getElementById('mountain').style.display = "none"; }
        if (plain.unlocked === 0) { document.getElementById('plain').style.display = "none"; }
        if (swamp.unlocked === 0) { document.getElementById('swamp').style.display = "none"; }
        if (stream.unlocked === 0) { document.getElementById('stream').style.display = "none"; }
        if (spring.unlocked === 0) { document.getElementById('spring').style.display = "none"; }
        if (beach.unlocked === 0) { document.getElementById('beach').style.display = "none"; }
        if (lake.unlocked === 0) { document.getElementById('lake').style.display = "none"; }
        if (pond.unlocked === 0) { document.getElementById('pond').style.display = "none"; }
        if (ocean.unlocked === 0) { document.getElementById('ocean').style.display = "none"; }
        if (island.unlocked === 0) { document.getElementById('island').style.display = "none"; }
        if (grove.unlocked === 0) { document.getElementById('grove').style.display = "none"; }
        if (glen.unlocked === 0) { document.getElementById('glen').style.display = "none"; }
        if (hill.unlocked === 0) { document.getElementById('hill').style.display = "none"; }
        if (canyon.unlocked === 0) { document.getElementById('canyon').style.display = "none"; }
        if (river.unlocked === 0) { document.getElementById('river').style.display = "none"; }
        if (delta.unlocked === 0) { document.getElementById('delta').style.display = "none"; }
        if (cliff.unlocked === 0) { document.getElementById('cliff').style.display = "none"; }
        if (bay.unlocked === 0) { document.getElementById('bay').style.display = "none"; }
        document.getElementById('caveAmount').innerHTML = cave.amount;
        document.getElementById('forestAmount').innerHTML = forest.amount;
        document.getElementById('mountainAmount').innerHTML = mountain.amount;
        document.getElementById('plainAmount').innerHTML = plain.amount;
        document.getElementById('swampAmount').innerHTML = swamp.amount;
        document.getElementById('streamAmount').innerHTML = stream.amount;
        document.getElementById('springAmount').innerHTML = spring.amount;
        document.getElementById('beachAmount').innerHTML = beach.amount;
        document.getElementById('lakeAmount').innerHTML = lake.amount;
        document.getElementById('pondAmount').innerHTML = pond.amount;
        document.getElementById('oceanAmount').innerHTML = ocean.amount;
        document.getElementById('islandAmount').innerHTML = island.amount;
        document.getElementById('groveAmount').innerHTML = grove.amount;
        document.getElementById('glenAmount').innerHTML = glen.amount;
        document.getElementById('hillAmount').innerHTML = hill.amount;
        document.getElementById('canyonAmount').innerHTML = canyon.amount;
        document.getElementById('riverAmount').innerHTML = river.amount;
        document.getElementById('deltaAmount').innerHTML = delta.amount;
        document.getElementById('cliffAmount').innerHTML = cliff.amount;
        document.getElementById('bayAmount').innerHTML = bay.amount;*/
            
            /*if (meat.amount !== 0) { document.getElementById('meat').style.display = "block"; }
        if (fish.amount !== 0) { document.getElementById('fish').style.display = "block"; }
        if (nuts.amount !== 0) { document.getElementById('nuts').style.display = "block"; }
        if (berries.amount !== 0) { document.getElementById('berries').style.display = "block"; }
        if (fruit.amount !== 0) { document.getElementById('fruit').style.display = "block"; }
        if (vegetables.amount !== 0) { document.getElementById('vegetables').style.display = "block"; }
        if (mushrooms.amount !== 0) { document.getElementById('mushrooms').style.display = "block"; }
        if (grains.amount !== 0) { document.getElementById('grains').style.display = "block"; }
        if (eggs.amount !== 0) { document.getElementById('eggs').style.display = "block"; }
        if (milk.amount !== 0) { document.getElementById('milk').style.display = "block"; }
        if (cheese.amount !== 0) { document.getElementById('cheese').style.display = "block"; }
        if (furs.amount !== 0) { document.getElementById('furs').style.display = "block"; }
        if (leather.amount !== 0) { document.getElementById('leather').style.display = "block"; }
        if (bones.amount !== 0) { document.getElementById('bones').style.display = "block"; }
        if (sticks.amount !== 0) { document.getElementById('sticks').style.display = "block"; }
        if (stone.amount !== 0) { document.getElementById('stone').style.display = "block"; }
        if (logs.amount !== 0) { document.getElementById('logs').style.display = "block"; }
        if (lumber.amount !== 0) { document.getElementById('lumber').style.display = "block"; }
        if (rocks.amount !== 0) { document.getElementById('rocks').style.display = "block"; }
        if (flint.amount !== 0) { document.getElementById('flint').style.display = "block"; }
        if (clay.amount !== 0) { document.getElementById('clay').style.display = "block"; }
        if (stone.amount !== 0) { document.getElementById('stone').style.display = "block"; }
        if (ore.amount !== 0) { document.getElementById('ore').style.display = "block"; }
        if (water.amount !== 0) { document.getElementById('water').style.display = "block"; }
        if (oil.amount !== 0) { document.getElementById('oil').style.display = "block"; }
        if (copper.amount !== 0) { document.getElementById('copper').style.display = "block"; }
        if (tin.amount !== 0) { document.getElementById('tin').style.display = "block"; }
        if (bronze.amount !== 0) { document.getElementById('bronze').style.display = "block"; }
        if (iron.amount !== 0) { document.getElementById('iron').style.display = "block"; }
        if (steel.amount !== 0) { document.getElementById('steel').style.display = "block"; }
        if (silver.amount !== 0) { document.getElementById('silver').style.display = "block"; }
        if (gold.amount !== 0) { document.getElementById('gold').style.display = "block"; }
        if (gems.amount !== 0) { document.getElementById('gems').style.display = "block"; }
        if (crystals.amount !== 0) { document.getElementById('crystals').style.display = "block"; }
        if (money.amount !== 0) { document.getElementById('money').style.display = "block"; }
        if (mana.amount !== 0) { document.getElementById('mana').style.display = "block"; }
        if (herbs.amount !== 0) { document.getElementById('herbs').style.display = "block"; }
        if (wool.amount !== 0) { document.getElementById('wool').style.display = "block"; }
        if (linen.amount !== 0) { document.getElementById('linen').style.display = "block"; }
        if (cotton.amount !== 0) { document.getElementById('cotton').style.display = "block"; }
        if (cloth.amount !== 0) { document.getElementById('cloth').style.display = "block"; }
        if (papyrus.amount !== 0) { document.getElementById('papyrus').style.display = "block"; }
        if (paper.amount !== 0) { document.getElementById('paper').style.display = "block"; }
        if (paint.amount !== 0) { document.getElementById('paint').style.display = "block"; }
        if (ink.amount !== 0) { document.getElementById('ink').style.display = "block"; }
        if (charcoal.amount !== 0) { document.getElementById('charcoal').style.display = "block"; }
        if (coal.amount !== 0) { document.getElementById('coal').style.display = "block"; }
        if (salt.amount !== 0) { document.getElementById('salt').style.display = "block"; }
        if (saltpeter.amount !== 0) { document.getElementById('saltpeter').style.display = "block"; }
        if (gunpowder.amount !== 0) { document.getElementById('gunpowder').style.display = "block"; }
        if (glass.amount !== 0) { document.getElementById('glass').style.display = "block"; }
        if (concrete.amount !== 0) { document.getElementById('concrete').style.display = "block"; }
        if (exploration.amount !== 0) { document.getElementById('exploration').style.display = "block"; }
        if (meat.amount === 0) { document.getElementById('meat').style.display = "none"; }
        if (fish.amount === 0) { document.getElementById('fish').style.display = "none"; }
        if (nuts.amount === 0) { document.getElementById('nuts').style.display = "none"; }
        if (berries.amount === 0) { document.getElementById('berries').style.display = "none"; }
        if (fruit.amount === 0) { document.getElementById('fruit').style.display = "none"; }
        if (vegetables.amount === 0) { document.getElementById('vegetables').style.display = "none"; }
        if (mushrooms.amount === 0) { document.getElementById('mushrooms').style.display = "none"; }
        if (grains.amount === 0) { document.getElementById('grains').style.display = "none"; }
        if (eggs.amount === 0) { document.getElementById('eggs').style.display = "none"; }
        if (milk.amount === 0) { document.getElementById('milk').style.display = "none"; }
        if (cheese.amount === 0) { document.getElementById('cheese').style.display = "none"; }
        if (furs.amount === 0) { document.getElementById('furs').style.display = "none"; }
        if (leather.amount === 0) { document.getElementById('leather').style.display = "none"; }
        if (bones.amount === 0) { document.getElementById('bones').style.display = "none"; }
        if (sticks.amount === 0) { document.getElementById('sticks').style.display = "none"; }
        if (stone.amount === 0) { document.getElementById('stone').style.display = "none"; }
        if (logs.amount === 0) { document.getElementById('logs').style.display = "none"; }
        if (lumber.amount === 0) { document.getElementById('lumber').style.display = "none"; }
        if (rocks.amount === 0) { document.getElementById('rocks').style.display = "none"; }
        if (flint.amount === 0) { document.getElementById('flint').style.display = "none"; }
        if (clay.amount === 0) { document.getElementById('clay').style.display = "none"; }
        if (stone.amount === 0) { document.getElementById('stone').style.display = "none"; }
        if (ore.amount === 0) { document.getElementById('ore').style.display = "none"; }
        if (water.amount === 0) { document.getElementById('water').style.display = "none"; }
        if (oil.amount === 0) { document.getElementById('oil').style.display = "none"; }
        if (copper.amount === 0) { document.getElementById('copper').style.display = "none"; }
        if (tin.amount === 0) { document.getElementById('tin').style.display = "none"; }
        if (bronze.amount === 0) { document.getElementById('bronze').style.display = "none"; }
        if (iron.amount === 0) { document.getElementById('iron').style.display = "none"; }
        if (steel.amount === 0) { document.getElementById('steel').style.display = "none"; }
        if (silver.amount === 0) { document.getElementById('silver').style.display = "none"; }
        if (gold.amount === 0) { document.getElementById('gold').style.display = "none"; }
        if (gems.amount === 0) { document.getElementById('gems').style.display = "none"; }
        if (crystals.amount === 0) { document.getElementById('crystals').style.display = "none"; }
        if (money.amount === 0) { document.getElementById('money').style.display = "none"; }
        if (mana.amount === 0) { document.getElementById('mana').style.display = "none"; }
        if (herbs.amount === 0) { document.getElementById('herbs').style.display = "none"; }
        if (wool.amount === 0) { document.getElementById('wool').style.display = "none"; }
        if (linen.amount === 0) { document.getElementById('linen').style.display = "none"; }
        if (cotton.amount === 0) { document.getElementById('cotton').style.display = "none"; }
        if (cloth.amount === 0) { document.getElementById('cloth').style.display = "none"; }
        if (papyrus.amount === 0) { document.getElementById('papyrus').style.display = "none"; }
        if (paper.amount === 0) { document.getElementById('paper').style.display = "none"; }
        if (paint.amount === 0) { document.getElementById('paint').style.display = "none"; }
        if (ink.amount === 0) { document.getElementById('ink').style.display = "none"; }
        if (charcoal.amount === 0) { document.getElementById('charcoal').style.display = "none"; }
        if (coal.amount === 0) { document.getElementById('coal').style.display = "none"; }
        if (salt.amount === 0) { document.getElementById('salt').style.display = "none"; }
        if (saltpeter.amount === 0) { document.getElementById('saltpeter').style.display = "none"; }
        if (gunpowder.amount === 0) { document.getElementById('gunpowder').style.display = "none"; }
        if (glass.amount === 0) { document.getElementById('glass').style.display = "none"; }
        if (concrete.amount === 0) { document.getElementById('concrete').style.display = "none"; }
        if (exploration.amount === 0) { document.getElementById('exploration').style.display = "none"; }
        document.getElementById('meatAmount').innerHTML = prettify(meat.amount);
        document.getElementById('fishAmount').innerHTML = prettify(fish.amount);
        document.getElementById('nutsAmount').innerHTML = prettify(nuts.amount);
        document.getElementById('berriesAmount').innerHTML = prettify(berries.amount);
        document.getElementById('fruitAmount').innerHTML = prettify(fruit.amount);
        document.getElementById('vegetablesAmount').innerHTML = prettify(vegetables.amount);
        document.getElementById('mushroomsAmount').innerHTML = prettify(mushrooms.amount);
        document.getElementById('grainsAmount').innerHTML = prettify(grains.amount);
        document.getElementById('eggsAmount').innerHTML = prettify(eggs.amount);
        document.getElementById('milkAmount').innerHTML = prettify(milk.amount);
        document.getElementById('cheeseAmount').innerHTML = prettify(cheese.amount);
        document.getElementById('fursAmount').innerHTML = prettify(furs.amount);
        document.getElementById('leatherAmount').innerHTML = prettify(leather.amount);
        document.getElementById('bonesAmount').innerHTML = prettify(bones.amount);
        document.getElementById('sticksAmount').innerHTML = prettify(sticks.amount);
        document.getElementById('logsAmount').innerHTML = prettify(logs.amount);
        document.getElementById('lumberAmount').innerHTML = prettify(lumber.amount);
        document.getElementById('rocksAmount').innerHTML = prettify(rocks.amount);
        document.getElementById('flintAmount').innerHTML = prettify(flint.amount);
        document.getElementById('clayAmount').innerHTML = prettify(clay.amount);
        document.getElementById('stoneAmount').innerHTML = prettify(stone.amount);
        document.getElementById('oreAmount').innerHTML = prettify(ore.amount);
        document.getElementById('waterAmount').innerHTML = prettify(water.amount);
        document.getElementById('oilAmount').innerHTML = prettify(oil.amount);
        document.getElementById('copperAmount').innerHTML = prettify(copper.amount);
        document.getElementById('tinAmount').innerHTML = prettify(tin.amount);
        document.getElementById('bronzeAmount').innerHTML = prettify(bronze.amount);
        document.getElementById('ironAmount').innerHTML = prettify(iron.amount);
        document.getElementById('steelAmount').innerHTML = prettify(steel.amount);
        document.getElementById('silverAmount').innerHTML = prettify(silver.amount);
        document.getElementById('goldAmount').innerHTML = prettify(gold.amount);
        document.getElementById('gemsAmount').innerHTML = prettify(gems.amount);
        document.getElementById('crystalsAmount').innerHTML = prettify(crystals.amount);
        document.getElementById('moneyAmount').innerHTML = prettify(money.amount);
        document.getElementById('manaAmount').innerHTML = prettify(mana.amount);
        document.getElementById('herbsAmount').innerHTML = prettify(herbs.amount);
        document.getElementById('woolAmount').innerHTML = prettify(wool.amount);
        document.getElementById('linenAmount').innerHTML = prettify(linen.amount);
        document.getElementById('cottonAmount').innerHTML = prettify(cotton.amount);
        document.getElementById('clothAmount').innerHTML = prettify(cloth.amount);
        document.getElementById('papyrusAmount').innerHTML = prettify(papyrus.amount);
        document.getElementById('paperAmount').innerHTML = prettify(paper.amount);
        document.getElementById('paintAmount').innerHTML = prettify(paint.amount);
        document.getElementById('inkAmount').innerHTML = prettify(ink.amount);
        document.getElementById('charcoalAmount').innerHTML = prettify(charcoal.amount);
        document.getElementById('coalAmount').innerHTML = prettify(coal.amount);
        document.getElementById('saltAmount').innerHTML = prettify(salt.amount);
        document.getElementById('saltpeterAmount').innerHTML = prettify(saltpeter.amount);
        document.getElementById('gunpowderAmount').innerHTML = prettify(gunpowder.amount);
        document.getElementById('glassAmount').innerHTML = prettify(glass.amount);
        document.getElementById('concreteAmount').innerHTML = prettify(concrete.amount);
        document.getElementById('explorationAmount').innerHTML = prettify(exploration.amount);*/
            
            /*if (animal.unlocked >= 1) { document.getElementById('animal').style.display = "block"; }
        if (artist.unlocked >= 1) { document.getElementById('artist').style.display = "block"; }
        if (carpenter.unlocked >= 1) { document.getElementById('carpenter').style.display = "block"; }
        if (cook.unlocked >= 1) { document.getElementById('cook').style.display = "block"; }
        if (crafter.unlocked >= 1) { document.getElementById('crafter').style.display = "block"; }
        if (druid.unlocked >= 1) { document.getElementById('druid').style.display = "block"; }
        if (farmer.unlocked >= 1) { document.getElementById('farmer').style.display = "block"; }
        if (fisher.unlocked >= 1) { document.getElementById('fisher').style.display = "block"; }
        if (fool.unlocked >= 1) { document.getElementById('fool').style.display = "block"; }
        if (gatherer.unlocked >= 1) { document.getElementById('gatherer').style.display = "block"; }
        if (ghost.unlocked >= 1) { document.getElementById('ghost').style.display = "block"; }
        if (hunter.unlocked >= 1) { document.getElementById('hunter').style.display = "block"; }
        if (laborer.unlocked >= 1) { document.getElementById('laborer').style.display = "block"; }
        if (magic.unlocked >= 1) { document.getElementById('magic').style.display = "block"; }
        if (mason.unlocked >= 1) { document.getElementById('mason').style.display = "block"; }
        if (peon.unlocked >= 1) { document.getElementById('peon').style.display = "block"; }
        if (sailor.unlocked >= 1) { document.getElementById('sailor').style.display = "block"; }
        if (scientist.unlocked >= 1) { document.getElementById('scientist').style.display = "block"; }
        if (warrior.unlocked >= 1) { document.getElementById('warrior').style.display = "block"; }
        if (weaver.unlocked >= 1) { document.getElementById('weaver').style.display = "block"; }
        if (woodsman.unlocked >= 1) { document.getElementById('woodsman').style.display = "block"; }
        if (animal.unlocked === 0) { document.getElementById('animal').style.display = "none"; }
        if (artist.unlocked === 0) { document.getElementById('artist').style.display = "none"; }
        if (carpenter.unlocked === 0) { document.getElementById('carpenter').style.display = "none"; }
        if (cook.unlocked === 0) { document.getElementById('cook').style.display = "none"; }
        if (crafter.unlocked === 0) { document.getElementById('crafter').style.display = "none"; }
        if (druid.unlocked === 0) { document.getElementById('druid').style.display = "none"; }
        if (farmer.unlocked === 0) { document.getElementById('farmer').style.display = "none"; }
        if (fisher.unlocked === 0) { document.getElementById('fisher').style.display = "none"; }
        if (fool.unlocked === 0) { document.getElementById('fool').style.display = "none"; }
        if (gatherer.unlocked === 0) { document.getElementById('gatherer').style.display = "none"; }
        if (ghost.unlocked === 0) { document.getElementById('ghost').style.display = "none"; }
        if (hunter.unlocked === 0) { document.getElementById('hunter').style.display = "none"; }
        if (laborer.unlocked === 0) { document.getElementById('laborer').style.display = "none"; }
        if (magic.unlocked === 0) { document.getElementById('magic').style.display = "none"; }
        if (mason.unlocked === 0) { document.getElementById('mason').style.display = "none"; }
        if (peon.unlocked === 0) { document.getElementById('peon').style.display = "none"; }
        if (sailor.unlocked === 0) { document.getElementById('sailor').style.display = "none"; }
        if (scientist.unlocked === 0) { document.getElementById('scientist').style.display = "none"; }
        if (warrior.unlocked === 0) { document.getElementById('warrior').style.display = "none"; }
        if (weaver.unlocked === 0) { document.getElementById('weaver').style.display = "none"; }
        if (woodsman.unlocked === 0) { document.getElementById('woodsman').style.display = "none"; }
        document.getElementById('animalTitle').innerHTML = animal.title;
        document.getElementById('animalAmount').innerHTML = animal.population;
        document.getElementById('artistTitle').innerHTML = artist.title;
        document.getElementById('artistAmount').innerHTML = artist.population;
        document.getElementById('carpenterTitle').innerHTML = carpenter.title;
        document.getElementById('carpenterAmount').innerHTML = carpenter.population;
        document.getElementById('cookTitle').innerHTML = .cook.title;
        document.getElementById('cookAmount').innerHTML = cook.population;
        document.getElementById('crafterTitle').innerHTML = crafter.title;
        document.getElementById('crafterAmount').innerHTML = crafter.population;
        document.getElementById('druidTitle').innerHTML = druid.title;
        document.getElementById('druidAmount').innerHTML = druid.population;
        document.getElementById('farmerTitle').innerHTML = farmer.title;
        document.getElementById('farmerAmount').innerHTML = farmer.population;
        document.getElementById('fisherTitle').innerHTML = fisher.title;
        document.getElementById('fisherAmount').innerHTML = fisher.population;
        document.getElementById('foolTitle').innerHTML = fool.title;
        document.getElementById('foolAmount').innerHTML = fool.population;
        document.getElementById('gathererTitle').innerHTML = gatherer.title;
        document.getElementById('gathererAmount').innerHTML = gatherer.population;
        document.getElementById('ghostTitle').innerHTML = ghost.title;
        document.getElementById('ghostAmount').innerHTML = ghost.population;
        document.getElementById('hunterTitle').innerHTML = hunter.title;
        document.getElementById('hunterAmount').innerHTML = hunter.population;
        document.getElementById('laborerTitle').innerHTML = laborer.title;
        document.getElementById('laborerAmount').innerHTML = laborer.population;
        document.getElementById('magicTitle').innerHTML = magic.title;
        document.getElementById('magicAmount').innerHTML = magic.population;
        document.getElementById('masonTitle').innerHTML = mason.title;
        document.getElementById('masonAmount').innerHTML = mason.population;
        document.getElementById('peonTitle').innerHTML = peon.title;
        document.getElementById('peonAmount').innerHTML = peon.population;
        document.getElementById('sailorTitle').innerHTML = sailor.title;
        document.getElementById('sailorAmount').innerHTML = sailor.population;
        document.getElementById('scientistTitle').innerHTML = scientist.title;
        document.getElementById('scientistAmount').innerHTML = scientist.population;
        document.getElementById('warriorTitle').innerHTML = warrior.title;
        document.getElementById('warriorAmount').innerHTML = warrior.population;
        document.getElementById('weaverTitle').innerHTML = weaver.title;
        document.getElementById('weaverAmount').innerHTML = weaver.population;
        document.getElementById('woodsmanTitle').innerHTML = woodsman.title;
        document.getElementById('woodsmanAmount').innerHTML = woodsman.population;*/
        
            /*animal = startAnimal;
        artist = startArtist;
        carpenter = startCarpenter;
        cook = startCook;
        crafter = startCrafter;
        druid = startDruid;
        farmer = startFarmer;
        fool = startFool;
        gatherer = startGatherer;
        ghost = startGhost;
        hunter = startHunter;
        laborer = startLaborer;
        peon = startPeon;
        farmer = startFarmer;
        magic = startMagic;
        mason = startMason;
        peon = startPeon;
        scientist = startScientist;
        warrior = startWarrior;
        weaver = startWeaver;
        woodsman = startWoodsman;
        hut = startHut;
        teepee = startTeepee;
        alchemistLab = startAlchemistLab;
        apothecary = startApothecary;
        armory = startArmory;
        barracks = startBarracks;
        blacksmith = startBlacksmith;
        butcher = startButcher;
        cafe = startCafe;
        church = startChurch;
        enchanterWorkshop = startEnchanterWorkshop;
        farm = startFarm;
        gunsmith = startGunsmith;
        livery = startLivery;
        lumbermill = startLumbermill;
        machinist = startMachinist;
        quarry = startQuarry;
        stable = startStable;
        tailor = startTailor;
        temple = startTemple;
        textile = startTextile;
        trainingYard = startTrainingYard;
        wainwright = startWainwright;
        watchtower = startWatchtower;
        watermill = startWatermill;
        windmill = startWindmill;
        witchCottage = startWitchCottage;
        wizardTower = startWizardTower;
        workshop = startWorkshop;
        cave = startCave;
        forest = startForest;
        mountain = startMountain;
        plain = startPlain;
        swamp = startSwamp;
        stream = startStream;
        spring = startSpring;
        beach = startBeach;
        lake = startLake;
        pond = startPond;
        ocean = startOcean;
        island = startIsland;
        grove = startGrove;
        glen = startGlen;
        hill = startHill;
        canyon = startCanyon;
        river = startRiver;
        delta = startDelta;
        cliff = startCliff;
        bay = startBay;*/
        
            /*meat.amount = meat.startAmount;
        fish.amount = fish.startAmount;
        nuts.amount = nuts.startAmount;
        berries.amount = berries.startAmount;
        fruit.amount = fruit.startAmount;
        vegetables.amount = vegetables.startAmount;
        mushrooms.amount = mushrooms.startAmount;
        grains.amount = grains.startAmount;
        eggs.amount = eggs.startAmount;
        milk.amount = milk.startAmount;
        cheese.amount = cheese.startAmount;
        furs.amount = furs.startAmount;
        leather.amount = leather.startAmount;
        bones.amount = bones.startAmount;
        sticks.amount = sticks.startAmount;
        logs.amount = logs.startAmount;
        lumber.amount = lumber.startAmount;
        rocks.amount = rocks.startAmount;
        flint.amount = flint.startAmount;
        clay.amount = clay.startAmount;
        stone.amount = stone.startAmount;
        ore.amount = ore.startAmount;
        water.amount = water.startAmount;
        oil.amount = oil.startAmount;
        copper.amount = copper.startAmount;
        tin.amount = tin.startAmount;
        bronze.amount = bronze.startAmount;
        iron.amount = iron.startAmount;
        steel.amount = steel.startAmount;
        silver.amount = silver.startAmount;
        gold.amount = gold.startAmount;
        gems.amount = gems.startAmount;
        crystals.amount = crystals.startAmount;
        money.amount = money.startAmount;
        mana.amount = mana.startAmount;
        herbs.amount = herbs.startAmount;
        wool.amount = wool.startAmount;
        linen.amount = linen.startAmount;
        cotton.amount = cotton.startAmount;
        cloth.amount = cloth.startAmount;
        papyrus.amount = papyrus.startAmount;
        paper.amount = paper.startAmount;
        paint.amount = paint.startAmount;
        ink.amount = ink.startAmount;
        charcoal.amount = charcoal.startAmount;
        coal.amount = coal.startAmount;
        salt.amount = salt.startAmount;
        saltpeter.amount = saltpeter.startAmount;
        gunpowder.amount = gunpowder.startAmount;
        glass.amount = glass.startAmount;
        concrete.amount = concrete.startAmount;*/
            
            /*function build(building, number) {
        building.amount += number;
        logs.amount -= building.costlogs;
        stone.amount -= building.costStone;
        glass.amount -= building.costglass;
        building.costlogs *= Math.pow(building.costIncrement, building.amount);
        building.costStone *= Math.pow(building.costIncrement, building.amount);
        building.costglass *= Math.pow(building.costIncrement, building.amount);
        building.costlogs = building.costlogs.toFixed(3);
        building.costStone = building.costStone.toFixed(3);
        building.costglass = building.costglass.toFixed(3);
    }
    
    function buildModern(building, number) {
        building.amount += number;
        lumber.amount -= building.costLumber;
        glass.amount -= building.costglass;
        steel.amount -= building.costSteel;
        concrete.amount -= building.costConcrete;
        building.costLumber *= Math.pow(building.costIncrement, building.amount);
        building.costglass *= Math.pow(building.costIncrement, building.amount);
        building.costSteel *= Math.pow(building.costIncrement, building.amount);
        building.costConcrete *= Math.pow(building.costIncrement, building.amount);
        building.costLumber = building.costLumber.toFixed(3);
        building.costglass = building.costglass.toFixed(3);
        building.costSteel = building.costSteel.toFixed(3);
        building.costConcrete = building.costConcrete.toFixed(3);
    }*/
        
    function primitiveBuildingCost(classy) {
        var cost1 = "", cost2 = "", cost3 = "";
        if (building.classy.cost.sticks > 0) { cost1 = "Sticks: " + prettify(building.classy.cost.sticks) + "  "; }
        if (building.classy.cost.rocks > 0) { cost2 = "Rocks: " + prettify(building.classy.cost.rocks) + "  "; }
        if (building.classy.cost.furs > 0) { cost3 = "Furs: " + prettify(building.classy.cost.furs); }
        return cost1 + cost2 + cost3;
    }
    
    /*if (building[target].cost.logs > 0) { cost1 = "Logs: " + prettify(building[target].cost.logs) + "  "; }
        if (building.classy.cost.Stone > 0) { cost2 = "Stone: " + prettify(building.classy.cost.Stone) + "  "; }
        if (building.classy.cost.glass > 0) { cost3 = "Glass: " + prettify(building.classy.cost.glass); }*/
        
            /*if (peon.population >= 1 && farm.amount > farmer.population) { document.getElementById('farmerPlus').disabled = false; }
        if (farmer.population >= 1) { document.getElementById('farmerMinus').disabled = false; }
        if (peon.population >= 1 && lumbermill.amount > woodsman.population) { document.getElementById('woodsmanPlus').disabled = false; }
        if (woodsman.population >= 1) { document.getElementById('woodsmanMinus').disabled = false; }
        if (peon.population >= 1 && quarry.amount > mason.population) { document.getElementById('masonPlus').disabled = false; }
        if (mason.population >= 1) { document.getElementById('masonMinus').disabled = false; }*/
        /*if (building.hut.coststicks <= goods.sticks.amount && building.hut.costrocks <= goods.rocks.amount && building.hut.costfurs <= goods.furs.amount) { document.getElementById('buildHut').disabled = false; }
        if (building.farm.costlogs <= goods.logs.amount && building.farm.costStone <= goods.stone.amount && building.farm.costglass <= goods.glass.amount) { document.getElementById('buildFarm').disabled = false; }
        if (building.lumbermill.costlogs <= goods.logs.amount && building.lumbermill.costStone <= goods.stone.amount && building.lumbermill.costglass <= goods.glass.amount) { document.getElementById('buildLumbermill').disabled = false; }
        if (building.quarry.cost.logs <= goods.logs.amount && building.quarry.costStone <= goods.stone.amount && building.quarry.costglass <= goods.glass.amount) { document.getElementById('buildQuarry').disabled = false; }*/
            
              /*function buildingCost(target) {
        var costToken,
            costString = "";
        for (costToken in building[target].cost) {
            if (building[target].cost.hasOwnProperty(costToken)) {
                costString += (building[target].cost[costToken].title + ": " + prettify(building[target].cost[costToken].amount) + " ");
            }
        }
        return costString;
    }*/

/*document.getElementById("farmBuild").onclick = function () { build('farm', 1); document.getElementById('buildFarm').disabled = true; };
        document.getElementById("buildLumbermill").onclick = function () { build('lumbermill', 1); document.getElementById('buildLumbermill').disabled = true; };
        document.getElementById("buildQuarry").onclick = function () { build('quarry', 1); document.getElementById('buildQuarry').disabled = true; };*/
            
            
           
            choiceReady();
        if (eventName === 'firstChoice') {
            choicePrint("You have no food and you are very hungry. What would you like to do?");
            choice1Print("Go hunting deer", function () { workers.peon.population -= 1; workers.hunter.population += 1; unlock('workers', 'hunter'); unlock('actions', 'roastMeat'); lock('workers', 'peon'); }, "You are now on the path of the Hunter.");
            choice2Print("Start gathering nuts and berries", function () { workers.peon.population -= 1; workers.gatherer.population += 1; unlock('workers', 'gatherer'); unlock('actions', 'sacredChant'); lock('workers', 'peon'); }, "You are now on the path of the Gatherer.");
            choice3Print("Starve", function () { workers.peon.population -= 1; workers.fool.population += 1; traits.foolish.rating += 1; start.traits.foolish.rating += 1; unlock('workers', 'fool'); lock('workers', 'peon'); }, "You are a fool. You are starving to death.");
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
                
    function choiceResult(result, resultText) {
        document.getElementById('choiceText').innerHTML = resultText;
        logSmall(resultText);
        result();
        eventName = "";
        choiceDone();
    }
    
    function choicePrint(text) {
        document.getElementById('choiceText').innerHTML = text;
        logNormal(text);
    }
    
    function choice1Print(text1, result1, result1Text) {
        document.getElementById('optionText1').innerHTML = text1;
        document.getElementById('optionButton1').onclick = function () { choiceResult(result1, result1Text); };
        
    }
    
    function choice2Print(text2, result2, result2Text) {
        document.getElementById('optionText2').innerHTML = text2;
        document.getElementById('optionButton2').onclick = function () { choiceResult(result2, result2Text); };
    }
    
    function choice3Print(text3, result3, result3Text) {
        document.getElementById('optionText3').innerHTML = text3;
        document.getElementById('optionButton3').onclick = function () { choiceResult(result3, result3Text); };
    }
            
                        /*choicePrint("You have no food and you are very hungry. What would you like to do?");
            choice1Print("Go hunting deer", function () { workers.peon.population -= 1; workers.hunter.population += 1; unlock('workers', 'hunter'); unlock('actions', 'roastMeat'); lock('workers', 'peon'); }, "You are now on the path of the Hunter.");
            choice2Print("Start gathering nuts and berries", function () { workers.peon.population -= 1; workers.gatherer.population += 1; unlock('workers', 'gatherer'); unlock('actions', 'sacredChant'); lock('workers', 'peon'); }, "You are now on the path of the Gatherer.");
            choice3Print("Starve", function () { workers.peon.population -= 1; workers.fool.population += 1; traits.foolish.rating += 1; start.traits.foolish.rating += 1; unlock('workers', 'fool'); lock('workers', 'peon'); }, "You are a fool. You are starving to death.");
        }
        if (eventName === 'bigHunt') {
            choicePrint("You find a mammoth, there's good eating on one of those.");
            choice1Print("Find a friend to help hunt it", function () { workers.hunter.population += 1; unlock('workers', 'hunter'); unlock('actions', 'roastMeat'); workers.hunter.meatProd += 0.025; }, "Your friend joins you and you can hunt much better.");
            choice2Print("Chase it off a cliff", function () { foods.meat += 50; territory.cave.amount += 1; unlock('territory', 'cave'); }, "You successfully harvest a great deal of food, and in doing so, you find a cave.");
            choice3Print("Try to talk to it", function () { traits.nature.rating += 1; }, "The mammoth teaches you its secrets.");
        }
        if (eventName === 'specialFind') {
            choicePrint("Where would you like to gather food today?");
            choice1Print("Off in the forest", function () { territory.forest.amount += 1; unlock('territory', 'forest'); traits.nature.rating += 1; }, "The forest is nice, perhaps you'll keep it.");
            choice2Print("Up by the mountains", function () { territory.cave.amount += 1; unlock('territory', 'cave'); }, "In the mountains you find a cave full of bats.");
            choice3Print("Down in the dirt", function () { foods.mushrooms += 5; goods.rocks += 10; }, "You spend the afternoon digging in the dirt. You find mushrooms and rocks.");
        }*/
            if (eventName === 'needHome') {
            choicePrint("You don't have a place to stay and it's getting cold.");
            choice1Print("Pile up sticks for warmth", function () { workers.gatherer.sticksProd += 0.025; unlock('building', 'hut'); building.hut.amount += 1; }, "You've learned how to build a hut.");
            choice2Print("Look in the mountains", function () { workers.hunter.explorationProd += 0.005; territory.cave.amount += 1; unlock('territory', 'cave'); traits.mysticism += 1; }, "In the mountains you find a cave full of skeletons.");
            choice3Print("Kill a tauntaun and climb inside", function () { eventList.pop(); }, "You stay warm for the night but you better find something that will last longer.");
        }
            if (eventName === 'freeFool') {
            choicePrint("You have proceeded in your folly and have learned wisdom.");
            choice1Print("Farm", function () { unlock('building', 'farm'); foods.grains += 5; goods.logs += 4; }, "You've learned how to build a farm.");
            choice2Print("Lumbermill", function () { unlock('building', 'lumbermill'); goods.lumber += 5; }, "You've learned how to build a lumbermill.");
            choice3Print("Quarry", function () { unlock('building', 'quarry'); goods.stone += 5; }, "You've learned how to build a quarry.");
        }
        if (eventName === 'wildPath') {
            choicePrint("You are becoming one with the land. How do you want to continue?");
            choice1Print("Talk with animals", function () { unlock('workers', 'animal'); workers.animal.title = "Wolves"; workers.animal.population += 1; }, "You can now run with the wolves.");
            choice2Print("Talk with plants", function () { workers.peon.fruitProd += 1; workers.peon.explorationProd += 1; }, "You can speak with plants and make them grow.");
            choice3Print("Turn your back on the wild", function () { traits.nature.rating = 0; unlock('building', 'lumbermill'); }, "You've given up the ways of nature. Time to chop it down!");
        }
    if (eventName === 'findTerritory') {
            var numNum = random(1, 100);
            //totalTerritory = territory.cave.amount + territory.forest.amount + territory.mountain.amount + territory.plain.amount + territory.swamp.amount + territory.stream.amount + territory.spring.amount + territory.beach.amount + territory.lake.amount + territory.pond.amount + territory.ocean.amount + territory.island.amount + territory.grove.amount + territory.glen.amount + territory.hill.amount + territory.canyon.amount + territory.river.amount + territory.delta.amount + territory.cliff.amount + territory.bay.amount;
            if (numNum <= 15) {
                choicePrint("Mountain");
                choice1Print("Cave", function () { territory.cave.amount += 1; unlock('territory', 'cave'); eventList.pop(); }, "Caved");
                choice2Print("Mountain", function () { territory.mountain.amount += 1; unlock('territory', 'mountain'); eventList.pop(); }, "Mountained");
                choice3Print("Hill", function () { territory.hill.amount += 1; unlock('territory', 'hill'); eventList.pop(); }, "Hilled");
            }
            if (numNum > 15 && numNum <= 30) {
                choicePrint("Mountain 2");
                choice1Print("Lake", function () { territory.lake.amount += 1; unlock('territory', 'lake'); eventList.pop(); }, "Laked");
                choice2Print("Canyon", function () { territory.canyon.amount += 1; unlock('territory', 'canyon'); eventList.pop(); }, "Canyoned");
                choice3Print("River", function () { territory.river.amount += 1; unlock('territory', 'river'); eventList.pop(); }, "Rivered");
            }
            if (numNum > 30 && numNum <= 45) {
                choicePrint("Forest");
                choice1Print("Forest", function () { territory.forest.amount += 1; unlock('territory', 'forest'); eventList.pop(); }, "Forested");
                choice2Print("Stream", function () { territory.stream.amount += 1; unlock('territory', 'stream'); eventList.pop(); }, "Streamed");
                choice3Print("Pond", function () { territory.pond.amount += 1; unlock('territory', 'pond'); eventList.pop(); }, "Pond");
            }
            if (numNum > 45 && numNum <= 60) {
                choicePrint("Plain");
                choice1Print("Plain", function () { territory.plain.amount += 1; unlock('territory', 'plain'); eventList.pop(); }, "Plained");
                choice2Print("Swamp", function () { territory.swamp.amount += 1; unlock('territory', 'swamp'); eventList.pop(); }, "Swamped");
                choice3Print("Beach", function () { territory.beach.amount += 1; unlock('territory', 'beach'); eventList.pop(); }, "Beach");
            }
            if (numNum > 60 && numNum <= 75) {
                choicePrint("Plain 2");
                choice1Print("Lake", function () { territory.lake.amount += 1; unlock('territory', 'lake'); eventList.pop(); }, "Laked");
                choice2Print("Hill", function () { territory.hill.amount += 1; unlock('territory', 'hill'); eventList.pop(); }, "Hilled");
                choice3Print("River", function () { territory.river.amount += 1; unlock('territory', 'river'); eventList.pop(); }, "Rivered");
            }
            if (numNum > 75 && numNum <= 90) {
                choicePrint("Water");
                choice1Print("Ocean", function () { territory.ocean.amount += 1; unlock('territory', 'ocean'); eventList.pop(); }, "Oceaned");
                choice2Print("Island", function () { territory.island.amount += 1; unlock('territory', 'island'); eventList.pop(); }, "Islanded");
                choice3Print("Bay", function () { territory.bay.amount += 1; unlock('territory', 'bay'); eventList.pop(); }, "Bayed");
            }
            if (numNum > 90 && numNum <= 95) {
                choicePrint("Special");
                choice1Print("Spring", function () { territory.spring.amount += 1; unlock('territory', 'spring'); eventList.pop(); }, "Springed");
                choice2Print("Grove", function () { territory.grove.amount += 1; unlock('territory', 'grove'); eventList.pop(); }, "Groved");
                choice3Print("Delta", function () { territory.delta.amount += 1; unlock('territory', 'delta'); eventList.pop(); }, "Deltaed");
            }
            if (numNum > 95 && numNum <= 100) {
                choicePrint("Special 2");
                choice1Print("Spring", function () { territory.spring.amount += 1; unlock('territory', 'spring'); eventList.pop(); }, "Sprung");
                choice2Print("Glen", function () { territory.glen.amount += 1; unlock('territory', 'glen'); eventList.pop(); }, "Glened");
                choice3Print("Cliff", function () { territory.cliff.amount += 1; unlock('territory', 'cliff'); eventList.pop(); }, "Cliffed");
            }
            exploration.amount -= exploration.cost;
            exploration.cost += totalTerritory;
        }
        /*Choice template
        if (eventName === 'firstChoice') {   
            choicePrint();
            choice1Print(, function () { ; }, );
            choice2Print(, function () { ; }, );
            choice3Print(, function () { ; }, );
         }
        }*/
            
                    /*
        foods.meat += ((animals.alligator.population * animals.alligator.meatProd) + (animals.bird.population * animals.bird.meatProd) + (animals.panther.population * animals.panther.meatProd) + (animals.wolf.population * animals.wolf.meatProd) + (workers.hunter.population * workers.hunter.meatProd));
        foods.fish += ((animals.bear.population * animals.bear.fishProd) + (workers.fisher.population * workers.fisher.fishProd) + (workers.hunter.population * workers.hunter.fishProd));
        foods.nuts += ((animals.squirrel.population * animals.squirrel.nutsProd) + (workers.gatherer.population * workers.gatherer.nutsProd));
        foods.berries += ((animals.bear.population * animals.bear.berriesProd) + (workers.gatherer.population * workers.gatherer.berriesProd));
        foods.fruit += ((animals.monkey.population * animals.monkey.fruitProd) + (workers.gatherer.population * workers.gatherer.fruitProd));
        foods.vegetables += ((animals.rabbit.population * animals.rabbit.vegetablesProd) + (workers.farmer.population * workers.farmer.vegetablesProd));
        foods.mushrooms += (animals.pig.population * animals.pig.mushroomsProd);
        foods.grains += ((workers.farmer.population * workers.farmer.grainsProd));
        foods.eggs += ((animals.chicken.population * animals.chicken.eggsProd) + (workers.farmer.population * workers.farmer.eggsProd));
        foods.milk += ((animals.cow.population * animals.cow.milkProd) + (workers.farmer.population * workers.farmer.milkProd));
        foods.cheese += 0;
        goods.furs += ((workers.hunter.population * workers.hunter.fursProd));
        goods.leather += 0;
        goods.bones += ((workers.hunter.population * workers.hunter.bonesProd));
        goods.sticks += ((workers.gatherer.population * workers.gatherer.sticksProd) + (workers.woodsman.population * workers.woodsman.sticksProd));
        goods.logs += ((workers.woodsman.population * workers.woodsman.logsProd) + (workers.laborer.population * workers.laborer.logsProd));
        goods.lumber += ((workers.carpenter.population * workers.carpenter.lumberProd));
        goods.rocks += ((workers.gatherer.population * workers.gatherer.rocksProd));
        goods.flint += 0;
        goods.clay += 0;
        goods.stone += ((workers.mason.population * workers.mason.stoneProd));
        goods.ore += 0;
        goods.water += 0;
        goods.oil += 0;
        goods.copper += 0;
        goods.tin += 0;
        goods.bronze += 0;
        goods.iron += 0;
        goods.steel += 0;
        goods.silver += 0;
        goods.gold += 0;
        goods.gems += 0;
        goods.crystals += 0;
        goods.money += 0;
        goods.mana += ((workers.magic.population * workers.magic.manaProd));
        goods.herbs += ((workers.druid.population * workers.druid.herbsProd));
        goods.wool += (animals.sheep.population * animals.sheep.woolProd);
        goods.linen += 0;
        goods.cotton += 0;
        goods.cloth += 0;
        goods.papyrus += 0;
        goods.paper += 0;
        goods.paint += 0;
        goods.ink += 0;
        goods.charcoal += 0;
        goods.coal += 0;
        goods.salt += 0;
        goods.saltpeter += 0;
        goods.gunpowder += 0;
        goods.glass += 0;
        goods.concrete += 0;
        exploration.amount += (workers.hunter.population * workers.hunter.explorationProd) + (workers.gatherer.population * workers.gatherer.explorationProd);*/
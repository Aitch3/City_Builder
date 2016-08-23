/*jslint sub:true, devel:true */
/*global updateAll, updateBuildings, updateTerritory, updateWorkers */
(function (window, $) {
    'use strict';
//Population
    var workers = {
            animal: {
                population: 0,
                title: "Animals",
                meatProd: 0.1,
                fishProd: 0,
                fursProd: 0
            },
            artist: {
                population: 0,
                title: "Artists",
                cultureProd: 0
            },
            carpenter: {
                population: 0,
                title: "Carpenters",
                lumberProd: 0
            },
            cook: {
                population: 0,
                title: "Cooks"
            },
            crafter: {
                population: 0,
                title: "Crafters"
            },
            druid: {
                population: 0,
                title: "Druids",
                herbsProd: 0
            },
            farmer: {
                population: 0,
                title: "Farmers",
                grainsProd: 0.1,
                vegetablesProd: 0.1,
                eggsProd: 0,
                milkProd: 0
            },
            fisher: {
                population: 0,
                title: "Fishermen",
                fishProd: 0.1
            },
            fool: {
                population: 0,
                title: "Fools"
            },
            gatherer: {
                population: 0,
                title: "Gatherers",
                nutsProd: 0.1,
                berriesProd: 0.1,
                rocksProd: 0.05,
                fruitProd: 0.1,
                sticksProd: 0.05,
                explorationProd: 0.01
            },
            ghost: {
                population: 0,
                title: "Ghosts"
            },
            hunter: {
                population: 0,
                title: "Hunters",
                meatProd: 0.25,
                fishProd: 0,
                fursProd: 0.05,
                bonesProd: 0.01,
                explorationProd: 0.01
            },
            laborer: {
                population: 0,
                title: "Laborers",
                rockProd: 0,
                oreProd: 0,
                logsProd: 0
            },
            magic: {
                population: 0,
                title: "Mages",
                manaProd: 0,
                crystalsProd: 0
            },
            mason: {
                population: 0,
                title: "Stonecutters",
                stoneProd: 0
            },
            peon: {
                population: 1,
                title: "You"
            },
            sailor: {
                population: 0,
                title: "Sailors"
            },
            scientist: {
                population: 0,
                title: "Scientists"
            },
            warrior: {
                population: 0,
                title: "Warriors",
                foodProd: 0.5
            },
            weaver: {
                population: 0,
                title: "Weavers",
                woolProd: 0,
                linenProd: 0,
                cottonProd: 0,
                clothProd: 0
            },
            woodsman: {
                population: 0,
                title: "Woodmens",
                sticksProd: 0,
                logsProd: 0
            }
        },
        actions = {
            sacredChant: {
                amount: 0,
                cost: {
                    bones: {
                        amount: 1,
                        title: "Bones"
                    }
                },
                increment: 1,
                state: 0,
                height: 100,
                width: 1,
                reward: "gatherer",
                speed: 0.25
            },
            roastMeat: {
                amount: 0,
                cost: {
                    meat: {
                        amount: 1,
                        title: "Meat"
                    }
                },
                increment: 1,
                state: 0,
                height: 100,
                width: 1,
                reward: "hunter",
                speed: 0.25
            }
        },
//Primitive Buildings
        building = {
            barricade: {
                amount: 0,
                title: "Wooden Walls",
                housing: 0,
                foodStorage: 0,
                cost: {
                    sticks: {
                        amount: 4,
                        title: "Sticks"
                    },
                    rocks: {
                        amount: 2,
                        title: "Rocks"
                    }
                },
                increment: 1.2
            },
            herbGarden: {
                amount: 0,
                title: "Herb Gardens",
                housing: 0,
                foodStorage: 5,
                cost: {
                    sticks: {
                        amount: 4,
                        title: "Sticks"
                    },
                    rocks: {
                        amount: 2,
                        title: "Rocks"
                    }
                },
                increment: 1.2
            },
            hut: {
                amount: 0,
                title: "Huts",
                housing: 2,
                foodStorage: 20,
                cost: {
                    sticks: {
                        amount: 4,
                        title: "Sticks"
                    },
                    rocks: {
                        amount: 2,
                        title: "Rocks"
                    }
                },
                increment: 1.2
            },
            shamanHut: {
                amount: 0,
                title: "Shaman Huts",
                housing: 1,
                foodStorage: 0,
                cost: {
                    sticks: {
                        amount: 4,
                        title: "Sticks"
                    },
                    rocks: {
                        amount: 2,
                        title: "Rocks"
                    }
                },
                increment: 2
            },
            shrine: {
                amount: 0,
                title: "Shrines",
                housing: 0,
                foodStorage: 0,
                cost: {
                    sticks: {
                        amount: 4,
                        title: "Sticks"
                    },
                    rocks: {
                        amount: 2,
                        title: "Rocks"
                    }
                },
                increment: 2
            },
            teepee: {
                amount: 0,
                title: "Teepee",
                housing: 3,
                foodStorage: 20,
                cost: {
                    sticks: {
                        amount: 4,
                        title: "Sticks"
                    },
                    rocks: {
                        amount: 2,
                        title: "Rocks"
                    }
                },
                increment: 1.2
            },
            wigwam: {
                amount: 0,
                title: "Wigwams",
                housing: 6,
                foodStorage: 30,
                cost: {
                    sticks: {
                        amount: 4,
                        title: "Sticks"
                    },
                    rocks: {
                        amount: 2,
                        title: "Rocks"
                    }
                },
                increment: 1.4
            },
    //Buildings        
            alchemistLab: {
                amount: 0,
                title: "Alchemist Labs",
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                increment: 1.2
            },
            apothecary: {
                amount: 0,
                title: "Apothecaries",
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                increment: 1.2
            },
            armory: {
                amount: 0,
                title: "Armories",
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                increment: 1.2
            },
            barracks: {
                amount: 0,
                title: "Barracks",
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                increment: 1.2
            },
            blacksmith: {
                amount: 0,
                title: "Blacksmithies",
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                increment: 1.2
            },
            butcher: {
                amount: 0,
                title: "Butcher Shops",
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                increment: 1.2
            },
            cafe: {
                amount: 0,
                title: "Cafes",
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                increment: 1.2
            },
            church: {
                amount: 0,
                title: "Churches",
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                increment: 1.2
            },
            enchanterWorkshop: {
                amount: 0,
                title: "Enchanter Workshops",
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                increment: 1.2
            },
            farm: {
                amount: 0,
                title: "Farms",
                foodProdBonus: 0,
                foodStorage: 30,
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                increment: 1.2
            },
            gunsmith: {
                amount: 0,
                title: "Gunsmiths",
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                vincrement: 1.2
            },
            livery: {
                amount: 0,
                title: "Liveries",
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                increment: 1.2
            },
            lumbermill: {
                amount: 0,
                title: "Lumbermills",
                woodProdBonus: 0,
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                increment: 1.2
            },
            machinist: {
                amount: 0,
                title: "Machinists",
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                increment: 1.2
            },
            quarry: {
                amount: 0,
                title: "Quarries",
                stoneProdBonus: 0,
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                increment: 1.2
            },
            stable: {
                amount: 0,
                title: "Stables",
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                increment: 1.2
            },
            tailor: {
                amount: 0,
                title: "Tailors",
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                increment: 1.2
            },
            temple: {
                amount: 0,
                title: "Temples",
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                increment: 1.2
            },
            textile: {
                amount: 0,
                title: "Loom Houses",
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                increment: 1.2
            },
            trainingYard: {
                amount: 0,
                title: "Training Yards",
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                increment: 1.2
            },
            wainwright: {
                amount: 0,
                title: "Wainwrights",
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                increment: 1.2
            },
            watchtower: {
                amount: 0,
                title: "Watchtowers",
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                increment: 1.2
            },
            watermill: {
                amount: 0,
                title: "Watermills",
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                increment: 1.2
            },
            windmill: {
                amount: 0,
                title: "Windmills",
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                increment: 1.2
            },
            witchCottage: {
                amount: 0,
                title: "Witch Cottages",
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                increment: 1.2
            },
            wizardTower: {
                amount: 0,
                title: "Wizard Towers",
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                increment: 1.2
            },
            workshop: {
                amount: 0,
                title: "Workshops",
                cost: {
                    logs: {
                        amount: 4,
                        title: "Logs"
                    },
                    glass: {
                        amount: 2,
                        title: "Glass"
                    },
                    stone: {
                        amount: 4,
                        title: "Stone"
                    }
                },
                increment: 1.2
            }
        },
//Territories        
        territory = {
            cave: {
                amount: 0,
                foodStorage: 20,
                housing: 3
            },
            forest: {
                amount: 0
            },
            mountain: {
                amount: 0
            },
            plain: {
                amount: 0
            },
            swamp: {
                amount: 0
            },
            stream: {
                amount: 0
            },
            spring: {
                amount: 0
            },
            beach: {
                amount: 0
            },
            lake: {
                amount: 0
            },
            pond: {
                amount: 0
            },
            ocean: {
                amount: 0
            },
            island: {
                amount: 0
            },
            grove: {
                amount: 0
            },
            glen: {
                amount: 0
            },
            hill: {
                amount: 0
            },
            canyon: {
                amount: 0
            },
            river: {
                amount: 0
            },
            delta: {
                amount: 0
            },
            cliff: {
                amount: 0
            },
            bay: {
                amount: 0
            }
        },
//Food        
        foods = {
            berries: 0,
            cheese: 0,
            eggs: 0,
            fish: 0,
            fruit: 0,
            grains: 0,
            meat: 0,
            milk: 0,
            mushrooms: 0,
            nuts: 1,
            vegetables: 0
        },
    //Primitive Goods
        goods = {
            bones: 0,
            furs: 0,
            leather: 0,
            rocks: 0,
            sticks: 0,
    //Building Materials        
            clay: 0,
            logs: 0,
            lumber: 0,
            stone: 0,
    //Metalworking
            bronze: 0,
            copper: 0,
            iron: 0,
            ore: 0,
            steel: 0,
            tin: 0,
            silver: 0,
    //Wealth        
            gems: 0,
            gold: 0,
            money: 0,

    //Magic        
            crystals: 0,
            mana: 0,
            water: 0,
            oil: 0,
            flint: 0,
            herbs: 0,
            wool: 0,
            linen: 0,
            cotton: 0,
            cloth: 0,
            papyrus: 0,
            paper: 0,
            paint: 0,
            ink: 0,
            charcoal: 0,
            coal: 0,
            salt: 0,
            saltpeter: 0,
            gunpowder: 0,
            glass: 0,
            concrete: 0
        },
        traits = {
            military: {rating: 0},
            diplomacy: {rating: 0},
            artistry: {rating: 0},
            nature: {rating: 0},
            mysticism: {rating: 0},
            culture: {rating: 0},
            religion: {rating: 0},
            knowldge: {rating: 0},
            foolish: {rating: 0},
            good: {rating: 0},
            evil: {rating: 0}
        },
        exploration = {
            amount: 0,
            startAmount: 0,
            cost: 1
        },
        time = {
            min: 0,
            hour: 0,
            day: 0,
            year: 0
        },
        totalTime = {
            min: 0,
            hour: 0,
            day: 0,
            year: 0
        },
        totalPopulation = 0,
        totalBuildings = 0,
        totalTerritory = 0,
        totalResources = {
            meat: 0,
            fish: 0,
            nuts: 0,
            berries: 0,
            fruit: 0,
            vegetables: 0,
            mushrooms: 0,
            grains: 0,
            eggs: 0,
            milk: 0,
            cheese: 0,
            furs: 0,
            leather: 0,
            bones: 0,
            sticks: 0,
            logs: 0,
            lumber: 0,
            rocks: 0,
            flint: 0,
            clay: 0,
            stone: 0,
            ore: 0,
            water: 0,
            oil: 0,
            copper: 0,
            tin: 0,
            bronze: 0,
            iron: 0,
            steel: 0,
            silver: 0,
            gold: 0,
            gems: 0,
            crystals: 0,
            money: 0,
            mana: 0,
            herbs: 0,
            wool: 0,
            linen: 0,
            cotton: 0,
            cloth: 0,
            papyrus: 0,
            paper: 0,
            paint: 0,
            ink: 0,
            charcoal: 0,
            coal: 0,
            salt: 0,
            saltpeter: 0,
            gunpowder: 0,
            glass: 0,
            concrete: 0
        },
        totalTraits = {
            military: 0,
            diplomacy: 0,
            artistry: 0,
            nature: 0,
            mysticism: 0,
            culture: 0,
            religion: 0,
            knowldge: 0,
            foolish: 0,
            good: 0,
            evil: 0
        },
        totalDead = 0,
        totalTicks = 0,
        dead = 0,
        unlocked = {
            workers: ['peon'],
            actions: [],
            territory: [],
            building: []
        },
        eventName = "",
        eventCounter = 0,
        eventDelay = 0,
        eventList = [],
        gamePause = 0,
        starveCount = 0,
        populationTotal = 0,
        populationLimit = 0,
        foodTotal = 0,
        foodStorage = 0,
        start = {
            workers: {
                animal: {
                    population: 0,
                    title: "Animals",
                    meatProd: 0.1,
                    fishProd: 0,
                    fursProd: 0
                },
                artist: {
                    population: 0,
                    title: "Artists",
                    cultureProd: 0
                },
                carpenter: {
                    population: 0,
                    title: "Carpenters",
                    lumberProd: 0
                },
                cook: {
                    population: 0,
                    title: "Cooks"
                },
                crafter: {
                    population: 0,
                    title: "Crafters"
                },
                druid: {
                    population: 0,
                    title: "Druids",
                    herbsProd: 0
                },
                farmer: {
                    population: 0,
                    title: "Farmers",
                    grainsProd: 0.1,
                    vegetablesProd: 0.1,
                    eggsProd: 0,
                    milkProd: 0
                },
                fisher: {
                    population: 0,
                    title: "Fishermen",
                    fishProd: 0.1
                },
                fool: {
                    population: 0,
                    title: "Fools"
                },
                gatherer: {
                    population: 0,
                    title: "Gatherers",
                    nutsProd: 0.1,
                    berriesProd: 0.1,
                    rocksProd: 0.05,
                    fruitProd: 0.1,
                    sticksProd: 0.05,
                    explorationProd: 0.01
                },
                ghost: {
                    population: 0,
                    title: "Ghosts"
                },
                hunter: {
                    population: 0,
                    title: "Hunters",
                    meatProd: 0.25,
                    fishProd: 0,
                    fursProd: 0.05,
                    bonesProd: 0.01,
                    explorationProd: 0.01
                },
                laborer: {
                    population: 0,
                    title: "Laborers",
                    rockProd: 0,
                    oreProd: 0,
                    logsProd: 0
                },
                magic: {
                    population: 0,
                    title: "Mages",
                    manaProd: 0,
                    crystalsProd: 0
                },
                mason: {
                    population: 0,
                    title: "Stonecutters",
                    stoneProd: 0
                },
                peon: {
                    population: 1,
                    title: "You"
                },
                sailor: {
                    population: 0,
                    title: "Sailors"
                },
                scientist: {
                    population: 0,
                    title: "Scientists"
                },
                warrior: {
                    population: 0,
                    title: "Warriors",
                    foodProd: 0.5
                },
                weaver: {
                    population: 0,
                    title: "Weavers",
                    woolProd: 0,
                    linenProd: 0,
                    cottonProd: 0,
                    clothProd: 0
                },
                woodsman: {
                    population: 0,
                    title: "Woodmens",
                    sticksProd: 0,
                    logsProd: 0
                }
            },
    //Primitive Buildings
            building: {
                barricade: {
                    amount: 0,
                    title: "Wooden Walls",
                    housing: 0,
                    foodStorage: 0,
                    cost: {
                        sticks: {
                            amount: 4,
                            title: "Sticks"
                        },
                        rocks: {
                            amount: 2,
                            title: "Rocks"
                        }
                    },
                    increment: 1.2
                },
                herbGarden: {
                    amount: 0,
                    title: "Herb Gardens",
                    housing: 0,
                    foodStorage: 5,
                    cost: {
                        sticks: {
                            amount: 4,
                            title: "Sticks"
                        },
                        rocks: {
                            amount: 2,
                            title: "Rocks"
                        }
                    },
                    increment: 1.2
                },
                hut: {
                    amount: 0,
                    title: "Huts",
                    housing: 2,
                    foodStorage: 20,
                    cost: {
                        sticks: {
                            amount: 4,
                            title: "Sticks"
                        },
                        rocks: {
                            amount: 2,
                            title: "Rocks"
                        }
                    },
                    increment: 1.2
                },
                shamanHut: {
                    amount: 0,
                    title: "Shaman Huts",
                    housing: 1,
                    foodStorage: 0,
                    cost: {
                        sticks: {
                            amount: 4,
                            title: "Sticks"
                        },
                        rocks: {
                            amount: 2,
                            title: "Rocks"
                        }
                    },
                    increment: 2
                },
                shrine: {
                    amount: 0,
                    title: "Shrines",
                    housing: 0,
                    foodStorage: 0,
                    cost: {
                        sticks: {
                            amount: 4,
                            title: "Sticks"
                        },
                        rocks: {
                            amount: 2,
                            title: "Rocks"
                        }
                    },
                    increment: 2
                },
                teepee: {
                    amount: 0,
                    title: "Teepee",
                    housing: 3,
                    foodStorage: 20,
                    cost: {
                        sticks: {
                            amount: 4,
                            title: "Sticks"
                        },
                        rocks: {
                            amount: 2,
                            title: "Rocks"
                        }
                    },
                    increment: 1.2
                },
                wigwam: {
                    amount: 0,
                    title: "Wigwams",
                    housing: 6,
                    foodStorage: 30,
                    cost: {
                        sticks: {
                            amount: 4,
                            title: "Sticks"
                        },
                        rocks: {
                            amount: 2,
                            title: "Rocks"
                        }
                    },
                    increment: 1.4
                },
        //Buildings        
                alchemistLab: {
                    amount: 0,
                    title: "Alchemist Labs",
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    increment: 1.2
                },
                apothecary: {
                    amount: 0,
                    title: "Apothecaries",
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    increment: 1.2
                },
                armory: {
                    amount: 0,
                    title: "Armories",
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    increment: 1.2
                },
                barracks: {
                    amount: 0,
                    title: "Barracks",
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    increment: 1.2
                },
                blacksmith: {
                    amount: 0,
                    title: "Blacksmithies",
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    increment: 1.2
                },
                butcher: {
                    amount: 0,
                    title: "Butcher Shops",
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    increment: 1.2
                },
                cafe: {
                    amount: 0,
                    title: "Cafes",
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    increment: 1.2
                },
                church: {
                    amount: 0,
                    title: "Churches",
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    increment: 1.2
                },
                enchanterWorkshop: {
                    amount: 0,
                    title: "Enchanter Workshops",
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    increment: 1.2
                },
                farm: {
                    amount: 0,
                    title: "Farms",
                    foodProdBonus: 0,
                    foodStorage: 30,
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    increment: 1.2
                },
                gunsmith: {
                    amount: 0,
                    title: "Gunsmiths",
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    vincrement: 1.2
                },
                livery: {
                    amount: 0,
                    title: "Liveries",
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    increment: 1.2
                },
                lumbermill: {
                    amount: 0,
                    title: "Lumbermills",
                    woodProdBonus: 0,
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    increment: 1.2
                },
                machinist: {
                    amount: 0,
                    title: "Machinists",
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    increment: 1.2
                },
                quarry: {
                    amount: 0,
                    title: "Quarries",
                    stoneProdBonus: 0,
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    increment: 1.2
                },
                stable: {
                    amount: 0,
                    title: "Stables",
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    increment: 1.2
                },
                tailor: {
                    amount: 0,
                    title: "Tailors",
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    increment: 1.2
                },
                temple: {
                    amount: 0,
                    title: "Temples",
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    increment: 1.2
                },
                textile: {
                    amount: 0,
                    title: "Loom Houses",
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    increment: 1.2
                },
                trainingYard: {
                    amount: 0,
                    title: "Training Yards",
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    increment: 1.2
                },
                wainwright: {
                    amount: 0,
                    title: "Wainwrights",
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    increment: 1.2
                },
                watchtower: {
                    amount: 0,
                    title: "Watchtowers",
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    increment: 1.2
                },
                watermill: {
                    amount: 0,
                    title: "Watermills",
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    increment: 1.2
                },
                windmill: {
                    amount: 0,
                    title: "Windmills",
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    increment: 1.2
                },
                witchCottage: {
                    amount: 0,
                    title: "Witch Cottages",
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    increment: 1.2
                },
                wizardTower: {
                    amount: 0,
                    title: "Wizard Towers",
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    increment: 1.2
                },
                workshop: {
                    amount: 0,
                    title: "Workshops",
                    cost: {
                        logs: {
                            amount: 4,
                            title: "Logs"
                        },
                        glass: {
                            amount: 2,
                            title: "Glass"
                        },
                        stone: {
                            amount: 4,
                            title: "Stone"
                        }
                    },
                    increment: 1.2
                }
            },
    //Territories        
            territory: {
                cave: {
                    amount: 0,
                    foodStorage: 20,
                    housing: 3
                },
                forest: {
                    amount: 0
                },
                mountain: {
                    amount: 0
                },
                plain: {
                    amount: 0
                },
                swamp: {
                    amount: 0
                },
                stream: {
                    amount: 0
                },
                spring: {
                    amount: 0
                },
                beach: {
                    amount: 0
                },
                lake: {
                    amount: 0
                },
                pond: {
                    amount: 0
                },
                ocean: {
                    amount: 0
                },
                island: {
                    amount: 0
                },
                grove: {
                    amount: 0
                },
                glen: {
                    amount: 0
                },
                hill: {
                    amount: 0
                },
                canyon: {
                    amount: 0
                },
                river: {
                    amount: 0
                },
                delta: {
                    amount: 0
                },
                cliff: {
                    amount: 0
                },
                bay: {
                    amount: 0
                }
            },
    //Food        
            foods: {
                berries: 0,
                cheese: 0,
                eggs: 0,
                fish: 0,
                fruit: 0,
                grains: 0,
                meat: 0,
                milk: 0,
                mushrooms: 0,
                nuts: 1,
                vegetables: 0
            },
        //Primitive Goods
            goods: {
                bones: 0,
                furs: 0,
                leather: 0,
                rocks: 0,
                sticks: 0,
        //Building Materials        
                clay: 0,
                logs: 0,
                lumber: 0,
                stone: 0,
        //Metalworking
                bronze: 0,
                copper: 0,
                iron: 0,
                ore: 0,
                steel: 0,
                tin: 0,
                silver: 0,
        //Wealth        
                gems: 0,
                gold: 0,
                money: 0,

        //Magic        
                crystals: 0,
                mana: 0,
                water: 0,
                oil: 0,
                flint: 0,
                herbs: 0,
                wool: 0,
                linen: 0,
                cotton: 0,
                cloth: 0,
                papyrus: 0,
                paper: 0,
                paint: 0,
                ink: 0,
                charcoal: 0,
                coal: 0,
                salt: 0,
                saltpeter: 0,
                gunpowder: 0,
                glass: 0,
                concrete: 0
            },
            traits: {
                military: {rating: 0},
                diplomacy: {rating: 0},
                artistry: {rating: 0},
                nature: {rating: 0},
                mysticism: {rating: 0},
                culture: {rating: 0},
                religion: {rating: 0},
                knowldge: {rating: 0},
                foolish: {rating: 0},
                good: {rating: 0},
                evil: {rating: 0}
            },
            time: {
                min: 0,
                hour: 0,
                day: 0,
                year: 0
            }
        };

        
    function prettify(input) {
        var output = Math.round(input * 1000000) / 1000000;
        return output.toFixed(0);
    }
    
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function assign(job, number) {
        //var parsedJob = parseJob(job);
        workers.peon.population -= number;
        workers.job.population += number;
    }
    
    function isItUnlocked(classy, target) {
        var unlockCheck = unlocked[classy].indexOf(target);
        return unlockCheck;
    }
    
    function unlock(classy, target) {
        if (isItUnlocked(classy, target) < 0) {
            unlocked[classy].push(target);
            //console.log(target + " unlocked");
        }
    }
    
    function lock(classy, target) {
        var unlockCheck = unlocked[classy].indexOf(target),
            num;
        while (unlockCheck >= 0) {
            num = unlocked[classy].indexOf(target);
            unlocked[classy].splice(num, 1);
            unlockCheck = unlocked[classy].indexOf(target);
            //console.log(target + " locked");
        }
        document.getElementById([target]).style.display = "none";
    }
    
    function lockAll() {
        var lockCheckee;
        for (lockCheckee in workers) {
            if (workers.hasOwnProperty(lockCheckee)) {
                lock('workers', lockCheckee);
            }
        }
        updateBuildings();
        for (lockCheckee in building) {
            if (building.hasOwnProperty(lockCheckee)) {
                lock('building', lockCheckee);
            }
        }
        updateTerritory();
        for (lockCheckee in territory) {
            if (territory.hasOwnProperty(lockCheckee)) {
                lock('territory', lockCheckee);
            }
        }
        updateWorkers();
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
        if (traits.foolish.rating >= 5) { start.workers.peon.name = "Hamster"; }
        dead = 0;
        lockAll();
        unlocked = {
            workers: ['peon'],
            actions: [],
            territory: [],
            building: []
        };
        eventName = "";
        eventCounter = 0;
        eventDelay = 0;
        eventList = [];
        gamePause = 0;
        starveCount = 0;
        populationTotal = 0;
        populationLimit = 0;
        foodTotal = 0;
        foodStorage = 0;
        workers = $.extend(true, {}, start.workers);
        territory = $.extend(true, {}, start.territory);
        building = $.extend(true, {}, start.building);
        foods = $.extend(true, {}, start.foods);
        goods = $.extend(true, {}, start.goods);
        time = $.extend(true, {}, start.time);
        /*unlocked = {
            workers: ['peon'],
            actions: [],
            territory: [],
            building: []
        };*/
    }
    
    function die() {
        choiceReady();
        document.getElementById('choiceText').innerHTML = "You have died. Would you like to try again?";
        document.getElementById('optionText1').innerHTML = "Yes";
        document.getElementById('optionText2').innerHTML = "No";
        document.getElementById('optionButton1').onclick = function () { choiceDone(); restart(); };
        document.getElementById('optionButton2').onclick = function () { document.getElementById('choiceText').innerHTML = "You lose. Have a nice day."; };
    }
    
    function starve(number) {
        if (number === 1) {
            die();
        }
    }
    
    function goodsSpend(classy, target) {
        var materialToken;
        for (materialToken in classy[target].cost) {
            if (classy[target].cost.hasOwnProperty(materialToken)) {
                if (goods[materialToken] !== undefined) {
                    goods[materialToken] -= classy[target].cost[materialToken].amount;
                    classy[target].cost[materialToken].amount = Math.pow(classy[target].cost[materialToken].amount, classy[target].increment);
                    classy[target].cost[materialToken].amount = classy[target].cost[materialToken].amount.toFixed(3);
                } else {
                    foods[materialToken] -= classy[target].cost[materialToken].amount;
                    classy[target].cost[materialToken].amount = Math.pow(classy[target].cost[materialToken].amount, classy[target].increment);
                    classy[target].cost[materialToken].amount = classy[target].cost[materialToken].amount.toFixed(3);
                }
            }
        }
    }
    
    function logNormal(text) {
        var node = document.createElement("DIV"),
            textnode = document.createTextNode(text);
        node.appendChild(textnode);
        document.getElementById('gameLog').appendChild(node);
        document.getElementById('gameLog').scrollTop = document.getElementById('gameLog').scrollHeight;
    }
    
    function logSmall(text) {
        var node = document.createElement("LI"),
            textnode = document.createTextNode(text);
        node.appendChild(textnode);
        node.className = "sub";
        document.getElementById('gameLog').appendChild(node);
        document.getElementById('gameLog').scrollTop = document.getElementById('gameLog').scrollHeight;
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
    
    function makeWorkersVisible(target) {
        document.getElementById(target).style.display = "block";
        document.getElementById([target + "Title"]).innerHTML = workers[target].title;
        document.getElementById([target + "Amount"]).innerHTML = workers[target].population;
    }
           
    function updateWorkers() {
        unlocked.workers.forEach(makeWorkersVisible);
        //document.getElementById([target + "Hire"]).innerHTML = workers[target].title;
        //document.getElementById([target + "Hire"]).onclick = function () { move([target]); };
        /*document.getElementById("farmerPlus").onclick = function () { assign('farmer', 1); document.getElementById('farmerPlus').disabled = true; };
        document.getElementById("farmerMinus").onclick = function () { assign('farmer', -1); document.getElementById('farmerMinus').disabled = true; };
        document.getElementById("woodsmanPlus").onclick = function () { assign('woodsman', 1); document.getElementById('woodsmanPlus').disabled = true; };
        document.getElementById("woodsmanMinus").onclick = function () { assign('woodsman', -1); document.getElementById('woodsmanMinus').disabled = true; };
        document.getElementById("masonPlus").onclick = function () { assign('mason', 1); document.getElementById('masonPlus').disabled = true; };
        document.getElementById("masonMinus").onclick = function () { assign('mason', -1);  document.getElementById('masonMinus').disabled = true; };*/
    }
    
    function showCost(classy, target) {
        var costToken,
            costString = "";
        for (costToken in classy[target].cost) {
            if (classy[target].cost.hasOwnProperty(costToken)) {
                costString += (classy[target].cost[costToken].title + ": " + prettify(classy[target].cost[costToken].amount) + " ");
            }
        }
        return costString;
    }
            
    function countDown() {
        var actionToken,
            elem;
        for (actionToken in actions) {
            if (actions.hasOwnProperty(actionToken)) {
                if (actions[actionToken].state === 1 && actions[actionToken].width < 100) {
                    elem = document.getElementById(actionToken + "Progress");
                    actions[actionToken].width += actions[actionToken].speed;
                    elem.style.width = actions[actionToken].width + '%';
                }
                if (actions[actionToken].state === 1 && actions[actionToken].width >= 100) {
                    elem = document.getElementById(actionToken + "Progress");
                    actions[actionToken].width = 100;
                    elem.style.width = actions[actionToken].width + '%';
                    actions[actionToken].state = 2;
                }
                if (actions[actionToken].state === 3 && actions[actionToken].height > 0) {
                    elem = document.getElementById(actionToken + "Progress");
                    actions[actionToken].height -= actions[actionToken].speed;
                    elem.style.height = actions[actionToken].height + '%';
                }
                if (actions[actionToken].state === 3 && actions[actionToken].height <= 0) {
                    elem = document.getElementById(actionToken + "Progress");
                    actions[actionToken].width = 1;
                    actions[actionToken].height = 100;
                    elem.style.height = actions[actionToken].height + '%';
                    elem.style.width = actions[actionToken].width + '%';
                    actions[actionToken].state = 0;
                }
            }
        }
    }
        
        
     /*   var elem = document.getElementById(target + "Progress"),
            width = 1;
        if (gamePause === 0) {
            if (width >= 100) {
                logNormal("A gatherer arrives.");
                unlock('workers', 'gatherer');
                workers.gatherer.population += 1;
            } else {
                width += 3;
                if (width > 100) { width = 100; }
                elem.style.width = width + '%';
            }
        }
        //}
    }*/
    
    function actionDo(target) {
        if (actions[target].state === 0) {
            goodsSpend(actions, target);
            document.getElementById([target + "Do"]).disabled = true;
            actions[target].state = 1;
        }
        if (actions[target].state === 2) {
            var reward = actions[target].reward;
            logNormal("A " + reward + " arrives.");
            unlock('workers', reward);
            workers[reward].population += 1;
            actions[target].state = 3;
        }
    }
    
    function makeActionVisible(target) {
        document.getElementById(target).style.display = "block";
        //document.getElementById([target + "Amount"]).innerHTML = building[target].amount;
        document.getElementById([target + "Cost"]).innerHTML = showCost(actions, [target]);
        document.getElementById([target + "Do"]).onclick = function () { actionDo([target]); };
    }
    
    function updateActions() {
        unlocked.actions.forEach(makeActionVisible);
        if (unlocked.actions.length > 0) {
            document.getElementById(["actionsBox"]).style.display = "block";
            document.getElementById(["actionsBoxTitle"]).innerHTML = "Campfire";
        }
        /*document.getElementById(["sacredChantDo"]).disabled = false;
        document.getElementById(["sacredChant"]).style.display = "block";
        document.getElementById(["sacredChantCost"]).innerHTML = showCost(actions, "sacredChant");
        document.getElementById(["sacredChantDo"]).onclick = function () { countDown("sacredChant"); };
        document.getElementById(["roastMeatDo"]).disabled = false;
        document.getElementById(["roastMeatCost"]).innerHTML = showCost(actions, "roastMeat");
        document.getElementById(["roastMeat"]).style.display = "block";
        document.getElementById(["roastMeatDo"]).onclick = function () { countDown("roastMeat"); };*/
        
    }
    
    function updateResources() {
        var material;
        for (material in goods) {
            if (goods.hasOwnProperty(material)) {
                if (goods[material] >= 0.5) {
                    document.getElementById([material]).style.display = "block";
                    document.getElementById([material + 'Amount']).innerHTML = prettify(goods[material]);
                } else { document.getElementById([material]).style.display = "none"; }
            }
        }
        for (material in foods) {
            if (foods.hasOwnProperty(material)) {
                if (foods[material] >= 0.5) {
                    document.getElementById([material]).style.display = "block";
                    document.getElementById([material + 'Amount']).innerHTML = prettify(foods[material]);
                } else { document.getElementById([material]).style.display = "none"; }
            }
        }
        
    }
    
    function makeTerritoryVisible(land) {
        document.getElementById(land).style.display = "block";
        document.getElementById([land + "Amount"]).innerHTML = territory[land].amount;
    }
    
    function updateTerritory() {
        var landCounter;
        for (landCounter in territory) {
            if (territory.hasOwnProperty(landCounter)) {
                totalTerritory += territory[landCounter].amount;
            }
        }
        if (unlocked.territory.length > 0) { document.getElementById('territoryBox').style.display = "block"; }
        unlocked.territory.forEach(makeTerritoryVisible);
    }

    function build(target, number) {
        building[target].amount += number;
        goodsSpend(building, target);
        document.getElementById([target + "Build"]).disabled = true;
    }
    
    function makeBuildingVisible(target) {
        document.getElementById(target).style.display = "block";
        document.getElementById([target + "Amount"]).innerHTML = building[target].amount;
        document.getElementById([target + "Cost"]).innerHTML = showCost(building, [target]);
        document.getElementById([target + "Build"]).onclick = function () { build([target], 1); };
    }
    
    function updateBuildings() {
        if (unlocked.building.length > 0) { document.getElementById('buildingBox').style.display = "block"; }
        unlocked.building.forEach(makeBuildingVisible);
    }
    
    function actionButtonEnable(target) {
        var costToken,
            buttonCounter = 0;
        for (costToken in actions[target].cost) {
            if (actions[target].cost.hasOwnProperty(costToken)) {
                if (goods[costToken] !== undefined) {
                    if (actions[target].cost[costToken].amount > goods[costToken]) { buttonCounter += 1; }
                } else {
                    if (actions[target].cost[costToken].amount > foods[costToken]) { buttonCounter += 1; }
                }
            }
        }
        if ((buttonCounter === 0 && actions[target].state === 0) || actions[target].state === 2) {
            document.getElementById([target + 'Do']).disabled = false;
        } else {
            document.getElementById([target + 'Do']).disabled = true;
        }
    }
    
    function buildButtonEnable(target) {
        var costToken,
            buttonCounter = 0;
        for (costToken in building[target].cost) {
            if (building[target].cost.hasOwnProperty(costToken)) {
                if (goods[costToken] !== undefined) {
                    if (building[target].cost[costToken].amount > goods[costToken]) { buttonCounter += 1; }
                } else {
                    if (building[target].cost[costToken].amount > foods[costToken]) { buttonCounter += 1; }
                }
            }
        }
        if (buttonCounter === 0) {
            document.getElementById([target + 'Build']).disabled = false;
        } else {
            document.getElementById([target + 'Build']).disabled = true;
        }
    }

    function updateButtons() {
        //Workers
        //Actions
        unlocked.actions.forEach(actionButtonEnable);
        //Buildings
        unlocked.building.forEach(buildButtonEnable);
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
        updateActions();
        updateTerritory();
        updateBuildings();
        updateResources();
        updateButtons();
        updateTime();
        updateTotals();
    }

    function produce() {
        foods.meat += ((workers.animal.population * workers.animal.meatProd) + (workers.hunter.population * workers.hunter.meatProd));
        foods.fish += ((workers.animal.population * workers.animal.fishProd) + (workers.fisher.population * workers.fisher.fishProd) + (workers.hunter.population * workers.hunter.fishProd));
        foods.nuts += ((workers.gatherer.population * workers.gatherer.nutsProd));
        foods.berries += ((workers.gatherer.population * workers.gatherer.berriesProd));
        foods.fruit += ((workers.gatherer.population * workers.gatherer.fruitProd));
        foods.vegetables += ((workers.farmer.population * workers.farmer.vegetablesProd));
        foods.mushrooms += 0;
        foods.grains += ((workers.farmer.population * workers.farmer.grainsProd));
        foods.eggs += ((workers.farmer.population * workers.farmer.eggsProd));
        foods.milk += ((workers.farmer.population * workers.farmer.milkProd));
        foods.cheese += 0;
        goods.furs += ((workers.hunter.population * workers.hunter.fursProd) + (workers.animal.population * workers.animal.fursProd));
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
        goods.wool += 0;
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
        exploration.amount += (workers.hunter.population * workers.hunter.explorationProd) + (workers.gatherer.population * workers.gatherer.explorationProd);
    }
    
    function consume() {
        var foodCounter,
            workerCounter;
        foodTotal = 0;
        populationTotal = 0;
        populationLimit = (building.hut.amount * building.hut.housing) + (territory.cave.amount * territory.cave.housing) + 1;
        foodStorage = (territory.cave.amount * territory.cave.foodStorage) + (building.hut.amount * building.hut.foodStorage) + (building.teepee.amount * building.teepee.foodStorage) + (building.farm.amount * building.farm.foodStorage);
        for (foodCounter in foods) {
            if (foods.hasOwnProperty(foodCounter)) {
                foodTotal += foods[foodCounter];
            }
        }
        for (workerCounter in workers) {
            if (workers.hasOwnProperty(workerCounter)) {
                populationTotal += workers[workerCounter].population;
            }
        }
        if (foodTotal > 0) {
            for (foodCounter in foods) {
                if (foods.hasOwnProperty(foodCounter)) {
                    foods[foodCounter] -= (populationTotal * (foods[foodCounter] / foodTotal) * 0.2);
                }
            }
        }
        if (foodTotal > foodStorage) {
            for (foodCounter in foods) {
                if (foods.hasOwnProperty(foodCounter)) {
                    foods[foodCounter] -= ((foodTotal - foodStorage) * (foods[foodCounter] / foodTotal) * 0.1);
                }
            }
        }
        if (foodTotal <= 0 && wasItDone('firstChoice') < 0) { document.getElementById('choiceText').innerHTML = "You are starving to death"; }
        if (foodTotal <= 0) {
            starveCount += 1;
        }
        for (foodCounter in foods) {
            if (foods.hasOwnProperty(foodCounter)) {
                if (foods[foodCounter] < 0) { foods[foodCounter] = 0; }
            }
        }
        if (starveCount === 7) { starve(populationTotal); }
    }
    
    function eventRun() {
        choiceReady();
        if (eventName === 'firstChoice') {
            choicePrint("You have no food and you are very hungry. What would you like to do?");
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
        }
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
    }
    
    function eventCheck() {
        if (traits.foolish.rating === 5  && wasItDone('freeFool') < 0) {
            eventName = 'freeFool';
            eventList.push(eventName);
            eventCounter += 1;
        } else if (foodTotal <= 0.5 && wasItDone('firstChoice') < 0) {
            eventName = 'firstChoice';
            eventList.push(eventName);
            eventCounter += 1;
        } else if (time.min >= 25 && wasItDone('bigHunt') < 0) {
            eventName = 'bigHunt';
            eventList.push(eventName);
            eventCounter += 1;
        } else if (foodTotal >= 10 && wasItDone('specialFind') < 0) {
            eventName = 'specialFind';
            eventList.push(eventName);
            eventCounter += 1;
        } else if (populationTotal > populationLimit && wasItDone('needHome') < 0) {
            eventName = 'needHome';
            eventList.push(eventName);
            eventCounter += 1;
        } else if (traits.nature.rating >= 2 && wasItDone('wildPath') < 0) {
            eventName = 'wildPath';
            eventList.push(eventName);
            eventCounter += 1;
        } else if (exploration.amount >= exploration.cost) {
            eventName = 'findTerritory';
            eventList.push(eventName);
            eventCounter += 1;
        }
    }
    
    function timeGoesOn() {
        var seconds = time.min % 60;
        if (seconds === 0) {
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
    }
    
    window.setInterval(function () {
        if (gamePause === 0) {
            produce();
            consume();
            if (eventName === "" && eventDelay === 0) { eventCheck(); }
            if (eventName !== "") { eventRun(); }
            updateAll();
            time.min += 15;
            totalTicks += 1;
            timeGoesOn();
        }
    }, 250);
    
    window.setInterval(function () {
        if (gamePause === 0) {
            countDown();
        }
    }, 62.5);
            
}(window, window.$));
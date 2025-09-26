const businessNames = {
    Garments: [
        "StyleCraft", "TrendWeave", "FashionForge", "ChicThreads", "VogueVault",
        "StyleSphere", "TrendTrove", "FabricFlow", "ChicCraft", "StyleStudio",
        "TrendTech", "FashionFlex", "StyleSync", "ChicCore", "VogueVibe"
    ],
    Hardware: [
        "ToolTech", "BuildCraft", "HardwareHub", "FixItPro", "ToolForge",
        "BuildBridge", "HardCore Tools", "FixFlow", "ToolTrend", "BuildBoost",
        "HardwareHive", "ToolTalk", "BuildBuzz", "FixFlex", "HardwarePro"
    ],
    Food: [
        "TasteCraft", "FlavorForge", "FoodFlow", "CulinaryCore", "TasteTrail",
        "FlavorFlex", "FoodFusion", "CulinaryCloud", "TasteTrend", "FlavorFlow",
        "FoodForge", "CulinaryCraft", "TasteHub", "FlavorVibe", "FoodFlex"
    ],
    SaaS: [
        "CloudCraft", "DataFlow", "TechTrend", "SoftSphere", "CloudCore",
        "DataDrive", "TechTalk", "SoftSync", "CloudBoost", "DataDash",
        "TechTrove", "SoftStudio", "CloudVibe", "DataForge", "TechFlex"
    ],
    Agriculture: [
        "GreenGrow", "FarmFlow", "CropCraft", "HarvestHub", "GreenCore",
        "FarmForge", "CropCloud", "HarvestHive", "GreenBoost", "FarmFlex",
        "CropCraft Pro", "HarvestFlow", "GreenTech", "FarmVibe", "CropCore"
    ]
};

const garments = document.getElementById('first');
const hardware = document.getElementById('second');
const food = document.getElementById('third');
const saas = document.getElementById('fourth');
const agriculture = document.getElementById('fifth');
const busname = document.getElementById('result')

function randomChoice(){
    return parseInt(Math.random()*17)
}

garments.addEventListener('click',function(){
    let i = randomChoice()
    let suggest = businessNames.Garments[i]
    busname.textContent = suggest;
})

hardware.addEventListener('click',function(){
    let i = randomChoice()
    let suggest = businessNames.Hardware[i]
    busname.textContent = suggest;
})

food.addEventListener('click',function(){
    let i = randomChoice()
    let suggest = businessNames.Food[i]
    busname.textContent = suggest;
})

saas.addEventListener('click',function(){
    let i = randomChoice()
    let suggest = businessNames.SaaS[i]
    busname.textContent = suggest;
})

agriculture.addEventListener('click',function(){
    let i = randomChoice()
    let suggest = businessNames.Agriculture[i]
    busname.textContent = suggest;
})
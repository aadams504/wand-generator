const woodOptions = [
    'acacia',
    'alder',
    'apple',
    'ash',
    'aspen',
    'beech',
    'blackthorn',
    'black walnut',
    'cedar',
    'cherry',
    'chestnut',
    'cypress',
    'dogwood',
    'ebony',
    'elder',
    'elm',
    'English oak',
    'fir',
    'hawthorn',
    'hazel',
    'holly',
    'hornbeam',
    'larch',
    'laurel',
    'maple',
    'pear',
    'pine',
    'poplar',
    'red oak',
    'redwood',
    'rowan',
    'silver lime',
    'spruce',
    'sycamore',
    'vine',
    'walnut',
    'willow',
    'yew'
];

const coreOptions = [
    'unicorn hair',
    'drangon heartstring',
    'phoenix feather'
];

const flexibilityOptions = [
    'very flexible',
    'quite flexible',
    'surprisingly swishy',
    'swishy',
    'quite bendy',
    'fairly bendy',
    'whippy',
    'pliant',
    'supple',
    'reasonably supple',
    'slightly springy',
    'slightly yielding',
    'solid',
    'stiff',
    'hard',
    'rigid',
    'unbending',
    'unyielding',
    'brittle'
]
;
function genRand(min=9, max=14, decimalPlaces=1) {  
    let length = 0;
    var rand = Math.random() < 0.5 ? ((1-Math.random()) * (max-min) + min) : (Math.random() * (max-min) + min);
    var power = Math.pow(10, decimalPlaces);
    length = Math.floor(rand*power) / power;
    return length;
}

function genWand()  {
    var randomWoodType = Math.floor(Math.random() * woodOptions.length + 1);
    var randomCoreType = Math.floor(Math.random() * coreOptions.length + 1);
    var randomFlexibility = Math.floor(Math.random() * flexibilityOptions.length +1);
    var woodType = woodOptions[randomWoodType];
    var coreType = coreOptions[randomCoreType];
    var wandLength = genRand();
    var flexibility = flexibilityOptions[randomFlexibility];
    console.log('Your wand: ');
    console.log(`${woodType} wood with a ${coreType} core, ${wandLength}" and ${flexibility} flexibility`);
};

genWand();

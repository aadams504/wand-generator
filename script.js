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

const genRandLength = (min=9, max=14, decimalPlaces=1) => {
    let length = 0;
    const rand = Math.random() < 0.5 ? ((1-Math.random()) * (max-min) + min) : (Math.random() * (max-min) + min);
    const power = Math.pow(10, decimalPlaces);
    length = Math.floor(rand*power) / power;
    return length
}


const genWoodType = () => {
  const randomWoodType = Math.floor(Math.random() * woodOptions.length + 1);
  const woodType = woodOptions[randomWoodType];
  return woodType
}

const genCoreType = () => {
  const randomCoreType = Math.floor(Math.random() * coreOptions.length + 1);
  const coreType = coreOptions[randomCoreType];
  return coreType
}

const genFlexibility = () => {
  const randomFlexibility = Math.floor(Math.random() * flexibilityOptions.length +1);
  const flexibility = flexibilityOptions[randomFlexibility];
  return flexibility
}

const genResults = () => {
  const wandLength = genRandLength()
  const woodType = genWoodType()
  const coreType = genCoreType()
  const flexibility = genFlexibility()
  const wandGenResults = `Your wand: ${woodType} wood with a ${coreType} core, ${wandLength}" and ${flexibility} flexibility`
  console.log(wandGenResults)
}

genResults()

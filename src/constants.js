// export let ColumnsCount = 2
// export let RowsCount = 1
// export const totalCards = ColumnsCount * RowsCount;

const ALL_IMAGES = [
  require('../assets/anna-1.png'),
  require('../assets/baby-1.png'),
  require('../assets/babybro-1.png'),
  require('../assets/batman-1.png'),
  require('../assets/bike-1.png'),
  require('../assets/boris-1.png'),
  require('../assets/brear-1.png'),
  require('../assets/car-1.png'),
  require('../assets/chick-1.png'),
  require('../assets/chick-2.png'),
  require('../assets/christmas-1.png'),
  require('../assets/christoff-1.png'),
  require('../assets/clock-1.png'),
  require('../assets/corona-1.png'),
  require('../assets/crab-1.png'),
  require('../assets/crok-1.png'),
  require('../assets/dog-1.png'),
  require('../assets/dog-2.png'),
  require('../assets/dog-3.png'),
  require('../assets/duck-1.png'),
  require('../assets/duck-2.png'),
  require('../assets/earth-1.png'),
  require('../assets/egg-1.png'),
  require('../assets/elephant-1.png'),
  require('../assets/elephant-2.png'),
  require('../assets/elsa-1.png'),
  require('../assets/frank-1.png'),
  require('../assets/gandhi-1.png'),
  require('../assets/ganesh-1.png'),
  require('../assets/gift-1.png'),
  require('../assets/giraffe-1.png'),
  require('../assets/giraffe-2.png'),
  require('../assets/horse-1.png'),
  require('../assets/horse-2.png'),
  require('../assets/ice-cream-1.png'),
  require('../assets/india-1.png'),
  require('../assets/kite-1.png'),
  require('../assets/lion-1.png'),
  require('../assets/lionking-1.png'),
  require('../assets/masha-1.png'),
  require('../assets/mavis-1.png'),
  require('../assets/monkey-1.png'),
  require('../assets/mrbean-1.png'),
  require('../assets/nemo-1.png'),
  require('../assets/obama-1.png'),
  require('../assets/olaf-1.png'),
  require('../assets/pascal-1.png'),
  require('../assets/penguin-1.png'),
  require('../assets/peppa-1.png'),
  require('../assets/peppa-2.png'),
  require('../assets/peppa-3.png'),
  require('../assets/phone-1.png'),
  require('../assets/pjmask-1.png'),
  require('../assets/pongal-1.png'),
  require('../assets/rabbit-1.png'),
  require('../assets/sand-clock-1.png'),
  require('../assets/school-1.png'),
  require('../assets/school-2.png'),
  require('../assets/scooter-1.png'),
  require('../assets/snake-1.png'),
  require('../assets/sunflower-1.png'),
  require('../assets/superman-1.png'),
  require('../assets/sven-1.png'),
  require('../assets/train-1.png'),
  require('../assets/train-2.png'),
  require('../assets/tree-1.png'),
  require('../assets/trump-1.png'),
  require('../assets/turtle-1.png'),
  require('../assets/tweety-1.png'),
  require('../assets/tweety-2.png'),
  require('../assets/uk-1.png'),
  require('../assets/umbrella-1.png'),
  require('../assets/unicorn-1.png'),
  require('../assets/zebra-1.png'),
  require('../assets/zebra-2.png'),
]

export const yayGIFs = [
    require('../assets/1593867963.gif'),
    require('../assets/1593867966.gif'),
    require('../assets/1593867969.gif'),
    require('../assets/1593867971.gif'),
    require('../assets/1593867972.gif'),
    require('../assets/1593867978.gif'),
    require('../assets/1593867981.gif'),
    require('../assets/1593867986.gif'),
    require('../assets/1593867993.gif'),
    require('../assets/1593899305.gif'),
    require('../assets/1593899307.gif'),
    require('../assets/1593899308.gif'),
    require('../assets/1593899309.gif'),
    require('../assets/1593899310.gif'),
    require('../assets/1593899312.gif'),
    require('../assets/1593899314.gif'),
    require('../assets/1593899329.gif'),
    require('../assets/1593899330.gif'),
    require('../assets/1593899332.gif'),
    require('../assets/1593899333.gif'),
];

export const winnerGIFs = [
    require('../assets/w1593899304.gif'),
    require('../assets/w1593899306.gif'),
    require('../assets/w1593899313.gif'),
    require('../assets/w1593899331.gif'),
]

export function RandomElementFromArray(arr) {
    return arr[rand(arr.length)];
}

export function rand(max) {
    return Math.floor(Math.random() * max);
}

function isInArray(element, array) {
    let i;
    for(i=0; i<array.length; i++)
        if(array[i] === element)
            return true;
    return false;
}

export function GetRandomItemsFromArray(allItems, count) {
    let i=0, randomItems=[];

    while(i<count){
        const r = RandomElementFromArray(allItems);
        if(!isInArray(r, randomItems))
            randomItems[i++] = r;
    }
    return randomItems;
}

export function RandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
        result += characters.charAt(rand(charactersLength));
    }
    return result;
}

export function CreatePuzzles(totalCards) {
    const arr = GetRandomItemsFromArray(ALL_IMAGES, totalCards);
    return arr.map(l => ({
        name: l,
        hidden: true,
        visited: false,
        id: RandomString(6),
    }))
}
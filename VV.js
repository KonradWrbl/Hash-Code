const input = [{
    id: 0,
    tagsNumber: 3,
    tags: ["cat", "garden", "sun"],
},
{
    id: 1,
    tagsNumber: 2,
    tags: ["selfie", "smile"],
},
{
    id: 2,
    tagsNumber: 2,
    tags: ["garden", "selfie"],
},
{
    id: 3,
    tagsNumber: 2,
    tags: ["garden", "cat", 'ballon', 'mouse', 'sun'],
},
{
    id: 4,
    tagsNumber: 2,
    tags: ["selfie", "smile"],
},
{
    id: 5,
    tagsNumber: 2,
    tags: ["garden", "selfie"],
},
{
    id: 6,
    tagsNumber: 2,
    tags: ["garden", "cat", 'mouse'],
},
{
    id: 7,
    tagsNumber: 2,
    tags: ["ballon", 'sun'],
},
];

var slides = [];

let VV = (input) => {
    let tab = input;
    let bestConnection = 0;
    let i = 0;
    let x = 0;
    let connection = 0;
    while(1) {
        for(y=1; y<tab.length; y++) {
            connection = tab[0].tags.length+tab[y].tags.length-pointsoftree(tab[0].tags, tab[y].tags);
            if(connection ==  bestConnection) {
                bestConnection = connection;
                i=y-1;
            }
            else if(connection > bestConnection) {
                bestConnection = connection;
                i=y-1;
            }
        }

        slides[x] = [tab[0], tab[i]];
        x++;

        tab.splice(0,1);
        tab.splice(i-1,1);

        if(tab.length==0) break;
    }
}

let pointsoftree = (firstTab, scndTab) => {
    let existInFirstTab = firstTab.length;
    let existInBoth = 0;
    let existInScndTab = scndTab.length;
    let smallest;

    for(i=0; i<firstTab.length;i++){
        for(j=0;j<scndTab.length; j++){
            if(firstTab[i]==scndTab[j]){
                existInBoth++;
            }
        }
    }
    return existInBoth;
}

VV(input);

console.log(slides);
// const input = [[0, "H", "cat", "beach", "sun"],
//  [1, "V", "selfie", "smile"],
//   [2, "V", "garden", "selfie"],
//    [3, "H", "garden", "cat"]];

const input = [{
        id: 0,
        tagsumber: 3,
        tags: ["cat", "beach", "sun"],
    },
    {
        id: 1,
        tagsumber: 2,
        tags: ["selfie", "smile"],
    },
    {
        id: 2,
        tagsumber: 2,
        tags: ["garden", "selfie"],
    },
    {
        id: 3,
        tagsumber: 2,
        tags: ["garden", "cat"],
    },
];

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
    existInFirstTab = existInFirstTab - existInBoth;
    existInScndTab = existInScndTab - existInBoth;

    if(existInFirstTab<existInBoth) smallest=existInFirstTab;
    else smallest=existInBoth;
    if (existInScndTab<smallest) smallest=existInScndTab;

    console.log(existInBoth, existInFirstTab, existInScndTab);
    return smallest;
}
console.log(pointsoftree(input[0].tags, input[3].tags));
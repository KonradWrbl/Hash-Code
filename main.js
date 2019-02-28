const input = [[0, "H", "cat", "beach", "sun"],
 [1, "V", "selfie", "smile"],
  [2, "V", "garden", "selfie"],
   [3, "H", "garden", "cat"]];

let pointsoftree = (firstTab, scndTab) => {
    let existInFirstTab = firstTab.length-2;
    let existInBoth = 0;
    let existInScndTab = scndTab.length-2;
    let smallest;

    for(i=2; i<firstTab.length;i++){
        for(j=2;j<scndTab.length; j++){
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
console.log(pointsoftree(input[0], input[3]));
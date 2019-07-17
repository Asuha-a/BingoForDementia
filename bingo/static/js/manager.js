let num = 0;
const N = 11;
var flag = false;
function createRandom(N) {
    var imagesArray = [];
    
    var i = 0;
    while (i < N) {
        imagesArray.push("pic" + i + ".png");
        i++;
    }
    var currentIndex = imagesArray.length;
    var temporaryValue, randomIndex;

    while (currentIndex !== 0) {

        randomIndex = Math.floor((Math.random() * currentIndex) + 1);
        currentIndex--;

        temporaryValue = imagesArray[currentIndex];
        imagesArray[currentIndex] = imagesArray[randomIndex];
        imagesArray[randomIndex] = temporaryValue;
    }
    return imagesArray;
}
function onClick() {
    if (!flag) {
        a = createRandom(N);
        flag = true
    } 
    console.log(a[num])
    document.getElementById(`img${num}`).src = a[num]
    a.shift()
    if (!a[num]) alert("Gamefinish")
}

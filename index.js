//two types of variables in JS -> const OR let/var variable where the latter is dynamic and can change
//going to return an array of the different elements that have the tag name
const body = document.getElementsByTagName("body")[0]
body.style.backgroundColor="lightgray"

//click button to change the color
function setColor(color_name){
body.style.backgroundColor=color_name;
}

function randomColor(){
    //generate random RBG value
    //math.random generates a random value between 0 and 1
    const red = Math.round(Math.random()*255);
    const green = Math.round(Math.random()*255);
    const blue = Math.round(Math.random()*255);
    // string manipulation trick with backticks
    body.style.backgroundColor=`rgb(${red},${green},${blue})`
}

//calling the function
//setColor('green');
//randomColor();

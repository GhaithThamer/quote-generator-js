const spanQuote = document.getElementById("spanQuote");
const divAuthor = document.getElementById("divAuthor");
const divMainContainer = document.getElementById("divMainContainer");
const buttonNextQuote = document.getElementById("buttonNextQuote");
const buttonTweet = document.getElementById("buttonTweet");
const loader = document.getElementById("loader");

const apiAdress = "https://type.fit/api/quotes"
let jsonQuote;
extractQuote();
async function extractQuote(){
    loading();
    stringsQuote= await fetch(apiAdress);
    jsonQuote= await stringsQuote.json();
    chooseAndDisplayQuote();
}

function chooseAndDisplayQuote(){
    loading();
    const randomNumberOfThisTry = pickRandomNumber(0,jsonQuote.length-1)
    spanQuote.innerText=jsonQuote[randomNumberOfThisTry].text;
    divAuthor.innerText=jsonQuote[randomNumberOfThisTry].author;
    loadingComplete();
    //console.log(jsonQuote)
}
buttonNextQuote.addEventListener("click",()=>{
    chooseAndDisplayQuote();
})

buttonTweet.addEventListener("click",()=>{
    const tweetUrl="https://twitter.com/intent/tweet?text=hithere";
    window.open(tweetUrl,"_blank")
})


function pickRandomNumber(lowest,highest){
    const randomNumber = Math.floor(Math.random()*(highest-lowest))+lowest;
return randomNumber;
}

function loading(){
    loader.hidden = false;
    divMainContainer.hidden = true;
}

function loadingComplete(){
    loader.hidden = true;
    divMainContainer.hidden = false;
}
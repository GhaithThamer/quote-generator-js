const spanQuote = document.getElementById("spanQuote");
const divAuthor = document.getElementById("divAuthor");
const buttonNextQuote = document.getElementById("buttonNextQuote");
const buttonTweet = document.getElementById("buttonTweet");

const apiAdress = "https://type.fit/api/quotes"
let jsonQuote;
extractQuote();
async function extractQuote(){
    stringsQuote= await fetch(apiAdress);
    jsonQuote= await stringsQuote.json();
    chooseAndDisplayQuote();
}

function chooseAndDisplayQuote(){
    const randomNumberOfThisTry = pickRandomNumber(0,jsonQuote.length-1)
    spanQuote.innerText=jsonQuote[randomNumberOfThisTry].text;
    divAuthor.innerText=jsonQuote[randomNumberOfThisTry].author;
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

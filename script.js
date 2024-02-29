const zodis = document.querySelector(".inputText");
const btn = document.querySelector(".btn");
const result = document.querySelector(".results");

function countVowel() {
    let vowelCount = 0;
    let wordVal = zodis.value;

    for (let i = 0; i < wordVal.length; i++) {
        const letter = wordVal[i];

        if (letter.match(/([a,A,e,E,o,O,i,I,u,U])/)) {
            vowelCount++;
        }
    }
    result.innerHTML = `${zodis.value} has ${vowelCount} vowels`;
}

btn.addEventListener("click", countVowel);

// --- SEMI-SPILTER ØVELSE ---
// let text = "Jeg er en tekst hvor nogle ord skal skiftes ud med nogle andre ord";
// let thesplittedText = text.split(" ");
// console.log(thesplittedText);

// console.log(thesplittedText.join(" "))


// let text = "Jeg er en tekst hvor nogle ord skal skiftes ud med nogle andre ord";
// let thesplittedText = text.split("ord");
// console.log(thesplittedText);

// console.log(thesplittedText.join("ting"));

// console.log(text.replaceAll("ord", "ting"));


// --- PROFANITY OPGAVE FORSØG ---

let text = "Programmering er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning."

let htmlText = document.querySelector("p");


// function varConst() {
//   let varConst = text.split("var");
//   htmlText.textContent = varConst.join("const");
// }

function varConstant() {
  let varConst = text.split("var");
  let floatGrid = text.split("float");

  htmlText.textContent = varConst.join("const");
  htmlText.textContent = floatGrid.join("grid");
}

document.querySelector("#filter").addEventListener("click", varConstant);


// --- RESTER AF FORSØG-KODE ---
// let floatGrid = text.split("float");
// console.log(floatGrid);
// console.log(floatGrid.join("grid"));


// let marqueeJust = text.split("marquee");
// console.log(marqueeJust);
// console.log(marqueeJust.join("just don't,"));




// --- FORSØG MED ARRAY ---

// let text = "Programmering er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning.";

// const curseWords = [{ bad: "var", good: "const", }, { bad: "float", good: "grid", }, { bad: "marquee", good: "just don't", },];


// let bad = curseWords.map(obj => obj.bad)
// console.log(bad);


// console.log(varConst.join("const"));


// let floatGrid = curseWords.split("float");
// console.log(floatGrid);
// console.log(floatGrid.join("grid"));



// let marqueeJust =curseWords.split("marquee");
// console.log(marqueeJust);
// console.log(marqueeJust.join("just don't,"));

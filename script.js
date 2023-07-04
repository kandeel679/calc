const Btwo = document.getElementById("two");
const Bthree = document.getElementById("three");
const Bplus = document.getElementById("plus");

const Bfour = document.getElementById("four");
const Bfive = document.getElementById("five");
const Bsix = document.getElementById("six");
const Bsub = document.getElementById("sub");

const Bseven = document.getElementById("seven");
const Beight = document.getElementById("eight");
const Bnine = document.getElementById("nine");
const Bprod = document.getElementById("prod");

const Bclear = document.getElementById("clear");
const Bzero = document.getElementById("zero");
const Bequal = document.getElementById("equal");
const Bdiv = document.getElementById("div");

const Bone = document.getElementById("one");
let screen = document.getElementById("scr");

function addnum(v) {
  screen.innerText += v.value;
}

function fun(v) {
  const element = v.value;

  switch (element) {
    case "plus":
      screen.innerText += "+";
      break;
    case "sub":
      screen.innerText += "-";
      break;
    case "prod":
      screen.innerText += "*";
      break;
    case "div":
      screen.innerText += "/";
      break;
    case "clear":
      screen.innerText = "";
      break;
    default:
      break;
  }
}

function calculate() {
  const expression = screen.innerText;
  const result = eval(expression); // Evaluating the expression using the eval() function (Note: Using eval() can be a security risk, so use it cautiously)

  screen.innerText = result;
}

Bone.addEventListener("click", () => addnum(Bone));
Btwo.addEventListener("click", () => addnum(Btwo));
Bthree.addEventListener("click", () => addnum(Bthree));
Bfour.addEventListener("click", () => addnum(Bfour));
Bfive.addEventListener("click", () => addnum(Bfive));
Bsix.addEventListener("click", () => addnum(Bsix));
Bseven.addEventListener("click", () => addnum(Bseven));
Beight.addEventListener("click", () => addnum(Beight));
Bnine.addEventListener("click", () => addnum(Bnine));
Bzero.addEventListener("click", () => addnum(Bzero));
Bplus.addEventListener("click", () => fun(Bplus));
Bsub.addEventListener("click", () => fun(Bsub));
Bprod.addEventListener("click", () => fun(Bprod));
Bdiv.addEventListener("click", () => fun(Bdiv));
Bclear.addEventListener("click", () => fun(Bclear));
Bequal.addEventListener("click", calculate);

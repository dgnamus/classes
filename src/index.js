import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says ${line}`);
  }
  burp() {
    console.log("burp!");
  }
}

let blackRabbit = new Rabbit("black");
blackRabbit.speak("Yo wassup homie");
blackRabbit.burp();
//currently, you can only make methods in the class declarations, so for now you make other properties directly in the instance instead.
blackRabbit.age = 9;
console.log(blackRabbit.age);
//like function, class can be used both in statements and in expressions. When used in expression, it doesn't define a binding but just produces the constructor as a value.
let niceThings = new class {
  getFucked() {
    return "fuck you";
  }
  getSome() {
    return "get some";
  }
}();

console.log(niceThings.getFucked());
console.log(niceThings.getSome());

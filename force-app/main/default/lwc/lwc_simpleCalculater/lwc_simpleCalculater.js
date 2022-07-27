import { LightningElement } from "lwc";

export default class lwc_simpleCalculater extends LightningElement {
  numberx = 0;
  numbery = 0;
  result = 0;

  connectedCallback() {
    console.log("Calculator LWC is working...");
  }

  inputNumberOnchangeHandler(event) {
    // console.log(event.target.name);
    // console.log(event.target.value);

    // console.log(event);

    if (event.target.name === "number1") {
      this.numberx = event.target.value;
    }

    if (event.target.name === "number2") {
      this.numbery = event.target.value;
    }

    console.log("number x : " + this.numberx);
    console.log("number y : " + this.numbery);
  }

  sumHandler() {
    this.result = parseInt(this.numberx) + parseInt(this.numbery);
  }

  subHandler() {
    this.result = parseInt(this.numberx) - parseInt(this.numbery);
  }

  mulHandler() {
    this.result = parseInt(this.numberx) * parseInt(this.numbery);
  }
  divHandler() {
    this.result = parseInt(this.numberx) / parseInt(this.numbery);
  }
}
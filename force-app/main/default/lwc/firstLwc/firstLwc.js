import { LightningElement } from "lwc";
export default class FirstLWC_HelloWorld extends LightningElement {
  message = "Hello LWC From JS";

  connectedCallback() {
    console.log("JS is Working...");
  }

  inputNameHandler(event) {
    console.log(event.target.value);
  }
  inputNameHandler(event) {
    console.log(event.target.value);
    this.message = "User Says : " + event.target.value;
  }
}
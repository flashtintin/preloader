import Test from "./test";

export default class Preloader {
  constructor(resource, option = {}) {
    if (typeof resource === "string") {
      console.log("string is good");
    } else if (resource instanceof Array) {
      console.log("array is good");
    } else {
      console.log("bad type");
    }

    this.test = new Test();
  }
}

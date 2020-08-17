export default class Preloader {
  constructor(resource, option = { mode: "no-cors", method: "GET" }) {
    if (typeof resource === "string") {
      console.log("string is good");
      this.initSingle(resource, option);
    } else if (resource instanceof Array) {
      console.log("array is good");
    } else {
      console.log("bad type");
    }

    // this.test = new Test();
  }

  initSingle(r, o) {
    const option = Object.assign(o, { responseType: "blob" });
    fetch(r, option)
      .then((response) => {
        // if (response.ok) {
        //   return response.blob();
        // }
        // throw new Error("Network response was not ok.");
        console.log(response);
      })
      .then((blob) => {
        console.log("done", blob);
      })
      .catch((e) => {
        console.log(e);
      });
  }
}

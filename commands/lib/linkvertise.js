const btoa = require("btoa")

class Linkvertise {
    constructor(code) {
        this.code = code;
    }
    getLink(link) {
        return "https://link-to.net/" + this.code + "/" + Math.random() * 1000 + "/dynamic/" + "?r=" + btoa(encodeURI(link)); //get the link
    }
}

module.exports = Linkvertise;
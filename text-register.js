const ioHook = require('iohook')

class TextRegister {

    userText = "";
    callbacks = [];

    constructor() {
        ioHook.on('keypress', e => {
            let char = String.fromCharCode(e.keychar);
            this.userText += char;
            let textLength = this.userText.length
            this.userText = this.userText.slice(textLength - 100)
            this.triggerCallbacks();
        });
    }

    subscribe(callback) {
        this.callbacks.push(callback);
    }

    triggerCallbacks() {
        this.callbacks.forEach(callback => {
            callback(this.userText)
        });
    }

}


module.exports = new TextRegister()
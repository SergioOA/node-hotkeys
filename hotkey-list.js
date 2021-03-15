const hotkey = require('./hotkey');

class HotkeyList {
    
    hotkeys = [];

    loadFromJSON(json) {
        json.forEach(entry => {
            let h = new hotkey(entry);
            this.hotkeys.push(h);
        });
    }

    // Este método recibe un string con la información de lo que ha escrito el
    // usuario y evalúa si hay que ejecutar un hotkey. Si se encuentra un hotkey
    // del cual se cumplan los requisitos de ejecución, será ejecutado.
    evaluateString(userText) {
        this.hotkeys.forEach(hotkey => {
            hotkey.evaluateString(userText);
        });
    }

}

module.exports = new HotkeyList()
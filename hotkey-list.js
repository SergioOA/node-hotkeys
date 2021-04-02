const hotkey = require('./hotkey');

class HotkeyList {
    
    hotkeys = [];

    loadFromJSON(json) {
        json.forEach(entry => {
            let h = new hotkey(entry);
            this.hotkeys.push(h);
        });
        this.hotkeys.sort(this.sortLengthDesc);
    }

    // Este método recibe un string con la información de lo que ha escrito el
    // usuario y evalúa si hay que ejecutar un hotkey. Si se encuentra un hotkey
    // del cual se cumplan los requisitos de ejecución, será ejecutado.
    evaluateString(userText) {
        this.hotkeys.some(hotkey => {
            let triggered = hotkey.evaluateString(userText);
            return triggered;
        });
    }

    // Algoritmo de sort para ordenar los hotkeys en función de la longitud del
    // trigger de forma descendente, de forma que en el caso de que se tengan que
    // ejecutar múltiples hotkeys al mismo tiempo, tenga preferencia el hotkey
    // con el trigger más largo.
    sortLengthDesc(hotkey1, hotkey2) {
        return hotkey2.triggerLength() - hotkey1.triggerLength();
    }

}

module.exports = new HotkeyList()
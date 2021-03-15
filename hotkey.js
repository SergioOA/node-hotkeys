const robot = require("robotjs");
const clipboardy = require('clipboardy');

class Hotkey {
    
    hotkeyData = {};

    constructor(params) {
        robot.setKeyboardDelay(1);
        this.hotkeyData = params;
    }

    // Este método recibe un string con la información de lo que ha escrito el
    // usuario y ejecuta el hotkey si se cumplen las condiciones.
    evaluateString(userText) {
        if(userText.endsWith(this.hotkeyData.trigger))
            this.execute();
    }

    // Se utiliza el clipboard para escribir el texto necesario, no uso 
    // directamente la librería de robotjs ya que ésta no soporta chars
    // de 2 bytes de longitud, así como letras con acentos.
    execute() {
        let { trigger, value } = this.hotkeyData;
        for(let i = 0; i < trigger.length; i++)
            robot.keyTap('backspace');
        let clipboardOld = "";
        try {
            clipboardOld  = clipboardy.readSync();
        } catch (error) {
            // Dará error si el usuario tiene su clipboard vacía
        }
        clipboardy.writeSync(value);
        robot.keyTap('v', 'control');
        clipboardy.writeSync(clipboardOld);
    }

}

module.exports = Hotkey
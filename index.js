const ioHook = require('iohook');
const hotkeyList = require('./hotkey-list');
const config = require('./config/config.json');
const textRegister  = require('./text-register');

// Cargamos la configuración de hotkeys, puede ser editada en el archivo
// de configuración './config/config.json'
hotkeyList.loadFromJSON(config);

// Este método se ejecuta cada vez que el 'textRegister' detecta que el
// usuario ha escrito algo.
textRegister.subscribe((userText) => {
    hotkeyList.evaluateString(userText);
});


ioHook.start();
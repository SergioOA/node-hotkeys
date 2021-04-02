## ❔ ¿Para qué sirve este programa?

Con este programa puedes reemplazar palabras de forma automática mientras escribes.
Esto puede ser muy útil en diferentes situaciones:

- **Usar teclados estadounidenses**<br/>
Si quieres escribir en español usando un teclado de estados unidos tendrás problemas para
escribir acentos, puedes usar este programa para poder escribir los acentos de forma cómoda.
En mi caso, utilizo esta configuración para escribir la letra **á**.
```
{
    "trigger": "'a",
    "value": "á"
}
```

- **Guardar contraseñas**<br/>
Si tienes que memorizar y escribir contraseñas largas puedes crear un hotkey como **mi contraseña**.

- **Escribir tu email**<br/>
Puedes bindear la palabra **mail** para que se escriba tu email como se ve en el siguiente ejemplo:
```
{
    "trigger": "mail",
    "value": "este-es-un-email-largo@gmail.com"
}
```

## ⚙️ Compatibilidad
1. Windows 10
2. Linux
3. Mac OS X (no comprobado)

## 🛠️ Instalación

1. Clonar el repositorio

```
git clone https://github.com/SergioOA/node-hotkeys.git
```

2. Entrar a la carpeta que se ha creado

```
cd node-hotkeys
```

3. Instalar las dependencias

```bash
npm install
```

4. Iniciar el programa

```bash
npm start
```

## 📚 Startup

Una de las dependencias de la aplicación (robotjs) no funciona correctamente usando windows y pm2. Si usas
windows y quieres que el programa se inicie de forma automática puedes usar este tutorial:

https://stackoverflow.com/questions/21218346/run-batch-file-on-start-up#:~:text=To%20run%20a%20batch%20file,drag%20shortcut%20to%20startup%20folder.&text=To%20start%20the%20batch%20file,also%20use%20a%20registry%20key.&text=Here%20you%20can%20create%20a%20string.

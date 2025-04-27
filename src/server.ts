console.log ("Hello world");

// Importando o express
import express from "express"; 
import createApp from "./app";

// criando a app por meio da função createApp do application.ts
const app = createApp();

// obtendo a porta do .env
const port = process.env.PORT;

// conectndo a pp a uma porta e emite mensagem indicando a porta em que o servidor foi iniciado
app.listen(port, () => {
    console.log(`🏁Server running at port http://localhost:${port}`);
}); 
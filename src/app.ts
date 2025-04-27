// Importando o express e outros
import express from "express";
import router from "./routes";
import cors from "cors";

// criando a aplicação como uma função
function createApp() {
    // criando a aplicação 
    const app = express();

    // Configurando o expres: para que a comunicação ocorra em json
    app.use(express.json());

    // tratando as chamadas chamando o gerenciador de rotas importado de ./routes
    app.use("/api", router);
    // Configurando o cors para limitar quem tem acesso. Neste caso, deixa tudo livre. Alguns browsers bloqueiam se não tem.
    app.use(cors());
    // caso quisesse configurar, precisa configurar origin e methods, como SVGFEFuncGElement, por exemplo
        /*const corsOptions = {
            origin: ["http://felipao.sistem.com", "http://gov.br", "url3", ..., "urln"],
            methodos:["GET", "UPDATE"],
        };
        app.use(cors(corsOptions));
        */
    return app;
};

export default createApp;
import { Request,Response } from "express";
import * as services from "../services/players-services";
import { StatisticsModel } from "../models/statistics-model";


export const getPlayer = async (req: Request, res: Response) => {
    // chama serices para buscar lista de players 
    const HttpResponse = await services.getPlayerService();
    // monta a resposta para o client a partir do retorno da service
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
};

export const getPlayerById = async (req:Request, res: Response) => {
    // obtem e converte o id recebido para integer
    const id = parseInt(req.params.id);
    // chama serices para buscar player pelo id
    const httpResponse = await services.getPlayerByIdService(id);
    // monta a resposta para o client a partir do retorno da service
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req:Request, res: Response) => {
    // obtem os dados (json) do novo player
    const bodyValue = req.body;
    // chama services para processar a chamada
    const httpResponse = await services.createPlayerService(bodyValue);
    // monta a resposta para o client a partir do retorno da service
    if (httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } 
};

export const deletePlayer = async (req:Request, res: Response) => {
    // obtem id do request convertido para Integer
    const id = parseInt(req.params.id);
    // chama services para processar a chamada
    const httpResponse = await services.deletePlayerService(id);
    // monta a resposta para o client a partir do retorno da service
    if (httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } 
};

export const updatePlayer = async (req: Request, res: Response) => {
    // obtem id do request convertido para Integer
    const id = parseInt(req.params.id);

    // obtem os dados (json) da alteração
    const bodyValue: StatisticsModel = req.body;

    // chama services para processar a chamada
    const httpResponse = await services.updatePlayerService(id,bodyValue);
    // monta a resposta para o client a partir do retorno da service
    if (httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } 
}
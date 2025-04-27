import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();
    let response = null;

    if (data) {
        response = await HttpResponse.ok(data);
    }else{
        response = await HttpResponse.noContent();
    };

    return response;
};

export const getPlayerByIdService = async (id: number) => {
    const data = await PlayerRepository.findPlayerById(id);
    let response = null;
    if (data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    };
    return response;
};

export const createPlayerService = async (player: PlayerModel) => {
    let response = null;
    // critica player
    if (Object.keys(player).length  !== 0) {
        await PlayerRepository.insertPlayer(player);
        response = await HttpResponse.playerCreated();
    } else {
        response = await HttpResponse.badRequest();
    }
    return response;
};

export const deletePlayerService = async (id: number) => {
    let response = null;
    // chama repository para deletar passando o id recebido
    const isDeleted = await PlayerRepository.deleteOnePlayer(id);
    if(isDeleted) {
        response = await HttpResponse.ok({message: "deleted"})
    } else {
        response = await HttpResponse.badRequest();
    }
    return response;
};

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
    // chama repository para deletar passando o id recebido
    const data = await PlayerRepository.findAndModifyPlayer(id, statistics);
    // monta resposta
    let response = null;
    /*
    if (Object.keys(data).length !== 0) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.badRequest();
    } 
    */
    // retorna resposta

    if (data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.badRequest();
    };

    return response;
};
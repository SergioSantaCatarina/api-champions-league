import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

// criando um array de players enquanto não temos camada data
const playersDatabase: PlayerModel[]= [
    {id: 1, name: "Messi", club: "PSG", nationality: "Argentina", position: "Atacante", statistics: {
        Overall: 93,
        Pace: 85,
        Shooting: 94,
        Passing: 91,
        Dribbling: 95,
        Defending: 38,
        Physical: 65}
    },

    {id: 2, name: "Cristiano Ronaldo", club: "PSG", nationality: "Argentina", position: "Atacante", statistics: {
        Overall: 93,
        Pace: 85,
        Shooting: 94,
        Passing: 91,
        Dribbling: 95,
        Defending: 38,
        Physical: 65}
    },

    {id: 3, name: "Neymar", club: "PSG", nationality: "Argentina", position: "Atacante", statistics: {
        Overall: 93,
        Pace: 85,
        Shooting: 94,
        Passing: 91,
        Dribbling: 95,
        Defending: 38,
        Physical: 65}
    },
];

// criando fução para retornar todos os players
export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return playersDatabase;
};

// criando função para retornar plaier solicitado por id
export const findPlayerById = async (id:number): Promise<PlayerModel| undefined> => {
    return playersDatabase.find((player) => player.id === id);
};

// criando função para inserir novo player
export const insertPlayer = async (player: PlayerModel) => {
    playersDatabase.push (player);
};

// criando função para deletar um player
export const deleteOnePlayer = async (id: number) => {
    // obtem a posição do player com o id informado
    const index = playersDatabase.findIndex((p) => p.id === id);
    // se encontrou o playersDatabase, exclui do database
    if (index !== -1) {
        playersDatabase.splice(index, 1);
        return true;
    }else{
        return false;
    };
};

// criando função para atualizar um player
export const findAndModifyPlayer = async (id: number, statistics:StatisticsModel): Promise<PlayerModel> => {
    // obtem a posição do player com o id informado
    const index = playersDatabase.findIndex((p) => p.id === id);
    // se encontrou o playersDatabase, exclui do database
    if (index !== -1) {
        playersDatabase[index].statistics = statistics;
    };
    // retorna o player modificado
    return playersDatabase[index];
};
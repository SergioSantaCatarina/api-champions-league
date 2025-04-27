import { ClubModel } from "../models/club-model";
import fs from "fs/promises";

// criando um array de clubes enquanto não temos camada data. Depois substituído pelo acesso ao arquivo json em /data.
/*const clubDatabase: ClubModel[]= [
    {id: 1, name: "Real Madri"},
    {id: 2, name: "Barcelona"},
    {id: 3, name: "Internacional"},
];
*/

export const findAllClubs = async (): Promise<ClubModel[]> => {
    const data = await fs.readFile("./src/data/clubs.json", "utf-8");
    const clubs: ClubModel[] = JSON.parse(data);
    return clubs;
};
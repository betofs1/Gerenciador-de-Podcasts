
import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";


const PathData = path.join(__dirname, "../repositories/podcasts.json");
// Aqui, path.join está unindo o diretório atual (__dirname) com o caminho relativo para o arquivo podcasts.json.
// Isso garante que o caminho seja montado corretamente em qualquer ambiente, mesmo que a estrutura do sistema de arquivos seja diferente.

export const repoPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
    // Esta função assíncrona, repoPodcast, aceita um nome de podcast opcional (podcastName) e retorna uma Promise de um array de objetos Podcast.
const rawData = fs.readFileSync(PathData, "utf-8");
    // fs.readFileSync está lendo o arquivo podcasts.json de forma síncrona, codificando-o como uma string UTF-8.
    // Isso carrega o conteúdo do arquivo JSON como uma string para a variável rawData.
let jsonFile = JSON.parse(rawData);
    // JSON.parse converte a string JSON em um objeto JavaScript, tornando o conteúdo do arquivo JSON utilizável dentro do código.

    
    if(podcastName){
        jsonFile=jsonFile.filter(
            (podcast:PodcastModel)=>podcast.podcastName===podcastName)
    }

    return jsonFile;
    // Retorna o objeto JSON (que deve ser um array de objetos Podcast) para quem chamar a função.
}

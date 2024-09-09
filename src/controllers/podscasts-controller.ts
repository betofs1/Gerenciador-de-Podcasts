import { IncomingMessage, request, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";


//endpoint lista de eps
export const getListEpisodes = async(
    request:IncomingMessage, 
    response:ServerResponse
)=>{

    const content = await serviceListEpisodes();
    response.writeHead(200,{"Content-Type": "application/json"});
    response.end(
        JSON.stringify(content));
}


//endpoint filter
export const getFilterEpisodes =async(
    req:IncomingMessage,
    res:ServerResponse
)=>{


        const content=await serviceFilterEpisodes(req.url)

        res.writeHead(200,{"Content-Type": "application/json"});
        res.end(
            JSON.stringify(content));
    }


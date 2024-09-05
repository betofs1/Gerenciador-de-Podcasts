import fs from "fs"
import path from "path"
import { Podcast } from "../models/podcast-model"




const PathData = path.join(__dirname,"../repositories/podcasts.json")

export const repoPodcast = async (): Promise<Podcast[]>=>{
    const rawData = fs.readFileSync(PathData, "utf-8")

    const jsonFile=JSON.parse(rawData)
    return jsonFile
}


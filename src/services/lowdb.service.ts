import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import * as path from 'path';
import csvtojson from 'csvtojson';
import * as fs from 'fs';

export default class LowDbService {

    csvFile = path.resolve(__dirname, '../data/movielist.csv');
    jsonFile = path.resolve(__dirname, '../data/movielist.json');

    convertCsvToJson = async (): Promise<void> => {
        const jsonString = await csvtojson({ delimiter: ';' }).fromFile(this.csvFile);
        fs.writeFileSync(this.jsonFile, JSON.stringify(jsonString))
    };

    populateData = async (): Promise<Low> => {
        const adapter = new JSONFile(this.jsonFile)
        const db = new Low(adapter, [])
        await db.read()
        return db;
    }
}
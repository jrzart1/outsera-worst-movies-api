import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import * as path from 'path';
import csvtojson from 'csvtojson';
import * as fs from 'fs';
import { IMoviesItem } from '../@types';

export default class LowDbService {

    convertCsvToJson = async (): Promise<void> => {
        const csvFile = path.resolve(__dirname, '../data/movielist.csv');
        const jsonString = await csvtojson({ delimiter: ';' }).fromFile(csvFile);
        fs.writeFile('./src/data/movielist.json', JSON.stringify(jsonString), (err) => {
            if (err) {
                console.error('Erro ao converter CSV para JSON:', err);
            }
        });
    };

    populateData = async (): Promise<Low> => {
        const jsonFile = path.resolve(__dirname, '../data/movielist.json');
        const adapter = new JSONFile(jsonFile)
        const db = new Low(adapter, [])
        await db.read()
        return db;
    }
}
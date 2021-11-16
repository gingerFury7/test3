import axios from 'axios'
import { BodyFormData, GetPumpsStateModel, BaseURL } from './ApiModels'

export function GetPumps (): Promise<number[]>{
    const body: BodyFormData = {
        UniqueRequestId: 'string',
        Method: 'Unknown',
        Data: {}
    };
    const GetPumpsUrl = BaseURL + 'GetPumps';
    return axios
        .post(GetPumpsUrl, body)
        .then(response => { 
            return response.data.Data.PumpsData.PumpNumbers;
        })
        .catch(e => {
            console.log(e);
        });
    }

export function GetPumpsState (PumpNumber: Array<number>): Promise<GetPumpsStateModel>{
    const body: BodyFormData = {
        UniqueRequestId: 'string',
        Method: 'Unknown',
        Data: {
            PumpNumbers: PumpNumber,
        }
    }
    const GetPumpsStateUrl = BaseURL + 'GetPumpsState';
    return axios
        .post(GetPumpsStateUrl, body)
        .then(response =>{
            return response.data;
        })
        .catch(e => {
            console.log(e);
        });
}


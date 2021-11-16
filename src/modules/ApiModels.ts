export const BaseURL = 'https://dev.ekagroup.local:7472/';

export interface IGetPumps {
    PumpsData: {
        PumpsNumbers: Array<number> | null
    }
    ActivePumpNumber: number
}

export interface IItems{
    NozzleNumber: number;
    IzNozzleEnabled: boolean;
    IsNozzleUp: boolean;
    NozzleFuel:{
        DevCode: number;
        BasePrice: number;
        Name: string | null;
        ExtraName: string | null;
    }
}

export interface IResult{ 
    ResultCode: string;
    ResultMessage: string;
}

export interface GetPumpsModel {
    Result: IResult
    Data: IGetPumps
}

export interface IPumpsData { 
    PumpNumber: number;
    PumpState: string;
    IsPumpAvailableForPreselect: boolean;
    PumpFlags: number;
    Nozzles:{
        Items: Array<IItems> | null
    }
    Attached: {
        TransactionId: number;
        PresselMode: string;
        PresselPrice: number;
        PresselDose: number;
        PreselProductDevCode: number;
        FillingPrice: number;
        FillingVolume: number;
        FillingSum: number;
    }
}

export interface GetPumpsStateModel {
    Result: IResult
    Data: {
        PumpsData: Array<IPumpsData> | null
    }
}

export interface BodyFormData{
    UniqueRequestId: string | null,
    Method: string,
    Data: unknown | null
}
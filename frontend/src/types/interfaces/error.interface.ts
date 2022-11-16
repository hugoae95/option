interface IData{
    timestamp:string;
    path:string;
    message:string;
}

export interface IError{
    status:string;
    data:IData;
}
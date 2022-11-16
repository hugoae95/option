export interface Action {
    type:string,
    payload:any,
    productId?: string,
    barcode?: string,
  }

  
export interface ActionWithPayload<T> extends Action {
    payload: T;
} 
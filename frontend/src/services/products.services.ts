import { products } from "../constants/services";
import instance from "../utils/axios.instance";
export const findAllProducts =  async () => {
   try{
     const response = await instance.get(products);
     if(response.status === 200){
       return response.data;
     }
   } catch(err){
      console.log(err);
   }
   return []; 
}
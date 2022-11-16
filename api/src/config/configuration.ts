import * as dotenv from 'dotenv';
dotenv.config();

export default () => ({
    port: parseInt(process.env.PORT) || 3000,
    products: {
      shop: (process.env.SHOP) ? process.env.SHOP : "",
      token: (process.env.TOKEN) ? process.env.TOKEN : "",
    }
});
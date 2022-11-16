import NotFound from '../screens/shared/NotFound';
import { routePermissions } from '../types/interfaces/routePermissions';    

const routes: Array<routePermissions> = [
    { path: "*", name: "Pagina no encontrada", Component: NotFound },
    
];


export default routes;
import { Role } from "../enum/roles";

export interface routePermissions {
    path: string;
    name: string;
    Component: any;
    permissions? : Array<Role>
}
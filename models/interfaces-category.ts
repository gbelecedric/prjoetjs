export interface allmenu{
    berger:details[];
    desert:details[];
    soda:details[];
    pizza:details[]; 
}
export interface details{
    nom:string;
    prix:number;
    image:any[];

}
export interface place{
    image:any[];
    disponible:boolean;

}

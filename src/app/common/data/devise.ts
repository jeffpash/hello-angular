export class Devise {
    code : string; //currency initials
    name : string; //full name
    change : number; 

    constructor(
        code:string = null, 
        name : string = null, 
        change : number = 1) {
            this.code = code;
            this.name = name;
            this.change = change;
        }
}

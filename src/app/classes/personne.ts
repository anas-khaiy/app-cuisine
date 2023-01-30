export class Personne {

    private _num: number;
    private _nom:string;
    private _prenom:string;
    private _isAdmin:boolean;
    constructor(_num:number,_prenom:string,_nom:string,_isAdmin:boolean)
    {
        this._num=_num;
        this._prenom=_prenom;
        this._nom=_nom;
        this._isAdmin=_isAdmin;
    }


    get num()
    {
        return this._num;
    } 

    get isAdmin()
    {
        return this._isAdmin;
    } 

    get nom()
    {
        return this._nom;
    } 


    get prenom()
    {
        return this._prenom;
    } 


    set prenom(value:string)
    {
        this._prenom=value;
    }


    set Num(value:number)
    {
        this._num=value;
    }

    set Nom(value:string)
    {
        this._nom=value;
    }

    set isAdmin(value:boolean)
    {
        this._isAdmin=value;
    }
}

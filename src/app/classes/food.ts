export class Food {
    private _idFood:number
    private _titleFood:string
    private _categoriefood:string
    private _imgFood:string
    private _descfood:string


    constructor(idF:number,titleF:string,categorieF:string,imgF:string,descF:string)
    {
        this._idFood=idF
        this._titleFood=titleF
        this._categoriefood=categorieF
        this._imgFood=imgF
        this._descfood=descF
    }


    get idFood()
    {
        return this._idFood
    }

    get titleFood()
    {
        return this._titleFood
    }
    get categorieFood()
    {
        return this._categoriefood
    }

    get imgFood()
    {
        return this._imgFood
    }
    get descFood()
    {
        return this._descfood
    }




    set idFood(idF:number)
    {
         this._idFood=idF
    }

    set titleFood(titleF:string)
    {
         this._titleFood=titleF
    }
    set categorieFood(categorieF:string)
    {
         this._categoriefood=categorieF
    }

    set imgFood(imgF:string)
    {
         this._imgFood=imgF
    }
    set descFood(descF:string)
    {
         this._descfood=descF
    }


}

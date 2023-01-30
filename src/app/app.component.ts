import { Component, Input, OnInit } from '@angular/core';
import { Personne } from './classes/personne';
import { ArrayType } from '@angular/compiler';
import { FormsModule } from '@angular/forms';
import { Food } from './classes/food';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   ngOnInit(): void {
      throw new Error('Method not implemented.');
   }


   /*
   person1 = new Personne(1,"Nomuser1","Prenomuser1",false);
   person2 = new Personne(2,"Nomuser2","Prenomuser2",true);
   person3 = new Personne(3,"Nomuser3","Prenomuser3",false);
   person4 = new Personne(4,"Nomuser4","Prenomuser4",true);

   tab: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

   num=""

   direBonjour()
   {
      return "Bonjour Angular";
   }

   title="Bonjour";


   condition=false;

   number=3;

   showMe="yes";
   showMe2=false
   get(e:any)
   {
      if (e.target.value=="yes") {
         this.showMe2=true
      }
      else this.showMe2=false
   }



   listPersonne: Personne[]=[this.person1,this.person2,this.person3,this.person4];


   classNameChange="changeColor1"
   numberClick:number=0;
   changeColor()
   {
      if(this.numberClick==1)
      {
         this.classNameChange="changeColor1"
         this.numberClick=0
      }
      else
      {
         this.classNameChange="changeColor2"
         this.numberClick=1
      }
   }

   color:string="white"
   changeColorByName(e:any)
   {
      if(e.target.value=="") this.color="white"
      else this.color=e.target.value;
   }


   */

   
}

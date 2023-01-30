import { Component } from '@angular/core';
import { Food } from 'src/app/classes/food';
@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})
export class ShowallComponent {

  food1=new Food(1,"Jalapeno and cucumber","cuisine","assets/img1.jpg","Warm ciabatta filled with fresh jalapeno and cucumberflour | yeast | water | salt | sugar | oil | jalapeno | cucumber")
   food2=new Food(2,"Chorizo and strawberry","cuisine","assets/img2.jpg","Spanish chorizo and fresh strawberries combined into creamy soup onion | chorizo | strawberry | cream")
   food3=new Food(3,"Buckwheat and blackcurrant","cuisine","assets/img3.jpg","Crispy pancake filled with buckwheat and fresh blackcurrant flour | butter | egg | milk | buckwheat | blackcurrant")

   food4=new Food(4,"Rosemary and onion bread","patissrie","assets/img4.jpg","Crunchy bread made with dried rosemary and chargrilled onion flour | salt | yeast | butter | water | onions | rosemary | onion")
   food5=new Food(5,"Milk chocolate and honey mousse","patissrie","assets/img5.jpg","A silky mousse made with milk chocolate and clear honey egg | cream | sugar | milk chocolate | honey")
   food6=new Food(6,"Feta and turkey soup","patissrie","assets/img6.jpg","Tangy feta and smoked turkey combined into creamy soup garlic | feta | turkey | cream")


   food7=new Food(7,"Apple and yoghurt cake","salade","assets/img7.jpg","Rich cake made with crab apple and greek yoghurt flour | butter | egg | sugar | apple | yoghurt")
   food8=new Food(8,"Sausage and feijoa salad","salade","assets/img8.jpeg","A crisp salad featuring Cumberland sausage and fresh feijoa tomato | cress | lettuce | sausage | feijoa")
   food9=new Food(9,"Mushroom and squash burgers","salade","assets/img9.jpg","Tasty burgers made from crimini mushroom and pattypan squash, served in a roll flour | yeast | water | salt | sugar | oil | onions | mushroom | squash")

   food10=new Food(10,"Egg and squash spaghetti","cuisine","assets/img10.jpg","Spagetti topped with a blend of free range eggs and acorn squash tomato | passata | onion | garlic | spagetti | oregano | black pepper | egg | squash")
   food11=new Food(11,"Bean and rhubarb cake","cuisine","assets/img11.jpg","Rich cake made with bean and fresh rhubarb flour | butter | egg | sugar | bean | rhubarb")
   food12=new Food(12,"Yeast and raisin bread","cuisine","assets/img12.jpeg","Crunchy bread made with fresh yeast and raisin flour | salt | yeast | butter | water | onions | raisin")

   food13=new Food(13,"Turkey and feta pasta","patissrie","assets/img13.jpg","Fresh egg pasta in a sauce made from smoked turkey and tangy feta")
   food14=new Food(14,"Lamb and rambutan vindaloo","patissrie","assets/img14.jpg","Spicy vindaloo made with minced lamb and fresh rambutan")
   food15=new Food(15,"Flaxseed and bread","patissrie","assets/img15.jpg","Crunchy bread made with flaxseeds and")

   food16=new Food(16,"Tubetti and caraway seed salad","salade","assets/img16.jpg","Tubetti and caraway seeds served on a bed of lettuce")
   food17=new Food(17,"Courgette and polenta bread","salade","assets/img17.jpg","Crunchy bread made with fresh courgette and polenta")
   food18=new Food(18,"Olive and egg spaghetti","salade","assets/img18.jpg","Spagetti topped with a blend of olive and free range eggs")

  
  
   listFoods: Food[]=[this.food1,this.food2,this.food3,this.food4,this.food5,this.food6,this.food7,this.food8,
    this.food9,this.food10,this.food11,this.food12,this.food13,this.food14,this.food15,this.food16,this.food17
    ,this.food18]
}

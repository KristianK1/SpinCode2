import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test2';

  name : string = "Kristian";
  ButtonDisabled : boolean = false;

  varijabla : string ="jelooo";

  polje = [{
    id:1,
    name:"vedran",
  },
  {
    id:2,
    name:"filip",
  }];


  constructor(){
    this.name = "drugo ime";


  }

buttonClick(){
  console.log(this.name);
  this.ButtonDisabled=true;
}



inputtext : string ="nesto";


typing(){
  console.log("tipkam");
}

eventIzKomponente(e:any){
  console.log("Event iz komponente", e);
}

naslov : string ="Spin Code";

clicknakomponentu(){
  console.log("click event na komponentu");
}

}

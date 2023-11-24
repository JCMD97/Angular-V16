import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  public arrayHeroes:string[]=['Spriderman','batman','Wolvering','IronMan'];
  public heroDeleted?: string;

  deletedLastHero():void{
     this.heroDeleted=this.arrayHeroes.pop();
     console.log(this.heroDeleted)
  }
}

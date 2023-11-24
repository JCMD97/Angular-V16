import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;
  public skill: string = 'Lanzar misiles xd';

  get capitalizedName():string {
    return this.name.toUpperCase();
  }
  public getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeName():void{
    this.name = 'Spiderman';
  }

  changeAge():void{
    this.age = 21;
  }

  backChange():void{
    this.name = 'ironman'
    this.age = 45;
    // document.querySelectorAll('h1').forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>'
    // });
  }


}

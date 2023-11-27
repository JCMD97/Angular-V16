import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor( private dbzService: DbzService) {//inyeccion de dependencias
    /*se inyecta el servicio de dbz.service con todas las funcionalidades
      de la lógica de negocio*/
  }
  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void{
    this.dbzService.addCharacter( character );
  }
}

import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
// Injectable -> Servicio singleton disponible en toda la app
@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 15000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 15000,
    },
  ];

  addCharacter(character: Character) {
    this.characters.push({ ...character, id: uuid() });
  }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
    // this.characters.splice(index, 1);
  }
}

import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { CharactersService } from "../../Services/characters.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-character-list",
  templateUrl: "./character-list.component.html",
  styleUrls: ["./character-list.component.css"]
})
export class CharacterListComponent implements OnInit {
  constructor(private charactersService: CharactersService) { }
  
  characters;
  characterClasses = ['Warlord', 'Gladiator','Paladin', 'Dark Avenger', 'Treasure Hunter', 'Hawkeye', 'Dreadnought', 'Duelist', 'Phoenix Knight', 'Hell Knight', 'Adventurer', 'Sagittarius',
    'Sorcerer', 'Necromancer', 'Warlock', 'Bishop', 'Prophet', 'Archmage', 'Soultaker', 'Arcana Lord', 'Cardinal', 'Hierophant',
    'Temple Knight', 'Sword Singer', 'Plains Walker', 'Silver Ranger', 'Eva\'s Templar', 'Sword Muse', 'Wind Rider', 'Moonlight Sentinel',
    'Spellsinger', 'Elemental Summoner', 'Elven Elder', 'Mystic Muse', 'Elemental Master', 'Eva\'s Saint',
    'Shillien Knight', 'Bladedancer', 'Abyss Walker', 'Phantom Ranger', 'Shillien Templar', 'Spectral Dancer', 'Ghost Hunter', 'Ghost Sentinel',
    'Spellhowler', 'Phantom Summoner', 'Shillien Elder', 'Storm Screamer', 'Spectral Master', 'Shillien Saint',
    'Destroyer', 'Tyrant', 'Titan', 'Grand Khavatari', 'Overlord', 'Warcryer', 'Dominator', 'Doomcryer', 'Bounty Hunter', 'Warsmith', 'Fortune Seeker', 'Maestro',
    'Berserker', 'Soul Breaker', 'Soul Ranger', 'Doombringer', 'Soul Hound', 'Trickster'];
  selectedClass = 'All Characters';
  servers = ['L2 Dex Interlude 50x', 'Talking Island', 'Innadril Essence'];
  selectedServer = 'All Servers';

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters = () =>
    this.charactersService
      .getCharacters()
      .subscribe(res => (this.characters = res));

}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../model/pokemon-model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numero!:number;


  constructor(private router: Router, public pokemonService: PokemonService) { }


  ngOnInit(): void {
  }

  pegarImagem(index:any){
    index!;

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
  }



}

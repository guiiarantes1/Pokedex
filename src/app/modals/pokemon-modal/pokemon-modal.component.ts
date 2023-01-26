import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';


@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.css']
})
export class PokemonModalComponent implements OnInit {
pokemon!:any;


  constructor(private router: Router, public pokemonService: PokemonService, public pokemonHome:HomeComponent, private httpClient: HttpClient,) { }

  ngOnInit(): void {
    this.pokemon = this.pokemonService.selectedPokemon;
    console.log(this.pokemon)
    }


  pegarImagemFrente(index:any){
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
  }
  pegarImagemCostas(index:any){
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${index}.png`
  }




}

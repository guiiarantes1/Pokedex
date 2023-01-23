import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { HttpClient } from '@angular/common/http';
import { PokemonModalComponent } from '../modals/pokemon-modal/pokemon-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedPokemon!:any;
  pokemons!: any[];
  teste!:any;
  p: number = 1;
  nomePokemon:any;
  detalhesPokemons!: any[];


  constructor(private router: Router, public pokemonService: PokemonService, private httpClient: HttpClient, public dialog:MatDialog) { }


  ngOnInit(): void {
    // this.pokemonService.carregarPokemons().subscribe((response: any) => {
    //   console.log(response);
    //   this.pokemons = response.results;

    // });

    // this.pokemonService.pegarDetalhes().subscribe((response: any) => {
    //   console.log(response);
    //   this.pokemons = response.results;
    // });

  }

  pegarImagem(index:any){
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
  }

public openDialog(index:any){
  return this.pokemonService.openDialog(index)
}

changePage(event: any) {
  this.p = event;

}

}


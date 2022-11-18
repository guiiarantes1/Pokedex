import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonModalComponent } from '../modals/pokemon-modal/pokemon-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons:any = [];
  selectedPokemon!:any;
  
  constructor(private httpClient: HttpClient,  public dialog:MatDialog) {
    this.carregarPokemons();
   }
  async carregarPokemons() {
   const requisicao = await this.httpClient
   .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
   .toPromise();
   const nomePokemons = requisicao.results.map((pokemon:any) => pokemon.name);
   const resultado = await Promise.all(nomePokemons.map((nomePokemon:string) => this.pegarDetalhes(nomePokemon)))
   this.pokemons = resultado;
   

   console.log(resultado)   
   
  }


  async pegarDetalhes(name:string){
    const retorno = await this.httpClient
   .get<any>(`https://pokeapi.co/api/v2/pokemon/${name}/`)
   .toPromise();

  return retorno;  
  }

  public openDialog(index:any){
    const dialogRef = this.dialog.open(PokemonModalComponent);
    console.log(index)
    this.selectedPokemon = this.pokemons[index];
    console.log(this.selectedPokemon)
  }
  
}

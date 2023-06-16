import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonModalComponent } from '../modals/pokemon-modal/pokemon-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons:any = [];
  selectedPokemon!:any;
  offset = 0;

  constructor(private httpClient: HttpClient,  public dialog:MatDialog) {

   }

   getPokemons(): Observable<any>{
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');

  }

  // pegarDetalhes(name:string): Observable<any>{
  //   return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/${name}/');
  // }

  async carregarPokemons() {
   const requisicao = await this.httpClient
   .get<any>('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=' + this.offset)
   .toPromise();
   const nomePokemons = requisicao.results.map((pokemon:any) => pokemon.name);
   const resultado = await Promise.all(nomePokemons.map((nomePokemon:string) => this.pegarDetalhes(nomePokemon)))
   this.pokemons = resultado;
  //  console.log(resultado)

  }

  getDetails(name:string):Observable<any>{
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${name}/`);

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

  getPokemonForType(name:string):Observable<any>{
    return this.httpClient.get(`https://pokeapi.co/api/v2/type/${name}/`)
  }

}

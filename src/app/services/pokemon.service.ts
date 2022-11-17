import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons:any = [];
  
  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
   }
  async carregarPokemons() {
   const requisicao = await this.httpClient
   .get<any>('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
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
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { HttpClient } from '@angular/common/http';
import { PokemonModalComponent } from '../modals/pokemon-modal/pokemon-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pokemons!: any[];
  teste!: any;
  p: number = 1;
  pokemonsFogo!: any[];
  favoritos!: any[];
  listaPokemons!: any[];
  pokemonsFavoritos!: any[];
  constructor(
    private router: Router,
    public pokemonService: PokemonService,
    private httpClient: HttpClient,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {

  // localStorage.clear()
    this.favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
;
    this.pokemonService.carregarPokemons();


    this.pokemonService.getPokemons().subscribe((response: any) => {
      console.log(response);
      this.pokemons = response.results;
    });

    // this.pokemonService.pegarDetalhes().subscribe((response: any) => {
    //   console.log(response);
    //   this.pokemons = response.results;
    // });
  }

  pegarImagem(index: any) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;
  }

  public openDialog(index: any) {
    return this.pokemonService.openDialog(index);
  }

  changePage(event: any) {
    this.p = event;
  }

  // filtrarFogo(){
  //   this.pokemonsFogo = this.pokemons.filter((filtro:any) =>
  //   this.pokemons.genre)
  // }

  favoritar(nome: any) {
    this.favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');

    this.pokemonService.getDetails(nome).subscribe((response: any) => {
      //verificar se o objeto já existe no array
      if(this.favoritos.find(favorito => favorito.name === response.name)){
        //se já existir, remover o objeto
        this.favoritos = this.favoritos.filter(favorito => favorito.name !== response.name);
      }else{
        //se não existir, adicionar o objeto
        this.favoritos.push(response);
      }
      localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
      console.log(this.favoritos)

    });
  }

  pokemonsForType(name:string){
    this.pokemonService.getPokemonForType(name).subscribe((response:any) =>
    console.log(response.pokemon)
    );


  }

}

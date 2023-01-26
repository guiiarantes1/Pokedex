import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
})
export class FavoritosComponent implements OnInit {
  favoritos!: any[];
  p:number=1;
  totalFavoritos!:any;
  pokemonsFavoritos!:any[]

  constructor(public favoritosHome: HomeComponent, public pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.favoritos =JSON.parse(localStorage.getItem('favoritos') || '[]');
    this.totalFavoritos = this.favoritos.length;
    console.log(this.favoritos)
    console.log(this.totalFavoritos)

    // this.pokemonService.getDetails('charizard').subscribe((response: any) => {
    //   console.log(response);
    //   this.pokemonsFavoritos = response;
    //   console.log(this.pokemonsFavoritos);
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

  removerFavoritos(){
    localStorage.clear()
    window.location.reload();
  }
}

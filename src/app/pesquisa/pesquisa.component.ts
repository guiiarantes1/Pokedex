import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    filtro: '',
  });
  p: number = 1;
  nomePokemon: any;
  pokemons!:any[];
  favoritos!: any[];

  constructor( private formBuilder: FormBuilder,    public pokemonService: PokemonService,) { }

  ngOnInit(): void {

  }


  onSubmit() {
    this.nomePokemon = this.checkoutForm.value.filtro
    this.pokemonService.getDetails(this.nomePokemon).subscribe((response: any) => {
      this.pokemons = response;
      console.log(this.pokemons)
     });
      console.log(this.pokemons)
  }
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


  pegarImagem(index: any) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;
  }

  public openDialog(index: any) {
    return this.pokemonService.openDialog(index);
  }
}

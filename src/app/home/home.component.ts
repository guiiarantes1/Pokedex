import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numero!:number;
  filtro!:string;


  constructor(private router: Router, public pokemonService: PokemonService, private httpClient: HttpClient) { }


  ngOnInit(): void {
 
  }

  pegarImagem(index:any){
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
  }


}

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
  pokemons: Pokemon[] = []
  pokemon:any = Pokemon;


  constructor(private router: Router, public pokemonService: PokemonService) { }


  ngOnInit(): void {
  }



}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../model/pokemon-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemons: Pokemon[] = []

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  home() {
    this.router.navigate(['/home'])
  }

  favoritos() {
    this.router.navigate(['/favoritos'])
  }

}

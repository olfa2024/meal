import { Component, OnInit } from '@angular/core';
import { MealService } from './meal.service';  // Assurez-vous d'importer le bon chemin

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {
  meals: any[] = []; // Vous pouvez également utiliser une interface ou une classe pour un typage fort

  constructor(private mealService: MealService) { }

  ngOnInit(): void {
    this.loadMeals();
  }

  loadMeals(): void {
    this.mealService.getMeals().subscribe((meals: any[]) => {
      this.meals = meals;
    });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from '../app/hero-section/hero-section.component';
import { NavigationComponent } from '../app/navigation/navigation.component';
import { AboutMeComponent } from "../app/about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeroSectionComponent, NavigationComponent, AboutMeComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}

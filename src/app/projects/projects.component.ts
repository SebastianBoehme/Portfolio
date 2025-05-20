import { Component } from '@angular/core';

interface Tool {
  name: string;
  icon: string;
}

interface Project {
  number: string;
  name: string;
  description: string;
  tools: Tool[];
  short: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  hoveredProject: Project | null = null;
  hoveredIndex: number = -1;
  selectedProject: Project | null = null;

openOverlay(project: Project) {
  this.selectedProject = project;
  document.body.style.overflow = 'hidden';
}

closeOverlay() {
  this.selectedProject = null;
  document.body.style.overflow = '';
}


  projects: Project[] = [
    {
      number: '01',
      name: 'JOIN',
      description: 'Ein kollaboratives To-do-Tool nach dem Vorbild von Trello - Aufgaben erstellen, zuweisen und per Drag & Drop nach Status sortieren sowie Kontakte erstellen, bearbeiten und löschen.',
      tools: [
        { name: 'HTML', icon: '' },
        { name: 'CSS', icon: '' },
        { name: 'JavaScript', icon: '' },
        { name: 'Firebase', icon: '' }
      ],
      short: 'JS',
      image: '../../assets/img/projects-icons/join-image.png',
      link: ''
    },
    {
      number: '02',
      name: 'El Pollo Loco',
      description: 'Ein kleines, lustiges 2D Spiel mit einem Objektorientierten Ansatz. Begleite Pepe bei seinem Kampf gegen einen Hühneraufstand. Renne, springe und bewirf die verrückten Hennen mit Tabascoflaschen',
      tools: [
        { name: 'HTML', icon: 'assets/icons/angular.svg' },
        { name: 'CSS', icon: 'assets/icons/scss.svg' },
        { name: 'JavaScript', icon: 'assets/icons/typescript.svg' },
      ],
      short: 'JS',
      image: '../../assets/img/projects-icons/el-pollo-loco-image.png',
      link: ''
    }
  ];

}

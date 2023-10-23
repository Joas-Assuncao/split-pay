import { Component, OnInit } from '@angular/core';
import { IMenuItem } from 'src/app/models/menuItem';
import { SharedDataService } from 'src/app/services/sharedDataService.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  menuItems!: IMenuItem[];
  title!: string;

  constructor(private sharedService: SharedDataService) {}

  ngOnInit() {
    this.menuItems = [
      {
        name: 'Dashboard',
        icon: 'dashboard',
      },
      {
        name: 'Agenda',
        icon: 'event_available',
      },
      {
        name: 'Clientes',
        icon: 'person',
      },
      {
        name: 'Financeiro',
        icon: 'monetization_on',
      },
      {
        name: 'Pendências',
        icon: 'assignment',
      },
      {
        name: 'Relatórios',
        icon: 'description',
      },
      {
        name: 'Recursos Humanos',
        icon: 'recent_actors',
      },
      {
        name: 'Estoque',
        icon: 'local_grocery_store',
      },
      {
        name: 'Pastas',
        icon: 'folder',
      },
      {
        name: 'Configurações',
        icon: 'settings',
      },
      {
        name: 'Ajuda',
        icon: 'help_outline',
      },
    ];

    this.sharedService.getTitle$().subscribe((data) => {
      this.title = data;
    });
  }
}

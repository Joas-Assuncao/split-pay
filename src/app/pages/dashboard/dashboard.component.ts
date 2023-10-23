import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INotificationItem } from 'src/app/models/notificationItem';
import { SharedDataService } from 'src/app/services/sharedDataService.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  notifications!: INotificationItem[];

  constructor(
    private router: ActivatedRoute,
    private sharedService: SharedDataService
  ) {}

  ngOnInit(): void {
    this.router.data.subscribe((data) => {
      this.sharedService.setTitle(data['title'].replace('/', ''));
    });

    this.notifications = [
      {
        icon: 'people',
        name: 'Funcionários',
        notification: 13,
      },
      {
        icon: 'thumbs_up_down',
        name: 'Avaliações',
        notification: 13,
      },
      {
        icon: 'contact_mail',
        name: 'Clientes',
        notification: 13,
      },
      {
        icon: 'library_books',
        name: 'Exames',
        notification: 13,
      },
    ];
  }

  onClick() {
    alert('Sem dados para fazer o sistema funcionar');
  }
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from 'src/app/components/calendar/calendar.component';
import { NotificationComponent } from 'src/app/components/notification/notification.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent, NotificationComponent, CalendarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FullCalendarModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}

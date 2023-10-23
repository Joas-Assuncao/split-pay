import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private title = new BehaviorSubject<any>('');

  getTitle$() {
    return this.title.asObservable();
  }

  getTitle() {
    return this.title.getValue();
  }

  setTitle(title: any) {
    this.title.next(title);
  }
}

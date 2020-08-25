import { Component } from '@angular/core';

@Component({
  selector: 'master-detail-view01-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mdv01';
  links = [{ path: '/sounds', icon: 'volume_up', title: 'Sounds' }];
}

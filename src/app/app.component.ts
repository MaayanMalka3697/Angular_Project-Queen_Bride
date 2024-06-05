import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiceTypeComponent } from './service-type/service-type.component';
import { ServiceListComponent } from './service-list/service-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ServiceTypeComponent,ServiceListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Queen-Bride';
}

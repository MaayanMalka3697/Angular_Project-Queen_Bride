import { Component } from '@angular/core';
import { ServiceTypeComponent } from '../service-type/service-type.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [ServiceTypeComponent,CommonModule],
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.css'
})
export class ServiceListComponent {
arr=["a","b","c"];
  //arr= getServiceTypes();
}

import { Component, OnInit, signal } from '@angular/core';
import { ServiceData } from '../../services/service-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-services',
  imports: [CommonModule],
  templateUrl: './our-services.html',
  styleUrl: './our-services.scss'
})
export class OurServices implements OnInit {
  services = signal<any[]>([]);

  constructor(private serviceData: ServiceData) {}

  ngOnInit() {
    this.serviceData.getServices().subscribe({
      next: data => this.services.set(data),
      error: err => console.error('خطا در دریافت خدمات:', err)
    });
  }
}

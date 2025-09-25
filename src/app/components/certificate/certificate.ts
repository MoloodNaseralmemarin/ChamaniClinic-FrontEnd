import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

declare var bootstrap: any;

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificate.html',
  styleUrls: ['./certificate.scss']
})
export class Certificate implements OnInit, AfterViewInit, OnDestroy {
  images: string[] = [];
  currentImage: string = '';
  modal: any;
  swiper?: Swiper;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:5116/api/Certificates').subscribe(
      data => {
        this.images = data.map(item => item.imageUrl);
        this.initSwiper();
      },
      error => {
        console.error('خطا در دریافت اطلاعات:', error);
      }
    );
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const modalEl = document.getElementById('imageModal');
      if (modalEl) {
        this.modal = new bootstrap.Modal(modalEl);
      }
    }
  }

initSwiper() {
  if (!isPlatformBrowser(this.platformId)) return;
  if (this.swiper) this.swiper.destroy(true, true);

  setTimeout(() => {
    this.swiper = new Swiper('.mySwiper', {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 4,  // مقدار پیش‌فرض برای دسکتاپ
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 10,
        }
      }
    });
  }, 0);
}


  openModal(index: number) {
    this.currentImage = this.images[index];
    if (this.modal) {
      this.modal.show();
    }
  }

  ngOnDestroy() {
    if (this.swiper) {
      this.swiper.destroy();
    }
  }
}

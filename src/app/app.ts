import { Component, signal } from '@angular/core';
import { Banner } from './components/banner/banner';
import { About } from './components/about/about';
import { Blogs } from './components/blogs/blogs';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { OurServices } from './components/our-services/our-services';
import { Certificate } from "./components/certificate/certificate";

@Component({
  selector: 'app-root',
  imports: [About, Banner, Blogs, Footer, Header, OurServices, Footer, Certificate],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ChamaniClinic-Client');
}

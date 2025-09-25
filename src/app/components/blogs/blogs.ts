import { Component, OnInit } from '@angular/core';
import { BlogData } from '../../services/blog-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs.html',
  styleUrl: './blogs.scss'
})
export class Blogs  implements OnInit {
  blogs: any[] = [];

  constructor(private blogData: BlogData) {}

  ngOnInit() {
    this.blogData.getServices().subscribe(data => {
      this.blogs = data;
    });
  }
}

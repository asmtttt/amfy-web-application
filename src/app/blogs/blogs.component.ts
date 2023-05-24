import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  // variables

  searchText = "";
  filteredBlogs: any[] = [];
  blogs: any[] = [
    {
      img: "...",
    title: "Machine Learning",
    number: 1,
    content: "Read",
    date: "14.05.2023",
    topic: "Technology",
    writer: "Samet Öçsoy"
    },
    {
      img: "...",
      title: "Supervised Learning",
      number: 2,
      content: "Read",
      date: "24.03.2023",
      topic: "Artificial Intelligence",
      writer: "Samet Öçsoy"
    },
    {
      img: "...",
      title: "Deep Learning Deep Learning",
      number: 3,
      content: "Read",
      date: "12.01.2023",
      topic: "Computer",
      writer: "Samet Öçsoy"
    },
    {
      img: "...",
      title: "Deep Learning",
      number: 3,
      content: "Read",
      date: "12.01.2023",
      topic: "Computer",
      writer: "Samet Öçsoy"
    },
    {
      img: "...",
      title: "Deep Learning",
      number: 3,
      content: "Read",
      date: "12.01.2023",
      topic: "Computer",
      writer: "Samet Öçsoy"
    },
    {
      img: "...",
      title: "Deep Learning",
      number: 3,
      content: "Read",
      date: "12.01.2023",
      topic: "Computer",
      writer: "Samet Öçsoy"
    },
    {
      img: "...",
      title: "Deep Learning",
      number: 3,
      content: "Read",
      date: "12.01.2023",
      topic: "Computer",
      writer: "Samet Öçsoy"
    },
    {
      img: "...",
      title: "Deep Learning",
      number: 3,
      content: "Read",
      date: "12.01.2023",
      topic: "Computer",
      writer: "Samet Öçsoy"
    },
    {
      img: "...",
      title: "Deep Learning",
      number: 3,
      content: "Read",
      date: "12.01.2023",
      topic: "Computer",
      writer: "Samet Öçsoy"
    }
  ];

  constructor() { 
  }

  ngOnInit(): void {
    // default olarak filtrelenmiş veriler tüm veriler olarak geliyor
    this.filteredBlogs = this.blogs;
  }

  onSearch() {
    var filteredBlogs: any[] = [];
    filteredBlogs = this.blogs.filter(blog => blog.title.toLowerCase().includes(this.searchText.toLowerCase()));
    this.filteredBlogs = filteredBlogs;
  
  }

}



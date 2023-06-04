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

  // filter inputs variables
  filterWriterName: string = "";
  filterTopic: string = "";
  filterBlogNumber: string = "";
  filterCreatedDate: Date | null = null;

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

  clearAllFilters(){
    this.filterWriterName = "";
    this.filterTopic = "";
    this.filterBlogNumber = "";
    this.filterCreatedDate = null;
  }

  filterBlog(){
   var filterBlogRequest = {
    writer: this.filterWriterName,
    topic: this.filterTopic,
    blogNumber: this.filterBlogNumber,
    createdDate: this.filterCreatedDate,
   }
   
   // buraya servis kodları yazılacak ve içerisine request eklenecek.
  }

}



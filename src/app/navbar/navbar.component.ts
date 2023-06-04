import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { 

  }

  ngOnInit(): void {
  }

  navigateToPage(pageName: string){
    this.router.navigate(['/',pageName]);

  }

  changeBackgroundColor(color: any) {
    var btn: any = document.querySelector('.btn-primary');
    btn.style.backgroundColor = color;
  }


}

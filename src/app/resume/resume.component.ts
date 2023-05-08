import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  displayContent = "";

  constructor() { }

  ngOnInit(): void {
  }

  setDisplayContent(content: string){
    console.log("girdi");
    
    this.displayContent = content;
  }

}

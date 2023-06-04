import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @ViewChild('modalBody') modalBodyRef!: ElementRef;

  // variables
  projects = [
    {"title": "Document Distance", "detail": "Document similarity with cosine similarity alg.", "topic": "Text Mining", "subtopic": "Text-Similarity", "year": "2019"},
    {"title": "Pozitive-Negative-Question", "detail": "NLP based text classification application", "topic": "Artificial Intelligence", "subtopic": "Machine Learning", "year": "2022"},
    {"title": "Chat", "detail": "Messaging application between two users", "topic": "Web", "subtopic": "Frontend", "year": "2023"},
    {"title": "", "detail": "", "topic": "", "subtopic": "", "year": ""},
    {"title": "", "detail": "", "topic": "", "subtopic": "", "year": ""},
    {"title": "", "detail": "", "topic": "", "subtopic": "", "year": ""},
    {"title": "", "detail": "", "topic": "", "subtopic": "", "year": ""},
    {"title": "", "detail": "", "topic": "", "subtopic": "", "year": ""},
  
  ];

  messages = [
    {"id": "1", "content": "Selam", "senderRole": "user", "consigneeId":"1001", "senderName":"Samet Öçsoy", "date": "04.06.2023", "hour": "18:52"},
    {"id": "2", "content": "Selam", "senderRole": "system", "consigneeId":"1002", "senderName":"Samet Öçsoy", "date": "04.06.2023", "hour": "18:54"},
    {"id": "3", "content": "Naber", "senderRole": "user", "consigneeId":"1001", "senderName":"Samet Öçsoy", "date": "04.06.2023", "hour": "18:56"},
    {"id": "4", "content": "nasıl", "senderRole": "user", "consigneeId":"1001", "senderName":"Samet Öçsoy", "date": "04.06.2023", "hour": "18:56"},
    {"id": "5", "content": "gidiyor", "senderRole": "user", "consigneeId":"1001", "senderName":"Samet Öçsoy", "date": "04.06.2023", "hour": "18:56"},
    {"id": "6", "content": "iyi", "senderRole": "system", "consigneeId":"1002", "senderName":"Samet Öçsoy", "date": "04.06.2023", "hour": "18:57"},
    {"id": "7", "content": "peki ya senin?", "senderRole": "system", "consigneeId":"1002", "senderName":"Samet Öçsoy", "date": "04.06.2023", "hour": "18:57"},
    {"id": "8", "content": "benim de iyi", "senderRole": "user", "consigneeId":"1001", "senderName":"Samet Öçsoy", "date": "04.06.2023", "hour": "18:58"},
    {"id": "4", "content": "nasıl", "senderRole": "user", "consigneeId":"1001", "senderName":"Samet Öçsoy", "date": "04.06.2023", "hour": "18:56"},
    {"id": "5", "content": "gidiyor", "senderRole": "user", "consigneeId":"1001", "senderName":"Samet Öçsoy", "date": "04.06.2023", "hour": "18:56"},
    {"id": "6", "content": "iyi", "senderRole": "system", "consigneeId":"1002", "senderName":"Samet Öçsoy", "date": "04.06.2023", "hour": "18:57"},
    {"id": "7", "content": "peki ya senin?", "senderRole": "system", "consigneeId":"1002", "senderName":"Samet Öçsoy", "date": "04.06.2023", "hour": "18:57"},
    {"id": "8", "content": "benim de iyi", "senderRole": "user", "consigneeId":"1001", "senderName":"Samet Öçsoy", "date": "04.06.2023", "hour": "18:58"},{"id": "4", "content": "nasıl", "senderRole": "user", "consigneeId":"1001", "date": "04.06.2023", "hour": "18:56"},
    {"id": "5", "content": "gidiyor", "senderRole": "user", "consigneeId":"1001", "senderName":"Samet Öçsoy", "date": "04.06.2023", "hour": "18:56"},
    {"id": "6", "content": "iyi", "senderRole": "system", "consigneeId":"1002", "senderName":"Samet Öçsoy", "date": "04.06.2023", "hour": "18:57"},
    {"id": "7", "content": "peki ya senin? peki ya senin?peki ya senin?peki ya senin?peki ya senin?peki ya senin?peki ya senin?peki ya senin?peki ya senin?peki ya senin?peki ya senin?peki ya senin?", "senderRole": "system", "consigneeId":"1002",  "senderName":"Samet Öçsoy", "date": "04.06.2023", "hour": "18:57"},
    {"id": "8", "content": "benim de iyi", "senderRole": "user", "consigneeId":"1001", "senderName":"Samet Öçsoy", "date": "04.06.2023", "hour": "18:58"},
  ]

  textMessageChat: string = "";


  isClassActive = false;

  constructor() { }

  ngOnInit(): void {
   
  }

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    const modalBodyElement = this.modalBodyRef.nativeElement;
    modalBodyElement.scrollTop = modalBodyElement.scrollHeight;
  }
  
  changeInputVisible(){
    this.isClassActive = !this.isClassActive;
  }

  sendMessage(content: string){
    var message: any = {
      "id": "1", 
      "content": content, 
      "senderRole": "system", 
      "consigneeId":"1001", 
      "senderName":"Samet Öçsoy", 
      "date": "04.06.2023", 
      "hour": "18:52"
    };

    this.messages.push(message);
    this.textMessageChat = "";

  }


}

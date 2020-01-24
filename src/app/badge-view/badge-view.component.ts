import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-badge-view',
  templateUrl: './badge-view.component.html',
  styleUrls: ['./badge-view.component.css']
})
export class BadgeViewComponent implements OnInit {
   badgeImage1:string = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg";
   badgeImage2:string = "https://media.cntraveller.in/wp-content/uploads/2018/10/GettyImages-990972132-866x487.jpg"
   public isCollapsed = false;
   constructor(private modalService: NgbModal){
  }


  ngOnInit() {
  }

  openXl(content) {
    this.modalService.open(content, { size:'sm', backdropClass:'blur'});
  }
  openWithText(content1){
    this.modalService.open(content1 ,{size:'lg'});
  }

}

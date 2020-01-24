import { Component, OnInit ,Input} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../service/login.service';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-podium-feed',
  templateUrl: './podium-feed.component.html',
  styleUrls: ['./podium-feed.component.css']
})
export class PodiumFeedComponent implements OnInit {
  @Input() podiumData:any[]=[];
  @Input()  podiumGroupID:any[]=[];

  actualdata: any;
  [x: string]: any;
  isCollapsed = false;
   ///for view feed
  podiumuserId;
  podiumUserListData:any[] =[];
  constructor(private loginservice:LoginService,
              private postService:PostService) { 
       this.podiumuserId = localStorage.getItem('myUserId');
       //console.log(this.podiumuserId);
       //console.log(this.podiumGroupID);
    //  console.log(this.podiumData);
  }
  ngOnInit() {

  // //////for post
  this.postService.getTextPost()
  .subscribe(
    (response)=>{
      console.log(response);
      this.podiumUserListData = response;
      console.log(this.podiumUserListData);
    }
  )
  

  }
  images = [1, 2, 3,4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  getAndShowItems(){
    
  }
}

import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../service/login.service';
import { AngularFirestore} from 'angularfire2/firestore';
import { PostService } from '../service/post.service';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-view-podium',
  templateUrl: './view-podium.component.html',
  styleUrls: ['./view-podium.component.css']
})
export class ViewPodiumComponent implements OnInit{
  image:string = "../assets/2.jpg";
  public isCollapsed = false; //for collapsable comment
  // for media
  urls = [];
 // for files
  imageUrl = '';
  videoUrl = '';
  fileToUpload: File = null;

 //podiumUserdata:any[]= [];
 podiumUserdata:any[]=[];
 podiumUserId:any[]=[];
 
 
 actualdata;

////getting group id
groupUserId;


 // for posts
 post:any;



  images = [1, 2, 3,4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor(config: NgbModalConfig,
              private modalService: NgbModal,
              private afs: AngularFirestore,
              private loginservice: LoginService,
              private postService:PostService,
              private activaterdroute:ActivatedRoute,
              ) {

                config.backdrop = 'static';
                config.keyboard = false;
                
     //console.log(this.podiumUserId);
     //console.log(this.podiumUserdata);

     this.groupUserId = this.activaterdroute.snapshot.paramMap.get('id');
      localStorage.setItem('myUserId', this.groupUserId);
      
          }

  ngOnInit() {
  
    this.actualdata = this.loginservice.getData();
    this.actualdata.subscribe(
      (result) =>{
        this.actualdata = result;
        //console.log(this.actualdata);
        this.afs.collection("groups_data",ref => ref.where("users","array-contains",this.actualdata[0].user_id))
        .get().toPromise().then(snapshot => {
          snapshot.forEach(doc =>{
            console.log( this.podiumUserId.push(doc.id),'=>' , this.podiumUserdata.push(doc.data()));

          });
        }).catch(err =>{
          console.log('error occured'+ err);
        });

      }
    );
  
  //////for post
    this.postService.getTextPost()
    .subscribe(
      (response)=>{
        console.log(response);
        // this.podiumUserListData = response;
        // console.log(this.podiumUserListData);
      }
    )

  }
  
  // main code 
   open(content) {
    this.modalService.open(content);
   }

   openMedia(content1) {
    this.modalService.open(content1);
   }
   openFile(content2){
    this.modalService.open(content2);
   }
   openList(content3){
     this.modalService.open(content3);
   }
   openUserProfile(content4){
     this.modalService.open(content4);
   }

 // for previewing media
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = (event:any) => {
                  console.log(event.target.result);
                   this.urls.push(event.target.result);
                }

                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }

  changeFileName() {
    document.getElementById('fileUpload').click();
  }

  // for files

   handleFileInput(file: FileList) {
   this.fileToUpload = file.item(0);
     // show image//
   const reader = new FileReader();
   reader.onload = (event: any) => {
       this.imageUrl = event.target.result;
     };
   reader.readAsDataURL(this.fileToUpload);
   }

//// on clicking this will return the view feed 
   fetchGroupID(){
     
      //localStorage.setItem('mypodiumData',this.podiumUserdata);
      localStorage.setitem('myPodiumUserId',this.podiumUserId);
   }


}

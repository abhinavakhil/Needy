export interface Checklistmodels{
    date:string
}
export interface Filedetails{
    groupId:string
}
export interface Mediatypes{
    members:string
}
export interface MetaImageURls{
    polloptions:null,
    postId:null,
    privacy:number,
    time:string,
    timeInMills:number,
    title:string,
    type:number
}
export interface Urls{
    userId:string,
    userName:string,
    userPic:string,
}

export interface Post {
    checklistmodels:Checklistmodels[];
    filedetails: Filedetails[];
    mediatypes:Mediatypes[];
    metaImageURls:MetaImageURls[];
    uploadedFiles:[];
    uploadedImages:[];
    urls:Urls[];
    websiteTitles:[]
}


export const errorMessage=(message:string)=>{
    if(message==`E11000 duplicate key error collection: Second_Brain.contents index: link_1 dup key: { link: "https://www.youtube.com/watch?v=N0_9Q-G2KL4" }`){
        return "Link already exists"
    }else if(message==`E11000 duplicate key error collection: Second_Brain.contents index: title_1 dup key: { title: "Omegle clone" }`){
        return "Title already exists"
    }
}
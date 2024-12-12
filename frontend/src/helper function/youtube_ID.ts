export function getEmbedUrl(Url:string,type:string):string {
    if(type=="youtube"){
        const url = new URL(Url);
        let videoId:string|null = '';

        if (url.hostname.includes('youtube.com') && url.searchParams.has('v')) {
            videoId = url.searchParams.get('v');
        } else if (url.hostname.includes('youtu.be')) {
            videoId = url.pathname.slice(1);
        }

        return `https://www.youtube.com/embed/${videoId}`
    }else{
        return Url.replace("x", "twitter")
    }
}

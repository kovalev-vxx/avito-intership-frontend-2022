export const deltaTime = (unixTime:number) => {
    const seconds = Math.floor((new Date().valueOf() - unixTime * 1000) / 1000);

    switch(true){
        case(seconds < 60):
            return `${seconds} seconds ago`
        case(seconds < 3600):
            return `${Math.floor(seconds/60)} minutes ago`
        case(seconds < 3600*24):
            return `${Math.floor(seconds/3600)} hours ago`
        case(seconds >= 86400):
            return `${Math.floor(seconds/86400)} days ago`
        default:
            return ""
    }
}
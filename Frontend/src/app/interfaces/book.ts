export interface Book {
    _id?:string;
    title: string;
    desc: string;
    image: string;
    AuthorId:string;
    avgRating:number;
    shelve:string;
}
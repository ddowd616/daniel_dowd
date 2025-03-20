//javascript objects
export type Person = {
    fname:string;
    //can create optional attributes with a ?
    lname?:string;
    age:number;
    isMarried:boolean;
    children?: string [];
    getFullName:()=> string;
    getAge:(age:number,name:string)=>number;


}


//make it accessible
// export {Person};
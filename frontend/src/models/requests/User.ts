export interface UserSignup{
    firstName: string,
    lastName: string;
    emailAddress: string,
    phoneNumber: string,
    password:string,
    roleId:number    
}

export interface UserRequest{
    firstName: string,
    lastName: string,
    phoneNumber: string,
    emailAddress: string,  
}
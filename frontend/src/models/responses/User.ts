export interface UserResponse {
    userDetails:{
        id:number,
        username: string;
        emailAddress: string;
    }
    token: string;
    role: string;
  }
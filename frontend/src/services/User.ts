import axiosInstance from "../api/api";
import { UserSignup } from "../models/requests/User";
import { storeData, removeData } from "../hooks/idbHelpers";
import { UserResponse } from "../models/responses/User";


export const registerUser = async (payload: UserSignup, navigate: (path: string) => void) => {
    const url = axiosInstance.getUri() + "/api/v1/users/signup"
    try {
        const response = await fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(payload)
        }) 

        if (response.status === 200){
          console.log('Form submitted successfully', response.json());
          navigate("/login")

        }

        
        
      } catch (error) {
        console.error('Form submission error:', error);
      }
}

export const loginUser = async (emailAddress: string, password: string, navigate: (path: string) => void) => {
   const url = axiosInstance.getUri() + "/api/v1/users/login";
//    console.log(url);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
          { 
              emailAddress: emailAddress, 
              password: password 
          }),
    });

    if (!res.ok) {
      const errorMessage = `Error: ${res.status} - ${res.statusText}`;
      throw new Error(errorMessage);
    }

    const userdata: UserResponse = await res.json(); // Parse the response JSON
    // console.log("User data:", userdata);  // Add this for debugging

    // Store user info and token in IndexedDB
    await storeData('userInfo', userdata);
    await storeData('userToken', userdata.token);

    if (userdata.role === "CLIENT"){
      navigate("/dashboard")
    }

    return userdata
    

    // Navigate to appropriate dashboard
  //   navigate(userdata.is_manager ? '/manager-dashboard' : '/dashboard');
  } catch (error: unknown) {
    console.error('Login error:', error);
  } 
};

export const logoutUser = async (navigate: (path:string) => void) => {

  // Remove user info and token from IndexedDB
  await removeData('userInfo');
  await removeData('userToken');
  navigate("/");
};
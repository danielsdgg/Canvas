import axiosInstance from "../api/api";
import { UserRequest, UserSignup } from "../models/requests/User";
import { storeData, removeData } from "../hooks/idbHelpers";
import { UserDetailsResponse, UserResponse } from "../models/responses/User";

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

    if (userdata.userDetails.role === "STUDENT"){
      navigate("/dashboard")
    } else if (userdata.userDetails.role === 'ADMIN') {
      navigate("/admin-dashboard")
    } else if (userdata.userDetails.role === 'superadmin') {
      navigate("/superdashboard")
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

export const getEachUser = async (token: string | null): Promise<UserDetailsResponse | null> => {
  const url = axiosInstance.getUri() + "/api/v1/users/profile";
  console.log("Fetching user details from URL:", url);
  console.log("Authorization token:", token);

  try {
    const response = await fetch(url, {
      headers: token
        ? { 'Authorization': `Bearer ${token}` }
        : undefined,
    });

    if (!response.ok) {
      const errorMessage = `Error: ${response.status} - ${response.statusText}`;
      throw new Error(errorMessage);
    }

    const user: UserDetailsResponse = await response.json();
    return user;
  } catch (error) {
    console.error('Get user error:', error);
    throw error;
  }
};


export const editUser = async (token: string | null, userRequest: UserRequest) => {
  const url = axiosInstance.getUri() + "/api/v1/users";

  try{
    const response = await fetch(url, {
        method:'PUT',
        headers: {"Content-Type": 'application/json',
                  "Authorization":`Bearer ${token}`},
        body: JSON.stringify(userRequest)
    })
    
    if (!response.ok) {
      const errorMessage = `Error: ${response.status} - ${response.statusText}`;
      throw new Error(errorMessage);
    }

    
    return await response.json()

  }
  catch (error) {
    console.error('User edit error:', error);
  }
}
// src/components/Account.tsx
import React, { useContext, useEffect, useState } from "react";
import SideNav from "../../components/SideNav";
import { AuthContext } from "../../context/authContext";
import { getEachUser } from "../../services/User";
import { UserDetailsResponse } from "../../models/responses/User";
import axios from "axios";

const Account: React.FC = () => {
  const { userData, userToken } = useContext(AuthContext);
  const [profile, setProfile] = useState<UserDetailsResponse | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!userToken) {
          console.error("User token is missing.");
          return;
        }
        if (!userData?.userDetails?.id) {
          console.error("User ID is missing.");
          return;
        }
  
        console.log("Fetching details for user ID:", userData.userDetails.id);
  
        const response = await getEachUser(userToken, userData.userDetails.id);
        if (response) {
          setProfile(response);
          setFormValues({
            username: response.username || "",
            email: response.emailAddress || "",
            phone: response.phoneNumber || "",
          });
        }
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      }
    };
    fetchUser();
  }, [userData, userToken]);
  
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditProfile = async () => {
    if (!userData?.userDetails?.id || !userToken) return;
    try {
      const userId = userData.userDetails.id; // The ID of the user
      const url = `/api/v1/users/${userId}`;
      const response = await axios.put(
        url,
        {
          username: formValues.username,
          emailAddress: formValues.email,
          phoneNumber: formValues.phone,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      setProfile(response.data); // Update the profile with the new data
      setIsEditing(false); // Exit editing mode
      console.log("Profile updated successfully:", response.data);
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <>
      <SideNav />
      <div className="p-6 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-semibold mb-6">Account Details</h2>

        {/* Personal Details */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-semibold mb-4">Personal Details</h3>
          {isEditing ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-600 font-medium">Name</label>
                <input
                  type="text"
                  name="username"
                  value={formValues.username}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
              </div>
              <div>
                <label className="text-gray-600 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
              </div>
              <div>
                <label className="text-gray-600 font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
              </div>
              <div className="col-span-2 flex gap-4">
                <button
                  onClick={handleEditProfile}
                  className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition duration-200"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow hover:bg-gray-700 transition duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-600 font-medium">Name</label>
                <p className="text-gray-800">{profile?.username}</p>
              </div>
              <div>
                <label className="text-gray-600 font-medium">Email</label>
                <p className="text-gray-800">{profile?.emailAddress}</p>
              </div>
              <div>
                <label className="text-gray-600 font-medium">Phone</label>
                <p className="text-gray-800">{profile?.phoneNumber}</p>
              </div>
              <div>
                <label className="text-gray-600 font-medium">Role</label>
                <p className="text-gray-800">
                  {userData?.role === "CLIENT" ? "STUDENT" : "INSTRUCTOR"}
                </p>
              </div>
              <div>
                <label className="text-gray-600 font-medium">Joined Date</label>
                <p className="text-gray-800">
                  {profile?.createdAt
                    ? new Date(profile.createdAt).toLocaleString()
                    : "N/A"}
                </p>
              </div>
              <div className="col-span-2">
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-200"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Account;

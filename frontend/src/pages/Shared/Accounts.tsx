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
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(true); // Loading state

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

        setIsLoading(true); // Start loading when fetching
        const response = await getEachUser(userToken, userData.userDetails.id);
        if (response) {
          setProfile(response);
          setFormValues({
            firstName: response.firstName || "",
            lastName: response.lastName || "",
            email: response.emailAddress || "",
            phone: response.phoneNumber || "",
          });
        }
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      } finally {
        setIsLoading(false); // Stop loading once data is fetched
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
          firstName: formValues.firstName,
          lastName: formValues.lastName,
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
  console.log(profile)

  return (
    <>
  <SideNav />
  <div className="p-6 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen flex justify-center">
    <div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-lg">
      <header className="text-4xl font-bold text-center text-blue-700 mb-6 border-b-4 border-blue-300 pb-3">Account Details</header>

      {/* Personal Details */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-gray-200 p-3 rounded-md shadow-md">Personal Details</h3>
        {isLoading ? (
          <p className="text-gray-600 text-center">Loading...</p>
        ) : isEditing ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-700 font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formValues.firstName}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-gray-700 font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formValues.lastName}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-gray-700 font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formValues.phone}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-2 flex justify-center gap-6 mt-4">
              <button
                onClick={handleEditProfile}
                className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transform transition duration-300 hover:scale-105"
              >
                Save Changes
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transform transition duration-300 hover:scale-105"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-700 font-medium">First Name</label>
              <p className="text-gray-900 font-semibold">{profile?.firstName}</p>
            </div>
            <div>
              <label className="text-gray-700 font-medium">Last Name</label>
              <p className="text-gray-900 font-semibold">{profile?.lastName}</p>
            </div>
            <div>
              <label className="text-gray-700 font-medium">Email</label>
              <p className="text-gray-900 font-semibold">{profile?.emailAddress}</p>
            </div>
            <div>
              <label className="text-gray-700 font-medium">Phone</label>
              <p className="text-gray-900 font-semibold">{profile?.phoneNumber}</p>
            </div>
            <div>
              <label className="text-gray-700 font-medium">Role</label>
              <p className="text-gray-900 font-semibold">{userData?.role}</p>
            </div>
            <div>
              <label className="text-gray-700 font-medium">Joined Date</label>
              <p className="text-gray-900 font-semibold">
                {profile?.createdAt ? new Date(profile.createdAt).toLocaleString() : "N/A"}
              </p>
            </div>
            <div className="col-span-2 flex justify-center gap-6 mt-4">
              <button
                onClick={() => setIsEditing(true)}
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transform transition duration-300 hover:scale-105"
              >
                Edit Profile
              </button>
              <button
                onClick={() => alert("Change password functionality")}
                className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transform transition duration-300 hover:scale-105"
              >
                Change Password
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
</>
  );
};

export default Account;

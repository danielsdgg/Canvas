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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!userToken) {
          console.error("User token is missing.");
          return;
        }

        setIsLoading(true);
        const response = await getEachUser(userToken);
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
        setIsLoading(false);
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
      const userId = userData.userDetails.id;
      const url = `/api/v1/users`;
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
      setProfile(response.data);
      setIsEditing(false);
      console.log("Profile updated successfully:", response.data);
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };
  console.log(profile);

  return (
    <>
      <SideNav />
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-gray-800 to-gray-900 text-gray-100 p-4 sm:p-6 md:p-8 flex justify-center">
        <div className="max-w-4xl w-full bg-indigo-900/30 backdrop-blur-md shadow-xl rounded-xl p-6 sm:p-8 border border-indigo-500/20 transition-all duration-300 hover:shadow-2xl">
          <header className="relative text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-indigo-300 mb-6 sm:mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20 blur-2xl rounded-full -z-10"></div>
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 animate-fade-in">
              Profile
            </span>
          </header>

          {/* Personal Details */}
          <div className="bg-indigo-800/20 p-6 rounded-lg border border-indigo-500/30">
            <h3 className="text-lg underline sm:text-xl md:text-2xl font-bold text-center text-teal-400 mb-4 sm:mb-6 uppercase tracking-wide">
              Personal Details
            </h3>
            {isLoading ? (
              <p className="text-gray-300 text-center animate-pulse text-sm sm:text-base">
                Loading...
              </p>
            ) : isEditing ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="text-indigo-300 font-medium">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formValues.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-indigo-500/50 rounded-lg p-2 sm:p-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="text-indigo-300 font-medium">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formValues.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-indigo-500/50 rounded-lg p-2 sm:p-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="text-indigo-300 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-indigo-500/50 rounded-lg p-2 sm:p-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="text-indigo-300 font-medium">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-indigo-500/50 rounded-lg p-2 sm:p-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div className="col-span-1 sm:col-span-2 flex justify-center gap-4 sm:gap-6 mt-4">
                  <button
                    onClick={handleEditProfile}
                    className="px-4 sm:px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transform transition duration-300 hover:scale-105"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 sm:px-6 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transform transition duration-300 hover:scale-105"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="text-indigo-300 font-medium">First Name</label>
                  <p className="text-gray-200 font-semibold">{profile?.firstName}</p>
                </div>
                <div>
                  <label className="text-indigo-300 font-medium">Last Name</label>
                  <p className="text-gray-200 font-semibold">{profile?.lastName}</p>
                </div>
                <div>
                  <label className="text-indigo-300 font-medium">Email</label>
                  <p className="text-gray-200 font-semibold">{profile?.emailAddress}</p>
                </div>
                <div>
                  <label className="text-indigo-300 font-medium">Phone</label>
                  <p className="text-gray-200 font-semibold">{profile?.phoneNumber}</p>
                </div>
                <div>
                  <label className="text-indigo-300 font-medium">Role</label>
                  <p className="text-gray-200 font-semibold">{userData?.userDetails.role}</p>
                </div>
                <div>
                  <label className="text-indigo-300 font-medium">Joined Date</label>
                  <p className="text-gray-200 font-semibold">
                    {profile?.createdAt ? new Date(profile.createdAt).toLocaleString() : "N/A"}
                  </p>
                </div>
                <div className="col-span-1 sm:col-span-2 flex justify-center gap-4 sm:gap-6 mt-4">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-4 sm:px-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transform transition duration-300 hover:scale-105"
                  >
                    Edit Profile
                  </button>
                  <button
                    onClick={() => alert("Change password functionality")}
                    className="px-4 sm:px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transform transition duration-300 hover:scale-105"
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
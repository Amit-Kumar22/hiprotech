"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail } from "@/app/redux/slices/authSlice";
// import withAuth from "@/app/components/withAuth"; // Disabled: page is now public
import { FiUser, FiMail, FiPhone, FiCalendar, FiMapPin, FiHome } from "react-icons/fi";

function ProfilePage() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    let token = null;
    if (typeof window !== "undefined") {
      token = localStorage.getItem("token");
      if (!token) {
        const match = document.cookie.match(/token=([^;]+)/);
        token = match ? match[1] : null;
      }
    }
    if (token) {
      dispatch(getUserDetail(token));
    }
  }, [dispatch]);

  console.log("User data:", user ? user.userDetail : null);

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
  
  if (error) return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    </div>
  );

  if (!user) return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative">
        No user data found.
      </div>
    </div>
  );

  // Format date of birth for display
  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const userDetail = user.userDetail || {};

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          {/* Profile Header */}
          <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-gray-600 to-gray-800">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-16 w-16 rounded-full bg-white flex items-center justify-center">
                <FiUser className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-white">
                  {userDetail.firstName || userDetail.username} {userDetail.lastName}
                </h1>
                <p className="text-blue-100">{userDetail.email}</p>
              </div>
            </div>
          </div>
          
          {/* Profile Details */}
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              {/* Personal Information Section */}
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-gray-50">
                <dt className="text-sm font-medium text-gray-500">
                  Personal Information
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-gray-400">
                        <FiMail />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-500">Email address</p>
                        <p className="text-sm font-medium text-gray-900">{userDetail.email || "-"}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-gray-400">
                        <FiPhone />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-500">Mobile</p>
                        <p className="text-sm font-medium text-gray-900">{userDetail.mobile || "-"}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-gray-400">
                        <FiCalendar />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-500">Date of Birth</p>
                        <p className="text-sm font-medium text-gray-900">{formatDate(userDetail.dateOfBirth)}</p>
                      </div>
                    </div>
                  </div>
                </dd>
              </div>
              
              {/* Address Section */}
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-gray-400">
                      <FiHome />
                    </div>
                    <div className="ml-3 space-y-1">
                      <p className="text-sm font-medium text-gray-900">{userDetail.address || "-"}</p>
                      <p className="text-sm text-gray-500">
                        {[userDetail.city, userDetail.state, userDetail.country].filter(Boolean).join(', ')}
                      </p>
                      {userDetail.zipCode && (
                        <p className="text-sm text-gray-500">ZIP: {userDetail.zipCode}</p>
                      )}
                    </div>
                  </div>
                </dd>
              </div>
              
              {/* Additional Information Section */}
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-gray-50">
                <dt className="text-sm font-medium text-gray-500">
                  Account Information
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-gray-400">
                      <FiUser />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-500">Username</p>
                      <p className="text-sm font-medium text-gray-900">{userDetail.username || "-"}</p>
                    </div>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
          
          {/* Action Buttons */}
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-blue-700 focus:outline-none"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
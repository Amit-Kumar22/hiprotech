"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup, verifyOtp, clearError, clearStatus } from "../redux/slices/authSlice";
import { useToast } from "../components/Toast";
import Link from "next/link";
import Image from "next/image";
import { getImagePath } from "@/app/utils/getImagePath";

const initialForm = {
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  mobile: "",
  dateOfBirth: "",
  address: "",
  city: "",
  state: "",
  country: "",
  zipCode: "",
  password: "",
  // removed otp
};

export default function SignupPage() {
  const dispatch = useDispatch();
  const { loading, error: globalError, otpSent, signupSuccess, tempUser } = useSelector((state) => state.auth);
  const { showToast } = useToast();
  const [form, setForm] = useState(initialForm);
  const [currentStep, setCurrentStep] = useState(1); // 1: Personal info, 2: Address, 3: OTP
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // removed handleSendOtp

  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(clearError());
    setLocalError("");
    // Validate all fields before registration
    for (const key of Object.keys(form)) {
      if (!form[key]) {
        showToast('Please fill all fields before completing registration.', 'error');
        return;
      }
    }
    await dispatch(signup(form));
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setOtpError("");
    if (!otp.trim()) {
      setOtpError("Please enter the OTP sent to your email.");
      return;
    }
    if (!tempUser || !tempUser.email) {
      setOtpError("Missing user data. Please try signing up again.");
      return;
    }
    await dispatch(verifyOtp({ email: tempUser.email, otp, userData: tempUser }));
  };

  // Show toast for global error/success
  useEffect(() => {
    if (globalError) {
      showToast(typeof globalError === 'object' ? globalError.message || JSON.stringify(globalError) : globalError, 'error');
      dispatch(clearError());
    }
  }, [globalError, showToast, dispatch]);

  useEffect(() => {
    if (signupSuccess) {
      showToast('Registration successful! You can now login.', 'success');
      dispatch(clearStatus());
    }
  }, [signupSuccess, showToast, dispatch]);

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Left side - Image */}
            <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 p-0 hidden lg:flex flex-col justify-center items-center relative min-h-[32rem]">
              <Image
                src={getImagePath("/RobotSign.jpg")}
                alt="Robotics Illustration"
                fill
                className="object-cover absolute inset-0 w-full h-full z-0"
                priority
              />
              {/* <div className="relative z-10 flex flex-col justify-center items-center w-full h-full p-12">
                <h2 className="mt-8 text-2xl font-bold text-black text-center drop-shadow-lg">
                  Join Our Robotics Community
                </h2>
                <p className="mt-2 text-gray-500 text-center drop-shadow-lg">
                  Where innovation meets intelligent automation
                </p>
              </div> */}
            </div>

            {/* Right side - Signup Form */}
            <div className="lg:w-1/2 p-8 sm:p-12">
              <div className="flex justify-center lg:hidden mb-8">
                <div className="relative w-32 h-32">
                  <Image
                    src="https://assets.website-files.com/5f6294c0c7a8cdd643b1c820/60d35967e64d6d4b7c0055f3_robot-illustration.png"
                    alt="Robotics Illustration"
                    width={500}
                    height={500}
                    className="object-contain"
                  />
                </div>
              </div>

              <h2 className="text-3xl font-extrabold text-gray-900 text-center">
                Create your account
              </h2>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Sign in
                </Link>
              </p>

              {/* Progress Steps */}
              <div className="mt-6">
                <nav className="flex items-center justify-center" aria-label="Progress">
                  <ol className="flex items-center space-x-5">
                    {[1, 2, 3].map((step) => (
                      <li key={step}>
                        {step < currentStep ? (
                          <div className="block w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
                        ) : step === currentStep ? (
                          <div className="relative flex items-center justify-center">
                            <span className="absolute flex p-2.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            </span>
                            <span className="relative block w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
                          </div>
                        ) : (
                          <div className="block w-2.5 h-2.5 bg-gray-200 rounded-full"></div>
                        )}
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>



              {signupSuccess ? (
                <div className="mt-6 text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-3 text-lg font-medium text-gray-900">Registration successful!</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    You can now{" "}
                    <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                      login to your account
                    </Link>
                    .
                  </p>
                </div>
              ) : (
                <>
                  {/* OTP Step */}
                  {otpSent ? (
                    <form onSubmit={handleOtpSubmit} className="mt-6 space-y-6">
                      <h3 className="text-lg font-medium text-gray-900 text-center">Verify OTP</h3>
                      <p className="text-sm text-gray-600 text-center">An OTP has been sent to your email. Please enter it below to complete registration.</p>
                      <div className="flex flex-col items-center space-y-4">
                        <input
                          type="text"
                          value={otp}
                          onChange={e => setOtp(e.target.value)}
                          maxLength={6}
                          className="mt-2 block w-40 border border-gray-300 rounded-md shadow-sm py-2 px-3 text-center text-lg tracking-widest focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter OTP"
                          autoFocus
                        />
                        {otpError && <div className="text-red-500 text-sm">{otpError}</div>}
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          disabled={loading}
                        >
                          Verify OTP
                        </button>
                      </div>
                    </form>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                      {/* Step 1: Personal Information */}
                      {currentStep === 1 && (
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                First Name
                              </label>
                              <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                            <div>
                              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                Last Name
                              </label>
                              <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                            <div>
                              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Username
                              </label>
                              <input
                                type="text"
                                id="username"
                                name="username"
                                value={form.username}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                            <div>
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                              </label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                            <div>
                              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                                Mobile Number
                              </label>
                              <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                value={form.mobile}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                            <div>
                              <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                                Date of Birth
                              </label>
                              <input
                                type="date"
                                id="dateOfBirth"
                                name="dateOfBirth"
                                value={form.dateOfBirth}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <button
                              type="button"
                              onClick={nextStep}
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Step 2: Address Information */}
                      {currentStep === 2 && (
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium text-gray-900">Address Information</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="sm:col-span-2">
                              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                Street Address
                              </label>
                              <input
                                type="text"
                                id="address"
                                name="address"
                                value={form.address}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                            <div>
                              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                City
                              </label>
                              <input
                                type="text"
                                id="city"
                                name="city"
                                value={form.city}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                            <div>
                              <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                State/Province
                              </label>
                              <input
                                type="text"
                                id="state"
                                name="state"
                                value={form.state}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                            <div>
                              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                                ZIP/Postal Code
                              </label>
                              <input
                                type="text"
                                id="zipCode"
                                name="zipCode"
                                value={form.zipCode}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                            <div>
                              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                Country
                              </label>
                              <input
                                type="text"
                                id="country"
                                name="country"
                                value={form.country}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                            <div>
                              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                              </label>
                              <div className="mt-1 relative rounded-md shadow-sm">
                                <input
                                  id="password"
                                  name="password"
                                  type={showPassword ? "text" : "password"}
                                  value={form.password}
                                  onChange={handleChange}
                                  required
                                  className="block w-full pr-10 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                  <button
                                    type="button"
                                    className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => setShowPassword(!showPassword)}
                                  >
                                    {showPassword ? (
                                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                      </svg>
                                    ) : (
                                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                      </svg>
                                    )}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between">
                            <button
                              type="button"
                              onClick={prevStep}
                              className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              Back
                            </button>
                            <button
                              type="submit"
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              Signup
                            </button>
                          </div>
                        </div>
                      )}

                      {/* OTP step handled above. */}
                    </form>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
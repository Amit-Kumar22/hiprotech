"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { login, clearError, forgotPassword, resetPassword } from "../redux/slices/authSlice";
import Link from "next/link";
import Image from "next/image";


export default function Page() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error, token } = useSelector((state) => state.auth);
  const [form, setForm] = useState({ username: "", password: "" });
  const [showForgot, setShowForgot] = useState(false);
  // Redirect to home if already logged in (Redux or storage)
  useEffect(() => {
    // Check Redux token
    if (token) {
      router.replace("/");
      return;
    }
    // Check localStorage/sessionStorage for persisted token (for browser back)
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token") || sessionStorage.getItem("token");
      if (storedToken) {
        router.replace("/");
      }
    }
  }, [token, router]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form));
  };

  return (
    <>
      <div className="main-container min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Left side - Image */}
            <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 p-0 hidden lg:flex flex-col justify-center items-center relative min-h-[32rem]">
              <Image
                src="/RobotLogin.jpg"
                alt="Robotics Illustration"
                fill
                className="object-cover absolute inset-0 w-full h-full z-0"
                priority
              />
              {/* <div className="relative z-10 flex flex-col justify-center items-center w-full h-full p-12">
                <h2 className="mt-8 text-2xl font-bold text-white text-center drop-shadow-lg">
                  Welcome to the Future
                </h2>
                <p className="mt-2 text-blue-100 text-center drop-shadow-lg">
                  Where robotics meets intelligent automation
                </p>
              </div> */}
            </div>

            {/* Right side - Login Form */}
            <div className="lg:w-1/2 p-8 sm:p-12">
              <div className="flex justify-center lg:hidden mb-8">
                <div className="relative w-32 h-32">
                  {/* <Image
                    src="/RobotSign.avif"
                    alt="Robotics Illustration"
                    width={500}
                    height={500}
                    className="object-contain"
                  /> */}
                </div>
              </div>

              <h2 className="text-3xl font-extrabold text-gray-900 text-center">
                Sign in to your account
              </h2>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Or{" "}
                <Link
                  href="/signup"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  create a new account
                </Link>
              </p>

              {/* Error messages are now shown via Toast */}

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="rounded-md shadow-sm space-y-4">
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Username
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        id="username"
                        name="username"
                        type="text"
                        value={form.username}
                        onChange={handleChange}
                        required
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 transition duration-150 ease-in-out"
                        placeholder="Enter your username"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 transition duration-150 ease-in-out"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <button
                      type="button"
                      onClick={() => setShowForgot(true)}
                      className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                    >
                      Forgot your password?
                    </button>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out ${loading ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Signing in...
                      </>
                    ) : (
                      "Sign in"
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div>
                    <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  <div>
                    <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showForgot && <ForgotPasswordFlowModal onClose={() => setShowForgot(false)} />}
    </>
  );
}


// Multi-step forgot password modal flow
function ForgotPasswordFlowModal({ onClose }) {
  const dispatch = useDispatch();
  const { loading, resetSuccess } = useSelector((state) => state.auth);
  const [step, setStep] = useState(1); // 1: email, 2: otp, 3: reset
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Step 1: Send reset link (send OTP)
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    dispatch(clearError());
    dispatch(forgotPassword(email)).then((res) => {
      if (!res.error) setStep(2);
    });
  };

  // Step 2: Verify OTP (frontend only, backend will check on reset)
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (!otp || otp.length < 4) return;
    setOtpVerified(true);
    setStep(3);
  };

  // Step 3: Reset password
  const handleResetSubmit = (e) => {
    e.preventDefault();
    dispatch(clearError());
    if (newPassword !== confirmPassword) {
      if (typeof window !== 'undefined' && window.toast) {
        window.toast("Passwords do not match", "error");
      }
      return;
    }
    dispatch(resetPassword({ email, otp, newPassword }));
  };

  // Close modal on success
  if (resetSuccess) {
    setTimeout(() => {
      onClose();
      dispatch(clearError());
    }, 1500);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 z-40 bg-black/60 transition-opacity"
        aria-hidden="true"
        onClick={onClose}
      ></div>
      <div className="relative z-50 w-full max-w-md mx-auto">
        <div className="bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:p-6">
          <div>
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
              <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div className="mt-3 text-center sm:mt-5">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {step === 1 && "Reset your password"}
                {step === 2 && "Enter OTP"}
                {step === 3 && "Set new password"}
              </h3>
              <div className="mt-2">
                {step === 1 && (
                  <form onSubmit={handleEmailSubmit} className="mt-4">
                    <p className="text-sm text-gray-500 mb-2">Enter your email address and we&apos;ll send you an OTP to reset your password.</p>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border mb-4"
                      placeholder="you@example.com"
                      required
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className={`inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                    >
                      {loading ? "Sending..." : "Send reset link"}
                    </button>
                  </form>
                )}
                {step === 2 && (
                  <form onSubmit={handleOtpSubmit} className="mt-4">
                    <p className="text-sm text-gray-500 mb-2">Enter the OTP sent to your email.</p>
                    <input
                      type="text"
                      name="otp"
                      id="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border mb-4 text-center tracking-widest"
                      placeholder="Enter OTP"
                      required
                    />
                    <button
                      type="submit"
                      className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                    >
                      Verify OTP
                    </button>
                  </form>
                )}
                {step === 3 && (
                  <form onSubmit={handleResetSubmit} className="mt-4">
                    <p className="text-sm text-gray-500 mb-2">Enter your new password below.</p>
                    <input
                      type="password"
                      name="newPassword"
                      id="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border mb-2"
                      placeholder="New password"
                      required
                    />
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border mb-4"
                      placeholder="Confirm password"
                      required
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className={`inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                    >
                      {loading ? "Submitting..." : "Submit"}
                    </button>
                  </form>
                )}
                {resetSuccess && (
                  <p className="text-green-600 mt-4">Password reset successful! You can now log in.</p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
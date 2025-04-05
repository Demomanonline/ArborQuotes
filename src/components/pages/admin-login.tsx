"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "../../../supabase/auth";
import { checkSupabaseConnection } from "../../../supabase/supabase";
import { Home, AlertTriangle } from "lucide-react";
import Header from "@/components/ui/header";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AdminLoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [connectionChecked, setConnectionChecked] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { signIn, signUp } = useAuth();

  // Check connection status on component mount
  useEffect(() => {
    const checkConnection = async () => {
      try {
        console.log("Testing Supabase connection...");
        const isConnected = await checkSupabaseConnection();
        console.log("Connection test result:", isConnected);
        setIsOffline(!isConnected);
      } catch (error) {
        console.error("Connection test error:", error);
        setIsOffline(true);
      } finally {
        setConnectionChecked(true);
      }
    };

    checkConnection();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Attempting login with email:", email);

      // Use Supabase auth
      const { data, error } = await signIn(email, password);

      if (error) {
        throw error;
      }

      console.log("Login successful:", data);

      // Set a session in localStorage to maintain login state
      localStorage.setItem("adminAuthenticated", "true");

      toast({
        title: "Login successful",
        description: "Welcome to the admin dashboard",
      });

      navigate("/admin-dashboard");
    } catch (error: any) {
      console.error("Login error:", error);

      // Check if it's a connection error
      if (
        error?.message?.includes("Failed to fetch") ||
        error?.code === "NETWORK_ERROR" ||
        error?.message?.includes("ERR_NAME_NOT_RESOLVED")
      ) {
        toast({
          title: "Connection Error",
          description:
            "Unable to connect to authentication server. Please check your internet connection and try again.",
          variant: "destructive",
          duration: 10000,
        });
      } else {
        toast({
          title: "Login failed",
          description: error?.message || "Invalid email or password",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Attempting registration with email:", email);

      // Validate password
      if (password.length < 6) {
        toast({
          title: "Invalid Password",
          description: "Password must be at least 6 characters long",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      // Use Supabase auth
      const result = await signUp(email, password, fullName);
      console.log("Registration result:", result);

      // Check if user was created successfully
      if (result.data && result.data.user) {
        console.log("User created successfully:", result.data.user);

        toast({
          title: "Registration successful",
          description: result.data.session
            ? "You are now logged in!"
            : "Please check your email to verify your account.",
          duration: 5000,
        });

        // If auto-confirmed (no email verification required)
        if (result.data.session) {
          localStorage.setItem("adminAuthenticated", "true");
          navigate("/admin-dashboard");
          return;
        }

        // Switch to login view after successful registration
        setIsLogin(true);
      } else {
        // Handle case where registration was successful but no user was returned
        console.warn("Registration completed but no user returned:", result);
        toast({
          title: "Registration completed",
          description: "You can now log in with your credentials.",
          duration: 5000,
        });
        setIsLogin(true);
      }
    } catch (error: any) {
      console.error("Registration error:", error);

      // Check if it's a connection error
      if (
        error?.message?.includes("Failed to fetch") ||
        error?.code === "NETWORK_ERROR" ||
        error?.message?.includes("ERR_NAME_NOT_RESOLVED")
      ) {
        toast({
          title: "Connection Error",
          description:
            "Unable to connect to authentication server. Please check your internet connection and try again.",
          variant: "destructive",
          duration: 10000,
        });
      } else {
        toast({
          title: "Registration failed",
          description:
            error?.message || "Please check your information and try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {isOffline && connectionChecked && (
            <Alert variant="destructive" className="mb-4">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Connection Error</AlertTitle>
              <AlertDescription>
                Unable to connect to the authentication server. Please check
                your internet connection and try again.
              </AlertDescription>
            </Alert>
          )}

          <Card>
            <CardHeader className="space-y-1">
              <div className="flex justify-between items-center">
                <CardTitle className="text-2xl font-bold">
                  {isLogin ? "Admin Login" : "Admin Registration"}
                </CardTitle>
                <Link
                  to="/"
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Return to home page"
                >
                  <Home className="h-5 w-5 text-gray-700" />
                </Link>
              </div>
              <CardDescription>
                {isLogin
                  ? "Enter your credentials to access the admin dashboard"
                  : "Create a new admin account"}
              </CardDescription>
            </CardHeader>

            {isLogin ? (
              <form onSubmit={handleLogin}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="admin@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="password">Password</Label>
                      <Link
                        to="/forgot-password"
                        className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-key-round"
                        >
                          <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
                          <circle cx="16.5" cy="7.5" r=".5" />
                        </svg>
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                  <div className="text-sm text-center text-gray-600">
                    Need an admin account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsLogin(false)}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Register here
                    </button>
                  </div>
                </CardFooter>
              </form>
            ) : (
              <form onSubmit={handleRegister}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="admin@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Password must be at least 6 characters
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Registering..." : "Register"}
                  </Button>
                  <div className="text-sm text-center text-gray-600">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsLogin(true)}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Login here
                    </button>
                  </div>
                </CardFooter>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}

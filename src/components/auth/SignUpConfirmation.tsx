import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { SEO } from "@/components/ui/seo";

export default function SignUpConfirmation() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SEO
        title="Account Created Successfully | Arbor Card Quotes"
        description="Your account has been created successfully. Please check your email to verify your account."
      />
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-4 flex justify-center">
          <div className="bg-white rounded-xl shadow-sm p-8 w-full max-w-md text-center border border-gray-100">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">
              Account Created Successfully
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for signing up! We've sent a confirmation email to your
              inbox. Please check your email and follow the instructions to
              verify your account.
            </p>
            <p className="text-gray-500 text-sm mb-6">
              If you don't see the email, please check your spam folder or
              contact support.
            </p>
            <Button
              asChild
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Link to="/admin-login">Go to Login</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

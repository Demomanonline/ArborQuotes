import ForgotPasswordForm from "../auth/ForgotPasswordForm";
import Header from "../ui/header";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex justify-center items-center min-h-[calc(100vh-80px)] px-4">
        <ForgotPasswordForm />
      </div>
    </div>
  );
}

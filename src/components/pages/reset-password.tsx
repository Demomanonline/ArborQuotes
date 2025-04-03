import ResetPasswordForm from "../auth/ResetPasswordForm";
import Header from "../ui/header";

export default function ResetPassword() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex justify-center items-center min-h-[calc(100vh-80px)] px-4">
        <ResetPasswordForm />
      </div>
    </div>
  );
}

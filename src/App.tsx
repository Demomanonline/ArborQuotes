import { Suspense } from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
import routes from "tempo-routes";
import Success from "./components/pages/success";
import Home from "./components/pages/home";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminLoginPage from "./components/pages/admin-login";
import LeadDetails from "./components/admin/LeadDetails";
import LeadManagement from "./components/admin/LeadManagement";
import SettingsPage from "./components/admin/SettingsPage";
import ContactLeads from "./components/admin/ContactLeads";
import ContactDetail from "./components/admin/ContactDetail";
import { Toaster } from "./components/ui/toaster";
import { LoadingScreen } from "./components/ui/loading-spinner";
import AdminLayout from "./components/admin/layout/AdminLayout";
import Dashboard from "./components/admin/Dashboard";
import SignUpConfirmation from "./components/auth/SignUpConfirmation";
import PasswordResetConfirmation from "./components/auth/PasswordResetConfirmation";
import ForgotPassword from "./components/pages/forgot-password";
import ResetPassword from "./components/pages/reset-password";
import { NotificationProvider } from "./components/admin/NotificationProvider";
import { AuthProvider } from "../supabase/auth";
import NotFoundPage from "./components/pages/404";

// Import all the new pages
import AboutUs from "./components/pages/about-us";
import BlogIndex from "./components/pages/blog/index";
import ChoosingRightCardTerminal from "./components/pages/blog/choosing-right-card-terminal";
import ReducePaymentProcessingFees from "./components/pages/blog/reduce-payment-processing-fees";
import ContactlessPaymentTrends from "./components/pages/blog/contactless-payment-trends";
import MobilePaymentSecurity from "./components/pages/blog/mobile-payment-security";
import RestaurantPaymentSolutions from "./components/pages/blog/restaurant-payment-solutions";
import EcommercePaymentGateways from "./components/pages/blog/ecommerce-payment-gateways";
import ContactUs from "./components/pages/contact-us";
import PrivacyPolicy from "./components/pages/privacy-policy";
import TermsOfService from "./components/pages/terms-of-service";
import CookiePolicy from "./components/pages/cookie-policy";
import GdprCompliance from "./components/pages/gdpr-compliance";
import Legal from "./components/pages/legal";
import CountertopTerminals from "./components/pages/services/countertop-terminals";
import PortableTerminals from "./components/pages/services/portable-terminals";
import MobileCardReaders from "./components/pages/services/mobile-card-readers";
import PosSystems from "./components/pages/services/pos-systems";
import OnlinePayments from "./components/pages/services/online-payments";
import DojoRestaurantApp from "./components/pages/services/dojo-restaurant-app";
import ServicesIndex from "./components/pages/services";

function AppRoutes() {
  // Use Tempo routes if in Tempo environment
  const tempoRoutesElement =
    import.meta.env.VITE_TEMPO === "true" ? useRoutes(routes) : null;

  return (
    <NotificationProvider>
      {tempoRoutesElement}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route
          path="/admin-dashboard"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/admin-dashboard/leads"
          element={
            <AdminLayout>
              <LeadManagement />
            </AdminLayout>
          }
        />
        <Route
          path="/admin-dashboard/leads/:leadId"
          element={
            <AdminLayout>
              <LeadDetails />
            </AdminLayout>
          }
        />
        <Route
          path="/admin-dashboard/settings"
          element={
            <AdminLayout>
              <SettingsPage />
            </AdminLayout>
          }
        />
        <Route
          path="/admin-dashboard/contacts"
          element={
            <AdminLayout>
              <ContactLeads />
            </AdminLayout>
          }
        />
        <Route
          path="/admin-dashboard/contacts/:contactId"
          element={
            <AdminLayout>
              <ContactDetail />
            </AdminLayout>
          }
        />
        <Route path="/success" element={<Success />} />

        {/* Auth pages */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Service pages */}
        <Route path="/services" element={<ServicesIndex />} />
        <Route
          path="/services/countertop-terminals"
          element={<CountertopTerminals />}
        />
        <Route
          path="/services/portable-terminals"
          element={<PortableTerminals />}
        />
        <Route
          path="/services/mobile-card-readers"
          element={<MobileCardReaders />}
        />
        <Route path="/services/pos-systems" element={<PosSystems />} />
        <Route path="/services/online-payments" element={<OnlinePayments />} />
        <Route
          path="/services/dojo-restaurant-app"
          element={<DojoRestaurantApp />}
        />

        {/* Company pages */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route
          path="/blog/choosing-right-card-terminal"
          element={<ChoosingRightCardTerminal />}
        />
        <Route
          path="/blog/reduce-payment-processing-fees"
          element={<ReducePaymentProcessingFees />}
        />
        <Route
          path="/blog/contactless-payment-trends"
          element={<ContactlessPaymentTrends />}
        />
        <Route
          path="/blog/mobile-payment-security"
          element={<MobilePaymentSecurity />}
        />
        <Route
          path="/blog/restaurant-payment-solutions"
          element={<RestaurantPaymentSolutions />}
        />
        <Route
          path="/blog/ecommerce-payment-gateways"
          element={<EcommercePaymentGateways />}
        />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Legal pages */}
        <Route path="/legal" element={<Legal />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/gdpr-compliance" element={<GdprCompliance />} />

        {/* Auth confirmation pages */}
        <Route path="/signup-confirmation" element={<SignUpConfirmation />} />
        <Route
          path="/password-reset-confirmation"
          element={<PasswordResetConfirmation />}
        />

        {/* Add a catch-all route for Tempo */}
        {import.meta.env.VITE_TEMPO === "true" && (
          <Route path="/tempobook/*" element={null} />
        )}

        {/* 404 catch-all route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </NotificationProvider>
  );
}

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<LoadingScreen text="Loading application..." />}>
        <AppRoutes />
        <Toaster />
      </Suspense>
    </AuthProvider>
  );
}

export default App;

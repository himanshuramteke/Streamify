import { Route, Routes } from "react-router"
import { HomePage } from "./pages/HomePage"
import { LoginPage } from "./pages/LoginPage"
import { NotificationsPage } from "./pages/NotificationsPage"
import { SignupPage } from "./pages/SignUpPage"
import { ChatPage } from "./pages/ChatPage"
import { CallPage } from "./pages/CallPage"
import { OnboardingPage } from "./pages/OnboardingPage"
import { Toaster } from "react-hot-toast"

const App = () => {
  
  return (
    <div className="h-screen" data-theme="coffee">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/call" element={<CallPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
      </Routes>

      <Toaster />
    </div>
  )
}

export default App
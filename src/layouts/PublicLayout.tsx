import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Home = lazy(() => import('../pages/Home'));
const LearningMaterials = lazy(() => import('../pages/LearningMaterials'));
const ToolsGuide = lazy(() => import('../pages/ToolsGuide'));
const PromptEvalHub = lazy(() => import('../pages/prompt-eval/PromptEvalHub'));
const PromptPractice = lazy(() => import('../pages/prompt-eval/PromptPractice'));
const PromptWorkshop = lazy(() => import('../pages/prompt-eval/PromptWorkshop'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const CommunityHub = lazy(() => import('../pages/community/CommunityHub'));
const Board = lazy(() => import('../pages/community/Board'));
const BoardDetail = lazy(() => import('../pages/community/BoardDetail'));
const BoardWrite = lazy(() => import('../pages/community/BoardWrite'));
const AdminDashboard = lazy(() => import('../pages/admin/AdminDashboard'));
const AdminUsers = lazy(() => import('../pages/admin/AdminUsers'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const NotFound = lazy(() => import('../pages/NotFound'));

const AuthGuard = lazy(() => import('../components/AuthGuard'));
const AdminGuard = lazy(() => import('../components/AdminGuard'));

function LoadingFallback() {
  return (
    <div className="loading-page">
      <div className="loading-spinner" />
    </div>
  );
}

export default function PublicLayout() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="site-main">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/curriculum" element={<Navigate to="/materials/basic" replace />} />
            <Route path="/materials" element={<Navigate to="/materials/basic" replace />} />
            <Route path="/materials/:category" element={<LearningMaterials />} />
            <Route path="/day1/*" element={<Navigate to="/materials/document" replace />} />
            <Route path="/day2/*" element={<Navigate to="/materials/hr" replace />} />
            <Route path="/prompt-eval" element={<PromptEvalHub />} />
            <Route path="/prompt-eval/practice" element={<PromptPractice />} />
            <Route path="/prompt-eval/workshop" element={<PromptWorkshop />} />
            <Route path="/tools" element={<ToolsGuide />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            <Route path="/community" element={<CommunityHub />} />
            <Route path="/community/:board" element={<Board />} />
            <Route path="/community/:board/write" element={<Suspense fallback={<LoadingFallback />}><AuthGuard><BoardWrite /></AuthGuard></Suspense>} />
            <Route path="/community/:board/:id" element={<BoardDetail />} />

            <Route path="/admin" element={<Suspense fallback={<LoadingFallback />}><AdminGuard><AdminDashboard /></AdminGuard></Suspense>} />
            <Route path="/admin/users" element={<Suspense fallback={<LoadingFallback />}><AdminGuard><AdminUsers /></AdminGuard></Suspense>} />

            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

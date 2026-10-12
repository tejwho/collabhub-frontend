import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  Users, 
  Search, 
  CheckCircle2, 
  FolderKanban, 
  MessageSquare, 
  FileText, 
  Award,
  ArrowRight
} from 'lucide-react';

const LandingPage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/60 via-white to-slate-50 pt-16 pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-6">
            🎓 Built for College Projects & Capstones
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Find the right teammates.<br />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Deliver outstanding projects together.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Stop relying on scattered chat groups. Publish project ideas, discover peers with complementary skills, manage tasks on a structured Kanban board, and build a lasting academic portfolio.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base shadow-lg shadow-indigo-200 transition-all hover:-translate-y-0.5"
              >
                Go to Your Dashboard
                <ArrowRight className="w-5 h-5" />
              </Link>
            ) : (
              <>
                <Link
                  to="/register"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base shadow-lg shadow-indigo-200 transition-all hover:-translate-y-0.5"
                >
                  Create Student Account
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/login"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base border border-slate-300 shadow-sm transition-all"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              A Complete Collaboration Platform
            </h2>
            <p className="mt-3 text-slate-600">
              Everything your academic project needs from initial idea to final submission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-5">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Skill-Based Discovery</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Filter projects by technologies like React, Spring Boot, Machine Learning, and UI/UX to find roles matching your skill set.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Team Formation & Join Requests</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Apply to teams with a personalized pitch message. Project leads can review candidate profiles and build balanced teams.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5">
                <FolderKanban className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Task Boards & Progress</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Break work into Todo, In-Progress, and Done cards. Automatically track team completion percentage in real time.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-5">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Discussion Boards</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Centralized project discussion threads keep decisions, meeting notes, and updates linked directly to the project.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Secure File Repository</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Store project reports, presentations, and architecture diagrams with secure member-only access and validation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Project Showcase & Portfolio</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Archive completed projects as showcase cards on student profiles for placement interviews and academic viva evaluations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 bg-slate-100 border-t border-slate-200 text-center text-xs text-slate-500">
        <p>Student Project Collaboration and Team Management System • College Project 2026</p>
      </footer>
    </div>
  );
};

export default LandingPage;

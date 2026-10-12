import React from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  GraduationCap, 
  Building2, 
  BookOpen, 
  IdCard, 
  Calendar, 
  Mail, 
  Github, 
  Linkedin, 
  Globe, 
  FolderKanban, 
  Users, 
  Clock, 
  CheckCircle2, 
  PlusCircle, 
  Search,
  Sparkles
} from 'lucide-react';

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Welcome Banner & Student Profile Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-100/50 via-purple-50/30 to-transparent rounded-full -mr-20 -mt-20 pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white flex items-center justify-center text-2xl sm:text-3xl font-extrabold shadow-lg shadow-indigo-200 shrink-0">
              {user?.fullName?.charAt(0) || 'S'}
            </div>

            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  {user?.fullName}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  {user?.role === 'ROLE_ADMIN' ? 'Platform Administrator' : 'Student Member'}
                </span>
              </div>

              <div className="flex items-center gap-2 mt-1 text-sm text-slate-600">
                <Mail className="w-4 h-4 text-slate-400" />
                <span>{user?.email}</span>
              </div>

              {/* Academic Tags */}
              <div className="flex items-center gap-2 sm:gap-3 mt-3 flex-wrap text-xs font-medium text-slate-600">
                {user?.college && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-700">
                    <Building2 className="w-3.5 h-3.5 text-indigo-600" />
                    {user.college}
                  </span>
                )}
                {user?.department && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-700">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                    {user.department}
                  </span>
                )}
                {user?.rollNumber && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-700">
                    <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                    Roll: {user.rollNumber}
                  </span>
                )}
                {user?.yearOfStudy && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                    Year {user.yearOfStudy} (Class of {user?.graduationYear || 'N/A'})
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2 self-stretch md:self-auto justify-end">
            {user?.githubUrl && (
              <a
                href={user.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {user?.linkedinUrl && (
              <a
                href={user.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {user?.portfolioUrl && (
              <a
                href={user.portfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 transition-colors"
                title="Personal Portfolio"
              >
                <Globe className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Bio */}
        {user?.bio && (
          <div className="mt-6 pt-5 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">About & Interests</h4>
            <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">{user.bio}</p>
          </div>
        )}
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">My Projects</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">0</p>
            <p className="text-xs text-slate-400 mt-0.5">Projects created by you</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <FolderKanban className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Joined Teams</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">0</p>
            <p className="text-xs text-slate-400 mt-0.5">Active team memberships</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Pending Requests</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">0</p>
            <p className="text-xs text-slate-400 mt-0.5">Applications awaiting lead review</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Assigned Tasks</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">0</p>
            <p className="text-xs text-slate-400 mt-0.5">Tasks due this week</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Phase 1 Completion & Next Modules Overview */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-slate-900">
              Phase 1 Authentication & Environment Verified!
            </h3>
            <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
              You are signed in via a signed JSON Web Token (JWT) backed by Spring Security and MySQL. 
              The academic profiling fields and BCrypt password encryption are live.
            </p>
            <div className="pt-3 flex flex-wrap gap-3">
              <button 
                disabled 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white font-semibold text-xs opacity-80 cursor-not-allowed"
                title="Will be enabled in Phase 3"
              >
                <PlusCircle className="w-4 h-4" />
                Post Project Idea (Phase 3)
              </button>
              <button 
                disabled 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 font-semibold text-xs opacity-80 cursor-not-allowed"
                title="Will be enabled in Phase 3"
              >
                <Search className="w-4 h-4" />
                Browse Projects (Phase 3)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

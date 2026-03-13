import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import api from '../services/api';
import { loginSuccess } from '../store/authSlice';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) {
    return <Navigate to="/profile" replace />;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await api.post('/auth/login', { username, password });
      const { accessToken, refreshToken } = response.data;

      if (accessToken) {
        dispatch(loginSuccess({ accessToken, refreshToken }));
        navigate('/profile');
      } else {
        setError('Login failed. Invalid response from server.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Authentication failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 md:px-10 py-3 z-10">
        <div className="flex items-center gap-3 text-primary">
          <div className="size-8 flex items-center justify-center bg-primary rounded-lg text-white">
            <span className="material-symbols-outlined text-2xl">corporate_fare</span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">HRMS Solutions</h2>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors">Help Center</button>
          <div className="h-4 w-px bg-slate-200 dark:bg-slate-700"></div>
          <span className="material-symbols-outlined text-slate-500 cursor-pointer">language</span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#005aad 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="w-full max-w-[480px] z-10">
          <div className="bg-white dark:bg-slate-900 shadow-2xl rounded-xl border border-slate-100 dark:border-slate-800 p-8 md:p-10">
            <div className="mb-8">
              <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-extrabold tracking-tight mb-2">Sign In</h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Access your enterprise workspace and manage HR operations.</p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm border border-red-200">
                {error}
              </div>
            )}

            <form className="space-y-5" onSubmit={handleLogin}>
              <div className="space-y-2">
                <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold">Corporate Email or ID</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">person</span>
                  </div>
                  <input
                    className="block w-full pl-10 pr-4 py-3 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    placeholder="username or email"
                    required
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold">Password</label>
                  <a className="text-xs font-medium text-primary hover:underline" href="#">Forgot password?</a>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">lock</span>
                  </div>
                  <input
                    className="block w-full pl-10 pr-12 py-3 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    placeholder="••••••••"
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" type="button">
                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2 py-1">
                <input className="w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary" id="remember" type="checkbox" />
                <label className="text-sm text-slate-600 dark:text-slate-400 select-none" htmlFor="remember">Stay signed in for 15 minutes</label>
              </div>

              <button
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-4 rounded-lg shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                type="submit"
                disabled={loading}
              >
                <span>{loading ? 'Authenticating...' : 'Access Workspace'}</span>
                <span className="material-symbols-outlined text-[20px]">login</span>
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
              <p className="text-center text-slate-500 dark:text-slate-400 text-xs mb-4 uppercase tracking-widest font-semibold">Or sign in with SSO</p>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZBOwdxTMVa5rtvZyMnRhHj1VaM8xXx3uxUKAnYv9NLm3-OPSsnPkiZHYWp4rMLTnPR3eXy4KZ3jJt7c7xymswVZMXre573VgUAfiIlWS1LBnY-D7Ga6N_BdK3ytxHrgfjj49NXRKlSSJYvsGPfWF6Fa_dHhhWLSWLwznZOCwpXeleTehvnk3-mkm6dWamHTHnCubqKkE4C3_4dScsoVuK6rsQ0hHtGkmz8MDI3atZ9fkyKtqwiUFt5EmkbbvT4ulA2lQkFtKbPe4" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Google</span>
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <img alt="Microsoft" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP_QDVLjQ_zwFbMh0zOY7ZFH3BRfct_PU4Ed799pcMT5EXTgQ0PwEPclf0c9AJ1eR-tlVJdpGWa6gTNRbDEA9tS3lyx7-PKwW-fvT6Fab1L-CT9R__F5UX2nvox3L92T08FCmZmoTPM5uBvFxOEriZeHIAyUmmFlQmTr9-MOJoNxS-ifAbvBRSAFrC0diDW1eF1btxwmgW8hiYvD32mOX__4nH42UMs7uOuhGlgBnaZatuMjMvtmCsD98uk5f_oFYepUitgSumFPg" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Microsoft</span>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 rounded-full border border-primary/10">
              <span className="material-symbols-outlined text-primary text-[18px]">security</span>
              <span className="text-[11px] font-semibold text-primary uppercase tracking-tight">Enterprise Secure Session active</span>
            </div>
            <p className="text-slate-500 dark:text-slate-500 text-xs px-8 leading-relaxed">
              Security Notice: To protect corporate data, your session will automatically expire after 15 minutes of inactivity. Please ensure you are on a trusted network.
            </p>
          </div>
        </div>
      </main>

      <footer className="px-6 md:px-10 py-6 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 bg-white dark:bg-slate-900">
        <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
          <a className="text-xs text-slate-500 hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="text-xs text-slate-500 hover:text-primary transition-colors" href="#">Terms of Service</a>
          <a className="text-xs text-slate-500 hover:text-primary transition-colors" href="#">Cookie Settings</a>
          <a className="text-xs text-slate-500 hover:text-primary transition-colors" href="#">Support</a>
        </div>
        <p className="text-xs text-slate-400">© 2024 HRMS Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

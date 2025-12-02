import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, Calendar, GraduationCap, ArrowRight } from 'lucide-react';

const AuthPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const initialMode = searchParams.get('mode') === 'signup' ? 'signup' : 'login';
    const [mode, setMode] = useState(initialMode);

    useEffect(() => {
        setMode(searchParams.get('mode') === 'signup' ? 'signup' : 'login');
    }, [searchParams]);

    const toggleMode = () => {
        const newMode = mode === 'login' ? 'signup' : 'login';
        setMode(newMode);
        navigate(`/auth?mode=${newMode}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[20%] right-[20%] w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="w-full max-w-md z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card p-8 shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative top bar */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-accent"></div>

                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-white mb-2">
                            {mode === 'login' ? 'LOGIN / CADASTRO' : 'CRIAR CONTA'}
                        </h2>
                        <p className="text-slate-400">
                            {mode === 'login' ? 'Bem-vindo de volta!' : 'Prepare-se para o futuro'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <AnimatePresence mode="wait">
                            {mode === 'login' ? (
                                <motion.div
                                    key="login-fields"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="space-y-4"
                                >
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                        <input
                                            type="text"
                                            placeholder="E-mail ou CPF"
                                            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        />
                                    </div>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                        <input
                                            type="password"
                                            placeholder="Senha"
                                            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        />
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="signup-fields"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-4"
                                >
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                        <input
                                            type="text"
                                            placeholder="Nome Completo"
                                            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                        />
                                    </div>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                        <input
                                            type="text"
                                            placeholder="Idade"
                                            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                        />
                                    </div>
                                    <div className="relative">
                                        <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                        <input
                                            type="text"
                                            placeholder="Escola"
                                            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                        />
                                    </div>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                        <input
                                            type="email"
                                            placeholder="E-mail"
                                            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                        />
                                    </div>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                        <input
                                            type="password"
                                            placeholder="Senha"
                                            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button
                            type="submit"
                            className={`w-full py-3 rounded-xl font-bold text-lg shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 mt-6 ${mode === 'login'
                                    ? 'bg-gradient-to-r from-primary to-purple-600 text-white shadow-primary/25 hover:shadow-primary/40'
                                    : 'bg-gradient-to-r from-emerald-400 to-accent text-slate-900 shadow-accent/25 hover:shadow-accent/40'
                                }`}
                        >
                            {mode === 'login' ? 'Entrar' : 'Criar Conta'}
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <div className="relative mb-4">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-700"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-slate-800 px-2 text-slate-500">
                                    {mode === 'login' ? 'Ou cadastre-se' : 'Já tem conta?'}
                                </span>
                            </div>
                        </div>

                        <button
                            onClick={toggleMode}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                        >
                            {mode === 'login' ? 'Criar uma conta nova' : 'Fazer login'}
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AuthPage;

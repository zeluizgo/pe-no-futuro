import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Footprints } from 'lucide-react';

const SplashPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

                {/* Grid lines for futuristic feel */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="z-10 flex flex-col items-center w-full max-w-md">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-12 text-center"
                >
                    <h1 className="text-4xl font-bold tracking-wider mb-2 text-white">
                        PÉ NO <span className="text-gradient">FUTURO</span>
                    </h1>
                    <p className="text-slate-400 text-sm tracking-widest uppercase">Educação Financeira</p>
                </motion.div>

                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                    className="mb-16 relative"
                >
                    <div className="w-48 h-48 rounded-full border-2 border-accent/50 flex items-center justify-center relative">
                        <div className="absolute inset-0 rounded-full border border-primary/30 animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute inset-2 rounded-full border border-accent/20 animate-[spin_15s_linear_infinite_reverse]"></div>
                        <Footprints className="w-24 h-24 text-accent drop-shadow-[0_0_15px_rgba(57,255,192,0.5)]" />

                        {/* Decorative markers */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-4 bg-accent"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1 h-4 bg-accent"></div>
                        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-1 bg-accent"></div>
                        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-1 bg-accent"></div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <p className="text-xl text-white font-medium mb-2">
                        "Dê o primeiro passo para o seu futuro"
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="w-full space-y-4"
                >
                    <button
                        onClick={() => navigate('/auth?mode=login')}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-bold text-lg shadow-[0_0_20px_rgba(107,78,255,0.4)] hover:shadow-[0_0_30px_rgba(107,78,255,0.6)] transition-all active:scale-95"
                    >
                        Entrar
                    </button>
                    <button
                        onClick={() => navigate('/auth?mode=signup')}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-400 to-accent text-slate-900 font-bold text-lg shadow-[0_0_20px_rgba(57,255,192,0.4)] hover:shadow-[0_0_30px_rgba(57,255,192,0.6)] transition-all active:scale-95"
                    >
                        Criar Conta
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default SplashPage;

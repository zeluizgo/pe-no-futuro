import React from 'react';
import { motion } from 'framer-motion';
import { Home, Map, User, Award, Wallet, TrendingUp, ChevronRight } from 'lucide-react';

const DashboardPage = () => {
    return (
        <div className="min-h-screen bg-slate-900 pb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-20%] w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[20%] left-[-10%] w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
            </div>

            {/* Header Section */}
            <header className="pt-12 pb-6 px-6 bg-gradient-to-b from-slate-800/80 to-transparent backdrop-blur-sm sticky top-0 z-20">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <p className="text-slate-400 text-sm">Olá, Estudante</p>
                        <h1 className="text-xl font-bold text-white">Bem-vindo de volta!</h1>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center">
                        <User className="w-5 h-5 text-slate-300" />
                    </div>
                </div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    onClick={() => window.location.href = '/simulator'}
                    className="glass-card p-6 relative overflow-hidden cursor-pointer hover:bg-slate-800/60 transition-colors group"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Wallet className="w-24 h-24 text-white" />
                    </div>
                    <p className="text-slate-400 text-sm mb-1">SALDO DO MÊS</p>
                    <h2 className="text-4xl font-bold text-white mb-2">
                        R$ <span className="text-accent">200,00</span>
                    </h2>
                    <p className="text-xs text-accent/80 bg-accent/10 inline-block px-2 py-1 rounded-full border border-accent/20">
                        (Saldo Virtual)
                    </p>
                </motion.div>
            </header>

            <main className="px-6 space-y-6 z-10 relative">
                {/* Weekly Mission */}
                <motion.section
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    onClick={() => window.location.href = '/missions'}
                    className="cursor-pointer"
                >
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        Missão da Semana
                    </h3>
                    <div className="glass-card p-5 border-l-4 border-l-primary hover:bg-slate-800/60 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h4 className="font-bold text-white text-lg">Guardar 10%</h4>
                                <p className="text-slate-400 text-sm">Economize R$ 20,00 esta semana</p>
                            </div>
                            <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded">
                                +50 XP
                            </span>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between text-xs text-slate-400">
                                <span>Progresso</span>
                                <span>30%</span>
                            </div>
                            <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '30%' }}
                                    transition={{ delay: 0.5, duration: 1 }}
                                    className="h-full bg-gradient-to-r from-primary to-purple-400 rounded-full"
                                ></motion.div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Medals */}
                <motion.section
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-yellow-500" />
                        Suas Conquistas
                    </h3>
                    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="min-w-[80px] flex flex-col items-center gap-2">
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 ${i < 3 ? 'bg-slate-800 border-yellow-500/50 shadow-[0_0_10px_rgba(234,179,8,0.2)]' : 'bg-slate-800/50 border-slate-700 grayscale'}`}>
                                    <span className="text-2xl">{i < 3 ? '🏅' : '⚪'}</span>
                                </div>
                                <span className="text-xs text-slate-400 text-center">Nível {i}</span>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* CTA */}
                <motion.button
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-bold text-lg shadow-[0_0_20px_rgba(107,78,255,0.3)] hover:shadow-[0_0_30px_rgba(107,78,255,0.5)] transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                    INICIAR APRENDIZADO
                    <ChevronRight className="w-5 h-5" />
                </motion.button>
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 w-full bg-slate-900/90 backdrop-blur-lg border-t border-slate-800 pb-safe pt-2 px-6 z-50">
                <div className="flex justify-between items-center">
                    <NavIcon icon={<Home className="w-6 h-6" />} label="Início" active onClick={() => { }} />
                    <NavIcon icon={<Map className="w-6 h-6" />} label="Trilhas" onClick={() => window.location.href = '/tracks'} />
                    <NavIcon icon={<User className="w-6 h-6" />} label="Mentor" onClick={() => window.location.href = '/mentor'} />
                    <NavIcon icon={<Award className="w-6 h-6" />} label="Conquistas" onClick={() => window.location.href = '/achievements'} />
                </div>
            </nav>
        </div>
    );
};

const NavIcon = ({ icon, label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`flex flex-col items-center gap-1 p-2 transition-colors ${active ? 'text-accent' : 'text-slate-500 hover:text-slate-300'}`}
    >
        {icon}
        <span className="text-[10px] font-medium">{label}</span>
        {active && (
            <motion.div layoutId="nav-indicator" className="w-1 h-1 bg-accent rounded-full mt-1" />
        )}
    </button>
);

export default DashboardPage;

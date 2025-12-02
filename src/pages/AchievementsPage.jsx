import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Award, Trophy, Target, Share2 } from 'lucide-react';
import { leaderboard } from '../data/mockData';

const AchievementsPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-900 pb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
            </div>

            <header className="pt-8 pb-4 px-6 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-20">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <h1 className="text-xl font-bold text-white">Conquistas</h1>
                </div>
            </header>

            <main className="px-6 py-6 space-y-8 z-10 relative">
                {/* Medals Section */}
                <section>
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-yellow-500" />
                        Medalhas Ganhas
                    </h2>
                    <div className="grid grid-cols-3 gap-4">
                        {[
                            { id: 1, title: 'Economia', icon: '💰', color: 'border-yellow-500 bg-yellow-500/10' },
                            { id: 2, title: 'Planejamento', icon: '⚙️', color: 'border-slate-400 bg-slate-400/10' },
                            { id: 3, title: 'Missões', icon: '🎯', color: 'border-orange-500 bg-orange-500/10' },
                        ].map((medal, index) => (
                            <motion.div
                                key={medal.id}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center gap-2"
                            >
                                <div className={`w-20 h-20 rounded-full border-4 ${medal.color} flex items-center justify-center text-3xl shadow-[0_0_15px_rgba(0,0,0,0.3)] relative`}>
                                    {medal.icon}
                                    {/* Ribbon effect */}
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-800 rotate-45 -z-10"></div>
                                </div>
                                <span className="text-sm font-medium text-slate-300">{medal.title}</span>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Leaderboard Section */}
                <section>
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-accent" />
                        Ranking entre amigos
                    </h2>
                    <div className="glass-card overflow-hidden">
                        {leaderboard.map((user, index) => (
                            <motion.div
                                key={user.id}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 + (index * 0.1) }}
                                className={`flex items-center justify-between p-4 border-b border-slate-700/50 last:border-0 ${user.isUser ? 'bg-primary/10' : ''}`}
                            >
                                <div className="flex items-center gap-4">
                                    <span className={`font-bold w-6 text-center ${index < 3 ? 'text-yellow-500' : 'text-slate-500'}`}>
                                        {index + 1}.
                                    </span>
                                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-lg border border-slate-600">
                                        {user.avatar}
                                    </div>
                                    <div>
                                        <p className={`font-bold ${user.isUser ? 'text-accent' : 'text-white'}`}>
                                            {user.name} {user.isUser && '(Você)'}
                                        </p>
                                        <p className="text-xs text-slate-400">{user.score} pts</p>
                                    </div>
                                </div>
                                {index < 3 && (
                                    <Trophy className={`w-5 h-5 ${index === 0 ? 'text-yellow-400' : index === 1 ? 'text-slate-400' : 'text-orange-400'}`} />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </section>

                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="w-full py-3 rounded-xl border border-slate-600 text-slate-300 font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                >
                    <Share2 className="w-5 h-5" />
                    Compartilhar Conquistas
                </motion.button>
            </main>
        </div>
    );
};

export default AchievementsPage;

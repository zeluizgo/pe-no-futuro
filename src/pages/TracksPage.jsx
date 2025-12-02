import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, CheckCircle, Circle, PlayCircle } from 'lucide-react';
import { tracks } from '../data/mockData';

const TracksPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-900 pb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[10%] right-[-10%] w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[10%] left-[-10%] w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
            </div>

            <header className="pt-8 pb-4 px-6 sticky top-0 z-20 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/50">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <h1 className="text-xl font-bold text-white">Suas Trilhas</h1>
                </div>
            </header>

            <main className="px-6 py-6 space-y-4 z-10 relative">
                {tracks.map((track, index) => (
                    <motion.div
                        key={track.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => navigate(`/tracks/${track.id}`)}
                        className="glass-card p-4 relative overflow-hidden group cursor-pointer hover:bg-slate-800/70 transition-all border-l-4"
                        style={{ borderLeftColor: track.progress === 100 ? '#39FFC0' : '#6B4EFF' }}
                    >
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${track.color} flex items-center justify-center text-2xl shadow-lg`}>
                                {track.icon}
                            </div>

                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold text-white text-lg">{track.title}</h3>
                                    <div className="flex items-center gap-1 text-sm">
                                        <span className={track.progress === 100 ? 'text-accent' : 'text-slate-400'}>
                                            {track.progress}%
                                        </span>
                                        {track.progress === 100 ? (
                                            <CheckCircle className="w-4 h-4 text-accent" />
                                        ) : (
                                            <Circle className="w-4 h-4 text-slate-600" />
                                        )}
                                    </div>
                                </div>

                                <p className="text-slate-400 text-xs mb-3 line-clamp-1">{track.description}</p>

                                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${track.progress}%` }}
                                        transition={{ delay: 0.5 + (index * 0.1), duration: 1 }}
                                        className={`h-full bg-gradient-to-r ${track.color}`}
                                    ></motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}

                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="w-full mt-8 py-4 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-bold text-lg shadow-[0_0_20px_rgba(107,78,255,0.3)] hover:shadow-[0_0_30px_rgba(107,78,255,0.5)] transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                    <PlayCircle className="w-5 h-5" />
                    Continuar Trilha Atual
                </motion.button>
            </main>
        </div>
    );
};

export default TracksPage;

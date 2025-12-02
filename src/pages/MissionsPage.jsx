import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Target, CheckCircle, Circle, Star } from 'lucide-react';

const MissionsPage = () => {
    const navigate = useNavigate();
    const [missions, setMissions] = useState([
        { id: 1, title: 'Guardar 10%', description: 'Economize 10% do seu saldo virtual.', xp: 50, completed: false, progress: 30 },
        { id: 2, title: 'Ler 1 artigo', description: 'Leia um artigo sobre juros compostos.', xp: 30, completed: true, progress: 100 },
        { id: 3, title: 'Completar Quiz', description: 'Acerte 80% no quiz de perfil de investidor.', xp: 100, completed: false, progress: 0 },
        { id: 4, title: 'Simular Investimento', description: 'Use o simulador para projetar 1 ano de ganhos.', xp: 40, completed: false, progress: 0 },
    ]);

    const handleClaim = (id) => {
        // Logic to claim reward would go here
        alert('Recompensa resgatada! +XP');
    };

    return (
        <div className="min-h-screen bg-slate-900 pb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            <header className="pt-8 pb-4 px-6 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-20">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <h1 className="text-xl font-bold text-white">Missões</h1>
                </div>
            </header>

            <main className="px-6 py-6 space-y-4 z-10 relative">
                {missions.map((mission, index) => (
                    <motion.div
                        key={mission.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`glass-card p-4 border-l-4 ${mission.completed ? 'border-l-accent' : 'border-l-slate-600'}`}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${mission.completed ? 'bg-accent/20 text-accent' : 'bg-slate-800 text-slate-400'}`}>
                                    <Target className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className={`font-bold ${mission.completed ? 'text-white' : 'text-slate-200'}`}>{mission.title}</h3>
                                    <p className="text-xs text-slate-400">{mission.description}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 bg-yellow-500/10 px-2 py-1 rounded text-yellow-500 text-xs font-bold">
                                <Star className="w-3 h-3 fill-yellow-500" />
                                {mission.xp} XP
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className="flex justify-between text-xs text-slate-500 mb-1">
                                <span>Progresso</span>
                                <span>{mission.progress}%</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${mission.progress}%` }}
                                    className={`h-full rounded-full ${mission.completed ? 'bg-accent' : 'bg-primary'}`}
                                />
                            </div>
                        </div>

                        {mission.completed && (
                            <button
                                onClick={() => handleClaim(mission.id)}
                                className="w-full mt-4 py-2 rounded-lg bg-accent/20 text-accent font-bold text-sm hover:bg-accent/30 transition-colors"
                            >
                                RESGATAR RECOMPENSA
                            </button>
                        )}
                    </motion.div>
                ))}
            </main>
        </div>
    );
};

export default MissionsPage;

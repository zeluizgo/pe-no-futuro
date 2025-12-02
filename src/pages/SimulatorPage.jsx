import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ShoppingCart, PiggyBank, TrendingUp, Info } from 'lucide-react';

const SimulatorPage = () => {
    const navigate = useNavigate();
    const [balance, setBalance] = useState(200);
    const [allocations, setAllocations] = useState({
        spent: 50,
        saved: 100,
        invested: 50
    });

    const totalAllocated = allocations.spent + allocations.saved + allocations.invested;

    const handleAllocationChange = (type, value) => {
        setAllocations(prev => ({
            ...prev,
            [type]: parseInt(value)
        }));
    };

    return (
        <div className="min-h-screen bg-slate-900 pb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[10%] left-[10%] w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
            </div>

            <header className="pt-8 pb-4 px-6 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-20">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <h1 className="text-xl font-bold text-white">Simulador Financeiro</h1>
                </div>
            </header>

            <main className="px-6 py-6 space-y-8 z-10 relative">
                {/* Balance Display */}
                <div className="text-center">
                    <p className="text-slate-400 mb-2">Seu saldo virtual</p>
                    <h2 className="text-5xl font-bold text-white mb-2">
                        R$ <span className="text-accent">{totalAllocated.toFixed(2)}</span>
                    </h2>
                </div>

                {/* Action Buttons (Visual only for now) */}
                <div className="flex justify-center gap-4">
                    <div className="flex flex-col items-center gap-2">
                        <button className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center shadow-lg shadow-red-500/20">
                            <ShoppingCart className="w-8 h-8 text-white" />
                        </button>
                        <span className="text-xs text-slate-400">Gastar</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <button className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/20">
                            <PiggyBank className="w-8 h-8 text-white" />
                        </button>
                        <span className="text-xs text-slate-400">Guardar</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <button className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-emerald-600 flex items-center justify-center shadow-lg shadow-accent/20">
                            <TrendingUp className="w-8 h-8 text-slate-900" />
                        </button>
                        <span className="text-xs text-slate-400">Investir</span>
                    </div>
                </div>

                {/* Sliders and Bars */}
                <div className="glass-card p-6 space-y-6">
                    <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-300 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-primary"></div> Guardado
                            </span>
                            <span className="text-white font-bold">R$ {allocations.saved}</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="500"
                            value={allocations.saved}
                            onChange={(e) => handleAllocationChange('saved', e.target.value)}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                        <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ width: `${(allocations.saved / totalAllocated) * 100}%` }}
                                className="h-full bg-primary"
                            />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-300 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-accent"></div> Investido
                            </span>
                            <span className="text-white font-bold">R$ {allocations.invested}</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="500"
                            value={allocations.invested}
                            onChange={(e) => handleAllocationChange('invested', e.target.value)}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-accent"
                        />
                        <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ width: `${(allocations.invested / totalAllocated) * 100}%` }}
                                className="h-full bg-accent"
                            />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-300 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div> Gastos
                            </span>
                            <span className="text-white font-bold">R$ {allocations.spent}</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="500"
                            value={allocations.spent}
                            onChange={(e) => handleAllocationChange('spent', e.target.value)}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500"
                        />
                        <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ width: `${(allocations.spent / totalAllocated) * 100}%` }}
                                className="h-full bg-red-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Tip of the Day */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white p-6 rounded-2xl shadow-xl flex items-start gap-4"
                >
                    <div className="p-2 bg-yellow-100 rounded-full text-yellow-600">
                        <Info className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-slate-900 font-bold mb-1">Dica do dia:</h3>
                        <p className="text-slate-600 text-sm">
                            "Guardar 10% de tudo que você ganha já te coloca no topo dos investidores iniciantes!"
                        </p>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default SimulatorPage;

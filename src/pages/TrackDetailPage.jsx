import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Play, FileText, Headphones, CheckCircle, Lock, MessageSquare } from 'lucide-react';
import { trackContent } from '../data/mockData';

const TrackDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const content = trackContent[id];
    const [expandedModule, setExpandedModule] = useState(content?.modules[0]?.id);

    if (!content) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-xl mb-4">Trilha em desenvolvimento</h2>
                    <button onClick={() => navigate('/tracks')} className="text-primary hover:underline">Voltar</button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-900 pb-20 relative">
            {/* Header */}
            <header className="pt-8 pb-6 px-6 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-20">
                <div className="flex items-center gap-4 mb-4">
                    <button
                        onClick={() => navigate('/tracks')}
                        className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <h1 className="text-lg font-bold text-white line-clamp-1">{content.title}</h1>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-bold">CLASSROOM</span>
                    <span>Instrutor: {content.instructor}</span>
                </div>
            </header>

            <main className="px-4 py-6 space-y-4">
                {content.modules.map((module, index) => (
                    <div key={module.id} className="glass-card overflow-hidden">
                        <button
                            onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                            className="w-full p-4 flex items-center justify-between bg-slate-800/50 hover:bg-slate-800 transition-colors"
                        >
                            <h3 className="font-bold text-white text-left">{module.title}</h3>
                            <ChevronLeft className={`w-5 h-5 text-slate-400 transition-transform ${expandedModule === module.id ? '-rotate-90' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {expandedModule === module.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="border-t border-slate-700/50"
                                >
                                    <div className="p-2 space-y-2">
                                        {module.lessons.map((lesson) => (
                                            <div key={lesson.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700/30 transition-colors group cursor-pointer">
                                                <div className={`p-2 rounded-full ${lesson.completed ? 'bg-accent/20 text-accent' : 'bg-slate-700 text-slate-400'}`}>
                                                    {lesson.completed ? <CheckCircle className="w-5 h-5" /> : (
                                                        lesson.type === 'video' ? <Play className="w-5 h-5" /> :
                                                            lesson.type === 'audio' ? <Headphones className="w-5 h-5" /> :
                                                                <FileText className="w-5 h-5" />
                                                    )}
                                                </div>

                                                <div className="flex-1">
                                                    <h4 className={`text-sm font-medium ${lesson.completed ? 'text-slate-300 line-through' : 'text-white'}`}>
                                                        {lesson.title}
                                                    </h4>
                                                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                                                        <span className="uppercase">{lesson.type}</span>
                                                        {lesson.duration && <span>• {lesson.duration}</span>}
                                                    </div>
                                                </div>

                                                {lesson.type === 'interactive' && (
                                                    <button className="px-3 py-1 rounded bg-primary/20 text-primary text-xs font-bold hover:bg-primary/30">
                                                        INICIAR
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}

                {/* AI Help CTA */}
                <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-white font-bold text-sm">Dúvidas sobre o conteúdo?</h4>
                        <p className="text-slate-400 text-xs">Pergunte ao seu Mentor IA agora mesmo.</p>
                    </div>
                    <button
                        onClick={() => navigate('/mentor')}
                        className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90"
                    >
                        Chat
                    </button>
                </div>
            </main>
        </div>
    );
};

export default TrackDetailPage;

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Send, Bot, User, Sparkles } from 'lucide-react';
import { mentorMessages } from '../data/mockData';

const MentorPage = () => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState(mentorMessages);
    const [inputText, setInputText] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const newMessage = {
            id: messages.length + 1,
            sender: 'user',
            text: inputText
        };

        setMessages([...messages, newMessage]);
        setInputText('');

        // Simulate AI response
        setTimeout(() => {
            const aiResponse = {
                id: messages.length + 2,
                sender: 'ai',
                text: 'Entendi! Essa é uma ótima observação. Para te ajudar melhor, você gostaria de ver um exemplo prático ou prefere uma explicação teórica?'
            };
            setMessages(prev => [...prev, aiResponse]);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            </div>

            {/* Header */}
            <header className="pt-8 pb-4 px-6 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-20 flex items-center gap-4">
                <button
                    onClick={() => navigate('/dashboard')}
                    className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white transition-colors"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <div>
                    <h1 className="text-xl font-bold text-white flex items-center gap-2">
                        MENTOR IA
                        <Sparkles className="w-4 h-4 text-accent" />
                    </h1>
                    <p className="text-xs text-accent">Online • Pronto para ajudar</p>
                </div>
            </header>

            {/* Chat Area */}
            <main className="flex-1 overflow-y-auto p-4 space-y-4 z-10 pb-32">
                {messages.map((msg) => (
                    <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                    >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.sender === 'ai' ? 'bg-primary/20 text-primary' : 'bg-slate-700 text-slate-300'}`}>
                            {msg.sender === 'ai' ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
                        </div>

                        <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${msg.sender === 'ai'
                                ? 'bg-slate-800 text-slate-200 rounded-tl-none'
                                : 'bg-primary text-white rounded-tr-none shadow-[0_0_15px_rgba(107,78,255,0.3)]'
                            }`}>
                            {msg.text}
                        </div>
                    </motion.div>
                ))}
                <div ref={messagesEndRef} />
            </main>

            {/* Input Area */}
            <div className="fixed bottom-0 left-0 w-full bg-slate-900/90 backdrop-blur-lg border-t border-slate-800 p-4 z-20">
                {/* Quick Actions */}
                <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide mb-2">
                    {['Criar meta', 'Aprender mais', 'Simular investimento', 'Dúvida rápida'].map((action) => (
                        <button
                            key={action}
                            onClick={() => setInputText(action)}
                            className="whitespace-nowrap px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-300 hover:bg-slate-700 hover:border-primary/50 transition-colors"
                        >
                            {action}
                        </button>
                    ))}
                </div>

                <form onSubmit={handleSendMessage} className="flex gap-2">
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Digite sua mensagem..."
                        className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                    <button
                        type="submit"
                        disabled={!inputText.trim()}
                        className="p-3 rounded-xl bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MentorPage;

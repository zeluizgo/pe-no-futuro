export const tracks = [
    {
        id: 'money-basics',
        title: 'Meu Dinheiro',
        icon: '💰',
        progress: 60,
        completed: false,
        color: 'from-yellow-400 to-orange-500',
        description: 'Aprenda o básico sobre como cuidar do seu dinheiro.'
    },
    {
        id: 'saving-101',
        title: 'Como Poupar',
        icon: '📦',
        progress: 20,
        completed: false,
        color: 'from-blue-400 to-cyan-500',
        description: 'Estratégias simples para começar a guardar hoje.'
    },
    {
        id: 'first-business',
        title: 'Primeiro Negócio',
        icon: '🚀',
        progress: 0,
        completed: false,
        color: 'from-purple-400 to-pink-500',
        description: 'Tire sua ideia do papel e comece a empreender.'
    },
    {
        id: 'investing',
        title: 'Investindo Básico',
        icon: '📈',
        progress: 0,
        completed: false,
        color: 'from-green-400 to-emerald-500',
        description: 'Faça seu dinheiro trabalhar por você.'
    },
    {
        id: 'toefl-prep',
        title: 'TOEFL iBT Prep',
        icon: '🎓',
        progress: 15,
        completed: false,
        color: 'from-red-400 to-rose-500',
        description: 'Preparação completa para o exame TOEFL iBT.'
    }
];

export const trackContent = {
    'toefl-prep': {
        title: 'TOEFL iBT - 14th Edition',
        instructor: 'Pamela Sharpe',
        modules: [
            {
                id: 'week-1',
                title: 'Week 1: Diagnostic & Listening',
                lessons: [
                    { id: 'l1', title: 'Diagnostic Test', type: 'quiz', completed: true },
                    { id: 'l2', title: 'Listening Strategies', type: 'video', duration: '15:00', completed: false },
                    { id: 'l3', title: 'Campus Conversations', type: 'audio', duration: '10:00', completed: false }
                ]
            },
            {
                id: 'week-2',
                title: 'Week 2: Reading Comprehension',
                lessons: [
                    { id: 'l4', title: 'Vocabulary Building', type: 'text', completed: false },
                    { id: 'l5', title: 'Reading Practice Set 1', type: 'quiz', completed: false }
                ]
            }
        ]
    },
    'money-basics': {
        title: 'Educação Financeira v1.0',
        instructor: 'Khan Academy & Mentor IA',
        modules: [
            {
                id: 'mod-1',
                title: 'Introdução aos Ativos',
                lessons: [
                    {
                        id: 'fin-1',
                        title: 'O que é um ativo?',
                        type: 'video',
                        url: 'https://www.youtube.com/embed/JzSuD7Q7tq0', // Exemplo Khan Academy
                        completed: true
                    },
                    { id: 'fin-2', title: 'Ativos vs Passivos', type: 'text', completed: false }
                ]
            },
            {
                id: 'mod-2',
                title: 'Juros Compostos',
                lessons: [
                    { id: 'fin-3', title: 'O poder dos juros', type: 'video', completed: false },
                    { id: 'fin-4', title: 'Calculadora de Juros', type: 'interactive', completed: false }
                ]
            }
        ]
    }
};

export const mentorMessages = [
    { id: 1, sender: 'ai', text: 'Parabéns! Você economizou 15% este mês. Isso é 5% a mais que sua meta!' },
    { id: 2, sender: 'user', text: 'Obrigado! Como posso investir esses 5% extras?' },
    { id: 3, sender: 'ai', text: 'Ótima pergunta! Para iniciantes, recomendo olhar para Renda Fixa ou Tesouro Direto. Quer que eu simule um rendimento para você?' }
];

export const leaderboard = [
    { id: 1, name: 'Ana Clara', score: 520, avatar: '👩‍🎓' },
    { id: 2, name: 'João Pedro', score: 480, avatar: '👨‍💻' },
    { id: 3, name: 'Você', score: 460, avatar: '👤', isUser: true },
    { id: 4, name: 'Lucas Silva', score: 410, avatar: '🏃' },
    { id: 5, name: 'Maria Eduarda', score: 390, avatar: '🎨' }
];

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const speakersData = [
    {
        id: 1,
        name: 'Can Faga',
        role: 'Co-Founder',
        company: 'Arthur',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256&h=256'
    },
    {
        id: 2,
        name: 'Hulisi Derici',
        role: 'Co-Founder',
        company: 'M.A.R.K.A.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256&h=256'
    },
    {
        id: 3,
        name: 'Cüneyt Devrim',
        role: 'Chief Growth Officer',
        company: 'Havas',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=256&h=256'
    },
    {
        id: 4,
        name: 'Ergin Binyıldız',
        role: 'Co-Founder',
        company: ';untold',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256&h=256'
    },
    {
        id: 5,
        name: 'İnan Savaş Dedebaş',
        role: 'CEO',
        company: 'Publicis Groupe',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=256&h=256'
    },
    {
        id: 6,
        name: 'Meltem Turhan',
        role: 'Co-Founder',
        company: 'fm.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256&h=256'
    },
    {
        id: 7,
        name: 'Sevda Solak',
        role: 'General Manager',
        company: 'Time Public Relations',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=256&h=256'
    },
    {
        id: 8,
        name: 'Kerem Ayırtman',
        role: 'Partner Builder',
        company: 'PBG',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=256&h=256'
    },
    {
        id: 9,
        name: 'Kaan Ünver',
        role: 'Group Director',
        company: 'Migros',
        image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=256&h=256'
    },
    {
        id: 10,
        name: 'Arzu Çekirge Paksoy',
        role: 'Sponsorship Founder',
        company: 'arya',
        image: 'https://images.unsplash.com/photo-1598550832454-d3a1fc6d0c6d?auto=format&fit=crop&q=80&w=256&h=256'
    },
    {
        id: 11,
        name: 'Diğdem Cengiz',
        role: 'Co-Founder',
        company: 'Tchibo',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256&h=256'
    }
];

const Speakers: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.speaker-card', {
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="speakers" ref={containerRef} className="py-20 bg-brand-main relative">
            {/* Background Elements */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-2 block">Vizyonerler</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Konuşmacılar</h2>
                    <p className="text-gray-400">Sektörün önde gelen liderleri ve inovasyon öncüleri.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {speakersData.map((speaker) => (
                        <div key={speaker.id} className="speaker-card group relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-accent/50 transition-all duration-300 h-full flex flex-col items-center text-center relative z-10 overflow-hidden">

                                {/* Image Container */}
                                <div className="relative mb-6 w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-brand-accent to-brand-accent">
                                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-black">
                                        <img
                                            src={speaker.image}
                                            alt={speaker.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                                        />
                                    </div>
                                </div>

                                {/* Info */}
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-accent transition-colors">{speaker.name}</h3>
                                <p className="text-sm text-gray-400 mb-3">{speaker.role}</p>

                                <div className="mt-auto pt-4 border-t border-white/5 w-full">
                                    <span className="text-xs font-bold text-brand-accent tracking-wider uppercase">{speaker.company}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Speakers;

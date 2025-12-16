import React from 'react';
// Importamos ícones de uma biblioteca comum em Next.js
import { MapPin, Bus, AlertTriangle, Calendar, ShoppingBag, Search, Bell, Home, User } from 'lucide-react';

// --- Sub-componente para os Botões de Serviço ---
const ServiceButton = ({ icon: Icon, label, color }) => (
  <button className="flex flex-col items-center justify-center gap-2 group">
    <div className={`${color} p-4 rounded-2xl text-white shadow-lg group-active:scale-95 transition-all`}>
      <Icon size={28} />
    </div>
    <span className="text-xs font-semibold text-gray-600">{label}</span>
  </button>
);

export default function CityPortal() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24 text-slate-900">
      
      {/* HEADER DINÂMICO (Server-side ready) */}
      <header className="bg-indigo-700 px-6 pt-12 pb-16 rounded-b-[3rem] shadow-2xl relative overflow-hidden">
        {/* Efeito visual de fundo */}
        <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-50"></div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-2 rounded-lg backdrop-blur-md">
                <MapPin className="text-white" size={20} />
              </div>
              <span className="text-white font-bold tracking-tight text-lg">GovDigital</span>
            </div>
            <button className="bg-white/20 p-2 rounded-full backdrop-blur-md text-white">
              <Bell size={20} />
            </button>
          </div>

          <h1 className="text-white text-3xl font-light">
            Bom dia, <br />
            <span className="font-bold text-white">Cidadão</span>
          </h1>
        </div>
      </header>

      {/* ÁREA DE BUSCA (Flutuante) */}
      <div className="px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 border border-slate-100">
          <Search className="text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="O que você está procurando hoje?" 
            className="w-full bg-transparent outline-none text-sm text-slate-600"
          />
        </div>
      </div>

      {/* GRID DE SERVIÇOS RÁPIDOS */}
      <section className="px-8 mt-10">
        <div className="grid grid-cols-4 gap-6">
          <ServiceButton icon={Bus} label="Ônibus" color="bg-orange-500" />
          <ServiceButton icon={AlertTriangle} label="Obras" color="bg-rose-500" />
          <ServiceButton icon={Calendar} label="Eventos" color="bg-violet-600" />
          <ServiceButton icon={ShoppingBag} label="Lojas" color="bg-emerald-500" />
        </div>
      </section>

      {/* FEED DE NOTÍCIAS (Cards Profissionais) */}
      <section className="px-6 mt-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-slate-800">Destaques da Cidade</h2>
          <button className="text-indigo-600 text-xs font-bold uppercase tracking-wider">Ver Tudo</button>
        </div>

        <div className="space-y-4">
          {/* Card de Notícia 1 */}
          <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100 flex gap-4">
            <div className="w-24 h-24 bg-slate-200 rounded-2xl flex-shrink-0 bg-[url('https://images.unsplash.com/photo-1573164067505-19e2b960537c?q=80&w=200&h=200&auto=format&fit=crop')] bg-cover"></div>
            <div className="flex flex-col justify-center">
              <span className="text-[10px] font-black text-rose-500 uppercase tracking-tighter">Saúde Pública</span>
              <h3 className="font-bold text-slate-800 leading-tight mt-1 text-sm">Novo centro de saúde inaugurado no Setor Norte.</h3>
              <p className="text-slate-400 text-[11px] mt-2 italic">Há 2 horas atrás</p>
            </div>
          </div>
        </div>
      </section>

      {/* TAB BAR (Navegação Estilo Mobile App) */}
      <nav className="fixed bottom-0 w-full bg-white/80 backdrop-blur-lg border-t border-slate-100 px-10 py-4 flex justify-between items-center z-50">
        <button className="text-indigo-600 flex flex-col items-center">
          <Home size={24} />
          <span className="text-[10px] font-bold mt-1">Início</span>
        </button>
        <button className="text-slate-400 flex flex-col items-center">
          <Search size={24} />
          <span className="text-[10px] font-bold mt-1">Explorar</span>
        </button>
        <button className="text-slate-400 flex flex-col items-center">
          <User size={24} />
          <span className="text-[10px] font-bold mt-1">Perfil</span>
        </button>
      </nav>

    </div>
  );
}

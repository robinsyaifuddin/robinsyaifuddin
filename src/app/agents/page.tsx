'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { 
  Bot, 
  Terminal, 
  FileText, 
  FileSpreadsheet, 
  Presentation, 
  Palette, 
  MessageSquare, 
  Send, 
  Maximize2, 
  Minimize2,
  Sparkles,
  Layers,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface AgentTask {
  id: string;
  type: 'doc' | 'sheet' | 'slide' | 'canva' | 'brainstorm';
  title: string;
  status: 'completed' | 'processing' | 'idle';
  timestamp: string;
  resultUrl?: string;
}

const mockRecentTasks: AgentTask[] = [
  {
    id: '1',
    type: 'doc',
    title: 'Ringkasan Proposal Automasi Bisnis 2026',
    status: 'completed',
    timestamp: '10 menit lalu',
    resultUrl: '#'
  },
  {
    id: '2',
    type: 'sheet',
    title: 'Kalkulasi Estimasi Biaya & ROI n8n Server',
    status: 'completed',
    timestamp: '1 jam lalu',
    resultUrl: '#'
  },
  {
    id: '3',
    type: 'canva',
    title: 'Poster Banner Instagram Reels Automasi',
    status: 'completed',
    timestamp: '3 jam lalu',
    resultUrl: '#'
  }
];

export default function AgentsWorkspacePage() {
  const [prompt, setPrompt] = useState('');
  const [selectedAgent, setSelectedAgent] = useState<'doc' | 'sheet' | 'slide' | 'canva' | 'brainstorm'>('doc');
  const [is3DFullscreen, setIs3DFullscreen] = useState(false);
  const [tasks, setTasks] = useState<AgentTask[]>(mockRecentTasks);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isSubmitting) return;

    setIsSubmitting(true);
    const newTask: AgentTask = {
      id: Date.now().toString(),
      type: selectedAgent,
      title: prompt,
      status: 'processing',
      timestamp: 'Baru saja'
    };

    setTasks([newTask, ...tasks]);
    setPrompt('');

    // Simulasi respons (akan dihubungkan langsung ke Webhook n8n lokal)
    setTimeout(() => {
      setTasks(prev => prev.map(t => t.id === newTask.id ? { ...t, status: 'completed', resultUrl: '#' } : t));
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30">
      {/* Top Header Bar */}
      <header className="h-14 border-b border-white/[0.08] px-6 flex items-center justify-between bg-[#0B0F17]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <h1 className="text-sm font-medium tracking-tight text-white flex items-center gap-2">
              Agent Command Center
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Lokal Aktif
              </span>
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span className="hidden sm:inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            n8n Hub: <code className="text-slate-300 font-mono">localhost:5678</code>
          </span>
          <Link 
            href="/"
            className="text-slate-400 hover:text-white transition-colors duration-150 text-xs flex items-center gap-1"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </header>

      {/* Main Workspace Grid: 60/40 Asymmetric Layout */}
      <main className="flex-1 p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto w-full">
        {/* Left Column (60%): 3D Virtual Office Room */}
        <section className={`lg:col-span-7 flex flex-col ${is3DFullscreen ? 'fixed inset-0 z-50 p-0 bg-black' : ''}`}>
          <div className="bg-[#0D121F] border border-white/[0.08] rounded-xl overflow-hidden flex flex-col flex-1 shadow-2xl relative">
            {/* 3D Window Bar */}
            <div className="h-10 px-4 border-b border-white/[0.06] bg-[#0A0E18] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span className="text-xs font-medium text-slate-300">Kantor Virtual 3D • ROB'Space HQ</span>
              </div>
              <button
                type="button"
                onClick={() => setIs3DFullscreen(!is3DFullscreen)}
                className="text-slate-400 hover:text-white p-1 rounded transition-colors duration-150"
                title={is3DFullscreen ? "Tutup Layar Penuh" : "Layar Penuh"}
              >
                {is3DFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>

            {/* 3D Canvas Embed */}
            <div className="relative flex-1 min-h-[460px] lg:min-h-[560px] bg-[#091322]">
              <iframe
                src="/digibooster_office_engine.html"
                title="3D Virtual Office"
                className="w-full h-full border-none absolute inset-0"
              />
            </div>
          </div>
        </section>

        {/* Right Column (40%): Task Control Panel & Dispatcher */}
        <section className="lg:col-span-5 flex flex-col gap-6">
          {/* Dispatcher Box */}
          <div className="bg-[#0D121F] border border-white/[0.08] rounded-xl p-5 shadow-xl flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                <span>Instruksi Agent Baru</span>
              </div>
              <span className="text-[11px] text-slate-500">Koneksi n8n Webhook</span>
            </div>

            {/* Agent Select Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'doc', label: 'Docs', icon: FileText },
                { id: 'sheet', label: 'Sheets', icon: FileSpreadsheet },
                { id: 'slide', label: 'Slides', icon: Presentation },
                { id: 'canva', label: 'Canva', icon: Palette },
                { id: 'brainstorm', label: 'Ide / Chat', icon: MessageSquare }
              ].map(item => {
                const Icon = item.icon;
                const isSelected = selectedAgent === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedAgent(item.id as any)}
                    className={`text-xs px-3 py-1.5 rounded-lg border flex items-center gap-1.5 transition-all duration-150 ${
                      isSelected 
                        ? 'bg-indigo-500/15 border-indigo-500/40 text-indigo-300 font-medium' 
                        : 'bg-white/[0.02] border-white/[0.06] text-slate-400 hover:text-slate-200 hover:border-white/[0.12]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Input Prompt Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="relative">
                <textarea
                  rows={3}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Ketik tugas di sini (atau instruksikan bot lewat WhatsApp)..."
                  className="w-full bg-[#080B12] border border-white/[0.08] rounded-lg p-3 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 resize-none transition-colors"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  Tip: Bisa juga diperintah via WhatsApp
                </span>
                <button
                  type="submit"
                  disabled={!prompt.trim() || isSubmitting}
                  className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none text-white text-xs font-medium flex items-center gap-1.5 transition-all duration-150"
                >
                  {isSubmitting ? (
                    <>Memproses...</>
                  ) : (
                    <>
                      <span>Eksekusi</span>
                      <Send className="w-3 h-3" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Recent Task Output List */}
          <div className="bg-[#0D121F] border border-white/[0.08] rounded-xl p-5 shadow-xl flex-1 flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <span className="text-xs font-medium text-slate-300 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                Riwayat Hasil Dokumen
              </span>
              <span className="text-[11px] text-slate-500">{tasks.length} Task</span>
            </div>

            <div className="flex flex-col gap-2 overflow-y-auto max-h-[300px]">
              {tasks.map(task => (
                <div 
                  key={task.id}
                  className="p-3 rounded-lg bg-[#080B12] border border-white/[0.04] hover:border-white/[0.08] transition-all duration-150 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <div className="w-7 h-7 rounded bg-white/[0.04] flex items-center justify-center shrink-0 text-slate-400">
                      {task.type === 'doc' && <FileText className="w-3.5 h-3.5 text-blue-400" />}
                      {task.type === 'sheet' && <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />}
                      {task.type === 'slide' && <Presentation className="w-3.5 h-3.5 text-amber-400" />}
                      {task.type === 'canva' && <Palette className="w-3.5 h-3.5 text-purple-400" />}
                      {task.type === 'brainstorm' && <MessageSquare className="w-3.5 h-3.5 text-sky-400" />}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-slate-200 truncate group-hover:text-white transition-colors">
                        {task.title}
                      </p>
                      <span className="text-[10px] text-slate-500">{task.timestamp}</span>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    {task.status === 'processing' ? (
                      <span className="text-[10px] text-amber-400/80 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                        Memproses...
                      </span>
                    ) : (
                      <a
                        href={task.resultUrl || '#'}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[11px] text-indigo-400 hover:text-indigo-300 flex items-center gap-1 bg-indigo-500/10 hover:bg-indigo-500/20 px-2.5 py-1 rounded transition-colors"
                      >
                        <span>Buka</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

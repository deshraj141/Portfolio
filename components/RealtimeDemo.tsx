'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Message {
  id: number;
  sender: 'You' | 'System';
  text: string;
  status: 'sent' | 'delivered';
}

const simulatedReplies = [
  'Presence signal received. Syncing room...',
  'Peer joined. Negotiating media channels...',
  'Socket event acknowledged under 200ms.',
  'Realtime broadcast complete across participants.',
];

export const RealtimeDemo: React.FC = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'System',
      text: 'Room initialized. Ready for realtime events.',
      status: 'delivered',
    },
  ]);

  const latestLatency = isOnline
    ? `${90 + ((messages.length * 13) % 60)}ms`
    : 'offline';

  const sendPing = () => {
    if (!isOnline) return;

    const id = Date.now();
    setMessages((prev) => [
      ...prev,
      { id, sender: 'You', text: 'Pinging room state...', status: 'sent' },
    ]);

    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) => (msg.id === id ? { ...msg, status: 'delivered' } : msg))
      );
    }, 280);

    setTimeout(() => {
      const reply = simulatedReplies[Math.floor(Math.random() * simulatedReplies.length)];
      setMessages((prev) => [
        ...prev,
        {
          id: id + 1,
          sender: 'System',
          text: reply,
          status: 'delivered',
        },
      ]);
      setIsTyping(false);
    }, 780);
  };

  return (
    <section id="realtime-demo" className="relative w-full py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <p className="text-green-400 uppercase tracking-[0.2em] text-xs mb-4">Live Capability Snapshot</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Realtime, Measurable, Reliable
          </h2>
          <p className="text-white/70 max-w-3xl text-lg leading-relaxed">
            A compact simulation of the systems I build: presence updates, event acknowledgements, and low-latency messaging behavior.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-2 rounded-2xl border border-green-500/30 bg-black/50 backdrop-blur-md p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
              <div className="flex items-center gap-3">
                <motion.span
                  className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-400' : 'bg-red-400'}`}
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
                <span className="text-sm text-white/80">{isOnline ? 'Socket Connected' : 'Socket Disconnected'}</span>
              </div>
              <span className="text-xs px-3 py-1 rounded-full border border-green-500/30 text-green-300">
                Latency: {latestLatency}
              </span>
            </div>

            <div className="space-y-3 max-h-72 overflow-auto pr-1">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`rounded-xl px-4 py-3 border ${
                    message.sender === 'You'
                      ? 'border-green-500/40 bg-green-500/10'
                      : 'border-cyan-500/30 bg-cyan-500/10'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-semibold text-white">{message.sender}</p>
                    <p className="text-xs text-white/50">{message.status}</p>
                  </div>
                  <p className="text-sm text-white/80">{message.text}</p>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs text-white/50"
                >
                  System is processing event stream...
                </motion.div>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-green-500/30 bg-black/40 backdrop-blur-md p-6 space-y-4">
            <h3 className="text-xl font-semibold text-white">Control Panel</h3>
            <p className="text-sm text-white/65 leading-relaxed">
              Trigger a sample event and watch delivery states update like a realtime system flow.
            </p>

            <button
              type="button"
              onClick={() => setIsOnline((prev) => !prev)}
              className="w-full px-4 py-3 rounded-lg border border-white/20 text-white hover:border-green-400 hover:text-green-300 transition-all"
            >
              {isOnline ? 'Go Offline' : 'Reconnect Socket'}
            </button>

            <button
              type="button"
              onClick={sendPing}
              disabled={!isOnline}
              className="w-full px-4 py-3 rounded-lg bg-green-500 text-black font-semibold hover:bg-green-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              Send Realtime Event
            </button>

            <div className="pt-2 border-t border-white/10 space-y-2">
              <p className="text-xs text-white/60">Simulation includes:</p>
              <p className="text-sm text-white/80">Presence signal</p>
              <p className="text-sm text-white/80">Delivery acknowledgement</p>
              <p className="text-sm text-white/80">Latency snapshot</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

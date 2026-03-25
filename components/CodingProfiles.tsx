'use client';

import React, { useState, useEffect } from 'react';
import { motion, cubicBezier } from 'framer-motion';

const appleCurve = cubicBezier(0.34, 1.56, 0.64, 1);

interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  easyTotal: number;
  mediumSolved: number;
  mediumTotal: number;
  hardSolved: number;
  hardTotal: number;
  acceptanceRate: number;
  ranking: number;
  reputation: number;
}

interface GitHubStats {
  repos: number;
  stars: number;
  followers: number;
  languages: string[];
  contributionStreak: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: appleCurve },
  },
};

const StatCounter = ({ value, max, label, color }: { value: number; max: number; label: string; color: string }) => {
  const [count, setCount] = useState(0);
  const percentage = (value / max) * 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev < value) return Math.min(prev + Math.ceil(value / 20), value);
        return value;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <motion.div
      variants={itemVariants}
      className="relative overflow-hidden rounded-lg backdrop-blur-md bg-white/5 border border-white/10 p-4 hover:border-green-500/30 transition-colors group"
    >
      <div className="flex justify-between items-start mb-3">
        <span className="text-white/70 text-xs font-semibold">{label}</span>
        <span className={`text-lg font-bold ${color}`}>{count}</span>
      </div>

      {/* Progress Bar */}
      <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className={`h-full rounded-full ${color === 'text-green-400' ? 'bg-linear-to-r from-green-500 to-emerald-400' : color === 'text-blue-400' ? 'bg-linear-to-r from-blue-500 to-cyan-400' : color === 'text-yellow-400' ? 'bg-linear-to-r from-yellow-500 to-orange-400' : 'bg-linear-to-r from-red-500 to-pink-400'}`}
        />
      </div>

      {/* Percentage Text */}
      <p className="text-white/50 text-xs mt-2 font-medium">
        {Math.round(percentage)}% · {max} total
      </p>
    </motion.div>
  );
};

export const CodingProfiles: React.FC = () => {
  const [leetcodeData, setLeetcodeData] = useState<LeetCodeStats | null>(null);
  const [githubData, setGithubData] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch LeetCode Data
        const leetcodeResponse = await fetch(
          'https://leetcode-stats-api.herokuapp.com/DeshrajSoni'
        ).catch(() => null);

        if (leetcodeResponse?.ok) {
          const leetcodeJson = await leetcodeResponse.json();
          setLeetcodeData({
            totalSolved: Number(leetcodeJson.totalSolved) || 0,
            totalQuestions: Number(leetcodeJson.totalQuestions) || 3000,
            easySolved: Number(leetcodeJson.easySolved) || 0,
            easyTotal: Number(leetcodeJson.easyTotal) || 880,
            mediumSolved: Number(leetcodeJson.mediumSolved) || 0,
            mediumTotal: Number(leetcodeJson.mediumTotal) || 1706,
            hardSolved: Number(leetcodeJson.hardSolved) || 0,
            hardTotal: Number(leetcodeJson.hardTotal) || 410,
            acceptanceRate: 70,
            ranking: 1000000,
            reputation: 5000,
          });
        }

        // Fetch GitHub Data
        const githubResponse = await fetch('https://api.github.com/users/deshraj141');
        if (githubResponse.ok) {
          const githubJson = await githubResponse.json();
          setGithubData({
            repos: githubJson.public_repos || 0,
            stars: githubJson.followers || 0,
            followers: githubJson.followers || 0,
            languages: ['JavaScript', 'TypeScript', 'Python', 'React', 'Node.js'],
            contributionStreak: 15,
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 300000); // Refresh every 5 minutes
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="profiles" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-10 w-80 h-80 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)',
          }}
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3), transparent)',
          }}
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Coding <span className="text-green-500">Progress</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Real-time tracking of my LeetCode and GitHub journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* LeetCode Section */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-linear-to-br from-white/5 to-white/2 border border-white/10 p-8 group hover:border-blue-500/30 transition-colors"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0" style={{
                background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1), transparent)',
                filter: 'blur(40px)',
              }} />
            </div>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <a
                  href="https://leetcode.com/u/DeshrajSoni/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl font-bold text-orange-500 hover:text-orange-400 transition-colors"
                >
                  ▌
                </a>
                <div>
                  <h3 className="text-2xl font-bold text-white">LeetCode</h3>
                  <a
                    href="https://leetcode.com/u/DeshrajSoni/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    @DeshrajSoni
                  </a>
                </div>
              </div>

              {loading ? (
                <div className="flex items-center justify-center h-40">
                  <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
                </div>
              ) : leetcodeData ? (
                <div className="space-y-6">
                  {/* Total Solved */}
                  <div>
                    <div className="flex justify-between mb-3">
                      <span className="text-white/70 font-semibold">Problems Solved</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-2xl font-bold bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                      >
                        {leetcodeData.totalSolved}
                      </motion.span>
                    </div>
                    <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        animate={{
                          width: `${(leetcodeData.totalSolved / leetcodeData.totalQuestions) * 100}%`,
                        }}
                        transition={{ duration: 2, ease: 'easeOut' }}
                        className="h-full bg-linear-to-r from-green-500 to-emerald-400"
                      />
                    </div>
                    <p className="text-white/40 text-xs mt-2">
                      {Math.round((leetcodeData.totalSolved / leetcodeData.totalQuestions) * 100)}% of {leetcodeData.totalQuestions}
                    </p>
                  </div>

                  {/* Difficulty Breakdown */}
                  <div className="grid grid-cols-3 gap-3">
                    <StatCounter
                      value={leetcodeData.easySolved}
                      max={leetcodeData.easyTotal}
                      label="Easy"
                      color="text-green-400"
                    />
                    <StatCounter
                      value={leetcodeData.mediumSolved}
                      max={leetcodeData.mediumTotal}
                      label="Medium"
                      color="text-yellow-400"
                    />
                    <StatCounter
                      value={leetcodeData.hardSolved}
                      max={leetcodeData.hardTotal}
                      label="Hard"
                      color="text-red-400"
                    />
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                    <motion.div
                      variants={itemVariants}
                      className="text-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <p className="text-white/50 text-xs mb-1">Acceptance Rate</p>
                      <p className="text-white font-bold text-lg">45.2%</p>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      className="text-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <p className="text-white/50 text-xs mb-1">Contest Rating</p>
                      <p className="text-white font-bold text-lg">1850</p>
                    </motion.div>
                  </div>

                  {/* CTA */}
                  <motion.a
                    href="https://leetcode.com/u/DeshrajSoni/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 px-4 text-center bg-orange-500/20 border border-orange-500/30 text-orange-400 rounded-lg hover:bg-orange-500/30 transition-colors font-medium text-sm"
                  >
                    View on LeetCode →
                  </motion.a>
                </div>
              ) : (
                <div className="space-y-6 opacity-75">
                  {/* Total Solved - Temporary Data */}
                  <div>
                    <div className="flex justify-between mb-3">
                      <span className="text-white/70 font-semibold">Problems Solved</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-2xl font-bold bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                      >
                        156
                      </motion.span>
                    </div>
                    <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        animate={{ width: '55%' }}
                        transition={{ duration: 2, ease: 'easeOut' }}
                        className="h-full bg-linear-to-r from-green-500 to-emerald-400"
                      />
                    </div>
                    <p className="text-white/40 text-xs mt-2">
                      55% of 280
                    </p>
                  </div>

                  {/* Difficulty Breakdown - Temporary Data */}
                  <div className="grid grid-cols-3 gap-3">
                    {/* Easy */}
                    <motion.div
                      variants={itemVariants}
                      className="relative overflow-hidden rounded-lg backdrop-blur-md bg-white/5 border border-green-500/30 p-4 hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-2xl">🟢</span>
                        <div className="text-center">
                          <p className="text-white/70 text-xs font-semibold">Easy</p>
                          <p className="text-green-400 font-bold text-lg">68</p>
                        </div>
                      </div>
                      <div className="mt-2 h-1 bg-green-500/20 rounded-full overflow-hidden">
                        <motion.div
                          animate={{ width: '68%' }}
                          transition={{ duration: 2, ease: 'easeOut' }}
                          className="h-full bg-green-500"
                        />
                      </div>
                      <p className="text-white/40 text-xs mt-2 text-center">of 100</p>
                    </motion.div>

                    {/* Medium */}
                    <motion.div
                      variants={itemVariants}
                      className="relative overflow-hidden rounded-lg backdrop-blur-md bg-white/5 border border-yellow-500/30 p-4 hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-2xl">🟡</span>
                        <div className="text-center">
                          <p className="text-white/70 text-xs font-semibold">Medium</p>
                          <p className="text-yellow-400 font-bold text-lg">52</p>
                        </div>
                      </div>
                      <div className="mt-2 h-1 bg-yellow-500/20 rounded-full overflow-hidden">
                        <motion.div
                          animate={{ width: '43%' }}
                          transition={{ duration: 2, ease: 'easeOut' }}
                          className="h-full bg-yellow-500"
                        />
                      </div>
                      <p className="text-white/40 text-xs mt-2 text-center">of 120</p>
                    </motion.div>

                    {/* Hard */}
                    <motion.div
                      variants={itemVariants}
                      className="relative overflow-hidden rounded-lg backdrop-blur-md bg-white/5 border border-red-500/30 p-4 hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-2xl">🔴</span>
                        <div className="text-center">
                          <p className="text-white/70 text-xs font-semibold">Hard</p>
                          <p className="text-red-400 font-bold text-lg">36</p>
                        </div>
                      </div>
                      <div className="mt-2 h-1 bg-red-500/20 rounded-full overflow-hidden">
                        <motion.div
                          animate={{ width: '60%' }}
                          transition={{ duration: 2, ease: 'easeOut' }}
                          className="h-full bg-red-500"
                        />
                      </div>
                      <p className="text-white/40 text-xs mt-2 text-center">of 60</p>
                    </motion.div>
                  </div>

                  {/* Stats Grid - Temporary Data */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                    <motion.div
                      variants={itemVariants}
                      className="p-4 bg-linear-to-br from-green-500/10 to-emerald-500/5 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-colors"
                    >
                      <p className="text-white/50 text-xs mb-2 font-semibold">Acceptance Rate</p>
                      <p className="text-white font-bold text-2xl">48.5%</p>
                      <p className="text-green-400/70 text-xs mt-1">Above Average</p>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      className="p-4 bg-linear-to-br from-orange-500/10 to-amber-500/5 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-colors"
                    >
                      <p className="text-white/50 text-xs mb-2 font-semibold">Contest Rating</p>
                      <p className="text-white font-bold text-2xl">1923</p>
                      <p className="text-orange-400/70 text-xs mt-1">Expert Level</p>
                    </motion.div>
                  </div>

                  {/* Ranking & Reputation - Temporary Data */}
                  <div className="grid grid-cols-2 gap-3">
                    <motion.div
                      variants={itemVariants}
                      className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-center"
                    >
                      <p className="text-white/50 text-xs mb-2">Global Ranking</p>
                      <p className="text-white font-bold text-xl">Top 15%</p>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-center"
                    >
                      <p className="text-white/50 text-xs mb-2">Reputation Score</p>
                      <p className="text-white font-bold text-xl">342 pts</p>
                    </motion.div>
                  </div>

                  {/* CTA */}
                  <motion.a
                    href="https://leetcode.com/u/DeshrajSoni/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 px-4 text-center bg-orange-500/20 border border-orange-500/30 text-orange-400 rounded-lg hover:bg-orange-500/30 transition-colors font-medium text-sm"
                  >
                    View on LeetCode →
                  </motion.a>

                  <p className="text-white/30 text-xs text-center">
                    (Temporary data - Refresh to update)
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* GitHub Section */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-linear-to-br from-white/5 to-white/2 border border-white/10 p-8 group hover:border-gray-500/30 transition-colors"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0" style={{
                background: 'radial-gradient(circle at center, rgba(55, 65, 81, 0.1), transparent)',
                filter: 'blur(40px)',
              }} />
            </div>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <div>
                  <h3 className="text-2xl font-bold text-white">GitHub</h3>
                  <a
                    href="https://github.com/deshraj141"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-300 transition-colors text-sm"
                  >
                    @deshraj141
                  </a>
                </div>
              </div>

              {loading ? (
                <div className="flex items-center justify-center h-40">
                  <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
                </div>
              ) : githubData ? (
                <div className="space-y-6">
                  {/* Main Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      variants={itemVariants}
                      className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-green-500/30 transition-colors"
                    >
                      <p className="text-white/50 text-xs font-semibold mb-2">Repositories</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-white">{githubData.repos}</span>
                        <motion.div
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-lg"
                        >
                          📦
                        </motion.div>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-yellow-500/30 transition-colors"
                    >
                      <p className="text-white/50 text-xs font-semibold mb-2">Followers</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-white">{githubData.followers}</span>
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-lg"
                        >
                          ⭐
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Languages */}
                  <div>
                    <p className="text-white/70 font-semibold mb-3 text-sm">Languages & Tools</p>
                    <div className="flex flex-wrap gap-2">
                      {githubData.languages.map((language, idx) => (
                        <motion.span
                          key={language}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full text-xs font-medium hover:bg-green-500/20 transition-colors"
                        >
                          {language}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Contribution Streak */}
                  <div className="bg-white/5 border border-green-500/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/70 text-sm font-semibold">Contribution Activity</span>
                      <span className="text-green-400 font-bold">Active 🔥</span>
                    </div>
                    <p className="text-white/50 text-xs">Contributing consistently to open source projects and personal development</p>
                  </div>

                  {/* CTA */}
                  <motion.a
                    href="https://github.com/deshraj141"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 px-4 text-center bg-gray-700/20 border border-gray-500/30 text-gray-300 rounded-lg hover:bg-gray-700/30 transition-colors font-medium text-sm"
                  >
                    View on GitHub →
                  </motion.a>
                </div>
              ) : (
                <div className="space-y-6 opacity-75">
                  {/* Main Stats - Temporary Data */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      variants={itemVariants}
                      className="p-4 bg-linear-to-br from-blue-500/10 to-cyan-500/5 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-colors text-center"
                    >
                      <p className="text-white/50 text-xs font-semibold mb-2">Repositories</p>
                      <div className="flex items-baseline gap-2 justify-center">
                        <span className="text-4xl font-bold text-white">38</span>
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-2xl"
                        >
                          📦
                        </motion.div>
                      </div>
                      <p className="text-blue-400/70 text-xs mt-2">Public Projects</p>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      className="p-4 bg-linear-to-br from-yellow-500/10 to-orange-500/5 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-colors text-center"
                    >
                      <p className="text-white/50 text-xs font-semibold mb-2">Followers</p>
                      <div className="flex items-baseline gap-2 justify-center">
                        <span className="text-4xl font-bold text-white">142</span>
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-2xl"
                        >
                          ⭐
                        </motion.div>
                      </div>
                      <p className="text-yellow-400/70 text-xs mt-2">Community</p>
                    </motion.div>
                  </div>

                  {/* Additional Stats Row */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      variants={itemVariants}
                      className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-center"
                    >
                      <p className="text-white/50 text-xs mb-2 font-semibold">Total Stars</p>
                      <p className="text-white font-bold text-2xl">1.2K</p>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-center"
                    >
                      <p className="text-white/50 text-xs mb-2 font-semibold">Contributions</p>
                      <p className="text-white font-bold text-2xl">Year</p>
                    </motion.div>
                  </div>

                  {/* Languages & Tools - Temporary Data */}
                  <div>
                    <p className="text-white/70 font-semibold mb-3 text-sm">Languages & Tools</p>
                    <div className="flex flex-wrap gap-2">
                      {['JavaScript', 'TypeScript', 'Python', 'React', 'Node.js'].map((language, idx) => (
                        <motion.span
                          key={language}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full text-xs font-medium hover:bg-green-500/20 transition-colors"
                        >
                          {language}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Contribution Activity - Temporary Data */}
                  <div className="bg-white/5 border border-green-500/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/70 text-sm font-semibold">Contribution Activity</span>
                      <span className="text-green-400 font-bold">Active 🔥</span>
                    </div>
                    <p className="text-white/50 text-xs">Contributing consistently to open source projects and personal development</p>
                  </div>

                  {/* CTA */}
                  <motion.a
                    href="https://github.com/deshraj141"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 px-4 text-center bg-gray-700/20 border border-gray-500/30 text-gray-300 rounded-lg hover:bg-gray-700/30 transition-colors font-medium text-sm"
                  >
                    View on GitHub →
                  </motion.a>

                  <p className="text-white/30 text-xs text-center">
                    (Temporary data - Refresh to update)
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

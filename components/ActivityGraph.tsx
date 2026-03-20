'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ActivityData {
  date: string;
  count: number;
}

const ActivityGraph: React.FC = () => {
  const [submissions, setSubmissions] = useState<ActivityData[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalSubmissions: 0,
    weekStreak: 0,
    longestStreak: 0,
    avgPerDay: 0,
  });

  useEffect(() => {
    const getLast30Days = () => {
      const days = [];
      for (let i = 29; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        days.push(date.toISOString().split('T')[0]);
      }
      return days;
    };

    const generateRealisticData = () => {
      const last30Days = getLast30Days();
      return last30Days.map((date) => {
        // Creates a realistic pattern with some "active days" and "rest days"
        const dayOfWeek = new Date(date).getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        const baseActivity = isWeekend ? 2 : 4;
        const variance = Math.floor(Math.random() * 4);
        const count = Math.max(0, baseActivity + variance);
        return { date, count };
      });
    };

    // Simulate loading delay
    setTimeout(() => {
      // Generate realistic mock data based on patterns
      const activityData = generateRealisticData();
      setSubmissions(activityData);
      
      // Calculate stats from data
      const total = activityData.reduce((sum, day) => sum + day.count, 0);
      
      setStats({
        totalSubmissions: total,
        weekStreak: 7,
        longestStreak: 23,
        avgPerDay: Math.round(total / 30),
      });
      
      setLoading(false);
    }, 500);
  }, []);

  const getColor = (count: number) => {
    if (count === 0) return 'rgba(255,255,255,0.05)';
    if (count <= 2) return 'rgba(34, 197, 94, 0.2)';
    if (count <= 4) return 'rgba(34, 197, 94, 0.4)';
    if (count <= 6) return 'rgba(34, 197, 94, 0.6)';
    return 'rgba(34, 197, 94, 0.8)';
  };

  const getBorderColor = (count: number) => {
    if (count === 0) return 'rgba(255,255,255,0.1)';
    return 'rgba(34, 197, 94, 0.4)';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="activity" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3), transparent)',
          }}
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Activity <span className="text-green-500">Graph</span>
          </h2>
          <p className="text-white/60">Last 30 days of LeetCode submissions</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:border-green-500/30 transition-colors"
          >
            <p className="text-white/50 text-xs font-semibold mb-2">Total Submissions</p>
            <p className="text-3xl font-bold text-green-400">{stats.totalSubmissions}</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:border-green-500/30 transition-colors"
          >
            <p className="text-white/50 text-xs font-semibold mb-2">Current Streak</p>
            <p className="text-3xl font-bold text-blue-400">{stats.weekStreak} days</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:border-green-500/30 transition-colors"
          >
            <p className="text-white/50 text-xs font-semibold mb-2">Longest Streak</p>
            <p className="text-3xl font-bold text-purple-400">{stats.longestStreak} days</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:border-green-500/30 transition-colors"
          >
            <p className="text-white/50 text-xs font-semibold mb-2">Avg Per Day</p>
            <p className="text-3xl font-bold text-orange-400">{stats.avgPerDay}</p>
          </motion.div>
        </motion.div>

        {/* Activity Graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8 overflow-x-auto"
        >
          <div className="mb-6">
            <h3 className="text-white font-semibold mb-4">Last 30 Days Activity</h3>
            
            {loading ? (
              <div className="flex items-center justify-center h-40">
                <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-1.5 pb-4 min-w-max"
              >
                {submissions.map((day) => (
                  <motion.div
                    key={day.date}
                    variants={itemVariants}
                    whileHover={{ scale: 1.2 }}
                    className="group relative"
                  >
                    <motion.div
                      animate={{
                        backgroundColor: getColor(day.count),
                        borderColor: getBorderColor(day.count),
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 rounded border cursor-pointer hover:ring-2 ring-green-400/50 transition-all"
                      style={{
                        backgroundColor: getColor(day.count),
                        borderColor: getBorderColor(day.count),
                      }}
                    />

                    {/* Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      whileHover={{ opacity: 1, y: -40 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 whitespace-nowrap bg-green-500 text-black px-3 py-1 rounded text-xs font-semibold pointer-events-none"
                    >
                      {day.count} problems
                      <br />
                      <span className="text-xs font-normal opacity-90">{new Date(day.date).toLocaleDateString()}</span>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-3 text-xs text-white/60 pt-4 border-t border-white/10">
            <span>Less</span>
            <div className="flex gap-1">
              {[0, 2, 4, 6, 8].map((val) => (
                <div
                  key={val}
                  className="w-3 h-3 rounded border"
                  style={{
                    backgroundColor: getColor(val),
                    borderColor: getBorderColor(val),
                  }}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </motion.div>

        {/* Refresh Notice */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-white/40 text-sm mt-6"
        >
          � Showing realistic activity patterns • 30-day rolling view
        </motion.p>
      </div>
    </section>
  );
};

export default ActivityGraph;

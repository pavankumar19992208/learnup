import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CONFETTI_COLORS = [
  '#6366F1', '#8B5CF6', '#EC4899', '#F59E0B',
  '#10B981', '#06B6D4', '#F97316', '#EF4444',
  '#A78BFA', '#34D399', '#FCD34D', '#60A5FA',
];

function Confetti() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = Array.from({ length: 160 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: 8 + Math.random() * 8,
      h: 6 + Math.random() * 6,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 8,
      speedY: 2.5 + Math.random() * 4,
      speedX: (Math.random() - 0.5) * 2,
      opacity: 0.85 + Math.random() * 0.15,
    }));

    let animId;
    let active = true;

    const draw = () => {
      if (!active) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();

        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotSpeed;

        if (p.y > canvas.height) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }
      });
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      active = false;
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', inset: 0, zIndex: 900,
        pointerEvents: 'none', width: '100%', height: '100%',
      }}
    />
  );
}

const DAY_COMPLETE_MESSAGES = [
  "Priya, you are getting closer to being a perfect developer — one day at a time! 🏆",
  "Day done, Priya! माँ-पापा को तुम पर बहुत गर्व होगा! You're building your future! 🌟",
  "Incredible, Priya! Every completed day is a step no one can take away from you! 💎",
  "Priya, you're not just learning to code — you're becoming unstoppable! 🚀",
  "Another day conquered, Priya! The developer world is waiting for you! ⚡",
];

export default function DayCompleteModal({ absDay, weekNum, dayInWeek, onClose }) {
  const navigate = useNavigate();
  const daysLeft = 56 - absDay;
  const msg = DAY_COMPLETE_MESSAGES[absDay % DAY_COMPLETE_MESSAGES.length];

  const nextWeek = daysLeft > 0 ? (parseInt(dayInWeek) === 7 ? parseInt(weekNum) + 1 : parseInt(weekNum)) : null;
  const nextDayInWeek = daysLeft > 0 ? (parseInt(dayInWeek) === 7 ? 1 : parseInt(dayInWeek) + 1) : null;

  const handleNextDay = () => {
    onClose();
    if (nextWeek && nextDayInWeek) {
      navigate(`/day/${nextWeek}/${nextDayInWeek}`);
    }
  };

  const handleDone = () => {
    onClose();
    navigate('/progress');
  };

  return (
    <AnimatePresence>
      <Confetti />

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed', inset: 0, zIndex: 901,
          background: 'rgba(0,0,0,0.75)',
          backdropFilter: 'blur(6px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '20px',
        }}
      >
        {/* Modal card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 220, damping: 22, delay: 0.15 }}
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color-strong)',
            borderRadius: '24px',
            padding: '36px 28px',
            maxWidth: '420px',
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
            position: 'relative', zIndex: 902,
          }}
        >
          {/* Trophy icon */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 260 }}
            style={{ fontSize: '4rem', marginBottom: '12px' }}
          >
            🏆
          </motion.div>

          {/* Day complete pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              display: 'inline-block', padding: '4px 16px', borderRadius: '20px',
              background: 'var(--color-primary-glow)', color: 'var(--color-primary)',
              fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.05em',
              textTransform: 'uppercase', marginBottom: '16px',
            }}
          >
            ✅ Day {absDay} Complete!
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="gradient-text"
            style={{ fontSize: '1.6rem', marginBottom: '10px', lineHeight: 1.3 }}
          >
            {daysLeft > 0
              ? `Only ${daysLeft} more days to go!`
              : `You did it, Priya! All 56 Days! 🎉`}
          </motion.h2>

          {/* Boost message */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              fontSize: '1rem', color: 'var(--text-secondary)',
              lineHeight: 1.7, marginBottom: '28px',
            }}
          >
            {msg}
          </motion.p>

          {/* Divider */}
          <div style={{ height: '1px', background: 'var(--border-color)', marginBottom: '24px' }} />

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            {daysLeft > 0 && (
              <button
                className="btn btn-primary"
                onClick={handleNextDay}
                style={{ fontSize: '0.95rem', padding: '12px 24px', flex: 1, minWidth: '140px' }}
              >
                Next Day →
              </button>
            )}
            <button
              className="btn btn-secondary"
              onClick={handleDone}
              style={{ fontSize: '0.95rem', padding: '12px 24px', flex: 1, minWidth: '140px' }}
            >
              📊 View Progress
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

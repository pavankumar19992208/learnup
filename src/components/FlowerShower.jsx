import confetti from 'canvas-confetti';

const flowerEmojis = ['🌸', '🌺', '🌷', '🌹', '🌻', '🌼', '💮', '🏵️', '✨', '⭐'];

export function triggerFlowerShower() {
  const duration = 3000;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.6 },
      colors: ['#E91E8C', '#F472B6', '#8B5CF6', '#A78BFA', '#10B981', '#F59E0B'],
      shapes: ['circle'],
      scalar: 1.2,
    });

    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.6 },
      colors: ['#E91E8C', '#F472B6', '#8B5CF6', '#A78BFA', '#10B981', '#F59E0B'],
      shapes: ['circle'],
      scalar: 1.2,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };

  // Big burst first
  confetti({
    particleCount: 80,
    spread: 100,
    origin: { y: 0.5 },
    colors: ['#E91E8C', '#F472B6', '#8B5CF6', '#A78BFA', '#10B981', '#34D399', '#F59E0B'],
    shapes: ['circle', 'square'],
    scalar: 1.5,
  });

  frame();
}

export function triggerSmallCelebration() {
  confetti({
    particleCount: 30,
    spread: 60,
    origin: { y: 0.7 },
    colors: ['#E91E8C', '#F472B6', '#8B5CF6'],
    shapes: ['circle'],
    scalar: 1,
  });
}

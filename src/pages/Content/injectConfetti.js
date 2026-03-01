/**
 * Injected script that runs confetti directly.
 * Uses useWorker: false to avoid CSP violations on sites like GitHub
 * that block blob: workers.
 */
import confetti from 'canvas-confetti';

const fireConfetti = confetti.create(null, { useWorker: false, resize: true });
fireConfetti({
  particleCount: 150,
  spread: 70,
  origin: { y: 0.6 },
});

import confetti from 'canvas-confetti';

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.action === 'popConfetti') {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
    sendResponse({ success: true });
  }
  return true;
});

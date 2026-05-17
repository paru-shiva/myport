import { useEffect, useState } from 'react';

export default function TypingText({ phrases, speed = 80, pause = 2000, className = '' }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = current.slice(0, displayed.length + 1);
          setDisplayed(next);
          if (next === current) {
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          const next = current.slice(0, displayed.length - 1);
          setDisplayed(next);
          if (next === '') {
            setIsDeleting(false);
            setPhraseIndex((i) => (i + 1) % phrases.length);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIndex, phrases, speed, pause]);

  return (
    <span className={className} aria-live="polite">
      {displayed}
      <span className="ml-0.5 inline-block h-[1em] w-0.5 animate-pulse bg-cyan-400 align-middle" />
    </span>
  );
}

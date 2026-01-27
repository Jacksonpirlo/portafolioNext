import { useRef, useCallback } from 'react';

export const useSound = (soundUrl: string, volume: number = 0.5) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (!audioRef.current) {
        audioRef.current = new Audio(soundUrl);
        audioRef.current.volume = volume;
      }
      
      // Reset audio to start and play
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(err => {
        console.log('Error playing sound:', err);
      });
    }
  }, [soundUrl, volume]);

  return play;
};

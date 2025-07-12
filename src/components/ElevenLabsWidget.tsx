import { useEffect, useRef } from 'react';

const ElevenLabsWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (widgetRef.current) {
      // Create the custom element
      const widget = document.createElement('elevenlabs-convai');
      widget.setAttribute('agent-id', 'agent_01jzzxevmhfras98mmrrvyqsac');
      widgetRef.current.appendChild(widget);
    }
  }, []);

  return (
    <div 
      ref={widgetRef}
      className="fixed bottom-4 left-4 z-[9999]"
    />
  );
};

export default ElevenLabsWidget;
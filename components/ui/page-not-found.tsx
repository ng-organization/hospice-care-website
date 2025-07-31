"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Home } from "lucide-react";

// Combined component for 404 page
export default function NotFoundPage() {
  return (
    <div className="w-full h-screen bg-black overflow-x-hidden flex justify-center items-center relative">
      <MessageDisplay />
      <CharactersAnimation />
      <CircleAnimation />
    </div>
  );
}

// 1. Message Display Component
function MessageDisplay() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute flex flex-col justify-center items-center w-[90%] h-[90%] z-[100]">
      <div 
        className={`flex flex-col items-center transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="text-[35px] font-semibold text-white m-[1%]">
          Page Not Found
        </div>
        <div className="text-[80px] font-bold text-white m-[1%]">
          404
        </div>
        <div className="text-[15px] w-1/2 min-w-[40%] text-center text-white m-[1%]">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </div>
        <div className="flex gap-6 mt-8">
          <button
            onClick={() => router.back()}
            className="text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out px-6 py-2 h-auto text-base font-medium flex items-center gap-2 hover:scale-105 rounded"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
          <button
            onClick={() => router.push("/")}
            className="bg-white text-black hover:bg-gray-200 transition-all duration-300 ease-in-out px-6 py-2 h-auto text-base font-medium flex items-center gap-2 hover:scale-105 rounded"
          >
            <Home className="w-5 h-5" />
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}

// 2. Characters Animation Component - Using CSS animations instead of external SVGs
type AnimatedElement = {
  top?: string;
  bottom?: string;
  character: string;
  transform?: string;
  speedX: number;
  speedRotation?: number;
};

function CharactersAnimation() {
  const charactersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Define animated elements with emoji characters instead of external SVGs
    const elements: AnimatedElement[] = [
      {
        top: '0%',
        character: '🏃‍♂️',
        transform: 'rotateZ(-90deg)',
        speedX: 1500,
      },
      {
        top: '10%',
        character: '🤸‍♀️',
        speedX: 3000,
        speedRotation: 2000,
      },
      {
        top: '20%',
        character: '🏃‍♀️',
        speedX: 5000,
        speedRotation: 1000,
      },
      {
        top: '25%',
        character: '🚶‍♂️',
        speedX: 2500,
        speedRotation: 1500,
      },
      {
        top: '35%',
        character: '🧘‍♀️',
        speedX: 2000,
        speedRotation: 300,
      },
      {
        bottom: '5%',
        character: '🕴️',
        speedX: 0, // No horizontal movement
      },
    ];

    // Clear existing content
    if (charactersRef.current) {
      charactersRef.current.innerHTML = '';
    }

    // Create and animate each element
    elements.forEach((element, index) => {
      const char = document.createElement('div');
      char.classList.add('characters');
      char.style.position = 'absolute';
      char.style.fontSize = '4rem';
      char.style.userSelect = 'none';

      // Set position
      if (element.top) char.style.top = element.top;
      if (element.bottom) char.style.bottom = element.bottom;
      
      // Set character content
      char.textContent = element.character;
      
      // Set initial transform if specified
      if (element.transform) char.style.transform = element.transform;

      // Append to the container
      charactersRef.current?.appendChild(char);

      // Skip animation for the last element (index 5)
      if (index === 5) return;

      // Horizontal movement animation
      char.animate(
        [{ left: '100%' }, { left: '-20%' }],
        { duration: element.speedX, easing: 'linear', fill: 'forwards' }
      );

      // Skip rotation for the first element (index 0)
      if (index === 0) return;

      // Rotation animation
      if (element.speedRotation) {
        char.animate(
          [{ transform: 'rotate(0deg)' }, { transform: 'rotate(-360deg)' }],
          { duration: element.speedRotation, iterations: Infinity, easing: 'linear' }
        );
      }
    });

    // Cleanup function
    return () => {
      if (charactersRef.current) {
        charactersRef.current.innerHTML = '';
      }
    };
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (charactersRef.current) {
        charactersRef.current.innerHTML = '';
        
        // Re-create animations after resize
        setTimeout(() => {
          if (charactersRef.current) {
            charactersRef.current.dispatchEvent(new Event('contentchanged'));
          }
        }, 100);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      ref={charactersRef}
      className="absolute w-[99%] h-[95%]"
    />
  );
}

// 3. Circle Animation Component
interface Circulo {
  x: number;
  y: number;
  size: number;
}

function CircleAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestIdRef = useRef<number>();
  const timerRef = useRef(0);
  const circulosRef = useRef<Circulo[]>([]);

  // Initialize circles array
  const initArr = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    circulosRef.current = [];
    
    for (let index = 0; index < 300; index++) {
      const randomX = Math.floor(
        Math.random() * ((canvas.width * 3) - (canvas.width * 1.2) + 1)
      ) + (canvas.width * 1.2);
      
      const randomY = Math.floor(
        Math.random() * ((canvas.height) - (canvas.height * (-0.2) + 1))
      ) + (canvas.height * (-0.2));
      
      const size = canvas.width / 1000;
      
      circulosRef.current.push({ x: randomX, y: randomY, size });
    }
  };

  // Drawing function
  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const context = canvas.getContext('2d');
    if (!context) return;
    
    timerRef.current++;
    context.setTransform(1, 0, 0, 1, 0, 0);
    
    const distanceX = canvas.width / 80;
    const growthRate = canvas.width / 1000;
    
    context.fillStyle = 'rgba(255, 255, 255, 0.8)';
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    circulosRef.current.forEach((circulo) => {
      context.beginPath();
      
      if (timerRef.current < 65) {
        circulo.x = circulo.x - distanceX;
        circulo.size = circulo.size + growthRate;
      }
      
      if (timerRef.current > 65 && timerRef.current < 500) {
        circulo.x = circulo.x - (distanceX * 0.02);
        circulo.size = circulo.size + (growthRate * 0.2);
      }
      
      context.arc(circulo.x, circulo.y, circulo.size, 0, 360);
      context.fill();
    });
    
    if (timerRef.current > 500) {
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
      return;
    }
    
    requestIdRef.current = requestAnimationFrame(draw);
  };

  // Initialize canvas and start animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Initialize and start animation
    timerRef.current = 0;
    initArr();
    draw();
    
    // Handle window resize
    const handleResize = () => {
      if (!canvas) return;
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      timerRef.current = 0;
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
      
      const context = canvas.getContext('2d');
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }
      
      initArr();
      draw();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
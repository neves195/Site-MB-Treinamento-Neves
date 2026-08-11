import { useEffect, useRef, useState } from "react";
import type { ReactNode } from 'react';

interface RevealProps {
    children: ReactNode;
}

function Reveal({ children }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    const [visivel, setVisivel] = useState(false);

    useEffect(() => { 
        const elemento = ref.current;
        if (!elemento) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisivel(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(elemento);
        
        return () => observer.disconnect();
    }, []);

        return (
            <div ref={ref} className={visivel ? 'reveal is-visible' : 'reveal'}>
            {children}
        </div>
    );
}

export default Reveal;
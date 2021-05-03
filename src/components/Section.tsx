import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import styles from '../styles/components/Section.module.scss';

export function Section() {
    const starRef = useRef<HTMLImageElement>(null);
    const moonRef = useRef<HTMLImageElement>(null);
    const mountainsBehindRef = useRef<HTMLImageElement>(null);
    const mountainsFrontRef = useRef<HTMLImageElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const btnRef = useRef<HTMLAnchorElement>(null);
    useEffect(() => {
        if(!starRef.current || !starRef.current || !btnRef.current || !mountainsBehindRef.current || !mountainsFrontRef.current || !textRef.current)
            return;

        window.addEventListener('scroll', () => {
            let value = window.scrollY;
            starRef.current.style.left = value * 0.25 + 'px';
            moonRef.current.style.top = value * 1.05 + 'px';
            mountainsBehindRef.current.style.top = value * 0.5 + 'px'; 
            mountainsFrontRef.current.style.top = value * 0 + 'px';
            textRef.current.style.marginRight = value * 4 + 'px';
            textRef.current.style.marginTop = value * 1.5 + 'px';
            btnRef.current.style.marginTop = value * 1.5 + 'px';
        });
       
    }, []);

    return (
        <section 
            className={styles.section}
        >
            <img
                ref={starRef}
                src="./stars.png" 
                alt="stars"
                id={styles.stars}
                
            />

            <img 
                ref={moonRef}
                src="./moon.png" 
                alt="moon"
                id={styles.moon}
            />

            <img 
                ref={mountainsBehindRef}
                src="./mountains_behind.png" 
                alt="mountains_behind"
                id={styles.mountainsBehind}
            />

            <h2 
                className={styles.text}
                ref={textRef}    
            >
                    Moon Light
            </h2>
            <Link 
                href="#sec"
            >
                <a ref={btnRef} className={styles.btn}>Explore</a>
            </Link>
            <img 
                ref={mountainsFrontRef}
                src="./mountains_front.png" 
                alt="mountains_front"
                id={styles.mountainsFront}
            />
        </section>
    );
}
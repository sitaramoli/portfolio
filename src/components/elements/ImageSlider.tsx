import React, {useEffect, useState, useRef} from "react";
import {m, LazyMotion, domAnimation} from "framer-motion";

type ImageSliderProps = {
    images: string[]
}
const ImageSlider: React.FC<ImageSliderProps> = ({images}) => {
    const [index, setIndex] = useState<number>(0);
    const [isInViewport, setIsInViewport] = useState<boolean>(false);
    const imageRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isInViewport) {
                setIndex((i) => (i + 1) % images.length);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [images, isInViewport]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInViewport(entry.isIntersecting),
            {threshold: 0}
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <LazyMotion features={domAnimation} strict>
            <m.div
                ref={imageRef}
                initial={{x: 200, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                }}
                className="w-full h-full blob drop-shadow-div"
                style={{
                    background: `url(${images[index]})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            ></m.div>
        </LazyMotion>
    );
};

export default ImageSlider;

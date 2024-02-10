import React, {useCallback, useRef} from "react";
import Particles from "react-particles";
import {loadFull} from "tsparticles";

type ParticlesComponentProps = {
    particlesOptions: object
    className: string
    id: string
}


const ParticlesComponent: React.FC<ParticlesComponentProps> = ({particlesOptions, className, id}) => {

    const isInitializedRef = useRef<boolean>(false);

    const particlesInit = useCallback(async (engine) => {
        if (!isInitializedRef.current) {
            await loadFull(engine);
            isInitializedRef.current = true;
        }

    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await container
    }, []);

    return (
        <Particles
            id={id}
            className={className}
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesOptions}
        />
    );
};

export default ParticlesComponent;
import React, {useCallback, useRef} from "react";
import Particles from "react-particles";
import {loadSlim} from "tsparticles-slim";
import {Engine, Container, ISourceOptions} from "tsparticles-engine"

type ParticlesComponentProps = {
  particlesOptions: ISourceOptions
  className: string
  id: string
}


const ParticlesComponent: React.FC<ParticlesComponentProps> = ({particlesOptions, className, id}) => {
  const isInitializedRef = useRef<boolean>(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    if (!isInitializedRef.current) {
      await loadSlim(engine);
      isInitializedRef.current = true;
    }

  }, []);

  const particlesLoaded = useCallback(async (container?: Container): Promise<void> => {
    console.log(container)
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
import React, {useState} from 'react'
import Loader from './Loader';

type PreloadMediaType = {
  images: string[]
  children: React.ReactNode
}
const PreloadMedia: React.FC<PreloadMediaType> = ({images, children}) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  const onLoad = () => {
    setLoaded(true);
  }

  images.map((imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = onLoad;
    return img;
  });

  return loaded ? children : <Loader/>
}

export default PreloadMedia;
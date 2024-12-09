import React, {useEffect} from 'react';

interface AdSenseProps {
  adClient: string;
  adSlot: string;
}

const AdsComponent: React.FC<AdSenseProps> = ({adClient, adSlot}) => {
  useEffect(() => {
    if (window) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        (window as any).adsbygoogle = (window as any).adsbygoogle || [];
        (window as any).adsbygoogle.push({});
      };

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{display: 'block'}}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdsComponent;
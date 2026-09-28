import React, { useEffect } from 'react';

declare global {
  interface Window {
    _taboola?: Array<Record<string, any>>;
  }
}

export const TaboolaDisplay300x250: React.FC = () => {
  useEffect(() => {
    // 1. Inject Taboola loader.js dynamically if not already present
    const loaderId = 'tb_loader_script';
    if (!document.getElementById(loaderId)) {
      window._taboola = window._taboola || [];
      window._taboola.push({ article: 'auto' });

      const script = document.createElement('script');
      script.id = loaderId;
      script.async = true;
      script.src = 'https://cdn.taboola.com/libtrc/creative-test/loader.js';
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode?.insertBefore(script, firstScript);
    }

    // 2. Push Placement Configuration
    window._taboola = window._taboola || [];
    window._taboola.push({
      mode: 'display-300x250',
      container: 'taboola-display-300x250',
      placement: 'Mid Article Display 300x250',
      target_type: 'mix',
    });

    // 3. Flush execution
    window._taboola.push({ flush: true });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h3>300x250 Test Slot</h3>
      <div
        id="taboola-display-300x250"
        style={{
          width: '300px',
          height: '250px',
          border: '1px dashed #ccc',
          margin: '16px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ color: '#aaa', fontSize: '13px' }}>Loading 300x250 Display...</span>
      </div>
    </div>
  );
};

export default TaboolaDisplay300x250;

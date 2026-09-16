import React, { useEffect } from 'react';
import useOsStore from '../../store/osStore';

export default function Toast() {
  const toast = useOsStore(s => s.toast);
  const set = useOsStore(s => s.showToast);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => useOsStore.setState({ toast: null }), 2000);
    return () => clearTimeout(id);
  }, [toast?.key]);

  if (!toast) return null;
  return (
    <div key={toast.key} className="win-toast">
      {toast.message}
    </div>
  );
}

import { useState } from 'react';

const useRequest = fetch => {
  const [loading, setLoading] = useState(false);

  async function run(d) {
    try {
      setLoading(true);
      const res = await fetch(d);
      setLoading(false);
      const { data = {} } = res || {};
      const { resultCode, result = {} } = data;
      if (resultCode === '0') {
        return result || true;
      }
      return null;
    } catch {
      setLoading(false);
      return null;
    }
  }

  return [run, loading];
};

export default useRequest;

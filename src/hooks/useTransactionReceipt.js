import { useState, useEffect } from 'react';

import web3 from '../web3';

const useTransactionReceipt = hash => {
  const [fetching, setFetching] = useState(true);
  const [result, setResult] = useState({});
  useEffect(() => {
    if (!hash) return;
    let didCancel = false;

    const fetchTransaction = async () => {
      const result = await web3.getTransactionReceipt(hash);
      if (didCancel) return;
      setResult(result);
      setFetching(false);
    };

    fetchTransaction();

    return () => {
      didCancel = true;
    };
  }, [hash]);
  return { fetching, result };
};

export default useTransactionReceipt;

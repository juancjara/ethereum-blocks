import { useState, useEffect, useRef } from 'react';
import Q from 'q';

import web3 from '../web3';

const getRange = (array, start, size) => {
  const res = [];
  for (let i = 0; i < size && start + i < array.length; i++) {
    res.push(array[i + start]);
  }
  return res;
};

const hasEther = tx => +tx.value;

let didCancel = false;
const useEtherTransactions = ({ ids, pageSize = 5 } = {}) => {
  const [current, setCurrent] = useState(0);
  const [fetching, setFetching] = useState(true);
  const [transactions, setTransactions] = useState([]);

  const refCurrent = useRef(0);
  useEffect(() => {
    didCancel = false;
    refCurrent.current = current;
    return () => {
      didCancel = true;
    };
  });

  const hasMore = ids && current < ids.length;

  const fetchMore = async () => {
    setFetching(true);
    const results = await Q.all(
      getRange(ids, refCurrent.current, pageSize).map(web3.getTransaction)
    );
    const etherTransactions = results.filter(hasEther);

    if (didCancel) return;

    setCurrent(current => current + pageSize);
    if (etherTransactions.length === 0 && hasMore) {
      return await fetchMore();
    }

    setFetching(false);
    setTransactions(transactions => transactions.concat(etherTransactions));
  };

  useEffect(() => {
    if (ids) fetchMore();
  }, [ids]);

  return {
    hasMore,
    fetchMore,
    fetching,
    transactions,
  };
};

export default useEtherTransactions;

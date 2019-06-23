import { useEffect, useState } from 'react';

import web3 from '../web3';

const useTransactionIds = blockNumber => {
  const [ids, setIds] = useState();
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchBlock = async () => {
      try {
        const { transactions } = await web3.getBlock(blockNumber);
        setIds(transactions);
      } catch (e) {
        setError(
          `Could not gather information for this block number ${blockNumber}. Try with another block.`
        );
      }
    };
    fetchBlock();
    return;
  }, [blockNumber]);

  return { transactionIds: ids, error };
};

export default useTransactionIds;

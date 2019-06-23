import { useState, useEffect } from 'react';
import Q from 'promise';

import web3 from '../web3';

const useLatestBlocks = numBlocks => {
  const [fetching, setFetching] = useState(true);
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    let didCancel = false;
    const fetchLatestBlocks = async () => {
      setFetching(true);
      const blockNumber = await web3.getBlockNumber();
      const blocks = await Q.all(
        [...Array(numBlocks)].map((_, i) => web3.getBlock(blockNumber - i))
      );
      if (didCancel) return;
      setFetching(false);
      setBlocks(blocks);
    };
    fetchLatestBlocks();
    return () => (didCancel = true);
  }, [numBlocks]);

  return {
    fetching,
    blocks,
  };
};

export default useLatestBlocks;

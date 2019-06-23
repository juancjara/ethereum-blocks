import { useEffect, useState } from "react";

import web3 from "../web3";

const useTransactionIds = blockNumber => {
  const [ids, setIds] = useState();
  useEffect(() => {
    const fetchBlock = async () => {
      const { transactions } = await web3.getBlock(blockNumber);
      setIds(transactions);
    };
    fetchBlock();
  }, [blockNumber]);

  return { transactionIds: ids };
};

export default useTransactionIds;

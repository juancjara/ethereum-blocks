import React from "react";
import PropTypes from "prop-types";
import { TableRow, TableCell, Text } from "@aragon/ui";

import { shortenAddress, formatNumber } from "../../utils";
import web3 from "../../web3";
import LoadingHelper from "../../components/LoadingHelper";
import ResponsiveTable from "../../components/ResponsiveTable";
import useEtherTransactions from "../../hooks/useEtherTransactions";

const TransactionList = ({ ids }) => {
  const { fetching, hasMore, fetchMore, transactions } = useEtherTransactions({
    ids
  });
  return (
    <LoadingHelper
      fetching={fetching}
      items={transactions}
      noItemsMessage="This block has no ether transactions."
    >
      <ResponsiveTable
        headers={[
          "Hash",
          "From",
          "To",
          "Value (Eth)",
          "Gas",
          "Gas Price (Eth)"
        ]}
      >
        {transactions.map(tx => (
          <TableRow key={tx.hash}>
            <TableCell>
              <Text>{shortenAddress(tx.hash)}</Text>
            </TableCell>
            <TableCell>
              <Text>{shortenAddress(tx.from)}</Text>
            </TableCell>
            <TableCell>
              <Text>{shortenAddress(tx.to)}</Text>
            </TableCell>
            <TableCell>
              <Text>{web3.fromWei(tx.value, "ether")}</Text>
            </TableCell>
            <TableCell>
              <Text>{formatNumber(tx.gas)}</Text>
            </TableCell>
            <TableCell>
              <Text>{web3.fromWei(tx.gasPrice, "ether")}</Text>
            </TableCell>
          </TableRow>
        ))}
      </ResponsiveTable>
    </LoadingHelper>
  );
};

TransactionList.propTypes = {
  ids: PropTypes.array
};

export default TransactionList;

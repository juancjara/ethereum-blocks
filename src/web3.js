import Web3 from 'web3';
import { fromWei } from 'web3-utils';

let web3 = window.web3;
console.log(web3);

const setUp = () => {
  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    throw Error('MetaMask installation is required');
  }
};

export default {
  setUp,
  getBlockNumber: () => web3.eth.getBlockNumber(),
  getBlock: number => web3.eth.getBlock(number),
  getTransaction: tx => web3.eth.getTransaction(tx),
  fromWei
};

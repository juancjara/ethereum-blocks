export const shortenAddress = (address, len = 8) =>
  address.substring(0, len) + '...';

export const formatNumber = number => new Intl.NumberFormat().format(number);

const currency = (value: string): string => {
  value = value.replace(/\D/g, '');

  return value.replace(/(\d)(\d{2})$/, '$1,$2').replace(/(?=(\d{3})+(\D))\B/g, '.');
};

export { currency };

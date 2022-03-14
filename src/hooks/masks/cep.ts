const cep = (value: string): string => {
  value = value.replace(/\D/g, '');

  return value.replace(/(\d{5})(\d)/, '$1-$2').replace(/(-\d{3})\d+?$/, '$1');
};

export { cep };

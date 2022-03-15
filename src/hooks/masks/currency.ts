import { InputOptions } from '../useMask';

const currency = (value: string, { precision = 2 }: InputOptions): string => {
  const rx = new RegExp(`(\\d)(\\d{${precision}})$`, '');

  value = value.replace(/\D/g, '');

  return value.replace(rx, '$1,$2').replace(/(?=(\d{3})+(\D))\B/g, '.');
};

export { currency };

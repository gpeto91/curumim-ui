import { InputOptions } from '../useMask';

const percent = (value: string, { limit = false, precision = 2 }: InputOptions): string => {
  const rx = new RegExp(`(\\d)(\\d{${precision}})$`, '');
  const limitValue = Number('100'.padEnd('100'.length + precision, '0'));

  value = value.replace(/\D/g, '');

  if (limit) {
    if (Number(value) > limitValue) value = limitValue.toString();
  }

  if (limit) {
    return value.replace(rx, '$1,$2');
  } else {
    return value.replace(rx, '$1,$2');
  }
};

export { percent };

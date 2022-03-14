import { InputOptions } from '../useMask';

const percent = (value: string, { limit = false }: InputOptions): string => {
  value = value.replace(/\D/g, '');

  if (limit) {
    if (Number(value) > 10000) value = '10000';
  }

  if (limit) {
    return value.replace(/(\d)(\d{2})$/, '$1,$2').replace(/(\d{3})(\d)/g, '$1');
  } else {
    return value.replace(/(\d)(\d{2})$/, '$1,$2');
  }
};

export { percent };

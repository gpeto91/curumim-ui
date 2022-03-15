import { cep, cnpj, cpf, tel, currency, document, percent, card } from './masks';

export type MaskTypes =
  | 'tel'
  | 'cep'
  | 'cnpj'
  | 'cpf'
  | 'currency'
  | 'document'
  | 'percent'
  | 'card';

export type InputOptions = {
  limit?: boolean;
};

export default function useMask() {
  const masks = {
    cep,
    cnpj,
    cpf,
    tel,
    currency,
    document,
    percent,
    card
  };

  function mask(value: string, maskType: MaskTypes, options: InputOptions = {}): string {
    if (!masks[maskType]) return value;

    return masks[maskType](value, options);
  }

  return { mask };
}

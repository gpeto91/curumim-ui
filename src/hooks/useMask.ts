import { cep, cnpj, cpf, tel, currency, document, percent } from './masks';

export type MaskTypes = 'tel' | 'cep' | 'cnpj' | 'cpf' | 'currency' | 'document' | 'percent';

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
    percent
  };

  function mask(value: string, maskType: MaskTypes, options: InputOptions = {}): string {
    if (!masks[maskType]) return value;

    return masks[maskType](value, options);
  }

  return { mask };
}

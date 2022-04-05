import React, { HTMLAttributes, MouseEventHandler, useState } from 'react';
import { FiCalendar } from 'react-icons/fi';
import { css } from '../../theme';
import DatePicker, {
  ReactDatePickerProps,
  ReactDatePicker,
  registerLocale
} from 'react-datepicker';

import ptBR from 'date-fns/locale/pt-BR';
import es from 'date-fns/locale/es';
import enUS from 'date-fns/locale/en-US';

const locales = {
  ptBr: ptBR,
  enUs: enUS,
  es: es
};

import 'react-datepicker/dist/react-datepicker.css';

const InputWrapper = css({
  position: 'relative'
});

const CalendarIcon = css({
  all: 'unset',
  position: 'absolute',
  right: 0,
  top: 0,
  width: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'box-shadow .2s',
  cursor: 'pointer',

  '&:focus': {
    boxShadow: '$focus',
    borderRadius: '$2'
  },

  '& svg': {
    width: 20,
    height: 20,
    stroke: '#bbb'
  }
});

const InputStyle = css({
  all: 'unset',
  padding: '0 $4',
  height: 40,
  backgroundColor: 'White',
  fontSize: '$base',
  transition: 'box-shadow .2s',
  width: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',

  '&:focus': {
    boxShadow: '$focus',
    borderRadius: '$2'
  },

  '&::-ms-reveal, &::-ms-clear': {
    display: 'none'
  },

  variants: {
    hasPadding: {
      true: {
        paddingRight: 45
      }
    },
    invalid: {
      true: {
        boxShadow: '0 0 0 3px rgba(222, 33, 20, 0.6)',
        borderRadius: '$2'
      }
    }
  }
});

const timeTranslation = {
  ptBr: 'Horário',
  enUs: 'Time',
  es: 'Hora'
};

interface IDatepickerProps extends ReactDatePickerProps {
  onDatePick: (date: Date | { start: Date; end: Date }) => void;
  id: string;
  startDate?: Date;
  locale?: 'ptBr' | 'enUs' | 'es';
  isRange?: boolean;
  showTimeSelect?: boolean;
  disabled?: boolean;
  shouldCloseOnSelect?: boolean;
  minDate?: Date;
  maxDate?: Date;
  filterDate?: (date: Date) => boolean;
  timeIntervals?: number;
  isInvalid?: boolean;
}

interface ICustomInputProps
  extends React.DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  value?: string;
  isInvalid: boolean;
}

const CustomInput = React.forwardRef<HTMLInputElement, ICustomInputProps>(
  ({ value = '', onClick, isInvalid, id, ...props }, ref) => {
    return (
      <div className={InputWrapper()}>
        <input
          {...props}
          className={InputStyle({ hasPadding: true, invalid: isInvalid })}
          id={id}
          ref={ref}
          value={value}
          readOnly
          onClick={onClick}
          type="text"
        />

        <div className={CalendarIcon()}>
          <FiCalendar onClick={onClick as MouseEventHandler} />
        </div>
      </div>
    );
  }
);

const Datepicker = React.forwardRef<ReactDatePicker, IDatepickerProps>(
  (
    {
      onDatePick,
      startDate = new Date(),
      locale = 'ptBr',
      isRange = false,
      showTimeSelect = false,
      disabled = false,
      shouldCloseOnSelect = true,
      minDate,
      maxDate,
      filterDate,
      timeIntervals = 30,
      isInvalid = false,
      ...props
    },
    ref
  ) => {
    const [date, setDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    const dateFormat = () => {
      let format;

      if (locale === 'enUs') {
        format = 'MM/dd/yyyy';
      } else {
        format = 'dd/MM/yyyy';
      }

      if (showTimeSelect) format += ' hh:mm aa';

      return format;
    };

    const handleDatePick = (date: Date) => {
      setDate(date);
      onDatePick(date);
    };

    const handleDatesPick = (dates: [Date, Date]) => {
      const [start, end] = dates;

      setDate(start);
      setEndDate(end);
      onDatePick({ start, end });
    };

    registerLocale(locale, locales[locale]);

    return (
      <DatePicker
        {...props}
        ref={ref}
        startDate={startDate}
        selected={date}
        onChange={isRange ? handleDatesPick : handleDatePick}
        customInput={<CustomInput isInvalid={isInvalid} />}
        locale={locale}
        dateFormat={dateFormat()}
        showTimeSelect={showTimeSelect}
        disabled={disabled}
        shouldCloseOnSelect={shouldCloseOnSelect}
        timeIntervals={timeIntervals}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        showPopperArrow={false}
        timeCaption={timeTranslation[locale]}
        {...(filterDate ? { filterDate } : {})}
        {...(minDate ? { minDate } : {})}
        {...(maxDate ? { maxDate } : {})}
        {...(isRange ? { endDate } : {})}
        {...(isRange ? { selectsRange: true } : {})}
      />
    );
  }
);

Datepicker.displayName = 'Datepicker';

export { Datepicker };

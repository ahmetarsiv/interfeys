import React, { forwardRef, Ref, SelectHTMLAttributes } from 'react';
import Label from '../label/Label';

interface SelectOption {
    label: string;
    value: string | number;
}

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: SelectOption[];
    value?: string;
    placeholder?: string;
    className?: string;
    required?: boolean;
    disabled?: boolean;
    messages?: string | string[];
    label?: string;
}

const Select = forwardRef(
    (
        {
            options,
            value,
            placeholder,
            className,
            required,
            disabled,
            messages = [],
            label,
            ...props
        }: ISelectProps,
        ref: Ref<HTMLSelectElement>,
    ) => (
        <div>
            {label && <Label>{label}</Label>}
            <select
                ref={ref}
                value={value}
                className={`${className} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} w-full text-sm transition placeholder-transition hover:border-zinc-900 dark:hover:border-zinc-300 hover:placeholder-text-zinc-900 dark:hover:placeholder-text-zinc-300 focus:ring-transparent focus:border-zinc-900 dark:focus:border-zinc-300 bg-white dark:bg-black text-zinc-900 dark:text-zinc-300 focus:placeholder-text-zinc-900 dark:focus:placeholder-text-zinc-300 rounded-lg p-3`}
                disabled={disabled}
                required={required}
                {...props}>
                {placeholder && (
                    <option disabled selected>
                        {placeholder}
                    </option>
                )}
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {messages.length > 0 && Array.isArray(messages) ? (
                <>
                    {messages.map((message, index) => (
                        <p className="text-sm text-red-600" key={index}>
                            {message}
                        </p>
                    ))}
                </>
            ) : (
                <p className="text-sm text-red-600">{messages}</p>
            )}
        </div>
    ),
);
Select.displayName = 'Select';

export default Select;

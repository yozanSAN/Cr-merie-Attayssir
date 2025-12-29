import React from 'react';
import clsx from 'clsx';

const Button = ({
                    children,
                    variant = 'primary',
                    size = 'md',
                    onClick,
                    type = 'button',
                    disabled = false,
                    className = '',
                    icon: Icon,
                    fullWidth = false,
                    ...props
                }) => {
    const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-900';

    const variants = {
        default: 'bg-primary-400 hover:bg-primary-500 text-white shadow-md hover:shadow-lg focus:ring-primary-400',
        primary: 'bg-primary-400 hover:bg-primary-500 text-white shadow-md hover:shadow-lg focus:ring-primary-400',
        secondary: 'bg-dark-700 hover:bg-dark-600 text-white focus:ring-dark-500',
        outline: 'border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white focus:ring-primary-400',
        ghost: 'text-primary-400 hover:bg-primary-400/10 focus:ring-primary-400',
        danger: 'bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg focus:ring-red-500',
    };

    const sizes = {
        sm: 'py-2 px-4 text-sm',
        md: 'py-3 px-6 text-base',
        lg: 'py-4 px-8 text-lg',
    };

    const buttonClasses = clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
    );

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={buttonClasses}
            {...props}
        >
            {Icon && <Icon className="w-5 h-5" />}
            {children}
        </button>
    );
};

export default Button;
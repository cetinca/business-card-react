import React from 'react';

const Button = ({ text, href, className }) => {
    return (
        <a href={href} className={className}>
            {text}
        </a>
    );
};

export default Button;

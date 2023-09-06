import React from 'react';
import Link from 'next/link'
import { Button } from 'antd';

// type:outline/has bg 

const ButtonCpn = ({ text, link, outline, size, className, dataGtmCategory, dataGtmAction, dataGtmLabel }) => {

    const temp = `${className ? className : ''} ${dataGtmAction ? 'btn-gtm' : ''} ${size ? size : 'w-[14.375rem] min-h-[3.375rem] text-[1rem]'} flex items-center justify-center rounded-[27px] ${outline ? 'text-green-dark border border-green-dark hover:border-green-dark border-solid hover:text-[#fff] hover:border-green-dark hover:bg-green-dark' : 'hover:text-[#fff] bg-green-dark mx-auto hover:bg-green-dark-hover text-[#fff]'}`

    return (
        link
            ? <Link
                href={link}>
                <a data-gtm-category={dataGtmCategory}
                    data-gtm-action={dataGtmAction}
                    data-gtm-label={dataGtmLabel}
                    className={temp}>{text}</a>
            </Link>
            : <Button
                data-gtm-category={dataGtmCategory}
                data-gtm-action={dataGtmAction}
                data-gtm-label={dataGtmLabel}
                className={temp}>
                {text}
            </Button>
    );
};
export default ButtonCpn;
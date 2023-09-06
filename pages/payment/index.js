import React from 'react';
import { MetaTag } from 'src/components/elements';

import Checkout from '../../src/hooks/CheckoutCreditCardFunc'

const payment = () => {
    return (
        <>
            <MetaTag />
            <Checkout />
        </>
    );
}
export default payment


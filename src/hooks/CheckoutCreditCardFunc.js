import Script from "react-load-script";
import React from "react";

let OmiseCard;

const CheckoutCreditCardFunc = () => {

    const handleLoadScript = () => {
        OmiseCard = window.OmiseCard;
        OmiseCard.configure({
            publicKey: "pkey_test_5rh74dt56l9t52hd1aj",
            currency: "thb",
            frameLabel: "Fiction",
            submitLabel: "PAY NOW",
            buttonLabel: "Pay with Omise",
            defaultPaymentMethod: "credit_card",
            otherPaymentMethods: []
        });
    };

    const omiseCardHandler = () => {
        OmiseCard.open({
            frameDescription: 'Invoice #3847',
            amount: 0,
            onCreateTokenSuccess: (token) => {
                console.log({ token });
                // createCreditCardCharge(cart.email, cart.name, cart.amount, token)
            },
            onFormClosed: () => { },
        })
    }

    return (
        <div className="own-form">
            <form className="text-center">
                <button
                    className="btn"
                    type="button"
                    onClick={(e) => omiseCardHandler(e)}
                >
                    Pay with Credit Card
                </button>
            </form>
            <Script url="https://cdn.omise.co/omise.js" onLoad={()=>handleLoadScript()} />
        </div>
    );
}

export default CheckoutCreditCardFunc;

import Link from 'next/link';
import React from 'react';
import { MetaTag } from 'src/components/elements';

const Privacy = () => {

    return (
        <>
            <MetaTag title="Fiction SG | Privacy Policy" />
            <div className='container text-[1.375rem]'>
                <div className='mb-7'>
                    <div className='font-RanuaTrialsBold'>Purpose</div>
                    <div className='mb-3'>This Personal Data Protection Policy ("<b className='font-RanuaTrialsBold'>Policy</b>") sets out the ways in which Fiction Pte Ltd (the “<b className='font-RanuaTrialsBold'>Company”</b>) collects, uses, discloses and retains personal information for our operations;</div>
                </div>
                <div className='mb-7'>
                    <div className='font-RanuaTrialsBold'>Application of Policy</div>
                    <div className='mb-3'>When you submit any booking for use of the Company’s studio, you agree to the terms of this Policy as updated from time to time. </div>
                </div>
                <div className='mb-7'>
                    <div className='font-RanuaTrialsBold'>Types of Personal Information collected</div>
                    <div className='mb-3'>The Company collects personal information only for requirements of the booking of the Company’s studio. The personal information collected includes:</div>
                    <ul className='ml-4'>
                        <li className='mb-3'>(a) Name of entity (if an organisation is making the booking)</li>
                        <li className='mb-3'>(b) Name of contact person</li>
                        <li className='mb-3'>(c) Email of contact person</li>
                        <li className='mb-3'>(d) Contact number of contact person</li>
                        <li className='mb-3'>(e) Billing address of person or organisation making the booking</li>
                    </ul>
                </div>
                <div className='mb-7'>
                    <div className='font-RanuaTrialsBold'>How we collect your Personal Information</div>
                    <div className='mb-3'>All the personal information we collect comes from you when you make a booking of the Company’s studio. </div>
                </div>
                <div className='mb-7'>
                    <div className='font-RanuaTrialsBold'>Use of your Personal Information</div>
                    <div className='mb-3'>We collect personal information to operate our studio and to coordinate with the customers on their bookings.</div>
                    <div className='mb-3'>We do not sell, rent or lease our customer lists to third parties. Where we share data with trusted partners in order to administer your booking or send you updates on and marketing materials from the Company and its studio, such third parties are prohibited from using your personal information except to provide these services to the Company, and they are required to maintain the confidentiality of your information.</div>
                </div>
                <div className='mb-7'>
                    <div className='font-RanuaTrialsBold'>Withdrawing consent</div>
                    <div className='mb-3'>The collection and handling of certain personal information is necessary to administer your current and future bookings, keeping you updated on the Company and its studio and/or for processing transactions. You may, however, opt out of the collection and/or handling of your personal information for other purposes — including opting out of receiving marketing and promotional material from the Company. You can do so at any time by emailing to <Link href='mailto:pdpa@fiction.com.sg'><a className='underline'>pdpa@fiction.com.sg</a></Link> to unsubscribe from marketing materials from the Company.</div>
                </div>
                <div className='mb-7'>
                    <div className='font-RanuaTrialsBold'>Access, accuracy and correction of your Personal Information</div>
                    <div className='mb-3'>We rely on you to ensure that your profile and contact information is accurate. Please let us know of any changes to your personal information. You may update the accuracy or completeness of such information, and request that corrections be made to it. Please send all your enquiries, requests and notifications to <Link href='mailto:pdpa@fiction.com.sg'><a className='underline'>pdpa@fiction.com.sg</a></Link></div>
                </div>
                <div className='mb-7'>
                    <div className='font-RanuaTrialsBold'>Contact Information</div>
                    <div className='mb-3'>If you have any questions or feedback relating to your Personal Data or our Data Protection Policy, please contact us at:</div>
                    <div className='mb-3'>Email: <Link href='mailto:pdpa@fiction.com.sg'><a className='underline'>pdpa@fiction.com.sg</a></Link></div>
                </div>
            </div>
        </>
    );
};
export default Privacy
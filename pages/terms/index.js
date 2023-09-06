import React, { useState } from 'react';
import { equimentPriceJson } from 'data'
import { MetaTag, PriceCpn } from 'src/components/elements';

const Terms = () => {
    const [data, setData] = useState({
        noFee: equimentPriceJson.noFee,
        hasFee: equimentPriceJson.hasFee,
        EquipmentAddOns: equimentPriceJson.EquipmentAddOns,
    })
    return (
        <>
            <MetaTag title="Fiction SG | Terms and Conditions" />
            <div className='container text-[1.375rem]'>
                <p className='mb-2'>The allocated booking time is inclusive of set-up, test shoot, makeup and post-shoot clean up etc. The hirer is to hand over the studio punctually in the original condition, at the end of the session.
                </p>
                <p className='mb-2'>Extension of booking session is subjected to availability</p>
                <p className='mb-4'>No tentative bookings are allowed</p>
                <div className='mb-7'>
                    <div className='font-RanuaTrialsBold mb-3'>STUDIO SPACE</div>
                    <PriceCpn />
                    <ul className='list-disc ml-4'>
                        <li className='mb-3'>Minimum booking of 6 hours</li>
                        <li className='mb-3'>Includes complimentary use of basic production equipment</li>
                        <li className='mb-3'>Refer to <b className='font-RanuaTrialsBold '>Annex A</b></li>
                    </ul>
                    <div className='text-center'><span className='h-[4px] w-[40px] bg-fic-black inline-block'></span></div>
                </div>
                <div className='mb-7'>
                    <div className='font-RanuaTrialsBold '>EQUIPMENT RENTAL ADD-ONS</div>
                    <ul className='list-disc ml-4'>
                        <li className='mb-3'>Refer to <b className='font-RanuaTrialsBold '>Annex B</b></li>
                    </ul>
                    <div className='text-center'><span className='h-[4px] w-[40px] bg-fic-black inline-block'></span></div>
                </div>
                <div className='mb-7'>
                    <div className='font-RanuaTrialsBold'>PAYMENT</div>
                    <ul className='list-disc ml-4'>
                        <li className='mb-3'>A refundable security deposit of $300 will be charged upon booking.</li>
                        <li className='mb-3'>Should there be any cancellation to the booking 48 hours before the booking date, there will be forfeiture for the deposit paid</li>
                    </ul>
                </div>
                <div className='mb-7'>
                    <div className='font-RanuaTrialsBold'>REFUND</div>
                    <ul className='list-disc ml-4'>
                        <li className='mb-3'>Should there be cancellations, refunds will be processed within 14 days from the date of booking.</li>
                        <li className='mb-3'>Any damages that require repair & maintenance services will be chargeable at cost price, subject to Fiction Studio’s discretion.</li>
                    </ul>
                </div>
                <div className='mb-7'>
                    <div className='font-RanuaTrialsBold mb-3 mt-10'>ANNEX A</div>
                    <div className='font-RanuaTrialsBold mb-3'>Complimentary use of basic production equipment</div>
                    <div className='grid grid-cols-1 md:grid-cols-1 gap-3 text-[1.275rem] lg:text-[1.275rem]'>
                        <table className={`w-full border border-1`}>
                            <thead>
                                <tr>
                                    <th className='p-3 border border-b-1 text-[#000] text-left'>
                                        Item/Description
                                    </th>
                                    <th className='p-3 border border-b-1 text-[#000]'>
                                        Qty Available
                                    </th>
                                </tr>
                            </thead>
                            {data && data.noFee && Object.keys(data.noFee).map((key, index) => (
                                <tbody>
                                    <tr key={index}><td className='p-3 border border-b-1 bg-[#ddd] text-center font-RanuaTrialsBold' colSpan={2}>{data.noFee[key].title}</td></tr>
                                    {data.noFee[key].list && data.noFee[key].list.length > 0 ? data.noFee[key].list.map((item, iItem) => {
                                        return (
                                            <tr key={iItem}>
                                                <td className='px-3 py-1 w-[80%] border border-1'>{item.name}</td>
                                                <td className='px-3 py-1 w-[20%] border border-1 text-center'>{item.quality}</td>
                                            </tr>
                                        )
                                    }) :
                                        <tr>
                                            <td className='p-0' colSpan={2}>
                                                <table className='w-full'>
                                                    <tbody>
                                                        <tr>
                                                            <td className='px-3 py-1 border-b-[1px] border-[#000] font-bold' colSpan={2}>
                                                                {data.noFee[key].hasGroup.Aputure.groupTitle}
                                                            </td>
                                                        </tr>
                                                        {
                                                            data.noFee[key].hasGroup && data.noFee[key].hasGroup.Aputure.groupList.map((temp, itemp) => {
                                                                return (
                                                                    <tr key={itemp}>
                                                                        <td className='px-3 py-1 w-[80%] border-b-[1px] border-r-[1px] border-[#000]'>{temp.name}</td>
                                                                        <td className='px-3 py-1 w-[20%] border-b-[1px] border-[#000] text-center'>{temp.quality}</td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                                <div className='text-center border-b-[1px] py-2'>OR</div>
                                                <table className='w-full'>
                                                    <tbody>
                                                        <tr>
                                                            <td colSpan={2} class="px-3 py-1 border-b-[1px] border-[#000] font-bold">
                                                                {data.noFee[key].hasGroup.Elinchrom.groupTitle}
                                                            </td>
                                                        </tr>
                                                        {
                                                            data.noFee[key].hasGroup && data.noFee[key].hasGroup.Elinchrom.groupList.map((temp, itemp) => {
                                                                return (
                                                                    <tr key={itemp}>
                                                                        <td className={`px-3 py-1 w-[80%] border-r-[1px] border-[#000] ${itemp === (data.noFee[key].hasGroup.Elinchrom.groupList.length - 1) ? 'border-b-[0]' : 'border-b-[1px]'}`}>{temp.name}</td>
                                                                        <td className={`px-3 py-1 w-[20%] border-[#000] text-center '} ${itemp === (data.noFee[key].hasGroup.Elinchrom.groupList.length - 1) ? 'border-b-[0]' : 'border-b-[1px]'}`}>{temp.quality}</td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    }
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>
                <div className='mb-7'>
                    <div className='font-RanuaTrialsBold mb-3 mt-10'>ANNEX B</div>
                    <div className='font-RanuaTrialsBold mb-3'>Equipment Rental Add-Ons</div>
                    <div className='grid grid-cols-1 md:grid-cols-1 gap-3 text-[1.275rem] lg:text-[1.275rem]'>
                        <table className={`w-full border border-1`}>
                            <thead>
                                <tr>
                                    <th className='p-3 border border-b-1 text-[#000] text-left'>
                                        Item/Description
                                    </th>
                                    <th className='p-3 border border-b-1 text-[#000]'>
                                        Qty Available
                                    </th>
                                    <th className='p-3 border border-b-1 text-[#000]'>
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            {data && data.EquipmentAddOns && Object.keys(data.EquipmentAddOns).map((key, index) => (
                                <tbody>
                                    <tr key={index + 3}><td className='p-3 border border-b-1 bg-[#ddd] text-center font-RanuaTrialsBold' colSpan={3}>{data.EquipmentAddOns[key].title}</td></tr>
                                    {data.EquipmentAddOns[key].list.length && data.EquipmentAddOns[key].list.map((item, iItem) => {
                                        return (
                                            <tr key={iItem}>
                                                <td className='px-3 py-1 w-[60%] border border-1'>{item.name}</td>
                                                <td className='px-3 py-1 w-[20%] border border-1 text-center'>{item.quality}</td>
                                                <td className='px-3 py-1 w-[20%] border border-1 text-center'>{item.price}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>
                <div className='mb-7'>
                    <div className='font-RanuaTrialsBold mb-4'>FICTION STUDIOS <br /> TERMS OF RENTAL</div>
                    <p className='mb-2'>
                        Fiction Pte. Ltd. (the “<b>Company</b>”) has agreed to rent Fiction Studios (the “<b>Studio</b>”) located at 55 Ubi Avenue 1, #05-16, Singapore 408935 to the person or entity named on Schedule 1 of this Agreement (the “<b>Renter</b>”).
                    </p>
                    <p className='mb-2'>
                        Renter must read, understand and agree to these Terms of Business before signing on this Agreement for the rental of the Studio.
                    </p>
                    <p className='mb-2'>
                        During the rental period stated on Schedule 1 and any extension of the rental period thereof (the “<b>Rental Period</b>”), the Company agrees to allow access to and use of the Studio by the Renter, his associates, freelancers, talents, clients, other persons present in the studio at the invitation or instruction of the Renter (together with the Renter, referred to as the “<b>Renter’s Party</b>”) on the following terms. For the avoidance of doubt, a person (other than representatives of the Company) present in the Studio during the Rental Period shall be deemed to be part of the Renter’s Party.
                    </p>
                    <p className='mb-2'>
                        Fiction Pte. Ltd. (the “<b>Company</b>”) has agreed to rent Fiction Studios (the “<b>Studio</b>”) located at 55 Ubi Avenue 1, #05-16, Singapore 408935 to the person or entity named on Schedule 1 of this Agreement (the “<b>Renter</b>”).
                    </p>
                </div>
                <div className='mb-7'>
                    <div>RESERVATIONS, NO-SHOWS & RESCHEDULING</div>
                    <ul className='list-disc ml-4'>
                        <li className='mb-3'>Every reservation requires completion of the reservation form to include day and time of rental and information required by the Company. Renting the Studio requires the payment of a reservation deposit at the point of reservation. Reservations are not confirmed until payment of the reservation deposit is received.</li>
                        <li className='mb-3'>Unless the Renter has made full payment for the reservation of the Studio, if nobody from the Renter’s party shows up within 20 minutes of the start of any reservation, it is considered a no-show. No-shows are not refunded, transferred nor rescheduled and the Renter’s reservation deposit is forfeited.</li>
                        <li className='mb-3'>The Company understands that things happen. In the event that the Renter must reschedule, the reservation can only be rescheduled one time with no cancellation fee or penalty. Upon rescheduling, Renter’s paid reservation will transfer to the rescheduled reservation. Rescheduling a reservation must be made at least 36 hours prior to the commencement of the original reservation. Reservations cannot be rescheduled on the day of the reservation. If the Renter does not show on the rescheduled time, the reservation is forfeited and cannot be rescheduled again. The reservation deposit will be forfeited. </li>
                    </ul>
                </div>
                <div className='mb-7'>
                    <div>CONDUCT</div>
                    <ul className='list-disc ml-4'>
                        <li className='mb-3'>This is a professional studio and the Company maintains a professional environment. Renter shall be solely responsible for the conduct and welfare of all persons in the Renter’s Party. Renter agrees that one or more Company representatives may, at Company’s sole discretion, be present at all times. If the representative observes or otherwise becomes aware of dangerous, pornographic, illegal or negligent practices or activities, the representative reserves the right to stop the shoot and may require the Renter and the Renter’s Party to leave immediately. In such cases no refund will be given for unused time. However, the Company and its representatives assume no responsibility to act in such cases.</li>
                        <li className='mb-3'>The Renter’s Party shall not conduct themselves in a manner which would cause annoyance to the neighbouring units (e.g. playing music loudly) and shall observe all rules established by the building management. </li>
                        <li className='mb-3'>All persons in the Renter’s Party shall be legally entitled to work in Singapore. </li>
                        <li className='mb-3'>The Renter shall ensure that all members of the Renter’s Party are fully briefed about these terms and the rules of usage of the Studio. </li>
                        <li className='mb-3'>Smoking in the Studio is strictly prohibited. Smokers must only smoke in the open-air area outside the building. Renter shall be responsible for the cost to deodorize the Studio in the event that any person in the Renter’s Party smoked in the Studio. </li>
                        <li className='mb-3'>Renter shall dispose of all trash at the bins provided by the building management. Renter should note that bulky trash may not be disposed of in the building.</li>
                        <li className='mb-3'>Renter shall not allow the use of any open flame in the Studio. </li>
                        <li className='mb-3'>Renter shall ensure that the Renter’s Party leaves the Studio at the end of the Rental Period and locks up the Studio in accordance with instructions given by the Company. Renter shall be liable for any loss or damage if the Studio is not locked up in accordance with the said instructions. </li>
                    </ul>
                </div>
                <div className='mb-7'>
                    <div>EQUIPMENT</div>
                    <ul className='list-disc ml-4'>
                        <li className='mb-3'>The Company agrees to provide equipment in good working order, but makes no guarantees as to said equipment’s functionality or suitability to the Renter’s purposes. Renter shall notify Company immediately of any malfunction, damage or other issues with the equipment. WiFi internet service is available during the Rental Period but the Company does not warrant the usability, security or speed of the service.</li>
                    </ul>
                </div>
                <div className='mb-7'>
                    <div>UNCLAIMED BELONGINGS</div>
                    <ul className='list-disc ml-4'>
                        <li className='mb-3'>Items which are left behind by Renter’s Party after the end of a reservation shall be deemed to be abandoned items. Renter may, by prior arrangement with the Company, arrange for collection of items at a later date. Company will try to accommodate such requests but shall be under no obligation to do so, especially if it interferes with other reservations or operational needs of the Studio. Abandoned items shall become the property of the Company and the Company reserves the right to donate or sell abandoned items. Should the Company incur cost in disposing of the abandoned items, the Company shall be entitled to charge such cost to the Renter. </li>
                    </ul>
                </div>
                <div className='mb-7'>
                    <div>ADDITIONAL CONDITIONS FOR KITCHEN STUDIO RENTAL</div>
                    <ul className='list-disc ml-4'>
                        <li className='mb-3'>Renter shall not use any open flame in the kitchen studio. Renter shall inform the Company of the type of cooking during the Rental Period. The Company shall advise the Renter of the measures to take to vent and air the Studio. </li>
                        <li className='mb-3'>Renter shall dispose of any oil and grease separately outside of the Studio and shall not allow oil and grease to be flushed down the sewerage system in the Studio. </li>
                        <li className='mb-3'>Renter shall be responsible for cleaning the kitchen studio after use if heavily soiled. The Company will only provide general cleaning. If heavy cleaning is required after the rental of the kitchen studio, the Company shall be entitled to charge the Renter for any additional reasonable cleaning costs.</li>
                        <li className='mb-3'>Renter shall have use of the cutlery, crockery, utensils and cooking implements (collectively, the “<b>Kitchen Items</b>”) as provided in the kitchen studio. The Company does not warrant that the Kitchen Items provided shall be fit for purpose nor suitable for the Renter’s purpose. The Renter shall reimburse the Company for replacement of any damaged Kitchen Items. </li>
                    </ul>
                </div>
                <div className='mb-7'>
                    <div>DAMAGE</div>
                    <ul className='list-disc ml-4'>
                        <li className='mb-3'>Renter shall be solely responsible for any damage to Company’s property or equipment that occurs during the Rental Period. Rental deposit will be held until repairs can be made. If the damage exceeds the amount of the deposit, Renter agrees to pay reasonable additional repair costs to bring damaged equipment back to working condition. Renter agrees to pay for damage to the Studio including spills, excessive wear, marks or stains on furniture, fixtures or painted surfaces.</li>
                    </ul>
                </div>
                <div className='mb-7'>
                    <div>PERSONAL DATA</div>
                    <ul className='list-disc ml-4'>
                        <li className='mb-3'>Renter consents for himself and on behalf of each member of the Renter’s Party for the collection of personal data as defined under the Personal Data Protection Act 2012. Renter shall collect and provide the consent of each member of the Renter’s Party and submit such consent to the Company when requested.</li>
                        <li className='mb-3'>The personal data collected shall include but is not limited to the identities (name, contact details, identity card numbers) of the Renter’s Party and CCTV footage for activities in the Studio. The collection of personal data shall be for security purposes, contacting the Renter’s Party and determination of any liability in the event of damage to the Studio and equipment or any injuries.</li>
                        <li className='mb-3'>Unless otherwise specified, Renter consents to the Studio taking footage and stills during the rental period for marketing purposes.</li>
                    </ul>
                </div>
                <div className='mb-7'>
                    <div>WAIVER OF LIABILITY</div>
                    <ul className='list-disc ml-4'>
                        <li className='mb-3'>Use of the Studio and any equipment provided (whether as part of the basic rental or as an add on service) is entirely at the Renter’s risk. Renter hereby agrees that the Company will not be held liable for any direct, indirect, incidental or consequential damage, injury or loss to the Renter’s Party or any of their possessions while in the Studio. To the fullest extent allowable by law, Renter shall hold harmless and indemnifies the Company and its shareholders, agents, representatives, officers and employees against any suit, claim, loss, accident, judgment, fine, injury or damages, including reasonable legal fees. This indemnification shall continue in full force and effect during and after the term of the rental for such causes arising during the term of the rental.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
export default Terms
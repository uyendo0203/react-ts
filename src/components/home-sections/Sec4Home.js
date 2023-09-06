
import { useNav } from '@/hooks/useNav';
import Link from 'next/link'
import { ButtonCpn } from '../elements';

const Sec4Home = () => {
    const studioRef = useNav('studio')
    return (
        <section ref={studioRef} id="studioContainer" className='home-section-4 sec-animate bg-[#f4f4f4]'>
            <div className='container py-[3.125rem] lg:py-[115px]'>
                <div className='flex flex-col lg:flex-row'>
                    <div className='w-full lg:w-1/2 max-w-[100%] lg:max-w-[32%] mb-[20px] lg:mb-0'>
                        <h1 className='home-heading text-[2.188rem] mb-[5px] lg:mb-[10px]'>
                            <span className='sub text-[1.375rem]'>Book studio</span>
                            Now that you’ve found
                            the right studio, you just
                            have to schedule
                            the right time.
                        </h1>
                    </div>
                    <div className='w-full lg:w-1/2 ml-auto'>
                        <div className='text-[1.375rem] mb-[0.313rem] font-RanuaTrialsMedium '>Pick Date</div>
                        <div className='text-[1.813rem] mb-[1.25rem] font-RanuaTrialsMedium '>JAN</div>
                        <ul className='flex flex-wrap mb-[3.125rem]'>
                            <li className='text-[2.938rem] lg:mr-[5.2rem] mr-[1.875rem] font-RanuaTrialsMedium'>11</li>
                            <li className='text-[2.938rem] lg:mr-[5.2rem] mr-[1.875rem] font-RanuaTrialsMedium dots-red'>12</li>
                            <li className='text-[2.938rem] lg:mr-[5.2rem] mr-[1.875rem] font-RanuaTrialsMedium dots-red'>13</li>
                            <li className='text-[2.938rem] lg:mr-[5.2rem] mr-[1.875rem] font-RanuaTrialsMedium today-active'>14</li>
                            <li className='text-[2.938rem] font-RanuaTrialsMedium'>15</li>
                        </ul>
                        {/* <Link href="/booking">
                            <a dataGtmCategory="Footer Navigation"
                                dataGtmAction="Clicked_Footer_Link"
                                dataGtmLabel='logo'
                                className='w-[14.375rem] min-h-[3.375rem] text-[1.25rem] flex items-center justify-center rounded-[27px] text-fic-white hover:text-fic-white bg-green-dark ml-0 lg:ml-auto hover:bg-green-dark-hover'>
                                Check availability
                            </a>
                        </Link> */}
                        <ButtonCpn
                            dataGtmCategory="Homepage"
                            dataGtmAction="Clicked_Homepage_Link"
                            dataGtmLabel='Check availability'
                            text="Check availability"
                            link="/booking"
                            className='mr-0 w-[14.375rem] min-h-[3.375rem] text-[1.25rem] flex items-center justify-center rounded-[27px] text-fic-white hover:text-fic-white bg-green-dark ml-0 lg:ml-auto hover:bg-green-dark-hover'/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sec4Home
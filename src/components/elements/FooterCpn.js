import React, { useContext } from 'react';
import Link from 'next/link'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { ScrollToIDHome } from '@/redux/actions/ficActions';
import { handleLinkToPage } from './LinkToPage';

const FooterCpn = () => {
  // const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);
  const dispatch = useDispatch()
  const router = useRouter()
  const yearCurrent = moment().year();

  const handleClickToContact = () => {
    if (router.pathname != "/") {
      router.push('/')
    }
    dispatch(ScrollToIDHome({ id: 'contactContainer', offset: 80, navid: 'contact' }))
  };
  const handleClickToAbout = () => {
    if (router.pathname != "/") {
      router.push('/')
    }
    dispatch(ScrollToIDHome({ id: 'equipmentContainer', offset: 80, navid: 'equipment' }))
  };

  return (
    <footer className='bg-[#f4f4f4]'>
      <div className='container lg:pt-[3.125rem] py-[3.125rem]'>
        <h1 className="logo text-[#000] text-[32px] mb-[20px] flex items-center font-RanuaTrialsMedium">
          <Link href='/'>
            <a data-gtm-category="Footer Navigation"
              data-gtm-action="Clicked_Footer_Link"
              data-gtm-label='logo'
              className='btn-gtm max-w-[160px]'>
              <img alt='Fiction' src='/images/logo-black.svg' className="w-full" />
            </a>
          </Link>
        </h1>
        <div className='flex flex-col lg:flex-row pb-[2.5rem] border-b border-[#717170]'>
          <div className='w-full sm:w-1/5 flex flex-col max-w-[100%] lg:max-w-[32%] mb-[20px] lg:mb-0'>
            <a data-gtm-category="Footer Navigation"
              data-gtm-action="Clicked_Footer_Link"
              data-gtm-label='About'
              onClick={() => handleClickToAbout()}
              className='btn-gtm text-[1.375rem] lg:text-[0.875rem] hover:text-[#000] hover:underline font-RanuaTrialsBold mb-[15px]'>About</a>
            <Link href="">
              <a data-gtm-category="Footer Navigation"
                data-gtm-action="Clicked_Footer_Link"
                data-gtm-label='Work'
                onClick={(e) => handleLinkToPage(e, '/work', router)}
                className='btn-gtm text-[1.375rem] lg:text-[0.875rem] hover:text-[#000] hover:underline font-RanuaTrialsBold mb-[15px]'>Work</a>
            </Link>

          </div>
          <div className='w-full sm:w-1/5 flex flex-col max-w-[100%] lg:max-w-[32%] mb-[20px] lg:mb-0'>
            <Link href="">
              <a data-gtm-category="Footer Navigation"
                data-gtm-action="Clicked_Footer_Link"
                data-gtm-label='Reservations'
                onClick={(e) => handleLinkToPage(e, '/booking', router)}
                className='btn-gtm text-[1.375rem] lg:text-[0.875rem] hover:text-[#000] hover:underline font-RanuaTrialsBold mb-[15px]'>
                Reservations
              </a>
            </Link>
            <a data-gtm-category="Footer Navigation"
              data-gtm-action="Clicked_Footer_Link"
              data-gtm-label='Contact Us'
              onClick={() => handleClickToContact()}
              className='btn-gtm text-[1.375rem] lg:text-[0.875rem] hover:text-[#000] hover:underline font-RanuaTrialsBold mb-[15px]'>
              Contact Us
            </a>
            {/* <Link href="/">
              <a className='text-[1.375rem] lg:text-[0.875rem] hover:text-[#000] hover:underline font-RanuaTrialsBold mb-[15px]'>FAQ</a>
            </Link> */}
            {/* <Link href="/">
              <a className='text-[1.375rem] lg:text-[0.875rem] hover:text-[#000] hover:underline font-RanuaTrialsBold'>info@fiction.com.sg</a>
            </Link> */}
          </div>
        </div>
        <div className='flex mt-[20px] justify-between items-baseline sm:flex-row flex-col'>
          <div className='flex lg:flex-row flex-col mb-7 md:mb-0'>
            <Link href="">
              <a data-gtm-category="Footer Navigation"
                data-gtm-action="Clicked_Footer_Link"
                data-gtm-label='Terms and Conditions'
                onClick={(e) => handleLinkToPage(e, '/terms', router)}
                className='btn-gtm text-[1.375rem] lg:text-[0.875rem] mr-[3.75rem] hover:text-[#000] hover:underline font-RanuaTrialsBold mb-[15px]'>
                Terms and Conditions
              </a>
            </Link>
            <Link href="">
              <a data-gtm-category="Footer Navigation"
                data-gtm-action="Clicked_Footer_Link"
                data-gtm-label='Privacy Policy'
                onClick={(e) => handleLinkToPage(e, '/privacy', router)}
                className='btn-gtm text-[1.375rem] lg:text-[0.875rem] mr-[3.75rem] hover:text-[#000] hover:underline font-RanuaTrialsBold mb-[15px]'>
                Privacy Policy
              </a>
            </Link>
            {/* <Link href="/">
              <a className='text-[1.375rem] lg:text-[0.875rem] mr-[3.75rem] hover:text-[#000] hover:underline font-RanuaTrialsBold mb-[15px]'>Trademarks and Copyright</a>
            </Link> */}
            <div className='text-[1.375rem] lg:text-[0.875rem] font-RanuaTrialsBold'>{yearCurrent} Fiction. All rights reserved</div>
          </div>
          <div className='flex'>
            <div className='mr-[30px]'>Find us on</div>
            <div className='flex'>
              <Link href="">
                <a
                  data-gtm-category="Footer Navigation"
                  data-gtm-action="Clicked_Footer_Link"
                  data-gtm-label='instagram'
                  onClick={(e) => handleLinkToPage(e, 'https://www.instagram.com/Fiction.SG/', router)}
                  target='_blank'
                  className='btn-gtm mx-[2px] mt-[2px] flex items-center'>
                  <img alt='Fiction' src='/images/social-ins.jpg' className="w-full" />
                </a>
              </Link>
              <Link href="">
                <a
                  data-gtm-category="Footer Navigation"
                  data-gtm-action="Clicked_Footer_Link"
                  data-gtm-label='facebook'
                  onClick={(e) => handleLinkToPage(e, 'https://www.facebook.com/fictionsg/', router)}
                  target='_blank'
                  className='btn-gtm mx-[2px] mt-[2px] flex items-center'>
                  <img alt='Fiction' src='/images/social-fb.jpg' className="w-full" />
                </a>
              </Link>
              {/* <Link href="/">
                <a className='mx-[2px] flex items-center'><img  alt='Fiction' src='/images/social-wt.jpg' className="w-full" /></a>
              </Link>
              <Link href="/">
                <a className='mx-[2px] flex items-center'><img  alt='Fiction' src='/images/social-yt.jpg' className="w-full" /></a>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterCpn;
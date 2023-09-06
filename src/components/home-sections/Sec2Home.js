import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollToSec2 } from '@/redux/actions/ficActions';
import { useNav } from '@/hooks/useNav';
import { NavContext } from 'src/context/NavContext';

const Sec2Home = () => {
  const servicesRef = useNav('services');
  const dispatch = useDispatch()
  const { ScrollToSec2Res } = useSelector((state) => state.FicReducers)

  useEffect(() => {
    if (ScrollToSec2Res && ScrollToSec2Res === true) {
      window.scrollTo(0, servicesRef.current.offsetTop - 200);
      dispatch(ScrollToSec2(false))
    }
  }, [ScrollToSec2Res])

  return (
    <section ref={servicesRef} id="servicesContainer" className='home-section-2 sec-animate container my-[3.125rem] lg:my-[180px]'>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2'>
          <h1 className='home-heading text-[2.188rem] max-w-[100%] lg:max-w-[55%] mb-[20px] lg:mb-0'>
            <span className='sub text-[1.375rem]'>Our Services</span>
            We provide the space,
            the tools, and the storytellers
            to help bring yours to life.
          </h1>
        </div>
        <div className='w-full lg:w-1/2 flex flex-wrap'>
          <div className='w-full sm:w-1/2 mb-[20px] md:mb-[50px] pr-0 md:pr-[65px]'>
            <div className='font-RanuaTrialsMedium text-[1.375rem]'>Book Our Studio</div>
            <div className='text-[1.375rem] leading-7'>Explore 2.5k sqft
              of customisable and functioning space that meets  your production needs.</div>
          </div>
          <div className='w-full sm:w-1/2 mb-[20px] md:mb-[50px] pr-0 md:pr-[65px]'>
            <div className='font-RanuaTrialsMedium text-[1.375rem]'>Rent Our Equipment</div>
            <div className='text-[1.375rem] leading-7'>Every craftsman needs their tools. Check out our comprehensive line
              of production equipment rentals.
            </div>
          </div>

          {/* 3. Meet our directors < Remove this part */}
          {/* <div className='w-full sm:w-1/2 mb-[20px] md:mb-[50px] pr-0 md:pr-[65px]'>
            <div className='font-RanuaTrialsMedium text-[1.375rem]'>Meet Our Directors</div>
            <div className='text-[1.375rem] leading-7'>Discover the passionate, talented, and skillful individuals who will care about your story as much as you do.</div>
          </div> */}
          <div className='w-full sm:w-1/2 mb-[20px] md:mb-[50px] pr-0 md:pr-[65px]'>
            <div className='font-RanuaTrialsMedium text-[1.375rem]'>Enjoy Our Work</div>
            <div className='text-[1.375rem] leading-7'>But enough with
              the talk.  Step into our studio and witness
              how other stories have unfolded.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec2Home
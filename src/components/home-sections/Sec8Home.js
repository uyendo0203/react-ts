import ImageAnimation from '@/hooks/ImageAnimation';
import { useNav } from '@/hooks/useNav';
import Link from 'next/link'
import { ButtonCpn } from 'src/components/elements';

const Sec8Home = () => {
  const equipmentRef = useNav('equipment')
  return (
    <section ref={equipmentRef} id="equipmentContainer" className='home-section-8 sec-animate mx-auto mt-[3.125rem] lg:mt-0'>
      <div className='flex flex-col lg:flex-row'>
        <div className='container lg:container-fluid w-full lg:w-1/2 lg:pb-[40px] lg:pt-[100px] lg:pl-[85px] flex flex-col justify-center mb-[30px] lg:mb-0'>
          <div className='mb-[20px] lg:mb-[50px] max-w-[100%] lg:max-w-[75%]'>
            <h1 className='home-heading text-[2.188rem] mb-[5px] lg:mb-[20px]'>
              <span className='sub text-[1.375rem]'>Our equipment</span>
              Where talent is developed and honed
            </h1>
            <div className='text-[1.375rem] mb-[15px] lg:mb-[40px]'>
              An open plan, modular design, and pre to post production services equip artists, directors, and producers with the right tools and opportunities to practice their craft and unlock their fullest potential.
            </div>
            <ButtonCpn
              dataGtmCategory="Homepage"
              dataGtmAction="Clicked_Homepage_Link"
              dataGtmLabel='Equipment list'
              text="Equipment list"
              link="/equipment"
              outline />
          </div>
          {/* <ul className='flex flex-wrap home-sec-8-menu'>
            <li>
              <Link href="/">
                <a className='text-[1.375rem]'>LIGHTS</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className='text-[1.375rem]'>SOUND</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className='text-[1.375rem]'>BACKDROPS</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className='text-[1.375rem]'>MISCELLANEOUS</a>
              </Link>
            </li>
          </ul> */}
        </div>
        <div className='w-full lg:w-1/2 ml-auto overflow-hidden'>
          <ImageAnimation>
            <img alt="Fiction" src='/images/home/home-sec8.jpg' className="w-full" />
          </ImageAnimation>
        </div>
      </div>
    </section>
  );
};

export default Sec8Home
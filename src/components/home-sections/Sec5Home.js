import ImageBannerAnimation from '@/hooks/ImageAnimation';
import { ButtonCpn } from 'src/components/elements';

const Sec5Home = () => {

  return (
    <section className='home-section-5 sec-animate mx-auto mt-[3.125rem] lg:mt-0'>
      <div className='flex flex-col lg:flex-row'>
        <div className='container lg:container-fluid 
          flex flex-col justify-center
          w-full lg:w-1/2 lg:max-w-[37%] 
          mb-[20px] lg:mb-0 ml-auto lg:ml-auto mr-auto lg:mr-0'
        >
          <h1 className='home-heading text-[2.188rem] mb-[5px] lg:mb-[10px]'>
            <span className='sub text-[1.375rem]'>Studio</span>
            Where every inch is designed with intention
          </h1>
          <div className='text-[1.375rem] mb-[25px] lg:mb-[65px]'>
            We provide a massive 2.5k sqft space that includes an editing suite, a cyclorama, a customisable studio, and a fully functioning kitchen with high end products and wares for video production and content creation.
          </div>
          <ButtonCpn
            dataGtmCategory="Homepage"
            dataGtmAction="Clicked_Homepage_Link"
            dataGtmLabel='All studio'
            text="All studio"
            link="/studio"
            outline />
        </div>
        <div className='w-full lg:w-1/2 ml-auto overflow-hidden'>
          <ImageBannerAnimation>
            <img alt='Where every inch is designed with intention' src='/images/home/home-sec5.jpg' className="w-full" />
          </ImageBannerAnimation>
        </div>
      </div>
    </section>
  );
};

export default Sec5Home
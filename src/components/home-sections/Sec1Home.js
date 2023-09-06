import { useNav } from '@/hooks/useNav';
import { ScrollToSec2 } from '@/redux/actions/ficActions';
import { HomeJson } from 'data';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Slider from 'react-slick';

const Sec1Home = () => {
    const [dataHome, setDataHome] = useState(HomeJson)
    const [isHide, setIsHide] = useState(true)
    const homeRef = useNav('home')
    const router = useRouter()

    const settingsSlider = {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
        autoplaySpeed: 5000,
    };

    const dispatch = useDispatch()
    const ToNextSlide = () => {
        dispatch(ScrollToSec2(true))
    };

    useEffect(() => {
        setTimeout(() => {
            setIsHide(false)
        }, 1000);
    }, [router])

    return (
        <section ref={homeRef} id="homeContainer" className='home-section-1 relative' >

            {/* load item first, when slider load done => show slider  */
                <div style={{ backgroundImage: `url("/images/home/${dataHome.section1[0].image}")` }} className={`absolute w-full h-full bg-cover bg-left ${isHide ? 'z-[1]' : '-z-[1]'}`}></div>
            }

            <Slider  {...settingsSlider} className={`${isHide ? 'opacity-0 h-0 overflow-hidden' : 'opacity-1 h-screen'} transition-all homeSlider  bg-no-repeat bg-cover bg-left`}  >
                {dataHome && dataHome.section1.length > 0 && dataHome.section1.map((item, index) => {
                    return (
                        <div key={index} className="h-full">
                            <div className={`absolute w-full h-full bg-cover bg-left ${index === (dataHome.section1.length - 1) ? 'item-end' : ''}`} style={{ backgroundImage: `url("/images/home/${item.image}")` }}></div>
                        </div>
                    )
                })}
            </Slider>

            {/* Text */
                !isHide &&
                <h3 className='text-[2.188rem] text-fic-white absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-[11] text-center max-w-[85%] w-full md:max-w-[40%] leading-normal' style={{ textShadow: '1px 1px 4px black' }}>Where creators come with exceptional ideas and leave with incredible stories</h3>
            }

            {/* Button scroll down */}
            <figure onClick={() => ToNextSlide()} className='absolute  max-w-[20px] md:max-w-full right-[20px] md:right-[60px] bottom-[20px] md:bottom-[40px] cursor-pointer animation-arrow'>
                <img alt='Where creators come with exceptional ideas and leave with incredible stories' src='/images/arrow-scroll-down.png' className="w-full" />
            </figure>
        </section >
    );
};

export default Sec1Home
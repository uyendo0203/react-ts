import { useEffect, useState } from "react";
import { WorksJson } from "data";
import { useRouter } from 'next/router'
import { Loading, MetaTag, PageTitleForDetailPage } from "src/components/elements";
import Slider from 'react-slick/lib/slider';

export async function getStaticProps() {
    const posts = WorksJson;
    return {
        props: { posts }
    };
}
export async function getStaticPaths() {
    const paths = WorksJson.map(post => ({
        params: { id: post.id, worksSlug: post.slug }
    }));
    return {
        paths,
        fallback: true
    }
}
const IndividualWorks = ({ posts }) => {
    const router = useRouter()
    const [isLoading, setLoading] = useState(true)
    const { worksSlug } = router.query
    const [detail, setDetail] = useState()
    const [idCurrent, setIdCurrent] = useState(1)
    const [data, setData] = useState(posts)
    const titlePage = PageTitleForDetailPage()

    useEffect(() => {
        if (data && data.length && worksSlug) {
            const temp = data.find((item) => item.slug == worksSlug)
            setIdCurrent(temp.id)
            setDetail(temp)
            setTimeout(() => {
                setLoading(false)
            }, 500);
        }
    }, [data, worksSlug])

    const prevPage = () => {
        if (idCurrent > 1) {
            const temp = data.find((item) => item.id === idCurrent - 1)
            if (temp && temp.slug) {
                router.push('/work/' + temp.slug)
                setLoading(true)
            }
        }
    }
    const nextPage = () => {
        const temp = data.find((item) => item.id === idCurrent + 1)
        if (temp && temp.slug) {
            router.push('/work/' + temp.slug)
            setLoading(true)
        }
    }

    const settingsSlider = {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        cssEase: "linear",
        autoplaySpeed: 5000,
        lazyLoad: true,
        fade: true
    };

    return (
        detail ?
            <>
                <MetaTag title={titlePage} />
                <section className='OurWorksPageDetail container'>
                    {isLoading && <Loading />}
                    <div className='flex flex-col lg:flex-row md:mb-[5.938rem] mb-[2rem] slider-dots-video'>
                        <div className='w-full md:px-0 lg:w-1/2 max-w-[100%] lg:max-w-[40%] mb-[20px] lg:mb-0'>
                            <h1 className='home-heading text-[2.188rem] mb-[5px] lg:mb-[15px]'>
                                <span className='sub text-[1.375rem]'>{detail.title}</span>
                            </h1>
                            <div className='text-[1.375rem] mb-[1rem] md:mb-4'>{detail.des}</div>
                        </div>
                        {
                            !isLoading &&
                            <div className={`w-full lg:w-1/2 ml-auto slider-dots-green`} style={{ position: 'relative' }}>
                                {
                                    detail.video && detail.video.length > 0 ?
                                        <Slider  {...settingsSlider}>
                                            {
                                                detail.video.map((item, index) => {
                                                    return (
                                                        <div className="videoWrapper" key={index}>
                                                            <iframe
                                                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                                                src={item.videoID ? `https://player.vimeo.com/video/${item.videoID}`:`https://www.youtube.com/embed/${item.videoIDYT}`}
                                                                width="100%"
                                                                frameBorder="0"
                                                                marginHeight="0"
                                                                marginWidth="0"
                                                                loading='eager'
                                                                allow="autoplay; fullscreen; picture-in-picture"
                                                                className="list-video"
                                                                allowFullScreen>
                                                            </iframe>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Slider>
                                        : <img alt={detail.title} src={`/images/${detail.img ? detail.img : 'works-detail.jpg'}`} className="w-full" />
                                }
                            </div>
                        }
                    </div>
                    <div className="flex justify-between">
                        <div className={`flex items-center cursor-pointer ${idCurrent === 1 ? 'opacity-[0.4]' : ''}`} onClick={prevPage}>
                            <figure className='w-full max-w-[2rem]'>
                                <img alt="Previous Work" src='/images/arrow-left.png' className="w-full" />
                            </figure>
                            <span className="text-[1rem] text-[#45635f] pl-[6px]">Previous Work</span>
                        </div>
                        <div className={`flex items-center cursor-pointer ${idCurrent === data.length ? 'opacity-[0.4]' : ''}`} onClick={nextPage}>
                            <span className="text-[1rem] text-[#45635f] pr-[6px]">Next Work</span>
                            <figure className='w-full max-w-[2rem]'>
                                <img alt="Next Work" src='/images/arrow-right.png' className="w-full" />
                            </figure>
                        </div>
                    </div>
                </section>
            </> : 'No data'
    )
}

export default IndividualWorks

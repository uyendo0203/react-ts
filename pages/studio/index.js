import Link from 'next/link'
import { useState } from 'react'
import { studioJson } from 'data'
import { MetaTag } from 'src/components/elements'
import { handleLinkToPage } from 'src/components/elements/LinkToPage'
import { useRouter } from 'next/router';

const AllStudio = () => {
    const router = useRouter()
    const [dataStudio, setDataStudio] = useState(studioJson)

    return (
        <>
            <MetaTag title="Fiction SG | Studio" description="It’s a living room, a kitchen, an apartment, an office, a bar. An infinite number of possibilities. It’s a blank sheaf of paper, just waiting for your stories to be written. Welcome to our studios. A space to make your own." />
            <section className='AllStudioPage container'>
                <div className="mb-[3.125rem] max-w-[100%] lg:max-w-[100%]">
                    <h1 className='child-heading text-[2.5rem] mb-[1.1rem]'>ALL STUDIOS</h1>
                    <div className="text-[1.375rem] leading-7">
                        <p className='mb-3'>It’s a living room, a kitchen, an apartment, an office, a bar. An infinite number of possibilities.</p>
                        <p className='mb-3'>It’s a blank sheaf of paper, just waiting for your stories to be written.</p>
                        <p className='mb-3'>Welcome to our studios. A space to make your own.</p>
                    </div>
                </div>

                <div className='mb-[5rem]'>
                    <h1 className='text-[2.5rem] mb-[0.938rem] font-RanuaTrialsMedium'>Studio Types</h1>
                    {dataStudio && dataStudio.length > 0 ? dataStudio.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-col xl:flex-row mb-[1.875rem]'>
                                <div className='flex'>
                                    <div className='text-[2.5rem] font-RanuaTrialsMedium mr-[1.25rem] leading-10'>0{index + 1}</div>
                                    <div className='text-[1.375rem] mr-0 md:mr-[1.875rem]'>
                                        <Link href=''>
                                            <a onClick={e => handleLinkToPage(e, `/studio/${item.slug}`, router)} className='font-RanuaTrialsMedium uppercase'>{item.name}</a>
                                        </Link>
                                        <div className='leading-7'>{item.des}</div>
                                    </div>
                                </div>
                                {/* <div className='flex ml-[4rem] xl:ml-0'>
                                <div className='text-[2.5rem] font-RanuaTrialsMedium mx-0 md:mr-[3.750rem] mb-[1rem] md:mb-0'>{item.area}m<sup>2</sup></div>
                                <div className='text-[2.5rem] font-RanuaTrialsMedium leading-11 mx-[2rem] md:ml-0 md:leading-9 md:mr-[3.750rem] mb-[1rem] md:mb-0'>Lorem<br />ipsum</div>
                                <div className='text-[2.5rem] font-RanuaTrialsMedium leading-11 md:leading-9 mr-0 md:mr-[3.750rem] mb-[1rem] md:mb-0'>Lorem <br />ipsum</div>
                            </div> */}
                            </div>
                        )
                    }) : 'No Data'}
                </div>

                <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-7 mb-[3.375rem]">
                    {dataStudio && dataStudio.length > 0 ? dataStudio.map((item, index) => {
                        return (
                            <div className='mb-4 sm:mb-0' key={index}>
                                <Link href="">
                                    <a onClick={e => handleLinkToPage(e, `/studio/${item.slug}`, router)} className='flex items-center mb-[1.6rem] text-arrow'>
                                        <span className='mr-[6px] text-[1.375rem] font-RanuaTrialsMedium'>{item.name}</span>
                                        <figure className=''>
                                            <img alt={item.name} src='/images/arrow-black.png' className="w-full" />
                                        </figure>
                                    </a>
                                </Link>
                                <Link href="">
                                    <a onClick={e => handleLinkToPage(e, `/studio/${item.slug}`, router)} >
                                        <figure>
                                            <img alt={item.name} src={`/images/studio/${item.image}`} className="w-full" />
                                        </figure>
                                    </a>
                                </Link>
                            </div>
                        )
                    }) : 'No Data'}
                </div>
            </section>
        </>
    )
}

export default AllStudio

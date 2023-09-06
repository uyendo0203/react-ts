import { equimentPriceJson } from 'data'
import { useState } from 'react'
import { MetaTag } from 'src/components/elements'

const Equipment = () => {

    const [data, setData] = useState({
        noFee: equimentPriceJson.noFee,
        hasFee: equimentPriceJson.hasFee,
    })

    return (
        <>
            <MetaTag title="Fiction SG | Equipment" />
            <section className='AllStudioPage container'>
                <h1 className='child-heading text-[2.5rem] mb-[1.1rem]'>Equipment</h1>
                <div className="grid grid-cols sm:grid-cols-2 gap-7 mb-[3.438rem]">
                    <div className="text-[1.375rem] leading-7">
                        <p className='mb-3'>If every frame is a painting, then every storyteller needs their brushes, palettes, and instruments.</p>
                        <p>Find everything you need to unleash your creativity and bring your stories to life with equipment rentals ranging from lights, stands, backdrops, cutters & flags, and more</p>
                    </div>
                    {/* <div className='flex justify-center flex-wrap -translate-y-10'>
                    <div className='mx-5 text-center'>
                        <div className='text-[5.313rem]'>xx</div>
                        <div className='text-[1.5rem] uppercase'>lights</div>
                    </div>
                    <div className='mx-5 text-center'>
                        <div className='text-[5.313rem]'>xx</div>
                        <div className='text-[1.5rem] uppercase'>CAMERAS</div>
                    </div>
                    <div className='mx-5 text-center'>
                        <div className='text-[5.313rem]'>xx</div>
                        <div className='text-[1.5rem] uppercase'>PROPERTIES</div>
                    </div>
                </div> */}
                </div>

                <div className="grid grid-cols sm:grid-cols-2 sm:gap-7">
                    <figure className='mb-[3rem]'>
                        <img alt='Equipment' src='/images/equipment-1.jpg' className="w-full" />
                    </figure>
                    <figure className='mb-[3rem]'>
                        <img alt='Equipment' src='/images/equipment-2.jpg' className="w-full" />
                    </figure>
                </div>
                <div className="text-[1.375rem] mb-5">
                    Complimentary use of basic production equipment
                </div>
                <div className='grid grid-cols-1 md:grid-cols-1 gap-3 text-[1.275rem] lg:text-[1.275rem]'>
                    {data && data.noFee && Object.keys(data.noFee).map((key, index) => (
                        <div className='max-w-full md:max-w-[75%]' key={index}>
                            <table key={index} className={`w-full border border-1 border-b-[0] ${data.noFee[key].title}`}>
                                <thead>
                                    <tr><th className='p-3 border border-b-1 bg-[#ddd]' colSpan={2}>{data.noFee[key].title}</th></tr>
                                </thead>
                                <tbody>
                                    {data.noFee[key].list && data.noFee[key].list.length > 0 ? data.noFee[key].list.map((item, iItem) => {
                                        return (
                                            <tr key={iItem}>
                                                <td className='p-3 w-[80%] border border-1'>{item.name}</td>
                                                <td className='p-3 w-[20%] border border-1'>{item.quality}</td>
                                            </tr>
                                        )
                                    }) :
                                        <tr>
                                            <td className='p-0'>
                                                <table className='w-full'>
                                                    <tbody>
                                                        <tr>
                                                            <td className='p-3 border-b-[1px] border-[#000] font-bold' colSpan={2}>
                                                                {data.noFee[key].hasGroup.Aputure.groupTitle}
                                                            </td>
                                                        </tr>
                                                        {
                                                            data.noFee[key].hasGroup && data.noFee[key].hasGroup.Aputure.groupList.map((temp, itemp) => {
                                                                return (
                                                                    <tr key={itemp}>
                                                                        <td className='p-3 w-[80%] border-b-[1px] border-r-[1px] border-[#000]'>{temp.name}</td>
                                                                        <td className='p-3 w-[20%] border-b-[1px] border-[#000]'>{temp.quality}</td>
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
                                                            <td colSpan={2} className="p-3 border-b-[1px] border-[#000] font-bold">
                                                                {data.noFee[key].hasGroup.Elinchrom.groupTitle}
                                                            </td>
                                                        </tr>
                                                        {
                                                            data.noFee[key].hasGroup && data.noFee[key].hasGroup.Elinchrom.groupList.map((temp, itemp) => {
                                                                return (
                                                                    <tr key={itemp}>
                                                                        <td className='p-3 w-[80%] border-b-[1px] border-r-[1px] border-[#000]'>{temp.name}</td>
                                                                        <td className='p-3 w-[20%] border-b-[1px] border-[#000]'>{temp.quality}</td>
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
                            </table>
                        </div>
                    ))}
                </div>
                <div className="text-[1.375rem] mb-5 mt-10">
                    Equipment Rental Add-Ons
                </div>
                <div className='grid grid-cols-1 md:grid-cols-1 gap-3 text-[1.275rem] lg:text-[1.275rem]'>
                    {data && data.hasFee && Object.keys(data.hasFee).map((key, index) => (
                        <div className='max-w-full md:max-w-[75%]' key={index}>
                            <table key={index} className={`w-full border border-1 ${data.hasFee[key].title}`}>
                                <thead>
                                    <tr>
                                        <th className='p-3 border border-b-1 bg-[#ddd]'>{data.hasFee[key].title}</th>
                                        <th className='p-3 border border-b-1 bg-[#ddd]'>Qty Available</th>
                                        <th className='p-3 border border-b-1 bg-[#ddd]'>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.hasFee[key].list.length && data.hasFee[key].list.map((item, iItem) => {
                                        return (
                                            <tr key={iItem}>
                                                <td className='p-3 w-[70%] border border-1'>{item.name}</td>
                                                <td className='p-3 w-[15%] border border-1 text-center'>{item.quality}</td>
                                                <td className='p-3 w-[15%] border border-1'>{item.price}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </section >
        </>
    )
}

export default Equipment

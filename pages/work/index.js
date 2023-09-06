import Link from 'next/link'

import { Loading, MetaTag } from "src/components/elements"
import { useEffect, useState } from "react";
import { WorksJson } from "data";

const OurWorks = () => {
  const [data, setData] = useState(WorksJson)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if (data && data.length) {
      setLoading(false)
    }
  }, [data])

  const loadMore = () => { }

  return (
    <>
      <MetaTag title="Fiction SG | Work" />
      <section className='OurWorksPage container'>
        {isLoading && <Loading />}
        <h1 className='child-heading text-[2.5rem] pb-[2.5rem]'>Our Work</h1>
        <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-7 mb-[3.375rem]">
          {data && data.length > 0 ? data.map((item, index) => {
            return (
              <div key={index}>
                <Link href={`/work/${item.slug}`}>
                  <a className="work-item">
                    <figure className='mb-[1.7rem]'>
                      <img alt='Our Work' src={`/images/${item.img}`} className="w-full" />
                    </figure>
                  </a>
                </Link>

                <Link href={`/work/${item.slug}`}>
                  <a className="hover:underline"><h2 className="text-[1.375rem] font-RanuaTrialsMedium inline">{item.title}</h2></a>
                </Link>
                <p className="text-[1.375rem] leading-7 mt-[0.2rem]">{item.des}</p>
              </div>
            )
          }) : 'No Data'}
        </div>

        {/* <div className="flex justify-center" onClick={() => loadMore()}>
        <ButtonCpn text="Load videos" outline />
      </div> */}
      </section>
    </>
  )
}

export default OurWorks

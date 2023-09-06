import { studioJson } from "data"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Loading, MetaTag, PageTitleForDetailPage } from "src/components/elements"
export async function getStaticProps() {
    const posts = studioJson;
    return {
        props: { posts }
    };
}
export async function getStaticPaths() {
    const paths = studioJson.map(post => ({
        params: { id: post.id, studioSlug: post.slug }
    }));
    return {
        paths,
        fallback: true
    }
}
const IndividualStudio = ({ posts }) => {
    const router = useRouter()
    const [isLoading, setLoading] = useState(true)
    const { studioSlug } = router.query
    const [detail, setDetail] = useState()
    const [data, setData] = useState(posts)
    const titlePage = PageTitleForDetailPage()

    useEffect(() => {
        if (data && data.length && studioSlug) {
            const temp = data.find((item) => item.slug == studioSlug)
            setDetail(temp)
            setLoading(false)
        }
    }, [data, studioSlug])

    return (
        <>
            <MetaTag title={titlePage} description="Edges replaced with coves and seamless curves to give the illusion of infinite space and distance." />
            <section className='StudioPageDetail container'>
                {isLoading && <Loading />}
                <h1 className='home-heading mb-[2.813rem]'>
                    <span className='child-heading text-[2.5rem] mb-[1.1rem]'>{detail && detail.name}</span>
                </h1>
                <figure className='mb-[3.75rem]'>
                    <img alt={detail && detail.name} src={'/images/studio/' + (detail && detail.image1)} className="w-full" />
                </figure>
                <div className="text-[1.375rem] mb-[3.75rem] leading-7 mr-0 md:mr-8">
                    {detail && detail.des}
                </div>
                <div className="grid grid-cols md:grid-cols-3 gap-6">
                    <figure className='mb-[2rem] md:mb-0'>
                        <img alt={detail && detail.name} src={'/images/studio/' + (detail && detail.image2)} className="w-full" />
                    </figure>
                    <figure className='col-span-1 md:col-span-2'>
                        <img alt={detail && detail.name} src={'/images/studio/' + (detail && detail.image3)} className="w-full" />
                    </figure>
                </div>
            </section>
        </>
    )
}

export default IndividualStudio

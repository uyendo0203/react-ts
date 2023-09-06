import Head from 'next/head'
import { useRouter } from "next/router";

const MetaTag = ({ title, description, ogType, ogImage, twImage }) => {
  let descriptionDefault = 'Where creators come with exceptional ideas and leave with incredible stories'
  const router = useRouter()
  const url = 'https://fiction.com.sg' + router.asPath

  return (
    <Head>
      <title>{title ? title : 'Fiction SG'}</title>
      <link rel="icon" href='/favicon.ico' />
      <meta name="robots" content="follow, index" />

      <meta
        name="robots"
        content={
          process.env.NODE_ENV === "production"
            ? "index, follow"
            : "noindex, nofollow"
        } />

      <meta name="keywords" content="Fiction Singapore 2022" />
      <meta name="description" content={description ? description : descriptionDefault} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://cdn.tmrw.com.sg/fiction/og-image-fiction.jpg" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title ? title : 'Fiction SG'} />
      <meta property="og:description" content={description ? description : descriptionDefault} />
    </Head>
  )
}
export default MetaTag
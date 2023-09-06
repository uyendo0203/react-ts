import { ScrollToIDHome } from '@/redux/actions/ficActions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import { Sec10Home, Sec1Home, Sec2Home, Sec3Home, Sec4Home, Sec5Home, Sec6Home, Sec7Home, Sec8Home, Sec9Home } from 'src/components/home-sections';
import { Loading, MetaTag } from 'src/components/elements';
import Link from 'next/link';

const Home = () => {
  const reducers = useSelector((state) => state.FicReducers)
  const dispatch = useDispatch()
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (reducers.DataScrollToSec) {
      setTimeout(() => {
        const element = document.getElementById(reducers.DataScrollToSec.id);
        if (element) {
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - (reducers.DataScrollToSec?.offset || 0);
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          dispatch(ScrollToIDHome(null))
        }
      }, 300);
    }

  }, [reducers.DataScrollToSec, router.pathname])

  /* Effect : Loading */
  useEffect(() => {
    setIsLoading(false)

  }, [])

  // const { sectionId, setSectionId } = useContext(NavContext);
  // useEffect(() => {
  //   console.log({ sectionId });
  // }, [sectionId])

  // const ref = useRef();
  // useEffect(() => {
  // 	if (ref.current) {
  // 		document.addEventListener("scroll", handleScroll)

  // 	}
  // }, [])

  // const handleScroll = (e) => {
  // 	let top = e.target.scrollingElement.scrollTop
  // 	let list = ref.current.querySelectorAll(".sec-animate")
  // 	if (list.length > 0) {
  // 		for (let i = 0; i < list.length; i++) {
  // 			let topElement = list[i].offsetTop;
  // 			let heightElement = list[i].clientHeight

  // 			if (top >= (topElement - 100) && top < (topElement + heightElement)) {
  // 				list[i].classList.add("activeSection")
  // 			} else {
  // 				list[i].classList.remove("activeSection")
  // 			}
  // 		}
  // 	}
  // }

  return (
    <>
      {isLoading && <Loading />}
      <MetaTag />
      <div className='home'>
        <Sec1Home />
        <Sec2Home />
        <Sec3Home />
        <Sec4Home />
        <Sec5Home />
        <Sec6Home />
        <Sec7Home />
        <Sec8Home />
        {/* <Sec9Home /> */}
        <Sec10Home />
      </div>
    </>
  )
}

export default Home

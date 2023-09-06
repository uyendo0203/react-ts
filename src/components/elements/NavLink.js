import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { useContext, useState } from 'react';
import { NavContext } from 'src/context/NavContext';
import { ScrollToIDHome } from '@/redux/actions/ficActions';

const NavLink = ({ navLinkId, scrollToId, navLinkText, navLinkRoute, isHomepage }) => {
	const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);
	const [offset, setOffset] = useState(80)
	const dispatch = useDispatch()
	const router = useRouter()

	const handleClick = () => {
		if (navLinkId) {
			setActiveNavLinkId(navLinkId);

			switch (navLinkId) {
				case 'services':
					setOffset(200)
					break;
				case 'equipment':
					setOffset(60)
					break;
			}
			if (router.pathname != (navLinkRoute || "/")) {
				router.push(navLinkRoute ? navLinkRoute : '/')
			}
			dispatch(ScrollToIDHome({ id: scrollToId, offset: offset, navid: navLinkId }))

		} else {
			return
		}

	};

	return (
		<li className={`${activeNavLinkId === navLinkId ? 'activeClass' : ''} lg:mx-[2vw] xl:mx-[3.4vw] md:mr-[1rem]`}>
			<a
				data-gtm-category="Top Navigation"
				data-gtm-action="Clicked_Navigation_Link"
				data-gtm-label={navLinkId}
				id={navLinkId} onClick={handleClick} className={`btn-gtm cursor-pointer hover:underline`}>{navLinkText}</a>
		</li>
	);
};

export default NavLink;

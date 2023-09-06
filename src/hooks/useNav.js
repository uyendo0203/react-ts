import { useRef, useContext, useEffect } from 'react';
import { NavContext } from 'src/context/NavContext';
import { useOnScreen } from './useOnScreen';

export const useNav = navLinkId => {
	const ref = useRef(null);

	const { setActiveNavLinkId, setSectionId } = useContext(NavContext);

	const isOnScreen = useOnScreen(ref);

	useEffect(() => {
		if (isOnScreen) {
			setActiveNavLinkId(navLinkId);
			setSectionId(navLinkId);
		}
	}, [isOnScreen, setActiveNavLinkId, navLinkId]);

	return ref;
};

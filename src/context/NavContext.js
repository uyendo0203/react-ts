import React, { useState } from 'react';

export const NavContext = React.createContext();

const NavProvider = ({ children }) => {
	const [activeNavLinkId, setActiveNavLinkId] = useState('');
	const [sectionId, setSectionId] = useState('');

	const providerValue = {
		activeNavLinkId,
		setActiveNavLinkId,
		sectionId,
		setSectionId,
	};

	return (
		<NavContext.Provider value={providerValue}>
			{children}
		</NavContext.Provider>
	);
};

export default NavProvider;

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const PageTitleForDetailPage = () => {
    const router = useRouter()
    const [titlePage, setTitlePage] = useState()

    // uppercase first letter 
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // cut "-" and string concatenation with uppercase first letter 
    function subpathChangeText(string) {
        let fake = "kitchen-studio", result = '';
        let arrTemp = string.split('-')
        for (let i = 0; i < arrTemp.length; i++) {
            const element = arrTemp[i];
            result += capitalizeFirstLetter(element) + " "
        }
        return result
    }
    
    useEffect(() => {
        if (router) {
            const asPathCut = router.asPath.split('/')
            const mainPage = asPathCut[1], subPage = subpathChangeText(asPathCut[2]);
            setTitlePage('Fiction SG ' + (mainPage ? ' | ' + capitalizeFirstLetter(mainPage) : '') + (subPage ? ' | ' + capitalizeFirstLetter(subPage) : ''))
        }
    }, [router])

    return (titlePage);
};
export default PageTitleForDetailPage;
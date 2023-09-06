import { Spin } from 'antd';
import React from 'react';

 const Loading = () => {
    return (
        <Spin spinning={true} className="Loading-full fixed w-full h-full left-0 top-0 flex items-center justify-center bg-[#ffffffc2] z-[9999]" />
    );
};
export default Loading

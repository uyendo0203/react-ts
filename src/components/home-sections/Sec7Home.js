import { useState } from 'react';
import { ButtonCpn } from 'src/components/elements';
import { studioJson } from 'data';

const Sec7Home = () => {
  const [data, setData] = useState(studioJson)

  function renderLayout(key, index) {
    let end = ''
    function isEvenOdd(value) {
      if (value % 2) {
        return true
      }
      return false
    }
    switch (key) {
      case 'bg':
        end = isEvenOdd(index) ? "bg-[#b6b0a6]" : "bg-[#f4f4f4]"
        break;
      case 'title':
        end = isEvenOdd(index) ? "text-fic-white" : "text-[#000]"
        break;
      case 'img':
        end = isEvenOdd(index) ? "max-w-[100%]" : "max-w-[100%]"
        break;
    }
    return end
  }

  return (
    <section className='home-section-7 sec-animate flex flex-col sm:flex-row' >
      {data && data.length && data.map((item, index) => {
        return (
          <div key={index} className={`relative text-center w-full sm:w-1/3 ${renderLayout('bg', index)}`}>
            <img alt="Fiction" className='w-full' src={'/images/home/' + item.imageHome} />
            <div className='absolute top-[20%] w-full'>
              <h2 className={`text-center text-[2.188rem] min-h-[90px] text-[#000] ${renderLayout('title', index)}`}>
                {item.name}
              </h2>
            </div>
            <div className='absolute bottom-[40px] left-[50%] -translate-x-[50%]'>
              <ButtonCpn
                dataGtmCategory="Homepage"
                dataGtmAction="Clicked_Homepage_Link"
                dataGtmLabel={'Check studio_' + item.name}
                text="Check studio" 
                link={"/studio/" + item.slug}
                />
            </div>
          </div>
        )
      })}
    </section>
  );
};

export default Sec7Home
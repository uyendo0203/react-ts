import { Button, Form, Input } from 'antd';
import { useNav } from '@/hooks/useNav';
import ImageAnimation from '@/hooks/ImageAnimation';
import Link from 'next/link';

const Sec10Home = () => {
  const contactRef = useNav('contact')

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const AddressLink = ({ href, className, value, dataGtmCategory, dataGtmAction, dataGtmLabel }) => {
    return (
      <Link href={href}>
        <a className='btn-gtm underline hover:no-underline'
          data-gtm-category={dataGtmCategory}
          data-gtm-action={dataGtmAction}
          data-gtm-label={dataGtmLabel}
        >{value}</a>
      </Link>
    )
  }

  return (
    <section ref={contactRef} id="contactContainer" className='home-section-10 sec-animate mx-auto mt-[3.125rem] lg:mt-0'>
      <div className='flex flex-col lg:flex-row'>
        <div className='container lg:container-fluid w-full lg:w-1/2 lg:pb-[40px] lg:pt-[100px] lg:pl-[85px] flex flex-col justify-center'>
          <div className='mb-[20px] lg:mb-[50px] max-w-[100%] md:max-w-[70%] xl:max-w-[50%]'>
            <h1 className='home-heading text-[2.188rem] mb-[5px] lg:mb-[20px]'>
              <span className='sub text-[1.375rem]'>Contact</span>
              {/* A space for
              connection and
              collaboration */}
            </h1>
            <div className='text-[1.375rem] mb-[15px] xl:mb-[40px] leading-7'>
              Have a story you care about?<br />
              Let us help you bring it to life.
            </div>
            <div className='text-[1.375rem] mb-5 leading-7'>
              <b>Fiction Studio</b> <br />
              55 Ubi Avenue 1, <br />
              #05-16, <br />
              Singapore 408935<br /><br />

              Contact: <AddressLink dataGtmCategory="Homepage"
                dataGtmAction="Clicked_Homepage_Link"
                dataGtmLabel='Contact 80227966'
                href='tel:+6580227966'
                value="80227966" />
              <br />
              WhatsApp: <AddressLink dataGtmCategory="Homepage"
                dataGtmAction="Clicked_Homepage_Link"
                dataGtmLabel='WhatsApp +6580227966'
                href='https://wa.me/6580227966'
                value="+6580227966" />
              <br />
              Email: <AddressLink dataGtmCategory="Homepage"
                dataGtmAction="Clicked_Homepage_Link"
                dataGtmLabel='Email info@fiction.com.sg'
                href='mailto:info@fiction.com.sg'
                value="info@fiction.com.sg" />

              {/* Contact: <Link href='tel:+6580227966'><a className='underline hover:no-underline'>80227966</a></Link><br />
              WhatsApp: <Link href='https://wa.me/6580227966'><a className='underline hover:no-underline'>+6580227966</a></Link><br />
              Email: <Link href='mailto:info@fiction.com.sg'><a className='underline hover:no-underline'>info@fiction.com.sg</a></Link> */}
            </div>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className='fic-form hidden'
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input placeholder="Mail" />
              </Form.Item>
              <Form.Item
                name="message"
                rules={[{ required: true, message: 'Please input your message!' }]}
              >
                <Input placeholder="Message" />
              </Form.Item>
              <Form.Item className='mt-[2.5rem]'>
                <Button type="primary" htmlType="submit"
                  className="text-green-dark border border-green-dark border-solid w-[14.375rem] h-[4.063rem] text-[1.25rem] rounded-[31px] hover:shadow-none hover:text-white hover:border-green-dark hover:bg-green-dark">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className='w-full lg:w-1/2 ml-auto overflow-hidden'>
          <iframe className='map-iframe' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3988.7512062226347!2d103.89531!3d1.325184!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1965917a46a1%3A0x5517f1eb98df127!2sFiction%20Pte.%20Ltd.!5e0!3m2!1sen!2sid!4v1651128974084!5m2!1sen!2sid" width="600" height="750" style={{ border: 0, margin: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          {/* <ImageAnimation>
            <img  alt="Fiction" src='/images/home-sec-9.jpg' className="w-full" />
          </ImageAnimation> */}
        </div>
      </div>
    </section>
  );
};

export default Sec10Home
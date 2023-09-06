import moment from "moment";
import Link from "next/link";
import CalendarHeader from "@/hooks/CalendarHeader";
import { useDispatch, useSelector } from 'react-redux'
import { forwardRef, useEffect, useRef, useState } from 'react'
import { CheckCircleOutlined, CloseCircleOutlined, CloseOutlined } from '@ant-design/icons';
import { Form, Input, Button, Select, Calendar, Modal, notification } from 'antd';
import { ClearData, GetListStudio, PostBooking, GetListDuration, GetListTimeSlot, GetCalendar, GetListStartTime, CheckPaymentStatus, GetPriceTotal, CheckPromotionBooking } from '@/redux/actions/ficActions';
import { Loading, MetaTag, PriceCpn } from 'src/components/elements';

const { Option } = Select;
const dateFormat = 'YYYY-MM-DD'

const BookStudio = () => {
    const refCalendar = useRef() ;
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false)

    /*  Data Sample for user form
        Only local (Dev Env)
    */
    const [userInfo, setUserInfo] = useState({
        email: process.env.NODE_ENV === 'development' ? 'test@gmail.com' : '',
        name: process.env.NODE_ENV === 'development' ? 'test' : '',
        phone: process.env.NODE_ENV === 'development' ? '1231231123' : '',
    })

    const [couponCode, setCouponCode] = useState('')//code id
    const [couponCodeStatus, setCouponCodeStatus] = useState({
        status: false,
        errText: null
    })
    const [linkPayment, setLinkPayment] = useState('')
    const [listStudio, setListStudio] = useState() //list studio (current is local)
    const [selectedCalendar, setSelectedCalendar] = useState(moment(new Date, 'DD/MM/YYYY'))  //a date selected (default today)
    const [selectedStudio, setSelectedStudio] = useState() // a studio selected
    const [listBookingSelected, setListBookingSelected] = useState([])//items on cart selected
    const [listBookingSelectedForTotalPrice, setListBookingSelectedForTotalPrice] = useState([])//for total price
    const [listDateCalendar, setListDateCaledar] = useState()//items on cart selected
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [priceTotalForAllOrder, setPriceTotalForAllOrder] = useState(0)
    const [PaymentStatus, setPaymentStatus] = useState({
        status: false,
        order_id: null
    })

    const [timeslot, setTimeslot] = useState({ list: [], selected: null })
    const [duration, setDuration] = useState({ list: [], selected: null })

    const { loading, DataListStudio, DataBooking, DataListDuration, DataCalendar, DataListStartTime, DataCheckPaymentStatus, DataTotalPrice, DataCheckPromotionCode } = useSelector((state) => state.FicReducers)

    const ClickArrowMonth = (direction) => {
        if (direction === 'next') {
            setSelectedCalendar((prev) => moment(prev).add(1, 'months'));
        } else {
            setSelectedCalendar((prev) => moment(prev).subtract(1, 'months'));
        }
    }

    // useEffect(() => {
    //     console.log('------------------xxxxxxxxxxxxxxxxxxx------------------');
    //     console.log(moment(selectedCalendar).format('DD/MM/YYYY') + ' - ' + 'DD/MM/YYYY');
    // }, [selectedCalendar])

    /*  Rerender calendar   */
    const CalendarRef = forwardRef((props, ref) => (
        <div ref={ref} className="CalendarRef">
            <Calendar
                fullscreen={false}
                dateCellRender={dateCellRender}
                // value={moment('01/09/2023')}
                value={selectedCalendar}
                onSelect={handleChangeDateCalendar}
                disabledDate={current => {
                    return current && current < moment(moment(new Date, 'DD/MM/YYYY').format(dateFormat), dateFormat);
                }}
                headerRender={(value, type, onChange, onTypeChange,) => {
                    return (
                        <div className="calendar-custom-month">
                            <figure onClick={() => ClickArrowMonth('prev')} className="month-arrow month-prev">
                                <img src="/images/arrow-select-down.png" />
                            </figure>
                            <div className="wrap">
                                {CalendarHeader(value, type, onChange, onTypeChange)}
                                <div className="year ">{selectedCalendar.year()}</div>
                            </div>
                            <figure onClick={() => ClickArrowMonth('next')} className="month-arrow month-next">
                                <img src="/images/arrow-select-down.png" />
                            </figure>
                        </div>
                    )
                }}
            />
        </div>
    ));

    /**
    * Add status for A date on Calendar (can book or can't)
    * @param value  A date
    */
    const getListData = (value) => {
        let listData = [];
        const dateValue = value.format("yyyy/MM/DD");
        if (listDateCalendar) {
            for (let i = 0; i < listDateCalendar.length; i++) {
                let date = listDateCalendar[i]?.full_day;
                let isCanBook = listDateCalendar[i]?.can_book;
                if (moment(date, 'DD/MM/YYYY').endOf("days").valueOf() == moment(dateValue, 'DD/MM/YYYY').endOf("days").valueOf() && isCanBook === false) {
                    listData = [{ type: "error" }];
                    break
                }
            }
        }
        return listData || [];
    }

    /**
    * Disabled Date isValid
    * @param value  A date
    */
    const dateCellRender = value => {
        const listData = getListData(value);
        const handleRef = (ref) => {
            if (listData?.length > 0 && ref) {
                let parent = ref?.closest(".ant-picker-cell-in-view");
                parent?.classList.add("cannot-book")
                // parent?.classList.add("active")
            }
        }
        return (
            <span ref={handleRef} className="has-event"></span>
            // <ul className='events' ref={handleRef}>
            //     {listData.map((item, index) => (
            //         <li key={`${item.content}-${index}`}>
            //             <Badge status={item.type} text={item.content} />
            //         </li>
            //     ))}
            // </ul>
        );
    };

    /**
    * Get Calendar (All date of Month)
    * @param month  Choose month on SelectOption
    * @param roomId Choose a room
    */
    const getCalendarByRoomMonth = ({ month, roomId }) => {
        const xMonth = moment(month).month() + 1;
        dispatch(GetCalendar({ "month": xMonth, "year": selectedCalendar.year(), "room": roomId }))
    }

    /**
     * Get Start Time
     * @param date  date with format "YYYY-MM-DD"
     * @param roomId  Choose room
     * @param duration  Choose duration
    */
    const getStartTime = ({ date, roomId, duration }) => {
        dispatch(GetListStartTime({ "date": moment(date).format('YYYY-MM-DD'), "room": roomId, "duration": duration }))
    }

    /*  Effect : check order status for each 60s  */
    useEffect(() => {
        if (PaymentStatus.order_id && PaymentStatus.status === false) {
            // console.log('call check payment status');
            const timer = window.setInterval(() => {
                dispatch(CheckPaymentStatus({ order_id: PaymentStatus.order_id }))
            }, 60000);
            return () => { // Return callback to run on unmount.
                window.clearInterval(timer);
            };
        }
    }, [PaymentStatus, PaymentStatus.order_id]);

    /*  API Response : Total Price*/
    useEffect(() => {
        if (DataTotalPrice) {
            if (DataTotalPrice.status === true) {
                setPriceTotalForAllOrder(DataTotalPrice.total_price)
            } else {
                setCouponCodeStatus({ status: false, errText: DataTotalPrice.data.error[0] })
            }
        }
    }, [DataTotalPrice])

    /*  API Response : Coupon status (if == true => call price total again)*/
    useEffect(() => {
        if (DataCheckPromotionCode) {
            dispatch(GetPriceTotal({ bookings: listBookingSelectedForTotalPrice }))

            if (DataCheckPromotionCode.status === 404) {
                setCouponCodeStatus(() => ({ status: false, errText: DataCheckPromotionCode.data.error[0] }))
            } else {
                if (DataCheckPromotionCode.data.status === true) {
                    dispatch(GetPriceTotal({
                        bookings: listBookingSelectedForTotalPrice,
                        promo_code: DataCheckPromotionCode.data.promo_code.code
                    }))
                    setCouponCode(DataCheckPromotionCode.data.promo_code.code)
                    setCouponCodeStatus({ status: true, errText: 'Coupon applied' })
                }
                else {
                    setCouponCodeStatus(() => ({ status: false, errText: DataCheckPromotionCode.data.error[0] }))
                }
            }
        }
    }, [DataCheckPromotionCode])

    /*  Effect: when add 1 order OR delete 1 order
        => call api again to get new total price
    */
    useEffect(() => {
        if (listBookingSelectedForTotalPrice && listBookingSelectedForTotalPrice.length > 0) {
            dispatch(GetPriceTotal({ bookings: listBookingSelectedForTotalPrice }))
        }
    }, [listBookingSelectedForTotalPrice])

    /*  Effect : when change "Month" || "Studio" 
        => Return: All date of month and status of studio ("can_book" field) 
    */
    useEffect(() => {
        if (selectedCalendar && selectedStudio) {
            getCalendarByRoomMonth({
                month: selectedCalendar,
                roomId: selectedStudio.id,

            })
        }
    }, [selectedCalendar, selectedStudio])


    /*  Effect : when change "Date" || "Studio" || "duration" 
        => Return: TimeSlot list
    */
    useEffect(() => {
        if (selectedCalendar && selectedStudio && duration.selected) {
            getStartTime({
                date: selectedCalendar,
                roomId: selectedStudio.id,
                duration: duration.selected
            })
        }
    }, [selectedCalendar, selectedStudio, duration.selected])

    /*  Effect : on first load 
        Return: List "Studio" && "timeslot"
    */
    useEffect(() => {
        dispatch(GetListStudio())
        dispatch(GetListTimeSlot())
    }, [dispatch])

    /* API Response : List Studio */
    useEffect(() => {
        if (DataListStudio) {
            if (DataListStudio.status === true) {
                /*set list studio*/
                setListStudio(DataListStudio.result)

                /*select first studio*/
                form.setFieldsValue({ 'studio': DataListStudio.result[0].id })
                setSelectedStudio(DataListStudio.result[0])
            }
        }
    }, [DataListStudio])

    /* API Response : List Duration */
    useEffect(() => {
        if (DataListDuration) {
            setDuration({
                ...duration,
                selected: DataListDuration.duration[0],
                list: DataListDuration.duration
            })
        } else {
            dispatch(GetListDuration())
        }
    }, [DataListDuration])

    /* Effect : Loading */
    useEffect(() => {
        if (loading != undefined) { setIsLoading(loading) }
    }, [loading])

    /* API Response : Data Booking */
    const xListBooking = [].concat(listBookingSelected)
    useEffect(() => {
        if (DataBooking) {
            setIsLoading(false)
            setPaymentStatus({
                ...PaymentStatus,
                status: false
            })
            if (DataBooking.status === true) {
                setIsModalVisible(true)
                setLinkPayment(DataBooking.payment_link)

                form.resetFields();
                dispatch(ClearData())

                setUserInfo({ email: '', name: '', phone: '' })

                setPaymentStatus({
                    ...PaymentStatus,
                    order_id: DataBooking.order_id,
                    status: false
                })
            } else {
                notification.error({
                    message: DataBooking.error?.bookings,
                    description: 'Please select other one!'
                })

                let ListInValid = DataBooking.error?.id_invalid
                for (let i = 0; i < xListBooking.length; i++) {
                    let iTemp = xListBooking[i]
                    for (let z = 0; z < ListInValid.length; z++) {
                        let zTemp = ListInValid[z]
                        if (iTemp.id === zTemp) {
                            iTemp.invalidBooking = true
                        }
                    }
                }

                setListBookingSelected(xListBooking)
                dispatch(ClearData())
            }
        }
    }, [DataBooking])

    /* API Response : Data Check Payment Status */
    useEffect(() => {
        if (DataCheckPaymentStatus && DataCheckPaymentStatus.status === true) {
            setPaymentStatus({
                ...PaymentStatus,
                status: DataCheckPaymentStatus.order_status
            })

            // Payment done 
            if (DataCheckPaymentStatus.order_status === true) {
                setListBookingSelected([])
            }
        }
    }, [DataCheckPaymentStatus])

    /* API Response : Data Calendar */
    useEffect(() => {
        if (DataCalendar) {
            setListDateCaledar(DataCalendar.dates)
        }
    }, [DataCalendar])

    /* API Response : Data List Start Time (TimeSlot) */
    useEffect(() => {
        if (DataListStartTime) {
            if (DataListStartTime.data.times) {
                setTimeslot({
                    ...timeslot,
                    list: DataListStartTime.data.times
                })
            }
            if (DataListStartTime.data.status == false) {
                setTimeslot({
                    ...timeslot,
                    list: []
                })
                notification.error({
                    message: 'Error',
                    description: DataListStartTime.data.error?.date
                })
            }
        }
    }, [DataListStartTime])

    /*button add to cart */
    let tempBookingSelected = [].concat(listBookingSelected);
    let tempTotalPrice = [].concat(listBookingSelectedForTotalPrice);
    const handleAddToCart = (e) => {

        CheckCoupon()

        form.submit();
        const xDuration = duration.list && duration.list.length && duration.list.filter((item) => item.id === duration.selected)[0]
        const xTimesSelected = timeslot.list && timeslot.list.length && timeslot.list.filter((item) => item.code === timeslot.selected)[0]
        const xDate = moment(selectedCalendar).format(dateFormat)
        const xtimeslotID = form.getFieldValue('timeslot')

        if (selectedStudio && xDate && xDuration && xtimeslotID) {
            const xID = xDate + '-' + selectedStudio.id + '-' + xDuration.id + xtimeslotID
            const paramsCart = {
                id: xID,
                studio: selectedStudio,
                date: xDate,
                duration: xDuration,
                time: xTimesSelected.code,
                timesSelected: xTimesSelected,
            }
            const paramsTotalPrice = {
                id: xID,
                date: xDate,
                duration: xDuration.id,
                room_id: selectedStudio.id,
                time: xTimesSelected.code
            }

            const index = tempBookingSelected.findIndex(object => object.id === paramsCart.id);
            if (index === -1) {
                tempBookingSelected.push(paramsCart);
                tempTotalPrice.push(paramsTotalPrice)
            } else {
                notification.error({ message: 'The product has been selected! Please choose other ' })
            }

            setListBookingSelected(tempBookingSelected)
            setListBookingSelectedForTotalPrice(tempTotalPrice)
        }
    }

    /*select : onchange studio*/
    const handleChangeStudio = (e) => {
        const x = listStudio.filter((item) => item.id == e)
        setSelectedStudio(x[0])
        setSelectedCalendar(moment())
    }

    /*select : onchange duration*/
    const handleChangeDuration = (e) => {
        setDuration({
            ...duration,
            selected: e
        })
    }

    /*select : onchange timeslot*/
    const handleSelectTimeSlots = (value) => {
        setTimeslot({
            ...timeslot,
            selected: value,
        })
    }

    /*delete booking*/
    const handleDeleteABooking = (id) => {
        const tempBookingSelected = listBookingSelected.filter((item) => item.id !== id)
        const tempTotalPrice = listBookingSelectedForTotalPrice.filter((item) => item.id !== id)
        setListBookingSelected(tempBookingSelected)
        setListBookingSelectedForTotalPrice(tempTotalPrice)

        CheckCoupon()
        setCouponCode(null)
        setCouponCodeStatus({ status: false, errText: null })
    }

    /*change date on calendar*/
    const handleChangeDateCalendar = (e) => {
        if (e) {
            setSelectedCalendar(e)
            form.setFieldsValue({ 'timeslot': null })
            if (selectedStudio) {
                // CallApiListTimeslotByDateAndRoom(moment(e).format('YYYY-MM-DD'), selectedStudio.id)
            } else {
                notification.info({
                    message: `Error`,
                    description: 'Please choose Studio',
                })
            }
        }
    }

    /*link to payment and open new tab*/
    const GotoPayment = () => {
        if (linkPayment) {
            window.open(linkPayment);
        }
    }

    const CheckCoupon = () => {
        /*
            -1 la ko co
            if has -> position
        */
        // if there is at least 1 order < 6 ==> show error
        let checkValueUnder6 = listBookingSelected.findIndex(function (element) {
            let time = element.duration.time.split(' hours')[0]
            return parseInt(time) < 6;
        });

        if (checkValueUnder6 != -1 && couponCode) { //co trong mang
            setCouponCodeStatus({ status: false, errText: 'Minimum 6-hour booking applies.' })
        }
        else if (couponCode === '' || couponCode === null) {
            return;
        }
        else {
            dispatch(CheckPromotionBooking({ promo_code: couponCode }))
        }
    }

    const OnChangeInputCoupon = (e) => {
        if (e.target.value) {
            setCouponCode(e.target.value)
        } else {
            setCouponCodeStatus({ status: false, errText: null })
            dispatch(GetPriceTotal({ bookings: listBookingSelectedForTotalPrice }))
        }
    }

    const ClearCoupon = () => {
        setCouponCode('')
        setCouponCodeStatus({ status: false, errText: null })
        dispatch(GetPriceTotal({ bookings: listBookingSelectedForTotalPrice }))
    }

    // useEffect(() => {
    //     console.log({ couponCodeStatus });
    // }, [couponCodeStatus])

    return (
        <>
            <MetaTag title="Fiction SG | Booking" />
            <section className='BookStudioPage container'>
                {(isLoading) && <Loading />}
                <div className="grid grid-cols sm:grid-cols-2 mb-[3.375rem]">
                    <div className="mb-[3.125rem] max-w-[100%] lg:max-w-[90%]">
                        <h1 className='child-heading text-[2.5rem] mb-[1.1rem]'>BOOK A STUDIO</h1>
                        <div className="text-[1.375rem] leading-7">
                            <p className="mb-3">Before finalising your reservation, check out our <Link href='equipment/'><a target="_blank" className="font-RanuaTrialsBold underline">Equipment</a></Link> here for any additional tools you might need.</p>
                            <p className="mb-3">A minimum booking of 6 hours is required, which can be enjoyed with complimentary use of basic production equipment.</p>
                            <p className="mb-3">The allocated booking time is inclusive of set-up, test shoot, makeup and post-shoot clean up.</p>
                            <p className="mb-3">We value your time, your stories and your patronage, and we hope we can expect the same courtesy.</p>
                            <p className="mb-3">At the end of your session, kindly leave the studio in the same condition you found it.</p>
                            <p className="mb-3">Extension of booking session is subjected to availability.</p>
                            <p className="mb-3">As of now, our system does not allow tentative bookings or cancellations.</p>
                            <p className="mb-3">Please read our <Link href='/terms'><a target="_blank" className="font-RanuaTrialsBold underline">Terms and Conditions</a></Link> carefully for more information.</p>
                            <PriceCpn />
                            {/* <table className='mb-2'>
                            <tbody>
                                <tr>
                                    <td width='110px'>Rates </td>
                                    <td>: Weekday - $150 / hour</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>: Weekday - $200 / hour for extension</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>: Weekend - $180 / hour</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>: Weekend - $250 / hour</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>: 2x Hourly Rate (10pm-8am)</td>
                                </tr>
                            </tbody>
                        </table> */}
                        </div>
                    </div>
                    <div>
                        <Form.Provider
                            onFormFinish={(name, { values, forms }) => {
                                if (name === 'formBooking') {
                                    const listBooking = [];
                                    for (let i = 0; i < listBookingSelected.length; i++) {
                                        const element = listBookingSelected[i];
                                        listBooking.push({
                                            id: element.id,
                                            date: element.date,
                                            room_id: element.studio.id,
                                            duration: duration.selected,
                                            time: element.time
                                        })
                                    }

                                    const paramsUseInfo = {
                                        email: forms.formBooking.getFieldsValue().email,
                                        name: forms.formBooking.getFieldsValue().name,
                                        phone: forms.formBooking.getFieldsValue().phone
                                    }
                                    const paramsListBooking = {
                                        bookings: listBooking
                                    }

                                    const paramsAll = {
                                        ...paramsListBooking,
                                        ...paramsUseInfo,
                                        promo_code: couponCode
                                    }

                                    setIsLoading(false)

                                    // console.log({ paramsAll });
                                    dispatch(PostBooking(paramsAll))

                                    // console.log({paramsListBooking});
                                    // dispatch(CheckPostBooking(paramsListBooking))
                                }
                            }}
                        >
                            {/* form 1  */}
                            <Form
                                name="formSelect"
                                form={form}
                                layout="vertical"
                                className="form-booking mx-auto max-w-[280px] md:max-w-[350px] flex flex-col justify-center"
                            >
                                <Form.Item name='studio' rules={[{ required: true, message: 'Please choose Studio!' }]} className='mb-2 typeAndDate' label="Studio Type">
                                    <Select
                                        placeholder="Select Studio"
                                        popupClassName="select-on-bookingpage"
                                        onChange={handleChangeStudio}
                                        value={selectedStudio}
                                    >
                                        {listStudio && listStudio.length > 0 && listStudio.map((item, index) => {
                                            return (
                                                item.is_special_rate_room != 1 && <Option key={index} value={item.id}>{item.name}</Option>
                                            )
                                        })}
                                    </Select>
                                </Form.Item>
                                <Form.Item name='duration' rules={[{ required: true, message: 'Please choose Duration!' }]} className='mb-2 typeAndDate' label="Duration">
                                    <Select
                                        popupClassName='select-on-bookingpage'
                                        placeholder="Select Duration"
                                        onChange={handleChangeDuration}
                                        value={duration.selected}
                                        listItemHeight={10} listHeight={250}
                                    >
                                        {duration.list && duration.list.length > 0 && duration.list.map((item, index) => {
                                            return (<Option key={index} value={item.id}>{item.time}</Option>)
                                        })}
                                    </Select>
                                </Form.Item>
                                <div className="text-[1.375rem] font-RanuaTrialsMedium underline mb-[1.7rem]" title="Studio Type">Pick a date</div>
                                <Form.Item rules={[{ required: true, message: 'Please choose month!' }]} className='mb-2 calendar'>
                                    <CalendarRef ref={refCalendar} />
                                </Form.Item>
                                <Form.Item rules={[{ required: true, message: 'Please choose time slot!' }]} name="timeslot" className='mb-6 calendar'>
                                    <Select
                                        popupClassName="select-on-bookingpage"
                                        placeholder="Select timeslot"
                                        className="timeslot"
                                        onChange={(e) => handleSelectTimeSlots(e)}
                                        value={timeslot.selected}
                                        listItemHeight={10} listHeight={250}
                                    >
                                        {timeslot.list && timeslot.list.length > 0 && timeslot.list.map((item, index) => {
                                            return (
                                                <Option key={index} value={item.code} disabled={!item.can_book}>
                                                    {item.name}
                                                </Option>)
                                        })}
                                    </Select>
                                </Form.Item>

                                {/* submit button  */}
                                <Form.Item>
                                    <Button type="primary"
                                        onClick={handleAddToCart}
                                        className="text-white border bg-green-dark border-solid text-[1.25rem] rounded-[3rem] w-[10rem] h-[3rem] hover:shadow-none hover:underline hover:bg-green-dark">
                                        Add To Cart
                                    </Button>
                                </Form.Item>
                            </Form>

                            <Form
                                name="formBooking"
                                layout="vertical"
                                className="form-booking mx-auto max-w-[280px] md:max-w-[350px] flex flex-col justify-center"
                                initialValues={userInfo}
                            >


                                {/* form 2 */}
                                <div className={`cart-summary w-full mx-auto ${listBookingSelected.length > 0 ? 'border-t-2' : ''} `}>
                                    {
                                        listBookingSelected && listBookingSelected.length > 0 &&
                                        <div className="w-full my-3 max-h-[25.4rem] overflow-y-auto">
                                            {listBookingSelected.map((item, index) => {
                                                return (
                                                    <div key={index} className="mb-2">
                                                        <div className={`${item.invalidBooking ? 'bg-[darkgray]' : ''} relative flex shadow  bg-[#ddd] rounded-[0.3rem] items-center py-2 leading-normal`}>
                                                            <div className="w-[2rem] text-center">{index + 1}</div>
                                                            <div className="flex-1">
                                                                <b>{item.studio?.name}</b>
                                                                <br /> {moment(item.date).format('LL')}
                                                                <br /> {item.duration?.time}
                                                                <br /> {item.timesSelected?.name}
                                                            </div>
                                                            <div className="absolute top-0 right-0">
                                                                <CloseOutlined className="cursor-pointer cart-del-icon p-1 bg-green-dark text-[#fff] rounded text-[1.2rem]" onClick={(e) => handleDeleteABooking(item.id)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    }


                                    {
                                        listBookingSelected && listBookingSelected.length > 0 &&
                                        <div className="mb-5">
                                            <div className="coupon-group flex items-start mb-[30px]">
                                                <div className="">
                                                    <div className="flex relative">
                                                        <Input value={couponCode} onChange={(e) => OnChangeInputCoupon(e)} type='text' placeholder="Coupon Code" className="pr-[30px]" />
                                                        {
                                                            couponCode &&
                                                            <CloseOutlined className="cursor-pointer cart-del-icon p-1 text-[#000] rounded text-[1.2rem] absolute right-[10px] top-[50%] translate-y-[-50%]" onClick={(e) => ClearCoupon()} />
                                                        }

                                                    </div>
                                                    {
                                                        couponCodeStatus.status === true &&
                                                        <div className={`leading-[1.2] mt-[5px] text-[#28a745]`}>{couponCodeStatus.errText}</div>
                                                    }
                                                    {
                                                        couponCodeStatus.status === false &&
                                                        <div className={`leading-[1.2] mt-[5px] text-[red]`}>{couponCodeStatus.errText}</div>
                                                    }

                                                    {/* <div className={`leading-[1.2] mt-[5px] ${couponCodeStatus.status ? 'text-[#28a745]' : 'text-[red]'}`}>{couponCodeStatus.errText}</div> */}
                                                </div>
                                                <Button onClick={() => CheckCoupon()} className="text-[#fff] hover:text-[#fff] h-auto border bg-green-dark border-solid rounded-[3rem] hover:shadow-none hover:underline hover:bg-green-dark outline-none">
                                                    Apply Coupon
                                                </Button>
                                            </div>


                                            <h1 className="font-bold text-xl">Total: ${priceTotalForAllOrder}</h1>
                                            <small>A refundable security deposit of $300 will be charged upon booking</small>
                                        </div>

                                    }

                                    <div className="mt-2">
                                        {listBookingSelected.length > 0 &&
                                            <>
                                                <Form.Item rules={[{ required: true, message: 'Please input your name!' }]} name="name" className='mb-2 nameAndEmail'>
                                                    <Input placeholder="Full Name" className="" />
                                                </Form.Item>
                                                <Form.Item rules={[{ required: true, message: 'Please input your email!' }, { type: 'email' }]} name="email" className='mb-2 nameAndEmail'>
                                                    <Input placeholder="Email" className="" />
                                                </Form.Item>
                                                <Form.Item rules={[{ required: true, message: 'Please input your phone!' }]} name="phone" className='mb-2 nameAndEmail'>
                                                    <Input type='number' placeholder="Phone Number" className="" />
                                                </Form.Item>


                                                <Button htmlType="submit" type="primary"
                                                    className="text-white border bg-green-dark border-solid 
                                            text-[1.25rem] rounded-[3rem] w-[10rem] h-[3rem] mt-5
                                            hover:shadow-none hover:underline hover:bg-green-dark">
                                                    Payment
                                                </Button>
                                            </>
                                        }
                                    </div>

                                </div>
                            </Form>
                        </Form.Provider>
                    </div>

                    {/* Payment Success  */}
                    <Modal
                        footer={null}
                        open={isModalVisible}
                        className="booking-modal-success text-center"
                    >
                        {PaymentStatus.status &&
                            <CloseCircleOutlined onClick={() => setIsModalVisible(false)} className="text-[2rem] cursor-pointer bg-fic-white rounded-[50%] absolute -top-[13px] -right-[15px]" />
                        }
                        <div className="p-5">
                            {
                                PaymentStatus.status ?
                                    <div className="order-completed">
                                        <CheckCircleOutlined className="text-[3rem] text-[green]" />
                                        <h1 className="text-[1.5rem] mt-2">Your booking is completed.</h1>
                                    </div>
                                    : <div className="order-created">
                                        <h1 className="text-[1.5rem]">Your booking is created.</h1>
                                        <p>Please click the button below to finish your booking.</p>
                                        <div className="text-center p-5 pt-0 pb-7">
                                            <a onClick={() => { GotoPayment() }} className="text-[#fff] border bg-green-dark border-solid inline-block
                                    text-[1.25rem] rounded-[3rem] mx-auto mt-5 px-10 py-2
                                    hover:shadow-none hover:underline hover:bg-green-dark 
                                    hover:text-[#fff]">
                                                Payment
                                            </a>
                                        </div>
                                    </div>
                            }
                        </div>
                    </Modal>
                </div>
            </section >
        </>
    )
}

export default BookStudio

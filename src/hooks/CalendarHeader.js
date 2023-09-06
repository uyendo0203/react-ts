import { Select } from "antd";
import moment from "moment";


const CalendarHeader = ({ value, type, onChange, onTypeChange }) => {

    const start = 0;
    const end = 12;
    const monthOptions = [];
    let thisMonth = moment().month()

    const current = value.clone();
    const localeData = value.localeData();
    const months = [];

    for (let i = 0; i < 12; i++) {
        current.month(i);
        months.push(localeData.months(current));
    }

    for (let index = start; index < end; index++) {

        const monthType = function () {
            let temp = '';
            if (index < thisMonth) {
                temp = 'month-before'
            } else if (index === thisMonth) {
                temp = 'month-current'
            } else {
                temp = 'month-after'
            }
            return temp
        }

        monthOptions.push(
            <Select.Option className={`month-item ${monthType()}`} key={`${index}`}>
                {months[index]}
            </Select.Option>
        );
    }
    const month = value.month();

    return (
        <Select
            dropdownMatchSelectWidth={false}
            value={String(month)}
            className='select-pick-a-date pointer-events-none'
            popupClassName='select-on-bookingpage'
            listItemHeight={10} listHeight={250}
            onChange={selectedMonth => {
                const newValue = value.clone();
                newValue.month(parseInt(selectedMonth, 10));
                onChange(newValue);
            }}
        >
            {monthOptions}
        </Select>
    );
}

export default CalendarHeader
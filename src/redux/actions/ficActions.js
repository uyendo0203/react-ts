
import api from 'src/api/axiosServices';
import * as actionTypes from '../types'
import axios from 'axios';

import { durationJson, studioJson, timeslotJson } from 'data';

export const ScrollToSec2 = params => async dispatch => {
  dispatch({ type: actionTypes.SCROLL_TO_SEC_2, response: params });
}
export const ScrollToIDHome = params => async dispatch => {
  dispatch({ type: actionTypes.SCROLL_TO_ID, response: params });
}
export const ClearData = params => async dispatch => {
  dispatch({ type: actionTypes.CLEAR_DATA, response: params });
}
export const LoadingPage = params => async dispatch => {
  dispatch({ type: actionTypes.LOADING, response: params });
}
// export const GetListStudio = params => async dispatch => {
//   dispatch({ type: actionTypes.GET_LIST_STUDIO_SUCCESS, response: studioJson });
// }
export const GetListStudio = params => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_LIST_STUDIO_LOADING });
    api.get('/rooms', params)
      .then(
        data => dispatch({ type: actionTypes.GET_LIST_STUDIO_SUCCESS, response: data }),
        error => dispatch({ type: actionTypes.GET_LIST_STUDIO_ERROR, error: error.response })
      )
  } catch (error) {
    dispatch({ type: actionTypes.GET_LIST_STUDIO_ERROR, error: error })
  }
}
export const GetListDuration = params => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_LIST_DURATION_LOADING });
    api.get('/meta-data', params)
      .then(
        data => dispatch({ type: actionTypes.GET_LIST_DURATION_SUCCESS, response: data }),
        error => dispatch({ type: actionTypes.GET_LIST_DURATION_ERROR, error: error.response })
      )
  } catch (error) {
    dispatch({ type: actionTypes.GET_LIST_DURATION_ERROR, error: error })
  }
}
export const GetListTimeSlot = params => async dispatch => {
  dispatch({ type: actionTypes.GET_LIST_TIMESLOT_BYPARAMS_SUCCESS, response: timeslotJson });
}

// export const GetListTimeslotByDateAndRoom = params => async dispatch => {
//   try {
//     dispatch({ type: actionTypes.GET_LIST_TIMESLOT_BYPARAMS_LOADING });
//     api.get('/time-slots/' + params.date + '/' + params.room)
//       .then(
//         data => dispatch({ type: actionTypes.GET_LIST_TIMESLOT_BYPARAMS_SUCCESS, response: data }),
//         error => dispatch({ type: actionTypes.GET_LIST_TIMESLOT_BYPARAMS_ERROR, error: error })
//       )
//   } catch (error) {
//     console.log({error});
//     dispatch({ type: actionTypes.GET_LIST_TIMESLOT_BYPARAMS_ERROR, error: error })
//   }
// }

export const GetCalendar = params => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_CALENDAR_LOADING });
    api.post('/calendar-booking', params)
      .then(
        data => dispatch({ type: actionTypes.GET_CALENDAR_SUCCESS, response: data }),
        error => dispatch({ type: actionTypes.GET_CALENDAR_ERROR, error: error })
      )
  } catch (error) {
    dispatch({ type: actionTypes.GET_CALENDAR_ERROR, error: error })
  }
}

export const GetListStartTime = params => async dispatch => {
  // try {
  //   dispatch({ type: actionTypes.GET_LIST_STARTTIME_LOADING });
  //   api.post('/check-start-time', params)
  //     .then(
  //       data => dispatch({ type: actionTypes.GET_LIST_STARTTIME_SUCCESS, response: data }),
  //       error => dispatch({ type: actionTypes.GET_LIST_STARTTIME_ERROR, error: error })
  //     )
  // } catch (error) {

  //   dispatch({ type: actionTypes.GET_LIST_STARTTIME_ERROR, error: error })
  //   throw error
  // }

  dispatch({ type: actionTypes.GET_LIST_STARTTIME_LOADING });
  // console.log(111, { params });
  try {
    await api.post("/check-start-time", params)
      .then(data => {
        // console.log({ data });
        dispatch({ type: actionTypes.GET_LIST_STARTTIME_SUCCESS, response: data })
      })
  } catch (error) {
    dispatch({ type: actionTypes.GET_LIST_STARTTIME_ERROR, error: error.response })

    if (error.response.status === 400) {
      console.log(`HTTP 400 error occured`);
    }
    if (error.response.data) {
      // console.log(error);
    }
  }
}

export const GetListBooking = params => async dispatch => {
  // ActionCommon(dispatch(), params, actionTypes.GET_LIST_BOOKING, '/bookings', api.get)
  try {
    dispatch({ type: actionTypes.GET_LIST_BOOKING_LOADING });
    api.get('/bookings', params)
      .then(
        data => dispatch({ type: actionTypes.GET_LIST_BOOKING_SUCCESS, response: data }),
        error => dispatch({ type: actionTypes.GET_LIST_BOOKING_ERROR, error: error })
      )
  } catch (error) {
    dispatch({ type: actionTypes.GET_LIST_BOOKING_ERROR, error: error })
  }
}

export const PostBooking = params => async dispatch => {
  try {
    dispatch({ type: actionTypes.POST_BOOKING_LOADING });
    api.post('/bookings', params)
      .then(
        data => dispatch({ type: actionTypes.POST_BOOKING_SUCCESS, response: data }),
        error => { dispatch({ type: actionTypes.POST_BOOKING_ERROR, error: error }) }
      )
  } catch (error) {
    dispatch({ type: actionTypes.POST_BOOKING_ERROR, error: error })
  }
}

export const CheckPostBooking = params => async dispatch => {
  try {
    dispatch({ type: actionTypes.POST_CHECK_BOOKING_LOADING });
    api.post('/bookings/check', params)
      .then(
        data => dispatch({ type: actionTypes.POST_CHECK_BOOKING_SUCCESS, response: data }),
        error => dispatch({ type: actionTypes.POST_CHECK_BOOKING_ERROR, error: error })
      )
  } catch (error) {
    dispatch({ type: actionTypes.POST_CHECK_BOOKING_ERROR, error: error })
  }
}

export const CheckPaymentStatus = params => async dispatch => {
  try {
    dispatch({ type: actionTypes.POST_CHECK_PAYMENT_STATUS_LOADING });
    api.post('/order-status', params)
      .then(
        data => dispatch({ type: actionTypes.POST_CHECK_PAYMENT_STATUS_SUCCESS, response: data }),
        error => dispatch({ type: actionTypes.POST_CHECK_PAYMENT_STATUS_ERROR, error: error })
      )
  } catch (error) {
    dispatch({ type: actionTypes.POST_CHECK_PAYMENT_STATUS_ERROR, error: error })
  }
}

//check booking and get total price
export const GetPriceTotal = params => async dispatch => {
  dispatch({ type: actionTypes.GET_TOTAL_PRICE_LOADING });
  try {
    await api.post("/check-booking", params)
      .then(data => dispatch({ type: actionTypes.GET_TOTAL_PRICE_SUCCESS, response: data }))
  } catch (error) {
    dispatch({ type: actionTypes.GET_TOTAL_PRICE_ERROR, error: error.response })

    if (error.response.status === 400) {
      console.log(`HTTP 400 error occured`);
    }
    if (error.response.data) {
      // console.log(error);
    }
  }
}

// check code valid  
export const CheckPromotionBooking = params => async dispatch => {
  dispatch({ type: actionTypes.POST_CHECK_PROMOTION_BOOKING_LOADING });
  // console.log(111, { params });
  try {
    await api.post("/check-promo-code", params)
      .then(data => {
        // console.log({ data });
        dispatch({ type: actionTypes.POST_CHECK_PROMOTION_BOOKING_SUCCESS, response: data })
      })
  } catch (error) {
    dispatch({ type: actionTypes.POST_CHECK_PROMOTION_BOOKING_ERROR, error: error.response })

    if (error.response.status === 400) {
      console.log(`HTTP 400 error occured`);
    }
    if (error.response.data) {
      // console.log(error);
    }
  }
};

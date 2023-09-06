import * as actionTypes from '../types'

const initialState = {
  loading: false,
  error: '',
  DataCalendar: null,
  DataBooking: null,
  DataCheckBooking: null,
  DataScrollToSec: null,
  DataListStudio: null,
  DataListDuration: null,
  DataListTimeSlot: null,
  DataListTimeSlotByDateRoom: null,
  DataListStartTime: null,
}

const FicReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SCROLL_TO_SEC_2:
      return {
        ...state,
        ScrollToSec2Res: action.response,
      }
    case actionTypes.SCROLL_TO_ID:
      return {
        ...state,
        DataScrollToSec: action.response,
      }


    /*list studio*/
    case actionTypes.GET_LIST_STUDIO_LOADING: {
      return {
        ...state,
        loading: true,
        error: ''
      };
    }
    case actionTypes.GET_LIST_STUDIO_SUCCESS: {
      return {
        ...state,
        loading: false,
        DataListStudio: action.response.data,
      }
    }
    case actionTypes.GET_LIST_STUDIO_ERROR: {
      return {
        ...state,
        loading: false,
        DataListStudio: action.error
      };
    }

    /*list duration*/
    case actionTypes.GET_LIST_DURATION_LOADING: {
      return {
        ...state,
        loading: true,
        error: '',
        DataListDuration: null
      };
    }
    case actionTypes.GET_LIST_DURATION_SUCCESS: {
      return {
        ...state,
        loading: false,
        DataListDuration: action.response.data,
      }
    }
    case actionTypes.GET_LIST_DURATION_ERROR: {
      return {
        ...state,
        loading: false,
        DataListDuration: action.error
      };
    }

    /*list booking*/
    case actionTypes.GET_LIST_BOOKING_LOADING: {
      return {
        ...state,
        loading: true,
        error: ''
      };
    }
    case actionTypes.GET_LIST_BOOKING_SUCCESS: {
      return {
        ...state,
        loading: false,
        DataListBooking: action.response.data,
      }
    }
    case actionTypes.GET_LIST_BOOKING_ERROR: {
      return {
        ...state,
        loading: false,
        DataListBooking: action.error
      };
    }

    // list timeslot by params
    // case actionTypes.GET_LIST_TIMESLOT_BYPARAMS_LOADING: {
    //   return {
    //     ...state,
    //     loading: true,
    //     error: ''
    //   };
    // }
    // case actionTypes.GET_LIST_TIMESLOT_BYPARAMS_SUCCESS: {
    //   return {
    //     ...state,
    //     loading: false,
    //     DataListTimeSlotByDateRoom: action.response.data
    //   }
    // }
    // case actionTypes.GET_LIST_TIMESLOT_BYPARAMS_ERROR: {
    //   return {
    //     ...state,
    //     loading: false,
    //     DataListTimeSlotByDateRoom: action.error.response.data
    //   };
    // }

    /*get calendar */
    case actionTypes.GET_CALENDAR_LOADING: {
      return {
        ...state,
        loading: true,
        error: ''
      };
    }
    case actionTypes.GET_CALENDAR_SUCCESS: {
      return {
        ...state,
        loading: false,
        DataCalendar: action.response.data
      }
    }
    case actionTypes.GET_CALENDAR_ERROR: {
      return {
        ...state,
        loading: false,
        DataCalendar: action.error.response
      };
    }

    /*get list start time*/
    case actionTypes.GET_LIST_STARTTIME_LOADING: {
      return {
        ...state,
        loading: true,
        error: ''
      };
    }
    case actionTypes.GET_LIST_STARTTIME_SUCCESS: {
      return {
        ...state,
        loading: false,
        DataListStartTime: action.response
      }
    }
    case actionTypes.GET_LIST_STARTTIME_ERROR: {
      return {
        ...state,
        loading: false,
        DataListStartTime: action.error,
      };
    }

    /*list timeslot by params*/
    case actionTypes.GET_LIST_TIMESLOT_BYPARAMS_LOADING: {
      return {
        ...state,
        loading: true,
        error: ''
      };
    }
    case actionTypes.GET_LIST_TIMESLOT_BYPARAMS_SUCCESS: {
      return {
        ...state,
        loading: false,
        DataListTimeSlot: action.response
      }
    }
    case actionTypes.GET_LIST_TIMESLOT_BYPARAMS_ERROR: {
      return {
        ...state,
        loading: false,
        DataListTimeSlot: action.error.response
      };
    }

    /* post booking*/
    case actionTypes.POST_BOOKING_LOADING: {
      return {
        ...state,
        loading: true,
        error: ''
      };
    }
    case actionTypes.POST_BOOKING_SUCCESS: {
      return {
        ...state,
        loading: false,
        DataBooking: action.response.data,
      }
    }
    case actionTypes.POST_BOOKING_ERROR: {
      return {
        ...state,
        loading: false,
        DataBooking: action.error.response.data,
      };
    }

    /*check status payment*/
    case actionTypes.POST_CHECK_PAYMENT_STATUS_LOADING: {
      return {
        ...state,
        loading: false,
        error: ''
      };
    }
    case actionTypes.POST_CHECK_PAYMENT_STATUS_SUCCESS: {
      return {
        ...state,
        loading: false,
        DataCheckPaymentStatus: action.response.data,
      }
    }
    case actionTypes.POST_CHECK_PAYMENT_STATUS_ERROR: {
      return {
        ...state,
        loading: false,
        DataCheckPaymentStatus: action.error.response.data,
      };
    }

    /*check post booking*/
    case actionTypes.POST_CHECK_BOOKING_LOADING: {
      return {
        ...state,
        loading: true,
        error: ''
      };
    }
    case actionTypes.POST_CHECK_BOOKING_SUCCESS: {
      return {
        ...state,
        loading: false,
        DataCheckBooking: action.response,
      }
    }
    case actionTypes.POST_CHECK_BOOKING_ERROR: {
      return {
        ...state,
        loading: false,
        DataCheckBooking: action.error,
      };
    }

    /*get total price*/
    case actionTypes.GET_TOTAL_PRICE_LOADING: {
      return {
        ...state,
        loading: true,
        error: ''
      };
    }
    case actionTypes.GET_TOTAL_PRICE_SUCCESS: {
      return {
        ...state,
        loading: false,
        DataTotalPrice: action.response.data,
      }
    }
    case actionTypes.GET_TOTAL_PRICE_ERROR: {
      return {
        ...state,
        loading: false,
        DataTotalPrice: action.error,
      };
    }

    /*check coupon valid*/
    case actionTypes.POST_CHECK_PROMOTION_BOOKING_LOADING: {
      return {
        ...state,
        loading: true,
        error: ''
      };
    }
    case actionTypes.POST_CHECK_PROMOTION_BOOKING_SUCCESS: {
      return {
        ...state,
        loading: false,
        DataCheckPromotionCode: action.response,
      }
    }
    case actionTypes.POST_CHECK_PROMOTION_BOOKING_ERROR: {
      return {
        ...state,
        loading: false,
        DataCheckPromotionCode: action.error,
      };
    }

    /*loading*/
    case actionTypes.LOADING: {
      return {
        ...state,
        isLoading: action.response,
      };
    }
    /*clear data*/
    case actionTypes.CLEAR_DATA: {
      return {
        ...state,
        DataBooking: null,
        DataCalendar: null,
        DataCheckBooking: null,
        DataScrollToSec: null,
        DataListStudio: null,
        DataListTimeSlotByDateRoom: null,
        DataListTimeSlotByDateRoom: null,
        DataCheckPromotionBooking: null,
        DataCheckPromotionCode: null,
        DataTotalPrice: null,
      };
    }

    default:
      return { ...state }
  }
}
export default FicReducers

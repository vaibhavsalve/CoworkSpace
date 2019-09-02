import {MEMBERSHIP_DEDAILS} from '../actions/MembershipActions'
import {ORGANIZATION_DEDAILS} from '../actions/MembershipActions';
import {ADMIN_DEDAILS} from '../actions/MembershipActions'

const initialState = {
  membershipDetails:'',
  organizationDetails:'',
  adminDetails:''
}

const membershipReducer = (state = initialState, action) => {
  switch (action.type) {
    case MEMBERSHIP_DEDAILS: {
      return {
        ...state,
      
        membershipDetails:action.payload
      }
    }
    case ORGANIZATION_DEDAILS: {
      return {
        ...state,
      
        organizationDetails:action.payload
      }
    }
    case ADMIN_DEDAILS: {
      return {
        ...state,
      
        adminDetails:action.payload
      }
    }
    default:
      return state;
  }
}


export default membershipReducer
export const MEMBERSHIP_DEDAILS='MEMBERSHIP_DEDAILS'
export const ORGANIZATION_DEDAILS='ORGANIZATION_DEDAILS'
export const ADMIN_DEDAILS='ADMIN_DEDAILS'
const HEROKU_API_HOST = 'https://coworkspace.herokuapp.com'
const auth_token = `CM+z+hIBBvAIYzyycJziHIpmETKvezOeSZeYHy03KEOfckrxUm7YXojTogsgVbDB7+rBpiDWKoQVt318oTiAIQ==`;
const Email = `vaibhavsalve27@gmail.com`;

export const membership_details = (Membershipde) => {
  return {
    type: MEMBERSHIP_DEDAILS,
    MembershipDetails:Membershipde
  }
}

export const organization_details = (Membershipde) => {
  return {
    type: ORGANIZATION_DEDAILS,
    MembershipDetails:Membershipde
  }
}
export const admin_details = (Membershipde) => {
  return {
    type: ADMIN_DEDAILS,
    MembershipDetails:Membershipde
  }
}


export const membership_api = (bookingdetails) => async dispatch => {
  fetch(`${HEROKU_API_HOST}/api/v1/memberships`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token token=${auth_token},email=${Email}`
    },
    body: JSON.stringify({
        "membership": {
        "type": "Group" , 
        "start_date": "22-08-2019", 
        "desk_id": 1,
        "membership_plan_id": 1,
              "organization_attributes": { 
              "name": "Company A",
              "contact_no": "983573985",
              "address": "hwe werkwjr wewkerwe",
              "website": "www.companya.com" },
              "primary_admin_attributes": { 
              "email": "123@123.com",
              "name": "fsdfs fsd",
              "mobile": "534759345" }
        },
        "customer_slug": "kickstart"
        
    })
  })
    .catch((error) => {
      console.error(error);
    });
}
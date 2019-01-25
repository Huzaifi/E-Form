import axios from "axios";
// TODO: Set to localhost when production
const API_URL = "http://103.217.173.123:5020/api/v1";

export default {
  inqNik(nik, id) {
    return axios.get(API_URL + "/inq_ektp?nik=" + nik + "&account_type=" + id);
  },
  inqLoan(no_loan) {
    return axios.get(API_URL + "/no_loan/" + no_loan);
  },
  getParameter(id) {
    return axios.get(API_URL + "/parameters/" + id);
  },
  getParametersByGroup(groupName) {
    return axios.get(API_URL + "/parameters/group/" + groupName);
  },
  getParametersBulk(arrayGroupName) {
    return axios.get(API_URL + "/parameters/group_bulk", {
      params: {
        group_name: arrayGroupName.join(",")
      }
    });
  },
  getSavingTypes() {
    return axios.get(API_URL + "/saving_types");
  },
  getAvailableSavingTypes(nik) {
    return axios.get(API_URL + "/saving_types/available/" + nik);
  },
  getTicketNumber() {
    return axios.get(API_URL + "/accounts/ticket_number");
  }
};

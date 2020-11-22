const API_URL = "https://reqres.in/api/products/3";
let errorMessage = {
  responseCode: null,
  responseData: {},
};

const genderPreferenceUpdate = (gerderPreferences) =>
  fetch(`${API_URL}`, {
    method: "PUT",
    body: JSON.stringify(gerderPreferences),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      errorMessage.responseCode = response.status;
      errorMessage.responseData = response;

      return errorMessage;
    }
  });

const objectToExport = { genderPreferenceUpdate };
export default objectToExport;

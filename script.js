const suggestedActivity = document.querySelector("#suggested-activity");
const activity = suggestedActivity.querySelector("#activity");

const BASE_URI = "https://bored-api.appbrewery.com/";
const END_POINTS = {
    DEFAULT: "random",
    EDUCATION: "filter?type=education",
    RECREATIONAL: "filter?type=recreational",
    SOCIAL: "filter?type=social",
    CHARITY: "filter?type=charity",
    COOKING: "filter?type=cooking",
    RELAXATION: "filter?type=relaxation",
    BUSYWORK: "filter?type=busywork"
};

const FETCH_ERROR = "Error fetching activity, please try again later.";

// Performs an HTTP GET request from the Bored API and returns a JSON object or null
async function fetchActivity() {
    const response = await fetch(BASE_URI + END_POINTS.DEFAULT, { mode: "no-cors" });
    if (!response.ok) {
        return null;
    }
    return response.json();
}

// Updates the suggested activity after peforming a GET request
async function updateActivity() {
    const response = await fetchActivity();
    if (response == null) {
        activity.innerHTML = FETCH_ERROR;
    } else {
        activity.innerHTML = response.activity;
    }  
}
    


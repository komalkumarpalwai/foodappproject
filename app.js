let locationButton = document.getElementById("locBTN");
let locationDiv = document.getElementById("address");
locationButton.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, showError);
  } else {
    locationDiv.innerText = "Geolocation is not supported by this browser.";
  }
});
function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      locationDiv.innerText = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      locationDiv.innerText = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      locationDiv.innerText = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      locationDiv.innerText = "An unknown error occurred.";
      break;
  }
}
async function showLocation(position) {
  try {
    const { latitude, longitude } = position.coords;
    let formattedAddress = await getAddressFromCoordinates(latitude, longitude);
    locationDiv.innerText = formattedAddress;
    localStorage.setItem("userLocation", JSON.stringify({ latitude, longitude, address: formattedAddress }));
  } catch (error) {
    console.error("Error fetching location:", error);
    locationDiv.innerText = "Error fetching location.";
  }
}
async function getAddressFromCoordinates(latitude, longitude) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    );
    const data = await response.json();

    const addressComponents = data.address;
    const city = addressComponents.city;
    const village = addressComponents.village;
    const postcode = addressComponents.postcode;
    const state = addressComponents.state;

    let formattedAddress = "";
    if (village) {
      formattedAddress += village + ", ";
    }
    if (city) {
      formattedAddress += city + ", ";
    }
    if (postcode) {
      formattedAddress += "PIN: " + postcode + ", ";
    }
    if (state) {
      formattedAddress += state;
    }
    return formattedAddress;
  } catch (error) {
    throw new Error("Error fetching address from coordinates");
  }
}
window.onload = function () {
  const storedLocation = localStorage.getItem("userLocation");
  if (storedLocation) {
    const { latitude, longitude, address } = JSON.parse(storedLocation);
    locationDiv.innerText = address;
  }
};
  document.addEventListener("DOMContentLoaded", function() {
    const scrollTopButton = document.getElementById("scrollbtn");
  
    scrollTopButton.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth" 
      });
    });
  });
let messageOffline = () => {
  let dish=document.getElementsByClassName("dishTypes")
  let category=document.getElementById("category")
  category.style.display="none"
let offlineContainer = document.getElementById("offlinecontainer");
let messageElement = document.createElement("div");
messageElement.id = "message";
messageElement.textContent = "Your internet connection was lost.";
let dogImageContainer = document.createElement("div");
dogImageContainer.id = "dogImageContainer";
let dogImage = document.createElement("img");
    dogImage.src = "images/dog.webp"; 
    dogImage.alt = "Dog";
    dogImageContainer.appendChild(dogImage);
offlineContainer.appendChild(messageElement);
offlineContainer.appendChild(dogImageContainer);
}
if (window.navigator.onLine) {
    messageOnline();  
} else {
    messageOffline();
}

// If javascript is enabled set input field op display none;
const dragDropCheck = document.querySelector('.drop-zone')




// GEO LOCATION
let geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function geoError(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    console.log(err)
    if (err) {
        const locationInput = document.getElementById("location");
        locationInput.placeholder = 'Your location can not be found, please type in manually'

        const locationSpinner = document.querySelector('.locationWrap');
        locationSpinner.classList.remove('loading');
    }

}


if (navigator.geolocation) { // checks if geolocation is available in the browser


    const getLocation = document.getElementById('getLocation')
    if (getLocation) { // checks if element is on current page
        const locationIcon = document.getElementById('location_icon');
        locationIcon.classList.add('active');
        getLocation.addEventListener('click', clickForLocation)
    }
}

// get geo location only when its triggered in click event
function clickForLocation() {
    console.time('Get location');
    console.time('Get coordinates');
    navigator.geolocation.getCurrentPosition(getMyLocation, geoError, geolocationOptions);

    // removes placeholder on loading
    const locationInput = document.getElementById("location");
    locationInput.placeholder = "";

    // adds loading spinner on loading
    const locationSpinner = document.querySelector('.locationWrap');
    locationSpinner.classList.add('loading');
}

// get GEO location
function getMyLocation(position) {
    const coords = position.coords;
    const long = coords.longitude;
    const lat = coords.latitude;

    console.timeEnd('Get coordinates')

    const locationInput = document.getElementById("location")

    // somehwere in kazakstan with no city 
    // const testURL = 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=49.3811&longitude=48.7839&localityLanguage=en'

    const fetchUrl = 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=' + lat + '&longitude=' + long + '&localityLanguage=en'

    getData(fetchUrl)
        .then(data => {
            // console.log(data)
            testData(data, locationInput);
            console.timeEnd('Get location')
        })
}

// RESOURCe https://stackoverflow.com/questions/57130901/getcurrentposition-in-js-does-not-work-on-ios

function testData(data, inputField) {
    if (data.city) {
        // If location is found remove loading spinner
        const locationSpinner = document.querySelector('.locationWrap');
        locationSpinner.classList.remove('loading');

        // add city to input value of location
        inputField.value = data.city
    } else if (data.locality) {
        // If location is found remove loading spinner
        const locationSpinner = document.querySelector('.locationWrap');
        locationSpinner.classList.remove('loading');

        // add locality to input value of location
        inputField.value = data.locality

    } else if (data.principalSubdivision) {
        // If location is found remove loading spinner
        const locationSpinner = document.querySelector('.locationWrap');
        locationSpinner.classList.remove('loading');

        // add principal subdivision to input value of location
        inputField.value = data.principalSubdivision
    } else if (data.countryName) {
        // If location is found remove loading spinner
        const locationSpinner = document.querySelector('.locationWrap');
        locationSpinner.classList.remove('loading');

        // add countryname to input value of location
        inputField.value = data.countryName
    } else {
        // should be error instead of placeholder ofcours.. just testing
        const locationSpinner = document.querySelector('.locationWrap');
        locationSpinner.classList.remove('loading');

        inputField.placeholder = 'Your location can not be found, please type in manually'
    }
}




if (dragDropCheck) {
    uploadImageFailsave()

    function uploadImageFailsave() {
        const inputField = document.querySelector('.drop-zone_input')
        const dropzone = document.querySelector('.drop-zone')
        const inputText = document.querySelector('.drop-zone_text')

        inputField.classList.add('active'); // adds standard input field
        dropzone.classList.add('active'); // adds styling for drag and drop section
        inputText.classList.add('active'); // adds drag and drop text

    }

    // RESOURCE DRAG AND DROP: https://www.youtube.com/watch?v=Wtrin7C4b7w


    document.querySelectorAll('.drop-zone_input').forEach(inputElement => {
        const dropZoneElement = inputElement.closest(".drop-zone");

        // event listener for clicking event opens like you click on original input
        dropZoneElement.addEventListener('click', e => {
            inputElement.click();
        })

        // adds thumbnail also if you upload it by click
        inputElement.addEventListener('change', e => {
            if (inputElement.files.length) { // if there is an image selected
                updateThumbnail(dropZoneElement, inputElement.files[0])
            }
        })

        // when drags an item over box add style
        dropZoneElement.addEventListener('dragover', e => {
            e.preventDefault(); // dont open image in the browser window
            dropZoneElement.classList.add('drop-zone_over');
        })

        // when drag leaves the box, remove the style
        dropZoneElement.addEventListener('dragleave', e => {
            dropZoneElement.classList.remove("drop-zone_over");
        });

        // when drag ends the box, remove the style
        dropZoneElement.addEventListener('dragend', e => {
            dropZoneElement.classList.remove("drop-zone_over");
        });

        dropZoneElement.addEventListener("drop", e => {
            e.preventDefault(); // dont open image in the browser window
            // console.log(e.dataTransfer.files)
            if (e.dataTransfer.files.length) {
                inputElement.files = e.dataTransfer.files; // transfers the file into the input. SO it works on submit
                updateThumbnail(dropZoneElement, e.dataTransfer.files[0])
            }

            dropZoneElement.classList.remove('drop-zone_over');
        })
    });

}

function updateThumbnail(dropZoneElement, file) {
    // console.log(dropZoneElement);
    // console.log(file);
    let thumbnailElement = dropZoneElement.querySelector('.drop-zone_thumb');

    // removing drag and drop info text
    if (dropZoneElement.querySelector('.drop-zone_text')) {
        dropZoneElement.querySelector('.drop-zone_text').remove();
    }


    // zero state - thumbnail element
    if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.classList.add('drop-zone_thumb');
        dropZoneElement.appendChild(thumbnailElement);
    }

    // thumbnail text with file name
    thumbnailElement.dataset.label = file.name;

    // show thumbnial for image file
    if (file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        // this is a async call. SO wait for it to unload then add the image as a background image in css.
        reader.onload = () => {
            thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
        };
    } else {
        thumbnailElement.style.backgroundImage = null; // Maybe place a default image here?
    }


}


async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}




// If checkbox is checked, submit form
const checkBox = document.getElementById('addPhotoBox');
if (checkBox) {
    const submitLabel = document.getElementById('seriePhotoSubmitLabel')
    submitLabel.classList.add('disabled')
    checkBox.addEventListener('click', e => {
        document.addToSerie.submit();
    })
}

// Navigation add red line under location in navigation
const homePage = document.querySelector('.homePage');
const seriePage = document.querySelector('.seriePage');
const uploadPage = document.querySelector('.uploadPage');
const navigation = document.querySelectorAll('nav>ul>li')

selectedPage(homePage, seriePage, uploadPage, navigation)

function selectedPage(home, serie, upload, nav) {
    if (home) {
        nav[0].classList.add('position')
    } else if (serie) {
        nav[1].classList.add('position')
    } else if (upload) {
        nav[2].classList.add('position')
    }
}


// Photo carousel 
if (seriePage) {
    const photoSelection = document.querySelectorAll('.selectWrapper a')

    // if javascript is enabled, add active classes. by default on display none.
    const selectWrapper = document.querySelector('.selectWrapper');
    const scroll = document.querySelector('.scroll-container');
    selectWrapper.classList.add('active');
    scroll.classList.add('active');


    // for each photo, add link ref 
    photoSelection.forEach((selection, index) => {
        selection.setAttribute('href', '#' + photoSelection[index].id)

        // gives first photo in series a red dot
        photoSelection[0].classList.add('selected');

        // Removes all red dots in series and adds it to the clicked photograph
        photoSelection[index].addEventListener('click', e => {
            photoSelection.forEach((selected) => {
                removeClass(selected)
            })

            addSelectedClass(selection);
        })

    })

    function removeClass(target) {
        target.classList.remove('selected');
    }

    function addSelectedClass(target) {
        target.classList.add('selected');
    }

}




const queryString = window.location.search;

if (queryString === '?newimage') {
    const newestImage = document.querySelectorAll('.grid-masonry>li:first-child')
    console.log(newestImage)
    newestImage[0].classList.add('showNewest')
}
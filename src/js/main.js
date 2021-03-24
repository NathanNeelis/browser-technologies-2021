// If javascript is enabled set input field op display none;
const dragDropCheck = document.querySelector('.drop-zone')

if (dragDropCheck) {
    uploadImageFailsave()

    if (navigator.geolocation) {
        const getLocation = document.getElementById('getLocation')
        getLocation.addEventListener('click', clickForLocation)
    }

    // get geo location only when its triggered in click event
    function clickForLocation() {
        navigator.geolocation.getCurrentPosition(getMyLocation)
        const locationInput = document.getElementById("location")
        locationInput.placeholder = "Loading data..."
    }

    // get GEO location
    function getMyLocation(position) {
        let long = position.coords.longitude;
        let lat = position.coords.latitude;

        const locationInput = document.getElementById("location")

        // const testURL = 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=-123&longitude=11&localityLanguage=en'
        const fetchUrl = 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=' + lat + '&longitude=' + long + '&localityLanguage=en'

        getData(fetchUrl)
            .then(data => {
                testData(data, locationInput);
            })
    }


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


function testData(data, inputField) {
    if (data.city) {
        inputField.value = data.city
    } else if (data.city === undefined) {
        // should be error instead of placeholder ofcours.. just testing
        inputField.placeholder = 'Your location can not be found, please try again later'
    }
}
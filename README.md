# Progressive Web Apps @cmda-minor-web · 20-21

### View the app
:earth_americas:  [live website](https://app-photoalbum.herokuapp.com/)


### Description
This app is an online photo album. In the app you can scroll through all the uploaded images. 
You can view all the details by clicking on the image which will send you to the detail page. 
Also in this app you can make a selection of photo's to add to a serie and view this serie as a slideshow or in a carousel. Do you want your images added to this app? Simply upload them! Made a mistake? Go to the detailed page to edit its content.  
  
  -- image  
    


### Table of Contents  
[View the app]()  
[Description]()  
[Getting started]()  
[Core functionalities]()
[Wireflows]()  
[Browser testing list]()  
[Enhancement browser technologies]()  
[Project status]()  
[License]()  
[Resources]()  


### Getting started

#### Cloning the repo
1. Create your git repo  
    ```bash
    mkdir foldername  
    cd "/foldername"  
    git init  
    ```  

2. Clone this repo  
    ```bash
    git clone https://github.com/NathanNeelis/browser-technologies-2021.git
    ```   

3. install packages  
    ```bash
    npm install
    ```  

### Core funcionalities
The core functionalities of this app are:
* Overview page with all the photographs
* Detail page for each photograph with meta info
* Upload a photo to the overview page
* Add photo's to a series
* Overview page with photo's in a serie

### Wireflows
#### Overview / home page
In the userflow the functional/reliable layer   
are the photographs on the page. No matter which circumstances, the user should always be able to see an overview of the photographs.   
  
The usable layer   
will be an enhancement with a grid-layout. This way the screen space is used effectively and layout changes depending on the device used.  
  
As a finishing touch we have the pleasurable layer   
which would be the checkboxes on the photographs to add them to your series without going to the detail page.  

#### Detail page
The functional/reliable layer  
is the photograph with its meta information. This is the most important information on this page. But almost equally as important is the option to add this photo to your series.  
  
The usable layer  
will be styling to make this page visually appealing and you should be able to edit the information on this page.  
  
The finishing touch in the pelasurable layer  
could be that you don't have to submit the option to add it to your series but only clicking on a add button would suffice.  

#### Upload page
The functional/reliable layer  
is uploading a photograph. The form should be working without javascript and with a bad internet connection.   
  
The usable layer  
will be styling the upload form. Also some form validation might come in handy here to give feedback to the user. 
  
The finishing touch in the pelasurable layer  
might be adding a geolocation option and storing unfinished forms in storage for example.
  
![userflow1](https://user-images.githubusercontent.com/55492381/112154022-2be27d80-8be4-11eb-82c6-3fff241fcd83.jpg)  

#### Series page
The functional/reliable layer  
The user should always be able to see the images saved to their series page.  
  
The usable layer  
Adding styling to the page with a grid lay-out for example. This should make it repsonsive for other devices as well.  
  
The finishing touch in the pelasurable layer  
Changing views from slide-show to carousel and updating the order of the saved images by maybe a drag and drop system.  
  
![userflow2](https://user-images.githubusercontent.com/55492381/112154090-38ff6c80-8be4-11eb-976a-09c4409b6235.jpg)


### Browser testing list
* Chrome op MacBook
* Brave op Macbook
* Firefox op android
* Safari op IOS

### Enhancement browser technologies
[Geolocation](https://w3c.github.io/geolocation-api/)  
[drag and drop](https://html.spec.whatwg.org/multipage/dnd.html#dnd)  
[Grid layout](https://drafts.csswg.org/css-grid/) I'm interested in the new masonry technique   




### Testing report
#### Geolocation
<details>
  <summary>Test report Geolocation</summary>

I enhanched my location input with a button that saves your location in your input. I did this by using the geolocation api to fetch the longitude and latitude values of your current location. These values get passed into another fetch for reverse geocoding which transforms the data into a location by for example a city.
Below here is a data object that is fetched from my own current location. The value that should get passed in the location input is the city.

<details>
  <summary>Example Geolocation file</summary>

```json
{
  "latitude": 52.6682014465332,
  "longitude": 4.764900207519531,
  "lookupSource": "coordinates",
  "plusCode": "9F46MQ97+7X",
  "localityLanguageRequested": "en",
  "continent": "Europe",
  "continentCode": "EU",
  "countryName": "Kingdom of the Netherlands",
  "countryCode": "NL",
  "principalSubdivision": "North Holland",
  "principalSubdivisionCode": "NL-NH",
  "city": "Alkmaar",
  "locality": "Alkmaar",
  "postcode": "",
  "localityInfo": {
    "administrative": [
      {
        "order": 3,
        "adminLevel": 2,
        "name": "Kingdom of the Netherlands",
        "description": "sovereign state in Western Europe and the Caribbean",
        "isoName": "Netherlands (the)",
        "isoCode": "NL",
        "wikidataId": "Q29999",
        "geonameId": 2750405
      },
      {
        "order": 4,
        "adminLevel": 3,
        "name": "Netherlands",
        "description": "country mostly in Northern Europe and largest country of the Kingdom of the Netherlands",
        "wikidataId": "Q55"
      },
      {
        "order": 5,
        "adminLevel": 4,
        "name": "North Holland",
        "description": "province of the Netherlands",
        "isoName": "Noord-Holland",
        "isoCode": "NL-NH",
        "wikidataId": "Q701",
        "geonameId": 2749879
      },
      {
        "order": 8,
        "adminLevel": 8,
        "name": "Alkmaar",
        "description": "municipality in the province of North Holland, the Netherlands",
        "wikidataId": "Q972",
        "geonameId": 2759898
      },
      {
        "order": 9,
        "adminLevel": 10,
        "name": "Alkmaar",
        "description": "city in Noord-Holland, the Netherlands",
        "wikidataId": "Q16977290",
        "geonameId": 2759899
      }
    ],
    "informative": [
      {
        "order": 1,
        "name": "Europe",
        "description": "continent on Earth, mainly on the northeastern quadrant, i.e. north-western Eurasia",
        "isoCode": "EU",
        "wikidataId": "Q46",
        "geonameId": 6255148
      },
      {
        "order": 2,
        "name": "North European Plain",
        "description": "geomorphological region in Europe",
        "wikidataId": "Q560549"
      },
      {
        "order": 6,
        "name": "Hollands Noorderkwartier"
      },
      {
        "order": 7,
        "name": "Noord-Holland-Noord",
        "description": "safety region"
      }
    ]
  }
}
```
</details>
  
As I live on the edge of Alkmaar this worked wonderfully in the browser, but when I started testing on my mobile, it wouldnt work. In the image below I am testing it on a Android phone via browserstack. I also tested on a real Android phone, which worked better but I couldnt save it in a gif. What you see happening here is that I am trying to locate myself, but it gets stuck on 'loading data'. This is because when you click the button, it changes to placeholder to loading data, and when it finds your location updates the value of the input with our location. But that wasnt happening.  
  
![Geolocation_LoadingData_Android_Moz](https://user-images.githubusercontent.com/55492381/112483909-c1634600-8d79-11eb-8bf6-61507d03978f.gif)  
  
I also wasnt to happy with the placeholder being changed in loading data. I wanted to update the usable layer here, so the user would get better feedback. I removed the placeholder and added a spinner. But the location issue is still here. Once you hit the button, it keeps spinning instead of updating the input value. Funny thing is, it did update in my browser on my macbook.  
  
![Geolocation_Spinner_Android_Moz](https://user-images.githubusercontent.com/55492381/112484327-2159ec80-8d7a-11eb-8fe6-a934a0da5cf9.gif)  
  
I guess, this is one of those big reasons you test on multiple devices and on multiple browsers. I found out what the issue was, and fixed it. It turned out I was looking for the city, but if you werent in a city, it gave a response of an empty string. So I wrote some extra if statements that if there isnt a city available, fetch other data like locality, prinicipal subdivision or even country. If all of those are not found, then give the user feedback the location can't be found. Below here I have added a use case of a faulty location. You see the placeholder being updated with a message that the location cannot be found. I know this isnt the most beautifull way of giving the user feedback, but that's a thing for later to be updated.  
  
![Geolocation_Error_MBP_Chrome](https://user-images.githubusercontent.com/55492381/112484884-a218e880-8d7a-11eb-8e50-7c214415972c.gif)  
  
So after this update the geolocation worked wonderful in most testcases; MacbookPro - Chrome, Macbookpro - Brave, Android - Mozzila Firefox. But it doesnt work in IOS Safari. Below here opened a Iphone 8 in a browserstack with the console log open to see whats happening. It turns out the geolocation is just denied. The same is happening on my MacbookPro in safari. It might be a setting somewhere, but I couldnt find it.  
  
![Geolocation_IOS_Safari](https://user-images.githubusercontent.com/55492381/112485440-3be09580-8d7b-11eb-9bc1-abbbb6dafc73.gif)  

Because not everyone has geolocation enabled, and I didnt want it to break the rest of my Javascript checked if the geolocation is available in the browser.
```javascript
if (navigator.geolocation) { // checks if geolocation is available in the browser
    const getLocation = document.getElementById('getLocation')
    if (getLocation) { // checks if element is on current page
        getLocation.addEventListener('click', clickForLocation)
    }
}
```

Some of my tries to fetch my data where extremely slow, to get more insight in this I console timed the events of fetching the geolocation and the reverse geocoding. In the gif below you see that I am testing this feature on my MacbookPro in the Chrome browser. In the console you can see how long it took to get this data.  
  
![Geolocation_MBP_Chrome](https://user-images.githubusercontent.com/55492381/112486099-dfca4100-8d7b-11eb-8337-45f219aef033.gif)  
  
The Brave browser was alot quicker, but it might have still cached my location somewhere though.  
  
![Geolocation_MBP_Brave](https://user-images.githubusercontent.com/55492381/112486235-fc667900-8d7b-11eb-8142-b0911028cb3f.gif)  

</details>
  
  #### Drag & Drop
<details>
<summary>Test report Drag & Drop</summary>
  
So in my form I wanted to have a drag and drop when you upload your photograph to the story. But I found out, that for drag and drop you actually don't have to do anything! Drag and drop usually works on input type=fyle elements. But I wanted to take it to the next level. The drag and drop box was kind of small so I styled the whole thing for usability. Now there is a big enough space to drop your photo in. And as you see later in the gif examples, whenever you drag a file into the box the dashed line becomes solid. This is the feedback to the user I was looking for in my usable layer. But to really lift this drag and drop box to the next level I added a pleasureable layer. When you drop a photo in it, you get a thumbnial view from the image you are uploading with the file name. How cool is that! Below here an example of my testing on my MacbookPro in Chrome.  
  
![DragDrop_MBP_Chrome](https://user-images.githubusercontent.com/55492381/112491021-320d6100-8d80-11eb-83c6-3fbe2ab777c6.gif)  
  
So that worked smoothly! Does it work as well in Brave? Well I though it did!  
  
![DragDrop_MBP_Brave](https://user-images.githubusercontent.com/55492381/112491288-7567cf80-8d80-11eb-8c5d-d6a4918eacf3.gif)  
  
I found a video that explained this very well every step of the way. But the author put his input on display none, and worked with the label. So when I tried tabbing through my form, it skipped the drag and drop field.. That's a pretty poor experience. So I styled it properly, and now it is accessible as well!  
  
![DragDrop_FocusStyles](https://user-images.githubusercontent.com/55492381/112491625-c8418700-8d80-11eb-8492-7bc7bd3cd11a.gif)  
  
This drag and drop system is great! But when you are on a mobile device, you dont really have anything to drag into the dropzone. So to serve these users as well you can also just click on the dropzone to upload your photograph. And when I tested this on a mobile device, you don't actually have to search for your file, but you can just take your photograph as well! How handy is that when you're somewhere high up in the mountains! I tested this on IOS and Andriod, but it worked on both devices just as well.
  
![DragDrop_IOS_Safari](https://user-images.githubusercontent.com/55492381/112491962-1f475c00-8d81-11eb-9180-c1062b4d77cf.gif)  
  
Well this whole drag and drop is alot of client-side javascript. What if for some reason it is disabled? Well I also tested this, below in the gif you can see the example in chrome. If javascript is turned off, you will just get the original input field. When you load your javascript it adds classes to the dropzone fields. So it becomes active. If javascript isn't loaded, it won't add those classes so you dont get a label field that is no use at all.
  
```javascript
// If javascript is enabled set input field op display none;
const dragDropCheck = document.querySelector('.drop-zone')

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

    ... Drag and drop javascript code

}
```

![DragDrop_NoJS](https://user-images.githubusercontent.com/55492381/112492505-9aa90d80-8d81-11eb-873a-778fdb505f71.gif)  


</details>


<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->
### Project status 
* ✅  Wireflows v1    
* ✅  Render hello world server side   
  
* ✅  Recap MongoDB database _-- must have_  
* ✅  Link database to server _-- must have_    
* ✅  Create a few objects  in database _-- must have_  
* ✅  Render overview page HTML only _-- must have_    
* ✅  Render detail page HTML only _-- must have_   
* ✅  Create upload page HTML only _-- must have_  
* ✅   Work out how to make series  _-- must have_  
* ❌  Create other/new series page _-- nice to have_  
* ✅  Render series to series page _-- must have_  
* ❌  View images in series in slideshow _-- must have_   
* ❌  View image in series in carousel _-- nice to have_  
* ❌  Update existing series with new images _-- nice to have_  


<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
### License
[MIT](https://github.com/NathanNeelis/broswer-technologies-2021/blob/master/LICENSE)  

### Resources
[Browster technologies](https://platform.html5.org/)  
[carousel css](https://css-tricks.com/css-only-carousel/)  
[grid layout masonry](https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/)
[drag and drop](https://www.youtube.com/watch?v=Wtrin7C4b7w)  
[icon for logo](https://thenounproject.com/search/?q=Photo&i=2059604)  
[icon for location](https://thenounproject.com/search/?q=location&i=3805844)  
[geo location error](https://stackoverflow.com/questions/57130901/getcurrentposition-in-js-does-not-work-on-ios)  
[Js tips article from Thijs](https://dev.to/daliboru/5-neat-javascript-tips-284o?utm_source=digest_mailer&utm_medium=email&utm_campaign=digest_email)  
[spinner](https://codepen.io/alaa-sufi/pen/MWbYdeb)  
[reverse geocoding](https://www.bigdatacloud.com/blog/convert-getcurrentposition-free-reversegeocoding-api)
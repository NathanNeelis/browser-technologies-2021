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
[Grid layout](https://drafts.csswg.org/css-grid/) I'm interested in the new masonry technique   




### Testing report


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
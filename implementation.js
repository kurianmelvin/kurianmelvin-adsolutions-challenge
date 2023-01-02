/**
 * Adds an event listener for the 'scroll' event on the window object.
 * When the user scrolls the page, the event listener function is called.
 *
 * The function gets a collection of elements with the class name 'page-header'
 * using getElementsByClassName, and then loops through the collection.
 * For each element in the collection, the function sets the innerHTML of the
 * first element in the collection (menuHeader[0]) to the innerHTML of the
 * current element in the loop (menuHeader[i]).
 *
 * This means that, as the user scrolls the page, the innerHTML of the first
 * element with the class name 'page-header' will be set to the innerHTML of
 * each element with the class name 'page-header' in turn.
 */


window.addEventListener('scroll', function() {
    let menuHeader = document.getElementsByClassName('page-header');
    for (var i = 0; i < menuHeader.length; i++) {
        menuHeader[0].innerHTML = menuHeader[i].innerHTML;
    }
});


/**
 * Adds an event listener to the window object that listens for the "load" event.
 * When the "load" event occurs, the function inside the addEventListener method is executed.
 *
 * The function gets the first element with the class name "page-content" and the class name "container",
 * and assigns it to the pageContent variable.
 * Then, it gets the position and dimensions of the pageContent element relative to the viewport
 * using the getBoundingClientRect method and assigns it to the pagePos variable.
 *
 * It then gets a collection of elements with the class name "advertising-container-top"
 * using getElementsByClassName, and sets the innerHTML of the first element in the collection (topAd[0])
 * to a div element with a green background and a height and width equal to the top and width properties
 * of the pagePos object, respectively.
 *
 * This code will execute when the page finishes loading, and will set the innerHTML of the first element
 * with the class name "advertising-container-top" to a div element with a green background and a height
 * and width equal to the position and dimensions of the first element with the class name "page-content"
 * and the class name "container" relative to the viewport.
*/



// var viewportWidth = window.innerWidth;
// var viewportHeight = window.innerHeight;
// console.log('viewport height',viewportHeight)
// console.log('viewport width',viewportWidth)


window.addEventListener('load', function() {
    var pageContent = document.querySelector('.page-content .container');
    var pagePos = pageContent.getBoundingClientRect();
  var pageContentDivClass = document.querySelector('.page-content');
  
//   ----------------------------------------------------------------
  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;

//   var viewportWidth = document.documentElement.clientWidth;
//   var viewportHeight = document.documentElement.clientHeight;
  
  // Set the dimensions of the div element
//   var div = document.getElementById('myDiv');
//   div.style.width = viewportWidth + 'px';
//   div.style.height = viewportHeight + 'px';


 
  console.log('viewport height',viewportHeight)
  console.log('viewport width',viewportWidth)

  console.log('viewport width - content width',(viewportWidth- pagePos.width)/2);
// ------------------------------------------------

    var topAd = document.getElementsByClassName('advertising-container-top');
    topAd[0].innerHTML = '<div style="background-color: green; height: ' + pagePos.top + 'px; width: ' + pagePos.width + 'px;">Top Ad</div>';
    
  
//  begining of the left side ad placement 
    
    
    var leftAd = document.createElement('div');
    leftAd.className = 'advertising-container-left';
    pageContentDivClass.insertAdjacentElement('afterbegin', leftAd);
    
    // styling the leftAd element

    leftAd.style.backgroundColor = 'blue';
    leftAd.style.position = 'absolute';


    leftAd.style.left = 0.5+'px';
    leftAd.style.width = (pagePos.left)-0.5+ "px";
    leftAd.style.height = pagePos.height+ "px";




// begining of the right side ad placement 


var rightAd = document.createElement('div');
    rightAd.className = 'advertising-container-right';
    leftAd.insertAdjacentElement('afterbegin', rightAd);

// Styling the rightAd element
    rightAd.style.backgroundColor = 'purple';
    rightAd.style.position = 'absolute';

    rightAd.style.left = pagePos.right+'px';
    rightAd.style.width = ((viewportWidth- pagePos.width)/2)+'px'
    rightAd.style.height =  pagePos.height+ "px";



// ----------------------------------------------------------------

window.addEventListener('resize', function() {

    var pageContentResize = document.querySelector('.page-content .container');
    var pagePosResize = pageContentResize.getBoundingClientRect();
    // console.log('Viewport size: ' + window.innerWidth + ' x ' + window.innerHeight);
    // console.log('pagePosResize : ' + pagePosResize.left );

    leftAd.style.left = 0.5+'px';
    leftAd.style.width = (pagePosResize.left)-0.5+ "px";
    leftAd.style.height = pagePosResize.height+ "px";


    rightAd.style.left = pagePosResize.right+'px';
    rightAd.style.width = ((viewportWidth- pagePosResize.width)/2)+'px'
    rightAd.style.height =  pagePosResize.height+ "px";

  });

});
  
  
  



// topAd[0].innerHTML = '<div style="background-color: green; height: 277px; width: 1024px; ">Top Ad</div>';
// console.log('logging the height');
// topAd.style.backgroundImage = 'url("https://i.picsum.photos/id/70/990/230.jpg?hmac=ausmtAtflDIfrHlBcP4ZalXCNT1ulcXXiEFzYA5ayuY")';

// topAd.style.backgroundRepeat = 'no-repeat';

// topAd.style.zIndex = '1000';





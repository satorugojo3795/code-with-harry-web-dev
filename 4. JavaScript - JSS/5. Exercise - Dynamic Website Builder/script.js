function createCard(vidtitle, cName, views, monthsOld, duration, thumbnail){
    // Finish this function
    var container = document.getElementsByClassName('container')[0];

    //create a div tag wth class image
    var div_img = document.createElement('div');
    div_img.setAttribute("class","image");

    container.appendChild(div_img);

    // create image tag to input the image
    var image = document.createElement('img');
    image.setAttribute("src", thumbnail);

    div_img.appendChild(image); 

    // create a div tag wth class description
    var div_description = document.createElement('div');
    div_img.setAttribute("class","description");

    container.appendChild(div_description);

    //lets add the title
    var title = document.createElement('h2');
    title.innerHTML = vidtitle;

    div_description.appendChild(title)

    //create div with class details and append to div_description
    var div_details = document.createElement('div');
    div_details.setAttribute("class","details");
    div_description.appendChild(div_details);

    deets = [cName,views,monthsOld]
    for(let i=0;i<deets.length;i++){
        var el = document.createElement('span');
        el.innerHTML = deets[i];
        div_details.appendChild(el)
        var circle = document.createElement('div');
        circle.setAttribute("class","circle");
        if(i<2){
            div_details.appendChild(circle);
        }
    } 
}

let title = prompt("enter title");
let cName = prompt("enter cName");
let views = prompt("enter views");
let monthsOld = prompt("enter months old");
let duration = prompt("enter duration");
let thumbnail = prompt("enter thumbnail");

createCard(title, cName, views, monthsOld, duration, thumbnail);

// var container = document.getElementsByClassName('container')[0];

// //create a div tag wth class image
// var div_img = document.createElement('div');
// div_img.setAttribute("class","image");

// container.appendChild(div_img);

// // create image tag to input the image
// var image = document.createElement('img');
// image.setAttribute("src", "card.png");

// div_img.appendChild(image); 

// // create a div tag wth class description
// var div_description = document.createElement('div');
// div_img.setAttribute("class","description");

// container.appendChild(div_description);

// //lets add the title
// var title = document.createElement('h2');
// title.innerHTML = "Intro to web dev";

// div_description.appendChild(title)

// //create div with class details and append to div_description
// var div_details = document.createElement('div');
// div_details.setAttribute("class","details");
// div_description.appendChild(div_details);

// deets = ["Saksham",730,2]
// for(let i=0;i<deets.length;i++){
//     var el = document.createElement('span');
//     el.innerHTML = deets[i];
//     div_details.appendChild(el)
//     var circle = document.createElement('div');
//     circle.setAttribute("class","circle");
//     if(i<2){
//         div_details.appendChild(circle);
//     }
// }



 
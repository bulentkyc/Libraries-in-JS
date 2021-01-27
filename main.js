$('body').css("border", "2px solid red");

//document.querySelector('body').style.border = '2px solid green';

$('body').append('<h1>Hello World :)</h1>');


/* 
var $ = function () {
    alert('hi');
}

$();
 */

console.log($('h1').parents());

function parentPicker(selector) {
    let collection = [];
    let parent = document.querySelector(selector).parentElement;
    console.log(parent.tagName);

    while (parent != null) {

        console.log('1')
        collection.push(parent);
        parent = parent.parentElement;
    }

    return (collection);
}

console.log(parentPicker('h1'));
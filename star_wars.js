let mando = {
    mandalorian: true,
    theChild: true,
    title: "Special Look | The Mandalorian",
    length: '1:00',
    streaming: 'Disney+',
    uploaded: '1 Day',
    views: 1000000,
}

let showObj = document.getElementsByClassName('showobject');
showObj.innerHTML = mando.theChild;

alert(`This is from the object mando - File was uploaded ${mando.uploaded} ago.`)

console.log(mando.theChild);
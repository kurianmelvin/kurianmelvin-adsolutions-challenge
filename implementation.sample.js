var eid = "ASI_"+(new Date().getTime());
document.write('<div id="'+eid+'"></div>');

var ePo = document.getElementById(eid);
ePo.style.display = 'inline-block';
ePo.style.width = '990px';
ePo.style.height = '130px';
ePo.style.backgroundColor = 'purple';

ePl = document.body.insertBefore(document.createElement("div"), document.body.firstChild);
ePr = document.body.insertBefore(document.createElement("div"), document.body.firstChild);

setTimeout(function(){
    var pageContent = document.querySelector('.page-content .container');
    var pagePos = pageContent.getBoundingClientRect();

    ePl.style.backgroundColor = 'purple';
    ePl.style.position = 'absolute';
    ePl.style.left = 0+'px';
    ePl.style.right = pagePos.left+'px';
    ePl.style.height = '130vh';

    ePr.style.backgroundColor = 'purple';
    ePr.style.position = 'absolute';
    ePr.style.left = pagePos.right+'px';
    ePr.style.width = '100%';
    ePr.style.height = '130vh';
    
}, 20);

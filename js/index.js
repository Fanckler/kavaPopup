$('.popup').on('click', function(e){
    e.preventDefault();
    let modal = new kavaPopup({
        title: 'Sergei Omelchenko',
        message: 'Hi, i am front-end developer',
        animation: 'zoom',
        escape: true
    });
    
});

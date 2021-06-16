const items = document.querySelectorAll('.item');
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function(){
            items[i].classList.toggle('open');
            for (let k = 0; k < items.length; k++) {
                if (items[k] !== items[i]) {
                    items[k].classList.remove('open');
                    
                }
            }
        });
    } 
    document.body.addEventListener('click', function(e) {
        for (let k = 0; k < items.length; k++) {
            if (items[k] !== e.target) {
                items[k].classList.remove('open');
            }
        }
    });
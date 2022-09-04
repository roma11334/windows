const images = () => {

    const workspace = document.querySelector('.works'),
          popupWindow = document.createElement('div'),
          popupImg = document.createElement('img');

    
    
    popupWindow.classList.add('popup');
    workspace.appendChild(popupWindow);

    popupWindow.style.display = 'none';
    popupWindow.style.alignItems = 'center';
    popupWindow.style.justifyContent = 'center';
    
    popupWindow.appendChild(popupImg);

    workspace.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;
        

        if(target && target.classList.contains('preview')) {

            popupWindow.style.display = 'flex';
            let path = target.parentNode.getAttribute('href');
            popupImg.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
            // popupImg.style.width = '600px';
            // popupImg.style.height = '600px';
        }

        if(target && target.classList.contains('popup')){
            popupWindow.style.display = 'none';
            document.body.style.overflow = '';
        }

    });

};

export default images;
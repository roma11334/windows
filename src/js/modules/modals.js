const modals = (state) => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeModalOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const close_data_modal = document.querySelectorAll('[data-modal]');
        const marginRight = computedMargin();

        trigger.forEach(item => {
            item.addEventListener('click',(e) => {
                if(e.target) {
                    e.preventDefault();
                }
                
                close_data_modal.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = "block";
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${marginRight}px`;
                console.log(marginRight);
            });
        })

        

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';

            close_data_modal.forEach(item => {
                item.style.display = 'none';
            });

            document.body.style.marginRight = '0px';
        });

        modal.addEventListener('click', (e) => {
            if(e.target === modal && closeModalOverlay){

                close_data_modal.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = 'none';
                document.body.style.overflow = '';
            }

            document.body.style.marginRight = '0px';
            
        });
        
        
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time)
    }

    function computedMargin() {
        let x = document.createElement('div');
        x.style.width = '50px';
        x.style.height = '50px';
        x.style.overflowY = 'scroll';
        document.body.appendChild(x);
        let marginR = x.offsetWidth - x.clientWidth;

        return marginR;
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false)
    //bindModal('.balcon_icons_img', '.balcon_icons')
    //showModalByTime('.popup', 60000);
    
}; 

export default modals;
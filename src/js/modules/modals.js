const modals = (state) => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeModalOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const close_data_modal = document.querySelectorAll('[data-modal]');

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
            });
        })

        

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';

            close_data_modal.forEach(item => {
                item.style.display = 'none';
            });
        });

        modal.addEventListener('click', (e) => {
            if(e.target === modal && closeModalOverlay){

                close_data_modal.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
            
        });
        
        
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time)
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
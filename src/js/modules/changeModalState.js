import onlyNumbers from "./onlyNumbers";
import hideContent from "./hideContent";
const changeModalState = (state) => {

    const windowHeight = document.querySelectorAll('#height');
    const windowWidth = document.querySelectorAll('#width');
    const windowForm = document.querySelectorAll('.balcon_icons_img');
    const windowView = document.querySelectorAll('#view_type');
    const windowCheckbox = document.querySelectorAll('.checkbox');

    onlyNumbers('#width');
    onlyNumbers('#height');

    //console.log(windowCheckbox);
    
    function multiWindow(event, elem, name) {
        elem.forEach((item, i) => {
            item.addEventListener(event, (e) => {
                switch(name) {
                    case 'form':
                        state[name] = i;
                        break;
                    case 'height':
                        state[name] = item.value;
                        break;
                    case 'width':
                        state[name] = item.value;
                        break;
                    case 'type':
                        state[name] = item.value;
                        break;
                    case 'profile':
                        if(i == 0){
                            state[name] = "Холодное";
                        } else {
                            state[name] = "Теплое";
                        }
                        
                        elem.forEach((box, j) => {
                            box.checked = false;
                            if(i==j){
                                box.checked = true;
                            }
                        });
                        
                        break;
                }
                
                // const fuck = document.querySelector('.popup_calc_button');
                // const fuck2 = document.querySelector('.popup_calc_profile_button'); 
                // let sms = document.createElement('div');
                // sms.classList.add('status');
                // sms.innerHTML = 'Ты че сука, а кто будет все поля заполнять???';
                // fuck.disabled = false;
                // fuck2.disabled = false;

                

                // fuck.addEventListener('mouseover', () => {
                //     if(state.form == undefined || state.width == undefined || state.height == undefined){
                //         fuck.disabled = true;
                //         fuck.append(sms);
                //     }
                // })

                // if(state.type == undefined || state.profile == undefined){
                //     fuck2.disabled = true;
                // }

                console.log(state);
            });
        });
    };


    multiWindow('click', windowForm, 'form');
    multiWindow('input', windowHeight, 'height');
    multiWindow('input', windowWidth, 'width');
    multiWindow('change', windowView, 'type');
    multiWindow('change', windowCheckbox, 'profile');
    
}

export default changeModalState;
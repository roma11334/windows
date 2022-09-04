import onlyNumbers from "./onlyNumbers";
import hideContent from "./hideContent";

const forms = (state) => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');

    onlyNumbers('input[name="user_phone"]');
    
    const message = {
        loading: 'Загрузка...',
        failure: 'Что-то пошло не так',
        success: 'Спасибо! Мы скоро с вами свяжемся =))'
    }

    const postData = async (url, data) => {
        let promise = await fetch(url, {
            method: "POST",
            body: data
        });

        return await promise.text();
    }

    form.forEach(item => {
        item.addEventListener('submit', (e) => {

            e.preventDefault();
            
            let mess = document.createElement('div');
            mess.classList.add('status');
            mess.innerHTML = message.loading;
            item.append(mess);
            
            const formData = new FormData(item);

            if(item.getAttribute('data-calc') == 'end'){
                for(let key in state){
                    formData.append(key, state[key]);
                }
                console.log(formData);
                setTimeout(() => {
                    hideContent('[data-modal]');
                    for(let key in state){
                        delete state[key];
                    }
                    //console.log(state);
                }, 3000);
                
            }


            let res = postData("./assets/server.php", formData)
                      .then((res) => {
                        console.log(res);
                        mess.innerHTML = message.success;
                      })
                      .catch(() => mess.innerHTML = message.failure)
                      .finally(() => {
                        inputs.forEach(item => {
                            item.value = '';
                            setTimeout(() => mess.remove(), 3000);
                        })
                      });
            
        })
    })
}

export default forms;
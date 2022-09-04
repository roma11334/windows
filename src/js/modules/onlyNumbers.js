const onlyNumbers = (selector) => {

    let rule = document.querySelectorAll(selector);

    rule.forEach(item => {
        item.addEventListener('input',() => {
            item.value = item.value.replace(/\D/,'');
        });
    });

};

export default onlyNumbers;
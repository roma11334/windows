const hideContent = (selector) => {

    let content = document.querySelectorAll(selector);

    content.forEach(item => {
        item.style.display = 'none';
        document.body.style.overflow = '';
    });
}

export default hideContent;
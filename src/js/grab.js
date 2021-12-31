let grab = document.querySelectorAll(".grab");
grab.forEach(ele => {
    let isDown = false;
    let startX;
    let scrollLeft;

    ele.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - ele.offsetLeft;
        scrollLeft = ele.scrollLeft;
    });
    ele.addEventListener('mouseleave', () => {
        isDown = false;
    });
    ele.addEventListener('mouseup', () => {
        isDown = false;
    });
    ele.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - ele.offsetLeft;
        const walk = (x - startX) * 1.5; //scroll-fast
        ele.scrollLeft = scrollLeft - walk;
    });
});
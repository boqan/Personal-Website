document.addEventListener('DOMContentLoaded', function(){
    const wrapper = document.querySelector('.wrapper');
    let position = 0;
    let direction = -1;

    const moveBackground = () => {
        position += direction;
        wrapper.style.backgroundPositionX = `${position}px`;
        if (position === 0 || position === -1400) {
            direction *= -1;
        }
    }

    setInterval(moveBackground, 40);
 });




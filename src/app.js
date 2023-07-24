const image = document.getElementById('svg');
const Navigation_bar = document.getElementById('nav_container');

//The navigation bar display its already 'none'

function Open_div(){
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    // Window width condition if max-width < 800 
    if (windowWidth <= 800){
        Navigation_bar.style.display = Navigation_bar.style.display === 'none' ? 'block' : 'none';
    }else{
        Navigation_bar.style.display = "block";
    }
}
image.addEventListener('click', Open_div)
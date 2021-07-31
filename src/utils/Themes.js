/* Sets the theme of the page
* @param: primeColor - backgroundcolor of header and counter
* @param: secondaryColor - backgroundcolor of menu
*/
function setTheme(primeColor, secondaryColor) {
    const header = document.getElementById('header');
    header.style.backgroundColor = primeColor;

    const subHeader = document.getElementById('subheader-main');
    subHeader.style.backgroundColor = primeColor;

    const menu = document.getElementById('menu');
    menu.style.backgroundColor = secondaryColor;

//     if (primeColor === '#38003c') {
//         const menuItems = document.getElementsByClassName('menuItemBlack');
//         console.log(menuItems.length)
//         for (let i = 0; i < menuItems.length; i++) {
//             menuItems[i].className = 'menuItem';
            
//         }
//     }
    
//     if (primeColor === 'black') {
//         const menuItems = document.getElementsByClassName('menuItem');
//         for (let i = 0; i < menuItems.length; i++) {
// ;            menuItems[i].className = 'menuItemBlack';
            
//         }
//     }

}

export default setTheme;
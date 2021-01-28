import AppImage from './app-image.png';

function displayImage(){
    const img = document.createElement('img');
    img.src = AppImage;
    document.body.appendChild(img);
}
export default displayImage;
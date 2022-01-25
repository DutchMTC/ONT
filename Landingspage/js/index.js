const button = document.getElementById("js--menu");
const navigation = document.getElementById("js--nav");
const body = document.getElementById("js--body");
const closeMenu = document.getElementById("js--closeMenu");

button.onclick = function(){
        navigation.style.visibility = "visible";
        navigation.style.opacity = 1;
        body.style.overflow = "hidden";
}

closeMenu.onclick = function(){
    navigation.style.visibility = "hidden";
    navigation.style.opacity = 0;
    body.style.overflow = "visible";
}
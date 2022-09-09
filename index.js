var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// carousel
var imgFeature = document.querySelector('.img-feature');
var listImg = document.querySelectorAll('.listImage img'); 

var currentIndex = 0;
function updateImageByIndex(index){
    document.querySelectorAll('.listImage div').forEach(item => {
        item.classList.remove('active');
    })
    currentIndex = index;
    imgFeature.src = listImg[index].getAttribute('src');
    listImg[index].parentElement.classList.add('active');
} 


listImg.forEach((imgElement, index) => {
    imgElement.addEventListener('click' , e => {
    //    imgFeature.src =  e.target.getAttribute('src')
    updateImageByIndex(index)
    })
})

updateImageByIndex(0);

// autoplay


function changeImg () {
    imgFeature.src = listImg[currentIndex].getAttribute('src');
    if(currentIndex < listImg.length -1 ){
        currentIndex++;
        updateImageByIndex(currentIndex);
    }else {
        currentIndex = 0 ;
    }
    setTimeout("changeImg()", 3000);
}

window.onload = changeImg();
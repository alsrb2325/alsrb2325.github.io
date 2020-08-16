// function을 쓰는 순간 hosting이 되서 순서가 상관이 없다 
// 하지만 let const를 먼저 사용하는 순간 순서에 민감하며 순서가 바뀌었을때 에러 발생 

// const company = function() {
//     return
// }

// const company = () => {
//     return
// }  위와 아래는 같음

const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
// querySelector로 가져오면 배열로 가져옴


console.log(current);
console.log(imgs);

// var imgs= [
//     "img1",
//     "img2",
//     "img3",
//     "img4",
//     "img5",
//     "img6",
//     "img7",
//     "img8",
// ]

imgs[0].style.opacity = 0.4;

imgs.forEach(function(img){      
    img.addEventListener('click', imgClick)
}); //이미지를 선택했을때 current로 아이디값을 준 큰 사진으로 나타남


function imgClick(e){
    imgs.forEach(function(img){
        return img.style.opacity = 1;
    })// 클릭한 이미지외 다른 이미지 선명도를 1로 되돌림


    current.src = e.target.src; //target 이미지는 index에서 따로 id를 준 current 이다, 소스값(src)이 바뀜
    e.target.style.opacity = 0.4;
} //이미지를 선택했을때 선명도를 0.4로 낮춤


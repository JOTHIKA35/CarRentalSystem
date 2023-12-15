// var counter=1;
//         setInterval(function(){
//             document.getElementById('radio'+counter).checked=true;
//             counter++;
//             if(counter>6){
//                 counter=1;
//             }
//         },4000);

//         const imgs=document.querySelectorAll('.img a');
//       let imageId=1;
//       const imgDiv=document.querySelectorAll('.img');
//       imgs.forEach((img)=>{
//       img.addEventListener('click',(e)=>{
//       e.preventDefault();
//       imageId=img.dataset.id;
//       imgDiv.forEach((img)=>{
//     img.classList.remove('active');
//  });
//       img.parentElement.classList.add('active');
//       slideImage();
//   });
// });
// function slideImage(){
//   const imgWidth=document.querySelector('.image-gallery img:first-child').clientWidth;
//   let width=(imageId-1)*imgWidth;
//   document.querySelector('.image-gallery').style.
//   transform=`translateX(${-width}px)`;
// }

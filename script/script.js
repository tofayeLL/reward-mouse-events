
// normal mouse events how to work

const container = document.getElementById('container');

// container.addEventListener('mousedown', function(){
//     // console.log('mouse down');
// })

// container.addEventListener('mouseup', function(){
//     // console.log('mousedown');
// })

container.addEventListener('mousemove', function(e){
    console.log(e);
})
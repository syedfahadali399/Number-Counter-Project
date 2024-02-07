const maintitle = document.querySelector('#title');
let curvalue = 0;

const btndecrement = document.querySelector('#decrement');

const btnreset = document.querySelector('#reset');

const btnincrement = document.querySelector('#increment');

btnincrement.addEventListener('click', ()=> {
    curvalue++;
    maintitle.textContent = curvalue
})

btndecrement.addEventListener('click', ()=> {
    curvalue--;
    maintitle.textContent = curvalue
})

btnreset.addEventListener('click', ()=> {
    curvalue = 0;
    maintitle.textContent = curvalue
})

btnreset.addEventListener('click', ()=> {
    alert('Are You Want To Reset')
})

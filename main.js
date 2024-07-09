let arr = ['50','28','15','78','54','11','88','39','64','10']
let box = document.getElementById('box')

arr.map(num => {
    
    let new_1 = document.createElement('h3')
    
       new_1.innerHTML = num
    
       if (num > 50) {
           new_1.classList.add('green')
       } else {
           new_1.classList.add('red')
       }
       box.appendChild(new_1)
});
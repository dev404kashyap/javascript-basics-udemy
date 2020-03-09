

const el1 = document.querySelectorAll('div');

// el1[1].style.backgroundColor = 'yellow';
el1.forEach(function (el)
 {
    // console.log(el);
    el.style.backgroundColor = 'green';
})

// see the forEach function carefully  dude !  be very careful ! ok 


for (let x = 0; x < el1.length; x++) 
{
    console.log(el1[x].textContent);
    el1[x].style.color = 'red';
    el1[x].textContent = `${x}. Next div`;
}

// see the above syntax very carefully 



el1.forEach(function (el)
 {
    console.log(el);
    // el.style.backgroundColor = 'green';
})
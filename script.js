const picture = []
picture.push(`
<img src="images/pic1.jpeg" alt="Ottawa building">
<img src="images/pic2.jpeg" alt="Brazil Storm">
<img src="images/pic3.jpeg" alt="Jib">
<img src="images/pic4.jpeg" alt="Stairs">
<img src="images/pic5.jpeg" alt="Laura1">
<img src="images/pic6.jpeg" alt="Laura2">
<img src="images/pic7.jpeg" alt="Teather">
<img src="images/pic8.jpeg" alt="Street art">

`)

const $picture = document.getElementById("container");
$picture.innerHTML = picture.join('')
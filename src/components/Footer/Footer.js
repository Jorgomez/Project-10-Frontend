import './Footer.css'

export const Footer = () => {
  const footer = document.createElement('footer')

  footer.innerHTML = `
<a class='backToTopo' href="#logo"><img src="https://res.cloudinary.com/digcf0lad/image/upload/v1712095485/Portafolio/ic_baseline-double-arrow_uazq6c.png" alt=""/>

</a>
<ul class="flexContainer" id="ulContactFooter"> 

<li><a href="https://www.linkedin.com/in/jorge-g%C3%B3mez-m%C3%A9ndezz-5a7524a1/" target="_blank"><img src="https://res.cloudinary.com/digcf0lad/image/upload/v1711815171/Portafolio/Vector_5_ze3gnd.png"alt="linkedin Icon"/></a>
</li>
<li><a href="https://github.com/Jorgomez"  target="_blank"><img src="https://res.cloudinary.com/digcf0lad/image/upload/v1711814985/Portafolio/Vector_4_jff8k8.png" alt="Git Icon"/></a></li>
<li><a href="mailto:Jorgomez@protonmail.com" class="smallEmailFooter"><img src="https://res.cloudinary.com/digcf0lad/image/upload/v1711814986/Portafolio/Vector_3_rivw1h.png" alt="email Icon"/></a></li></ul>
<h3>@2024 - What's Going On, by JorGomez</h3>`

  document.body.append(footer)
}

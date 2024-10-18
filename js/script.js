gsap.from(".navbar",{
    x:-600,
    duration:.5,
})
gsap.from(".banner_text",{
    y:600,
    duration:1,
})
gsap.to(".over_img",
    {
      y:10, 
      y:-60,   
      duration:1,
      delay:0,
      repeat:-2,
      yoyo:true
    }
)
gsap.from(".three_left",{
  
    x:-606,
    duration:.8,

})
gsap.from(".three_right",{
  
    x:606,
    duration:.8,

})


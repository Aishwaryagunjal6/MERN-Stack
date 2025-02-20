const allElements = document.querySelectorAll('.accordion-header').forEach((button)=>{
  button.addEventListener('click', ()=>{
    const accordionItem = button.parentElement;
    // console.log(accordionItem)
    const accordionContent = button.nextElementSibling;

    //get currennt height of content for smooth animation if height is 0 that means the body is closed

    //the height is incresed from 0 to contentHeight only if the accordionItem is active
    const contentHeight = accordionContent.querySelector('.accordion-body').offsetHeight;
    // console.log(contentHeight)

    //if the accordion content is already open  then its height should get reduced to 0 and its class should be removed from active 
  
    if(accordionItem.classList.contains('active')){
      //close it
      accordionContent.style.maxHeight = "0px"
      accordionItem.classList.remove('active')
      accordionContent.classList.remove('active')
    }
    else{
      //close any open items first when you want to open another item
      document.querySelectorAll('.accordion-item.active').forEach((activeItem)=>{
          activeItem.classList.remove('active');
          activeItem.querySelector(".accordion-content").style.maxHeight = "0px";
          activeItem.querySelector('.accordion-content').classList.remove('active');
      })

      //open clicked item
      accordionContent.style.maxHeight = contentHeight + "px";
      accordionItem.classList.add("active")
      accordionContent.classList.add("active")
    }

  })
})
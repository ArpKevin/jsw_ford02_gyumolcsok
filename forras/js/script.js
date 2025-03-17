document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function(event){
        event.preventDefault()
      });
  });

  document.querySelectorAll('.color-box').forEach(box => {
    box.style.outline = `3px solid ${box.style.backgroundColor}`;
});
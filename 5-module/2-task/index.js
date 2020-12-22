function toggleText() {
  // ваш код...
  const btn = document.querySelector(".toggle-text-button");
  
  btn.onclick = function() {
    let textt = document.getElementById('text');
    if (textt.hidden != true) {
      textt.hidden = true;
    }
    else {
      textt.hidden = false;
    }
  } 
    
} 
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    if (name && email && message) {
      alert('Message sent successfully!');
    } else {
      alert('Please fill out all fields.');
    }
  });
  
  const links = document.querySelectorAll('a[href^="#"]');
  for (const link of links) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    });
  }
  
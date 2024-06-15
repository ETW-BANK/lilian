document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('subscription-form').addEventListener('submit', function(event) {
      event.preventDefault();
  
      var firstName = document.getElementById('first-name').value;
      var lastName = document.getElementById('last-name').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;
  
      if (firstName === '' || lastName === '' || email === '' || phone === '') {
        alert('Please fill in all fields.');
      } else {
        alert('Registration successful');
  
        
        setTimeout(function() {
          window.location.href = 'index.html';
        }, 1000);  
      }
    });
  });
  
/*
document.getElementById('jobSeekerForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the default form submission
  
  const form = e.target;
  const formData = new FormData(form);

  fetch(form.action, {
      method: 'POST',
      body: formData,
  })
  .then(response => response.text())
  .then(data => {
      alert('Your data has been saved successfully!');
      window.location.href = 'index.html'; // Redirect to the homepage
  })
  .catch(error => {
      console.error('Error!', error.message);
      alert('There was an error submitting your form. Please try again.');
  });
});
*/ 



document.getElementById('jobSeekerForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  const spinner = document.querySelector('.spinner');
  const submitButton = document.querySelector('.btn-submit');

  // Show spinner and hide submit button
  spinner.style.display = 'block';
  submitButton.style.display = 'none';

  // Submit the form data
  fetch(this.action, {
      method: 'POST',
      body: new FormData(this),
  }).then(response => response.text()).then((responseText) => {
      alert('Your data has been saved successfully! . We will reach out to you soon !!!');
      window.location.href = 'index.html'; // Redirect to home page
  }).catch(() => {
      alert('There was an error, please try again or contact us .');
  }).finally(() => {
      // Hide the spinner and show the submit button (in case of an error)
      spinner.style.display = 'none';
      submitButton.style.display = 'block';
  });
});


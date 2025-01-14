
document.getElementById('surveyform').addEventListener('submit',function(event){
   event.preventDefault();
   
   let isValid = true;
   let formData = {};

   let firstName = document.getElementById('firstName').value.trim();
   let lastName=document.getElementById('lastName').value.trim();
   let dob = document.getElementById('dob').value.trim();
   let country = document.getElementById('country').value.trim();
   let profession = document.getElementById('profession').value.trim();
   let email = document.getElementById('email').value.trim();
   let mobile = document.getElementById('mobile').value.trim();

let gender = document.querySelector('input[name="gender"]:checked');
      
      if (!firstName || !lastName || !dob || !country || !profession || !email || !mobile || !gender) {
        alert('All fields are required');
        isValid = false;
      }
      if (isValid) {
        formData = {
          'First Name': firstName,
          'Last Name': lastName,
          'Date of Birth': dob,
          'Country': country,
          'Gender': gender.value,
          'Profession': profession,
          'Email': email,
          'Mobile No': mobile
        };
        
        let popupContent = '';
        for (let label in formData) {
          popupContent += `<strong>${label}:</strong> ${formData[label]}<br>`;
        }

        document.getElementById('popupContent').innerHTML = popupContent;
        document.getElementById('popup').style.display = 'block';
      }
    });

    function closePopup() {
      document.getElementById('popup').style.display = 'none';
      document.getElementById('surveyform').reset();
    }

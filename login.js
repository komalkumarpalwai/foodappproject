document.addEventListener('DOMContentLoaded', function() {
    const profileForm = document.getElementById('profileForm');
    const profileView = document.getElementById('profileView');
    const profileImage = document.getElementById('profileImage');

    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const dob = document.getElementById('dob').value;
        const address = document.getElementById('address').value;
        const image = document.getElementById('image').files[0]; // Get the selected image file

   
        if (image) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const imageData = event.target.result; 
               
                localStorage.setItem('profileImage', imageData);
            };
            reader.readAsDataURL(image); 
        }

        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        localStorage.setItem('dob', dob);
        localStorage.setItem('address', address);

        profileForm.style.display = 'none';

        showProfile();
    });

    function showProfile() {
        const profileName = document.getElementById('profileName');
        const profileEmail = document.getElementById('profileEmail');
        const profilePhone = document.getElementById('profilePhone');
        const profileDOB = document.getElementById('profileDOB');
        const profileAddress = document.getElementById('profileAddress');

        const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');
        const phone = localStorage.getItem('phone');
        const dob = localStorage.getItem('dob');
        const address = localStorage.getItem('address');
        const imageData = localStorage.getItem('profileImage'); // Retrieve image data

        profileName.textContent = name;
        profileEmail.textContent = email;
        profilePhone.textContent = phone;
        profileDOB.textContent = dob;
        profileAddress.textContent = address;
        
        if (imageData) {
            profileImage.src = imageData;
            profileImage.style.display = 'block';
        }

        profileView.style.display = 'block';
    }

    if (localStorage.getItem('name')) {
        profileForm.style.display = 'none';
        showProfile();
    }
});

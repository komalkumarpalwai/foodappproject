document.addEventListener('DOMContentLoaded',function(){
    const profileForm = document.getElementById('profileForm');
    const profileView = document.getElementById('profileView');
    profileForm.addEventListener('submit',function(){
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const dob = document.getElementById('dob').value;
        const address = document.getElementById('address').value;
        //storing to local storage
        localStorage.setItem('name',name)
        localStorage.setItem('email',email)
        localStorage.setItem('phone',phone)
        localStorage.setItem('dob',dob)
        localStorage.setItem('address',address)
        profileForm.style.display="none";
        showProfile();
    })
})
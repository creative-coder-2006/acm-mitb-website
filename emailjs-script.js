emailjs.init('QYQ3-7UrkFuX9I_Tv');

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
    };

    console.log('Form Data:', formData);

    emailjs
        .send('service_v9md36p', 'template_i7j5z3l', formData)
        .then(
            function (response) {
                console.log('Email sent successfully!', response.status, response.text);
                alert('Message sent successfully!');
                document.getElementById('contactForm').reset();
            },
            function (error) {
                console.error('Failed to send message:', error);
                alert('Failed to send message. Please try again later.');
            }
        );
});

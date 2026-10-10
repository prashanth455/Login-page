// Model: Handles data logic and API simulation
const AuthModel = {
    // Validates email format
    isValidEmail: function(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },

    // Simulates an API call to authenticate the user
    authenticate: function(email, password, callback) {
        setTimeout(function() {
            if (email === 'prashanthsp755@gmail.com' && password === 'prashanth@2004') {
                callback({ success: true, message: 'Prashanth you have sucessfully logged in' });
            } else {
                callback({ success: false, message: 'Invalid email or password.' });
            }
        }, 1500);
    }
};

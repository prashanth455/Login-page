// Controller: Coordinates the Model and View
$(document).ready(function() {
    
    // Bind toggle password event
    $('#togglePassword').click(function() {
        LoginView.togglePasswordVisibility();
    });

    // Remove invalid state when user types
    $('#email, #password').on('input', function() {
        $(this).removeClass('is-invalid');
    });

    // Handle form submission
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        
        const email = $('#email').val().trim();
        const password = $('#password').val();
        let isValid = true;

        // Reset previous errors
        LoginView.clearInputErrors();
        LoginView.clearAlert();

        // 1. Validate Email (View & Model)
        if (!email) {
            LoginView.showInputError('email', 'emailFeedback', 'Email address is required.');
            isValid = false;
        } else if (!AuthModel.isValidEmail(email)) {
            LoginView.showInputError('email', 'emailFeedback', 'Please enter a valid email address.');
            isValid = false;
        }

        // 2. Validate Password (View)
        if (!password) {
            LoginView.showInputError('password', 'passwordFeedback', 'Password is required.');
            isValid = false;
        }

        // 3. Process Authentication (Model)
        if (isValid) {
            LoginView.setLoadingState(true);

            AuthModel.authenticate(email, password, function(response) {
                if (response.success) {
                    LoginView.showSuccess();
                } else {
                    LoginView.setLoadingState(false);
                    LoginView.showAlert(response.message);
                }
            });
        }
    });

});

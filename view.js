// View: Handles DOM manipulation and visual updates
const LoginView = {
    // Toggles the password field type between 'text' and 'password'
    togglePasswordVisibility: function() {
        const passwordInput = $('#password');
        const eyeIcon = $('#eyeIcon');
        const type = passwordInput.attr('type') === 'password' ? 'text' : 'password';
        
        passwordInput.attr('type', type);
        eyeIcon.toggleClass('bi-eye bi-eye-slash');
    },

    // Shows an error on a specific input field
    showInputError: function(inputId, feedbackId, message) {
        $(`#${inputId}`).addClass('is-invalid');
        $(`#${feedbackId}`).text(message);
    },

    // Clears all input errors
    clearInputErrors: function() {
        $('.is-invalid').removeClass('is-invalid');
    },

    // Shows an alert banner
    showAlert: function(message) {
        $('#alertContainer').html(`
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `);
    },

    // Clears the alert banner
    clearAlert: function() {
        $('#alertContainer').empty();
    },

    // Sets the loading state of the form
    setLoadingState: function(isLoading) {
        const submitBtn = $('#submitBtn');
        if (isLoading) {
            $('#btnText').text('Signing In...');
            $('#btnSpinner').removeClass('d-none');
            submitBtn.prop('disabled', true);
            $('#email, #password, #rememberMe, #togglePassword').prop('disabled', true);
        } else {
            $('#btnText').text('Sign In');
            $('#btnSpinner').addClass('d-none');
            submitBtn.prop('disabled', false);
            $('#email, #password, #rememberMe, #togglePassword').prop('disabled', false);
        }
    },

    // Shows the success screen with animation
    showSuccess: function() {
        $('#loginForm, #formFooter, .text-center:first').slideUp(300, function() {
            $('#successMessage').fadeIn(400);
        });
    }
};

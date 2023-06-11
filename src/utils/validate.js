export const validateForm = (email, password, fullName, useCase) => {
    const errors = {};

    if (useCase === "signup") {
        if (!fullName.trim()) {
            errors.fullName = 'Full name is required';
        }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
        errors.email = 'Email address is required';
    } else if (!emailRegex.test(email)) {
        errors.email = 'Invalid email address';
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!password.trim()) {
        errors.password = 'Password is required';
    } else if (!passwordRegex.test(password)) {
        errors.password =
            'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
      };
      
};
import { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const { username, email, password } = formData; // ✅ Destructuring for direct variable names

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let newErrors = {};
        if (!username) newErrors.username = "Username is required";
        if (!email) newErrors.email = "Email is required";
        if (!password) newErrors.password = "Password is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form submitted:", formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input type="text" name="username" value={username} onChange={handleChange} />
                {errors.username && <p>{errors.username}</p>}
            </div>

            <div>
                <label>Email:</label>
                <input type="email" name="email" value={email} onChange={handleChange} />
                {errors.email && <p>{errors.email}</p>}
            </div>

            <div>
                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={handleChange} />
                {errors.password && <p>{errors.password}</p>}
            </div>

            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;

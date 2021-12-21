const validate = (values) => {
    console.log(values);
    let error = {};
    if (!values.username) {
        console.log("name");
        error.username = "Please fill the column";
    }
    if (!values.email) {
        console.log("email");
        error.email = "Please fill the column";
    }
    if (! /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(values.email)) {
        console.log("email1");
        error.email = "Invalid emai";
    }
    if (!values.password) {
        console.log("password");
        error.password = "Please fill the column";
    } else if (values.password < 4) {
        console.log("password1");
        error.password = "Password is weak";
    }

    return error;
}

export default validate;
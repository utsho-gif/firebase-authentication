import React from 'react';

const Registration = () => {
    return (
        <div>
            <h2>Please Register Yourself</h2>
            <form>
                <input type="text"  placeholder='Your Name'/>
                <br />
                <input type="email" name="" id="" placeholder='Your Email'/>
                <br />
                <input type="password" name="" id="" placeholder='Password'/>
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Registration;
import { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
    const [user, setUser] = useState({
        name: '',
        phone: 0
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }

    return <section className="align-center form_page">
        <form action="" className="authentication_form" onSubmit={handleSubmit}>
            <h2>Login Form</h2>
            <div className="form_inputs">
                <div>
                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        className="form_text_input"
                        placeholder="Enter your name"
                        value={user.name}
                        onChange={e => setUser({ ...user, name: e.target.value })}
                    />
                </div>
            </div>
            <div className="form_inputs">
                <div>
                    <label htmlFor="">Phome Number</label>
                    <input
                        type="number"
                        className="form_text_input"
                        placeholder="Enter your phone number"
                        value={user.phone}
                        onChange={e => setUser({ ...user, phone: parseInt(e.target.value) })}
                    />
                </div>
            </div>

            <button type='submit' className="search-button form_submit">Submit</button>
        </form>
    </section>
}

export default LoginPage
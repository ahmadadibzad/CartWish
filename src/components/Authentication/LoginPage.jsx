import './LoginPage.css';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    name: z.string().min(3, 'Name should be more than 3 charachters'),
    phone: z.number().nullable(false)
})

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
    console.log(errors);
    const onSubmit = formData => console.log(formData);

    return <section className="align-center form_page">
        <form action="" className="authentication_form" onSubmit={handleSubmit(onSubmit)}>
            <h2>Login Form</h2>
            <div className="form_inputs">
                <div>
                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        id='name'
                        className="form_text_input"
                        placeholder="Enter your name"
                        {...register('name')}
                    />
                    {errors.name && <em className='form_error'>{errors.name.message}</em>}
                </div>
            </div>
            <div className="form_inputs">
                <div>
                    <label htmlFor="">Phome Number</label>
                    <input
                        type="number"
                        id='phone'
                        className="form_text_input"
                        placeholder="Enter your phone number"
                        {...register('phone')}
                    />
                    {errors.phone && <em className='form_error'>{errors.phone.message}</em>}
                </div>
            </div>

            <button type='submit' className="search-button form_submit">Submit</button>
        </form>
    </section>
}

export default LoginPage
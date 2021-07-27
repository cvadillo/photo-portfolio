import React, { useState } from 'react';

function ContactForm() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: ''
	});

	function handleChange(e) {
		setFormState({...formState, name: e.target.value })
	}

	console.log(formState);

	return (
    	<section>
      		<h1>Contact me</h1>
      		<form id="contact-form">
    			<div>
  					<label htmlFor="name">Name:</label>
  					<input type="text" name="name" defaultValue={formState.name} onChange={handleChange} />
				</div>
				<div>
  					<label htmlFor="email">Email address:</label>
  					<input type="email" name="email" defaultValue={formState.name} />
				</div>
				<div>
  					<label htmlFor="message">Message:</label>
  					<textarea name="message" rows="5" defaultValue={formState.name} />
				</div>
				<button type="submit">Submit</button>
      		</form>
    	</section>
  	)
};

export default ContactForm;
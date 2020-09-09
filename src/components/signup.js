import React from 'react';
import Cat from './images/Cat'
import './Signup.css';

const CATWOMANIYA_FORM_ID = '1655780';

class Signup extends React.Component {
    render() {
        let form = {
            id: CATWOMANIYA_FORM_ID,
            title: 'Want more contents like this?',
            subTitle: 'I write about sustainability, healthcare and technology.',
            buttonText: 'Get Updates',
        };
        return (
            <form
                action={`https://app.convertkit.com/forms/${form.id}/subscriptions`}
                className="seva-form formkit-form"
                method="post"
                min-width="400 500 600 700 800"
                style={{
                    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#fff',
                    borderRadius: '6px',
                }}
            >
                <div data-style="full">
                    <div
                        data-element="column"
                        className="formkit-column"
                        style={{ backgroundColor: '#F9FAFB' }}
                    >
                        <h1
                            className="formkit-header"
                            data-element="header"
                            style={{
                                color: 'var(--textTitle)',
                                fontSize: '20px',
                                fontWeight: 700,
                            }}
                        >
                            {form.title}
                        </h1>
                        <div
                            data-element="subheader"
                            className="formkit-subheader"
                            style={{ color: 'var(--textNormal)' }}
                        >
                            <p>{form.subTitle}</p>
                        </div>
                        <div className="formkit-image">
                            <Cat />
                        </div>
                    </div>
                    <div data-element="column" className="formkit-column">
                        <ul
                            className="formkit-alert formkit-alert-error"
                            data-element="errors"
                            data-group="alert"
                        />

                        <div data-element="fields" className="seva-fields formkit-fields">
                            <div className="formkit-field">
                                <input
                                    className="formkit-input"
                                    name="email_address"
                                    aria-label="Your email address"
                                    placeholder="Your email address"
                                    required
                                    type="email"
                                    style={{
                                        borderColor: '#403b44',
                                        borderRadius: '4px',
                                        color: 'rgb(0, 0, 0)',
                                        fontWeight: 400,
                                    }}
                                />
                            </div>
                            <button
                                data-element="submit"
                                className="formkit-submit"
                                style={{
                                    backgroundColor: 'rebeccapurple',
                                    borderRadius: '24px',
                                    color: 'white',
                                    fontWeight: 700,
                                }}
                            >
                                <div className="formkit-spinner" />
                                <span>{form.buttonText}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default Signup;
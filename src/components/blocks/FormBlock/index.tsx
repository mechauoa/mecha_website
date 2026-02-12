"use client";

import * as React from 'react';
import classNames from 'classnames';
import ReCAPTCHA from "react-google-recaptcha";

import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import SubmitButtonFormControl from './SubmitButtonFormControl';

export default function FormBlock(props) {
    const formRef = React.createRef<HTMLFormElement>();

    const { fields = [], elementId, submitButton, className, styles = {}, 'data-sb-field-path': fieldPath } = props;

    if (fields.length === 0) {
        return null;
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        if (recaptchaRef.current) {
            const recaptchaToken = recaptchaRef.current.getValue();
            if (!recaptchaToken) {
                alert("Please complete the reCAPTCHA.");
                return;
            }

            const data = new FormData(formRef.current);
            const value = Object.fromEntries(data.entries()) as Record<string, string>;

            // Include the reCAPTCHA token in the form data
            value['g-recaptcha-response'] = recaptchaToken;

            // Submit the form
            fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(value).toString(),
            })
                .then(() => alert("Form successfully submitted"))
                .catch((error) => alert(`Error submitting form: ${error}`));
        }
    }

    const recaptchaRef = React.useRef<ReCAPTCHA>(null);

    return (

        <form
            className={classNames(
                'sb-component',
                'sb-component-block',
                'sb-component-form-block',
                className,
                styles?.self?.margin ? mapStyles({ margin: styles?.self?.margin }) : undefined,
                styles?.self?.padding ? mapStyles({ padding: styles?.self?.padding }) : undefined,
                styles?.self?.borderWidth && styles?.self?.borderWidth !== 0 && styles?.self?.borderStyle !== 'none'
                    ? mapStyles({
                        borderWidth: styles?.self?.borderWidth,
                        borderStyle: styles?.self?.borderStyle,
                        borderColor: styles?.self?.borderColor ?? 'border-primary'
                    })
                    : undefined,
                styles?.self?.borderRadius ? mapStyles({ borderRadius: styles?.self?.borderRadius }) : undefined
            )}
            name={elementId}
            id={elementId}
            onSubmit={handleSubmit}
            ref={formRef}
            method="POST"
            data-sb-field-path={fieldPath}
            data-netlify="true"
            data-netlify-recaptcha="true"
        >
            <div
                className={classNames('w-full', 'flex', 'flex-wrap', 'gap-8', mapStyles({ justifyContent: styles?.self?.justifyContent ?? 'flex-start' }))}
                {...(fieldPath && { 'data-sb-field-path': '.fields' })}
            >
                <input type="hidden" name="form-name" value={elementId} />
                {fields.map((field, index) => {
                    const modelName = field.__metadata.modelName;
                    if (!modelName) {
                        throw new Error(`form field does not have the 'modelName' property`);
                    }
                    const FormControl = getComponent(modelName);
                    if (!FormControl) {
                        throw new Error(`no component matching the form field model name: ${modelName}`);
                    }
                    return <FormControl key={index} {...field} {...(fieldPath && { 'data-sb-field-path': `.${index}` })} />;
                })}
            </div>
            <div data-netlify-recaptcha="true"></div>
            <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_SITE_RECAPTCHA_KEY || ""}
                ref={recaptchaRef}
            />
            {submitButton && (
                <div className={classNames('mt-8', 'flex', mapStyles({ justifyContent: styles?.self?.justifyContent ?? 'flex-start' }))}>
                    <SubmitButtonFormControl {...submitButton} {...(fieldPath && { 'data-sb-field-path': '.submitButton' })} />
                </div>
            )}
        </form>

    );
}

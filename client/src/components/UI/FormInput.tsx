import React, { ChangeEvent, FC } from "react";
import { Form } from "react-bootstrap";

type Props = {
    label: string;
    value: string;
    placeholder: string;
    type: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    helpText?: string;
};

const FormInput: FC<Props> = ({ label, helpText, ...inputProps }) => {
    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control {...inputProps} />
            {helpText && (
                <Form.Text className="text-muted">{helpText}</Form.Text>
            )}
        </Form.Group>
    );
};

export default FormInput;

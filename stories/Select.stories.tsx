import React from 'react';
import type { Meta } from '@storybook/react';
import { Label, Select } from '../src';

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
};

export default meta;

export function Primary() {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Select id="email">
                <option value="">Select a email</option>
                <option value="1">c@example.com</option>
                <option value="2">c@google.com</option>
                <option value="3">c@codenteq.com</option>
            </Select>
        </div>
    );
}

export function Disabled() {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Select id="email" disabled={true}>
                <option value="">Select a email</option>
                <option value="1">c@example.com</option>
                <option value="2">c@google.com</option>
                <option value="3">c@codenteq.com</option>
            </Select>
        </div>
    );
}

export function OptGroup() {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="fruit">Email</Label>
            <Select id="fruit">
                <option value="">Select a fruit</option>
                <optgroup label="Fruits">
                    <option value="apple">Apple</option>
                    <option value="banana">Banana</option>
                </optgroup>
                <optgroup label="Vegetables">
                    <option value="carrot">Carrot</option>
                    <option value="broccoli">Broccoli</option>
                </optgroup>
            </Select>
        </div>
    );
}

export function OptGroupDisabled() {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="fruit">Email</Label>
            <Select id="fruit">
                <option value="">Select a fruit</option>
                <optgroup label="Fruits">
                    <option value="apple">Apple</option>
                    <option value="banana">Banana</option>
                </optgroup>
                <optgroup label="Vegetables" disabled={true}>
                    <option value="carrot">Carrot</option>
                    <option value="broccoli">Broccoli</option>
                </optgroup>
            </Select>
        </div>
    );
}

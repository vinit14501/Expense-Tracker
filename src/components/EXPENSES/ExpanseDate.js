import React from 'react';
import './css/ExpenseDate.css';

export default function ExpanseDate(props) {

    const month = props.date.toLocaleString('en-in', { month: 'long' });
    const day = props.date.toLocaleString('en-in', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    );
}

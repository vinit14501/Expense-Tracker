import React from 'react';
import './css/ExpenseItem.css'
import ExpanseDate from './ExpanseDate';
import Card from '../UI/Card';

export default function ExpenseItem(props) {

    return (
        <li>
            <Card className="expense-item">
                <ExpanseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>
                        <span>
                            &#8377;
                        </span>
                        {props.amount}
                    </div>
                </div>
            </Card>
        </li>
    )
}
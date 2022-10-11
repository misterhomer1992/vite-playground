import React, {FC} from "react";
import './index.css';
import classes from './styles.module.css';
import {MyDecorator} from "../logDecorator";

type DropdownProps = {
    items: Array<{
        key: string;
        value: string;
    }>;
    label: string;
    id: string;
}

@MyDecorator
class Dropdown extends React.PureComponent<DropdownProps> {
    render() {
        const {id, label, items} = this.props;
        this.props.log(items);

        return (
            <div>
                <label htmlFor={id}>{label}</label>
                <div className={classes.select}>
                    <select id={id}>
                        {items.map(({key, value}) => (
                            <option key={key} value={key}>{value}</option>
                        ))}
                    </select>
                </div>
            </div>
        );
    }
}

export default Dropdown;

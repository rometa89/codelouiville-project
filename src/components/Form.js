
import React from 'react';

const Form = props => (
    <form onSubmit={props.getMenuList} style={{ marginBottom:"2em" }}>
        <input className="form__input" type="text" name="menuListName" />
        <button className="form__button">Search</button>
    </form>
);

export default Form;
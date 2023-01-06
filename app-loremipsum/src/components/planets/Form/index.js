import React, {Fragment, useState} from "react";

const Form = (props) => {
    const [name, setName] = useState('')
    const handleChange = (e) => setName(e.target.value);

    const handleSubmit = (e) => {
        props.addPlanet({name: name})
        e.preventDefault();
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" value={name} onChange={handleChange}/>
                </div>
                <br/>
                <input type="submit"/>
            </form>
        </Fragment>
    )
}

export default Form;
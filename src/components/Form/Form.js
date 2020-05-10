import React from "react"
import "./Form.css"

const Form = props => {
    return (
        <div>
            <form className="form" onSubmit={props.getWeatherInfo}>
                <input
                    className="form-item"
                    type="text"
                    name="city"
                    placeholder="City..."
                />
                <input
                    className="form-item"
                    type="text"
                    name="country"
                    placeholder="Country..."
                />
                <input
                    className="form-item btn btn-primary"
                    type="submit"
                    value="Search"
                />
            </form>
        </div>
    )
}

export default Form

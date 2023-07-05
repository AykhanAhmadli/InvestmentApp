const Form = () => {

    const reset = () => {
        console.log('reset')
    }

    const inputHandler = (input, value) => {
        console.log(input, value)
    }


    return (
        <form className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input onChange={(event) => inputHandler("current-savings", event.target.value)} type="number" id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input onChange={(event) => inputHandler("yearly-contribution", event.target.value)} type="number" id="yearly-contribution" />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input onChange={(event) => inputHandler("expected-return", event.target.value)} type="number" id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input onChange={(event) => inputHandler("duration", event.target.value)} type="number" id="duration" />
                </p>
            </div>
            <p className="actions">
                <button onClick={reset} type="reset" className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    );
}

export default Form;
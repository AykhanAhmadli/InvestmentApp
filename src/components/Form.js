import { useState } from "react"
const Form = ({onCalculate,currentSavings,setCurrentSavings}) => {
    const [yearlyContribution, setYearlyContribution] = useState(1000)
    const [expectedReturn, setExpectedReturn] = useState(10)
    const [duration, setDuration] = useState(10)

    const reset = () => {
        console.log('reset')
    }

    const submit = (event) => {
        event.preventDefault()
        onCalculate(currentSavings,yearlyContribution,expectedReturn,duration)
    }

    const inputHandler = (input, value) => {
        if (input === "current-savings") {
            setCurrentSavings(value)
        }
        else if (input === "yearly-contribution") {
            setYearlyContribution(value)
        }
        else if (input === "expected-return") {
            setExpectedReturn(value)
        }
        else if (input === "duration") {
            setDuration(value)
        }
    }


    return (
        <form onSubmit={submit} className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input value={currentSavings} onChange={(event) => inputHandler("current-savings", event.target.value)} type="number" id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input value={yearlyContribution} onChange={(event) => inputHandler("yearly-contribution", event.target.value)} type="number" id="yearly-contribution" />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input value={expectedReturn} onChange={(event) => inputHandler("expected-return", event.target.value)} type="number" id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input value={duration} onChange={(event) => inputHandler("duration", event.target.value)} type="number" id="duration" />
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
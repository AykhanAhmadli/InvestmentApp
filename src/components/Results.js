const Results = ({data}) => {
    return (
        <table className="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {data.map(data=>
                <tr>
                    <td>{data.year}</td>
                    <td>{data.savingsEndOfYear}</td>
                    <td>{data.yearlyInterest}</td>
                    <td>TOTAL INTEREST GAINED</td>
                    <td>TOTAL INVESTED CAPITAL</td>
                </tr>
                )}
            </tbody>
        </table>
    );
}

export default Results;
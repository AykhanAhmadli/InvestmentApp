import Header from "./components/Header";
import Form from "./components/Form";
import Results from "./components/Results";
import { useState } from "react";


const App = () => { 
  const [currentSavings, setCurrentSavings] = useState(10000)
  const [results, setResults] = useState(null)
  const calculateHandler = (currentSavings,yearlyContribution,expectedReturn,duration) => {
    const yearlyData = []; 

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * (expectedReturn/100);
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setResults(yearlyData)

  };

  return (
    <div>
      <Header />
      <Form onCalculate={calculateHandler} currentSavings={currentSavings} setCurrentSavings={setCurrentSavings}/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {results? <Results data={results} initialInvestment={currentSavings} /> : <p style={{textAlign:'center'}}>No investment calculated yet</p> }
     
    </div>
  );
}

export default App;

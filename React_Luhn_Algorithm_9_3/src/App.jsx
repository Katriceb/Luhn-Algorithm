import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import validCard from './validCard'

const isValidCard= (number)=> {
  const digits = number.toString().split('').map(Number);

  for (let i = digits.length - 2; i >= 0; i -= 2) {
    digits[i] *= 2;
    if (digits[i] > 9) {
      digits[i] -= 9;
    }
  }

  const sum = digits.reduce((acc, digit) => acc + digit, 0);
  return sum % 10 === 0;
};
const validCard = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    if (cardNumber) {
      setIsValid(isValidCard(cardNumber));
    } else {
      setIsValid(null);
    }
  }, [cardNumber]);
  const handleChange = (event) => {
    const { value } = event.target;
    //setCardNumber(value.replace(/\D/g, '')); // Remove non-numeric characters
  };
  return (
    
      <div>
      <label htmlFor="creditCard">Credit Card Number:</label>
      <input
        type="text"
        id="creditCard"
        value={cardNumber}
        onChange={handleChange}
      />
     
     {isValid !== null && (
        <div>
          {isValid ? (
            <p style={{ color: 'green' }}>Card is valid!</p>
          ) : (
            <p style={{ color: 'red' }}>Card is not valid!</p>
          )}
        </div>
      )}
    </div>
  );
};


export default App

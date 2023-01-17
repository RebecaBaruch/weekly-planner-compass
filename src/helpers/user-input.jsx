import { useState } from "react";

const useInput = (validateValue) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [isTouched, setIsTouched] = useState(false);

	const valueIsValid = validateValue(enteredValue);
	const hasError = !valueIsValid;
    // (!valueIsValid && isTouched)

    const colorHandler = (event) => {

        if(!valueIsValid) {
            event.target.classList.remove('invalid');
        }
        if(valueIsValid){
            event.target.classList.add('invalid');
        }
    }

	const valueChangeHandler = (event) => {
        colorHandler(event);
        setEnteredValue(event.target.value);
	};

	const inputBlurHandler = () => {
		setIsTouched(true);
	};

	const reset = () => {
		setEnteredValue("");
		setIsTouched(false);
	};

	return {
		value: enteredValue,
		isValid: valueIsValid,
		hasError,
		valueChangeHandler,
		inputBlurHandler,
		reset,
	};
};

export default useInput;
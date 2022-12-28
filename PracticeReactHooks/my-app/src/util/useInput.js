import React, { useState } from 'react'

// 커스텀 훅도 리액트 훅이니 use를 앞에 써줘야한다.

export function useInput(initialState, action) {
    const [inputValue, setInputValue] = useState(initialState);

    const handleChange = (event) => {
        setInputValue(event.target.value);
      }

      const handleSubmit = () => {
        action(inputValue);
        setInputValue(initialState);
      }
    
      return [inputValue, handleChange, handleSubmit]
}

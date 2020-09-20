import { useState, useCallback } from 'react';

function useInputs(initialForm) {
  // 이 함수에서 사용할 parameter는 해당 input form에서 관리할 초기값이다.
  const [form, setForm] = useState(initialForm);
  // form이라는 새로운 상태를 선언하고, 초기값을 parameter로 가져온 initialForm이다.
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  // parameter로 가져온 initialFrom을 사용하고 있으니 deps에 넣어줘야 함.

  return [form, onChange, reset]; //객체 형태로 내보내도 된다.
}

export default useInputs;

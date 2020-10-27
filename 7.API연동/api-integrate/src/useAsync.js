import { useReducer, useEffect } from 'react';

// Loading, Success, Error 총 세가지 액션을 받는다.
function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      // 로딩할 때는 로딩 값이 true, 나머지 값 초기화
      return {
        loading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      // 성공했을 때는 로딩값 false, 데이터 받아오고, 에러값은 null
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case 'ERROR':
      // 에러일 경우에는 성공과 반대로
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      return new Error('Unhandled action type: ${action.type}');
  }
}

export default function useAsync(callback, deps = [], skip = false) {
  // callback은 API를 호출하는 함수를 넣을 것이고,
  // deps는 나중에 useEffect를 사용해서 컴포넌트가 로딩 됐을 때, 값이 변경 됐을 때,
  // API를 재요청 하는데, 그 useEffect에서 두번째 parameter에 넣는 그 deps를
  // 그대로 받아와서 사용할 것이다.
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await callback();
      dispatch({ type: 'SUCCESS', data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  useEffect(() => {
    if (skip) {
      return;
    }
    fetchData();
  }, deps);

  return [state, fetchData];
}

// export default useAsync;
// 위에 함수에서 바로 내보내도 가능하다.

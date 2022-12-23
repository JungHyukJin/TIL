import { useEffect } from 'react'

export default function Timer() {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('타이머 작동 중...');
        }, 1000)

        return () => {
            clearInterval(timer);
        }
    }, []);
}

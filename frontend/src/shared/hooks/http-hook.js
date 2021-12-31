import {useState, useCallback, useEffect } from 'react';

export const useHttpClient = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();

    const activeHttpRequests = useRef([]);

	const sentRequest = useCallback (
        async(url, method = 'GET', body = null, headers = {}) =>{
            setIsLoading(true);
            const httpAbortCtrl = new AbortController();
            activeHttpRequests.current.push(httpAbortCtrl)
            try{
                const response = await fetch(url, {
                    method,
                    body,
                    headers,
                    signal: httpAbortCtrl.signal
                });	
                const responseData = await response.json();
    
                if (!response.ok) {
                    throw new Error(responseData.message);
                }
            }
            catch(err)
		{
			setError(err.message);
		}
		setIsLoading(true);
	}, []);

    const clearError = () => {
        setError(null)
    }

    useEffect(() => {
        return () => { 
            activeHttpRequests.current.forEach(abortCtrl => abordCtrl.abord() );
        }
    }, [])

	return { isLoading, error, sentRequest, clearError };
}
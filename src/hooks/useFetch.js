import { useEffect, useRef, useState } from "react";

function useFetch(fetchAction, initialState, fetchActionParameters, triggers) {
    const [result, setResult] = useState(initialState);
    const [error, setError] = useState();

    const cancelationTokenRef = useRef(null);

    useEffect(() => {
        if (cancelationTokenRef.current !== null) {
            cancelationTokenRef.current();
        }

        async function performAction() {
            try {
                setError(undefined);
                const [promise, cancel] = fetchAction(fetchActionParameters);
                cancelationTokenRef.current = cancel;
                const response = await promise;
                if(!response.ok) {
                    setError(response);
                    return;
                }
                const result = await response.json();
                setResult(result);
            } catch (e) {
                if (e.name !== "AbortError") {
                    console.error(e);
                }
            } finally {
                cancelationTokenRef.current = null;
            }
        }

        performAction();

        return () => cancelationTokenRef.current && cancelationTokenRef.current();
    }, [fetchAction, ...triggers]);

    return { result, error };
}

export { useFetch }
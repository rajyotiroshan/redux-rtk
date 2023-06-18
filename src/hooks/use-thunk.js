import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

//custom Hook
//for disptaching thunk
//and maintaining loading and error state
function useThunk(thunk) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const runThunk = useCallback(() => {
    setIsLoading(true);

    dispatch(thunk())
      .unwrap()
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [dispatch, thunk]);

  return [runThunk, isLoading, error];
}

export { useThunk };

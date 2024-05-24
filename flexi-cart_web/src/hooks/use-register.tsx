import { useAppDispatch, useAppSelector } from "../redux/hook";
import { registerUser } from "../redux/features/userActions";
import type { user } from "../redux/features/userActions";

const useRegister = (user: user) => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.user);

  dispatch(registerUser(user));

  return { loading, error };
};

export default useRegister;

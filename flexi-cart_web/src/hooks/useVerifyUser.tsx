// verify user hook
import { useAppDispatch } from "../redux/hook";
import { verifyUser } from "../redux/features/userActions";

const useVerifyUser = () => {
  const dispatch = useAppDispatch();

  dispatch(verifyUser());
};

export default useVerifyUser;

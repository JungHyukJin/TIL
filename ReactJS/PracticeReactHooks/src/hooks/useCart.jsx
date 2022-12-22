import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addOrUpdateCart, getCart, removeCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const cartQuery = useQuery(["cart", uid || ""], () => getCart(uid), {
    enabled: !!uid,
  });

  const addOrUpdateItem = useMutation(
    (product) => addOrUpdateCart(uid, product),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["cart", uid]);
      },
    }
  );

  const removeItem = useMutation((id) => removeCart(uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["cart", uid]);
    },
  });

  return { cartQuery, addOrUpdateItem, removeItem };
}

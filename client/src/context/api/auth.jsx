import axios from "../../libs/axiosProtected";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";


// const queryClient = useQueryClient();

// queryClient.invalidateQueries({
//   queryKey: [],  //bestimme welchen der queries sollen nicht gespeichert werden 
// })

export async function registerRequest() {
  // const registerHandler = await axios.post("/api/auth/createUser", { alternative eingabe
  //   firstname,
  //   lastname,
  //   username,
  //   birthday,
  //   email,
  //   emailConfirmation,
  //   password,
  //   passwordConfirmation,
  // });
  const registerMutation = useMutation({
    mutationFn: async (loginData) =>
      await axios.post("/api/auth/login", loginData),
    onSuccess: () => {}, // hier kann man success error und finally fälle einstellen
    onError: () => {},
    onSettled: () => {
      toast.success("Erfolgreich... Failed!");
    },
  });

  return registerMutation;
}

export function useLoginRequest() {
  //tested
  const loginMutation = useMutation({
    mutationFn: async (loginData) =>
      await axios.post("/api/auth/login", loginData),
    onSuccess: () => {}, // hier kann man success error und finally fälle einstellen
    onError: () => {},
    onSettled: () => {
      toast.success("Erfolgreich... Failed!");
    },
  });

  return loginMutation;
}

export function refreshRequest(...key) {
   return useQuery(
    key,
    async () => {
      const response = await axios.get("/api/auth/tokenRefresh");
      return response
    },
    {
      onSuccess: () => {}, // hier kann man success error und finally fälle einstellen
      onError: () => {},
      onSettled: () => {
        toast.success("Erfolgreich... Failed!");
      },
    }
  );

}

export async function logoutRequest() {
  const logoutQuery = useMutation({
    mutationFn: async () => await axios.post("/api/auth/logout"),
    onSuccess: () => {}, // hier kann man success error und finally fälle einstellen
    onError: () => {},
    onSettled: () => {
      toast.success("Erfolgreich... Failed!");
    },
  });
  return logoutQuery;
}

export async function profileRequest(...key) {
  return useQuery({
    queryKey:key, 
    queryFn: async () => await axios.get("/api/user/getProfile"),
    onSuccess: () => {
      
    }, // hier kann man success error und finally fälle einstellen
    onError: () => {},
    onSettled: () => {
      toast.success("Erfolgreich... Failed!");
    },
  });

  
}

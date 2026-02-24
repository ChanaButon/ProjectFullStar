import { QueryClient, QueryClientProv_ider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const TanstackProv_ider = ({ children }) => {
  return (
    <QueryClientProv_ider client={queryClient}>{children}</QueryClientProv_ider>
  );
};

export default TanstackProv_ider;

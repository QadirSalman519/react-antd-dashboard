import { HeadProvider } from "react-head";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <HeadProvider>
      <AppRoutes />
    </HeadProvider>
  );
}

export default App;

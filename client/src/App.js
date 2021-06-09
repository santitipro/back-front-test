import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { Home } from "./containers";
import theme from "./styles/theme";
import GlobalStyles from "./styles/common";
import ResetStyles from "./styles/reset";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ResetStyles />
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";

import App from "@/components/App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

if (document.getElementById('app')) {
    const root = ReactDOM.createRoot(document.getElementById('app'));
    const queryClient = new QueryClient()

    root.render(
        <React.StrictMode>
            <QueryClientProvider client={ queryClient }>
                <App/>
            </QueryClientProvider>
        </React.StrictMode>
    )
}

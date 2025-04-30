# React + TypeScript + Vite

## Setup the frontend
1. Used Vite to scaffold the project `npm create vite@latest patientor-app -- --template react-ts`
2. Add types for the data
3. Add api
4. Use react-query
- install `npm install @tanstack/react-query`
- pass the library functions to the entire app by wraping `App` with `QueryClientProvider` and passing `QueryClient`
```
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
<QueryClientProvider client={queryClient}>
...
```

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useCurrency = () => useQuery({
    queryKey: [ 'currency' ],
    queryFn: async () => {
        const {data} = await axios.get('http://localhost/api/currency')
        return data.data.currency
    }
})

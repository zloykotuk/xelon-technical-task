import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import { useCurrency } from "@/store/currency";
import CurrencyTable from "@/components/CurrencyTable/CurrencyTable";

const App = () => {
    const [ data, setData ] = useState([])
    const { isLoading, data: initData } = useCurrency()

    useEffect(() => {
        setData(initData)
    }, [initData])

    useEffect(() => {
        const pusher = new Pusher('key', {
            wsHost: 'localhost',
            wssPort: 6001,
            wsPort: 6001,
            cluster: 'mt1',
            disableStats: true,
            forceTLS: false,
            enabledTransports: [ 'ws' ]
        })

        pusher.subscribe('currency-info')
            .bind('currency', (data) => {
                setData(data?.currency ?? [])
            });

        return () => {
            pusher.unsubscribe('currency-info')
        }
    }, []);

    return (
        <div>
            <h1>Currency</h1>
            { isLoading ? <>Loading....</> :
                <CurrencyTable
                    currency={data}
                />
            }
        </div>
    )
}

export default App

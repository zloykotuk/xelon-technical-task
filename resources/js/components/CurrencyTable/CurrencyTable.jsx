import './CurrencyTable.css'

const MILLISECOND = 1000

const CurrencyTable = ({currency}) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Currency Code A</th>
                <th>Currency Code B</th>
                <th>Date</th>
                <th>Rate Buy</th>
                <th>Rate Cross</th>
                <th>Rate Sell</th>
            </tr>
            </thead>
            <tbody>
            {
                currency && currency.map((el, index) => (<tr key={ index }>
                    <td>{ el.currencyCodeA }</td>
                    <td>{ el.currencyCodeB }</td>
                    <td>{ new Date(el.date * MILLISECOND).toLocaleString() }</td>
                    <td>{ el.rateBuy }</td>
                    <td>{ el.rateCross }</td>
                    <td>{ el.rateSell }</td>
                </tr>))
            }
            </tbody>
        </table>
    );
}

export default CurrencyTable

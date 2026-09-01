import { useSelector } from 'react-redux'
import "../App.css"

const Stats = () => {

    const product = useSelector((state)=>state.inventory.product);

    const valuation = product.reduce((acc,curr)=>{
        return (acc += curr.price* curr.qty)
    },0)

    const highStock = product.filter((p)=>p.qty >10 ).length
    const lowStock = product.filter((p)=>p.qty <=10 ).length

    return (
        <div className='box pt-3'>
            <h2>Total products :- {product.length}</h2>
            <h2>Total Valuation :- {valuation}</h2>
            <h2>High Stock :- {highStock}</h2>
            <h2>Low Stock :- {lowStock}</h2>
        </div>
    )
}

export default Stats

import './ProductCard.css'
import IProduct from '../models/IProducs';
import { log } from 'console';
interface IProps{
    product: IProduct;
    userType: string;

}


function ProductCard(props: IProps) {


    return (
        <div className='ProductCard'>
            {props.product.name}<br />
            {props.product.description}<br />
            Manufacturer: {props.product.company}<br />
            NIS {props.product.price}<br />
            Available amount: {props.product.amount}

        </div>       
    );
}

export default ProductCard;

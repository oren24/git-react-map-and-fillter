import './ProductCard.css'
import { IProduct } from '../../models/IProducs';
import { log } from 'console';
interface IProps{
    product: IProduct;
    userType: string;
    deleteProduct: Function;
}


function ProductCard(props: IProps) {

    function onDeletProduct(){
      
        console.log("123");
        props.deleteProduct(props.product.id);
    }
    return (
        <div className='ProductCard'>
            {props.product.name}<br />
            {props.product.description}<br />
            Manufacturer: {props.product.company}<br />
            NIS {props.product.price}<br />
            Available amount: {props.product.amount}
            {props.userType === 'admin' && (<button onClick={onDeletProduct}>Hide Product</button>)}            
        </div>       
    );
}

export default ProductCard;

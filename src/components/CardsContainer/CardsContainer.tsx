import { useState } from "react";
import { IProduct } from "../../models/IProducs";
import ProductCard from "../ProductCard/ProductCard";
import './CardsContainer.css'


function CardsContainer() {
    let [productsModel, setProductsModel] = useState<IProduct[]>([
        { id: 0, name: 'Computer Screen', description: '26" 4K LED display', company: 'LG', price: 1200, amount: 7},
        { id: 1, name: 'Whiskey', description: 'Blended scotch whiskey', company: 'Jack Daniels', price: 100, amount: 50},
        { id: 2, name: 'The third product', description: 'Some random thing. I could not think of anything original', company: 'The one and only', price: 200, amount: 13}, { id: 3, name: 'The fourth product', description: 'Some random thing. I could not think of anything original', company: 'The one and only', price: 200, amount: 13}]);

    let [productsViewModel, setProductsViewModel] = useState<IProduct[]>(productsModel);
    let [userType, setUserType] = useState('user');
    let [searchText, setSearchText] = useState("");

    function deleteProduct(deletedProductId:number): void{
        productsViewModel = productsViewModel.filter(product => product.id != deletedProductId);
        setProductsViewModel(productsViewModel);
    }

    function changeUserType() {
        debugger;
        setUserType('admin')       
    }

    function isShowProduct(product: IProduct): boolean{
        if (searchText == ""){
            return true;
        }

        return product.name.toLowerCase().includes(searchText);       
    }

    return (
        <div className="CardsContainer">
            {productsViewModel.filter(product => isShowProduct(product)).map((product) =>
                <ProductCard key={product.id} deleteProduct = {deleteProduct} product={product} userType={userType}/>
            )}
            <button onClick={() => changeUserType()}>Change to Admin</button>
            <button onClick={() => setProductsViewModel(productsModel)}>Unhind all products</button>
            <br/>
            <input type="text" placeholder="Search" onChange={event => setSearchText(event.target.value.toLowerCase())}/>
        </div>
    );
}

export default CardsContainer;

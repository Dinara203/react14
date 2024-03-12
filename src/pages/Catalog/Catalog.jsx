import './Catalog.css'
import Catalog from '../../components/Catalog/Catalog'

export default function CatalogPage() {
    
    return(
        <div className="catalog">
            <div className="container">
                <div className="path">
                    <p className="path_name">Главная</p>
                    <p className="path_name">\</p>
                    <p className="path_name">Каталог</p>
                </div>
                

                

                <Catalog/>

            </div>
        </div>
    )
}
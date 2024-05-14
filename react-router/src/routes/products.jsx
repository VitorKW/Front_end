export default function Product(){
    const products = [
        {id: 1, name:'Uva', price: 10},
        {id: 2, name:'Maça', price: 15},
        {id: 3, name:'Laranja', price: 8},
    ]
    function Products(){
    return(

        <div>
            <h3>Produtos</h3>
            {products.map((prod) => (
                <ul key={prod.id} style={{listStyle: 'nome'}}>
                    <li>Nome: {prod.name}</li>
                    <li>Preço: {prod.price}</li>
                    <li><Link to={`/products/${prod.id}/EditForm`}>Mais Informações</Link></li>
                    <li></li>

                </ul>
            ))}
        </div>
    )
}}
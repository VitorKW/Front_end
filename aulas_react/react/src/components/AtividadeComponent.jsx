
function AtividadeComponent({products}){
    return(
       <div>
            <h2>Tabela de Produtos</h2>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Estoque (kg)</th>
                        <th >Ações</th>
                    </tr>
                </thead>
                <tbody>
                {products.map((prod) => (
                    <tr key={prod.id}>
                    <td>{prod.id}</td>
                    <td>{prod.name}</td>
                    <td>{prod.preco}</td>
                    <td>{prod.estoque}</td>
                    <td className="actions">
                <button>Editar</button>
                <button>Excluir</button>
            </td>
                    </tr>
                ))}

                    
                
                </tbody>
            </table>
                </div> 
    )

}

export default AtividadeComponent
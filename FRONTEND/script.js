
const apiUrl = "https://api.mercadolibre.com/sites/MLU/search?category=MLU1144";

function fetchAndDisplayProducts() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener datos de la API');
            }
            return response.json();
        })
        .then(data => {
            const products = data.results ;
            
            const tableBody = document.querySelector("#productTable tbody");
            tableBody.innerHTML = ""; 

            products.forEach(product => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${product.title || 'N/A'}</td>
                    <td>${product.price || 'N/A'}</td>
                    <td>${product.currency_id || 'N/A'}</td>
                    <td>${product.available_quantity || 'N/A'}</td>
                `;
                tableBody.appendChild(row);
            })
            sendProductsToBackend(products);
        })
        .catch(error => {
            console.error(error.message);
        });
}



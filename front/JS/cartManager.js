/**Gestion du panier, 
 * enregistrement d'un article dans le panier,
 * retrait d'un produit du panier et récupération de la liste du panier */

//création ou enregistrement d'un panier dans le local storage
export function saveCart(listCart){
    localStorage.setItem("listCart", JSON.stringify(listCart))
}

//récupération d'un panier depuis le local storage
export function getCart(){
    let listCart = localStorage.getItem("listCart");
    if(listCart == null){
        return [];
    } else {
        return JSON.parse(listCart);
    }
}

//Ajout d'un produit dans le panier
export function addToCart(product){
    let listCart = getCart();
    let findProduct = listCart.find(p => ((p.id == product.id)&&(p.color == product.color)))
    if(findProduct != undefined){
        findProduct.quantity += product.quantity;
    } else {
        listCart.push(product);
    }
    saveCart(listCart);
}

//retrait d'un produit du panier
export function removeFromCart(product){
    let listCart = getCart();
    listCart = listCart.filter(p => ((p.id != product.id) || (p.color !== product.color)));
    saveCart(listCart);
}



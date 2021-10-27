var flag1 = true;
do {
    alert("Bienvenido al sistema de inventario");
    let iterations = parseInt(prompt("Ingrese la cantidad de productos que desea registrar"));
    alert("Ingrese los productos");
    let inventory = RegisterInventory(iterations);
    alert("Ingrese los productos que desea agregar al carrito, si no desea un producto ingrese 0");
    let cart = AddToCart(inventory);
    alert("El carrito contiene los siguientes productos");
    let result = ShowCart(cart);
    alert("Realicemos la venta del carrito");
    let inventory2 = Sell(cart,inventory);
    alert("El inventario actualizado es el siguiente");
    console.log(inventory2);

    flag1 = confirm("¿Desea realizar otra operación?");
    
} while (flag1 == true);

function RegisterInventory(iterations) {
    let inventory = [];
    
    for (let i = 0; i < iterations; i++) {
        let items = {
            item: prompt("Ingrese el nombre del producto"),
            quantity: parseInt(prompt("Ingrese la cantidad de existencia del producto")),
            price: parseFloat(prompt("Ingrese el precio del producto"))
    
        }
        inventory.push(items);
    }
    return inventory;
}

function AddToCart(inventory) {
    let cart = [];
    let product = "Perro";
    let units = "Perro";
    let UnitPrice = 0;

        for (let i = 0; i < inventory.length; i++) {
            
            let items = {
                item: "",
                quantity: "",
                price: ""
            }
            let id = prompt("Ingrese el nombre del producto que desea agregar al carrito");
            while (id != inventory[i].item) {
                id = prompt("Producto incorecto, vuelvalo a ingresar");
            }
            if(id == inventory[i].item) {
                    product = inventory[i].item;
            } else {
                    alert("El producto no existe, se omitio de la lista del carrito");
            }
            units = parseInt(prompt("Ingrese la cantidad de productos que desea agregar al carrito"));
            while (units > inventory[i].quantity) {
                units = parseInt(prompt("La cantidad de productos que desea agregar excede a las existencias. Ingrese nuevamente la cantidad de productos que desea agregar al carrito"));
            }
            UnitPrice = parseFloat(inventory[i].price);
            items.item = product;
            items.quantity = units;
            items.price = inventory[i].price;
            
            cart.push(items);
                
        }
       
        
    
    return cart;
}    

function ShowCart(cart) {
    let result = cart
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].quantity * cart[i].price;
    }
    console.log(result); 
    console.log(total);
    return result;
}

function Sell(cart,inventory) {
    flag = true;
    flag = confirm("¿Desea vender los productos del carrito?");
    if (flag == true) {
        for (let i = 0; i < cart.length; i++) {
            for (let j = 0; j < inventory.length; j++) {
                if (cart[i].item == inventory[j].item) {
                    inventory[j].quantity = inventory[j].quantity - cart[i].quantity;
                }
            }
        }
        alert("El carrito se vendio correctamente");
        return inventory;
    }
    else {
        alert("El carrito no se vendio");
        return inventory;
    }

    
}
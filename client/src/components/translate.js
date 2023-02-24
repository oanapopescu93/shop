var words = {
    eng: {
        //home
        "about": "About",
        "about_us": "About us",
        "contact": "Contact",
        "page_not_exists": "Page doesn't exist",
        "back": "Back",
        "read_more": "Read more",
        "see_products": "See products",
        "men": "Men",
        "women": "Women",
        "children": "Children",
        "promo" : "Promo",
        "category": "Categorie",

        //Cart
        "cart": "Cart",
        "cart_empty": "Cart is empty",
        "order_summary": "Order summary",
        "subtotal": "Subtotal",
        "shipping": "Shipping",
        "promo_code": "Promo code",
        "total": "Total",
        "checkout": "Checkout",
        "apply_coupon": "Apply coupon",

        //checkout"
        "fill_field": "Please fill out this field",
        "firstname": "First name",
        "lastname": "Last name",
        "phone": "Phone",
        "email": "Email",
        "address": "Address",
        "country": "Country",
        "town_city": "Town/City",
        "county_state": "State",
        "postal_zip_code": "Zip/Postal",
        "payment_info": "Payment info",
        "cash_on_delivery": "cash on delivery",
        "pay_card": "pay with credit/debit card",
        "card_number": "Card number",
        "month": "Month",
        "year": "Year",  
        "cvv": "cvv",
        "billing_info": "Billing info",   
        "billing_info_same": "Billing address same as shipping",     

        "January": "January", 
        "February": "February", 
        "March": "March", 
        "April": "April", 
        "May": "May", 
        "June": "June", 
        "July": "July", 
        "August": "August", 
        "September": "September", 
        "October": "October", 
        "November": "November", 
        "December": "December", 
    },
    ro: {
        //home
        "about": "Despre",
        "about_us": "About noi",
        "contact": "Contact",
        "page_not_exists": "Pagina nu exista",
        "back": "Inapoi",        
        "read_more": "Citeste incontinuare",
        "see_products": "Vezi produsele", 
        "men": "Barbati",
        "women": "Femei",
        "children": "Copii",
        "promo" : "Promo",      
        "category": "Categorie",

        //Cart
        "cart": "Cos",
        "cart_empty": "Cosul este gol",
        "order_summary": "Sumar comanda",
        "subtotal": "Subtotal",
        "shipping": "Transport",
        "promo_code": "Cod promotional",
        "total": "Total",
        "checkout": "Finalizeaza comanda",
        "apply_coupon": "Aplica cupon",

        //checkout
        "customer_info": "Date client",
        "fill_field": "Va rog sa completati campul",
        "firstname": "Prenume",
        "lastname": "Nume",
        "phone": "Telefon",
        "email": "Email",
        "address": "Adresa",
        "country": "Tara",
        "town_city": "Oras",
        "county_state": "Judet",
        "postal_zip_code": "Cod Postal",
        "payment_info": "Plata",
        "cash_on_delivery": "plata ramburs",
        "pay_card": "card credit/debit",
        "card_number": "Numar card",
        "month": "Luna",
        "year": "An",
        "cvv": "cvv",
        "billing_info": "Date facturare",  
        "billing_info_same": "Adresa de facturare aceeasi ca si expedierea",  

        "January": "Ianuarie", 
        "February": "Februarie", 
        "March": "Martie", 
        "April": "Aprilie", 
        "May": "Mai", 
        "June": "Iunie", 
        "July": "Iulie", 
        "August": "August", 
        "September": "Septembrie", 
        "October": "Octombrie", 
        "November": "Noiembrie", 
        "December": "Decembrie", 
    }
}



export const translate = function (data){
    if(!data){
        return
    }
    let lang = data.lang ? data.lang : "eng"
    let info = data.info
    return words[lang][info]
}
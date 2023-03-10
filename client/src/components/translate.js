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
        "type": "Type",
        "search": "Search",

        //list
        "product_code": "Product code",
        "qty": "Qty",
        "size": "Size",
        "color": "Color",
        "remove_all": "Remove all",
        "continue_shopping": "Continue shopping",
        "ratings": "Rating", 
        "shirts": "Shirts",
        "pants": "Pants",
        "skirts": "Skirts",
        "coats": "Coats",
        "sport_shoes": "Sport shoes",
        "boots": "Boots",
        "sandals": "Sandals",
        "accesories": "Accesories",
        "clothes": "Clothes",
        "shoes": "Shoes",
        "sort": "Sort",
        "price_asc": "Price (ascendent)",
        "price_desc": "Price (descendent)",
        "no_products": "Nu exista produse",

        //product
        "add_to_cart": "Add to cart",
        "add_to_wishlist": "Add to wishlist",
        "description": "Description",
        "reviews": "Reviews",
        "no_reviews": "No reviews",
        "aditional_information": "Aditional information",
        "no_information": "No information",        

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

        //wishlist
        "wishlist": "Wishlist",
        "wishlist_empty": "Wishlist is empty",

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

        //sign
        "sign_in": "Sign in",
        "sign_up": "Sign up",
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
        "type": "Tip",
        "search": "Cauta",

        //list
        "product_code": "Cod produs",
        "qty": "Cant",
        "size": "Marime",
        "color": "Culoare",
        "remove_all": "Sterge cos",
        "continue_shopping": "Continua cumparaturile",
        "ratings": "Rating", 
        "shirts": "Camasi",
        "pants": "Pantaloni",
        "skirts": "Fuste",
        "coats": "Haine",
        "sport_shoes": "Pantofi sport",
        "boots": "Ghete/Cizme",
        "sandals": "Sandale",
        "accesories": "Accesorii",
        "clothes": "Haine",
        "shoes": "Incaltaminte",
        "sort": "Sorteaza",
        "price_asc": "Pret (ascendent)",
        "price_desc": "Pret (descendent)",
        "no_products": "Nu exista produse",

        //product
        "add_to_cart": "Adauga in cos",
        "add_to_wishlist": "Adauga in wishlist",
        "description": "Descriere",
        "reviews": "Review-uri",
        "no_reviews": "Nu exista review-uri",
        "aditional_information": "Informatii aditionale",
        "no_information": "Fara informatii",

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

        //wishlist
        "wishlist": "Wishlist",
        "wishlist_empty": "Wishlist este gol",

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

        //sign
        "sign_in": "Logare",
        "sign_up": "Inscriere",
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
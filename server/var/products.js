module.exports = Object.freeze({
    CATEGORIES: [
        {
            men:{
                clothes: {
                    shirts: {},
                    pants: {},
                    coats: {}
                },
                shoes: {
                    shoes: {},
                    sport: {},
                    boots: {},
                    sandals: {}
                },
                accesories: {},
            },
            women:{
                clothes: {
                    shirts: {},
                    pants: {},
                    coats: {},
                    skirts: {},
                },
                shoes: {
                    shoes: {},
                    sport: {},
                    boots: {},
                    sandals: {}
                },
                accesories: {},
            },
            children:{
                clothes: {
                    shirts: {},
                    pants: {},
                    coats: {},
                    skirts: {},
                },
                shoes: {
                    shoes: {},
                    sport: {},
                    boots: {},
                    sandals: {}
                },
                accesories: {},
            },
        },
    ],
    PRODUCTS: [
        {
            id: 1,
            title: "Product001",
            description_short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.",
            description_long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.",
            category:"men",
            subcategory:"clothes",
            type:"shirts",
            size:['S', 'M', 'L', 'XL', 'XXL', '3XL'],
            color:['red', 'green'],
            price: 11,
            discount:10,
            qty_store:11,
            stars: 1,
            url: "/img/products/product-1.jpg", 
        },
        {
            id: 2,
            title: "Product002",
            description_short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.",
            description_long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.",
            category:"men",
            subcategory:"clothes",
            type:"shirts",
            size:['XS', 'M', 'L', 'XL', 'XXL', '3XL'],
            color:['red', 'green'],
            price: 12,
            discount:0,
            qty_store:12,
            stars: 1.5,
            url: "/img/products/product-2.jpg", 
        },
        {
            id: 3,
            title: "Product003",
            description_short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.",
            description_long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.",
            category:"men",
            subcategory:"clothes",
            type:"shirts",
            size:['XS', 'S', 'L', 'XL', 'XXL', '3XL'],
            color:['green', 'blue'],
            price: 13,
            discount:0,
            qty_store:13,
            stars: 2,
            url: "/img/products/product-3.jpg", 
        },
        {
            id: 4,
            title: "Product004",
            description_short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.",
            description_long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.",
            category:"men",
            subcategory:"clothes",
            type:"pants",
            size:['XS', 'S', 'M', 'XL', 'XXL', '3XL'],
            color:['green', 'blue'],
            price: 14,
            discount:20,
            qty_store:14,
            stars: 2.5,
            url: "/img/products/product-4.jpg", 
        },
        {
            id: 5,
            title: "Product005",
            description_short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.",
            description_long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.",
            category:"men",
            subcategory:"clothes",
            type:"pants",
            size:['XS', 'S', 'M', 'L', 'XXL', '3XL'],
            color:['green', 'blue'],
            price: 15,
            discount:0,
            qty_store:15,
            stars: 3,
            url: "/img/products/product-5.jpg", 
        },
        {
            id: 6,
            title: "Product006",
            description_short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.",
            description_long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.",
            category:"men",
            subcategory:"clothes",
            type:"pants",
            size:['XS', 'S', 'M', 'L', 'XL', 'XXL', ],
            color:['red'],
            price: 16,
            discount:0,
            qty_store:16,
            stars: 4,
            url: "/img/products/product-6.jpg", 
        },
        {
            id: 7,
            title: "Product007",
            description_short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.",
            description_long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.",
            category:"men",
            subcategory:"clothes",
            type:"shirts",
            size:['S', 'M', 'L', 'XL', 'XXL', '3XL'],
            color:['red', 'green'],
            price: 11,
            discount:10,
            qty_store:11,
            stars: 1,
            url: "/img/products/product-1.jpg", 
        },
        {
            id: 8,
            title: "Product008",
            description_short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.",
            description_long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.",
            category:"men",
            subcategory:"clothes",
            type:"shirts",
            size:['XS', 'M', 'L', 'XL', 'XXL', '3XL'],
            color:['red', 'green'],
            price: 12,
            discount:0,
            qty_store:12,
            stars: 1.5,
            url: "/img/products/product-2.jpg", 
        },
        {
            id: 9,
            title: "Product009",
            description_short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.",
            description_long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.",
            category:"men",
            subcategory:"clothes",
            type:"shirts",
            size:['XS', 'S', 'L', 'XL', 'XXL', '3XL'],
            color:['green', 'blue'],
            price: 13,
            discount:0,
            qty_store:13,
            stars: 2,
            url: "/img/products/product-3.jpg", 
        },
        {
            id: 10,
            title: "Product0010",
            description_short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.",
            description_long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.",
            category:"men",
            subcategory:"clothes",
            type:"pants",
            size:['XS', 'S', 'M', 'XL', 'XXL', '3XL'],
            color:['green', 'blue'],
            price: 14,
            discount:20,
            qty_store:14,
            stars: 2.5,
            url: "/img/products/product-4.jpg", 
        },
        {
            id: 11,
            title: "Product0011",
            description_short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.",
            description_long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.",
            category:"men",
            subcategory:"clothes",
            type:"pants",
            size:['XS', 'S', 'M', 'L', 'XXL', '3XL'],
            color:['green', 'blue'],
            price: 15,
            discount:0,
            qty_store:15,
            stars: 3,
            url: "/img/products/product-5.jpg", 
        },
        {
            id: 12,
            title: "Product0012",
            description_short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.",
            description_long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.",
            category:"men",
            subcategory:"clothes",
            type:"pants",
            size:['XS', 'S', 'M', 'L', 'XL', 'XXL', ],
            color:['red'],
            price: 16,
            discount:0,
            qty_store:16,
            stars: 4,
            url: "/img/products/product-6.jpg", 
        },
        {
            id: 13,
            title: "Product0013",
            description_short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.",
            description_long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.",
            category:"men",
            subcategory:"clothes",
            type:"shirts",
            size:['S', 'M', 'L', 'XL', 'XXL', '3XL'],
            color:['red', 'green'],
            price: 11,
            discount:10,
            qty_store:11,
            stars: 1,
            url: "/img/products/product-1.jpg", 
        },
        {
            id: 14,
            title: "Product0014",
            description_short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.",
            description_long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.",
            category:"men",
            subcategory:"clothes",
            type:"shirts",
            size:['XS', 'M', 'L', 'XL', 'XXL', '3XL'],
            color:['red', 'green'],
            price: 12,
            discount:0,
            qty_store:12,
            stars: 1.5,
            url: "/img/products/product-2.jpg", 
        },
        {
            id: 15,
            title: "Product0015",
            description_short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.",
            description_long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.",
            category:"men",
            subcategory:"clothes",
            type:"shirts",
            size:['XS', 'S', 'L', 'XL', 'XXL', '3XL'],
            color:['green', 'blue'],
            price: 13,
            discount:0,
            qty_store:13,
            stars: 2,
            url: "/img/products/product-3.jpg", 
        },
        {
            id: 16,
            title: "Product0016",
            description_short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.",
            description_long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.",
            category:"men",
            subcategory:"clothes",
            type:"pants",
            size:['XS', 'S', 'M', 'XL', 'XXL', '3XL'],
            color:['green', 'blue'],
            price: 14,
            discount:20,
            qty_store:14,
            stars: 2.5,
            url: "/img/products/product-4.jpg", 
        },
        {
            id: 17,
            title: "Product0017",
            description_short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.",
            description_long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.",
            category:"men",
            subcategory:"clothes",
            type:"pants",
            size:['XS', 'S', 'M', 'L', 'XXL', '3XL'],
            color:['green', 'blue'],
            price: 15,
            discount:0,
            qty_store:15,
            stars: 3,
            url: "/img/products/product-5.jpg", 
        },
        {
            id: 18,
            title: "Product0018",
            description_short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.",
            description_long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.",
            category:"men",
            subcategory:"clothes",
            type:"pants",
            size:['XS', 'S', 'M', 'L', 'XL', 'XXL', ],
            color:['red'],
            price: 16,
            discount:0,
            qty_store:16,
            stars: 4,
            url: "/img/products/product-6.jpg", 
        },
        {
            id: 20,
            title: "Product0020",
            description_short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.",
            description_long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.",
            category:"men",
            subcategory:"clothes",
            type:"shirts",
            size:['S', 'M', 'L', 'XL', 'XXL', '3XL'],
            color:['red', 'green'],
            price: 11,
            discount:10,
            qty_store:11,
            stars: 1,
            url: "/img/products/product-1.jpg", 
        },
        {
            id: 21,
            title: "Product0021",
            description_short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.",
            description_long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.",
            category:"men",
            subcategory:"clothes",
            type:"shirts",
            size:['XS', 'M', 'L', 'XL', 'XXL', '3XL'],
            color:['red', 'green'],
            price: 12,
            discount:0,
            qty_store:12,
            stars: 1.5,
            url: "/img/products/product-2.jpg", 
        },
        {
            id: 22,
            title: "Product0022",
            description_short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.",
            description_long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.",
            category:"men",
            subcategory:"clothes",
            type:"shirts",
            size:['XS', 'S', 'L', 'XL', 'XXL', '3XL'],
            color:['green', 'blue'],
            price: 13,
            discount:0,
            qty_store:13,
            stars: 2,
            url: "/img/products/product-3.jpg", 
        },
        {
            id: 23,
            title: "Product0023",
            description_short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.",
            description_long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.",
            category:"men",
            subcategory:"clothes",
            type:"pants",
            size:['XS', 'S', 'M', 'XL', 'XXL', '3XL'],
            color:['green', 'blue'],
            price: 14,
            discount:20,
            qty_store:14,
            stars: 2.5,
            url: "/img/products/product-4.jpg", 
        },
        {
            id: 24,
            title: "Product0024",
            description_short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.",
            description_long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.",
            category:"men",
            subcategory:"clothes",
            type:"pants",
            size:['XS', 'S', 'M', 'L', 'XXL', '3XL'],
            color:['green', 'blue'],
            price: 15,
            discount:0,
            qty_store:15,
            stars: 3,
            url: "/img/products/product-5.jpg", 
        },
        {
            id: 25,
            title: "Product0025",
            description_short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.",
            description_long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.",
            category:"men",
            subcategory:"clothes",
            type:"pants",
            size:['XS', 'S', 'M', 'L', 'XL', 'XXL', ],
            color:['red'],
            price: 16,
            discount:0,
            qty_store:16,
            stars: 4,
            url: "/img/products/product-6.jpg", 
        },
    ],
    SHIPPING: [
        {name: "Curier01", price: 11},
        {name: "Curier02", price: 22},
        {name: "Curier03", price: 33},
    ],
    COUPONS: [
        {name: "coupon01", discount: 10},
        {name: "coupon02", discount: 20},
        {name: "coupon03", discount: 30},
    ],
    PROMO_PRODUCTS: [1, 2, 3, 4, 5, 6]
})
const fs = require('fs');

const products = require('../../../models/prove/week03/Product');

exports.getProducts = (req, res, next) => {
    const data = fs.readFileSync('data/prove/week03/products.json');
    const content = JSON.parse(data);

    for (const item of content) {
        const np = new products();
        Object.assign(np, item);
        np.save();
    }

    res.render('pages/prove/week03/pa03', {
        title: 'Prove Activity 03',
        path: '/pa03', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        products: products.fetchAll(),
    });
};

exports.getProduct = (req, res, next) => {
    const id = req.params.productId;
    let product = new products();
    products.findById(id, prod => {
        product = prod;
    });
    res.render('pages/prove/week03/product-detail', {
        title: 'Prove Activity 03',
        path: '/product-detail', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        product: product,
    });
};

exports.postSearchProducts = (req, res, next) => {
    search = req.body.input;

    let content = [];
    if (search === "")
        content = products.fetchAll();
    else {
        for (const item of products.fetchAll()) {
            for (const tag of item.tags)
                if (tag === search)
                    content.push(item);
        }
    }

    res.render('pages/prove/week03/pa03', {
        title: 'Prove Activity 03',
        path: '/pa03', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        products: content,
    });
};
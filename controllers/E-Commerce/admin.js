const Product = require('../../models/E-Commerce/product');

exports.getAddProduct = (req, res, next) => {
    res.render('pages/E-Commerce/admin/edit-product', {
        title: 'Add Product',
        path: '/eCommerce/admin/add-product',
        eCommerce: true,
        editing: false,
        isLoggedIn: req.session.isLoggedIn,
    });
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product({
        title: title,
        price: price,
        description: description,
        imageUrl: imageUrl,
        userId: req.session.user
    });
    product
        .save()
        .then(result => {
              // console.log(result);
              console.log('Created Product');
              res.redirect('/eCommerce/admin/products');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    Product.findById(prodId)
        .then(product => {
            if (!product) {
                return res.redirect('/');
            }
            res.render('pages/E-Commerce/admin/edit-product', {
                title: 'Edit Product',
                path: '/eCommerce/admin/edit-product',
                eCommerce: true,
                editing: editMode,
                product: product,
                isLoggedIn: req.session.isLoggedIn,
            });
        })
        .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description;

    Product.findById(prodId)
        .then(product => {
            product.title = updatedTitle;
            product.price = updatedPrice;
            product.description = updatedDesc;
            product.imageUrl = updatedImageUrl;
            return product.save();
    })
    .then(result => {
        console.log('UPDATED PRODUCT!');
        res.redirect('/eCommerce/admin/products');
    })
    .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
    Product.find()
    .then(products => {
        res.render('pages/E-Commerce/admin/products', {
            prods: products,
            title: 'Admin Products',
            eCommerce: true,
            path: '/eCommerce/admin/products',
            isLoggedIn: req.session.isLoggedIn,
        });
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    req.user
        .removeFromCart(prodId)
        .catch(err => console.log(err));
    Product.findByIdAndRemove(prodId)
        .then(() => {
            res.redirect('/eCommerce/admin/products');
        })
        .catch(err => console.log(err));
};

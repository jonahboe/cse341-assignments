const Product = require('../../models/E-Commerce/product');
const Order = require('../../models/E-Commerce/product');

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId)
        .then(product => {
            res.render('pages/E-Commerce/shop/product-detail', {
                product: product,
                title: product.title,
                eCommerce: true,
                path: '/eCommerce/products',
                isLoggedIn: req.session.isLoggedIn,
            });
        })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
    Product.find()
        .then(products => {
            res.render('pages/E-Commerce/shop/index', {
                prods: products,
                title: 'Shop',
                eCommerce: true,
                path: '/eCommerce/',
                isLoggedIn: req.session.isLoggedIn,
            });
        })
        .catch(err => {
          console.log(err);
        });
};

exports.getCart = (req, res, next) => {
    req.user
        .populate('cart.items.productId')
        .execPopulate()
        .then(user => {
            const products = user.cart.items;
            res.render('pages/E-Commerce/shop/cart', {
                path: '/eCommerce/cart',
                title: 'Your Cart',
                eCommerce: true,
                products: products,
                isLoggedIn: req.session.isLoggedIn,
            });
        })
        .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId)
        .then(product => {
            return req.user.addToCart(product);
        })
        .then(result => {
            res.redirect('/eCommerce/cart');
        });
};

exports.postCartDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    req.user
        .removeFromCart(prodId)
        .then(result => {
            res.redirect('/eCommerce/cart');
        })
        .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
    req.user
        .populate('cart.items.productId')
        .execPopulate()
        .then(user => {
            const products = user.cart.items.map(i => {
                return { quantity: i.quantity, product: { ...i.productId._doc } };
            });
            const order = new Order({
                user: {
                    name: req.user.email,
                    userId: req.user
                },
                products: products
            });
            return order.save();
        })
        .then(result => {
            return req.user.clearCart();
        })
        .then(() => {
            res.redirect('/eCommerce/orders');
        })
        .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
    Order.find({ 'user.userId': req.session.user._id })
        .then(orders => {
            res.render('pages/E-Commerce/shop/orders', {
                path: '/eCommerce/orders',
                pageTitle: 'Your Orders',
                orders: orders,
                isLoggedIn: req.session.isLoggedIn,
            });
        })
        .catch(err => console.log(err));
};

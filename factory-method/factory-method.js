var ConcreteProductA = /** @class */ (function () {
    function ConcreteProductA() {
    }
    ConcreteProductA.prototype.doSomething = function () {
        console.log('Product A do this');
    };
    return ConcreteProductA;
}());
var ConcreteProductB = /** @class */ (function () {
    function ConcreteProductB() {
    }
    ConcreteProductB.prototype.doSomething = function () {
        console.log('Product B do this');
    };
    return ConcreteProductB;
}());
var ProductFactory = /** @class */ (function () {
    function ProductFactory() {
    }
    ProductFactory.prototype.createProduct = function (name) {
        switch (name) {
            case 'product-a':
                return new ConcreteProductA();
            case 'product-b':
                return new ConcreteProductB();
            default:
                return null;
        }
    };
    return ProductFactory;
}());
(function main() {
    var factory = new ProductFactory();
    var product = factory.createProduct('product-a');
    product.doSomething();
})();

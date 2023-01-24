const OrderStatus = {};

OrderStatus.Unspecified = 0;
OrderStatus.Cart = 1;
OrderStatus.Submit = 2;
OrderStatus.Payed = 3;
OrderStatus.Confirmed = 4;
OrderStatus.Delivered = 5;

module.exports = OrderStatus;

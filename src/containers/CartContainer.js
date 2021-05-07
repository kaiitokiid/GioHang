import React, { Component } from 'react';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as MSG from '../constants/Message';
import { actChangeMessage, actDeleteProductItem, actDecreaseProductItem, actIncreaseProductItem } from '../actions/index';

class CartContainer extends Component {

    render() {
        var { cart } = this.props;
        return (
            <Cart>
                { this.showCartItem(cart)}
                { this.showTotalAmount(cart)}
            </Cart>
        );
    }

    showCartItem = cart => {
        var result = <tr><td>{MSG.MSG_CART_EMPTY}</td></tr>;
        var { onDeleteProductItem, onChangeMessage, onIncrease, onDecrease } = this.props;

        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProductItem={onDeleteProductItem}
                        onChangeMessage={onChangeMessage}
                        onIncrease={onIncrease}
                        onDecrease={onDecrease}
                    />
                );
            })
        }
        return result;
    }

    showTotalAmount = cart => {
        var result = null;
        var total = 0;
        if (cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity;
            }
            result = <CartResult total={total} />
        }
        return result;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired,
            }).isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductItem: (id) => {
            dispatch(actDeleteProductItem(id));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onIncrease: (id) => {
            dispatch(actIncreaseProductItem(id));
        },
        onDecrease: id => {
            dispatch(actDecreaseProductItem(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);

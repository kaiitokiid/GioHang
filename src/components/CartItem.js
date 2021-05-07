import React, { Component } from 'react';
import * as MSG from '../constants/Message';

class CartItem extends Component {


    render() {
        var { item } = this.props;
        return (
            <tr>
                <th scope="row">
                    <img src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"
                        alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{item.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
                            onClick={() => this.onDecrease(item.product.id)}
                        >
                            <a>—</a>
                        </label>
                        <label
                            className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
                            onClick={() => this.onIncrease(item.product.id)}
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{item.product.price * item.quantity}$</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="" data-original-title="Remove item"
                        onClick={() => this.onDeleteProductItem(item.product.id)}
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }

    onDeleteProductItem(id) {
        this.props.onDeleteProductItem(id);
        this.props.onChangeMessage(MSG.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    onIncrease(id) {
        this.props.onIncrease(id);
    }

    onDecrease(id) {
        this.props.onDecrease(id);
    }
}

export default CartItem;

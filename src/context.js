import React, { Component, createContext } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  componentDidMount = () => {
    this.setProducts();
  };

  // Getting new copy of items from data
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });

    this.setState(() => {
      return { products: tempProducts };
    });
  };

  // Get Product id
  getItemId = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  // Handle product details
  handleDetail = (id) => {
    const product = this.getItemId(id);

    this.setState(() => {
      return { detailProduct: product };
    });
  };

  // Add item to the cart
  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItemId(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        // console.log(this.state);
        this.addTotals();
      }
    );
  };

  // Display modal
  openModal = (id) => {
    const product = this.getItemId(id);

    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  // Close the modal
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  // Cart incremention
  increment = (id) => {
    let tempCart = [...this.state.cart];

    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => this.addTotals()
    );
  };

  // Cart decremention
  decrement = (id) => {
    let tempCart = [...this.state.cart];

    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;

      this.setState(
        () => {
          return {
            cart: [...tempCart],
          };
        },
        () => this.addTotals()
      );
    }
  };

  // Remove item from cart
  removeItem = (id) => {
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.products];

    tempCart = tempCart.filter((item) => item.id !== id);

    const index = tempProducts.indexOf(this.getItemId(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: tempCart,
          products: tempProducts,
        };
      },
      () => this.addTotals()
    );
  };

  // Clear items from cart
  clearCart = () => {
    this.setState(
      () => {
        return {
          cart: [],
        };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  // Add totals
  addTotals = () => {
    let tempSubTotal = 0;
    this.state.cart.map((item) => (tempSubTotal += item.total));
    const subTotal = parseFloat(tempSubTotal.toFixed(2));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const tempTotal = subTotal + tax;
    const total = parseFloat(tempTotal.toFixed(2));

    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

import React, { createContext, useMemo, useState } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = function(producto, cantidad) {
    setItems(function(prevItems) {
      const existente = prevItems.find(function(item) {
        return item.id === producto.id;
      });

      if (existente) {
        return prevItems.map(function(item) {
          if (item.id !== producto.id) {
            return item;
          }
          return {
            ...item,
            cantidad: item.cantidad + cantidad
          };
        });
      }

      return [...prevItems, { ...producto, cantidad }];
    });
  };

  const removeItem = function(id) {
    setItems(function(prevItems) {
      return prevItems.filter(function(item) {
        return item.id !== id;
      });
    });
  };

  const clear = function() {
    setItems([]);
  };

  const totalItems = useMemo(function() {
    return items.reduce(function(acc, item) {
      return acc + item.cantidad;
    }, 0);
  }, [items]);

  const totalPrice = useMemo(function() {
    return items.reduce(function(acc, item) {
      return acc + item.precio * item.cantidad;
    }, 0);
  }, [items]);

  const value = {
    items,
    addItem,
    removeItem,
    clear,
    totalItems,
    totalPrice
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };

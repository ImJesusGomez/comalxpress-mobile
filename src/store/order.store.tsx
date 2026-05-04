import { createContext, useState, ReactNode, useContext } from 'react';
import { ProductToOrder } from '../interfaces/product-to-order.interface';
import { TemporalOrder } from '../interfaces/temporal-order.interface';
import { appStorage } from './app.store';

interface OrderState {
  temporalOrder: TemporalOrder;
  addOrder: (order: ProductToOrder) => void;
  clearOrder: () => void;
}

const OrderContext = createContext<OrderState | null>(null);

export const OrderProvider = ({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element => {
  const [temporalOrder, setTemporalOrder] = useState<TemporalOrder>(() => {
    const orderSaved = appStorage.getString('order');
    return orderSaved ? JSON.parse(orderSaved) : { products: [] };
  });

  const addOrder = (order: ProductToOrder) => {
    setTemporalOrder(prev => {
      const updated = {
        products: [...prev.products, order],
      };

      appStorage.set('order', JSON.stringify(updated));
      return updated;
    });
  };

  const clearOrder = () => {
    const emptyOrder = { products: [] };

    setTemporalOrder(emptyOrder);
    appStorage.set('order', JSON.stringify(emptyOrder));
  };

  return (
    <OrderContext.Provider value={{ temporalOrder, addOrder, clearOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error('useOrder debe usarse dentro de OrderProvider');
  }

  return context;
};

import { OrderRequest } from '../../interfaces/order.request.interface';
import { TemporalOrder } from '../../interfaces/temporal-order.interface';

export const mapTemporalOrderToRequest = (
  temporalOrder: TemporalOrder,
): OrderRequest => {
  return {
    items: temporalOrder.products.map(p => ({
      productId: p.product.id,
      quantity: p.quantity,
      ...(p.extras?.length ? { extras: p.extras } : {}),
      ...(p.notes?.trim() ? { notes: p.notes } : {}),
    })),
  };
};

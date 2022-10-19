import create from 'zustand';
import { persist } from 'zustand/middleware';
import {
  AddToCartProps,
  CartContentProps,
  UpdateCartInitialStateProps,
  UpdateCartProps,
  useCartProps,
} from '../types/context';

export const useCart = create(
  persist(
    (set) => ({
      total: 0,
      quantity: 0,
      cartContent: [],

      addTocart: (params: AddToCartProps) => {
        set((state: UpdateCartInitialStateProps) => ({
          quantity: state.quantity + 1,
          total: state.total + parseFloat(params.price),
          cartContent: [...state.cartContent, params],
        }));
      },

      updateCart: (params: UpdateCartProps, getCart: CartContentProps) => {
        set((state: UpdateCartInitialStateProps) => ({
          quantity: state.quantity + 1,
          total: state.total + parseFloat(params.price),
          cartContent: getCart,
        }));
      },

      removeFromCart: (params: useCartProps) =>
        set((state: UpdateCartInitialStateProps) => ({
          total: state.total - params.price * params.quantity,
          quantity: state.quantity - params.quantity,
          cartContent: state.cartContent.filter(
            (item: UpdateCartInitialStateProps) => item.slug !== params.slug
          ),
        })),

      clearCart: () =>
        set({
          total: 0,
          quantity: 0,
          cartContent: [],
        }),
    }),
    { name: 'cart' }
  )
);

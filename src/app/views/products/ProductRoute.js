import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const ProductList = Loadable(lazy(() => import('./ProductList')));
const AddProduct = Loadable(lazy(() => import('./ProductAdd')));
const EditProduct = Loadable(lazy(() =>import('./ProductEdit')));


const productsRoutes = [
  {
    path: '/product/list',
    element: <ProductList />,
  },
  {
    path: '/product/add',
    element: <AddProduct />,
  },
  {
    path: '/product/edit/:id',
    element: <AddProduct />,
  },
  
];

export default productsRoutes;

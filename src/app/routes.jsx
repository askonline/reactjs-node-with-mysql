import AuthGuard from 'app/auth/AuthGuard';
import chartsRoute from 'app/views/charts/ChartsRoute';
import dashboardRoutes from 'app/views/dashboard/DashboardRoutes';
import materialRoutes from 'app/views/material-kit/MaterialRoutes';
import NotFound from 'app/views/sessions/NotFound';
import sessionRoutes from 'app/views/sessions/SessionRoutes';
import { Navigate } from 'react-router-dom';
import MatxLayout from './components/MatxLayout/MatxLayout';
import productRoutes from 'app/views/products/ProductRoute';
import categoryRoutes from 'app/views/category/CategoryRoute';
import modelRoutes from 'app/views/model/ModelRoute';
import variableRoutes from 'app/views/variable/VariableRoute'
import eventsRoutes from 'app/views/events/EventsRoute'

const routes = [ 
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
              ...dashboardRoutes,
              ...chartsRoute,
              ...materialRoutes,
              ...productRoutes,
              ...categoryRoutes,
              ...modelRoutes,
              ...variableRoutes,
              ...eventsRoutes
            ],
  },
  ...sessionRoutes,
  
  { path: '/', element: <Navigate to="dashboard/default" /> },
  { path: '*', element: <NotFound /> }, 
];

export default routes;

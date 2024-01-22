import { Outlet, useLocation } from 'react-router-dom';

export default function MainLayout() {
  const location = useLocation();

  const getBackgroundStyle = () => {
    const routeStyles = {
      '/': { backgroundImage: `url(../public/MainBg.avif)`, backgroundSize: 'cover',  backgroundPosition: 'center'  },
      '/Questions': { backgroundImage: `url(../public/QuestionsBg.jpeg)`, backgroundSize: 'cover' ,  backgroundPosition: 'center' },
    };

    const currentRouteStyle = routeStyles[location.pathname] || {};
    return { ...currentRouteStyle, minHeight: '100vh' };
  };

  return (
    <div style={getBackgroundStyle()}>
      <Outlet />
    </div>
  );
}

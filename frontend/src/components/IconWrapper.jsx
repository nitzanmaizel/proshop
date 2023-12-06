import React from 'react';
import { FaShoppingCart, FaUser, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const mapToIcon = {
  cart: (props) => <FaShoppingCart {...props} />,
  user: (props) => <FaUser {...props} />,
  star: (props) => <FaRegStar {...props} />,
  starHalf: (props) => <FaStarHalfAlt {...props} />,
  starFull: (props) => <FaStar {...props} />,
};

const IconWrapper = ({ type, size = 20, color = '#000', ...props }) => {
  const IconComponent = mapToIcon[type];

  if (!IconComponent) {
    return <div>Icon Doesn't exist</div>;
  }

  return <IconComponent size={size} color={color} {...props} />;
};

export default IconWrapper;

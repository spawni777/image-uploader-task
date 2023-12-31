import { ReactElement } from 'react';

type Props = {
  icon: 'upload' | 'check' | 'cross';
  iconColor: `#${string}`;
}

const ButtonIcon = ({icon, iconColor}: Props) => {
  let iconComponent: ReactElement;

  switch (icon) {
    case 'upload':
      iconComponent = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6.99996 18C5.75223 18 4.55561 17.5258 3.67334 16.6819C2.79107 15.838 2.29541 14.6934 2.29541 13.5C2.29541 12.3065 2.79107 11.1619 3.67334 10.318C4.55561 9.47406 5.75223 8.99995 6.99996 8.99995C7.29464 7.68713 8.15672 6.53343 9.39654 5.79267C10.0104 5.42587 10.6986 5.1715 11.4217 5.04406C12.1449 4.91663 12.8888 4.91863 13.6111 5.04995C14.3333 5.18127 15.0198 5.43934 15.6312 5.80943C16.2427 6.17952 16.7672 6.65437 17.1747 7.20688C17.5823 7.75939 17.8649 8.37873 18.0065 9.02955C18.1481 9.68036 18.1459 10.3499 18 11H19C19.9282 11 20.8185 11.3687 21.4748 12.0251C22.1312 12.6815 22.5 13.5717 22.5 14.5C22.5 15.4282 22.1312 16.3184 21.4748 16.9748C20.8185 17.6312 19.9282 18 19 18H18" stroke="#3D293F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 15L12 12M12 12L15 15M12 12V21" stroke="#3D293F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
      break;
    case 'check':
      iconComponent = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 12L10 17L20 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
      break;
    default:
      iconComponent = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill={iconColor} d="M18 6L6 18M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );

  }


  return (iconComponent)
}

export default ButtonIcon;

import { BsExclamationCircleFill } from 'react-icons/bs';
import { FaCircleNotch } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';
import { GoSignIn, GoSignOut } from 'react-icons/go';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { MdSubscriptions } from 'react-icons/md';
import { RiMoneyCnyCircleFill } from 'react-icons/ri';

const iconTypes = [
  'add',
  'money-circle',
  'money-stack',
  'signin',
  'signout',
  'subscription',
  'circle-notch',
  'exclamation-circle',
] as const;
interface Props {
  iconType: typeof iconTypes[number];
  color?: string;
  size?: string | number;
}

const ReactIcon: React.VFC<Props> = ({ iconType, ...rest }) => {
  switch (iconType) {
    case 'add':
      return <IoMdAddCircleOutline {...rest} />;
    case 'money-circle':
      return <RiMoneyCnyCircleFill {...rest} />;
    case 'money-stack':
      return <GiMoneyStack {...rest} />;
    case 'signin':
      return <GoSignIn {...rest} />;
    case 'signout':
      return <GoSignOut {...rest} />;
    case 'subscription':
      return <MdSubscriptions {...rest} />;
    case 'circle-notch':
      return <FaCircleNotch {...rest} />;
    case 'exclamation-circle':
      return <BsExclamationCircleFill {...rest} />;
    default:
      // assign iconType to never type variable to check exhaustive
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const _exhaustiveCheck: never = iconType;
      return null;
  }
};

export { ReactIcon };

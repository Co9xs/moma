import { CreditCard } from '../../types';
import { CreditCardInfo } from '../CreditCard';
import { Button } from '../Button';
import { ReactIcon } from '../ReactIcon';

interface Props {
  creditCards: CreditCard[];
}

export const CreditCardList: React.VFC<Props> = ({ creditCards }) => {
  return (
    <div className='grid grid-flow-row grid-col-1 gap-6 auto-rows-min'>
      <div className='flex flex-row justify-between items-center'>
        <h2 className='text-3xl font-bold text-black-200'>クレジットカード</h2>
        <Button icon={<ReactIcon iconType='add' />} text='追加' />
      </div>
      {creditCards.map((creditCard) => (
        <CreditCardInfo key={creditCard.id} creditCard={creditCard} />
      ))}
    </div>
  );
};

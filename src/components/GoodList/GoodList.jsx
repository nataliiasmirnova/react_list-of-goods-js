// import { GoodCard } from '../GoodCard';
// import './GoodList.scss'

export const GoodList = ({ goods }) => (
  <div className="GoodList">
    {goods.map(good => (
      <ul>
        <li data-cy="Good">{good}</li>
      </ul>
    ))}
  </div>
);

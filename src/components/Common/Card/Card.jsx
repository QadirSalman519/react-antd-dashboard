import { Card } from "antd";
import style from "./Card.module.css"

const StatCard = ({ title, value, color, icon }) => {
  return (
    <Card>
      <div className={style['main-card']}>
        <div>
          <div className={style['card-title']}>{title}</div>
          <h2 className={style['card-text']} style={{ color }}>{value}</h2>
        </div>
        <div className={style['card-icon']} style={{ color }}>{icon}</div>
      </div>
    </Card>
  );
};

export default StatCard;

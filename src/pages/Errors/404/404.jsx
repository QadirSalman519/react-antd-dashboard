import { Card, Button } from "antd";
import style from "./404.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={style["main-form"]}>
      <Card className={style["card"]} bordered={false}>
        <div className={style["logo"]}>
          <img src="/images/logo.png" alt="Softnox Logo" />
        </div>

        <div className={style["text"]}>
          <h1>404</h1>
          <p>Oops! The page you are looking for doesn’t exist.</p>
        </div>

        <div className={style["actions"]}>
          <Link to="/dashboard">
            <Button type="primary" className={style["btn-green"]} block>
              Go to Dashboard
            </Button>
          </Link>
          <Link to="/login">
            <Button className={style["btn-outline"]} block>
              Back to Login
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;

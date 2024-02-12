import logo from "../../assets/img/logo.png";

type Props = {
  title: string;
  subtitle: string;
};

const Logo = ({ subtitle, title }: Props) => {
  return (
    <>
      <div className="logo_container">
        <img className="logo_img" src={logo} />
        <span className="logo_title">{title}</span>
      </div>
      <span className="logo_subtitle">{subtitle}</span>
    </>
  );
};

export default Logo;

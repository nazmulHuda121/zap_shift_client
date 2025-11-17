import logo from '../assets/logo.png';

const Logo = () => {
  return (
    <>
      <div className="flex items-end -ms-3">
        <img src={logo} alt="logo" />
        <p className="text-3xl font-extrabold">ZapShift</p>
      </div>
    </>
  );
};

export default Logo;

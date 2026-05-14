interface Props {
    logo: string,
    info: string,
    color: string
}

function InfoCapsule({ logo, info, color}:Props) {
  return (
    <div className={`mt-10 border-2 ${color} p-5 w-fit m-auto rounded-2xl flex items-center relative`}>
      <img
        src={logo}
        className={`w-16 h-16 absolute left-0 top-0 rounded-l-xl ${color} border-2`}
      />
      <p className="text-center pl-15">{info}</p>
    </div>
  );
}

export default InfoCapsule;

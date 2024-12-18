// import RegisterForm from "./components/RegisterForm";

// const Register = () => {
//   return <RegisterForm />;
// };

// export default Register;

import RegisterForm from "./components/RegisterForm";

const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="mx-auto max-w-sm w-full">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;

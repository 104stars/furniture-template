import LoginBackground from "./login-background/login-background";
import LoginForm from "./login-form/login-form";

export default function Login() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <LoginBackground className="sticky ">
        <LoginForm />
      </LoginBackground>
    </div>
  );
}

import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({request}) {
 const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';

  const data = await request.form();
  const authData = {
      email: data.get('email'),
      password: data.get('password')
  };

  fetch('http://localhost:8080/login'+ mode);
}
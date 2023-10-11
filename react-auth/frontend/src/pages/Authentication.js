import { json } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({request}) {
 const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';

if ( mode !=='login' && mode !== 'signup') {
  throw  json ({message: 'Unsuported mode.'}, {status: 422})
}

  const data = await request.form();
  const authData = {
      email: data.get('email'),
      password: data.get('password')
  };

   const respomse = fetch('http://localhost:8080/login'+ mode, {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(authData)
   });
}
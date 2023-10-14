import { json, redirect } from 'react-router-dom';
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

   const response = fetch('http://localhost:8080/login'+ mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(authData)
   });

   if (response.status === 422 || response.status === 401) {
    return response;
   }

   if (!response.ok) {
    throw json({ message: 'Could not authenicate user.' } , {status:500})
   }

   const restData = await response.json();
   const token = restData.token;

   localStorage.setItem('token', token);

   return redirect('/');
}
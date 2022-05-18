import { GetServerSideProps } from 'next';
import { getSession, signIn, useSession } from 'next-auth/react';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if(session){
    return{
      redirect: {
        destination: '/app',
        permanent: false
      }
    }
  }

  return {
    props: {

    }
  }
}

export default function SignIn(){

  function handleSignIn(){
    signIn('github')
  }

  return (
    <>
      <h1>Hello world!</h1>
      <button onClick={handleSignIn}>Login with Github</button>
    </>  
  );
}
import { NextPage } from 'next';

const ReadCookiePage: NextPage = ({ userPreference }) => {
  return (
    <div>
      <p>User Preference: {userPreference}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  // Read the user preference cookie from the request headers
  const userPreference = context.req.headers.cookie
    ?.split(';')
    .find(cookie => cookie.trim().startsWith('userPreference='))
    ?.split('=')[1];

  return {
    props: {
      userPreference: userPreference || 'Not set',
    },
  };
}

export default ReadCookiePage;

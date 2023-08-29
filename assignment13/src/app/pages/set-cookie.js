import { NextPage } from 'next';
import { NextResponse } from 'next/server';

const SetCookiePage: NextPage = () => {
  const handleClick = () => {
    const userPreference = 'theme: dark';
    // Set the user preference cookie
    const response = new NextResponse();
    response.setHeader('Set-Cookie', `userPreference=${userPreference}; Path=/`);
    response.send();
  };

  return (
    <div>
      <button onClick={handleClick}>Set User Preference Cookie</button>
    </div>
  );
};

export default SetCookiePage;

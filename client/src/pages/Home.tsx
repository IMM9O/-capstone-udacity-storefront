import AppLayout from '../containers/Layout/Layout';

function Home() {
  return (
    <AppLayout>
      <h1>Home page</h1>
      <ul>
        <li>
          If you want to test the app go to products page first if you
          are not login you will not see add product button
        </li>
        <li>
          You can register and you will redirect back to home page and
          logout option will appear and signin and signup will
          disappear
        </li>
        <li>
          If you are authenticated user you can see Add product button
          on products page
        </li>
      </ul>
    </AppLayout>
  );
}

export default Home;

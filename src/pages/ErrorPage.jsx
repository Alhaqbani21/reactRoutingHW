import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <section class=" bg-gray-900 h-[100vh]">
      <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight text-primary lg:text-9xl">
            404
          </h1>
          <p class="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
            Page Not Found.
          </p>
          <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry something went wrong.
          </p>
          <Link to={'./'}>
            <button className="btn btn-primary">Back to menu</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ErrorPage;

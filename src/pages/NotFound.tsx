import { useEffect, useState } from "react";

function RedirectingPage() {
  const [secondsLeft, setSecondsLeft] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((seconds) => seconds - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      window.location.replace("/");
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <h1>Redirecting...</h1>
      <p>You will be redirected to the home page in {secondsLeft} seconds.</p>
    </div>
  );
}

export function NotFound() {
  return (
    <div className="container">
      <h1>404 Not Found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
      <RedirectingPage />
    </div>
  );
}

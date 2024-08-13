import { useState } from 'react';
import { NextResponse } from 'next/server';

interface LoginButtonProps {
  buttonTitle: string;
}

export default function LoginButton({ buttonTitle }: LoginButtonProps) {
  const [data, setData] = useState<NextResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('api/authentication', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result: NextResponse = await response.json();
      console.log(result.body);
      console.log(result);
      setData(result);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="w-full bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 mt-6"
        disabled={loading}
      >
        {loading ? 'Sending...' : buttonTitle}
      </button>
      {error && <p>Error: {error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

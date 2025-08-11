'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      credentials: 'include', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
        // console.log('logged in') 
        // alert('Succesful login');
        // console.log(res);
      router.push('/dashboard'); // or your default protected page
    } else {
      alert('Invalid credentials');
    }
  };

  // const goDashboard = () => {
  //   router.push('/dashboard');
  // };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: '2rem' }}>
      <h2>Login</h2>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
      <button onClick={handleLogin}>Login</button>

      {/* <button onClick={goDashboard}>Go to Dashboard</button> */}
    </div>
    
  );
}

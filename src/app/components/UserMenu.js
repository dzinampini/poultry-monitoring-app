
'use client';

import { useRouter } from 'next/navigation';

export default function UserMenu({ user }) {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await fetch('/api/logout', {
      method: 'POST',
      credentials: 'include',
    });

    if (res.ok) {
      router.push('/');  // redirect after logout
    } else {
      alert('Something went wrong, please try again');
    }
  };

  return (
    <div className="dropdown">
      <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
        {user.first_name} {user.last_name}
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">My Profile</a></li>
        <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
      </ul>
    </div>
  );
}

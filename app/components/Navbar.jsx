import Link from 'next/link';
import '../CSS/Navbar.css';
export default function Navbar() {
  return (
    <nav>
      <h2>Logo</h2>
      <ul>
        <li>
          <Link href="/AboutUS">
            <p>About Us</p>
          </Link>
        </li>
        <li>
          <Link href="/Services">
            <p>Services</p>
          </Link>
        </li>
        <li>
          <Link href="/ContactUs">
            <p>Contacts</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}


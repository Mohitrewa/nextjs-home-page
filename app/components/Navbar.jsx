import Link from 'next/link';
import '../CSS/Navbar.css';
export default function Navbar() {
  return (
    <nav>
      <h2>Logo</h2>
      <ul>
        <li>
          <Link href="/about">
            <p>About Us</p>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <p>Services</p>
          </Link>
        </li>
        <li>
          <Link href="/contacts">
            <p>Contacts</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

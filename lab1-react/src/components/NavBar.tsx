export default function NavBar() {
  return (
    <nav className="flex justify-between p-4 bg-blue-900 text-white">
      <img src="/logo.png" alt="Logo" className="h-8" />
      <ul className="flex gap-4">
        <li><a href="#">Employees</a></li>
        <li><a href="#">Organization</a></li>
      </ul>
    </nav>
  );
}

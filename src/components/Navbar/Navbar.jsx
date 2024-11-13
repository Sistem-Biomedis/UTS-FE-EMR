import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-xl font-semibold"><a href="/">Rekam Medis</a></div>
        <div>
        <Link
            to="/admin-rekammedis" // Sesuaikan dengan path untuk login
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Tambah Rekam Medis
          </Link>
        </div>
        <div>
        <Link
            to="/admin-dokter" // Sesuaikan dengan path untuk login
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Tambah Dokter
          </Link>
        </div>
        <div>
          <Link
            to="/admin-pasien" // Sesuaikan dengan path untuk login
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Tambah Pasien
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

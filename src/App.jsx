// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Login from "./pages/login";
// import Dashboard from "./pages/dashboard";
// import Home from "./pages/home";
// import Pengguna from "./pages/pengguna";
// import Profil from "./pages/profil";
// import PenggunaCreate from "./pages/penggunacreate";
// import PenggunaUpdate from "./pages/penggunaupdate";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />}>
//           <Route index element={<Home />} />
//           <Route path="pengguna" element={<Pengguna />} />
//           <Route path="pengguna/tambah" element={<PenggunaCreate />} />
//           <Route path="pengguna/update/:id" element={<PenggunaUpdate />} />
//           <Route path="profil" element={<Profil />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";

// // Perbaikan rute import: langsung mengarah ke file di dalam folder pages
// import Login from "./pages/login";
// import Dashboard from "./pages/dashboard";
// import Pengguna from "./pages/pengguna";
// import Profil from "./pages/profil";
// import PenggunaCreate from "./pages/penggunacreate";
// import PenggunaUpdate from "./pages/penggunaupdate";
// import Home from "./pages/home"; // Menggunakan file home.jsx yang ada di folder pages kamu sebagai tampilan utama dashboard

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Halaman Login */}
//         <Route path="/" element={<Login />} />
        
//         {/* Halaman Dashboard dan Sub-Rutenya */}
//         <Route path="/dashboard" element={<Dashboard />}>
//           {/* Menggunakan <Home /> sebagai komponen default (index) saat masuk dashboard */}
//           <Route index element={<Home />} /> 
          
//           <Route path="pengguna" element={<Pengguna />} />
//           <Route path="pengguna/tambah" element={<PenggunaCreate />} />
//           <Route path="pengguna/edit/:id" element={<PenggunaUpdate />} />
//           <Route path="profil" element={<Profil />} />
          
//           {/* Catatan: Rute Produk dinonaktifkan sementara sampai file produk.jsx kamu buat */}
//           {/* <Route path="produk" element={<Produk />} /> */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Login from "./pages/login";
// import Register from "./pages/register";
// import Dashboard from "./pages/dashboard";
// import Home from "./pages/home";
// import Profil from "./pages/profil";
// import Pengguna from "./pages/pengguna";
// import PenggunaCreate from "./pages/penggunacreate";
// import PenggunaUpdate from "./pages/penggunaupdate";
// import Perangkat from "./pages/perangkat";
// import PerangkatCreate from "./pages/perangkatcreate";
// import PerangkatUpdate from "./pages/perangkatupdate";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />}>
//           <Route index element={<Home />} />
//           <Route path="pengguna" element={<Pengguna />} />
//           <Route path="pengguna/tambah" element={<PenggunaCreate />} />
//           <Route path="pengguna/update/:id" element={<PenggunaUpdate />} />
//           <Route path="perangkat" element={<Perangkat />} />
//           <Route path="perangkat/tambah" element={<PerangkatCreate />} />
//           <Route path="perangkat/update/:id" element={<PerangkatUpdate />} />
//           <Route path="profil" element={<Profil />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Profil from "./pages/profil";
import Pengguna from "./pages/pengguna";
import PenggunaCreate from "./pages/penggunacreate";
import PenggunaUpdate from "./pages/penggunaupdate";

// IMPORT Modul Karyawan Baru
import Karyawan from "./pages/karyawan"; 
import KaryawanCreate from "./pages/insertkaryawan"; // Mengarah ke file insertkaryawan.jsx Anda
import KaryawanUpdate from "./pages/karyawanupdate"; 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="pengguna" element={<Pengguna />} />
          <Route path="pengguna/tambah" element={<PenggunaCreate />} />
          <Route path="pengguna/update/:id" element={<PenggunaUpdate />} />
          
          {/* ROUTE MODUL KARYAWAN */}
          <Route path="karyawan" element={<Karyawan />} />
          <Route path="karyawan/create" element={<KaryawanCreate />} />
          <Route path="karyawan/update/:id" element={<KaryawanUpdate />} />

          <Route path="profil" element={<Profil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
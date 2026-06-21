// import { Box, Button, Card, CardBody, CardHeader, CardTitle, Input, Text } from "@chakra-ui/react";
// import { Toaster } from "../components/ui/toaster";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { TampilPesan } from "../components/ui/services";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const KaryawanUpdate = () => {
//     const navigate = useNavigate();
//     const { id } = useParams(); // Mengambil idKaryawan dari URL rute

//     const [namaKaryawan, setNamaKaryawan] = useState("");
//     const [jabatanKaryawan, setJabatanKaryawan] = useState("");
//     const [posisiKaryawan, setPosisiKaryawan] = useState("");

//     // Mengambil data spesifik berdasarkan list semua karyawan aktif
//     const selectSatuKaryawan = async () => {
//         const url = "http://localhost/api/readkaryawan.php";

//         try {
//             const res = await axios.get(url);
//             if (res.data.STATUS === "BERHASIL") {
//                 // Cari data yang idKaryawan cocok dengan parameter URL
//                 const ditemukan = res.data.DATA.find(k => k.idKaryawan == id);
//                 if (ditemukan) {
//                     setNamaKaryawan(ditemukan.namaKaryawan);
//                     setJabatanKaryawan(ditemukan.jabatanKaryawan);
//                     setPosisiKaryawan(ditemukan.posisiKaryawan);
//                 } else {
//                     TampilPesan("Info", "Data karyawan tidak ditemukan!");
//                 }
//             }
//         } catch (error) {
//             console.log(error);
//             TampilPesan("Info", "Gagal mengambil data dari server!");
//         }
//     };

//     const handleUpdate = async () => {
//         const url = "http://localhost/api/updatekaryawan.php";
//         const body = { 
//             nama_karyawan: namaKaryawan, 
//             jabatan_karyawan: jabatanKaryawan, 
//             posisi_karyawan: posisiKaryawan, 
//             id_karyawan: id 
//         };

//         if (namaKaryawan.trim() === "" || jabatanKaryawan.trim() === "" || posisiKaryawan.trim() === "") {
//             TampilPesan("Info", "Semua kolom form harus diisi!");
//             return;
//         }

//         try {
//             const res = await axios.post(url, body);

//             if (res.data.STATUS === "BERHASIL") {
//                 navigate("/dashboard/karyawan");
//                 TampilPesan("Info", "Data karyawan berhasil diupdate!");
//             } else {
//                 TampilPesan("Info", res.data.PESAN || "Gagal mengupdate data!");
//             }
//         } catch (error) {
//             console.error(error);
//             TampilPesan("Info", "Terjadi kesalahan koneksi.");
//         }
//     };

//     useEffect(() => {
//         selectSatuKaryawan();
//     }, []);

//     return (
//         <Box
//             display="flex"
//             flexDirection="column"
//             width="100dvw"
//             height="100dvh"
//             justifyContent="center"
//             alignItems="center"
//         >
//             <Toaster />
//             <Card.Root width="50dvw" shadowColor="bg.emphasized" shadow="lg">
//                 <CardHeader>
//                     <CardTitle>
//                         <Text>Form Ubah Data Karyawan</Text>
//                     </CardTitle>
//                 </CardHeader>
//                 <CardBody gapY="10px">
//                     <Input 
//                         placeholder="Nama Karyawan" 
//                         type="text" 
//                         value={namaKaryawan} 
//                         onChange={(e) => setNamaKaryawan(e.target.value)} 
//                     />
//                     <Input 
//                         placeholder="Jabatan" 
//                         type="text" 
//                         value={jabatanKaryawan} 
//                         onChange={(e) => setJabatanKaryawan(e.target.value)} 
//                     />
//                     <Input 
//                         placeholder="Posisi / Divisi" 
//                         type="text" 
//                         value={posisiKaryawan} 
//                         onChange={(e) => setPosisiKaryawan(e.target.value)} 
//                     />

//                     <Button
//                         backgroundColor="teal"
//                         color="white"
//                         borderRadius="10px"
//                         onClick={handleUpdate}
//                     >
//                         <Text>Update Karyawan</Text>
//                     </Button>
//                     <Button
//                         as={Link}
//                         to="/dashboard/karyawan"
//                         borderRadius="10px"
//                         variant="outline"
//                     >
//                         <Text>Kembali</Text>
//                     </Button>
//                 </CardBody>
//             </Card.Root>
//         </Box>
//     );
// };

// export default KaryawanUpdate;

import { Box, Button, Card, CardBody, CardHeader, CardTitle, Input, NativeSelect, Text } from "@chakra-ui/react";
import { Toaster } from "../components/ui/toaster";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TampilPesan } from "../components/ui/services";
import { useEffect, useState } from "react";
import axios from "axios";

const KaryawanUpdate = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [namaKaryawan, setNamaKaryawan] = useState("");
    const [jabatanKaryawan, setJabatanKaryawan] = useState("");
    const [posisiKaryawan, setPosisiKaryawan] = useState("");

    // Opsi dropdown (pastikan sama dengan di Insert)
    const jabatanOptions = ["DIREKTUR", "CEO", "OPERASIONAL", "ADMIN", "IT", "UMUM"];
    const posisiOptions = ["GDG ARIES", "GDG TAURUS", "GDG GEMINI", "GDG LEO", "GDG SCORPIO","GDG VIRGO","GDG LIBRA","GDG SCORPIO","GDG SAGITTARIUS"];

    const selectSatuKaryawan = async () => {
        try {
            const res = await axios.get("http://localhost/api/readkaryawan.php");
            if (res.data.STATUS === "BERHASIL") {
                const ditemukan = res.data.DATA.find(k => k.idKaryawan == id);
                if (ditemukan) {
                    setNamaKaryawan(ditemukan.namaKaryawan);
                    setJabatanKaryawan(ditemukan.jabatanKaryawan);
                    setPosisiKaryawan(ditemukan.posisiKaryawan);
                }
            }
        } catch (error) {
            TampilPesan("Info", "Gagal mengambil data!");
        }
    };

   const handleUpdate = async () => {
        const url = "http://localhost/api/updatekaryawan.php";
        const body = { 
            nama_karyawan: namaKaryawan, 
            jabatan_karyawan: jabatanKaryawan, 
            posisi_karyawan: posisiKaryawan, 
            id_karyawan: id 
        };

        if (namaKaryawan.trim() === "" || jabatanKaryawan === "" || posisiKaryawan === "") {
            TampilPesan("Info", "Semua kolom form harus diisi!", "warning");
            return;
        }

        try {
            const res = await axios.post(url, body);

            if (res.data.STATUS === "BERHASIL") {
                navigate("/dashboard/karyawan");
                // Tambahkan "success" di sini untuk warna hijau
                TampilPesan("Sukses", "Data karyawan berhasil diupdate!", "success");
            } else {
                TampilPesan("Gagal", res.data.PESAN || "Gagal mengupdate data!", "error");
            }
        } catch (error) {
            console.error(error);
            TampilPesan("Error", "Terjadi kesalahan koneksi.", "error");
        }
    };

    useEffect(() => { selectSatuKaryawan(); }, []);

    return (
        <Box display="flex" flexDirection="column" width="100dvw" height="100dvh" justifyContent="center" alignItems="center">
            <Toaster />
            <Card.Root width="50dvw" shadow="lg">
                <CardHeader><CardTitle><Text>Form Ubah Data Karyawan</Text></CardTitle></CardHeader>
                <CardBody gapY="10px">
                    <Input value={namaKaryawan} onChange={(e) => setNamaKaryawan(e.target.value)} />

                    {/* Dropdown Jabatan */}
                    <NativeSelect.Root>
                        <NativeSelect.Field value={jabatanKaryawan} onChange={(e) => setJabatanKaryawan(e.target.value)}>
                            {jabatanOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                        </NativeSelect.Field>
                    </NativeSelect.Root>

                    {/* Dropdown Posisi */}
                    <NativeSelect.Root>
                        <NativeSelect.Field value={posisiKaryawan} onChange={(e) => setPosisiKaryawan(e.target.value)}>
                            {posisiOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                        </NativeSelect.Field>
                    </NativeSelect.Root>

                    <Button onClick={handleUpdate} backgroundColor="teal" color="white">Update Karyawan</Button>
                    <Button as={Link} to="/dashboard/karyawan" variant="outline">Kembali</Button>
                </CardBody>
            </Card.Root>
        </Box>
    );
};

export default KaryawanUpdate;
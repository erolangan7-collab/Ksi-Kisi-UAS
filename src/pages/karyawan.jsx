// import { Box, Button, Table, Text } from "@chakra-ui/react";
// import { Toaster } from "../components/ui/toaster";
// import { Link } from "react-router-dom";
// import { TampilPesan } from "../components/ui/services";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const Karyawan = () => {
//     const [dataKaryawan, setDataKaryawan] = useState([]);

//     // Fungsi untuk mengambil semua data karyawan
//     const getKaryawan = async () => {
//         const url = "http://localhost/api/readkaryawan.php";
//         try {
//             const res = await axios.get(url);
//             if (res.data.STATUS === "BERHASIL") {
//                 setDataKaryawan(res.data.DATA);
//             } else {
//                 setDataKaryawan([]);
//             }
//         } catch (error) {
//             console.log(error);
//             TampilPesan("Info", "Gagal memuat data dari server!");
//         }
//     };

//     // Fungsi untuk menghapus data karyawan (soft delete)
//     const handleHapus = async (idKaryawan) => {
//         if (!window.confirm("Apakah Anda yakin ingin menghapus data karyawan ini?")) return;

//         const url = "http://localhost/api/deletekaryawan.php";
//         const body = { id_karyawan: idKaryawan };

//         try {
//             const res = await axios.post(url, body);
//             if (res.data.STATUS === "BERHASIL") {
//                 TampilPesan("Info", "Data karyawan berhasil dihapus!");
//                 getKaryawan(); // Segarkan tabel data
//             } else {
//                 TampilPesan("Info", res.data.PESAN || "Gagal menghapus data!");
//             }
//         } catch (error) {
//             console.log(error);
//             TampilPesan("Info", "Terjadi kesalahan koneksi ke server.");
//         }
//     };

//     useEffect(() => {
//         getKaryawan();
//     }, []);

//     return (
//         <Box p="20px" width="100%">
//             <Toaster />
//             <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb="20px">
//                 Tabel Karyawan
//             </Text>

//             <Button
//                 as={Link}
//                 to="/dashboard/karyawan/create"
//                 backgroundColor="teal"
//                 color="white"
//                 borderRadius="5px"
//                 mb="20px"
//             >
//                 Tambah Karyawan
//             </Button>

//             <Table.Root variant="line" showColumnBorder>
//                 <Table.Header>
//                     <Table.Row>
//                         <Table.ColumnHeader width="50px">No</Table.ColumnHeader>
//                         <Table.ColumnHeader>Nama</Table.ColumnHeader>
//                         <Table.ColumnHeader>Jabatan</Table.ColumnHeader>
//                         <Table.ColumnHeader>Posisi / Divisi</Table.ColumnHeader>
//                         <Table.ColumnHeader width="200px">Actions</Table.ColumnHeader>
//                     </Table.Row>
//                 </Table.Header>
//                 <Table.Body>
//                     {dataKaryawan.length > 0 ? (
//                         dataKaryawan.map((item, index) => (
//                             <Table.Row key={item.idKaryawan}>
//                                 <Table.Cell>{index + 1}</Table.Cell>
//                                 <Table.Cell>{item.namaKaryawan}</Table.Cell>
//                                 <Table.Cell>{item.jabatanKaryawan}</Table.Cell>
//                                 <Table.Cell>{item.posisiKaryawan}</Table.Cell>
//                                 <Table.Cell gapX="10px" display="flex">
//                                     <Button
//                                         as={Link}
//                                         to={`/dashboard/karyawan/update/${item.idKaryawan}`}
//                                         colorScheme="blue"
//                                         backgroundColor="#3b82f6"
//                                         color="white"
//                                         size="sm"
//                                     >
//                                         Ubah
//                                     </Button>
//                                     <Button
//                                         onClick={() => handleHapus(item.idKaryawan)}
//                                         colorScheme="red"
//                                         backgroundColor="#ef4444"
//                                         color="white"
//                                         size="sm"
//                                     >
//                                         Hapus
//                                     </Button>
//                                 </Table.Cell>
//                             </Table.Row>
//                         ))
//                     ) : (
//                         <Table.Row>
//                             <Table.Cell colSpan={5} textAlign="center">
//                                 Data Karyawan Kosong
//                             </Table.Cell>
//                         </Table.Row>
//                     )}
//                 </Table.Body>
//             </Table.Root>
//         </Box>
//     );
// };

// export default Karyawan;


import { Box, Button, Table, Text, Dialog, Portal } from "@chakra-ui/react";
import { Toaster } from "../components/ui/toaster";
import { Link } from "react-router-dom";
import { TampilPesan } from "../components/ui/services";
import { useEffect, useState } from "react";
import axios from "axios";

const Karyawan = () => {
    const [dataKaryawan, setDataKaryawan] = useState([]);

    const getKaryawan = async () => {
        try {
            const res = await axios.get("http://localhost/api/readkaryawan.php");
            if (res.data.STATUS === "BERHASIL") {
                setDataKaryawan(res.data.DATA);
            } else {
                setDataKaryawan([]);
            }
        } catch (error) {
            TampilPesan("Error", "Gagal memuat data!", "error");
        }
    };

    const handleHapus = async (idKaryawan, namaKaryawan) => {
        try {
            const res = await axios.post("http://localhost/api/deletekaryawan.php", { id_karyawan: idKaryawan });
            if (res.data.STATUS === "BERHASIL") {
                TampilPesan("Sukses", `Data "${namaKaryawan}" berhasil dihapus!`, "success");
                getKaryawan();
            } else {
                TampilPesan("Gagal", res.data.PESAN, "error");
            }
        } catch (error) {
            TampilPesan("Error", "Terjadi kesalahan koneksi.", "error");
        }
    };

    useEffect(() => { getKaryawan(); }, []);

    return (
        <Box p="20px" width="100%">
            <Toaster />
            <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb="20px">Tabel Karyawan</Text>
            
            <Button as={Link} to="/dashboard/karyawan/create" bg="teal" color="white" mb="20px">
                Tambah Karyawan
            </Button>

            <Table.Root variant="line">
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader>No</Table.ColumnHeader>
                        <Table.ColumnHeader>Nama</Table.ColumnHeader>
                        <Table.ColumnHeader>Jabatan</Table.ColumnHeader>
                        <Table.ColumnHeader>Posisi</Table.ColumnHeader>
                        <Table.ColumnHeader>Actions</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {dataKaryawan.map((item, index) => (
                        <Table.Row key={item.idKaryawan}>
                            <Table.Cell>{index + 1}</Table.Cell>
                            <Table.Cell>{item.namaKaryawan}</Table.Cell>
                            <Table.Cell>{item.jabatanKaryawan}</Table.Cell>
                            <Table.Cell>{item.posisiKaryawan}</Table.Cell>
                            <Table.Cell display="flex" gap="10px">
                                <Button as={Link} to={`/dashboard/karyawan/update/${item.idKaryawan}`} size="sm" bg="blue.500" color="white">Ubah</Button>
                                
                                {/* Dialog Konfirmasi Hapus */}
                                <Dialog.Root role="alertdialog">
                                    <Dialog.Trigger asChild>
                                        <Button size="sm" bg="red.500" color="white">Hapus</Button>
                                    </Dialog.Trigger>
                                    <Portal>
                                        <Dialog.Backdrop />
                                        <Dialog.Positioner>
                                            <Dialog.Content>
                                                <Dialog.Header><Dialog.Title>Hapus Karyawan</Dialog.Title></Dialog.Header>
                                                <Dialog.Body><Text>Yakin hapus {item.namaKaryawan}?</Text></Dialog.Body>
                                                <Dialog.Footer>
                                                    <Dialog.ActionTrigger asChild><Button variant="outline">Batal</Button></Dialog.ActionTrigger>
                                                    <Button colorPalette="red" onClick={() => handleHapus(item.idKaryawan, item.namaKaryawan)}>Hapus</Button>
                                                </Dialog.Footer>
                                            </Dialog.Content>
                                        </Dialog.Positioner>
                                    </Portal>
                                </Dialog.Root>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </Box>
    );
};

export default Karyawan;
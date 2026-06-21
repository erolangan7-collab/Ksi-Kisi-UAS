import { Box, Button, Card, CardBody, CardHeader, CardTitle, Input, NativeSelect, Text } from "@chakra-ui/react";
import { Toaster } from "../components/ui/toaster";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TampilPesan } from "../components/ui/services";
import axios from "axios";

const InsertKaryawan = () => {
    const navigate = useNavigate();

    const [namaKaryawan, setNamaKaryawan] = useState("");
    const [jabatanKaryawan, setJabatanKaryawan] = useState("");
    const [posisiKaryawan, setPosisiKaryawan] = useState("");

    const jabatanOptions = [
        { label: "DIREKTUR", value: "DIREKTUR" },
        { label: "CEO", value: "CEO" },
        { label: "OPERASIONAL", value: "OPERASIONAL" },
        { label: "ADMIN", value: "ADMIN" },
        { label: "IT", value: "IT" },
        { label: "UMUM", value: "UMUM" }
    ];

    const posisiOptions = [
        { label: "GDG ARIES", value: "GDG ARIES" },
        { label: "GDG TAURUS", value: "GDG TAURUS" },
        { label: "GDG GEMINI", value: "GDG GEMINI" },
        { label: "GDG LEO", value: "GDG LEO" },
        { label: "GDG VIRGO", value: "GDG VIRGO" },
        { label: "GDG LIBRA", value: "GDG LIBRA" },
        { label: "GDG SCORPIO", value: "GDG SCORPIO" },
        { label: "GDG SAGITTARIUS", value: "GDG SAGITTARIUS" },
        { label: "GDG CAPRICORN", value: "GDG CAPRICORN" },
        { label: "GDG AQUARIUS", value: "GDG AQUARIUS" },
        { label: "GDG CANCER", value: "GDG CANCER" },
        { label: "GDG PISCES", value: "GDG PISCES" }

        //  "GDG VIRGO","GDG LIBRA","GDG SCORPIO","GDG SAGITTARIUS"
    ];

    const tambahKaryawan = async () => {
        const url = "http://localhost/api/insertkaryawan.php";
        const body = { 
            nama_karyawan: namaKaryawan, 
            jabatan_karyawan: jabatanKaryawan, 
            posisi_karyawan: posisiKaryawan 
        };

        if(namaKaryawan.trim() === "" || jabatanKaryawan === "" || posisiKaryawan === "") {
            TampilPesan("Info", "Semua kolom wajib diisi!", "error");
            return;
        }
 
        try {
            const res = await axios.post(url, body);

            if(res.data.STATUS === "BERHASIL") {
                TampilPesan("Sukses", "Karyawan berhasil ditambahkan!", "success");
                navigate("/dashboard/karyawan");
            } else {
                TampilPesan("Gagal", res.data.PESAN || "Gagal menyimpan data!", "error");
            }
        } catch (error) {
            console.error(error);
            TampilPesan("Error", "Terjadi kesalahan koneksi ke server.", "error");
        }
    }

    return (
        <Box display="flex" flexDirection="column" width="100vw" height="100vh" justifyContent="center" alignItems="center">
            <Toaster />
            <Card.Root width="500px" shadow="lg" p={4}>
                <CardHeader>
                    <CardTitle><Text fontSize="xl" fontWeight="bold">Form Tambah Karyawan Baru</Text></CardTitle>
                </CardHeader>
                <CardBody gapY="15px">
                    <Input 
                        placeholder="Nama Karyawan" 
                        type="text" 
                        onChange={(e) => setNamaKaryawan(e.target.value)} 
                    />
                    
                    <NativeSelect.Root>
                        <NativeSelect.Field 
                            placeholder="Pilih Jabatan" 
                            onChange={(e) => setJabatanKaryawan(e.target.value)}
                        >
                            {jabatanOptions.map((item, index) => (
                                <option key={index} value={item.value}>{item.label}</option>
                            ))}
                        </NativeSelect.Field>
                    </NativeSelect.Root>

                    <NativeSelect.Root>
                        <NativeSelect.Field 
                            placeholder="Pilih Posisi / Divisi" 
                            onChange={(e) => setPosisiKaryawan(e.target.value)}
                        >
                            {posisiOptions.map((item, index) => (
                                <option key={index} value={item.value}>{item.label}</option>
                            ))}
                        </NativeSelect.Field>
                    </NativeSelect.Root>

                    <Button 
                        backgroundColor="teal" 
                        color="white" 
                        borderRadius="10px" 
                        onClick={tambahKaryawan}
                        mt={4}
                    >
                        <Text>Simpan Data Karyawan</Text>
                    </Button>
                    <Button 
                        as={Link} 
                        to="/dashboard/karyawan" 
                        borderRadius="10px" 
                        variant="outline"
                    >
                        <Text>Kembali</Text>
                    </Button>
                </CardBody>
            </Card.Root>
        </Box>
    );
}

export default InsertKaryawan;
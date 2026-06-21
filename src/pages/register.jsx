import {
    Box,
    Button,
    CardBody,
    CardHeader,
    CardRoot,
    CardTitle,
    Center,
    Input,
    Text,
    Group,
    InputElement
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Toaster } from "../components/ui/toaster";
import { TampilPesan } from "../components/ui/services";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const navigate = useNavigate();
    
    // State untuk menampung input data registrasi
    const [nama, setNama] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = async () => {
        // Validasi sederhana agar input tidak kosong
        if (!nama || !username || !password) {
            TampilPesan("Info", "Semua kolom wajib diisi!");
            return;
        }

        // Sesuaikan dengan alamat URL file API register PHP Anda nanti
        const url = "http://localhost/api/prosesregister.php";
        const body = { nama: nama, username: username, password: password };

        try {
            const response = await axios.post(url, body);
            
            if (response.data.STATUS === "BERHASIL") {
                TampilPesan("Info", "Pendaftaran berhasil! Silakan login.");
                setTimeout(() => {
                    navigate("/"); // Diarahkan kembali ke halaman Login setelah 2 detik
                }, 2000);
            } else {
                TampilPesan("Info", response.data.PESAN || "Gagal mendaftarkan pengguna baru.");
            }
        } catch (error) {
            TampilPesan("Info", "Terjadi kesalahan koneksi backend");
        }
    };

    return (
        <>
            <Box
                backgroundColor="teal"
                width="100dvw"
                height="100dvh"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Toaster />
                <CardRoot
                    borderRadius="20px"
                    backgroundColor="white"
                    color="black"
                    width="400px"
                    shadow="lg"
                >
                    <CardHeader>
                        <CardTitle>
                            <Text textAlign="center" fontWeight="bold" fontSize="xl" mt="2">
                                Daftar Pengguna Baru
                            </Text>
                        </CardTitle>
                    </CardHeader>
                    <CardBody display="flex" flexDirection="column" gapY="12px">
                        
                        {/* Input Nama */}
                        <Input 
                            placeholder="Nama Lengkap" 
                            type="text" 
                            value={nama} 
                            onChange={(e) => setNama(e.target.value)} 
                        />

                        {/* Input Username */}
                        <Input 
                            placeholder="Username" 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                        
                        {/* Input Password + Toggle Mata */}
                        <Group attached width="100%">
                            <Input 
                                placeholder="Password" 
                                type={showPassword ? "text" : "password"} 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                            <InputElement placement="end" mr="2">
                                <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    onClick={() => setShowPassword(!showPassword)}
                                    _hover={{ bg: "transparent" }}
                                    height="100%"
                                >
                                    {showPassword ? <FaEyeSlash color="gray" /> : <FaEye color="gray" />}
                                </Button>
                            </InputElement>
                        </Group>

                        {/* Tombol Daftar */}
                        <Button
                            backgroundColor="teal"
                            color="white"
                            borderRadius="10px"
                            mt="4"
                            onClick={handleRegister}
                        >
                            DAFTAR
                        </Button>

                        {/* Navigasi balik ke Login */}
                        <Text textAlign="center" fontSize="sm" mt="2" color="gray.600">
                            Sudah punya akun?{" "}
                            <Text
                                as={Link}
                                to="/"
                                color="teal"
                                fontWeight="semibold"
                                _hover={{ textDecoration: "underline" }}
                            >
                                Login disini
                            </Text>
                        </Text>
                        
                    </CardBody>
                </CardRoot>
            </Box>
        </>
    );
}

export default Register;
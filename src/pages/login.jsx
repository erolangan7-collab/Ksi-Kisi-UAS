// import {
//   Box,
//   Button,
//   Card,
//   CardBody,
//   CardHeader,
//   CardRoot,
//   CardTitle,
//   Center,
//   Image,
//   Input,
//   Text,
// } from "@chakra-ui/react";

// import { Toaster } from "../components/ui/toaster";

// import logo from "../assets/icons/logo.png";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { TampilPesan } from "./services";

// const Login = () => {
//   const navigate = useNavigate();

//   const handleLogin = async () => {};

//   return (
//     <>
//       <Box
//         backgroundColor="teal"
//         width="100dvw"
//         height="100dvh"
//         display="flex"
//         flexDirection="row"
//         justifyContent="center"
//         alignItems="center"
//       >
//         <Toaster />
//         <CardRoot borderRadius="20px" backgroundColor="white" color="black">
//           <CardHeader>
//             <CardTitle>
//               <Center>
//                 <Image src={logo} width="100px" />
//               </Center>
//               <Text textAlign="center">My Inventory</Text>
//             </CardTitle>
//             <CardBody gapY="10px">
//               <Input placeholder="Username" type="text" />
//               <Input placeholder="Password" type="password" />
//               <Button backgroundColor="teal" color="white" borderRadius="10px">
//                 <Text>LOGIN</Text>
//               </Button>
//             </CardBody>
//           </CardHeader>
//         </CardRoot>
//       </Box>
//     </>
//   );
// };

// export default Login;

// import {
//     Box,
//     Button,
//     CardBody,
//     CardHeader,
//     CardRoot,
//     CardTitle,
//     Center,
//     Image,
//     Input,
//     Text,
//     Group,
//     InputElement
// } from "@chakra-ui/react";
// import axios from "axios";

// import logo from "../assets/icons/logo.png";
// import { useEffect, useState } from "react";
// // Tambahkan Link ke dalam import react-router-dom
// import { useNavigate, Link } from "react-router-dom";
// import { Toaster } from "../components/ui/toaster";
// import { TampilPesan } from "../components/ui/services";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// const Login = () => {
//     const navigate = useNavigate();
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [showPassword, setShowPassword] = useState(false);

//     const handleLogin = async () => {
//         const url = "http://localhost/api/proseslogin.php";
//         const body = { username: username, password: password };
        
//         try {
//             const response = await axios.post(url, body);
//             if(response.data.STATUS === "BERHASIL") {
//                 localStorage.setItem("usernameLS", response.data.DATA[0]["username"]);
//                 localStorage.setItem("namaLS", response.data.DATA[0]["nama"]);
//                 TampilPesan("Info", "Selamat Datang");
//                 setTimeout(() => {
//                     navigate("/dashboard");
//                 }, 2000);
//             } else {
//                 TampilPesan("Info", "Username atau Password salah!");
//             }
//         } catch (error) {
//             TampilPesan("Info", "Terjadi kesalahan koneksi backend");
//         }
//     }

//     useEffect(() => {
//         const cekUserSesi = localStorage.getItem("usernameLS");
//         if(cekUserSesi) {
//             navigate("/dashboard");
//         }
//     }, [navigate]);

//     return (
//         <>
//             <Box
//                 backgroundColor="teal"
//                 width="100dvw"
//                 height="100dvh"
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//             >
//                 <Toaster />
//                 <CardRoot
//                     borderRadius="20px"
//                     backgroundColor="white"
//                     color="black"
//                     width="400px"
//                 >
//                     <CardHeader>
//                         <CardTitle>
//                             <Center>
//                                 <Image src={logo} width="100px" />
//                             </Center>
//                             <Text textAlign="center" fontWeight="bold" fontSize="xl" mt="2">
//                                 My Inventory
//                             </Text>
//                         </CardTitle>
//                     </CardHeader>
//                     <CardBody display="flex" flexDirection="column" gapY="12px">
//                         <Input 
//                             placeholder="Username" 
//                             type="text" 
//                             value={username} 
//                             onChange={(e) => setUsername(e.target.value)} 
//                         />
                        
//                         <Group attached width="100%">
//                             <Input 
//                                 placeholder="Password" 
//                                 type={showPassword ? "text" : "password"} 
//                                 value={password} 
//                                 onChange={(e) => setPassword(e.target.value)} 
//                             />
//                             <InputElement placement="end" mr="2">
//                                 <Button 
//                                     variant="ghost" 
//                                     size="sm" 
//                                     onClick={() => setShowPassword(!showPassword)}
//                                     _hover={{ bg: "transparent" }}
//                                     height="100%"
//                                 >
//                                     {showPassword ? <FaEyeSlash color="gray" /> : <FaEye color="gray" />}
//                                 </Button>
//                             </InputElement>
//                         </Group>

//                         <Button
//                             backgroundColor="teal"
//                             color="white"
//                             borderRadius="10px"
//                             mt="4"
//                             onClick={handleLogin}
//                         >
//                             LOGIN
//                         </Button>

//                         {/* FITUR BARU: Link Register / Daftar Akun */}
//                         <Text textAlign="center" fontSize="sm" mt="2" color="gray.600">
//                             Belum punya akun?{" "}
//                             <Text
//                                 as={Link}
//                                 to="/register"
//                                 color="teal"
//                                 fontWeight="semibold"
//                                 _hover={{ textDecoration: "underline" }}
//                             >
//                                 Daftar sekarang disini
//                             </Text>
//                         </Text>
                        
//                     </CardBody>
//                 </CardRoot>
//             </Box>
//         </>
//     );
// }

// export default Login;

import {
    Box,
    Button,
    CardBody,
    CardHeader,
    CardRoot,
    CardTitle,
    Center,
    Image,
    Input,
    Text,
    Group,
    InputElement
} from "@chakra-ui/react";
import axios from "axios";

import logo from "../assets/icons/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "../components/ui/toaster";
import { TampilPesan } from "../components/ui/services";
// Import icon mata dari react-icons
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // State baru untuk kontrol show/hide password
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async () => {
        const url = "http://localhost/api/proseslogin.php";
        const body = { username: username, password: password };
        
        try {
            const response = await axios.post(url, body);
            if(response.data.STATUS === "BERHASIL") {
                localStorage.setItem("usernameLS", response.data.DATA[0]["username"]);
                localStorage.setItem("namaLS", response.data.DATA[0]["nama"]);
                TampilPesan("Info", "Selamat Datang");
                setTimeout(() => {
                    navigate("/dashboard");
                }, 2000);
            } else {
                TampilPesan("Info", "Username atau Password salah!");
            }
        } catch (error) {
            TampilPesan("Info", "Terjadi kesalahan koneksi backend");
        }
    }

    useEffect(() => {
        const cekUserSesi = localStorage.getItem("usernameLS");
        if(cekUserSesi) {
            navigate("/dashboard");
        }
    }, [navigate]);

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
                >
                    <CardHeader>
                        <CardTitle>
                            <Center>
                                <Image src={logo} width="100px" />
                            </Center>
                            <Text textAlign="center" fontWeight="bold" fontSize="xl" mt="2">
                                My Inventory
                            </Text>
                        </CardTitle>
                    </CardHeader>
                    <CardBody display="flex" flexDirection="column" gapY="12px">
                        <Input 
                            placeholder="Username" 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                        
                        {/* Input Password dengan Fitur Toggle Mata */}
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

                        <Button
                            backgroundColor="teal"
                            color="white"
                            borderRadius="10px"
                            mt="4"
                            onClick={handleLogin}
                        >
                            LOGIN
                        </Button>
                    </CardBody>
                </CardRoot>
            </Box>
        </>
    );
}

export default Login;
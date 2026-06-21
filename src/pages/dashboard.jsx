// import { Box, Button, Text } from "@chakra-ui/react";
// import MyDrawer from "./drawer";
// import { BiLogOut } from "react-icons/bi";
// import { Outlet, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useColorMode } from "../components/ui/color-mode";
// import { CiSun } from "react-icons/ci";
// import person from "../assets/icons/person.png";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [nama, setNama] = useState("Latihan UAS");
//   const { toggleColorMode } = useColorMode();

//   const handleLogOut = () => {
//     localStorage.clear();
//     navigate("/");
//   };

//   return (
//     <>
//       <Box width="100dvw" height="100dvh" display="flex" flexDirection="column">
//         <Box
//           display="flex"
//           flexDirection="row"
//           justifyContent="space-between"
//           padding="10px"
//         >
//           <MyDrawer namadrawer={nama} logodrawer={person} />

//           <Box
//             display="flex"
//             flexDirection="row"
//             alignItems="center"
//             gapX="10px"
//           >
//             <Text fontWeight="bold">My Inventory</Text>
//             <Button variant="outline" onClick={toggleColorMode}>
//               <CiSun />
//             </Button>
//           </Box>

//           <Button
//             variant="outline"
//             onClick={() => {
//               handleLogOut();
//             }}
//           >
//             <BiLogOut />
//           </Button>
//         </Box>
//         <Outlet />
//       </Box>
//     </>
//   );
// };

// export default Dashboard;

import { Box, Button, Text } from "@chakra-ui/react";
import MyDrawer from "./drawer";
import { BiLogOut } from "react-icons/bi";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useColorMode } from "../components/ui/color-mode";
import { CiSun } from "react-icons/ci";
import logo from "../assets/icons/person.png";

const Dashboard = () => {
    const navigate = useNavigate();
    const [nama, setNama] = useState("");
    const {toggleColorMode} = useColorMode();

    const handleLogOut = () => {
        localStorage.clear();
        navigate("/");
    }

    useEffect(() => {
        const username = localStorage.getItem("usernameLS");

        if(username == null) {
            navigate("/");
        } else {
            setNama(localStorage.getItem("namaLS"));
        }
    }, []);
       

       return (
    <>
        <Box width="100dvw" height="100dvh" display="flex" flexDirection="column">
            {/* Navbar Atas */}
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" padding="10px">
                
                {/* 1. Bagian Kiri: Tombol Menu Drawer */}
                <MyDrawer namadrawer={nama} logodrawer={logo} />

                {/* 2. Bagian Tengah: Hanya Teks Judul */}
                <Box>
                    <Text fontWeight="bold">My Inventory</Text>
                </Box>
                
                {/* 3. Bagian Kanan: Tombol Tema dan Tombol Logout Berkumpul di Sini */}
                <Box display="flex" flexDirection="row" alignItems="center" gap="10px">
                    {/* Tombol Ubah Tema Mode (Matahari) */}
                    <Button variant="outline" onClick={toggleColorMode}>
                        <CiSun />
                    </Button>
                    
                    {/* Tombol Keluar / Log Out */}
                    <Button variant="outline" onClick={() => {handleLogOut()}}>
                        <BiLogOut />
                    </Button>
                </Box>

            </Box>
            
            {/* Bagian Konten Halaman */}
            <Outlet />
        </Box>
    </>
);
    // return (
    //     <>
    //         <Box width="100dvw" height="100dvh" display="flex" flexDirection="column">
    //             <Box display="flex" flexDirection="row" justifyContent="space-between" padding="10px">
    //                 <MyDrawer namadrawer={nama} logodrawer={logo} />

    //                 <Box display="flex" flexDirection="row" alignItems="center" gapX="10px">
    //                     <Text fontWeight="bold">My Inventory</Text>
    //                     <Button variant="outline" onClick={toggleColorMode}>
    //                         <CiSun />
    //                     </Button>
    //                 </Box>
    //                 <Button variant="outline" onClick={() => {handleLogOut()}}>
    //                     <BiLogOut />
    //                 </Button>
    //             </Box>
    //             <Outlet />
    //         </Box>
    //     </>
    // );
}

export default Dashboard;
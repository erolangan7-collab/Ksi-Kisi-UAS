import {
  Box,
  Button,
  Center, 
  CloseButton, 
  Dialog, 
  Heading,
  Portal, 
  Table, 
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShowToast } from "../../services/data-services";
import { Toaster } from "../../components/ui/toaster";

const Produk = () => {
  const [products, setProducts] = useState([]); 
  const navigate = useNavigate();

  const fetchDataProduk = async () => {
   const url = "http://localhost/api/penggunaread.php";
    try {
      const response = await axios.get(url);
      if (response.data && response.data.STATUS === "BERHASIL") {
        setProducts(response.data.DATA);
      } else {
        console.error("Failed to fetch products:", response.data.PESAN);
        ShowToast("ERROR", "Gagal mengambil data produk.");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      ShowToast("ERROR", "Terjadi kesalahan saat mengambil data produk.");
    }
  };

  const handleHapus = async (id, namaProduk) => { 
    const url = `http://localhost/api/penggunadelete.php?id=${id}`;

    try {
      const response = await axios.get(url);
      if (response.data.STATUS === "BERHASIL") {
        ShowToast("SUCCESS", `Produk "${namaProduk}" berhasil dihapus.`);
        await fetchDataProduk();
      } else {
        ShowToast("ERROR", `Hapus produk "${namaProduk}" gagal: ${response.data.PESAN}`);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      ShowToast("ERROR", `Terjadi kesalahan saat menghapus produk "${namaProduk}".`);
    }
  };

  useEffect(() => {
    fetchDataProduk();
  }, []);

  const IMAGE_BASE_URL = "http://localhost/api/uploads/";

  return (
    <>
      <Box padding="20px">
        <Heading size="xl" textAlign="center" padding="10px">
          Tabel Produk
        </Heading>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="right"
          padding="20px"
        >
          <Button variant="solid" bg="green.400" as={Link} to="tambah">
            <Text>Tambah Produk</Text>
          </Button>
        </Box>
        <Table.Root size="sm" interactive>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Nama</Table.ColumnHeader>
              <Table.ColumnHeader>Harga</Table.ColumnHeader>
              <Table.ColumnHeader>Stok</Table.ColumnHeader>
              <Table.ColumnHeader>Gambar</Table.ColumnHeader> {}
              <Table.ColumnHeader colSpan={2}>Aksi</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {}
            {products.length > 0 ? (
              products.map((item) => (
                <Table.Row key={item.id}>
                  <Table.Cell>{item.nama}</Table.Cell>
                  <Table.Cell>{item.harga}</Table.Cell>
                  <Table.Cell>{item.stok}</Table.Cell>
                  <Table.Cell>
                    {item.gambar ? (
                      <img
                        src={`${IMAGE_BASE_URL}${item.gambar}`}
                        alt={item.nama} 
                        style={{ maxWidth: "100px", height: "auto", borderRadius: "4px" }} 
                      />
                    ) : (
                      <Text color="gray.500">No Image</Text> 
                    )}
                  </Table.Cell>
                  <Table.Cell>
                    <Box display="flex" flexDirection="row" gap="10px">
                      <Button
                        variant="solid"
                        bg="blue.400"
                        as={Link}
                        to={`edit/${item.id}`}
                      >
                        <Text>Ubah</Text>
                      </Button>
                      <Dialog.Root role="alertdialog">
                        <Dialog.Trigger asChild>
                          <Button variant="solid" bg="red.400" size="sm">
                            Hapus
                          </Button>
                        </Dialog.Trigger>
                        <Portal>
                          <Dialog.Backdrop />
                          <Dialog.Positioner>
                            <Dialog.Content>
                              <Dialog.Header>
                                <Dialog.Title>
                                  Apakah kamu yakin menghapus Data Produk{" "}
                                  {item.nama}
                                </Dialog.Title>
                              </Dialog.Header>
                              <Dialog.Body>
                                <p>
                                  Data yang telah dihapus akan hilang dengan
                                  permanen
                                </p>
                              </Dialog.Body>
                              <Dialog.Footer>
                                <Dialog.ActionTrigger asChild>
                                  <Button variant="outline">Batal</Button>
                                </Dialog.ActionTrigger>
                                <Button
                                  colorPalette="red"
                                  onClick={() => {
                                    handleHapus(item.id, item.nama); 
                                  }}
                                >
                                  Hapus
                                </Button>
                              </Dialog.Footer>
                            </Dialog.Content>
                          </Dialog.Positioner>
                        </Portal>
                      </Dialog.Root>
                    </Box>
                  </Table.Cell>
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell colSpan={5} textAlign="center">
                  <Text>Tidak ada data produk.</Text>
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table.Root>

        <Toaster />
      </Box>
    </>
  );
};

export default Produk;


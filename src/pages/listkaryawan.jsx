import React, { useState, useEffect } from 'react';

const ListKaryawan = () => {
    const [karyawan, setKaryawan] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fungsi untuk mengambil data dari API
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost/api/readkaryawan.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            const result = await response.json();
            
            if (result.STATUS === 'BERHASIL') {
                setKaryawan(result.DATA);
            } else {
                console.error('Pesan Error:', result.PESAN);
            }
        } catch (error) {
            console.error('Gagal mengambil data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) return <p>Memuat data...</p>;

    return (
        <div>
            <h2>Tabel Karyawan</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Jabatan</th>
                        <th>Posisi</th>
                    </tr>
                </thead>
                <tbody>
                    {karyawan.map((item) => (
                        <tr key={item.idKaryawan}>
                            <td>{item.namaKaryawan}</td>
                            <td>{item.jabatanKaryawan}</td>
                            <td>{item.posisiKaryawan}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListKaryawan;
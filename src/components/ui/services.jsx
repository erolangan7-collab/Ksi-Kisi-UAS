// import { toaster } from "./toaster";

// export function TampilPesan(judul, pesan) {
//     return toaster.create({
//         title: judul,
//         description: pesan,
//         duration: 1000
//     });
// }

// src/components/ui/services.jsx
import { toaster } from "./toaster";

export const TampilPesan = (judul, pesan, tipe = "info") => {
    toaster.create({
        title: judul,
        description: pesan,
        type: tipe, // 'success', 'error', 'info'
        duration: 2000,
    });
};
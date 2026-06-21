import { useColorMode } from "../components/ui/color-mode";
import { Toaster, toaster } from "../components/ui/toaster";

export function ShowToast(judul, pesan) {
  return toaster.create({
    title: judul,
    description: pesan,
    duration: 1000,
  });
}

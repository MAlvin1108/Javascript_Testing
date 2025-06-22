function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // kondisi jika n = 0 atau n = 1
    }
    return n * factorial(n - 1); // Fungsi Rekursif
}

// Jangan hapus kode di bawah ini!
export default factorial;

function fibonacci(n) {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];

    let prevSequence = fibonacci(n - 1); // fungsi rekursifnya pada fibonacci
    let nextNumber = prevSequence[prevSequence.length - 1] + prevSequence[prevSequence.length - 2];

    return [...prevSequence, nextNumber]; // menahmbahkan angka berikutnya ke dalam array
}

// Jangan hapus kode di bawah ini!
export default fibonacci;

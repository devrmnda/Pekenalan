document.addEventListener('DOMContentLoaded', function() {
    const tombolInfo = document.getElementById('tombol-info');
    const contactInfo = document.getElementById('contact-info');

    // Tambahkan event listener untuk tombol
    tombolInfo.addEventListener('click', function() {
        // Toggle (mengganti) class 'hidden' pada elemen info kontak
        contactInfo.classList.toggle('hidden');

        // Mengubah teks tombol sesuai kondisi
        if (contactInfo.classList.contains('hidden')) {
            tombolInfo.textContent = 'Lihat Info Kontak';
        } else {
            tombolInfo.textContent = 'Sembunyikan Info Kontak';
        }
    });
});
￼Enter

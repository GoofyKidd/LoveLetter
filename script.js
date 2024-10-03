// JavaScript untuk modal dan musik
const contentModal = document.getElementById("contentModal");
const modalBody = document.getElementById("modalBody");
const startReadingBtn = document.getElementById("startReading");
const nextBtn = document.getElementById("nextBtn");
const closeContent = document.getElementById("closeContent");

const toggleMusicBtn = document.getElementById("toggleMusic");
const backgroundMusic = document.getElementById("backgroundMusic");

// Konten langkah
const contentSteps = [
    {
        title: "Grateful",
        text: "Aku tuh bersyukur bisa bertemu princess, karena belum ada yang bisa buat aku senyaman ini, walaupun princess bukan pacar pertama, tapi princess yang bisa buat aku senyaman ini, setenang ini, sebahagia ini, yang akhirnya ngerasain gimana diapresiasi yang sebelumnya belum pernah aku rasakan. Princess itu jadi yang pertama buat aku, jadi yang pertama bisa buat aku merasa seperti ini, itulah kenapa aku bakal nunggu dan berjuang buat dapatin princess, itu juga kenapa aku selalu bilang, princess orangnya karena emang segitu besar efek setelah bertemu princess. Jadi aku ga pernah berhenti bersyukur karena telah bertemu dengan princess."
    },
    {
        title: "Effort",
        text: "Karena rasa syukur aku telah bertemu princess, aku selalu berusaha buat ngebahagiakan princess, membuat rasa aman, membuat rasa tenang, membuat princess ga merasakan yang namanya tidak dicintai, selalu berusaha memberi perhatian ke princess, karena princess orangnya anxious berat, maka dari itu aku selalu memenuhi kebutuhan princess, memvalidasi, agar raja terakhir kita bisa kalah juga yaitu BOS TRUST ISSUE, gapapa kalau masih belum bisa yakin dan percaya, aku juga gaperlu yang cepat cepat banget, selagi diri princess juga tau kalau aku disini menunggu dan princess tidak mencari orang lain. Mungkin aku gabisa kayak cowo cowo diluar sana yang bisa beliin ini itu, kasih ini itu, tapi aku tetap memberikan apa yang aku mampu buat princess, karena lebih baik aku memberikan yang terbaik kepada rumah ternyaman aku dari pada diri aku sendiri, but of course aku juga bakal upgrade diri untuk jadi versi yang terbaik buat princess. Dan dari semua yang aku lakukan sampai saat ini, aku berterimakasih kepada princess karena selalu mengapresiasi dan menghargai apa yang aku berikan (btw pap lucu dengan bunga kemarin masih ngutang ya). Hal itu yang menjadi kunci kenapa aku masih bertahan sama princess, mau bagaimanapun latar belakang princess, dengan adanya aku disini aku akan memberikan apa yang princess butuhkan."
    },
    {
        title: "Op Break dulu",
        text: "Janji sama aku sebelum lanjut minum air dulu, kalau ga dilakuin nanti princess kena kutukan. Ayo sekarang minum dulu, jangan mager"
    },
    {
        title: "Purpose",
        text: "Tujuan aku disini bukan sekedar untuk membuktikan kepada masa lalu percintaan princess bahwa aku lebih baik atau aku tidak seperti mereka, tapi juga ingin menunjukan princess ada dunia dimana hubungan yang sehat itu seperti apa, hubungan yang bahagia itu seperti apa, hubungan yang saling support itu seperti apa. Karena itu juga yang ingin aku rasakan sendiri, aku juga ingin punya hubungan seperti itu, dan yang aku rasakan adalah kalau sama princess pasti bisa. Maka dari itu aku juga belajar bagiamana memahami princess, memahami tingkah laku princess, kebiasaan princess, dengan begitu aku bisa cinta secara penuh. karena semakin lama kenal dengan princess, semakin tau masa lalu princess, semakin besar pula rasa sayang aku ke princess, semakin bersemangat juga aku untuk mendapatkan princess, semakin membara untuk memberikan apa yang princess belum pernah dapatkan atau sudah lama tidak didapatkan. Aku akan menjadi pasangan yang memberikan full support terhadap apapun yang princess lakukan dan butuhkan, aku akan menyediakan segala kebutuhan princess dengan semampuku."
    },
    {
        title: "Future Plans",
        text: "Banyak yang udah aku rencanakan untuk hubungan kedepan dengan princess, yang mana aku pernah bilang juga ke princess. Akrab dengan keluarga princess, membantu bisnis princess, bisa menjadi cowo yang dipercaya sama keluarga princess. Karena menurut aku, kalau hubungan aku dengan keluarga princess udah baik diawal, insyaallah kedepannya juga udah mudah mempersatukan dua keluarga. Ketika aku dipercaya sama keluarga princess, tanggungjawab aku akan bertambah, jadi nya itu bisa menjadi latihan dan pembelajaran penting untuk kedepannya, ketika keluarga princess udah percaya sama aku untuk menjaga princess, disitu juga aku berasa menjadi cowo yang berhasil. Bukan cuma akrab dengan adik princess aja, aku juga pengen sampai dititik dimana mungkin mama princess yang minta tolong ke aku belanja, atau papa princess yang minta bantu ke aku, atau bahkan diminta tolong untuk jemput adik princess, aku pengen seakrab itu, aku pengen sampai dititik itu. Karena bagi aku sebagai anak perantau, itu seperti punya keluarga juga disini, bener bener ada rumah kedua yang bisa aku datangin, aku tau butuh proses panjang dan banyak lika likunya, tapi aku harap princess juga mau stay dan membantu sampai ke titik itu. Untuk kesekian kalinya, jujur aku ga pernah seyakin dan sesemangat ini menjalani hubungan dengan seseorang, udah cape kandas ditengah jalan terus jadi aku harap kita bisa lalui semua rintangan didepan ya princess."
    },
    {
        title: "THANK YOU",
        text: "Terimakasih karena memberikan aku kesempatan, terimakasih karena udah mempertimbangkan, terimakasih karena mau terbuka sama aku, terimakasih karena telah menjadi support system aku, terimakasih telah hadir dihidup kau, terimakasih karena bisa mengatasi overthinking nya aku, terimakasih karena telah bertahan dengan segala kekurangan aku, terimakasih telah mengerti aku, terimakasih karena telah jujur terhadap diri sendiri ke aku, terimakasih telah bertahan sampai saat ini. Yang aku harapkan adalah, semoga princess juga merasakan bahwa aku orang yang tepat untuk princess. Sekian dulu curahan hati kali ini, kali aja ada part 2? tidak ada yang tau. Love you my favorite little girl, tetap manja mentel mengkek centil ya sama aku, aku suka. Love you banyak banyakk <3 <3 <3 <3"
    }
];

let currentStep = 0;

// Buka modal saat mengklik "Mulai Membaca"
startReadingBtn.onclick = function() {
    contentModal.style.display = "flex";
    currentStep = 0;
    updateModalContent();
}

// Fungsi untuk memperbarui konten modal
function updateModalContent() {
    if (currentStep < contentSteps.length) {
        modalBody.innerHTML = `<h2>${contentSteps[currentStep].title}</h2><p>${contentSteps[currentStep].text}</p>`;
    } else {
        contentModal.style.display = "none"; // Tutup modal jika sudah sampai akhir
    }
}

// Buka konten selanjutnya saat mengklik "Selanjutnya"
nextBtn.onclick = function() {
    currentStep++;
    updateModalContent();
}

// Tutup modal saat mengklik tombol close
closeContent.onclick = function() {
    contentModal.style.display = "none";
}

// Tutup modal saat mengklik area luar modal
window.onclick = function(event) {
    if (event.target === contentModal) {
        contentModal.style.display = "none";
    }
}

// Fungsi untuk mengatur musik
toggleMusicBtn.onclick = function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        toggleMusicBtn.textContent = "Matikan Musik";
    } else {
        backgroundMusic.pause();
        toggleMusicBtn.textContent = "Putar Musik";
    }
}

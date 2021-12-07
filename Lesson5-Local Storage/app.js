// localStorage

// ghi dữ liệu vào localStorage
// lấy dữ liệu ra khỏi localStorage
// xóa localStorage



// Khởi tạo 1 mảng chứa các bài hát mà mình yêu thích
// Lưu vào localStorage
// Thêm bài hát vào localStorage
// Sửa 1 bài hát trong localStorage

let favSong = ["Happy Birthday", "Quốc ca", "Đội ca"];

localStorage.setItem("favoriteSongs", JSON.stringify(favSong));

let favSongLocalStorage = localStorage.getItem("favoriteSongs");

let favSongPush = JSON.parse(favSongLocalStorage);

favSongPush.push("Giấc mơ trưa");

localStorage.setItem("favoriteSongs", JSON.stringify(favSongPush));






// Chữa
let songList = ["Call me baby", "Let me down slowly", "seven years"];
localStorage.setItem("songListLocalStorage", JSON.stringify(songList));

// Lấy ra và thêm
let listFromStorage = localStorage.getItem("songListLocalStorage");
let arrConverted = JSON.parse(listFromStorage);
arrConverted.push("when i grow up");

// Lưu dữ liệu đã được thêm
localStorage.setItem("songListLocalStorage", JSON.stringify(arrConverted));

let listFromStorage2 = localStorage.getItem("songListLocalStorage");
let arrConverted2 = JSON.parse(listFromStorage2);
arrConverted2[0] = "stay";
console.log(arrConverted2)

localStorage.setItem("songListLocalStorage", JSON.stringify(arrConverted2));

// Xóa dữ liệu trong localStorage
localStorage.removeItem("songListLocalStorage")